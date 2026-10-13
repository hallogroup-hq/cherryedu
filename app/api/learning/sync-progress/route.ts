import { NextRequest, NextResponse } from 'next/server';
import { serverLearningStore, SyncProgressPayload } from '@/lib/learningPersistenceService';
import { verifyJwtToken } from '@/teams/lib/serverAuth';
import { AuthorizationError } from '@/teams/lib/authz';

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.toLowerCase().startsWith('bearer ')) {
      return NextResponse.json(
        { success: false, error: 'UNAUTHENTICATED: Bearer token otentikasi wajib disertakan.', code: 'UNAUTHENTICATED' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7).trim();
    const decoded = verifyJwtToken(token);
    const userId = decoded.sub; // Authoritative user ID from validated JWT

    const body: SyncProgressPayload = await req.json();

    if (!body || !Array.isArray(body.progress)) {
      return NextResponse.json(
        { success: false, error: 'VALIDATION_FAILED: array progress wajib disertakan.', code: 'VALIDATION_FAILED' },
        { status: 400 }
      );
    }

    const result = await serverLearningStore.syncProgress(userId, body);
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    if (error instanceof AuthorizationError) {
      return NextResponse.json({ success: false, error: error.message, code: error.code }, { status: error.status });
    }
    console.error('Error in /api/learning/sync-progress POST:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error', code: 'SERVER_ERROR' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.toLowerCase().startsWith('bearer ')) {
      return NextResponse.json(
        { success: false, error: 'UNAUTHENTICATED: Bearer token otentikasi wajib disertakan.', code: 'UNAUTHENTICATED' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7).trim();
    const decoded = verifyJwtToken(token);
    const userId = decoded.sub; // Authoritative user ID

    const progress = await serverLearningStore.getUserProgress(userId);
    const enrollments = await serverLearningStore.getUserEnrollments(userId);
    const attempts = await serverLearningStore.getUserQuizAttempts(userId);

    return NextResponse.json(
      {
        success: true,
        user_id: userId,
        progress,
        enrollments,
        quiz_attempts: attempts,
      },
      { status: 200 }
    );
  } catch (error: any) {
    if (error instanceof AuthorizationError) {
      return NextResponse.json({ success: false, error: error.message, code: error.code }, { status: error.status });
    }
    console.error('Error in /api/learning/sync-progress GET:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error', code: 'SERVER_ERROR' },
      { status: 500 }
    );
  }
}
