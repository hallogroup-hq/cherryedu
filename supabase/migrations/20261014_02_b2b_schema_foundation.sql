-- ==========================================================
-- Migration: 20261014_02_b2b_schema_foundation.sql
-- Purpose: Complete Private B2B Schema Definition for Cherry Edu Teams
-- Architecture Spec: 03_ERD_Technical_Architecture.md v1.0
-- Target: Staging / Cherry Edu Database (Private 'b2b' schema)
-- NOTE: DO NOT EXECUTE DIRECTLY ON PRODUCTION WITHOUT APPROVAL
-- ==========================================================

CREATE EXTENSION IF NOT EXISTS "citext";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE SCHEMA IF NOT EXISTS b2b;

-- ----------------------------------------------------------
-- 1. Organizations, Outlets & Memberships
-- ----------------------------------------------------------

CREATE TABLE IF NOT EXISTS b2b.organizations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug CITEXT UNIQUE NOT NULL,
    display_name TEXT NOT NULL,
    legal_name TEXT,
    business_category TEXT,
    status TEXT NOT NULL CHECK (status IN ('setup', 'active', 'suspended', 'closed')) DEFAULT 'setup',
    primary_contact_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    timezone TEXT NOT NULL DEFAULT 'Asia/Jakarta',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    closed_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS b2b.outlets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES b2b.organizations(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    city TEXT NOT NULL,
    address TEXT,
    status TEXT NOT NULL CHECK (status IN ('active', 'inactive')) DEFAULT 'active',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_outlets_org_id UNIQUE (organization_id, id)
);

CREATE TABLE IF NOT EXISTS b2b.organization_memberships (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES b2b.organizations(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    status TEXT NOT NULL CHECK (status IN ('invited', 'active', 'suspended', 'ended')) DEFAULT 'invited',
    joined_at TIMESTAMPTZ,
    ended_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_membership_org_user UNIQUE (organization_id, user_id),
    CONSTRAINT uq_membership_org_id UNIQUE (organization_id, id)
);

CREATE TABLE IF NOT EXISTS b2b.membership_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    membership_id UUID NOT NULL REFERENCES b2b.organization_memberships(id) ON DELETE CASCADE,
    role_code TEXT NOT NULL CHECK (role_code IN ('owner', 'client_manager', 'head_bar', 'learner')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_membership_role UNIQUE (membership_id, role_code)
);

CREATE TABLE IF NOT EXISTS b2b.membership_outlet_scopes (
    membership_id UUID NOT NULL,
    organization_id UUID NOT NULL,
    outlet_id UUID NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (membership_id, outlet_id),
    CONSTRAINT fk_scope_membership FOREIGN KEY (organization_id, membership_id) 
        REFERENCES b2b.organization_memberships(organization_id, id) ON DELETE CASCADE,
    CONSTRAINT fk_scope_outlet FOREIGN KEY (organization_id, outlet_id) 
        REFERENCES b2b.outlets(organization_id, id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS b2b.internal_staff_permissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    permission_code TEXT NOT NULL CHECK (permission_code IN ('platform_admin', 'program_admin', 'assessment_quality_reviewer', 'cherry_trainer')),
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    revoked_at TIMESTAMPTZ,
    CONSTRAINT uq_staff_perm UNIQUE (user_id, permission_code)
);

CREATE TABLE IF NOT EXISTS b2b.invitations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES b2b.organizations(id) ON DELETE CASCADE,
    email_normalized CITEXT NOT NULL,
    intended_role TEXT NOT NULL CHECK (intended_role IN ('owner', 'client_manager', 'head_bar', 'learner')),
    outlet_id UUID,
    token_hash TEXT NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('pending', 'accepted', 'expired', 'revoked')) DEFAULT 'pending',
    accepted_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    invited_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE RESTRICT,
    accepted_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_invite_outlet FOREIGN KEY (organization_id, outlet_id) 
        REFERENCES b2b.outlets(organization_id, id) ON DELETE SET NULL
);

-- ----------------------------------------------------------
-- 2. Programs, Versions & Steps
-- ----------------------------------------------------------

