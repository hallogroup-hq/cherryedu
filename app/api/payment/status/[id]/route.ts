import { NextRequest, NextResponse } from 'next/server';
import { verifyQRISStatus } from '@/lib/paymentGateway';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const qrisId = params.id;
    const trxId = req.nextUrl.searchParams.get('trx_id') || undefined;
    const amount = Number(req.nextUrl.searchParams.get('amount')) || undefined;

    if (!qrisId) {
      return NextResponse.json(
        { success: false, message: 'ID QRIS tidak ditemukan' },
        { status: 400 }
      );
    }

    const result = await verifyQRISStatus(qrisId, trxId, amount);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Error verifying QRIS payment:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Gagal memeriksa status pembayaran' },
      { status: 500 }
    );
  }
}
