'use client';

import React, { useState, useMemo } from 'react';
import {
  Layers,
  Sparkles,
  Sliders,
  RotateCcw,
  Copy,
  Check,
  Coffee,
  Coins,
  ShieldAlert,
  Flame,
  Droplets,
  Plus,
  Trash2,
  Lock,
  Unlock,
  Info,
  ArrowRight,
  BarChart3,
  Percent,
} from 'lucide-react';

export interface BeanOrigin {
  id: string;
  name: string;
  subRegion: string;
  species: 'Arabica' | 'Fine Robusta';
  process: string;
  flavorNotes: string[];
  altitude: string;
  scores: {
    acidity: number; // 0-10
    sweetness: number; // 0-10
    body: number; // 0-10
    bitterness: number; // 0-10
    crema: number; // 0-10
    caffeinePct: number; // e.g. 1.2% or 2.2%
  };
  pricePerKgRoasted: number; // in IDR
  roleDesc: string;
  colorAccent: string;
}

export const BEAN_LIBRARY: BeanOrigin[] = [
  {
    id: 'temanggung-robusta',
    name: 'Temanggung Fine Robusta',
    subRegion: 'Gunung Sindoro-Sumbing, Jawa Tengah',
    species: 'Fine Robusta',
    process: 'Natural (Kering Ceri Utuh)',
    flavorNotes: ['Kacang Sangrai', 'Cokelat Hitam', 'Gula Kelapa', 'Krim Tebal'],
    altitude: '700 - 900 mdpl',
    scores: {
      acidity: 1.5,
      sweetness: 6.8,
      body: 9.6,
      bitterness: 6.2,
      crema: 9.8,
      caffeinePct: 2.2,
    },
    pricePerKgRoasted: 135000,
    roleDesc: 'Jangkar crema emas super tebal & pemotong dominan rasa susu / gula aren.',
    colorAccent: '#78350F',
  },
  {
    id: 'dampit-robusta',
    name: 'Dampit Malang Fine Robusta',
    subRegion: 'Lereng Gunung Semeru, Jawa Timur',
    species: 'Fine Robusta',
    process: 'Full Washed (Rendam Fermentasi)',
    flavorNotes: ['Dark Cocoa', 'Molasses', 'Kacang Kenari', 'Malt'],
    altitude: '800 - 950 mdpl',
    scores: {
      acidity: 2.0,
      sweetness: 7.2,
      body: 9.0,
      bitterness: 5.6,
      crema: 9.3,
      caffeinePct: 2.1,
    },
    pricePerKgRoasted: 145000,
    roleDesc: 'Karakter cokelat bersih lembut tanpa rasa apek dengan mikro-crema elastis.',
    colorAccent: '#854D0E',
  },
  {
    id: 'flores-bajawa',
    name: 'Flores Bajawa Arabica',
    subRegion: 'Dataran Tinggi Ngada, NTT',
    species: 'Arabica',
    process: 'Fully Washed',
    flavorNotes: ['Milk Chocolate', 'Gula Merah', 'Kulit Jeruk', 'Karamel'],
    altitude: '1.200 - 1.550 mdpl',
    scores: {
      acidity: 5.5,
      sweetness: 8.8,
      body: 7.5,
      bitterness: 3.5,
      crema: 7.2,
      caffeinePct: 1.2,
    },
    pricePerKgRoasted: 220000,
    roleDesc: 'Pondasi manis karamel dan cokelat susu yang stabil untuk base latte.',
    colorAccent: '#B45309',
  },
  {
    id: 'gayo-wet-hulled',
    name: 'Aceh Gayo Giling Basah',
    subRegion: 'Bener Meriah & Takengon, Aceh',
    species: 'Arabica',
    process: 'Giling Basah (Wet Hulled)',
    flavorNotes: ['Kayu Manis', 'Cedar', 'Rempah Gelap', 'Teh Hitam Pekat'],
    altitude: '1.300 - 1.650 mdpl',
    scores: {
      acidity: 4.2,
      sweetness: 7.5,
      body: 8.8,
      bitterness: 4.5,
      crema: 8.0,
      caffeinePct: 1.25,
    },
    pricePerKgRoasted: 215000,
    roleDesc: 'Memberikan kedalaman bodi sirupik, rempah hangat, dan aroma kompleksitas.',
    colorAccent: '#1E3A1E',
  },
  {
    id: 'preanger-honey',
    name: 'West Java Preanger Honey',
    subRegion: 'Pangalengan / Gn. Tilu, Jawa Barat',
    species: 'Arabica',
    process: 'Yellow Honey',
    flavorNotes: ['Bunga Melati', 'Madu Hutan', 'Persik (Peach)', 'Apel Manis'],
    altitude: '1.400 - 1.700 mdpl',
    scores: {
      acidity: 7.6,
      sweetness: 9.3,
      body: 6.2,
      bitterness: 2.2,
      crema: 6.4,
      caffeinePct: 1.15,
    },
    pricePerKgRoasted: 245000,
    roleDesc: 'Injeksi keharuman floral anggun dan rasa manis nektar buah persik.',
    colorAccent: '#D97706',
  },
  {
    id: 'bali-kintamani',
    name: 'Bali Kintamani Natural',
    subRegion: 'Lereng Gunung Batur, Bali',
    species: 'Arabica',
    process: 'Natural Slow Dry',
    flavorNotes: ['Jeruk Keprok', 'Selai Stroberi', 'Nangka Manis', 'Kakao'],
    altitude: '1.250 - 1.500 mdpl',
    scores: {
      acidity: 8.2,
      sweetness: 8.6,
      body: 6.6,
      bitterness: 2.6,
      crema: 6.5,
      caffeinePct: 1.2,
    },
    pricePerKgRoasted: 260000,
    roleDesc: 'Ledakan rasa buah tropis segar, keasaman sitrun hidup, dan aftertaste manis.',
    colorAccent: '#EA580C',
  },
  {
    id: 'brazil-cerrado',
    name: 'Brazil Cerrado Mineiro',
    subRegion: 'Minas Gerais, Brazil',
    species: 'Arabica',
    process: 'Pulped Natural',
    flavorNotes: ['Kacang Hazelnut', 'Karamel Mentega', 'Biskuit Gandum', 'Cokelat'],
    altitude: '1.000 - 1.200 mdpl',
    scores: {
      acidity: 3.8,
      sweetness: 8.2,
      body: 7.4,
      bitterness: 3.6,
      crema: 7.6,
      caffeinePct: 1.2,
    },
    pricePerKgRoasted: 195000,
    roleDesc: 'Karakter nutty-caramel klasik dunia dengan keasaman rendah yang bersahabat.',
    colorAccent: '#92400E',
  },
  {
    id: 'ethiopia-yirgacheffe',
    name: 'Ethiopia Yirgacheffe Washed',
    subRegion: 'Gedeo Zone, Southern Ethiopia',
    species: 'Arabica',
    process: 'Fully Washed',
    flavorNotes: ['Bergamot', 'Earl Grey', 'Lemon Manis', 'Bunga Lili'],
    altitude: '1.800 - 2.200 mdpl',
    scores: {
      acidity: 9.4,
      sweetness: 8.4,
      body: 4.8,
      bitterness: 1.8,
      crema: 5.6,
      caffeinePct: 1.1,
    },
    pricePerKgRoasted: 320000,
    roleDesc: 'Aksen keasaman sitrat cerah, aroma teh bergamot, dan kejernihan ekstra.',
    colorAccent: '#0284C7',
  },
];