CREATE TABLE IF NOT EXISTS b2b.program_templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_type TEXT NOT NULL CHECK (owner_type IN ('cherry', 'organization')) DEFAULT 'cherry',
    owner_organization_id UUID REFERENCES b2b.organizations(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('draft', 'published', 'archived')) DEFAULT 'draft',
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS b2b.template_versions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    template_id UUID NOT NULL REFERENCES b2b.program_templates(id) ON DELETE CASCADE,
    version_no INT NOT NULL,
    definition_snapshot JSONB NOT NULL DEFAULT '{}'::jsonb,
    checksum TEXT,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_template_version UNIQUE (template_id, version_no)
);

CREATE TABLE IF NOT EXISTS b2b.programs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES b2b.organizations(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    source_template_id UUID REFERENCES b2b.program_templates(id) ON DELETE SET NULL,
    status TEXT NOT NULL CHECK (status IN ('setup', 'active', 'ended', 'archived')) DEFAULT 'setup',
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_programs_org_id UNIQUE (organization_id, id)
);

CREATE TABLE IF NOT EXISTS b2b.program_versions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    program_id UUID NOT NULL,
    organization_id UUID NOT NULL,
    version_no INT NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('building', 'published', 'retired')) DEFAULT 'building',
    policy_snapshot JSONB NOT NULL DEFAULT '{}'::jsonb,
    content_checksum TEXT,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_program_version UNIQUE (program_id, version_no),
    CONSTRAINT uq_program_version_org_id UNIQUE (organization_id, id),
    CONSTRAINT fk_program_version_program FOREIGN KEY (organization_id, program_id)
        REFERENCES b2b.programs(organization_id, id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS b2b.program_steps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    program_version_id UUID NOT NULL,
    organization_id UUID NOT NULL,
    step_type TEXT NOT NULL CHECK (step_type IN ('lesson', 'quiz', 'practice', 'session', 'task', 'reference', 'signoff')),
    source_type TEXT NOT NULL CHECK (source_type IN ('cherry_learning', 'b2b_content', 'practical', 'external_link')),
    source_ref TEXT,
    source_version TEXT,
    title_override TEXT,
    sort_order INT NOT NULL,
    is_required BOOLEAN NOT NULL DEFAULT true,
    estimated_minutes INT,
    gate_policy JSONB NOT NULL DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_step_sort UNIQUE (program_version_id, sort_order),
    CONSTRAINT fk_step_version FOREIGN KEY (organization_id, program_version_id)
        REFERENCES b2b.program_versions(organization_id, id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS b2b.step_prerequisites (
    step_id UUID NOT NULL REFERENCES b2b.program_steps(id) ON DELETE CASCADE,
    requires_step_id UUID NOT NULL REFERENCES b2b.program_steps(id) ON DELETE CASCADE,
    rule TEXT NOT NULL CHECK (rule IN ('all', 'any', 'approved')) DEFAULT 'all',
    PRIMARY KEY (step_id, requires_step_id)
);

CREATE TABLE IF NOT EXISTS b2b.b2b_content (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES b2b.organizations(id) ON DELETE CASCADE,
    visibility TEXT NOT NULL CHECK (visibility IN ('internal', 'org_only')) DEFAULT 'org_only',
    content_type TEXT NOT NULL CHECK (content_type IN ('text', 'image', 'attachment', 'interactive')) DEFAULT 'text',
    title TEXT NOT NULL,
    body_markdown TEXT,
    status TEXT NOT NULL CHECK (status IN ('building', 'published', 'retired')) DEFAULT 'building',
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ----------------------------------------------------------
-- 3. Cohorts, Enrollments & Progress Tracking
-- ----------------------------------------------------------

CREATE TABLE IF NOT EXISTS b2b.cohorts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL,
    program_version_id UUID NOT NULL,
    name TEXT NOT NULL,
    start_at TIMESTAMPTZ NOT NULL,
    end_at TIMESTAMPTZ,
    status TEXT NOT NULL CHECK (status IN ('scheduled', 'active', 'completed', 'cancelled')) DEFAULT 'scheduled',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_cohorts_org_id UNIQUE (organization_id, id),
    CONSTRAINT fk_cohort_program_version FOREIGN KEY (organization_id, program_version_id)
        REFERENCES b2b.program_versions(organization_id, id) ON DELETE RESTRICT
);

CREATE TABLE IF NOT EXISTS b2b.enrollments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL,
    cohort_id UUID NOT NULL,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    outlet_id UUID,
    status TEXT NOT NULL CHECK (status IN ('invited', 'active', 'paused', 'completed', 'withdrawn')) DEFAULT 'active',
    source_diagnostic_id UUID,
    enrolled_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    ended_at TIMESTAMPTZ,
    CONSTRAINT uq_cohort_enrollment UNIQUE (cohort_id, user_id),
    CONSTRAINT uq_enrollment_org_id UNIQUE (organization_id, id),
    CONSTRAINT fk_enrollment_cohort FOREIGN KEY (organization_id, cohort_id)
        REFERENCES b2b.cohorts(organization_id, id) ON DELETE CASCADE,
    CONSTRAINT fk_enrollment_outlet FOREIGN KEY (organization_id, outlet_id)
        REFERENCES b2b.outlets(organization_id, id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS b2b.learning_step_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL,
    enrollment_id UUID NOT NULL,
    program_step_id UUID NOT NULL REFERENCES b2b.program_steps(id) ON DELETE CASCADE,
    state TEXT NOT NULL CHECK (state IN ('not_started', 'in_progress', 'completed', 'blocked')) DEFAULT 'not_started',
    last_learning_event_id TEXT,
    completed_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_enrollment_step UNIQUE (enrollment_id, program_step_id),
    CONSTRAINT fk_progress_enrollment FOREIGN KEY (organization_id, enrollment_id)
        REFERENCES b2b.enrollments(organization_id, id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS b2b.learning_event_receipts (
    event_id TEXT PRIMARY KEY,
    organization_id UUID NOT NULL REFERENCES b2b.organizations(id) ON DELETE CASCADE,
    enrollment_id UUID NOT NULL REFERENCES b2b.enrollments(id) ON DELETE CASCADE,
    source_content_id TEXT NOT NULL,
    event_type TEXT NOT NULL,
    payload_hash TEXT NOT NULL,
    received_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    processed_at TIMESTAMPTZ,
    processing_state TEXT NOT NULL CHECK (processing_state IN ('pending', 'processed', 'error', 'ignored')) DEFAULT 'pending',
    error_code TEXT
);

CREATE TABLE IF NOT EXISTS b2b.content_entitlements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES b2b.organizations(id) ON DELETE CASCADE,
    program_version_id UUID NOT NULL,
    source_content_id TEXT NOT NULL,
    source_version TEXT,
    valid_from TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    valid_until TIMESTAMPTZ,
    scope TEXT NOT NULL DEFAULT 'assigned_enrollees_only',
    CONSTRAINT fk_entitlement_version FOREIGN KEY (organization_id, program_version_id)
        REFERENCES b2b.program_versions(organization_id, id) ON DELETE CASCADE
);

-- ----------------------------------------------------------
-- 4. Competencies, Rubrics & Practical Assessments
-- ----------------------------------------------------------

CREATE TABLE IF NOT EXISTS b2b.competencies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES b2b.organizations(id) ON DELETE CASCADE, -- null means global Cherry Edu library
    code TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    source_standard_ref TEXT, -- e.g. SKKNI Kepmenaker 32/2023
    criticality TEXT NOT NULL CHECK (criticality IN ('normal', 'critical')) DEFAULT 'normal',
    status TEXT NOT NULL CHECK (status IN ('active', 'retired')) DEFAULT 'active',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_competency_code UNIQUE (organization_id, code)
);

CREATE TABLE IF NOT EXISTS b2b.program_competencies (
    program_version_id UUID NOT NULL REFERENCES b2b.program_versions(id) ON DELETE CASCADE,
    competency_id UUID NOT NULL REFERENCES b2b.competencies(id) ON DELETE RESTRICT,
    is_required BOOLEAN NOT NULL DEFAULT true,
    target_level SMALLINT NOT NULL CHECK (target_level BETWEEN 1 AND 4) DEFAULT 3,
    required_evidence_policy JSONB NOT NULL DEFAULT '{}'::jsonb,
    PRIMARY KEY (program_version_id, competency_id)
);

CREATE TABLE IF NOT EXISTS b2b.rubrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    competency_id UUID NOT NULL REFERENCES b2b.competencies(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS b2b.rubric_versions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    rubric_id UUID NOT NULL REFERENCES b2b.rubrics(id) ON DELETE CASCADE,
    version_no INT NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('building', 'published', 'retired')) DEFAULT 'building',
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_rubric_version UNIQUE (rubric_id, version_no)
);

CREATE TABLE IF NOT EXISTS b2b.rubric_criteria (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    rubric_version_id UUID NOT NULL REFERENCES b2b.rubric_versions(id) ON DELETE CASCADE,
    code TEXT NOT NULL,
    description TEXT NOT NULL,
    weight NUMERIC(4, 2) NOT NULL DEFAULT 1.00,
    is_critical BOOLEAN NOT NULL DEFAULT false,
    anchors JSONB NOT NULL, -- level 1..4 observable anchors
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_rubric_criterion UNIQUE (rubric_version_id, code)
);

-- ----------------------------------------------------------
-- 5. Training Operations (Sessions & Attendance)
-- ----------------------------------------------------------

CREATE TABLE IF NOT EXISTS b2b.training_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL,
    cohort_id UUID NOT NULL,
    title TEXT NOT NULL,
    start_at TIMESTAMPTZ NOT NULL,
    end_at TIMESTAMPTZ NOT NULL,
    timezone TEXT NOT NULL DEFAULT 'Asia/Jakarta',
    location_text TEXT,
    status TEXT NOT NULL CHECK (status IN ('scheduled', 'rescheduled', 'completed', 'cancelled')) DEFAULT 'scheduled',
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    change_reason TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_session_org_id UNIQUE (organization_id, id),
    CONSTRAINT fk_session_cohort FOREIGN KEY (organization_id, cohort_id)
        REFERENCES b2b.cohorts(organization_id, id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS b2b.trainer_assignments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES b2b.organizations(id) ON DELETE CASCADE,
    cohort_id UUID NOT NULL,
    trainer_user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE RESTRICT,
    role TEXT NOT NULL CHECK (role IN ('lead', 'assessor', 'assistant')) DEFAULT 'assessor',
    active_from TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    active_until TIMESTAMPTZ,
    CONSTRAINT uq_trainer_cohort UNIQUE (cohort_id, trainer_user_id),
    CONSTRAINT fk_trainer_cohort FOREIGN KEY (organization_id, cohort_id)
        REFERENCES b2b.cohorts(organization_id, id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS b2b.session_attendance (
    organization_id UUID NOT NULL,
    session_id UUID NOT NULL,
    enrollment_id UUID NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('present', 'absent', 'excused', 'rescheduled')) DEFAULT 'present',
    recorded_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE RESTRICT,
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (session_id, enrollment_id),
    CONSTRAINT fk_attendance_session FOREIGN KEY (organization_id, session_id)
        REFERENCES b2b.training_sessions(organization_id, id) ON DELETE CASCADE,
    CONSTRAINT fk_attendance_enrollment FOREIGN KEY (organization_id, enrollment_id)
        REFERENCES b2b.enrollments(organization_id, id) ON DELETE CASCADE
);

-- ----------------------------------------------------------
-- 6. Practical Assessments, Signoffs & Remedial Tasks
-- ----------------------------------------------------------

CREATE TABLE IF NOT EXISTS b2b.practical_assessments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL,
    enrollment_id UUID NOT NULL,
    competency_id UUID NOT NULL REFERENCES b2b.competencies(id) ON DELETE RESTRICT,
    rubric_version_id UUID NOT NULL REFERENCES b2b.rubric_versions(id) ON DELETE RESTRICT,
    session_id UUID,
    assessor_user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE RESTRICT,
    status TEXT NOT NULL CHECK (status IN ('in_progress', 'submitted', 'signed_off', 'voided')) DEFAULT 'in_progress',
    attempt_no INT NOT NULL DEFAULT 1,
    idempotency_key UUID UNIQUE NOT NULL DEFAULT gen_random_uuid(),
    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    submitted_at TIMESTAMPTZ,
    signed_off_at TIMESTAMPTZ,
    CONSTRAINT uq_practical_assessment_org_id UNIQUE (organization_id, id),
    CONSTRAINT fk_assessment_enrollment FOREIGN KEY (organization_id, enrollment_id)
        REFERENCES b2b.enrollments(organization_id, id) ON DELETE CASCADE,
    CONSTRAINT fk_assessment_session FOREIGN KEY (organization_id, session_id)
        REFERENCES b2b.training_sessions(organization_id, id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS b2b.criterion_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assessment_id UUID NOT NULL REFERENCES b2b.practical_assessments(id) ON DELETE CASCADE,
    criterion_id UUID NOT NULL REFERENCES b2b.rubric_criteria(id) ON DELETE RESTRICT,
    level SMALLINT NOT NULL CHECK (level BETWEEN 1 AND 4),
    critical_failure BOOLEAN NOT NULL DEFAULT false,
    notes TEXT,
    evidence_asset_id UUID,
    entered_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_assessment_criterion UNIQUE (assessment_id, criterion_id)
);

CREATE TABLE IF NOT EXISTS b2b.assessment_signoffs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    assessment_id UUID NOT NULL REFERENCES b2b.practical_assessments(id) ON DELETE CASCADE,
    signoff_revision INT NOT NULL DEFAULT 1,
    decision TEXT NOT NULL CHECK (decision IN ('competent', 'not_yet_competent', 'requires_review')),
    signed_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE RESTRICT,
    reason TEXT,
    signed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    supersedes_signoff_id UUID REFERENCES b2b.assessment_signoffs(id) ON DELETE SET NULL,
    CONSTRAINT uq_assessment_signoff_rev UNIQUE (assessment_id, signoff_revision)
);

CREATE TABLE IF NOT EXISTS b2b.competency_evidence (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES b2b.organizations(id) ON DELETE CASCADE,
    enrollment_id UUID NOT NULL REFERENCES b2b.enrollments(id) ON DELETE CASCADE,
    competency_id UUID NOT NULL REFERENCES b2b.competencies(id) ON DELETE RESTRICT,
    evidence_type TEXT NOT NULL CHECK (evidence_type IN ('theory_attempt', 'practice_signoff', 'diagnostic', 'exemption', 'remedial_review')),
    source_record_ref TEXT NOT NULL,
    rubric_version_id UUID REFERENCES b2b.rubric_versions(id) ON DELETE SET NULL,
    verification_status TEXT NOT NULL CHECK (verification_status IN ('verified', 'superseded', 'revoked')) DEFAULT 'verified',
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    valid_until TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS b2b.competency_status (
    organization_id UUID NOT NULL REFERENCES b2b.organizations(id) ON DELETE CASCADE,
    enrollment_id UUID NOT NULL REFERENCES b2b.enrollments(id) ON DELETE CASCADE,
    competency_id UUID NOT NULL REFERENCES b2b.competencies(id) ON DELETE RESTRICT,
    state TEXT NOT NULL CHECK (state IN ('not_started', 'learning', 'needs_practice', 'awaiting_assessment', 'competent', 'reassessment_due')) DEFAULT 'not_started',
    verified_at TIMESTAMPTZ,
    next_review_at TIMESTAMPTZ,
    last_recomputed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    derivation_revision INT NOT NULL DEFAULT 1,
    PRIMARY KEY (enrollment_id, competency_id)
);

CREATE TABLE IF NOT EXISTS b2b.remediation_tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES b2b.organizations(id) ON DELETE CASCADE,
    enrollment_id UUID NOT NULL REFERENCES b2b.enrollments(id) ON DELETE CASCADE,
    competency_id UUID NOT NULL REFERENCES b2b.competencies(id) ON DELETE RESTRICT,
    criterion_id UUID REFERENCES b2b.rubric_criteria(id) ON DELETE SET NULL,
    assigned_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE RESTRICT,
    title TEXT NOT NULL,
    instructions TEXT NOT NULL,
    due_at TIMESTAMPTZ,
    status TEXT NOT NULL CHECK (status IN ('assigned', 'in_progress', 'submitted', 'verified', 'cancelled')) DEFAULT 'assigned',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    resolved_at TIMESTAMPTZ
);

-- ----------------------------------------------------------
-- 7. Audit, Assets, Notifications & Outbox
-- ----------------------------------------------------------

CREATE TABLE IF NOT EXISTS b2b.private_assets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES b2b.organizations(id) ON DELETE CASCADE,
    storage_bucket TEXT NOT NULL DEFAULT 'b2b-evidence',
    storage_path TEXT NOT NULL,
    content_type TEXT NOT NULL,
    uploaded_by UUID NOT NULL REFERENCES auth.users(id) ON DELETE RESTRICT,
    purpose TEXT NOT NULL,
    retention_until TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS b2b.notification_jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES b2b.organizations(id) ON DELETE CASCADE,
    recipient_user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    type TEXT NOT NULL,
    dedupe_key TEXT,
    payload_safe JSONB NOT NULL DEFAULT '{}'::jsonb,
    status TEXT NOT NULL CHECK (status IN ('pending', 'sent', 'failed')) DEFAULT 'pending',
    scheduled_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    sent_at TIMESTAMPTZ,
    retry_count INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS b2b.audit_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES b2b.organizations(id) ON DELETE SET NULL,
    actor_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    action TEXT NOT NULL,
    object_type TEXT NOT NULL,
    object_id TEXT NOT NULL,
    reason TEXT,
    old_summary JSONB,
    new_summary JSONB,
    request_id TEXT,
    occurred_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS b2b.integration_outbox (
    event_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    aggregate_type TEXT NOT NULL,
    aggregate_id TEXT NOT NULL,
    event_type TEXT NOT NULL,
    payload_safe JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    delivered_at TIMESTAMPTZ,
    retry_count INT NOT NULL DEFAULT 0,
    last_error_code TEXT
);

-- ----------------------------------------------------------
-- 8. Strategic Performance & Isolation Indexes
-- ----------------------------------------------------------

CREATE INDEX IF NOT EXISTS idx_memberships_user ON b2b.organization_memberships(user_id, status, organization_id);
CREATE INDEX IF NOT EXISTS idx_outlets_org ON b2b.outlets(organization_id, status);
CREATE INDEX IF NOT EXISTS idx_programs_org ON b2b.programs(organization_id, status);
CREATE INDEX IF NOT EXISTS idx_cohorts_org ON b2b.cohorts(organization_id, program_version_id, status);
CREATE INDEX IF NOT EXISTS idx_enrollments_cohort_user ON b2b.enrollments(organization_id, cohort_id, user_id);
CREATE INDEX IF NOT EXISTS idx_step_progress_enrollment ON b2b.learning_step_progress(enrollment_id, program_step_id);
CREATE INDEX IF NOT EXISTS idx_assessments_lookup ON b2b.practical_assessments(organization_id, enrollment_id, competency_id, submitted_at);
CREATE INDEX IF NOT EXISTS idx_competency_evidence_lookup ON b2b.competency_evidence(organization_id, enrollment_id, competency_id, recorded_at);
CREATE INDEX IF NOT EXISTS idx_competency_status_state ON b2b.competency_status(organization_id, enrollment_id, state);
CREATE INDEX IF NOT EXISTS idx_training_sessions_start ON b2b.training_sessions(organization_id, start_at, status);
CREATE INDEX IF NOT EXISTS idx_audit_events_occurred ON b2b.audit_events(organization_id, occurred_at DESC);
CREATE INDEX IF NOT EXISTS idx_invitations_email ON b2b.invitations(organization_id, email_normalized, status);

-- ----------------------------------------------------------
-- 9. Private Schema Security Protection
-- ----------------------------------------------------------

-- b2b schema is STRICTLY PRIVATE (no public or anon access)
REVOKE ALL ON SCHEMA b2b FROM anon, public;
REVOKE ALL ON ALL TABLES IN SCHEMA b2b FROM anon, public;

-- Explicitly allow authenticated server role execution only via service role or restricted application user
-- Authenticated users do NOT get direct table query access to b2b to ensure 100% server-enforced business logic
REVOKE ALL ON SCHEMA b2b FROM authenticated;
REVOKE ALL ON ALL TABLES IN SCHEMA b2b FROM authenticated;

-- Service role retains full access for server-side API processing
GRANT USAGE ON SCHEMA b2b TO service_role;
GRANT ALL ON ALL TABLES IN SCHEMA b2b TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA b2b TO service_role;
