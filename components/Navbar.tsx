'use client';

import React, { useState } from 'react';
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
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { currentUser, bookmarks } = useCherryEdu();
  const { user, signOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/paths', label: 'Kurikulum' },
    { href: '/tools', label: 'Alat Seduh' },
    { href: '/forum', label: 'Komunitas' },
    { href: '/jobs', label: 'Bursa Kerja' },
    { href: '/leaderboard', label: 'Peringkat' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-paper-50/95 backdrop-blur-md border-b border-paper-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4">
          {/* Brand Mark */}
          <Link href="/" className="flex items-center gap-3 group">
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

          {/* Center Navigation Links (Editorial Minimalist) */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs uppercase tracking-wider font-semibold transition-all relative py-1 ${
                    isActive
                      ? 'text-cherry-800 font-bold'
                      : 'text-roast-700 hover:text-roast-950'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cherry-700" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Status & Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Minimalist Streak Stamp */}
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-paper-100 border border-paper-300 text-roast-800 text-xs font-mono"
              title={`${currentUser.streak_count} hari berturut-turut`}
            >
              <Flame className="w-3.5 h-3.5 text-crema-600 fill-crema-500" />
              <span className="font-bold">{currentUser.streak_count}d</span>
            </div>

            {/* Minimalist XP Stamp */}
            <div
              className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-paper-100 border border-paper-300 text-roast-900 text-xs font-mono"
              title={`${currentUser.xp_points} XP dikumpulkan`}
            >
              <Zap className="w-3 h-3 text-roast-700 fill-roast-700" />
              <span className="font-bold">{currentUser.xp_points}</span>
              <span className="text-[10px] text-roast-500 font-sans">XP</span>
            </div>

            {/* Bookmark Link */}
            <Link
              href="/profile?tab=bookmarks"
              className="relative p-1.5 text-roast-600 hover:text-roast-950 hover:bg-paper-200/50 rounded-md transition-colors"
              title="Materi Disimpan"
            >
              <Bookmark className="w-4 h-4" />
              {bookmarks.length > 0 && (
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
                className="px-2.5 py-1 bg-cherry-700 hover:bg-cherry-800 text-white font-mono text-[10px] uppercase font-bold tracking-wider rounded-md transition-colors flex items-center gap-1 shadow-xs"
                title="Buka Konsol Pengelola & Tim Internal"
              >
                <span>[ ADMIN ]</span>
              </Link>
            )}

            <div className="h-5 w-px bg-paper-300 mx-0.5 hidden sm:block" />

            {/* Auth Section */}
            {user ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/profile"
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-paper-300 bg-white hover:border-roast-400 transition-colors"
                  title="Profil Saya"
                >
                  <UserCircle2 className="w-5 h-5 text-roast-600" />
                  <span className="text-xs font-bold text-roast-950 hidden lg:block max-w-[90px] truncate">
                    {user.user_metadata?.name?.split(' ')[0] || user.email?.split('@')[0]}
                  </span>
                </Link>
                <button
                  onClick={async () => { await signOut(); router.push('/login'); }}
                  className="p-1.5 text-roast-500 hover:text-cherry-700 hover:bg-cherry-50 rounded-md transition-colors"
                  title="Keluar"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-roast-950 hover:bg-roast-800 text-white font-bold text-xs rounded-md transition-colors"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Masuk</span>
              </Link>
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

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-paper-300 bg-paper-50 px-6 py-5 space-y-3">
          <div className="font-mono text-[10px] uppercase tracking-widest text-roast-400">
            Daftar Navigasi
          </div>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider font-bold text-roast-900 py-1.5"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-paper-300 flex flex-col gap-2 text-xs">
            <Link
              href="/onboarding"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 py-1 text-cherry-800 font-semibold"
            >
              <Compass className="w-4 h-4" />
              <span>Panduan Penentuan Jalur Belajar</span>
            </Link>
            <Link
              href="/certificates"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 py-1 text-roast-700"
            >
              <Award className="w-4 h-4" />
              <span>Sertifikat Saya</span>
            </Link>
            {currentUser.role === 'admin' && (
              <Link
                href="/admin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 py-1 text-cherry-700 font-mono font-bold"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>[ KONSOL PENGELOLA ADMIN ]</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
