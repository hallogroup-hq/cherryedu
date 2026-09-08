'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { useCherryEdu } from '@/lib/store';
import {
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Briefcase,
  MessageSquare,
  ChevronRight,
  Flame,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
} from 'lucide-react';

export default function AdminOverviewPage() {
  const {
    users,
    learningPaths,
    lessons,
    certificates,
    jobListings,
    posts,
    quizAttempts,
    currentUser,
  } = useCherryEdu();

  const isAdmin = currentUser.role === 'admin';

  const totalStudents = users.filter((u) => u.role === 'learner' || u.role === 'expert').length;
  const totalCerts = certificates.length;
  const totalLessons = lessons.length;
  const totalPaths = learningPaths.length;
  const totalJobs = jobListings.length;
  const totalPosts = posts.length;

  const examPassRate = useMemo(() => {
    if (quizAttempts.length === 0) return 100;
    const passed = quizAttempts.filter((a) => a.passed).length;
    return Math.round((passed / quizAttempts.length) * 100);
  }, [quizAttempts]);

  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <AlertTriangle className="w-10 h-10 text-crema-600 mx-auto mb-3" />
          <h2 className="font-serif font-bold text-xl text-roast-950 mb-1">Akses Ditolak</h2>
          <p className="text-sm text-roast-500">Kamu tidak punya izin untuk mengakses halaman ini.</p>
        </div>
      </div>
    );
  }

  const kpiCards = [
    {
      label: 'Total Pelajar',
      value: totalStudents,
      icon: Users,
      color: 'bg-roast-950',
      textColor: 'text-paper-50',
      iconColor: 'text-crema-400',
      href: '/admin/users',
      trend: '+12 bulan ini',
    },
    {
      label: 'Sertifikat Terbit',
      value: totalCerts,
      icon: Award,
      color: 'bg-cherry-700',
      textColor: 'text-paper-50',
      iconColor: 'text-cherry-200',
      href: '/admin/certificates',
      trend: 'Aktif & valid',
    },
    {
      label: 'Pass Rate Quiz',
      value: `${examPassRate}%`,
      icon: TrendingUp,
      color: 'bg-white',
      textColor: 'text-roast-950',
      iconColor: 'text-emerald-600',
      href: '/admin/analytics',
      trend: 'Rata-rata semua quiz',
    },
    {
      label: 'Total Materi',
      value: totalLessons,
      icon: BookOpen,
      color: 'bg-white',
      textColor: 'text-roast-950',
      iconColor: 'text-roast-600',
      href: '/admin/curriculum',
      trend: `${totalPaths} learning path`,
    },
  ];

  const quickActions = [
    {
      href: '/admin/curriculum',
      label: 'Tambah Materi Baru',
      desc: 'Buat lesson atau learning path',
      icon: BookOpen,
    },
    {
      href: '/admin/collaborators',
      label: 'Tambah Kolaborator',
      desc: 'Profil barista / champion',
      icon: Users,
    },
    {
      href: '/admin/pages',
      label: 'Edit Homepage',
      desc: 'Ubah konten halaman utama',
      icon: MessageSquare,
    },
    {
      href: '/admin/users',
      label: 'Kelola Users',
      desc: 'Lihat progress & suspend akun',
      icon: Users,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif font-black text-3xl text-roast-950 mb-1">
          Selamat Datang, Admin 👋
        </h1>
        <p className="text-sm text-roast-500">
          Berikut ringkasan aktivitas platform CherryEdu hari ini.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.href}
              href={card.href}
              className={`${card.color} rounded-xl p-5 border border-paper-200 hover:shadow-md transition-shadow group`}
            >
              <div className="flex items-start justify-between mb-3">
                <Icon className={`w-5 h-5 ${card.iconColor}`} />
                <ArrowUpRight className={`w-3.5 h-3.5 ${card.iconColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
              <p className={`font-serif font-black text-3xl ${card.textColor} mb-0.5`}>
                {card.value}
              </p>
              <p className={`font-mono text-[10px] uppercase tracking-wider ${card.textColor} opacity-70 font-bold`}>
                {card.label}
              </p>
              <p className={`text-xs mt-1.5 ${card.textColor} opacity-50`}>{card.trend}</p>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-paper-200 p-5">
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold mb-4">
              Aksi Cepat
            </h2>
            <div className="space-y-2">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={action.href}
                    href={action.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-paper-50 border border-transparent hover:border-paper-200 transition-all group"
                  >
                    <div className="w-8 h-8 bg-roast-950 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-paper-50" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-roast-950">{action.label}</p>
                      <p className="text-[11px] text-roast-400">{action.desc}</p>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-roast-300 ml-auto shrink-0 group-hover:text-roast-700 transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Platform Stats */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-paper-200 p-5 h-full">
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold mb-4">
              Ringkasan Platform
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Learning Paths', value: totalPaths, icon: Flame, note: 'Kurikulum aktif' },
                { label: 'Total Materi', value: totalLessons, icon: BookOpen, note: 'Lessons tersedia' },
                { label: 'Lowongan Aktif', value: totalJobs, icon: Briefcase, note: 'Jobs posting' },
                { label: 'Diskusi Forum', value: totalPosts, icon: MessageSquare, note: 'Total postingan' },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="p-4 bg-paper-50 rounded-lg border border-paper-200">
                    <Icon className="w-4 h-4 text-roast-400 mb-2" />
                    <p className="font-serif font-bold text-2xl text-roast-950">{stat.value}</p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-roast-400 font-bold">
                      {stat.label}
                    </p>
                    <p className="text-[11px] text-roast-400 mt-0.5">{stat.note}</p>
                  </div>
                );
              })}
            </div>

            {/* Status Banner */}
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <p className="text-xs text-emerald-800 font-medium">
                Platform berjalan normal. Semua sistem aktif.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Module Links Grid */}
      <div>
        <h2 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold mb-4">
          Modul Pengelolaan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              href: '/admin/curriculum',
              title: 'Kurikulum & Materi',
              desc: 'Kelola learning path, module, lesson, dan quiz. Tambah blok video & foto.',
              icon: BookOpen,
              badge: 'LMS',
            },
            {
              href: '/admin/collaborators',
              title: 'Kolaborator',
              desc: 'Profil barista champion, Q-Grader, dan instruktur tamu.',
              icon: Users,
              badge: 'CMS',
            },
            {
              href: '/admin/pages',
              title: 'Page Builder',
              desc: 'Edit homepage, hero section, dan halaman statis tanpa kode.',
              icon: MessageSquare,
              badge: 'CMS',
            },
            {
              href: '/admin/analytics',
              title: 'Analytics',
              desc: 'Grafik tren user, completion rate, drop-off per lesson, export CSV.',
              icon: TrendingUp,
              badge: 'DATA',
            },
            {
              href: '/admin/users',
              title: 'User Management',
              desc: 'Lihat progress, ganti role, suspend, dan reset password user.',
              icon: Users,
              badge: 'ADMIN',
            },
            {
              href: '/admin/certificates',
              title: 'Sertifikat',
              desc: 'Audit sertifikat terbit, revoke yang tidak valid, download PDF.',
              icon: Award,
              badge: 'ADMIN',
            },
          ].map((mod) => {
            const Icon = mod.icon;
            return (
              <Link
                key={mod.href}
                href={mod.href}
                className="bg-white rounded-xl border border-paper-200 p-5 hover:border-roast-400 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <Icon className="w-5 h-5 text-roast-600" />
                  <span className="font-mono text-[9px] bg-paper-100 border border-paper-300 px-1.5 py-0.5 rounded text-roast-500 font-bold uppercase tracking-wider">
                    {mod.badge}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-roast-950 mb-1">{mod.title}</h3>
                <p className="text-xs text-roast-500 leading-relaxed">{mod.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-cherry-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Buka</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
