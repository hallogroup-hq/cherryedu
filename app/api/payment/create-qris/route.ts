import { NextRequest, NextResponse } from 'next/server';
import { requestDynamicQRIS } from '@/lib/paymentGateway';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const amount = Number(body?.amount);

    if (!amount || isNaN(amount) || amount <= 0) {
      return NextResponse.json(
        { success: false, message: 'Nominal pembayaran tidak valid' },
        { status: 400 }
      );
    }

    const result = await requestDynamicQRIS(amount);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Error creating dynamic QRIS:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Gagal membuat QRIS pembayaran' },
      { status: 500 }
    );
  }
}
