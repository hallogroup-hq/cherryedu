import crypto from 'crypto';
import { query, withTransaction } from './db';
import { UserProgress, QuizAttempt, Enrollment, ProgressStatus } from './types';
import { SEED_QUIZZES, SEED_QUESTIONS, SEED_PATHS, SEED_MODULES, SEED_LESSONS } from './data/seedData';

export interface ProgressSyncItem {
  lesson_id: string;
  status: ProgressStatus;
  time_spent_seconds?: number;
  completed_at?: string | null;
  updated_at: string;
}

export interface EnrollmentSyncItem {
  learning_path_id: string;
  status?: 'active' | 'completed' | 'dropped';
  progress_percent?: number;
  last_accessed_at?: string;
}

export interface SyncProgressPayload {
  event_id?: string;
  progress: ProgressSyncItem[];
  enrollments?: EnrollmentSyncItem[];
}

export interface SyncProgressResponse {
  success: boolean;
  user_id: string;
  synced_count: number;
  receipt_id: string;
  server_timestamp: string;
  progress: UserProgress[];
  enrollments: Enrollment[];
}

export interface QuizSubmissionPayload {
  quiz_id: string;
  answers: Record<string, string>; // question_id -> answer_id
}

export interface QuizSubmissionResult {
  attempt: QuizAttempt;
  passed: boolean;
  score: number;
  total_questions: number;
  correct_count: number;
  passing_score: number;
  server_timestamp: string;
}

export class LearningSecurityError extends Error {
  code: string;
  status: number;

  constructor(code: string, message: string, status: number = 400) {
    super(message);
    this.name = 'LearningSecurityError';
    this.code = code;
    this.status = status;
  }
}

/**
 * Canonicalizes payload to ensure deterministic hashing across distributed nodes.
 */
export function canonicalizePayload(payload: SyncProgressPayload): string {
  const sortedProgress = (payload.progress || [])
    .slice()
    .sort((a, b) => a.lesson_id.localeCompare(b.lesson_id))
    .map((p) => ({
      lesson_id: p.lesson_id,
      status: p.status,
      time_spent_seconds: p.time_spent_seconds || 0,
    }));

  const sortedEnrollments = (payload.enrollments || [])
    .slice()
    .sort((a, b) => a.learning_path_id.localeCompare(b.learning_path_id))
    .map((e) => ({
      learning_path_id: e.learning_path_id,
      status: e.status,
    }));

  return JSON.stringify({ progress: sortedProgress, enrollments: sortedEnrollments });
}

/**
 * Returns canonical lesson IDs belonging to a given learning path.
 */
export function getCanonicalLessonIdsForPath(pathId: string): string[] {
  const moduleIds = new Set(
    SEED_MODULES.filter((m) => m.learning_path_id === pathId).map((m) => m.id)
  );
  return SEED_LESSONS.filter((l) => moduleIds.has(l.module_id)).map((l) => l.id);
}

/**
 * Returns canonical quiz IDs (module quizzes + path final exams) belonging to a given learning path.
 */
export function getCanonicalQuizzesForPath(pathId: string): string[] {
  const moduleIds = new Set(
    SEED_MODULES.filter((m) => m.learning_path_id === pathId).map((m) => m.id)
  );
  return SEED_QUIZZES.filter(
    (q) => q.learning_path_id === pathId || (q.module_id && moduleIds.has(q.module_id))
  ).map((q) => q.id);
}

/**
 * Server-authoritative Database Learning Persistence Service.
 * Canonical Source of Truth: PostgreSQL database (public.lesson_progress, public.enrollments, public.quiz_attempts).
 * Consistent across multiple server instances and persistent across process restarts.
 */
