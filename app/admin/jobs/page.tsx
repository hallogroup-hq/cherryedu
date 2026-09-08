'use client';

import React, { useState } from 'react';
import { useCherryEdu } from '@/lib/store';
import { Briefcase, Check, X, Eye, Search, Plus } from 'lucide-react';

export default function JobsAdminPage() {
  const { jobListings, jobApplications } = useCherryEdu();
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState<'listings' | 'applications'>('listings');

  const filtered = jobListings.filter((j) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return j.title.toLowerCase().includes(q) || j.company_name.toLowerCase().includes(q);
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-serif font-black text-2xl text-roast-950">Manajemen Jobs</h1>
          <p className="text-sm text-roast-500 mt-0.5">{jobListings.length} lowongan · {jobApplications.length} lamaran</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-roast-950 text-paper-50 rounded-lg font-mono text-xs uppercase tracking-wider font-bold hover:bg-roast-900 transition-colors">
          <Plus className="w-3.5 h-3.5" />
          Tambah Lowongan
        </button>
      </div>

      <div className="flex items-center gap-1 border-b border-paper-200">
        {[
          { id: 'listings', label: `Lowongan (${jobListings.length})` },
          { id: 'applications', label: `Lamaran (${jobApplications.length})` },
        ].map((t) => (
          <button key={t.id} onClick={() => setTab(t.id as any)}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold border-b-2 transition-colors ${tab === t.id ? 'border-roast-950 text-roast-950' : 'border-transparent text-roast-400 hover:text-roast-700'}`}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-paper-200">
        <div className="p-4 border-b border-paper-100">
          <div className="relative max-w-xs">
            <Search className="w-3.5 h-3.5 text-roast-400 absolute left-3 top-2.5" />
            <input value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari lowongan..." className="w-full pl-9 pr-3 py-2 text-xs border border-paper-200 rounded-lg focus:outline-none focus:border-roast-400" />
          </div>
        </div>

        {tab === 'listings' ? (
          <div className="divide-y divide-paper-50">
            {filtered.map((job) => {
              const apps = jobApplications.filter((a) => a.job_listing_id === job.id);
              return (
                <div key={job.id} className="p-4 hover:bg-paper-50 transition-colors flex items-start gap-4">
                  <img src={job.company_logo || 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=80'} alt={job.company_name}
                    className="w-10 h-10 rounded-lg object-cover border border-paper-200 shrink-0" />
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
                    <button className="p-1.5 rounded hover:bg-emerald-50 text-roast-300 hover:text-emerald-600 transition-colors" title="Approve">
                      <Check className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 rounded hover:bg-rose-50 text-roast-300 hover:text-rose-600 transition-colors" title="Reject">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="divide-y divide-paper-50">
            {jobApplications.map((app) => {
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
                      <p className="text-xs text-roast-400 mt-0.5">Melamar: {job?.title} · {job?.company_name}</p>
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
            })}
          </div>
        )}
      </div>
    </div>
  );
}
