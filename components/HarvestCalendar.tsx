'use client';

import React, { useState, useMemo } from 'react';
import {
  Calendar,
  MapPin,
  Sparkles,
  Info,
  Filter,
  Check,
  ChevronRight,
  Sun,
  CloudRain,
  Mountain,
  Coffee,
  Clock,
  Layers,
} from 'lucide-react';

export type HarvestPhase = 'main' | 'fly' | 'flower' | 'pruning';

export interface OriginHarvestData {
  id: string;
  name: string;
  subRegion: string;
  island: 'Sumatra' | 'Jawa' | 'Bali & NT' | 'Sulawesi' | 'Papua';
  species: 'Arabica' | 'Fine Robusta' | 'Keduanya';
  elevation: string;
  annualRainfall: string;
  schedule: HarvestPhase[]; // 12 months (0 = Jan, 11 = Dec)
  peakMonths: string;
  description: string;
  flavorSummary: string;
}

const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Mei',
  'Jun',
  'Jul',
  'Agt',
  'Sep',
  'Okt',
  'Nov',
  'Des',
];

const FULL_MONTH_NAMES = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

export const INDONESIAN_HARVEST_REGIONS: OriginHarvestData[] = [
  {
    id: 'aceh-gayo',
    name: 'Aceh Gayo',
    subRegion: 'Takengon, Bener Meriah & Gayo Lues',
    island: 'Sumatra',
    species: 'Arabica',
    elevation: '1.200 - 1.700 mdpl',
    annualRainfall: '1.800 - 2.200 mm',
    schedule: [
      'main',
      'main',
      'flower',
      'fly',
      'fly',
      'pruning',
      'pruning',
      'flower',
      'flower',
      'main',
      'main',
      'main',
    ],
    peakMonths: 'November – Januari (Raya) & Mei (Selang)',
    description:
      'Terletak di utara khatulistiwa. Memiliki dua siklus panen berbeda per tahun karena pola angin monsun Samudra Hindia.',
    flavorSummary: 'Herbal, kayu manis, cedar, body tebal sirupik, keasaman moderat seimbang.',
  },
  {
    id: 'sumatra-kerinci',
    name: 'Sumatra Kerinci',
    subRegion: 'Kayu Aro & Lereng Gunung Kerinci, Jambi',
    island: 'Sumatra',
    species: 'Arabica',
    elevation: '1.300 - 1.750 mdpl',
    annualRainfall: '2.000 - 2.500 mm',
    schedule: [
      'fly',
      'flower',
      'flower',
      'main',
      'main',
      'main',
      'main',
      'fly',
      'flower',
      'flower',
      'main',
      'main',
    ],
    peakMonths: 'April – Juli (Raya) & November – Desember (Selang)',
    description:
      'Tanah andosol vulkanik subur di kaki puncak tertinggi Sumatra menghasilkan ceri padat berkadar gula tinggi.',
    flavorSummary: 'Apel hijau renyah, rempah manis, madu hutan, bodi sutra yang licin.',
  },
  {
    id: 'sumatra-mandheling',
    name: 'Mandheling & Lintong',
    subRegion: 'Humbang Hasundutan & Tapanuli Utara',
    island: 'Sumatra',
    species: 'Arabica',
    elevation: '1.200 - 1.550 mdpl',
    annualRainfall: '1.900 - 2.300 mm',
    schedule: [
      'main',
      'main',
      'flower',
      'fly',
      'fly',
      'pruning',
      'pruning',
      'flower',
      'flower',
      'main',
      'main',
      'main',
    ],
    peakMonths: 'Oktober – Januari',
    description:
      'Kawasan bersejarah di sekitar Danau Toba yang terkenal dengan tradisi giling basah (wet-hulled) klasik dunia.',
    flavorSummary: 'Dark chocolate, earthy petrichor, daun tembakau, bodi sangat kental.',
  },
  {
    id: 'lampung-tanggamus',
    name: 'Lampung & Sumsel Robusta',
    subRegion: 'Tanggamus, Liwa & Pagar Alam',
    island: 'Sumatra',
    species: 'Fine Robusta',
    elevation: '600 - 900 mdpl',
    annualRainfall: '2.200 - 2.800 mm',
    schedule: [
      'pruning',
      'pruning',
      'flower',
      'flower',
      'main',
      'main',
      'main',
      'main',
      'fly',
      'flower',
      'pruning',
      'pruning',
    ],
    peakMonths: 'Mei – Agustus (Puncak: Juni–Juli)',
    description:
      'Lumbung Robusta terbesar di Indonesia yang menyumbang lebih dari 60% total ekspor kopi komersial nasional.',
    flavorSummary: 'Cokelat pekat, malt, kacang sangrai, crema emas super tebal.',
  },
  {
    id: 'java-preanger',
    name: 'Java Preanger (Priangan)',
    subRegion: 'Pangalengan, Ciwidey & Gunung Tilu, Jabar',
    island: 'Jawa',
    species: 'Arabica',
    elevation: '1.350 - 1.700 mdpl',
    annualRainfall: '2.000 - 2.400 mm',
    schedule: [
      'pruning',
      'flower',
      'flower',
      'fly',
      'main',
      'main',
      'main',
      'main',
      'main',
      'flower',
      'pruning',
      'pruning',
    ],
    peakMonths: 'Mei – September (Puncak: Juni–Agustus)',
    description:
      'Asal mula istilah "A Cup of Java" sejak era kolonial. Dikenal dengan karakter floral melati dan keasaman sitrat anggun.',
    flavorSummary: 'Bunga melati, persik manis, madu bunga, keasaman sitrat segar elegan.',
  },
  {
    id: 'java-temanggung',
    name: 'Temanggung Robusta & Arabica',
    subRegion: 'Lereng Gunung Sindoro & Sumbing, Jateng',
    island: 'Jawa',
    species: 'Keduanya',
    elevation: '700 - 1.600 mdpl',
    annualRainfall: '1.900 - 2.200 mm',
    schedule: [
      'pruning',
      'flower',
      'flower',
      'pruning',
      'main',
      'main',
      'main',
      'main',
      'main',
      'flower',
      'pruning',
      'pruning',
    ],
    peakMonths: 'Juni – September',
    description:
      'Pusat Fine Robusta nomor satu di Pulau Jawa dengan proses natural jemur lambat berkarakter gula kelapa.',
    flavorSummary: 'Kacang tanah sangrai, kakao pekat, manis gula jawa, bodi berat.',
  },
  {
    id: 'java-ijen-raung',
    name: 'Java Ijen-Raung',
    subRegion: 'Kawah Ijen, Bondowoso & Banyuwangi, Jatim',
    island: 'Jawa',
    species: 'Arabica',
    elevation: '1.100 - 1.550 mdpl',
    annualRainfall: '1.600 - 2.000 mm',
    schedule: [
      'pruning',
      'pruning',
      'flower',
      'flower',
      'main',
      'main',
      'main',
      'main',
      'main',
      'flower',
      'pruning',
      'pruning',
    ],
    peakMonths: 'Juni – September (Puncak: Juli)',
    description:
      'Perkebunan dataran tinggi dengan iklim kering musiman yang ideal untuk pengeringan ceri proses washed bersih.',
    flavorSummary: 'Cokelat kacang, asam sitrat bersih, karamel halus, aftertaste manis.',
  },
  {
    id: 'dampit-malang',
    name: 'Dampit Malang',
    subRegion: 'Lereng Gunung Semeru, Jawa Timur',
    island: 'Jawa',
    species: 'Fine Robusta',
    elevation: '600 - 950 mdpl',
    annualRainfall: '1.800 - 2.100 mm',
    schedule: [
      'pruning',
      'flower',
      'flower',
      'pruning',
      'main',
      'main',
      'main',
      'main',
      'fly',
      'flower',
      'pruning',
      'pruning',
    ],
    peakMonths: 'Mei – Agustus',
    description:
      'Fine Robusta Jawa Timur dengan sertifikasi indikasi geografis, diakui eksportir internasional untuk basis espresso.',
    flavorSummary: 'Dark cocoa, walnut, molase tebal, bebas apek.',
  },
  {
    id: 'bali-kintamani',
    name: 'Bali Kintamani',
    subRegion: 'Kaldera Batur, Kintamani, Bangli',
    island: 'Bali & NT',
    species: 'Arabica',
    elevation: '1.200 - 1.550 mdpl',
    annualRainfall: '1.700 - 2.100 mm',
    schedule: [
      'pruning',
      'pruning',
      'flower',
      'flower',
      'main',
      'main',
      'main',
      'main',
      'fly',
      'flower',
      'pruning',
      'pruning',
    ],
    peakMonths: 'Mei – Agustus (Puncak: Juni–Juli)',
    description:
      'Ditanam berdampingan dengan pohon jeruk purut di bawah sistem irigasi Subak Abian yang sarat kearifan lokal Tri Hita Karana.',
    flavorSummary: 'Jeruk keprok segar, selai stroberi, nangka manis, keasaman cerah hidup.',
  },
  {
    id: 'flores-bajawa',
    name: 'Flores Bajawa',
    subRegion: 'Dataran Tinggi Ngada & Inerie, NTT',
    island: 'Bali & NT',
    species: 'Arabica',
    elevation: '1.200 - 1.600 mdpl',
    annualRainfall: '1.500 - 1.900 mm',
    schedule: [
      'pruning',
      'pruning',
      'flower',
      'flower',
      'main',
      'main',
      'main',
      'main',
      'main',
      'flower',
      'pruning',
      'pruning',
    ],
    peakMonths: 'Mei – September (Puncak: Juni–Agustus)',
    description:
      'Kawasan vulkanik kering berangin sejuk di lereng Gunung Inerie yang menghasilkan kopi manis bersahabat.',
    flavorSummary: 'Milk chocolate, gula merah, aroma bunga putih, bodi lembut bundar.',
  },
  {
    id: 'sulawesi-toraja',
    name: 'Toraja & Enrekang Kalosi',
    subRegion: 'Sapan, Pulu-Pulu & Gandangbatu Sillanan',
    island: 'Sulawesi',
    species: 'Arabica',
    elevation: '1.400 - 2.000 mdpl',
    annualRainfall: '2.000 - 2.600 mm',
    schedule: [
      'pruning',
      'flower',
      'flower',
      'fly',
      'main',
      'main',
      'main',
      'main',
      'main',
      'flower',
      'pruning',
      'pruning',
    ],
    peakMonths: 'Mei – September (Puncak: Juni–Juli)',
    description:
      'Elevasi tertinggi di kepulauan tengah Indonesia dengan pohon-pohon tua varietas Typica dan S795 legendaris.',
    flavorSummary: 'Rempah kayu manis, grapefruit manis, cengkeh, bodi sirupik panjang.',
  },
  {
    id: 'papua-wamena',
    name: 'Papua Lembah Baliem (Wamena)',
    subRegion: 'Pegunungan Jayawijaya & Dogiyai',
    island: 'Papua',
    species: 'Arabica',
    elevation: '1.600 - 2.100 mdpl',
    annualRainfall: '1.900 - 2.300 mm',
    schedule: [
      'pruning',
      'pruning',
      'flower',
      'flower',
      'main',
      'main',
      'main',
      'main',
      'main',
      'main',
      'flower',
      'pruning',
    ],
    peakMonths: 'Mei – Oktober (Puncak: Juli–September)',
    description:
      'Kopi organik alami tanpa pupuk kimia sintetis, dirawat oleh suku Dani di lembah terpencil pegunungan salju khatulistiwa.',
    flavorSummary: 'Cokelat hitam murni, jeruk manis, aroma bunga hutan liar, aftertaste bersih sempurna.',
  },
];

