import { NextRequest, NextResponse } from 'next/server';
import { createAuthoritativeOrder } from '@/lib/serverOrderService';
import { PaymentSecurityError } from '@/lib/serverPaymentService';
import { verifyJwtToken } from '@/teams/lib/serverAuth';

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.toLowerCase().startsWith('bearer ')) {
      return NextResponse.json(
        {
          success: false,
          error: 'UNAUTHENTICATED: Bearer token otentikasi wajib disertakan.',
          code: 'UNAUTHENTICATED',
        },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7).trim();
    const decoded = verifyJwtToken(token);
    const authenticatedUserId = decoded.sub;

    const body = await req.json().catch(() => ({}));
    const cycle = body.cycle || 'monthly';
    const voucherCode = body.voucher_code || body.voucherCode;
    const paymentMethod = body.payment_method || body.paymentMethod;
    const userName = body.user_name || body.userName;
    const userEmail = body.user_email || body.userEmail || decoded.email;

    const order = await createAuthoritativeOrder(authenticatedUserId, {
      cycle,
      voucherCode,
      paymentMethod,
      userName,
      userEmail,
    });

    return NextResponse.json(
      {
        success: true,
        transaction: order,
        order,
      },
      { status: 201 }
    );
  } catch (error: any) {
    if (error instanceof PaymentSecurityError) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
          code: error.code,
        },
        { status: error.status }
      );
    }

    console.error('Unhandled error in /api/payment/create-order:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Terjadi kesalahan sistem saat membuat order.',
        code: error.code || 'INTERNAL_SERVER_ERROR',
      },
      { status: error.status || 500 }
    );
  }
}
