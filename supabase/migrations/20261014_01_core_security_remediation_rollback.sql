-- ==========================================================
-- Rollback Migration: 20261014_01_core_security_remediation_rollback.sql
-- Purpose: Restores previous open policy in case of unexpected regression
-- Target: Cherry Edu Core DB
-- ==========================================================

-- 1. Rollback PROFILES policies
DROP POLICY IF EXISTS "profiles_select_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_select_authenticated" ON public.profiles;
DROP POLICY IF EXISTS "profiles_insert_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;

CREATE POLICY "Allow select profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Allow insert profiles" ON public.profiles FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow update profiles" ON public.profiles FOR UPDATE USING (true);

-- 2. Rollback TRANSACTIONS policies
DROP POLICY IF EXISTS "transactions_select_own" ON public.transactions;
DROP POLICY IF EXISTS "transactions_insert_own" ON public.transactions;

CREATE POLICY "Allow select transactions" ON public.transactions FOR SELECT USING (true);
CREATE POLICY "Allow insert transactions" ON public.transactions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow update transactions" ON public.transactions FOR UPDATE USING (true);

-- Restore grants
GRANT SELECT, INSERT, UPDATE ON public.profiles TO anon;
GRANT SELECT, INSERT, UPDATE ON public.transactions TO anon;
