import http from 'http';
import { NextRequest } from 'next/server';
import { query, getDbPool } from '../../lib/db';
import { createSignedToken, TEST_JWT_SECRET } from './helpers/testAuth';
import { POST as postCreateOrder } from '../../app/api/payment/create-order/route';
import { POST as postClaimPayment } from '../../app/api/payment/claim/route';
import { POST as postSubmitProof } from '../../app/api/payment/submit-proof/route';
import { POST as postAdminVerify } from '../../app/api/admin/transactions/verify/route';
import { POST as postAdminReject } from '../../app/api/admin/transactions/reject/route';

if (!process.env.SUPABASE_JWT_SECRET) {
  process.env.SUPABASE_JWT_SECRET = TEST_JWT_SECRET;
}

const PORT = 3109;
const BASE_URL = `http://127.0.0.1:${PORT}`;

async function assertSafeTestEnvironment() {
  const nodeEnv = process.env.NODE_ENV;
  const allowSeed = process.env.ALLOW_DESTRUCTIVE_STAGING_SEED;
  if (nodeEnv !== 'test' || allowSeed !== 'true') {
    throw new Error(
      'STAGING_SAFETY_GUARD: Destructive staging seeding is only permitted when NODE_ENV=test AND ALLOW_DESTRUCTIVE_STAGING_SEED=true are explicitly passed by caller.'
    );
  }

  const res = await query<{ current_database: string }>('SELECT current_database()');
  const dbName = res.rows[0].current_database;
  if (dbName === 'production' || dbName.includes('prod')) {
    throw new Error(`CRITICAL_GUARD: Refusing to seed database "${dbName}".`);
  }
}

function tokenFor(userId: string): { authorization: string } {
  const token = createSignedToken({ sub: userId });
  return { authorization: `Bearer ${token}` };
}

