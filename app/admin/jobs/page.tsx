'use client';

import { useState } from "react";
import { useCherryEdu } from '@/lib/store';
import { Check, X, Search, Plus, Trash2, Briefcase } from "lucide-react";
import { toast } from 'sonner';

export default function JobsAdminPage() {
  const { jobListings, jobApplications, createJobListing, deleteJobListing } = useCherryEdu();
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState<'listings' | 'applications'>('listings');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('Jakarta Selatan');
  const [location, setLocation] = useState('');
  const [salaryRange, setSalaryRange] = useState('Rp 5.000.000 – Rp 7.000.000');
  const [roleType, setRoleType] = useState<'barista' | 'roaster' | 'q_grader' | 'manager'>('barista');
  const [jobType, setJobType] = useState<'full_time' | 'part_time'>('full_time');
  const [requiresCert, setRequiresCert] = useState(true);
  const [description, setDescription] = useState('');

  const filtered = jobListings.filter((j) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return j.title.toLowerCase().includes(q) || j.company_name.toLowerCase().includes(q);
  });

  const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !company.trim()) {
      toast.error('Judul lowongan dan nama perusahaan wajib diisi.');
      return;
    }

    createJobListing({
      company_name: company.trim(),
      title: title.trim(),
      description: description.trim() || 'Kualifikasi barista/roaster untuk operasional specialty coffee.',
      location: location.trim() || `${city}, Indonesia`,
      city,
      job_type: jobType,
      role_type: roleType,
      salary_range: salaryRange,
      requires_certificate: requiresCert,
      is_active: true,
      expires_at: new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString(),
    });

    toast.success('Lowongan pekerjaan baru berhasil dipublikasikan!');
    setIsModalOpen(false);
    setTitle('');
    setCompany('');
    setDescription('');
    setLocation('');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-serif font-black text-2xl text-roast-950">Manajemen Jobs</h1>
          <p className="text-sm text-roast-500 mt-0.5">{jobListings.length} lowongan aktif · {jobApplications.length} lamaran masuk</p>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-roast-950 text-paper-50 rounded-lg font-mono text-xs uppercase tracking-wider font-bold hover:bg-roast-900 transition-colors shadow-xs"
        >
          <Plus className="w-3.5 h-3.5" />
          Tambah Lowongan
        </button>
      </div>

      <div className="flex items-center gap-1 border-b border-paper-200">
        {[
          { id: 'listings', label: `Lowongan (${jobListings.length})` },
          { id: 'applications', label: `Lamaran (${jobApplications.length})` },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id as 'listings' | 'applications')}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold border-b-2 transition-colors ${tab === t.id ? 'border-roast-950 text-roast-950' : 'border-transparent text-roast-400 hover:text-roast-700'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-paper-200">
        <div className="p-4 border-b border-paper-100">
          <div className="relative max-w-xs">
            <Search className="w-3.5 h-3.5 text-roast-400 absolute left-3 top-2.5" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari lowongan..."
              className="w-full pl-9 pr-3 py-2 text-xs border border-paper-200 rounded-lg focus:outline-hidden focus:border-roast-400"
            />
          </div>
        </div>

        {tab === 'listings' ? (
          <div className="divide-y divide-paper-50">
            {filtered.length > 0 ? (
              filtered.map((job) => {
                const apps = jobApplications.filter((a) => a.job_listing_id === job.id);
                return (
                  <div key={job.id} className="p-4 hover:bg-paper-50 transition-colors flex items-start gap-4">
                    <img
                      src={job.company_logo || 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=80'}
                      alt={job.company_name}
                      className="w-10 h-10 rounded-lg object-cover border border-paper-200 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`w-2 h-2 rounded-full ${job.is_active ? 'bg-emerald-500' : 'bg-roast-300'}`} />
                        <p className="font-bold text-sm text-roast-950">{job.title}</p>
                      </div>
                      <p className="text-xs text-roast-500">{job.company_name} · {job.city} · {job.job_type === 'full_time' ? 'Full Time' : 'Part Time'}</p>
                      <div className="flex items-center gap-3 mt-1.5 font-mono text-[10px] text-roast-400">
                        <span>💼 {apps.length} lamaran</span>
                        <span>💰 {job.salary_range}</span>
                        {job.requires_certificate && <span className="text-cherry-700 font-bold">⭐ Wajib Sertifikat</span>}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          if (confirm(`Hapus lowongan "${job.title}"?`)) {
                            deleteJobListing(job.id);
                            toast.info(`Lowongan "${job.title}" telah dihapus.`);
                          }
                        }}
                        className="p-1.5 rounded hover:bg-rose-50 text-roast-300 hover:text-rose-600 transition-colors"
                        title="Hapus Lowongan"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-12 text-center text-roast-500 font-mono text-xs space-y-2">
                <Briefcase className="w-8 h-8 text-roast-300 mx-auto" />
                <p>Belum ada lowongan terdaftar.</p>
                <p className="text-[11px] text-roast-400">
                  Klik tombol <strong>"+ Tambah Lowongan"</strong> di kanan atas untuk mempublikasikan lowongan baru.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="divide-y divide-paper-50">
            {jobApplications.length > 0 ? (
              jobApplications.map((app) => {
                const job = jobListings.find((j) => j.id === app.job_listing_id);
                const statusColors: Record<string, string> = {
                  applied: 'bg-blue-50 text-blue-700 border-blue-200',
                  reviewed: 'bg-amber-50 text-amber-700 border-amber-200',
                  shortlisted: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                  rejected: 'bg-rose-50 text-rose-700 border-rose-200',
                  hired: 'bg-cherry-50 text-cherry-700 border-cherry-200',
                };
                return (
                  <div key={app.id} className="p-4 hover:bg-paper-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-bold text-sm text-roast-950">{app.applicant_name}</p>
                        <p className="text-xs text-roast-500">{app.applicant_email}</p>
                        <p className="text-xs text-roast-400 mt-0.5">Melamar: {job?.title || 'Posisi Kopi'} · {job?.company_name || 'Mitra Kafe'}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {app.has_cherry_cert && (
                          <span className="font-mono text-[9px] px-1.5 py-0.5 bg-cherry-50 border border-cherry-200 text-cherry-700 rounded font-bold">
                            CERTIFIED
                          </span>
                        )}
                        <span className={`font-mono text-[9px] px-1.5 py-0.5 border rounded font-bold uppercase ${statusColors[app.status] || ''}`}>
                          {app.status}
                        </span>
                      </div>
                    </div>
                    {app.cover_letter && (
                      <p className="text-xs text-roast-500 mt-2 line-clamp-2 italic">"{app.cover_letter}"</p>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="p-12 text-center text-roast-500 font-mono text-xs space-y-2">
                <p>Belum ada pelamar kerja yang masuk saat ini.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* MODAL TAMBAH LOWONGAN */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-roast-950/70 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-lg bg-paper-50 border-2 border-roast-900 rounded-2xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-paper-200">
              <h3 className="font-serif text-lg font-bold text-roast-950">
                Tambah Lowongan Pekerjaan
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-roast-400 hover:text-roast-800 text-sm font-mono"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateJob} className="space-y-3 font-sans text-xs">
              <div>
                <label className="font-mono text-[10px] uppercase font-bold text-roast-700 block mb-1">
                  Posisi Pekerjaan *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Barista Lead & Quality Control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-paper-300 bg-white"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase font-bold text-roast-700 block mb-1">
                  Nama Brand / Coffee Shop *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Cherry Coffee Roastery"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-paper-300 bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-mono text-[10px] uppercase font-bold text-roast-700 block mb-1">
                    Kota Penempatan
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-paper-300 bg-white font-mono"
                  >
                    <option value="Jakarta Selatan">Jakarta Selatan</option>
                    <option value="Jakarta Pusat">Jakarta Pusat</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Bali">Bali</option>
                    <option value="Surabaya">Surabaya</option>
                    <option value="Yogyakarta">Yogyakarta</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase font-bold text-roast-700 block mb-1">
                    Tipe Pekerjaan
                  </label>
                  <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value as any)}
                    className="w-full p-2.5 rounded-lg border border-paper-300 bg-white font-mono"
                  >
                    <option value="full_time">Full Time</option>
                    <option value="part_time">Part Time</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase font-bold text-roast-700 block mb-1">
                  Kisaran Gaji
                </label>
                <input
                  type="text"
                  value={salaryRange}
                  onChange={(e) => setSalaryRange(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-paper-300 bg-white font-mono"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase font-bold text-roast-700 block mb-1">
                  Deskripsi Kualifikasi
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Kualifikasi dan tanggung jawab pekerjaan..."
                  className="w-full p-2.5 rounded-lg border border-paper-300 bg-white"
                />
              </div>

              <label className="flex items-center gap-2 p-2.5 rounded-lg bg-paper-100 border border-paper-300 text-roast-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={requiresCert}
                  onChange={(e) => setRequiresCert(e.target.checked)}
                  className="accent-roast-950"
                />
                <span className="font-semibold">Wajib memiliki Sertifikat Kelulusan CherryEdu</span>
              </label>

              <div className="pt-2 flex items-center justify-end gap-2 border-t border-paper-200">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-paper-300 text-roast-700 rounded-lg hover:bg-paper-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-roast-950 text-white font-bold rounded-lg hover:bg-roast-850"
                >
                  Terbitkan Lowongan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
