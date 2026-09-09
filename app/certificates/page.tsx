'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCherryEdu } from '@/lib/store';
import { CertificateCard } from '@/components/CertificateCard';
import { ShareModal } from '@/components/ShareModal';
import { Award, BookOpen, Sparkles, ShieldCheck } from 'lucide-react';

export default function CertificatesGalleryPage() {
  const { currentUser, certificates, isAuthenticated } = useCherryEdu();
  const [selectedCertForShare, setSelectedCertForShare] = useState<any | null>(null);

  const userCerts = certificates.filter((c) => c.user_id === currentUser.id);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header Ledger */}
      <div className="border-b border-paper-300 pb-8 mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-[10px] tracking-widest text-cherry-700 font-semibold uppercase bg-cherry-50 px-2 py-0.5 border border-cherry-200">
            [ PORTFOLIO DIPLOMA & KREDENSIAL RESMI ]
          </span>
          <span className="font-mono text-[10px] text-roast-500 uppercase">
            REGISTRASI KOMPETENSI KOPI
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-roast-950 tracking-tight">
          Koleksi Sertifikat Kelulusan
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-roast-700 max-w-2xl leading-relaxed">
          Kredensial kelulusan digital berstandar kurikulum kopi spesialti yang diterbitkan oleh Cherry Coffee Roastery Academy. Setiap dokumen memiliki token unik dengan tautan verifikasi publik permanen.
        </p>
      </div>

      {!isAuthenticated ? (
        /* Guest State */
        <div className="bg-paper-50 border border-paper-400 p-8 sm:p-12 text-center shadow-xs max-w-lg mx-auto">
          <div className="w-12 h-12 border border-paper-400 bg-paper-200 text-roast-600 flex items-center justify-center mx-auto mb-4">
            <Award className="w-6 h-6" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 block font-semibold mb-1">
            [ PORTAL KREDENSIAL PEMBELAJAR ]
          </span>
          <h3 className="font-serif text-xl font-bold text-roast-950 mb-2">
            Masuk untuk Melihat Sertifikat Anda
          </h3>
          <p className="font-sans text-xs text-roast-600 leading-relaxed mb-6">
            Masuk atau daftarkan akun CherryEdu untuk mengakses seluruh portofolio diploma dan sertifikat kelulusan yang telah Anda raih.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/login?redirect=/certificates"
              className="w-full sm:w-auto px-5 py-2.5 bg-roast-950 hover:bg-roast-850 text-white font-bold text-xs rounded-lg transition"
            >
              Masuk ke Akun
            </Link>
            <Link
              href="/register"
              className="w-full sm:w-auto px-5 py-2.5 bg-white border border-paper-400 hover:bg-paper-100 text-roast-900 font-bold text-xs rounded-lg transition"
            >
              Daftar Akun Baru
            </Link>
          </div>
        </div>
      ) : userCerts.length > 0 ? (
        <div className="space-y-12">
          {userCerts.map((cert) => (
            <div key={cert.id} className="space-y-4">
              <CertificateCard
                certificate={cert}
                onShare={() => setSelectedCertForShare(cert)}
              />
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-paper-50 border border-paper-400 p-8 sm:p-12 text-center shadow-xs max-w-lg mx-auto">
          <div className="w-12 h-12 border border-paper-400 bg-paper-200 text-roast-600 flex items-center justify-center mx-auto mb-4">
            <Award className="w-6 h-6" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 block font-semibold mb-1">
            [ BELUM ADA DIPLOMA TERBIT ]
          </span>
          <h3 className="font-serif text-xl font-bold text-roast-950 mb-2">
            Dokumen Kelulusan Belum Tersedia
          </h3>
          <p className="font-sans text-xs text-roast-600 leading-relaxed mb-6">
            Akun <strong className="text-roast-900">{currentUser.name}</strong> belum menuntaskan jalur kurikulum atau ujian akhir kompetensi. Selesaikan seluruh 7 modul di Foundation Layer untuk menerbitkan diploma pertama Anda.
          </p>
          <Link
            href="/paths/kopi-dari-hulu-ke-hilir"
            className="inline-flex items-center gap-2 px-6 py-3 bg-roast-950 hover:bg-cherry-800 text-paper-50 font-mono text-xs uppercase tracking-wider font-bold transition-all border border-roast-900 shadow-xs"
          >
            <BookOpen className="w-4 h-4" />
            <span>Buka Silabus Foundation Layer →</span>
          </Link>
        </div>
      )}

      {/* Share Modal Dialog */}
      {selectedCertForShare && (
        <ShareModal
          isOpen={Boolean(selectedCertForShare)}
          onClose={() => setSelectedCertForShare(null)}
          title="Sertifikat Kelulusan Resmi"
          subtitle={selectedCertForShare.path_title}
        />
      )}
    </div>
  );
}

