'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Save,
  Layers,
  Clock,
  Sparkles,
  Upload,
  CheckCircle2,
} from 'lucide-react';
import { PathLayerType, PathLevel, PathTargetRole } from '@/lib/types';

export default function NewLearningPathPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    thumbnail_url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
    layer_type: 'specialization' as PathLayerType,
    level: 'intermediate' as PathLevel,
    target_role: 'barista' as PathTargetRole,
    estimated_hours: 12,
    is_free: true,
    is_published: false,
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const generatedSlug = val
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
    setFormData((prev) => ({
      ...prev,
      title: val,
      slug: generatedSlug,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        router.push('/admin/curriculum');
      }, 1200);
    }, 800);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <Link
          href="/admin/curriculum"
          className="p-2 rounded-lg border border-paper-200 bg-white hover:bg-paper-50 text-roast-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="font-serif font-black text-2xl text-roast-950">
            Tambah Learning Path Baru
          </h1>
          <p className="text-sm text-roast-500 mt-0.5">
            Buat jalur belajar terstruktur untuk kurikulum CherryEdu
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-paper-200 p-6 space-y-6">
        {/* Basic Info */}
        <div className="space-y-4">
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold border-b border-paper-100 pb-2">
            1. Informasi Dasar
          </h2>

          <div>
            <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">
              Judul Jalur Belajar *
            </label>
            <input
              required
              value={formData.title}
              onChange={handleTitleChange}
              placeholder="Contoh: Barista Championship Signature Drink Mastery"
              className="w-full text-sm border border-paper-200 rounded-lg p-3 text-roast-950 focus:outline-none focus:border-roast-400"
            />
          </div>

          <div>
            <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">
              Slug URL (Otomatis)
            </label>
            <div className="flex items-center gap-2 border border-paper-200 rounded-lg p-3 bg-paper-50">
              <span className="text-xs font-mono text-roast-400">/paths/</span>
              <input
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full text-xs font-mono bg-transparent border-none outline-none text-roast-800"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">
              Deskripsi Singkat *
            </label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Jelaskan apa yang akan dipelajari dan target kompetensi peserta..."
              className="w-full text-xs border border-paper-200 rounded-lg p-3 text-roast-800 focus:outline-none focus:border-roast-400 resize-none leading-relaxed"
            />
          </div>
        </div>

        {/* Classification & Metadata */}
        <div className="space-y-4">
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold border-b border-paper-100 pb-2">
            2. Klasifikasi & Durasi
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">
                Tipe Lapisan
              </label>
              <select
                value={formData.layer_type}
                onChange={(e) => setFormData({ ...formData, layer_type: e.target.value as PathLayerType })}
                className="w-full text-xs border border-paper-200 rounded-lg p-2.5 bg-paper-50 font-medium"
              >
                <option value="foundation">Fondasi (Umum)</option>
                <option value="specialization">Spesialisasi</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">
                Level Keahlian
              </label>
              <select
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: e.target.value as PathLevel })}
                className="w-full text-xs border border-paper-200 rounded-lg p-2.5 bg-paper-50 font-medium"
              >
                <option value="beginner">Pemula (Beginner)</option>
                <option value="intermediate">Menengah (Intermediate)</option>
                <option value="advanced">Lanjutan (Advanced)</option>
                <option value="full">Lengkap (All Levels)</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">
                Target Peran
              </label>
              <select
                value={formData.target_role}
                onChange={(e) => setFormData({ ...formData, target_role: e.target.value as PathTargetRole })}
                className="w-full text-xs border border-paper-200 rounded-lg p-2.5 bg-paper-50 font-medium"
              >
                <option value="barista">Barista</option>
                <option value="home_brewer">Home Brewer</option>
                <option value="roaster">Roaster</option>
                <option value="q_grader">Q Grader</option>
                <option value="farmer">Petani / Processor</option>
                <option value="all">Semua Praktisi</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">
                Estimasi Total Waktu (Jam)
              </label>
              <div className="flex items-center gap-2 border border-paper-200 rounded-lg p-2.5 bg-paper-50">
                <Clock className="w-3.5 h-3.5 text-roast-400 shrink-0" />
                <input
                  type="number"
                  min="1"
                  max="200"
                  value={formData.estimated_hours}
                  onChange={(e) => setFormData({ ...formData, estimated_hours: Number(e.target.value) })}
                  className="w-full text-xs font-mono font-bold bg-transparent border-none outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">
                Thumbnail Image (URL)
              </label>
              <input
                value={formData.thumbnail_url}
                onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
                placeholder="https://images.unsplash.com/..."
                className="w-full text-xs border border-paper-200 rounded-lg p-2.5"
              />
            </div>
          </div>
        </div>

        {/* Publication Status */}
        <div className="space-y-4">
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold border-b border-paper-100 pb-2">
            3. Akses & Publikasi
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex items-start gap-3 p-3 rounded-lg border border-paper-200 hover:bg-paper-50 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.is_free}
                onChange={(e) => setFormData({ ...formData, is_free: e.target.checked })}
                className="mt-0.5 accent-roast-950"
              />
              <div>
                <p className="text-xs font-bold text-roast-900">Akses Terbuka (Gratis)</p>
                <p className="text-[11px] text-roast-400">
                  Dapat diakses oleh semua pengguna terdaftar tanpa biaya
                </p>
              </div>
            </label>

            <label className="flex items-start gap-3 p-3 rounded-lg border border-paper-200 hover:bg-paper-50 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.is_published}
                onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
                className="mt-0.5 accent-emerald-600"
              />
              <div>
                <p className="text-xs font-bold text-roast-900">Publikasikan Sekarang</p>
                <p className="text-[11px] text-roast-400">
                  Jika tidak dicentang, akan disimpan sebagai Draft internal
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Submit Actions */}
        <div className="pt-4 border-t border-paper-100 flex items-center justify-end gap-3">
          <Link
            href="/admin/curriculum"
            className="px-4 py-2.5 border border-paper-300 rounded-lg text-xs font-mono text-roast-600 hover:border-roast-400 transition-colors"
          >
            Batal
          </Link>
          <button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider font-bold transition-all ${
              isSuccess
                ? 'bg-emerald-600 text-white'
                : 'bg-roast-950 hover:bg-roast-900 text-paper-50'
            }`}
          >
            {isSuccess ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" />
                Berhasil Dibuat!
              </>
            ) : isSubmitting ? (
              'Menyimpan...'
            ) : (
              <>
                <Save className="w-3.5 h-3.5" />
                Simpan Learning Path
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
