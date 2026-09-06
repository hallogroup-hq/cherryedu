'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { Coffee, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const { signIn } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await signIn(email, password);
    if (error) {
      setError(error);
      setLoading(false);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-paper-100 flex items-center justify-center px-4">
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
          <p className="mt-5 text-sm text-roast-600">Masuk ke akun CherryEdu Anda</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-elevated border border-paper-300 p-8">
          <h1 className="font-serif font-bold text-xl text-roast-950 mb-6">Masuk</h1>

          {error && (
            <div className="mb-4 flex items-start gap-2.5 bg-cherry-50 border border-cherry-200 text-cherry-800 rounded-lg px-4 py-3 text-sm">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-roast-600 mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="kamu@email.com"
                className="w-full px-4 py-2.5 rounded-lg border border-paper-300 bg-paper-50 text-sm text-roast-950 placeholder-roast-400 focus:outline-none focus:border-roast-600 focus:ring-1 focus:ring-roast-600 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-roast-600 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 pr-11 rounded-lg border border-paper-300 bg-paper-50 text-sm text-roast-950 placeholder-roast-400 focus:outline-none focus:border-roast-600 focus:ring-1 focus:ring-roast-600 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-roast-400 hover:text-roast-700"
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-roast-950 hover:bg-roast-800 text-white font-bold text-sm rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Coffee className="w-4 h-4" />}
              {loading ? 'Masuk...' : 'Masuk'}
            </button>
          </form>

          {/* Test credentials hint */}
          <div className="mt-4 p-3 bg-paper-100 rounded-lg border border-paper-200">
            <p className="text-[11px] font-mono text-roast-500 text-center">
              Test admin: <span className="text-roast-800 font-bold">admin@cherryedu.id</span> / <span className="text-roast-800 font-bold">cherry2026!</span>
            </p>
          </div>

          <p className="mt-5 text-center text-xs text-roast-500">
            Belum punya akun?{' '}
            <Link href="/register" className="text-cherry-700 font-semibold hover:underline">
              Daftar sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
