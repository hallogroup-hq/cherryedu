-- ==========================================================
-- Staging Test Suite: test_staging_suite.sql
-- Rigorous Database-Level Testing for Security Hardening & Tenant Isolation
-- Database: cherryedu_staging_db
-- ==========================================================

\set ON_ERROR_STOP on

BEGIN;

CREATE TEMP TABLE test_results (
    test_id INT GENERATED ALWAYS AS IDENTITY,
    category TEXT,
    test_name TEXT,
    passed BOOLEAN,
    detail TEXT
);

GRANT ALL ON test_results TO anon, authenticated, public;

-- ----------------------------------------------------------
-- Step 1: Seed Test Identities in auth.users
-- ----------------------------------------------------------

INSERT INTO auth.users (id, email, raw_user_meta_data) VALUES
('11111111-1111-1111-1111-111111111111', 'barista.a@coffeeshop-a.com', '{"name": "Barista A"}'),
('22222222-2222-2222-2222-222222222222', 'owner.a@coffeeshop-a.com', '{"name": "Owner A"}'),
('33333333-3333-3333-3333-333333333333', 'barista.b@coffeeshop-b.com', '{"name": "Barista B"}'),
('44444444-4444-4444-4444-444444444444', 'owner.b@coffeeshop-b.com', '{"name": "Owner B"}'),
('55555555-5555-5555-5555-555555555555', 'trainer@cherryedu.id', '{"name": "Trainer Cherry"}'),
('66666666-6666-6666-6666-666666666666', 'admin@cherryedu.id', '{"name": "Admin Cherry"}'),
('77777777-7777-7777-7777-777777777777', 'suspended@coffeeshop-a.com', '{"name": "Suspended User"}')
ON CONFLICT (id) DO NOTHING;

-- Initial profiles setup via service_role
INSERT INTO public.profiles (id, name, email, role, is_pro, subscription_tier) VALUES
('11111111-1111-1111-1111-111111111111', 'Barista A', 'barista.a@coffeeshop-a.com', 'learner', false, 'free'),
('22222222-2222-2222-2222-222222222222', 'Owner A', 'owner.a@coffeeshop-a.com', 'learner', true, 'pro'),
('33333333-3333-3333-3333-333333333333', 'Barista B', 'barista.b@coffeeshop-b.com', 'learner', false, 'free'),
('44444444-4444-4444-4444-444444444444', 'Owner B', 'owner.b@coffeeshop-b.com', 'learner', true, 'pro')
ON CONFLICT (id) DO UPDATE SET is_pro = EXCLUDED.is_pro;

-- Initial transactions setup via service_role
INSERT INTO public.transactions (id, user_id, user_name, user_email, plan_tier, final_amount, original_amount, status) VALUES
('tx_a_001', '11111111-1111-1111-1111-111111111111', 'Barista A', 'barista.a@coffeeshop-a.com', 'pro', 49000, 49000, 'paid'),
('tx_b_001', '33333333-3333-3333-3333-333333333333', 'Barista B', 'barista.b@coffeeshop-b.com', 'pro', 49000, 49000, 'paid')
ON CONFLICT (id) DO NOTHING;

-- ----------------------------------------------------------
-- Step 2: Test Core Security Hardening (RLS & Grants)
-- ----------------------------------------------------------

-- Test 2.1: Authenticated User A1 reads own profile
SET ROLE authenticated;
SET request.jwt.claim.sub = '11111111-1111-1111-1111-111111111111';

DO $$
DECLARE
    cnt INT;
BEGIN
    SELECT count(*) INTO cnt FROM public.profiles WHERE id = '11111111-1111-1111-1111-111111111111';
    IF cnt = 1 THEN
        INSERT INTO test_results (category, test_name, passed, detail) 
        VALUES ('RLS Hardening', 'User can read own profile', true, 'Returned 1 row for self');
    ELSE
        INSERT INTO test_results (category, test_name, passed, detail) 
        VALUES ('RLS Hardening', 'User can read own profile', false, 'Could not read own profile');
    END IF;
END $$;

-- Test 2.2: Authenticated User A1 attempts self-elevation to is_pro = true (Must fail)
DO $$
BEGIN
    UPDATE public.profiles SET is_pro = true WHERE id = '11111111-1111-1111-1111-111111111111';
    -- If update succeeds, check if it actually violated RLS or got caught by WITH CHECK
    INSERT INTO test_results (category, test_name, passed, detail) 
    VALUES ('RLS Hardening', 'User privilege escalation (is_pro = true) blocked', false, 'Expected WITH CHECK policy violation, but update succeeded');
