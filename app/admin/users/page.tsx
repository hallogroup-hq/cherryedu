'use client';

import React, { useState, useMemo } from 'react';
import { useCherryEdu } from '@/lib/store';
import {
  Search,
  Filter,
  UserCheck,
  UserX,
  ChevronDown,
  Award,
  TrendingUp,
  BookOpen,
  MoreHorizontal,
  Mail,
  Shield,
  Eye,
} from 'lucide-react';

export default function UsersAdminPage() {
  const { users, certificates, quizAttempts, learningPaths } = useCherryEdu();
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [selectedUser, setSelectedUser] = useState<typeof users[0] | null>(null);

  const filtered = useMemo(() => {
    return users.filter((u) => {
      if (roleFilter !== 'all' && u.role !== roleFilter) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);
      }
      return true;
    });
  }, [users, search, roleFilter]);

  const getUserCerts = (userId: string) =>
    certificates.filter((c) => c.user_id === userId);
  const getUserQuizAttempts = (userId: string) =>
    quizAttempts.filter((a) => a.user_id === userId);

  const roleColors: Record<string, string> = {
    admin: 'bg-cherry-50 text-cherry-800 border-cherry-200',
    expert: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    learner: 'bg-paper-100 text-roast-600 border-paper-300',
    employer: 'bg-blue-50 text-blue-800 border-blue-200',
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-serif font-black text-2xl text-roast-950">User Management</h1>
          <p className="text-sm text-roast-500 mt-0.5">{users.length} user terdaftar</p>
        </div>
        <button className="px-3 py-2 text-xs font-mono border border-paper-200 rounded-lg text-roast-600 hover:border-roast-400 transition-colors">
          Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* User Table */}
        <div className={`${selectedUser ? 'lg:col-span-7' : 'lg:col-span-12'} bg-white rounded-xl border border-paper-200`}>
          {/* Filters */}
          <div className="p-4 border-b border-paper-100 flex items-center gap-3 flex-wrap">
            <div className="relative flex-1 min-w-48">
              <Search className="w-3.5 h-3.5 text-roast-400 absolute left-3 top-2.5" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama atau email..."
                className="w-full pl-9 pr-3 py-2 text-xs border border-paper-200 rounded-lg focus:outline-none focus:border-roast-400"
              />
            </div>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="text-xs font-mono border border-paper-200 rounded-lg px-3 py-2 text-roast-600"
            >
              <option value="all">Semua Role</option>
              <option value="learner">Learner</option>
              <option value="expert">Expert</option>
              <option value="admin">Admin</option>
              <option value="employer">Employer</option>
            </select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-paper-50 border-b border-paper-100">
                <tr>
                  <th className="text-left p-3 font-mono text-[10px] uppercase tracking-wider text-roast-400">User</th>
                  <th className="text-left p-3 font-mono text-[10px] uppercase tracking-wider text-roast-400">Role</th>
                  <th className="text-left p-3 font-mono text-[10px] uppercase tracking-wider text-roast-400">XP</th>
                  <th className="text-left p-3 font-mono text-[10px] uppercase tracking-wider text-roast-400">Sertifikat</th>
                  <th className="text-left p-3 font-mono text-[10px] uppercase tracking-wider text-roast-400">Bergabung</th>
                  <th className="p-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-paper-50">
                {filtered.map((user) => {
                  const userCerts = getUserCerts(user.id);
                  return (
                    <tr
                      key={user.id}
                      className={`hover:bg-paper-50 cursor-pointer transition-colors ${selectedUser?.id === user.id ? 'bg-paper-50' : ''}`}
                      onClick={() => setSelectedUser(selectedUser?.id === user.id ? null : user)}
                    >
                      <td className="p-3">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={user.avatar_url}
                            alt={user.name}
                            className="w-7 h-7 rounded-full object-cover border border-paper-200"
                          />
                          <div>
                            <p className="font-semibold text-roast-950">{user.name}</p>
                            <p className="text-roast-400 text-[10px]">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">
                        <span className={`inline-block px-2 py-0.5 rounded border font-mono text-[9px] uppercase font-bold ${roleColors[user.role] || ''}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="p-3 font-mono font-bold text-roast-900">{user.xp_points.toLocaleString()}</td>
                      <td className="p-3">
                        {userCerts.length > 0 ? (
                          <span className="flex items-center gap-1 text-emerald-700 font-bold">
                            <Award className="w-3 h-3" />
                            {userCerts.length}
                          </span>
                        ) : (
                          <span className="text-roast-300">—</span>
                        )}
                      </td>
                      <td className="p-3 text-roast-400 font-mono">
                        {new Date(user.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: '2-digit' })}
                      </td>
                      <td className="p-3">
                        <button
                          className="p-1 rounded hover:bg-paper-200 text-roast-400"
                          onClick={(e) => { e.stopPropagation(); setSelectedUser(user); }}
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="text-center py-12 text-roast-400 font-mono text-xs">
                Tidak ada user yang cocok
              </div>
            )}
          </div>
        </div>

        {/* User Detail Panel */}
        {selectedUser && (
          <div className="lg:col-span-5 bg-white rounded-xl border border-paper-200 p-5 space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold">Detail User</h3>
              <button onClick={() => setSelectedUser(null)} className="text-roast-300 hover:text-roast-700 text-xs">✕</button>
            </div>

            {/* Profile */}
            <div className="flex items-start gap-3">
              <img
                src={selectedUser.avatar_url}
                alt={selectedUser.name}
                className="w-12 h-12 rounded-xl object-cover border border-paper-200"
              />
              <div>
                <h4 className="font-bold text-roast-950">{selectedUser.name}</h4>
                <p className="text-xs text-roast-500">{selectedUser.email}</p>
                <p className="text-xs text-roast-400 mt-0.5">{selectedUser.city} · {selectedUser.coffee_role}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'XP', value: selectedUser.xp_points.toLocaleString(), icon: TrendingUp },
                { label: 'Streak', value: `${selectedUser.streak_count}d`, icon: BookOpen },
                { label: 'Sertifikat', value: getUserCerts(selectedUser.id).length, icon: Award },
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
            {getUserCerts(selectedUser.id).length > 0 && (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-roast-400 font-bold mb-2">
                  Sertifikat
                </p>
                <div className="space-y-1.5">
                  {getUserCerts(selectedUser.id).map((cert) => (
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

            {/* Actions */}
            <div className="border-t border-paper-100 pt-4 space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-wider text-roast-400 font-bold mb-3">Aksi</p>
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-1.5 px-3 py-2 border border-paper-200 rounded-lg text-xs text-roast-600 hover:border-roast-400 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  Reset Password
                </button>
                <button className="flex items-center justify-center gap-1.5 px-3 py-2 border border-paper-200 rounded-lg text-xs text-roast-600 hover:border-roast-400 transition-colors">
                  <Shield className="w-3.5 h-3.5" />
                  Ganti Role
                </button>
              </div>
              <button className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700 hover:bg-rose-100 transition-colors">
                <UserX className="w-3.5 h-3.5" />
                Suspend Akun
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
