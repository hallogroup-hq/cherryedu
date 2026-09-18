'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Lock, ArrowRight, Check, Award, ChevronLeft } from 'lucide-react';
import { PaymentModal } from './PaymentModal';

interface ProPaywallBannerProps {
  pathTitle: string;
  pathSlug: string;
  moduleTitle?: string;
  lessonTitle?: string;
}

export function ProPaywallBanner({
  pathTitle,
  pathSlug,
  moduleTitle,
  lessonTitle,
}: ProPaywallBannerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="max-w-2xl mx-auto my-12 p-6 sm:p-8 bg-paper-50 border-2 border-roast-900 rounded-2xl shadow-elevated text-center relative overflow-hidden">
        {/* Background glow accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cherry-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Lock Icon */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 flex items-center justify-center text-amber-700 shadow-sm">
          <Lock className="w-8 h-8" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/20 border border-amber-300 text-amber-900 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          Materi Eksklusif CherryEdu Pro
        </div>

        {/* Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-roast-950 mb-2">
          {lessonTitle || 'Modul Silabus Terkunci'}
        </h2>
        {moduleTitle && (
          <p className="text-xs font-mono font-semibold text-cherry-800 uppercase tracking-wide mb-3">
            {moduleTitle} • {pathTitle}
          </p>
        )}

        <p className="font-sans text-xs sm:text-sm text-roast-700 mb-6 max-w-lg mx-auto leading-relaxed">
          Modul pertama pada jalur spesialisasi ini telah dibuka gratis untuk Anda pelajari. Untuk mengakses modul lanjutan, diagram teknis, serta mengambil ujian sertifikasi resmi, aktifkan langganan <strong>CherryEdu Pro</strong>.
        </p>

        {/* Benefit Pillars */}
        <div className="bg-white border border-paper-300 rounded-xl p-4 mb-6 text-left max-w-lg mx-auto">
          <div className="text-xs font-bold text-roast-900 flex items-center gap-1.5 mb-2.5">
            <Award className="w-4 h-4 text-amber-600" />
            Yang Anda dapatkan di CherryEdu Pro:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-roast-700">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Akses 6 Jalur Spesialisasi</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Sertifikat Terverifikasi Resmi</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>8 SVG Diagram Sains Interaktif</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Bisa Pakai Voucher Diskon</span>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-6 py-3 bg-cherry-800 hover:bg-cherry-900 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-md shadow-cherry-900/20"
          >
            Upgrade ke Pro (Mulai Rp 49rb)
            <ArrowRight className="w-4 h-4" />
          </button>
          <Link
            href={`/paths/${pathSlug}`}
            className="w-full sm:w-auto px-4 py-3 bg-white hover:bg-paper-100 border border-paper-400 text-roast-800 font-bold text-xs rounded-xl transition text-center flex items-center justify-center gap-1.5"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Kembali ke Silabus
          </Link>
        </div>

        <div className="mt-4">
          <Link
            href="/pricing"
            className="text-[11px] font-mono text-roast-500 hover:text-cherry-800 underline transition"
          >
            Lihat perbandingan paket & detail penawaran &rarr;
          </Link>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sourceContext={lessonTitle ? `Materi: ${lessonTitle}` : pathTitle}
      />
    </>
  );
}
