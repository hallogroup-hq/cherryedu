'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCherryEdu } from '@/lib/store';
import { CertificateCard } from '@/components/CertificateCard';
import { CheckCircle2, XCircle, ShieldCheck, ArrowLeft, Coffee } from 'lucide-react';

export default function PublicVerifyPage() {
  const params = useParams();
  const token = params.token as string;
  const { getCertificateByToken } = useCherryEdu();

  const certificate = getCertificateByToken(token);

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

          <span className="font-mono text-xs text-crema-300 flex items-center gap-1.5 self-start sm:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>[ PROTOKOL VERIFIKASI RESMI ]</span>
          </span>
        </div>

        {certificate ? (
          <div className="space-y-8">
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
          <div className="bg-paper-50 text-roast-950 border border-paper-400 p-8 sm:p-12 text-center shadow-warm max-w-lg mx-auto my-12">
            <div className="w-12 h-12 border border-rose-400 bg-rose-50 text-rose-700 flex items-center justify-center mx-auto mb-4">
              <XCircle className="w-6 h-6" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-rose-700 block font-bold mb-1">
              [ KREDENSIAL TIDAK DITEMUKAN ]
            </span>
            <h2 className="font-serif text-xl font-bold text-roast-950 mb-2">
              Sertifikat Tidak Terdaftar
            </h2>
            <p className="font-sans text-xs text-roast-600 leading-relaxed mb-6">
              Token verifikasi <code className="font-mono bg-paper-200 px-1 py-0.5">&ldquo;{token}&rdquo;</code> tidak tercatat di buku induk registri CherryEdu. Pastikan URL atau QR code berasal dari dokumen fisik/digital resmi.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-roast-950 hover:bg-cherry-800 text-paper-50 font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Beranda Utama</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

