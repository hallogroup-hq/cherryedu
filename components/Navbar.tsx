'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCherryEdu } from '@/lib/store';
import { useAuth } from '@/lib/auth';
import {
  Flame,
  Zap,
  Bookmark,
  Award,
  Menu,
  X,
  Compass,
  ShieldCheck,
  LogIn,
  LogOut,
  UserCircle2,
  ChevronDown,
  BookOpen,
  Sparkles,
  MessageSquare,
  Briefcase,
  Trophy,
  Info,
  Coffee,
  Library,
  Layers,
  ClipboardCheck,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { currentUser, bookmarks, isAuthenticated } = useCherryEdu();
  const { user: _user, signOut } = useAuth();
  
  const userBookmarks = bookmarks.filter((b) => b.user_id === currentUser.id);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [communityDropdownOpen, setCommunityDropdownOpen] = useState(false);

  const toolsRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on route change or click outside
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setToolsDropdownOpen(false);
    setCommunityDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) {
        setToolsDropdownOpen(false);
      }
      if (communityRef.current && !communityRef.current.contains(e.target as Node)) {
        setCommunityDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const isToolsActive =
    pathname.startsWith('/tools') ||
    pathname.startsWith('/pustaka') ||
    pathname.startsWith('/lexicon') ||
    pathname.startsWith('/flashcards') ||
    pathname.startsWith('/game') ||
    pathname.startsWith('/assessment') ||
    pathname.startsWith('/open-data');

  const isCommunityActive =
    pathname.startsWith('/forum') ||
    pathname.startsWith('/jobs') ||
    pathname.startsWith('/leaderboard');

  return (
    <header className="sticky top-0 z-40 bg-paper-50/95 backdrop-blur-md border-b border-paper-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4">
          {/* Brand Mark */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="/cherry-logo-tight.png"
              alt="Cherry Coffee Roastery"
              className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
            <div className="flex flex-col border-l border-paper-300 pl-3">
              <span className="font-serif font-black text-xl sm:text-2xl tracking-tight text-roast-950 leading-none">
                Cherry<span className="font-sans font-light text-cherry-700 text-lg ml-0.5">Edu</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-roast-500 uppercase mt-0.5">
                Specialty Coffee Academy
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Clean Editorial Grouping) */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {/* 1. Kurikulum */}
            <Link
              href="/paths"
              className={`text-xs uppercase tracking-wider font-semibold transition-all relative py-1 ${
                pathname.startsWith('/paths')
                  ? 'text-cherry-800 font-bold'
                  : 'text-roast-700 hover:text-roast-950'
              }`}
            >
              Kurikulum
              {pathname.startsWith('/paths') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cherry-700" />
              )}
            </Link>

            {/* 2. Alat & Riset Dropdown */}
            <div
              ref={toolsRef}
              className="relative"
              onMouseEnter={() => setToolsDropdownOpen(true)}
              onMouseLeave={() => setToolsDropdownOpen(false)}
            >
              <button
                onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                className={`text-xs uppercase tracking-wider font-semibold transition-all relative py-1 flex items-center gap-1 ${
                  isToolsActive
                    ? 'text-cherry-800 font-bold'
                    : 'text-roast-700 hover:text-roast-950'
                }`}
              >
                <span>Alat & Riset</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
                {isToolsActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cherry-700" />
                )}
              </button>

              {toolsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50 origin-top-left animate-in fade-in zoom-in-95 slide-in-from-top-1 duration-150 ease-out-strong">
                  <div className="bg-paper-50 rounded-xl border border-paper-300 shadow-card p-2 space-y-1">
                    <Link
                      href="/tools"
                      onClick={() => setToolsDropdownOpen(false)}
                      className={`flex items-start gap-2.5 p-2.5 rounded-lg text-left transition-colors ${
                        pathname === '/tools' ? 'bg-paper-200/80 text-roast-950' : 'hover:bg-paper-100 text-roast-800'
                      }`}
                    >
                      <Coffee className="w-4 h-4 text-cherry-700 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-serif font-bold text-xs">Laboratorium Seduh</div>
                        <div className="font-sans text-[11px] text-roast-500 leading-tight mt-0.5">
                          15 instrumen presisi: rasio, dial-in, roast & grinder
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/tools?tab=cupping-sheet"
                      onClick={() => setToolsDropdownOpen(false)}
                      className="flex items-start gap-2.5 p-2.5 rounded-lg text-left transition-colors hover:bg-paper-100 text-roast-800"
                    >
                      <ClipboardCheck className="w-4 h-4 text-cherry-700 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-serif font-bold text-xs">SCA Cupping Sheet</div>
                        <div className="font-sans text-[11px] text-roast-500 leading-tight mt-0.5">
                          Form uji rasa standar CVA resmi (Descriptive & Affective)
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/open-data"
                      onClick={() => setToolsDropdownOpen(false)}
                      className={`flex items-start gap-2.5 p-2.5 rounded-lg text-left transition-colors ${
                        pathname.startsWith('/open-data') ? 'bg-paper-200/80 text-roast-950' : 'hover:bg-paper-100 text-roast-800'
                      }`}
                    >
                      <Layers className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-serif font-bold text-xs">Data Terbuka Nasional</div>
                        <div className="font-sans text-[11px] text-roast-500 leading-tight mt-0.5">
                          Dashboard harga farmgate & sebaran produksi kopi
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/pustaka"
                      onClick={() => setToolsDropdownOpen(false)}
                      className={`flex items-start gap-2.5 p-2.5 rounded-lg text-left transition-colors ${
                        pathname.startsWith('/pustaka') ? 'bg-paper-200/80 text-roast-950' : 'hover:bg-paper-100 text-roast-800'
                      }`}
                    >
                      <Library className="w-4 h-4 text-cherry-700 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-serif font-bold text-xs">Daftar Pustaka Ilmiah</div>
                        <div className="font-sans text-[11px] text-roast-500 leading-tight mt-0.5">
                          18+ rujukan resmi SCA, CQI, WCR, & Puslitkoka
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/lexicon"
                      onClick={() => setToolsDropdownOpen(false)}
                      className={`flex items-start gap-2.5 p-2.5 rounded-lg text-left transition-colors ${
                        pathname.startsWith('/lexicon') ? 'bg-paper-200/80 text-roast-950' : 'hover:bg-paper-100 text-roast-800'
                      }`}
                    >
                      <BookOpen className="w-4 h-4 text-cherry-700 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-serif font-bold text-xs">Kamus Kopi SCA-ID</div>
                        <div className="font-sans text-[11px] text-roast-500 leading-tight mt-0.5">
                          60+ istilah resmi dengan audio pelafalan
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/flashcards"
                      onClick={() => setToolsDropdownOpen(false)}
                      className={`flex items-start gap-2.5 p-2.5 rounded-lg text-left transition-colors ${
                        pathname.startsWith('/flashcards') ? 'bg-paper-200/80 text-roast-950' : 'hover:bg-paper-100 text-roast-800'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-cherry-700 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-serif font-bold text-xs">Flashcards Pengingat</div>
                        <div className="font-sans text-[11px] text-roast-500 leading-tight mt-0.5">
                          Latihan berkala sistem Spaced Repetition
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Komunitas Dropdown */}
            <div
              ref={communityRef}
              className="relative"
              onMouseEnter={() => setCommunityDropdownOpen(true)}
              onMouseLeave={() => setCommunityDropdownOpen(false)}
            >
              <button
                onClick={() => setCommunityDropdownOpen(!communityDropdownOpen)}
                className={`text-xs uppercase tracking-wider font-semibold transition-all relative py-1 flex items-center gap-1 ${
                  isCommunityActive
                    ? 'text-cherry-800 font-bold'
                    : 'text-roast-700 hover:text-roast-950'
                }`}
              >
                <span>Komunitas</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${communityDropdownOpen ? 'rotate-180' : ''}`} />
                {isCommunityActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cherry-700" />
                )}
              </button>

              {communityDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50 origin-top-left animate-in fade-in zoom-in-95 slide-in-from-top-1 duration-150 ease-out-strong">
                  <div className="bg-paper-50 rounded-xl border border-paper-300 shadow-card p-2 space-y-1">
                    <Link
                      href="/forum"
                      onClick={() => setCommunityDropdownOpen(false)}
                      className={`flex items-start gap-2.5 p-2.5 rounded-lg text-left transition-colors ${
                        pathname.startsWith('/forum') ? 'bg-paper-200/80 text-roast-950' : 'hover:bg-paper-100 text-roast-800'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4 text-roast-700 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-serif font-bold text-xs">Forum Diskusi</div>
                        <div className="font-sans text-[11px] text-roast-500 leading-tight mt-0.5">
                          Tanya jawab teknis seduh & sangrai
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/jobs"
                      onClick={() => setCommunityDropdownOpen(false)}
                      className={`flex items-start gap-2.5 p-2.5 rounded-lg text-left transition-colors ${
                        pathname.startsWith('/jobs') ? 'bg-paper-200/80 text-roast-950' : 'hover:bg-paper-100 text-roast-800'
                      }`}
                    >
                      <Briefcase className="w-4 h-4 text-roast-700 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-serif font-bold text-xs">Bursa Kerja Barista</div>
                        <div className="font-sans text-[11px] text-roast-500 leading-tight mt-0.5">
                          Peluang karier di specialty coffee shop
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/leaderboard"
                      onClick={() => setCommunityDropdownOpen(false)}
                      className={`flex items-start gap-2.5 p-2.5 rounded-lg text-left transition-colors ${
                        pathname.startsWith('/leaderboard') ? 'bg-paper-200/80 text-roast-950' : 'hover:bg-paper-100 text-roast-800'
                      }`}
                    >
                      <Trophy className="w-4 h-4 text-roast-700 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-serif font-bold text-xs">Papan Peringkat</div>
                        <div className="font-sans text-[11px] text-roast-500 leading-tight mt-0.5">
                          Apresiasi pembelajar paling tekun
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Tentang Kami */}
            <Link
              href="/about"
              className={`text-xs uppercase tracking-wider font-semibold transition-all relative py-1 ${
                pathname.startsWith('/about')
                  ? 'text-cherry-800 font-bold'
                  : 'text-roast-700 hover:text-roast-950'
              }`}
            >
              Tentang Kami
              {pathname.startsWith('/about') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cherry-700" />
              )}
            </Link>
          </nav>

          {/* Right Status & Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {isAuthenticated ? (
              <>
                {/* Unified Sleek Stats Pill (Streak + XP in One Compact Badge) */}
                <div
                  className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-paper-100/90 border border-paper-300 text-roast-900 text-xs font-mono shadow-2xs"
                  title={`${currentUser.streak_count} hari berturut-turut | ${currentUser.xp_points} XP`}
                >
                  <div className="flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-crema-600 fill-crema-500" />
                    <span className="font-bold">{currentUser.streak_count}d</span>
                  </div>
                  <span className="text-paper-400 select-none">•</span>
                  <div className="flex items-center gap-1">
                    <Zap className="w-3 h-3 text-cherry-700 fill-cherry-700" />
                    <span className="font-bold">{currentUser.xp_points}</span>
                    <span className="text-[10px] text-roast-500 font-sans">XP</span>
                  </div>
                </div>

                {/* Bookmark Link */}
                <Link
                  href="/profile?tab=bookmarks"
                  className="relative hidden sm:block p-1.5 text-roast-600 hover:text-roast-950 hover:bg-paper-200/50 rounded-md transition-colors"
                  title="Materi Disimpan"
                >
                  <Bookmark className="w-4 h-4" />
                  {userBookmarks.length > 0 && (
                    <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-cherry-700 rounded-full" />
                  )}
                </Link>

                {/* Certificate Link */}
                <Link
                  href="/certificates"
                  className="p-1.5 text-roast-600 hover:text-roast-950 hover:bg-paper-200/50 rounded-md transition-colors hidden sm:block"
                  title="Koleksi Sertifikat"
                >
                  <Award className="w-4 h-4" />
                </Link>

                {/* Admin Console Quick Button */}
                {currentUser.role === 'admin' && (
                  <Link
                    href="/admin"
                    className="px-2.5 py-1 bg-roast-950 hover:bg-roast-900 text-paper-50 font-mono text-[10px] uppercase font-bold tracking-wider rounded-md transition-colors hidden sm:flex items-center gap-1 border border-roast-800"
                    title="Buka Konsol Pengelola & Tim Internal"
                  >
                    <span>ADMIN</span>
                  </Link>
                )}

                <div className="h-5 w-px bg-paper-300 mx-0.5 hidden sm:block" />

                {/* Auth Profile & Sign Out */}
                <div className="flex items-center gap-1.5">
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-paper-300 bg-white hover:border-roast-400 transition-colors"
                    title="Profil Saya"
                  >
                    <UserCircle2 className="w-4 h-4 text-roast-600" />
                    <span className="text-xs font-bold text-roast-950 hidden lg:block max-w-[95px] truncate">
                      {currentUser.name.split(' ')[0]}
                    </span>
                  </Link>
                  <button
                    onClick={async () => {
                      await signOut();
                      router.push('/login');
                    }}
                    className="p-1.5 text-roast-500 hover:text-cherry-700 hover:bg-cherry-50 rounded-md transition-colors"
                    title="Keluar"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </>
            ) : (
              /* Guest Actions (Masuk & Daftar) */
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-paper-400 bg-paper-100 hover:bg-paper-200 text-roast-900 font-bold text-xs transition-colors"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Masuk</span>
                </Link>
                <Link
                  href="/register"
                  className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-roast-950 hover:bg-roast-850 text-white font-bold text-xs transition-colors shadow-2xs"
                >
                  <span>Daftar Akun</span>
                </Link>
              </div>
            )}

            {/* Mobile Burger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 text-roast-800 hover:bg-paper-200 rounded-md"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-paper-300 bg-paper-50 px-5 py-5 space-y-4 max-h-[80vh] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200 ease-out-strong">
          {isAuthenticated ? (
            /* User Info & Stats Strip on Mobile */
            <div className="p-3 bg-paper-100 rounded-xl border border-paper-300 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <UserCircle2 className="w-5 h-5 text-roast-700" />
                  <div>
                    <div className="text-xs font-bold text-roast-950 leading-tight">
                      {currentUser.name}
                    </div>
                    <div className="text-[10px] font-mono text-roast-500 uppercase">
                      {currentUser.role === 'admin' ? 'Administrator' : currentUser.coffee_role || 'Pembelajar'}
                    </div>
                  </div>
                </div>
                <button
                  onClick={async () => {
                    await signOut();
                    setIsMobileMenuOpen(false);
                    router.push('/login');
                  }}
                  className="flex items-center gap-1 text-[11px] font-mono text-roast-700 hover:text-roast-950 px-2.5 py-1 bg-paper-100 hover:bg-paper-200 border border-paper-300 rounded font-semibold"
                >
                  <LogOut className="w-3 h-3" />
                  <span>Keluar</span>
                </button>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-paper-200">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-paper-300 text-roast-800 text-xs font-mono">
                  <Flame className="w-3.5 h-3.5 text-crema-600 fill-crema-500" />
                  <span className="font-bold">{currentUser.streak_count}d streak</span>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-paper-300 text-roast-900 text-xs font-mono">
                  <Zap className="w-3 h-3 text-cherry-700 fill-cherry-700" />
                  <span className="font-bold">{currentUser.xp_points}</span>
                  <span className="text-[10px] text-roast-500">XP</span>
                </div>
              </div>
            </div>
          ) : (
            /* Guest Welcome Banner on Mobile */
            <div className="p-4 bg-paper-100 rounded-xl border border-paper-300 space-y-2.5">
              <p className="text-xs text-roast-700 leading-relaxed">
                Bergabunglah dengan akademi kopi CherryEdu untuk menyimpan progres kurikulum, koleksi sertifikat, dan kalibrasi seduh.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 py-2 text-center text-xs font-bold rounded-lg border border-paper-300 bg-white text-roast-950 hover:bg-paper-200"
                >
                  Masuk
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 py-2 text-center text-xs font-bold rounded-lg bg-roast-950 text-white hover:bg-roast-850"
                >
                  Daftar Akun
                </Link>
              </div>
            </div>
          )}

          {/* Group 1: Kurikulum & Pembelajaran */}
          <div className="space-y-1">
            <span className="font-mono text-[9px] uppercase tracking-widest text-roast-400 block font-bold px-1">
              PROGRAM & MATERI
            </span>
            <Link
              href="/paths"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-lg text-roast-900 hover:bg-paper-100 text-sm font-bold"
            >
              <BookOpen className="w-4 h-4 text-cherry-700" />
              <span>Katalog Kurikulum & Silabus</span>
            </Link>
            <Link
              href="/onboarding"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-lg text-roast-800 hover:bg-paper-100 text-xs font-medium"
            >
              <Compass className="w-4 h-4 text-roast-500" />
              <span>Panduan Penentuan Jalur Belajar</span>
            </Link>
          </div>

          {/* Group 2: Alat & Riset */}
          <div className="space-y-1 pt-2 border-t border-paper-200">
            <span className="font-mono text-[9px] uppercase tracking-widest text-roast-400 block font-bold px-1">
              ALAT & RISET KOPI
            </span>
            <Link
              href="/tools"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-lg text-roast-900 hover:bg-paper-100 text-sm font-bold"
            >
              <Coffee className="w-4 h-4 text-cherry-700" />
              <span>Laboratorium Alat Seduh (15 Instrumen)</span>
            </Link>
            <Link
              href="/tools?tab=cupping-sheet"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-lg text-roast-800 hover:bg-paper-100 text-xs font-medium"
            >
              <ClipboardCheck className="w-4 h-4 text-cherry-700" />
              <span>SCA Cupping Sheet (Standar CVA)</span>
            </Link>
            <Link
              href="/open-data"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-lg text-roast-800 hover:bg-paper-100 text-xs font-medium"
            >
              <Layers className="w-4 h-4 text-blue-700" />
              <span>Dashboard Data Terbuka Nasional</span>
            </Link>
            <Link
              href="/pustaka"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-lg text-roast-800 hover:bg-paper-100 text-xs font-medium"
            >
              <Library className="w-4 h-4 text-cherry-700" />
              <span>Daftar Pustaka & Literatur Resmi</span>
            </Link>
            <Link
              href="/lexicon"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-lg text-roast-800 hover:bg-paper-100 text-xs font-medium"
            >
              <BookOpen className="w-4 h-4 text-roast-500" />
              <span>Kamus Kopi SCA-ID (Audio Lexicon)</span>
            </Link>
            <Link
              href="/flashcards"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-lg text-roast-800 hover:bg-paper-100 text-xs font-medium"
            >
              <Sparkles className="w-4 h-4 text-roast-500" />
              <span>Flashcards Spaced Repetition</span>
            </Link>
          </div>

          {/* Group 3: Komunitas */}
          <div className="space-y-1 pt-2 border-t border-paper-200">
            <span className="font-mono text-[9px] uppercase tracking-widest text-roast-400 block font-bold px-1">
              KOMUNITAS & KARIER
            </span>
            <Link
              href="/forum"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-lg text-roast-900 hover:bg-paper-100 text-sm font-bold"
            >
              <MessageSquare className="w-4 h-4 text-roast-700" />
              <span>Forum Diskusi Barista</span>
            </Link>
            <Link
              href="/jobs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-lg text-roast-800 hover:bg-paper-100 text-xs font-medium"
            >
              <Briefcase className="w-4 h-4 text-roast-500" />
              <span>Bursa Kerja Kopi</span>
            </Link>
            <Link
              href="/leaderboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2 rounded-lg text-roast-800 hover:bg-paper-100 text-xs font-medium"
            >
              <Trophy className="w-4 h-4 text-roast-500" />
              <span>Papan Peringkat</span>
            </Link>
          </div>

          {/* Group 4: Profil & Lembaga */}
          <div className="pt-2 border-t border-paper-200 flex flex-col gap-1.5 text-xs">
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2 rounded text-roast-800 hover:bg-paper-100 font-semibold"
            >
              <Info className="w-4 h-4 text-roast-500" />
              <span>Tentang Kami (Cherry Roastery)</span>
            </Link>
            {isAuthenticated && (
              <>
                <Link
                  href="/profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2 rounded text-roast-800 hover:bg-paper-100 font-semibold"
                >
                  <UserCircle2 className="w-4 h-4 text-cherry-700" />
                  <span>Profil & Portofolio Saya</span>
                </Link>
                <Link
                  href="/profile?tab=bookmarks"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2 rounded text-roast-700 hover:bg-paper-100"
                >
                  <Bookmark className="w-4 h-4" />
                  <span>Materi Disimpan {userBookmarks.length > 0 ? `(${userBookmarks.length})` : ''}</span>
                </Link>
                <Link
                  href="/certificates"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2 rounded text-roast-700 hover:bg-paper-100"
                >
                  <Award className="w-4 h-4" />
                  <span>Koleksi Sertifikat</span>
                </Link>
                {currentUser.role === 'admin' && (
                  <Link
                    href="/admin"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 p-2 rounded text-roast-900 bg-paper-200 font-mono font-bold border border-paper-300 mt-1"
                  >
                    <ShieldCheck className="w-4 h-4 text-cherry-700" />
                    <span>Konsol Pengelola Admin</span>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
