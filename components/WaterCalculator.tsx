'use client';

import React, { useState, useMemo } from 'react';
import {
  Droplets,
  FlaskConical,
  Sparkles,
  Info,
  CheckCircle2,
  Sliders,
  RotateCcw,
  Beaker,
} from 'lucide-react';

interface WaterPreset {
  id: string;
  name: string;
  creator: string;
  hardness: number; // General Hardness (GH) as CaCO3 ppm
  alkalinity: number; // Carbonate Hardness / Buffer (KH) as CaCO3 ppm
  tds: number;
  sensoryProfile: string;
  bestFor: string;
}

const WATER_PRESETS: WaterPreset[] = [
  {
    id: 'sca-standard',
    name: 'SCA Official Heritage',
    creator: 'Specialty Coffee Association',
    hardness: 68,
    alkalinity: 40,
    tds: 150,
    sensoryProfile: 'Keseimbangan netral antara bodi dan keasaman. Standar pengujian meja cupping dunia.',
    bestFor: 'Kalibrasi cupping resmi, single origin washed Amerika Latin & Indonesia.',
  },
  {
    id: 'barista-hustle',
    name: 'Barista Hustle Acidity Accent',
    creator: 'Matt Perger (World Brewers Cup)',
    hardness: 80,
    alkalinity: 40,
    tds: 130,
    sensoryProfile: 'Meningkatkan kejernihan asam sitrat dan malat. Buah terasa meletup tanpa meninggalkan aftertaste kering.',
    bestFor: 'Pour-over V60 untuk kopi Afrika (Ethiopia/Kenya) & Geisha berkarakter floral.',
  },
  {
    id: 'scott-rao',
    name: 'Scott Rao Sweetness Balance',
    creator: 'Scott Rao (Coffee Roaster Author)',
    hardness: 85,
    alkalinity: 35,
    tds: 140,
    sensoryProfile: 'Memaksimalkan ekstraksi gula bermolekul besar. Bodi terasa lebih bulat, tebal, dan manis karamel.',
    bestFor: 'Espresso modern, biji proses Natural / Honey, dan flat-bottom dripper (Kalita).',
  },
  {
    id: 'melbourne-soft',
    name: 'Melbourne Ultra-Soft & Clean',
    creator: 'Australian Specialty Standard',
    hardness: 50,
    alkalinity: 20,
    tds: 85,
    sensoryProfile: 'Sangat lembut dan transparan. Menghilangkan segala kesan debu mineral, ekstraksi ultra-clean seperti teh sutra.',
    bestFor: 'Biji Light Roast fermentasi anaerobik & kopi kompetisi berharga tinggi.',
  },
];

