import { NextRequest, NextResponse } from 'next/server';
import { confirmOrderPayment, PaymentSecurityError } from '@/lib/serverPaymentService';
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
    const authenticatedUserId = decoded.sub; // Authoritative user ID from validated JWT

    const body = await req.json().catch(() => ({}));
    const orderId = body.order_id;

    if (!orderId || typeof orderId !== 'string') {
      return NextResponse.json(
        {
          success: false,
          error: 'VALIDATION_FAILED: order_id wajib disertakan dalam request body.',
          code: 'VALIDATION_FAILED',
        },
        { status: 400 }
      );
    }

    // Optional test settlement token header (for automated testing of gateway simulation)
    const testSettlementToken = req.headers.get('x-test-settlement-token') || undefined;

    const result = await confirmOrderPayment(authenticatedUserId, orderId, {
      testSettlementToken,
    });

    return NextResponse.json(result, { status: 200 });
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

    console.error('Unhandled error in /api/payment/confirm:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Terjadi kesalahan internal pada server.',
        code: 'INTERNAL_SERVER_ERROR',
      },
      { status: 500 }
    );
  }
}
