'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCherryEdu } from '@/lib/store';
import {
  Home,
  BookOpen,
  Coffee,
  MessageSquare,
  Grid,
  X,
  ClipboardCheck,
  Layers,
  Library,
  Sparkles,
  Briefcase,
  Compass,
  Trophy,
  User,
  PenTool,
  Award,
  Shield,
  ChevronRight,
  Crown,
} from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();
  const { currentUser, isPro } = useCherryEdu();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Close sheet on route change
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  // Prevent background scroll when bottom sheet is open
  useEffect(() => {
    if (isSheetOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSheetOpen]);

  // Don't render bottom nav in admin dashboard
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const isHomeActive = pathname === '/';
  const isPathsActive = pathname.startsWith('/paths');
  const isToolsActive = pathname.startsWith('/tools');
  const isForumActive = pathname.startsWith('/forum');

  return (
    <>
      {/* Fixed Bottom Dock (Only on Mobile) */}
      <nav
        aria-label="Navigasi Bawah Mobile"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-paper-300 md:hidden shadow-lg transition-transform"
      >
        <div className="grid grid-cols-5 h-16 max-w-md mx-auto items-center px-1">
          {/* 1. Beranda */}
          <Link
            href="/"
            className={`flex flex-col items-center justify-center h-full transition-colors ${
              isHomeActive
                ? 'text-cherry-800 font-bold'
                : 'text-roast-500 hover:text-roast-900 font-medium'
            }`}
          >
            <Home className={`w-5 h-5 ${isHomeActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
            <span className="text-[10px] mt-1 tracking-tight">Beranda</span>
          </Link>

          {/* 2. Kurikulum */}
          <Link
            href="/paths"
            className={`flex flex-col items-center justify-center h-full transition-colors ${
              isPathsActive
                ? 'text-cherry-800 font-bold'
                : 'text-roast-500 hover:text-roast-900 font-medium'
            }`}
          >
            <BookOpen className={`w-5 h-5 ${isPathsActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
            <span className="text-[10px] mt-1 tracking-tight">Kurikulum</span>
          </Link>

          {/* 3. Lab Seduh */}
          <Link
            href="/tools"
            className={`flex flex-col items-center justify-center h-full transition-colors ${
              isToolsActive
                ? 'text-cherry-800 font-bold'
                : 'text-roast-500 hover:text-roast-900 font-medium'
            }`}
          >
            <Coffee className={`w-5 h-5 ${isToolsActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
            <span className="text-[10px] mt-1 tracking-tight">Lab Seduh</span>
          </Link>

          {/* 4. Komunitas */}
          <Link
            href="/forum"
            className={`flex flex-col items-center justify-center h-full transition-colors ${
              isForumActive
                ? 'text-cherry-800 font-bold'
                : 'text-roast-500 hover:text-roast-900 font-medium'
            }`}
          >
            <MessageSquare className={`w-5 h-5 ${isForumActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
            <span className="text-[10px] mt-1 tracking-tight">Komunitas</span>
          </Link>

          {/* 5. Lainnya (Bottom Sheet Trigger) */}
          <button
            type="button"
            onClick={() => setIsSheetOpen(true)}
            className={`flex flex-col items-center justify-center h-full transition-colors cursor-pointer ${
              isSheetOpen
                ? 'text-cherry-800 font-bold'
                : 'text-roast-500 hover:text-roast-900 font-medium'
            }`}
          >
            <Grid className={`w-5 h-5 ${isSheetOpen ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
            <span className="text-[10px] mt-1 tracking-tight">Lainnya</span>
          </button>
        </div>
      </nav>

      {/* Modern Bottom Sheet Drawer */}
      {isSheetOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end">
          {/* Backdrop Blur */}
          <div
            className="fixed inset-0 bg-roast-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
            onClick={() => setIsSheetOpen(false)}
          />

          {/* Sheet Container */}
          <div className="relative w-full max-h-[85vh] bg-paper-50 rounded-t-3xl border-t border-paper-300 shadow-2xl flex flex-col z-10 animate-in slide-in-from-bottom duration-300 overflow-hidden">
            {/* Drag Handle Bar */}
            <div className="pt-3 pb-1 flex justify-center cursor-pointer" onClick={() => setIsSheetOpen(false)}>
              <div className="w-12 h-1.5 bg-paper-300 rounded-full" />
            </div>

            {/* Header */}
            <div className="px-5 py-3 border-b border-paper-200 flex items-center justify-between">
              <div>
                <h3 className="font-serif font-black text-lg text-roast-950">Eksplorasi CherryEdu</h3>
                <p className="text-[11px] text-roast-500">Menu alat riset, komunitas, dan profil</p>
              </div>
              <button
                type="button"
                onClick={() => setIsSheetOpen(false)}
                className="w-8 h-8 rounded-full bg-paper-200 flex items-center justify-center text-roast-600 hover:text-roast-950 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Sheet Content Scrollable */}
            <div className="p-5 overflow-y-auto space-y-6 pb-12">
              {/* Pro Banner Promo if Free */}
              {!isPro ? (
                <Link
                  href="/pricing"
                  onClick={() => setIsSheetOpen(false)}
                  className="block p-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-roast-950 shadow-xs border border-amber-300"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-black uppercase">
                      <Crown className="w-4 h-4 text-roast-950 fill-roast-950" />
                      <span>Upgrade CherryEdu Pro</span>
                    </div>
                    <span className="font-mono text-[10px] font-bold bg-roast-950 text-white px-2 py-0.5 rounded-full">
                      Mulai 49rb
                    </span>
                  </div>
                  <p className="text-xs text-roast-900 leading-tight">
                    Akses tanpa batas ke seluruh modul spesialisasi, kalkulator seduh, dan sertifikat digital.
                  </p>
                </Link>
              ) : (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-amber-700" />
                    <div>
                      <div className="text-xs font-bold text-amber-900 font-mono">Member Pro Aktif</div>
                      <div className="text-[10px] text-amber-700">Akses tanpa batas seluruh kurikulum</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-amber-400 text-roast-950 font-mono text-[9px] font-black rounded">
                    PRO
                  </span>
                </div>
              )}

              {/* 1. Alat & Riset Kopi */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-roast-400 font-bold px-1 block">
                  Alat & Riset Spesialis
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <Link
                    href="/tools?tab=cupping-sheet"
                    onClick={() => setIsSheetOpen(false)}
                    className="p-3 bg-white rounded-xl border border-paper-200 hover:border-roast-300 transition flex items-start gap-2.5 shadow-2xs"
                  >
                    <ClipboardCheck className="w-4 h-4 text-cherry-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-roast-900">SCA Cupping</div>
                      <div className="text-[10px] text-roast-500">Skor CVA & Pentagram</div>
                    </div>
                  </Link>

                  <Link
                    href="/open-data"
                    onClick={() => setIsSheetOpen(false)}
                    className="p-3 bg-white rounded-xl border border-paper-200 hover:border-roast-300 transition flex items-start gap-2.5 shadow-2xs"
                  >
                    <Layers className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-roast-900">Data Terbuka</div>
                      <div className="text-[10px] text-roast-500">Harga Farmgate Kopi</div>
                    </div>
                  </Link>

                  <Link
                    href="/lexicon"
                    onClick={() => setIsSheetOpen(false)}
                    className="p-3 bg-white rounded-xl border border-paper-200 hover:border-roast-300 transition flex items-start gap-2.5 shadow-2xs"
                  >
                    <BookOpen className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-roast-900">Kamus Kopi</div>
                      <div className="text-[10px] text-roast-500">Audio 60+ Istilah SCA</div>
                    </div>
                  </Link>

                  <Link
                    href="/flashcards"
                    onClick={() => setIsSheetOpen(false)}
                    className="p-3 bg-white rounded-xl border border-paper-200 hover:border-roast-300 transition flex items-start gap-2.5 shadow-2xs"
                  >
                    <Sparkles className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-roast-900">Flashcards</div>
                      <div className="text-[10px] text-roast-500">Latihan Uji Cepat</div>
                    </div>
                  </Link>

                  <Link
                    href="/pustaka"
                    onClick={() => setIsSheetOpen(false)}
                    className="col-span-2 p-3 bg-white rounded-xl border border-paper-200 hover:border-roast-300 transition flex items-center justify-between shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <Library className="w-4 h-4 text-roast-700 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-roast-900">Daftar Pustaka Ilmiah</div>
                        <div className="text-[10px] text-roast-500">18+ Rujukan Resmi SCA, CQI, & WCR</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-roast-300" />
                  </Link>
                </div>
              </div>

              {/* 2. Karier & Komunitas */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-roast-400 font-bold px-1 block">
                  Karier & Eksplorasi
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <Link
                    href="/jobs"
                    onClick={() => setIsSheetOpen(false)}
                    className="p-3 bg-white rounded-xl border border-paper-200 hover:border-roast-300 transition flex items-start gap-2.5 shadow-2xs"
                  >
                    <Briefcase className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-roast-900">Bursa Kerja</div>
                      <div className="text-[10px] text-roast-500">Lowongan Barista</div>
                    </div>
                  </Link>

                  <Link
                    href="/onboarding"
                    onClick={() => setIsSheetOpen(false)}
                    className="p-3 bg-white rounded-xl border border-paper-200 hover:border-roast-300 transition flex items-start gap-2.5 shadow-2xs"
                  >
                    <Compass className="w-4 h-4 text-cherry-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-roast-900">Tes Minat</div>
                      <div className="text-[10px] text-roast-500">Panduan 4 Menit</div>
                    </div>
                  </Link>

                  <Link
                    href="/leaderboard"
                    onClick={() => setIsSheetOpen(false)}
                    className="col-span-2 p-3 bg-white rounded-xl border border-paper-200 hover:border-roast-300 transition flex items-center justify-between shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <Trophy className="w-4 h-4 text-amber-600 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-roast-900">Tabel Kehormatan (Leaderboard)</div>
                        <div className="text-[10px] text-roast-500">Peringkat XP & dedikasi pembelajar</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-roast-300" />
                  </Link>
                </div>
              </div>

              {/* 3. Akun & Pembelajaran Anda */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-roast-400 font-bold px-1 block">
                  Akun & Pembelajaran
                </span>
                <div className="bg-white rounded-2xl border border-paper-200 divide-y divide-paper-100 overflow-hidden shadow-2xs">
                  <Link
                    href="/profile"
                    onClick={() => setIsSheetOpen(false)}
                    className="p-3.5 flex items-center justify-between hover:bg-paper-50 transition"
                  >
                    <div className="flex items-center gap-3">
                      <User className="w-4 h-4 text-roast-700" />
                      <div>
                        <div className="text-xs font-bold text-roast-900">Profil & Dossier Saya</div>
                        <div className="text-[10px] text-roast-500">{currentUser.name} ({currentUser.email || 'Akun Tamu'})</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-roast-300" />
                  </Link>

                  <Link
                    href="/profile?tab=notes"
                    onClick={() => setIsSheetOpen(false)}
                    className="p-3.5 flex items-center justify-between hover:bg-paper-50 transition"
                  >
                    <div className="flex items-center gap-3">
                      <PenTool className="w-4 h-4 text-roast-700" />
                      <div>
                        <div className="text-xs font-bold text-roast-900">Buku Catatan Belajar</div>
                        <div className="text-[10px] text-roast-500">Buka ringkasan materi yang Anda simpan</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-roast-300" />
                  </Link>

                  <Link
                    href="/certificates"
                    onClick={() => setIsSheetOpen(false)}
                    className="p-3.5 flex items-center justify-between hover:bg-paper-50 transition"
                  >
                    <div className="flex items-center gap-3">
                      <Award className="w-4 h-4 text-roast-700" />
                      <div>
                        <div className="text-xs font-bold text-roast-900">Koleksi Sertifikat Digital</div>
                        <div className="text-[10px] text-roast-500">Unduh PDF & Verifikasi Kredensial</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-roast-300" />
                  </Link>

                  {/* Admin Console Shortcut */}
                  {currentUser.role === 'admin' && (
                    <Link
                      href="/admin"
                      onClick={() => setIsSheetOpen(false)}
                      className="p-3.5 flex items-center justify-between bg-roast-950 text-white hover:bg-roast-900 transition"
                    >
                      <div className="flex items-center gap-3">
                        <Shield className="w-4 h-4 text-amber-400" />
                        <div>
                          <div className="text-xs font-bold font-mono">Konsol Admin Dashboard</div>
                          <div className="text-[10px] text-paper-300">Kelola pengguna, kurikulum, & transaksi</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-paper-400" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
