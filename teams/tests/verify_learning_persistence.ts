import {
  serverLearningStore,
  reconcileLearningProgress,
  SyncProgressRequest,
  QuizSubmissionRequest,
} from '../../lib/learningPersistenceService';
import { UserProgress } from '../../lib/types';

function runTests() {
  console.log('--- STARTING LEARNING PERSISTENCE VERIFICATION SUITE ---');
  let passed = 0;
  let failed = 0;

  function assert(condition: boolean, testName: string, detail?: string) {
    if (condition) {
      console.log(`  ✓ PASS: ${testName}`);
      passed++;
    } else {
      console.error(`  ✗ FAIL: ${testName}${detail ? ` - ${detail}` : ''}`);
      failed++;
    }
  }

  serverLearningStore.resetForTesting();

  // Test 1: Basic progress sync
  try {
    const req1: SyncProgressRequest = {
      user_id: 'usr-barista-01',
      event_id: 'evt-sync-1001',
      progress: [
        {
          lesson_id: 'les-esp-01',
          status: 'in_progress',
          time_spent_seconds: 300,
          updated_at: '2026-10-14T01:00:00Z',
        },
      ],
      enrollments: [
        {
          learning_path_id: 'path-barista',
          status: 'active',
          progress_percent: 25,
          last_accessed_at: '2026-10-14T01:00:00Z',
        },
      ],
    };

    const res1 = serverLearningStore.syncProgress(req1);
    assert(res1.success === true, 'Test 1.1: Basic progress sync succeeds');
    assert(res1.synced_count === 1, 'Test 1.2: One lesson progress item recorded');
    assert(res1.progress.length === 1, 'Test 1.3: User progress contains 1 item');
    assert(res1.progress[0].status === 'in_progress', 'Test 1.4: Progress status is in_progress');
  } catch (err: any) {
    assert(false, 'Test 1: Basic progress sync', err.message);
  }

  // Test 2: Idempotency with same event_id
  try {
    const req2: SyncProgressRequest = {
      user_id: 'usr-barista-01',
      event_id: 'evt-sync-1001', // identical event_id
      progress: [
        {
          lesson_id: 'les-esp-01',
          status: 'completed', // different status in replay
          time_spent_seconds: 9999,
          updated_at: '2026-10-14T02:00:00Z',
        },
      ],
    };

    const res2 = serverLearningStore.syncProgress(req2);
    // Should return cached response with original in_progress status
    assert(res2.receipt_id === 'evt-sync-1001', 'Test 2.1: Replayed event returns identical receipt_id');
    const currProg = serverLearningStore.getUserProgress('usr-barista-01');
    assert(currProg[0].status === 'in_progress', 'Test 2.2: Idempotent replay does not re-apply mutation');
  } catch (err: any) {
    assert(false, 'Test 2: Idempotency', err.message);
  }

  // Test 3: Upgrade to completed and anti-downgrade protection
  try {
    // 3.1: Upgrade to completed
    const reqComplete: SyncProgressRequest = {
      user_id: 'usr-barista-01',
      event_id: 'evt-sync-1002',
      progress: [
        {
          lesson_id: 'les-esp-01',
          status: 'completed',
          time_spent_seconds: 600,
          completed_at: '2026-10-14T03:00:00Z',
          updated_at: '2026-10-14T03:00:00Z',
        },
      ],
    };
    serverLearningStore.syncProgress(reqComplete);
    let prog = serverLearningStore.getUserProgress('usr-barista-01')[0];
    assert(prog.status === 'completed', 'Test 3.1: Upgrades to completed state');
    assert(prog.completed_at === '2026-10-14T03:00:00Z', 'Test 3.2: completed_at recorded');

    // 3.2: Attempt to downgrade with stale in_progress payload
    const reqDowngrade: SyncProgressRequest = {
      user_id: 'usr-barista-01',
      event_id: 'evt-sync-1003',
      progress: [
        {
          lesson_id: 'les-esp-01',
          status: 'in_progress', // stale offline sync attempting downgrade
          time_spent_seconds: 400,
          updated_at: '2026-10-14T02:30:00Z',
        },
      ],
    };
    serverLearningStore.syncProgress(reqDowngrade);
    prog = serverLearningStore.getUserProgress('usr-barista-01')[0];
    assert(prog.status === 'completed', 'Test 3.3: Stale in_progress sync does NOT downgrade completed status');
    assert(prog.time_spent_seconds === 600, 'Test 3.4: time_spent_seconds is preserved monotonically');
  } catch (err: any) {
    assert(false, 'Test 3: Anti-downgrade protection', err.message);
  }

  // Test 4: Authoritative Quiz Attempt with passing score
  try {
    // Quiz quiz-f1 has known questions: q-f1-1 (ans: ans-f1-1a), q-f1-2 (ans: ans-f1-2b), q-f1-3 (ans: ans-f1-3a)
    const passSubmission: QuizSubmissionRequest = {
      user_id: 'usr-barista-01',
      quiz_id: 'quiz-f1',
      answers: {
        'q-f1-1': 'ans-f1-1a', // correct
        'q-f1-2': 'ans-f1-2b', // correct
        'q-f1-3': 'ans-f1-3a', // correct
        'q-f1-4': 'ans-f1-4a', // correct
        'q-f1-5': 'ans-f1-5a', // correct
      },
    };

    const quizRes = serverLearningStore.submitQuizAttempt(passSubmission);
    assert(quizRes.score === 100, `Test 4.1: Perfect answers achieve 100% score (got ${quizRes.score})`);
    assert(quizRes.passed === true, 'Test 4.2: Quiz passes when score >= passing threshold');
    assert(quizRes.attempt.attempt_number === 1, 'Test 4.3: Attempt number is 1');

    // Check auto-completed progress
    const quizProg = serverLearningStore.getUserProgress('usr-barista-01').find((p) => p.lesson_id === 'quiz-f1');
    assert(quizProg !== undefined && quizProg.status === 'completed', 'Test 4.4: Passing quiz automatically completes quiz progress');
  } catch (err: any) {
    assert(false, 'Test 4: Passing quiz attempt', err.message);
  }

  // Test 5: Authoritative Quiz Attempt with failing score
  try {
    const failSubmission: QuizSubmissionRequest = {
      user_id: 'usr-barista-01',
      quiz_id: 'quiz-f1',
      answers: {
        'q-f1-1': 'ans-wrong-1',
        'q-f1-2': 'ans-wrong-2',
        'q-f1-3': 'ans-wrong-3',
      },
    };

    const failRes = serverLearningStore.submitQuizAttempt(failSubmission);
    assert(failRes.score < 80, `Test 5.1: Wrong answers calculate low score (got ${failRes.score})`);
    assert(failRes.passed === false, 'Test 5.2: Quiz fails when below passing threshold');
    assert(failRes.attempt.attempt_number === 2, 'Test 5.3: Second attempt recorded with attempt_number 2');
  } catch (err: any) {
    assert(false, 'Test 5: Failing quiz attempt', err.message);
  }

  // Test 6: Client-side reconciliation algorithm
  try {
    const localProgress: UserProgress[] = [
      {
        id: 'local-1',
        user_id: 'usr-barista-01',
        lesson_id: 'les-latte-01',
        status: 'completed', // completed locally while offline
        time_spent_seconds: 450,
        completed_at: '2026-10-14T04:00:00Z',
        updated_at: '2026-10-14T04:00:00Z',
      },
      {
        id: 'local-2',
        user_id: 'usr-barista-01',
        lesson_id: 'les-esp-01',
        status: 'in_progress', // stale local view
        time_spent_seconds: 200,
        completed_at: null,
        updated_at: '2026-10-14T01:00:00Z',
      },
    ];

    const serverProgress: UserProgress[] = [
      {
        id: 'server-1',
        user_id: 'usr-barista-01',
        lesson_id: 'les-esp-01',
        status: 'completed', // already completed on another device
        time_spent_seconds: 600,
        completed_at: '2026-10-14T03:00:00Z',
        updated_at: '2026-10-14T03:00:00Z',
      },
    ];

    const reconciled = reconcileLearningProgress(localProgress, serverProgress);
    const espProg = reconciled.find((p) => p.lesson_id === 'les-esp-01');
    const latteProg = reconciled.find((p) => p.lesson_id === 'les-latte-01');

    assert(reconciled.length === 2, 'Test 6.1: Reconciled array contains both items');
    assert(espProg?.status === 'completed', 'Test 6.2: Server completed status preserved over local stale in_progress');
    assert(latteProg?.status === 'completed', 'Test 6.3: Offline completed item preserved and not wiped out');
    assert(espProg?.time_spent_seconds === 600, 'Test 6.4: Maximum time spent preserved');
  } catch (err: any) {
    assert(false, 'Test 6: Reconciliation algorithm', err.message);
  }

  console.log(`\nLearning Persistence Test Summary: ${passed} passed, ${failed} failed.`);
  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
