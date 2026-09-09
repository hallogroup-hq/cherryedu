'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { Coffee, Eye, EyeOff, Loader2, AlertCircle, ShieldCheck, Sparkles, UserCircle } from 'lucide-react';

function LoginContent() {
  const { signIn, signInAsDemo } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [demoLoading, setDemoLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

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
