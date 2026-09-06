'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useCherryEdu } from '@/lib/store';
import { JobApplication, UserPlatformRole, CoffeeRole } from '@/lib/types';
import {
  ShieldCheck,
  Users,
  Award,
  Briefcase,
  FileCheck,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  ExternalLink,
  RotateCcw,
  MessageSquare,
  BookOpen,
  ChevronRight,
  TrendingUp,
  UserCheck,
  AlertTriangle,
  XCircle,
  Eye,
  Check,
  SlidersHorizontal,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const {
    currentUser,
    users,
    learningPaths,
    modules,
    lessons,
    quizzes,
    certificates,
    quizAttempts,
    jobListings,
    jobApplications,
    updateApplicationStatus,
    posts,
    comments,
    switchUser,
    resetAllData,
    getPathProgress,
  } = useCherryEdu();

  const [activeTab, setActiveTab] = useState<'students' | 'jobs' | 'exams' | 'curriculum'>('students');
  const [studentSearch, setStudentSearch] = useState<string>('');
  const [studentRoleFilter, setStudentRoleFilter] = useState<string>('all');
  const [jobStatusFilter, setJobStatusFilter] = useState<string>('all');
  const [selectedJobId, setSelectedJobId] = useState<string>('all');
  const [inspectedApplicant, setInspectedApplicant] = useState<JobApplication | null>(null);
  const [inspectedUser, setInspectedUser] = useState<any | null>(null);

  const isAdmin = currentUser.role === 'admin';

  // --- KPI CALCULATIONS ---
  const totalStudents = users.filter((u) => u.role === 'learner' || u.role === 'expert').length;
  const totalCertificatesIssued = certificates.length;
  const totalLessonsCount = lessons.length;
  const totalJobsCount = jobListings.length;
  const totalApplicationsCount = jobApplications.length;

  const examPassRate = useMemo(() => {
    if (quizAttempts.length === 0) return 100;
    const passed = quizAttempts.filter((a) => a.passed).length;
    return Math.round((passed / quizAttempts.length) * 100);
  }, [quizAttempts]);

  // --- STUDENT FILTERING ---
  const filteredStudents = useMemo(() => {
    return users.filter((u) => {
      if (studentRoleFilter !== 'all' && u.coffee_role !== studentRoleFilter) return false;
      if (studentSearch.trim()) {
        const q = studentSearch.toLowerCase();
        return (
          u.name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q) ||
          u.city.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [users, studentRoleFilter, studentSearch]);

  // --- JOB APPLICATIONS FILTERING ---
  const filteredApplications = useMemo(() => {
    return jobApplications.filter((app) => {
      if (jobStatusFilter !== 'all' && app.status !== jobStatusFilter) return false;
      if (selectedJobId !== 'all' && app.job_listing_id !== selectedJobId) return false;
      return true;
    });
  }, [jobApplications, jobStatusFilter, selectedJobId]);

  const handleStatusChange = (appId: string, newStatus: JobApplication['status']) => {
    updateApplicationStatus(appId, newStatus);
    if (inspectedApplicant && inspectedApplicant.id === appId) {
      setInspectedApplicant((prev) => prev ? { ...prev, status: newStatus } : null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Editorial Header Banner */}
      <div className="border-b border-paper-300 pb-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-mono text-[10px] tracking-widest text-cherry-700 font-semibold uppercase bg-cherry-50 px-2 py-0.5 border border-cherry-200 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>[ KONSOL PUSAT OPERASIONAL & BUKU INDUK AKADEMI ]</span>
              </span>
              <span className="font-mono text-[10px] text-roast-500 uppercase">
                CHERRY COFFEE ROASTERY HQ
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-roast-950 tracking-tight">
              Dashboard Pengelola & Tim Internal
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-roast-700 max-w-3xl leading-relaxed">
              Pusat kendali kurikulum kopi terpadu dari hulu ke hilir. Pantau registri buku induk siswa, evaluasi pipeline lamaran kerja mitra coffee shop, audit lembar ujian kelulusan, dan kelola integritas sertifikasi kompetensi.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
            {!isAdmin ? (
              <button
                onClick={() => switchUser('user-admin')}
                className="px-4 py-2 bg-roast-950 hover:bg-cherry-800 text-paper-50 font-mono text-xs uppercase tracking-wider font-bold transition-all border border-roast-900 shadow-xs flex items-center gap-2"
              >
                <UserCheck className="w-4 h-4 text-crema-300" />
                <span>Beralih ke Persona Admin &rarr;</span>
              </button>
            ) : (
              <span className="px-3 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-300 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                ● Administrator Aktif: {currentUser.name}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Non-Admin Warning Notice */}
      {!isAdmin && (
        <div className="mb-8 p-4 bg-amber-50/80 border border-amber-300 font-mono text-xs text-amber-950 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              Anda saat ini sedang meninjau sebagai <strong>{currentUser.name}</strong> ({currentUser.role}). Klik tombol <em>Beralih ke Persona Admin</em> di atas untuk mendapatkan hak akses kontrol penuh.
            </span>
          </div>
          <button
            onClick={() => switchUser('user-admin')}
            className="underline font-bold text-roast-950 hover:text-cherry-800 shrink-0 uppercase"
          >
            Aktifkan Mode Admin
          </button>
        </div>
      )}

      {/* Executive KPI Ledger (5 Cards) */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
        <div className="bg-paper-50 border border-paper-400 p-5 shadow-xs">
          <div className="flex items-center justify-between text-roast-500 mb-2">
            <span className="font-mono text-[10px] uppercase tracking-wider">Siswa Terdaftar</span>
            <Users className="w-4 h-4 text-roast-700" />
          </div>
          <div className="font-serif text-3xl font-black text-roast-950">
            {totalStudents}
          </div>
          <span className="font-mono text-[10px] text-roast-500 mt-1 block">
            Buku Induk Registrasi
          </span>
        </div>

        <div className="bg-paper-50 border border-paper-400 p-5 shadow-xs">
          <div className="flex items-center justify-between text-roast-500 mb-2">
            <span className="font-mono text-[10px] uppercase tracking-wider">Diploma Terbit</span>
            <Award className="w-4 h-4 text-cherry-700" />
          </div>
          <div className="font-serif text-3xl font-black text-cherry-900">
            {totalCertificatesIssued}
          </div>
          <span className="font-mono text-[10px] text-roast-500 mt-1 block">
            Kredensial Sah Publik
          </span>
        </div>

        <div className="bg-paper-50 border border-paper-400 p-5 shadow-xs">
          <div className="flex items-center justify-between text-roast-500 mb-2">
            <span className="font-mono text-[10px] uppercase tracking-wider">Pelajaran Masterclass</span>
            <BookOpen className="w-4 h-4 text-roast-700" />
          </div>
          <div className="font-serif text-3xl font-black text-roast-950">
            {totalLessonsCount}
          </div>
          <span className="font-mono text-[10px] text-emerald-800 font-bold mt-1 block">
            3 Jalur Lengkap 100%
          </span>
        </div>

        <div className="bg-paper-50 border border-paper-400 p-5 shadow-xs">
          <div className="flex items-center justify-between text-roast-500 mb-2">
            <span className="font-mono text-[10px] uppercase tracking-wider">Lamaran Barista</span>
            <Briefcase className="w-4 h-4 text-amber-700" />
          </div>
          <div className="font-serif text-3xl font-black text-roast-950">
            {totalApplicationsCount}
          </div>
          <span className="font-mono text-[10px] text-roast-500 mt-1 block">
            Di {totalJobsCount} Lowongan Kafe
          </span>
        </div>

        <div className="bg-paper-50 border border-paper-400 p-5 shadow-xs col-span-2 md:col-span-1">
          <div className="flex items-center justify-between text-roast-500 mb-2">
            <span className="font-mono text-[10px] uppercase tracking-wider">Kelulusan Ujian</span>
            <TrendingUp className="w-4 h-4 text-crema-600" />
          </div>
          <div className="font-serif text-3xl font-black text-roast-950">
            {examPassRate}%
          </div>
          <span className="font-mono text-[10px] text-roast-500 mt-1 block">
            Standar Passing 80%
          </span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-paper-300">
        <button
          onClick={() => setActiveTab('students')}
          className={`px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition-all border flex items-center gap-2 ${
            activeTab === 'students'
              ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold shadow-xs'
              : 'bg-paper-50 text-roast-700 border-paper-300 hover:border-roast-700'
          }`}
        >
          <Users className="w-3.5 h-3.5 text-cherry-600" />
          <span>[ 01 ] BUKU INDUK PESERTA DIDIK ({users.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('jobs')}
          className={`px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition-all border flex items-center gap-2 ${
            activeTab === 'jobs'
              ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold shadow-xs'
              : 'bg-paper-50 text-roast-700 border-paper-300 hover:border-roast-700'
          }`}
        >
          <Briefcase className="w-3.5 h-3.5 text-amber-600" />
          <span>[ 02 ] REVIEW LAMARAN BURSA KERJA ({jobApplications.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('exams')}
          className={`px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition-all border flex items-center gap-2 ${
            activeTab === 'exams'
              ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold shadow-xs'
              : 'bg-paper-50 text-roast-700 border-paper-300 hover:border-roast-700'
          }`}
        >
          <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>[ 03 ] LOG AUDIT UJIAN & KELULUSAN ({quizAttempts.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('curriculum')}
          className={`px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition-all border flex items-center gap-2 ${
            activeTab === 'curriculum'
              ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold shadow-xs'
              : 'bg-paper-50 text-roast-700 border-paper-300 hover:border-roast-700'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5 text-purple-600" />
          <span>[ 04 ] SILABUS & MODERASI FORUM</span>
        </button>
      </div>

      {/* TAB 1: BUKU INDUK SISWA */}
      {activeTab === 'students' && (
        <div className="space-y-6">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center bg-paper-50 border border-paper-300 p-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-roast-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari nama siswa, email, atau kota..."
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-paper-100/60 border border-paper-300 text-xs font-sans text-roast-950 focus:outline-none focus:border-roast-900"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase text-roast-500 shrink-0">Filter Peran:</span>
              <select
                value={studentRoleFilter}
                onChange={(e) => setStudentRoleFilter(e.target.value)}
                className="px-3 py-2 bg-paper-100/60 border border-paper-300 text-xs font-mono text-roast-950 focus:outline-none"
              >
                <option value="all">Semua Peran Kopi</option>
                <option value="barista">Calon Barista</option>
                <option value="home_brewer">Home Brewer</option>
                <option value="roaster">Roaster</option>
                <option value="q_grader">Q-Grader / Sensory</option>
              </select>
            </div>
          </div>

          {/* Students Ledger Table */}
          <div className="border border-paper-400 bg-paper-50 overflow-x-auto shadow-xs">
            <table className="w-full text-left border-collapse font-sans text-xs">
              <thead>
                <tr className="border-b border-paper-400 bg-paper-200/80 font-mono text-[10px] text-roast-700 uppercase tracking-wider">
                  <th className="p-3.5">NIPD / ID</th>
                  <th className="p-3.5">Peserta Didik</th>
                  <th className="p-3.5">Peran & Kota</th>
                  <th className="p-3.5 text-center">XP & Streak</th>
                  <th className="p-3.5">Progres Foundation</th>
                  <th className="p-3.5 text-center">Status Sertifikat</th>
                  <th className="p-3.5 text-right">Tindakan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-paper-200 text-roast-900">
                {filteredStudents.map((student) => {
                  const foundationProgress = getPathProgress('path-foundation');
                  const userCerts = certificates.filter((c) => c.user_id === student.id);
                  const isSelected = student.id === currentUser.id;

                  return (
                    <tr key={student.id} className="hover:bg-paper-100/60 transition-colors">
                      <td className="p-3.5 font-mono text-[10px] text-roast-500 whitespace-nowrap">
                        CHR-2026-{student.id.slice(0, 6).toUpperCase()}
                      </td>

                      <td className="p-3.5">
                        <div className="flex items-center gap-3">
                          <img
                            src={student.avatar_url}
                            alt={student.name}
                            className="w-8 h-8 rounded object-cover border border-paper-400 shrink-0 filter contrast-110"
                          />
                          <div>
                            <span className="font-serif font-bold text-sm text-roast-950 block">
                              {student.name}
                            </span>
                            <span className="font-mono text-[10px] text-roast-500 block">
                              {student.email}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="p-3.5">
                        <span className="font-mono text-[10px] uppercase font-semibold px-2 py-0.5 bg-paper-200 border border-paper-300 text-roast-800 inline-block mb-1">
                          {student.coffee_role || 'Pembelajar'}
                        </span>
                        <span className="text-[11px] text-roast-600 block">
                          {student.city}
                        </span>
                      </td>

                      <td className="p-3.5 text-center font-mono">
                        <span className="font-bold text-roast-950 block">
                          {student.xp_points} XP
                        </span>
                        <span className="text-[10px] text-crema-700 font-semibold">
                          🔥 {student.streak_count} hari
                        </span>
                      </td>

                      <td className="p-3.5">
                        <div className="w-32 space-y-1">
                          <div className="flex justify-between font-mono text-[9px] text-roast-500">
                            <span>Hulu ke Hilir</span>
                            <span className="font-bold text-roast-900">
                              {student.id === 'user-sari' ? '100%' : `${foundationProgress}%`}
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-paper-200 border border-paper-300">
                            <div
                              className="h-full bg-roast-950"
                              style={{ width: student.id === 'user-sari' ? '100%' : `${foundationProgress}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      <td className="p-3.5 text-center">
                        {userCerts.length > 0 ? (
                          <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>{userCerts.length} Diploma Terbit</span>
                          </span>
                        ) : (
                          <span className="font-mono text-[10px] text-roast-400">
                            Dalam Penyelesaian
                          </span>
                        )}
                      </td>

                      <td className="p-3.5 text-right whitespace-nowrap">
                        <button
                          onClick={() => setInspectedUser(student)}
                          className="px-2.5 py-1 bg-paper-100 hover:bg-paper-200 text-roast-800 border border-paper-300 text-[11px] font-mono transition-colors mr-2"
                        >
                          Dossier
                        </button>
                        <button
                          onClick={() => switchUser(student.id)}
                          className="px-2.5 py-1 bg-roast-950 hover:bg-cherry-800 text-paper-50 text-[11px] font-mono uppercase tracking-wider transition-colors"
                        >
                          {isSelected ? 'Aktif' : 'Login'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: REVIEW LAMARAN BURSA KERJA */}
      {activeTab === 'jobs' && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center bg-paper-50 border border-paper-300 p-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10px] uppercase text-roast-500">Filter Lowongan:</span>
              <select
                value={selectedJobId}
                onChange={(e) => setSelectedJobId(e.target.value)}
                className="px-3 py-2 bg-paper-100/60 border border-paper-300 text-xs font-mono text-roast-950 focus:outline-none"
              >
                <option value="all">Semua Lowongan Coffee Shop</option>
                {jobListings.map((j) => (
                  <option key={j.id} value={j.id}>
                    {j.company_name} — {j.title} ({j.city})
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase text-roast-500 shrink-0">Status Lamaran:</span>
              <select
                value={jobStatusFilter}
                onChange={(e) => setJobStatusFilter(e.target.value)}
                className="px-3 py-2 bg-paper-100/60 border border-paper-300 text-xs font-mono text-roast-950 focus:outline-none"
              >
                <option value="all">Semua Status</option>
                <option value="applied">Applied (Baru)</option>
                <option value="reviewed">Reviewed (Ditinjau)</option>
                <option value="shortlisted">Shortlisted (Wawancara)</option>
                <option value="hired">Hired (Diterima)</option>
                <option value="rejected">Rejected (Ditolak)</option>
              </select>
            </div>
          </div>

          {/* Applications List */}
          <div className="space-y-4">
            {filteredApplications.length > 0 ? (
              filteredApplications.map((app) => {
                const relatedJob = jobListings.find((j) => j.id === app.job_listing_id);

                return (
                  <div
                    key={app.id}
                    className="bg-paper-50 border border-paper-400 p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6"
                  >
                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[10px] text-roast-500 uppercase">
                          LAMARAN NO. {app.id.toUpperCase()} • TANGGAL: {new Date(app.applied_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                        {app.has_cherry_cert ? (
                          <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-300">
                            <ShieldCheck className="w-3 h-3 text-emerald-600" />
                            <span>Kredensial CherryEdu Terverifikasi: {app.certificate_number}</span>
                          </span>
                        ) : (
                          <span className="font-mono text-[10px] text-roast-500 bg-paper-200 px-2 py-0.5 border border-paper-300">
                            Tanpa Sertifikat Terlampir
                          </span>
                        )}
                      </div>

                      <div>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-roast-950">
                          {app.applicant_name}
                          <span className="text-xs font-sans text-roast-500 font-normal ml-2">
                            ({app.applicant_email})
                          </span>
                        </h3>
                        <p className="text-xs text-roast-700 font-sans mt-0.5">
                          Melamar untuk posisi: <strong className="text-roast-900">{relatedJob?.title || 'Barista'}</strong> di <strong className="text-cherry-800">{relatedJob?.company_name || 'Coffee Shop'}</strong> ({relatedJob?.city})
                        </p>
                      </div>

                      <div className="p-3 bg-paper-100/70 border border-paper-300 text-xs font-sans text-roast-800 leading-relaxed italic line-clamp-2">
                        &ldquo;{app.cover_letter}&rdquo;
                      </div>
                    </div>

                    {/* Status & Review Controls */}
                    <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end gap-3 shrink-0 border-t sm:border-t-0 md:border-l border-paper-300 pt-4 sm:pt-0 md:pl-6">
                      <div className="space-y-1 text-left sm:text-right">
                        <span className="font-mono text-[10px] uppercase text-roast-500 block">
                          Ubah Status Kandidat:
                        </span>
                        <select
                          value={app.status}
                          onChange={(e) => handleStatusChange(app.id, e.target.value as any)}
                          className={`font-mono text-xs font-bold uppercase tracking-wider px-3 py-1.5 border focus:outline-none ${
                            app.status === 'hired'
                              ? 'bg-emerald-100 text-emerald-900 border-emerald-400'
                              : app.status === 'shortlisted'
                              ? 'bg-crema-100 text-crema-900 border-crema-400'
                              : app.status === 'reviewed'
                              ? 'bg-blue-50 text-blue-900 border-blue-300'
                              : app.status === 'rejected'
                              ? 'bg-rose-50 text-rose-900 border-rose-300'
                              : 'bg-paper-200 text-roast-900 border-paper-400'
                          }`}
                        >
                          <option value="applied">Applied (Menunggu)</option>
                          <option value="reviewed">Reviewed (Ditinjau)</option>
                          <option value="shortlisted">Shortlisted (Wawancara)</option>
                          <option value="hired">Hired (Diterima)</option>
                          <option value="rejected">Rejected (Ditolak)</option>
                        </select>
                      </div>

                      <button
                        onClick={() => setInspectedApplicant(app)}
                        className="px-3.5 py-1.5 bg-roast-950 hover:bg-cherry-800 text-paper-50 font-mono text-[11px] uppercase tracking-wider transition-colors border border-roast-900 flex items-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Lihat Surat & Dossier</span>
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-12 text-center bg-paper-50 border border-dashed border-paper-400 text-roast-500 font-mono text-xs">
                Tidak ada data lamaran kerja yang cocok dengan filter.
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: LOG AUDIT UJIAN & KELULUSAN */}
      {activeTab === 'exams' && (
        <div className="space-y-6">
          <div className="border border-paper-400 bg-paper-50 overflow-x-auto shadow-xs">
            <table className="w-full text-left border-collapse font-sans text-xs">
              <thead>
                <tr className="border-b border-paper-400 bg-paper-200/80 font-mono text-[10px] text-roast-700 uppercase tracking-wider">
                  <th className="p-3.5">ID Pengerjaan</th>
                  <th className="p-3.5">Peserta Didik</th>
                  <th className="p-3.5">Judul Kuis / Ujian</th>
                  <th className="p-3.5 text-center">Skor Diperoleh</th>
                  <th className="p-3.5 text-center">Status Kelulusan</th>
                  <th className="p-3.5">Waktu Submit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-paper-200 text-roast-900">
                {quizAttempts.map((attempt) => {
                  const user = users.find((u) => u.id === attempt.user_id);
                  const quiz = quizzes.find((q) => q.id === attempt.quiz_id);

                  return (
                    <tr key={attempt.id} className="hover:bg-paper-100/60 transition-colors">
                      <td className="p-3.5 font-mono text-[10px] text-roast-500">
                        {attempt.id.toUpperCase()}
                      </td>

                      <td className="p-3.5">
                        <span className="font-serif font-bold text-sm text-roast-950 block">
                          {user?.name || attempt.user_id}
                        </span>
                        <span className="font-mono text-[10px] text-roast-500">
                          {user?.email}
                        </span>
                      </td>

                      <td className="p-3.5">
                        <span className="font-bold text-roast-900 block">
                          {quiz?.title || attempt.quiz_id}
                        </span>
                        <span className="font-mono text-[10px] text-roast-500">
                          Ambang Batas Minimum: {quiz?.passing_score || 80}%
                        </span>
                      </td>

                      <td className="p-3.5 text-center font-mono">
                        <span className={`text-base font-black ${
                          attempt.score >= 80 ? 'text-emerald-800' : 'text-rose-700'
                        }`}>
                          {attempt.score}%
                        </span>
                      </td>

                      <td className="p-3.5 text-center">
                        {attempt.passed ? (
                          <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 border border-emerald-300">
                            <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                            <span>LULUS UJIAN</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-rose-900 bg-rose-100 px-2.5 py-0.5 border border-rose-300">
                            <XCircle className="w-3 h-3 text-rose-700" />
                            <span>BELUM LULUS</span>
                          </span>
                        )}
                      </td>

                      <td className="p-3.5 font-mono text-[10px] text-roast-500">
                        {new Date(attempt.attempted_at).toLocaleString('id-ID')}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: KURIKULUM & MODERASI FORUM */}
      {activeTab === 'curriculum' && (
        <div className="space-y-10">
          {/* Learning Paths Status Card */}
          <div className="bg-paper-50 border border-paper-400 p-6 shadow-xs">
            <h3 className="font-serif text-xl font-bold text-roast-950 mb-4 pb-2 border-b border-paper-300">
              Integritas Silabus Kurikulum Resmi (3 Jalur)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {learningPaths.map((p) => {
                const pathModules = modules.filter((m) => m.learning_path_id === p.id);
                const pathLessons = lessons.filter((l) => pathModules.some((m) => m.id === l.module_id));

                return (
                  <div key={p.id} className="p-4 bg-paper-100 border border-paper-300 space-y-3">
                    <div className="flex justify-between items-center font-mono text-[10px]">
                      <span className="text-cherry-700 font-bold uppercase">{p.level}</span>
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold">
                        AKTIF
                      </span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-roast-950">
                      {p.title}
                    </h4>
                    <div className="space-y-1 font-mono text-xs text-roast-600">
                      <div className="flex justify-between">
                        <span>Total Modul:</span>
                        <strong className="text-roast-950">{p.total_modules} Modul</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Materi Masterclass:</span>
                        <strong className="text-emerald-800 font-bold">{pathLessons.length} Pelajaran</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Estimasi Belajar:</span>
                        <strong className="text-roast-950">{p.estimated_hours} Jam</strong>
                      </div>
                    </div>
                    <Link
                      href={`/paths/${p.slug}`}
                      className="block text-center py-1.5 bg-roast-950 text-paper-50 text-[11px] font-mono uppercase tracking-wider hover:bg-cherry-800 transition-colors mt-2"
                    >
                      Buka Halaman Silabus &rarr;
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Forum Moderation Snapshot */}
          <div className="bg-paper-50 border border-paper-400 p-6 shadow-xs">
            <h3 className="font-serif text-xl font-bold text-roast-950 mb-4 pb-2 border-b border-paper-300">
              Audit Diskusi & Wacana Komunitas Forum ({posts.length} Thread)
            </h3>
            <div className="divide-y divide-paper-200 text-xs font-sans">
              {posts.map((post) => (
                <div key={post.id} className="py-3 flex items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10px] text-cherry-700 uppercase font-semibold block">
                      [{post.category.toUpperCase()}] • Oleh {post.author_name}
                    </span>
                    <h5 className="font-serif text-base font-bold text-roast-950">
                      {post.title}
                    </h5>
                    <span className="font-mono text-[10px] text-roast-500">
                      {post.likes_count} Sukai • {post.comments_count} Tanggapan
                    </span>
                  </div>

                  <Link
                    href="/forum"
                    className="px-3 py-1.5 bg-paper-200 hover:bg-paper-300 font-mono text-[11px] text-roast-900 border border-paper-300 transition-colors shrink-0"
                  >
                    Moderasi di Forum
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* System Reset Box */}
          <div className="bg-paper-100 border border-dashed border-rose-300 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif font-bold text-rose-950 text-base">
                Reset State Database Demo Lokal (Factory Reset)
              </h4>
              <p className="text-xs text-roast-600 font-sans mt-0.5">
                Mengembalikan seluruh data akun, progres, riwayat kuis, dan lamaran kerja ke kondisi awal data seed.
              </p>
            </div>
            <button
              onClick={() => {
                if (confirm('Yakin ingin mereset seluruh data simulasi ke setelan awal pabrik?')) {
                  resetAllData();
                  alert('Data berhasil direset ke konfigurasi seed awal.');
                }
              }}
              className="px-4 py-2 bg-rose-800 hover:bg-rose-900 text-paper-50 font-mono text-xs uppercase tracking-wider font-bold shrink-0 transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Data Pabrik</span>
            </button>
          </div>
        </div>
      )}

      {/* APPLICANT DETAIL MODAL */}
      {inspectedApplicant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-roast-950/70 backdrop-blur-xs">
          <div className="bg-paper-50 border-2 border-roast-950 max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-paper-300 pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase text-cherry-700 font-bold block">
                  [ BERKAS LAMARAN KERJA RESMI ]
                </span>
                <h3 className="font-serif text-2xl font-bold text-roast-950 mt-1">
                  {inspectedApplicant.applicant_name}
                </h3>
                <span className="font-mono text-xs text-roast-600">
                  {inspectedApplicant.applicant_email} • {inspectedApplicant.applicant_coffee_role}
                </span>
              </div>
              <button
                onClick={() => setInspectedApplicant(null)}
                className="p-1 text-roast-400 hover:text-roast-950 font-mono text-sm"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs font-sans text-roast-800">
              <div>
                <span className="font-mono text-[10px] text-roast-500 uppercase font-bold block mb-1">
                  Status Kredensial Kopi:
                </span>
                {inspectedApplicant.has_cherry_cert ? (
                  <div className="p-3 bg-emerald-50 border border-emerald-300 flex items-center justify-between">
                    <span className="font-bold text-emerald-900">
                      ✓ Memiliki Sertifikat Resmi: {inspectedApplicant.certificate_number}
                    </span>
                    <Link
                      href={`/verify/che-sari-fnd-8823`}
                      target="_blank"
                      className="font-mono text-[11px] text-emerald-800 underline font-bold"
                    >
                      Buka Sertifikat &rarr;
                    </Link>
                  </div>
                ) : (
                  <div className="p-3 bg-paper-100 border border-paper-300 text-roast-600">
                    Belum melampirkan sertifikat kelulusan.
                  </div>
                )}
              </div>

              <div>
                <span className="font-mono text-[10px] text-roast-500 uppercase font-bold block mb-1">
                  Surat Pengantar (Cover Letter):
                </span>
                <div className="p-4 bg-paper-100/70 border border-paper-300 leading-relaxed text-roast-900 whitespace-pre-wrap font-sans">
                  {inspectedApplicant.cover_letter}
                </div>
              </div>

              <div className="pt-2">
                <span className="font-mono text-[10px] text-roast-500 uppercase font-bold block mb-2">
                  Tindakan Keputusan Employer:
                </span>
                <div className="flex flex-wrap gap-2">
                  {(['applied', 'reviewed', 'shortlisted', 'hired', 'rejected'] as JobApplication['status'][]).map((st) => (
                    <button
                      key={st}
                      onClick={() => handleStatusChange(inspectedApplicant.id, st)}
                      className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider font-bold border transition-colors ${
                        inspectedApplicant.status === st
                          ? 'bg-roast-950 text-paper-50 border-roast-950 shadow-xs'
                          : 'bg-paper-100 text-roast-700 border-paper-300 hover:border-roast-700'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-paper-300 flex justify-end">
              <button
                onClick={() => setInspectedApplicant(null)}
                className="px-5 py-2 bg-roast-950 text-paper-50 font-mono text-xs uppercase tracking-wider font-bold"
              >
                Tutup Berkas
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STUDENT DOSSIER MODAL */}
      {inspectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-roast-950/70 backdrop-blur-xs">
          <div className="bg-paper-50 border-2 border-roast-950 max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-start justify-between border-b border-paper-300 pb-4">
              <div className="flex items-center gap-4">
                <img
                  src={inspectedUser.avatar_url}
                  alt={inspectedUser.name}
                  className="w-12 h-12 rounded object-cover border border-paper-400"
                />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-roast-950">
                    {inspectedUser.name}
                  </h3>
                  <span className="font-mono text-xs text-roast-500">
                    {inspectedUser.email} • {inspectedUser.city}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setInspectedUser(null)}
                className="p-1 text-roast-400 hover:text-roast-950 font-mono text-sm"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 font-sans text-xs text-roast-800">
              <div className="grid grid-cols-2 gap-3 p-3 bg-paper-100 border border-paper-300 font-mono">
                <div>
                  <span className="text-[10px] text-roast-500 uppercase block">Peran Platform</span>
                  <strong>{inspectedUser.role.toUpperCase()}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-roast-500 uppercase block">Spesialisasi Kopi</span>
                  <strong>{inspectedUser.coffee_role?.toUpperCase() || 'LEARNER'}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-roast-500 uppercase block">Total Poin XP</span>
                  <strong>{inspectedUser.xp_points} XP</strong>
                </div>
                <div>
                  <span className="text-[10px] text-roast-500 uppercase block">Streak Aktif</span>
                  <strong>{inspectedUser.streak_count} Hari</strong>
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] text-roast-500 uppercase font-bold block mb-1">
                  Bio Profil:
                </span>
                <p className="p-3 bg-paper-100/50 border border-paper-300 text-xs italic">
                  {inspectedUser.bio}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-paper-300 flex justify-between items-center">
              <button
                onClick={() => {
                  switchUser(inspectedUser.id);
                  setInspectedUser(null);
                }}
                className="px-4 py-2 bg-roast-950 hover:bg-cherry-800 text-paper-50 font-mono text-xs uppercase tracking-wider font-bold transition-colors"
              >
                Masuk Sebagai Siswa Ini
              </button>
              <button
                onClick={() => setInspectedUser(null)}
                className="px-4 py-2 bg-paper-200 text-roast-800 font-mono text-xs uppercase tracking-wider font-bold"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
