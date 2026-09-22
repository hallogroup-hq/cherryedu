'use client';

import React, { useState } from 'react';
import { useCherryEdu } from '@/lib/store';
import { PaymentTransaction, SubscriptionCycle } from '@/lib/types';
import {
  CreditCard,
  Search,
  CheckCircle2,
  Clock,
  Filter,
  DollarSign,
  Users,
  ShieldCheck,
  Zap,
  RefreshCw,
  QrCode,
  Tag,
  AlertCircle,
  Plus,
} from 'lucide-react';
import { toast } from 'sonner';

export default function AdminTransactionsPage() {
  const {
    transactions,
    users,
    isPro,
    grantProAccess,
    revokeProAccess,
    simulatePaymentSuccess,
  } = useCherryEdu();

  const [search, setSearch] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [cycleFilter, setCycleFilter] = useState<string>('all');

  // Manual Grant Modal State
  const [isGrantModalOpen, setIsGrantModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [grantDuration, setGrantDuration] = useState<number>(1);
  const [grantCycle, setGrantCycle] = useState<SubscriptionCycle>('monthly');

  // Filter Transactions
  const filtered = transactions.filter((tx) => {
    if (statusFilter !== 'all' && tx.status !== statusFilter) return false;
    if (cycleFilter !== 'all' && tx.cycle !== cycleFilter) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const matchId = tx.id.toLowerCase().includes(q) || tx.trx_id?.toLowerCase().includes(q);
      const matchUser =
        tx.user_name?.toLowerCase().includes(q) || tx.user_email?.toLowerCase().includes(q);
      const matchVoucher = tx.voucher_code?.toLowerCase().includes(q);
      return matchId || matchUser || matchVoucher;
    }
    return true;
  });

  // Calculate Key Financial Metrics
  const paidTransactions = transactions.filter((t) => t.status === 'paid');
  const totalRevenue = paidTransactions.reduce((acc, t) => acc + (t.final_amount || 0), 0);
  const totalDiscounts = paidTransactions.reduce((acc, t) => acc + (t.discount_amount || 0), 0);

  // MRR estimation: Monthly payments + (Annual payments / 12)
  const mrr = paidTransactions.reduce((acc, t) => {
    if (t.cycle === 'monthly') return acc + t.final_amount;
    if (t.cycle === 'annual') return acc + Math.round(t.final_amount / 12);
    return acc;
  }, 0);

  const activeProMembers = users.filter((u) => {
    if (!u.is_pro) return false;
    if (!u.subscription_expires_at) return true;
    return new Date(u.subscription_expires_at) > new Date();
  });

  const handleGrantPro = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUserId) {
      toast.error('Pilih pengguna terlebih dahulu');
      return;
    }
    grantProAccess(selectedUserId, grantDuration, grantCycle);
    toast.success('Status Pro berhasil diberikan kepada pengguna!');
    setIsGrantModalOpen(false);
    setSelectedUserId('');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif font-black text-2xl text-roast-950">
            Transaksi & Manajemen Pro
          </h1>
          <p className="text-xs sm:text-sm text-roast-600 mt-0.5">
            Pantau arus kas langganan GoPay QRIS, omset MRR, dan kelola masa aktif member.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsGrantModalOpen(true)}
          className="px-4 py-2.5 bg-roast-950 hover:bg-cherry-900 text-white text-xs font-bold font-mono rounded-lg transition flex items-center gap-1.5 shadow-xs shrink-0"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Beri Akses Pro Manual</span>
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-paper-300 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase text-roast-500 tracking-wider">
              Total Revenue Lunas
            </span>
            <DollarSign className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="font-mono text-xl sm:text-2xl font-black text-roast-950 mt-1">
            Rp {totalRevenue.toLocaleString('id-ID')}
          </p>
          <p className="text-[11px] text-roast-500 mt-0.5">
            Dari {paidTransactions.length} transaksi sukses
          </p>
        </div>

        <div className="bg-white border border-paper-300 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase text-roast-500 tracking-wider">
              Estimasi MRR
            </span>
            <CreditCard className="w-4 h-4 text-cherry-700" />
          </div>
          <p className="font-mono text-xl sm:text-2xl font-black text-roast-950 mt-1">
            Rp {mrr.toLocaleString('id-ID')}
          </p>
          <p className="text-[11px] text-roast-500 mt-0.5">Pendapatan berulang bulanan</p>
        </div>

        <div className="bg-white border border-paper-300 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase text-roast-500 tracking-wider">
              Member Pro Aktif
            </span>
            <Users className="w-4 h-4 text-amber-600" />
          </div>
          <p className="font-mono text-xl sm:text-2xl font-black text-roast-950 mt-1">
            {activeProMembers.length} Orang
          </p>
          <p className="text-[11px] text-amber-700 font-semibold mt-0.5">Akses spesialisasi terbuka</p>
        </div>

        <div className="bg-white border border-paper-300 rounded-xl p-4 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase text-roast-500 tracking-wider">
              Voucher Diklaim
            </span>
            <Tag className="w-4 h-4 text-sky-600" />
          </div>
          <p className="font-mono text-xl sm:text-2xl font-black text-roast-950 mt-1">
            Rp {totalDiscounts.toLocaleString('id-ID')}
          </p>
          <p className="text-[11px] text-roast-500 mt-0.5">Total penghematan pembelajar</p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white border border-paper-300 rounded-xl p-4 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between gap-3 shadow-xs">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-roast-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari ID transaksi, TRX-ID, nama user, email, atau voucher..."
            className="w-full pl-9 pr-3 py-2 bg-paper-50 border border-paper-300 rounded-lg text-xs font-mono text-roast-950 focus:outline-hidden focus:border-cherry-700"
          />
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-paper-50 border border-paper-300 rounded-lg text-xs font-mono text-roast-700 focus:outline-hidden"
          >
            <option value="all">Semua Status</option>
            <option value="paid">Lunas (Paid)</option>
            <option value="pending">Menunggu (Pending)</option>
            <option value="expired">Kedaluwarsa (Expired)</option>
          </select>

          <select
            value={cycleFilter}
            onChange={(e) => setCycleFilter(e.target.value)}
            className="px-3 py-2 bg-paper-50 border border-paper-300 rounded-lg text-xs font-mono text-roast-700 focus:outline-hidden"
          >
            <option value="all">Semua Paket</option>
            <option value="monthly">Bulanan</option>
            <option value="annual">Tahunan</option>
          </select>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white border border-paper-300 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-paper-100 border-b border-paper-300 text-roast-900 font-mono text-[10px] uppercase tracking-wider">
                <th className="p-3.5 font-bold">ID Transaksi / TRX</th>
                <th className="p-3.5 font-bold">Pengguna</th>
                <th className="p-3.5 font-bold">Siklus</th>
                <th className="p-3.5 font-bold">Voucher</th>
                <th className="p-3.5 font-bold">Nominal Bayar</th>
                <th className="p-3.5 font-bold">Tanggal</th>
                <th className="p-3.5 font-bold">Status</th>
                <th className="p-3.5 font-bold text-right">Aksi Admin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-paper-200">
              {filtered.length > 0 ? (
                filtered.map((tx) => (
                  <tr key={tx.id} className="hover:bg-paper-50/80 transition-colors">
                    <td className="p-3.5 font-mono">
                      <span className="font-bold text-roast-950 block">{tx.trx_id || tx.id}</span>
                      <span className="text-[10px] text-roast-400">QRIS GoPay</span>
                    </td>
                    <td className="p-3.5">
                      <span className="font-bold text-roast-950 block">{tx.user_name}</span>
                      <span className="font-mono text-[10px] text-roast-500">{tx.user_email}</span>
                    </td>
                    <td className="p-3.5">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-paper-100 border border-paper-300 text-roast-800">
                        {tx.cycle === 'annual' ? 'Tahunan (1 Thn)' : 'Bulanan (1 Bln)'}
                      </span>
                    </td>
                    <td className="p-3.5">
                      {tx.voucher_code ? (
                        <span className="inline-flex items-center gap-1 font-mono font-bold text-emerald-800 text-[10px] bg-emerald-50 px-2 py-0.5 border border-emerald-200 rounded">
                          <Tag className="w-2.5 h-2.5" />
                          {tx.voucher_code} (-Rp {tx.discount_amount.toLocaleString('id-ID')})
                        </span>
                      ) : (
                        <span className="text-roast-400 font-mono text-[11px]">-</span>
                      )}
                    </td>
                    <td className="p-3.5 font-mono">
                      <span className="font-bold text-roast-950 block">
                        Rp {tx.final_amount.toLocaleString('id-ID')}
                      </span>
                      {tx.discount_amount > 0 && (
                        <span className="text-[10px] text-roast-400 line-through">
                          Rp {tx.original_amount.toLocaleString('id-ID')}
                        </span>
                      )}
                    </td>
                    <td className="p-3.5 font-mono text-[11px] text-roast-600">
                      {new Date(tx.created_at).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="p-3.5">
                      {tx.status === 'paid' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-full font-mono text-[10px] font-bold">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Lunas
                        </span>
                      ) : (tx.status === 'pending' && (!tx.expires_at || new Date(tx.expires_at) >= new Date())) ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 border border-amber-200 text-amber-800 rounded-full font-mono text-[10px] font-bold animate-pulse">
                          <Clock className="w-3 h-3 text-amber-600" />
                          Pending
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-rose-50 border border-rose-200 text-rose-800 rounded-full font-mono text-[10px] font-bold">
                          <AlertCircle className="w-3 h-3 text-rose-600" />
                          Kadaluarsa
                        </span>
                      )}
                    </td>
                    <td className="p-3.5 text-right">
                      {tx.status === 'paid' ? (
                        <span className="text-emerald-700 font-mono text-[11px] font-bold">
                          ✓ Terverifikasi
                        </span>
                      ) : (tx.status === 'pending' && (!tx.expires_at || new Date(tx.expires_at) >= new Date())) ? (
                        <button
                          type="button"
                          onClick={() => {
                            simulatePaymentSuccess(tx.id);
                            toast.success(`Transaksi ${tx.trx_id || tx.id} berhasil dilunaskan!`);
                          }}
                          className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-[10px] font-bold rounded transition"
                          title="Tandai pembayaran ini telah lunas"
                        >
                          Tandai Lunas
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            simulatePaymentSuccess(tx.id);
                            toast.success(`Transaksi kadaluarsa ${tx.trx_id || tx.id} berhasil dipulihkan & dilunaskan!`);
                          }}
                          className="px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white font-mono text-[10px] font-bold rounded transition"
                          title="Pengguna membayar telat? Pulihkan dan aktifkan akun Pro"
                        >
                          Pulihkan & Lunas
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="p-8 text-center text-roast-500 font-mono text-xs">
                    Belum ada riwayat transaksi yang cocok dengan kriteria filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Active Pro Members Management Section */}
      <div className="bg-white border border-paper-300 rounded-xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif font-bold text-lg text-roast-950">
              Daftar Member Aktif CherryEdu Pro
            </h2>
            <p className="text-xs text-roast-600">
              Pengguna yang saat ini memiliki hak akses tak terbatas ke seluruh spesialisasi.
            </p>
          </div>
          <span className="px-3 py-1 bg-amber-100 border border-amber-300 text-amber-900 rounded-full font-mono text-xs font-black">
            {activeProMembers.length} Aktif
          </span>
        </div>

        <div className="divide-y divide-paper-200">
          {activeProMembers.length > 0 ? (
            activeProMembers.map((member) => (
              <div key={member.id} className="py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-paper-200 overflow-hidden shrink-0 border border-paper-300">
                    <img src={member.avatar_url} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-roast-950">{member.name}</span>
                      <span className="px-1.5 py-0.2 bg-amber-400 text-roast-950 font-mono text-[9px] font-bold rounded-sm">
                        PRO
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-roast-500">{member.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs">
                  <div className="text-right hidden sm:block">
                    <span className="text-[10px] font-mono text-roast-400 block uppercase">Masa Berlaku</span>
                    <span className="font-mono text-roast-700 font-bold">
                      {member.subscription_expires_at
                        ? new Date(member.subscription_expires_at).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })
                        : 'Permanen / Admin'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm(`Yakin ingin mencabut status Pro dari ${member.name}?`)) {
                        revokeProAccess(member.id);
                        toast.info(`Status Pro untuk ${member.name} telah dicabut.`);
                      }
                    }}
                    className="px-2.5 py-1 text-[11px] font-mono text-rose-700 hover:text-rose-950 hover:bg-rose-50 border border-rose-200 rounded transition"
                  >
                    Cabut Pro
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-xs text-roast-500 font-mono py-4">
              Belum ada pengguna dengan status Pro aktif saat ini.
            </p>
          )}
        </div>
      </div>

      {/* Manual Grant Modal */}
      {isGrantModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-roast-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md bg-paper-50 border-2 border-roast-900 rounded-2xl p-6 shadow-2xl space-y-5">
            <div>
              <h3 className="font-serif text-xl font-bold text-roast-950">
                Beri Akses Pro Manual
              </h3>
              <p className="text-xs text-roast-600 mt-1">
                Pilih pengguna untuk diaktifkan keanggotaan CherryEdu Pro tanpa perlu pembayaran gateway.
              </p>
            </div>

            <form onSubmit={handleGrantPro} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-roast-700 mb-1">
                  Pilih Pengguna
                </label>
                <select
                  value={selectedUserId}
                  onChange={(e) => setSelectedUserId(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-white border border-paper-300 rounded-lg text-xs text-roast-950 focus:outline-hidden"
                >
                  <option value="">-- Pilih Akun Pembelajar --</option>
                  {users.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.name} ({u.email}) {u.is_pro ? '— [Sudah Pro]' : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-roast-700 mb-1">
                    Durasi (Bulan)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={60}
                    value={grantDuration}
                    onChange={(e) => setGrantDuration(parseInt(e.target.value, 10) || 1)}
                    className="w-full px-3 py-2 bg-white border border-paper-300 rounded-lg text-xs font-mono text-roast-950 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-roast-700 mb-1">
                    Label Siklus
                  </label>
                  <select
                    value={grantCycle}
                    onChange={(e) => setGrantCycle(e.target.value as SubscriptionCycle)}
                    className="w-full px-3 py-2 bg-white border border-paper-300 rounded-lg text-xs font-mono text-roast-950 focus:outline-hidden"
                  >
                    <option value="monthly">Bulanan</option>
                    <option value="annual">Tahunan</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsGrantModalOpen(false)}
                  className="px-4 py-2 border border-paper-300 bg-white hover:bg-paper-100 text-roast-800 text-xs font-bold rounded-lg transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-roast-950 hover:bg-cherry-900 text-white text-xs font-bold rounded-lg transition"
                >
                  Aktifkan Pro
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
