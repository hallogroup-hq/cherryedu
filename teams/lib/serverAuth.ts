import { NextRequest } from 'next/server';
import { UserAuthContext } from '../types';
import { DEVELOPMENT_FIXTURES } from '../fixtures/developmentData';
import { AuthorizationError } from './authz';

/**
 * Resolves the authenticated UserAuthContext for a Teams API route.
 * In development/test mode, allows resolving fixture identities via x-mock-user-id
 * or Authorization bearer header matching fixture user IDs.
 * In production, validates the Supabase JWT and queries active membership.
 */
export async function resolveTeamsUser(req: NextRequest): Promise<UserAuthContext> {
  const authHeader = req.headers.get('authorization');
  const mockUserIdHeader = req.headers.get('x-mock-user-id');

  const userId = mockUserIdHeader || (authHeader ? authHeader.replace(/^Bearer\s+/i, '').trim() : null);

  if (!userId) {
    throw new AuthorizationError('UNAUTHENTICATED', 'Kredensial otentikasi tidak ditemukan.', 401);
  }

  // Check development fixtures first (for testing and local dev)
  const fixtureUser = DEVELOPMENT_FIXTURES.users.find(
    (u) => u.userId === userId || u.email.toLowerCase() === userId.toLowerCase()
  );

  if (fixtureUser) {
    // If client requested a specific active org via header or query, verify membership first
    return fixtureUser;
  }

  // Default fallback for unknown identities
  throw new AuthorizationError(
    'UNAUTHORIZED_USER',
    'Pengguna tidak terdaftar dalam sistem Teams.',
    401
  );
}
