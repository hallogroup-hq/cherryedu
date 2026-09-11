'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Flame, Droplets, Coffee, Layers, X, ArrowRight, CheckCircle2 } from 'lucide-react';

const CURRENT_VERSION_KEY = 'cherry_seen_version_v1_2';

export const WhatsNewModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen v1.2 announcement
    try {
      const seen = localStorage.getItem(CURRENT_VERSION_KEY);
      if (!seen) {
        // Small delay for smooth entrance after initial page load
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 700);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  const handleClose = () => {
    try {
      localStorage.setItem(CURRENT_VERSION_KEY, 'true');
    } catch {
      // Ignore
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-roast-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-paper-50 border border-paper-400 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-paper-100 p-5 sm:p-6 border-b border-paper-300 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-lg text-roast-500 hover:text-roast-950 hover:bg-paper-200 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-[10px] tracking-widest text-cherry-700 font-bold uppercase bg-cherry-50 px-2.5 py-0.5 rounded border border-cherry-200">
              [ CATATAN RILIS // CHERRY EDU v1.2 ]
            </span>
            <span className="font-mono text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded font-bold">
              Versi Terbaru
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-roast-950 tracking-tight">
            Apa yang Baru di Cherry Edu? 🎉
          </h2>
          <p className="font-sans text-xs sm:text-sm text-roast-600 mt-1">
            Berikut rangkuman fitur baru, penyempurnaan instrumen riset, dan panduan seduh yang baru saja kami rilis:
          </p>
        </div>

        {/* Scrollable Updates Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-3.5 divide-y divide-paper-200">
          {/* Feature 1 */}
          <div className="flex items-start gap-3.5 pt-1 first:pt-0">
            <div className="p-2 rounded-xl bg-orange-100 border border-orange-200 text-orange-700 shrink-0 mt-0.5">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-roast-950 flex items-center gap-2">
                Simulator Roasting Dinamis & Preset Profil Sangrai
              </h3>
              <p className="font-sans text-xs text-roast-600 mt-0.5 leading-relaxed">
                Kurva telemetri BT, ET, dan RoR kini terus berjalan meluas dinamis (tidak lagi mentok di menit 11). Dilengkapi 5 preset target profil sangrai (Arabica Light, Omni Medium, Fine Robusta, House Blend, Dark Roast), deteksi Second Crack (224°C+), serta area sasaran drop zone hijau transparan di grafik.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-3.5 pt-3.5">
            <div className="p-2 rounded-xl bg-sky-100 border border-sky-200 text-sky-700 shrink-0 mt-0.5">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-roast-950">
                Panduan Seduh Pasca-Panen (1-Klik Terapkan Resep)
              </h3>
              <p className="font-sans text-xs text-roast-600 mt-0.5 leading-relaxed">
                Panduan ekstraksi khusus biji Full Washed, Natural, Honey, Anaerobic Fermentation, dan Giling Basah langsung di Kalkulator Seduh. Lengkap dengan rekomendasi suhu, rasio, dan tombol 1-klik yang otomatis mengisi kalkulator.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-3.5 pt-3.5">
            <div className="p-2 rounded-xl bg-amber-100 border border-amber-200 text-amber-800 shrink-0 mt-0.5">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-roast-950">
                Grinder Populer Indonesia & Gauge Spektrum Mikron
              </h3>
              <p className="font-sans text-xs text-roast-600 mt-0.5 leading-relaxed">
                Menambahkan grinder favorit Indonesia: Latina 600N / Feima 600N, Eureka Mignon Specialita, Kinu M47, Mazzer Super Jolly, dan De&apos;Longhi KG79, lengkap dengan indikator spektrum ukuran partikel mikron (100–1300μm).
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-3.5 pt-3.5">
            <div className="p-2 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-800 shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-roast-950">
                Blend Designer: Biji Kopi Daerah Sendiri & Fix Tombol Hapus
              </h3>
              <p className="font-sans text-xs text-roast-600 mt-0.5 leading-relaxed">
                Kini Anda bisa memasukkan biji lokal kustom (nama, origin, spesies, proses, harga/kg, profil rasa) dan langsung diracik ke dalam simulasi blend kafe. Tombol hapus komposisi dan teks dropdown telah disempurnakan.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex items-start gap-3.5 pt-3.5">
            <div className="p-2 rounded-xl bg-blue-100 border border-blue-200 text-blue-800 shrink-0 mt-0.5">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-roast-950">
                Dashboard Data Terbuka Nasional (Data Faktual BPS)
              </h3>
              <p className="font-sans text-xs text-roast-600 mt-0.5 leading-relaxed">
                Data terintegrasi statistik resmi BPS dan Ditjenbun: harga farmgate (Ceri Merah Basah, Arabica Green, Robusta Asalan), provinsi Bengkulu, dan kartu sorotan komoditas aktif yang responsif.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-paper-100 p-4 sm:p-5 border-t border-paper-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono">
          <div className="flex items-center gap-1.5 text-xs text-roast-500 font-sans">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Pemberitahuan ini hanya muncul 1 kali per rilis</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-roast-950 hover:bg-roast-900 text-paper-50 font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all active:scale-[0.98]"
            >
              <span>Mulai Eksplorasi Fitur</span>
              <ArrowRight className="w-4 h-4 text-crema-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
