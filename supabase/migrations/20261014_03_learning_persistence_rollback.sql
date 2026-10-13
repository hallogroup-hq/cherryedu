-- ==========================================================
-- Migration Rollback: 20261014_03_learning_persistence_rollback.sql
-- Purpose: Rollback core learning persistence tables (STAGING ONLY)
-- ==========================================================

DROP TABLE IF EXISTS public.learning_event_receipts CASCADE;
DROP TABLE IF EXISTS public.quiz_attempts CASCADE;
DROP TABLE IF EXISTS public.lesson_progress CASCADE;
DROP TABLE IF EXISTS public.enrollments CASCADE;