async function runPaymentQA(): Promise<void> {
  await assertSafeTestEnvironment();

  console.log('===============================================================');
  console.log(' CHERRY EDU — PAYMENT BUSINESS RULES & INTEGRITY QA SUITE       ');
  console.log('===============================================================');

  // Seed test users:
  // USER_BUYER_1: standard barista learner
  // USER_BUYER_2: second barista learner
  // USER_ADMIN: platform admin
  const USER_BUYER_1 = '11111111-1111-1111-1111-111111111111';
  const USER_BUYER_2 = '22222222-2222-2222-2222-222222222222';
  const USER_ADMIN = '88888888-8888-8888-8888-888888888888';

  await query(`
    INSERT INTO auth.users (id, email) VALUES
      ('${USER_BUYER_1}', 'buyer1@cherryedu.test'),
      ('${USER_BUYER_2}', 'buyer2@cherryedu.test'),
      ('${USER_ADMIN}', 'admin@cherryedu.test')
    ON CONFLICT (id) DO NOTHING;

    INSERT INTO public.profiles (id, name, email, role, is_pro, pro_entitlement_type) VALUES
      ('${USER_BUYER_1}', 'Buyer Satu', 'buyer1@cherryedu.test', 'learner', false, 'none'),
      ('${USER_BUYER_2}', 'Buyer Dua', 'buyer2@cherryedu.test', 'learner', false, 'none'),
      ('${USER_ADMIN}', 'Admin Cherry', 'admin@cherryedu.test', 'admin', true, 'verified')
    ON CONFLICT (id) DO UPDATE SET
      role = EXCLUDED.role,
      is_pro = EXCLUDED.is_pro,
      pro_entitlement_type = EXCLUDED.pro_entitlement_type;

    -- Clean old transactions and audit events for test users
    DELETE FROM public.payment_audit_events WHERE user_id IN ('${USER_BUYER_1}', '${USER_BUYER_2}');
    DELETE FROM public.transactions WHERE user_id IN ('${USER_BUYER_1}', '${USER_BUYER_2}');
  `);

  // Start internal Next.js HTTP server dispatching routes
  const server = http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url || '/', BASE_URL);
      const headers = new Headers();
      for (const [k, v] of Object.entries(req.headers)) {
        if (v) headers.set(k, Array.isArray(v) ? v.join(',') : v);
      }

      let bodyBuffer: Buffer[] = [];
      for await (const chunk of req) {
        bodyBuffer.push(Buffer.from(chunk));
      }
      const rawBody = Buffer.concat(bodyBuffer).toString('utf-8');

      const nextReq = new NextRequest(url.toString(), {
        method: req.method,
        headers,
        body: ['GET', 'HEAD'].includes(req.method || '') ? undefined : rawBody,
      });

      let nextRes: any;
      if (url.pathname === '/api/payment/create-order' && req.method === 'POST') {
        nextRes = await postCreateOrder(nextReq);
      } else if (url.pathname === '/api/payment/claim' && req.method === 'POST') {
        nextRes = await postClaimPayment(nextReq);
      } else if (url.pathname === '/api/payment/submit-proof' && req.method === 'POST') {
        nextRes = await postSubmitProof(nextReq);
      } else if (url.pathname === '/api/admin/transactions/verify' && req.method === 'POST') {
        nextRes = await postAdminVerify(nextReq);
      } else if (url.pathname === '/api/admin/transactions/reject' && req.method === 'POST') {
        nextRes = await postAdminReject(nextReq);
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Route not found in test harness' }));
        return;
      }

      const resBody = await nextRes.text();
      res.writeHead(nextRes.status, Object.fromEntries(nextRes.headers.entries()));
      res.end(resBody);
    } catch (err: any) {
      console.error('Server error in QA test harness:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
  });

  await new Promise<void>((resolve) => server.listen(PORT, '127.0.0.1', () => resolve()));
  console.log(`✓ Payment QA Test Server listening on ${BASE_URL}\n`);

  let passed = 0;
  let failed = 0;

  function assert(condition: boolean, title: string) {
    if (condition) {
      console.log(`  ✓ PASS: ${title}`);
      passed++;
    } else {
      console.error(`  ✗ FAIL: ${title}`);
      failed++;
    }
  }

  try {
    console.log('[QA 1. USER CREATES ORDER & CLAIMS PAYMENT -> PROVISIONAL PRO ACTIVE]');
    // 1.1 Create Order
    const resCreateOrder = await fetch(`${BASE_URL}/api/payment/create-order`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BUYER_1), 'content-type': 'application/json' },
      body: JSON.stringify({ cycle: 'monthly' }),
    });
    const dataCreateOrder = await resCreateOrder.json();
    assert(
      [200, 201].includes(resCreateOrder.status) &&
        dataCreateOrder.success &&
        (dataCreateOrder.order?.status === 'pending' || dataCreateOrder.transaction?.status === 'pending'),
      '1.1 Order created server-authoritatively with status pending'
    );
    const order1Id = (dataCreateOrder.order || dataCreateOrder.transaction).id;

    // 1.2 User claims payment (with proof)
    const resClaim1 = await fetch(`${BASE_URL}/api/payment/claim`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BUYER_1), 'content-type': 'application/json' },
      body: JSON.stringify({
        order_id: order1Id,
        proof_url: 'data:image/jpeg;base64,mockproofstring123',
        proof_notes: 'Sudah transfer via GoPay Merchant',
      }),
    });
    const dataClaim1 = await resClaim1.json();
    assert(
      resClaim1.status === 200 &&
        dataClaim1.success &&
        dataClaim1.isProActivated === true &&
        dataClaim1.status === 'claimed' &&
        dataClaim1.entitlementType === 'provisional',
      '1.2 Payment claimed returns 200 with provisional Pro access active immediately'
    );

    // Verify DB profile state
    const profBuyer1 = await query<{ is_pro: boolean; pro_entitlement_type: string; subscription_tier: string }>(
      `SELECT is_pro, pro_entitlement_type, subscription_tier FROM public.profiles WHERE id = '${USER_BUYER_1}'`
    );
    assert(
      profBuyer1.rows[0].is_pro === true &&
        profBuyer1.rows[0].pro_entitlement_type === 'provisional' &&
        profBuyer1.rows[0].subscription_tier === 'pro',
      '1.3 Profile updated authoritatively in PostgreSQL to is_pro=true and pro_entitlement_type=provisional'
    );

    // Verify Audit Event
    const auditClaim1 = await query<{ action: string; actor_user_id: string }>(
      `SELECT action, actor_user_id FROM public.payment_audit_events WHERE transaction_id = '${order1Id}' AND action = 'payment_claimed'`
    );
    assert(
      auditClaim1.rows.length === 1 && auditClaim1.rows[0].actor_user_id === USER_BUYER_1,
      '1.4 Audit event recorded in public.payment_audit_events with action payment_claimed'
    );

    console.log('\n[QA 2. ADMIN VERIFIES PAYMENT -> PRO ACCESS REMAINS ACTIVE & VERIFIED]');
    const resVerify = await fetch(`${BASE_URL}/api/admin/transactions/verify`, {
      method: 'POST',
      headers: { ...tokenFor(USER_ADMIN), 'content-type': 'application/json' },
      body: JSON.stringify({ order_id: order1Id, notes: 'Valid transfer matched on GoPay Merchant' }),
    });
    const dataVerify = await resVerify.json();
    assert(
      resVerify.status === 200 &&
        dataVerify.success &&
        dataVerify.status === 'verified' &&
        dataVerify.entitlementType === 'verified',
      '2.1 Admin verify returns 200 with status verified'
    );

    const profBuyer1Verified = await query<{ is_pro: boolean; pro_entitlement_type: string }>(
      `SELECT is_pro, pro_entitlement_type FROM public.profiles WHERE id = '${USER_BUYER_1}'`
    );
    assert(
      profBuyer1Verified.rows[0].is_pro === true &&
        profBuyer1Verified.rows[0].pro_entitlement_type === 'verified',
      '2.2 Profile updated in PostgreSQL to pro_entitlement_type=verified'
    );

    const auditVerify = await query<{ action: string; actor_user_id: string }>(
      `SELECT action, actor_user_id FROM public.payment_audit_events WHERE transaction_id = '${order1Id}' AND action = 'payment_verified'`
    );
    assert(
      auditVerify.rows.length === 1 && auditVerify.rows[0].actor_user_id === USER_ADMIN,
      '2.3 Audit event recorded in public.payment_audit_events with action payment_verified by admin'
    );

    console.log('\n[QA 3. ADMIN REJECTS CLAIM -> PROVISIONAL ACCESS REVOKED]');
    // Buyer 2 creates order and claims
    const resOrder2 = await fetch(`${BASE_URL}/api/payment/create-order`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BUYER_2), 'content-type': 'application/json' },
      body: JSON.stringify({ cycle: 'monthly' }),
    });
    const dataOrder2 = await resOrder2.json();
    const order2Id = (dataOrder2.order || dataOrder2.transaction).id;

    await fetch(`${BASE_URL}/api/payment/claim`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BUYER_2), 'content-type': 'application/json' },
      body: JSON.stringify({ order_id: order2Id }),
    });

    // Verify Buyer 2 is provisionally pro
    const profBuyer2Before = await query<{ is_pro: boolean }>(
      `SELECT is_pro FROM public.profiles WHERE id = '${USER_BUYER_2}'`
    );
    assert(profBuyer2Before.rows[0].is_pro === true, '3.1 Buyer 2 provisionally granted Pro access upon claim');

    // Admin rejects Buyer 2 claim
    const resReject = await fetch(`${BASE_URL}/api/admin/transactions/reject`, {
      method: 'POST',
      headers: { ...tokenFor(USER_ADMIN), 'content-type': 'application/json' },
      body: JSON.stringify({
        order_id: order2Id,
        reason: 'Tidak ada mutasi masuk di GoPay Merchant setelah 24 jam',
      }),
    });
    const dataReject = await resReject.json();
    assert(
      resReject.status === 200 &&
        dataReject.success &&
        dataReject.status === 'rejected' &&
        dataReject.isProActive === false,
      '3.2 Admin reject returns 200 with status rejected and isProActive=false'
    );

    const profBuyer2After = await query<{ is_pro: boolean; pro_entitlement_type: string; subscription_tier: string }>(
      `SELECT is_pro, pro_entitlement_type, subscription_tier FROM public.profiles WHERE id = '${USER_BUYER_2}'`
    );
    assert(
      profBuyer2After.rows[0].is_pro === false &&
        profBuyer2After.rows[0].pro_entitlement_type === 'none' &&
        profBuyer2After.rows[0].subscription_tier === 'free',
      '3.3 Buyer 2 provisional Pro access cleanly revoked in PostgreSQL (is_pro=false, tier=free)'
    );

    console.log('\n[QA 4. USER HAS VALID SUBSCRIPTION -> REJECTION OF NEW CLAIM DOES NOT REVOKE IT]');
    // Buyer 1 ALREADY has order1 verified (from QA 2)
    // Buyer 1 now creates a new order3 and claims it
    const resOrder3 = await fetch(`${BASE_URL}/api/payment/create-order`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BUYER_1), 'content-type': 'application/json' },
      body: JSON.stringify({ cycle: 'monthly' }),
    });
    const dataOrder3 = await resOrder3.json();
    const order3Id = (dataOrder3.order || dataOrder3.transaction).id;

    await fetch(`${BASE_URL}/api/payment/claim`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BUYER_1), 'content-type': 'application/json' },
      body: JSON.stringify({ order_id: order3Id }),
    });

    // Admin now rejects order3
    const resReject3 = await fetch(`${BASE_URL}/api/admin/transactions/reject`, {
      method: 'POST',
      headers: { ...tokenFor(USER_ADMIN), 'content-type': 'application/json' },
      body: JSON.stringify({
        order_id: order3Id,
        reason: 'Double order mistakenly claimed by user',
      }),
    });
    const dataReject3 = await resReject3.json();
    assert(
      resReject3.status === 200 && dataReject3.isProActive === true,
      '4.1 Rejection of new order claim leaves isProActive=true because existing verified order1 is valid'
    );

    const profBuyer1AfterReject3 = await query<{ is_pro: boolean; pro_entitlement_type: string }>(
      `SELECT is_pro, pro_entitlement_type FROM public.profiles WHERE id = '${USER_BUYER_1}'`
    );
    assert(
      profBuyer1AfterReject3.rows[0].is_pro === true &&
        profBuyer1AfterReject3.rows[0].pro_entitlement_type === 'verified',
      '4.2 Buyer 1 remains Pro with pro_entitlement_type=verified without interruption'
    );

    console.log('\n[QA 5. REPEATED CLAIMS DO NOT EXTEND ACCESS INDEFINITELY]');
    // Create new order 4 for Buyer 2
    const resOrder4 = await fetch(`${BASE_URL}/api/payment/create-order`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BUYER_2), 'content-type': 'application/json' },
      body: JSON.stringify({ cycle: 'monthly' }),
    });
    const dataOrder4 = await resOrder4.json();
    const order4Id = (dataOrder4.order || dataOrder4.transaction).id;

    // First claim
    const resClaim4A = await fetch(`${BASE_URL}/api/payment/claim`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BUYER_2), 'content-type': 'application/json' },
      body: JSON.stringify({ order_id: order4Id }),
    });
    const dataClaim4A = await resClaim4A.json();
    const expiryA = dataClaim4A.expiresAt;

    // Second repeated claim on same order
    const resClaim4B = await fetch(`${BASE_URL}/api/payment/claim`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BUYER_2), 'content-type': 'application/json' },
      body: JSON.stringify({ order_id: order4Id, proof_notes: 'Claiming again' }),
    });
    const dataClaim4B = await resClaim4B.json();
    const expiryB = dataClaim4B.expiresAt;

    assert(
      resClaim4B.status === 200 && expiryA === expiryB,
      '5.1 Repeated claim on the same order preserves original expiration timestamp'
    );

    console.log('\n[QA 6. CROSS-USER ORDER CLAIM ATTEMPT IS REJECTED (403)]');
    // Buyer 1 attempts to claim Buyer 2's order4
    const resCrossClaim = await fetch(`${BASE_URL}/api/payment/claim`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BUYER_1), 'content-type': 'application/json' },
      body: JSON.stringify({ order_id: order4Id }),
    });
    const dataCrossClaim = await resCrossClaim.json();
    assert(
      resCrossClaim.status === 403 && dataCrossClaim.code === 'ORDER_OWNERSHIP_MISMATCH',
      '6.1 Claiming another users order rejected with 403 ORDER_OWNERSHIP_MISMATCH'
    );

    console.log('\n[QA 7. NON-ADMIN CANNOT APPROVE OR REJECT TRANSACTIONS (403)]');
    // Buyer 1 attempts to verify Buyer 2's order4
    const resUnauthVerify = await fetch(`${BASE_URL}/api/admin/transactions/verify`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BUYER_1), 'content-type': 'application/json' },
      body: JSON.stringify({ order_id: order4Id }),
    });
    const dataUnauthVerify = await resUnauthVerify.json();
    assert(
      resUnauthVerify.status === 403 && dataUnauthVerify.code === 'ADMIN_REQUIRED',
      '7.1 Non-admin verify rejected with 403 ADMIN_REQUIRED'
    );

    // Buyer 1 attempts to reject Buyer 2's order4
    const resUnauthReject = await fetch(`${BASE_URL}/api/admin/transactions/reject`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BUYER_1), 'content-type': 'application/json' },
      body: JSON.stringify({ order_id: order4Id, reason: 'Malicious reject attempt' }),
    });
    const dataUnauthReject = await resUnauthReject.json();
    assert(
      resUnauthReject.status === 403 && dataUnauthReject.code === 'ADMIN_REQUIRED',
      '7.2 Non-admin reject rejected with 403 ADMIN_REQUIRED'
    );

    console.log('\n[QA 8. DIRECT DATABASE PERMISSION PRIVILEGE ENFORCEMENT]');
    // Direct INSERT or UPDATE on public.transactions via role authenticated is blocked by PostgreSQL
    const client = await (await getDbPool()).connect();
    let authInsertBlocked = false;
    try {
      await client.query('SET ROLE authenticated');
      await client.query(
        `INSERT INTO public.transactions (id, user_id, plan_tier, cycle, original_amount, final_amount, status, payment_method)
         VALUES ('hacked_tx', '${USER_BUYER_1}', 'pro', 'monthly', 49000, 49000, 'verified', 'gopay_qris')`
      );
    } catch (err: any) {
      authInsertBlocked = err.message.includes('permission denied');
    } finally {
      await client.query('RESET ROLE');
      client.release();
    }
    assert(authInsertBlocked, '8.1 Direct INSERT into public.transactions blocked by PostgreSQL permissions');

    console.log('\n[QA 9. CROSS-DEVICE & RELOAD CONSISTENCY]');
    // Querying user profile from database reflects actual entitlement
    const profConsistent = await query<{ is_pro: boolean; pro_entitlement_type: string }>(
      `SELECT is_pro, pro_entitlement_type FROM public.profiles WHERE id = '${USER_BUYER_1}'`
    );
    assert(
      profConsistent.rows[0].is_pro === true && profConsistent.rows[0].pro_entitlement_type === 'verified',
      '9.1 Profile entitlement is stored authoritatively in PostgreSQL and consistent across sessions'
    );

    console.log('\n[QA 10. CHECKOUT SIMPLICITY & PROVISIONAL ENABLER]');
    // Submit proof via POST /api/payment/submit-proof directly activates provisional Pro
    const resOrder5 = await fetch(`${BASE_URL}/api/payment/create-order`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BUYER_2), 'content-type': 'application/json' },
      body: JSON.stringify({ cycle: 'annual' }),
    });
    const dataOrder5 = await resOrder5.json();
    const order5Id = (dataOrder5.order || dataOrder5.transaction).id;

    const resSubmitProof = await fetch(`${BASE_URL}/api/payment/submit-proof`, {
      method: 'POST',
      headers: { ...tokenFor(USER_BUYER_2), 'content-type': 'application/json' },
      body: JSON.stringify({
        order_id: order5Id,
        proof_url: 'https://images.unsplash.com/proof-mock',
        proof_notes: 'Transfer GoPay Annual',
      }),
    });
    const dataSubmitProof = await resSubmitProof.json();
    assert(
      resSubmitProof.status === 200 &&
        dataSubmitProof.success &&
        dataSubmitProof.isProActivated === true &&
        dataSubmitProof.status === 'claimed',
      '10.1 Submitting proof immediately grants provisional Pro access without friction'
    );

  } finally {
    server.close();
    await (await getDbPool()).end();
  }

  console.log('===============================================================');
  console.log(` PAYMENT QA RESULT: ${passed} PASSED, ${failed} FAILED`);
  console.log('===============================================================');

  if (failed > 0) {
    process.exit(1);
  }
  process.exit(0);
}

runPaymentQA().catch((err) => {
  console.error('Fatal Payment QA error:', err);
  process.exit(1);
});
