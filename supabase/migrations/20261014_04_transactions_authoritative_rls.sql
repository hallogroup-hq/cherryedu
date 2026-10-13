-- Migration 20261014_04_transactions_authoritative_rls.sql
-- Purpose: Hardening public.transactions table against untrusted client financial writes.
-- Direct client INSERT, UPDATE, and DELETE are strictly revoked.
-- All transactions and orders must be created and settled by the authoritative server runtime.

BEGIN;

-- 1. Ensure proof_notes column exists on public.transactions
ALTER TABLE public.transactions 
  ADD COLUMN IF NOT EXISTS proof_notes text;

-- 2. Drop direct client insert policy
DROP POLICY IF EXISTS "transactions_insert_own" ON public.transactions;

-- 3. Revoke all mutation permissions from authenticated and anon roles
REVOKE INSERT, UPDATE, DELETE ON public.transactions FROM authenticated, anon;

-- 4. Strictly allow SELECT only for own transactions
GRANT SELECT ON public.transactions TO authenticated;

-- Ensure RLS is enabled on public.transactions
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

-- Ensure SELECT policy is in place
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
      AND tablename = 'transactions' 
      AND policyname = 'transactions_select_own'
  ) THEN
    CREATE POLICY "transactions_select_own" ON public.transactions
      FOR SELECT TO authenticated
      USING ((auth.uid())::text = user_id);
  END IF;
END $$;

COMMIT;
