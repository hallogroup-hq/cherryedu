'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { Coffee, Eye, EyeOff, Loader2, AlertCircle, ShieldCheck, Sparkles, UserCircle } from 'lucide-react';

function LoginContent() {
  const { signIn, signInWithGoogle, signInAsDemo } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [demoLoading, setDemoLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setError(null);
    const result = await signInWithGoogle(redirectUrl);
    if (result.error) {
      setError(result.error);
      setGoogleLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const result = await signIn(email, password);
    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else {
      router.push(redirectUrl);
    }
  };

  const handleDemoLogin = async (role: 'admin' | 'barista' | 'home_brewer' | 'q_grader') => {
    setDemoLoading(role);
    setError(null);
    try {
      await signInAsDemo(role);
      router.push(redirectUrl);
    } catch (e) {
      setError('Gagal masuk sebagai akun demo.');
    } finally {
      setDemoLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-paper-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <img src="/cherry-logo-tight.png" alt="CherryEdu" className="h-12 w-auto" />
            <div className="text-left border-l border-paper-300 pl-3">
              <div className="font-serif font-black text-2xl tracking-tight text-roast-950 leading-none">
                Cherry<span className="font-sans font-light text-cherry-700 text-xl ml-0.5">Edu</span>
              </div>
              <div className="text-[9px] font-mono tracking-widest text-roast-500 uppercase mt-0.5">
                Specialty Coffee Academy
              </div>
            </div>
          </Link>
          <p className="mt-4 text-xs sm:text-sm text-roast-600 font-sans">
            Masuk untuk melanjutkan progres silabus & kalibrasi seduh
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-elevated border border-paper-300 p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-paper-200">
            <h1 className="font-serif font-bold text-xl text-roast-950">Masuk ke Akun</h1>
            <span className="text-[10px] font-mono uppercase tracking-widest text-roast-500 bg-paper-100 px-2 py-0.5 rounded border border-paper-200">
              SESI NYATA
            </span>
          </div>

          {error && (
            <div className="mb-5 flex items-start gap-2.5 bg-cherry-50 border border-cherry-200 text-cherry-900 rounded-lg px-3.5 py-2.5 text-xs">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-cherry-700" />
              <span className="leading-relaxed">{error}</span>
            </div>
          )}

          {/* Google Sign In Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={googleLoading || loading || Boolean(demoLoading)}
            className="w-full py-3 px-4 bg-white hover:bg-paper-50 text-roast-900 font-semibold text-sm rounded-lg border border-paper-300 shadow-xs transition flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed group"
          >
            {googleLoading ? (
              <Loader2 className="w-4 h-4 animate-spin text-roast-600" />
            ) : (
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            )}
            <span>{googleLoading ? 'Menghubungkan ke Google...' : 'Masuk dengan Akun Google'}</span>
          </button>

          {/* Divider */}
          <div className="relative my-4 flex items-center justify-center">
            <div className="border-t border-paper-200 w-full" />
            <span className="bg-white px-3 text-[10px] font-mono tracking-wider uppercase text-roast-400 shrink-0">
              atau dengan email & kata sandi
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-roast-700 font-semibold mb-1.5">
                Alamat Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-paper-300 bg-paper-50 text-sm text-roast-950 placeholder-roast-400 focus:outline-none focus:border-roast-700 focus:ring-1 focus:ring-roast-700 transition"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-roast-700 font-semibold">
                  Kata Sandi
                </label>
              </div>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 pr-11 rounded-lg border border-paper-300 bg-paper-50 text-sm text-roast-950 placeholder-roast-400 focus:outline-none focus:border-roast-700 focus:ring-1 focus:ring-roast-700 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-roast-400 hover:text-roast-700"
                  aria-label="Lihat kata sandi"
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || Boolean(demoLoading)}
              className="w-full py-3 bg-roast-950 hover:bg-roast-850 text-white font-bold text-sm rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-xs"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Coffee className="w-4 h-4" />}
              <span>{loading ? 'Memverifikasi...' : 'Masuk Sekarang'}</span>
            </button>
          </form>

          {/* Quick Demo Personas */}
          <div className="mt-6 pt-5 border-t border-paper-200">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-roast-500 font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-crema-600" />
                <span>Masuk Cepat untuk Pengujian:</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                disabled={loading || Boolean(demoLoading)}
                onClick={() => handleDemoLogin('admin')}
                className="p-2 text-left bg-paper-100 hover:bg-paper-200 border border-paper-300 rounded-lg transition text-xs flex items-center gap-2"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-cherry-700 shrink-0" />
                <div className="truncate">
                  <div className="font-bold text-roast-950 leading-tight">Admin</div>
                  <div className="text-[10px] text-roast-500 font-mono">admin@cherryedu.id</div>
                </div>
              </button>

              <button
                type="button"
                disabled={loading || Boolean(demoLoading)}
                onClick={() => handleDemoLogin('barista')}
                className="p-2 text-left bg-paper-100 hover:bg-paper-200 border border-paper-300 rounded-lg transition text-xs flex items-center gap-2"
              >
                <Coffee className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <div className="truncate">
                  <div className="font-bold text-roast-950 leading-tight">Budi Barista</div>
                  <div className="text-[10px] text-roast-500 font-mono">Calon Barista</div>
                </div>
              </button>

              <button
                type="button"
                disabled={loading || Boolean(demoLoading)}
                onClick={() => handleDemoLogin('home_brewer')}
                className="p-2 text-left bg-paper-100 hover:bg-paper-200 border border-paper-300 rounded-lg transition text-xs flex items-center gap-2"
              >
                <UserCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <div className="truncate">
                  <div className="font-bold text-roast-950 leading-tight">Sari Brewer</div>
                  <div className="text-[10px] text-roast-500 font-mono">Home Brewer</div>
                </div>
              </button>

              <button
                type="button"
                disabled={loading || Boolean(demoLoading)}
                onClick={() => handleDemoLogin('q_grader')}
                className="p-2 text-left bg-paper-100 hover:bg-paper-200 border border-paper-300 rounded-lg transition text-xs flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-700 shrink-0" />
                <div className="truncate">
                  <div className="font-bold text-roast-950 leading-tight">Fahrul Q-Grader</div>
                  <div className="text-[10px] text-roast-500 font-mono">Certified Expert</div>
                </div>
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-roast-600">
            Belum punya akun CherryEdu?{' '}
            <Link href="/register" className="text-cherry-700 font-bold hover:underline">
              Daftar Akun Baru
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-paper-100 flex items-center justify-center p-4">
          <Loader2 className="w-6 h-6 animate-spin text-roast-600" />
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}
