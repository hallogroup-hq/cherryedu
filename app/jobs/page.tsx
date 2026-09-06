'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCherryEdu } from '@/lib/store';
import { JobListing } from '@/lib/types';
import {
  MapPin,
  Award,
  Filter,
  Check,
  Plus,
  Clock,
  Search,
} from 'lucide-react';

export default function JobsPage() {
  const {
    currentUser,
    jobListings,
    jobApplications,
    applyForJob,
    createJobListing,
    getUserCertificates,
  } = useCherryEdu();

  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [onlyRequireCert, setOnlyRequireCert] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [applyingJob, setApplyingJob] = useState<JobListing | null>(null);
  const [coverLetter, setCoverLetter] = useState<string>('');
  const [applyStatusMessage, setApplyStatusMessage] = useState<{
    success: boolean;
    text: string;
  } | null>(null);

  const [isEmployerMode, setIsEmployerMode] = useState<boolean>(currentUser.role === 'employer');
  const [newJobTitle, setNewJobTitle] = useState<string>('');
  const [newJobCity, setNewJobCity] = useState<string>('Jakarta Selatan');
  const [newJobType, setNewJobType] = useState<'full_time' | 'part_time'>('full_time');
  const [newJobSalary, setNewJobSalary] = useState<string>('Rp 5.500.000 – Rp 7.500.000');
  const [newJobDesc, setNewJobDesc] = useState<string>('');
  const [newJobRequireCert, setNewJobRequireCert] = useState<boolean>(true);

  const userCerts = getUserCertificates(currentUser.id);
  const hasCertificate = userCerts.length > 0;

  const filteredJobs = jobListings.filter((job) => {
    if (selectedCity !== 'all' && job.city !== selectedCity) return false;
    if (selectedRole !== 'all' && job.role_type !== selectedRole) return false;
    if (onlyRequireCert && !job.requires_certificate) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        job.title.toLowerCase().includes(q) ||
        job.company_name.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyingJob) return;

    const res = applyForJob(applyingJob.id, coverLetter);
    setApplyStatusMessage({ success: res.success, text: res.message });

    if (res.success) {
      setTimeout(() => {
        setApplyingJob(null);
        setCoverLetter('');
        setApplyStatusMessage(null);
      }, 2000);
    }
  };

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    createJobListing({
      company_name: currentUser.name,
      title: newJobTitle,
      description: newJobDesc,
      location: `${newJobCity}, Indonesia`,
      city: newJobCity,
      job_type: newJobType,
      role_type: 'barista',
      salary_range: newJobSalary,
      requires_certificate: newJobRequireCert,
      is_active: true,
      expires_at: new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString(),
    });

    setNewJobTitle('');
    setNewJobDesc('');
    alert('Lowongan pekerjaan baru berhasil diterbitkan!');
  };

  const userApplications = jobApplications.filter((a) => a.applicant_id === currentUser.id);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-paper-300">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-cherry-800 font-bold block mb-2">
            BURSA KARIER INDUSTRI KOPI
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-roast-950 tracking-tight">
            Lowongan Barista & Roastery
          </h1>
          <p className="mt-3 text-sm text-roast-700 max-w-2xl leading-relaxed">
            Menghubungkan lulusan terakreditasi CherryEdu dengan roastery dan coffee shop terkemuka. Kredensial sertifikat Anda langsung menjadi pertimbangan utama perekrutan.
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center gap-1 bg-paper-100 p-1 rounded border border-paper-300 self-start md:self-auto shrink-0 font-mono text-xs">
          <button
            onClick={() => setIsEmployerMode(false)}
            className={`px-3.5 py-1.5 rounded transition-all uppercase tracking-wider ${
              !isEmployerMode
                ? 'bg-roast-950 text-paper-50 font-bold shadow-subtle'
                : 'text-roast-600 hover:text-roast-950'
            }`}
          >
            Pencari Kerja
          </button>
          <button
            onClick={() => setIsEmployerMode(true)}
            className={`px-3.5 py-1.5 rounded transition-all uppercase tracking-wider ${
              isEmployerMode
                ? 'bg-roast-950 text-paper-50 font-bold shadow-subtle'
                : 'text-roast-600 hover:text-roast-950'
            }`}
          >
            Mode Coffee Shop
          </button>
        </div>
      </div>

      {!isEmployerMode ? (
        /* Job Seeker View */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-4 space-y-6 bg-white p-6 rounded-xl border border-paper-300 shadow-subtle h-fit">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-roast-500 pb-3 border-b border-paper-200 flex items-center justify-between">
              <span>FILTER LOWONGAN</span>
              <Filter className="w-3.5 h-3.5" />
            </div>

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-roast-700 font-bold mb-1.5">
                Kota Penempatan
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full text-xs p-2.5 rounded border border-paper-300 bg-paper-50 font-mono"
              >
                <option value="all">Semua Wilayah</option>
                <option value="Jakarta Selatan">Jakarta Selatan</option>
                <option value="Bandung">Bandung</option>
                <option value="Bali">Bali (Seminyak/Canggu)</option>
                <option value="Surabaya">Surabaya</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-roast-700 font-bold mb-1.5">
                Posisi
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full text-xs p-2.5 rounded border border-paper-300 bg-paper-50 font-mono"
              >
                <option value="all">Semua Posisi</option>
                <option value="barista">Barista Bar</option>
                <option value="roaster">Roaster</option>
                <option value="manager">Head of Bar / Manager</option>
              </select>
            </div>

            <label className="flex items-start gap-2.5 p-3 rounded bg-paper-100/70 border border-paper-300 text-xs text-roast-800 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyRequireCert}
                onChange={(e) => setOnlyRequireCert(e.target.checked)}
                className="mt-0.5 accent-roast-950 w-3.5 h-3.5"
              />
              <span className="leading-relaxed font-medium">
                Khusus yang mensyaratkan <strong>Sertifikat CherryEdu</strong>
              </span>
            </label>

            {/* Credential Status */}
            <div className="pt-4 border-t border-paper-200">
              <span className="font-mono text-[10px] text-roast-400 uppercase tracking-widest font-bold block mb-2">
                STATUS KREDENSIAL ANDA
              </span>
              {hasCertificate ? (
                <div className="p-3 rounded bg-paper-100 border border-paper-300 text-roast-900 text-xs font-mono">
                  <div className="flex items-center gap-1.5 font-bold text-cherry-800">
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{userCerts[0].certificate_number}</span>
                  </div>
                  <span className="text-[10px] text-roast-500 block mt-1">
                    Sertifikat aktif & otomatis dilampirkan
                  </span>
                </div>
              ) : (
                <div className="p-3 rounded bg-paper-100 border border-paper-200 text-xs text-roast-600 font-sans">
                  Belum memiliki sertifikat. Selesaikan Foundation Layer untuk membuka prioritas seleksi.
                </div>
              )}
            </div>
          </div>

          {/* Listings */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-roast-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Cari posisi, nama cafe, atau lokasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded border border-paper-300 bg-white focus:outline-hidden focus:border-roast-900"
              />
            </div>

            <div className="space-y-4">
              {filteredJobs.map((job) => {
                const hasApplied = userApplications.some((a) => a.job_listing_id === job.id);

                return (
                  <div
                    key={job.id}
                    className="bg-white rounded-xl border border-paper-300 p-6 shadow-subtle hover:border-roast-400 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                        <div className="flex items-start gap-4">
                          <img
                            src={job.company_logo || 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=120'}
                            alt={job.company_name}
                            className="w-12 h-12 rounded-lg object-cover border border-paper-300 shrink-0"
                          />
                          <div>
                            <span className="font-mono text-[11px] uppercase tracking-wider text-cherry-800 font-bold">
                              {job.company_name}
                            </span>
                            <h3 className="font-serif font-bold text-lg text-roast-950 mt-0.5">
                              {job.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-roast-500 mt-1">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5" />
                                {job.location} ({job.city})
                              </span>
                              <span>•</span>
                              <span>{job.job_type === 'full_time' ? 'Full Time' : 'Part Time'}</span>
                              <span>•</span>
                              <span className="font-bold text-roast-900">{job.salary_range}</span>
                            </div>
                          </div>
                        </div>

                        {job.requires_certificate && (
                          <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-cherry-50 border border-cherry-200 text-cherry-800 font-bold self-start">
                            Wajib Sertifikat CherryEdu
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-roast-700 leading-relaxed line-clamp-3 mb-4 font-normal">
                        {job.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-paper-200 flex items-center justify-between">
                      <span className="font-mono text-[10px] text-roast-400">
                        Tayang: {new Date(job.created_at).toLocaleDateString('id-ID')}
                      </span>

                      {hasApplied ? (
                        <span className="font-mono text-xs font-bold text-emerald-800 flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" />
                          <span>Lamaran Terkirim</span>
                        </span>
                      ) : (
                        <button
                          onClick={() => setApplyingJob(job)}
                          className="px-4 py-2 bg-roast-950 hover:bg-cherry-800 text-paper-50 rounded font-sans text-xs uppercase tracking-wider font-bold transition-colors shadow-subtle"
                        >
                          Lamar Posisi Ini (+20 XP)
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Employer Mode View */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-paper-300 shadow-subtle space-y-4">
            <h3 className="font-serif font-bold text-lg text-roast-950 pb-2 border-b border-paper-200">
              Pasang Lowongan Baru
            </h3>

            <form onSubmit={handlePostJob} className="space-y-3 font-sans text-xs">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-wider text-roast-600 block mb-1 font-bold">
                  Judul Pekerjaan
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Senior Barista & Manual Brew"
                  value={newJobTitle}
                  onChange={(e) => setNewJobTitle(e.target.value)}
                  className="w-full p-2.5 rounded border border-paper-300 bg-paper-50"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-wider text-roast-600 block mb-1 font-bold">
                  Kota Penempatan
                </label>
                <select
                  value={newJobCity}
                  onChange={(e) => setNewJobCity(e.target.value)}
                  className="w-full p-2.5 rounded border border-paper-300 bg-paper-50 font-mono"
                >
                  <option value="Jakarta Selatan">Jakarta Selatan</option>
                  <option value="Bandung">Bandung</option>
                  <option value="Bali">Bali</option>
                  <option value="Surabaya">Surabaya</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-wider text-roast-600 block mb-1 font-bold">
                  Kisaran Gaji
                </label>
                <input
                  type="text"
                  required
                  value={newJobSalary}
                  onChange={(e) => setNewJobSalary(e.target.value)}
                  className="w-full p-2.5 rounded border border-paper-300 bg-paper-50 font-mono"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-wider text-roast-600 block mb-1 font-bold">
                  Deskripsi Kualifikasi
                </label>
                <textarea
                  rows={3}
                  required
                  value={newJobDesc}
                  onChange={(e) => setNewJobDesc(e.target.value)}
                  className="w-full p-2.5 rounded border border-paper-300 bg-paper-50"
                />
              </div>

              <label className="flex items-center gap-2 p-2.5 rounded bg-paper-100 border border-paper-300 text-roast-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newJobRequireCert}
                  onChange={(e) => setNewJobRequireCert(e.target.checked)}
                  className="accent-roast-950"
                />
                <span className="font-semibold">Wajib memiliki Sertifikat CherryEdu</span>
              </label>

              <button
                type="submit"
                className="w-full py-2.5 bg-roast-950 hover:bg-roast-900 text-paper-50 font-mono text-xs uppercase tracking-wider font-bold rounded transition-colors shadow-subtle mt-2"
              >
                Terbitkan Lowongan
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-paper-300 shadow-subtle space-y-4">
            <h3 className="font-serif font-bold text-lg text-roast-950 pb-2 border-b border-paper-200 flex items-center justify-between">
              <span>Daftar Pelamar Masuk ({jobApplications.length})</span>
              <span className="font-mono text-xs text-roast-500 font-normal">
                {currentUser.name}
              </span>
            </h3>

            {jobApplications.length > 0 ? (
              <div className="space-y-3">
                {jobApplications.map((app) => (
                  <div
                    key={app.id}
                    className="p-4 rounded-lg border border-paper-200 bg-paper-100/50 space-y-2 text-xs"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-bold text-roast-950 text-sm block">
                          {app.applicant_name}
                        </span>
                        <span className="text-roast-500 font-mono">{app.applicant_email}</span>
                      </div>
                      {app.has_cherry_cert ? (
                        <span className="font-mono text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-300">
                          CERTIFIED ({app.certificate_number})
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-roast-400">Belum Bersertifikat</span>
                      )}
                    </div>

                    <p className="p-3 bg-white rounded border border-paper-200 text-roast-800 italic leading-relaxed">
                      "{app.cover_letter}"
                    </p>

                    <div className="flex justify-between font-mono text-[10px] text-roast-400 pt-1">
                      <span>Dilamar: {new Date(app.applied_at).toLocaleString('id-ID')}</span>
                      <span className="uppercase text-cherry-800 font-bold">Status: {app.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-roast-400 font-mono text-xs">
                Belum ada pelamar baru yang masuk ke lowongan ini.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Apply Modal */}
      {applyingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-roast-950/80 backdrop-blur-xs">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-diploma border border-paper-300 relative">
            <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-800 font-bold block mb-1">
              SURAT LAMARAN PEKERJAAN
            </span>
            <h3 className="font-serif font-bold text-xl text-roast-950 mb-1">
              {applyingJob.title}
            </h3>
            <span className="text-xs text-roast-600 block mb-4">
              Coffee Shop: <strong>{applyingJob.company_name}</strong> ({applyingJob.city})
            </span>

            {applyStatusMessage && (
              <div
                className={`mb-4 p-3 rounded font-mono text-xs font-bold ${
                  applyStatusMessage.success
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                    : 'bg-rose-50 text-rose-800 border border-rose-300'
                }`}
              >
                {applyStatusMessage.text}
              </div>
            )}

            <form onSubmit={handleApplySubmit} className="space-y-4 text-xs font-sans">
              <div className="bg-paper-100 p-3 rounded border border-paper-300 space-y-1 font-mono text-xs">
                <span className="font-bold text-roast-950 block">Identitas Pelamar:</span>
                <div>Nama: <strong>{currentUser.name}</strong></div>
                <div>Email: {currentUser.email}</div>
                <div className="pt-1 border-t border-paper-300 text-cherry-800 font-bold">
                  Sertifikat: {hasCertificate ? userCerts[0].certificate_number : 'Belum Ada (Foundation Belum Selesai)'}
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-700 font-bold mb-1">
                  Surat Pengantar (Cover Letter)
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Jelaskan keahlian seduh Anda, pemahaman ekstraksi dial-in, dan motivasi bergabung..."
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  className="w-full p-3 rounded border border-paper-300 bg-paper-50 focus:outline-hidden focus:border-roast-900"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setApplyingJob(null)}
                  className="px-4 py-2 rounded font-mono text-xs text-roast-600 hover:bg-paper-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-roast-950 hover:bg-cherry-800 text-paper-50 rounded font-sans text-xs uppercase tracking-wider font-bold transition-colors shadow-subtle"
                >
                  Kirim Lamaran
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
