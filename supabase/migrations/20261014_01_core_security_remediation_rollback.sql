-- ==========================================================
-- Migration Rollback: 20261014_01_core_security_remediation_rollback.sql
-- Purpose: Rollback security remediation (FOR STAGING TESTING ONLY)
-- ==========================================================

DROP VIEW IF EXISTS public.public_profiles;

DROP POLICY IF EXISTS "profiles_select_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_insert_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;

DROP POLICY IF EXISTS "transactions_select_own" ON public.transactions;
DROP POLICY IF EXISTS "transactions_insert_own" ON public.transactions;

GRANT UPDATE (is_pro, role, subscription_tier, subscription_expires_at, subscription_cycle)
  ON public.profiles TO authenticated;

-- Restore base policies if needed
CREATE POLICY "Allow select profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Allow insert profiles" ON public.profiles FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow update profiles" ON public.profiles FOR UPDATE USING (true);

CREATE POLICY "Allow select transactions" ON public.transactions FOR SELECT USING (true);
CREATE POLICY "Allow insert transactions" ON public.transactions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow update transactions" ON public.transactions FOR UPDATE USING (true);

GRANT ALL ON public.profiles TO authenticated, anon;
GRANT ALL ON public.transactions TO authenticated, anon;
