-- ==========================================================
-- Migration: 20261014_03_learning_persistence.sql
-- Purpose: Canonical PostgreSQL Schema for Core Learning Persistence & Progress
-- Target: Staging / Cherry Edu Core DB
-- NOTE: DO NOT EXECUTE DIRECTLY ON PRODUCTION WITHOUT APPROVAL
-- ==========================================================

-- 1. Enrollments
CREATE TABLE IF NOT EXISTS public.enrollments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    learning_path_id TEXT NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('active', 'completed', 'dropped')) DEFAULT 'active',
    progress_percent NUMERIC(5, 2) NOT NULL DEFAULT 0.00 CHECK (progress_percent BETWEEN 0 AND 100),
    enrolled_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMPTZ,
    last_accessed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_public_user_path UNIQUE (user_id, learning_path_id)
);

CREATE INDEX IF NOT EXISTS idx_enrollments_user_id ON public.enrollments(user_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_path_id ON public.enrollments(learning_path_id);

-- 2. Lesson Progress
CREATE TABLE IF NOT EXISTS public.lesson_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    lesson_id TEXT NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('not_started', 'in_progress', 'completed')) DEFAULT 'not_started',
    time_spent_seconds INT NOT NULL DEFAULT 0 CHECK (time_spent_seconds >= 0),
    completed_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_public_user_lesson UNIQUE (user_id, lesson_id)
);

CREATE INDEX IF NOT EXISTS idx_lesson_progress_user_id ON public.lesson_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_lesson_progress_lesson_id ON public.lesson_progress(lesson_id);

-- 3. Quiz Attempts
CREATE TABLE IF NOT EXISTS public.quiz_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    quiz_id TEXT NOT NULL,
    score NUMERIC(5, 2) NOT NULL CHECK (score BETWEEN 0 AND 100),
    passed BOOLEAN NOT NULL DEFAULT false,
    answers_snapshot JSONB NOT NULL DEFAULT '{}'::jsonb,
    attempt_number INT NOT NULL DEFAULT 1 CHECK (attempt_number >= 1),
    attempted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_public_quiz_attempt UNIQUE (user_id, quiz_id, attempt_number)
);

CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_id ON public.quiz_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_quiz_id ON public.quiz_attempts(quiz_id);

-- 4. Learning Event Receipts (for idempotent multi-instance synchronization)
CREATE TABLE IF NOT EXISTS public.learning_event_receipts (
    event_id TEXT NOT NULL,
    user_id TEXT NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    event_type TEXT NOT NULL,
    payload_hash TEXT NOT NULL,
    processed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (user_id, event_id)
);

CREATE INDEX IF NOT EXISTS idx_learning_receipts_user_lookup ON public.learning_event_receipts(user_id, event_type, payload_hash);

-- 5. Row Level Security for Learning Persistence Tables
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.learning_event_receipts ENABLE ROW LEVEL SECURITY;

-- Users can only SELECT their own learning records
CREATE POLICY "enrollments_select_own" ON public.enrollments
    FOR SELECT TO authenticated USING (auth.uid()::text = user_id);

CREATE POLICY "lesson_progress_select_own" ON public.lesson_progress
    FOR SELECT TO authenticated USING (auth.uid()::text = user_id);

CREATE POLICY "quiz_attempts_select_own" ON public.quiz_attempts
    FOR SELECT TO authenticated USING (auth.uid()::text = user_id);

CREATE POLICY "learning_event_receipts_select_own" ON public.learning_event_receipts
    FOR SELECT TO authenticated USING (auth.uid()::text = user_id);

-- Direct client mutations are blocked; mutations must go through validated server-side API endpoints
REVOKE INSERT, UPDATE, DELETE ON public.enrollments FROM anon, authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.lesson_progress FROM anon, authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.quiz_attempts FROM anon, authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.learning_event_receipts FROM anon, authenticated;
