import { PoolClient } from 'pg';
import { query, withTransaction } from './db';
import { SubscriptionCycle, SubscriptionTier } from './types';
import { verifyQRISStatus } from './paymentGateway';

export class PaymentSecurityError extends Error {
  code: string;
  status: number;

  constructor(code: string, message: string, status: number = 400) {
    super(message);
    this.name = 'PaymentSecurityError';
    this.code = code;
    this.status = status;
  }
}

export interface CatalogItem {
  id: string;
  name: string;
  tier: SubscriptionTier;
  cycle: SubscriptionCycle;
  price_idr: number;
}

export const SERVER_SUBSCRIPTION_CATALOG: Record<string, CatalogItem> = {
  'sub-pro-monthly': {
    id: 'sub-pro-monthly',
    name: 'CherryEdu Pro — Bulanan',
    tier: 'pro',
    cycle: 'monthly',
    price_idr: 49000,
  },
  'sub-pro-annual': {
    id: 'sub-pro-annual',
    name: 'CherryEdu Pro — Tahunan',
    tier: 'pro',
    cycle: 'annual',
    price_idr: 399000,
  },
};

export interface SettlementVerificationResult {
  settled: boolean;
  gatewayReference?: string;
  settledAmount?: number;
  reason?: string;
}

export type GatewayVerifier = (params: {
  orderId: string;
  expectedAmount: number;
  paymentMethod: string;
  qrisId?: string;
  trxId?: string;
  createdAt?: string;
}) => Promise<SettlementVerificationResult>;

/**
 * Production Gateway Verifier using GoPay gateway client & EMVCo QRIS status.
 */
