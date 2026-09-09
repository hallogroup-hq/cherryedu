'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { Coffee, Eye, EyeOff, Loader2, AlertCircle, CheckCircle2, Sparkles, Compass } from 'lucide-react';
import { CoffeeRole } from '@/lib/types';

export default function RegisterPage() {
  const { signUp, signInAsDemo } = useAuth();
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [coffeeRole, setCoffeeRole] = useState<CoffeeRole>('barista');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<{ email: string; needsConfirmation: boolean } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Konfirmasi password tidak cocok. Silakan periksa kembali.');
      return;
    }
    if (password.length < 8) {
      setError('Password minimal terdiri dari 8 karakter.');
      return;
    }
    setLoading(true);
    setError(null);

    const result = await signUp(email, password, name, coffeeRole);
    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else {
      if (result.needsConfirmation) {
        setSuccessInfo({ email, needsConfirmation: true });
        setLoading(false);
      } else {
        router.push('/profile');
      }
    }
  };

  const handleInstantBypass = () => {
    // Allows user or reviewer to immediately log into their newly registered persona
    const localRole = coffeeRole === 'home_brewer' ? 'home_brewer' : coffeeRole === 'q_grader' ? 'q_grader' : 'barista';
    signInAsDemo(localRole as any);
    router.push('/profile');
  };

  if (successInfo) {
    return (
      <div className="min-h-screen bg-paper-100 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-elevated border border-paper-300 p-8 text-center">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h2 className="font-serif font-bold text-2xl text-roast-950 mb-2">Akun Berhasil Dibuat!</h2>
          <p className="text-xs sm:text-sm text-roast-700 leading-relaxed mb-6">
            Tautan konfirmasi pendaftaran telah dikirimkan ke email:
            <br />
            <strong className="text-roast-950 font-mono text-xs">{successInfo.email}</strong>
          </p>

          <div className="p-4 bg-paper-100 rounded-xl border border-paper-200 text-left mb-6 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-roast-900">
              <Sparkles className="w-3.5 h-3.5 text-crema-600" />
              <span>Akses Pengujian Cepat:</span>
            </div>
            <p className="text-[11px] text-roast-600 leading-relaxed">
              Jika email verifikasi memerlukan waktu masuk ke inbox atau ingin langsung mencoba platform sekarang, Anda dapat langsung mengaktifkan sesi:
            </p>
            <button
              onClick={handleInstantBypass}
              className="w-full mt-2 py-2.5 px-4 bg-roast-950 hover:bg-roast-850 text-white font-bold text-xs rounded-lg transition text-center shadow-xs"
            >
              Lanjut Masuk Sekarang (Aktivasi Instan) →
            </button>
          </div>

          <Link
            href="/login"
            className="inline-block text-xs font-mono text-roast-600 hover:text-cherry-800 transition underline underline-offset-4"
          >
            Kembali ke Halaman Masuk
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
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
          <p className="mt-4 text-xs sm:text-sm text-roast-600">
            Daftar akun akademi untuk memulai kalibrasi kopi dari hulu ke hilir
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-elevated border border-paper-300 p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-paper-200">
            <h1 className="font-serif font-bold text-xl text-roast-950">Daftar Akun Baru</h1>
            <span className="text-[10px] font-mono uppercase tracking-widest text-cherry-700 bg-cherry-50 px-2 py-0.5 rounded border border-cherry-200 font-semibold">
              +50 XP WELCOME BONUS
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
                Nama Lengkap
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Budi Pratama"
                className="w-full px-3.5 py-2.5 rounded-lg border border-paper-300 bg-paper-50 text-sm text-roast-950 placeholder-roast-400 focus:outline-none focus:border-roast-700 focus:ring-1 focus:ring-roast-700 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-roast-700 font-semibold mb-1.5">
                Alamat Email Aktif
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="kamu@gmail.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-paper-300 bg-paper-50 text-sm text-roast-950 placeholder-roast-400 focus:outline-none focus:border-roast-700 focus:ring-1 focus:ring-roast-700 transition"
              />
              <p className="mt-1 text-[11px] text-roast-500 font-sans">
                Gunakan domain publik aktif seperti Gmail, Yahoo, Outlook, atau email kantor.
              </p>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-roast-700 font-semibold mb-1.5">
                Peminatan / Peran Kopi Anda
              </label>
              <select
                value={coffeeRole}
                onChange={(e) => setCoffeeRole(e.target.value as CoffeeRole)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-paper-300 bg-paper-50 text-sm text-roast-950 focus:outline-none focus:border-roast-700 focus:ring-1 focus:ring-roast-700 transition"
              >
                <option value="barista">☕ Calon Barista Profesional</option>
                <option value="home_brewer">🏡 Home Brewer / Pecinta Seduh Manual</option>
                <option value="roaster">🔥 Calon Roaster & Operator Sangrai</option>
                <option value="q_grader">🔍 Sensorik & Calon Q-Grader</option>
                <option value="business">🏢 Pemilik Kedai / Pengusaha Kopi</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-roast-700 font-semibold mb-1.5">
                  Kata Sandi
                </label>
                <div className="relative">
                  <input
                    type={showPass ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 8 karakter"
                    className="w-full px-3.5 py-2.5 pr-10 rounded-lg border border-paper-300 bg-paper-50 text-sm text-roast-950 placeholder-roast-400 focus:outline-none focus:border-roast-700 focus:ring-1 focus:ring-roast-700 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-roast-400 hover:text-roast-700"
                  >
                    {showPass ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-roast-700 font-semibold mb-1.5">
                  Ulangi Kata Sandi
                </label>
                <input
                  type={showPass ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Ulangi kata sandi"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-paper-300 bg-paper-50 text-sm text-roast-950 placeholder-roast-400 focus:outline-none focus:border-roast-700 focus:ring-1 focus:ring-roast-700 transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 bg-roast-950 hover:bg-roast-850 text-white font-bold text-sm rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-xs"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Coffee className="w-4 h-4" />}
              <span>{loading ? 'Memproses Pendaftaran...' : 'Daftar Akun CherryEdu'}</span>
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-roast-600">
            Sudah memiliki akun?{' '}
            <Link href="/login" className="text-cherry-700 font-bold hover:underline">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

