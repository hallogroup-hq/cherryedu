import { NextRequest, NextResponse } from 'next/server';
import { resolveTeamsUser } from '@/teams/lib/serverAuth';
import {
  assertMembership,
  assertTenantIsolation,
  assertSignoffAuthority,
  assertObservationAuthority,
  assertAdminCorrectionAuthority,
  AuthorizationError,
} from '@/teams/lib/authz';
import { evaluateCompetency } from '@/teams/lib/competencyEngine';
import {
  PracticalAssessment,
  ObservationRecommendation,
  AuditEvent,
} from '@/teams/types';

// In-memory store for assessments, signoffs, and audit records in dev/test
const assessmentsStore: Map<string, PracticalAssessment[]> = new Map();
const auditTrailStore: AuditEvent[] = [];

export async function GET(
  req: NextRequest,
  { params }: { params: { orgId: string } }
) {
  try {
    const user = await resolveTeamsUser(req);
    const orgId = params.orgId;

    // Validate membership or trainer staff perm
    assertMembership(user, orgId);

    const assessments = assessmentsStore.get(orgId) || [];
    return NextResponse.json({ success: true, assessments });
  } catch (err: any) {
    if (err instanceof AuthorizationError) {
      return NextResponse.json({ success: false, error: err.message, code: err.code }, { status: err.status });
    }
    return NextResponse.json({ success: false, error: err.message || 'Server error' }, { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { orgId: string } }
) {
  try {
    const user = await resolveTeamsUser(req);
    const orgId = params.orgId;
    const body = await req.json();
    const action = body.action || 'submit_signoff';

    // 1. Cross-tenant isolation enforcement
    if (user.activeMembership && user.activeMembership.organization_id !== orgId) {
      assertTenantIsolation(user.activeMembership.organization_id, orgId);
    }

    const membership = assertMembership(user, orgId);

    if (action === 'record_observation') {
      // Head bar / trainer observation
      assertObservationAuthority(user, membership);

      const observation: PracticalAssessment = {
        id: `obs-${Date.now()}`,
        organization_id: orgId,
        enrollment_id: body.enrollment_id,
        competency_id: body.competency_id || 'comp-espresso-dialin',
        rubric_version_id: body.rubric_version_id,
        session_id: body.session_id || null,
        assessor_user_id: user.userId,
        status: 'in_progress',
        attempt_no: 1,
        idempotency_key: `idem-${Date.now()}`,
        started_at: new Date().toISOString(),
        head_bar_observation: {
          observed_by: user.userId,
          recommendation: body.recommendation as ObservationRecommendation,
          notes: body.notes || '',
          observed_at: new Date().toISOString(),
        },
      };

      const list = assessmentsStore.get(orgId) || [];
      list.push(observation);
      assessmentsStore.set(orgId, list);

      return NextResponse.json({
        success: true,
        message: 'Observasi Head Bar berhasil disimpan.',
        assessment: observation,
      });
    }

    if (action === 'administrative_correction') {
      // Platform admin audited correction
      assertAdminCorrectionAuthority(user, body.reason || '');

      const auditEntry: AuditEvent = {
        id: `aud-${Date.now()}`,
        organization_id: orgId,
        actor_user_id: user.userId,
        action: 'administrative_competency_correction',
        object_type: 'competency_status',
        object_id: body.competency_id || body.enrollment_id,
        reason: body.reason,
        occurred_at: new Date().toISOString(),
      };
      auditTrailStore.push(auditEntry);

      return NextResponse.json({
        success: true,
        message: 'Koreksi administratif berhasil dicatat dalam audit trail.',
        audit: auditEntry,
      });
    }

    if (action === 'submit_signoff') {
      // Decision 2: Only Cherry Edu Trainer or explicitly certified delegated assessor can sign off
      const { assessorType } = assertSignoffAuthority(user, {
        isAssignedTrainer: body.is_assigned_trainer ?? true,
        isDelegatedAssessor: body.is_delegated_assessor ?? false,
      });

      const assessment: PracticalAssessment = {
        id: `asm-${Date.now()}`,
        organization_id: orgId,
        enrollment_id: body.enrollment_id,
        competency_id: body.competency_id || 'comp-espresso-dialin',
        rubric_version_id: body.rubric_version_id,
        session_id: body.session_id || null,
        assessor_user_id: user.userId,
        status: 'submitted',
        attempt_no: 1,
        idempotency_key: `idem-${Date.now()}`,
        started_at: new Date().toISOString(),
        submitted_at: new Date().toISOString(),
        signed_off_at: new Date().toISOString(),
        criterion_results: body.criterion_results || [],
        signoff: {
          decision: 'competent',
          signed_by: user.userId,
          assessor_type: assessorType,
          reason: body.notes || 'Lulus seluruh kriteria rubrik praktikal.',
          signed_at: new Date().toISOString(),
        },
      };

      // Pedagogical evaluation gate
      const evaluation = evaluateCompetency({
        competencyId: assessment.competency_id,
        hasCompletedOnlineLessons: body.has_completed_online_lessons ?? true,
        latestAssessment: assessment,
      });

      if (evaluation.state !== 'competent') {
        return NextResponse.json(
          {
            success: false,
            error: 'Asesmen tidak memenuhi kriteria kelulusan kompetensi.',
            evaluation,
            code: 'GATE_FAILED',
          },
          { status: 422 }
        );
      }

      const list = assessmentsStore.get(orgId) || [];
      list.push(assessment);
      assessmentsStore.set(orgId, list);

      return NextResponse.json(
        {
          success: true,
          message: 'Asesmen praktik berhasil ditandatangani dan diverifikasi.',
          assessment,
          evaluation,
        },
        { status: 201 }
      );
    }

    return NextResponse.json(
      { success: false, error: `Aksi "${action}" tidak dikenali.`, code: 'INVALID_ACTION' },
      { status: 400 }
    );
  } catch (err: any) {
    if (err instanceof AuthorizationError) {
      return NextResponse.json({ success: false, error: err.message, code: err.code }, { status: err.status });
    }
    return NextResponse.json({ success: false, error: err.message || 'Server error' }, { status: 500 });
  }
}
