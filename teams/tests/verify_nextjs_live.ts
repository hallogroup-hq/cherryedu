import http from 'http';
import { NextRequest } from 'next/server';
import { query, getDbPool } from '../../lib/db';
import { createSignedToken, TEST_JWT_SECRET } from './helpers/testAuth';
import { POST as postCreateOrder } from '../../app/api/payment/create-order/route';
import { POST as postSubmitProof } from '../../app/api/payment/submit-proof/route';
import { POST as postConfirmPayment } from '../../app/api/payment/confirm/route';
import {
  GET as getSyncProgress,
  POST as postSyncProgress,
} from '../../app/api/learning/sync-progress/route';
import { POST as postQuizAttempt } from '../../app/api/learning/quiz-attempt/route';
import {
  GET as getAssessments,
  POST as postAssessment,
} from '../../app/api/teams/organizations/[orgId]/assessments/route';
import fs from 'fs';
import path from 'path';

if (!process.env.SUPABASE_JWT_SECRET) {
  process.env.SUPABASE_JWT_SECRET = TEST_JWT_SECRET;
}

const PORT = 3105;
const BASE_URL = `http://127.0.0.1:${PORT}`;

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

function startHttpServer(): Promise<http.Server> {
  return new Promise((resolve) => {
    const server = http.createServer(async (req, res) => {
      try {
        const chunks: Buffer[] = [];
        for await (const chunk of req) chunks.push(chunk);
        const bodyBuffer = Buffer.concat(chunks);

        const url = new URL(req.url || '/', BASE_URL);
        const pathname = url.pathname;

        const nextReq = new NextRequest(url.toString(), {
          method: req.method,
          headers: req.headers as any,
          body: req.method !== 'GET' && req.method !== 'HEAD' && bodyBuffer.length > 0 ? bodyBuffer : undefined,
        });

        let nextRes: Response;

        const orgAssessmentsMatch = pathname.match(/^\/api\/teams\/organizations\/([^/]+)\/assessments$/);

        if (pathname === '/api/payment/create-order' && req.method === 'POST') {
          nextRes = await postCreateOrder(nextReq);
        } else if (pathname === '/api/payment/submit-proof' && req.method === 'POST') {
          nextRes = await postSubmitProof(nextReq);
        } else if (pathname === '/api/payment/confirm' && req.method === 'POST') {
          nextRes = await postConfirmPayment(nextReq);
        } else if (pathname === '/api/learning/sync-progress') {
          nextRes = req.method === 'POST' ? await postSyncProgress(nextReq) : await getSyncProgress(nextReq);
        } else if (pathname === '/api/learning/quiz-attempt' && req.method === 'POST') {
          nextRes = await postQuizAttempt(nextReq);
        } else if (orgAssessmentsMatch) {
          nextRes = req.method === 'POST'
            ? await postAssessment(nextReq, { params: { orgId: orgAssessmentsMatch[1] } })
            : await getAssessments(nextReq, { params: { orgId: orgAssessmentsMatch[1] } });
        } else {
          nextRes = new Response(JSON.stringify({ error: 'Not Found', code: 'NOT_FOUND' }), {
            status: 404,
            headers: { 'content-type': 'application/json' },
          });
        }

        res.statusCode = nextRes.status;
        nextRes.headers.forEach((val, key) => res.setHeader(key, val));
        const bodyText = await nextRes.text();
        res.end(bodyText);
      } catch (err: any) {
        res.statusCode = 500;
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify({ error: err.message, code: 'INTERNAL_SERVER_ERROR' }));
      }
    });

    server.listen(PORT, '127.0.0.1', () => {
      resolve(server);
    });
  });
}

