-- ==========================================================
-- CherryEdu Production Synchronization Schema
-- Execute in Supabase Dashboard -> SQL Editor:
-- https://supabase.com/dashboard/project/yswtpmwfzqqeguiwogvj/sql
-- ==========================================================

-- 1. Create PROFILES table
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

-- 2. Create TRANSACTIONS table
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
    expires_at TIMESTAMP WITH TIME ZONE,
    paid_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Enable RLS and add public access policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow select profiles" ON public.profiles;
CREATE POLICY "Allow select profiles" ON public.profiles FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow insert profiles" ON public.profiles;
CREATE POLICY "Allow insert profiles" ON public.profiles FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow update profiles" ON public.profiles;
CREATE POLICY "Allow update profiles" ON public.profiles FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Allow select transactions" ON public.transactions;
CREATE POLICY "Allow select transactions" ON public.transactions FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow insert transactions" ON public.transactions;
CREATE POLICY "Allow insert transactions" ON public.transactions FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow update transactions" ON public.transactions;
CREATE POLICY "Allow update transactions" ON public.transactions FOR UPDATE USING (true);

-- 4. Auto-sync trigger from auth.users to public.profiles for new registrations
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    name,
    email,
    avatar_url,
    role,
    coffee_role,
    is_pro,
    subscription_tier,
    created_at,
    updated_at
  ) VALUES (
    NEW.id::text,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture', 'https://api.dicebear.com/7.x/bottts/svg?seed=' || NEW.id::text),
    CASE WHEN NEW.email = 'admin@cherryedu.id' THEN 'admin' ELSE 'learner' END,
    COALESCE(NEW.raw_user_meta_data->>'coffee_role', 'barista'),
    false,
    'free',
    NOW(),
    NOW()
  )
  ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    avatar_url = EXCLUDED.avatar_url,
    updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
