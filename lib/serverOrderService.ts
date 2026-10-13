import crypto from 'crypto';
import { query, withTransaction } from './db';
import { SERVER_SUBSCRIPTION_CATALOG, PaymentSecurityError } from './serverPaymentService';
import { INITIAL_VOUCHERS, generateLocalDynamicQRIS } from './paymentGateway';
import { SubscriptionCycle, SubscriptionTier } from './types';

export interface CreateOrderParams {
  planTier?: SubscriptionTier;
  cycle: SubscriptionCycle;
  voucherCode?: string;
  paymentMethod?: string;
  userName?: string;
  userEmail?: string;
}

export interface CreatedOrderResult {
  id: string;
  user_id: string;
  user_name: string;
  user_email: string;
  plan_tier: string;
  cycle: string;
  original_amount: number;
  discount_amount: number;
  final_amount: number;
  voucher_code?: string | null;
  status: string;
  payment_method: string;
  qris_id?: string | null;
  trx_id?: string | null;
  qris_code?: string | null;
  expires_at: string;
  created_at: string;
}

/**
 * Server-authoritative Order Creation Service.
 * Validates catalog pricing, computes discounts authoritatively, generates QRIS,
 * and records the order into public.transactions via server database connection.
 */
export async function createAuthoritativeOrder(
  authenticatedUserId: string,
  params: CreateOrderParams
): Promise<CreatedOrderResult> {
  if (!authenticatedUserId) {
    throw new PaymentSecurityError('UNAUTHENTICATED', 'Pengguna belum terotentikasi.', 401);
  }

  const cycle = params.cycle === 'annual' ? 'annual' : 'monthly';
  const planTier = params.planTier || 'pro';

  if (planTier !== 'pro') {
    throw new PaymentSecurityError('UNSUPPORTED_TIER', 'Hanya paket Pro yang saat ini tersedia.', 400);
  }

  // 1. Authoritative Catalog Pricing
  const catalogKey = cycle === 'annual' ? 'sub-pro-annual' : 'sub-pro-monthly';
  const catalogItem = SERVER_SUBSCRIPTION_CATALOG[catalogKey];
  if (!catalogItem) {
    throw new PaymentSecurityError('CATALOG_ITEM_NOT_FOUND', 'Item langganan tidak ditemukan dalam katalog resmi.', 500);
  }

  const originalAmount = catalogItem.price_idr;
  let discountAmount = 0;
  let appliedVoucherCode: string | null = null;

  // 2. Authoritative Server Voucher Validation
  if (params.voucherCode && params.voucherCode.trim() !== '') {
    const cleanCode = params.voucherCode.trim().toUpperCase();
    const voucher = INITIAL_VOUCHERS.find((v) => v.code.toUpperCase() === cleanCode);

    if (!voucher) {
      throw new PaymentSecurityError('INVALID_VOUCHER', `Kode voucher "${cleanCode}" tidak valid.`, 400);
    }

    if (voucher.is_active === false) {
      throw new PaymentSecurityError('VOUCHER_INACTIVE', `Kode voucher "${cleanCode}" sudah tidak aktif.`, 400);
    }

    if (voucher.min_purchase && originalAmount < voucher.min_purchase) {
      throw new PaymentSecurityError(
        'VOUCHER_MIN_PURCHASE_NOT_MET',
        `Voucher "${cleanCode}" membutuhkan minimal transaksi Rp ${voucher.min_purchase.toLocaleString('id-ID')}.`,
        400
      );
    }

    if (voucher.usage_limit && (voucher.usage_count || 0) >= voucher.usage_limit) {
      throw new PaymentSecurityError('VOUCHER_LIMIT_EXCEEDED', `Batas pemakaian voucher "${cleanCode}" telah habis.`, 400);
    }

    if (voucher.discount_type === 'percentage') {
      discountAmount = Math.round((originalAmount * voucher.discount_value) / 100);
    } else {
      discountAmount = voucher.discount_value;
    }

    appliedVoucherCode = voucher.code;
  }

  const finalAmount = Math.max(1000, originalAmount - discountAmount);

  // 3. Dynamic QRIS Generation
  const paymentMethod = params.paymentMethod || 'gopay_qris';
  const qrisCode = generateLocalDynamicQRIS(finalAmount);
  const orderId = `tx_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
  const trxId = `trx_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
  const qrisId = `qris_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
  const expiresAt = new Date(Date.now() + 30 * 60 * 1000).toISOString(); // 30 minutes expiration

  // 4. Insert into public.transactions via server database connection (service privilege)
  const insertRes = await query<{
    id: string;
    user_id: string;
    user_name: string;
    user_email: string;
    plan_tier: string;
    cycle: string;
    original_amount: number;
    discount_amount: number;
    final_amount: number;
    voucher_code: string | null;
    status: string;
    payment_method: string;
    qris_id: string | null;
    trx_id: string | null;
    qris_code: string | null;
    expires_at: string;
    created_at: string;
  }>(
    `INSERT INTO public.transactions (
       id, user_id, user_name, user_email, plan_tier, cycle,
       original_amount, discount_amount, final_amount, voucher_code,
       status, payment_method, qris_id, trx_id, qris_code,
       expires_at, created_at
     )
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 'pending', $11, $12, $13, $14, $15, NOW())
     RETURNING id, user_id, user_name, user_email, plan_tier, cycle,
               original_amount, discount_amount, final_amount, voucher_code,
               status, payment_method, qris_id, trx_id, qris_code,
               expires_at::text, created_at::text`,
    [
      orderId,
      authenticatedUserId,
      params.userName || 'Pengguna CherryEdu',
      params.userEmail || '',
      planTier,
      cycle,
      originalAmount,
      discountAmount,
      finalAmount,
      appliedVoucherCode,
      paymentMethod,
      qrisId,
      trxId,
      qrisCode,
      expiresAt,
    ]
  );

  const row = insertRes.rows[0];
  return {
    id: row.id,
    user_id: row.user_id,
    user_name: row.user_name,
    user_email: row.user_email,
    plan_tier: row.plan_tier,
    cycle: row.cycle,
    original_amount: row.original_amount,
    discount_amount: row.discount_amount,
    final_amount: row.final_amount,
    voucher_code: row.voucher_code,
    status: row.status,
    payment_method: row.payment_method,
    qris_id: row.qris_id,
    trx_id: row.trx_id,
    qris_code: row.qris_code,
    expires_at: row.expires_at,
    created_at: row.created_at,
  };
}

/**
 * Server-authoritative Payment Proof Submission for fallback manual QRIS.
 * Strictly verifies ownership, records proof, and leaves status as 'pending' for manual review.
 * NEVER grants Pro access automatically!
 */
export async function submitPaymentProof(
  authenticatedUserId: string,
  params: { orderId: string; proofUrl: string; proofNotes?: string }
): Promise<{ success: boolean; message: string; orderId: string }> {
  if (!authenticatedUserId) {
    throw new PaymentSecurityError('UNAUTHENTICATED', 'Pengguna belum terotentikasi.', 401);
  }

  if (!params.orderId || typeof params.orderId !== 'string') {
    throw new PaymentSecurityError('INVALID_ORDER_ID', 'ID Order tidak valid.', 400);
  }

  if (!params.proofUrl || typeof params.proofUrl !== 'string') {
    throw new PaymentSecurityError('MISSING_PROOF', 'Bukti pembayaran (foto screenshot) wajib disertakan.', 400);
  }

  return withTransaction(async (client) => {
    const txRes = await client.query<{
      id: string;
      user_id: string;
      status: string;
      expires_at: string | null;
    }>(
      `SELECT id, user_id, status, expires_at::text 
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
      throw new PaymentSecurityError('ORDER_OWNERSHIP_MISMATCH', 'Order bukan milik pengguna yang sedang terautentikasi.', 403);
    }

    if (tx.status === 'settled' || tx.status === 'paid') {
      return {
        success: true,
        message: 'Order ini telah terkonfirmasi lunas sebelumnya.',
        orderId: tx.id,
      };
    }

    if (tx.status === 'expired' || (tx.expires_at && new Date(tx.expires_at) < new Date())) {
      throw new PaymentSecurityError('ORDER_EXPIRED', 'Waktu pembayaran order ini telah kedaluwarsa.', 400);
    }

    if (tx.status === 'cancelled') {
      throw new PaymentSecurityError('ORDER_CANCELLED', 'Order transaksi telah dibatalkan.', 400);
    }

    // Update proof details while preserving pending status
    await client.query(
      `UPDATE public.transactions 
       SET proof_url = $1, 
           proof_notes = $2
       WHERE id = $3`,
      [params.proofUrl, params.proofNotes || null, params.orderId]
    );

    return {
      success: true,
      message: 'Bukti pembayaran berhasil diunggah. Menunggu verifikasi manual dari admin.',
      orderId: tx.id,
    };
  });
}
