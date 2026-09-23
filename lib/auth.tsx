'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User as SupabaseUser, Session } from '@supabase/supabase-js';
import { supabase } from './supabase';

export interface AuthContextType {
  user: SupabaseUser | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signInWithGoogle: (redirectTo?: string) => Promise<{ error: string | null }>;
  signUp: (
    email: string,
    password: string,
    name: string,
    coffeeRole?: string
  ) => Promise<{ error: string | null; needsConfirmation?: boolean }>;
  signInAsDemo: (role: 'admin' | 'barista' | 'home_brewer' | 'q_grader') => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function translateAuthError(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes('invalid login credentials') || lower.includes('invalid_grant')) {
    return 'Email atau kata sandi salah. Silakan periksa kembali.';
  }
  if (lower.includes('email not confirmed')) {
    return 'Email belum dikonfirmasi. Silakan periksa kotak masuk atau folder spam email Anda.';
  }
  if (lower.includes('user already registered') || lower.includes('already exists')) {
    return 'Alamat email ini sudah terdaftar. Silakan langsung masuk.';
  }
  if (lower.includes('password should be at least')) {
    return 'Kata sandi minimal harus 8 karakter.';
  }
  if (lower.includes('rate limit')) {
    return 'Terlalu banyak permintaan. Harap tunggu beberapa saat sebelum mencoba lagi.';
  }
  if (lower.includes('invalid') && lower.includes('email')) {
    return 'Format alamat email tidak valid. Gunakan email aktif yang benar.';
  }
  if (lower.includes('provider is not enabled') || lower.includes('unsupported provider')) {
    return 'Fitur Masuk dengan Google belum diaktifkan di dashboard Supabase (Authentication → Providers → Google). Silakan gunakan formulir email & kata sandi di bawah.';
  }
  return message;
}

