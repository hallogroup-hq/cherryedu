'use client';

import { useState, useMemo } from "react";
import {
  Check,
  Sparkles,
  Layers,
  Copy,
  Coffee,
  Award,
  ShieldCheck,
  Activity,
} from "lucide-react";

export interface CVAPreset {
  id: string;
  name: string;
  origin: string;
  process: string;
  elevation: string;
  tasterName: string;
  descriptors: string[];
  acidityType: 'Citric' | 'Malic' | 'Phosphoric' | 'Acetic';
  bodyTexture: 'Silky' | 'Creamy' | 'Viscous' | 'Astringent' | 'Juicy';
  intensity: {
    dryAroma: number; // 0-15
    breakAroma: number; // 0-15
    acidity: number; // 0-15
    sweetness: number; // 0-15
    mouthfeel: number; // 0-15
    aftertaste: number; // 0-15
  };
  hedonic: {
    fragranceAroma: number; // 6.00 - 10.00
    flavor: number;
    aftertaste: number;
    acidity: number;
    sweetness: number;
    mouthfeel: number;
    balance: number;
    overall: number;
  };
  cups: {
    uniformity: boolean[]; // 5 cups
    cleanCup: boolean[];
    sweetness: boolean[];
  };
  defects: {
    taintCount: number; // mild defects (x2)
    faultCount: number; // severe defects (x4)
  };
  notes: string;
}

export const CVA_PRESETS: CVAPreset[] = [
  {
    id: 'gayo-anaerobic',
    name: 'Aceh Gayo Anaerobic Natural (Micro-lot)',
    origin: 'Takengon, Aceh Tengah (1.600 mdpl)',
    process: 'Anaerobic Natural 72 Jam',
    elevation: '1.600 mdpl',
    tasterName: 'Q-Grader Indonesia',
    descriptors: ['Blackberry', 'Cranberry', 'Gula Aren', 'Red Wine', 'Dark Chocolate'],
    acidityType: 'Malic',
    bodyTexture: 'Juicy',
    intensity: {
      dryAroma: 12.5,
      breakAroma: 13.0,
      acidity: 11.5,
      sweetness: 13.5,
      mouthfeel: 11.0,
      aftertaste: 12.0,
    },
    hedonic: {
      fragranceAroma: 8.75,
      flavor: 9.0,
      aftertaste: 8.75,
      acidity: 8.75,
      sweetness: 9.0,
      mouthfeel: 8.75,
      balance: 8.75,
      overall: 9.0,
    },
    cups: {
      uniformity: [true, true, true, true, true],
      cleanCup: [true, true, true, true, true],
      sweetness: [true, true, true, true, true],
    },
    defects: { taintCount: 0, faultCount: 0 },
    notes: 'Kompleksitas luar biasa dengan acidity apel malat segar dan aftertaste anggur fermentasi manis.',
  },
  {
    id: 'preanger-typica',
    name: 'Java Preanger Typica Full Washed',
    origin: 'Pangalengan, Jawa Barat (1.500 mdpl)',
    process: 'Fully Washed (Fermentasi Basah 36 Jam)',
    elevation: '1.500 mdpl',
    tasterName: 'Senior Barista',
    descriptors: ['Melati', 'Peach', 'Teh Hitam', 'Madu Bunga', 'Bergamot'],
    acidityType: 'Citric',
    bodyTexture: 'Silky',
    intensity: {
      dryAroma: 10.5,
      breakAroma: 11.0,
      acidity: 10.0,
      sweetness: 11.5,
      mouthfeel: 8.5,
      aftertaste: 10.5,
    },
    hedonic: {
      fragranceAroma: 8.5,
      flavor: 8.5,
      aftertaste: 8.25,
      acidity: 8.5,
      sweetness: 8.5,
      mouthfeel: 8.25,
      balance: 8.5,
      overall: 8.5,
    },
    cups: {
      uniformity: [true, true, true, true, true],
      cleanCup: [true, true, true, true, true],
      sweetness: [true, true, true, true, true],
    },
    defects: { taintCount: 0, faultCount: 0 },
    notes: 'Kejernihan khas washed klasik Jawa Barat dengan bunga melati yang anggun dan balance sempurna.',
  },
  {
    id: 'commercial-defect',
    name: 'Commercial Arabica (Contoh Cacat Cupping)',
    origin: 'Pengepul Campuran Regional (1.100 mdpl)',
    process: 'Giling Basah Cepat (Kurang Sortasi)',
    elevation: '1.100 mdpl',
    tasterName: 'Quality Auditor',
    descriptors: ['Woody', 'Earthy Pungent', 'Phenolic Taint', 'Astringent Straw'],
    acidityType: 'Acetic',
    bodyTexture: 'Astringent',
    intensity: {
      dryAroma: 6.5,
      breakAroma: 6.0,
      acidity: 5.5,
      sweetness: 4.5,
      mouthfeel: 7.0,
      aftertaste: 6.5,
    },
    hedonic: {
      fragranceAroma: 7.0,
      flavor: 6.75,
      aftertaste: 6.5,
      acidity: 6.75,
      sweetness: 6.5,
      mouthfeel: 6.75,
      balance: 6.75,
      overall: 6.75,
    },
    cups: {
      uniformity: [true, true, false, true, true],
      cleanCup: [true, true, false, true, true],
      sweetness: [true, true, true, true, true],
    },
    defects: { taintCount: 1, faultCount: 0 },
    notes: 'Cangkir #3 terkontaminasi taint fenol obat akibat pengeringan tidak merata di terpal basah.',
  },
];

