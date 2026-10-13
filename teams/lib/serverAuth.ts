import { NextRequest } from 'next/server';
import crypto from 'crypto';
import { UserAuthContext, RoleCode, StaffPermissionCode, OrganizationMembership } from '../types';
import { AuthorizationError } from './authz';
import { query } from '@/lib/db';

export const JWT_SECRET =
  process.env.SUPABASE_JWT_SECRET ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'cherryedu-staging-auth-jwt-secret-secure-key-2026';

export interface DecodedToken {
  sub: string; // user id
  email?: string;
  role?: string;
  exp: number;
  aud?: string;
}

/**
 * Creates a cryptographically signed HS256 JWT for testing/authenticated sessions
 */
export function createSignedToken(payload: Partial<DecodedToken> & { sub: string }): string {
  const header = { alg: 'HS256', typ: 'JWT' };
  const fullPayload: DecodedToken = {
    exp: Math.floor(Date.now() / 1000) + 3600, // 1 hour default
    aud: 'authenticated',
    ...payload,
  };

  const headerB64 = Buffer.from(JSON.stringify(header)).toString('base64url');
  const payloadB64 = Buffer.from(JSON.stringify(fullPayload)).toString('base64url');
  const signature = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(`${headerB64}.${payloadB64}`)
    .digest('base64url');

  return `${headerB64}.${payloadB64}.${signature}`;
}

/**
 * Validates a JWT token cryptographically and checks for expiration.
 */
export function verifyJwtToken(token: string): DecodedToken {
  if (!token || typeof token !== 'string') {
    throw new AuthorizationError('INVALID_TOKEN', 'Token otentikasi kosong atau tidak valid.', 401);
  }

  const parts = token.trim().split('.');
  if (parts.length !== 3) {
    throw new AuthorizationError('INVALID_TOKEN_FORMAT', 'Format JWT tidak valid.', 401);
  }

  const [headerB64, payloadB64, signature] = parts;
  const data = `${headerB64}.${payloadB64}`;

  // Signature check
  const expectedSig = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(data)
    .digest('base64url');

  if (signature !== expectedSig) {
    throw new AuthorizationError(
      'FORGED_TOKEN',
      'Tanda tangan token otentikasi tidak valid atau telah dimanipulasi.',
      401
    );
  }

  try {
    const payloadJson = Buffer.from(payloadB64, 'base64url').toString('utf8');
    const payload = JSON.parse(payloadJson) as DecodedToken;

    const nowSec = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp < nowSec) {
      throw new AuthorizationError(
        'EXPIRED_SESSION',
        'Sesi login telah kedaluwarsa. Silakan masuk kembali.',
        401
      );
    }

    if (!payload.sub) {
      throw new AuthorizationError(
        'INVALID_TOKEN_PAYLOAD',
        'Payload token tidak memiliki sub (user_id).',
        401
      );
    }

    return payload;
  } catch (err: any) {
    if (err instanceof AuthorizationError) throw err;
    throw new AuthorizationError('MALFORMED_TOKEN', 'Token payload tidak dapat diurai.', 401);
  }
}

/**
 * Resolves the authenticated UserAuthContext strictly from the database.
 * 1. Verifies Bearer token.
 * 2. Fetches user record from auth.users.
 * 3. Queries real organization memberships and roles from b2b.organization_memberships.
 * 4. Queries internal staff permissions from b2b.internal_staff_permissions.
 * 5. Rejects suspended memberships and revoked permissions.
 */
export async function resolveTeamsUser(
  req: NextRequest,
  targetOrgId?: string
): Promise<UserAuthContext> {
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.toLowerCase().startsWith('bearer ')) {
    throw new AuthorizationError(
      'UNAUTHENTICATED',
      'Kredensial otentikasi Bearer token tidak ditemukan.',
      401
    );
  }

  const token = authHeader.substring(7).trim();
  const decoded = verifyJwtToken(token);

  // 1. Fetch user from database
  const userResult = await query<{
    id: string;
    email: string;
    name: string;
  }>(
    `SELECT u.id::text, u.email, COALESCE(p.name, u.raw_user_meta_data->>'name', u.email) as name
     FROM auth.users u
     LEFT JOIN public.profiles p ON p.id = u.id::text
     WHERE u.id::text = $1`,
    [decoded.sub]
  );

  if (userResult.rows.length === 0) {
    throw new AuthorizationError(
      'USER_NOT_FOUND',
      'Pengguna tidak ditemukan dalam database.',
      401
    );
  }

  const dbUser = userResult.rows[0];

  // 2. Fetch internal staff permissions
  const staffResult = await query<{ permission_code: string }>(
    `SELECT permission_code 
     FROM b2b.internal_staff_permissions 
     WHERE user_id::text = $1 AND revoked_at IS NULL`,
    [dbUser.id]
  );

  const staffPermissions = staffResult.rows.map(
    (r) => r.permission_code as StaffPermissionCode
  );

  // 3. Fetch all organization memberships for this user
  const memberResult = await query<{
    membership_id: string;
    organization_id: string;
    membership_status: string;
    roles: string[];
    outlet_scopes: string[];
    created_at: string;
  }>(
    `SELECT 
       m.id::text as membership_id,
       m.organization_id::text,
       m.status as membership_status,
       m.created_at::text,
       COALESCE(array_agg(DISTINCT mr.role_code::text) FILTER (WHERE mr.role_code IS NOT NULL), ARRAY[]::text[]) as roles,
       COALESCE(array_agg(DISTINCT mos.outlet_id::text) FILTER (WHERE mos.outlet_id IS NOT NULL), ARRAY[]::text[]) as outlet_scopes
     FROM b2b.organization_memberships m
     LEFT JOIN b2b.membership_roles mr ON mr.membership_id = m.id
     LEFT JOIN b2b.membership_outlet_scopes mos ON mos.membership_id = m.id
     WHERE m.user_id::text = $1
     GROUP BY m.id, m.organization_id, m.status, m.created_at`,
    [dbUser.id]
  );

  // Determine active membership
  let activeMembership: OrganizationMembership | null = null;
  const memberships = memberResult.rows;

  if (targetOrgId) {
    const target = memberships.find((m) => m.organization_id === targetOrgId);
    if (target) {
      if (target.membership_status === 'suspended') {
        throw new AuthorizationError(
          'MEMBERSHIP_SUSPENDED',
          'Keanggotaanmu pada organisasi ini ditangguhkan (suspended).',
          403
        );
      }
      if (target.membership_status === 'active') {
        activeMembership = {
          id: target.membership_id,
          organization_id: target.organization_id,
          user_id: dbUser.id,
          status: 'active',
          roles: target.roles as RoleCode[],
          outlet_scopes: target.outlet_scopes,
          created_at: target.created_at,
        };
      }
    }
  } else if (memberships.length > 0) {
    // Default to first active membership if none specified
    const active = memberships.find((m) => m.membership_status === 'active');
    if (active) {
      activeMembership = {
        id: active.membership_id,
        organization_id: active.organization_id,
        user_id: dbUser.id,
        status: 'active',
        roles: active.roles as RoleCode[],
        outlet_scopes: active.outlet_scopes,
        created_at: active.created_at,
      };
    }
  }

  return {
    userId: dbUser.id,
    email: dbUser.email,
    fullName: dbUser.name,
    activeOrganizationId: activeMembership?.organization_id || null,
    activeMembership,
    staffPermissions,
  };
}
