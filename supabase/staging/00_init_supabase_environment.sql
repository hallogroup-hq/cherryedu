-- ==========================================================
-- Staging Environment Initializer: 00_init_supabase_environment.sql
-- Emulates Supabase Core Auth & Roles for Staging Database
-- Database: cherryedu_staging_db
-- ==========================================================

-- 1. Create standard Supabase roles
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'anon') THEN
        CREATE ROLE anon NOLOGIN;
    END IF;
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'authenticated') THEN
        CREATE ROLE authenticated NOLOGIN;
    END IF;
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'service_role') THEN
        CREATE ROLE service_role NOLOGIN;
    END IF;
END
$$;

-- 2. Create Schema auth
CREATE SCHEMA IF NOT EXISTS auth;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Emulate auth.users
CREATE TABLE IF NOT EXISTS auth.users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    raw_user_meta_data JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Emulate auth.uid()
CREATE OR REPLACE FUNCTION auth.uid() RETURNS UUID AS $$
BEGIN
    RETURN NULLIF(current_setting('request.jwt.claim.sub', true), '')::UUID;
EXCEPTION WHEN OTHERS THEN
    RETURN NULL;
END;
$$ LANGUAGE plpgsql STABLE;

-- Emulate auth.jwt()
CREATE OR REPLACE FUNCTION auth.jwt() RETURNS JSONB AS $$
BEGIN
    RETURN COALESCE(NULLIF(current_setting('request.jwt.claims', true), '')::jsonb, '{}'::jsonb);
EXCEPTION WHEN OTHERS THEN
    RETURN '{}'::jsonb;
END;
$$ LANGUAGE plpgsql STABLE;

-- 3. Set up Initial Public Schema (Exactly matching existing production state before hardening)
CREATE TABLE IF NOT EXISTS public.profiles (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    avatar_url TEXT,
    bio TEXT,
    role TEXT NOT NULL DEFAULT 'learner',
    coffee_role TEXT NOT NULL DEFAULT 'barista',
    city TEXT DEFAULT 'Indonesia',
    xp_points INT NOT NULL DEFAULT 0,
    streak_count INT NOT NULL DEFAULT 0,
    is_pro BOOLEAN NOT NULL DEFAULT false,
    subscription_tier TEXT NOT NULL DEFAULT 'free',
    subscription_cycle TEXT,
    subscription_expires_at TIMESTAMP WITH TIME ZONE,
    last_active_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.transactions (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    user_name TEXT,
    user_email TEXT,
    plan_tier TEXT NOT NULL DEFAULT 'pro',
    cycle TEXT NOT NULL DEFAULT 'monthly',
    original_amount INT NOT NULL,
    discount_amount INT NOT NULL DEFAULT 0,
    final_amount INT NOT NULL,
    voucher_code TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    payment_method TEXT NOT NULL DEFAULT 'gopay_qris',
    qris_id TEXT,
    trx_id TEXT,
    qris_code TEXT,
    qris_url TEXT,
    proof_url TEXT,
    expires_at TIMESTAMP WITH TIME ZONE,
    paid_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Grants on public schema
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO anon, authenticated;