export function HarvestCalendar() {
  const currentMonthIdx = new Date().getMonth(); // 0 to 11
  const [selectedMonth, setSelectedMonth] = useState<number>(currentMonthIdx);
  const [selectedIsland, setSelectedIsland] = useState<string>('Semua');
  const [activeRegion, setActiveRegion] = useState<OriginHarvestData>(INDONESIAN_HARVEST_REGIONS[0]);

  // Filtered Regions
  const filteredRegions = useMemo(() => {
    return INDONESIAN_HARVEST_REGIONS.filter((r) => {
      if (selectedIsland === 'Semua') return true;
      return r.island === selectedIsland;
    });
  }, [selectedIsland]);

  // Regions active in selected month
  const activeInSelectedMonth = useMemo(() => {
    return INDONESIAN_HARVEST_REGIONS.filter(
      (r) => r.schedule[selectedMonth] === 'main' || r.schedule[selectedMonth] === 'fly'
    );
  }, [selectedMonth]);

  return (
    <div className="space-y-8 font-sans animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-paper-100/80 border border-paper-300 rounded-2xl p-5 sm:p-7 shadow-xs relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cherry-700/5 blur-3xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold bg-cherry-50 px-2 py-0.5 rounded border border-cherry-200">
                [ SIKLUS AGROKLIMATIK NUSANTARA ]
              </span>
              <span className="font-mono text-[10px] text-roast-500 bg-paper-200/70 px-2 py-0.5 rounded">
                12-Month Crop Timeline
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-roast-950 tracking-tight">
              Kalender Musim Panen Kopi Nusantara
            </h2>
            <p className="text-xs sm:text-sm text-roast-600 max-w-2xl leading-relaxed">
              Panduan musiman terpadu panen kopi dari Sabang hingga Merauke. Ketahui kapan biji kopi fresh crop dipetik di hulu agar roaster dan penikmat kopi mendapatkan kesegaran ceri optimal (Peak Harvest).
            </p>
          </div>

          {/* Current Month Active Indicator */}
          <div className="p-3.5 rounded-xl bg-paper-50 border border-paper-300 shadow-2xs self-start lg:self-auto flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-700 text-paper-50 flex items-center justify-center font-mono font-bold text-sm shrink-0">
              {MONTH_NAMES[selectedMonth]}
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-roast-500 block">
                Fokus Bulan Ini:
              </span>
              <span className="font-serif font-bold text-xs text-roast-950 block">
                {FULL_MONTH_NAMES[selectedMonth]}
              </span>
              <span className="text-[10px] text-emerald-700 font-medium">
                {activeInSelectedMonth.length} Wilayah Sedang Panen
              </span>
            </div>
          </div>
        </div>

        {/* Legend Bar */}
        <div className="mt-6 pt-5 border-t border-paper-200 flex flex-wrap items-center gap-4 text-xs font-mono">
          <span className="text-roast-500 text-[10px] uppercase font-bold">Keterangan Fase:</span>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-emerald-700" />
            <span className="text-roast-800 font-medium">Panen Raya (Main Crop)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-amber-500" />
            <span className="text-roast-800 font-medium">Panen Selang (Fly Crop)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-purple-400" />
            <span className="text-roast-800 font-medium">Musim Bunga (Flowering)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-paper-300" />
            <span className="text-roast-600">Pemulihan / Pemangkasan</span>
          </div>
        </div>
      </div>

      {/* Month Navigator Pills */}
      <div className="bg-paper-50 border border-paper-300 rounded-2xl p-3 shadow-xs">
        <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1">
          {FULL_MONTH_NAMES.map((m, idx) => {
            const isSelected = selectedMonth === idx;
            const isActualCurrent = idx === currentMonthIdx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedMonth(idx)}
                className={`flex-1 min-w-[72px] py-2 px-1 rounded-xl text-center transition-all ${
                  isSelected
                    ? 'bg-roast-950 text-paper-50 font-bold shadow-xs'
                    : 'hover:bg-paper-100 text-roast-700'
                }`}
              >
                <span className="font-mono text-xs block leading-none">{MONTH_NAMES[idx]}</span>
                <span
                  className={`text-[9px] font-sans mt-0.5 block ${
                    isSelected ? 'text-crema-300' : isActualCurrent ? 'text-emerald-700 font-bold' : 'text-roast-400'
                  }`}
                >
                  {isActualCurrent ? 'Bulan Ini' : m.slice(0, 4)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Layout: Interactive Timeline Table (Left) + Region Dossier (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: 12-Month Matrix (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 flex-wrap">
              {['Semua', 'Sumatra', 'Jawa', 'Bali & NT', 'Sulawesi', 'Papua'].map((island) => (
                <button
                  key={island}
                  onClick={() => setSelectedIsland(island)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${
                    selectedIsland === island
                      ? 'bg-roast-950 text-paper-50 border-roast-950 shadow-xs'
                      : 'bg-paper-50 text-roast-800 border-paper-300 hover:bg-paper-200'
                  }`}
                >
                  {island}
                </button>
              ))}
            </div>

            <span className="font-mono text-[10px] text-roast-500 self-end sm:self-auto">
              Menampilkan {filteredRegions.length} Wilayah
            </span>
          </div>

          {/* Matrix Card */}
          <div className="bg-paper-50 border border-paper-300 rounded-2xl overflow-hidden shadow-xs">
            <div className="p-4 border-b border-paper-200 bg-paper-100/60 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-cherry-700" /> Matriks 12 Bulan Origin Kopi
              </span>
              <span className="font-mono text-[10px] text-roast-500">Klik baris untuk profil detail</span>
            </div>

            <div className="divide-y divide-paper-200">
              {filteredRegions.map((region) => {
                const isSelected = activeRegion.id === region.id;
                const statusInMonth = region.schedule[selectedMonth];

                return (
                  <div
                    key={region.id}
                    onClick={() => setActiveRegion(region)}
                    className={`p-3 sm:p-4 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-paper-100/90 border-l-4 border-l-cherry-700'
                        : 'hover:bg-paper-100/50'
                    }`}
                  >
                    <div className="space-y-0.5 min-w-[170px]">
                      <div className="flex items-center gap-1.5">
                        <span className="font-serif font-bold text-xs sm:text-sm text-roast-950">
                          {region.name}
                        </span>
                        <span className="font-mono text-[9px] text-roast-500 bg-paper-200 px-1.5 py-0.2 rounded">
                          {region.species === 'Fine Robusta' ? 'Robusta' : region.species}
                        </span>
                      </div>
                      <span className="text-[11px] text-roast-600 block truncate">
                        {region.subRegion}
                      </span>
                    </div>

                    {/* 12-Month Block Indicators */}
                    <div className="flex items-center gap-1">
                      {region.schedule.map((phase, mIdx) => {
                        const isFocusMonth = mIdx === selectedMonth;
                        let bgClass = 'bg-paper-200';
                        if (phase === 'main') bgClass = 'bg-emerald-700';
                        if (phase === 'fly') bgClass = 'bg-amber-500';
                        if (phase === 'flower') bgClass = 'bg-purple-400';

                        return (
                          <div
                            key={mIdx}
                            className={`w-4 sm:w-5 h-6 rounded-sm transition-all relative ${bgClass} ${
                              isFocusMonth ? 'ring-2 ring-roast-950 ring-offset-1 scale-110 z-10' : 'opacity-85 hover:opacity-100'
                            }`}
                            title={`${FULL_MONTH_NAMES[mIdx]}: ${
                              phase === 'main'
                                ? 'Panen Raya'
                                : phase === 'fly'
                                ? 'Panen Selang'
                                : phase === 'flower'
                                ? 'Musim Bunga'
                                : 'Pemulihan Tanah'
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Active Region Agroclimatic Dossier (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
            <div className="border-b border-paper-200 pb-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold bg-cherry-50 px-2 py-0.5 rounded border border-cherry-200">
                  {activeRegion.island} • {activeRegion.species}
                </span>
                <span className="font-mono text-xs text-roast-500">Elevasi: {activeRegion.elevation}</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-roast-950">
                {activeRegion.name}
              </h3>
              <p className="font-sans text-xs text-roast-600 leading-relaxed">
                {activeRegion.description}
              </p>
            </div>

            {/* Peak Harvest Schedule Details */}
            <div className="space-y-2 text-xs">
              <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-700" /> Jadwal Panen Raya & Puncak
              </span>

              <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-1">
                <span className="font-mono text-[10px] uppercase text-emerald-800 block font-semibold">
                  Musim Panen Optimal (Fresh Crop):
                </span>
                <p className="font-serif font-bold text-xs text-emerald-950">
                  {activeRegion.peakMonths}
                </p>
              </div>
            </div>

            {/* Agroclimatic Factors */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-2.5 bg-paper-100/60 rounded-xl border border-paper-200 space-y-1">
                <span className="text-roast-500 text-[10px] uppercase block flex items-center gap-1">
                  <Mountain className="w-3 h-3 text-roast-400" /> Ketinggian Tanam:
                </span>
                <span className="font-bold text-roast-950">{activeRegion.elevation}</span>
              </div>

              <div className="p-2.5 bg-paper-100/60 rounded-xl border border-paper-200 space-y-1">
                <span className="text-roast-500 text-[10px] uppercase block flex items-center gap-1">
                  <CloudRain className="w-3 h-3 text-roast-400" /> Curah Hujan / Thn:
                </span>
                <span className="font-bold text-roast-950">{activeRegion.annualRainfall}</span>
              </div>
            </div>

            {/* Cup Flavor Signature */}
            <div className="pt-2 border-t border-paper-200 space-y-1.5">
              <span className="font-mono text-[10px] uppercase text-roast-500 block font-semibold flex items-center gap-1">
                <Coffee className="w-3.5 h-3.5 text-cherry-700" /> Karakteristik Profil Cangkir:
              </span>
              <p className="font-serif italic text-xs text-roast-900 bg-paper-100/60 p-3 rounded-xl border border-paper-200 leading-relaxed">
                &ldquo;{activeRegion.flavorSummary}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
