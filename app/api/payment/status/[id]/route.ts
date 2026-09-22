import { NextRequest, NextResponse } from 'next/server';
import { verifyQRISStatus } from '@/lib/paymentGateway';
import { checkRateLimit, getClientIp } from '@/lib/rateLimit';

const ID_REGEX = /^[a-zA-Z0-9_-]{3,64}$/;

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // 1. Sliding Window Rate Limiting (40 polls/min per client IP)
  const clientIp = getClientIp(req);
  const rateLimit = checkRateLimit(`qris_status:${clientIp}`, 40, 60000);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        success: false,
        message: 'Terlalu sering memeriksa status pembayaran. Mohon tunggu beberapa detik.',
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
    const qrisId = params.id;

    // 2. Strict ID format validation (Prevent injection & traversal)
    if (!qrisId || !ID_REGEX.test(qrisId)) {
      return NextResponse.json(
        { success: false, message: 'ID QRIS tidak valid atau format salah.' },
        { status: 400 }
      );
    }

    const trxIdParam = req.nextUrl.searchParams.get('trx_id');
    const trxId = trxIdParam && ID_REGEX.test(trxIdParam) ? trxIdParam : undefined;

    const rawAmount = req.nextUrl.searchParams.get('amount');
    const amountNum = rawAmount ? Number(rawAmount) : undefined;
    const amount = amountNum && !isNaN(amountNum) && amountNum > 0 ? amountNum : undefined;

    const result = await verifyQRISStatus(qrisId, trxId, amount);

    return NextResponse.json(result, {
      headers: {
        'X-RateLimit-Limit': String(rateLimit.limit),
        'X-RateLimit-Remaining': String(rateLimit.remaining),
      },
    });
  } catch (error: any) {
    console.error('Error verifying QRIS payment:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Gagal memeriksa status pembayaran' },
      { status: 500 }
    );
  }
}
