'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { Eye, EyeOff, Loader2, AlertCircle, CheckCircle2, Coffee } from 'lucide-react';

export default function RegisterPage() {
  const { signUp } = useAuth();
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Password tidak cocok. Coba lagi.');
      return;
    }
    if (password.length < 8) {
      setError('Password minimal 8 karakter.');
      return;
    }
    setLoading(true);
    setError(null);
    const { error } = await signUp(email, password, name);
    if (error) {
      setError(error);
      setLoading(false);
    } else {
      setSuccess(true);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-paper-100 flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="font-serif font-bold text-2xl text-roast-950 mb-2">Akun Dibuat!</h2>
          <p className="text-sm text-roast-600 mb-6">
            Cek email <strong>{email}</strong> untuk konfirmasi. Setelah verifikasi, kamu bisa langsung masuk.
          </p>
          <Link
            href="/login"
            className="inline-block px-6 py-3 bg-roast-950 text-white font-bold text-sm rounded-lg hover:bg-roast-800 transition"
          >
            Ke Halaman Masuk
          </Link>
        </div>
      </div>
    );
  }

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
          <p className="mt-5 text-sm text-roast-600">Buat akun CherryEdu dan mulai belajar kopi</p>
        </div>

        <div className="bg-white rounded-2xl shadow-elevated border border-paper-300 p-8">
          <h1 className="font-serif font-bold text-xl text-roast-950 mb-6">Daftar</h1>

          {error && (
            <div className="mb-4 flex items-start gap-2.5 bg-cherry-50 border border-cherry-200 text-cherry-800 rounded-lg px-4 py-3 text-sm">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-roast-600 mb-1.5">
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama kamu"
                className="w-full px-4 py-2.5 rounded-lg border border-paper-300 bg-paper-50 text-sm text-roast-950 placeholder-roast-400 focus:outline-none focus:border-roast-600 focus:ring-1 focus:ring-roast-600 transition"
              />
            </div>

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
                  placeholder="Minimal 8 karakter"
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

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-roast-600 mb-1.5">
                Konfirmasi Password
              </label>
              <input
                type={showPass ? 'text' : 'password'}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Ulangi password"
                className="w-full px-4 py-2.5 rounded-lg border border-paper-300 bg-paper-50 text-sm text-roast-950 placeholder-roast-400 focus:outline-none focus:border-roast-600 focus:ring-1 focus:ring-roast-600 transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-roast-950 hover:bg-roast-800 text-white font-bold text-sm rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Coffee className="w-4 h-4" />}
              {loading ? 'Membuat akun...' : 'Buat Akun'}
            </button>
          </form>

          <p className="mt-5 text-center text-xs text-roast-500">
            Sudah punya akun?{' '}
            <Link href="/login" className="text-cherry-700 font-semibold hover:underline">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