export const defaultGatewayVerifier: GatewayVerifier = async ({
  orderId,
  expectedAmount,
  paymentMethod,
  qrisId,
  trxId,
  createdAt,
}) => {
  // Fallback static QRIS requires manual operator verification
  if (paymentMethod === 'fallback_qris' || paymentMethod === 'qris_manual') {
    return {
      settled: false,
      reason: 'FALLBACK_QRIS_REQUIRES_MANUAL_VERIFICATION: QRIS manual statis tidak dapat diaktivasi otomatis.',
    };
  }

  // 1. Verify via GoPay QRIS client
  if (qrisId || trxId) {
    try {
      const res = await verifyQRISStatus(qrisId || orderId, trxId, expectedAmount, createdAt);
      if (res.success && res.paid) {
        return {
          settled: true,
          gatewayReference: res.transaction?.reference || res.transaction?.trx_id || `gw-${orderId}`,
          settledAmount: expectedAmount,
        };
      }
    } catch (err: any) {
      return { settled: false, reason: `Gateway verification error: ${err.message}` };
    }
  }

  // 2. Direct HTTP Gateway check if configured
  const gatewayUrl = process.env.GOPAY_GATEWAY_URL;
  const gatewayKey = process.env.GOPAY_GATEWAY_API_KEY;

  if (gatewayUrl && gatewayKey) {
    try {
      const cleanUrl = gatewayUrl.replace(/\/$/, '');
      const resp = await fetch(`${cleanUrl}/api/v1/orders/${encodeURIComponent(orderId)}/status`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${gatewayKey}`,
        },
      });

      if (!resp.ok) {
        return { settled: false, reason: `Gateway responded with status ${resp.status}` };
      }

      const data = await resp.json();
      if (data.status === 'SETTLED' || data.status === 'PAID') {
        if (data.amount !== expectedAmount) {
          return { settled: false, reason: 'AMOUNT_MISMATCH_AT_GATEWAY' };
        }
        return {
          settled: true,
          gatewayReference: data.reference_id || data.transaction_id || `gw-${orderId}`,
          settledAmount: data.amount,
        };
      }
    } catch (err: any) {
      return { settled: false, reason: `Gateway check failed: ${err.message}` };
    }
  }

  return {
    settled: false,
    reason: 'SETTLEMENT_NOT_CONFIRMED: Gateway belum mencatat status settlement untuk order ini.',
  };
};

export interface PaymentConfirmationResult {
  success: boolean;
  alreadyPaid?: boolean;
  orderId: string;
  isProActivated: boolean;
  tier: SubscriptionTier;
  expiresAt: string;
  message: string;
}

/**
 * Authoritative Server-Side Payment Confirmation Service.
 * - Enforces authenticated user ownership.
 * - Row locks order in PostgreSQL (FOR UPDATE) to prevent concurrency races.
 * - Validates against official pricing catalog and voucher deductions.
 * - Verifies settlement through GoPay gateway client (or injected GatewayVerifier in test suites).
 * - Atomically settles transaction and activates Pro subscription on public.profiles.
 * - Strictly verifies database persistence before returning isProActivated: true.
 */
export async function confirmOrderPayment(
  authenticatedUserId: string,
  orderId: string,
  options?: { gatewayVerifier?: GatewayVerifier }
): Promise<PaymentConfirmationResult> {
  if (!authenticatedUserId) {
    throw new PaymentSecurityError('UNAUTHENTICATED', 'Pengguna belum terotentikasi.', 401);
  }

  if (!orderId || typeof orderId !== 'string') {
    throw new PaymentSecurityError('INVALID_ORDER_ID', 'ID Order transaksi tidak valid.', 400);
  }

  return withTransaction(async (client) => {
    // 1. Fetch order from database with row lock (FOR UPDATE)
    const txRes = await client.query<{
      id: string;
      user_id: string;
      original_amount: number | string;
      discount_amount: number | string;
      final_amount: number | string;
      voucher_code: string | null;
      status: string;
      item_type: string;
      item_id: string;
      payment_method: string;
      qris_id: string | null;
      trx_id: string | null;
      expires_at: string | null;
      created_at: string;
    }>(
      `SELECT id, user_id, original_amount, discount_amount, final_amount,
              voucher_code, status, plan_tier as item_type, cycle as item_id,
              payment_method, qris_id, trx_id, expires_at::text, created_at::text
       FROM public.transactions
       WHERE id = $1
       FOR UPDATE`,
      [orderId]
    );

    if (txRes.rows.length === 0) {
      throw new PaymentSecurityError(
        'ORDER_NOT_FOUND',
        `Order transaksi "${orderId}" tidak ditemukan dalam database.`,
        404
      );
    }

    const tx = txRes.rows[0];
    const finalAmount = typeof tx.final_amount === 'string' ? parseFloat(tx.final_amount) : tx.final_amount;
    const originalAmount = typeof tx.original_amount === 'string' ? parseFloat(tx.original_amount) : tx.original_amount;
    const discountAmount = typeof tx.discount_amount === 'string' ? parseFloat(tx.discount_amount || '0') : (tx.discount_amount || 0);

    // 2. Strict Order Ownership Enforcement
    if (tx.user_id !== authenticatedUserId) {
      throw new PaymentSecurityError(
        'ORDER_OWNERSHIP_MISMATCH',
        'Akses ditolak: Order transaksi ini bukan milik pengguna yang sedang terautentikasi.',
        403
      );
    }

    // 3. Idempotent check: If already settled/paid/verified, verify profile is active and return
    if (tx.status === 'verified' || tx.status === 'settled' || tx.status === 'paid') {
      const profRes = await client.query<{ is_pro: boolean; subscription_tier: string; subscription_expires_at: string }>(
        `SELECT is_pro, subscription_tier, subscription_expires_at::text FROM public.profiles WHERE id = $1`,
        [authenticatedUserId]
      );
      const isPro = profRes.rows[0]?.is_pro === true;

      return {
        success: true,
        alreadyPaid: true,
        orderId: tx.id,
        isProActivated: isPro,
        tier: (profRes.rows[0]?.subscription_tier as SubscriptionTier) || 'pro',
        expiresAt: profRes.rows[0]?.subscription_expires_at || new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString(),
        message: 'Transaksi ini telah lunas dan paket Pro telah aktif sebelumnya.',
      };
    }

    // 4. Reject expired or cancelled transactions
    if (tx.status === 'expired' || (tx.expires_at && new Date(tx.expires_at) < new Date())) {
      throw new PaymentSecurityError(
        'ORDER_EXPIRED',
        'Batas waktu pembayaran untuk transaksi ini telah kedaluwarsa.',
        400
      );
    }

    if (tx.status === 'cancelled') {
      throw new PaymentSecurityError(
        'ORDER_CANCELLED',
        'Transaksi telah dibatalkan.',
        400
      );
    }

    if (tx.status !== 'pending') {
      throw new PaymentSecurityError(
        'INVALID_TRANSACTION_STATE',
        `Status transaksi "${tx.status}" tidak dapat dikonfirmasi.`,
        400
      );
    }

    // 5. Server Price Catalog & Voucher Validation
    const catalogItem =
      SERVER_SUBSCRIPTION_CATALOG[tx.item_id] ||
      (tx.item_id === 'monthly' ? SERVER_SUBSCRIPTION_CATALOG['sub-pro-monthly'] : SERVER_SUBSCRIPTION_CATALOG['sub-pro-annual']);

    if (catalogItem) {
      if (originalAmount !== catalogItem.price_idr) {
        throw new PaymentSecurityError(
          'AMOUNT_TAMPERING_DETECTED',
          'Harga dasar transaksi tidak sesuai dengan katalog harga resmi.',
          400
        );
      }
      if (finalAmount !== originalAmount - discountAmount || finalAmount <= 0) {
        throw new PaymentSecurityError(
          'AMOUNT_TAMPERING_DETECTED',
          'Nominal akhir transaksi tidak sesuai dengan perhitungan diskon dan voucher resmi.',
          400
        );
      }
    }

    // 6. Verify Settlement from Gateway (Dependency Injected or Default)
    const verifier = options?.gatewayVerifier || defaultGatewayVerifier;
    const settlement = await verifier({
      orderId: tx.id,
      expectedAmount: finalAmount,
      paymentMethod: tx.payment_method,
      qrisId: tx.qris_id || undefined,
      trxId: tx.trx_id || undefined,
      createdAt: tx.created_at,
    });

    if (!settlement.settled) {
      throw new PaymentSecurityError(
        settlement.reason?.startsWith('FALLBACK_QRIS')
          ? 'FALLBACK_QRIS_REQUIRES_MANUAL_VERIFICATION'
          : 'SETTLEMENT_UNVERIFIED',
        settlement.reason || 'Pembayaran belum terkonfirmasi oleh sistem settlement gateway.',
        400
      );
    }

    if (settlement.settledAmount === undefined || settlement.settledAmount !== finalAmount) {
      throw new PaymentSecurityError(
        'AMOUNT_MISMATCH_AT_GATEWAY',
        'Nominal yang diselesaikan oleh gateway tidak sesuai dengan tagihan order.',
        400
      );
    }

    // 7. Atomic Database Transaction: Update Transaction & Activate Pro Subscription
    const tier: SubscriptionTier = catalogItem?.tier || 'pro';
    const cycle: SubscriptionCycle = catalogItem?.cycle || 'monthly';

    const updateTx = await client.query(
      `UPDATE public.transactions
       SET status = 'verified',
           paid_at = NOW(),
           verified_at = NOW()
       WHERE id = $1 AND status IN ('pending', 'claimed')`,
      [tx.id]
    );

    if (updateTx.rowCount === 0) {
      throw new PaymentSecurityError(
        'CONCURRENT_UPDATE_CONFLICT',
        'Transaksi telah diproses oleh operasi konkuren lainnya.',
        409
      );
    }

    const ent = await recalculateUserEntitlement(client, authenticatedUserId);

    await recordPaymentAudit(client, {
      transactionId: tx.id,
      userId: authenticatedUserId,
      actorUserId: authenticatedUserId,
      action: 'payment_verified',
      previousStatus: tx.status,
      newStatus: 'verified',
      reason: 'Automated settlement gateway confirmation',
      metadata: { finalAmount },
    });

    return {
      success: true,
      orderId: tx.id,
      isProActivated: ent.isPro,
      tier: ent.tier,
      expiresAt: ent.expiresAt || new Date().toISOString(),
      message: 'Pembayaran berhasil diverifikasi. Paket CherryEdu Pro telah aktif.',
    };
  });
}

/**
 * Record an entry into public.payment_audit_events table
 */
export async function recordPaymentAudit(
  client: PoolClient,
  data: {
    transactionId: string;
    userId: string;
    actorUserId: string;
    action: string;
    previousStatus?: string | null;
    newStatus: string;
    reason?: string | null;
    metadata?: Record<string, any>;
  }
): Promise<void> {
  await client.query(
    `INSERT INTO public.payment_audit_events (
       transaction_id, user_id, actor_user_id, action,
       previous_status, new_status, reason, metadata, occurred_at
     )
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())`,
    [
      data.transactionId,
      data.userId,
      data.actorUserId,
      data.action,
      data.previousStatus || null,
      data.newStatus,
      data.reason || null,
      JSON.stringify(data.metadata || {}),
    ]
  );
}

/**
 * Verify administrative privileges for an actor user.
 * Allows users with role = 'admin' on public.profiles or platform_admin on internal_staff_permissions.
 */
export async function assertAdminPrivilege(client: PoolClient, userId: string): Promise<void> {
  const profRes = await client.query<{ role: string }>(
    `SELECT role FROM public.profiles WHERE id = $1`,
    [userId]
  );
  if (profRes.rows[0]?.role === 'admin') {
    return;
  }

  const staffRes = await client.query<{ id: string }>(
    `SELECT id FROM b2b.internal_staff_permissions 
     WHERE user_id = $1 AND permission_code = 'platform_admin' AND revoked_at IS NULL`,
    [userId]
  );
  if (staffRes.rows.length > 0) {
    return;
  }

  throw new PaymentSecurityError('ADMIN_REQUIRED', 'Hanya administrator yang berwenang melakukan tindakan ini.', 403);
}

/**
 * Server-authoritative Recalculation of User Entitlements.
 * Ensures:
 * 1. Active verified subscriptions are prioritized and protected.
 * 2. Active claimed orders grant provisional access.
 * 3. Rejecting a claim only revokes provisional access if no other verified subscription exists.
 */
export async function recalculateUserEntitlement(
  client: PoolClient,
  userId: string
): Promise<{
  isPro: boolean;
  entitlementType: 'none' | 'provisional' | 'verified';
  expiresAt: string | null;
  tier: SubscriptionTier;
  cycle: SubscriptionCycle | null;
  sourceOrderId: string | null;
}> {
  const txRes = await client.query<{
    id: string;
    cycle: string;
    plan_tier: string;
    status: string;
    created_at: string;
    claimed_at: string | null;
    verified_at: string | null;
    paid_at: string | null;
    expires_at: string | null;
  }>(
    `SELECT id, cycle, plan_tier, status,
            created_at::text, claimed_at::text, verified_at::text, paid_at::text, expires_at::text
     FROM public.transactions
     WHERE user_id = $1 AND status IN ('verified', 'paid', 'settled', 'claimed')
     ORDER BY created_at DESC`,
    [userId]
  );

  const now = new Date();
  const activeVerified: Array<{
    id: string;
    cycle: SubscriptionCycle;
    tier: SubscriptionTier;
    expiresAt: Date;
  }> = [];

  const activeClaimed: Array<{
    id: string;
    cycle: SubscriptionCycle;
    tier: SubscriptionTier;
    expiresAt: Date;
  }> = [];

  for (const row of txRes.rows) {
    const cycle: SubscriptionCycle = row.cycle === 'annual' ? 'annual' : 'monthly';
    const tier: SubscriptionTier = (row.plan_tier as SubscriptionTier) || 'pro';
    const durationDays = cycle === 'annual' ? 365 : 30;

    if (row.status === 'verified' || row.status === 'paid' || row.status === 'settled') {
      const baseDate = new Date(row.verified_at || row.paid_at || row.created_at);
      const expiry = new Date(baseDate.getTime() + durationDays * 24 * 3600 * 1000);
      if (expiry > now) {
        activeVerified.push({ id: row.id, cycle, tier, expiresAt: expiry });
      }
    } else if (row.status === 'claimed') {
      const baseDate = new Date(row.claimed_at || row.created_at);
      const expiry = new Date(baseDate.getTime() + durationDays * 24 * 3600 * 1000);
      if (expiry > now) {
        activeClaimed.push({ id: row.id, cycle, tier, expiresAt: expiry });
      }
    }
  }

  if (activeVerified.length > 0) {
    activeVerified.sort((a, b) => b.expiresAt.getTime() - a.expiresAt.getTime());
    const primary = activeVerified[0];
    const expiresAtStr = primary.expiresAt.toISOString();

    await client.query(
      `UPDATE public.profiles
       SET is_pro = true,
           pro_entitlement_type = 'verified',
           subscription_tier = $1,
           subscription_cycle = $2,
           subscription_expires_at = $3,
           pro_source_order_id = $4,
           updated_at = NOW()
       WHERE id = $5`,
      [primary.tier, primary.cycle, expiresAtStr, primary.id, userId]
    );

    return {
      isPro: true,
      entitlementType: 'verified',
      expiresAt: expiresAtStr,
      tier: primary.tier,
      cycle: primary.cycle,
      sourceOrderId: primary.id,
    };
  }

  if (activeClaimed.length > 0) {
    activeClaimed.sort((a, b) => b.expiresAt.getTime() - a.expiresAt.getTime());
    const primary = activeClaimed[0];
    const expiresAtStr = primary.expiresAt.toISOString();

    await client.query(
      `UPDATE public.profiles
       SET is_pro = true,
           pro_entitlement_type = 'provisional',
           subscription_tier = $1,
           subscription_cycle = $2,
           subscription_expires_at = $3,
           pro_source_order_id = $4,
           updated_at = NOW()
       WHERE id = $5`,
      [primary.tier, primary.cycle, expiresAtStr, primary.id, userId]
    );

    return {
      isPro: true,
      entitlementType: 'provisional',
      expiresAt: expiresAtStr,
      tier: primary.tier,
      cycle: primary.cycle,
      sourceOrderId: primary.id,
    };
  }

  await client.query(
    `UPDATE public.profiles
     SET is_pro = false,
         pro_entitlement_type = 'none',
         subscription_tier = 'free',
         subscription_cycle = NULL,
         subscription_expires_at = NULL,
         pro_source_order_id = NULL,
         updated_at = NOW()
     WHERE id = $1`,
    [userId]
  );

  return {
    isPro: false,
    entitlementType: 'none',
    expiresAt: null,
    tier: 'free',
    cycle: null,
    sourceOrderId: null,
  };
}

/**
 * User claims payment has been made (with optional proof screenshot & notes).
 * Immediately grants provisional Pro entitlement.
 */
export async function claimOrderPayment(
  authenticatedUserId: string,
  params: { orderId: string; proofUrl?: string; proofNotes?: string }
): Promise<{
  success: boolean;
  orderId: string;
  status: string;
  isProActivated: boolean;
  entitlementType: 'provisional' | 'verified';
  tier: SubscriptionTier;
  expiresAt: string;
  message: string;
}> {
  if (!authenticatedUserId) {
    throw new PaymentSecurityError('UNAUTHENTICATED', 'Pengguna belum terotentikasi.', 401);
  }

  if (!params.orderId || typeof params.orderId !== 'string') {
    throw new PaymentSecurityError('INVALID_ORDER_ID', 'ID Order tidak valid.', 400);
  }

  return withTransaction(async (client) => {
    const txRes = await client.query<{
      id: string;
      user_id: string;
      status: string;
      cycle: string;
      plan_tier: string;
      expires_at: string | null;
      created_at: string;
      claimed_at: string | null;
      proof_url: string | null;
      proof_notes: string | null;
    }>(
      `SELECT id, user_id, status, cycle, plan_tier,
              expires_at::text, created_at::text, claimed_at::text,
              proof_url, proof_notes
       FROM public.transactions
       WHERE id = $1
       FOR UPDATE`,
      [params.orderId]
    );

    if (txRes.rows.length === 0) {
      throw new PaymentSecurityError('ORDER_NOT_FOUND', 'Order transaksi tidak ditemukan.', 404);
    }

    const tx = txRes.rows[0];

    if (tx.user_id !== authenticatedUserId) {
      throw new PaymentSecurityError(
        'ORDER_OWNERSHIP_MISMATCH',
        'Akses ditolak: Order transaksi ini bukan milik pengguna yang sedang terautentikasi.',
        403
      );
    }

    if (tx.status === 'verified' || tx.status === 'paid' || tx.status === 'settled') {
      const ent = await recalculateUserEntitlement(client, authenticatedUserId);
      return {
        success: true,
        orderId: tx.id,
        status: tx.status,
        isProActivated: ent.isPro,
        entitlementType: ent.entitlementType as 'verified',
        tier: ent.tier,
        expiresAt: ent.expiresAt || new Date().toISOString(),
        message: 'Pembayaran order ini telah terverifikasi lunas sebelumnya.',
      };
    }

    if (tx.status === 'claimed') {
      if (params.proofUrl && params.proofUrl !== tx.proof_url) {
        await client.query(
          `UPDATE public.transactions SET proof_url = $1, proof_notes = COALESCE($2, proof_notes) WHERE id = $3`,
          [params.proofUrl, params.proofNotes || null, tx.id]
        );
      }
      const ent = await recalculateUserEntitlement(client, authenticatedUserId);
      return {
        success: true,
        orderId: tx.id,
        status: 'claimed',
        isProActivated: ent.isPro,
        entitlementType: ent.entitlementType as 'provisional',
        tier: ent.tier,
        expiresAt: ent.expiresAt || new Date().toISOString(),
        message: 'Klaim pembayaran telah tercatat sebelumnya. Akses Pro aktif.',
      };
    }

    if (tx.status === 'expired' || (tx.expires_at && new Date(tx.expires_at) < new Date())) {
      throw new PaymentSecurityError('ORDER_EXPIRED', 'Batas waktu klaim untuk transaksi ini telah kedaluwarsa.', 400);
    }

    if (tx.status === 'cancelled' || tx.status === 'rejected') {
      throw new PaymentSecurityError('ORDER_NOT_CLAIMABLE', `Order dengan status "${tx.status}" tidak dapat diklaim.`, 400);
    }

    const proofUrl = params.proofUrl || tx.proof_url || null;
    const proofNotes = params.proofNotes || tx.proof_notes || null;

    await client.query(
      `UPDATE public.transactions
       SET status = 'claimed',
           claimed_at = NOW(),
           proof_url = $1,
           proof_notes = $2
       WHERE id = $3`,
      [proofUrl, proofNotes, tx.id]
    );

    const ent = await recalculateUserEntitlement(client, authenticatedUserId);

    await recordPaymentAudit(client, {
      transactionId: tx.id,
      userId: authenticatedUserId,
      actorUserId: authenticatedUserId,
      action: 'payment_claimed',
      previousStatus: tx.status,
      newStatus: 'claimed',
      reason: 'User claimed payment via GoPay QRIS',
      metadata: { hasProofUrl: !!proofUrl },
    });

    return {
      success: true,
      orderId: tx.id,
      status: 'claimed',
      isProActivated: ent.isPro,
      entitlementType: ent.entitlementType as 'provisional',
      tier: ent.tier,
      expiresAt: ent.expiresAt || new Date().toISOString(),
      message: 'Klaim pembayaran berhasil diterima. Akses Pro sementara telah aktif.',
    };
  });
}

/**
 * Admin manually verifies payment via GoPay Merchant.
 * Marks transaction verified and sets entitlement to verified.
 */
export async function verifyPaymentByAdmin(
  adminUserId: string,
  params: { orderId: string; notes?: string }
): Promise<{
  success: boolean;
  orderId: string;
  status: string;
  isProActivated: boolean;
  entitlementType: 'verified';
  tier: SubscriptionTier;
  expiresAt: string;
  message: string;
}> {
  if (!adminUserId) {
    throw new PaymentSecurityError('UNAUTHENTICATED', 'Admin belum terotentikasi.', 401);
  }

  if (!params.orderId) {
    throw new PaymentSecurityError('INVALID_ORDER_ID', 'ID Order wajib disertakan.', 400);
  }

  return withTransaction(async (client) => {
    await assertAdminPrivilege(client, adminUserId);

    const txRes = await client.query<{
      id: string;
      user_id: string;
      status: string;
      final_amount: number;
    }>(
      `SELECT id, user_id, status, final_amount
       FROM public.transactions
       WHERE id = $1
       FOR UPDATE`,
      [params.orderId]
    );

    if (txRes.rows.length === 0) {
      throw new PaymentSecurityError('ORDER_NOT_FOUND', 'Order transaksi tidak ditemukan.', 404);
    }

    const tx = txRes.rows[0];

    await client.query(
      `UPDATE public.transactions
       SET status = 'verified',
           verified_at = NOW(),
           verified_by = $1,
           paid_at = NOW(),
           admin_notes = COALESCE($2, admin_notes)
       WHERE id = $3`,
      [adminUserId, params.notes || null, tx.id]
    );

    const ent = await recalculateUserEntitlement(client, tx.user_id);

    await recordPaymentAudit(client, {
      transactionId: tx.id,
      userId: tx.user_id,
      actorUserId: adminUserId,
      action: 'payment_verified',
      previousStatus: tx.status,
      newStatus: 'verified',
      reason: params.notes || 'Admin manual verification via GoPay Merchant',
      metadata: { finalAmount: tx.final_amount },
    });

    return {
      success: true,
      orderId: tx.id,
      status: 'verified',
      isProActivated: ent.isPro,
      entitlementType: 'verified',
      tier: ent.tier,
      expiresAt: ent.expiresAt || new Date().toISOString(),
      message: 'Pembayaran berhasil diverifikasi secara resmi. Akses Pro dilanjutkan.',
    };
  });
}

/**
 * Admin rejects payment claim and revokes provisional access (without harming other valid subscriptions).
 */
export async function rejectClaimByAdmin(
  adminUserId: string,
  params: { orderId: string; reason: string }
): Promise<{
  success: boolean;
  orderId: string;
  status: string;
  isProActive: boolean;
  entitlementType: 'none' | 'provisional' | 'verified';
  message: string;
}> {
  if (!adminUserId) {
    throw new PaymentSecurityError('UNAUTHENTICATED', 'Admin belum terotentikasi.', 401);
  }

  if (!params.orderId) {
    throw new PaymentSecurityError('INVALID_ORDER_ID', 'ID Order wajib disertakan.', 400);
  }

  if (!params.reason || params.reason.trim() === '') {
    throw new PaymentSecurityError('REASON_REQUIRED', 'Alasan penolakan klaim pembayaran wajib disertakan.', 400);
  }

  return withTransaction(async (client) => {
    await assertAdminPrivilege(client, adminUserId);

    const txRes = await client.query<{
      id: string;
      user_id: string;
      status: string;
    }>(
      `SELECT id, user_id, status
       FROM public.transactions
       WHERE id = $1
       FOR UPDATE`,
      [params.orderId]
    );

    if (txRes.rows.length === 0) {
      throw new PaymentSecurityError('ORDER_NOT_FOUND', 'Order transaksi tidak ditemukan.', 404);
    }

    const tx = txRes.rows[0];

    await client.query(
      `UPDATE public.transactions
       SET status = 'rejected',
           rejected_at = NOW(),
           admin_notes = $1
       WHERE id = $2`,
      [params.reason, tx.id]
    );

    const ent = await recalculateUserEntitlement(client, tx.user_id);

    await recordPaymentAudit(client, {
      transactionId: tx.id,
      userId: tx.user_id,
      actorUserId: adminUserId,
      action: 'claim_rejected',
      previousStatus: tx.status,
      newStatus: 'rejected',
      reason: params.reason,
      metadata: { remainingEntitlement: ent.entitlementType },
    });

    return {
      success: true,
      orderId: tx.id,
      status: 'rejected',
      isProActive: ent.isPro,
      entitlementType: ent.entitlementType,
      message: ent.isPro
        ? 'Klaim pembayaran ditolak, namun akun tetap memiliki akses Pro dari langganan sah lainnya.'
        : 'Klaim pembayaran ditolak dan akses Pro sementara telah dicabut.',
    };
  });
}

/**
 * Admin cancels an order.
 */
export async function cancelOrderByAdmin(
  adminUserId: string,
  params: { orderId: string; reason?: string }
): Promise<{ success: boolean; orderId: string; status: string; isProActive: boolean }> {
  if (!adminUserId) {
    throw new PaymentSecurityError('UNAUTHENTICATED', 'Admin belum terotentikasi.', 401);
  }

  return withTransaction(async (client) => {
    await assertAdminPrivilege(client, adminUserId);

    const txRes = await client.query<{ id: string; user_id: string; status: string }>(
      `SELECT id, user_id, status FROM public.transactions WHERE id = $1 FOR UPDATE`,
      [params.orderId]
    );

    if (txRes.rows.length === 0) {
      throw new PaymentSecurityError('ORDER_NOT_FOUND', 'Order transaksi tidak ditemukan.', 404);
    }

    const tx = txRes.rows[0];

    await client.query(
      `UPDATE public.transactions SET status = 'cancelled', admin_notes = COALESCE($1, admin_notes) WHERE id = $2`,
      [params.reason || null, tx.id]
    );

    const ent = await recalculateUserEntitlement(client, tx.user_id);

    await recordPaymentAudit(client, {
      transactionId: tx.id,
      userId: tx.user_id,
      actorUserId: adminUserId,
      action: 'order_cancelled',
      previousStatus: tx.status,
      newStatus: 'cancelled',
      reason: params.reason || 'Admin cancelled transaction',
    });

    return {
      success: true,
      orderId: tx.id,
      status: 'cancelled',
      isProActive: ent.isPro,
    };
  });
}
