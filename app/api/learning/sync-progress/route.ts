import { NextRequest, NextResponse } from 'next/server';
import { serverLearningStore, SyncProgressRequest } from '@/lib/learningPersistenceService';

export async function POST(req: NextRequest) {
  try {
    const body: SyncProgressRequest = await req.json();

    if (!body || !body.user_id) {
      return NextResponse.json(
        { success: false, error: 'VALIDATION_FAILED: user_id is required' },
        { status: 400 }
      );
    }

    if (!Array.isArray(body.progress)) {
      return NextResponse.json(
        { success: false, error: 'VALIDATION_FAILED: progress array is required' },
        { status: 400 }
      );
    }

    const result = serverLearningStore.syncProgress(body);
    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.error('Error in /api/learning/sync-progress:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('user_id');

  if (!userId) {
    return NextResponse.json(
      { success: false, error: 'VALIDATION_FAILED: user_id query parameter is required' },
      { status: 400 }
    );
  }

  const progress = serverLearningStore.getUserProgress(userId);
  const enrollments = serverLearningStore.getUserEnrollments(userId);
  const attempts = serverLearningStore.getUserQuizAttempts(userId);

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
}
