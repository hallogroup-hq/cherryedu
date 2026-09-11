'use client';

import React, { useState } from 'react';
import {
  Compass,
  RotateCcw,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Info,
  Droplets,
  Sliders,
  Flame,
  Layers,
} from 'lucide-react';

interface DefectSymptom {
  id: string;
  label: string;
  englishLabel: string;
  quadrant: 'under' | 'over' | 'weak' | 'strong' | 'channeling';
  vector: { x: number; y: number }; // -100 to 100 on 2D map
  headline: string;
  explanation: string;
  actions: {
    grind: string;
    ratio: string;
    temp: string;
    technique: string;
  };
}

const DEFECT_SYMPTOMS: DefectSymptom[] = [
  {
    id: 'sour',
    label: 'Kecut Menusuk / Asam Tajam',
    englishLabel: 'Sharp Sour / Acidic',
    quadrant: 'under',
    vector: { x: -55, y: -65 },
    headline: 'Under-Extraction: Asam organik terlarut terlalu dini tanpa diimbangi gula',
    explanation:
      'Asam sitrat dan malat adalah molekul pertama yang larut. Jika ekstraksi dihentikan terlalu cepat atau gilingan terlalu kasar, gula dan karamel manis belum sempat terekstraksi, menyisakan rasa asam mentah yang menusuk.',
    actions: {
      grind: 'Rapatkan gilingan 1–2 klik lebih halus untuk memperluas luas permukaan kontak.',
      ratio: 'Perpanjang rasio seduh sedikit (misal dari 1:15 menjadi 1:16) agar lebih banyak air mengekstrak gula.',
      temp: 'Naikkan suhu air seduh 2°C (misal dari 90°C ke 92°C) untuk mempercepat laju pelarutan.',
      technique: 'Perpanjang blooming time dari 30 detik menjadi 45 detik untuk memastikan saturasi CO₂ merata.',
    },
  },
  {
    id: 'salty',
    label: 'Asin / Gurih Menggigit Samping Lidah',
    englishLabel: 'Salty / Savory Taste',
    quadrant: 'under',
    vector: { x: -75, y: -40 },
    headline: 'Severe Under-Extraction: Garam anorganik mendominasi cangkir',
    explanation:
      'Senyawa garam anorganik sangat mudah larut di detik-detik awal seduhan. Saat ekstraksi sangat rendah (< 15% EY), rasa asin terasa sangat jelas karena tidak ada bodi dan sweetness yang melapisinya.',
    actions: {
      grind: 'Giling jauh lebih halus (turunkan 2–3 klik).',
      ratio: 'Tambah volume air seduh (tambah yield ekstraksi).',
      temp: 'Gunakan air lebih panas (93°C–94°C).',
      technique: 'Beri agitasi (putaran perlahan dengan sendok atau swirl) saat blooming.',
    },
  },
  {
    id: 'astringent',
    label: 'Sepat & Kering di Langit-Langit',
    englishLabel: 'Astringent / Dry Mouthfeel',
    quadrant: 'over',
    vector: { x: 70, y: -50 },
    headline: 'Over-Extraction / Channeling: Polifenol tannin mengeringkan saliva',
    explanation:
      'Sensasi kering seperti minum teh celup yang direndam terlalu lama atau menggigit kulit pisang mentah. Polifenol berat dan tannin larut berlebih akibat kontak air terlalu lama atau aliran air membobol saluran (channeling).',
    actions: {
      grind: 'Kasar gilingan 1–2 klik untuk memperlancar aliran perkolasi.',
      ratio: 'Persingkat rasio seduh (misal dari 1:17 ke 1:15.5) dan potong penuangan akhir.',
      temp: 'Turunkan suhu air 2°C–3°C (misal turun ke 89°C–90°C).',
      technique: 'Tuang air lebih lembut dan jangan biarkan bed kopi berlubang atau retak saat drawdown.',
    },
  },
  {
    id: 'bitter',
    label: 'Pahit Getir / Abu Gosong',
    englishLabel: 'Harsh Bitter / Ashy',
    quadrant: 'over',
    vector: { x: 65, y: -70 },
    headline: 'Over-Extraction: Dekomposisi pirazin dan asam fenolik',
    explanation:
      'Senyawa pahit bermolekul besar larut pada tahap paling akhir ekstraksi. Gilingan yang terlalu halus membuat waktu kontak air dengan kopi melebihi batas toleransi optimal.',
    actions: {
      grind: 'Kasar gilingan 2 klik lebih besar.',
      ratio: 'Perpendek kontak air (seduh lebih cepat).',
      temp: 'Gunakan suhu air 88°C–90°C untuk mengerem pelarutan senyawa pahit.',
      technique: 'Hindari mengaduk berlebihan pada tahap penuangan akhir.',
    },
  },
  {
    id: 'hollow',
    label: 'Rasa Hampa / Hilang di Tengah',
    englishLabel: 'Hollow / Empty Mid-Palate',
    quadrant: 'weak',
    vector: { x: -35, y: 55 },
    headline: 'Under-Dosed / Too Dilute: Konsentrasi TDS terlalu encer',
    explanation:
      'Ada aroma saat pertama kali diminum, tetapi rasa langsung lenyap dan hampa di tengah lidah tanpa bodi. Rasio air terhadap bubuk kopi terlalu banyak.',
    actions: {
      grind: 'Pertahankan gilingan saat ini atau sedikit haluskan 0.5 klik.',
      ratio: 'Kencangkan rasio seduh (misal dari 1:17 menjadi 1:15) dengan menambah dosis kopi.',
      temp: 'Pertahankan suhu seduh stabil.',
      technique: 'Bagi penuangan menjadi 3 tahap terukur (Multi-Pour) untuk memperkuat body.',
    },
  },
  {
    id: 'watery',
    label: 'Encer Seperti Air Teh Basi',
    englishLabel: 'Watery / Thin Body',
    quadrant: 'weak',
    vector: { x: -60, y: 50 },
    headline: 'Low Strength (% TDS): Kekuatan seduhan di bawah 1.15%',
    explanation:
      'Seduhan terasa seperti air berwarna cokelat tanpa kekentalan (*viskositas*). Partikel terlarut total terlalu sedikit.',
    actions: {
      grind: 'Haluskan gilingan 1 klik.',
      ratio: 'Gunakan dosis kopi lebih banyak (misal 15g ke 16.5g untuk volume air yang sama).',
      temp: 'Pastikan suhu air tidak turun di bawah 90°C saat menyeduh.',
      technique: 'Perlambat laju penuangan air (*flow rate*) dari gooseneck kettle.',
    },
  },
  {
    id: 'heavy',
    label: 'Terlalu Berat / Menumpuk Pekat',
    englishLabel: 'Heavy / Muddy Concentration',
    quadrant: 'strong',
    vector: { x: 55, y: 55 },
    headline: 'High Strength (% TDS): Konsentrasi melebihi 1.50%',
    explanation:
      'Kopi terasa pekat dan menindih lidah. Karakter buah dan floral single origin tertutup oleh kepekatan rasa yang terlalu mendominasi.',
    actions: {
      grind: 'Kasar gilingan sedikit (1 klik).',
      ratio: 'Longgarkan rasio seduh (misal dari 1:13 menjadi 1:15.5).',
      temp: 'Pertahankan suhu.',
      technique: 'Bisa lakukan teknik Bypass (tambahkan 15–20ml air panas murni langsung ke server hasil seduhan).',
    },
  },
  {
    id: 'muddled',
    label: 'Rasa Buah Tenggelam / Keruh',
    englishLabel: 'Muddled / Flat Flavor',
    quadrant: 'strong',
    vector: { x: 40, y: 40 },
    headline: 'Over-Concentrated with Fines: Partikel debu menutupi kejernihan',
    explanation:
      'Kopi tidak memiliki kejernihan rasa (*clarity*). Tasting notes seperti melati atau jeruk nipis tidak terdefinisi karena tertutup partikel fines micro.',
    actions: {
      grind: 'Kasar gilingan 1.5 klik dan ayak fines jika menggunakan grinder blade/entry-level.',
      ratio: 'Tingkatkan rasio air ke 1:16.',
      temp: 'Turunkan suhu seduh 2°C.',
      technique: 'Tuang air dengan ketinggian rendah (5–8 cm dari bed) untuk meminimalkan turbulensi debu kopi.',
    },
  },
  {
    id: 'channeling',
    label: 'Asam Sekaligus Pahit Bersamaan',
    englishLabel: 'Sour & Bitter Simultaneously',
    quadrant: 'channeling',
    vector: { x: 20, y: -75 },
    headline: 'Uneven Extraction / Channeling: Air hanya mengalir lewat retakan',
    explanation:
      'Gejala klasik di mana sebagian bubuk kopi belum terekstraksi (menghasilkan asam kecut) sementara bagian yang dilalui semprotan air terekstraksi berlebihan (menghasilkan pahit kelat).',
    actions: {
      grind: 'Periksa keseragaman bubuk kopi; pastikan tidak menggumpal.',
      ratio: 'Pertahankan rasio seduh.',
      temp: 'Gunakan air pada suhu 91°C–92°C.',
      technique: 'Ratakan permukaan bubuk kopi sebelum menyeduh. Tuang air memutar secara tenang dan stabil, jangan menyiram dinding kertas filter.',
    },
  },
];

