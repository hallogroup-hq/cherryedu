import { NextRequest, NextResponse } from 'next/server';
import { sendSubscriptionEmail } from '@/lib/emailService';
import { checkRateLimit, getClientIp, isAllowedOrigin } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
  // 1. Anti-CSRF Origin Verification
  if (!isAllowedOrigin(req)) {
    return NextResponse.json(
      { success: false, message: 'Akses ditolak: Permintaan lintas domain tidak diizinkan.' },
      { status: 403 }
    );
  }

  // 2. Rate Limiting (5 email triggers per minute per client IP)
  const clientIp = getClientIp(req);
  const rateLimit = checkRateLimit(`email_sub:${clientIp}`, 5, 60000);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { success: false, message: 'Terlalu banyak permintaan pengiriman email. Silakan tunggu sebentar.' },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { toEmail, userName, planName, cycle, amount, transactionId, expiresAt, isRenewal } = body || {};

    if (!toEmail || typeof toEmail !== 'string' || !toEmail.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Alamat email penerima tidak valid.' },
        { status: 400 }
      );
    }

    if (!transactionId || typeof transactionId !== 'string') {
      return NextResponse.json(
        { success: false, message: 'ID transaksi harus disertakan.' },
        { status: 400 }
      );
    }

    const result = await sendSubscriptionEmail({
      toEmail,
      userName: userName || 'Rekan Barista',
      planName: planName || 'CherryEdu Pro',
      cycle: cycle === 'annual' ? 'annual' : 'monthly',
      amount: typeof amount === 'number' ? amount : 49000,
      transactionId,
      expiresAt: expiresAt || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      isRenewal: !!isRenewal,
    });

    return NextResponse.json({
      success: result.success,
      simulated: result.simulated,
      message: result.success ? 'Email konfirmasi transaksi berhasil dikirim.' : 'Gagal mengirim email.',
    });
  } catch (error: any) {
    console.error('Error in subscription email route:', error);
    return NextResponse.json(
      { success: false, message: 'Terjadi kendala saat memproses pengiriman email.' },
      { status: 500 }
    );
  }
}