const DESCRIPTOR_TAGS = [
  'Floral / Melati',
  'Citrus / Jeruk',
  'Stone Fruit / Persik',
  'Berry / Stroberi',
  'Caramel / Gula Aren',
  'Chocolate / Kakao',
  'Nutty / Kenari',
  'Warm Spices / Kayu Manis',
  'Fermented / Winey',
  'Herbal / Cedar',
  'Black Tea / Earl Grey',
  'Tropical Fruit / Nangka',
];

export function SCACuppingForm() {
  const [activePresetId, setActivePresetId] = useState<string>('gayo-anaerobic');
  const [sampleName, setSampleName] = useState('Aceh Gayo Anaerobic Natural (Micro-lot)');
  const [origin, setOrigin] = useState('Takengon, Aceh Tengah (1.600 mdpl)');
  const [process, setProcess] = useState('Anaerobic Natural 72 Jam');
  const [tasterName, setTasterName] = useState('Q-Grader / Barista CherryEdu');

  // Descriptive Intensity (0-15)
  const [intensity, setIntensity] = useState({
    dryAroma: 12.5,
    breakAroma: 13.0,
    acidity: 11.5,
    sweetness: 13.5,
    mouthfeel: 11.0,
    aftertaste: 12.0,
  });

  const [acidityType, setAcidityType] = useState<'Citric' | 'Malic' | 'Phosphoric' | 'Acetic'>('Malic');
  const [bodyTexture, setBodyTexture] = useState<'Silky' | 'Creamy' | 'Viscous' | 'Astringent' | 'Juicy'>('Juicy');
  const [selectedDescriptors, setSelectedDescriptors] = useState<string[]>([
    'Berry / Stroberi',
    'Caramel / Gula Aren',
    'Floral / Melati',
  ]);

  // Affective / Hedonic Scores (6.00 - 10.00)
  const [hedonic, setHedonic] = useState({
    fragranceAroma: 8.75,
    flavor: 9.0,
    aftertaste: 8.75,
    acidity: 8.75,
    sweetness: 9.0,
    mouthfeel: 8.75,
    balance: 8.75,
    overall: 9.0,
  });

  // 5 Cups Matrix
  const [uniformityCups, setUniformityCups] = useState<boolean[]>([true, true, true, true, true]);
  const [cleanCups, setCleanCups] = useState<boolean[]>([true, true, true, true, true]);
  const [sweetnessCups, setSweetnessCups] = useState<boolean[]>([true, true, true, true, true]);

  // Defects
  const [taintCount, setTaintCount] = useState<number>(0); // -2 per taint cup
  const [faultCount, setFaultCount] = useState<number>(0); // -4 per fault cup
  const [notes, setNotes] = useState(
    'Kompleksitas luar biasa dengan keasaman apel malat segar dan aftertaste anggur fermentasi manis.'
  );

  const [copied, setCopied] = useState(false);

  // Load Preset
  const handleLoadPreset = (preset: CVAPreset) => {
    setActivePresetId(preset.id);
    setSampleName(preset.name);
    setOrigin(preset.origin);
    setProcess(preset.process);
    setTasterName(preset.tasterName);
    setIntensity({ ...preset.intensity });
    setAcidityType(preset.acidityType);
    setBodyTexture(preset.bodyTexture);
    setHedonic({ ...preset.hedonic });
    setUniformityCups([...preset.cups.uniformity]);
    setCleanCups([...preset.cups.cleanCup]);
    setSweetnessCups([...preset.cups.sweetness]);
    setTaintCount(preset.defects.taintCount);
    setFaultCount(preset.defects.faultCount);
    setNotes(preset.notes);
  };

  // Toggle Descriptor
  const toggleDescriptor = (desc: string) => {
    if (selectedDescriptors.includes(desc)) {
      setSelectedDescriptors(selectedDescriptors.filter((d) => d !== desc));
    } else {
      setSelectedDescriptors([...selectedDescriptors, desc]);
    }
  };

  // Toggle Cup in 5-Cup Matrix
  const toggleCup = (category: 'uniformity' | 'clean' | 'sweetness', index: number) => {
    if (category === 'uniformity') {
      const copy = [...uniformityCups];
      copy[index] = !copy[index];
      setUniformityCups(copy);
    } else if (category === 'clean') {
      const copy = [...cleanCups];
      copy[index] = !copy[index];
      setCleanCups(copy);
    } else if (category === 'sweetness') {
      const copy = [...sweetnessCups];
      copy[index] = !copy[index];
      setSweetnessCups(copy);
    }
  };

  // Calculate Scores
  const scoreResults = useMemo(() => {
    // Affective Sum: 8 attributes (each max 10, total 80)
    const hedonicSum =
      hedonic.fragranceAroma +
      hedonic.flavor +
      hedonic.aftertaste +
      hedonic.acidity +
      hedonic.sweetness +
      hedonic.mouthfeel +
      hedonic.balance +
      hedonic.overall;

    // Cup points: 2 points per cup checked (max 10 each, total 30)
    const uniformityScore = uniformityCups.filter(Boolean).length * 2;
    const cleanCupScore = cleanCups.filter(Boolean).length * 2;
    const sweetnessScore = sweetnessCups.filter(Boolean).length * 2;
    const cupBonus = uniformityScore + cleanCupScore + sweetnessScore; // max 30

    // Defects Penalty
    const defectPenalty = taintCount * 2 + faultCount * 4;

    // Final Total Score (Normalized to 100-point SCA standard)
    // Formula: hedonic sum (8 attributes) - defects + cup bonuses
    // In official CVA hybrid standard: hedonic provides the 8 subjective qualities (scaled to 70-100 baseline)
    const totalScore = Math.max(0, Math.min(100, Number((hedonicSum + (cupBonus - 30) - defectPenalty).toFixed(2))));

    let gradeTitle = 'Below Specialty Grade / Commercial';
    let gradeBadgeColor = 'bg-paper-100 text-roast-600 border-paper-300';
    if (totalScore >= 90.0) {
      gradeTitle = 'Exemplary / COE Superlative (Kopi Istimewa Langka)';
      gradeBadgeColor = 'bg-roast-950 text-paper-50 border-roast-900 shadow-xs';
    } else if (totalScore >= 85.0) {
      gradeTitle = 'Outstanding Specialty Coffee (Luar Biasa / Micro-lot)';
      gradeBadgeColor = 'bg-paper-200 text-roast-950 border-paper-400 font-bold';
    } else if (totalScore >= 80.0) {
      gradeTitle = 'Very Good Specialty Coffee (Sangat Baik / Single Origin)';
      gradeBadgeColor = 'bg-paper-100 text-roast-900 border-paper-300 font-semibold';
    }

    return {
      hedonicSum: Number(hedonicSum.toFixed(2)),
      uniformityScore,
      cleanCupScore,
      sweetnessScore,
      defectPenalty,
      totalScore,
      gradeTitle,
      gradeBadgeColor,
    };
  }, [hedonic, uniformityCups, cleanCups, sweetnessCups, taintCount, faultCount]);

  // Copy Full CVA Cupping Report
  const handleCopyReport = () => {
    const lines = [
      `=== LEMBAR EVALUASI SENSORIK: SCA COFFEE VALUE ASSESSMENT (CVA) ===`,
      `Sampel: ${sampleName}`,
      `Origin / Elevasi: ${origin}`,
      `Metode Pasca Panen: ${process}`,
      `Evaluator / Q-Grader: ${tasterName}`,
      '',
      `[ HASIL PENILAIAN RESMI ]`,
      `TOTAL SKOR AKHIR: ${scoreResults.totalScore} / 100.00`,
      `Predikat: ${scoreResults.gradeTitle}`,
      `Penalti Defect: -${scoreResults.defectPenalty} poin (${taintCount} Taint, ${faultCount} Fault)`,
      '',
      `[ DESCRIPTIVE SENSORY INTENSITY (0 - 15) ]`,
      `• Dry Fragrance: ${intensity.dryAroma}/15`,
      `• Break Aroma: ${intensity.breakAroma}/15`,
      `• Acidity: ${intensity.acidity}/15 (Dominan: Asam ${acidityType})`,
      `• Sweetness: ${intensity.sweetness}/15`,
      `• Body Weight: ${intensity.mouthfeel}/15 (Tekstur: ${bodyTexture})`,
      `• Aftertaste: ${intensity.aftertaste}/15`,
      `• Sensory Descriptors: ${selectedDescriptors.join(', ')}`,
      '',
      `[ AFFECTIVE / HEDONIC SCORES (6.00 - 10.00) ]`,
      `• Fragrance/Aroma: ${hedonic.fragranceAroma}`,
      `• Flavor: ${hedonic.flavor}`,
      `• Aftertaste: ${hedonic.aftertaste}`,
      `• Acidity: ${hedonic.acidity}`,
      `• Sweetness: ${hedonic.sweetness}`,
      `• Mouthfeel: ${hedonic.mouthfeel}`,
      `• Balance: ${hedonic.balance}`,
      `• Overall: ${hedonic.overall}`,
      '',
      `[ 5-CUP UNIFORMITY & CLEANLINESS ]`,
      `• Uniformity: ${scoreResults.uniformityScore}/10 (${uniformityCups.filter(Boolean).length}/5 cangkir)`,
      `• Clean Cup: ${scoreResults.cleanCupScore}/10 (${cleanCups.filter(Boolean).length}/5 cangkir)`,
      `• Sweetness: ${scoreResults.sweetnessScore}/10 (${sweetnessCups.filter(Boolean).length}/5 cangkir)`,
      '',
      `Catatan Sensorik Evaluator:`,
      `"${notes}"`,
      '',
      `Dievaluasi melalui CherryEdu CVA Sensory Suite (cherryedu.id/tools?tool=cupping-sheet)`,
    ];

    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 font-sans animate-in fade-in duration-200">
      {/* CVA Header Banner */}
      <div className="bg-paper-100/80 border border-paper-300 rounded-2xl p-5 sm:p-7 shadow-xs relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cherry-700/5 blur-3xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-1">
              <span className="font-mono text-xs uppercase tracking-widest text-cherry-800 font-bold">
                SCA Coffee Value Assessment (CVA) Protocol
              </span>
              <span className="text-roast-400 font-mono text-xs">•</span>
              <span className="font-mono text-xs text-roast-600">
                Standar Cupping Resmi SCA
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-roast-950 tracking-tight">
              SCA Cupping Sheet (Standar CVA SCA)
            </h2>
            <p className="text-xs sm:text-sm text-roast-600 max-w-2xl leading-relaxed">
              Standar evaluasi rasa kopi global resmi dari Specialty Coffee Association. Memisahkan evaluasi objektif (<strong>Descriptive</strong>) dari preferensi mutu (<strong>Affective</strong>) demi akurasi dan objektivitas tertinggi.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto">
            <button
              onClick={handleCopyReport}
              className="px-3.5 py-2 rounded-xl bg-roast-950 text-paper-50 hover:bg-roast-900 active:scale-[0.98] font-mono text-xs font-semibold flex items-center gap-2 shadow-xs transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-crema-300" />}
              <span>{copied ? 'Tersalin ke Clipboard!' : 'Salin Laporan Cupping'}</span>
            </button>
          </div>
        </div>

        {/* Preset Selector */}
        <div className="mt-6 pt-5 border-t border-paper-200">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-roast-500 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cherry-700" /> Muat Sampel Kalibrasi CVA (Presets):
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {CVA_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handleLoadPreset(preset)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all active:scale-[0.98] flex items-center gap-1.5 ${
                  activePresetId === preset.id
                    ? 'bg-roast-950 text-paper-50 border-roast-950 shadow-xs'
                    : 'bg-paper-50 hover:bg-paper-200 border-paper-300 text-roast-800'
                }`}
              >
                <Coffee className="w-3 h-3" />
                <span>{preset.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid: Input Panels (Left) + Final Score Card & Radar (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Sample Metadata + Descriptive + Affective + Cups (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Section 1: Sample Metadata */}
          <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 shadow-xs space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cherry-700" /> 1. Identitas & Asal-Usul Sampel (Extrinsic)
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase text-roast-500 block">Nama Sampel / Lot:</label>
                <input
                  type="text"
                  value={sampleName}
                  onChange={(e) => setSampleName(e.target.value)}
                  className="w-full bg-paper-100/60 border border-paper-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-roast-950 outline-none focus:border-cherry-700"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase text-roast-500 block">Origin & Elevasi:</label>
                <input
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full bg-paper-100/60 border border-paper-300 rounded-lg px-2.5 py-1.5 text-xs text-roast-950 outline-none focus:border-cherry-700"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase text-roast-500 block">Metode Pasca Panen:</label>
                <input
                  type="text"
                  value={process}
                  onChange={(e) => setProcess(e.target.value)}
                  className="w-full bg-paper-100/60 border border-paper-300 rounded-lg px-2.5 py-1.5 text-xs text-roast-950 outline-none focus:border-cherry-700"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase text-roast-500 block">Nama Cupper / Evaluator:</label>
                <input
                  type="text"
                  value={tasterName}
                  onChange={(e) => setTasterName(e.target.value)}
                  className="w-full bg-paper-100/60 border border-paper-300 rounded-lg px-2.5 py-1.5 text-xs text-roast-950 outline-none focus:border-cherry-700"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Descriptive Assessment (0 - 15 Scale) */}
          <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-paper-200 pb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-cherry-700" /> 2. Descriptive Assessment (Intensitas Objektif 0–15)
              </span>
              <span className="font-mono text-[10px] text-roast-500 bg-paper-200 px-2 py-0.5 rounded">
                SCA CVA Protocol
              </span>
            </div>

            {/* Sliders Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Dry Fragrance */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-roast-700">Dry Fragrance:</span>
                  <span className="font-bold text-roast-950">{intensity.dryAroma} / 15</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  step="0.5"
                  value={intensity.dryAroma}
                  onChange={(e) => setIntensity({ ...intensity, dryAroma: parseFloat(e.target.value) })}
                  className="w-full accent-cherry-700 h-1.5 bg-paper-300 rounded-lg cursor-pointer"
                />
              </div>

              {/* Break Aroma */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-roast-700">Break Crust Aroma:</span>
                  <span className="font-bold text-roast-950">{intensity.breakAroma} / 15</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  step="0.5"
                  value={intensity.breakAroma}
                  onChange={(e) => setIntensity({ ...intensity, breakAroma: parseFloat(e.target.value) })}
                  className="w-full accent-cherry-700 h-1.5 bg-paper-300 rounded-lg cursor-pointer"
                />
              </div>

              {/* Acidity Intensity */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-roast-700">Acidity Intensity:</span>
                  <span className="font-bold text-roast-950">{intensity.acidity} / 15</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  step="0.5"
                  value={intensity.acidity}
                  onChange={(e) => setIntensity({ ...intensity, acidity: parseFloat(e.target.value) })}
                  className="w-full accent-cherry-700 h-1.5 bg-paper-300 rounded-lg cursor-pointer"
                />
              </div>

              {/* Sweetness Intensity */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-roast-700">Sweetness Intensity:</span>
                  <span className="font-bold text-roast-950">{intensity.sweetness} / 15</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  step="0.5"
                  value={intensity.sweetness}
                  onChange={(e) => setIntensity({ ...intensity, sweetness: parseFloat(e.target.value) })}
                  className="w-full accent-cherry-700 h-1.5 bg-paper-300 rounded-lg cursor-pointer"
                />
              </div>

              {/* Mouthfeel Weight */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-roast-700">Mouthfeel / Weight:</span>
                  <span className="font-bold text-roast-950">{intensity.mouthfeel} / 15</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  step="0.5"
                  value={intensity.mouthfeel}
                  onChange={(e) => setIntensity({ ...intensity, mouthfeel: parseFloat(e.target.value) })}
                  className="w-full accent-cherry-700 h-1.5 bg-paper-300 rounded-lg cursor-pointer"
                />
              </div>

              {/* Aftertaste Intensity */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-roast-700">Aftertaste Persistence:</span>
                  <span className="font-bold text-roast-950">{intensity.aftertaste} / 15</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  step="0.5"
                  value={intensity.aftertaste}
                  onChange={(e) => setIntensity({ ...intensity, aftertaste: parseFloat(e.target.value) })}
                  className="w-full accent-cherry-700 h-1.5 bg-paper-300 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Qualitative Selectors: Acid Type & Body Texture */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-paper-200">
              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase text-roast-500 block font-semibold">
                  Dominan Asam Organik:
                </label>
                <div className="flex gap-1.5 flex-wrap">
                  {(['Citric', 'Malic', 'Phosphoric', 'Acetic'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setAcidityType(type)}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-all ${
                        acidityType === type
                          ? 'bg-roast-950 text-paper-50 border-roast-950'
                          : 'bg-paper-100 text-roast-700 border-paper-300 hover:bg-paper-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase text-roast-500 block font-semibold">
                  Tekstur Mouthfeel:
                </label>
                <div className="flex gap-1.5 flex-wrap">
                  {(['Silky', 'Creamy', 'Viscous', 'Juicy', 'Astringent'] as const).map((tex) => (
                    <button
                      key={tex}
                      onClick={() => setBodyTexture(tex)}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium border transition-all ${
                        bodyTexture === tex
                          ? 'bg-roast-950 text-paper-50 border-roast-950'
                          : 'bg-paper-100 text-roast-700 border-paper-300 hover:bg-paper-200'
                      }`}
                    >
                      {tex}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Descriptors Tags */}
            <div className="pt-2 border-t border-paper-200 space-y-1.5">
              <label className="font-mono text-[10px] uppercase text-roast-500 block font-semibold">
                Karakteristik Sensorik Spesifik (WCR / CVA Descriptors):
              </label>
              <div className="flex flex-wrap gap-1.5">
                {DESCRIPTOR_TAGS.map((tag) => {
                  const isSelected = selectedDescriptors.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleDescriptor(tag)}
                      className={`px-2 py-0.5 rounded-md text-[11px] font-sans border transition-all active:scale-[0.98] ${
                        isSelected
                          ? 'bg-cherry-700 text-paper-50 border-cherry-800 font-semibold'
                          : 'bg-paper-100/80 text-roast-700 border-paper-300 hover:bg-paper-200'
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 3: Affective / Hedonic Quality Scores (6.00 - 10.00) */}
          <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-paper-200 pb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cherry-700" /> 3. Affective Scoring (Hedonic Scale 6.00 – 10.00)
              </span>
              <span className="font-mono text-[10px] text-roast-500">Skala Kualitas SCA</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Fragrance / Aroma', key: 'fragranceAroma' },
                { label: 'Flavor (Taste in Mouth)', key: 'flavor' },
                { label: 'Aftertaste Quality', key: 'aftertaste' },
                { label: 'Acidity Quality', key: 'acidity' },
                { label: 'Sweetness Quality', key: 'sweetness' },
                { label: 'Mouthfeel Quality', key: 'mouthfeel' },
                { label: 'Balance / Harmoni', key: 'balance' },
                { label: 'Overall Impression', key: 'overall' },
              ].map((item) => {
                const k = item.key as keyof typeof hedonic;
                return (
                  <div key={item.key} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-roast-700">{item.label}:</span>
                      <span className="font-bold text-roast-950">{hedonic[k].toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="6.0"
                      max="10.0"
                      step="0.25"
                      value={hedonic[k]}
                      onChange={(e) => setHedonic({ ...hedonic, [k]: parseFloat(e.target.value) })}
                      className="w-full accent-roast-900 h-1.5 bg-paper-300 rounded-lg cursor-pointer"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 4: 5-Cup Matrix & Defects */}
          <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 shadow-xs space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cherry-700" /> 4. Matriks 5 Cangkir & Defect Cupping
            </span>

            {/* 5-Cup Checkboxes */}
            <div className="space-y-3">
              {/* Uniformity */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-paper-100/60 rounded-xl border border-paper-200">
                <div>
                  <span className="font-mono text-xs font-bold text-roast-900 block">Uniformity (Keseragaman Cangkir)</span>
                  <span className="text-[10px] text-roast-500 font-sans">2 poin tiap cangkir yang seragam</span>
                </div>
                <div className="flex items-center gap-2">
                  {uniformityCups.map((isOk, idx) => (
                    <button
                      key={idx}
                      onClick={() => toggleCup('uniformity', idx)}
                      className={`w-7 h-7 rounded-lg border font-mono text-xs font-bold transition-all ${
                        isOk ? 'bg-emerald-700 text-paper-50 border-emerald-800' : 'bg-paper-200 text-roast-400 border-paper-300'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                  <span className="font-mono text-xs font-bold text-roast-900 ml-2 w-8 text-right">
                    {scoreResults.uniformityScore}/10
                  </span>
                </div>
              </div>

              {/* Clean Cup */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-paper-100/60 rounded-xl border border-paper-200">
                <div>
                  <span className="font-mono text-xs font-bold text-roast-900 block">Clean Cup (Kejernihan Rasa)</span>
                  <span className="text-[10px] text-roast-500 font-sans">Bebas dari rasa apek, fermentasi liar, atau lumpur</span>
                </div>
                <div className="flex items-center gap-2">
                  {cleanCups.map((isOk, idx) => (
                    <button
                      key={idx}
                      onClick={() => toggleCup('clean', idx)}
                      className={`w-7 h-7 rounded-lg border font-mono text-xs font-bold transition-all ${
                        isOk ? 'bg-emerald-700 text-paper-50 border-emerald-800' : 'bg-paper-200 text-roast-400 border-paper-300'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                  <span className="font-mono text-xs font-bold text-roast-900 ml-2 w-8 text-right">
                    {scoreResults.cleanCupScore}/10
                  </span>
                </div>
              </div>

              {/* Sweetness */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-paper-100/60 rounded-xl border border-paper-200">
                <div>
                  <span className="font-mono text-xs font-bold text-roast-900 block">Sweetness Consistency</span>
                  <span className="text-[10px] text-roast-500 font-sans">Kemanisan alami terasa di seluruh cangkir</span>
                </div>
                <div className="flex items-center gap-2">
                  {sweetnessCups.map((isOk, idx) => (
                    <button
                      key={idx}
                      onClick={() => toggleCup('sweetness', idx)}
                      className={`w-7 h-7 rounded-lg border font-mono text-xs font-bold transition-all ${
                        isOk ? 'bg-emerald-700 text-paper-50 border-emerald-800' : 'bg-paper-200 text-roast-400 border-paper-300'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                  <span className="font-mono text-xs font-bold text-roast-900 ml-2 w-8 text-right">
                    {scoreResults.sweetnessScore}/10
                  </span>
                </div>
              </div>
            </div>

            {/* Defects Penalty Counter */}
            <div className="pt-3 border-t border-paper-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-amber-900">Taint (Cacat Ringan):</span>
                  <span className="font-mono text-xs text-amber-700">-2 poin/cup</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setTaintCount(Math.max(0, taintCount - 1))}
                    className="w-6 h-6 rounded bg-amber-200 text-amber-950 font-bold flex items-center justify-center text-xs"
                  >
                    -
                  </button>
                  <span className="font-mono font-bold text-amber-950 w-8 text-center">{taintCount}</span>
                  <button
                    onClick={() => setTaintCount(Math.min(5, taintCount + 1))}
                    className="w-6 h-6 rounded bg-amber-200 text-amber-950 font-bold flex items-center justify-center text-xs"
                  >
                    +
                  </button>
                  <span className="text-[11px] text-amber-800 font-sans ml-1">Cangkir tercemar</span>
                </div>
              </div>

              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-rose-900">Fault (Cacat Berat):</span>
                  <span className="font-mono text-xs text-rose-700">-4 poin/cup</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setFaultCount(Math.max(0, faultCount - 1))}
                    className="w-6 h-6 rounded bg-rose-200 text-rose-950 font-bold flex items-center justify-center text-xs"
                  >
                    -
                  </button>
                  <span className="font-mono font-bold text-rose-950 w-8 text-center">{faultCount}</span>
                  <button
                    onClick={() => setFaultCount(Math.min(5, faultCount + 1))}
                    className="w-6 h-6 rounded bg-rose-200 text-rose-950 font-bold flex items-center justify-center text-xs"
                  >
                    +
                  </button>
                  <span className="text-[11px] text-rose-800 font-sans ml-1">Cangkir tercemar</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Official Scorecard, Sensory Spider Radar & Notes (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Official Score Display */}
          <div className="bg-roast-950 text-paper-50 rounded-2xl p-6 shadow-xl space-y-5 border border-roast-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-crema-400/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between border-b border-roast-800 pb-4">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-crema-300 font-bold block">
                  Hasil Akhir Evaluasi Resmi
                </span>
                <h3 className="font-serif text-lg font-bold text-paper-50">SCA CVA Total Score</h3>
              </div>
              <div className="p-2 rounded-xl bg-roast-900 text-crema-300">
                <Award className="w-6 h-6" />
              </div>
            </div>

            {/* Huge Number */}
            <div className="flex items-baseline gap-2 py-2">
              <span className="font-mono text-5xl sm:text-6xl font-extrabold tracking-tight text-paper-50">
                {scoreResults.totalScore.toFixed(2)}
              </span>
              <span className="font-mono text-sm text-roast-400 font-semibold">/ 100.00</span>
            </div>

            {/* Predicate Badge */}
            <div className={`p-3 rounded-xl border text-xs font-semibold space-y-0.5 ${scoreResults.gradeBadgeColor}`}>
              <span className="font-mono text-[10px] uppercase tracking-wider block opacity-80">Klasifikasi Mutu:</span>
              <p className="font-serif text-sm font-bold leading-tight">{scoreResults.gradeTitle}</p>
            </div>

            {/* Score Breakdown Table */}
            <div className="space-y-2 pt-2 border-t border-roast-900 text-xs font-mono">
              <div className="flex justify-between text-roast-300">
                <span>Total Affective Hedonic:</span>
                <span className="font-bold text-paper-50">{scoreResults.hedonicSum}</span>
              </div>
              <div className="flex justify-between text-roast-300">
                <span>Penalti Cangkir Rusak:</span>
                <span className="font-bold text-rose-400">
                  {scoreResults.defectPenalty > 0 ? `-${scoreResults.defectPenalty}` : '0 (Bersih)'}
                </span>
              </div>
              <div className="flex justify-between text-roast-300">
                <span>Status 5-Cangkir:</span>
                <span className="text-emerald-400">
                  {scoreResults.uniformityScore + scoreResults.cleanCupScore + scoreResults.sweetnessScore === 30
                    ? '100% Uniform & Clean'
                    : 'Terjadi inkonsistensi cangkir'}
                </span>
              </div>
            </div>
          </div>

          {/* Sensory Intensity Radar / Bar Overview */}
          <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 shadow-xs space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold block">
              Profil Spektrum Sensori (Descriptive Radar)
            </span>

            <div className="space-y-2.5">
              {[
                { label: 'Fragrance / Aroma', val: intensity.dryAroma, max: 15, color: 'bg-amber-700' },
                { label: `Acidity (${acidityType})`, val: intensity.acidity, max: 15, color: 'bg-cherry-700' },
                { label: 'Sweetness', val: intensity.sweetness, max: 15, color: 'bg-amber-500' },
                { label: `Mouthfeel (${bodyTexture})`, val: intensity.mouthfeel, max: 15, color: 'bg-amber-900' },
                { label: 'Aftertaste Persistence', val: intensity.aftertaste, max: 15, color: 'bg-roast-800' },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-roast-700">{item.label}</span>
                    <span className="font-bold text-roast-950">{item.val} / 15</span>
                  </div>
                  <div className="h-2 w-full bg-paper-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-300`}
                      style={{ width: `${(item.val / item.max) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Descriptors Pills */}
            <div className="pt-3 border-t border-paper-200">
              <span className="font-mono text-[10px] uppercase text-roast-500 block mb-1.5 font-semibold">
                Cupping Notes Terpilih:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedDescriptors.map((desc, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-paper-200/80 text-roast-900 text-xs font-medium"
                  >
                    {desc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Evaluator Notes Textarea */}
          <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 shadow-xs space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold block">
              Catatan Sensorik & Rekomendasi Sangrai
            </span>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-paper-100/60 border border-paper-300 rounded-xl p-3 text-xs font-serif text-roast-900 leading-relaxed outline-none focus:border-cherry-700 resize-none"
              placeholder="Tuliskan impresi sensori mendalam, potensi blooming, rekomendasi profil sangrai..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
