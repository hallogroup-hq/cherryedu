-- ==========================================================
-- Migration: 20261014_01_core_security_remediation.sql
-- Purpose: Hardening RLS & Column Grants for public.profiles and public.transactions
-- Target: Staging / Cherry Edu Core DB
-- NOTE: DO NOT EXECUTE DIRECTLY ON PRODUCTION WITHOUT APPROVAL
-- ==========================================================

-- 1. Hardening PROFILES table
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Drop permissive public policies and prior attempts
DROP POLICY IF EXISTS "Allow select profiles" ON public.profiles;
DROP POLICY IF EXISTS "Allow insert profiles" ON public.profiles;
DROP POLICY IF EXISTS "Allow update profiles" ON public.profiles;
DROP POLICY IF EXISTS "profiles_select_authenticated" ON public.profiles;
DROP POLICY IF EXISTS "profiles_select_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_insert_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;

-- Secure Policy: Authenticated users can view ONLY their own profile record
CREATE POLICY "profiles_select_own" ON public.profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id);

-- Public Projection View: Exposes only non-sensitive public attributes
-- Eliminates cross-user leaks of email, billing, role, and subscription details
CREATE OR REPLACE VIEW public.public_profiles WITH (security_barrier = true) AS
  SELECT 
    id, 
    name, 
    avatar_url, 
    bio, 
    coffee_role, 
    city, 
    xp_points, 
    streak_count, 
    created_at
  FROM public.profiles;

GRANT SELECT ON public.public_profiles TO authenticated, anon;

-- Users can insert their own profile on registration
CREATE POLICY "profiles_insert_own" ON public.profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid()::text = id 
    AND (role IS NULL OR role = 'learner')
    AND (is_pro IS NULL OR is_pro = false)
  );

-- Users can update only their own profile
CREATE POLICY "profiles_update_own" ON public.profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid()::text = id)
  WITH CHECK (auth.uid()::text = id);

-- Column-level privilege restriction:
-- Prevents recursive policy evaluation while strictly blocking client-side privilege escalation.
-- Revoke table-level UPDATE from public roles to enforce column-level protection:
REVOKE UPDATE ON public.profiles FROM authenticated, anon;

-- Grant UPDATE ONLY on safe editable profile columns (strictly excluding is_pro, role, subscription_tier, etc.)
GRANT UPDATE (name, avatar_url, bio, coffee_role, city, updated_at) ON public.profiles TO authenticated;

-- 2. Hardening TRANSACTIONS table
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

-- Drop permissive policies
DROP POLICY IF EXISTS "Allow select transactions" ON public.transactions;
DROP POLICY IF EXISTS "Allow insert transactions" ON public.transactions;
DROP POLICY IF EXISTS "Allow update transactions" ON public.transactions;
DROP POLICY IF EXISTS "transactions_select_own" ON public.transactions;
DROP POLICY IF EXISTS "transactions_insert_own" ON public.transactions;

-- Secure Policies for TRANSACTIONS:
-- Authenticated users can only view their own transactions
CREATE POLICY "transactions_select_own" ON public.transactions
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = user_id);

-- Authenticated users can only create transactions for themselves with initial 'pending' status
CREATE POLICY "transactions_insert_own" ON public.transactions
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid()::text = user_id
    AND status = 'pending'
  );

-- Revoke all modifications on transactions from anon and regular authenticated users
-- Status updates to 'paid' or activation must be executed via server-side service role
REVOKE UPDATE, DELETE ON public.transactions FROM authenticated, anon;
REVOKE ALL ON public.transactions FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.profiles FROM anon;
