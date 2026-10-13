-- ==========================================================
-- Staging Database Seeding Script (Strict RFC 4122 Hex UUID Compliant)
-- Seeds authentic database identities, tenants, rubrics, cohorts, and learning data into cherryedu_staging_db
-- ==========================================================

-- Clean old staging test data
TRUNCATE TABLE b2b.audit_events CASCADE;
TRUNCATE TABLE b2b.competency_evidence CASCADE;
TRUNCATE TABLE b2b.competency_status CASCADE;
TRUNCATE TABLE b2b.criterion_results CASCADE;
TRUNCATE TABLE b2b.assessment_signoffs CASCADE;
TRUNCATE TABLE b2b.practical_assessments CASCADE;
TRUNCATE TABLE b2b.trainer_assignments CASCADE;
TRUNCATE TABLE b2b.session_attendance CASCADE;
TRUNCATE TABLE b2b.training_sessions CASCADE;
TRUNCATE TABLE b2b.learning_step_progress CASCADE;
TRUNCATE TABLE b2b.enrollments CASCADE;
TRUNCATE TABLE b2b.cohorts CASCADE;
TRUNCATE TABLE b2b.program_competencies CASCADE;
TRUNCATE TABLE b2b.step_prerequisites CASCADE;
TRUNCATE TABLE b2b.program_steps CASCADE;
TRUNCATE TABLE b2b.program_versions CASCADE;
TRUNCATE TABLE b2b.programs CASCADE;
TRUNCATE TABLE b2b.rubric_criteria CASCADE;
TRUNCATE TABLE b2b.rubric_versions CASCADE;
TRUNCATE TABLE b2b.rubrics CASCADE;
TRUNCATE TABLE b2b.competencies CASCADE;
TRUNCATE TABLE b2b.invitations CASCADE;
TRUNCATE TABLE b2b.membership_outlet_scopes CASCADE;
TRUNCATE TABLE b2b.membership_roles CASCADE;
TRUNCATE TABLE b2b.internal_staff_permissions CASCADE;
TRUNCATE TABLE b2b.organization_memberships CASCADE;
TRUNCATE TABLE b2b.outlets CASCADE;
TRUNCATE TABLE b2b.organizations CASCADE;

TRUNCATE TABLE public.quiz_attempts CASCADE;
TRUNCATE TABLE public.lesson_progress CASCADE;
TRUNCATE TABLE public.enrollments CASCADE;
TRUNCATE TABLE public.learning_event_receipts CASCADE;
TRUNCATE TABLE public.transactions CASCADE;
TRUNCATE TABLE public.profiles CASCADE;
DELETE FROM auth.users;

-- 1. Insert auth.users
INSERT INTO auth.users (id, email, raw_user_meta_data) VALUES
('11111111-1111-1111-1111-111111111111', 'owner.a@cherrycoffee.id', '{"name": "Budi Santoso"}'),
('22222222-2222-2222-2222-222222222222', 'headbar.a@cherrycoffee.id', '{"name": "Dani Pratama"}'),
('33333333-3333-3333-3333-333333333333', 'barista.a@cherrycoffee.id', '{"name": "Raka Aditya"}'),
('44444444-4444-4444-4444-444444444444', 'suspended.a@cherrycoffee.id', '{"name": "Agus Suspended"}'),
('55555555-5555-5555-5555-555555555555', 'trainer.sarah@cherryedu.id', '{"name": "Sarah Wijaya"}'),
('55555555-5555-5555-5555-555555555556', 'trainer.unassigned@cherryedu.id', '{"name": "Bambang Trainer"}'),
('66666666-6666-6666-6666-666666666666', 'admin@cherryedu.id', '{"name": "Platform Administrator"}'),
('77777777-7777-7777-7777-777777777777', 'owner.b@kopinusa.id', '{"name": "Handoko Nusa"}'),
('88888888-8888-8888-8888-888888888888', 'barista.b@kopinusa.id', '{"name": "Eko Nusa"}');

