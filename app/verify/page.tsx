'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCherryEdu } from '@/lib/store';
import { Certificate } from '@/lib/types';
import { CertificateCard } from '@/components/CertificateCard';
import {
  Search,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Award,
  FileCheck2,
  Lock,
  RotateCcw,
} from 'lucide-react';

export default function PublicVerifySearchPage() {
  const { getCertificateByToken } = useCherryEdu();
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [searchedTerm, setSearchedTerm] = useState('');
  const [foundCert, setFoundCert] = useState<Certificate | null>(null);

  const performSearch = (termToSearch: string) => {
    const q = termToSearch.trim();
    if (!q) return;

    setSearchedTerm(q);
    setHasSearched(true);
    const cert = getCertificateByToken(q);
    setFoundCert(cert || null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchQuery);
  };

  const handleReset = () => {
    setSearchQuery('');
    setHasSearched(false);
    setSearchedTerm('');
    setFoundCert(null);
  };

  return (
    <div className="min-h-screen bg-paper-50 text-roast-950 py-10 sm:py-16 print:min-h-0 print:py-0 print:px-0 print:bg-white print:m-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 print:max-w-none print:w-full print:p-0 print:m-0 print:space-y-0">
        {/* Top Header - Hidden in Print */}
        <div className="text-center space-y-3 print:hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-roast-100/70 border border-paper-300 rounded-full text-roast-700 font-mono text-[10px] uppercase tracking-widest font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Public Credential Registry • Protokol Verifikasi Resmi</span>
          </div>

          <h1 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-roast-950 tracking-tight">
            Verifikasi Keabsahan Sertifikat
          </h1>

          <p className="text-xs sm:text-sm text-roast-600 max-w-2xl mx-auto leading-relaxed">
            Pusat registri publik untuk memeriksa keaslian diploma kelulusan, nomor seri dokumen, dan kompetensi kejuruan kopi spesialisasi yang diterbitkan oleh Cherry Coffee Roastery Academy.
          </p>
        </div>

        {/* Search Box Card - Hidden in Print */}
        <div className="bg-white border border-paper-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4 print:hidden">
          <form onSubmit={handleSubmit} className="space-y-3">
            <label className="block font-mono text-[11px] uppercase tracking-wider text-roast-500 font-bold">
              Masukkan Nomor Registrasi Dokumen atau Token Verifikasi
            </label>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-roast-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ketik Nomor Sertifikat (CHE-...) atau Kode Token..."
                  className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm font-mono border border-paper-300 rounded-xl bg-paper-50/50 text-roast-900 placeholder:text-roast-400 placeholder:font-sans focus:outline-none focus:border-roast-500 focus:bg-white transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={!searchQuery.trim()}
                className="px-6 py-3 bg-roast-950 hover:bg-roast-900 disabled:opacity-40 text-paper-50 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shrink-0 shadow-xs"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Periksa Kredensial</span>
              </button>
            </div>
          </form>
        </div>

        {/* Search Results Area */}
        {hasSearched && (
          <div className="space-y-6 pt-2 print:space-y-0 print:pt-0">
            {foundCert ? (
              /* Success / Found State */
              <div className="space-y-6 print:space-y-0">
                {/* Status Box - Hidden in Print */}
                <div className="bg-emerald-50 border-2 border-emerald-300/80 rounded-2xl p-6 sm:p-7 shadow-xs print:hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-emerald-200/60">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-800 font-bold block">
                          STATUS KREDENSIAL: SAH & TERDAFTAR RESMI
                        </span>
                        <h2 className="font-serif font-bold text-lg text-emerald-950">
                          {foundCert.certificate_number}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/verify/${foundCert.share_token}`}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-emerald-300 hover:bg-emerald-100/50 text-emerald-900 rounded-lg font-mono text-xs font-bold transition-colors"
                      >
                        <span>Halaman Publik Dokumen</span>
                        <ExternalLink className="w-3 h-3 text-emerald-700" />
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-emerald-950">
                    <div>
                      <span className="text-emerald-700 block text-[10px] uppercase tracking-wider">
                        Nama Lulusan
                      </span>
                      <strong className="font-sans font-bold text-sm text-roast-950 block mt-0.5">
                        {foundCert.user_name}
                      </strong>
                    </div>

                    <div>
                      <span className="text-emerald-700 block text-[10px] uppercase tracking-wider">
                        Kurikulum Spesialisasi
                      </span>
                      <strong className="font-sans font-semibold text-roast-900 block mt-0.5">
                        {foundCert.path_title}
                      </strong>
                    </div>

                    <div>
                      <span className="text-emerald-700 block text-[10px] uppercase tracking-wider">
                        Tanggal Diterbitkan
                      </span>
                      <strong className="block mt-0.5 text-roast-900">
                        {new Date(foundCert.issued_at).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Certificate Visual Presentation - Only this renders in Print */}
                <div className="space-y-3 print:space-y-0 print:m-0 print:p-0">
                  <div className="flex items-center justify-between print:hidden">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-roast-400 font-bold">
                      Pratinjau Dokumen Sertifikat Digital
                    </span>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1 font-mono text-xs text-roast-500 hover:text-roast-800 transition-colors"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Cari Nomor Lain</span>
                    </button>
                  </div>
                  <CertificateCard certificate={foundCert} />
                </div>
              </div>
            ) : (
              /* Not Found State - Hidden in Print */
              <div className="bg-white border border-paper-300 rounded-2xl p-8 sm:p-12 text-center space-y-4 shadow-xs print:hidden">
                <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mx-auto">
                  <XCircle className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-rose-700 font-bold block">
                    Kredensial Tidak Ditemukan
                  </span>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-roast-950">
                    Sertifikat Tidak Terdaftar
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-roast-600 max-w-lg mx-auto leading-relaxed">
                  Nomor dokumen atau token <code className="font-mono bg-paper-100 text-roast-900 px-1.5 py-0.5 rounded font-bold">&ldquo;{searchedTerm}&rdquo;</code> tidak tercatat di buku induk registri publik CherryEdu.
                </p>

                <div className="pt-2 max-w-md mx-auto text-left bg-paper-50 border border-paper-200 rounded-xl p-4 space-y-2 text-xs text-roast-600">
                  <p className="font-mono font-bold text-roast-800 uppercase text-[10px] tracking-wider">
                    Saran Pencarian:
                  </p>
                  <ul className="list-disc list-inside space-y-1 font-sans">
                    <li>Periksa kembali ejaan nomor registrasi (format: <code className="font-mono">CHE-2026-FOUND-000188</code>).</li>
                    <li>Pastikan tanda hubung (-) dan huruf besar/kecil diketik sesuai dokumen.</li>
                    <li>Bila dokumen memiliki QR Code, Anda dapat langsung memindai QR Code tersebut untuk membuka tautan verifikasi otomatis.</li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-roast-950 hover:bg-roast-900 text-paper-50 font-mono text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ulangi Pencarian</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Educational / Trust Features Section - Hidden in Print */}
        <div className="pt-6 border-t border-paper-200 print:hidden">
          <h2 className="font-serif font-bold text-lg sm:text-xl text-roast-950 mb-4 text-center">
            Standar Verifikasi & Integritas Dokumen CherryEdu
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-paper-200 rounded-xl p-5 space-y-2.5 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-paper-100 text-roast-700 flex items-center justify-center">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-bold text-sm text-roast-950">
                Buku Induk Registri Publik
              </h3>
              <p className="text-xs text-roast-600 leading-relaxed">
                Setiap sertifikat kelulusan tercatat permanen di basis data kami, memungkinkan pihak kedai, HRD, dan instansi memvalidasi riwayat kelulusan kapan pun secara instan.
              </p>
            </div>

            <div className="bg-white border border-paper-200 rounded-xl p-5 space-y-2.5 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-paper-100 text-roast-700 flex items-center justify-center">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-bold text-sm text-roast-950">
                Token Kriptografis Unik
              </h3>
              <p className="text-xs text-roast-600 leading-relaxed">
                Mencegah modifikasi dan pemalsuan sertifikat digital dengan tautan unik permanen yang tidak dapat diduplikasi oleh pihak tidak bertanggung jawab.
              </p>
            </div>

            <div className="bg-white border border-paper-200 rounded-xl p-5 space-y-2.5 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-paper-100 text-roast-700 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-bold text-sm text-roast-950">
                Akreditasi Kompetensi Kejuruan
              </h3>
              <p className="text-xs text-roast-600 leading-relaxed">
                Kurikulum terpadu berbasis sains ekstraksi, botani, dan standar evaluasi sensorik SCA yang ditandatangani langsung oleh Head of Curriculum Cherry Coffee Roastery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
