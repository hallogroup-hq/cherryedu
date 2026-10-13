import { NextRequest } from 'next/server';
import { query, closeDbPool } from '../../lib/db';
import { createSignedToken, TEST_JWT_SECRET } from './helpers/testAuth';
import { confirmOrderPayment } from '../../lib/serverPaymentService';
import { verifyJwtToken } from '../lib/serverAuth';

// Route Handlers
import { GET as getOverview } from '../../app/api/teams/organizations/[orgId]/overview/route';
import {
  GET as getInvitations,
  POST as postInvitation,
  DELETE as deleteInvitation,
} from '../../app/api/teams/organizations/[orgId]/invitations/route';
import {
  GET as getAssessments,
  POST as postAssessment,
} from '../../app/api/teams/organizations/[orgId]/assessments/route';
import { POST as postConfirmPayment } from '../../app/api/payment/confirm/route';
import {
  GET as getSyncProgress,
  POST as postSyncProgress,
} from '../../app/api/learning/sync-progress/route';
import { POST as postQuizAttempt } from '../../app/api/learning/quiz-attempt/route';
import fs from 'fs';
import path from 'path';

// Environment variables for test
if (!process.env.SUPABASE_JWT_SECRET) {
  process.env.SUPABASE_JWT_SECRET = TEST_JWT_SECRET;
}

async function assertSafeTestEnvironment() {
  const nodeEnv = process.env.NODE_ENV;
  const allowSeed = process.env.ALLOW_DESTRUCTIVE_STAGING_SEED;
  if (nodeEnv !== 'test' || allowSeed !== 'true') {
    throw new Error(
      'STAGING_SAFETY_GUARD: Destructive staging seeding is only permitted when NODE_ENV=test AND ALLOW_DESTRUCTIVE_STAGING_SEED=true are explicitly passed by caller.'
    );
  }

  const dbRes = await query<{ current_database: string; host: string }>(
    `SELECT current_database(), COALESCE(inet_server_addr()::text, 'localhost') as host`
  );
  const currentDb = dbRes.rows[0]?.current_database;

  if (currentDb !== 'cherryedu_staging_db') {
    throw new Error(`STAGING_SAFETY_GUARD: Refusing to seed non-staging database: "${currentDb}".`);
  }

  const dbUrl = process.env.DATABASE_URL || '';
  if (dbUrl.includes('supabase.co') || (!dbUrl.includes('localhost') && !dbUrl.includes('127.0.0.1') && dbUrl !== '')) {
    throw new Error(`STAGING_SAFETY_GUARD: Remote or production database host detected. Refusing execution.`);
  }
}