EXCEPTION WHEN OTHERS THEN
    INSERT INTO test_results (category, test_name, passed, detail) 
    VALUES ('RLS Hardening', 'User privilege escalation (is_pro = true) blocked', true, 'Blocked by RLS WITH CHECK: ' || SQLERRM);
END $$;

-- Test 2.3: Authenticated User A1 attempts self-elevation to role = admin (Must fail)
DO $$
BEGIN
    UPDATE public.profiles SET role = 'admin' WHERE id = '11111111-1111-1111-1111-111111111111';
    INSERT INTO test_results (category, test_name, passed, detail) 
    VALUES ('RLS Hardening', 'User privilege escalation (role = admin) blocked', false, 'Expected WITH CHECK policy violation');
EXCEPTION WHEN OTHERS THEN
    INSERT INTO test_results (category, test_name, passed, detail) 
    VALUES ('RLS Hardening', 'User privilege escalation (role = admin) blocked', true, 'Blocked by RLS WITH CHECK: ' || SQLERRM);
END $$;

-- Test 2.4: Authenticated User A1 updates safe field (bio) (Must succeed)
DO $$
BEGIN
    UPDATE public.profiles SET bio = 'Barista di Coffee Shop A' WHERE id = '11111111-1111-1111-1111-111111111111';
    INSERT INTO test_results (category, test_name, passed, detail) 
    VALUES ('RLS Hardening', 'User safe profile field update (bio) allowed', true, 'Successfully updated bio');
EXCEPTION WHEN OTHERS THEN
    INSERT INTO test_results (category, test_name, passed, detail) 
    VALUES ('RLS Hardening', 'User safe profile field update (bio) allowed', false, 'Failed: ' || SQLERRM);
END $$;

-- Test 2.5: User A1 reads User B1 transaction (Must return 0 rows)
DO $$
DECLARE
    cnt INT;
BEGIN
    SELECT count(*) INTO cnt FROM public.transactions WHERE id = 'tx_b_001';
    IF cnt = 0 THEN
        INSERT INTO test_results (category, test_name, passed, detail) 
        VALUES ('RLS Hardening', 'User cannot read other users transactions', true, 'Returned 0 rows for foreign transaction');
    ELSE
        INSERT INTO test_results (category, test_name, passed, detail) 
        VALUES ('RLS Hardening', 'User cannot read other users transactions', false, 'Leaked foreign transaction data');
    END IF;
END $$;

-- Test 2.6: User A1 reads own transaction (Must return 1 row)
DO $$
DECLARE
    cnt INT;
BEGIN
    SELECT count(*) INTO cnt FROM public.transactions WHERE id = 'tx_a_001';
    IF cnt = 1 THEN
        INSERT INTO test_results (category, test_name, passed, detail) 
        VALUES ('RLS Hardening', 'User can read own transactions', true, 'Returned 1 row for own transaction');
    ELSE
        INSERT INTO test_results (category, test_name, passed, detail) 
        VALUES ('RLS Hardening', 'User can read own transactions', false, 'Failed to read own transaction');
    END IF;
END $$;

-- Test 2.7: Anonymous user permissions denied on transactions
SET ROLE anon;
RESET request.jwt.claim.sub;

DO $$
BEGIN
    INSERT INTO public.transactions (id, user_id, final_amount, original_amount) VALUES ('tx_anon_leak', 'anon-user', 1000, 1000);
    INSERT INTO test_results (category, test_name, passed, detail) 
    VALUES ('RLS Hardening', 'Anonymous insert on transactions denied', false, 'Anonymous insert unexpectedly succeeded');
EXCEPTION WHEN OTHERS THEN
    INSERT INTO test_results (category, test_name, passed, detail) 
    VALUES ('RLS Hardening', 'Anonymous insert on transactions denied', true, 'Permission denied: ' || SQLERRM);
END $$;

-- ----------------------------------------------------------
-- Step 3: Test Private B2B Schema & Tenant Isolation
-- ----------------------------------------------------------

-- Test 3.1: Anonymous user denied access to private schema b2b
DO $$
BEGIN
    PERFORM count(*) FROM b2b.organizations;
    INSERT INTO test_results (category, test_name, passed, detail) 
    VALUES ('Schema Isolation', 'Anon access to b2b schema denied', false, 'Anon was able to query b2b.organizations');
EXCEPTION WHEN OTHERS THEN
    INSERT INTO test_results (category, test_name, passed, detail) 
    VALUES ('Schema Isolation', 'Anon access to b2b schema denied', true, 'Schema b2b private from anon: ' || SQLERRM);
END $$;

