-- Migration: 20261014_05_provisional_payment_entitlements.sql
-- Description: Non-destructive schema extensions for provisional Pro entitlement,
-- payment claims, admin verification/rejection, and payment audit events.

-- 1. Extend public.transactions with lifecycle timestamps & admin audit fields
ALTER TABLE public.transactions
  ADD COLUMN IF NOT EXISTS claimed_at timestamptz,
  ADD COLUMN IF NOT EXISTS verified_at timestamptz,
  ADD COLUMN IF NOT EXISTS rejected_at timestamptz,
  ADD COLUMN IF NOT EXISTS verified_by text,
  ADD COLUMN IF NOT EXISTS admin_notes text;

-- 2. Extend public.profiles with server-authoritative entitlement state
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS pro_entitlement_type text NOT NULL DEFAULT 'none',
  ADD COLUMN IF NOT EXISTS pro_source_order_id text;

-- Backfill pro_entitlement_type for active pro users
UPDATE public.profiles
SET pro_entitlement_type = 'verified'
WHERE is_pro = true AND pro_entitlement_type = 'none';

-- 3. Create public.payment_audit_events table for end-to-end payment lifecycle audit trail
CREATE TABLE IF NOT EXISTS public.payment_audit_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  transaction_id text NOT NULL,
  user_id text NOT NULL,
  actor_user_id text NOT NULL,
  action text NOT NULL, -- 'order_created', 'payment_claimed', 'payment_verified', 'claim_rejected', 'order_cancelled', 'order_expired'
  previous_status text,
  new_status text,
  reason text,
  metadata jsonb DEFAULT '{}'::jsonb,
  occurred_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_payment_audit_tx ON public.payment_audit_events(transaction_id);
CREATE INDEX IF NOT EXISTS idx_payment_audit_user ON public.payment_audit_events(user_id);

-- 4. Secure public.payment_audit_events permissions
ALTER TABLE public.payment_audit_events ENABLE ROW LEVEL SECURITY;

-- Revoke all modifications from untrusted client roles
REVOKE INSERT, UPDATE, DELETE ON public.payment_audit_events FROM authenticated, anon;
GRANT SELECT ON public.payment_audit_events TO authenticated;

-- Users can only read their own payment audit records
DROP POLICY IF EXISTS payment_audit_select_own ON public.payment_audit_events;
CREATE POLICY payment_audit_select_own ON public.payment_audit_events
  FOR SELECT
  TO authenticated
  USING (((auth.uid())::text = user_id));
