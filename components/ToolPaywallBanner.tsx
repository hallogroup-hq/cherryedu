'use client';

import React from 'react';
import Link from 'next/link';
import { Lock, ArrowRight, Check, Sliders, Droplets, Gauge, Flame } from 'lucide-react';

interface ToolPaywallBannerProps {
  toolName: string;
  toolBadge?: string;
  onOpenPayment: () => void;
}

export function ToolPaywallBanner({
  toolName,
  toolBadge,
  onOpenPayment,
}: ToolPaywallBannerProps) {
  return (
    <div className="max-w-3xl mx-auto my-8 p-6 sm:p-10 bg-paper-50 border-2 border-roast-900 rounded-3xl shadow-elevated text-center relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-200/25 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cherry-200/25 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Lock + Lab Tool Icon */}
      <div className="relative w-20 h-20 mx-auto mb-5">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 flex items-center justify-center text-amber-800 shadow-md">
          <Sliders className="w-10 h-10" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-roast-950 border-2 border-paper-50 flex items-center justify-center text-amber-300 shadow-sm">
          <Lock className="w-4 h-4" />
        </div>
      </div>

      {/* Quota Exhausted Badge */}
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500/15 border border-amber-400 text-amber-950 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-3">
        <Lock className="w-3.5 h-3.5 text-amber-700" />
        Batas 10x Uji Coba Gratis Tercapai
      </div>

      {/* Heading */}
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-roast-950 mb-2">
        Buka Akses Unlimited {toolName}
      </h2>
      {toolBadge && (
        <p className="text-xs font-mono font-semibold text-cherry-800 uppercase tracking-widest mb-3">
          [ {toolBadge} • LABORATORIUM SEDUH CHERRYEDU ]
        </p>
      )}

      {/* Description */}
      <p className="font-sans text-xs sm:text-sm text-roast-700 mb-6 max-w-xl mx-auto leading-relaxed">
        Anda telah menggunakan seluruh <strong>10 sesi uji coba gratis</strong> pada instrumen laboratorium seduh kami. Untuk terus menggunakan alat ini tanpa batas di meja seduh Anda, silakan aktifkan akun <strong>CherryEdu Pro</strong>.
      </p>

      {/* Pro Features Grid */}
      <div className="bg-white border border-paper-300 rounded-2xl p-5 mb-6 text-left max-w-xl mx-auto shadow-sm">
        <div className="text-xs font-bold text-roast-950 flex items-center gap-2 mb-3 pb-2 border-b border-paper-200">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>Keuntungan Akses Penuh CherryEdu Pro:</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-roast-700">
          <div className="flex items-start gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Akses Unlimited ke 15 Alat Lab Seduh</span>
          </div>
          <div className="flex items-start gap-2">
            <Droplets className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <span>Water Chemistry & Mineral Recipe Lab</span>
          </div>
          <div className="flex items-start gap-2">
            <Gauge className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Espresso Dial-In & Extraction Matrix</span>
          </div>
          <div className="flex items-start gap-2">
            <Flame className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <span>Roasting Simulator & SCA Cupping Pentagram</span>
          </div>
          <div className="flex items-start gap-2 sm:col-span-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Termasuk 6 Jalur Spesialisasi Lengkap & Sertifikat Resmi Fahrul M.W</span>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
        <button
          type="button"
          onClick={onOpenPayment}
          className="w-full sm:w-auto px-7 py-3.5 bg-cherry-800 hover:bg-cherry-900 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-md shadow-cherry-900/20"
        >
          <span>Buka Unlimited (Rp 49.000 / bln)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <Link
          href="/pricing"
          className="w-full sm:w-auto px-5 py-3.5 bg-white hover:bg-paper-100 border border-paper-400 text-roast-800 font-bold text-xs rounded-xl transition text-center"
        >
          Lihat Paket & Promo
        </Link>
      </div>

      <p className="text-[11px] font-mono text-roast-500 mt-4">
        💡 Tersedia kode kupon diskon hingga 50% di halaman checkout QRIS.
      </p>
    </div>
  );
}
