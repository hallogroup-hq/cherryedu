'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCherryEdu } from '@/lib/store';
import { CertificateCard } from '@/components/CertificateCard';
import {
  XCircle,
  ShieldCheck,
  ArrowLeft,
  Search,
  ExternalLink,
} from 'lucide-react';

export default function PublicVerifyPage() {
  const params = useParams();
  const router = useRouter();
  const token = params.token as string;
  const { getCertificateByToken } = useCherryEdu();
  const [retryInput, setRetryInput] = useState('');

  const certificate = getCertificateByToken(token);

  const handleRetrySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (retryInput.trim()) {
      router.push(`/verify/${encodeURIComponent(retryInput.trim())}`);
    }
  };

  return (
    <div className="min-h-screen bg-roast-950 text-paper-100 pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand & Registry Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-roast-800 text-paper-200">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/cherry-logo-white.png"
              alt="Cherry Coffee Roastery"
              className="h-10 w-auto object-contain"
            />
            <div className="border-l border-roast-700 pl-3">
              <span className="font-serif font-bold text-lg text-paper-50 tracking-tight block">
                Cherry Coffee Roastery
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-crema-300 block -mt-0.5">
                PUBLIC CREDENTIAL REGISTRY
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <Link
              href="/verify"
              className="font-mono text-xs text-crema-300 hover:text-white transition-colors underline underline-offset-4 flex items-center gap-1"
            >
              <span>Portal Registri Publik</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
            <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5 font-bold uppercase tracking-wider pl-3 border-l border-roast-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Protokol Resmi</span>
            </span>
          </div>
        </div>

        {certificate ? (
          <div className="space-y-8">
            {/* Top Back Link */}
            <div>
              <Link
                href="/verify"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-crema-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Cari Kredensial Lain di Portal Verifikasi</span>
              </Link>
            </div>

            {/* Official Verification Ledger Banner */}
            <div className="bg-roast-900 border-2 border-crema-500/50 p-6 sm:p-8 text-paper-100 shadow-warm relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-roast-800">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2 py-0.5 border border-emerald-500/40">
                    STATUS: SAH & TERDAFTAR RESMI
                  </span>
                  <span className="font-mono text-[10px] text-roast-400">
                    ID: {certificate.certificate_number}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-crema-300">
                  DITERBITKAN: {new Date(certificate.issued_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase()}
                </span>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-bold text-paper-50 mb-2">
                Kredensial Kompetensi Industri Kopi Spesialti
              </h2>
              <p className="font-sans text-xs sm:text-sm text-paper-300 leading-relaxed max-w-2xl">
                Sertifikat atas nama <strong className="text-paper-50 font-bold">{certificate.user_name}</strong> untuk kurikulum <strong className="text-crema-300">{certificate.path_title}</strong> adalah dokumen kompetensi autentik yang dikeluarkan oleh kurikulum terpadu Cherry Coffee Roastery Academy.
              </p>
            </div>

            {/* Official Museum-Grade Certificate Preview */}
            <CertificateCard certificate={certificate} />
          </div>
        ) : (
          /* Invalid / Not Found State */
          <div className="bg-paper-50 text-roast-950 border border-paper-400 p-8 sm:p-12 text-center shadow-warm max-w-lg mx-auto my-12 space-y-5">
            <div className="w-12 h-12 border border-rose-400 bg-rose-50 text-rose-700 flex items-center justify-center mx-auto">
              <XCircle className="w-6 h-6" />
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-rose-700 block font-bold mb-1">
                Kredensial Tidak Ditemukan
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-roast-950">
                Sertifikat Tidak Terdaftar
              </h2>
            </div>

            <p className="font-sans text-xs text-roast-600 leading-relaxed">
              Token atau nomor verifikasi <code className="font-mono bg-paper-200 text-roast-900 px-1.5 py-0.5 rounded font-bold">&ldquo;{token}&rdquo;</code> tidak tercatat di buku induk registri publik CherryEdu. Pastikan URL atau QR code berasal dari dokumen fisik/digital resmi.
            </p>

            {/* Search another code directly */}
            <form onSubmit={handleRetrySubmit} className="space-y-2 pt-2 text-left">
              <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold">
                Cari Nomor Sertifikat Lain
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={retryInput}
                  onChange={(e) => setRetryInput(e.target.value)}
                  placeholder="Ketik CHE-... atau token..."
                  className="flex-1 px-3 py-2 text-xs font-mono border border-paper-300 rounded-lg bg-white text-roast-900 focus:outline-none focus:border-roast-500"
                />
                <button
                  type="submit"
                  disabled={!retryInput.trim()}
                  className="px-4 py-2 bg-roast-950 hover:bg-roast-900 disabled:opacity-40 text-paper-50 text-xs font-mono font-bold rounded-lg transition-colors flex items-center gap-1"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Periksa</span>
                </button>
              </div>
            </form>

            <div className="pt-4 border-t border-paper-200 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/verify"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-roast-950 hover:bg-roast-900 text-paper-50 font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Buka Portal Verifikasi</span>
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-paper-200 hover:bg-paper-300 text-roast-800 font-mono text-xs uppercase tracking-wider rounded-lg transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Beranda Utama</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
