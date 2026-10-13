import { NextRequest, NextResponse } from 'next/server';
import { submitPaymentProof } from '@/lib/serverOrderService';
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
    const orderId = body.order_id || body.orderId;
    const proofUrl = body.proof_url || body.proofUrl;
    const proofNotes = body.proof_notes || body.proofNotes;

    if (!orderId) {
      return NextResponse.json(
        {
          success: false,
          error: 'VALIDATION_FAILED: order_id wajib disertakan.',
          code: 'VALIDATION_FAILED',
        },
        { status: 400 }
      );
    }

    if (!proofUrl) {
      return NextResponse.json(
        {
          success: false,
          error: 'VALIDATION_FAILED: proof_url wajib disertakan.',
          code: 'VALIDATION_FAILED',
        },
        { status: 400 }
      );
    }

    const result = await submitPaymentProof(authenticatedUserId, {
      orderId,
      proofUrl,
      proofNotes,
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

    console.error('Unhandled error in /api/payment/submit-proof:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Terjadi kesalahan sistem saat mengunggah bukti pembayaran.',
        code: error.code || 'INTERNAL_SERVER_ERROR',
      },
      { status: error.status || 500 }
    );
  }
}
