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

    // 3. Idempotent check: If already settled/paid, verify profile is active and return
    if (tx.status === 'settled' || tx.status === 'paid') {
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

    if (settlement.settledAmount !== undefined && settlement.settledAmount !== finalAmount) {
      throw new PaymentSecurityError(
        'AMOUNT_MISMATCH_AT_GATEWAY',
        'Nominal yang diselesaikan oleh gateway tidak sesuai dengan tagihan order.',
        400
      );
    }

    // 7. Atomic Database Transaction: Update Transaction & Activate Pro Subscription
    const subscriptionDays = catalogItem?.cycle === 'annual' ? 365 : 30;
    const expiresAt = new Date(Date.now() + subscriptionDays * 24 * 3600 * 1000).toISOString();
    const tier: SubscriptionTier = catalogItem?.tier || 'pro';
    const cycle: SubscriptionCycle = catalogItem?.cycle || 'monthly';

    const updateTx = await client.query(
      `UPDATE public.transactions
       SET status = 'settled',
           paid_at = NOW()
       WHERE id = $1 AND status = 'pending'`,
      [tx.id]
    );

    if (updateTx.rowCount === 0) {
      throw new PaymentSecurityError(
        'CONCURRENT_UPDATE_CONFLICT',
        'Transaksi telah diproses oleh operasi konkuren lainnya.',
        409
      );
    }

    // Activate Pro status on profiles table
    const updateProfile = await client.query(
      `UPDATE public.profiles
       SET is_pro = true,
           subscription_tier = $1,
           subscription_cycle = $2,
           subscription_expires_at = $3,
           updated_at = NOW()
       WHERE id = $4`,
      [tier, cycle, expiresAt, authenticatedUserId]
    );

    if (updateProfile.rowCount === 0) {
      throw new PaymentSecurityError(
        'PROFILE_UPDATE_FAILED',
        'Gagal memperbarui status langganan pada profil pengguna.',
        500
      );
    }

    // Double-check profile is active in DB before returning
    const verifyProfile = await client.query<{ is_pro: boolean }>(
      `SELECT is_pro FROM public.profiles WHERE id = $1`,
      [authenticatedUserId]
    );

    const isProActivated = verifyProfile.rows[0]?.is_pro === true;
    if (!isProActivated) {
      throw new PaymentSecurityError(
        'PROFILE_ACTIVATION_VERIFICATION_FAILED',
        'Verifikasi aktivasi profil Pro gagal setelah pembaruan database.',
        500
      );
    }

    return {
      success: true,
      orderId: tx.id,
      isProActivated: true,
      tier,
      expiresAt,
      message: 'Pembayaran berhasil diverifikasi. Paket CherryEdu Pro telah aktif.',
    };
  });
}