export const WaterCalculator: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('barista-hustle');
  const [waterVolumeLiters, setWaterVolumeLiters] = useState<number>(1);
  const [customHardness, setCustomHardness] = useState<number>(75);
  const [customAlkalinity, setCustomAlkalinity] = useState<number>(35);
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);

  const activePreset = useMemo(() => {
    return WATER_PRESETS.find((p) => p.id === selectedPresetId) || WATER_PRESETS[0];
  }, [selectedPresetId]);

  const effectiveGH = isCustomMode ? customHardness : activePreset.hardness;
  const effectiveKH = isCustomMode ? customAlkalinity : activePreset.alkalinity;

  // Mineral stock concentrate recipes:
  // Standard Barista Hustle 2-Bottle Stock Solution:
  // Buffer Concentrate (Bottle A): 8.40g Baking Soda (NaHCO3) in 1000g demineralized water -> 1g conc = 5.0 ppm as CaCO3 in 1L
  // Hardness Concentrate (Bottle B): 24.65g Food-grade Epsom Salt (MgSO4.7H2O) in 1000g demineralized water -> 1g conc = 10.0 ppm as CaCO3 in 1L
  const recipe = useMemo(() => {
    // Grams of concentrate needed for target water volume:
    const bufferGrams = Number(((effectiveKH / 5.0) * waterVolumeLiters).toFixed(1));
    const hardnessGrams = Number(((effectiveGH / 10.0) * waterVolumeLiters).toFixed(1));
    const estimatedTds = Math.round(effectiveGH * 1.1 + effectiveKH * 1.2);

    return {
      bufferGrams,
      hardnessGrams,
      estimatedTds,
    };
  }, [effectiveGH, effectiveKH, waterVolumeLiters]);

  return (
    <div className="space-y-8">
      {/* Header Ledger */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-2 border-cherry-700 pl-4 py-1">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-semibold block">
            [ APPARATUS 06 — WATER RECIPE & MINERAL LAB ]
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-roast-950">
            Sains Rekayasa Air Seduh Spesialti (Water Chemistry)
          </h3>
          <p className="font-sans text-xs text-roast-600 mt-1 max-w-2xl leading-relaxed">
            Karena 98.5% isi cangkir adalah air, komposisi ionik menentukan rasa seduhan. Rancang takaran larutan konsentrat mineral murni ke dalam air demineralisasi (RO/Aquades) untuk mencapai profil cangkir kelas dunia.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setIsCustomMode(false)}
            className={`px-3 py-1.5 border transition-all ${
              !isCustomMode
                ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold'
                : 'bg-paper-100 text-roast-700 border-paper-300 hover:border-roast-600'
            }`}
          >
            PRESET STANDAR SCA
          </button>
          <button
            onClick={() => setIsCustomMode(true)}
            className={`px-3 py-1.5 border transition-all ${
              isCustomMode
                ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold'
                : 'bg-paper-100 text-roast-700 border-paper-300 hover:border-roast-600'
            }`}
          >
            MODE KUSTOM BEBAS
          </button>
        </div>
      </div>

      {/* Main Chemistry Board */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Preset Selection & Volume Control (5 Cols) */}
        <div className="lg:col-span-5 space-y-6 bg-paper-50 border border-paper-300 p-6 shadow-xs">
          {/* Target Water Volume */}
          <div className="space-y-3 pb-5 border-b border-paper-200">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-roast-700 font-bold uppercase">[ 1 ] Volume Air Baku (RO / Distilasi)</span>
              <span className="bg-paper-200 text-roast-950 px-2 py-0.5 border border-paper-300 font-bold">
                {waterVolumeLiters} Liter
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-xs font-mono">
              {[0.5, 1, 2, 5].map((vol) => (
                <button
                  key={vol}
                  onClick={() => setWaterVolumeLiters(vol)}
                  className={`py-1.5 border text-center transition-all ${
                    waterVolumeLiters === vol
                      ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold'
                      : 'bg-paper-100/70 text-roast-700 border-paper-300 hover:border-roast-700'
                  }`}
                >
                  {vol} L
                </button>
              ))}
            </div>
          </div>

          {!isCustomMode ? (
            /* Presets List */
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 font-bold block">
                [ 2 ] PILIH FORMULA PROFIL AIR
              </span>
              <div className="space-y-2.5">
                {WATER_PRESETS.map((preset) => {
                  const isSelected = selectedPresetId === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => setSelectedPresetId(preset.id)}
                      className={`w-full text-left p-3.5 border transition-all ${
                        isSelected
                          ? 'bg-paper-100 border-roast-900 shadow-xs ring-1 ring-roast-900'
                          : 'bg-paper-100/50 border-paper-300 hover:border-roast-600'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-bold text-sm text-roast-950">
                          {preset.name}
                        </span>
                        <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 bg-paper-200 text-roast-600 border border-paper-300">
                          TDS ~{preset.tds} ppm
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-roast-500 block mt-0.5">
                        Oleh: {preset.creator}
                      </span>
                      <p className="text-[11px] text-roast-700 font-sans mt-2 leading-relaxed">
                        {preset.sensoryProfile}
                      </p>
                      <div className="flex items-center gap-4 mt-2.5 pt-2 border-t border-paper-200 font-mono text-[10px] text-roast-600">
                        <span>GH (Kation): <strong className="text-roast-900">{preset.hardness} ppm</strong></span>
                        <span>KH (Buffer): <strong className="text-roast-900">{preset.alkalinity} ppm</strong></span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Custom Sliders Mode */
            <div className="space-y-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold block">
                [ 2 ] ATUR KADAR MINERAL KUSTOM
              </span>

              {/* General Hardness Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-roast-700 font-bold uppercase">Magnesium Hardness (GH)</span>
                  <span className="bg-paper-200 text-roast-950 px-2 py-0.5 border border-paper-300 font-bold">
                    {customHardness} ppm
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="150"
                  step="5"
                  value={customHardness}
                  onChange={(e) => setCustomHardness(parseInt(e.target.value, 10))}
                  className="w-full h-1.5 bg-paper-200 rounded-none accent-cherry-700 cursor-pointer"
                />
                <p className="text-[10px] text-roast-500 font-sans leading-relaxed">
                  Ion Magnesium (Mg2+) mengikat senyawa asam buah dan aroma volatile.
                </p>
              </div>

              {/* Alkalinity Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-roast-700 font-bold uppercase">Bicarbonate Buffer (KH)</span>
                  <span className="bg-paper-200 text-roast-950 px-2 py-0.5 border border-paper-300 font-bold">
                    {customAlkalinity} ppm
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={customAlkalinity}
                  onChange={(e) => setCustomAlkalinity(parseInt(e.target.value, 10))}
                  className="w-full h-1.5 bg-paper-200 rounded-none accent-cherry-700 cursor-pointer"
                />
                <p className="text-[10px] text-roast-500 font-sans leading-relaxed">
                  Ion Bikarbonat menetralkan keasaman berlebih agar kopi tidak terasa pedih di lambung.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Recipe Dosage & Preparation Guide (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Recipe Output Card */}
          <div className="bg-paper-50 border-2 border-roast-950 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-paper-300">
              <div className="flex items-center gap-2">
                <FlaskConical className="w-5 h-5 text-cherry-700" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-roast-950">
                  RESEP PENCAMPURAN UNTUK {waterVolumeLiters} LITER AIR BAKU
                </span>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 bg-roast-950 text-crema-300 font-bold uppercase">
                ESTIMASI TDS: ~{recipe.estimatedTds} PPM
              </span>
            </div>

            {/* Two Dosage Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Buffer Bottle */}
              <div className="bg-paper-100 p-4 border border-paper-300 space-y-1">
                <span className="font-mono text-[10px] text-cherry-700 uppercase tracking-wider block font-bold">
                  [ BOTOL A — BUFFER BIKARBONAT ]
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-serif font-black text-roast-950">
                    {recipe.bufferGrams}
                  </span>
                  <span className="font-mono text-xs text-roast-600 font-bold">gram (atau ml)</span>
                </div>
                <p className="text-[11px] font-sans text-roast-600 leading-relaxed pt-1">
                  Larutan konsentrat Baking Soda (NaHCO3). Memberikan kekuatan buffer {effectiveKH} ppm.
                </p>
              </div>

              {/* Hardness Bottle */}
              <div className="bg-paper-100 p-4 border border-paper-300 space-y-1">
                <span className="font-mono text-[10px] text-emerald-800 uppercase tracking-wider block font-bold">
                  [ BOTOL B — HARDNESS MAGNESIUM ]
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-serif font-black text-roast-950">
                    {recipe.hardnessGrams}
                  </span>
                  <span className="font-mono text-xs text-roast-600 font-bold">gram (atau ml)</span>
                </div>
                <p className="text-[11px] font-sans text-roast-600 leading-relaxed pt-1">
                  Larutan konsentrat Garam Epsom (MgSO4). Memberikan kekuatan ekstraksi rasa {effectiveGH} ppm.
                </p>
              </div>
            </div>

            {/* Preparation Instructions */}
            <div className="space-y-3 pt-4 border-t border-paper-200 text-xs font-sans text-roast-800 leading-relaxed">
              <h5 className="font-serif font-bold text-sm text-roast-950">
                Cara Membuat Air Ini di Bar / Dapur Rumah:
              </h5>
              <ol className="list-decimal list-inside space-y-1.5 pl-1 text-roast-700">
                <li>Siapkan {waterVolumeLiters} Liter air murni berspesifikasi TDS 0-10 ppm (air RO, Amidis murni, atau Aquades distilasi).</li>
                <li>Timbang dengan timbangan presisi 0.1g: masukkan <strong>{recipe.bufferGrams}g Konsentrat Botol A</strong> ke dalam wadah air.</li>
                <li>Masukkan <strong>{recipe.hardnessGrams}g Konsentrat Botol B</strong> ke dalam wadah yang sama.</li>
                <li>Tutup wadah dan kocok perlahan selama 15 detik sampai ion mineral terlarut merata.</li>
                <li>Air seduh siap dimasukkan ke ketel (*kettle*) pour-over atau tangki mesin espresso.</li>
              </ol>
            </div>
          </div>

          {/* How to Make the 2 Stock Concentrate Bottles Reference Ledger */}
          <div className="bg-roast-950 text-paper-100 p-6 sm:p-8 border border-roast-900 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-crema-300 font-bold block">
              [ PANDUAN MEMBUAT 2 BOTOL KONSENTRAT INDUK (STOCK SOLUTION) ]
            </span>
            <p className="font-sans text-xs text-paper-300 leading-relaxed">
              Dua botol ini hanya perlu diracik sekali dan tahan digunakan untuk berbulan-bulan (cukup disimpan dalam botol kaca gelap tertutup):
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-roast-900 p-3.5 border border-roast-800 space-y-1">
                <strong className="text-crema-300 block">BOTOL A (KONSENTRAT BUFFER):</strong>
                <p className="text-paper-300 text-[11px] font-sans leading-relaxed">
                  Larutkan <strong>8.40 gram Baking Soda kue murni (NaHCO3)</strong> ke dalam 1.000 gram air demineralisasi. Kocok sampai larut bening sempurna.
                </p>
              </div>
              <div className="bg-roast-900 p-3.5 border border-roast-800 space-y-1">
                <strong className="text-crema-300 block">BOTOL B (KONSENTRAT HARDNESS):</strong>
                <p className="text-paper-300 text-[11px] font-sans leading-relaxed">
                  Larutkan <strong>24.65 gram Garam Epsom food grade (MgSO4.7H2O)</strong> ke dalam 1.000 gram air demineralisasi. Kocok sampai larut jernih.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
