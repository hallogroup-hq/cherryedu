'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { useCherryEdu } from '@/lib/store';
import {
  LayoutDashboard,
  BarChart3,
  BookOpen,
  Users,
  Award,
  Briefcase,
  MessageSquare,
  Settings,
  Bell,
  LogOut,
  ChevronRight,
  Menu,
  X,
  Users2,
  Palette,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  badge?: number;
  children?: { href: string; label: string }[];
}

const navItems: NavItem[] = [
  { href: '/admin', label: 'Overview', icon: LayoutDashboard },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  {
    href: '/admin/curriculum',
    label: 'Kurikulum',
    icon: BookOpen,
    children: [
      { href: '/admin/curriculum', label: 'Learning Paths' },
      { href: '/admin/curriculum/lessons', label: 'Lesson Editor' },
      { href: '/admin/curriculum/quizzes', label: 'Quiz Builder' },
    ],
  },
  { href: '/admin/collaborators', label: 'Kolaborator', icon: Users2 },
  { href: '/admin/pages', label: 'Page Builder', icon: Palette },
  { href: '/admin/users', label: 'Users', icon: Users },
  { href: '/admin/certificates', label: 'Sertifikat', icon: Award },
  { href: '/admin/jobs', label: 'Jobs', icon: Briefcase },
  { href: '/admin/forum', label: 'Forum', icon: MessageSquare },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading: authLoading, signOut } = useAuth();
  const { currentUser, isAuthenticated } = useCherryEdu();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState<string[]>(['/admin/curriculum']);
  const [notifOpen, setNotifOpen] = useState(false);

  const toggleExpanded = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href) ? prev.filter((h) => h !== href) : [...prev, href]
    );
  };

  const isActive = (href: string) => {
    if (href === '/admin') return pathname === '/admin';
    return pathname.startsWith(href);
  };

  const handleSignOut = async () => {
    await signOut();
    router.push('/login');
  };

  // 1. Loading State
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#F5F3EE] flex items-center justify-center p-4">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-roast-900 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-mono text-roast-700 uppercase tracking-widest font-semibold">
            Memverifikasi Hak Akses Administrator...
          </span>
        </div>
      </div>
    );
  }

  // 2. Unauthenticated Barrier
  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-[#F5F3EE] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white border border-paper-400 p-8 text-center rounded-2xl shadow-elevated">
          <div className="w-14 h-14 bg-cherry-50 text-cherry-700 rounded-full flex items-center justify-center mx-auto mb-4 border border-cherry-200">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 font-bold block mb-2">
            [ KONSOL PENGELOLA CHERRYEDU ]
          </span>
          <h2 className="font-serif font-bold text-2xl text-roast-950 mb-2">
            Akses Terbatas Administrator
          </h2>
          <p className="text-xs text-roast-600 leading-relaxed mb-6 font-sans">
            Panel ini hanya dapat diakses oleh tim pengelola kurikulum, roastery, dan administrator CherryEdu. Silakan masuk dengan akun resmi Anda.
          </p>
          <div className="space-y-2.5">
            <Link
              href="/login?redirect=/admin"
              className="block w-full py-3 bg-roast-950 hover:bg-roast-850 text-white font-bold text-xs rounded-lg transition shadow-xs text-center"
            >
              Masuk sebagai Administrator
            </Link>
            <Link
              href="/"
              className="block w-full py-2.5 text-xs text-roast-600 hover:text-roast-950 transition font-mono text-center"
            >
              ← Kembali ke Halaman Utama
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 3. Unauthorized Role Barrier (Logged in as student/barista/learner)
  if (currentUser.role !== 'admin') {
    return (
      <div className="min-h-screen bg-[#F5F3EE] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white border border-paper-400 p-8 text-center rounded-2xl shadow-elevated">
          <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-200">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 font-bold block mb-2">
            [ 403 AKSES DITOLAK ]
          </span>
          <h2 className="font-serif font-bold text-2xl text-roast-950 mb-2">
            Hak Akses Tidak Mencukupi
          </h2>
          <p className="text-xs text-roast-600 leading-relaxed mb-6 font-sans">
            Anda saat ini masuk sebagai <strong className="text-roast-950">{currentUser.name}</strong> ({currentUser.coffee_role || currentUser.role}). Akun Anda tidak memiliki izin untuk mengelola konsol internal ini.
          </p>
          <div className="space-y-2.5">
            <Link
              href="/"
              className="block w-full py-2.5 bg-roast-950 hover:bg-roast-850 text-white font-bold text-xs rounded-lg transition text-center"
            >
              Kembali ke Beranda
            </Link>
            <button
              onClick={handleSignOut}
              className="block w-full py-2.5 border border-paper-400 hover:bg-paper-100 text-roast-900 font-bold text-xs rounded-lg transition text-center"
            >
              Ganti Akun Lain
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F3EE] flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-60' : 'w-16'
        } flex-shrink-0 bg-roast-950 text-paper-100 flex flex-col transition-all duration-200 sticky top-0 h-screen overflow-hidden`}
      >
        {/* Brand */}
        <div className="h-14 flex items-center px-4 border-b border-roast-800 gap-3 shrink-0">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded hover:bg-roast-800 transition-colors text-paper-400 hover:text-paper-100 shrink-0"
          >
            <Menu className="w-4 h-4" />
          </button>
          {sidebarOpen && (
            <div className="min-w-0">
              <span className="font-serif font-black text-base text-paper-50 leading-none block">
                Cherry<span className="font-sans font-light text-cherry-400 text-sm">Edu</span>
              </span>
              <span className="font-mono text-[9px] text-roast-400 uppercase tracking-widest">
                Admin Panel
              </span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 space-y-0.5 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            const expanded = expandedItems.includes(item.href);

            return (
              <div key={item.href}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleExpanded(item.href)}
                      className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-md text-xs font-semibold transition-colors ${
                        active
                          ? 'bg-roast-800 text-paper-50'
                          : 'text-roast-300 hover:bg-roast-800/60 hover:text-paper-100'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      {sidebarOpen && (
                        <>
                          <span className="flex-1 text-left">{item.label}</span>
                          <ChevronRight
                            className={`w-3 h-3 transition-transform ${expanded ? 'rotate-90' : ''}`}
                          />
                        </>
                      )}
                    </button>
                    {sidebarOpen && expanded && (
                      <div className="ml-9 mt-0.5 space-y-0.5 border-l border-roast-800 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-2 py-1.5 rounded text-[11px] transition-colors ${
                              pathname === child.href
                                ? 'text-paper-50 font-bold'
                                : 'text-roast-400 hover:text-paper-100'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-2.5 py-2 rounded-md text-xs font-semibold transition-colors ${
                      active
                        ? 'bg-roast-800 text-paper-50'
                        : 'text-roast-300 hover:bg-roast-800/60 hover:text-paper-100'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {sidebarOpen && <span>{item.label}</span>}
                    {sidebarOpen && item.badge && (
                      <span className="ml-auto bg-cherry-700 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* User footer */}
        <div className="border-t border-roast-800 p-3 shrink-0">
          {sidebarOpen ? (
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-cherry-700 flex items-center justify-center text-white text-xs font-bold shrink-0">
                {user?.email?.[0]?.toUpperCase() || 'A'}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-paper-100 truncate">
                  {user?.email?.split('@')[0] || 'Admin'}
                </p>
                <p className="text-[10px] text-roast-400 font-mono">Administrator</p>
              </div>
              <button
                onClick={handleSignOut}
                className="p-1 rounded hover:bg-roast-800 text-roast-400 hover:text-paper-100 transition-colors"
                title="Logout"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleSignOut}
              className="w-full flex justify-center p-1.5 rounded hover:bg-roast-800 text-roast-400 hover:text-paper-100 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-14 bg-white border-b border-paper-200 flex items-center justify-between px-6 sticky top-0 z-20">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-roast-400">
              {navItems.find((n) => isActive(n.href))?.label || 'Admin'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="relative p-2 rounded-lg hover:bg-paper-100 text-roast-500 transition-colors"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-cherry-700 rounded-full" />
              </button>
              {notifOpen && (
                <div className="absolute right-0 top-10 w-72 bg-white rounded-xl border border-paper-200 shadow-lg z-50">
                  <div className="p-3 border-b border-paper-200 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 font-bold">
                      Notifikasi
                    </span>
                    <button
                      onClick={() => setNotifOpen(false)}
                      className="text-roast-400 hover:text-roast-700"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="p-4 text-center text-xs text-roast-400 font-mono py-8">
                    Belum ada notifikasi baru
                  </div>
                </div>
              )}
            </div>

            {/* Visit site */}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-mono border border-paper-300 rounded-md text-roast-600 hover:border-roast-400 transition-colors"
            >
              Lihat Situs →
            </a>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
