/**
 * Cherry Edu Teams — Server-Enforced RBAC & Tenant Isolation Engine
 * Spec: 03_ERD_Technical_Architecture.md v1.0 Section 4
 */

import { UserAuthContext, RoleCode, OrganizationMembership } from '../types';

export class AuthorizationError extends Error {
  code: string;
  status: number;

  constructor(code: string, message: string, status: number = 403) {
    super(message);
    this.name = 'AuthorizationError';
    this.code = code;
    this.status = status;
  }
}

/**
 * Validates that the requester belongs to targetOrgId, has an active membership,
 * and possesses at least one of the required roles (or platform_admin staff permission).
 */
export function assertMembership(
  user: UserAuthContext,
  targetOrgId: string,
  allowedRoles?: RoleCode[]
): OrganizationMembership {
  // 1. Platform superadmins and Cherry Edu Trainers bypass tenant membership checks
  if (user.staffPermissions.includes('platform_admin') || user.staffPermissions.includes('cherry_trainer')) {
    if (user.activeMembership && user.activeMembership.organization_id === targetOrgId) {
      return user.activeMembership;
    }
    // Synthetic membership for internal staff audit
    return {
      id: `staff-${user.userId}`,
      organization_id: targetOrgId,
      user_id: user.userId,
      status: 'active',
      created_at: new Date().toISOString(),
      roles: ['owner'],
    };
  }

  // 2. Validate membership presence
  const membership = user.activeMembership;
  if (!membership || membership.organization_id !== targetOrgId) {
    throw new AuthorizationError(
      'UNAUTHORIZED_TENANT_ACCESS',
      'Kamu tidak memiliki akses ke organisasi ini.',
      403
    );
  }

  // 3. Validate membership status
  if (membership.status !== 'active') {
    throw new AuthorizationError(
      'MEMBERSHIP_INACTIVE',
      'Keanggotaanmu pada organisasi ini tidak aktif.',
      403
    );
  }

  // 4. Validate roles if required
  if (allowedRoles && allowedRoles.length > 0) {
    const hasRole = membership.roles.some((r) => allowedRoles.includes(r));
    if (!hasRole) {
      throw new AuthorizationError(
        'INSUFFICIENT_PERMISSIONS',
        'Peranmu tidak memiliki wewenang untuk tindakan ini.',
        403
      );
    }
  }

  return membership;
}

/**
 * Asserts strict tenant isolation between requester's org and target entity's org.
 */
export function assertTenantIsolation(requesterOrgId: string, targetEntityOrgId: string): void {
  if (requesterOrgId !== targetEntityOrgId) {
    throw new AuthorizationError(
      'CROSS_TENANT_VIOLATION',
      'Akses ditolak: Data berada di luar organisasi yang aktif.',
      403
    );
  }
}

/**
 * Asserts outlet scope: checks if a manager/head bar is permitted to access a specific outlet.
 * Owners have org-wide scope by default.
 */
export function assertOutletScope(
  membership: OrganizationMembership,
  targetOutletId: string
): void {
  if (membership.roles.includes('owner')) {
    return; // Org-wide access for owners
  }

  const scopes = membership.outlet_scopes || [];
  if (!scopes.includes(targetOutletId)) {
    throw new AuthorizationError(
      'OUTLET_SCOPE_RESTRICTED',
      'Kamu hanya memiliki akses pada outlet yang telah ditugaskan.',
      403
    );
  }
}

/**
 * Decision 2 — Assessment Authority:
 * - Cherry Edu Trainer: Authorized for practical assessment & final sign-off.
 * - Client Head Bar: Can observe and recommend, NO final signoff by default unless delegated.
 * - Platform Admin: Manages users, but CANNOT sign off as an assessor. Admin can only execute audited corrections.
 */
export function assertSignoffAuthority(
  user: UserAuthContext,
  options: {
    isAssignedTrainer: boolean;
    isDelegatedAssessor?: boolean;
  }
): { assessorType: 'cherry_trainer' | 'delegated_assessor' } {
  // Platform admin is strictly NOT an assessor by default
  if (user.staffPermissions.includes('platform_admin') && !user.staffPermissions.includes('cherry_trainer')) {
    throw new AuthorizationError(
      'ADMIN_CANNOT_SIGNOFF',
      'Platform Admin tidak berwenang menandatangani kelulusan kompetensi secara langsung. Keputusan kompetensi membutuhkan penilai yang berwenang.',
      403
    );
  }

  const isCherryTrainer = user.staffPermissions.includes('cherry_trainer');
  
  if (isCherryTrainer && options.isAssignedTrainer) {
    return { assessorType: 'cherry_trainer' };
  }

  if (options.isDelegatedAssessor) {
    return { assessorType: 'delegated_assessor' };
  }

  throw new AuthorizationError(
    'UNAUTHORIZED_ASSESSOR',
    'Hanya Trainer Cherry Edu atau penilai dengan delegasi resmi yang berwenang menandatangani kelulusan kompetensi.',
    403
  );
}

/**
 * Client Head Bar, Client Manager, Owner, or Trainer can conduct observations and submit recommendations.
 */
export function assertObservationAuthority(
  user: UserAuthContext,
  membership: OrganizationMembership
): void {
  const isTrainer = user.staffPermissions.includes('cherry_trainer');
  const isHeadBarOrManager =
    membership.roles.includes('head_bar') ||
    membership.roles.includes('client_manager') ||
    membership.roles.includes('owner');

  if (!isTrainer && !isHeadBarOrManager) {
    throw new AuthorizationError(
      'UNAUTHORIZED_OBSERVER',
      'Hanya Head Bar atau Trainer yang dapat melakukan observasi praktik.',
      403
    );
  }
}

/**
 * Platform Admin can only perform administrative corrections with explicit reason and audit.
 */
export function assertAdminCorrectionAuthority(
  user: UserAuthContext,
  reason: string
): void {
  if (!user.staffPermissions.includes('platform_admin')) {
    throw new AuthorizationError(
      'INSUFFICIENT_ADMIN_PERM',
      'Hanya Platform Admin yang dapat melakukan koreksi administratif.',
      403
    );
  }

  if (!reason || reason.trim().length < 10) {
    throw new AuthorizationError(
      'REASON_REQUIRED',
      'Koreksi administratif wajib menyertakan alasan minimal 10 karakter untuk audit trail.',
      400
    );
  }
}
