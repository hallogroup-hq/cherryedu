import { NextRequest, NextResponse } from 'next/server';
import { serverLearningStore, QuizSubmissionPayload } from '@/lib/learningPersistenceService';
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

    const body: QuizSubmissionPayload = await req.json();

    if (!body || !body.quiz_id) {
      return NextResponse.json(
        { success: false, error: 'VALIDATION_FAILED: quiz_id wajib disertakan.', code: 'VALIDATION_FAILED' },
        { status: 400 }
      );
    }

    if (!body.answers || typeof body.answers !== 'object') {
      return NextResponse.json(
        { success: false, error: 'VALIDATION_FAILED: answers map wajib disertakan.', code: 'VALIDATION_FAILED' },
        { status: 400 }
      );
    }

    const result = await serverLearningStore.submitQuizAttempt(userId, body);
    return NextResponse.json({ success: true, ...result }, { status: 200 });
  } catch (error: any) {
    if (error instanceof AuthorizationError) {
      return NextResponse.json({ success: false, error: error.message, code: error.code }, { status: error.status });
    }
    console.error('Error in /api/learning/quiz-attempt:', error);
    const status = error.message?.includes('NOT_FOUND') ? 404 : error.message?.includes('MAX_ATTEMPTS') ? 403 : 400;
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error', code: 'QUIZ_SUBMISSION_FAILED' },
      { status }
    );
  }
}