-- Test 3.2: Authenticated user denied direct access to schema b2b (Must use server API)
SET ROLE authenticated;
DO $$
BEGIN
    PERFORM count(*) FROM b2b.organizations;
    INSERT INTO test_results (category, test_name, passed, detail) 
    VALUES ('Schema Isolation', 'Authenticated direct query on b2b schema denied', false, 'Authenticated direct query succeeded');
EXCEPTION WHEN OTHERS THEN
    INSERT INTO test_results (category, test_name, passed, detail) 
    VALUES ('Schema Isolation', 'Authenticated direct query on b2b schema denied', true, 'Direct DB query blocked from authenticated role: ' || SQLERRM);
END $$;

-- Test 3.3: Tenant Data Isolation & Composite FK Enforcement
RESET ROLE; -- Run as superuser/service_role to test schema constraints

INSERT INTO b2b.organizations (id, slug, display_name, status) VALUES
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'coffee-shop-a', 'Coffee Shop A', 'active'),
('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'coffee-shop-b', 'Coffee Shop B', 'active')
ON CONFLICT (id) DO NOTHING;

INSERT INTO b2b.outlets (id, organization_id, name, city) VALUES
('aa111111-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Outlet A Utama', 'Jakarta'),
('bb111111-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'Outlet B Utama', 'Bandung')
ON CONFLICT (id) DO NOTHING;

INSERT INTO b2b.programs (id, organization_id, title, status) VALUES
('0a000001-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Barista Onboarding A', 'active'),
('0b000001-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'Barista Onboarding B', 'active')
ON CONFLICT (id) DO NOTHING;

INSERT INTO b2b.program_versions (id, program_id, organization_id, version_no, status) VALUES
('0a000011-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '0a000001-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 1, 'published'),
('0b000011-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '0b000001-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 1, 'published')
ON CONFLICT (id) DO NOTHING;

-- Test 3.4: Cross-Tenant Cohort FK Violation
-- Attempting to create a Cohort for Tenant A that references Tenant B's Program Version
DO $$
BEGIN
    INSERT INTO b2b.cohorts (id, organization_id, program_version_id, name, start_at) VALUES
    ('0a000111-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '0b000011-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'Batch Cross Tenant', NOW());
    
    INSERT INTO test_results (category, test_name, passed, detail) 
    VALUES ('Tenant Constraints', 'Cross-tenant program version in cohort blocked by composite FK', false, 'Cross-tenant reference succeeded unexpectedly');
EXCEPTION WHEN OTHERS THEN
    INSERT INTO test_results (category, test_name, passed, detail) 
    VALUES ('Tenant Constraints', 'Cross-tenant program version in cohort blocked by composite FK', true, 'Blocked by composite FK fk_cohort_program_version: ' || SQLERRM);
END $$;

-- Test 3.5: Valid Cohort and Enrollment within same Tenant
INSERT INTO b2b.cohorts (id, organization_id, program_version_id, name, start_at) VALUES
('0a000111-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '0a000011-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Batch 1 Kedai A', NOW())
ON CONFLICT (id) DO NOTHING;

INSERT INTO b2b.enrollments (id, organization_id, cohort_id, user_id, outlet_id, status) VALUES
('0a001111-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '0a000111-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '11111111-1111-1111-1111-111111111111', 'aa111111-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'active')
ON CONFLICT (id) DO NOTHING;

-- Test 3.6: Duplicate enrollment prevention in same cohort
DO $$
BEGIN
    INSERT INTO b2b.enrollments (id, organization_id, cohort_id, user_id, status) VALUES
    ('0a001112-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '0a000111-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '11111111-1111-1111-1111-111111111111', 'active');
    
    INSERT INTO test_results (category, test_name, passed, detail) 
    VALUES ('Tenant Constraints', 'Duplicate enrollment in same cohort prevented', false, 'Duplicate enrollment succeeded');
EXCEPTION WHEN OTHERS THEN
    INSERT INTO test_results (category, test_name, passed, detail) 
    VALUES ('Tenant Constraints', 'Duplicate enrollment in same cohort prevented', true, 'Unique constraint uq_cohort_enrollment prevented duplicate');
END $$;

-- ----------------------------------------------------------
-- Step 4: Display Test Report
-- ----------------------------------------------------------

SELECT 
    test_id, 
    category, 
    test_name, 
    CASE WHEN passed THEN 'PASS' ELSE 'FAIL' END as status, 
    detail 
FROM test_results 
ORDER BY test_id;

SELECT 
    count(*) filter (where passed) as total_passed,
    count(*) filter (where not passed) as total_failed,
    count(*) as total_tests
FROM test_results;

ROLLBACK; -- Always clean up test transactions
