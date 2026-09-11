'use client';

import React, { useState, useMemo } from 'react';
import {
  Sliders,
  RotateCcw,
  Sparkles,
  Info,
  Check,
  Search,
  ArrowRight,
  Coffee,
  Layers,
  ChevronDown,
  Volume2,
  VolumeX,
} from 'lucide-react';

export interface GrinderModel {
  id: string;
  brand: string;
  name: string;
  type: 'manual' | 'electric';
  burrType: 'conical' | 'flat';
  burrSize: string;
  micronPerClick: number;
  minClicks: number;
  maxClicks: number;
  zeroPointDesc: string;
  notes: string;
  micronToSetting: (microns: number) => { display: string; clicks: number; detail?: string };
}

export interface BrewMethodProfile {
  id: string;
  name: string;
  idealMicronRange: [number, number];
  defaultMicrons: number;
  description: string;
  sensoryFocus: string;
  iconLabel: string;
}

export const BREW_METHOD_PROFILES: BrewMethodProfile[] = [
  {
    id: 'ibrik',
    name: 'Turkish / Ibrik',
    idealMicronRange: [100, 200],
    defaultMicrons: 150,
    description: 'Bubuk ekstra halus seperti tepung atau bedak untuk dekoksi pekat.',
    sensoryFocus: 'Body sangat tebal, rempah pekat, crema busa halus tanpa filtrasi kertas.',
    iconLabel: 'Tepung (Extra Fine)',
  },
  {
    id: 'espresso',
    name: 'Espresso Komersial (9 Bar)',
    idealMicronRange: [200, 360],
    defaultMicrons: 280,
    description: 'Partikel halus seragam untuk menahan tekanan 9 bar dalam 25–30 detik.',
    sensoryFocus: 'Emulsi lipid pekat, crema keemasan, balance manis karamel dan keasaman sitrat.',
    iconLabel: 'Halus (Fine)',
  },
  {
    id: 'moka-pot',
    name: 'Moka Pot / Bialetti',
    idealMicronRange: [360, 480],
    defaultMicrons: 420,
    description: 'Sedikit lebih kasar dari espresso agar saringan corong tidak mampet.',
    sensoryFocus: 'Karakter tebal mirip espresso rumahan dengan rasa manis gula kelapa.',
    iconLabel: 'Medium-Fine Rendah',
  },
  {
    id: 'aeropress',
    name: 'Aeropress (Standard / Inverted)',
    idealMicronRange: [450, 700],
    defaultMicrons: 550,
    description: 'Rentang serbaguna sesuai waktu rendam (1 hingga 2 menit).',
    sensoryFocus: 'Kejernihan tinggi jika digiling medium, atau bodi bulat jika digiling medium-fine.',
    iconLabel: 'Medium-Fine',
  },
  {
    id: 'v60',
    name: 'Hario V60 / Kono Dripper',
    idealMicronRange: [500, 780],
    defaultMicrons: 620,
    description: 'Partikel seperti garam meja kasar untuk perkolasi lancar tanpa clogging.',
    sensoryFocus: 'Menonjolkan kejernihan rasa asam buah cerah (*acidity*), floral, dan aftertaste bersih.',
    iconLabel: 'Medium',
  },
  {
    id: 'kalita-wave',
    name: 'Kalita Wave / Flat Bottom Dripper',
    idealMicronRange: [600, 850],
    defaultMicrons: 720,
    description: 'Gilingan medium stabil untuk aliran merata di atas dasar rata (flat-bed).',
    sensoryFocus: 'Ekstraksi merata, sweetness tebal, dan risiko astringent lebih rendah dibanding kerucut.',
    iconLabel: 'Medium-Coarse',
  },
  {
    id: 'french-press',
    name: 'French Press / Cupping Bowl',
    idealMicronRange: [780, 1050],
    defaultMicrons: 900,
    description: 'Partikel kasar seperti pasir laut untuk seduhan imersi 4–8 menit.',
    sensoryFocus: 'Meminimalkan endapan lumpur (sediment) dengan bodi tebal dan aftertaste cokelat.',
    iconLabel: 'Kasar (Coarse)',
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew / Cold Drip',
    idealMicronRange: [950, 1300],
    defaultMicrons: 1100,
    description: 'Gilingan sangat kasar untuk proses perendaman dingin 12–24 jam.',
    sensoryFocus: 'Ekstraksi asam rendah, bodi manis sirupus, bebas rasa pahit gosong.',
    iconLabel: 'Ekstra Kasar (Extra Coarse)',
  },
];

