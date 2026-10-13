import { UserProgress, QuizAttempt, Enrollment, ProgressStatus } from './types';
import { SEED_QUIZZES, SEED_QUESTIONS } from './data/seedData';

export interface ProgressSyncItem {
  lesson_id: string;
  status: ProgressStatus;
  time_spent_seconds?: number;
  completed_at?: string | null;
  updated_at: string;
}

export interface EnrollmentSyncItem {
  learning_path_id: string;
  status: 'active' | 'completed' | 'dropped';
  progress_percent: number;
  enrolled_at?: string;
  completed_at?: string | null;
  last_accessed_at: string;
}

export interface SyncProgressRequest {
  user_id: string;
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

export interface QuizSubmissionRequest {
  user_id: string;
  quiz_id: string;
  answers: Record<string, string>; // question_id -> answer_id
  attempt_number?: number;
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

// In-memory persistent state store for server runtime (reconciled with database when available)
class ServerLearningStore {
  private progressStore: Map<string, UserProgress> = new Map();
  private enrollmentStore: Map<string, Enrollment> = new Map();
  private quizAttemptStore: Map<string, QuizAttempt[]> = new Map();
  private processedEvents: Map<string, SyncProgressResponse> = new Map();

  private getProgressKey(userId: string, lessonId: string): string {
    return `${userId}:::${lessonId}`;
  }

  private getEnrollmentKey(userId: string, pathId: string): string {
    return `${userId}:::${pathId}`;
  }