async function runStagingVerification() {
  console.log('===============================================================');
  console.log('   CHERRY EDU TEAMS — STAGING INTEGRATION & SECURITY SUITE     ');
  console.log('===============================================================');

  // Verify safe environment before any destructive operations
  await assertSafeTestEnvironment();

  // Auto-seed staging database for clean idempotent state
  const seedSql = fs.readFileSync(path.join(__dirname, '../../supabase/staging/seed_staging_data.sql'), 'utf8');
  await query(seedSql);

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

  // Database IDs seeded in staging
  const TENANT_A = 'a0000000-0000-0000-0000-000000000001';
  const TENANT_B = 'b0000000-0000-0000-0000-000000000002';
  const OUTLET_A1 = 'a1000000-0000-0000-0000-000000000001';

  const USER_OWNER_A = '11111111-1111-1111-1111-111111111111';
  const USER_HEADBAR_A = '22222222-2222-2222-2222-222222222222';
  const USER_BARISTA_A = '33333333-3333-3333-3333-333333333333';
  const USER_SUSPENDED_A = '44444444-4444-4444-4444-444444444444';
  const USER_TRAINER_SARAH = '55555555-5555-5555-5555-555555555555'; // assigned
  const USER_TRAINER_UNASSIGNED = '55555555-5555-5555-5555-555555555556';
  const USER_ADMIN = '66666666-6666-6666-6666-666666666666';
  const USER_OWNER_B = '77777777-7777-7777-7777-777777777777';
  const USER_BARISTA_B = '88888888-8888-8888-8888-888888888888';

  const COMPETENCY_ID = 'c0000000-0000-0000-0000-000000000001';
  const RUBRIC_VERSION_ID = 'f1000000-0000-0000-0000-000000000001';
  const ENROLLMENT_ID = 'e0000000-0000-0000-0000-000000000001';

  // Helper to create Bearer headers
  const tokenFor = (userId: string, expOffsetSec = 3600) => {
    const token = createSignedToken({
      sub: userId,
      exp: Math.floor(Date.now() / 1000) + expOffsetSec,
    });
    return { authorization: `Bearer ${token}` };
  };

  console.log('\n[1. TEAMS AUTHENTICATION HARDENING]');

  // 1.1 Unauthenticated request returns 401
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/overview`, {
      method: 'GET',
    });
    const res = await getOverview(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 401 && data.code === 'UNAUTHENTICATED', '1.1 Unauthenticated request returns 401');
  } catch (err: any) {
    assert(false, '1.1 Unauthenticated request', err.message);
  }

  // 1.2 Forged Bearer Token returns 401 FORGED_TOKEN
  try {
    const validToken = createSignedToken({ sub: USER_OWNER_A });
    const parts = validToken.split('.');
    const forgedToken = `${parts[0]}.${parts[1]}.badsignature123456789`;
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/overview`, {
      method: 'GET',
      headers: { authorization: `Bearer ${forgedToken}` },
    });
    const res = await getOverview(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 401 && data.code === 'FORGED_TOKEN', '1.2 Forged Bearer Token returns 401 FORGED_TOKEN');
  } catch (err: any) {
    assert(false, '1.2 Forged Bearer Token', err.message);
  }

  // 1.3 Expired Bearer Token returns 401 EXPIRED_SESSION
  try {
    const expiredToken = createSignedToken({ sub: USER_OWNER_A, exp: Math.floor(Date.now() / 1000) - 60 });
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/overview`, {
      method: 'GET',
      headers: { authorization: `Bearer ${expiredToken}` },
    });
    const res = await getOverview(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 401 && data.code === 'EXPIRED_SESSION', '1.3 Expired Bearer Token returns 401 EXPIRED_SESSION');
  } catch (err: any) {
    assert(false, '1.3 Expired Bearer Token', err.message);
  }

  // 1.4 Unsupported token algorithm rejected with 401
  try {
    const header = Buffer.from(JSON.stringify({ alg: 'none', typ: 'JWT' })).toString('base64url');
    const payload = Buffer.from(JSON.stringify({ sub: USER_OWNER_A, exp: Math.floor(Date.now() / 1000) + 3600 })).toString('base64url');
    const badAlgToken = `${header}.${payload}.`;
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/overview`, {
      method: 'GET',
      headers: { authorization: `Bearer ${badAlgToken}` },
    });
    const res = await getOverview(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 401 && data.code === 'UNSUPPORTED_ALGORITHM', '1.4 Unsupported token algorithm rejected (401)');
  } catch (err: any) {
    assert(false, '1.4 Unsupported algorithm check', err.message);
  }

  // 1.5 Fail closed when SUPABASE_JWT_SECRET is missing
  try {
    const savedSecret = process.env.SUPABASE_JWT_SECRET;
    delete process.env.SUPABASE_JWT_SECRET;
    let threwConfigError = false;
    try {
      verifyJwtToken('any.token.string');
    } catch (e: any) {
      if (e.code === 'AUTH_CONFIG_MISSING' && e.status === 500) {
        threwConfigError = true;
      }
    }
    process.env.SUPABASE_JWT_SECRET = savedSecret;
    assert(threwConfigError, '1.5 Fail closed with 500 AUTH_CONFIG_MISSING when JWT secret is missing');
  } catch (err: any) {
    assert(false, '1.5 Fail closed secret check', err.message);
  }

  console.log('\n[2. TENANT ISOLATION & ROLE-BASED ACCESS]');

  // 2.1 Cross-tenant request (Owner A -> Tenant B) returns 403 CROSS_TENANT_VIOLATION
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_B}/overview`, {
      method: 'GET',
      headers: tokenFor(USER_OWNER_A),
    });
    const res = await getOverview(req, { params: { orgId: TENANT_B } });
    const data = await res.json();
    assert(
      res.status === 403 && (data.code === 'CROSS_TENANT_VIOLATION' || data.code === 'UNAUTHORIZED_TENANT_ACCESS'),
      '2.1 Cross-tenant access blocked (403)'
    );
  } catch (err: any) {
    assert(false, '2.1 Cross-tenant access', err.message);
  }

  // 2.2 Suspended user returns 403 MEMBERSHIP_SUSPENDED
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/overview`, {
      method: 'GET',
      headers: tokenFor(USER_SUSPENDED_A),
    });
    const res = await getOverview(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 403 && data.code === 'MEMBERSHIP_SUSPENDED', '2.2 Suspended user blocked (403 MEMBERSHIP_SUSPENDED)');
  } catch (err: any) {
    assert(false, '2.2 Suspended user access', err.message);
  }

  // 2.3 Unassigned Trainer accessing Tenant B returns 403 UNAUTHORIZED_TENANT_ACCESS
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_B}/overview`, {
      method: 'GET',
      headers: tokenFor(USER_TRAINER_UNASSIGNED),
    });
    const res = await getOverview(req, { params: { orgId: TENANT_B } });
    const data = await res.json();
    assert(res.status === 403 && data.code === 'UNAUTHORIZED_TENANT_ACCESS', '2.3 Unassigned Trainer denied access to unassigned tenant (403)');
  } catch (err: any) {
    assert(false, '2.3 Unassigned Trainer access', err.message);
  }

  // 2.4 Assigned Trainer cannot manage invitations / settings (403 INSUFFICIENT_PERMISSIONS)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/invitations`, {
      method: 'POST',
      headers: { ...tokenFor(USER_TRAINER_SARAH), 'content-type': 'application/json' },
      body: JSON.stringify({ email: 'new.member@cherrycoffee.id', role: 'learner' }),
    });
    const res = await postInvitation(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 403 && data.code === 'INSUFFICIENT_PERMISSIONS', '2.4 Trainer denied owner administrative actions (403 INSUFFICIENT_PERMISSIONS)');
  } catch (err: any) {
    assert(false, '2.4 Trainer permission boundary', err.message);
  }

  console.log('\n[3. PAYMENT CONFIRMATION & SETTLEMENT SECURITY]');

  // 3.1 Unauthenticated payment confirmation returns 401
  try {
    const req = new NextRequest('http://localhost:3000/api/payment/confirm', {
      method: 'POST',
      body: JSON.stringify({ order_id: 'tx-test-order-01' }),
    });
    const res = await postConfirmPayment(req);
    const data = await res.json();
    assert(res.status === 401 && data.code === 'UNAUTHENTICATED', '3.1 Unauthenticated payment confirmation returns 401');
  } catch (err: any) {
    assert(false, '3.1 Unauthenticated payment confirmation', err.message);
  }

  // 3.2 Cross-user order confirmation returns 403 ORDER_OWNERSHIP_MISMATCH
  try {
    const req = new NextRequest('http://localhost:3000/api/payment/confirm', {
      method: 'POST',
      headers: { ...tokenFor(USER_BARISTA_A), 'content-type': 'application/json' },
      body: JSON.stringify({ order_id: 'tx-other-user-order-01' }), // belongs to Owner B
    });
    const res = await postConfirmPayment(req);
    const data = await res.json();
    assert(res.status === 403 && data.code === 'ORDER_OWNERSHIP_MISMATCH', '3.2 Cross-user order confirmation returns 403 ORDER_OWNERSHIP_MISMATCH');
  } catch (err: any) {
    assert(false, '3.2 Cross-user order ownership check', err.message);
  }

  // 3.3 Fallback QRIS order cannot auto-activate Pro (400)
  try {
    const req = new NextRequest('http://localhost:3000/api/payment/confirm', {
      method: 'POST',
      headers: { ...tokenFor(USER_BARISTA_A), 'content-type': 'application/json' },
      body: JSON.stringify({ order_id: 'tx-fallback-qris-01' }),
    });
    const res = await postConfirmPayment(req);
    const data = await res.json();
    assert(res.status === 400 && data.code === 'FALLBACK_QRIS_REQUIRES_MANUAL_VERIFICATION', '3.3 Fallback QRIS rejected for auto-activation (400)');
  } catch (err: any) {
    assert(false, '3.3 Fallback QRIS check', err.message);
  }

  // 3.4 Expired order rejected (400 ORDER_EXPIRED)
  try {
    const req = new NextRequest('http://localhost:3000/api/payment/confirm', {
      method: 'POST',
      headers: { ...tokenFor(USER_BARISTA_A), 'content-type': 'application/json' },
      body: JSON.stringify({ order_id: 'tx-expired-order-01' }),
    });
    const res = await postConfirmPayment(req);
    const data = await res.json();
    assert(res.status === 400 && data.code === 'ORDER_EXPIRED', '3.4 Expired order rejected (400 ORDER_EXPIRED)');
  } catch (err: any) {
    assert(false, '3.4 Expired order check', err.message);
  }

  // 3.5 Public API ignores x-test-settlement-token header (no bypass in runtime)
  try {
    const req = new NextRequest('http://localhost:3000/api/payment/confirm', {
      method: 'POST',
      headers: {
        ...tokenFor(USER_BARISTA_A),
        'content-type': 'application/json',
        'x-test-settlement-token': 'test-settlement-token-verified-gw', // should be IGNORED!
      },
      body: JSON.stringify({ order_id: 'tx-test-order-01' }),
    });
    const res = await postConfirmPayment(req);
    const data = await res.json();
    // Since x-test-settlement-token is removed from runtime, default verifier runs and finds no real gopay gateway response -> 400 SETTLEMENT_UNVERIFIED
    assert(res.status === 400 && data.code === 'SETTLEMENT_UNVERIFIED', '3.5 Public API ignores x-test-settlement-token header (400 SETTLEMENT_UNVERIFIED)');
  } catch (err: any) {
    assert(false, '3.5 Test bypass header check', err.message);
  }

  // 3.6 Valid payment confirmed via Dependency Injection in test harness
  try {
    const mockVerifier = async () => ({
      settled: true,
      gatewayReference: 'gw-ref-tx-test-order-01',
      settledAmount: 49000,
    });

    const result = await confirmOrderPayment(USER_BARISTA_A, 'tx-test-order-01', {
      gatewayVerifier: mockVerifier,
    });
    assert(result.success === true && result.isProActivated === true, '3.6 Valid payment confirmed via DI verifier (200 OK)');

    // Verify in PostgreSQL that order is settled and user is now pro
    const txCheck = await query(`SELECT status FROM public.transactions WHERE id = 'tx-test-order-01'`);
    const profileCheck = await query(`SELECT is_pro, subscription_tier FROM public.profiles WHERE id = $1`, [USER_BARISTA_A]);
    assert(txCheck.rows[0].status === 'settled', '3.6.1 Transaction status settled in PostgreSQL');
    assert(profileCheck.rows[0].is_pro === true && profileCheck.rows[0].subscription_tier === 'pro', '3.6.2 Profile is_pro atomically activated in PostgreSQL');
  } catch (err: any) {
    assert(false, '3.6 DI payment confirmation', err.message);
  }

  // 3.7 Idempotent repeated confirmation returns alreadyPaid: true
  try {
    const repeatResult = await confirmOrderPayment(USER_BARISTA_A, 'tx-test-order-01');
    assert(repeatResult.success === true && repeatResult.alreadyPaid === true, '3.7 Repeated payment confirmation returns alreadyPaid: true');
  } catch (err: any) {
    assert(false, '3.7 Idempotent payment check', err.message);
  }

  console.log('\n[4. LEARNING PERSISTENCE & MONOTONIC LOCK]');

  // 4.1 Sync lesson progress persists in PostgreSQL public.lesson_progress
  try {
    const eventId = `ev-${Date.now()}`;
    const req = new NextRequest('http://localhost:3000/api/learning/sync-progress', {
      method: 'POST',
      headers: { ...tokenFor(USER_BARISTA_A), 'content-type': 'application/json' },
      body: JSON.stringify({
        event_id: eventId,
        progress: [
          {
            lesson_id: 'les-f2-1',
            status: 'completed',
            updated_at: new Date().toISOString(),
          },
        ],
      }),
    });
    const res = await postSyncProgress(req);
    const data = await res.json();
    assert(res.status === 200 && data.success === true, '4.1 Lesson progress synced (200 OK)');

    const progCheck = await query(
      `SELECT status FROM public.lesson_progress WHERE user_id = $1 AND lesson_id = 'les-f2-1'`,
      [USER_BARISTA_A]
    );
    assert(progCheck.rows.length === 1 && progCheck.rows[0].status === 'completed', '4.1.1 Progress verified in PostgreSQL public.lesson_progress');
  } catch (err: any) {
    assert(false, '4.1 Lesson progress sync', err.message);
  }

  // 4.2 Monotonic completion lock: client sending status: not_started cannot downgrade completed lesson
  try {
    const eventIdDowngrade = `ev-down-${Date.now()}`;
    const req = new NextRequest('http://localhost:3000/api/learning/sync-progress', {
      method: 'POST',
      headers: { ...tokenFor(USER_BARISTA_A), 'content-type': 'application/json' },
      body: JSON.stringify({
        event_id: eventIdDowngrade,
        progress: [
          {
            lesson_id: 'les-f2-1',
            status: 'not_started', // Attempt downgrade
            updated_at: new Date().toISOString(),
          },
        ],
      }),
    });
    const res = await postSyncProgress(req);
    assert(res.status === 200, '4.2 Progress update request handled (200 OK)');

    const progCheck = await query(
      `SELECT status FROM public.lesson_progress WHERE user_id = $1 AND lesson_id = 'les-f2-1'`,
      [USER_BARISTA_A]
    );
    assert(progCheck.rows[0].status === 'completed', '4.2.1 Monotonic lock verified: completed lesson NOT downgraded');
  } catch (err: any) {
    assert(false, '4.2 Monotonic completion lock', err.message);
  }

  // 4.3 Scoped Idempotency across different users with identical event ID
  try {
    const sharedEventId = `ev-collision-test`;
    // User A syncs
    const reqA = new NextRequest('http://localhost:3000/api/learning/sync-progress', {
      method: 'POST',
      headers: { ...tokenFor(USER_BARISTA_A), 'content-type': 'application/json' },
      body: JSON.stringify({
        event_id: sharedEventId,
        progress: [{ lesson_id: 'les-h4-1', status: 'completed', updated_at: new Date().toISOString() }],
      }),
    });
    const resA = await postSyncProgress(reqA);
    const dataA = await resA.json();

    // User B syncs with SAME event ID
    const reqB = new NextRequest('http://localhost:3000/api/learning/sync-progress', {
      method: 'POST',
      headers: { ...tokenFor(USER_BARISTA_B), 'content-type': 'application/json' },
      body: JSON.stringify({
        event_id: sharedEventId,
        progress: [{ lesson_id: 'les-h1-1', status: 'completed', updated_at: new Date().toISOString() }],
      }),
    });
    const resB = await postSyncProgress(reqB);
    const dataB = await resB.json();

    assert(dataA.user_id === USER_BARISTA_A && dataB.user_id === USER_BARISTA_B, '4.3 Scoped idempotency receipts prevent event ID cross-user collision');
  } catch (err: any) {
    assert(false, '4.3 Scoped idempotency test', err.message);
  }

  // 4.4 Quiz attempt scored on server and persisted in PostgreSQL
  try {
    const req = new NextRequest('http://localhost:3000/api/learning/quiz-attempt', {
      method: 'POST',
      headers: { ...tokenFor(USER_BARISTA_A), 'content-type': 'application/json' },
      body: JSON.stringify({
        quiz_id: 'quiz-final-barista',
        answers: {
          'q-bar-1': 'ans-bar-1a',
          'q-bar-2': 'ans-bar-2a',
          'q-bar-3': 'ans-bar-3a',
          'q-bar-4': 'ans-bar-4a',
          'q-bar-5': 'ans-bar-5a',
          'q-bar-6': 'ans-bar-6a',
          'q-bar-7': 'ans-bar-7a',
          'q-bar-8': 'ans-bar-8a',
        },
      }),
    });
    const res = await postQuizAttempt(req);
    const data = await res.json();
    assert(res.status === 200 && data.attempt?.passed === true, '4.4 Quiz attempt evaluated on server (200 OK, passed)');

    const quizCheck = await query(
      `SELECT passed, score FROM public.quiz_attempts WHERE user_id = $1 AND quiz_id = 'quiz-final-barista'`,
      [USER_BARISTA_A]
    );
    assert(quizCheck.rows.length >= 1 && quizCheck.rows[0].passed === true, '4.4.1 Quiz attempt persisted in PostgreSQL public.quiz_attempts');
  } catch (err: any) {
    assert(false, '4.4 Quiz attempt evaluation', err.message);
  }

  console.log('\n[5. ASSESSMENT AUTHORITY & DECISION 2 ENFORCEMENT]');

  // 5.1 Owner CANNOT sign off competency as an assessor (403 UNAUTHORIZED_ASSESSOR)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: { ...tokenFor(USER_OWNER_A), 'content-type': 'application/json' },
      body: JSON.stringify({
        action: 'submit_signoff',
        enrollment_id: ENROLLMENT_ID,
        competency_id: COMPETENCY_ID,
        rubric_version_id: RUBRIC_VERSION_ID,
        criterion_results: [
          { criterion_id: 'crit-dose', level: 3, critical_failure: false },
          { criterion_id: 'crit-tamp', level: 3, critical_failure: false },
          { criterion_id: 'crit-cleanliness', level: 3, critical_failure: false },
        ],
      }),
    });
    const res = await postAssessment(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 403 && data.code === 'UNAUTHORIZED_ASSESSOR', '5.1 Owner sign-off blocked with 403 UNAUTHORIZED_ASSESSOR');
  } catch (err: any) {
    assert(false, '5.1 Owner sign-off restriction', err.message);
  }

  // 5.2 Platform Admin CANNOT sign off competency directly (403 ADMIN_CANNOT_SIGNOFF)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: { ...tokenFor(USER_ADMIN), 'content-type': 'application/json' },
      body: JSON.stringify({
        action: 'submit_signoff',
        enrollment_id: ENROLLMENT_ID,
        competency_id: COMPETENCY_ID,
        rubric_version_id: RUBRIC_VERSION_ID,
        criterion_results: [
          { criterion_id: 'crit-dose', level: 3, critical_failure: false },
          { criterion_id: 'crit-tamp', level: 3, critical_failure: false },
          { criterion_id: 'crit-cleanliness', level: 3, critical_failure: false },
        ],
      }),
    });
    const res = await postAssessment(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 403 && data.code === 'ADMIN_CANNOT_SIGNOFF', '5.2 Admin sign-off blocked with 403 ADMIN_CANNOT_SIGNOFF');
  } catch (err: any) {
    assert(false, '5.2 Admin sign-off restriction', err.message);
  }

  // 5.3 Unassigned Trainer CANNOT sign off competency (403 TRAINER_NOT_ASSIGNED_TO_COHORT or UNAUTHORIZED_TENANT_ACCESS)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: { ...tokenFor(USER_TRAINER_UNASSIGNED), 'content-type': 'application/json' },
      body: JSON.stringify({
        action: 'submit_signoff',
        enrollment_id: ENROLLMENT_ID,
        competency_id: COMPETENCY_ID,
        rubric_version_id: RUBRIC_VERSION_ID,
        criterion_results: [
          { criterion_id: 'crit-dose', level: 3, critical_failure: false },
          { criterion_id: 'crit-tamp', level: 3, critical_failure: false },
          { criterion_id: 'crit-cleanliness', level: 3, critical_failure: false },
        ],
      }),
    });
    const res = await postAssessment(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 403 && (data.code === 'UNAUTHORIZED_TENANT_ACCESS' || data.code === 'TRAINER_NOT_ASSIGNED_TO_COHORT'), '5.3 Unassigned Trainer blocked with 403');
  } catch (err: any) {
    assert(false, '5.3 Unassigned Trainer restriction', err.message);
  }

  // 5.4 Mismatched rubric competency rejected (422 RUBRIC_COMPETENCY_MISMATCH)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: { ...tokenFor(USER_TRAINER_SARAH), 'content-type': 'application/json' },
      body: JSON.stringify({
        action: 'submit_signoff',
        enrollment_id: ENROLLMENT_ID,
        competency_id: 'c0000000-0000-0000-0000-999999999999', // wrong competency
        rubric_version_id: RUBRIC_VERSION_ID,
        criterion_results: [
          { criterion_id: 'crit-dose', level: 3, critical_failure: false },
        ],
      }),
    });
    const res = await postAssessment(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 422 && data.code === 'RUBRIC_COMPETENCY_MISMATCH', '5.4 Mismatched rubric competency rejected (422 RUBRIC_COMPETENCY_MISMATCH)');
  } catch (err: any) {
    assert(false, '5.4 Mismatched rubric check', err.message);
  }

  // 5.5 Head Bar can record observation and recommendation (200 OK)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: { ...tokenFor(USER_HEADBAR_A), 'content-type': 'application/json' },
      body: JSON.stringify({
        action: 'record_observation',
        enrollment_id: ENROLLMENT_ID,
        competency_id: COMPETENCY_ID,
        rubric_version_id: RUBRIC_VERSION_ID,
        notes: 'Ekstraksi konsisten 28 detik, tamping rata.',
        recommendation: 'recommend_competent',
      }),
    });
    const res = await postAssessment(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 200 && data.recommendation === 'recommend_competent', '5.5 Head Bar observation recorded (200 OK)');

    const obsCheck = await query(`SELECT decision, reason FROM b2b.assessment_signoffs WHERE assessment_id = $1`, [data.assessment_id]);
    assert(obsCheck.rows.length === 1 && obsCheck.rows[0].decision === 'requires_review', '5.5.1 Observation stored as requires_review in b2b.assessment_signoffs');
  } catch (err: any) {
    assert(false, '5.5 Head Bar observation', err.message);
  }

  // 5.6 Platform Admin administrative correction with required audit reason (200 OK)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: { ...tokenFor(USER_ADMIN), 'content-type': 'application/json' },
      body: JSON.stringify({
        action: 'administrative_correction',
        enrollment_id: ENROLLMENT_ID,
        competency_id: COMPETENCY_ID,
        reason: 'Penetapan ulang administratif berdasarkan SK Asesmen Nasional 2026/01.',
      }),
    });
    const res = await postAssessment(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 200 && data.audit_event_id !== undefined, '5.6 Admin correction recorded with audit trail (200 OK)');

    const auditCheck = await query(`SELECT action, reason FROM b2b.audit_events WHERE id = $1`, [data.audit_event_id]);
    assert(auditCheck.rows.length === 1 && auditCheck.rows[0].action === 'administrative_competency_correction', '5.6.1 Audit event verified in b2b.audit_events');
  } catch (err: any) {
    assert(false, '5.6 Admin correction', err.message);
  }

  console.log('\n[6. COMPETENCY ENGINE & RUBRIC GATES]');

  // 6.1 Empty rubric results rejected (422)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: { ...tokenFor(USER_TRAINER_SARAH), 'content-type': 'application/json' },
      body: JSON.stringify({
        action: 'submit_signoff',
        enrollment_id: ENROLLMENT_ID,
        competency_id: COMPETENCY_ID,
        rubric_version_id: RUBRIC_VERSION_ID,
        criterion_results: [], // empty
      }),
    });
    const res = await postAssessment(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 422 && data.code === 'EMPTY_SUBMISSION_REJECTED', '6.1 Empty rubric criteria submission rejected (422)');
  } catch (err: any) {
    assert(false, '6.1 Empty rubric check', err.message);
  }

  // 6.2 Missing mandatory rubric criteria rejected (422)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: { ...tokenFor(USER_TRAINER_SARAH), 'content-type': 'application/json' },
      body: JSON.stringify({
        action: 'submit_signoff',
        enrollment_id: ENROLLMENT_ID,
        competency_id: COMPETENCY_ID,
        rubric_version_id: RUBRIC_VERSION_ID,
        criterion_results: [
          { criterion_id: 'crit-dose', level: 3, critical_failure: false },
          // Missing crit-tamp and crit-cleanliness!
        ],
      }),
    });
    const res = await postAssessment(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 422 && data.code === 'MISSING_MANDATORY_CRITERIA', '6.2 Incomplete mandatory rubric criteria rejected (422)');
  } catch (err: any) {
    assert(false, '6.2 Missing criteria check', err.message);
  }

  // 6.3 Invalid level (e.g. 5) rejected (422)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: { ...tokenFor(USER_TRAINER_SARAH), 'content-type': 'application/json' },
      body: JSON.stringify({
        action: 'submit_signoff',
        enrollment_id: ENROLLMENT_ID,
        competency_id: COMPETENCY_ID,
        rubric_version_id: RUBRIC_VERSION_ID,
        criterion_results: [
          { criterion_id: 'crit-dose', level: 5, critical_failure: false }, // invalid level > 4
          { criterion_id: 'crit-tamp', level: 3, critical_failure: false },
          { criterion_id: 'crit-cleanliness', level: 3, critical_failure: false },
        ],
      }),
    });
    const res = await postAssessment(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 422 && data.code === 'INVALID_RUBRIC_LEVEL', '6.3 Invalid level (>4) rejected (422)');
  } catch (err: any) {
    assert(false, '6.3 Invalid level check', err.message);
  }

  // 6.4 Critical rubric failure (cleanliness = 1) rejected (422 GATE_FAILED)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: { ...tokenFor(USER_TRAINER_SARAH), 'content-type': 'application/json' },
      body: JSON.stringify({
        action: 'submit_signoff',
        enrollment_id: ENROLLMENT_ID,
        competency_id: COMPETENCY_ID,
        rubric_version_id: RUBRIC_VERSION_ID,
        criterion_results: [
          { criterion_id: 'crit-dose', level: 3, critical_failure: false },
          { criterion_id: 'crit-tamp', level: 3, critical_failure: false },
          { criterion_id: 'crit-cleanliness', level: 1, critical_failure: false }, // Critical breach derived by server!
        ],
      }),
    });
    const res = await postAssessment(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 422 && data.code === 'GATE_FAILED', '6.4 Critical failure rejected even when client forges critical_failure: false');
  } catch (err: any) {
    assert(false, '6.4 Critical failure check', err.message);
  }

  // 6.5 Assigned Trainer (Sarah) valid sign-off succeeds and updates PostgreSQL b2b.competency_status to 'competent'
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: { ...tokenFor(USER_TRAINER_SARAH), 'content-type': 'application/json' },
      body: JSON.stringify({
        action: 'submit_signoff',
        enrollment_id: ENROLLMENT_ID,
        competency_id: COMPETENCY_ID,
        rubric_version_id: RUBRIC_VERSION_ID,
        criterion_results: [
          { criterion_id: 'crit-dose', level: 3, critical_failure: false },
          { criterion_id: 'crit-tamp', level: 3, critical_failure: false },
          { criterion_id: 'crit-cleanliness', level: 3, critical_failure: false },
        ],
        notes: 'Praktik espresso sempurna. Memenuhi standar SKKNI.',
      }),
    });
    const res = await postAssessment(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 201 && data.success === true, '6.5 Valid Assigned Trainer sign-off succeeds (201 Created)');

    // Verify in PostgreSQL b2b.competency_status
    const compCheck = await query(
      `SELECT state, verified_at FROM b2b.competency_status WHERE enrollment_id = $1 AND competency_id = $2`,
      [ENROLLMENT_ID, COMPETENCY_ID]
    );
    assert(compCheck.rows.length === 1 && compCheck.rows[0].state === 'competent', '6.5.1 b2b.competency_status updated to competent in PostgreSQL');

    // Verify in b2b.competency_evidence
    const evidCheck = await query(
      `SELECT evidence_type, verification_status FROM b2b.competency_evidence WHERE enrollment_id = $1 AND competency_id = $2`,
      [ENROLLMENT_ID, COMPETENCY_ID]
    );
    assert(evidCheck.rows.length >= 1 && evidCheck.rows[0].verification_status === 'verified', '6.5.2 b2b.competency_evidence recorded in PostgreSQL');
  } catch (err: any) {
    assert(false, '6.5 Assigned Trainer sign-off', err.message);
  }

  // 6.6 Object-Level Authorization in GET assessments
  try {
    // Barista A should only see their own assessments
    const reqBarista = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'GET',
      headers: tokenFor(USER_BARISTA_A),
    });
    const resBarista = await getAssessments(reqBarista, { params: { orgId: TENANT_A } });
    const dataBarista = await resBarista.json();
    assert(resBarista.status === 200 && Array.isArray(dataBarista.assessments), '6.6 Barista A can query assessments');

    // Barista B querying Tenant A is blocked by tenant isolation
    const reqBaristaB = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'GET',
      headers: tokenFor(USER_BARISTA_B),
    });
    const resBaristaB = await getAssessments(reqBaristaB, { params: { orgId: TENANT_A } });
    const dataBaristaB = await resBaristaB.json();
    assert(resBaristaB.status === 403, '6.6.1 Cross-tenant barista blocked (403)');
  } catch (err: any) {
    assert(false, '6.6 Object-level authorization test', err.message);
  }

  console.log('\n[7. DATABASE SECURITY, VIEWS & COLUMN PRIVILEGES]');

  // 7.1 Verify public_profiles security barrier view exists and projects safe fields
  try {
    const viewCheck = await query(`SELECT column_name FROM information_schema.columns WHERE table_name = 'public_profiles'`);
    const cols = viewCheck.rows.map((r) => r.column_name);
    assert(cols.includes('id') && cols.includes('name') && !cols.includes('email'), '7.1 public.public_profiles view projects safe attributes without email');
  } catch (err: any) {
    assert(false, '7.1 public_profiles view check', err.message);
  }

  // 7.2 Verify direct column privilege protection on public.profiles
  try {
    const privCheck = await query(`
      SELECT privilege_type, column_name 
      FROM information_schema.column_privileges 
      WHERE table_name = 'profiles' AND grantee = 'authenticated' AND column_name = 'is_pro' AND privilege_type = 'UPDATE'
    `);
    assert(privCheck.rows.length === 0, '7.2 UPDATE privilege on is_pro revoked from authenticated role');
  } catch (err: any) {
    assert(false, '7.2 Column privilege check', err.message);
  }

  console.log('===============================================================');
  console.log(`   TOTAL RESULT: ${passed} PASSED, ${failed} FAILED               `);
  console.log('===============================================================');

  await closeDbPool();

  if (failed > 0) {
    process.exit(1);
  }
}

runStagingVerification().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
