import { NextRequest, NextResponse } from 'next/server';
import { resolveTeamsUser } from '@/teams/lib/serverAuth';
import { AuthorizationError } from '@/teams/lib/authz';
import { DEVELOPMENT_FIXTURES } from '@/teams/fixtures/developmentData';
import { Organization } from '@/teams/types';

export async function GET(req: NextRequest) {
  try {
    const user = await resolveTeamsUser(req);

    // Platform admin can see all organizations
    if (user.staffPermissions.includes('platform_admin')) {
      return NextResponse.json({ success: true, organizations: DEVELOPMENT_FIXTURES.organizations });
    }

    // Tenant users only see their own active organization(s)
    if (!user.activeMembership) {
      return NextResponse.json({ success: true, organizations: [] });
    }

    const userOrgs = DEVELOPMENT_FIXTURES.organizations.filter(
      (org) => org.id === user.activeMembership?.organization_id
    );

    return NextResponse.json({ success: true, organizations: userOrgs });
  } catch (err: any) {
    if (err instanceof AuthorizationError) {
      return NextResponse.json({ success: false, error: err.message, code: err.code }, { status: err.status });
    }
    return NextResponse.json({ success: false, error: err.message || 'Server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await resolveTeamsUser(req);

    // Only platform admin can directly create client organizations
    if (!user.staffPermissions.includes('platform_admin')) {
      return NextResponse.json(
        { success: false, error: 'Hanya Platform Admin yang berwenang mendaftarkan organisasi klien baru.', code: 'FORBIDDEN' },
        { status: 403 }
      );
    }

    const body = await req.json();
    if (!body.name || !body.slug) {
      return NextResponse.json(
        { success: false, error: 'Nama dan slug organisasi wajib diisi.', code: 'VALIDATION_FAILED' },
        { status: 400 }
      );
    }

    const newOrg: Organization = {
      id: `org-${Date.now()}`,
      slug: body.slug,
      display_name: body.name || body.display_name,
      legal_name: body.legal_name || body.name,
      business_category: body.business_category || 'Specialty Coffee',
      status: 'active',
      primary_contact_user_id: user.userId,
      timezone: body.timezone || 'Asia/Jakarta',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    DEVELOPMENT_FIXTURES.organizations.push(newOrg);

    return NextResponse.json({ success: true, organization: newOrg }, { status: 201 });
  } catch (err: any) {
    if (err instanceof AuthorizationError) {
      return NextResponse.json({ success: false, error: err.message, code: err.code }, { status: err.status });
    }
    return NextResponse.json({ success: false, error: err.message || 'Server error' }, { status: 500 });
  }
}