  public syncProgress(req: SyncProgressRequest): SyncProgressResponse {
    if (!req.user_id) {
      throw new Error('MISSING_USER_ID: user_id is required for progress sync.');
    }

    // Idempotency check: if event_id has already been processed, return cached response
    if (req.event_id && this.processedEvents.has(req.event_id)) {
      return this.processedEvents.get(req.event_id)!;
    }

    const now = new Date().toISOString();
    let syncedCount = 0;

    // Process progress items
    for (const item of req.progress) {
      if (!item.lesson_id) continue;

      const key = this.getProgressKey(req.user_id, item.lesson_id);
      const existing = this.progressStore.get(key);

      if (!existing) {
        const newRecord: UserProgress = {
          id: `prog-${req.user_id}-${item.lesson_id}`,
          user_id: req.user_id,
          lesson_id: item.lesson_id,
          status: item.status || 'not_started',
          time_spent_seconds: item.time_spent_seconds || 0,
          completed_at: item.status === 'completed' ? (item.completed_at || now) : null,
          updated_at: item.updated_at || now,
        };
        this.progressStore.set(key, newRecord);
        syncedCount++;
      } else {
        // Monotonic & non-destructive conflict resolution:
        // 1. If existing is already completed, do not revert to in_progress unless explicit reset
        const isCurrentlyCompleted = existing.status === 'completed';
        const incomingStatus = item.status;
        const finalStatus: ProgressStatus =
          isCurrentlyCompleted && incomingStatus !== 'completed' ? 'completed' : incomingStatus;

        // 2. Do not overwrite newer server data with stale client data
        const existingTime = new Date(existing.updated_at).getTime();
        const incomingTime = new Date(item.updated_at || now).getTime();

        const finalCompletedAt =
          finalStatus === 'completed'
            ? existing.completed_at || item.completed_at || now
            : null;

        const updatedRecord: UserProgress = {
          ...existing,
          status: finalStatus,
          time_spent_seconds: Math.max(existing.time_spent_seconds || 0, item.time_spent_seconds || 0),
          completed_at: finalCompletedAt,
          updated_at: incomingTime >= existingTime ? item.updated_at || now : existing.updated_at,
        };

        this.progressStore.set(key, updatedRecord);
        syncedCount++;
      }
    }

    // Process enrollments if provided
    if (req.enrollments) {
      for (const enr of req.enrollments) {
        if (!enr.learning_path_id) continue;
        const key = this.getEnrollmentKey(req.user_id, enr.learning_path_id);
        const existing = this.enrollmentStore.get(key);

        if (!existing) {
          const newEnrollment: Enrollment = {
            id: `enr-${req.user_id}-${enr.learning_path_id}`,
            user_id: req.user_id,
            learning_path_id: enr.learning_path_id,
            status: enr.status || 'active',
            progress_percent: enr.progress_percent || 0,
            enrolled_at: enr.enrolled_at || now,
            completed_at: enr.status === 'completed' ? (enr.completed_at || now) : null,
            last_accessed_at: enr.last_accessed_at || now,
          };
          this.enrollmentStore.set(key, newEnrollment);
        } else {
          const finalPercent = Math.max(existing.progress_percent, enr.progress_percent || 0);
          const finalStatus =
            finalPercent >= 100 || enr.status === 'completed' ? 'completed' : existing.status;

          this.enrollmentStore.set(key, {
            ...existing,
            progress_percent: finalPercent,
            status: finalStatus,
            completed_at: finalStatus === 'completed' ? (existing.completed_at || now) : null,
            last_accessed_at: enr.last_accessed_at || now,
          });
        }
      }
    }

    const userProgress = this.getUserProgress(req.user_id);
    const userEnrollments = this.getUserEnrollments(req.user_id);

    const receipt: SyncProgressResponse = {
      success: true,
      user_id: req.user_id,
      synced_count: syncedCount,
      receipt_id: req.event_id || `rcpt-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      server_timestamp: now,
      progress: userProgress,
      enrollments: userEnrollments,
    };

    if (req.event_id) {
      this.processedEvents.set(req.event_id, receipt);
    }

    return receipt;
  }

  public submitQuizAttempt(req: QuizSubmissionRequest): QuizSubmissionResult {
    if (!req.user_id) {
      throw new Error('MISSING_USER_ID: user_id is required.');
    }
    if (!req.quiz_id) {
      throw new Error('MISSING_QUIZ_ID: quiz_id is required.');
    }

    // Lookup quiz in authoritative catalog
    const quiz = SEED_QUIZZES.find((q) => q.id === req.quiz_id);
    if (!quiz) {
      throw new Error(`QUIZ_NOT_FOUND: Quiz with id "${req.quiz_id}" does not exist in catalog.`);
    }

    // Lookup questions belonging to this quiz
    const questions = SEED_QUESTIONS.filter((q) => q.quiz_id === req.quiz_id);
    if (questions.length === 0) {
      throw new Error(`NO_QUESTIONS_FOUND: Quiz "${req.quiz_id}" has no questions registered.`);
    }

    // Server-side scoring computation
    let correctCount = 0;
    for (const question of questions) {
      const selectedAnswerId = req.answers[question.id];
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

    const existingAttempts = this.quizAttemptStore.get(req.user_id) || [];
    const attemptNumber = req.attempt_number ?? (existingAttempts.filter((a) => a.quiz_id === req.quiz_id).length + 1);

    const attemptRecord: QuizAttempt = {
      id: `qa-${req.user_id}-${req.quiz_id}-${Date.now()}`,
      user_id: req.user_id,
      quiz_id: req.quiz_id,
      score: calculatedScore,
      passed,
      answers_snapshot: req.answers,
      attempt_number: attemptNumber,
      attempted_at: now,
    };

    existingAttempts.push(attemptRecord);
    this.quizAttemptStore.set(req.user_id, existingAttempts);

    // If passed, auto-complete progress for this quiz
    if (passed) {
      const key = this.getProgressKey(req.user_id, req.quiz_id);
      const existing = this.progressStore.get(key);
      this.progressStore.set(key, {
        id: `prog-${req.user_id}-${req.quiz_id}`,
        user_id: req.user_id,
        lesson_id: req.quiz_id,
        status: 'completed',
        time_spent_seconds: existing ? (existing.time_spent_seconds || 0) + 120 : 120,
        completed_at: existing?.completed_at || now,
        updated_at: now,
      });
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
  }

  public getUserProgress(userId: string): UserProgress[] {
    const results: UserProgress[] = [];
    this.progressStore.forEach((prog, key) => {
      if (key.startsWith(`${userId}:::`)) {
        results.push(prog);
      }
    });
    return results;
  }

  public getUserEnrollments(userId: string): Enrollment[] {
    const results: Enrollment[] = [];
    this.enrollmentStore.forEach((enr, key) => {
      if (key.startsWith(`${userId}:::`)) {
        results.push(enr);
      }
    });
    return results;
  }

  public getUserQuizAttempts(userId: string): QuizAttempt[] {
    return this.quizAttemptStore.get(userId) || [];
  }

  public resetForTesting(): void {
    this.progressStore.clear();
    this.enrollmentStore.clear();
    this.quizAttemptStore.clear();
    this.processedEvents.clear();
  }
}

export const serverLearningStore = new ServerLearningStore();

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
