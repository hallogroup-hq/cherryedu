import { NextRequest, NextResponse } from 'next/server';
import { requestDynamicQRIS } from '@/lib/paymentGateway';
import { checkRateLimit, getClientIp, isAllowedOrigin } from '@/lib/rateLimit';

const MIN_PAYMENT_AMOUNT = 10000;      // Rp 10.000
const MAX_PAYMENT_AMOUNT = 5000000;    // Rp 5.000.000

export async function POST(req: NextRequest) {
  // 1. Origin Verification (Anti-CSRF)
  if (!isAllowedOrigin(req)) {
    return NextResponse.json(
      { success: false, message: 'Akses ditolak: Permintaan lintas domain tidak diizinkan.' },
      { status: 403 }
    );
  }

  // 2. Sliding Window Rate Limiting (6 requests/minute per client IP)
  const clientIp = getClientIp(req);
  const rateLimit = checkRateLimit(`qris_create:${clientIp}`, 6, 60000);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        success: false,
        message: 'Terlalu banyak permintaan pembuatan QRIS. Silakan tunggu 1 menit.',
        retryAfter: rateLimit.resetSeconds,
      },
      {
        status: 429,
        headers: {
          'Retry-After': String(rateLimit.resetSeconds),
          'X-RateLimit-Limit': String(rateLimit.limit),
          'X-RateLimit-Remaining': '0',
        },
      }
    );
  }

  try {
    const body = await req.json();
    const rawAmount = body?.amount;

    if (rawAmount === undefined || rawAmount === null || typeof rawAmount !== 'number') {
      return NextResponse.json(
        { success: false, message: 'Nominal pembayaran harus berupa angka valid.' },
        { status: 400 }
      );
    }

    const amount = Math.floor(rawAmount);

    if (isNaN(amount) || amount < MIN_PAYMENT_AMOUNT || amount > MAX_PAYMENT_AMOUNT) {
      return NextResponse.json(
        {
          success: false,
          message: `Nominal pembayaran tidak valid. Rentang yang diperbolehkan adalah Rp ${MIN_PAYMENT_AMOUNT.toLocaleString('id-ID')} hingga Rp ${MAX_PAYMENT_AMOUNT.toLocaleString('id-ID')}.`,
        },
        { status: 400 }
      );
    }

    const result = await requestDynamicQRIS(amount);
    return NextResponse.json(result, {
      headers: {
        'X-RateLimit-Limit': String(rateLimit.limit),
        'X-RateLimit-Remaining': String(rateLimit.remaining),
      },
    });
  } catch (error: any) {
    console.error('Error creating dynamic QRIS:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Gagal membuat QRIS pembayaran' },
      { status: 500 }
    );
  }
}