export const POPULAR_GRINDERS: GrinderModel[] = [
  {
    id: 'comandante-c40',
    brand: 'Comandante',
    name: 'C40 MK3 / MK4 Nitro Blade',
    type: 'manual',
    burrType: 'conical',
    burrSize: '39mm Nitro Steel',
    micronPerClick: 30,
    minClicks: 0,
    maxClicks: 40,
    zeroPointDesc: 'Saat tuas engkol berhenti berputar bebas karena burr saling menyentuh.',
    notes: 'Standar emas manual brew kejuaraan dunia. Toleransi distribusi ukuran partikel sangat ketat.',
    micronToSetting: (microns) => {
      const clicks = Math.round(microns / 30);
      return {
        display: `${clicks} Clicks`,
        clicks,
        detail: `Rentang optimal: ${clicks - 1} – ${clicks + 1} klik dari titik nol`,
      };
    },
  },
  {
    id: 'comandante-red-clix',
    brand: 'Comandante',
    name: 'C40 dengan Red Clix Axle',
    type: 'manual',
    burrType: 'conical',
    burrSize: '39mm Nitro Steel (Fine Thread)',
    micronPerClick: 15,
    minClicks: 0,
    maxClicks: 80,
    zeroPointDesc: 'Ulir ganda dengan presisi 2x lipat dibanding axle standar.',
    notes: 'Sangat disukai untuk dial-in espresso presisi tinggi pada mesin komersial.',
    micronToSetting: (microns) => {
      const clicks = Math.round(microns / 15);
      return {
        display: `${clicks} Red Clicks`,
        clicks,
        detail: `Setara dengan ${(clicks / 2).toFixed(1)} klik standar`,
      };
    },
  },
  {
    id: 'timemore-c2-c3',
    brand: 'Timemore',
    name: 'Chestnut C2 / C3 / C3 ESP',
    type: 'manual',
    burrType: 'conical',
    burrSize: '38mm S2C Steel',
    micronPerClick: 33,
    minClicks: 0,
    maxClicks: 32,
    zeroPointDesc: 'Putar knop searah jarum jam hingga rapat penuh (jangan dipaksa melebihi klik nol).',
    notes: 'Grinder manual paling populer di Indonesia. C2 untuk filter, C3 ESP dilengkapi pelat mikrometer.',
    micronToSetting: (microns) => {
      const clicks = Math.max(0, Math.round((microns - 60) / 33));
      return {
        display: `${clicks} Clicks`,
        clicks,
        detail: `Rekomendasi harian: ${clicks} klik dari rapat`,
      };
    },
  },
  {
    id: '1zpresso-k-ultra',
    brand: '1Zpresso',
    name: 'K-Ultra / K-Max / K-Plus',
    type: 'manual',
    burrType: 'conical',
    burrSize: '48mm K-Burr Stainless',
    micronPerClick: 20,
    minClicks: 0,
    maxClicks: 100,
    zeroPointDesc: 'Dial cincin eksternal angka 0 di bagian atas bodi grinder.',
    notes: 'Pengaturan eksternal tanpa membuka wadah bubuk. 1 rotasi penuh = 10 angka (90 klik).',
    micronToSetting: (microns) => {
      const totalClicks = Math.round(microns / 20);
      const rotations = Math.floor(totalClicks / 100);
      const numberDial = ((totalClicks % 100) / 10).toFixed(1);
      return {
        display: rotations > 0 ? `Rotasi ${rotations} + ${numberDial}` : `Angka ${numberDial} (${totalClicks} klik)`,
        clicks: totalClicks,
        detail: `Setiap angka setara 200 mikron`,
      };
    },
  },
  {
    id: '1zpresso-jx-pro',
    brand: '1Zpresso',
    name: 'JX-Pro / J-Max',
    type: 'manual',
    burrType: 'conical',
    burrSize: '48mm Stainless Steel',
    micronPerClick: 12.5,
    minClicks: 0,
    maxClicks: 160,
    zeroPointDesc: 'Cincin internal dengan 40 klik per putaran penuh (12.5 mikron per klik).',
    notes: 'Pengendali espresso manual paling presisi dengan rentang mikro-tuning rapat.',
    micronToSetting: (microns) => {
      const clicks = Math.round(microns / 12.5);
      const rotations = Math.floor(clicks / 40);
      const subClick = clicks % 40;
      return {
        display: `${rotations}.${Math.floor(subClick / 4)} (${clicks} Clicks)`,
        clicks,
        detail: `${rotations} putaran penuh + angka ${Math.floor(subClick / 4)}`,
      };
    },
  },
  {
    id: 'kingrinder-k6',
    brand: 'Kingrinder',
    name: 'Kingrinder K6',
    type: 'manual',
    burrType: 'conical',
    burrSize: '48mm Stainless Pentagonal',
    micronPerClick: 16,
    minClicks: 0,
    maxClicks: 180,
    zeroPointDesc: 'Cincin luar dengan 60 klik per putaran.',
    notes: 'Alternatif serbaguna serba bisa dari espresso hingga cold brew dengan bodi aluminium kokoh.',
    micronToSetting: (microns) => {
      const clicks = Math.round(microns / 16);
      return {
        display: `${clicks} Clicks`,
        clicks,
        detail: `${Math.floor(clicks / 60)} putaran + ${clicks % 60} klik`,
      };
    },
  },
  {
    id: 'fellow-ode-gen2',
    brand: 'Fellow',
    name: 'Fellow Ode Gen 2',
    type: 'electric',
    burrType: 'flat',
    burrSize: '64mm Gen 2 Flat Burrs',
    micronPerClick: 25,
    minClicks: 1,
    maxClicks: 31,
    zeroPointDesc: 'Knop dial besar 1.0 sampai 11.0 dengan 2 mikro-titik per angka (31 setting total).',
    notes: 'Dikhususkan untuk filter & manual brew. Jangan digunakan untuk espresso 9 bar komersial.',
    micronToSetting: (microns) => {
      const normalized = Math.min(11, Math.max(1, 1 + (microns - 480) / 65));
      const major = Math.floor(normalized);
      const remainder = normalized - major;
      const sub = remainder < 0.33 ? '' : remainder < 0.67 ? '.1' : '.2';
      return {
        display: `Dial ${major}${sub}`,
        clicks: Math.round(normalized * 3),
        detail: `Setting flat burr 64mm`,
      };
    },
  },
  {
    id: 'baratza-encore',
    brand: 'Baratza',
    name: 'Baratza Encore / Encore ESP',
    type: 'electric',
    burrType: 'conical',
    burrSize: '40mm M2/M3 Conical Steel',
    micronPerClick: 28,
    minClicks: 1,
    maxClicks: 40,
    zeroPointDesc: 'Cincin hopper diputar ke angka 1 untuk gilingan paling rapat.',
    notes: 'Grinder elektrik sejuta umat di seluruh dunia. Versi ESP memiliki mikro-step di angka 1–20 untuk espresso.',
    micronToSetting: (microns) => {
      const setting = Math.min(40, Math.max(1, Math.round(1 + (microns - 220) / 25)));
      return {
        display: `Angka #${setting}`,
        clicks: setting,
        detail: setting <= 20 ? 'Zona Espresso / Moka Pot' : 'Zona Filter / Imersi',
      };
    },
  },
  {
    id: 'mahlkonig-ek43',
    brand: 'Mahlkönig',
    name: 'EK43 / EK43S Barista Standard',
    type: 'electric',
    burrType: 'flat',
    burrSize: '98mm Cast Steel Flat Burrs',
    micronPerClick: 35,
    minClicks: 1,
    maxClicks: 16,
    zeroPointDesc: 'Piringan dial bernomor 1 sampai 16 dengan kalibrasi titik sentuh (burr chirping).',
    notes: 'Monster industri roastery & coffee lab dunia. Distribusi partikel uni-modal tertinggi.',
    micronToSetting: (microns) => {
      const dial = Math.min(16, Math.max(1, Number((1 + (microns - 180) / 70).toFixed(1))));
      return {
        display: `Dial ${dial}`,
        clicks: Math.round(dial * 10),
        detail: `Toleransi partikel EK43 98mm`,
      };
    },
  },
  {
    id: 'wilfa-svart',
    brand: 'Wilfa',
    name: 'Wilfa Svart Aroma (CGWS-130B)',
    type: 'electric',
    burrType: 'conical',
    burrSize: '40mm Conical Steel',
    micronPerClick: 45,
    minClicks: 1,
    maxClicks: 30,
    zeroPointDesc: 'Hopper berlabel teks: Mocca, Aeropress, Filter, French Press, Steep.',
    notes: 'Motor berkecepatan rendah untuk mencegah pemanasan bubuk kopi saat penggilingan.',
    micronToSetting: (microns) => {
      let label = 'Filter';
      if (microns < 400) label = 'Mocca (Titik 1–3)';
      else if (microns < 600) label = 'Aeropress (Titik 4–7)';
      else if (microns < 850) label = 'Filter (Titik 8–15)';
      else label = 'French Press (Titik 16–22)';
      return {
        display: label,
        clicks: Math.round(microns / 45),
        detail: 'Berdasarkan penanda teks hopper Wilfa',
      };
    },
  },
];

