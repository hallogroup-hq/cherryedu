import { NextRequest } from 'next/server';
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

async function runTestSuite() {
  console.log('--- STARTING TEAMS HTTP ROUTE INTEGRATION TEST SUITE ---');
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

  const TENANT_A = 'org-cherry-01';
  const TENANT_B = 'org-kopi-nusa-02';

  // Test 1: Unauthenticated request is rejected (401)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/overview`, {
      method: 'GET',
    });
    const res = await getOverview(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 401, 'Test 1.1: Unauthenticated request returns 401');
    assert(data.code === 'UNAUTHENTICATED', 'Test 1.2: Code is UNAUTHENTICATED');
  } catch (err: any) {
    assert(false, 'Test 1: Unauthenticated request', err.message);
  }

  // Test 2: Tenant A Owner accessing Tenant A Overview succeeds (200)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/overview`, {
      method: 'GET',
      headers: { 'x-mock-user-id': 'usr-owner-01' },
    });
    const res = await getOverview(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 200, 'Test 2.1: Tenant A Owner accessing Tenant A Overview returns 200');
    assert(data.overview.organization.id === TENANT_A, 'Test 2.2: Returns correct Tenant A data');
  } catch (err: any) {
    assert(false, 'Test 2: Tenant A Owner accessing Tenant A', err.message);
  }

  // Test 3: Negative Test — Tenant A Owner attempting to access Tenant B Overview is blocked (403)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_B}/overview`, {
      method: 'GET',
      headers: { 'x-mock-user-id': 'usr-owner-01' }, // Member of Org A
    });
    const res = await getOverview(req, { params: { orgId: TENANT_B } });
    const data = await res.json();
    assert(res.status === 403, 'Test 3.1: Cross-tenant GET overview returns 403');
    assert(data.code === 'CROSS_TENANT_VIOLATION' || data.code === 'UNAUTHORIZED_TENANT_ACCESS', 'Test 3.2: Rejection code indicates cross-tenant violation');
  } catch (err: any) {
    assert(false, 'Test 3: Cross-tenant GET overview', err.message);
  }

  // Test 4: Role Permissions — Barista cannot invite (403 INSUFFICIENT_PERMISSIONS)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/invitations`, {
      method: 'POST',
      headers: {
        'x-mock-user-id': 'usr-barista-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email: 'newbie@example.com', role: 'learner' }),
    });
    const res = await postInvitation(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 403, 'Test 4.1: Barista creating invitation returns 403');
    assert(data.code === 'INSUFFICIENT_PERMISSIONS', 'Test 4.2: Code is INSUFFICIENT_PERMISSIONS');
  } catch (err: any) {
    assert(false, 'Test 4: Barista role invitation restriction', err.message);
  }

  // Test 5: Tenant A Owner creating invitation in Tenant A succeeds (201)
  let createdInvitationId = '';
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/invitations`, {
      method: 'POST',
      headers: {
        'x-mock-user-id': 'usr-owner-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email: 'junior@cherrycoffee.id', role: 'learner', outlet_id: 'out-01' }),
    });
    const res = await postInvitation(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 201, 'Test 5.1: Owner creating invitation returns 201');
    assert(data.invitation.email_normalized === 'junior@cherrycoffee.id', 'Test 5.2: Invitation email matches');
    createdInvitationId = data.invitation.id;
  } catch (err: any) {
    assert(false, 'Test 5: Owner creating invitation', err.message);
  }

  // Test 6: Cross-tenant Negative Test — Tenant A Owner attempting to create invitation in Tenant B (403)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_B}/invitations`, {
      method: 'POST',
      headers: {
        'x-mock-user-id': 'usr-owner-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email: 'hacker@example.com', role: 'owner' }),
    });
    const res = await postInvitation(req, { params: { orgId: TENANT_B } });
    const data = await res.json();
    assert(res.status === 403, 'Test 6.1: Cross-tenant POST invitation returns 403');
  } catch (err: any) {
    assert(false, 'Test 6: Cross-tenant POST invitation', err.message);
  }

  // Test 7: Decision 2 Negative Test — Owner CANNOT sign off competency as an assessor (403 UNAUTHORIZED_ASSESSOR)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: {
        'x-mock-user-id': 'usr-owner-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        action: 'submit_signoff',
        enrollment_id: 'enr-barista-01',
        rubric_version_id: 'rub-esp-v1',
        theory_requirement: { passed: true, score: 95 },
        criteria_evaluations: [
          { criterionId: 'crit-dose', rubricLevel: 3, weight: 1.0, isCritical: false, notes: 'Good' },
        ],
      }),
    });
    const res = await postAssessment(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 403, 'Test 7.1: Owner attempting competency sign-off returns 403');
    assert(data.code === 'UNAUTHORIZED_ASSESSOR', 'Test 7.2: Code is UNAUTHORIZED_ASSESSOR');
  } catch (err: any) {
    assert(false, 'Test 7: Owner sign-off restriction', err.message);
  }

  // Test 8: Decision 2 Negative Test — Platform Admin CANNOT sign off competency directly (403 ADMIN_CANNOT_SIGNOFF)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: {
        'x-mock-user-id': 'usr-admin-01', // platform_admin
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        action: 'submit_signoff',
        enrollment_id: 'enr-barista-01',
        rubric_version_id: 'rub-esp-v1',
        theory_requirement: { passed: true, score: 90 },
        criteria_evaluations: [
          { criterionId: 'crit-dose', rubricLevel: 3, weight: 1.0, isCritical: false, notes: 'Good' },
        ],
      }),
    });
    const res = await postAssessment(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 403, 'Test 8.1: Platform Admin attempting sign-off returns 403');
    assert(data.code === 'ADMIN_CANNOT_SIGNOFF', 'Test 8.2: Code is ADMIN_CANNOT_SIGNOFF');
  } catch (err: any) {
    assert(false, 'Test 8: Admin sign-off restriction', err.message);
  }

  // Test 9: Decision 2 Positive Test — Cherry Edu Trainer signing off competency succeeds (201)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: {
        'x-mock-user-id': 'usr-trainer-01', // cherry_trainer
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        action: 'submit_signoff',
        enrollment_id: 'enr-barista-01',
        competency_id: 'comp-espresso-dialin',
        rubric_version_id: 'rub-esp-v1',
        has_completed_online_lessons: true,
        criterion_results: [
          {
            id: 'res-1',
            assessment_id: 'asm-1',
            criterion_id: 'crit-dose',
            level: 3,
            critical_failure: false,
            entered_at: new Date().toISOString(),
          },
          {
            id: 'res-2',
            assessment_id: 'asm-1',
            criterion_id: 'crit-tamp',
            level: 3,
            critical_failure: false,
            entered_at: new Date().toISOString(),
          },
        ],
      }),
    });
    const res = await postAssessment(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 201, 'Test 9.1: Cherry Trainer sign-off returns 201');
    assert(data.assessment.signoff.assessor_type === 'cherry_trainer', 'Test 9.2: Signoff assessor_type is cherry_trainer');
    assert(data.evaluation.state === 'competent', 'Test 9.3: Pedagogical gate passed');
  } catch (err: any) {
    assert(false, 'Test 9: Cherry Trainer sign-off', err.message);
  }

  // Test 10: Pedagogical Failure — Critical criteria failure rejects sign-off (422 GATE_FAILED)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: {
        'x-mock-user-id': 'usr-trainer-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        action: 'submit_signoff',
        enrollment_id: 'enr-barista-01',
        competency_id: 'comp-espresso-dialin',
        rubric_version_id: 'rub-esp-v1',
        has_completed_online_lessons: true,
        criterion_results: [
          {
            id: 'res-1',
            assessment_id: 'asm-2',
            criterion_id: 'crit-dose',
            level: 3,
            critical_failure: false,
            entered_at: new Date().toISOString(),
          },
          {
            id: 'res-2',
            assessment_id: 'asm-2',
            criterion_id: 'crit-cleanliness',
            level: 1,
            critical_failure: true, // critical failure
            entered_at: new Date().toISOString(),
          },
        ],
      }),
    });
    const res = await postAssessment(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 422, 'Test 10.1: Critical rubric failure returns 422 Unprocessable');
    assert(data.code === 'GATE_FAILED', 'Test 10.2: Code is GATE_FAILED');
  } catch (err: any) {
    assert(false, 'Test 10: Pedagogical failure', err.message);
  }

  // Test 11: Head Bar can record observation and recommendation (200)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: {
        'x-mock-user-id': 'usr-headbar-01', // head_bar role
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        action: 'record_observation',
        enrollment_id: 'enr-barista-01',
        competency_id: 'comp-espresso-dialin',
        rubric_version_id: 'rub-esp-v1',
        notes: 'Espresso extraction timing was steady. Recommended for certification.',
        recommendation: 'recommend_competent',
      }),
    });
    const res = await postAssessment(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 200, 'Test 11.1: Head Bar observation returns 200');
    assert(data.assessment.head_bar_observation !== undefined, 'Test 11.2: Stored as head_bar_observation');
    assert(data.assessment.head_bar_observation.recommendation === 'recommend_competent', 'Test 11.3: Recommendation preserved');
  } catch (err: any) {
    assert(false, 'Test 11: Head Bar observation', err.message);
  }

  // Test 12: Platform Admin administrative correction with audit reason (200)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: {
        'x-mock-user-id': 'usr-admin-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        action: 'administrative_correction',
        enrollment_id: 'enr-barista-01',
        reason: 'Koreksi administratif berdasarkan surat keputusan verifikasi nomor SK-2026-091.',
      }),
    });
    const res = await postAssessment(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 200, 'Test 12.1: Admin correction with reason returns 200');
    assert(data.audit.action === 'administrative_competency_correction', 'Test 12.2: Audit entry generated');
  } catch (err: any) {
    assert(false, 'Test 12: Admin correction', err.message);
  }

  // Test 13: Admin correction rejected without sufficient reason (400)
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/assessments`, {
      method: 'POST',
      headers: {
        'x-mock-user-id': 'usr-admin-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        action: 'administrative_correction',
        enrollment_id: 'enr-barista-01',
        reason: 'pendek', // < 10 chars
      }),
    });
    const res = await postAssessment(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 400, 'Test 13.1: Admin correction with short reason returns 400');
    assert(data.code === 'REASON_REQUIRED', 'Test 13.2: Code is REASON_REQUIRED');
  } catch (err: any) {
    assert(false, 'Test 13: Admin short reason rejection', err.message);
  }

  // Test 14: Delete invitation
  try {
    const req = new NextRequest(`http://localhost:3000/api/teams/organizations/${TENANT_A}/invitations?id=${createdInvitationId}`, {
      method: 'DELETE',
      headers: { 'x-mock-user-id': 'usr-owner-01' },
    });
    const res = await deleteInvitation(req, { params: { orgId: TENANT_A } });
    const data = await res.json();
    assert(res.status === 200, 'Test 14.1: Delete invitation returns 200');
    assert(data.success === true, 'Test 14.2: Invitation revoked successfully');
  } catch (err: any) {
    assert(false, 'Test 14: Delete invitation', err.message);
  }

  console.log(`\nHTTP Route Integration Summary: ${passed} passed, ${failed} failed.`);
  if (failed > 0) {
    process.exit(1);
  }
}

runTestSuite();
