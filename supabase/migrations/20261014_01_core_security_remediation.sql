-- ==========================================================
-- Migration: 20261014_01_core_security_remediation.sql
-- Purpose: Hardening RLS & Grants for public.profiles and public.transactions
-- Target: Staging / Cherry Edu Core DB
-- NOTE: DO NOT EXECUTE DIRECTLY ON PRODUCTION WITHOUT APPROVAL
-- ==========================================================

-- 1. Hardening PROFILES table
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Drop permissive public policies
DROP POLICY IF EXISTS "Allow select profiles" ON public.profiles;
DROP POLICY IF EXISTS "Allow insert profiles" ON public.profiles;
DROP POLICY IF EXISTS "Allow update profiles" ON public.profiles;

-- Secure Policies for PROFILES:
-- Authenticated users can view their own profile.
CREATE POLICY "profiles_select_own" ON public.profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id);

-- Public/Learner limited profile read (for team views & public info, excluding sensitive columns if needed)
-- Allows reading basic name, avatar, coffee_role for authenticated users
CREATE POLICY "profiles_select_authenticated" ON public.profiles
  FOR SELECT
  TO authenticated
  USING (true);

-- Users can only insert their own profile with their own auth.uid()
CREATE POLICY "profiles_insert_own" ON public.profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid()::text = id 
    AND (role IS NULL OR role = 'learner')
    AND (is_pro IS NULL OR is_pro = false)
  );

-- Users can only update their own profile, and CANNOT self-elevate to admin or pro
CREATE POLICY "profiles_update_own" ON public.profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid()::text = id)
  WITH CHECK (
    auth.uid()::text = id
    -- Prevents privilege escalation from client-side
    AND role = (SELECT p.role FROM public.profiles p WHERE p.id = auth.uid()::text)
    AND is_pro = (SELECT p.is_pro FROM public.profiles p WHERE p.id = auth.uid()::text)
  );

-- 2. Hardening TRANSACTIONS table
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

-- Drop permissive public policies
DROP POLICY IF EXISTS "Allow select transactions" ON public.transactions;
DROP POLICY IF EXISTS "Allow insert transactions" ON public.transactions;
DROP POLICY IF EXISTS "Allow update transactions" ON public.transactions;

-- Secure Policies for TRANSACTIONS:
-- Authenticated users can only view their own transactions
CREATE POLICY "transactions_select_own" ON public.transactions
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = user_id);

-- Authenticated users can only create transactions for themselves
CREATE POLICY "transactions_insert_own" ON public.transactions
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid()::text = user_id
    AND status = 'pending'
  );

-- Only service role / server APIs can update transaction status to 'paid'
-- Regular users CANNOT update transactions
-- (Client mutation is disabled for security; payment webhook handler must run via server route)

-- Revoke dangerous direct modifications from anon
REVOKE ALL ON public.transactions FROM anon;
GRANT SELECT ON public.profiles TO anon; -- For public creator profiles if needed
REVOKE INSERT, UPDATE, DELETE ON public.profiles FROM anon;