export const GrinderConverter: React.FC = () => {
  const [targetMicrons, setTargetMicrons] = useState<number>(620);
  const [selectedMethodId, setSelectedMethodId] = useState<string>('v60');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const playClickSound = (pitch = 800) => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.04);
    } catch {
      // AudioContext fallback
    }
  };

  const currentMethod = useMemo(() => {
    return BREW_METHOD_PROFILES.find((m) => m.id === selectedMethodId) || BREW_METHOD_PROFILES[4];
  }, [selectedMethodId]);

  const handleSelectMethod = (method: BrewMethodProfile) => {
    setSelectedMethodId(method.id);
    setTargetMicrons(method.defaultMicrons);
    playClickSound(950);
  };

  const handleSliderChange = (newMicrons: number) => {
    setTargetMicrons(newMicrons);
    playClickSound(600 + (newMicrons / 1300) * 600);
  };

  const filteredGrinders = useMemo(() => {
    if (!searchQuery.trim()) return POPULAR_GRINDERS;
    const q = searchQuery.toLowerCase();
    return POPULAR_GRINDERS.filter(
      (g) =>
        g.brand.toLowerCase().includes(q) ||
        g.name.toLowerCase().includes(q) ||
        g.burrType.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Top Banner */}
      <div className="bg-paper-100/90 border border-paper-300 rounded-2xl p-4 sm:p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-paper-300/80 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold bg-cherry-100 px-2 py-0.5 rounded border border-cherry-200">
                [ CROSS-GRINDER CLICK CONVERTER // MIKRON ENGINE ]
              </span>
              <span className="text-[10px] font-mono text-roast-500 hidden sm:inline">• Toleransi Kalibrasi ±25μm</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-roast-950">
              Konverter Dial & Klik Grinder Kopi Dunia
            </h3>
            <p className="font-sans text-xs sm:text-sm text-roast-600 mt-1 max-w-2xl leading-relaxed">
              Pecahkan misteri setting gilingan antar-merek. Sesuaikan ukuran partikel mikron ($\mu m$) atau pilih metode seduh target untuk melihat angka klik pada seluruh grinder populer secara serempak.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 bg-paper-50 hover:bg-paper-200 border border-paper-300 rounded-lg text-roast-600 transition-colors"
              title={soundEnabled ? 'Matikan suara klik' : 'Aktifkan suara klik'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-cherry-700" /> : <VolumeX className="w-4 h-4 text-roast-400" />}
            </button>
            <button
              onClick={() => {
                setTargetMicrons(620);
                setSelectedMethodId('v60');
                playClickSound(500);
              }}
              className="px-3 py-1.5 bg-paper-50 hover:bg-paper-200 border border-paper-300 rounded-lg font-mono text-xs text-roast-700 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset V60</span>
            </button>
          </div>
        </div>

        {/* Method Presets Bar */}
        <div className="pt-4">
          <label className="block font-mono text-[11px] uppercase tracking-wider text-roast-600 font-bold mb-2">
            1. PILIH METODE SEDUH TARGET:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {BREW_METHOD_PROFILES.map((method) => {
              const isSelected = selectedMethodId === method.id;
              return (
                <button
                  key={method.id}
                  onClick={() => handleSelectMethod(method)}
                  className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between active:scale-[0.98] ${
                    isSelected
                      ? 'bg-roast-950 text-paper-50 border-roast-950 shadow-xs ring-1 ring-roast-900 scale-[1.02]'
                      : 'bg-paper-50 hover:bg-paper-200/80 text-roast-800 border-paper-300'
                  }`}
                >
                  <div>
                    <span className="font-serif font-bold text-xs leading-tight block truncate">
                      {method.name.split(' ')[0]}
                    </span>
                    <span
                      className={`text-[9px] font-mono block mt-0.5 truncate ${
                        isSelected ? 'text-crema-300' : 'text-roast-500'
                      }`}
                    >
                      {method.defaultMicrons} μm
                    </span>
                  </div>
                  <span
                    className={`text-[9px] font-sans mt-2 block px-1 py-0.5 rounded text-center truncate ${
                      isSelected ? 'bg-roast-850 text-paper-200' : 'bg-paper-200 text-roast-600'
                    }`}
                  >
                    {method.iconLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Micron Master Slider */}
      <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 sm:p-6 shadow-subtle space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold block">
              2. SLIDER UKURAN PARTIKEL MIKROMETRIK (DIAMETER)
            </span>
            <div className="flex items-baseline gap-3 mt-1">
              <span className="font-mono text-3xl sm:text-4xl font-black text-roast-950">
                {targetMicrons}
                <span className="text-base sm:text-lg font-sans font-normal text-roast-500 ml-1">μm (mikron)</span>
              </span>
              <span className="text-xs font-mono bg-crema-100 text-crema-900 px-2.5 py-0.5 rounded-full font-bold border border-crema-300">
                {currentMethod.name}
              </span>
            </div>
          </div>

          <div className="p-3 bg-paper-100 rounded-xl border border-paper-300 max-w-sm">
            <p className="font-sans text-xs text-roast-700 leading-relaxed">
              <strong>Karakter Rasa:</strong> {currentMethod.sensoryFocus}
            </p>
          </div>
        </div>

        {/* Range Slider */}
        <div className="pt-2 space-y-2">
          <input
            type="range"
            min={100}
            max={1300}
            step={10}
            value={targetMicrons}
            onChange={(e) => handleSliderChange(Number(e.target.value))}
            className="w-full h-2.5 bg-paper-200 rounded-lg appearance-none cursor-pointer accent-roast-950"
          />

          {/* Scale Axis Visualizer */}
          <div className="flex justify-between text-[10px] font-mono text-roast-500 pt-1 border-t border-paper-200">
            <span>100μm (Turkish)</span>
            <span>280μm (Espresso)</span>
            <span className="text-roast-900 font-bold">620μm (V60)</span>
            <span>900μm (French Press)</span>
            <span>1300μm (Cold Brew)</span>
          </div>
        </div>
      </div>

      {/* Cross-Grinder Cards Grid */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-paper-300 pb-3">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-cherry-700" />
            <h4 className="font-serif font-bold text-lg text-roast-950">
              Hasil Konversi Pada 10 Grinder Populer
            </h4>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-roast-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari merek/tipe grinder..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-paper-50 border border-paper-300 rounded-lg text-roast-900 placeholder:text-roast-400 focus:outline-none focus:ring-1 focus:ring-roast-800"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGrinders.map((grinder) => {
            const setting = grinder.micronToSetting(targetMicrons);
            return (
              <div
                key={grinder.id}
                className="bg-paper-50 border border-paper-300 rounded-xl p-4.5 hover:border-roast-700 transition-all flex flex-col justify-between shadow-2xs group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-cherry-700 font-bold bg-cherry-50 px-2 py-0.5 rounded border border-cherry-200">
                      {grinder.brand}
                    </span>
                    <span className="font-mono text-[9px] text-roast-500 uppercase">
                      {grinder.type === 'manual' ? 'Hand Grinder' : 'Electric Grinder'}
                    </span>
                  </div>

                  <h5 className="font-serif font-bold text-base text-roast-950 leading-tight">
                    {grinder.name}
                  </h5>

                  <div className="mt-3 p-3 bg-paper-100 rounded-lg border border-paper-200">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-roast-500 block mb-0.5 font-semibold">
                      REKOMENDASI DIAL:
                    </span>
                    <div className="font-mono text-xl font-bold text-roast-950 flex items-baseline gap-2">
                      <span>{setting.display}</span>
                    </div>
                    {setting.detail && (
                      <p className="font-sans text-[11px] text-roast-600 mt-1">
                        {setting.detail}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-paper-200/80 text-[11px] space-y-1">
                  <div className="flex justify-between text-roast-600">
                    <span>Burr:</span>
                    <strong className="text-roast-800 font-medium">{grinder.burrSize}</strong>
                  </div>
                  <div className="flex justify-between text-roast-600">
                    <span>Resolusi:</span>
                    <strong className="text-roast-800 font-medium">~{grinder.micronPerClick}μm / klik</strong>
                  </div>
                  <p className="text-[10px] text-roast-500 italic mt-1 line-clamp-2">
                    {grinder.notes}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pro-Tips Callout */}
      <div className="bg-paper-100/90 border-l-4 border-l-cherry-700 border border-paper-300 rounded-xl p-4 sm:p-5 flex items-start gap-3.5">
        <Info className="w-5 h-5 text-cherry-700 shrink-0 mt-0.5" />
        <div className="text-xs text-roast-800 leading-relaxed space-y-1">
          <strong className="text-roast-950 font-bold block font-serif text-sm">
            Catatan Kalibrasi Titik Nol (*Zero Point*):
          </strong>
          <p>
            Setiap unit grinder memiliki titik nol alami yang sedikit bervariasi akibat toleransi perakitan pabrik. Selalu temukan titik nol unit Anda (saat kedua burr saling menyentuh dan tuas tidak dapat berputar bebas) sebelum menghitung jumlah klik di atas.
          </p>
        </div>
      </div>
    </div>
  );
};
