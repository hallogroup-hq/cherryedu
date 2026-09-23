'use client';

import { useState, useMemo } from "react";
import { useCherryEdu } from '@/lib/store';
import {
  Search,
  Filter,
  UserX,
  Award,
  TrendingUp,
  BookOpen,
  Mail,
  Shield,
  Eye,
  Crown,
  CheckCircle2,
} from "lucide-react";
import { toast } from 'sonner';

export default function UsersAdminPage() {
  const { users, certificates, grantProAccess, revokeProAccess } = useCherryEdu();
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [proFilter, setProFilter] = useState('all');
  const [selectedUser, setSelectedUser] = useState<typeof users[0] | null>(null);

  const isUserProActive = (u: typeof users[0]) => {
    if (u.role === 'admin') return true;
    if (!u.is_pro) return false;
    if (!u.subscription_expires_at) return true;
    return new Date(u.subscription_expires_at) > new Date();
  };

  const isUserProExpired = (u: typeof users[0]) => {
    if (u.role === 'admin') return false;
    if (!u.is_pro) return false;
    if (!u.subscription_expires_at) return false;
    return new Date(u.subscription_expires_at) <= new Date();
  };

  const filtered = useMemo(() => {
    return users.filter((u) => {
      const activePro = isUserProActive(u);
      if (roleFilter !== 'all' && u.role !== roleFilter) return false;
      if (proFilter === 'pro' && !activePro) return false;
      if (proFilter === 'free' && activePro) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);
      }
      return true;
    });
  }, [users, search, roleFilter, proFilter]);

  const getUserCerts = (userId: string) =>
    certificates.filter((c) => c.user_id === userId);

  const roleColors: Record<string, string> = {
    admin: 'bg-cherry-50 text-cherry-800 border-cherry-200',
    expert: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    learner: 'bg-paper-100 text-roast-600 border-paper-300',
    employer: 'bg-blue-50 text-blue-800 border-blue-200',
  };

  // Re-sync selected user state whenever `users` array updates
  const activeSelectedUser = selectedUser
    ? users.find((u) => u.id === selectedUser.id) || selectedUser
    : null;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-serif font-black text-2xl text-roast-950">User Management</h1>
          <p className="text-sm text-roast-500 mt-0.5">
            {users.length} user terdaftar · {users.filter((u) => isUserProActive(u)).length} member Pro aktif
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* User Table */}
        <div className={`${activeSelectedUser ? 'lg:col-span-7' : 'lg:col-span-12'} bg-white rounded-xl border border-paper-200`}>
          {/* Filters */}
          <div className="p-4 border-b border-paper-100 flex items-center gap-3 flex-wrap">
            <div className="relative flex-1 min-w-48">
              <Search className="w-3.5 h-3.5 text-roast-400 absolute left-3 top-2.5" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama, email..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-paper-50 border border-paper-300 rounded-lg focus:outline-none focus:border-roast-900"
              />
            </div>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="text-xs bg-paper-50 border border-paper-300 rounded-lg px-2.5 py-1.5 text-roast-700 font-mono"
            >
              <option value="all">Semua Role</option>
              <option value="learner">Learner</option>
              <option value="expert">Expert</option>
              <option value="admin">Admin</option>
              <option value="employer">Employer</option>
            </select>
            <select
              value={proFilter}
              onChange={(e) => setProFilter(e.target.value)}
              className="text-xs bg-paper-50 border border-paper-300 rounded-lg px-2.5 py-1.5 text-roast-700 font-mono"
            >
              <option value="all">Semua Status</option>
              <option value="pro">Pro Aktif</option>
              <option value="free">Free / Non-Aktif</option>
            </select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-paper-200 text-left font-mono text-[10px] uppercase tracking-wider text-roast-500">
                  <th className="p-3">User</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">XP</th>
                  <th className="p-3">Bergabung</th>
                  <th className="p-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-paper-100">
                {filtered.map((user) => {
                  const userCerts = getUserCerts(user.id);
                  return (
                    <tr
                      key={user.id}
                      onClick={() => setSelectedUser(activeSelectedUser?.id === user.id ? null : user)}
                      className={`hover:bg-paper-50 cursor-pointer transition ${activeSelectedUser?.id === user.id ? 'bg-amber-50/50' : ''}`}
                    >
                      <td className="p-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-paper-200 overflow-hidden shrink-0 border border-paper-300">
                            <img src={user.avatar_url} alt={user.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="font-semibold text-roast-900 flex items-center gap-1">
                              <span>{user.name}</span>
                              {user.is_pro && (
                                <Crown className="w-3 h-3 text-amber-500 shrink-0 inline" />
                              )}
                            </p>
                            <p className="text-[10px] text-roast-600 font-mono">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className={`inline-block px-2 py-0.5 rounded border font-mono text-[9px] uppercase font-bold ${roleColors[user.role] || ''}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="p-3">
                        {isUserProActive(user) ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 font-mono text-[9px] font-bold">
                            <Crown className="w-2.5 h-2.5 text-amber-600" />
                            PRO
                          </span>
                        ) : isUserProExpired(user) ? (
                          <span className="inline-block px-2 py-0.5 rounded bg-rose-50 border border-rose-200 text-rose-700 font-mono text-[9px] font-bold" title="Masa aktif langganan telah berakhir">
                            EXPIRED
                          </span>
                        ) : (
                          <span className="inline-block px-2 py-0.5 rounded bg-paper-100 text-roast-500 font-mono text-[9px] font-medium">
                            FREE
                          </span>
                        )}
                      </td>
                      <td className="p-3 font-mono font-bold text-roast-900">{user.xp_points.toLocaleString()}</td>
                      <td className="p-3 text-roast-400 font-mono">
                        {new Date(user.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: '2-digit' })}
                      </td>
                      <td className="p-3 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-1.5">
                          {!isUserProActive(user) ? (
                            <button
                              type="button"
                              onClick={() => {
                                grantProAccess(user.id, 1, 'monthly');
                                toast.success(`Status Pro 1 Bulan diberikan kepada ${user.name}!`);
                              }}
                              className="px-2 py-1 bg-roast-950 hover:bg-roast-850 text-white font-mono text-[10px] font-bold rounded transition"
                              title="Aktifkan status Pro selama 1 bulan"
                            >
                              + Beri Pro
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => {
                                if (confirm(`Yakin ingin mencabut status Pro dari ${user.name}?`)) {
                                  revokeProAccess(user.id);
                                  toast.info(`Status Pro untuk ${user.name} telah dicabut.`);
                                }
                              }}
                              className="px-2 py-1 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-mono text-[10px] font-bold rounded transition"
                              title="Cabut status Pro"
                            >
                              Cabut Pro
                            </button>
                          )}
                          <button
                            className="p-1 rounded hover:bg-paper-200 text-roast-400"
                            onClick={() => setSelectedUser(activeSelectedUser?.id === user.id ? null : user)}
                            title="Lihat detail user"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="text-center py-12 text-roast-400 font-mono text-xs">
                Tidak ada user yang cocok dengan filter.
              </div>
            )}
          </div>
        </div>

        {/* User Detail Panel */}
        {activeSelectedUser && (
          <div className="lg:col-span-5 bg-white rounded-xl border border-paper-200 p-5 space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold">Detail User</h3>
              <button onClick={() => setSelectedUser(null)} className="text-roast-300 hover:text-roast-700 text-xs">✕</button>
            </div>

            {/* Profile */}
            <div className="flex items-start gap-3">
              <img
                src={activeSelectedUser.avatar_url}
                alt={activeSelectedUser.name}
                className="w-12 h-12 rounded-xl object-cover border border-paper-200"
              />
              <div>
                <h4 className="font-bold text-roast-950 flex items-center gap-1.5">
                  <span>{activeSelectedUser.name}</span>
                  {activeSelectedUser.is_pro && (
                    <span className="px-1.5 py-0.2 bg-amber-400 text-roast-950 font-mono text-[9px] font-black rounded-xs">
                      PRO
                    </span>
                  )}
                </h4>
                <p className="text-xs text-roast-500">{activeSelectedUser.email}</p>
                <p className="text-xs text-roast-400 mt-0.5">{activeSelectedUser.city} · {activeSelectedUser.coffee_role}</p>
              </div>
            </div>

            {/* PRO MEMBERSHIP MANAGEMENT CARD */}
            <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-serif font-bold text-sm text-roast-950">
                  <Crown className="w-4 h-4 text-amber-600" />
                  <span>Keanggotaan CherryEdu Pro</span>
                </div>
                {isUserProActive(activeSelectedUser) ? (
                  <span className="px-2 py-0.5 bg-amber-500 text-roast-950 font-mono text-[9px] font-black rounded-full shadow-2xs">
                    PRO AKTIF
                  </span>
                ) : isUserProExpired(activeSelectedUser) ? (
                  <span className="px-2 py-0.5 bg-rose-100 text-rose-800 border border-rose-300 font-mono text-[9px] font-bold rounded-full">
                    KEDALUWARSA
                  </span>
                ) : (
                  <span className="px-2 py-0.5 bg-paper-200 text-roast-600 font-mono text-[9px] font-bold rounded">
                    FREE MEMBER
                  </span>
                )}
              </div>

              <p className="text-xs text-roast-700 leading-relaxed font-sans">
                {isUserProActive(activeSelectedUser)
                  ? `Aktif hingga: ${activeSelectedUser.subscription_expires_at ? new Date(activeSelectedUser.subscription_expires_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Permanen'}. Memiliki akses tak terbatas ke seluruh kurikulum spesialisasi dan tools laboratorium.`
                  : isUserProExpired(activeSelectedUser)
                  ? `Masa aktif langganan telah berakhir pada ${new Date(activeSelectedUser.subscription_expires_at!).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}. Akses materi spesialisasi saat ini terkunci.`
                  : 'Pengguna saat ini berstatus gratis (terbatas modul pengantar dan kuota 3x tools seduh).'}
              </p>

              <div className="grid grid-cols-2 gap-2 pt-1">
                {!isUserProActive(activeSelectedUser) ? (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        grantProAccess(activeSelectedUser.id, 1, 'monthly');
                        toast.success(`Akses Pro 1 Bulan berhasil diaktifkan untuk ${activeSelectedUser.name}!`);
                      }}
                      className="px-3 py-2 bg-roast-950 hover:bg-roast-850 text-white font-mono text-xs font-bold rounded-lg transition"
                    >
                      + Beri Pro 1 Bulan
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        grantProAccess(activeSelectedUser.id, 12, 'annual');
                        toast.success(`Akses Pro 1 Tahun berhasil diaktifkan untuk ${activeSelectedUser.name}!`);
                      }}
                      className="px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white font-mono text-xs font-bold rounded-lg transition"
                    >
                      + Beri Pro 1 Tahun
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm(`Cabut status Pro dari ${activeSelectedUser.name}?`)) {
                        revokeProAccess(activeSelectedUser.id);
                        toast.info(`Status Pro dicabut dari ${activeSelectedUser.name}`);
                      }
                    }}
                    className="col-span-2 px-3 py-2 bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 font-mono text-xs font-bold rounded-lg transition"
                  >
                    Cabut Akses Pro
                  </button>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'XP', value: activeSelectedUser.xp_points.toLocaleString(), icon: TrendingUp },
                { label: 'Streak', value: `${activeSelectedUser.streak_count}d`, icon: BookOpen },
                { label: 'Sertifikat', value: getUserCerts(activeSelectedUser.id).length, icon: Award },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="bg-paper-50 rounded-lg p-3 text-center">
                    <Icon className="w-4 h-4 text-roast-400 mx-auto mb-1" />
                    <p className="font-mono font-bold text-roast-950 text-sm">{s.value}</p>
                    <p className="font-mono text-[9px] text-roast-400 uppercase">{s.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Certificates */}
            {getUserCerts(activeSelectedUser.id).length > 0 && (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-roast-400 font-bold mb-2">
                  Sertifikat
                </p>
                <div className="space-y-1.5">
                  {getUserCerts(activeSelectedUser.id).map((cert) => (
                    <div key={cert.id} className="flex items-center gap-2 p-2 bg-paper-50 rounded-lg border border-paper-200">
                      <Award className="w-3.5 h-3.5 text-cherry-700 shrink-0" />
                      <div className="min-w-0">
                        <p className="font-mono text-[10px] font-bold text-roast-950">{cert.certificate_number}</p>
                        <p className="text-[10px] text-roast-400 truncate">{cert.path_title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