-- 2. Insert public.profiles
INSERT INTO public.profiles (id, email, name, role, is_pro, subscription_tier) VALUES
('11111111-1111-1111-1111-111111111111', 'owner.a@cherrycoffee.id', 'Budi Santoso', 'learner', true, 'pro'),
('22222222-2222-2222-2222-222222222222', 'headbar.a@cherrycoffee.id', 'Dani Pratama', 'learner', true, 'pro'),
('33333333-3333-3333-3333-333333333333', 'barista.a@cherrycoffee.id', 'Raka Aditya', 'learner', false, 'free'),
('44444444-4444-4444-4444-444444444444', 'suspended.a@cherrycoffee.id', 'Agus Suspended', 'learner', false, 'free'),
('55555555-5555-5555-5555-555555555555', 'trainer.sarah@cherryedu.id', 'Sarah Wijaya', 'expert', true, 'pro'),
('55555555-5555-5555-5555-555555555556', 'trainer.unassigned@cherryedu.id', 'Bambang Trainer', 'expert', true, 'pro'),
('66666666-6666-6666-6666-666666666666', 'admin@cherryedu.id', 'Platform Administrator', 'admin', true, 'pro'),
('77777777-7777-7777-7777-777777777777', 'owner.b@kopinusa.id', 'Handoko Nusa', 'learner', true, 'pro'),
('88888888-8888-8888-8888-888888888888', 'barista.b@kopinusa.id', 'Eko Nusa', 'learner', false, 'free');

-- 3. Staff permissions
INSERT INTO b2b.internal_staff_permissions (id, user_id, permission_code) VALUES
('55555555-0000-0000-0000-000000000001', '55555555-5555-5555-5555-555555555555', 'cherry_trainer'),
('55555555-0000-0000-0000-000000000002', '55555555-5555-5555-5555-555555555556', 'cherry_trainer'),
('66666666-0000-0000-0000-000000000001', '66666666-6666-6666-6666-666666666666', 'platform_admin');

-- 4. Organizations
INSERT INTO b2b.organizations (id, slug, display_name, legal_name, business_category, status, primary_contact_user_id) VALUES
('a0000000-0000-0000-0000-000000000001', 'cherry-flagship', 'Cherry Roastery Flagship', 'PT Cherry Kopi Mahakarya', 'Flagship Roastery', 'active', '11111111-1111-1111-1111-111111111111'),
('b0000000-0000-0000-0000-000000000002', 'kopi-nusa', 'Kopi Nusa Group', 'PT Nusa Kuliner Bersama', 'Coffee Chain', 'active', '77777777-7777-7777-7777-777777777777');

-- 5. Outlets
INSERT INTO b2b.outlets (id, organization_id, name, city, address, status) VALUES
('a1000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001', 'Cherry Menteng', 'Jakarta Pusat', 'Jl. HOS Cokroaminoto 12', 'active'),
('b1000000-0000-0000-0000-000000000002', 'b0000000-0000-0000-0000-000000000002', 'Nusa Sudirman', 'Jakarta Pusat', 'SCBD Lot 8', 'active');

-- 6. Memberships
INSERT INTO b2b.organization_memberships (id, organization_id, user_id, status) VALUES
('a2000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001', '11111111-1111-1111-1111-111111111111', 'active'),
('a2000000-0000-0000-0000-000000000002', 'a0000000-0000-0000-0000-000000000001', '22222222-2222-2222-2222-222222222222', 'active'),
('a2000000-0000-0000-0000-000000000003', 'a0000000-0000-0000-0000-000000000001', '33333333-3333-3333-3333-333333333333', 'active'),
('a2000000-0000-0000-0000-000000000004', 'a0000000-0000-0000-0000-000000000001', '44444444-4444-4444-4444-444444444444', 'suspended'),
('b2000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000002', '77777777-7777-7777-7777-777777777777', 'active'),
('b2000000-0000-0000-0000-000000000002', 'b0000000-0000-0000-0000-000000000002', '88888888-8888-8888-8888-888888888888', 'active');

-- Roles
INSERT INTO b2b.membership_roles (membership_id, role_code) VALUES
('a2000000-0000-0000-0000-000000000001', 'owner'),
('a2000000-0000-0000-0000-000000000002', 'head_bar'),
('a2000000-0000-0000-0000-000000000003', 'learner'),
('a2000000-0000-0000-0000-000000000004', 'learner'),
('b2000000-0000-0000-0000-000000000001', 'owner'),
('b2000000-0000-0000-0000-000000000002', 'learner');

-- Outlet scopes
INSERT INTO b2b.membership_outlet_scopes (membership_id, organization_id, outlet_id) VALUES
('a2000000-0000-0000-0000-000000000002', 'a0000000-0000-0000-0000-000000000001', 'a1000000-0000-0000-0000-000000000001'),
('a2000000-0000-0000-0000-000000000003', 'a0000000-0000-0000-0000-000000000001', 'a1000000-0000-0000-0000-000000000001');

-- 7. Competencies and Rubrics (Strict Hex UUIDs)
INSERT INTO b2b.competencies (id, organization_id, code, name, description, criticality, status) VALUES
('c0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001', 'BAR-ESP-01', 'Espresso Dial-in & Extraction', 'Kalibrasi dan ekstraksi espresso standar SKKNI', 'critical', 'active');

