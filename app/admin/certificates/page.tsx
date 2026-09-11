'use client';

import { useState } from "react";
import { useCherryEdu } from '@/lib/store';
import { Award, Search, CheckCircle2, XCircle, Download } from "lucide-react";

export default function CertificatesAdminPage() {
  const { certificates, users, learningPaths } = useCherryEdu();
  const [search, setSearch] = useState('');
  const [_statusFilter, _setStatusFilter] = useState('all');
  const [revokeTarget, setRevokeTarget] = useState<string | null>(null);

  const getUser = (userId: string) => users.find((u) => u.id === userId);
  const getPath = (pathId: string) => learningPaths.find((p) => p.id === pathId);

  const filtered = certificates.filter((c) => {
    const user = getUser(c.user_id);
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        c.certificate_number.toLowerCase().includes(q) ||
        user?.name.toLowerCase().includes(q) ||
        user?.email.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-serif font-black text-2xl text-roast-950">Manajemen Sertifikat</h1>
          <p className="text-sm text-roast-500 mt-0.5">{certificates.length} sertifikat terbit</p>
        </div>
        <button className="px-3 py-2 text-xs font-mono border border-paper-200 rounded-lg text-roast-600 hover:border-roast-400 transition-colors">
          Export CSV
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Total Sertifikat', value: certificates.length, icon: Award, color: 'text-roast-600' },
          { label: 'Valid & Aktif', value: certificates.length, icon: CheckCircle2, color: 'text-emerald-600' },
          { label: 'Revoked', value: 0, icon: XCircle, color: 'text-rose-600' },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-white border border-paper-200 rounded-xl p-4 flex items-center gap-3">
              <Icon className={`w-5 h-5 ${s.color}`} />
              <div>
                <p className="font-serif font-bold text-xl text-roast-950">{s.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-roast-400 font-bold">{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-paper-200">
        <div className="p-4 border-b border-paper-100">
          <div className="relative max-w-xs">
            <Search className="w-3.5 h-3.5 text-roast-400 absolute left-3 top-2.5" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari nomor atau nama..."
              className="w-full pl-9 pr-3 py-2 text-xs border border-paper-200 rounded-lg focus:outline-none focus:border-roast-400"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-paper-50 border-b border-paper-100">
              <tr>
                <th className="text-left p-3 font-mono text-[10px] uppercase tracking-wider text-roast-400">Nomor Sertifikat</th>
                <th className="text-left p-3 font-mono text-[10px] uppercase tracking-wider text-roast-400">Penerima</th>
                <th className="text-left p-3 font-mono text-[10px] uppercase tracking-wider text-roast-400">Learning Path</th>
                <th className="text-left p-3 font-mono text-[10px] uppercase tracking-wider text-roast-400">Terbit</th>
                <th className="text-left p-3 font-mono text-[10px] uppercase tracking-wider text-roast-400">Status</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-paper-50">
              {filtered.map((cert) => {
                const user = getUser(cert.user_id);
                const path = getPath(cert.learning_path_id);
                const isRevokeConfirm = revokeTarget === cert.id;

                return (
                  <tr key={cert.id} className="hover:bg-paper-50 transition-colors">
                    <td className="p-3">
                      <span className="font-mono font-bold text-roast-950">{cert.certificate_number}</span>
                    </td>
                    <td className="p-3">
                      {user && (
                        <div>
                          <p className="font-semibold text-roast-950">{user.name}</p>
                          <p className="text-roast-400 text-[10px]">{user.email}</p>
                        </div>
                      )}
                    </td>
                    <td className="p-3 text-roast-600">
                      {cert.path_title || path?.title || '—'}
                    </td>
                    <td className="p-3 font-mono text-roast-400">
                      {new Date(cert.issued_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="p-3">
                      <span className="flex items-center gap-1 text-emerald-700 font-mono text-[10px] font-bold">
                        <CheckCircle2 className="w-3 h-3" />
                        Valid
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 rounded hover:bg-paper-100 text-roast-400 hover:text-roast-700 transition-colors" title="Download PDF">
                          <Download className="w-3.5 h-3.5" />
                        </button>
                        {isRevokeConfirm ? (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => setRevokeTarget(null)}
                              className="px-2 py-1 text-[10px] font-mono text-roast-400 hover:text-roast-700 transition-colors"
                            >
                              Batal
                            </button>
                            <button
                              onClick={() => setRevokeTarget(null)}
                              className="px-2 py-1 text-[10px] font-mono bg-rose-600 text-white rounded hover:bg-rose-700 transition-colors"
                            >
                              Konfirmasi Revoke
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setRevokeTarget(cert.id)}
                            className="p-1.5 rounded hover:bg-rose-50 text-roast-300 hover:text-rose-600 transition-colors"
                            title="Revoke Sertifikat"
                          >
                            <XCircle className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="text-center py-12 text-roast-400 font-mono text-xs">
              Tidak ada sertifikat yang cocok
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
