'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  ClipboardCheck,
  Timer,
  RotateCcw,
  Copy,
  Check,
  Printer,
  Sparkles,
  Award,
  AlertTriangle,
  Coffee,
  Info,
  ChevronRight,
  Sliders,
  Play,
  Pause,
  Layers,
  Flame,
  FileText
} from 'lucide-react';

export interface CuppingSampleData {
  sampleCode: string;
  originName: string;
  producer: string;
  region: string;
  altitude: string;
  variety: string;
  process: string;
  roastDate: string;
  roastColor: 'Light' | 'Medium-Light' | 'Medium' | 'Medium-Dark';
  cupperName: string;
  sessionDate: string;
  
  // 10 SCA Attributes (6.00 to 10.00 scale, with 0.25 increment)
  fragranceScore: number;
  fragranceNotes: string;
  flavorScore: number;
  flavorNotes: string;
  aftertasteScore: number;
  aftertasteNotes: string;
  acidityScore: number;
  acidityIntensity: 'Rendah' | 'Sedang' | 'Tinggi' | 'Kompleks';
  bodyScore: number;
  bodyWeight: 'Tipis (Tea-like)' | 'Sedang (Silky)' | 'Tebal (Syrupy)' | 'Creamy';
  balanceScore: number;
  overallScore: number;

  // 5-Cup checklist attributes (2 pts per cup)
  uniformityCups: boolean[]; // 5 cups = 10 pts
  cleanCupCups: boolean[];   // 5 cups = 10 pts
  sweetnessCups: boolean[];  // 5 cups = 10 pts

  // Defects
  taintCups: number; // 2 pts each
  faultCups: number; // 4 pts each
  defectDescription: string;

  generalNotes: string;
}

const DEFAULT_SAMPLE: CuppingSampleData = {
  sampleCode: 'ID-SCA-01',
  originName: 'Aceh Gayo Pantan Musara',
  producer: 'Koperasi Baiko & Petani Pegasing',
  region: 'Takengon, Aceh Tengah',
  altitude: '1.550 mdpl',
  variety: 'Ateng Super & Tim-Tim',
  process: 'Anaerobic Natural (72h Fermentasi)',
  roastDate: '2026-09-02',
  roastColor: 'Light',
  cupperName: 'Akmal Irsyad (Q-Grader Apprentice)',
  sessionDate: new Date().toISOString().split('T')[0],

  fragranceScore: 8.50,
  fragranceNotes: 'Aroma ceri matang, kismis, lavender floral, sweet brown sugar',
  flavorScore: 8.75,
  flavorNotes: 'Blackberry, plum manis, dark cocoa, anggur merah fermented halus',
  aftertasteScore: 8.25,
  aftertasteNotes: 'Panjang, bersih, manis madu hutan dan lingering cocoa butter',
  acidityScore: 8.50,
  acidityIntensity: 'Kompleks',
  bodyScore: 8.50,
  bodyWeight: 'Tebal (Syrupy)',
  balanceScore: 8.25,
  overallScore: 8.50,

  uniformityCups: [true, true, true, true, true],
  cleanCupCups: [true, true, true, true, true],
  sweetnessCups: [true, true, true, true, true],

  taintCups: 0,
  faultCups: 0,
  defectDescription: '',
  generalNotes: 'Cangkir yang luar biasa dinamis. Keasaman malat-sitrat sangat jernih berpadu dengan body yang syrupy tebal. Sangat representatif untuk micro-lot kompetisi.',
};

