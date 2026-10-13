import { NextRequest, NextResponse } from 'next/server';
import { rejectClaimByAdmin, PaymentSecurityError } from '@/lib/serverPaymentService';
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
    const adminUserId = decoded.sub;

    const body = await req.json().catch(() => ({}));
    const orderId = body.order_id || body.orderId;
    const reason = body.reason;

    if (!orderId || typeof orderId !== 'string') {
      return NextResponse.json(
        {
          success: false,
          error: 'VALIDATION_FAILED: order_id wajib disertakan.',
          code: 'VALIDATION_FAILED',
        },
        { status: 400 }
      );
    }

    if (!reason || typeof reason !== 'string' || reason.trim() === '') {
      return NextResponse.json(
        {
          success: false,
          error: 'VALIDATION_FAILED: reason (alasan penolakan) wajib disertakan.',
          code: 'VALIDATION_FAILED',
        },
        { status: 400 }
      );
    }

    const result = await rejectClaimByAdmin(adminUserId, {
      orderId,
      reason,
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

    console.error('Unhandled error in /api/admin/transactions/reject:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Terjadi kesalahan server internal.',
        code: error.code || 'INTERNAL_SERVER_ERROR',
      },
      { status: error.status || 500 }
    );
  }
}