export class DatabaseLearningService {
  /**
   * Idempotently syncs progress and enrollments to the PostgreSQL database in a transaction.
   * User identity is strictly derived from the authenticated server session.
   * Server recalculates progress percent from versioned curriculum.
   */
  public async syncProgress(
    userId: string,
    payload: SyncProgressPayload
  ): Promise<SyncProgressResponse> {
    if (!userId) {
      throw new LearningSecurityError('MISSING_USER_ID', 'Identitas pengguna wajib disertakan dari sesi otentikasi.', 401);
    }

    const now = new Date().toISOString();
    const eventId = payload.event_id || `evt-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const canonicalPayloadHash = crypto
      .createHash('sha256')
      .update(canonicalizePayload(payload))
      .digest('hex');

    return withTransaction(async (client) => {
      // 1. Idempotency Check across multi-instance server deployments (scoped strictly to user_id)
      if (payload.event_id) {
        const existingReceipt = await client.query<{
          event_id: string;
          payload_hash: string;
          processed_at: string;
        }>(
          `SELECT event_id, payload_hash, processed_at::text 
           FROM public.learning_event_receipts 
           WHERE user_id = $1 AND event_id = $2 
           FOR UPDATE`,
          [userId, payload.event_id]
        );

        if (existingReceipt.rows.length > 0) {
          const rec = existingReceipt.rows[0];
          if (rec.payload_hash && rec.payload_hash !== canonicalPayloadHash) {
            throw new LearningSecurityError(
              'EVENT_ID_PAYLOAD_MISMATCH',
              `ID event "${payload.event_id}" telah digunakan dengan muatan data yang berbeda. Konflik idempotensi terdeteksi.`,
              409
            );
          }

          // Identical idempotent duplicate -> return current authoritative state
          const userProgress = await this.getUserProgressFromClient(client, userId);
          const userEnrollments = await this.getUserEnrollmentsFromClient(client, userId);
          return {
            success: true,
            user_id: userId,
            synced_count: 0,
            receipt_id: payload.event_id,
            server_timestamp: rec.processed_at,
            progress: userProgress,
            enrollments: userEnrollments,
          };
        }

        // Record receipt scoped to user_id
        await client.query(
          `INSERT INTO public.learning_event_receipts (event_id, user_id, event_type, payload_hash, processed_at)
           VALUES ($1, $2, 'progress_sync', $3, NOW())`,
          [payload.event_id, userId, canonicalPayloadHash]
        );
      }

      // Check User's Pro Status from database
      const profRes = await client.query<{ is_pro: boolean }>(
        `SELECT is_pro FROM public.profiles WHERE id = $1`,
        [userId]
      );
      const isProUser = profRes.rows[0]?.is_pro === true;

      let syncedCount = 0;

      // 2. Process Lesson Progress items atomically
      for (const item of payload.progress) {
        if (!item.lesson_id) continue;

        // BANNED: Quizzes cannot be completed via generic lesson sync
        const isQuiz = SEED_QUIZZES.some((q) => q.id === item.lesson_id);
        if (isQuiz) {
          throw new LearningSecurityError(
            'FORBIDDEN_QUIZ_IN_LESSON_SYNC',
            `ID "${item.lesson_id}" adalah kuis/evaluasi. Kuis dilarang diselesaikan melalui lesson sync biasa dan wajib diselesaikan melalui submitQuizAttempt.`,
            403
          );
        }

        const lesson = SEED_LESSONS.find((l) => l.id === item.lesson_id);
        if (!lesson) {
          continue; // Skip unrecognized lesson IDs
        }

        // Pro entitlement validation
        if (lesson.is_free === false && !isProUser) {
          throw new LearningSecurityError(
            'PRO_SUBSCRIPTION_REQUIRED',
            `Materi "${lesson.title}" merupakan materi Pro. Anda harus memiliki langganan Pro aktif untuk menyelesaikan materi ini.`,
            403
          );
        }

        // Sequence / prerequisite check within module
        if (item.status === 'completed') {
          const moduleLessons = SEED_LESSONS
            .filter((l) => l.module_id === lesson.module_id)
            .sort((a, b) => a.order_index - b.order_index);
          const currentIndex = moduleLessons.findIndex((l) => l.id === lesson.id);

          if (currentIndex > 0) {
            const prevLesson = moduleLessons[currentIndex - 1];
            const prevInPayload = payload.progress.some(
              (p) => p.lesson_id === prevLesson.id && p.status === 'completed'
            );
            if (!prevInPayload) {
              const prevInDb = await client.query<{ status: string }>(
                `SELECT status FROM public.lesson_progress WHERE user_id = $1 AND lesson_id = $2 AND status = 'completed'`,
                [userId, prevLesson.id]
              );
              if (prevInDb.rows.length === 0) {
                throw new LearningSecurityError(
                  'PREREQUISITE_LESSON_INCOMPLETE',
                  `Materi prasyarat "${prevLesson.title}" belum diselesaikan. Anda harus mempelajari materi secara berurutan.`,
                  422
                );
              }
            }
          }
        }

        const timeSpent = Math.max(0, item.time_spent_seconds || 0);
        const incomingStatus = item.status === 'completed' ? 'completed' : (item.status === 'in_progress' ? 'in_progress' : 'not_started');
        const updatedAt = item.updated_at || now;
        const completedAt = incomingStatus === 'completed' ? (item.completed_at || now) : null;

        await client.query(
          `INSERT INTO public.lesson_progress (
             user_id, lesson_id, status, time_spent_seconds, completed_at, updated_at
           )
           VALUES ($1, $2, $3, $4, $5, $6)
           ON CONFLICT (user_id, lesson_id) DO UPDATE SET
             status = CASE
               WHEN public.lesson_progress.status = 'completed' THEN 'completed'
               ELSE EXCLUDED.status
             END,
             time_spent_seconds = GREATEST(public.lesson_progress.time_spent_seconds, EXCLUDED.time_spent_seconds),
             completed_at = CASE
               WHEN public.lesson_progress.status = 'completed' THEN public.lesson_progress.completed_at
               WHEN EXCLUDED.status = 'completed' THEN COALESCE(EXCLUDED.completed_at, NOW())
               ELSE NULL
             END,
             updated_at = CASE
               WHEN EXCLUDED.updated_at >= public.lesson_progress.updated_at THEN EXCLUDED.updated_at
               ELSE public.lesson_progress.updated_at
             END`,
          [userId, item.lesson_id, incomingStatus, timeSpent, completedAt, updatedAt]
        );
        syncedCount++;
      }

      // 3. Process Enrollments: Server-authoritative recalculation
      if (payload.enrollments) {
        for (const enr of payload.enrollments) {
          if (!enr.learning_path_id) continue;

          // Verify path exists in canonical curriculum
          const pathExists = SEED_PATHS.some((p) => p.id === enr.learning_path_id);
          if (!pathExists) continue;

          // Recompute progress percent server-side from canonical curriculum
          const pathLessons = getCanonicalLessonIdsForPath(enr.learning_path_id);
          const pathQuizzes = getCanonicalQuizzesForPath(enr.learning_path_id);

          let completedLessonsCount = 0;
          if (pathLessons.length > 0) {
            const countRes = await client.query<{ count: string }>(
              `SELECT COUNT(*) as count
               FROM public.lesson_progress
               WHERE user_id = $1 AND status = 'completed' AND lesson_id = ANY($2::text[])`,
              [userId, pathLessons]
            );
            completedLessonsCount = parseInt(countRes.rows[0]?.count || '0', 10);
          }

          let passedQuizzesCount = 0;
          if (pathQuizzes.length > 0) {
            const quizRes = await client.query<{ count: string }>(
              `SELECT COUNT(DISTINCT quiz_id) as count
               FROM public.quiz_attempts
               WHERE user_id = $1 AND passed = true AND quiz_id = ANY($2::text[])`,
              [userId, pathQuizzes]
            );
            passedQuizzesCount = parseInt(quizRes.rows[0]?.count || '0', 10);
          }

          const allLessonsCompleted = pathLessons.length > 0 && completedLessonsCount >= pathLessons.length;
          const allQuizzesPassed = pathQuizzes.length === 0 || passedQuizzesCount >= pathQuizzes.length;

          const totalRequirements = pathLessons.length + pathQuizzes.length;
          const fulfilledRequirements = completedLessonsCount + passedQuizzesCount;

          let calculatedPercent = 0;
          let status: 'active' | 'completed' = 'active';

          if (allLessonsCompleted && allQuizzesPassed) {
            calculatedPercent = 100;
            status = 'completed';
          } else if (totalRequirements > 0) {
            // Cannot reach 100% or completed without passing all required quizzes and final exam
            calculatedPercent = Math.min(99, Math.round((fulfilledRequirements / totalRequirements) * 100));
            status = 'active';
          }

          const completedAt = status === 'completed' ? now : null;

          await client.query(
            `INSERT INTO public.enrollments (
               user_id, learning_path_id, status, progress_percent, enrolled_at, completed_at, last_accessed_at
             )
             VALUES ($1, $2, $3, $4, NOW(), $5, NOW())
             ON CONFLICT (user_id, learning_path_id) DO UPDATE SET
               progress_percent = EXCLUDED.progress_percent,
               status = EXCLUDED.status,
               completed_at = CASE
                 WHEN EXCLUDED.progress_percent >= 100 AND public.enrollments.completed_at IS NULL THEN NOW()
                 WHEN EXCLUDED.progress_percent < 100 THEN NULL
                 ELSE public.enrollments.completed_at
               END,
               last_accessed_at = NOW()`,
            [userId, enr.learning_path_id, status, calculatedPercent, completedAt]
          );
        }
      }

      const userProgress = await this.getUserProgressFromClient(client, userId);
      const userEnrollments = await this.getUserEnrollmentsFromClient(client, userId);

      return {
        success: true,
        user_id: userId,
        synced_count: syncedCount,
        receipt_id: eventId,
        server_timestamp: now,
        progress: userProgress,
        enrollments: userEnrollments,
      };
    });
  }

  /**
   * Submits a quiz attempt, computes authoritative server score, and records attempt in PostgreSQL.
   * Concurrency-safe with row locking on profiles.
   */
  public async submitQuizAttempt(
    userId: string,
    submission: QuizSubmissionPayload
  ): Promise<QuizSubmissionResult> {
    if (!userId) {
      throw new Error('MISSING_USER_ID: Identitas pengguna wajib.');
    }
    if (!submission.quiz_id) {
      throw new Error('MISSING_QUIZ_ID: quiz_id wajib disertakan.');
    }

    // Lookup authoritative quiz metadata
    const quiz = SEED_QUIZZES.find((q) => q.id === submission.quiz_id);
    if (!quiz) {
      throw new Error(`QUIZ_NOT_FOUND: Kuis dengan ID "${submission.quiz_id}" tidak ditemukan dalam kurikulum.`);
    }

    // Lookup authoritative questions & correct answers
    const questions = SEED_QUESTIONS.filter((q) => q.quiz_id === submission.quiz_id);
    if (questions.length === 0) {
      throw new Error(`NO_QUESTIONS_FOUND: Kuis "${submission.quiz_id}" belum memiliki daftar soal.`);
    }

    return withTransaction(async (client) => {
      // 1. Lock user profile to prevent race conditions on concurrent quiz attempts
      await client.query(`SELECT id FROM public.profiles WHERE id = $1 FOR UPDATE`, [userId]);

      // Check attempt limit
      const countRes = await client.query<{ count: string }>(
        `SELECT COUNT(*) as count FROM public.quiz_attempts WHERE user_id = $1 AND quiz_id = $2`,
        [userId, submission.quiz_id]
      );
      const currentAttemptCount = parseInt(countRes.rows[0]?.count || '0', 10);

      if (quiz.max_attempts && currentAttemptCount >= quiz.max_attempts) {
        throw new Error(`MAX_ATTEMPTS_EXCEEDED: Batas percobaan kuis (${quiz.max_attempts} kali) telah tercapai.`);
      }

      const attemptNumber = currentAttemptCount + 1;

      // 2. Compute authoritative score on server
      let correctCount = 0;
      for (const question of questions) {
        const selectedAnswerId = submission.answers[question.id];
        if (selectedAnswerId) {
          const correctAnswer = question.answers.find((a) => a.is_correct);
          if (correctAnswer && correctAnswer.id === selectedAnswerId) {
            correctCount++;
          }
        }
      }

      const calculatedScore = Math.round((correctCount / questions.length) * 100);
      const passingScore = quiz.passing_score ?? 80;
      const passed = calculatedScore >= passingScore;
      const now = new Date().toISOString();

      // 3. Save attempt to database
      const insertAttemptRes = await client.query<{ id: string; attempted_at: string }>(
        `INSERT INTO public.quiz_attempts (
           user_id, quiz_id, score, passed, answers_snapshot, attempt_number, attempted_at
         )
         VALUES ($1, $2, $3, $4, $5, $6, NOW())
         RETURNING id, attempted_at::text`,
        [userId, submission.quiz_id, calculatedScore, passed, JSON.stringify(submission.answers), attemptNumber]
      );

      const attemptRecord: QuizAttempt = {
        id: insertAttemptRes.rows[0].id,
        user_id: userId,
        quiz_id: submission.quiz_id,
        score: calculatedScore,
        passed,
        answers_snapshot: submission.answers,
        attempt_number: attemptNumber,
        attempted_at: insertAttemptRes.rows[0].attempted_at,
      };

      // 4. If passed, auto-complete quiz lesson step in database
      if (passed) {
        await client.query(
          `INSERT INTO public.lesson_progress (
             user_id, lesson_id, status, time_spent_seconds, completed_at, updated_at
           )
           VALUES ($1, $2, 'completed', 120, NOW(), NOW())
           ON CONFLICT (user_id, lesson_id) DO UPDATE SET
             status = 'completed',
             completed_at = COALESCE(public.lesson_progress.completed_at, NOW()),
             updated_at = NOW()`,
          [userId, submission.quiz_id]
        );
      }

      return {
        attempt: attemptRecord,
        passed,
        score: calculatedScore,
        total_questions: questions.length,
        correct_count: correctCount,
        passing_score: passingScore,
        server_timestamp: now,
      };
    });
  }

  public async getUserProgress(userId: string): Promise<UserProgress[]> {
    const res = await query<any>(
      `SELECT id, user_id, lesson_id, status, time_spent_seconds, completed_at::text, updated_at::text
       FROM public.lesson_progress
       WHERE user_id = $1
       ORDER BY updated_at DESC`,
      [userId]
    );

    return res.rows.map((r) => ({
      id: r.id,
      user_id: r.user_id,
      lesson_id: r.lesson_id,
      status: r.status,
      time_spent_seconds: r.time_spent_seconds,
      completed_at: r.completed_at,
      updated_at: r.updated_at,
    }));
  }

  public async getUserEnrollments(userId: string): Promise<Enrollment[]> {
    const res = await query<any>(
      `SELECT id, user_id, learning_path_id, status, progress_percent, enrolled_at::text, completed_at::text, last_accessed_at::text
       FROM public.enrollments
       WHERE user_id = $1`,
      [userId]
    );

    return res.rows.map((r) => ({
      id: r.id,
      user_id: r.user_id,
      learning_path_id: r.learning_path_id,
      status: r.status,
      progress_percent: parseFloat(r.progress_percent),
      enrolled_at: r.enrolled_at,
      completed_at: r.completed_at,
      last_accessed_at: r.last_accessed_at,
    }));
  }

  public async getUserQuizAttempts(userId: string): Promise<QuizAttempt[]> {
    const res = await query<any>(
      `SELECT id, user_id, quiz_id, score, passed, answers_snapshot, attempt_number, attempted_at::text
       FROM public.quiz_attempts
       WHERE user_id = $1
       ORDER BY attempt_number ASC`,
      [userId]
    );

    return res.rows.map((r) => ({
      id: r.id,
      user_id: r.user_id,
      quiz_id: r.quiz_id,
      score: parseFloat(r.score),
      passed: r.passed,
      answers_snapshot: typeof r.answers_snapshot === 'string' ? JSON.parse(r.answers_snapshot) : r.answers_snapshot,
      attempt_number: r.attempt_number,
      attempted_at: r.attempted_at,
    }));
  }

  private async getUserProgressFromClient(client: any, userId: string): Promise<UserProgress[]> {
    const res = await client.query(
      `SELECT id, user_id, lesson_id, status, time_spent_seconds, completed_at::text, updated_at::text
       FROM public.lesson_progress
       WHERE user_id = $1
       ORDER BY updated_at DESC`,
      [userId]
    );
    return res.rows;
  }

  private async getUserEnrollmentsFromClient(client: any, userId: string): Promise<Enrollment[]> {
    const res = await client.query(
      `SELECT id, user_id, learning_path_id, status, progress_percent, enrolled_at::text, completed_at::text, last_accessed_at::text
       FROM public.enrollments
       WHERE user_id = $1`,
      [userId]
    );
    return res.rows.map((r: any) => ({
      ...r,
      progress_percent: parseFloat(r.progress_percent),
    }));
  }
}

export const serverLearningStore = new DatabaseLearningService();

/**
 * Client-side reconciliation utility.
 * Merges local offline progress with server progress without wiping unconfirmed local state.
 */
export function reconcileLearningProgress(
  localItems: UserProgress[],
  serverItems: UserProgress[]
): UserProgress[] {
  const mergedMap = new Map<string, UserProgress>();

  // Start with server authoritative items
  for (const s of serverItems) {
    mergedMap.set(s.lesson_id, { ...s });
  }

  // Merge local items safely
  for (const l of localItems) {
    const existing = mergedMap.get(l.lesson_id);
    if (!existing) {
      mergedMap.set(l.lesson_id, { ...l });
    } else {
      // If local is completed and server is not, prioritize completed
      if (l.status === 'completed' && existing.status !== 'completed') {
        mergedMap.set(l.lesson_id, {
          ...existing,
          status: 'completed',
          completed_at: l.completed_at || new Date().toISOString(),
          updated_at: l.updated_at,
          time_spent_seconds: Math.max(l.time_spent_seconds || 0, existing.time_spent_seconds || 0),
        });
      } else {
        mergedMap.set(l.lesson_id, {
          ...existing,
          time_spent_seconds: Math.max(l.time_spent_seconds || 0, existing.time_spent_seconds || 0),
        });
      }
    }
  }

  return Array.from(mergedMap.values());
}