const PRESETS: { label: string; tag: string; data: Partial<CuppingSampleData> }[] = [
  {
    label: 'Aceh Gayo Anaerobic Natural',
    tag: 'Specialty Score ~89.25',
    data: {
      sampleCode: 'GY-NAT-99',
      originName: 'Aceh Gayo Pantan Musara',
      producer: 'Hendrik Hendra - Pegasing',
      region: 'Takengon, Aceh Tengah',
      altitude: '1.600 mdpl',
      variety: 'Ateng Super & Bor-Bor',
      process: 'Anaerobic Natural (Slow Dry)',
      roastColor: 'Light',
      fragranceScore: 8.75,
      fragranceNotes: 'Ripe jackfruit, raspberry jam, dried fig, delicate rose',
      flavorScore: 8.75,
      flavorNotes: 'Black currant, candied orange peel, dark chocolate liqueur',
      aftertasteScore: 8.50,
      aftertasteNotes: 'Very sweet, long silky cocoa lingering',
      acidityScore: 8.75,
      acidityIntensity: 'Kompleks',
      bodyScore: 8.50,
      bodyWeight: 'Tebal (Syrupy)',
      balanceScore: 8.50,
      overallScore: 8.75,
      uniformityCups: [true, true, true, true, true],
      cleanCupCups: [true, true, true, true, true],
      sweetnessCups: [true, true, true, true, true],
      taintCups: 0,
      faultCups: 0,
      generalNotes: 'Micro-lot premium dengan spektrum buah fermentasi terkontrol tanpa ada rasa cuka liar.',
    },
  },
  {
    label: 'Java Preanger Typica Washed',
    tag: 'Specialty Score ~86.25',
    data: {
      sampleCode: 'JP-TYP-04',
      originName: 'Gunung Puntang Cimaung',
      producer: 'Ayeng & Komunitas Puntang',
      region: 'Bandung Selatan, Jawa Barat',
      altitude: '1.400 mdpl',
      variety: 'Typica Priangan & Linea S',
      process: 'Fully Washed (Double Fermentation)',
      roastColor: 'Light',
      fragranceScore: 8.50,
      fragranceNotes: 'Jasmine blossom, lemongrass, peach syrup, floral bergamot',
      flavorScore: 8.50,
      flavorNotes: 'Crisp green apple, Earl Grey tea, white honey, lime zest',
      aftertasteScore: 8.25,
      aftertasteNotes: 'Bersih, elegan, menyisakan manis cane sugar lembut',
      acidityScore: 8.75,
      acidityIntensity: 'Tinggi',
      bodyScore: 8.00,
      bodyWeight: 'Sedang (Silky)',
      balanceScore: 8.50,
      overallScore: 8.50,
      uniformityCups: [true, true, true, true, true],
      cleanCupCups: [true, true, true, true, true],
      sweetnessCups: [true, true, true, true, true],
      taintCups: 0,
      faultCups: 0,
      generalNotes: 'Sangat clean dan refined. Keasaman sitrat yang cerah dengan profil teh melati klasik Priangan.',
    },
  },
  {
    label: 'Bali Kintamani Orange Honey',
    tag: 'Specialty Score ~84.75',
    data: {
      sampleCode: 'BALI-HNY-12',
      originName: 'Kintamani Mengani',
      producer: 'Subak Abian Ulian Murni',
      region: 'Bangli, Kintamani, Bali',
      altitude: '1.300 mdpl',
      variety: 'Kopyol & USDA 762',
      process: 'Yellow Honey (Intercropping Jeruk)',
      roastColor: 'Medium-Light',
      fragranceScore: 8.25,
      fragranceNotes: 'Tangerine orange, brown sugar caramel, roasted cashew',
      flavorScore: 8.25,
      flavorNotes: 'Mandarin citrus, milk chocolate, sweet cane syrup',
      aftertasteScore: 8.00,
      aftertasteNotes: 'Manis bersih karamel gula aren',
      acidityScore: 8.25,
      acidityIntensity: 'Sedang',
      bodyScore: 8.25,
      bodyWeight: 'Sedang (Silky)',
      balanceScore: 8.25,
      overallScore: 8.25,
      uniformityCups: [true, true, true, true, true],
      cleanCupCups: [true, true, true, true, true],
      sweetnessCups: [true, true, true, true, true],
      taintCups: 0,
      faultCups: 0,
      generalNotes: 'Karakter citrus khas tumpang sari jeruk Kintamani dengan rasa manis madu yang seimbang.',
    },
  },
  {
    label: 'Komoditas Komersial (Ada Defect Fermentasi)',
    tag: 'Off-Grade Score ~73.50',
    data: {
      sampleCode: 'COMM-DEF-02',
      originName: 'Kopi Asalan Pasar Lokal',
      producer: 'Pengepul Campuran',
      region: 'Sumatra Bagian Selatan',
      altitude: '900 mdpl',
      variety: 'Campuran Multi-Klon',
      process: 'Giling Basah Tergesa-gesa',
      roastColor: 'Medium-Dark',
      fragranceScore: 6.75,
      fragranceNotes: 'Earthy basah, apek kardus lembap, aroma obat',
      flavorScore: 6.75,
      flavorNotes: 'Woody tajam, harsh bitterness, asam cuka berlebihan',
      aftertasteScore: 6.50,
      aftertasteNotes: 'Kering di tenggorokan (astringent), rasa sepat pahit',
      acidityScore: 6.75,
      acidityIntensity: 'Rendah',
      bodyScore: 7.25,
      bodyWeight: 'Tebal (Syrupy)',
      balanceScore: 6.50,
      overallScore: 6.50,
      uniformityCups: [true, true, false, true, true],
      cleanCupCups: [true, false, false, true, true],
      sweetnessCups: [true, true, true, false, true],
      taintCups: 1,
      faultCups: 1,
      defectDescription: '1 cangkir bau apek fermentasi liar (Taint), 1 cangkir bau busuk phenolat menyengat (Fault).',
      generalNotes: 'Biji asalan tidak tersortasi dengan baik. Kehilangan poin signifikan di Clean Cup, Uniformity, dan terkena penalti defect.',
    },
  },
];