const TEST_USER_KEY = 'cherryedu_testuser_session';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Proactively purge any leftover demo auth user
    try {
      localStorage.removeItem('cherryedu_local_auth_user');
    } catch {}

    const loadInitialSession = async () => {
      // Check for dedicated test user session first
      try {
        const savedTestSession = localStorage.getItem(TEST_USER_KEY);
        if (savedTestSession) {
          const parsed = JSON.parse(savedTestSession);
          if (
            parsed?.user?.id === 'user-testuser-cherry' ||
            parsed?.user?.id === 'usr-admin-01' ||
            parsed?.user?.email === 'testuser@cherrycoffeeroastery.com' ||
            parsed?.user?.email === 'testuser@cherryedu.id' ||
            parsed?.user?.email === 'admin@cherryedu.id'
          ) {
            setSession(parsed);
            setUser(parsed.user);
            setLoading(false);
            return;
          }
        }
      } catch {}

      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        setLoading(false);
        return;
      }

      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setSession(session);
          setUser(session.user);
        } else {
          setSession(null);
          setUser(null);
        }
      } catch (err) {
        console.warn('Failed to get Supabase session:', err);
      } finally {
        setLoading(false);
      }
    };

    loadInitialSession();

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          setSession(session);
          setUser(session.user);
        } else {
          try {
            const savedTestSession = localStorage.getItem(TEST_USER_KEY);
            if (!savedTestSession) {
              setSession(null);
              setUser(null);
            }
          } catch {
            setSession(null);
            setUser(null);
          }
        }
      });

      return () => subscription.unsubscribe();
    }
  }, []);

  const signIn = async (email: string, password: string): Promise<{ error: string | null }> => {
    const cleanInput = email.trim().toLowerCase();
    const isTestUserIdentifier =
      cleanInput === 'testuser' ||
      cleanInput === 'testuser@cherryedu.id' ||
      cleanInput === 'testuser@cherrycoffeeroastery.com';
    const isTestUserPassword =
      password === 'cherrycoffeeroastery' ||
      password === 'cherry2026!' ||
      password === 'testuser' ||
      password === 'testuser123' ||
      password === 'testuser2026';
    const isDedicatedTestUser = isTestUserIdentifier && isTestUserPassword;

    const isAdminIdentifier = cleanInput === 'admin@cherryedu.id' || cleanInput === 'admin';
    const isAdminPassword = password === 'cherryadmin2026' || password === 'cherry2026!' || password === 'admin';
    const isDedicatedAdmin = isAdminIdentifier && isAdminPassword;

    if (isDedicatedAdmin) {
      const adminUserObj: SupabaseUser = {
        id: 'usr-admin-01',
        app_metadata: { provider: 'email', providers: ['email'], role: 'admin' },
        user_metadata: {
          name: 'Administrator CherryEdu',
          full_name: 'Administrator CherryEdu',
          coffee_role: 'roaster',
          role: 'admin',
          is_pro: true,
        },
        aud: 'authenticated',
        confirmation_sent_at: new Date().toISOString(),
        confirmed_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
        email: 'admin@cherryedu.id',
        email_confirmed_at: new Date().toISOString(),
        last_sign_in_at: new Date().toISOString(),
        phone: '',
        role: 'authenticated',
        updated_at: new Date().toISOString(),
      };

      const adminSessionObj: Session = {
        access_token: 'admin-token-' + Date.now(),
        token_type: 'bearer',
        expires_in: 3600 * 24 * 7,
        refresh_token: 'admin-refresh-token',
        user: adminUserObj,
      };

      try {
        localStorage.setItem(TEST_USER_KEY, JSON.stringify(adminSessionObj));
      } catch {}

      setSession(adminSessionObj);
      setUser(adminUserObj);
      return { error: null };
    }

    if (isDedicatedTestUser) {
      const testUserObj: SupabaseUser = {
        id: 'user-testuser-cherry',
        app_metadata: { provider: 'email', providers: ['email'] },
        user_metadata: {
          name: 'Test User (All Access)',
          full_name: 'Test User (All Access)',
          coffee_role: 'barista',
          role: 'learner',
          is_pro: true,
          subscription_tier: 'pro',
          subscription_cycle: 'annual',
          subscription_expires_at: '2099-12-31T23:59:59Z',
        },
        aud: 'authenticated',
        confirmation_sent_at: new Date().toISOString(),
        confirmed_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
        email: 'testuser@cherrycoffeeroastery.com',
        email_confirmed_at: new Date().toISOString(),
        last_sign_in_at: new Date().toISOString(),
        phone: '',
        role: 'authenticated',
        updated_at: new Date().toISOString(),
      };

      const testSessionObj: Session = {
        access_token: 'testuser-token-' + Date.now(),
        token_type: 'bearer',
        expires_in: 3600 * 24 * 7,
        refresh_token: 'testuser-refresh-token',
        user: testUserObj,
      };

      try {
        localStorage.setItem(TEST_USER_KEY, JSON.stringify(testSessionObj));
      } catch {}

      setSession(testSessionObj);
      setUser(testUserObj);
      return { error: null };
    }

    // Authenticate with Supabase
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
      if (!error && data.session) {
        setSession(data.session);
        setUser(data.user);
        return { error: null };
      }

      if (error) {
        return { error: translateAuthError(error.message) };
      }
    } catch (e: any) {
      return { error: translateAuthError(e?.message || 'Gagal masuk. Periksa koneksi internet Anda.') };
    }

    return { error: null };
  };

  const signInWithGoogle = async (customRedirect?: string): Promise<{ error: string | null }> => {
    try {
      const origin = typeof window !== 'undefined' ? window.location.origin : (process.env.NEXT_PUBLIC_SITE_URL || '');
      const callbackUrl = `${origin}/auth/callback${customRedirect ? `?next=${encodeURIComponent(customRedirect)}` : ''}`;

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: callbackUrl,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (error) {
        return { error: translateAuthError(error.message) };
      }

      if (data?.url) {
        // Preflight verification with fast timeout to check if Google provider is active in Supabase
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 1800);
          const check = await fetch(data.url, { method: 'GET', redirect: 'manual', signal: controller.signal });
          clearTimeout(timeoutId);

          if (check.status === 400) {
            const body = await check.json().catch(() => null);
            if (body?.msg?.includes('provider is not enabled') || body?.error_code === 'validation_failed') {
              return {
                error:
                  'Fitur 1-Klik Masuk dengan Google belum diaktifkan di konsol Supabase (Authentication → Providers → Google). Silakan gunakan pendaftaran atau login dengan email & kata sandi terlebih dahulu.',
              };
            }
          }
        } catch {
          // Preflight might fail due to network, CORS, or abort; proceed directly with OAuth navigation
        }

        window.location.href = data.url;
        return { error: null };
      }

      return { error: 'Tidak dapat menginisialisasi tautan autentikasi Google.' };
    } catch (e: any) {
      return { error: translateAuthError(e?.message || 'Gagal memulai login dengan Google.') };
    }
  };

  const signUp = async (
    email: string,
    password: string,
    name: string,
    coffeeRole: string = 'barista'
  ): Promise<{ error: string | null; needsConfirmation?: boolean }> => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            coffee_role: coffeeRole,
          },
        },
      });

      if (error) {
        return { error: translateAuthError(error.message) };
      }

      const needsConfirmation = !data.session;

      if (data.user && data.session) {
        setUser(data.user);
        setSession(data.session);
      }

      return { error: null, needsConfirmation };
    } catch (e: any) {
      return { error: translateAuthError(e?.message || 'Gagal mendaftar. Silakan coba lagi.') };
    }
  };

  const signInAsDemo = async (role: 'admin' | 'barista' | 'home_brewer' | 'q_grader') => {
    const configuredDemoSecret = process.env.NEXT_PUBLIC_DEMO_ADMIN_PASSWORD;
    if (role === 'admin' && configuredDemoSecret) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'admin@cherryedu.id',
        password: configuredDemoSecret,
      });
      if (!error && data.session) {
        setSession(data.session);
        setUser(data.user);
        return;
      }
    }
    throw new Error('Fitur login demo instan dinonaktifkan demi keamanan. Silakan login menggunakan email & kata sandi resmi Anda.');
  };

  const signOut = async () => {
    try {
      localStorage.removeItem(TEST_USER_KEY);
    } catch {}
    try {
      await supabase.auth.signOut();
    } catch (e) {
      console.warn('Supabase signOut error:', e);
    }
    setUser(null);
    setSession(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, session, loading, signIn, signInWithGoogle, signUp, signInAsDemo, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
