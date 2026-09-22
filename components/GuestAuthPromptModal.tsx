'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  X,
  Sparkles,
  Check,
  Coffee,
  Lock,
  ArrowRight,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';

interface GuestAuthPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  redirectUrl?: string;
  featureName?: string;
}

export function GuestAuthPromptModal({
  isOpen,
  onClose,
  title = 'Buka Akses Penuh dengan Akun Gratis',
  description = 'Buat akun atau masuk secara gratis untuk membuka seluruh 15 instrumen laboratorium kopi, menyimpan resep seduh, dan membuka kurikulum Foundation.',
  redirectUrl = '/tools',
  featureName = 'Laboratorium Kopi',
}: GuestAuthPromptModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleLogin = () => {
    router.push(`/login?redirect=${encodeURIComponent(redirectUrl)}`);
  };

  const handleRegister = () => {
    router.push(`/register?redirect=${encodeURIComponent(redirectUrl)}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-roast-950/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-paper-50 rounded-2xl border-2 border-roast-900 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-roast-950 via-cherry-950 to-roast-900 px-6 py-5 text-white flex items-center justify-between border-b border-roast-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cherry-500 to-amber-500 flex items-center justify-center text-white font-black shadow-md">
              <Sparkles className="w-5 h-5 text-paper-50" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-bold text-amber-200 tracking-wide">
                  CherryEdu
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase bg-emerald-500/20 border border-emerald-300/40 text-emerald-300 rounded-full">
                  Akun Gratis
                </span>
              </div>
              <p className="text-xs text-paper-300">
                {featureName} • Pratinjau Selesai
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-paper-300 hover:text-white hover:bg-white/10 rounded-lg transition"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-mono font-bold mb-2">
              <Coffee className="w-3.5 h-3.5 text-cherry-700" />
              Suka dengan Instrumen CherryEdu?
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-roast-950 leading-snug">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-roast-700 mt-1.5 leading-relaxed font-sans">
              {description}
            </p>
          </div>

          {/* Benefits Box */}
          <div className="bg-white border border-paper-300 rounded-xl p-4 space-y-2.5 shadow-2xs">
            <div className="text-xs font-bold text-roast-900 pb-1 border-b border-paper-200 flex items-center justify-between">
              <span>Keuntungan Mendaftar Akun Gratis:</span>
              <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase">100% Gratis</span>
            </div>
            <ul className="space-y-2 text-xs text-roast-700">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Buka seluruh <strong>15 instrumen laboratorium seduh & cupping</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Akses silabus <strong>Foundation: Kopi dari Hulu ke Hilir</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Catat progres belajar, skor kuis, dan <strong>sertifikat resmi</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Tanpa kartu kredit, daftar cepat via <strong>Google 1 Klik</strong></span>
              </li>
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-1">
            <button
              type="button"
              onClick={handleLogin}
              className="w-full py-3 bg-roast-950 hover:bg-cherry-800 text-white font-bold text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-md"
            >
              <span>Masuk / Daftar Akun Gratis Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 text-xs text-roast-600 hover:text-roast-950 font-medium transition"
            >
              Lanjutkan Eksplorasi Alat Ini Saja
            </button>
          </div>
        </div>

        {/* Guarantee Footer */}
        <div className="px-6 py-3 bg-paper-100 border-t border-paper-300 flex items-center justify-between text-[11px] text-roast-600 font-mono">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            Data Tersimpan Aman di Supabase
          </span>
          <span>Cherry Coffee Roastery</span>
        </div>
      </div>
    </div>
  );
}
