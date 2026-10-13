import { NextRequest, NextResponse } from 'next/server';
import { verifyAndConfirmPaymentServerSide } from '@/lib/serverPaymentService';
import { checkRateLimit, getClientIp, isAllowedOrigin } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
  // 1. Origin verification
  if (!isAllowedOrigin(req)) {
    return NextResponse.json(
      { success: false, message: 'Akses ditolak: Permintaan lintas domain tidak diizinkan.' },
      { status: 403 }
    );
  }

  // 2. Rate limiting
  const clientIp = getClientIp(req);
  const rateLimit = checkRateLimit(`payment_confirm:${clientIp}`, 20, 60000);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { success: false, message: 'Terlalu banyak permintaan konfirmasi. Harap tunggu.' },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { transaction, authenticatedUserId } = body;

    if (!transaction || !transaction.id || !authenticatedUserId) {
      return NextResponse.json(
        { success: false, message: 'Data transaksi atau identitas pengguna tidak lengkap.' },
        { status: 400 }
      );
    }

    const result = await verifyAndConfirmPaymentServerSide(
      transaction,
      authenticatedUserId
    );

    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || 'Gagal memproses konfirmasi pembayaran' },
      { status: err.status || 500 }
    );
  }
}
