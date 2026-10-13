-- Rollback: rollback_20261014_05_provisional_payment_entitlements.sql
-- Description: Safely reverts migration 05 extensions.

DROP TABLE IF EXISTS public.payment_audit_events CASCADE;

ALTER TABLE public.profiles
  DROP COLUMN IF EXISTS pro_entitlement_type,
  DROP COLUMN IF EXISTS pro_source_order_id;

ALTER TABLE public.transactions
  DROP COLUMN IF EXISTS claimed_at,
  DROP COLUMN IF EXISTS verified_at,
  DROP COLUMN IF EXISTS rejected_at,
  DROP COLUMN IF EXISTS verified_by,
  DROP COLUMN IF EXISTS admin_notes;
