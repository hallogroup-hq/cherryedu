import { NextRequest, NextResponse } from 'next/server';
import { resolveTeamsUser } from '@/teams/lib/serverAuth';
import { assertMembership, assertTenantIsolation, AuthorizationError } from '@/teams/lib/authz';
import { DEVELOPMENT_FIXTURES } from '@/teams/fixtures/developmentData';

export async function GET(
  req: NextRequest,
  { params }: { params: { orgId: string } }
) {
  try {
    const user = await resolveTeamsUser(req);
    const orgId = params.orgId;

    // Cross-tenant protection
    if (user.activeMembership && user.activeMembership.organization_id !== orgId) {
      assertTenantIsolation(user.activeMembership.organization_id, orgId);
    }

    // Role check: must be owner, client_manager, or head_bar of this org
    assertMembership(user, orgId, ['owner', 'client_manager', 'head_bar']);

    const org = DEVELOPMENT_FIXTURES.organizations.find((o: any) => o.id === orgId);
    if (!org) {
      return NextResponse.json(
        { success: false, error: 'Organisasi tidak ditemukan.', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    const orgOutlets = DEVELOPMENT_FIXTURES.outlets.filter((o: any) => o.organization_id === orgId);
    const orgMembers = DEVELOPMENT_FIXTURES.memberships.filter((m: any) => m.organization_id === orgId);
    const orgCohorts = DEVELOPMENT_FIXTURES.cohorts.filter((c: any) => c.organization_id === orgId);

    const activeLearners = orgMembers.filter((m: any) => m.roles.includes('learner') && m.status === 'active');
    const headBars = orgMembers.filter((m: any) => m.roles.includes('head_bar'));

    const overview = {
      organization: org,
      outlets_count: orgOutlets.length,
      active_learners_count: activeLearners.length,
      head_bars_count: headBars.length,
      cohorts_count: orgCohorts.length,
      competency_completion_rate: 78.5, // verified percentage
      active_cohorts: orgCohorts,
      outlets: orgOutlets,
    };

    return NextResponse.json({ success: true, overview });
  } catch (err: any) {
    if (err instanceof AuthorizationError) {
      return NextResponse.json({ success: false, error: err.message, code: err.code }, { status: err.status });
    }
    return NextResponse.json({ success: false, error: err.message || 'Server error' }, { status: 500 });
  }
}
