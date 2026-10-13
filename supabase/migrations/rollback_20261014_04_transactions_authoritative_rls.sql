-- Rollback Migration 20261014_04_transactions_authoritative_rls.sql
-- Restores previous client insert policy on public.transactions

BEGIN;

GRANT INSERT ON public.transactions TO authenticated;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' 
      AND tablename = 'transactions' 
      AND policyname = 'transactions_insert_own'
  ) THEN
    CREATE POLICY "transactions_insert_own" ON public.transactions
      FOR INSERT TO authenticated
      WITH CHECK (((auth.uid())::text = user_id) AND (status = 'pending'::text));
  END IF;
END $$;

COMMIT;