export const CoffeeCompass: React.FC = () => {
  const [selectedSymptomId, setSelectedSymptomId] = useState<string>('sour');

  const activeSymptom = DEFECT_SYMPTOMS.find((s) => s.id === selectedSymptomId) || DEFECT_SYMPTOMS[0];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-paper-100/90 border border-paper-300 rounded-2xl p-4 sm:p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-paper-300/80 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold bg-cherry-100 px-2 py-0.5 rounded border border-cherry-200">
                [ EXTRACTION COMPASS // TROUBLESHOOTING ENGINE ]
              </span>
              <span className="text-[10px] font-mono text-roast-500 hidden sm:inline">• Kaidah Ekstraksi Barista Hustle</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-roast-950">
              Interactive Coffee Brewing Compass
            </h3>
            <p className="font-sans text-xs sm:text-sm text-roast-600 mt-1 max-w-2xl leading-relaxed">
              Kopi Anda terasa nyeleneh? Klik apa yang dirasakan lidah Anda di bawah. Kompas visual akan memetakan posisi ekstraksi dan memberikan rekomendasi pasti untuk seduhan berikutnya.
            </p>
          </div>

          <button
            onClick={() => setSelectedSymptomId('sour')}
            className="px-3 py-1.5 bg-paper-50 hover:bg-paper-200 border border-paper-300 rounded-lg font-mono text-xs text-roast-700 flex items-center gap-1.5 self-start md:self-auto transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Kompas</span>
          </button>
        </div>

        {/* Symptoms Selector Pills */}
        <div className="pt-4">
          <label className="block font-mono text-[11px] uppercase tracking-wider text-roast-600 font-bold mb-2">
            1. APA YANG TERASA MENGGANGGU DI CANGKIR ANDA SAAT INI?
          </label>
          <div className="flex flex-wrap gap-2">
            {DEFECT_SYMPTOMS.map((symptom) => {
              const isSelected = selectedSymptomId === symptom.id;
              return (
                <button
                  key={symptom.id}
                  onClick={() => setSelectedSymptomId(symptom.id)}
                  className={`px-3 sm:px-3.5 py-2 rounded-xl text-xs font-sans transition-all flex items-center gap-1.5 active:scale-[0.98] ${
                    isSelected
                      ? 'bg-roast-950 text-paper-50 font-bold shadow-xs ring-1 ring-roast-900'
                      : 'bg-paper-50 text-roast-800 hover:bg-paper-200/80 border border-paper-300/80'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cherry-700 inline-block" />
                  <span>{symptom.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2D Compass Visualizer & Analysis Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: 2D Compass Graphic */}
        <div className="lg:col-span-5 bg-paper-50 border border-paper-300 rounded-2xl p-5 sm:p-6 shadow-subtle flex flex-col items-center justify-between">
          <div className="w-full flex items-center justify-between border-b border-paper-200 pb-2 mb-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 font-bold">
              PETA 2D EKSTRAKSI
            </span>
            <span className="font-mono text-[10px] text-cherry-700 font-semibold">
              Koor: [{activeSymptom.vector.x}, {activeSymptom.vector.y}]
            </span>
          </div>

          {/* SVG 2D Radar Canvas */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 my-2 flex items-center justify-center">
            <svg viewBox="-110 -110 220 220" className="w-full h-full overflow-visible">
              {/* Outer boundary circles */}
              <circle cx="0" cy="0" r="100" fill="#F7F3EC" stroke="#D4C7C0" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="70" fill="#F4EFE6" stroke="#D4C7C0" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="0" cy="0" r="35" fill="#EAE0D5" stroke="#C89F65" strokeWidth="1.5" />

              {/* Axis Crosshairs */}
              <line x1="-100" y1="0" x2="100" y2="0" stroke="#CBB9AF" strokeWidth="1" />
              <line x1="0" y1="-100" x2="0" y2="100" stroke="#CBB9AF" strokeWidth="1" />

              {/* Center Sweet Spot Label */}
              <circle cx="0" cy="0" r="6" fill="#1C130D" />
              <text x="0" y="16" textAnchor="middle" className="text-[8px] font-mono font-bold fill-roast-950">
                SWEET SPOT
              </text>

              {/* Quadrant Labels */}
              <text x="-65" y="-85" textAnchor="middle" className="text-[7.5px] font-mono fill-cherry-800 font-bold">
                UNDER-EXTRACTED
              </text>
              <text x="65" y="-85" textAnchor="middle" className="text-[7.5px] font-mono fill-amber-800 font-bold">
                OVER-EXTRACTED
              </text>
              <text x="-65" y="85" textAnchor="middle" className="text-[7.5px] font-mono fill-roast-600 font-semibold">
                TOO DILUTE (WEAK)
              </text>
              <text x="65" y="85" textAnchor="middle" className="text-[7.5px] font-mono fill-roast-600 font-semibold">
                TOO CONCENTRATED
              </text>

              {/* Animated Needle Vector to active symptom */}
              <line
                x1="0"
                y1="0"
                x2={activeSymptom.vector.x}
                y2={activeSymptom.vector.y}
                stroke="#6F1D1B"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="transition-all duration-300 ease-out"
              />
              <circle
                cx={activeSymptom.vector.x}
                cy={activeSymptom.vector.y}
                r="6"
                fill="#6F1D1B"
                stroke="#FAF7F2"
                strokeWidth="2"
                className="transition-all duration-300 ease-out shadow-lg"
              />
            </svg>
          </div>

          <div className="w-full bg-paper-100 rounded-lg p-2.5 text-center text-[11px] font-mono text-roast-600">
            Pusat lingkaran = Zona Ideal (Yield 18–22%, TDS 1.15–1.45%)
          </div>
        </div>

        {/* Right: Diagnosis & Prescription Action Plan */}
        <div className="lg:col-span-7 bg-paper-50 border border-paper-300 rounded-2xl p-5 sm:p-6 shadow-subtle flex flex-col justify-between space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[9px] uppercase tracking-wider text-white bg-roast-950 px-2.5 py-0.5 rounded font-bold">
                DIAGNOSIS SENSORIK
              </span>
              <span className="font-mono text-[10px] text-roast-500 italic">
                {activeSymptom.englishLabel}
              </span>
            </div>

            <h4 className="font-serif font-bold text-lg sm:text-xl text-roast-950 leading-snug">
              {activeSymptom.headline}
            </h4>

            <p className="font-sans text-xs sm:text-sm text-roast-700 mt-2 leading-relaxed">
              {activeSymptom.explanation}
            </p>
          </div>

          {/* 4 Action Steps */}
          <div className="space-y-2.5 pt-2 border-t border-paper-200">
            <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold block">
              REKOMENDASI TINDAKAN UNTUK SEDUHAN BERIKUTNYA:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-sans">
              <div className="p-3 bg-paper-100 rounded-xl border border-paper-200 space-y-1">
                <span className="font-mono text-[10px] uppercase text-roast-500 font-semibold flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-cherry-700" /> Ukuran Gilingan (Grind):
                </span>
                <p className="text-roast-900 font-medium leading-relaxed">
                  {activeSymptom.actions.grind}
                </p>
              </div>

              <div className="p-3 bg-paper-100 rounded-xl border border-paper-200 space-y-1">
                <span className="font-mono text-[10px] uppercase text-roast-500 font-semibold flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-cherry-700" /> Rasio Air (Ratio & Yield):
                </span>
                <p className="text-roast-900 font-medium leading-relaxed">
                  {activeSymptom.actions.ratio}
                </p>
              </div>

              <div className="p-3 bg-paper-100 rounded-xl border border-paper-200 space-y-1">
                <span className="font-mono text-[10px] uppercase text-roast-500 font-semibold flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-cherry-700" /> Suhu Air (Temperature):
                </span>
                <p className="text-roast-900 font-medium leading-relaxed">
                  {activeSymptom.actions.temp}
                </p>
              </div>

              <div className="p-3 bg-paper-100 rounded-xl border border-paper-200 space-y-1">
                <span className="font-mono text-[10px] uppercase text-roast-500 font-semibold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cherry-700" /> Teknik Tuang (Agitation):
                </span>
                <p className="text-roast-900 font-medium leading-relaxed">
                  {activeSymptom.actions.technique}
                </p>
              </div>
            </div>
          </div>

          <div className="p-3 bg-crema-50 border border-crema-200 rounded-xl flex items-center gap-2.5 text-[11px] font-sans text-roast-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              <strong>Aturan Emas Barista:</strong> Ubah <strong>hanya 1 variabel per seduhan</strong> agar Anda tahu persis mana faktor yang berhasil memperbaiki rasa.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
