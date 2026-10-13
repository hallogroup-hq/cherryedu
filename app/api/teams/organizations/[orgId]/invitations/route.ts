import { NextRequest, NextResponse } from 'next/server';
import { resolveTeamsUser } from '@/teams/lib/serverAuth';
import { assertMembership, assertTenantIsolation, AuthorizationError } from '@/teams/lib/authz';
import { Invitation, RoleCode } from '@/teams/types';

// In-memory persistent invitations for dev/test
const invitationsStore: Map<string, Invitation[]> = new Map();

export async function GET(
  req: NextRequest,
  { params }: { params: { orgId: string } }
) {
  try {
    const user = await resolveTeamsUser(req);
    const orgId = params.orgId;

    // Must be member of orgId with owner or client_manager role
    assertMembership(user, orgId, ['owner', 'client_manager']);

    const invitations = invitationsStore.get(orgId) || [];
    return NextResponse.json({ success: true, invitations });
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

    // Must be member of orgId with owner or client_manager role
    const membership = assertMembership(user, orgId, ['owner', 'client_manager']);

    const body = await req.json();
    if (!body.email || !body.role) {
      return NextResponse.json(
        { success: false, error: 'Email dan role wajib diisi.', code: 'VALIDATION_FAILED' },
        { status: 400 }
      );
    }

    const role = body.role as RoleCode;
    // Only owner can invite another owner
    if (role === 'owner' && !membership.roles.includes('owner')) {
      return NextResponse.json(
        { success: false, error: 'Hanya Owner yang dapat mengundang anggota dengan peran Owner.', code: 'FORBIDDEN' },
        { status: 403 }
      );
    }

    const newInvitation: Invitation = {
      id: `inv-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      organization_id: orgId,
      email_normalized: body.email.toLowerCase().trim(),
      intended_role: role,
      outlet_id: body.outlet_id || null,
      invited_by: user.userId,
      token_hash: `tok-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      status: 'pending',
      expires_at: new Date(Date.now() + 7 * 24 * 3600 * 1000).toISOString(),
      created_at: new Date().toISOString(),
    };

    const currentList = invitationsStore.get(orgId) || [];
    currentList.push(newInvitation);
    invitationsStore.set(orgId, currentList);

    return NextResponse.json({ success: true, invitation: newInvitation }, { status: 201 });
  } catch (err: any) {
    if (err instanceof AuthorizationError) {
      return NextResponse.json({ success: false, error: err.message, code: err.code }, { status: err.status });
    }
    return NextResponse.json({ success: false, error: err.message || 'Server error' }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { orgId: string } }
) {
  try {
    const user = await resolveTeamsUser(req);
    const orgId = params.orgId;

    // Must be member of orgId with owner or client_manager role
    assertMembership(user, orgId, ['owner', 'client_manager']);

    const { searchParams } = new URL(req.url);
    const invitationId = searchParams.get('id');

    if (!invitationId) {
      return NextResponse.json(
        { success: false, error: 'ID undangan wajib diisi.', code: 'VALIDATION_FAILED' },
        { status: 400 }
      );
    }

    const currentList = invitationsStore.get(orgId) || [];
    const updated = currentList.filter((inv) => inv.id !== invitationId);
    invitationsStore.set(orgId, updated);

    return NextResponse.json({ success: true, message: 'Undangan berhasil dibatalkan.' });
  } catch (err: any) {
    if (err instanceof AuthorizationError) {
      return NextResponse.json({ success: false, error: err.message, code: err.code }, { status: err.status });
    }
    return NextResponse.json({ success: false, error: err.message || 'Server error' }, { status: 500 });
  }
}