export interface BlendPreset {
  id: string;
  name: string;
  targetDrink: string;
  tagline: string;
  components: { beanId: string; percentage: number }[];
}

export const BLEND_PRESETS: BlendPreset[] = [
  {
    id: 'kopi-susu-hero',
    name: 'Modern Es Kopi Susu (70/30)',
    targetDrink: 'Es Kopi Susu Gula Aren & Macchiato Dingin',
    tagline: 'Body tebal tahan es batu & susu kental tanpa terasa pahit gosong.',
    components: [
      { beanId: 'temanggung-robusta', percentage: 70 },
      { beanId: 'flores-bajawa', percentage: 30 },
    ],
  },
  {
    id: 'house-specialty',
    name: 'Specialty House Espresso (60/40)',
    targetDrink: 'Flat White, Hot Latte, & Double Espresso',
    tagline: '100% Arabica manis karamel cokelat dengan semburat sitrus halus.',
    components: [
      { beanId: 'flores-bajawa', percentage: 60 },
      { beanId: 'bali-kintamani', percentage: 40 },
    ],
  },
  {
    id: 'nusantara-heritage',
    name: 'Nusantara Heritage (40/30/30)',
    targetDrink: 'Americano, Cappuccino, & Moka Pot',
    tagline: 'Kedalaman rempah Gayo, crema tebal Dampit, dan manis madu Preanger.',
    components: [
      { beanId: 'gayo-wet-hulled', percentage: 40 },
      { beanId: 'dampit-robusta', percentage: 30 },
      { beanId: 'preanger-honey', percentage: 30 },
    ],
  },
  {
    id: 'nordic-clarity',
    name: 'Nordic High-Clarity Espresso (60/40)',
    targetDrink: 'Single Origin Style Espresso & Aeropress',
    tagline: 'Super cerah, floral melati, peach, dan rasa teh bergamot elegan.',
    components: [
      { beanId: 'preanger-honey', percentage: 60 },
      { beanId: 'ethiopia-yirgacheffe', percentage: 40 },
    ],
  },
  {
    id: 'cafe-workhorse',
    name: 'Commercial Cafe Workhorse (50/50)',
    targetDrink: 'Semua Menu Kopi Kafe Volume Tinggi',
    tagline: 'HPP ekonomis, rasa nutty cokelat ramah lidah awam, crema stabil.',
    components: [
      { beanId: 'dampit-robusta', percentage: 50 },
      { beanId: 'brazil-cerrado', percentage: 50 },
    ],
  },
];

