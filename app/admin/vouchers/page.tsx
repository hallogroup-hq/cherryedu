'use client';

import React, { useState } from 'react';
import { useCherryEdu } from '@/lib/store';
import { Voucher } from '@/lib/types';
import {
  Tag,
  Plus,
  Search,
  CheckCircle2,
  XCircle,
  Percent,
  DollarSign,
  Calendar,
  Users,
  Trash2,
  Edit2,
  ToggleLeft,
  ToggleRight,
  Sparkles,
} from 'lucide-react';
import { toast } from 'sonner';

export default function AdminVouchersPage() {
  const { vouchers, addVoucher, updateVoucher, deleteVoucher, toggleVoucherStatus } = useCherryEdu();

  const [search, setSearch] = useState<string>('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [editingVoucher, setEditingVoucher] = useState<Voucher | null>(null);

  // Form State
  const [code, setCode] = useState('');
  const [discountType, setDiscountType] = useState<'percentage' | 'fixed'>('percentage');
  const [discountValue, setDiscountValue] = useState<number>(30);
  const [minPurchase, setMinPurchase] = useState<number>(40000);
  const [maxDiscount, setMaxDiscount] = useState<number>(100000);
  const [usageLimit, setUsageLimit] = useState<number>(500);
  const [description, setDescription] = useState('');

  const filtered = vouchers.filter((v) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return v.code.toLowerCase().includes(q) || v.description?.toLowerCase().includes(q);
  });

  const activeCount = vouchers.filter((v) => v.is_active).length;
  const totalUsages = vouchers.reduce((acc, v) => acc + (v.usage_count || 0), 0);

  const resetForm = () => {
    setCode('');
    setDiscountType('percentage');
    setDiscountValue(30);
    setMinPurchase(40000);
    setMaxDiscount(100000);
    setUsageLimit(500);
    setDescription('');
    setEditingVoucher(null);
  };

  const handleOpenCreate = () => {
    resetForm();
    setIsCreateModalOpen(true);
  };

  const handleOpenEdit = (v: Voucher) => {
    setEditingVoucher(v);
    setCode(v.code);
    setDiscountType(v.discount_type);
    setDiscountValue(v.discount_value);
    setMinPurchase(v.min_purchase || 0);
    setMaxDiscount(v.max_discount || 0);
    setUsageLimit(v.usage_limit || 0);
    setDescription(v.description || '');
    setIsCreateModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = code.trim().toUpperCase();

    if (!cleanCode) {
      toast.error('Kode kupon wajib diisi.');
      return;
    }

    if (editingVoucher) {
      updateVoucher(editingVoucher.id, {
        code: cleanCode,
        discount_type: discountType,
        discount_value: discountValue,
        min_purchase: minPurchase || undefined,
        max_discount: maxDiscount || undefined,
        usage_limit: usageLimit || undefined,
        description: description.trim() || undefined,
      });
      toast.success(`Kupon ${cleanCode} berhasil diperbarui.`);
    } else {
      // Check duplicate
      const exists = vouchers.some((v) => v.code.toUpperCase() === cleanCode);
      if (exists) {
        toast.error(`Kode kupon ${cleanCode} sudah ada.`);
        return;
      }

      const newV: Voucher = {
        id: 'vouch_' + Math.random().toString(36).substring(2, 9),
        code: cleanCode,
        discount_type: discountType,
        discount_value: discountValue,
        min_purchase: minPurchase || undefined,
        max_discount: maxDiscount || undefined,
        usage_limit: usageLimit || undefined,
        usage_count: 0,
        is_active: true,
        description: description.trim() || undefined,
        created_at: new Date().toISOString(),
      };
      addVoucher(newV);
      toast.success(`Kupon ${cleanCode} berhasil dibuat.`);
    }

    setIsCreateModalOpen(false);
    resetForm();
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif font-black text-2xl text-roast-950">
            Manajemen Voucher & Diskon
          </h1>
          <p className="text-xs sm:text-sm text-roast-600 mt-0.5">
            Buat dan kelola kode promo diskon untuk paket langganan CherryEdu Pro.
          </p>
        </div>
        <button
          type="button"
          onClick={handleOpenCreate}
          className="px-4 py-2.5 bg-roast-950 hover:bg-cherry-900 text-white text-xs font-bold font-mono rounded-lg transition flex items-center gap-1.5 shadow-xs shrink-0"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Buat Kupon Baru</span>
        </button>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-paper-300 rounded-xl p-4 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
            <Tag className="w-5 h-5" />
          </div>
          <div>
            <p className="font-mono text-xl font-black text-roast-950">{activeCount} Kupon</p>
            <p className="font-mono text-[10px] uppercase tracking-wider text-roast-400 font-bold">
              Voucher Aktif
            </p>
          </div>
        </div>

        <div className="bg-white border border-paper-300 rounded-xl p-4 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <p className="font-mono text-xl font-black text-roast-950">{totalUsages} Kali</p>
            <p className="font-mono text-[10px] uppercase tracking-wider text-roast-400 font-bold">
              Total Pemakaian Kupon
            </p>
          </div>
        </div>

        <div className="bg-white border border-paper-300 rounded-xl p-4 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cherry-50 border border-cherry-200 text-cherry-700 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <p className="font-mono text-xl font-black text-roast-950">
              {vouchers[0]?.code || 'CHERRY50'}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-wider text-roast-400 font-bold">
              Kupon Terpopuler
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white border border-paper-300 rounded-xl p-4 shadow-xs">
        <div className="relative">
          <Search className="w-4 h-4 text-roast-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari kode kupon promo atau deskripsi..."
            className="w-full pl-9 pr-3 py-2 bg-paper-50 border border-paper-300 rounded-lg text-xs font-mono text-roast-950 focus:outline-hidden focus:border-cherry-700"
          />
        </div>
      </div>

      {/* Vouchers Table */}
      <div className="bg-white border border-paper-300 rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-paper-100 border-b border-paper-300 text-roast-900 font-mono text-[10px] uppercase tracking-wider">
                <th className="p-3.5 font-bold">Kode Kupon</th>
                <th className="p-3.5 font-bold">Tipe & Nilai Diskon</th>
                <th className="p-3.5 font-bold">Deskripsi</th>
                <th className="p-3.5 font-bold">Penggunaan</th>
                <th className="p-3.5 font-bold">Status</th>
                <th className="p-3.5 font-bold text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-paper-200">
              {filtered.length > 0 ? (
                filtered.map((v) => (
                  <tr key={v.id} className="hover:bg-paper-50/80 transition-colors">
                    <td className="p-3.5 font-mono">
                      <span className="font-bold text-sm text-roast-950 tracking-wider block">
                        {v.code}
                      </span>
                      <span className="text-[10px] text-roast-400">
                        Min. Rp {(v.min_purchase || 0).toLocaleString('id-ID')}
                      </span>
                    </td>
                    <td className="p-3.5 font-mono">
                      {v.discount_type === 'percentage' ? (
                        <span className="inline-flex items-center gap-1 font-bold text-cherry-800 bg-cherry-50 px-2 py-0.5 border border-cherry-200 rounded">
                          <Percent className="w-3 h-3" />
                          {v.discount_value}% OFF
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200 rounded">
                          Potongan Rp {v.discount_value.toLocaleString('id-ID')}
                        </span>
                      )}
                    </td>
                    <td className="p-3.5 text-roast-600 max-w-xs">
                      {v.description || <span className="text-roast-400 font-mono text-[11px]">-</span>}
                    </td>
                    <td className="p-3.5 font-mono">
                      <span className="font-bold text-roast-950">
                        {v.usage_count}
                        {v.usage_limit ? ` / ${v.usage_limit}` : ''}
                      </span>
                      <span className="text-[10px] text-roast-400 block">kali dipakai</span>
                    </td>
                    <td className="p-3.5">
                      <button
                        type="button"
                        onClick={() => {
                          toggleVoucherStatus(v.id);
                          toast.info(`Status kupon ${v.code} berhasil diubah.`);
                        }}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[10px] font-bold transition ${
                          v.is_active
                            ? 'bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100'
                            : 'bg-paper-200 border border-paper-300 text-roast-500 hover:bg-paper-300'
                        }`}
                      >
                        {v.is_active ? (
                          <>
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            Aktif
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3 h-3 text-roast-400" />
                            Nonaktif
                          </>
                        )}
                      </button>
                    </td>
                    <td className="p-3.5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(v)}
                          className="p-1.5 text-roast-500 hover:text-roast-950 hover:bg-paper-200 rounded transition"
                          title="Edit Voucher"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (confirm(`Hapus kupon ${v.code}?`)) {
                              deleteVoucher(v.id);
                              toast.info(`Kupon ${v.code} telah dihapus.`);
                            }
                          }}
                          className="p-1.5 text-roast-400 hover:text-rose-700 hover:bg-rose-50 rounded transition"
                          title="Hapus Voucher"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-roast-500 font-mono text-xs">
                    Tidak ada kode voucher yang ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create / Edit Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-roast-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg bg-paper-50 border-2 border-roast-900 rounded-2xl p-6 shadow-2xl space-y-5">
            <div>
              <h3 className="font-serif text-xl font-bold text-roast-950">
                {editingVoucher ? 'Edit Kupon Diskon' : 'Buat Kupon Diskon Baru'}
              </h3>
              <p className="text-xs text-roast-600 mt-1">
                Atur kode promo, besaran potongan, dan batas penggunaan voucher.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-roast-700 mb-1">
                  Kode Kupon Promo (Otomatis Kapital)
                </label>
                <input
                  type="text"
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  placeholder="Contoh: CHERRY50"
                  className="w-full px-3 py-2 bg-white border border-paper-300 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-roast-950 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-roast-700 mb-1">
                    Tipe Diskon
                  </label>
                  <select
                    value={discountType}
                    onChange={(e) => setDiscountType(e.target.value as any)}
                    className="w-full px-3 py-2 bg-white border border-paper-300 rounded-lg text-xs font-mono text-roast-950 focus:outline-hidden"
                  >
                    <option value="percentage">Persentase (%)</option>
                    <option value="fixed">Nominal Rupiah (Rp)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-roast-700 mb-1">
                    Nilai Diskon ({discountType === 'percentage' ? '%' : 'Rp'})
                  </label>
                  <input
                    type="number"
                    required
                    min={1}
                    value={discountValue}
                    onChange={(e) => setDiscountValue(parseInt(e.target.value, 10) || 0)}
                    className="w-full px-3 py-2 bg-white border border-paper-300 rounded-lg text-xs font-mono text-roast-950 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-roast-700 mb-1">
                    Min. Pembelian (Rp)
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={minPurchase}
                    onChange={(e) => setMinPurchase(parseInt(e.target.value, 10) || 0)}
                    className="w-full px-3 py-2 bg-white border border-paper-300 rounded-lg text-xs font-mono text-roast-950 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-roast-700 mb-1">
                    Batas Kuota Pemakaian
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={usageLimit}
                    onChange={(e) => setUsageLimit(parseInt(e.target.value, 10) || 0)}
                    placeholder="Kosongkan jika tak terbatas"
                    className="w-full px-3 py-2 bg-white border border-paper-300 rounded-lg text-xs font-mono text-roast-950 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-roast-700 mb-1">
                  Deskripsi / Keterangan Promo
                </label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Contoh: Diskon 30% Spesial Komunitas Barista Indonesia"
                  className="w-full px-3 py-2 bg-white border border-paper-300 rounded-lg text-xs text-roast-950 focus:outline-hidden"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2 border border-paper-300 bg-white hover:bg-paper-100 text-roast-800 text-xs font-bold rounded-lg transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-roast-950 hover:bg-cherry-900 text-white text-xs font-bold rounded-lg transition"
                >
                  {editingVoucher ? 'Simpan Perubahan' : 'Terbitkan Voucher'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
