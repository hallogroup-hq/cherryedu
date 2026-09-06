'use client';

import React from 'react';
import Link from 'next/link';
import { useCherryEdu } from '@/lib/store';
import { BrewCalculator } from '@/components/BrewCalculator';
import {
  ArrowRight,
  Check,
  Compass,
  Award,
  Layers,
  Sparkles,
  BookOpen,
  Coffee,
  MapPin,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

export default function HomePage() {
  const { learningPaths } = useCherryEdu();

  const foundationPath = learningPaths.find((p) => p.layer_type === 'foundation');
  const specializationPaths = learningPaths.filter((p) => p.layer_type === 'specialization');

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative border-b border-paper-300 pt-12 sm:pt-16 pb-16 sm:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-roast-950 tracking-tight leading-[1.12]">
                Memahami Kopi dari <span className="italic font-normal text-cherry-700">Hulu ke Hilir</span>: Dari Tanah Petani hingga Meja Barista.
              </h1>

              <p className="text-base sm:text-lg text-roast-700 leading-relaxed font-normal max-w-2xl">
                Bagi calon barista siap kerja, home brewer antusias, dan pegiat industri kopi nusantara. Kurikulum terstruktur berbasis sains ekstraksi, konteks agrikultur lokal, dan standar sensory SCA — tanpa biaya jutaan rupiah.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/paths/kopi-dari-hulu-ke-hilir"
                  className="px-6 py-3.5 bg-roast-950 hover:bg-cherry-800 text-paper-50 rounded-md font-sans text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 transition-all shadow-subtle group"
                >
                  <span>Mulai Foundation Layer (Gratis)</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/onboarding"
                  className="px-5 py-3.5 bg-white hover:bg-paper-100 text-roast-800 border border-paper-300 rounded-md font-sans text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Compass className="w-3.5 h-3.5 text-cherry-700" />
                  <span>Panduan Minat Belajar (4 Menit)</span>
                </Link>
              </div>

              {/* Editorial Spec Ledger */}
              <div className="pt-8 border-t border-paper-300 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
                <div>
                  <span className="block text-[10px] uppercase text-roast-400 font-bold">Struktur</span>
                  <span className="font-bold text-roast-900">7 Modul Inti</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-roast-400 font-bold">Konteks</span>
                  <span className="font-bold text-roast-900">Nusantara ID</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-roast-400 font-bold">Standar</span>
                  <span className="font-bold text-roast-900">SCA 80+ Points</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-roast-400 font-bold">Akses</span>
                  <span className="font-bold text-cherry-800">100% Daring</span>
                </div>
              </div>
            </div>

            {/* Right Architectural Ledger Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-xl border border-paper-300 p-6 sm:p-7 shadow-card relative">
                {/* Header Stamp */}
                <div className="flex justify-between items-start pb-4 mb-5 border-b border-paper-200">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 block font-bold">
                      THE COMPULSORY PASS
                    </span>
                    <h3 className="font-serif font-bold text-xl text-roast-950 mt-0.5">
                      Foundation: Hulu ke Hilir
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] bg-paper-100 px-2 py-1 rounded text-roast-700 border border-paper-300 uppercase font-bold">
                    VOL. 01
                  </span>
                </div>

                {/* Cover Image */}
                <div className="relative h-48 rounded-lg overflow-hidden mb-5 border border-paper-200">
                  <img
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&auto=format&fit=crop&q=80"
                    alt="Pohon Kopi Indonesia"
                    className="w-full h-full object-cover grayscale-15"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-roast-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-paper-50 font-mono text-[11px]">
                    Ketinggian: 1.400 mdpl • Gayo & Toraja
                  </div>
                </div>

                {/* Module Checklist */}
                <div className="space-y-2 mb-6 font-sans text-xs">
                  <div className="flex items-center gap-2 text-roast-800">
                    <span className="font-mono text-[10px] font-bold text-cherry-700 shrink-0">F-01</span>
                    <span>Ekosistem Industri & Sejarah Batavia 1696</span>
                  </div>
                  <div className="flex items-center gap-2 text-roast-800">
                    <span className="font-mono text-[10px] font-bold text-cherry-700 shrink-0">F-02</span>
                    <span>Agronomi Tanaman, Ketinggian, & Petik Merah</span>
                  </div>
                  <div className="flex items-center gap-2 text-roast-800">
                    <span className="font-mono text-[10px] font-bold text-cherry-700 shrink-0">F-03</span>
                    <span>Varietas Lokal: Ateng Super, Tim-Tim, Sigarar Utang</span>
                  </div>
                  <div className="flex items-center gap-2 text-roast-800">
                    <span className="font-mono text-[10px] font-bold text-cherry-700 shrink-0">F-04</span>
                    <span>Metode Processing: Natural, Washed, Honey, Anaerobik</span>
                  </div>
                  <div className="flex items-center gap-2 text-roast-800">
                    <span className="font-mono text-[10px] font-bold text-cherry-700 shrink-0">F-05</span>
                    <span>Sains Roasting: Reaksi Maillard & Degassing</span>
                  </div>
                  <div className="flex items-center gap-2 text-roast-800">
                    <span className="font-mono text-[10px] font-bold text-cherry-700 shrink-0">F-06</span>
                    <span>Water Science: TDS 75-150 ppm, Magnesium & Kalsium</span>
                  </div>
                  <div className="flex items-center gap-2 text-roast-800">
                    <span className="font-mono text-[10px] font-bold text-cherry-700 shrink-0">F-07</span>
                    <span>Sensory & Cupping SCA: Break Crust & Flavor Wheel</span>
                  </div>
                </div>

                <Link
                  href="/paths/kopi-dari-hulu-ke-hilir"
                  className="w-full py-2.5 bg-paper-100 hover:bg-paper-200 text-roast-900 border border-paper-300 rounded text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Buka Silabus Lengkap</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-roast-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CHERRYEDU MANIFESTO (PHILOSOPHY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-paper-300 bg-white p-8 sm:p-14 rounded-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-cherry-800 font-bold block">
              FILOSOFI DASAR • THE FARM TO CUP MANDATE
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-roast-950 leading-tight">
              Kenapa Seluruh Peran Wajib Mengerti Kopi dari Hulu ke Hilir?
            </h2>
            <blockquote className="border-l-2 border-cherry-700 pl-4 py-1 my-4 font-serif italic text-lg text-roast-800">
              "Seorang barista yang hebat wajib tahu varietas, agronomi tanah, dan proses fermentasi di kebun. Seorang petani kopi modern wajib tahu cara menyeduh dan meng-cupping hasil panennya."
            </blockquote>
            <p className="text-sm sm:text-base text-roast-700 leading-relaxed">
              Di Indonesia, edukasi kopi seringkali terputus: barista hanya diajari cara menekan tuas mesin espresso dan menggambar latte art; sementara petani tidak pernah mencicipi rasa kopi yang mereka rawat bertahun-tahun di kebun. <strong>CherryEdu hadir untuk menjembatani jurang ini</strong>. Kami membangun bahasa bersama seluruh pelaku industri kopi Indonesia.
            </p>
          </div>

          {/* Minimalist 2-Layer Visual Blueprint */}
          <div className="mt-10 pt-10 border-t border-paper-200 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-paper-100 border border-paper-300 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-800 font-bold">
                  LAPIS 01: FONDASI WAJIB
                </span>
                <span className="text-[10px] font-mono text-roast-500">Semua Role</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-roast-950">
                Foundation Layer: Kopi dari Hulu ke Hilir
              </h3>
              <p className="text-xs text-roast-700 leading-relaxed">
                Pemahaman komprehensif 7 modul sains kopi yang menjadi prasyarat mutlak sebelum siapa pun diperbolehkan mengambil sertifikasi profesi lanjutan.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-paper-100 border border-paper-300 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-crema-800 font-bold">
                  LAPIS 02: SPESIALISASI PERAN
                </span>
                <span className="text-[10px] font-mono text-roast-500">Pilihan Profesi</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-roast-950">
                Barista & Home Brewer Specialization
              </h3>
              <p className="text-xs text-roast-700 leading-relaxed">
                Penyelaman mendalam ke ranah operasional bar komersial, manajemen SOP coffee shop, atau eksperimen seduhan manual rumahan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CURRICULUM CATALOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-paper-300">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-roast-500 font-bold block mb-1">
              VOLUMES & SYLLABUS
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-roast-950">
              Jalur Pembelajaran Terakreditasi
            </h2>
          </div>
          <Link
            href="/paths"
            className="text-xs font-mono uppercase font-bold tracking-wider text-cherry-800 hover:text-cherry-950 flex items-center gap-1"
          >
            <span>Buka Seluruh Katalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learningPaths.map((path, idx) => {
            const isFoundation = path.layer_type === 'foundation';
            return (
              <div
                key={path.id}
                className={`bg-white rounded-xl border flex flex-col justify-between overflow-hidden transition-all ${
                  isFoundation
                    ? 'border-roast-900 shadow-card'
                    : 'border-paper-300 shadow-subtle hover:border-paper-400'
                }`}
              >
                <div>
                  <div className="relative h-44 bg-roast-900">
                    <img
                      src={path.thumbnail_url}
                      alt={path.title}
                      className="w-full h-full object-cover grayscale-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-roast-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded bg-roast-950/80 text-paper-200 border border-white/20">
                        VOL. 0{idx + 1}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between text-xs text-paper-200 font-mono">
                      <span>{path.estimated_hours} Jam</span>
                      <span>{path.total_modules} Modul</span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-800 font-bold block">
                      {isFoundation ? 'Foundation Pass' : 'Specialization Track'}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-roast-950 leading-snug">
                      {path.title}
                    </h3>
                    <p className="text-xs text-roast-600 line-clamp-3 leading-relaxed">
                      {path.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/paths/${path.slug}`}
                    className={`w-full py-2.5 rounded font-sans text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-1.5 transition-colors ${
                      isFoundation
                        ? 'bg-roast-950 hover:bg-cherry-800 text-paper-50'
                        : 'bg-paper-100 hover:bg-paper-200 text-roast-900 border border-paper-300'
                    }`}
                  >
                    <span>Eksplorasi Silabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. TACTILE COFFEE TOOL SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-roast-500 font-bold block mb-1">
            PRECISION LAB INSTRUMENT
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-roast-950">
            Kalkulator Rasio & Panduan Seduh Presisi
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-roast-600 leading-relaxed">
            Salah satu instrumen digital di dalam platform. Hitung rasio ekstraksi emas dan suhu air ideal untuk metode V60, Aeropress, French Press, hingga Espresso Dial-in.
          </p>
        </div>

        <BrewCalculator />
      </section>

      {/* 5. THE BENCHMARK (COMPARISON TABLE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-paper-300 p-6 sm:p-10 shadow-card">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-roast-500 font-bold block mb-1">
              PERBANDINGAN PEMBELAJARAN
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-roast-950">
              Mengapa Memilih CherryEdu?
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-paper-300 font-mono text-xs uppercase tracking-wider text-roast-500">
                  <th className="py-3 px-4">Kriteria Evaluasi</th>
                  <th className="py-3 px-4 font-bold text-roast-950 bg-paper-100/70">CherryEdu</th>
                  <th className="py-3 px-4">Video Bebas / YouTube</th>
                  <th className="py-3 px-4">Kursus Konvensional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-paper-200">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-roast-900">Kurikulum Hulu ke Hilir</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-800 bg-paper-100/70">Terstruktur Komprehensif</td>
                  <td className="py-3.5 px-4 text-roast-500">Terpecah & Tidak Sistematis</td>
                  <td className="py-3.5 px-4 text-roast-800">Hanya Fokus Titik Tertentu</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-roast-900">Konteks Varietas & Origin Indonesia</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-800 bg-paper-100/70">100% Berakar Lokal</td>
                  <td className="py-3.5 px-4 text-roast-500">Acak & Mengambang</td>
                  <td className="py-3.5 px-4 text-roast-500">Bahan Kurikulum Asing</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-roast-900">Biaya Akses</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-800 bg-paper-100/70">Mulai dari Gratis (Foundation)</td>
                  <td className="py-3.5 px-4 text-emerald-800">Gratis</td>
                  <td className="py-3.5 px-4 text-rose-800">Rp 5.000.000 – Rp 25.000.000+</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-roast-900">Sertifikat Resmi Terverifikasi Publik</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-800 bg-paper-100/70">Ya (QR & Token Unik)</td>
                  <td className="py-3.5 px-4 text-roast-400">Tidak Ada</td>
                  <td className="py-3.5 px-4 text-emerald-800">Sertifikat Kertas Fisik</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-roast-900">Akses Langsung ke Bursa Kerja Barista</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-800 bg-paper-100/70">Terhubung ke Coffee Shop</td>
                  <td className="py-3.5 px-4 text-roast-400">Tidak Ada</td>
                  <td className="py-3.5 px-4 text-roast-400">Tidak Ada</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION MANIFESTO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-roast-950 text-paper-50 rounded-2xl p-8 sm:p-14 text-center border border-roast-900 shadow-diploma">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-crema-400 font-bold block">
              DAFTAR SEKARANG TANPA BIAYA
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black tracking-tight text-white leading-tight">
              Kuasai Sains Kopi Indonesia Sekarang.
            </h2>
            <p className="text-xs sm:text-sm text-roast-300 leading-relaxed">
              Mulailah dari Modul F-01 hari ini. Bangun portofolio kredensial Anda dan jadilah insan kopi yang berwawasan luas dari kebun hingga ke cangkir.
            </p>
            <div className="pt-4 flex justify-center">
              <Link
                href="/paths/kopi-dari-hulu-ke-hilir"
                className="px-8 py-3.5 bg-cherry-700 hover:bg-cherry-800 text-white rounded font-sans text-xs uppercase tracking-wider font-bold flex items-center gap-2 transition-all shadow-subtle hover:scale-105"
              >
                <span>Mulai Belajar Foundation Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
