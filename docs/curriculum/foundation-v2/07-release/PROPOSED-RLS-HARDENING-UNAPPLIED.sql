-- CherryEdu Foundation V2 / urgent platform security: PROPOSED DATABASE HARDENING.
-- DO NOT EXECUTE ON PRODUCTION. Review in a disposable staging clone FIRST.
-- Dated 2026-10-12; current live schema has TEXT id columns, not UUID primary keys.
-- PRECONDITIONS: server-side trusted payment writer deployed; client profile
-- persistence uses safe INSERT/UPDATE column allowlists. Current code does NOT
-- yet meet those prerequisites, so applying this directly could break flows.
-- No rollback to allow-all policies is acceptable.
BEGIN;

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

-- Live legacy policies allow PUBLIC all SELECT/INSERT/UPDATE (qual=true).
DROP POLICY IF EXISTS "Allow insert profiles" ON public.profiles;
DROP POLICY IF EXISTS "Allow select profiles" ON public.profiles;
DROP POLICY IF EXISTS "Allow update profiles" ON public.profiles;
DROP POLICY IF EXISTS "Allow insert transactions" ON public.transactions;
DROP POLICY IF EXISTS "Allow select transactions" ON public.transactions;
DROP POLICY IF EXISTS "Allow update transactions" ON public.transactions;

-- Never depend solely on RLS: explicit SQL role grants prevent potentially
-- damaging table-level/column-level operations, even if someone adds a policy.
REVOKE ALL ON TABLE public.profiles FROM PUBLIC, anon, authenticated;
REVOKE ALL ON TABLE public.transactions FROM PUBLIC, anon, authenticated;

-- Profiles: a signed-in user may read ONLY their profile.
-- Login identity must be from Supabase Auth's validated JWT, never URL/body.
GRANT SELECT ON TABLE public.profiles TO authenticated;
CREATE POLICY "profiles_select_own" ON public.profiles
  FOR SELECT TO authenticated
  USING (id = (SELECT auth.uid())::text);

-- New user can create ONLY a row whose TEXT ID matches validated auth.uid().
-- Privileged columns (role, is_pro, tier, XP, streak_count, etc.) are omitted
-- from INSERT grant; their defaults are defined on the actual live table.
GRANT INSERT (id, name, email, avatar_url, bio, coffee_role, city,
              last_active_date, updated_at)
  ON TABLE public.profiles TO authenticated;
CREATE POLICY "profiles_insert_own" ON public.profiles
  FOR INSERT TO authenticated
  WITH CHECK (id = (SELECT auth.uid())::text);

-- Public self-editable fields only; disallow user-controlled privilege changes.
GRANT UPDATE (name, avatar_url, bio, coffee_role, city,
              last_active_date, updated_at)
  ON TABLE public.profiles TO authenticated;
CREATE POLICY "profiles_update_own" ON public.profiles
  FOR UPDATE TO authenticated
  USING (id = (SELECT auth.uid())::text)
  WITH CHECK (id = (SELECT auth.uid())::text);

-- Payment/transaction content is readable by its owner; creation, pricing,
-- paid status, QRIS details, expiry, and pro entitlement MUST be server-side.
-- No INSERT/UPDATE/DELETE privileges granted to anon/authenticated.
GRANT SELECT ON TABLE public.transactions TO authenticated;
CREATE POLICY "transactions_select_own" ON public.transactions
  FOR SELECT TO authenticated
  USING (user_id = (SELECT auth.uid())::text);

COMMIT;

-- POST-MIGRATION: run in staging with separate auth test accounts A and B.
--   - anon: cannot SELECT/INSERT/UPDATE/DELETE either table
--   - authenticated A: can read A, cannot read B
--   - authenticated A: cannot INSERT profiles row with id=B
--   - authenticated A: can update A bio, cannot UPDATE A role/is_pro
--   - authenticated A: cannot UPDATE/INSERT/DELETE any transaction
--   - signed-in A: can SELECT only A transactions
--   - service-role payment handler can create/update transactions only after
--     authenticating webhook/status with provider and idempotency key
-- Verify existing public leaderboards, admin analytics and profile bootstrap
-- work with PRIVILEGE-SAFE server endpoints or sanitised aggregate views.
