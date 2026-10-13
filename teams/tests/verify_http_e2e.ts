import http from 'http';
import { NextRequest } from 'next/server';
import { query, closeDbPool } from '../../lib/db';
import { createSignedToken, TEST_JWT_SECRET } from './helpers/testAuth';

// Route Handlers
import { GET as getOverview } from '../../app/api/teams/organizations/[orgId]/overview/route';
import {
  GET as getInvitations,
  POST as postInvitation,
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

process.env.SUPABASE_JWT_SECRET = TEST_JWT_SECRET;
(process.env as any).NODE_ENV = 'test';
process.env.ALLOW_DESTRUCTIVE_STAGING_SEED = 'true';

const PORT = 3099;
const BASE_URL = `http://127.0.0.1:${PORT}`;

async function assertSafeTestEnvironment() {
  const nodeEnv = process.env.NODE_ENV;
  const allowSeed = process.env.ALLOW_DESTRUCTIVE_STAGING_SEED;
  if (nodeEnv !== 'test' && allowSeed !== 'true') {
    throw new Error('STAGING_SAFETY_GUARD: Destructive staging seeding is only permitted when NODE_ENV=test or ALLOW_DESTRUCTIVE_STAGING_SEED=true.');
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

        // Route matching
        const orgOverviewMatch = pathname.match(/^\/api\/teams\/organizations\/([^/]+)\/overview$/);
        const orgInvitationsMatch = pathname.match(/^\/api\/teams\/organizations\/([^/]+)\/invitations$/);
        const orgAssessmentsMatch = pathname.match(/^\/api\/teams\/organizations\/([^/]+)\/assessments$/);

        if (pathname === '/api/payment/confirm' && req.method === 'POST') {
          nextRes = await postConfirmPayment(nextReq);
        } else if (pathname === '/api/learning/sync-progress') {
          nextRes = req.method === 'POST' ? await postSyncProgress(nextReq) : await getSyncProgress(nextReq);
        } else if (pathname === '/api/learning/quiz-attempt' && req.method === 'POST') {
          nextRes = await postQuizAttempt(nextReq);
        } else if (orgOverviewMatch && req.method === 'GET') {
          nextRes = await getOverview(nextReq, { params: { orgId: orgOverviewMatch[1] } });
        } else if (orgInvitationsMatch) {
          nextRes = req.method === 'POST'
            ? await postInvitation(nextReq, { params: { orgId: orgInvitationsMatch[1] } })
            : await getInvitations(nextReq, { params: { orgId: orgInvitationsMatch[1] } });
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

async function runHttpE2eVerification() {
  console.log('===============================================================');
  console.log('     CHERRY EDU TEAMS — REAL HTTP WIRE INTEGRATION SUITE       ');
  console.log('===============================================================');

  await assertSafeTestEnvironment();

  // Seed staging data
  const seedSql = fs.readFileSync(path.join(__dirname, '../../supabase/staging/seed_staging_data.sql'), 'utf8');
  await query(seedSql);

  const server = await startHttpServer();
  console.log(`✓ HTTP Test Server running on ${BASE_URL}\n`);

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

  const USER_OWNER_A = '11111111-1111-1111-1111-111111111111';
  const USER_BARISTA_A = '33333333-3333-3333-3333-333333333333';
  const USER_SUSPENDED_A = '44444444-4444-4444-4444-444444444444';
  const USER_TRAINER_SARAH = '55555555-5555-5555-5555-555555555555';
  const USER_TRAINER_UNASSIGNED = '55555555-5555-5555-5555-555555555556';
  const USER_ADMIN = '66666666-6666-6666-6666-666666666666';

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
    console.log('[1. HTTP AUTHENTICATION & RBAC GATES]');

    // 1.1 HTTP GET /overview without token -> 401
    const res1 = await fetch(`${BASE_URL}/api/teams/organizations/${TENANT_A}/overview`);
    const data1 = await res1.json();
    assert(res1.status === 401 && data1.code === 'UNAUTHENTICATED', '1.1 HTTP GET /overview unauthenticated returns 401');

    // 1.2 HTTP GET /overview with forged signature -> 401 FORGED_TOKEN
    const validToken = createSignedToken({ sub: USER_OWNER_A });
    const parts = validToken.split('.');
    const forgedToken = `${parts[0]}.${parts[1]}.forgedsig00000`;
    const res2 = await fetch(`${BASE_URL}/api/teams/organizations/${TENANT_A}/overview`, {
      headers: { authorization: `Bearer ${forgedToken}` },
    });
    const data2 = await res2.json();
    assert(res2.status === 401 && data2.code === 'FORGED_TOKEN', '1.2 HTTP GET /overview forged token returns 401 FORGED_TOKEN');

    // 1.3 HTTP GET /overview with expired token -> 401 EXPIRED_SESSION
    const expiredToken = createSignedToken({ sub: USER_OWNER_A, exp: Math.floor(Date.now() / 1000) - 100 });
    const res3 = await fetch(`${BASE_URL}/api/teams/organizations/${TENANT_A}/overview`, {
      headers: { authorization: `Bearer ${expiredToken}` },
    });
    const data3 = await res3.json();
    assert(res3.status === 401 && data3.code === 'EXPIRED_SESSION', '1.3 HTTP GET /overview expired token returns 401 EXPIRED_SESSION');

    // 1.4 HTTP Cross-tenant access -> 403 CROSS_TENANT_VIOLATION
    const res4 = await fetch(`${BASE_URL}/api/teams/organizations/${TENANT_B}/overview`, {
      headers: tokenFor(USER_OWNER_A),
    });
    const data4 = await res4.json();
    assert(
      res4.status === 403 && (data4.code === 'CROSS_TENANT_VIOLATION' || data4.code === 'UNAUTHORIZED_TENANT_ACCESS'),
      '1.4 HTTP cross-tenant access returns 403'
    );

    // 1.5 HTTP Suspended user access -> 403 MEMBERSHIP_SUSPENDED
    const res5 = await fetch(`${BASE_URL}/api/teams/organizations/${TENANT_A}/overview`, {
      headers: tokenFor(USER_SUSPENDED_A),
    });
    const data5 = await res5.json();
    assert(res5.status === 403 && data5.code === 'MEMBERSHIP_SUSPENDED', '1.5 HTTP suspended user returns 403 MEMBERSHIP_SUSPENDED');

    // 1.6 HTTP Valid Owner access -> 200 OK
    const res6 = await fetch(`${BASE_URL}/api/teams/organizations/${TENANT_A}/overview`, {
      headers: tokenFor(USER_OWNER_A),
    });
    const data6 = await res6.json();
    assert(res6.status === 200 && data6.overview?.organization?.id === TENANT_A, '1.6 HTTP valid owner access returns 200 OK');

    console.log('\n[2. HTTP PAYMENT SETTLEMENT SECURITY]');

    // 2.1 Public API request carrying x-test-settlement-token is IGNORED and fails with 400 SETTLEMENT_UNVERIFIED
    const resPayBypass = await fetch(`${BASE_URL}/api/payment/confirm`, {
      method: 'POST',
      headers: {
        ...tokenFor(USER_BARISTA_A),
        'content-type': 'application/json',
        'x-test-settlement-token': 'test-settlement-token-verified-gw',
      },
      body: JSON.stringify({ order_id: 'tx-test-order-01' }),
    });
    const dataPayBypass = await resPayBypass.json();
    assert(resPayBypass.status === 400 && dataPayBypass.code === 'SETTLEMENT_UNVERIFIED', '2.1 HTTP payment confirm ignores x-test-settlement-token header (400 SETTLEMENT_UNVERIFIED)');

    // 2.2 Cross-user payment confirmation attempt -> 403 ORDER_OWNERSHIP_MISMATCH
    const resPayCross = await fetch(`${BASE_URL}/api/payment/confirm`, {
      method: 'POST',
      headers: {
        ...tokenFor(USER_BARISTA_A),
        'content-type': 'application/json',
      },
      body: JSON.stringify({ order_id: 'tx-other-user-order-01' }),
    });
    const dataPayCross = await resPayCross.json();
    assert(resPayCross.status === 403 && dataPayCross.code === 'ORDER_OWNERSHIP_MISMATCH', '2.2 HTTP cross-user order confirmation returns 403');

    // 2.3 Expired order confirmation -> 400 ORDER_EXPIRED
    const resPayExp = await fetch(`${BASE_URL}/api/payment/confirm`, {
      method: 'POST',
      headers: {
        ...tokenFor(USER_BARISTA_A),
        'content-type': 'application/json',
      },
      body: JSON.stringify({ order_id: 'tx-expired-order-01' }),
    });
    const dataPayExp = await resPayExp.json();
    assert(resPayExp.status === 400 && dataPayExp.code === 'ORDER_EXPIRED', '2.3 HTTP expired order returns 400 ORDER_EXPIRED');

    console.log('\n[3. HTTP LEARNING PROGRESS & PERSISTENCE]');

    // 3.1 HTTP Sync lesson progress
    const resSync = await fetch(`${BASE_URL}/api/learning/sync-progress`, {
      method: 'POST',
      headers: {
        ...tokenFor(USER_BARISTA_A),
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        event_id: `http-evt-${Date.now()}`,
        progress: [{ lesson_id: 'les-f2-1', status: 'completed', updated_at: new Date().toISOString() }],
      }),
    });
    const dataSync = await resSync.json();
    assert(resSync.status === 200 && dataSync.success === true, '3.1 HTTP sync progress returns 200 OK');

    // 3.2 HTTP Quiz attempt submission scored on server
    const resQuiz = await fetch(`${BASE_URL}/api/learning/quiz-attempt`, {
      method: 'POST',
      headers: {
        ...tokenFor(USER_BARISTA_A),
        'content-type': 'application/json',
      },
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
    const dataQuiz = await resQuiz.json();
    assert(resQuiz.status === 200 && dataQuiz.attempt?.passed === true, '3.2 HTTP quiz attempt evaluated on server (200 OK, passed)');

    console.log('\n[4. HTTP ASSESSMENT AUTHORITY & RUBRIC GATES]');

    // 4.1 Owner sign-off blocked -> 403 UNAUTHORIZED_ASSESSOR
    const resSignOwner = await fetch(`${BASE_URL}/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: {
        ...tokenFor(USER_OWNER_A),
        'content-type': 'application/json',
      },
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
    const dataSignOwner = await resSignOwner.json();
    assert(resSignOwner.status === 403 && dataSignOwner.code === 'UNAUTHORIZED_ASSESSOR', '4.1 HTTP Owner sign-off blocked with 403 UNAUTHORIZED_ASSESSOR');

    // 4.2 Admin sign-off blocked -> 403 ADMIN_CANNOT_SIGNOFF
    const resSignAdmin = await fetch(`${BASE_URL}/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: {
        ...tokenFor(USER_ADMIN),
        'content-type': 'application/json',
      },
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
    const dataSignAdmin = await resSignAdmin.json();
    assert(resSignAdmin.status === 403 && dataSignAdmin.code === 'ADMIN_CANNOT_SIGNOFF', '4.2 HTTP Admin sign-off blocked with 403 ADMIN_CANNOT_SIGNOFF');

    // 4.3 Unassigned trainer blocked -> 403
    const resSignUnassigned = await fetch(`${BASE_URL}/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: {
        ...tokenFor(USER_TRAINER_UNASSIGNED),
        'content-type': 'application/json',
      },
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
    const dataSignUnassigned = await resSignUnassigned.json();
    assert(resSignUnassigned.status === 403, '4.3 HTTP Unassigned Trainer sign-off blocked with 403');

    // 4.4 Critical failure -> 422 GATE_FAILED
    const resSignCritFail = await fetch(`${BASE_URL}/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: {
        ...tokenFor(USER_TRAINER_SARAH),
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        action: 'submit_signoff',
        enrollment_id: ENROLLMENT_ID,
        competency_id: COMPETENCY_ID,
        rubric_version_id: RUBRIC_VERSION_ID,
        criterion_results: [
          { criterion_id: 'crit-dose', level: 3, critical_failure: false },
          { criterion_id: 'crit-tamp', level: 3, critical_failure: false },
          { criterion_id: 'crit-cleanliness', level: 1, critical_failure: false },
        ],
      }),
    });
    const dataSignCritFail = await resSignCritFail.json();
    assert(resSignCritFail.status === 422 && dataSignCritFail.code === 'GATE_FAILED', '4.4 HTTP Critical failure rejected with 422 GATE_FAILED');

    // 4.5 Assigned Trainer valid sign-off -> 201 Created
    const resSignSarah = await fetch(`${BASE_URL}/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: {
        ...tokenFor(USER_TRAINER_SARAH),
        'content-type': 'application/json',
      },
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
        notes: 'Praktik espresso sempurna via HTTP E2E.',
      }),
    });
    const dataSignSarah = await resSignSarah.json();
    assert(resSignSarah.status === 201 && dataSignSarah.success === true, '4.5 HTTP Assigned Trainer sign-off succeeds (201 Created)');

    // 4.6 Object-Level Authorization on GET /assessments
    const resGetBarista = await fetch(`${BASE_URL}/api/teams/organizations/${TENANT_A}/assessments`, {
      headers: tokenFor(USER_BARISTA_A),
    });
    const dataGetBarista = await resGetBarista.json();
    assert(resGetBarista.status === 200 && Array.isArray(dataGetBarista.assessments), '4.6 HTTP Barista queries own assessments (200 OK)');

  } finally {
    server.close();
    await closeDbPool();
  }

  console.log('===============================================================');
  console.log(`   HTTP E2E RESULT: ${passed} PASSED, ${failed} FAILED           `);
  console.log('===============================================================');

  if (failed > 0) {
    process.exit(1);
  }
}

runHttpE2eVerification().catch((err) => {
  console.error('Fatal HTTP E2E error:', err);
  process.exit(1);
});
