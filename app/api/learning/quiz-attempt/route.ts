import { NextRequest, NextResponse } from 'next/server';
import { serverLearningStore, QuizSubmissionRequest } from '@/lib/learningPersistenceService';

export async function POST(req: NextRequest) {
  try {
    const body: QuizSubmissionRequest = await req.json();

    if (!body || !body.user_id) {
      return NextResponse.json(
        { success: false, error: 'VALIDATION_FAILED: user_id is required' },
        { status: 400 }
      );
    }

    if (!body.quiz_id) {
      return NextResponse.json(
        { success: false, error: 'VALIDATION_FAILED: quiz_id is required' },
        { status: 400 }
      );
    }

    if (!body.answers || typeof body.answers !== 'object') {
      return NextResponse.json(
        { success: false, error: 'VALIDATION_FAILED: answers map is required' },
        { status: 400 }
      );
    }

    const result = serverLearningStore.submitQuizAttempt(body);
    return NextResponse.json({ success: true, ...result }, { status: 200 });
  } catch (error: any) {
    console.error('Error in /api/learning/quiz-attempt:', error);
    const status = error.message?.includes('NOT_FOUND') ? 404 : 400;
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status }
    );
  }
}