INSERT INTO b2b.rubrics (id, competency_id, title) VALUES
('f0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000001', 'Rubrik Evaluasi Praktik Espresso');

INSERT INTO b2b.rubric_versions (id, rubric_id, version_no, status, published_at) VALUES
('f1000000-0000-0000-0000-000000000001', 'f0000000-0000-0000-0000-000000000001', 1, 'published', NOW());

INSERT INTO b2b.rubric_criteria (id, rubric_version_id, code, description, weight, is_critical, anchors) VALUES
('fc000000-0000-0000-0000-000000000001', 'f1000000-0000-0000-0000-000000000001', 'crit-dose', 'Ketepatan Dosis Biji Kopi', 1.00, false, '{"1": "Melenceng > 1g", "3": "Presisi +- 0.2g"}'),
('fc000000-0000-0000-0000-000000000002', 'f1000000-0000-0000-0000-000000000001', 'crit-tamp', 'Kerapian Tamping & Distribusi', 1.00, true, '{"1": "Miring parah", "3": "Rata dan padat"}'),
('fc000000-0000-0000-0000-000000000003', 'f1000000-0000-0000-0000-000000000001', 'crit-cleanliness', 'Kebersihan Portafilter & Steam Wand', 1.00, true, '{"1": "Kotor berkerak", "3": "Bersih higienis"}');

-- 8. Programs & Program Versions
INSERT INTO b2b.programs (id, organization_id, title, status) VALUES
('d0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001', 'Program Akselerasi Barista Spesialis', 'active');

INSERT INTO b2b.program_versions (id, organization_id, program_id, version_no, status) VALUES
('d1000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001', 'd0000000-0000-0000-0000-000000000001', 1, 'published');

INSERT INTO b2b.program_competencies (program_version_id, competency_id, is_required, target_level) VALUES
('d1000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000001', true, 3);

INSERT INTO b2b.program_steps (id, program_version_id, organization_id, step_type, source_type, source_ref, sort_order, is_required) VALUES
('d2000000-0000-0000-0000-000000000001', 'd1000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001', 'lesson', 'cherry_learning', 'intro-espresso', 1, true);

-- 9. Cohorts
INSERT INTO b2b.cohorts (id, organization_id, program_version_id, name, start_at, status) VALUES
('c1000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001', 'd1000000-0000-0000-0000-000000000001', 'Batch 1 — Menteng Flagship', NOW(), 'active');

-- 10. Enrollments
INSERT INTO b2b.enrollments (id, organization_id, cohort_id, user_id, outlet_id, status) VALUES
('e0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001', 'c1000000-0000-0000-0000-000000000001', '33333333-3333-3333-3333-333333333333', 'a1000000-0000-0000-0000-000000000001', 'active');

-- 11. Trainer Assignments (Sarah assigned to Cohort 1)
INSERT INTO b2b.trainer_assignments (organization_id, cohort_id, trainer_user_id, role, active_from) VALUES
('a0000000-0000-0000-0000-000000000001', 'c1000000-0000-0000-0000-000000000001', '55555555-5555-5555-5555-555555555555', 'assessor', NOW());

-- 12. Learning Step Progress (Online Theory Step Completed for Barista A)
INSERT INTO b2b.learning_step_progress (id, organization_id, enrollment_id, program_step_id, state, completed_at) VALUES
('d3000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001', 'e0000000-0000-0000-0000-000000000001', 'd2000000-0000-0000-0000-000000000001', 'completed', NOW());

-- 13. Public transactions for payment security tests
INSERT INTO public.transactions (
    id, user_id, original_amount, final_amount, status, payment_method, plan_tier, cycle, created_at, expires_at
) VALUES
('tx-test-order-01', '33333333-3333-3333-3333-333333333333', 49000, 49000, 'pending', 'gopay', 'pro', 'monthly', NOW(), NOW() + interval '1 day'),
('tx-expired-order-01', '33333333-3333-3333-3333-333333333333', 49000, 49000, 'pending', 'gopay', 'pro', 'monthly', NOW() - interval '2 days', NOW() - interval '1 day'),
('tx-fallback-qris-01', '33333333-3333-3333-3333-333333333333', 49000, 49000, 'pending', 'fallback_qris', 'pro', 'monthly', NOW(), NOW() + interval '1 day'),
('tx-other-user-order-01', '77777777-7777-7777-7777-777777777777', 49000, 49000, 'pending', 'gopay', 'pro', 'monthly', NOW(), NOW() + interval '1 day');