export function SCACuppingForm() {
  const [sample, setSample] = useState<CuppingSampleData>(DEFAULT_SAMPLE);
  const [copied, setCopied] = useState(false);

  // Cupping Timer State
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!timerRunning && timerSeconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Cupping stage helper based on time
  const cuppingStage = useMemo(() => {
    if (timerSeconds < 240) {
      return {
        stage: 'Tahap 1: Evaluasi Aroma Kering & Kerak Basah (Crust)',
        instruction: 'Air mendidih 93°C telah dituang. Evaluasi aroma dry grounds dan crust selama 4 menit pertama tanpa diaduk.',
        color: 'text-amber-700 bg-amber-50 border-amber-300',
      };
    } else if (timerSeconds < 480) {
      return {
        stage: 'Tahap 2: Break The Crust & Skimming Foam',
        instruction: 'Gunakan sendok cupping, pecahkan kerak 3 kali dorongan sambil mendekatkan hidung. Bersihkan sisa busa.',
        color: 'text-cherry-800 bg-cherry-50 border-cherry-300',
      };
    } else if (timerSeconds < 720) {
      return {
        stage: 'Tahap 3: Slurp Cupping Suhu Panas (~70°C)',
        instruction: 'Mulai seruput (aspirate). Nilai karakter Flavor dan Acidity saat kopi masih hangat menuju sedang.',
        color: 'text-crema-800 bg-crema-50 border-crema-300',
      };
    } else if (timerSeconds < 1080) {
      return {
        stage: 'Tahap 4: Slurp Suhu Hangat (~60°C - 50°C)',
        instruction: 'Nilai Aftertaste, Body, dan Balance saat suhu turun. Manis dan kejernihan mulai terbaca jelas.',
        color: 'text-emerald-800 bg-emerald-50 border-emerald-300',
      };
    } else {
      return {
        stage: 'Tahap 5: Slurp Suhu Ruang (< 40°C - 30°C)',
        instruction: 'Konfirmasi Uniformity (keseragaman 5 cangkir), Clean Cup, Sweetness, dan berikan skor Overall final.',
        color: 'text-blue-800 bg-blue-50 border-blue-300',
      };
    }
  }, [timerSeconds]);

  // Attribute Calculations
  const uniformityScore = useMemo(() => {
    return sample.uniformityCups.filter(Boolean).length * 2;
  }, [sample.uniformityCups]);

  const cleanCupScore = useMemo(() => {
    return sample.cleanCupCups.filter(Boolean).length * 2;
  }, [sample.cleanCupCups]);

  const sweetnessScore = useMemo(() => {
    return sample.sweetnessCups.filter(Boolean).length * 2;
  }, [sample.sweetnessCups]);

  const defectDeduction = useMemo(() => {
    return sample.taintCups * 2 + sample.faultCups * 4;
  }, [sample.taintCups, sample.faultCups]);

  const rawSubtotal = useMemo(() => {
    return (
      sample.fragranceScore +
      sample.flavorScore +
      sample.aftertasteScore +
      sample.acidityScore +
      sample.bodyScore +
      sample.balanceScore +
      sample.overallScore +
      uniformityScore +
      cleanCupScore +
      sweetnessScore
    );
  }, [
    sample.fragranceScore,
    sample.flavorScore,
    sample.aftertasteScore,
    sample.acidityScore,
    sample.bodyScore,
    sample.balanceScore,
    sample.overallScore,
    uniformityScore,
    cleanCupScore,
    sweetnessScore,
  ]);

  const finalTotalScore = useMemo(() => {
    const val = rawSubtotal - defectDeduction;
    return Math.max(0, Math.min(100, Math.round(val * 100) / 100));
  }, [rawSubtotal, defectDeduction]);

  // Quality Classification
  const classification = useMemo(() => {
    if (finalTotalScore >= 90) {
      return {
        grade: 'Super Outstanding (Presidential Specialty)',
        desc: 'Cangkir langka kelas dunia, tanpa cacat, kompleksitas luar biasa (Best of Panama / COE Top 1).',
        badgeColor: 'bg-amber-100 text-amber-950 border-amber-400',
      };
    } else if (finalTotalScore >= 85) {
      return {
        grade: 'Excellent Specialty Coffee',
        desc: 'Kopi specialty kelas unggul dengan kejelasan asal (terroir), body elegan, dan sweetness kuat.',
        badgeColor: 'bg-emerald-100 text-emerald-950 border-emerald-400',
      };
    } else if (finalTotalScore >= 80) {
      return {
        grade: 'Very Good Specialty Coffee',
        desc: 'Memenuhi standar resmi Specialty Coffee Association (SCA) minimal 80 poin tanpa cacat primer.',
        badgeColor: 'bg-blue-100 text-blue-950 border-blue-400',
      };
    } else {
      return {
        grade: 'Below Specialty Grade (Commercial / Commodity)',
        desc: 'Di bawah batas minimum specialty (skor < 80). Cocok untuk kopi komersial, blend instan, atau pasar lokal.',
        badgeColor: 'bg-rose-100 text-rose-950 border-rose-400',
      };
    }
  }, [finalTotalScore]);

  // SVG Radar Spider Chart Data Points
  const radarAxes = [
    { label: 'Fragrance', score: sample.fragranceScore, max: 10, min: 6 },
    { label: 'Flavor', score: sample.flavorScore, max: 10, min: 6 },
    { label: 'Aftertaste', score: sample.aftertasteScore, max: 10, min: 6 },
    { label: 'Acidity', score: sample.acidityScore, max: 10, min: 6 },
    { label: 'Body', score: sample.bodyScore, max: 10, min: 6 },
    { label: 'Balance', score: sample.balanceScore, max: 10, min: 6 },
    { label: 'Uniformity', score: uniformityScore, max: 10, min: 0 },
    { label: 'Clean Cup', score: cleanCupScore, max: 10, min: 0 },
    { label: 'Sweetness', score: sweetnessScore, max: 10, min: 0 },
    { label: 'Overall', score: sample.overallScore, max: 10, min: 6 },
  ];

  const radarSvgCoordinates = useMemo(() => {
    const center = 150;
    const radius = 110;
    const angleStep = (Math.PI * 2) / radarAxes.length;

    const points = radarAxes.map((axis, i) => {
      // Normalize score between 0 and 1
      const normalized = Math.max(0, Math.min(1, (axis.score - axis.min) / (axis.max - axis.min)));
      const dist = radius * (0.2 + normalized * 0.8); // slight offset so zero is not completely at 0
      const angle = i * angleStep - Math.PI / 2;
      const x = center + dist * Math.cos(angle);
      const y = center + dist * Math.sin(angle);
      return { x, y, angle, label: axis.label, score: axis.score };
    });

    const polygonPoints = points.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

    // Outer grid rings
    const rings = [0.25, 0.5, 0.75, 1].map((scale) => {
      return radarAxes
        .map((_, i) => {
          const dist = radius * (0.2 + scale * 0.8);
          const angle = i * angleStep - Math.PI / 2;
          return `${(center + dist * Math.cos(angle)).toFixed(1)},${(center + dist * Math.sin(angle)).toFixed(1)}`;
        })
        .join(' ');
    });

    return { center, radius, points, polygonPoints, rings, angleStep };
  }, [sample, uniformityScore, cleanCupScore, sweetnessScore]);

  const toggleCup = (field: 'uniformityCups' | 'cleanCupCups' | 'sweetnessCups', index: number) => {
    setSample((prev) => {
      const arr = [...prev[field]];
      arr[index] = !arr[index];
      return { ...prev, [field]: arr };
    });
  };

  const handleCopySummary = () => {
    const text = `--- SCA CUPPING SCORE SHEET RECORD ---
Sample Code: ${sample.sampleCode}
Origin: ${sample.originName} (${sample.region})
Producer: ${sample.producer} | Elevation: ${sample.altitude}
Variety: ${sample.variety} | Process: ${sample.process}
Roast: ${sample.roastColor} (${sample.roastDate})
Cupper: ${sample.cupperName} | Date: ${sample.sessionDate}

=== NILAI ATRIBUT (SCA STANDARD) ===
1. Fragrance / Aroma: ${sample.fragranceScore.toFixed(2)} (${sample.fragranceNotes})
2. Flavor: ${sample.flavorScore.toFixed(2)} (${sample.flavorNotes})
3. Aftertaste: ${sample.aftertasteScore.toFixed(2)} (${sample.aftertasteNotes})
4. Acidity: ${sample.acidityScore.toFixed(2)} [Intensitas: ${sample.acidityIntensity}]
5. Body: ${sample.bodyScore.toFixed(2)} [Mouthfeel: ${sample.bodyWeight}]
6. Balance: ${sample.balanceScore.toFixed(2)}
7. Uniformity: ${uniformityScore}/10 (${sample.uniformityCups.filter(Boolean).length}/5 cups)
8. Clean Cup: ${cleanCupScore}/10 (${sample.cleanCupCups.filter(Boolean).length}/5 cups)
9. Sweetness: ${sweetnessScore}/10 (${sample.sweetnessCups.filter(Boolean).length}/5 cups)
10. Overall: ${sample.overallScore.toFixed(2)}

=== DEFECT & FINAL SCORE ===
Taint Deductions: -${sample.taintCups * 2} (${sample.taintCups} cups)
Fault Deductions: -${sample.faultCups * 4} (${sample.faultCups} cups)
TOTAL SCORE: ${finalTotalScore.toFixed(2)} / 100.00
CLASSIFICATION: ${classification.grade}
Catatan Cupper: ${sample.generalNotes}
--- Dicatat via CherryEdu Digital SCA Cupping Lab ---`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 print:space-y-4">
      {/* HEADER PROTOCOL & ACTION BAR */}
      <div className="bg-paper-50 border border-paper-400 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold bg-cherry-50 px-2 py-0.5 border border-cherry-300">
              [ OFFICIAL SCA PROTOCOL 100-POINT SYSTEM ]
            </span>
            <span className="font-mono text-[10px] text-roast-500 uppercase">
              Standar Evaluasi Sensoris Specialty Kopi
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-roast-950">
            Digital SCA Cupping Score Sheet
          </h2>
          <p className="font-sans text-xs text-roast-700 leading-relaxed">
            Formulir baku kalibrasi uji cita rasa berbasis standar Specialty Coffee Association. Dilengkapi penghitungan skor 10 atribut otomatis, evaluasi defect (taint & fault), kalkulator cangkir, radar chart spider-web visual, serta stopwatch waktu seduh.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0 print:hidden">
          <button
            onClick={handleCopySummary}
            className="px-3.5 py-2 bg-paper-100 hover:bg-paper-200 border border-paper-400 text-roast-900 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
            title="Salin Rangkuman Teks"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5 text-roast-600" />}
            <span>{copied ? 'Tersalin' : 'Salin Laporan'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-3.5 py-2 bg-paper-100 hover:bg-paper-200 border border-paper-400 text-roast-900 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
            title="Cetak Berkas Uji Cita Rasa"
          >
            <Printer className="w-3.5 h-3.5 text-roast-600" />
            <span>Cetak PDF</span>
          </button>

          <button
            onClick={() => setSample(DEFAULT_SAMPLE)}
            className="px-3.5 py-2 bg-paper-100 hover:bg-paper-200 border border-paper-400 text-roast-800 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
            title="Reset ke Template Default"
          >
            <RotateCcw className="w-3.5 h-3.5 text-roast-500" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* CUPPING TIMELINE STOPWATCH & STAGE GUIDELINES */}
      <div className="bg-paper-100/80 border border-paper-300 p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 print:hidden">
        <div className="flex items-center gap-4">
          <div className="bg-roast-950 text-paper-50 font-mono text-2xl font-bold px-4 py-2 border border-roast-900 rounded tracking-widest flex items-center gap-2">
            <Timer className="w-5 h-5 text-crema-400 animate-pulse" />
            <span>{formatTimer(timerSeconds)}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTimerRunning(!timerRunning)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold transition-colors flex items-center gap-1.5 ${
                timerRunning
                  ? 'bg-rose-700 hover:bg-rose-800 text-paper-50'
                  : 'bg-roast-950 hover:bg-cherry-800 text-paper-50'
              }`}
            >
              {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{timerRunning ? 'Jeda Timer' : 'Mulai Seduh'}</span>
            </button>

            <button
              onClick={() => {
                setTimerRunning(false);
                setTimerSeconds(0);
              }}
              className="px-3 py-2 bg-paper-200 hover:bg-paper-300 border border-paper-400 text-roast-800 font-mono text-xs uppercase tracking-wider"
            >
              Reset 00:00
            </button>
          </div>
        </div>

        {/* Current Cupping Stage Card */}
        <div className={`flex-1 max-w-xl p-3 border text-xs font-sans rounded ${cuppingStage.color}`}>
          <div className="font-mono font-bold uppercase text-[11px] mb-0.5 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5" />
            <span>{cuppingStage.stage}</span>
          </div>
          <p className="leading-snug opacity-90">{cuppingStage.instruction}</p>
        </div>
      </div>

      {/* ONE-CLICK PRESET PICKER */}
      <div className="bg-paper-50 border border-paper-300 p-4 space-y-2.5 print:hidden">
        <span className="font-mono text-[10px] uppercase text-roast-500 font-bold block flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cherry-700" />
          <span>Preset Kalibrasi Cepat Spesimen Nusantara:</span>
        </span>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => setSample((prev) => ({ ...prev, ...preset.data }))}
              className="px-3.5 py-2 bg-paper-100 hover:bg-paper-200 border border-paper-300 hover:border-roast-700 text-left transition-all group"
            >
              <span className="font-serif font-bold text-xs text-roast-950 block group-hover:text-cherry-800">
                {preset.label}
              </span>
              <span className="font-mono text-[10px] text-roast-500 block mt-0.5">
                {preset.tag}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* SAMPLE IDENTIFICATION LEDGER */}
      <div className="bg-paper-50 border border-paper-400 p-6 space-y-4">
        <div className="border-b border-paper-300 pb-2 flex items-center justify-between">
          <h3 className="font-serif text-lg font-bold text-roast-950 flex items-center gap-2">
            <Coffee className="w-4 h-4 text-cherry-700" />
            <span>Identitas Sampel & Kondisi Uji</span>
          </h3>
          <span className="font-mono text-[10px] uppercase text-roast-500">
            KODE: {sample.sampleCode}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
          <div>
            <label className="text-[10px] uppercase text-roast-500 block mb-1">Kode Sampel:</label>
            <input
              type="text"
              value={sample.sampleCode}
              onChange={(e) => setSample({ ...sample, sampleCode: e.target.value })}
              className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 text-roast-950 focus:outline-none focus:border-roast-800 font-bold"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase text-roast-500 block mb-1">Nama Origin / Lot:</label>
            <input
              type="text"
              value={sample.originName}
              onChange={(e) => setSample({ ...sample, originName: e.target.value })}
              className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 text-roast-950 focus:outline-none focus:border-roast-800 font-bold"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase text-roast-500 block mb-1">Wilayah / Daerah:</label>
            <input
              type="text"
              value={sample.region}
              onChange={(e) => setSample({ ...sample, region: e.target.value })}
              className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 text-roast-950 focus:outline-none focus:border-roast-800"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase text-roast-500 block mb-1">Petani / Produser / Koperasi:</label>
            <input
              type="text"
              value={sample.producer}
              onChange={(e) => setSample({ ...sample, producer: e.target.value })}
              className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 text-roast-950 focus:outline-none focus:border-roast-800"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase text-roast-500 block mb-1">Elevasi Tanam:</label>
            <input
              type="text"
              value={sample.altitude}
              onChange={(e) => setSample({ ...sample, altitude: e.target.value })}
              className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 text-roast-950 focus:outline-none focus:border-roast-800"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase text-roast-500 block mb-1">Varietas Botani:</label>
            <input
              type="text"
              value={sample.variety}
              onChange={(e) => setSample({ ...sample, variety: e.target.value })}
              className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 text-roast-950 focus:outline-none focus:border-roast-800"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase text-roast-500 block mb-1">Metode Pasca Panen:</label>
            <input
              type="text"
              value={sample.process}
              onChange={(e) => setSample({ ...sample, process: e.target.value })}
              className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 text-roast-950 focus:outline-none focus:border-roast-800"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase text-roast-500 block mb-1">Profil Sangrai (Roast Level):</label>
            <select
              value={sample.roastColor}
              onChange={(e) => setSample({ ...sample, roastColor: e.target.value as any })}
              className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 text-roast-950 focus:outline-none focus:border-roast-800 font-bold"
            >
              <option value="Light">Light (SCA Agtron 65-75)</option>
              <option value="Medium-Light">Medium-Light (SCA Agtron 55-65)</option>
              <option value="Medium">Medium (SCA Agtron 45-55)</option>
              <option value="Medium-Dark">Medium-Dark (SCA Agtron 35-45)</option>
            </select>
          </div>

          <div>
            <label className="text-[10px] uppercase text-roast-500 block mb-1">Tanggal Sangrai:</label>
            <input
              type="date"
              value={sample.roastDate}
              onChange={(e) => setSample({ ...sample, roastDate: e.target.value })}
              className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 text-roast-950 focus:outline-none focus:border-roast-800"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase text-roast-500 block mb-1">Nama Cupper / Penilai:</label>
            <input
              type="text"
              value={sample.cupperName}
              onChange={(e) => setSample({ ...sample, cupperName: e.target.value })}
              className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 text-roast-950 focus:outline-none focus:border-roast-800 font-bold"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase text-roast-500 block mb-1">Tanggal Sesi Cupping:</label>
            <input
              type="date"
              value={sample.sessionDate}
              onChange={(e) => setSample({ ...sample, sessionDate: e.target.value })}
              className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 text-roast-950 focus:outline-none focus:border-roast-800"
            />
          </div>
        </div>
      </div>

      {/* CORE 10 SCA ATTRIBUTES & RADAR SPIDER CHART GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: SCORING ATTRIBUTES (8 COLS) */}
        <div className="lg:col-span-8 space-y-6">
          {/* SECTION A: SCALE 6.00 - 10.00 ATTRIBUTES */}
          <div className="bg-paper-50 border border-paper-400 p-6 space-y-5">
            <div className="border-b border-paper-300 pb-2 flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-cherry-700 font-bold block">
                  [ BAGIAN A: SKALA KUALITAS 6.00 - 10.00 ]
                </span>
                <h3 className="font-serif text-lg font-bold text-roast-950">
                  Parameter Sensoris Kualitatif
                </h3>
              </div>
              <span className="font-mono text-[10px] text-roast-500">
                Inkrementasi Nilai: 0.25 pt
              </span>
            </div>

            <div className="space-y-6 divide-y divide-paper-200">
              {/* 1. FRAGRANCE / AROMA */}
              <div className="space-y-3 pt-3 first:pt-0">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-mono text-xs font-bold text-roast-950 uppercase">
                      1. Fragrance / Aroma
                    </span>
                    <p className="text-[11px] text-roast-500 font-sans">
                      Aroma bubuk kering (dry grounds), lapisan kerak basah (crust), dan saat dipecahkan (break).
                    </p>
                  </div>
                  <div className="font-mono text-base font-bold text-cherry-800 bg-paper-200 px-3 py-1 border border-paper-400">
                    {sample.fragranceScore.toFixed(2)}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-roast-400">6.00</span>
                  <input
                    type="range"
                    min="6.00"
                    max="10.00"
                    step="0.25"
                    value={sample.fragranceScore}
                    onChange={(e) => setSample({ ...sample, fragranceScore: parseFloat(e.target.value) })}
                    className="w-full accent-cherry-800 cursor-pointer"
                  />
                  <span className="font-mono text-[10px] text-roast-400">10.00</span>
                </div>

                <input
                  type="text"
                  placeholder="Catatan aroma: e.g. Floral melati, kismis, rempah manis, molasses..."
                  value={sample.fragranceNotes}
                  onChange={(e) => setSample({ ...sample, fragranceNotes: e.target.value })}
                  className="w-full px-3 py-1.5 bg-paper-100/50 border border-paper-300 text-xs font-sans text-roast-900 placeholder-roast-400 focus:outline-none"
                />
              </div>

              {/* 2. FLAVOR */}
              <div className="space-y-3 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-mono text-xs font-bold text-roast-950 uppercase">
                      2. Flavor (Cita Rasa)
                    </span>
                    <p className="text-[11px] text-roast-500 font-sans">
                      Intensitas, kualitas, dan kompleksitas perpaduan sensasi rasa saat diseruput ke langit-langit lidah.
                    </p>
                  </div>
                  <div className="font-mono text-base font-bold text-cherry-800 bg-paper-200 px-3 py-1 border border-paper-400">
                    {sample.flavorScore.toFixed(2)}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-roast-400">6.00</span>
                  <input
                    type="range"
                    min="6.00"
                    max="10.00"
                    step="0.25"
                    value={sample.flavorScore}
                    onChange={(e) => setSample({ ...sample, flavorScore: parseFloat(e.target.value) })}
                    className="w-full accent-cherry-800 cursor-pointer"
                  />
                  <span className="font-mono text-[10px] text-roast-400">10.00</span>
                </div>

                <input
                  type="text"
                  placeholder="Catatan flavor: e.g. Raspberry jam, citrus bergamot, dark chocolate..."
                  value={sample.flavorNotes}
                  onChange={(e) => setSample({ ...sample, flavorNotes: e.target.value })}
                  className="w-full px-3 py-1.5 bg-paper-100/50 border border-paper-300 text-xs font-sans text-roast-900 placeholder-roast-400 focus:outline-none"
                />
              </div>

              {/* 3. AFTERTASTE */}
              <div className="space-y-3 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-mono text-xs font-bold text-roast-950 uppercase">
                      3. Aftertaste (Kesan Akhir)
                    </span>
                    <p className="text-[11px] text-roast-500 font-sans">
                      Panjang durasi dan kebersihan aroma rasa manis yang tersisa di rongga mulut setelah ditelan.
                    </p>
                  </div>
                  <div className="font-mono text-base font-bold text-cherry-800 bg-paper-200 px-3 py-1 border border-paper-400">
                    {sample.aftertasteScore.toFixed(2)}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-roast-400">6.00</span>
                  <input
                    type="range"
                    min="6.00"
                    max="10.00"
                    step="0.25"
                    value={sample.aftertasteScore}
                    onChange={(e) => setSample({ ...sample, aftertasteScore: parseFloat(e.target.value) })}
                    className="w-full accent-cherry-800 cursor-pointer"
                  />
                  <span className="font-mono text-[10px] text-roast-400">10.00</span>
                </div>

                <input
                  type="text"
                  placeholder="Catatan aftertaste: e.g. Bersih, lingering cocoa butter, manis madu panjang..."
                  value={sample.aftertasteNotes}
                  onChange={(e) => setSample({ ...sample, aftertasteNotes: e.target.value })}
                  className="w-full px-3 py-1.5 bg-paper-100/50 border border-paper-300 text-xs font-sans text-roast-900 placeholder-roast-400 focus:outline-none"
                />
              </div>

              {/* 4. ACIDITY */}
              <div className="space-y-3 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-mono text-xs font-bold text-roast-950 uppercase">
                      4. Acidity (Tingkat & Kualitas Keasaman)
                    </span>
                    <p className="text-[11px] text-roast-500 font-sans">
                      Karakter keasaman yang menyegarkan (sitrat/malat/tartarat) dan memberikan dimensi hidup pada cangkir.
                    </p>
                  </div>
                  <div className="font-mono text-base font-bold text-cherry-800 bg-paper-200 px-3 py-1 border border-paper-400">
                    {sample.acidityScore.toFixed(2)}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-roast-400">6.00</span>
                    <input
                      type="range"
                      min="6.00"
                      max="10.00"
                      step="0.25"
                      value={sample.acidityScore}
                      onChange={(e) => setSample({ ...sample, acidityScore: parseFloat(e.target.value) })}
                      className="w-full accent-cherry-800 cursor-pointer"
                    />
                    <span className="font-mono text-[10px] text-roast-400">10.00</span>
                  </div>

                  <div className="flex items-center gap-2 justify-end font-mono text-xs">
                    <span className="text-[10px] text-roast-500 uppercase">Intensitas:</span>
                    <select
                      value={sample.acidityIntensity}
                      onChange={(e) => setSample({ ...sample, acidityIntensity: e.target.value as any })}
                      className="px-2.5 py-1 bg-paper-100 border border-paper-300 text-roast-900 text-xs focus:outline-none"
                    >
                      <option value="Rendah">Rendah</option>
                      <option value="Sedang">Sedang</option>
                      <option value="Tinggi">Tinggi</option>
                      <option value="Kompleks">Kompleks (Juicy)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 5. BODY */}
              <div className="space-y-3 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-mono text-xs font-bold text-roast-950 uppercase">
                      5. Body (Mouthfeel & Ketebalan Tekstur)
                    </span>
                    <p className="text-[11px] text-roast-500 font-sans">
                      Sensasi bobot taktil cairan kopi di lidah (ringan seperti teh hingga pekat berminyak sirup).
                    </p>
                  </div>
                  <div className="font-mono text-base font-bold text-cherry-800 bg-paper-200 px-3 py-1 border border-paper-400">
                    {sample.bodyScore.toFixed(2)}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-roast-400">6.00</span>
                    <input
                      type="range"
                      min="6.00"
                      max="10.00"
                      step="0.25"
                      value={sample.bodyScore}
                      onChange={(e) => setSample({ ...sample, bodyScore: parseFloat(e.target.value) })}
                      className="w-full accent-cherry-800 cursor-pointer"
                    />
                    <span className="font-mono text-[10px] text-roast-400">10.00</span>
                  </div>

                  <div className="flex items-center gap-2 justify-end font-mono text-xs">
                    <span className="text-[10px] text-roast-500 uppercase">Karakter Taktil:</span>
                    <select
                      value={sample.bodyWeight}
                      onChange={(e) => setSample({ ...sample, bodyWeight: e.target.value as any })}
                      className="px-2.5 py-1 bg-paper-100 border border-paper-300 text-roast-900 text-xs focus:outline-none"
                    >
                      <option value="Tipis (Tea-like)">Tipis (Tea-like)</option>
                      <option value="Sedang (Silky)">Sedang (Silky)</option>
                      <option value="Tebal (Syrupy)">Tebal (Syrupy)</option>
                      <option value="Creamy">Creamy (Velvety)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 6. BALANCE */}
              <div className="space-y-3 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-mono text-xs font-bold text-roast-950 uppercase">
                      6. Balance (Keseimbangan Seluruh Elemen)
                    </span>
                    <p className="text-[11px] text-roast-500 font-sans">
                      Harmonisasi antara rasa manis, asam, body, dan kepahitan tanpa ada atribut yang mendominasi secara tidak menyenangkan.
                    </p>
                  </div>
                  <div className="font-mono text-base font-bold text-cherry-800 bg-paper-200 px-3 py-1 border border-paper-400">
                    {sample.balanceScore.toFixed(2)}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-roast-400">6.00</span>
                  <input
                    type="range"
                    min="6.00"
                    max="10.00"
                    step="0.25"
                    value={sample.balanceScore}
                    onChange={(e) => setSample({ ...sample, balanceScore: parseFloat(e.target.value) })}
                    className="w-full accent-cherry-800 cursor-pointer"
                  />
                  <span className="font-mono text-[10px] text-roast-400">10.00</span>
                </div>
              </div>

              {/* 10. OVERALL */}
              <div className="space-y-3 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-mono text-xs font-bold text-roast-950 uppercase">
                      10. Overall (Penilaian Holistik Cupper)
                    </span>
                    <p className="text-[11px] text-roast-500 font-sans">
                      Apresiasi personal profesional penilai terhadap karakter origin, ekspresi terroir, dan daya tarik keseluruhan cangkir.
                    </p>
                  </div>
                  <div className="font-mono text-base font-bold text-cherry-800 bg-paper-200 px-3 py-1 border border-paper-400">
                    {sample.overallScore.toFixed(2)}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-roast-400">6.00</span>
                  <input
                    type="range"
                    min="6.00"
                    max="10.00"
                    step="0.25"
                    value={sample.overallScore}
                    onChange={(e) => setSample({ ...sample, overallScore: parseFloat(e.target.value) })}
                    className="w-full accent-cherry-800 cursor-pointer"
                  />
                  <span className="font-mono text-[10px] text-roast-400">10.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION B: 5-CUP ACCREDITATION (UNIFORMITY, CLEAN CUP, SWEETNESS) */}
          <div className="bg-paper-50 border border-paper-400 p-6 space-y-5">
            <div className="border-b border-paper-300 pb-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-cherry-700 font-bold block">
                [ BAGIAN B: STANDAR 5 CANGKIR UJI (2 POIN PER CANGKIR BERSIH) ]
              </span>
              <h3 className="font-serif text-lg font-bold text-roast-950">
                Uji Konsistensi & Kemurnian Cangkir
              </h3>
            </div>

            <div className="space-y-5">
              {/* 7. UNIFORMITY */}
              <div className="p-4 bg-paper-100/50 border border-paper-300 space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-mono text-xs font-bold text-roast-950 uppercase block">
                      7. Uniformity (Keseragaman 5 Cangkir)
                    </span>
                    <p className="text-[11px] text-roast-500 font-sans">
                      Kelima mangkuk cupping harus memiliki konsistensi rasa yang identik tanpa ada satu cangkir pun yang anomali.
                    </p>
                  </div>
                  <div className="font-mono text-sm font-bold text-roast-950 bg-paper-200 px-3 py-1 border border-paper-400">
                    {uniformityScore} / 10 Pts
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  {sample.uniformityCups.map((active, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleCup('uniformityCups', i)}
                      className={`flex-1 py-2 font-mono text-xs font-bold border transition-colors ${
                        active
                          ? 'bg-roast-950 text-paper-50 border-roast-950 shadow-xs'
                          : 'bg-rose-50 text-rose-800 border-rose-300 line-through'
                      }`}
                    >
                      Cup #{i + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* 8. CLEAN CUP */}
              <div className="p-4 bg-paper-100/50 border border-paper-300 space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-mono text-xs font-bold text-roast-950 uppercase block">
                      8. Clean Cup (Kebersihan Cangkir)
                    </span>
                    <p className="text-[11px] text-roast-500 font-sans">
                      Bebas dari impresi negatif non-kopi seperti rasa tanah, apek, kimia, fenolat, ataupun sisa karung goni.
                    </p>
                  </div>
                  <div className="font-mono text-sm font-bold text-roast-950 bg-paper-200 px-3 py-1 border border-paper-400">
                    {cleanCupScore} / 10 Pts
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  {sample.cleanCupCups.map((active, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleCup('cleanCupCups', i)}
                      className={`flex-1 py-2 font-mono text-xs font-bold border transition-colors ${
                        active
                          ? 'bg-roast-950 text-paper-50 border-roast-950 shadow-xs'
                          : 'bg-rose-50 text-rose-800 border-rose-300 line-through'
                      }`}
                    >
                      Cup #{i + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* 9. SWEETNESS */}
              <div className="p-4 bg-paper-100/50 border border-paper-300 space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-mono text-xs font-bold text-roast-950 uppercase block">
                      9. Sweetness (Kemurnian Rasa Manis)
                    </span>
                    <p className="text-[11px] text-roast-500 font-sans">
                      Keberadaan karbohidrat sukrosa alami buah ceri matang yang terasa manis penuh tanpa rasa hambar atau green astringent.
                    </p>
                  </div>
                  <div className="font-mono text-sm font-bold text-roast-950 bg-paper-200 px-3 py-1 border border-paper-400">
                    {sweetnessScore} / 10 Pts
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  {sample.sweetnessCups.map((active, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleCup('sweetnessCups', i)}
                      className={`flex-1 py-2 font-mono text-xs font-bold border transition-colors ${
                        active
                          ? 'bg-roast-950 text-paper-50 border-roast-950 shadow-xs'
                          : 'bg-rose-50 text-rose-800 border-rose-300 line-through'
                      }`}
                    >
                      Cup #{i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION C: DEFECTS EVALUATION */}
          <div className="bg-paper-50 border border-paper-400 p-6 space-y-4">
            <div className="border-b border-paper-300 pb-2 flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-rose-700 font-bold block">
                  [ BAGIAN C: PENGURANGAN CACAT RASA (DEFECTS DEDUCTION) ]
                </span>
                <h3 className="font-serif text-lg font-bold text-roast-950">
                  Evaluasi Cacat Rasa (Taints & Faults)
                </h3>
              </div>
              <div className="font-mono text-xs font-bold text-rose-800 bg-rose-50 px-3 py-1 border border-rose-300">
                Penalti: -{defectDeduction} Pts
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-paper-100/50 border border-paper-300 space-y-2">
                <span className="font-mono text-xs font-bold text-roast-950 block">
                  Taints (Cacat Terasa Ringan / Tercium)
                </span>
                <p className="text-[11px] text-roast-500 font-sans">
                  Nilai penalti: <strong className="text-roast-900">2 poin</strong> per cangkir yang terdampak.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="font-mono text-xs text-roast-600">Jumlah Cup:</span>
                  <select
                    value={sample.taintCups}
                    onChange={(e) => setSample({ ...sample, taintCups: parseInt(e.target.value) })}
                    className="px-3 py-1 bg-paper-50 border border-paper-300 font-mono text-xs font-bold"
                  >
                    {[0, 1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} cangkir (-{num * 2} pts)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="p-4 bg-paper-100/50 border border-paper-300 space-y-2">
                <span className="font-mono text-xs font-bold text-rose-900 block">
                  Faults (Cacat Parah / Rusak Total)
                </span>
                <p className="text-[11px] text-roast-500 font-sans">
                  Nilai penalti: <strong className="text-rose-900">4 poin</strong> per cangkir (busuk/fenol/fermentasi liar).
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="font-mono text-xs text-roast-600">Jumlah Cup:</span>
                  <select
                    value={sample.faultCups}
                    onChange={(e) => setSample({ ...sample, faultCups: parseInt(e.target.value) })}
                    className="px-3 py-1 bg-paper-50 border border-paper-300 font-mono text-xs font-bold text-rose-900"
                  >
                    {[0, 1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} cangkir (-{num * 4} pts)
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {defectDeduction > 0 && (
              <div>
                <label className="text-[10px] uppercase font-mono text-rose-700 font-bold block mb-1">
                  Deskripsi Cacat Rasa yang Terdeteksi:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Cangkir #2 aroma apek karung lembap (Taint), Cangkir #4 rasa fenol karet terbakar (Fault)..."
                  value={sample.defectDescription}
                  onChange={(e) => setSample({ ...sample, defectDescription: e.target.value })}
                  className="w-full px-3 py-1.5 bg-rose-50 border border-rose-300 text-xs font-sans text-rose-950 focus:outline-none"
                />
              </div>
            )}
          </div>

          {/* GENERAL NOTES */}
          <div className="bg-paper-50 border border-paper-400 p-6 space-y-2">
            <span className="font-mono text-[10px] uppercase text-roast-500 font-bold block">
              Catatan Sensoris & Rekomendasi Roaster / Barista:
            </span>
            <textarea
              rows={3}
              value={sample.generalNotes}
              onChange={(e) => setSample({ ...sample, generalNotes: e.target.value })}
              placeholder="Tuliskan impresi holistik, potensi penggunaan di espresso atau manual brew, serta saran kurva roasting..."
              className="w-full p-3 bg-paper-100/60 border border-paper-300 text-xs font-sans text-roast-900 leading-relaxed focus:outline-none"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: RADAR SPIDER CHART & SCORE SUMMARY (4 COLS) */}
        <div className="lg:col-span-4 space-y-6 sticky top-24">
          {/* TOTAL SCORE BOARD */}
          <div className="bg-paper-50 border-2 border-roast-950 p-6 space-y-4 shadow-subtle">
            <div className="text-center space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-roast-500 block">
                [ SKOR AKHIR UJI CITA RASA ]
              </span>
              <div className="font-serif text-5xl sm:text-6xl font-bold text-roast-950 tracking-tight">
                {finalTotalScore.toFixed(2)}
              </div>
              <span className="font-mono text-xs text-roast-500 block">
                dari skala 100.00 Poin SCA
              </span>
            </div>

            {/* Classification Tier Badge */}
            <div className={`p-3.5 border rounded text-center space-y-1 ${classification.badgeColor}`}>
              <div className="font-serif font-bold text-sm leading-tight flex items-center justify-center gap-1.5">
                <Award className="w-4 h-4 shrink-0" />
                <span>{classification.grade}</span>
              </div>
              <p className="text-[11px] font-sans leading-snug opacity-90">
                {classification.desc}
              </p>
            </div>

            {/* Score Breakdown Ledger */}
            <div className="border-t border-paper-300 pt-3 space-y-1.5 font-mono text-xs">
              <div className="flex justify-between text-roast-700">
                <span>Subtotal 10 Atribut:</span>
                <span className="font-bold text-roast-950">{rawSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-rose-700">
                <span>Penalti Cacat (Defects):</span>
                <span className="font-bold">-{defectDeduction.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-dashed border-paper-300 pt-1.5 text-roast-950 font-bold">
                <span>Total Bersih:</span>
                <span className="text-cherry-800 text-sm">{finalTotalScore.toFixed(2)} / 100</span>
              </div>
            </div>
          </div>

          {/* SVG RADAR SPIDER CHART */}
          <div className="bg-paper-50 border border-paper-400 p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-paper-300 pb-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold">
                [ SENSORY RADAR SPIDER CHART ]
              </span>
              <span className="font-mono text-[9px] text-cherry-700">10 Sumbu</span>
            </div>

            <div className="relative w-full aspect-square flex items-center justify-center py-2">
              <svg viewBox="0 0 300 300" className="w-full h-full max-w-[280px] overflow-visible">
                {/* Background Grid Rings */}
                {radarSvgCoordinates.rings.map((ringPolygon, idx) => (
                  <polygon
                    key={idx}
                    points={ringPolygon}
                    fill="none"
                    stroke="#D6C7B2"
                    strokeWidth="0.75"
                    strokeDasharray={idx < 3 ? '2 2' : 'none'}
                  />
                ))}

                {/* Axes Lines */}
                {radarSvgCoordinates.points.map((pt, idx) => (
                  <line
                    key={idx}
                    x1={radarSvgCoordinates.center}
                    y1={radarSvgCoordinates.center}
                    x2={radarSvgCoordinates.center + radarSvgCoordinates.radius * Math.cos(pt.angle)}
                    y2={radarSvgCoordinates.center + radarSvgCoordinates.radius * Math.sin(pt.angle)}
                    stroke="#D6C7B2"
                    strokeWidth="0.75"
                  />
                ))}

                {/* Filled Radar Area */}
                <polygon
                  points={radarSvgCoordinates.polygonPoints}
                  fill="rgba(126, 29, 42, 0.22)"
                  stroke="#7E1D2A"
                  strokeWidth="2"
                  className="transition-all duration-300 ease-out"
                />

                {/* Data Points and Labels */}
                {radarSvgCoordinates.points.map((pt, idx) => {
                  const labelRadius = radarSvgCoordinates.radius + 18;
                  const lx = radarSvgCoordinates.center + labelRadius * Math.cos(pt.angle);
                  const ly = radarSvgCoordinates.center + labelRadius * Math.sin(pt.angle);

                  return (
                    <g key={idx}>
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="3.5"
                        fill="#7E1D2A"
                        stroke="#FAF7F2"
                        strokeWidth="1.5"
                        className="transition-all duration-300"
                      />
                      <text
                        x={lx}
                        y={ly}
                        textAnchor="middle"
                        dominantBaseline="central"
                        className="font-mono text-[8px] fill-roast-800 font-semibold"
                      >
                        {pt.label.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <p className="text-[10px] font-sans text-roast-500 text-center italic">
              Grafik radar spider-web memperlihatkan keseimbangan proporsi rasa sampel secara visual seketika.
            </p>
          </div>

          {/* QUICK ROAST & BREWING RECOMMENDATION */}
          <div className="bg-paper-100/70 border border-paper-300 p-4 space-y-2 font-sans text-xs">
            <span className="font-mono text-[10px] uppercase text-roast-500 font-bold block flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-cherry-700" />
              <span>Panduan Ekstraksi Sampel:</span>
            </span>
            <ul className="space-y-1.5 text-roast-800 text-[11px] list-disc list-inside">
              <li>
                <strong>Rasio Seduh Cupping:</strong> 8.25 gram bubuk kopi per 150 ml air (55 g/L).
              </li>
              <li>
                <strong>Suhu Air Optimal:</strong> 93°C diseduh merata langsung membasahi seluruh bubuk.
              </li>
              <li>
                <strong>Gilingan:</strong> Medium-coarse (ukuran 70% lolos ayakan U.S. Standard 20 mesh).
              </li>
              <li>
                <strong>Mangkuk:</strong> Gelas kaca atau keramik berkapasitas 200–260 ml.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