interface BlendSlot {
  beanId: string;
  percentage: number;
  isLocked: boolean;
}

export function BlendDesigner() {
  const [blendName, setBlendName] = useState('My Signature Kafe Blend');
  const [slots, setSlots] = useState<BlendSlot[]>([
    { beanId: 'temanggung-robusta', percentage: 60, isLocked: false },
    { beanId: 'flores-bajawa', percentage: 40, isLocked: false },
  ]);

  // Economic inputs
  const [doseGrams, setDoseGrams] = useState<number>(18);
  const [retailPricePerCup, setRetailPricePerCup] = useState<number>(22000);
  const [targetCupsPerDay, setTargetCupsPerDay] = useState<number>(80);
  const [copied, setCopied] = useState(false);

  // Total percentage check
  const totalPercentage = useMemo(() => {
    return slots.reduce((acc, slot) => acc + slot.percentage, 0);
  }, [slots]);

  // Auto-balance unlocked slots to 100%
  const handleAutoBalance = () => {
    if (slots.length === 0) return;
    const lockedSlots = slots.filter((s) => s.isLocked);
    const unlockedSlots = slots.filter((s) => !s.isLocked);

    const lockedTotal = lockedSlots.reduce((acc, s) => acc + s.percentage, 0);
    const remainingToDistribute = Math.max(0, 100 - lockedTotal);

    if (unlockedSlots.length === 0) return;

    const share = Math.floor(remainingToDistribute / unlockedSlots.length);
    const remainder = remainingToDistribute % unlockedSlots.length;

    const newSlots = slots.map((slot) => {
      if (slot.isLocked) return slot;
      const index = unlockedSlots.indexOf(slot);
      return {
        ...slot,
        percentage: share + (index < remainder ? 1 : 0),
      };
    });

    setSlots(newSlots);
  };

  // Add a new bean slot (up to 4)
  const handleAddSlot = () => {
    if (slots.length >= 4) return;
    // Find a bean not yet in slots, or default to any
    const usedIds = slots.map((s) => s.beanId);
    const availableBean = BEAN_LIBRARY.find((b) => !usedIds.includes(b.id)) || BEAN_LIBRARY[0];
    setSlots([...slots, { beanId: availableBean.id, percentage: 0, isLocked: false }]);
  };

  // Remove slot
  const handleRemoveSlot = (index: number) => {
    if (slots.length <= 1) return;
    const newSlots = slots.filter((_, i) => i !== index);
    setSlots(newSlots);
  };

  // Update slot percentage
  const handlePercentageChange = (index: number, newPct: number) => {
    const val = Math.max(0, Math.min(100, newPct));
    const newSlots = [...slots];
    newSlots[index] = { ...newSlots[index], percentage: val };
    setSlots(newSlots);
  };

  // Load preset
  const handleApplyPreset = (preset: BlendPreset) => {
    setBlendName(preset.name);
    setSlots(
      preset.components.map((c) => ({
        beanId: c.beanId,
        percentage: c.percentage,
        isLocked: false,
      }))
    );
  };

  // Calculated Blend Sensory Metrics
  const metrics = useMemo(() => {
    if (totalPercentage === 0) {
      return {
        acidity: 0,
        sweetness: 0,
        body: 0,
        bitterness: 0,
        crema: 0,
        caffeineMgPerDose: 0,
        hppPerKg: 0,
        arabicaRatio: 0,
        robustaRatio: 0,
      };
    }

    let weightedAcidity = 0;
    let weightedSweetness = 0;
    let weightedBody = 0;
    let weightedBitterness = 0;
    let weightedCrema = 0;
    let weightedCaffeinePct = 0;
    let weightedHpp = 0;
    let arabicaPct = 0;
    let robustaPct = 0;

    slots.forEach((slot) => {
      const bean = BEAN_LIBRARY.find((b) => b.id === slot.beanId);
      if (!bean) return;
      const weight = slot.percentage / totalPercentage;

      weightedAcidity += bean.scores.acidity * weight;
      weightedSweetness += bean.scores.sweetness * weight;
      weightedBody += bean.scores.body * weight;
      weightedBitterness += bean.scores.bitterness * weight;
      weightedCrema += bean.scores.crema * weight;
      weightedCaffeinePct += bean.scores.caffeinePct * weight;
      weightedHpp += bean.pricePerKgRoasted * weight;

      if (bean.species === 'Arabica') arabicaPct += slot.percentage;
      if (bean.species === 'Fine Robusta') robustaPct += slot.percentage;
    });

    // 18g dose with e.g. 1.5% caffeine = 18000mg * 0.015 * extraction efficiency (~85%) = ~229 mg
    const caffeineMgPerDose = (doseGrams * 1000 * (weightedCaffeinePct / 100) * 0.82);

    return {
      acidity: Number(weightedAcidity.toFixed(1)),
      sweetness: Number(weightedSweetness.toFixed(1)),
      body: Number(weightedBody.toFixed(1)),
      bitterness: Number(weightedBitterness.toFixed(1)),
      crema: Number(weightedCrema.toFixed(1)),
      caffeineMgPerDose: Math.round(caffeineMgPerDose),
      hppPerKg: Math.round(weightedHpp),
      arabicaRatio: Math.round(arabicaPct),
      robustaRatio: Math.round(robustaPct),
    };
  }, [slots, totalPercentage, doseGrams]);

  // Economic calculations
  const economics = useMemo(() => {
    // 1 kg roasted = (1000 / doseGrams) * 0.95 (5% purging / grinder waste)
    const shotsPerKg = Math.floor((1000 / doseGrams) * 0.95);
    const costPerShot = shotsPerKg > 0 ? Math.round(metrics.hppPerKg / shotsPerKg) : 0;
    const grossMarginRp = retailPricePerCup - costPerShot;
    const grossMarginPct = retailPricePerCup > 0 ? Math.round((grossMarginRp / retailPricePerCup) * 100) : 0;
    const monthlyCoffeeSpend = Math.round((targetCupsPerDay * 30 * doseGrams / 1000) * metrics.hppPerKg);
    const monthlyProfitContribution = Math.round(targetCupsPerDay * 30 * grossMarginRp);

    return {
      shotsPerKg,
      costPerShot,
      grossMarginRp,
      grossMarginPct,
      monthlyCoffeeSpend,
      monthlyProfitContribution,
    };
  }, [metrics.hppPerKg, doseGrams, retailPricePerCup, targetCupsPerDay]);

  // Compatibility Scores (0-100)
  const compatibility = useMemo(() => {
    // Es Kopi Susu requires heavy body, high crema, lower/moderate acidity, robust milk cut-through
    const esKopiSusu = Math.min(
      100,
      Math.round(
        (metrics.body * 4.5 + metrics.crema * 3.5 + metrics.sweetness * 2.0 - metrics.acidity * 1.5) * 1.15
      )
    );

    // Hot Latte / Flat White requires high sweetness, balanced body, silky finish
    const latteMatch = Math.min(
      100,
      Math.round(
        (metrics.sweetness * 5.0 + metrics.body * 3.0 + (10 - Math.abs(metrics.acidity - 5.0)) * 2.0) * 1.05
      )
    );

    // Straight Double Espresso requires high complexity, balanced acidity/sweetness, not harsh
    const straightEspresso = Math.min(
      100,
      Math.round(
        (metrics.sweetness * 4.0 + metrics.acidity * 3.0 + metrics.body * 2.0 + (10 - metrics.bitterness) * 1.0) * 1.05
      )
    );

    return {
      esKopiSusu: Math.max(20, esKopiSusu),
      latteMatch: Math.max(20, latteMatch),
      straightEspresso: Math.max(20, straightEspresso),
    };
  }, [metrics]);

  // Dynamic dominant flavor notes
  const dominantFlavors = useMemo(() => {
    const noteCounts: { [key: string]: number } = {};
    slots.forEach((slot) => {
      const bean = BEAN_LIBRARY.find((b) => b.id === slot.beanId);
      if (!bean) return;
      bean.flavorNotes.forEach((note) => {
        noteCounts[note] = (noteCounts[note] || 0) + slot.percentage;
      });
    });

    return Object.entries(noteCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([note]) => note);
  }, [slots]);

  // Copy blend sheet
  const handleCopyRecipe = () => {
    const lines = [
      `=== FORMULA RACIKAN: ${blendName.toUpperCase()} ===`,
      `Komposisi (${metrics.arabicaRatio}% Arabica / ${metrics.robustaRatio}% Robusta):`,
      ...slots.map((slot) => {
        const b = BEAN_LIBRARY.find((x) => x.id === slot.beanId);
        return `• ${slot.percentage}% - ${b?.name} (${b?.process})`;
      }),
      '',
      `Sensory Profile:`,
      `• Body: ${metrics.body}/10 | Sweetness: ${metrics.sweetness}/10 | Acidity: ${metrics.acidity}/10`,
      `• Crema: ${metrics.crema}/10 | Bitterness: ${metrics.bitterness}/10`,
      `• Dominant Notes: ${dominantFlavors.join(', ')}`,
      '',
      `Kalkulasi Finansial (Dosis ${doseGrams}g):`,
      `• HPP Biji Kopi per kg: Rp ${metrics.hppPerKg.toLocaleString('id-ID')}`,
      `• HPP Ekstraksi per cup: Rp ${economics.costPerShot.toLocaleString('id-ID')}`,
      `• Potensi Margin (Harga Jual Rp ${retailPricePerCup.toLocaleString('id-ID')}): ${economics.grossMarginPct}%`,
      '',
      `Disimulasikan via CherryEdu Blend Designer (cherryedu.id)`,
    ];

    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 font-sans animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-paper-100/80 border border-paper-300 rounded-2xl p-5 sm:p-7 shadow-xs relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cherry-700/5 blur-3xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold bg-cherry-50 px-2 py-0.5 rounded border border-cherry-200">
                [ SIMULATOR FORMULASI HOUSE BLEND KAFE ]
              </span>
              <span className="font-mono text-[10px] text-roast-500 bg-paper-200/70 px-2 py-0.5 rounded">
                Multi-Origin Radar & HPP Matrix
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-roast-950 tracking-tight">
              Virtual Blend Designer & Unit Economics
            </h2>
            <p className="text-xs sm:text-sm text-roast-600 max-w-2xl leading-relaxed">
              Rancang profil rasa house blend kafe Anda secara presisi. Padukan Fine Robusta Nusantara dengan Arabica specialty, simulasikan ketebalan crema, kompatibilitas susu, serta hitung HPP per cangkir secara otomatis.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto">
            <button
              onClick={handleCopyRecipe}
              className="px-3.5 py-2 rounded-xl bg-roast-950 text-paper-50 hover:bg-roast-900 active:scale-[0.98] font-mono text-xs font-semibold flex items-center gap-2 shadow-xs transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-crema-300" />}
              <span>{copied ? 'Tersalin ke Clipboard!' : 'Salin Formula Resep'}</span>
            </button>
          </div>
        </div>

        {/* Quick Presets Bar */}
        <div className="mt-6 pt-5 border-t border-paper-200">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-roast-500 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cherry-700" /> Resep Blend Terbukti (Industry Presets):
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {BLEND_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handleApplyPreset(preset)}
                className="px-3 py-1.5 rounded-lg bg-paper-50 hover:bg-paper-200/90 border border-paper-300 hover:border-roast-400 text-roast-800 text-xs transition-all active:scale-[0.98] flex items-center gap-1.5 shadow-2xs text-left"
              >
                <Coffee className="w-3 h-3 text-roast-500" />
                <span className="font-medium">{preset.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid: Blend Formulator (Left) + Visual & Metrics Preview (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Blend Slots & Percentage Sliders (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 sm:p-6 shadow-xs space-y-6">
            {/* Blend Title Input */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-paper-200 pb-4">
              <div className="flex-1">
                <label className="font-mono text-[10px] uppercase text-roast-500 block mb-1 font-semibold">
                  Nama Racikan (Blend Identity)
                </label>
                <input
                  type="text"
                  value={blendName}
                  onChange={(e) => setBlendName(e.target.value)}
                  className="w-full bg-paper-100/60 border border-paper-300 focus:border-cherry-700 focus:bg-paper-50 rounded-lg px-3 py-1.5 font-serif font-bold text-roast-950 text-base outline-none transition-colors"
                  placeholder="Contoh: Golden Crema Es Kopi Susu Blend"
                />
              </div>

              {/* Total Percentage Gauge */}
              <div className="flex items-center gap-3">
                <div
                  className={`px-3 py-1.5 rounded-lg border font-mono text-xs font-bold flex items-center gap-1.5 ${
                    totalPercentage === 100
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      : 'bg-amber-50 text-amber-800 border-amber-300 animate-pulse'
                  }`}
                >
                  <Percent className="w-3.5 h-3.5" />
                  <span>Total: {totalPercentage}%</span>
                </div>

                {totalPercentage !== 100 && (
                  <button
                    onClick={handleAutoBalance}
                    className="px-2.5 py-1.5 bg-paper-200 hover:bg-paper-300 text-roast-800 rounded-lg font-mono text-[11px] font-semibold transition-colors active:scale-[0.98]"
                    title="Seimbangkan sisa persentase agar total persis 100%"
                  >
                    Auto-Balance (100%)
                  </button>
                )}
              </div>
            </div>

            {/* Warning if not 100% */}
            {totalPercentage !== 100 && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-semibold">Persentase Belum Genap 100% (Saat ini: {totalPercentage}%)</p>
                  <p className="text-[11px] text-amber-800">
                    Klik tombol <strong>&ldquo;Auto-Balance (100%)&rdquo;</strong> untuk menyesuaikan slot yang tidak terkunci secara proporsional.
                  </p>
                </div>
              </div>
            )}

            {/* Component Slots */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-cherry-700" /> Komponen Biji ({slots.length}/4 Origin)
                </span>
                {slots.length < 4 && (
                  <button
                    onClick={handleAddSlot}
                    className="px-2.5 py-1 bg-paper-100 hover:bg-paper-200 border border-paper-300 text-roast-800 rounded-md font-mono text-[11px] flex items-center gap-1 transition-all active:scale-[0.98]"
                  >
                    <Plus className="w-3.5 h-3.5 text-cherry-700" />
                    <span>Tambah Origin</span>
                  </button>
                )}
              </div>

              {slots.map((slot, index) => {
                const currentBean = BEAN_LIBRARY.find((b) => b.id === slot.beanId) || BEAN_LIBRARY[0];

                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-paper-300 bg-paper-100/50 space-y-3.5 hover:border-paper-400 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2 flex-1">
                        <span className="w-5 h-5 rounded-full bg-roast-950 text-paper-50 font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                          {index + 1}
                        </span>
                        {/* Bean Selector Dropdown */}
                        <select
                          value={slot.beanId}
                          onChange={(e) => {
                            const newSlots = [...slots];
                            newSlots[index] = { ...newSlots[index], beanId: e.target.value };
                            setSlots(newSlots);
                          }}
                          className="w-full sm:w-auto flex-1 bg-paper-50 border border-paper-300 rounded-lg px-2.5 py-1.5 font-sans font-semibold text-xs text-roast-950 outline-none focus:border-cherry-700 transition-colors"
                        >
                          {BEAN_LIBRARY.map((b) => (
                            <option key={b.id} value={b.id}>
                              [{b.species === 'Arabica' ? 'Arabica' : 'Robusta'}] {b.name} ({b.process}) — Rp {b.pricePerKgRoasted.toLocaleString('id-ID')}/kg
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto">
                        {/* Lock Button */}
                        <button
                          onClick={() => {
                            const newSlots = [...slots];
                            newSlots[index] = { ...newSlots[index], isLocked: !newSlots[index].isLocked };
                            setSlots(newSlots);
                          }}
                          className={`p-1.5 rounded-md border transition-colors ${
                            slot.isLocked
                              ? 'bg-amber-100 border-amber-300 text-amber-800'
                              : 'bg-paper-50 border-paper-300 text-roast-400 hover:text-roast-700'
                          }`}
                          title={slot.isLocked ? 'Slot terkunci dari auto-balance' : 'Kunci slot'}
                        >
                          {slot.isLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                        </button>

                        {/* Remove Slot */}
                        {slots.length > 1 && (
                          <button
                            onClick={() => handleRemoveSlot(index)}
                            className="p-1.5 rounded-md border border-paper-300 bg-paper-50 text-roast-400 hover:text-rose-600 hover:border-rose-300 transition-colors"
                            title="Hapus komponen ini"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Percentage Slider & Quick Adjust */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-roast-600">Rasio Porsi:</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handlePercentageChange(index, slot.percentage - 5)}
                            className="w-5 h-5 rounded bg-paper-200 hover:bg-paper-300 text-roast-800 font-bold flex items-center justify-center text-xs"
                          >
                            -
                          </button>
                          <span className="font-bold text-roast-950 w-10 text-center font-mono">
                            {slot.percentage}%
                          </span>
                          <button
                            onClick={() => handlePercentageChange(index, slot.percentage + 5)}
                            className="w-5 h-5 rounded bg-paper-200 hover:bg-paper-300 text-roast-800 font-bold flex items-center justify-center text-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={slot.percentage}
                        onChange={(e) => handlePercentageChange(index, parseInt(e.target.value, 10))}
                        className="w-full accent-cherry-700 h-1.5 bg-paper-300 rounded-lg cursor-pointer"
                      />
                    </div>

                    {/* Bean Micro Description */}
                    <div className="pt-2 border-t border-paper-200/60 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-roast-500 font-mono">Notes:</span>
                        {currentBean.flavorNotes.map((note, ni) => (
                          <span
                            key={ni}
                            className="px-1.5 py-0.5 bg-paper-50 border border-paper-300 rounded text-roast-700 text-[10px]"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                      <span className="text-roast-500 font-mono text-[10px]">
                        HPP: Rp {(currentBean.pricePerKgRoasted * (slot.percentage / 100)).toLocaleString('id-ID')}/kg
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Arabica vs Robusta Ratio Bar */}
            <div className="p-4 rounded-xl bg-paper-100/70 border border-paper-300 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-roast-700 font-semibold flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cherry-700 inline-block" /> Arabica: {metrics.arabicaRatio}%
                </span>
                <span className="text-roast-700 font-semibold flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-800 inline-block" /> Robusta: {metrics.robustaRatio}%
                </span>
              </div>
              <div className="h-3 w-full bg-paper-300 rounded-full overflow-hidden flex">
                <div
                  className="bg-cherry-700 transition-all duration-300"
                  style={{ width: `${metrics.arabicaRatio}%` }}
                  title={`Arabica ${metrics.arabicaRatio}%`}
                />
                <div
                  className="bg-amber-800 transition-all duration-300"
                  style={{ width: `${metrics.robustaRatio}%` }}
                  title={`Robusta ${metrics.robustaRatio}%`}
                />
              </div>
            </div>

            {/* Financial Parameters Panel */}
            <div className="pt-4 border-t border-paper-300 space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-amber-600" /> Parameter Biaya Kafe (Unit Economics)
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-paper-100/60 border border-paper-300 space-y-1">
                  <label className="font-mono text-[10px] text-roast-500 block uppercase">
                    Dosis Kopi / Cup:
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      min="14"
                      max="24"
                      value={doseGrams}
                      onChange={(e) => setDoseGrams(parseFloat(e.target.value) || 18)}
                      className="w-16 bg-paper-50 border border-paper-300 px-2 py-1 rounded text-xs font-mono font-bold text-roast-950 outline-none"
                    />
                    <span className="font-mono text-xs text-roast-600">gram</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-paper-100/60 border border-paper-300 space-y-1">
                  <label className="font-mono text-[10px] text-roast-500 block uppercase">
                    Harga Jual / Cup:
                  </label>
                  <div className="flex items-center gap-1">
                    <span className="font-mono text-xs text-roast-500">Rp</span>
                    <input
                      type="number"
                      step="1000"
                      value={retailPricePerCup}
                      onChange={(e) => setRetailPricePerCup(parseInt(e.target.value, 10) || 20000)}
                      className="w-full bg-paper-50 border border-paper-300 px-2 py-1 rounded text-xs font-mono font-bold text-roast-950 outline-none"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-paper-100/60 border border-paper-300 space-y-1">
                  <label className="font-mono text-[10px] text-roast-500 block uppercase">
                    Target Penjualan:
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      min="10"
                      max="500"
                      value={targetCupsPerDay}
                      onChange={(e) => setTargetCupsPerDay(parseInt(e.target.value, 10) || 50)}
                      className="w-16 bg-paper-50 border border-paper-300 px-2 py-1 rounded text-xs font-mono font-bold text-roast-950 outline-none"
                    />
                    <span className="font-mono text-xs text-roast-600">cups/hari</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Visual Espresso Cross-Section, Sensory Radar & Economics (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Visual Cup Simulation */}
          <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-paper-200 pb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold flex items-center gap-1.5">
                <Coffee className="w-4 h-4 text-cherry-700" /> Simulasi Cangkir & Crema
              </span>
              <span className="font-mono text-[10px] text-roast-500 bg-paper-200 px-2 py-0.5 rounded">
                Dose: {doseGrams}g | Yield: ~36ml
              </span>
            </div>

            {/* Cup Graphic Representation */}
            <div className="flex items-center justify-center py-4">
              <div className="relative w-44 h-48 bg-paper-100 border-4 border-roast-800 rounded-b-[40px] overflow-hidden shadow-inner flex flex-col justify-end p-1">
                {/* Crema Layer */}
                <div
                  className="w-full bg-gradient-to-b from-crema-300 via-crema-400 to-amber-700 rounded-t-sm shadow-xs transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                  style={{
                    height: `${Math.min(50, Math.max(12, metrics.crema * 4.5))}%`,
                  }}
                >
                  {/* Subtle crema tiger stripes */}
                  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#582900_1px,transparent_1px)] [background-size:6px_6px]" />
                  <span className="font-mono text-[9px] font-bold text-roast-950 uppercase tracking-widest relative z-10 drop-shadow-2xs">
                    CREMA ({Math.round(metrics.crema * 4.5)}%)
                  </span>
                </div>

                {/* Espresso Body Liquid Layer */}
                <div className="w-full h-full bg-gradient-to-b from-roast-900 to-roast-950 flex flex-col items-center justify-center text-paper-100 p-2 text-center">
                  <span className="font-serif italic text-xs font-semibold text-crema-200">
                    Espresso Body
                  </span>
                  <span className="font-mono text-[9px] text-paper-400 mt-0.5">
                    ~{metrics.caffeineMgPerDose} mg Kafein
                  </span>
                </div>
              </div>
            </div>

            {/* Sensory Attribute Bars */}
            <div className="space-y-2.5 pt-2">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-roast-700">Tingkat Body / Viskositas:</span>
                  <span className="font-bold text-roast-950">{metrics.body} / 10</span>
                </div>
                <div className="h-2 w-full bg-paper-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-900 rounded-full transition-all duration-300" style={{ width: `${metrics.body * 10}%` }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-roast-700">Tingkat Kemanisan (Sweetness):</span>
                  <span className="font-bold text-roast-950">{metrics.sweetness} / 10</span>
                </div>
                <div className="h-2 w-full bg-paper-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full transition-all duration-300" style={{ width: `${metrics.sweetness * 10}%` }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-roast-700">Tingkat Keasaman (Acidity):</span>
                  <span className="font-bold text-roast-950">{metrics.acidity} / 10</span>
                </div>
                <div className="h-2 w-full bg-paper-200 rounded-full overflow-hidden">
                  <div className="h-full bg-cherry-600 rounded-full transition-all duration-300" style={{ width: `${metrics.acidity * 10}%` }} />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-roast-700">Ketebalan Crema (Lipid Emulsion):</span>
                  <span className="font-bold text-roast-950">{metrics.crema} / 10</span>
                </div>
                <div className="h-2 w-full bg-paper-200 rounded-full overflow-hidden">
                  <div className="h-full bg-crema-500 rounded-full transition-all duration-300" style={{ width: `${metrics.crema * 10}%` }} />
                </div>
              </div>
            </div>

            {/* Dominant Flavor Notes Pills */}
            <div className="pt-3 border-t border-paper-200">
              <span className="font-mono text-[10px] uppercase text-roast-500 block mb-1.5 font-semibold">
                Prediksi Profil Cita Rasa (Cupping Notes):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {dominantFlavors.map((note, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-md bg-roast-950 text-paper-50 font-serif text-xs font-medium tracking-wide shadow-2xs"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Pairing Fit (Kompatibilitas Minuman) */}
          <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 shadow-xs space-y-3.5">
            <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold block">
              Kesesuaian Menu Kafe (Drink Pairing Match)
            </span>

            <div className="space-y-3">
              {/* Es Kopi Susu */}
              <div className="p-3 rounded-xl border border-paper-200 bg-paper-100/60 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="font-serif font-bold text-xs text-roast-950 block">
                    Es Kopi Susu Gula Aren
                  </span>
                  <p className="text-[11px] text-roast-600 font-sans">
                    {compatibility.esKopiSusu >= 80
                      ? 'Sangat Kuat! Menembus kekentalan susu & es batu.'
                      : 'Cenderung kalah intensitas saat dicampur susu banyak.'}
                  </p>
                </div>
                <div
                  className={`font-mono text-xs font-bold px-2 py-1 rounded-md ${
                    compatibility.esKopiSusu >= 80
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-paper-200 text-roast-700'
                  }`}
                >
                  {compatibility.esKopiSusu}%
                </div>
              </div>

              {/* Hot Latte / Cappuccino */}
              <div className="p-3 rounded-xl border border-paper-200 bg-paper-100/60 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="font-serif font-bold text-xs text-roast-950 block">
                    Hot Latte & Flat White (Microfoam)
                  </span>
                  <p className="text-[11px] text-roast-600 font-sans">
                    {compatibility.latteMatch >= 80
                      ? 'Harmonis! Manis karamel berpadu sempurna dengan laktosa susu.'
                      : 'Memerlukan tuning rasio untuk kelembutan ekstra.'}
                  </p>
                </div>
                <div
                  className={`font-mono text-xs font-bold px-2 py-1 rounded-md ${
                    compatibility.latteMatch >= 80
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-paper-200 text-roast-700'
                  }`}
                >
                  {compatibility.latteMatch}%
                </div>
              </div>

              {/* Straight Double Espresso */}
              <div className="p-3 rounded-xl border border-paper-200 bg-paper-100/60 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="font-serif font-bold text-xs text-roast-950 block">
                    Double Espresso Murni & Americano
                  </span>
                  <p className="text-[11px] text-roast-600 font-sans">
                    {compatibility.straightEspresso >= 75
                      ? 'Seimbang dan kompleks, menyenangkan diminum hitam.'
                      : 'Sangat pekat, lebih cocok diperuntukkan basis susu.'}
                  </p>
                </div>
                <div
                  className={`font-mono text-xs font-bold px-2 py-1 rounded-md ${
                    compatibility.straightEspresso >= 75
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-paper-200 text-roast-700'
                  }`}
                >
                  {compatibility.straightEspresso}%
                </div>
              </div>
            </div>
          </div>

          {/* Unit Economics Card */}
          <div className="bg-roast-950 text-paper-50 rounded-2xl p-5 sm:p-6 shadow-md space-y-4">
            <div className="flex items-center justify-between border-b border-roast-800 pb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-crema-300 font-bold flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-crema-400" /> Ringkasan Finansial Kafe
              </span>
              <span className="font-mono text-[10px] text-roast-400 bg-roast-900 px-2 py-0.5 rounded">
                Yield: ~{economics.shotsPerKg} cup/kg
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] text-roast-400 uppercase">HPP Biji Kopi / kg:</span>
                <p className="font-mono text-lg font-bold text-crema-200">
                  Rp {metrics.hppPerKg.toLocaleString('id-ID')}
                </p>
              </div>

              <div className="space-y-0.5">
                <span className="font-mono text-[10px] text-roast-400 uppercase">HPP Kopi / Cangkir:</span>
                <p className="font-mono text-lg font-bold text-emerald-400">
                  Rp {economics.costPerShot.toLocaleString('id-ID')}
                </p>
              </div>

              <div className="space-y-0.5">
                <span className="font-mono text-[10px] text-roast-400 uppercase">Margin Kotor Kopi:</span>
                <p className="font-mono text-base font-bold text-paper-50">
                  {economics.grossMarginPct}% (Rp {economics.grossMarginRp.toLocaleString('id-ID')})
                </p>
              </div>

              <div className="space-y-0.5">
                <span className="font-mono text-[10px] text-roast-400 uppercase">Est. Belanja Kopi/Bulan:</span>
                <p className="font-mono text-base font-bold text-paper-100">
                  Rp {(economics.monthlyCoffeeSpend / 1000000).toFixed(1)} Juta
                </p>
              </div>
            </div>

            <p className="text-[11px] text-roast-400 font-sans border-t border-roast-900 pt-3 leading-relaxed">
              *Kalkulasi memperhitungkan 5% toleransi purging grinder pada dosis {doseGrams}g. Belum termasuk biaya susu, cup, sirup, dan overhead operasional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
