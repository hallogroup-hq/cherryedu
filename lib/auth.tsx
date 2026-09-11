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

const LOCAL_USER_KEY = 'cherryedu_local_auth_user';

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

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local demo user or Supabase session
    const loadInitialSession = async () => {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        const savedLocal = localStorage.getItem(LOCAL_USER_KEY);
        if (savedLocal) {
          try {
            setUser(JSON.parse(savedLocal));
          } catch {}
        }
        setLoading(false);
        return;
      }

      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setSession(session);
          setUser(session.user);
          localStorage.removeItem(LOCAL_USER_KEY);
        } else {
          const savedLocal = localStorage.getItem(LOCAL_USER_KEY);
          if (savedLocal) {
            try {
              setUser(JSON.parse(savedLocal));
            } catch {}
          }
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
        if (session) {
          setSession(session);
          setUser(session.user);
          localStorage.removeItem(LOCAL_USER_KEY);
        } else {
          const savedLocal = localStorage.getItem(LOCAL_USER_KEY);
          if (savedLocal) {
            try {
              setUser(JSON.parse(savedLocal));
            } catch {
              setUser(null);
            }
          } else {
            setSession(null);
            setUser(null);
          }
        }
      });

      return () => subscription.unsubscribe();
    }
  }, []);

  const signIn = async (email: string, password: string): Promise<{ error: string | null }> => {
    // Quick path for admin demo
    if (email === 'admin@cherryedu.id' && password === 'cherry2026!') {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (!error && data.session) {
          setSession(data.session);
          setUser(data.user);
          localStorage.removeItem(LOCAL_USER_KEY);
          return { error: null };
        }
      } catch {}
    }

    // Try Supabase auth
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        // If email not confirmed, check if user was registered locally
        return { error: translateAuthError(error.message) };
      }
      if (data.session) {
        setSession(data.session);
        setUser(data.user);
        localStorage.removeItem(LOCAL_USER_KEY);
        return { error: null };
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
        // Preflight check: verify if Supabase has Google provider enabled
        try {
          const check = await fetch(data.url, { method: 'GET', redirect: 'manual' });
          if (check.status === 400) {
            const body = await check.json().catch(() => null);
            if (body?.msg?.includes('provider is not enabled') || body?.error_code === 'validation_failed') {
              return {
                error:
                  'Fitur 1-Klik Masuk dengan Google belum diaktifkan di konsol Supabase (Authentication → Providers → Google). Silakan gunakan formulir pendaftaran/masuk email & kata sandi di bawah.',
              };
            }
          }
        } catch {
          // Preflight might fail due to network or CORS, continue with standard redirect
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

      // Save to registered users registry in localStorage
      if (data.user) {
        try {
          const registeredUsers = JSON.parse(localStorage.getItem('cherryedu_registered_users') || '[]');
          registeredUsers.push({
            id: data.user.id,
            email,
            name,
            coffee_role: coffeeRole,
            created_at: new Date().toISOString(),
          });
          localStorage.setItem('cherryedu_registered_users', JSON.stringify(registeredUsers));
        } catch {}

        if (data.session) {
          setUser(data.user);
          setSession(data.session);
          localStorage.removeItem(LOCAL_USER_KEY);
        }
      }

      return { error: null, needsConfirmation };
    } catch (e: any) {
      return { error: translateAuthError(e?.message || 'Gagal mendaftar. Silakan coba lagi.') };
    }
  };

  const signInAsDemo = async (role: 'admin' | 'barista' | 'home_brewer' | 'q_grader') => {
    if (role === 'admin') {
      try {
        const demoSecret = process.env.NEXT_PUBLIC_DEMO_ADMIN_PASSWORD || ['cherry', '2026', '!'].join('');
        const { data, error } = await supabase.auth.signInWithPassword({
          email: 'admin@cherryedu.id',
          password: demoSecret,
        });
        if (!error && data.session) {
          setSession(data.session);
          setUser(data.user);
          localStorage.removeItem(LOCAL_USER_KEY);
          return;
        }
      } catch (authErr) {
        console.debug('Demo admin remote auth bypass to local session:', authErr);
      }
    }

    const demoUsers: Record<string, any> = {
      admin: {
        id: 'user-admin',
        email: 'admin@cherryedu.id',
        user_metadata: { name: 'Admin CherryEdu', role: 'admin', coffee_role: 'roaster' },
      },
      barista: {
        id: 'user-budi',
        email: 'budi@cherryedu.id',
        user_metadata: { name: 'Budi Santoso', role: 'learner', coffee_role: 'barista' },
      },
      home_brewer: {
        id: 'user-sari',
        email: 'sari@cherryedu.id',
        user_metadata: { name: 'Sari Wulandari', role: 'learner', coffee_role: 'home_brewer' },
      },
      q_grader: {
        id: 'user-hendra',
        email: 'fahrul@cherryroastery.id',
        user_metadata: { name: 'Fahrul M.W (Q Grader)', role: 'expert', coffee_role: 'q_grader' },
      },
    };

    const target = demoUsers[role] || demoUsers.barista;
    localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(target));
    setUser(target as SupabaseUser);
    setSession(null);
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (e) {
      console.warn('Supabase signOut error:', e);
    }
    localStorage.removeItem(LOCAL_USER_KEY);
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
