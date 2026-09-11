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
  isPopularInIndonesia?: boolean;
  categoryBadge?: string;
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
    id: 'latina-600n',
    brand: 'Latina / Feima',
    name: 'Latina 600N / Feima 600N',
    type: 'electric',
    burrType: 'flat',
    burrSize: '60mm Stainless Flat Burr',
    micronPerClick: 75,
    minClicks: 1,
    maxClicks: 8,
    zeroPointDesc: 'Putar knop ke nomor 1 untuk titik terhalus (kalibrasi nol saat burr rapat).',
    notes: 'Grinder sejuta kedai kopi Indonesia. Menggunakan dial 1 hingga 8 dengan toleransi setengah step (misal dial 3.5 untuk V60).',
    isPopularInIndonesia: true,
    categoryBadge: 'Standar Kedai Kopi RI 🇮🇩',
    micronToSetting: (microns) => {
      const dial = Math.min(8, Math.max(1, Number((1 + (microns - 200) / 140).toFixed(1))));
      return {
        display: `Dial #${dial}`,
        clicks: Math.round(dial * 2),
        detail: dial <= 2.5 ? 'Zona Tubruk Halus / Mokapot' : dial <= 4.5 ? 'Zona Manual Brew / V60' : 'Zona French Press / Cold Brew',
      };
    },
  },
  {
    id: 'eureka-mignon',
    brand: 'Eureka',
    name: 'Mignon Specialita / Manuale (55mm)',
    type: 'electric',
    burrType: 'flat',
    burrSize: '55mm Hardened Steel Flat Burrs',
    micronPerClick: 10,
    minClicks: 0,
    maxClicks: 60,
    zeroPointDesc: 'Knop mikrometrik stepless dengan kalibrasi titik temu burr (chirp point).',
    notes: 'Pilihan utama home barista & coffee bar prosumer di Indonesia untuk dial-in espresso presisi tinggi.',
    isPopularInIndonesia: true,
    categoryBadge: 'Prosumer Espresso Cafe',
    micronToSetting: (microns) => {
      const setting = Math.min(6, Math.max(0.5, Number((0.5 + (microns - 180) / 110).toFixed(1))));
      return {
        display: `Mikrometer #${setting}`,
        clicks: Math.round(setting * 10),
        detail: microns < 360 ? 'Zona Espresso 9 Bar' : 'Zona Filter (Putar Berlawanan Jam)',
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
    isPopularInIndonesia: true,
    categoryBadge: 'Favorit Manual Brew RI',
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
    id: 'hario-skerton',
    brand: 'Hario',
    name: 'Hario Skerton Pro / Mini Slim+',
    type: 'manual',
    burrType: 'conical',
    burrSize: 'Ceramic Conical Burrs',
    micronPerClick: 60,
    minClicks: 1,
    maxClicks: 16,
    zeroPointDesc: 'Putar roda gerigi bergerigi di bawah burr searah jarum jam hingga rapat.',
    notes: 'Grinder manual sejuta umat pemula di Indonesia. Menggunakan burr keramik dengan pengunci roda gerigi step.',
    isPopularInIndonesia: true,
    categoryBadge: 'Favorit Pemula Rumahan',
    micronToSetting: (microns) => {
      const clicks = Math.max(1, Math.min(16, Math.round(1 + (microns - 180) / 70)));
      return {
        display: `${clicks} Clicks`,
        clicks,
        detail: clicks <= 4 ? 'Fine (Moka Pot)' : clicks <= 9 ? 'Medium (V60)' : 'Coarse (French Press)',
      };
    },
  },
  {
    id: 'kinu-m47',
    brand: 'Kinu',
    name: 'M47 Phoenix / Simplicity',
    type: 'manual',
    burrType: 'conical',
    burrSize: '47mm Black Fusion Conical',
    micronPerClick: 10,
    minClicks: 0,
    maxClicks: 50,
    zeroPointDesc: 'Dial ulir mikrometer atas dengan 50 klik per putaran penuh (10 mikron per klik).',
    notes: 'Grinder manual kasta tertinggi dengan konstruksi presisi baja Jerman, sangat populer di kalangan antusias manual brew & lever espresso Indonesia.',
    isPopularInIndonesia: true,
    categoryBadge: 'Manual Presisi Premium',
    micronToSetting: (microns) => {
      const clicks = Math.round(microns / 10);
      const rotations = Math.floor(clicks / 50);
      const sub = clicks % 50;
      return {
        display: `${rotations}.${Math.floor(sub / 5)} (${clicks} Klik)`,
        clicks,
        detail: `${rotations} putaran penuh + ${sub} klik mikron`,
      };
    },
  },
  {
    id: 'mazzer-super-jolly',
    brand: 'Mazzer',
    name: 'Mazzer Super Jolly (Commercial)',
    type: 'electric',
    burrType: 'flat',
    burrSize: '64mm Hardened Steel Flat Burrs',
    micronPerClick: 20,
    minClicks: 0,
    maxClicks: 40,
    zeroPointDesc: 'Kerah stepless ulir kuningan dengan pin pengunci kalibrasi titik nol.',
    notes: 'Grinder komersial legendaris yang mengisi ratusan kafe gelombang ketiga di kota-kota besar Indonesia.',
    isPopularInIndonesia: true,
    categoryBadge: 'Komersial Cafe Klasik',
    micronToSetting: (microns) => {
      const notch = Math.min(10, Math.max(0.5, Number((0.5 + (microns - 200) / 80).toFixed(1))));
      return {
        display: `Collar Notch #${notch}`,
        clicks: Math.round(notch * 10),
        detail: 'Setting kalibrasi ring stepless Mazzer 64mm',
      };
    },
  },
  {
    id: 'delonghi-kg79',
    brand: "De'Longhi",
    name: "De'Longhi KG79 / Dedica Grinder",
    type: 'electric',
    burrType: 'flat',
    burrSize: 'Burr Wheel Elektrik',
    micronPerClick: 65,
    minClicks: 1,
    maxClicks: 16,
    zeroPointDesc: 'Pilihan selektor dial angka 1 (Fine) hingga 16 (Coarse).',
    notes: 'Grinder elektrik pemula yang sangat umum dibeli bersama mesin espresso rumahan seperti DeLonghi Dedica.',
    isPopularInIndonesia: true,
    categoryBadge: 'Elektrik Rumahan Entry',
    micronToSetting: (microns) => {
      const setting = Math.max(1, Math.min(16, Math.round(1 + (microns - 200) / 65)));
      return {
        display: `Level #${setting}`,
        clicks: setting,
        detail: setting <= 4 ? 'Zona Fine' : setting <= 10 ? 'Zona Medium' : 'Zona Coarse',
      };
    },
  },
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
    isPopularInIndonesia: true,
    categoryBadge: 'Standar Kejuaraan Dunia',
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

  const [categoryFilter, setCategoryFilter] = useState<'indonesia' | 'all' | 'manual' | 'electric'>('indonesia');

  const filteredGrinders = useMemo(() => {
    return POPULAR_GRINDERS.filter((g) => {
      // Category filter
      if (categoryFilter === 'indonesia' && !g.isPopularInIndonesia) return false;
      if (categoryFilter === 'manual' && g.type !== 'manual') return false;
      if (categoryFilter === 'electric' && g.type !== 'electric') return false;

      // Search query filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        g.brand.toLowerCase().includes(q) ||
        g.name.toLowerCase().includes(q) ||
        g.burrType.toLowerCase().includes(q) ||
        (g.categoryBadge && g.categoryBadge.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, categoryFilter]);

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

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2.5 rounded-xl bg-paper-50 border border-paper-300 text-roast-700 hover:text-roast-950 transition-colors"
              title={soundEnabled ? 'Matikan efek audio dial click' : 'Nyalakan efek audio dial click'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-cherry-700" /> : <VolumeX className="w-4 h-4 text-roast-400" />}
            </button>

            <button
              onClick={() => handleSelectMethod(BREW_METHOD_PROFILES[4])}
              className="px-3.5 py-2 rounded-xl bg-roast-950 text-paper-50 hover:bg-roast-900 active:scale-[0.98] font-mono text-xs font-semibold flex items-center gap-2 shadow-xs transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5 text-crema-300" />
              <span>Reset ke V60 (620μm)</span>
            </button>
          </div>
        </div>

        {/* 1. Target Brew Method Presets Selector */}
        <div className="mt-5 space-y-2.5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 font-semibold block">
            1. PILIH METODE SEDUH TARGET (QUICK MICRON PRESETS):
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {BREW_METHOD_PROFILES.map((method) => {
              const isSelected = selectedMethodId === method.id;
              return (
                <button
                  key={method.id}
                  onClick={() => handleSelectMethod(method)}
                  className={`p-3 rounded-xl border text-left transition-all active:scale-[0.98] flex flex-col justify-between ${
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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-paper-300 pb-3">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-cherry-700" />
            <h4 className="font-serif font-bold text-lg text-roast-950">
              Hasil Konversi Pada {filteredGrinders.length} Grinder ({POPULAR_GRINDERS.length} Total Database)
            </h4>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
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

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setCategoryFilter('indonesia')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              categoryFilter === 'indonesia'
                ? 'bg-roast-950 text-paper-50 shadow-xs ring-1 ring-roast-900'
                : 'bg-paper-100 hover:bg-paper-200 text-roast-700 border border-paper-300'
            }`}
          >
            🇮🇩 Populer di Indonesia
          </button>
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              categoryFilter === 'all'
                ? 'bg-roast-950 text-paper-50 shadow-xs ring-1 ring-roast-900'
                : 'bg-paper-100 hover:bg-paper-200 text-roast-700 border border-paper-300'
            }`}
          >
            Semua Grinder ({POPULAR_GRINDERS.length})
          </button>
          <button
            onClick={() => setCategoryFilter('manual')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              categoryFilter === 'manual'
                ? 'bg-roast-950 text-paper-50 shadow-xs ring-1 ring-roast-900'
                : 'bg-paper-100 hover:bg-paper-200 text-roast-700 border border-paper-300'
            }`}
          >
            Manual Hand Grinder
          </button>
          <button
            onClick={() => setCategoryFilter('electric')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              categoryFilter === 'electric'
                ? 'bg-roast-950 text-paper-50 shadow-xs ring-1 ring-roast-900'
                : 'bg-paper-100 hover:bg-paper-200 text-roast-700 border border-paper-300'
            }`}
          >
            Electric Cafe / Pro
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGrinders.map((grinder) => {
            const setting = grinder.micronToSetting(targetMicrons);
            return (
              <div
                key={grinder.id}
                className="bg-paper-50 border border-paper-300 rounded-xl p-4.5 hover:border-roast-700 transition-all flex flex-col justify-between shadow-2xs group hover:shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-cherry-700 font-bold bg-cherry-50 px-2 py-0.5 rounded border border-cherry-200">
                        {grinder.brand}
                      </span>
                      {grinder.categoryBadge && (
                        <span className="font-mono text-[9px] text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 font-semibold">
                          {grinder.categoryBadge}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-[9px] text-roast-500 uppercase">
                      {grinder.type === 'manual' ? 'Hand' : 'Electric'}
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

                  {/* Tactile Visual Micron Spectrum Gauge */}
                  <div className="space-y-1.5 my-3 bg-paper-100/60 p-2.5 rounded-xl border border-paper-200">
                    <div className="flex justify-between text-[9px] font-mono text-roast-500">
                      <span>Fine (100μ)</span>
                      <span className="text-roast-900 font-bold bg-paper-50 px-1.5 py-0.2 rounded border border-paper-300">
                        {targetMicrons} μm
                      </span>
                      <span>Coarse (1300μ)</span>
                    </div>
                    <div className="w-full h-2 bg-paper-200 rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-gradient-to-r from-cherry-700 via-amber-600 to-roast-900 rounded-full transition-all duration-150"
                        style={{ width: `${Math.min(100, Math.max(6, ((targetMicrons - 100) / 1200) * 100))}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-2 pt-3 border-t border-paper-200/80 text-[11px] space-y-1">
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
