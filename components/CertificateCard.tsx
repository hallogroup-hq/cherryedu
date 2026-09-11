'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Certificate } from '@/lib/types';
import { Check, Copy, ExternalLink, Printer, QrCode } from "lucide-react";
import { toast } from 'sonner';

interface CertificateCardProps {
  certificate: Certificate;
  onShare?: () => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, onShare }) => {
  const [copied, setCopied] = useState(false);

  const verificationUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/verify/${certificate.share_token}`
    : `/verify/${certificate.share_token}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(verificationUrl);
    setCopied(true);
    toast.success('Tautan verifikasi diploma berhasil disalin!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Archival Diploma Frame */}
      <div className="relative bg-[#FCFAF5] border border-[#D5CABE] rounded-xl p-8 sm:p-14 shadow-diploma text-center overflow-hidden">
        {/* Subtle Decorative Guilloche Border */}
        <div className="absolute inset-3 border border-[#E5DAC8] pointer-events-none rounded" />
        <div className="absolute inset-4 border border-[#ECE2D2] pointer-events-none rounded" />

        {/* Certificate Header */}
        <div className="flex flex-col items-center mb-8 relative z-10">
          <img
            src="/cherry-logo-tight.png"
            alt="Cherry Coffee Roastery"
            className="h-16 w-auto object-contain mb-3 drop-shadow-xs"
          />
          <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-roast-600 block">
            CHERRY COFFEE ROASTERY ACADEMY
          </span>
          <span className="text-[10px] font-mono tracking-wider text-roast-400 uppercase">
            INDONESIA SPECIALTY COFFEE CURRICULUM
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-roast-950 mt-4 tracking-tight">
            Certificate of Completion
          </h2>
          <div className="font-mono text-[10px] uppercase tracking-widest text-roast-500 mt-1">
            CREDENTIAL NO: {certificate.certificate_number}
          </div>
        </div>

        {/* Certificate Body */}
        <div className="space-y-4 max-w-xl mx-auto my-8 relative z-10">
          <p className="font-mono text-xs uppercase tracking-wider text-roast-500">
            Diberikan secara terhormat kepada:
          </p>

          <div className="text-3xl sm:text-4xl font-serif font-extrabold text-roast-950 tracking-tight border-b border-paper-300 pb-3 px-6 inline-block">
            {certificate.user_name || 'Alumnus CherryEdu'}
          </div>

          <p className="text-xs sm:text-sm text-roast-700 leading-relaxed font-sans max-w-md mx-auto pt-2">
            Telah menyelesaikan seluruh rangkaian silabus hulu-ke-hilir dan dinyatakan lulus ujian kompetensi resmi berstandar SCA untuk:
          </p>

          <div className="font-serif font-bold text-lg sm:text-xl text-roast-950 bg-paper-100/80 px-6 py-2 rounded border border-paper-300 inline-block mt-2">
            {certificate.path_title || 'Foundation: Kopi dari Hulu ke Hilir'}
          </div>

          {certificate.grade_text && (
            <div className="font-mono text-xs text-cherry-800 font-bold block pt-1">
              PREDIKAT: {certificate.grade_text.toUpperCase()}
            </div>
          )}
        </div>

        {/* Signatures & Seal Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end pt-8 border-t border-paper-200 mt-8 max-w-xl mx-auto relative z-10">
          {/* Left: Date */}
          <div className="text-center sm:text-left font-mono text-xs text-roast-600">
            <span className="block text-[9px] uppercase tracking-widest text-roast-400 font-bold">
              Tanggal Kelulusan
            </span>
            <span className="font-bold text-roast-900 mt-1 block">
              {new Date(certificate.issued_at).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>

          {/* Middle: Minimalist Gold Seal */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border border-crema-600/50 bg-crema-50/80 flex items-center justify-center text-crema-800 shadow-subtle p-2">
              <div className="text-[8px] font-mono font-bold text-center uppercase tracking-tighter leading-tight border border-dashed border-crema-600/40 rounded-full w-full h-full flex flex-col items-center justify-center">
                <span>★ VERIFIED ★</span>
                <span className="font-serif font-black text-[9px]">CHERRY</span>
                <span>ROASTERY</span>
              </div>
            </div>
          </div>

          {/* Right: Signature */}
          <div className="text-center sm:text-right font-mono text-xs">
            <div className="font-serif italic text-base font-bold text-roast-950">
              Fahrul M.W
            </div>
            <div className="w-32 border-b border-roast-400 mx-auto sm:ml-auto sm:mr-0 my-1" />
            <span className="block text-[9px] uppercase text-roast-500 leading-tight">
              Head of Quality & Q Grader<br />Cherry Coffee Roastery
            </span>
          </div>
        </div>

        {/* Verification Strip Footer */}
        <div className="mt-8 pt-4 border-t border-dashed border-paper-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-roast-500 relative z-10">
          <span className="flex items-center gap-1.5 text-emerald-800">
            ● Kredensial Tercatat di Buku Induk Digital CherryEdu
          </span>
          <span className="flex items-center gap-1">
            <QrCode className="w-3.5 h-3.5 text-roast-600" />
            <span>Token: {certificate.share_token}</span>
          </span>
        </div>
      </div>

      {/* Action Buttons Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-white rounded-lg border border-paper-300 text-xs font-mono">
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-paper-100 hover:bg-paper-200 text-roast-800 transition-all duration-150 ease-out active:scale-[0.97] border border-paper-200"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Tautan Disalin' : 'Salin Tautan'}</span>
          </button>
          <Link
            href={`/verify/${certificate.share_token}`}
            target="_blank"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-paper-100 hover:bg-paper-200 text-roast-800 transition-all duration-150 ease-out active:scale-[0.97] border border-paper-200"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Verifikasi Publik</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-paper-100 hover:bg-paper-200 text-roast-800 transition-all duration-150 ease-out active:scale-[0.97] border border-paper-200"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cetak Diploma</span>
          </button>
          {onShare && (
            <button
              onClick={onShare}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-roast-950 hover:bg-cherry-800 text-paper-50 rounded font-bold transition-all duration-150 ease-out active:scale-[0.97] shadow-subtle uppercase tracking-wider text-[11px]"
            >
              <span>Bagikan</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