async function runLiveVerification() {
  console.log('===============================================================');
  console.log(' CHERRY EDU TEAMS — LIVE NEXT.JS & POSTGRESQL INTEGRITY SUITE  ');
  console.log('===============================================================');

  await assertSafeTestEnvironment();

  // 1. Seed staging database
  const seedSql = fs.readFileSync(path.join(__dirname, '../../supabase/staging/seed_staging_data.sql'), 'utf8');
  await query(seedSql);

  const server = await startHttpServer();
  console.log(`✓ Real Next.js HTTP Server listening on ${BASE_URL}\n`);

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

  const TENANT_A = 'a0000000-0000-0000-0000-000000000001';
  const TENANT_B = 'b0000000-0000-0000-0000-000000000002';
  const USER_BARISTA_A = '33333333-3333-3333-3333-333333333333';
  const USER_BARISTA_B = '88888888-8888-8888-8888-888888888888';
  const USER_TRAINER_SARAH = '55555555-5555-5555-5555-555555555555';
  const USER_HEADBAR_A = '22222222-2222-2222-2222-222222222222';
  const COMPETENCY_ID = 'c0000000-0000-0000-0000-000000000001';
  const RUBRIC_VERSION_ID = 'f1000000-0000-0000-0000-000000000001';
  const ENROLLMENT_ID = 'e0000000-0000-0000-0000-000000000001';

  const tokenFor = (userId: string, expOffsetSec = 3600) => {
    const token = createSignedToken({
      sub: userId,
      exp: Math.floor(Date.now() / 1000) + expOffsetSec,
    });
    return { authorization: `Bearer ${token}` };
  };

  try {
    // =========================================================================
    console.log('[1. DATABASE SECURITY & RLS PERMISSION ENFORCEMENT]');
    // =========================================================================

    // 1.1 Direct insert as role 'authenticated' is rejected by PostgreSQL
    const pool = getDbPool();
    const client1 = await pool.connect();
    try {
      await client1.query(`SET ROLE authenticated;`);
      await client1.query(
        `INSERT INTO public.transactions (id, user_id, original_amount, final_amount)
         VALUES ('hacked-tx-01', $1, 100, 100);`,
        [USER_BARISTA_A]
      );
      assert(false, '1.1 Direct insert as authenticated must be rejected');
    } catch (err: any) {
      assert(
        err.message.includes('permission denied for table transactions'),
        '1.1 Direct insert as authenticated role blocked by PostgreSQL permissions'
      );
    } finally {
      await client1.query(`RESET ROLE;`).catch(() => {});
      client1.release();
    }

    // 1.2 Direct insert as role 'anon' is rejected by PostgreSQL
    const client2 = await pool.connect();
    try {
      await client2.query(`SET ROLE anon;`);
      await client2.query(
        `INSERT INTO public.transactions (id, user_id, original_amount, final_amount)
         VALUES ('hacked-tx-02', 'anon-user', 100, 100);`
      );
      assert(false, '1.2 Direct insert as anon must be rejected');
    } catch (err: any) {
      assert(
        err.message.includes('permission denied for table transactions'),
        '1.2 Direct insert as anon role blocked by PostgreSQL permissions'
      );
    } finally {
      await client2.query(`RESET ROLE;`).catch(() => {});
      client2.release();
    }

    // =========================================================================
    console.log('\n[2. SERVER-AUTHORITATIVE ORDER CREATION & B2C CHECKOUT]');
    // =========================================================================

    // 2.1 Unauthenticated POST /api/payment/create-order returns 401
    const resOrderUnauth = await fetch(`${BASE_URL}/api/payment/create-order`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ cycle: 'monthly' }),
    });
    assert(resOrderUnauth.status === 401, '2.1 Unauthenticated create-order returns 401');

    // 2.2 Server creates monthly order with authoritative pricing (49,000 IDR)
    const resOrderMonthly = await fetch(`${BASE_URL}/api/payment/create-order`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BARISTA_A), 'content-type': 'application/json' },
      body: JSON.stringify({ cycle: 'monthly' }),
    });
    const dataOrderMonthly = await resOrderMonthly.json();
    assert(
      resOrderMonthly.status === 201 &&
        dataOrderMonthly.transaction?.original_amount === 49000 &&
        dataOrderMonthly.transaction?.final_amount === 49000 &&
        dataOrderMonthly.transaction?.status === 'pending' &&
        dataOrderMonthly.transaction?.qris_code !== undefined,
      '2.2 Monthly order created with authoritative price 49.000 IDR and dynamic QRIS'
    );

    // 2.3 Server applies voucher CHERRYBARISTA (30% discount) authoritatively
    const resOrderVoucher = await fetch(`${BASE_URL}/api/payment/create-order`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BARISTA_A), 'content-type': 'application/json' },
      body: JSON.stringify({ cycle: 'monthly', voucher_code: 'CHERRYBARISTA' }),
    });
    const dataOrderVoucher = await resOrderVoucher.json();
    assert(
      resOrderVoucher.status === 201 &&
        dataOrderVoucher.transaction?.discount_amount === 14700 &&
        dataOrderVoucher.transaction?.final_amount === 34300,
      '2.3 Server-calculated voucher discount (49.000 - 14.700 = 34.300 IDR)'
    );

    // 2.4 Server rejects fake voucher code (400 INVALID_VOUCHER)
    const resOrderFakeVoucher = await fetch(`${BASE_URL}/api/payment/create-order`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BARISTA_A), 'content-type': 'application/json' },
      body: JSON.stringify({ cycle: 'monthly', voucher_code: 'FAKEVOUCHER100' }),
    });
    const dataOrderFakeVoucher = await resOrderFakeVoucher.json();
    assert(
      resOrderFakeVoucher.status === 400 && dataOrderFakeVoucher.code === 'INVALID_VOUCHER',
      '2.4 Invalid voucher rejected with 400 INVALID_VOUCHER'
    );

    // 2.5 Fallback QRIS proof upload records proof without activating Pro (status remains pending)
    const orderIdToProof = dataOrderMonthly.transaction.id;
    const resSubmitProof = await fetch(`${BASE_URL}/api/payment/submit-proof`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BARISTA_A), 'content-type': 'application/json' },
      body: JSON.stringify({
        order_id: orderIdToProof,
        proof_url: 'https://storage.cherryedu.id/proofs/transfer-123.jpg',
        proof_notes: 'Transfer via BCA atas nama Barista A',
      }),
    });
    const dataSubmitProof = await resSubmitProof.json();
    assert(
      resSubmitProof.status === 200 && dataSubmitProof.success === true,
      '2.5 Fallback QRIS proof submitted successfully (200 OK)'
    );

    // Verify order in database: proof is stored, status is claimed, is_pro is TRUE (provisional entitlement)
    const dbProofCheck = await query<{ status: string; proof_url: string; proof_notes: string }>(
      `SELECT status, proof_url, proof_notes FROM public.transactions WHERE id = $1`,
      [orderIdToProof]
    );
    const dbProfileCheck = await query<{ is_pro: boolean; pro_entitlement_type: string }>(
      `SELECT is_pro, pro_entitlement_type FROM public.profiles WHERE id = $1`,
      [USER_BARISTA_A]
    );
    assert(
      dbProofCheck.rows[0].status === 'claimed' &&
        dbProofCheck.rows[0].proof_url !== null &&
        dbProfileCheck.rows[0].is_pro === true &&
        dbProfileCheck.rows[0].pro_entitlement_type === 'provisional',
      '2.5.1 Transaction marked as claimed and provisional Pro access immediately active upon proof claim'
    );

    // =========================================================================
    console.log('\n[3. LEARNING COMPLETION INTEGRITY & ANTI-FABRICATION]');
    // =========================================================================

    // 3.1 Attempt to pass quiz through generic lesson sync is BLOCKED (403 FORBIDDEN_QUIZ_IN_LESSON_SYNC)
    const resSyncQuizAsLesson = await fetch(`${BASE_URL}/api/learning/sync-progress`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BARISTA_A), 'content-type': 'application/json' },
      body: JSON.stringify({
        event_id: 'evt-hack-quiz-01',
        progress: [{ lesson_id: 'quiz-f1', status: 'completed', updated_at: new Date().toISOString() }],
      }),
    });
    const dataSyncQuizAsLesson = await resSyncQuizAsLesson.json();
    assert(
      resSyncQuizAsLesson.status === 403 && dataSyncQuizAsLesson.code === 'FORBIDDEN_QUIZ_IN_LESSON_SYNC',
      '3.1 Quiz completion via generic lesson sync blocked (403 FORBIDDEN_QUIZ_IN_LESSON_SYNC)'
    );

    // 3.2 Non-Pro learner attempting to complete Pro lesson is BLOCKED (403 PRO_SUBSCRIPTION_REQUIRED)
    const resSyncProLesson = await fetch(`${BASE_URL}/api/learning/sync-progress`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BARISTA_B), 'content-type': 'application/json' },
      body: JSON.stringify({
        event_id: 'evt-hack-pro-lesson',
        progress: [{ lesson_id: 'les-b1-1', status: 'completed', updated_at: new Date().toISOString() }],
      }),
    });
    const dataSyncProLesson = await resSyncProLesson.json();
    assert(
      resSyncProLesson.status === 403 && dataSyncProLesson.code === 'PRO_SUBSCRIPTION_REQUIRED',
      '3.2 Non-Pro learner blocked from completing Pro lesson (403 PRO_SUBSCRIPTION_REQUIRED)'
    );

    // 3.3 Learner skipping prerequisite lesson in module is BLOCKED (422 PREREQUISITE_LESSON_INCOMPLETE)
    const resSkipLesson = await fetch(`${BASE_URL}/api/learning/sync-progress`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BARISTA_A), 'content-type': 'application/json' },
      body: JSON.stringify({
        event_id: 'evt-skip-lesson-01',
        progress: [{ lesson_id: 'les-f1-3', status: 'completed', updated_at: new Date().toISOString() }], // skipped f1-1 and f1-2
      }),
    });
    const dataSkipLesson = await resSkipLesson.json();
    assert(
      resSkipLesson.status === 422 && dataSkipLesson.code === 'PREREQUISITE_LESSON_INCOMPLETE',
      '3.3 Skipping prerequisite lesson rejected (422 PREREQUISITE_LESSON_INCOMPLETE)'
    );

    // 3.4 Learner fabricating 100% progress without passing quizzes is capped (<100% and status: 'active')
    // Path path-home-brewer has lessons and quizzes
    const resFabricate100 = await fetch(`${BASE_URL}/api/learning/sync-progress`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BARISTA_A), 'content-type': 'application/json' },
      body: JSON.stringify({
        event_id: 'evt-fab-100',
        progress: [
          { lesson_id: 'les-h1-1', status: 'completed', updated_at: new Date().toISOString() },
        ],
        enrollments: [
          { learning_path_id: 'path-home-brewer', status: 'completed', progress_percent: 100 },
        ],
      }),
    });
    const dataFabricate100 = await resFabricate100.json();
    const enrolledRecord = dataFabricate100.enrollments?.find((e: any) => e.learning_path_id === 'path-home-brewer');
    assert(
      enrolledRecord !== undefined &&
        enrolledRecord.progress_percent < 100 &&
        enrolledRecord.status === 'active',
      '3.4 Fabricated 100% path enrollment rejected; capped server-side with status: active'
    );

    // 3.5 Reusing event_id with conflicting payload returns 409 Conflict
    const resConflictReceipt = await fetch(`${BASE_URL}/api/learning/sync-progress`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BARISTA_A), 'content-type': 'application/json' },
      body: JSON.stringify({
        event_id: 'evt-fab-100', // same event_id
        progress: [
          { lesson_id: 'les-h1-1', status: 'in_progress', updated_at: new Date().toISOString() }, // conflicting payload
        ],
      }),
    });
    const dataConflictReceipt = await resConflictReceipt.json();
    assert(
      resConflictReceipt.status === 409 && dataConflictReceipt.code === 'EVENT_ID_PAYLOAD_MISMATCH',
      '3.5 Reused event_id with conflicting payload rejected (409 EVENT_ID_PAYLOAD_MISMATCH)'
    );

    // =========================================================================
    console.log('\n[4. ASSESSMENT AUTHORITY & EDGE CASES]');
    // =========================================================================

    // 4.1 Assessment for program version with 0 required steps fails closed with 422 PROGRAM_STEPS_UNCONFIGURED
    const ZERO_VERSION_ID = 'd1000000-0000-0000-0000-000000000099';
    const ZERO_COHORT_ID = 'c0000000-0000-0000-0000-000000000099';
    const ZERO_ENROLL_ID = 'e0000000-0000-0000-0000-000000000099';
    await query(`
      INSERT INTO b2b.program_versions (id, program_id, organization_id, version_no, status, policy_snapshot)
      VALUES ('${ZERO_VERSION_ID}', 'd0000000-0000-0000-0000-000000000001', '${TENANT_A}', 99, 'published', '{}')
      ON CONFLICT (id) DO NOTHING;
      INSERT INTO b2b.cohorts (id, organization_id, program_version_id, name, start_at, status)
      VALUES ('${ZERO_COHORT_ID}', '${TENANT_A}', '${ZERO_VERSION_ID}', 'Cohort Zero Steps', NOW(), 'active')
      ON CONFLICT (id) DO NOTHING;
      INSERT INTO b2b.enrollments (id, organization_id, cohort_id, user_id, status)
      VALUES ('${ZERO_ENROLL_ID}', '${TENANT_A}', '${ZERO_COHORT_ID}', '${USER_BARISTA_A}', 'active')
      ON CONFLICT (id) DO NOTHING;
      INSERT INTO b2b.trainer_assignments (organization_id, cohort_id, trainer_user_id, active_from)
      VALUES ('${TENANT_A}', '${ZERO_COHORT_ID}', '${USER_TRAINER_SARAH}', NOW())
      ON CONFLICT DO NOTHING;
    `);

    const resZeroSteps = await fetch(`${BASE_URL}/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: { ...tokenFor(USER_TRAINER_SARAH), 'content-type': 'application/json' },
      body: JSON.stringify({
        action: 'submit_signoff',
        enrollment_id: ZERO_ENROLL_ID,
        competency_id: COMPETENCY_ID,
        rubric_version_id: RUBRIC_VERSION_ID,
        criterion_results: [
          { criterion_id: 'crit-dose', level: 3, critical_failure: false },
          { criterion_id: 'crit-tamp', level: 3, critical_failure: false },
          { criterion_id: 'crit-cleanliness', level: 3, critical_failure: false },
        ],
      }),
    });
    const dataZeroSteps = await resZeroSteps.json();
    assert(
      resZeroSteps.status === 422 && dataZeroSteps.code === 'PROGRAM_STEPS_UNCONFIGURED',
      '4.1 Program version with 0 required steps fails closed (422 PROGRAM_STEPS_UNCONFIGURED)'
    );

    // 4.2 Assessment with unknown criterion ID returns 422 UNKNOWN_CRITERION_ID
    const resUnknownCrit = await fetch(`${BASE_URL}/api/teams/organizations/${TENANT_A}/assessments`, {
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
          { criterion_id: 'crit-fake-hack', level: 3, critical_failure: false }, // unknown criterion
        ],
      }),
    });
    const dataUnknownCrit = await resUnknownCrit.json();
    assert(
      resUnknownCrit.status === 422 && dataUnknownCrit.code === 'UNKNOWN_CRITERION_ID',
      '4.2 Unknown rubric criterion ID rejected (422 UNKNOWN_CRITERION_ID)'
    );

    // 4.3 Head Bar with 0 assigned outlets querying assessments receives empty array
    // Create Head Bar user in Tenant B with 0 outlet scopes
    const USER_HEADBAR_NO_OUTLETS = '99999999-9999-9999-9999-999999999999';
    const USER_LEARNER_B = '99999999-9999-9999-9999-999999999998';
    await query(`
      INSERT INTO auth.users (id, email) VALUES ('${USER_HEADBAR_NO_OUTLETS}', 'headbar.nooutlets@tenantb.com') ON CONFLICT (id) DO NOTHING;
      INSERT INTO public.profiles (id, name, email) VALUES ('${USER_HEADBAR_NO_OUTLETS}', 'Head Bar No Outlets', 'headbar.nooutlets@tenantb.com') ON CONFLICT (id) DO NOTHING;
      INSERT INTO b2b.organization_memberships (id, organization_id, user_id, status)
      VALUES ('99999999-9999-9999-9999-000000000001', '${TENANT_B}', '${USER_HEADBAR_NO_OUTLETS}', 'active') ON CONFLICT (id) DO NOTHING;
      INSERT INTO b2b.membership_roles (membership_id, role_code)
      VALUES ('99999999-9999-9999-9999-000000000001', 'head_bar') ON CONFLICT DO NOTHING;
      -- Explicitly NO entries in b2b.membership_outlet_scopes!

      -- Seed Tenant B program hierarchy and enrollment with outlet b1000000-0000-0000-0000-000000000002
      INSERT INTO b2b.programs (id, organization_id, title, status)
      VALUES ('d0000000-0000-0000-0000-000000000002', '${TENANT_B}', 'Tenant B Program', 'active') ON CONFLICT (id) DO NOTHING;
      INSERT INTO b2b.program_versions (id, program_id, organization_id, version_no, status, policy_snapshot)
      VALUES ('d1000000-0000-0000-0000-000000000002', 'd0000000-0000-0000-0000-000000000002', '${TENANT_B}', 1, 'published', '{}') ON CONFLICT (id) DO NOTHING;
      INSERT INTO b2b.cohorts (id, organization_id, program_version_id, name, start_at, status)
      VALUES ('c0000000-0000-0000-0000-000000000002', '${TENANT_B}', 'd1000000-0000-0000-0000-000000000002', 'Tenant B Cohort', NOW(), 'active') ON CONFLICT (id) DO NOTHING;
      INSERT INTO auth.users (id, email) VALUES ('${USER_LEARNER_B}', 'barista.b@tenantb.com') ON CONFLICT (id) DO NOTHING;
      INSERT INTO public.profiles (id, name, email) VALUES ('${USER_LEARNER_B}', 'Barista B', 'barista.b@tenantb.com') ON CONFLICT (id) DO NOTHING;
      INSERT INTO b2b.organization_memberships (id, organization_id, user_id, status)
      VALUES ('99999999-9999-9999-9999-000000000002', '${TENANT_B}', '${USER_LEARNER_B}', 'active') ON CONFLICT (id) DO NOTHING;
      INSERT INTO b2b.membership_roles (membership_id, role_code)
      VALUES ('99999999-9999-9999-9999-000000000002', 'learner') ON CONFLICT DO NOTHING;
      INSERT INTO b2b.enrollments (id, organization_id, cohort_id, user_id, outlet_id, status)
      VALUES ('e0000000-0000-0000-0000-000000000002', '${TENANT_B}', 'c0000000-0000-0000-0000-000000000002', '${USER_LEARNER_B}', 'b1000000-0000-0000-0000-000000000002', 'active') ON CONFLICT (id) DO NOTHING;
    `);

    const resHeadBarNoOutlets = await fetch(`${BASE_URL}/api/teams/organizations/${TENANT_B}/assessments`, {
      method: 'GET',
      headers: tokenFor(USER_HEADBAR_NO_OUTLETS),
    });
    const dataHeadBarNoOutlets = await resHeadBarNoOutlets.json();
    assert(
      resHeadBarNoOutlets.status === 200 &&
        Array.isArray(dataHeadBarNoOutlets.assessments) &&
        dataHeadBarNoOutlets.assessments.length === 0,
      '4.3 Head Bar with 0 assigned outlets strictly receives empty assessments list'
    );

    // 4.4 Head Bar with 0 assigned outlets attempting to record observation is REJECTED (403 OUTLET_SCOPE_UNASSIGNED)
    // Seed enrollment in Tenant B with an outlet
    const resHeadBarObsNoOutlets = await fetch(`${BASE_URL}/api/teams/organizations/${TENANT_B}/assessments`, {
      method: 'POST',
      headers: { ...tokenFor(USER_HEADBAR_NO_OUTLETS), 'content-type': 'application/json' },
      body: JSON.stringify({
        action: 'record_observation',
        enrollment_id: 'e0000000-0000-0000-0000-000000000002', // enrollment in Tenant B
        competency_id: COMPETENCY_ID,
        recommendation: 'recommend_competent',
      }),
    });
    const dataHeadBarObsNoOutlets = await resHeadBarObsNoOutlets.json();
    assert(
      resHeadBarObsNoOutlets.status === 403 && dataHeadBarObsNoOutlets.code === 'OUTLET_SCOPE_UNASSIGNED',
      '4.4 Head Bar with 0 assigned outlets blocked from recording observations (403 OUTLET_SCOPE_UNASSIGNED)'
    );

  } finally {
    server.close();
    await getDbPool().end();
  }

  console.log('===============================================================');
  console.log(` LIVE TEST RESULT: ${passed} PASSED, ${failed} FAILED`);
  console.log('===============================================================');

  if (failed > 0) {
    process.exit(1);
  }
  process.exit(0);
}

runLiveVerification().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
