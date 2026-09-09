'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Coffee, Loader2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

function CallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/profile';
  const code = searchParams.get('code');
  const errorDescription = searchParams.get('error_description');
  const [error, setError] = useState<string | null>(errorDescription);

  useEffect(() => {
    if (errorDescription) {
      setError(errorDescription);
      return;
    }

    let isMounted = true;

    const handleAuthCallback = async () => {
      try {
        if (code) {
          const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
          if (exchangeError) {
            console.warn('Code exchange warning, checking existing session:', exchangeError);
          }
        }

        // Check if session is present
        const { data: { session } } = await supabase.auth.getSession();
        if (session && isMounted) {
          router.replace(next);
          return;
        }

        // Listen for onAuthStateChange in case session is being restored
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, s) => {
          if (s && isMounted) {
            subscription.unsubscribe();
            router.replace(next);
          }
        });

        // Timeout fallback: if no session detected after 2.5s, check one more time then redirect
        const timer = setTimeout(async () => {
          if (!isMounted) return;
          const { data: { session: retrySession } } = await supabase.auth.getSession();
          if (retrySession) {
            router.replace(next);
          } else {
            router.replace('/login');
          }
        }, 2500);

        return () => {
          clearTimeout(timer);
          subscription.unsubscribe();
        };
      } catch (err: any) {
        if (isMounted) {
          console.error('Auth callback exception:', err);
          setError(err?.message || 'Terjadi kendala saat memproses otentikasi Google.');
        }
      }
    };

    handleAuthCallback();

    return () => {
      isMounted = false;
    };
  }, [code, errorDescription, next, router]);

  if (error) {
    return (
      <div className="min-h-screen bg-paper-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-elevated border border-paper-300 p-8 max-w-md w-full text-center">
          <div className="w-12 h-12 rounded-full bg-cherry-50 text-cherry-700 flex items-center justify-center mx-auto mb-4 border border-cherry-200">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h2 className="font-serif font-bold text-xl text-roast-950 mb-2">Gagal Otentikasi</h2>
          <p className="text-xs text-roast-600 mb-6 leading-relaxed">{error}</p>
          <Link
            href="/login"
            className="inline-block py-2.5 px-5 bg-roast-950 hover:bg-roast-850 text-white font-bold text-xs rounded-lg transition"
          >
            Kembali ke Halaman Masuk
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper-100 flex flex-col items-center justify-center p-4 text-center">
      <div className="w-14 h-14 rounded-2xl bg-white shadow-card border border-paper-300 flex items-center justify-center mx-auto mb-4">
        <Coffee className="w-7 h-7 text-cherry-700 animate-pulse" />
      </div>
      <div className="flex items-center gap-2 text-roast-900 font-serif font-bold text-lg mb-1">
        <Loader2 className="w-5 h-5 animate-spin text-cherry-700" />
        <span>Menghubungkan Akun Google...</span>
      </div>
      <p className="text-xs text-roast-600 font-sans max-w-xs leading-relaxed">
        Mohon tunggu sebentar, kami sedang menyiapkan sesi & sertifikasi akademi Anda.
      </p>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-paper-100 flex items-center justify-center p-4">
          <Loader2 className="w-6 h-6 animate-spin text-roast-600" />
        </div>
      }
    >
      <CallbackContent />
    </Suspense>
  );
}
