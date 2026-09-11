'use client';

import React, { useState, useMemo, useEffect } from "react";
import {
  ClipboardCheck,
  Timer,
  RotateCcw,
  Copy,
  Check,
  Printer,
  Sparkles,
  Award,
  Coffee,
  Info,
  Sliders,
  Play,
  Pause,
  Layers,
  Flame,
  ShieldCheck,
  Compass,
} from "lucide-react";

/* =========================================================================
   1. KLASIK SCA CUPPING SHEET TYPES & PRESETS (10 ATRIBUT + RADAR PENTAGRAM)
   ========================================================================= */

export interface CuppingSampleData {
  sampleCode: string;
  originName: string;
  producer: string;
  region: string;
  altitude: string;
  variety: string;
  process: string;
  roastDate: string;
  roastColor: "Light" | "Medium-Light" | "Medium" | "Medium-Dark";
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
  acidityIntensity: "Rendah" | "Sedang" | "Tinggi" | "Kompleks";
  bodyScore: number;
  bodyWeight: "Tipis (Tea-like)" | "Sedang (Silky)" | "Tebal (Syrupy)" | "Creamy";
  balanceScore: number;
  overallScore: number;

  // 5-Cup checklist attributes (2 pts per cup)
  uniformityCups: boolean[]; // 5 cups = 10 pts
  cleanCupCups: boolean[]; // 5 cups = 10 pts
  sweetnessCups: boolean[]; // 5 cups = 10 pts

  // Defects
  taintCups: number; // 2 pts each
  faultCups: number; // 4 pts each
  defectDescription: string;

  generalNotes: string;
}

const DEFAULT_SAMPLE: CuppingSampleData = {
  sampleCode: "ID-SCA-01",
  originName: "Aceh Gayo Pantan Musara",
  producer: "Koperasi Baiko & Petani Pegasing",
  region: "Takengon, Aceh Tengah",
  altitude: "1.550 mdpl",
  variety: "Ateng Super & Tim-Tim",
  process: "Anaerobic Natural (72h Fermentasi)",
  roastDate: "2026-09-02",
  roastColor: "Light",
  cupperName: "Q-Grader / Barista CherryEdu",
  sessionDate: new Date().toISOString().split("T")[0],

  fragranceScore: 8.50,
  fragranceNotes: "Aroma ceri matang, kismis, lavender floral, sweet brown sugar",
  flavorScore: 8.75,
  flavorNotes: "Blackberry, plum manis, dark cocoa, anggur merah fermented halus",
  aftertasteScore: 8.25,
  aftertasteNotes: "Panjang, bersih, manis madu hutan dan lingering cocoa butter",
  acidityScore: 8.50,
  acidityIntensity: "Kompleks",
  bodyScore: 8.50,
  bodyWeight: "Tebal (Syrupy)",
  balanceScore: 8.25,
  overallScore: 8.50,

  uniformityCups: [true, true, true, true, true],
  cleanCupCups: [true, true, true, true, true],
  sweetnessCups: [true, true, true, true, true],

  taintCups: 0,
  faultCups: 0,
  defectDescription: "",
  generalNotes:
    "Cangkir yang luar biasa dinamis. Keasaman malat-sitrat sangat jernih berpadu dengan body yang syrupy tebal. Sangat representatif untuk micro-lot kompetisi.",
};

const CLASSIC_PRESETS: { label: string; tag: string; data: Partial<CuppingSampleData> }[] = [
  {
    label: "Aceh Gayo Anaerobic Natural",
    tag: "Specialty Score ~89.25",
    data: {
      sampleCode: "GY-NAT-99",
      originName: "Aceh Gayo Pantan Musara",
      producer: "Hendrik Hendra - Pegasing",
      region: "Takengon, Aceh Tengah",
      altitude: "1.600 mdpl",
      variety: "Ateng Super & Bor-Bor",
      process: "Anaerobic Natural (Slow Dry)",
      roastColor: "Light",
      fragranceScore: 8.75,
      fragranceNotes: "Ripe jackfruit, raspberry jam, dried fig, delicate rose",
      flavorScore: 8.75,
      flavorNotes: "Black currant, candied orange peel, dark chocolate liqueur",
      aftertasteScore: 8.50,
      aftertasteNotes: "Very sweet, long silky cocoa lingering",
      acidityScore: 8.75,
      acidityIntensity: "Kompleks",
      bodyScore: 8.50,
      bodyWeight: "Tebal (Syrupy)",
      balanceScore: 8.50,
      overallScore: 8.75,
      uniformityCups: [true, true, true, true, true],
      cleanCupCups: [true, true, true, true, true],
      sweetnessCups: [true, true, true, true, true],
      taintCups: 0,
      faultCups: 0,
      generalNotes: "Micro-lot premium dengan spektrum buah fermentasi terkontrol tanpa ada rasa cuka liar.",
    },
  },
  {
    label: "Java Preanger Typica Washed",
    tag: "Specialty Score ~86.25",
    data: {
      sampleCode: "JP-TYP-04",
      originName: "Gunung Puntang Cimaung",
      producer: "Ayeng & Komunitas Puntang",
      region: "Bandung Selatan, Jawa Barat",
      altitude: "1.400 mdpl",
      variety: "Typica Priangan & Linea S",
      process: "Fully Washed (Double Fermentation)",
      roastColor: "Light",
      fragranceScore: 8.50,
      fragranceNotes: "Jasmine blossom, lemongrass, peach syrup, floral bergamot",
      flavorScore: 8.50,
      flavorNotes: "Crisp green apple, Earl Grey tea, white honey, lime zest",
      aftertasteScore: 8.25,
      aftertasteNotes: "Bersih, elegan, menyisakan manis cane sugar lembut",
      acidityScore: 8.75,
      acidityIntensity: "Tinggi",
      bodyScore: 8.00,
      bodyWeight: "Sedang (Silky)",
      balanceScore: 8.50,
      overallScore: 8.50,
      uniformityCups: [true, true, true, true, true],
      cleanCupCups: [true, true, true, true, true],
      sweetnessCups: [true, true, true, true, true],
      taintCups: 0,
      faultCups: 0,
      generalNotes: "Sangat clean dan refined. Keasaman sitrat yang cerah dengan profil teh melati klasik Priangan.",
    },
  },
  {
    label: "Bali Kintamani Orange Honey",
    tag: "Specialty Score ~84.75",
    data: {
      sampleCode: "BALI-HNY-12",
      originName: "Kintamani Mengani",
      producer: "Subak Abian Ulian Murni",
      region: "Bangli, Kintamani, Bali",
      altitude: "1.300 mdpl",
      variety: "Kopyol & USDA 762",
      process: "Yellow Honey (Intercropping Jeruk)",
      roastColor: "Medium-Light",
      fragranceScore: 8.25,
      fragranceNotes: "Tangerine orange, brown sugar caramel, roasted cashew",
      flavorScore: 8.25,
      flavorNotes: "Mandarin citrus, milk chocolate, sweet cane syrup",
      aftertasteScore: 8.00,
      aftertasteNotes: "Manis bersih karamel gula aren",
      acidityScore: 8.25,
      acidityIntensity: "Sedang",
      bodyScore: 8.25,
      bodyWeight: "Sedang (Silky)",
      balanceScore: 8.25,
      overallScore: 8.25,
      uniformityCups: [true, true, true, true, true],
      cleanCupCups: [true, true, true, true, true],
      sweetnessCups: [true, true, true, true, true],
      taintCups: 0,
      faultCups: 0,
      generalNotes: "Karakter citrus khas tumpang sari jeruk Kintamani dengan rasa manis madu yang seimbang.",
    },
  },
  {
    label: "Komoditas Komersial (Ada Defect)",
    tag: "Off-Grade Score ~73.50",
    data: {
      sampleCode: "COMM-DEF-02",
      originName: "Kopi Asalan Pasar Lokal",
      producer: "Pengepul Campuran",
      region: "Sumatra Bagian Selatan",
      altitude: "900 mdpl",
      variety: "Campuran Multi-Klon",
      process: "Giling Basah Tergesa-gesa",
      roastColor: "Medium-Dark",
      fragranceScore: 6.75,
      fragranceNotes: "Earthy basah, apek kardus lembap, aroma obat",
      flavorScore: 6.75,
      flavorNotes: "Woody tajam, harsh bitterness, asam cuka berlebihan",
      aftertasteScore: 6.50,
      aftertasteNotes: "Kering di tenggorokan (astringent), rasa sepat pahit",
      acidityScore: 6.75,
      acidityIntensity: "Rendah",
      bodyScore: 7.25,
      bodyWeight: "Tebal (Syrupy)",
      balanceScore: 6.50,
      overallScore: 6.50,
      uniformityCups: [true, true, false, true, true],
      cleanCupCups: [true, false, false, true, true],
      sweetnessCups: [true, true, true, false, true],
      taintCups: 1,
      faultCups: 1,
      defectDescription: "1 cangkir bau apek fermentasi liar (Taint), 1 cangkir bau busuk phenolat menyengat (Fault).",
      generalNotes: "Biji asalan tidak tersortasi dengan baik. Kehilangan poin signifikan di Clean Cup, Uniformity, dan terkena penalti defect.",
    },
  },
];

/* =========================================================================
   2. CVA (COFFEE VALUE ASSESSMENT) TYPES & PRESETS
   ========================================================================= */

export interface CVAPreset {
  id: string;
  name: string;
  origin: string;
  process: string;
  elevation: string;
  tasterName: string;
  descriptors: string[];
  acidityType: "Citric" | "Malic" | "Phosphoric" | "Acetic";
  bodyTexture: "Silky" | "Creamy" | "Viscous" | "Astringent" | "Juicy";
  intensity: {
    dryAroma: number;
    breakAroma: number;
    acidity: number;
    sweetness: number;
    mouthfeel: number;
    aftertaste: number;
  };
  hedonic: {
    fragranceAroma: number;
    flavor: number;
    aftertaste: number;
    acidity: number;
    sweetness: number;
    mouthfeel: number;
    balance: number;
    overall: number;
  };
  cups: {
    uniformity: boolean[];
    cleanCup: boolean[];
    sweetness: boolean[];
  };
  defects: {
    taintCount: number;
    faultCount: number;
  };
  notes: string;
}

const CVA_PRESETS: CVAPreset[] = [
  {
    id: "gayo-anaerobic",
    name: "Aceh Gayo Anaerobic Natural (Micro-lot)",
    origin: "Takengon, Aceh Tengah (1.600 mdpl)",
    process: "Anaerobic Natural 72 Jam",
    elevation: "1.600 mdpl",
    tasterName: "Q-Grader Indonesia",
    descriptors: ["Blackberry", "Cranberry", "Gula Aren", "Red Wine", "Dark Chocolate"],
    acidityType: "Malic",
    bodyTexture: "Juicy",
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
    notes: "Kompleksitas luar biasa dengan acidity apel malat segar dan aftertaste anggur fermentasi manis.",
  },
  {
    id: "preanger-typica",
    name: "Java Preanger Typica Full Washed",
    origin: "Pangalengan, Jawa Barat (1.500 mdpl)",
    process: "Fully Washed (Fermentasi Basah 36 Jam)",
    elevation: "1.500 mdpl",
    tasterName: "Senior Barista",
    descriptors: ["Melati", "Peach", "Teh Hitam", "Madu Bunga", "Bergamot"],
    acidityType: "Citric",
    bodyTexture: "Silky",
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
    notes: "Kejernihan khas washed klasik Jawa Barat dengan bunga melati yang anggun dan balance sempurna.",
  },
];

const DESCRIPTOR_TAGS = [
  "Floral / Melati",
  "Citrus / Jeruk",
  "Stone Fruit / Persik",
  "Berry / Stroberi",
  "Caramel / Gula Aren",
  "Chocolate / Kakao",
  "Nutty / Kenari",
  "Warm Spices / Kayu Manis",
  "Fermented / Winey",
  "Herbal / Cedar",
  "Black Tea / Earl Grey",
  "Tropical Fruit / Nangka",
];

/* =========================================================================
   3. MAIN EXPORTED COMPONENT: SCACuppingForm
   ========================================================================= */

interface SCACuppingFormProps {
  initialStandard?: "classic" | "cva";
}

export function SCACuppingForm({ initialStandard = "classic" }: SCACuppingFormProps) {
  // Mode switcher: "classic" (with radar spider pentagram) vs "cva"
  const [activeStandard, setActiveStandard] = useState<"classic" | "cva">(initialStandard);

  /* ------------------- STATE KLASIK SCA ------------------- */
  const [sample, setSample] = useState<CuppingSampleData>(DEFAULT_SAMPLE);
  const [copiedClassic, setCopiedClassic] = useState(false);

  // Cupping Timer State
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!timerRunning && timerSeconds !== 0 && interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, timerSeconds]);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Cupping stage helper based on time
  const cuppingStage = useMemo(() => {
    if (timerSeconds < 240) {
      return {
        stage: "Tahap 1: Evaluasi Aroma Kering & Kerak Basah (Crust)",
        instruction:
          "Air mendidih 93°C telah dituang. Evaluasi aroma dry grounds dan crust selama 4 menit pertama tanpa diaduk.",
        color: "text-roast-900 bg-paper-100 border-paper-300",
      };
    } else if (timerSeconds < 480) {
      return {
        stage: "Tahap 2: Break The Crust & Skimming Foam",
        instruction:
          "Gunakan sendok cupping, pecahkan kerak 3 kali dorongan sambil mendekatkan hidung. Bersihkan sisa busa.",
        color: "text-cherry-900 bg-paper-100 border-cherry-300",
      };
    } else if (timerSeconds < 720) {
      return {
        stage: "Tahap 3: Slurp Cupping Suhu Panas (~70°C)",
        instruction:
          "Mulai seruput (aspirate). Nilai karakter Flavor dan Acidity saat kopi masih hangat menuju sedang.",
        color: "text-roast-900 bg-paper-100 border-paper-300",
      };
    } else if (timerSeconds < 1080) {
      return {
        stage: "Tahap 4: Slurp Suhu Hangat (~60°C - 50°C)",
        instruction:
          "Nilai Aftertaste, Body, dan Balance saat suhu turun. Manis dan kejernihan mulai terbaca jelas.",
        color: "text-roast-900 bg-paper-100 border-paper-300",
      };
    } else {
      return {
        stage: "Tahap 5: Slurp Suhu Ruang (< 40°C - 30°C)",
        instruction:
          "Konfirmasi Uniformity (keseragaman 5 cangkir), Clean Cup, Sweetness, dan berikan skor Overall final.",
        color: "text-roast-900 bg-paper-100 border-paper-300",
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
    const calculated = rawSubtotal - defectDeduction;
    return Math.max(0, Math.min(100, calculated));
  }, [rawSubtotal, defectDeduction]);

  // Classification Tier
  const classification = useMemo(() => {
    if (finalTotalScore >= 90.0) {
      return {
        grade: "Exemplary (Specialty Superlative / COE Grade)",
        desc: "Tingkat tertinggi dunia kompetisi kopi specialty. Kompleksitas rasa langka dan struktur rasa harmonis sempurna.",
        badgeColor: "bg-roast-950 text-paper-50 border-roast-900",
      };
    } else if (finalTotalScore >= 85.0) {
      return {
        grade: "Outstanding Specialty Coffee",
        desc: "Cita rasa sangat luar biasa, kaya nuansa orisinil terroir, keasaman hidup, dan aftertaste manis panjang.",
        badgeColor: "bg-paper-200 text-roast-950 border-paper-400 font-bold",
      };
    } else if (finalTotalScore >= 80.0) {
      return {
        grade: "Very Good Specialty Coffee",
        desc: "Memenuhi standar resmi Specialty Coffee Association (SCA 80+). Cangkir bersih, manis, dan seimbang.",
        badgeColor: "bg-paper-100 text-roast-900 border-paper-300 font-semibold",
      };
    } else {
      return {
        grade: "Below Specialty Grade (Commercial / Commodity)",
        desc: "Di bawah batas minimum specialty (skor < 80). Cocok untuk kopi komersial, blend instan, atau pasar lokal.",
        badgeColor: "bg-paper-100 text-roast-700 border-paper-300",
      };
    }
  }, [finalTotalScore]);

  // SVG Radar Spider Chart (Pentagram 10 Sumbu)
  const radarAxes = useMemo(() => {
    return [
      { label: "Fragrance", score: sample.fragranceScore, max: 10, min: 6 },
      { label: "Flavor", score: sample.flavorScore, max: 10, min: 6 },
      { label: "Aftertaste", score: sample.aftertasteScore, max: 10, min: 6 },
      { label: "Acidity", score: sample.acidityScore, max: 10, min: 6 },
      { label: "Body", score: sample.bodyScore, max: 10, min: 6 },
      { label: "Balance", score: sample.balanceScore, max: 10, min: 6 },
      { label: "Uniformity", score: uniformityScore, max: 10, min: 0 },
      { label: "Clean Cup", score: cleanCupScore, max: 10, min: 0 },
      { label: "Sweetness", score: sweetnessScore, max: 10, min: 0 },
      { label: "Overall", score: sample.overallScore, max: 10, min: 6 },
    ];
  }, [sample, uniformityScore, cleanCupScore, sweetnessScore]);

  const radarSvgCoordinates = useMemo(() => {
    const center = 150;
    const radius = 110;
    const angleStep = (Math.PI * 2) / radarAxes.length;

    const points = radarAxes.map((axis, i) => {
      const normalized = Math.max(0, Math.min(1, (axis.score - axis.min) / (axis.max - axis.min)));
      const dist = radius * (0.2 + normalized * 0.8);
      const angle = i * angleStep - Math.PI / 2;
      const x = center + dist * Math.cos(angle);
      const y = center + dist * Math.sin(angle);
      return { x, y, angle, label: axis.label, score: axis.score };
    });

    const polygonPoints = points.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");

    const rings = [0.25, 0.5, 0.75, 1].map((scale) => {
      return radarAxes
        .map((_, i) => {
          const dist = radius * (0.2 + scale * 0.8);
          const angle = i * angleStep - Math.PI / 2;
          return `${(center + dist * Math.cos(angle)).toFixed(1)},${(center + dist * Math.sin(angle)).toFixed(1)}`;
        })
        .join(" ");
    });

    return { center, radius, points, polygonPoints, rings, angleStep };
  }, [radarAxes]);

  const toggleClassicCup = (field: "uniformityCups" | "cleanCupCups" | "sweetnessCups", index: number) => {
    setSample((prev) => {
      const arr = [...prev[field]];
      arr[index] = !arr[index];
      return { ...prev, [field]: arr };
    });
  };

  const handleCopyClassicSummary = () => {
    const text = `--- SCA CUPPING SCORE SHEET RECORD ---
Kode Sampel: ${sample.sampleCode}
Origin: ${sample.originName} (${sample.region})
Produser: ${sample.producer} | Elevasi: ${sample.altitude}
Varietas: ${sample.variety} | Proses: ${sample.process}
Roast Date: ${sample.roastDate} (${sample.roastColor})
Cupper: ${sample.cupperName} | Tanggal: ${sample.sessionDate}

HASIL SKOR AKHIR: ${finalTotalScore.toFixed(2)} / 100.00
Predikat Mutu: ${classification.grade}
Subtotal Atribut: ${rawSubtotal.toFixed(2)} | Penalti Defect: -${defectDeduction.toFixed(2)}

SKOR 10 ATRIBUT:
- Fragrance / Aroma: ${sample.fragranceScore.toFixed(2)} (${sample.fragranceNotes || "-"})
- Flavor: ${sample.flavorScore.toFixed(2)} (${sample.flavorNotes || "-"})
- Aftertaste: ${sample.aftertasteScore.toFixed(2)} (${sample.aftertasteNotes || "-"})
- Acidity: ${sample.acidityScore.toFixed(2)} (${sample.acidityIntensity})
- Body: ${sample.bodyScore.toFixed(2)} (${sample.bodyWeight})
- Balance: ${sample.balanceScore.toFixed(2)}
- Uniformity (5 Cups): ${uniformityScore} / 10
- Clean Cup (5 Cups): ${cleanCupScore} / 10
- Sweetness (5 Cups): ${sweetnessScore} / 10
- Overall: ${sample.overallScore.toFixed(2)}

Penalti Cacat (Defects):
- Taints (x2): ${sample.taintCups} cup
- Faults (x4): ${sample.faultCups} cup
${sample.defectDescription ? `Keterangan: ${sample.defectDescription}` : ""}

Catatan Cupper: ${sample.generalNotes}
--- Dicatat via CherryEdu Digital SCA Cupping Lab ---`;

    navigator.clipboard.writeText(text);
    setCopiedClassic(true);
    setTimeout(() => setCopiedClassic(false), 2500);
  };

  /* ------------------- STATE CVA (COFFEE VALUE ASSESSMENT) ------------------- */
  const [activeCvaPresetId, setActiveCvaPresetId] = useState<string>("gayo-anaerobic");
  const [cvaSampleName, setCvaSampleName] = useState("Aceh Gayo Anaerobic Natural (Micro-lot)");
  const [cvaOrigin, setCvaOrigin] = useState("Takengon, Aceh Tengah (1.600 mdpl)");
  const [cvaProcess, setCvaProcess] = useState("Anaerobic Natural 72 Jam");
  const [cvaTasterName, setCvaTasterName] = useState("Q-Grader / Barista CherryEdu");

  const [intensity, setIntensity] = useState({
    dryAroma: 12.5,
    breakAroma: 13.0,
    acidity: 11.5,
    sweetness: 13.5,
    mouthfeel: 11.0,
    aftertaste: 12.0,
  });

  const [acidityType, setAcidityType] = useState<"Citric" | "Malic" | "Phosphoric" | "Acetic">("Malic");
  const [bodyTexture, setBodyTexture] = useState<"Silky" | "Creamy" | "Viscous" | "Astringent" | "Juicy">("Juicy");
  const [selectedDescriptors, setSelectedDescriptors] = useState<string[]>([
    "Berry / Stroberi",
    "Caramel / Gula Aren",
    "Floral / Melati",
  ]);

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

  const [cvaUniformityCups, setCvaUniformityCups] = useState<boolean[]>([true, true, true, true, true]);
  const [cvaCleanCups, setCvaCleanCups] = useState<boolean[]>([true, true, true, true, true]);
  const [cvaSweetnessCups, setCvaSweetnessCups] = useState<boolean[]>([true, true, true, true, true]);
  const [cvaTaintCount, setCvaTaintCount] = useState<number>(0);
  const [cvaFaultCount, setCvaFaultCount] = useState<number>(0);
  const [cvaNotes, setCvaNotes] = useState(
    "Kompleksitas luar biasa dengan keasaman apel malat segar dan aftertaste anggur fermentasi manis."
  );
  const [copiedCva, setCopiedCva] = useState(false);

  const handleLoadCvaPreset = (preset: CVAPreset) => {
    setActiveCvaPresetId(preset.id);
    setCvaSampleName(preset.name);
    setCvaOrigin(preset.origin);
    setCvaProcess(preset.process);
    setCvaTasterName(preset.tasterName);
    setIntensity({ ...preset.intensity });
    setAcidityType(preset.acidityType);
    setBodyTexture(preset.bodyTexture);
    setHedonic({ ...preset.hedonic });
    setCvaUniformityCups([...preset.cups.uniformity]);
    setCvaCleanCups([...preset.cups.cleanCup]);
    setCvaSweetnessCups([...preset.cups.sweetness]);
    setCvaTaintCount(preset.defects.taintCount);
    setCvaFaultCount(preset.defects.faultCount);
    setCvaNotes(preset.notes);
  };

  const toggleCvaDescriptor = (desc: string) => {
    if (selectedDescriptors.includes(desc)) {
      setSelectedDescriptors(selectedDescriptors.filter((d) => d !== desc));
    } else {
      setSelectedDescriptors([...selectedDescriptors, desc]);
    }
  };

  const toggleCvaCup = (category: "uniformity" | "clean" | "sweetness", index: number) => {
    if (category === "uniformity") {
      const copy = [...cvaUniformityCups];
      copy[index] = !copy[index];
      setCvaUniformityCups(copy);
    } else if (category === "clean") {
      const copy = [...cvaCleanCups];
      copy[index] = !copy[index];
      setCvaCleanCups(copy);
    } else if (category === "sweetness") {
      const copy = [...cvaSweetnessCups];
      copy[index] = !copy[index];
      setCvaSweetnessCups(copy);
    }
  };

  const cvaScoreResults = useMemo(() => {
    const hedonicSum =
      hedonic.fragranceAroma +
      hedonic.flavor +
      hedonic.aftertaste +
      hedonic.acidity +
      hedonic.sweetness +
      hedonic.mouthfeel +
      hedonic.balance +
      hedonic.overall;

    const uniformityScore = cvaUniformityCups.filter(Boolean).length * 2;
    const cleanCupScore = cvaCleanCups.filter(Boolean).length * 2;
    const sweetnessScore = cvaSweetnessCups.filter(Boolean).length * 2;
    const cupBonus = uniformityScore + cleanCupScore + sweetnessScore;
    const defectPenalty = cvaTaintCount * 2 + cvaFaultCount * 4;

    const totalScore = Math.max(0, Math.min(100, Number((hedonicSum + (cupBonus - 30) - defectPenalty).toFixed(2))));

    let gradeTitle = "Below Specialty Grade / Commercial";
    if (totalScore >= 90.0) {
      gradeTitle = "Exemplary / COE Superlative (Kopi Istimewa Langka)";
    } else if (totalScore >= 85.0) {
      gradeTitle = "Outstanding Specialty Coffee (Luar Biasa / Micro-lot)";
    } else if (totalScore >= 80.0) {
      gradeTitle = "Very Good Specialty Coffee (Sangat Baik / Single Origin)";
    }

    return {
      hedonicSum: Number(hedonicSum.toFixed(2)),
      uniformityScore,
      cleanCupScore,
      sweetnessScore,
      defectPenalty,
      totalScore,
      gradeTitle,
    };
  }, [hedonic, cvaUniformityCups, cvaCleanCups, cvaSweetnessCups, cvaTaintCount, cvaFaultCount]);

  const handleCopyCvaReport = () => {
    const lines = [
      "=== LEMBAR EVALUASI SENSORIK: SCA COFFEE VALUE ASSESSMENT (CVA) ===",
      `Sampel: ${cvaSampleName}`,
      `Origin / Elevasi: ${cvaOrigin}`,
      `Metode Pasca Panen: ${cvaProcess}`,
      `Evaluator / Q-Grader: ${cvaTasterName}`,
      "",
      "HASIL PENILAIAN RESMI:",
      `TOTAL SKOR AKHIR: ${cvaScoreResults.totalScore} / 100.00`,
      `Predikat: ${cvaScoreResults.gradeTitle}`,
      `Penalti Defect: -${cvaScoreResults.defectPenalty} poin (${cvaTaintCount} Taint, ${cvaFaultCount} Fault)`,
      "",
      "DESCRIPTIVE SENSORY INTENSITY (0 - 15):",
      `• Dry Fragrance: ${intensity.dryAroma}/15`,
      `• Break Aroma: ${intensity.breakAroma}/15`,
      `• Acidity: ${intensity.acidity}/15 (Dominan: Asam ${acidityType})`,
      `• Sweetness: ${intensity.sweetness}/15`,
      `• Body Weight: ${intensity.mouthfeel}/15 (Tekstur: ${bodyTexture})`,
      `• Aftertaste: ${intensity.aftertaste}/15`,
      `• Sensory Descriptors: ${selectedDescriptors.join(", ")}`,
      "",
      "AFFECTIVE / HEDONIC SCORES (6.00 - 10.00):",
      `• Fragrance/Aroma: ${hedonic.fragranceAroma}`,
      `• Flavor: ${hedonic.flavor}`,
      `• Aftertaste: ${hedonic.aftertaste}`,
      `• Acidity: ${hedonic.acidity}`,
      `• Sweetness: ${hedonic.sweetness}`,
      `• Mouthfeel: ${hedonic.mouthfeel}`,
      `• Balance: ${hedonic.balance}`,
      `• Overall: ${hedonic.overall}`,
      "",
      "Catatan Sensorik Evaluator:",
      `"${cvaNotes}"`,
      "",
      "Dievaluasi melalui CherryEdu Sensory Suite",
    ];

    navigator.clipboard.writeText(lines.join("\n"));
    setCopiedCva(true);
    setTimeout(() => setCopiedCva(false), 2000);
  };

  return (
    <div className="space-y-8 print:space-y-4 font-sans animate-in fade-in duration-200">
      {/* STANDARD PROTOCOL SELECTOR STRIP */}
      <div className="bg-paper-100/90 border border-paper-300 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 print:hidden shadow-xs">
        <div className="space-y-0.5">
          <span className="font-mono text-xs uppercase tracking-wider text-roast-700 font-semibold flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-cherry-700" />
            Pilih Standar Formulir Cupping:
          </span>
          <p className="text-xs text-roast-600">
            Gunakan Standar Klasik SCA dengan radar spider pentagram 10 atribut, atau Standar CVA (Coffee Value Assessment).
          </p>
        </div>

        <div className="flex items-center gap-2 p-1 bg-paper-200/80 border border-paper-300 rounded-lg">
          <button
            type="button"
            onClick={() => setActiveStandard("classic")}
            className={`px-3.5 py-1.5 rounded-md font-mono text-xs font-semibold tracking-wide transition-all ${
              activeStandard === "classic"
                ? "bg-roast-950 text-paper-50 shadow-xs"
                : "text-roast-700 hover:text-roast-950 hover:bg-paper-100"
            }`}
          >
            SCA Klasik (10 Atribut & Pentagram)
          </button>
          <button
            type="button"
            onClick={() => setActiveStandard("cva")}
            className={`px-3.5 py-1.5 rounded-md font-mono text-xs font-semibold tracking-wide transition-all ${
              activeStandard === "cva"
                ? "bg-roast-950 text-paper-50 shadow-xs"
                : "text-roast-700 hover:text-roast-950 hover:bg-paper-100"
            }`}
          >
            SCA CVA (Coffee Value Assessment)
          </button>
        </div>
      </div>

      {/* =========================================================================
          MODE 1: KLASIK SCA 10-ATRIBUT SCORE SHEET (DENGAN RADAR PENTAGRAM)
          ========================================================================= */}
      {activeStandard === "classic" && (
        <div className="space-y-8 print:space-y-4">
          {/* HEADER PROTOCOL & ACTION BAR */}
          <div className="bg-paper-50 border border-paper-300 p-6 rounded-2xl shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-cherry-800 font-bold">
                  Official SCA Protocol 100-Point System
                </span>
                <span className="text-roast-400 font-mono text-xs">•</span>
                <span className="font-mono text-xs text-roast-600">
                  Standar Evaluasi Sensoris Specialty Kopi
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-roast-950">
                Digital SCA Cupping Score Sheet
              </h2>
              <p className="font-sans text-xs sm:text-sm text-roast-600 leading-relaxed">
                Formulir baku kalibrasi uji cita rasa berbasis standar Specialty Coffee Association. Dilengkapi penghitungan skor 10 atribut otomatis, evaluasi defect (taint & fault), kalkulator 5 cangkir, <strong>grafik radar spider-web pentagram visual</strong>, serta stopwatch waktu seduh resmi.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0 print:hidden">
              <button
                onClick={handleCopyClassicSummary}
                className="px-3.5 py-2 bg-roast-950 text-paper-50 hover:bg-roast-900 border border-roast-900 rounded-lg font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-xs"
                title="Salin Rangkuman Teks"
              >
                {copiedClassic ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-crema-300" />}
                <span>{copiedClassic ? "Tersalin" : "Salin Laporan"}</span>
              </button>

              <button
                onClick={() => window.print()}
                className="px-3.5 py-2 bg-paper-100 hover:bg-paper-200 border border-paper-300 rounded-lg text-roast-900 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
                title="Cetak Berkas Uji Cita Rasa"
              >
                <Printer className="w-3.5 h-3.5 text-roast-600" />
                <span>Cetak PDF</span>
              </button>

              <button
                onClick={() => setSample(DEFAULT_SAMPLE)}
                className="px-3.5 py-2 bg-paper-100 hover:bg-paper-200 border border-paper-300 rounded-lg text-roast-800 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
                title="Reset ke Template Default"
              >
                <RotateCcw className="w-3.5 h-3.5 text-roast-500" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* CUPPING TIMELINE STOPWATCH & STAGE GUIDELINES */}
          <div className="bg-paper-100/80 border border-paper-300 p-4 sm:p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 print:hidden">
            <div className="flex items-center gap-4">
              <div className="bg-roast-950 text-paper-50 font-mono text-2xl font-bold px-4 py-2 border border-roast-900 rounded-xl tracking-widest flex items-center gap-2 shadow-xs">
                <Timer className="w-5 h-5 text-crema-400" />
                <span>{formatTimer(timerSeconds)}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTimerRunning(!timerRunning)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold rounded-lg transition-colors flex items-center gap-1.5 ${
                    timerRunning
                      ? "bg-rose-700 hover:bg-rose-800 text-paper-50"
                      : "bg-roast-950 hover:bg-roast-900 text-paper-50"
                  }`}
                >
                  {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{timerRunning ? "Jeda Timer" : "Mulai Seduh"}</span>
                </button>

                <button
                  onClick={() => {
                    setTimerRunning(false);
                    setTimerSeconds(0);
                  }}
                  className="px-3 py-2 bg-paper-200 hover:bg-paper-300 border border-paper-400 rounded-lg text-roast-800 font-mono text-xs uppercase tracking-wider"
                >
                  Reset 00:00
                </button>
              </div>
            </div>

            {/* Current Cupping Stage Card */}
            <div className={`flex-1 max-w-xl p-3.5 border rounded-xl text-xs font-sans ${cuppingStage.color}`}>
              <div className="font-mono font-bold uppercase text-[11px] mb-0.5 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-cherry-700" />
                <span>{cuppingStage.stage}</span>
              </div>
              <p className="leading-snug opacity-90">{cuppingStage.instruction}</p>
            </div>
          </div>

          {/* ONE-CLICK PRESET PICKER */}
          <div className="bg-paper-50 border border-paper-300 p-4 rounded-xl space-y-2.5 print:hidden">
            <span className="font-mono text-xs uppercase text-roast-600 font-bold block flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cherry-700" />
              <span>Preset Kalibrasi Cepat Spesimen Nusantara:</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {CLASSIC_PRESETS.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => setSample((prev) => ({ ...prev, ...preset.data }))}
                  className="px-3.5 py-2 bg-paper-100 hover:bg-paper-200 border border-paper-300 hover:border-roast-500 rounded-lg text-left transition-all group"
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
          <div className="bg-paper-50 border border-paper-300 rounded-2xl p-6 space-y-4">
            <div className="border-b border-paper-200 pb-2 flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-roast-950 flex items-center gap-2">
                <Coffee className="w-4 h-4 text-cherry-700" />
                <span>Identitas Sampel & Kondisi Uji</span>
              </h3>
              <span className="font-mono text-xs uppercase text-roast-600">
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
                  className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 rounded-md text-roast-950 focus:outline-none focus:border-roast-800 font-bold"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase text-roast-500 block mb-1">Nama Origin / Lot:</label>
                <input
                  type="text"
                  value={sample.originName}
                  onChange={(e) => setSample({ ...sample, originName: e.target.value })}
                  className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 rounded-md text-roast-950 focus:outline-none focus:border-roast-800 font-bold"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase text-roast-500 block mb-1">Wilayah / Daerah:</label>
                <input
                  type="text"
                  value={sample.region}
                  onChange={(e) => setSample({ ...sample, region: e.target.value })}
                  className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 rounded-md text-roast-950 focus:outline-none focus:border-roast-800"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase text-roast-500 block mb-1">Petani / Produser / Koperasi:</label>
                <input
                  type="text"
                  value={sample.producer}
                  onChange={(e) => setSample({ ...sample, producer: e.target.value })}
                  className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 rounded-md text-roast-950 focus:outline-none focus:border-roast-800"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase text-roast-500 block mb-1">Elevasi Tanam:</label>
                <input
                  type="text"
                  value={sample.altitude}
                  onChange={(e) => setSample({ ...sample, altitude: e.target.value })}
                  className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 rounded-md text-roast-950 focus:outline-none focus:border-roast-800"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase text-roast-500 block mb-1">Varietas Botani:</label>
                <input
                  type="text"
                  value={sample.variety}
                  onChange={(e) => setSample({ ...sample, variety: e.target.value })}
                  className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 rounded-md text-roast-950 focus:outline-none focus:border-roast-800"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase text-roast-500 block mb-1">Metode Pasca Panen:</label>
                <input
                  type="text"
                  value={sample.process}
                  onChange={(e) => setSample({ ...sample, process: e.target.value })}
                  className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 rounded-md text-roast-950 focus:outline-none focus:border-roast-800"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase text-roast-500 block mb-1">Profil Sangrai (Roast Level):</label>
                <select
                  value={sample.roastColor}
                  onChange={(e) => setSample({ ...sample, roastColor: e.target.value as any })}
                  className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 rounded-md text-roast-950 focus:outline-none focus:border-roast-800 font-bold"
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
                  className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 rounded-md text-roast-950 focus:outline-none focus:border-roast-800"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase text-roast-500 block mb-1">Nama Cupper / Penilai:</label>
                <input
                  type="text"
                  value={sample.cupperName}
                  onChange={(e) => setSample({ ...sample, cupperName: e.target.value })}
                  className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 rounded-md text-roast-950 focus:outline-none focus:border-roast-800 font-bold"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase text-roast-500 block mb-1">Tanggal Sesi Cupping:</label>
                <input
                  type="date"
                  value={sample.sessionDate}
                  onChange={(e) => setSample({ ...sample, sessionDate: e.target.value })}
                  className="w-full px-3 py-1.5 bg-paper-100/60 border border-paper-300 rounded-md text-roast-950 focus:outline-none focus:border-roast-800"
                />
              </div>
            </div>
          </div>

          {/* CORE 10 SCA ATTRIBUTES & RADAR SPIDER CHART GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: SCORING ATTRIBUTES (8 COLS) */}
            <div className="lg:col-span-8 space-y-6">
              {/* SECTION A: SCALE 6.00 - 10.00 ATTRIBUTES */}
              <div className="bg-paper-50 border border-paper-300 rounded-2xl p-6 space-y-5">
                <div className="border-b border-paper-200 pb-2 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-cherry-800 font-bold block">
                      Bagian A: Skala Kualitas 6.00 - 10.00
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
                      <div className="font-mono text-base font-bold text-cherry-800 bg-paper-100 px-3 py-1 border border-paper-300 rounded-md">
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
                      placeholder="Catatan aroma: e.g. Floral melati, dried fig, sweet brown sugar..."
                      value={sample.fragranceNotes}
                      onChange={(e) => setSample({ ...sample, fragranceNotes: e.target.value })}
                      className="w-full px-3 py-1.5 bg-paper-100/50 border border-paper-300 rounded-md text-xs font-sans text-roast-900 placeholder-roast-400 focus:outline-none"
                    />
                  </div>

                  {/* 2. FLAVOR */}
                  <div className="space-y-3 pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-mono text-xs font-bold text-roast-950 uppercase">
                          2. Flavor (Cita Rasa Dominan)
                        </span>
                        <p className="text-[11px] text-roast-500 font-sans">
                          Kombinasi kesan rasa gustatori di lidah dan aroma retro-nasal saat kopi diseruput.
                        </p>
                      </div>
                      <div className="font-mono text-base font-bold text-cherry-800 bg-paper-100 px-3 py-1 border border-paper-300 rounded-md">
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
                      className="w-full px-3 py-1.5 bg-paper-100/50 border border-paper-300 rounded-md text-xs font-sans text-roast-900 placeholder-roast-400 focus:outline-none"
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
                      <div className="font-mono text-base font-bold text-cherry-800 bg-paper-100 px-3 py-1 border border-paper-300 rounded-md">
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
                      className="w-full px-3 py-1.5 bg-paper-100/50 border border-paper-300 rounded-md text-xs font-sans text-roast-900 placeholder-roast-400 focus:outline-none"
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
                      <div className="font-mono text-base font-bold text-cherry-800 bg-paper-100 px-3 py-1 border border-paper-300 rounded-md">
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
                          className="px-2.5 py-1 bg-paper-100 border border-paper-300 rounded-md text-roast-900 text-xs focus:outline-none"
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
                      <div className="font-mono text-base font-bold text-cherry-800 bg-paper-100 px-3 py-1 border border-paper-300 rounded-md">
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
                          className="px-2.5 py-1 bg-paper-100 border border-paper-300 rounded-md text-roast-900 text-xs focus:outline-none"
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
                      <div className="font-mono text-base font-bold text-cherry-800 bg-paper-100 px-3 py-1 border border-paper-300 rounded-md">
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
                          10. Overall (Penilaian Holistik Evaluator)
                        </span>
                        <p className="text-[11px] text-roast-500 font-sans">
                          Refleksi kepuasan pribadi evaluator terhadap keunikan asal-usul varietas dan integritas sangraian kopi.
                        </p>
                      </div>
                      <div className="font-mono text-base font-bold text-cherry-800 bg-paper-100 px-3 py-1 border border-paper-300 rounded-md">
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
              <div className="bg-paper-50 border border-paper-300 rounded-2xl p-6 space-y-5">
                <div className="border-b border-paper-200 pb-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-cherry-800 font-bold block">
                    Bagian B: Standar 5 Cangkir Uji (2 Poin per Cangkir Bersih)
                  </span>
                  <h3 className="font-serif text-lg font-bold text-roast-950">
                    Uji Konsistensi & Kemurnian Cangkir
                  </h3>
                </div>

                <div className="space-y-5">
                  {/* 7. UNIFORMITY */}
                  <div className="p-4 bg-paper-100/50 border border-paper-300 rounded-xl space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-mono text-xs font-bold text-roast-950 uppercase block">
                          7. Uniformity (Keseragaman 5 Cangkir)
                        </span>
                        <p className="text-[11px] text-roast-500 font-sans">
                          Kelima mangkuk cupping harus memiliki konsistensi rasa yang identik tanpa ada satu cangkir pun yang anomali.
                        </p>
                      </div>
                      <div className="font-mono text-sm font-bold text-roast-950 bg-paper-200 px-3 py-1 border border-paper-300 rounded-md">
                        {uniformityScore} / 10 Pts
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      {sample.uniformityCups.map((active, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => toggleClassicCup("uniformityCups", i)}
                          className={`flex-1 py-2 font-mono text-xs font-bold rounded-lg border transition-colors ${
                            active
                              ? "bg-roast-950 text-paper-50 border-roast-950 shadow-xs"
                              : "bg-rose-50 text-rose-800 border-rose-300 line-through"
                          }`}
                        >
                          Cup #{i + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 8. CLEAN CUP */}
                  <div className="p-4 bg-paper-100/50 border border-paper-300 rounded-xl space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-mono text-xs font-bold text-roast-950 uppercase block">
                          8. Clean Cup (Kebersihan Cangkir)
                        </span>
                        <p className="text-[11px] text-roast-500 font-sans">
                          Bebas dari impresi negatif non-kopi seperti rasa tanah, apek, kimia, fenolat, ataupun sisa karung goni.
                        </p>
                      </div>
                      <div className="font-mono text-sm font-bold text-roast-950 bg-paper-200 px-3 py-1 border border-paper-300 rounded-md">
                        {cleanCupScore} / 10 Pts
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      {sample.cleanCupCups.map((active, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => toggleClassicCup("cleanCupCups", i)}
                          className={`flex-1 py-2 font-mono text-xs font-bold rounded-lg border transition-colors ${
                            active
                              ? "bg-roast-950 text-paper-50 border-roast-950 shadow-xs"
                              : "bg-rose-50 text-rose-800 border-rose-300 line-through"
                          }`}
                        >
                          Cup #{i + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 9. SWEETNESS */}
                  <div className="p-4 bg-paper-100/50 border border-paper-300 rounded-xl space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-mono text-xs font-bold text-roast-950 uppercase block">
                          9. Sweetness (Kemurnian Rasa Manis)
                        </span>
                        <p className="text-[11px] text-roast-500 font-sans">
                          Keberadaan karbohidrat sukrosa alami buah ceri matang yang terasa manis penuh tanpa rasa hambar atau astringent mentah.
                        </p>
                      </div>
                      <div className="font-mono text-sm font-bold text-roast-950 bg-paper-200 px-3 py-1 border border-paper-300 rounded-md">
                        {sweetnessScore} / 10 Pts
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      {sample.sweetnessCups.map((active, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => toggleClassicCup("sweetnessCups", i)}
                          className={`flex-1 py-2 font-mono text-xs font-bold rounded-lg border transition-colors ${
                            active
                              ? "bg-roast-950 text-paper-50 border-roast-950 shadow-xs"
                              : "bg-rose-50 text-rose-800 border-rose-300 line-through"
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
              <div className="bg-paper-50 border border-paper-300 rounded-2xl p-6 space-y-4">
                <div className="border-b border-paper-200 pb-2 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-rose-700 font-bold block">
                      Bagian C: Pengurangan Cacat Rasa (Defects Deduction)
                    </span>
                    <h3 className="font-serif text-lg font-bold text-roast-950">
                      Evaluasi Cacat Rasa (Taints & Faults)
                    </h3>
                  </div>
                  <div className="font-mono text-xs font-bold text-rose-800 bg-rose-50 px-3 py-1 border border-rose-300 rounded-md">
                    Penalti: -{defectDeduction} Pts
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-paper-100/50 border border-paper-300 rounded-xl space-y-2">
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
                        className="px-3 py-1 bg-paper-100 border border-paper-300 rounded-md text-roast-900 font-mono text-xs focus:outline-none font-bold"
                      >
                        {[0, 1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num} Cup (-{num * 2} Pts)
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="p-4 bg-paper-100/50 border border-paper-300 rounded-xl space-y-2">
                    <span className="font-mono text-xs font-bold text-roast-950 block">
                      Faults (Cacat Menjijikkan / Intens)
                    </span>
                    <p className="text-[11px] text-roast-500 font-sans">
                      Nilai penalti: <strong className="text-roast-900">4 poin</strong> per cangkir yang terdampak.
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="font-mono text-xs text-roast-600">Jumlah Cup:</span>
                      <select
                        value={sample.faultCups}
                        onChange={(e) => setSample({ ...sample, faultCups: parseInt(e.target.value) })}
                        className="px-3 py-1 bg-paper-100 border border-paper-300 rounded-md text-roast-900 font-mono text-xs focus:outline-none font-bold"
                      >
                        {[0, 1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num} Cup (-{num * 4} Pts)
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {(sample.taintCups > 0 || sample.faultCups > 0) && (
                  <div className="pt-2">
                    <label className="text-[10px] uppercase font-mono text-rose-600 block mb-1 font-bold">
                      Deskripsi Cacat Fisik / Sensoris Teridentifikasi:
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Terasa bau fenol obat pada cup #3, atau apek kapang lembap..."
                      value={sample.defectDescription}
                      onChange={(e) => setSample({ ...sample, defectDescription: e.target.value })}
                      className="w-full px-3 py-1.5 bg-rose-50 border border-rose-300 rounded-md text-xs font-sans text-rose-950 focus:outline-none"
                    />
                  </div>
                )}
              </div>

              {/* GENERAL NOTES */}
              <div className="bg-paper-50 border border-paper-300 rounded-2xl p-6 space-y-2">
                <span className="font-mono text-xs uppercase text-roast-600 font-bold block">
                  Catatan Sensoris & Rekomendasi Roaster / Barista:
                </span>
                <textarea
                  rows={3}
                  value={sample.generalNotes}
                  onChange={(e) => setSample({ ...sample, generalNotes: e.target.value })}
                  placeholder="Tuliskan impresi holistik, potensi penggunaan di espresso atau manual brew, serta saran kurva roasting..."
                  className="w-full p-3 bg-paper-100/60 border border-paper-300 rounded-xl text-xs font-sans text-roast-900 leading-relaxed focus:outline-none"
                />
              </div>
            </div>

            {/* RIGHT COLUMN: RADAR SPIDER CHART (PENTAGRAM) & SCORE SUMMARY (4 COLS) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* TOTAL SCORE BOARD */}
              <div className="bg-paper-50 border-2 border-roast-950 rounded-2xl p-6 space-y-4 shadow-sm">
                <div className="text-center space-y-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-roast-600 block font-semibold">
                    Skor Akhir Uji Cita Rasa
                  </span>
                  <div className="font-serif text-5xl sm:text-6xl font-bold text-roast-950 tracking-tight">
                    {finalTotalScore.toFixed(2)}
                  </div>
                  <span className="font-mono text-xs text-roast-500 block">
                    dari skala 100.00 Poin SCA
                  </span>
                </div>

                {/* Classification Tier Badge */}
                <div className={`p-3.5 border rounded-xl text-center space-y-1 ${classification.badgeColor}`}>
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

              {/* SVG RADAR SPIDER CHART (PENTAGRAM / 10 SUMBU) */}
              <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 space-y-3 shadow-xs">
                <div className="flex items-center justify-between border-b border-paper-200 pb-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold">
                    Sensory Radar Spider Chart (Pentagram)
                  </span>
                  <span className="font-mono text-[10px] text-cherry-800 font-semibold">10 Sumbu</span>
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
                        strokeDasharray={idx < 3 ? "2 2" : "none"}
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
                            className="font-mono text-[8px] fill-roast-900 font-semibold"
                          >
                            {pt.label.split(" ")[0]}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>

                <p className="text-[11px] font-sans text-roast-600 text-center italic">
                  Grafik pentagram radar spider-web memperlihatkan keseimbangan proporsi rasa sampel secara visual seketika.
                </p>
              </div>

              {/* QUICK ROAST & BREWING RECOMMENDATION */}
              <div className="bg-paper-100/70 border border-paper-300 rounded-2xl p-4 space-y-2 font-sans text-xs">
                <span className="font-mono text-xs uppercase text-roast-700 font-bold block flex items-center gap-1.5">
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
      )}

      {/* =========================================================================
          MODE 2: STANDAR SCA CVA (COFFEE VALUE ASSESSMENT)
          ========================================================================= */}
      {activeStandard === "cva" && (
        <div className="space-y-8 print:space-y-4">
          {/* CVA Header Banner */}
          <div className="bg-paper-100/80 border border-paper-300 rounded-2xl p-5 sm:p-7 shadow-xs relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-cherry-800 font-bold">
                    SCA Coffee Value Assessment (CVA) Protocol
                  </span>
                  <span className="text-roast-400 font-mono text-xs">•</span>
                  <span className="font-mono text-xs text-roast-600">
                    Standar Deskriptif & Afektif Terbaru
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-roast-950 tracking-tight">
                  Formulir Evaluasi Sensorik CVA
                </h2>
                <p className="text-xs sm:text-sm text-roast-600 max-w-2xl leading-relaxed">
                  Standar evaluasi rasa kopi global resmi terbaru dari Specialty Coffee Association. Memisahkan evaluasi objektif (<strong>Descriptive</strong> 0-15) dari preferensi mutu (<strong>Affective</strong>) demi akurasi dan objektivitas tertinggi.
                </p>
              </div>

              <div className="flex items-center gap-2 self-start lg:self-auto">
                <button
                  onClick={handleCopyCvaReport}
                  className="px-3.5 py-2 rounded-xl bg-roast-950 text-paper-50 hover:bg-roast-900 active:scale-[0.98] font-mono text-xs font-semibold flex items-center gap-2 shadow-xs transition-all"
                >
                  {copiedCva ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-crema-300" />}
                  <span>{copiedCva ? "Tersalin ke Clipboard!" : "Salin Laporan CVA"}</span>
                </button>
              </div>
            </div>

            {/* Preset Selector */}
            <div className="mt-6 pt-5 border-t border-paper-200">
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="font-mono text-xs uppercase tracking-wider text-roast-600 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cherry-700" /> Muat Sampel Kalibrasi CVA:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {CVA_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handleLoadCvaPreset(preset)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all active:scale-[0.98] flex items-center gap-1.5 ${
                      activeCvaPresetId === preset.id
                        ? "bg-roast-950 text-paper-50 border-roast-950 shadow-xs"
                        : "bg-paper-50 hover:bg-paper-200 border-paper-300 text-roast-800"
                    }`}
                  >
                    <Coffee className="w-3 h-3" />
                    <span>{preset.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Grid: Input Panels (Left) + Final Score Card (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT COLUMN: Metadata + Descriptive + Affective + Cups (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Section 1: Sample Metadata */}
              <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 shadow-xs space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-cherry-700" /> 1. Identitas & Asal-Usul Sampel (Extrinsic)
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-roast-500 uppercase">Nama Sampel / Lot</label>
                    <input
                      type="text"
                      value={cvaSampleName}
                      onChange={(e) => setCvaSampleName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-paper-100/50 border border-paper-300 text-xs text-roast-950 font-medium focus:border-roast-800 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-roast-500 uppercase">Origin & Elevasi</label>
                    <input
                      type="text"
                      value={cvaOrigin}
                      onChange={(e) => setCvaOrigin(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-paper-100/50 border border-paper-300 text-xs text-roast-950 focus:border-roast-800 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-roast-500 uppercase">Metode Pasca Panen</label>
                    <input
                      type="text"
                      value={cvaProcess}
                      onChange={(e) => setCvaProcess(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-paper-100/50 border border-paper-300 text-xs text-roast-950 focus:border-roast-800 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-roast-500 uppercase">Nama Evaluator / Q-Grader</label>
                    <input
                      type="text"
                      value={cvaTasterName}
                      onChange={(e) => setCvaTasterName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-paper-100/50 border border-paper-300 text-xs text-roast-950 focus:border-roast-800 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Descriptive Intensity (0-15) */}
              <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 shadow-xs space-y-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold flex items-center gap-1.5">
                    <Sliders className="w-4 h-4 text-cherry-700" /> 2. Intensitas Sensoris Objektif (Skala 0 - 15)
                  </span>
                  <span className="text-[11px] font-mono text-roast-500">Murni Deskriptif (Non-Hedonik)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Fragrance Dry */}
                  <div className="p-3 bg-paper-100/40 rounded-xl border border-paper-200 space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium text-roast-900">Dry Grounds Aroma</span>
                      <span className="font-mono font-bold text-cherry-800">{intensity.dryAroma} / 15</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="15"
                      step="0.5"
                      value={intensity.dryAroma}
                      onChange={(e) => setIntensity({ ...intensity, dryAroma: parseFloat(e.target.value) })}
                      className="w-full accent-cherry-800 cursor-pointer"
                    />
                  </div>

                  {/* Aroma Break */}
                  <div className="p-3 bg-paper-100/40 rounded-xl border border-paper-200 space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium text-roast-900">Break Crust Aroma</span>
                      <span className="font-mono font-bold text-cherry-800">{intensity.breakAroma} / 15</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="15"
                      step="0.5"
                      value={intensity.breakAroma}
                      onChange={(e) => setIntensity({ ...intensity, breakAroma: parseFloat(e.target.value) })}
                      className="w-full accent-cherry-800 cursor-pointer"
                    />
                  </div>

                  {/* Acidity Intensity */}
                  <div className="p-3 bg-paper-100/40 rounded-xl border border-paper-200 space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium text-roast-900">Acidity Intensity</span>
                      <span className="font-mono font-bold text-cherry-800">{intensity.acidity} / 15</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="15"
                      step="0.5"
                      value={intensity.acidity}
                      onChange={(e) => setIntensity({ ...intensity, acidity: parseFloat(e.target.value) })}
                      className="w-full accent-cherry-800 cursor-pointer"
                    />
                  </div>

                  {/* Sweetness Intensity */}
                  <div className="p-3 bg-paper-100/40 rounded-xl border border-paper-200 space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium text-roast-900">Perceived Sweetness</span>
                      <span className="font-mono font-bold text-cherry-800">{intensity.sweetness} / 15</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="15"
                      step="0.5"
                      value={intensity.sweetness}
                      onChange={(e) => setIntensity({ ...intensity, sweetness: parseFloat(e.target.value) })}
                      className="w-full accent-cherry-800 cursor-pointer"
                    />
                  </div>

                  {/* Mouthfeel / Body */}
                  <div className="p-3 bg-paper-100/40 rounded-xl border border-paper-200 space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium text-roast-900">Mouthfeel Weight</span>
                      <span className="font-mono font-bold text-cherry-800">{intensity.mouthfeel} / 15</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="15"
                      step="0.5"
                      value={intensity.mouthfeel}
                      onChange={(e) => setIntensity({ ...intensity, mouthfeel: parseFloat(e.target.value) })}
                      className="w-full accent-cherry-800 cursor-pointer"
                    />
                  </div>

                  {/* Aftertaste Intensity */}
                  <div className="p-3 bg-paper-100/40 rounded-xl border border-paper-200 space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium text-roast-900">Aftertaste Persistence</span>
                      <span className="font-mono font-bold text-cherry-800">{intensity.aftertaste} / 15</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="15"
                      step="0.5"
                      value={intensity.aftertaste}
                      onChange={(e) => setIntensity({ ...intensity, aftertaste: parseFloat(e.target.value) })}
                      className="w-full accent-cherry-800 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Qualitative Character */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-roast-600 uppercase font-semibold">
                      Karakter Dominan Asam (Acidity Type):
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {(["Citric", "Malic", "Phosphoric", "Acetic"] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setAcidityType(type)}
                          className={`px-2.5 py-1 text-xs rounded-lg border font-medium transition-colors ${
                            acidityType === type
                              ? "bg-roast-950 text-paper-50 border-roast-950"
                              : "bg-paper-100/60 hover:bg-paper-200 border-paper-300 text-roast-800"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-roast-600 uppercase font-semibold">
                      Tekstur Mulut (Mouthfeel Texture):
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {(["Silky", "Creamy", "Viscous", "Juicy", "Astringent"] as const).map((tex) => (
                        <button
                          key={tex}
                          type="button"
                          onClick={() => setBodyTexture(tex)}
                          className={`px-2.5 py-1 text-xs rounded-lg border font-medium transition-colors ${
                            bodyTexture === tex
                              ? "bg-roast-950 text-paper-50 border-roast-950"
                              : "bg-paper-100/60 hover:bg-paper-200 border-paper-300 text-roast-800"
                          }`}
                        >
                          {tex}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Flavor Descriptors Tags */}
                <div className="space-y-2 pt-2 border-t border-paper-200">
                  <span className="text-[11px] font-mono text-roast-600 uppercase font-semibold block">
                    Kategori Deskriptor Rasa Terdeteksi (CVA Sensory Lexicon):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {DESCRIPTOR_TAGS.map((tag) => {
                      const isSelected = selectedDescriptors.includes(tag);
                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleCvaDescriptor(tag)}
                          className={`px-2.5 py-1 text-xs rounded-lg border transition-all ${
                            isSelected
                              ? "bg-roast-950 text-paper-50 border-roast-950 shadow-xs font-medium"
                              : "bg-paper-100/60 hover:bg-paper-200 border-paper-300 text-roast-800"
                          }`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Section 3: Affective Hedonic Scoring (6.00 - 10.00) */}
              <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 shadow-xs space-y-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-cherry-700" /> 3. Penilaian Kualitas Afektif (Skor 6.00 - 10.00)
                  </span>
                  <span className="text-[11px] font-mono text-roast-500">Standar Skala Kualitas SCA</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Fragrance Hedonic */}
                  <div className="p-3 bg-paper-100/40 rounded-xl border border-paper-200 space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Fragrance / Aroma</span>
                      <span className="font-mono font-bold text-cherry-800">{hedonic.fragranceAroma.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="6.0"
                      max="10.0"
                      step="0.25"
                      value={hedonic.fragranceAroma}
                      onChange={(e) => setHedonic({ ...hedonic, fragranceAroma: parseFloat(e.target.value) })}
                      className="w-full accent-cherry-800 cursor-pointer"
                    />
                  </div>

                  {/* Flavor Hedonic */}
                  <div className="p-3 bg-paper-100/40 rounded-xl border border-paper-200 space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Flavor</span>
                      <span className="font-mono font-bold text-cherry-800">{hedonic.flavor.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="6.0"
                      max="10.0"
                      step="0.25"
                      value={hedonic.flavor}
                      onChange={(e) => setHedonic({ ...hedonic, flavor: parseFloat(e.target.value) })}
                      className="w-full accent-cherry-800 cursor-pointer"
                    />
                  </div>

                  {/* Aftertaste Hedonic */}
                  <div className="p-3 bg-paper-100/40 rounded-xl border border-paper-200 space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Aftertaste</span>
                      <span className="font-mono font-bold text-cherry-800">{hedonic.aftertaste.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="6.0"
                      max="10.0"
                      step="0.25"
                      value={hedonic.aftertaste}
                      onChange={(e) => setHedonic({ ...hedonic, aftertaste: parseFloat(e.target.value) })}
                      className="w-full accent-cherry-800 cursor-pointer"
                    />
                  </div>

                  {/* Acidity Hedonic */}
                  <div className="p-3 bg-paper-100/40 rounded-xl border border-paper-200 space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Acidity Quality</span>
                      <span className="font-mono font-bold text-cherry-800">{hedonic.acidity.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="6.0"
                      max="10.0"
                      step="0.25"
                      value={hedonic.acidity}
                      onChange={(e) => setHedonic({ ...hedonic, acidity: parseFloat(e.target.value) })}
                      className="w-full accent-cherry-800 cursor-pointer"
                    />
                  </div>

                  {/* Sweetness Hedonic */}
                  <div className="p-3 bg-paper-100/40 rounded-xl border border-paper-200 space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Sweetness Quality</span>
                      <span className="font-mono font-bold text-cherry-800">{hedonic.sweetness.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="6.0"
                      max="10.0"
                      step="0.25"
                      value={hedonic.sweetness}
                      onChange={(e) => setHedonic({ ...hedonic, sweetness: parseFloat(e.target.value) })}
                      className="w-full accent-cherry-800 cursor-pointer"
                    />
                  </div>

                  {/* Mouthfeel Hedonic */}
                  <div className="p-3 bg-paper-100/40 rounded-xl border border-paper-200 space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Mouthfeel Quality</span>
                      <span className="font-mono font-bold text-cherry-800">{hedonic.mouthfeel.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="6.0"
                      max="10.0"
                      step="0.25"
                      value={hedonic.mouthfeel}
                      onChange={(e) => setHedonic({ ...hedonic, mouthfeel: parseFloat(e.target.value) })}
                      className="w-full accent-cherry-800 cursor-pointer"
                    />
                  </div>

                  {/* Balance Hedonic */}
                  <div className="p-3 bg-paper-100/40 rounded-xl border border-paper-200 space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Balance</span>
                      <span className="font-mono font-bold text-cherry-800">{hedonic.balance.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="6.0"
                      max="10.0"
                      step="0.25"
                      value={hedonic.balance}
                      onChange={(e) => setHedonic({ ...hedonic, balance: parseFloat(e.target.value) })}
                      className="w-full accent-cherry-800 cursor-pointer"
                    />
                  </div>

                  {/* Overall Hedonic */}
                  <div className="p-3 bg-paper-100/40 rounded-xl border border-paper-200 space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span>Overall Impression</span>
                      <span className="font-mono font-bold text-cherry-800">{hedonic.overall.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="6.0"
                      max="10.0"
                      step="0.25"
                      value={hedonic.overall}
                      onChange={(e) => setHedonic({ ...hedonic, overall: parseFloat(e.target.value) })}
                      className="w-full accent-cherry-800 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Section 4: 5-Cup Matrix & Defects */}
              <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 shadow-xs space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cherry-700" /> 4. Matriks 5 Cangkir & Pengurangan Cacat (Defects)
                </span>

                <div className="space-y-3 font-mono text-xs">
                  {/* Uniformity */}
                  <div className="flex items-center justify-between p-2.5 bg-paper-100/40 rounded-xl">
                    <span className="text-roast-800">Uniformity (Keseragaman):</span>
                    <div className="flex gap-1.5">
                      {cvaUniformityCups.map((checked, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => toggleCvaCup("uniformity", i)}
                          className={`w-7 h-7 rounded-md font-bold text-xs border transition-all ${
                            checked
                              ? "bg-roast-950 text-paper-50 border-roast-950"
                              : "bg-paper-50 text-rose-700 border-paper-300 line-through"
                          }`}
                        >
                          C{i + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Clean Cup */}
                  <div className="flex items-center justify-between p-2.5 bg-paper-100/40 rounded-xl">
                    <span className="text-roast-800">Clean Cup (Kebersihan):</span>
                    <div className="flex gap-1.5">
                      {cvaCleanCups.map((checked, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => toggleCvaCup("clean", i)}
                          className={`w-7 h-7 rounded-md font-bold text-xs border transition-all ${
                            checked
                              ? "bg-roast-950 text-paper-50 border-roast-950"
                              : "bg-paper-50 text-rose-700 border-paper-300 line-through"
                          }`}
                        >
                          C{i + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sweetness */}
                  <div className="flex items-center justify-between p-2.5 bg-paper-100/40 rounded-xl">
                    <span className="text-roast-800">Sweetness (Manis Alami):</span>
                    <div className="flex gap-1.5">
                      {cvaSweetnessCups.map((checked, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => toggleCvaCup("sweetness", i)}
                          className={`w-7 h-7 rounded-md font-bold text-xs border transition-all ${
                            checked
                              ? "bg-roast-950 text-paper-50 border-roast-950"
                              : "bg-paper-50 text-rose-700 border-paper-300 line-through"
                          }`}
                        >
                          C{i + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Defects Counter */}
                <div className="pt-2 border-t border-paper-200 grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-2.5 bg-rose-50/50 border border-rose-200 rounded-xl flex items-center justify-between">
                    <span className="text-rose-900">Taint (x2 poin):</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setCvaTaintCount(Math.max(0, cvaTaintCount - 1))}
                        className="w-6 h-6 rounded bg-paper-50 border border-paper-300 text-roast-900 font-bold"
                      >
                        -
                      </button>
                      <span className="font-bold text-rose-950">{cvaTaintCount}</span>
                      <button
                        type="button"
                        onClick={() => setCvaTaintCount(Math.min(5, cvaTaintCount + 1))}
                        className="w-6 h-6 rounded bg-paper-50 border border-paper-300 text-roast-900 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="p-2.5 bg-rose-50/50 border border-rose-200 rounded-xl flex items-center justify-between">
                    <span className="text-rose-900">Fault (x4 poin):</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setCvaFaultCount(Math.max(0, cvaFaultCount - 1))}
                        className="w-6 h-6 rounded bg-paper-50 border border-paper-300 text-roast-900 font-bold"
                      >
                        -
                      </button>
                      <span className="font-bold text-rose-950">{cvaFaultCount}</span>
                      <button
                        type="button"
                        onClick={() => setCvaFaultCount(Math.min(5, cvaFaultCount + 1))}
                        className="w-6 h-6 rounded bg-paper-50 border border-paper-300 text-roast-900 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Final Score Ledger (5 cols) */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <div className="bg-paper-50 border-2 border-roast-950 rounded-2xl p-6 space-y-4 shadow-sm">
                <div className="text-center space-y-1">
                  <span className="font-mono text-xs uppercase tracking-widest text-roast-600 block font-semibold">
                    Total Skor Akhir CVA
                  </span>
                  <div className="font-serif text-5xl sm:text-6xl font-bold text-roast-950 tracking-tight">
                    {cvaScoreResults.totalScore.toFixed(2)}
                  </div>
                  <span className="font-mono text-xs text-roast-500 block">Skala 100 Poin SCA</span>
                </div>

                <div className="p-3.5 bg-paper-100 border border-paper-300 rounded-xl text-center">
                  <span className="font-serif font-bold text-sm text-roast-950 block">
                    {cvaScoreResults.gradeTitle}
                  </span>
                </div>

                <div className="border-t border-paper-200 pt-3 space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-roast-700">
                    <span>Subtotal Afektif (8 Atribut):</span>
                    <span className="font-bold text-roast-950">{cvaScoreResults.hedonicSum}</span>
                  </div>
                  <div className="flex justify-between text-roast-700">
                    <span>Keseragaman (5 Cups):</span>
                    <span className="font-bold text-roast-950">{cvaScoreResults.uniformityScore} / 10</span>
                  </div>
                  <div className="flex justify-between text-roast-700">
                    <span>Clean Cup (5 Cups):</span>
                    <span className="font-bold text-roast-950">{cvaScoreResults.cleanCupScore} / 10</span>
                  </div>
                  <div className="flex justify-between text-roast-700">
                    <span>Sweetness (5 Cups):</span>
                    <span className="font-bold text-roast-950">{cvaScoreResults.sweetnessScore} / 10</span>
                  </div>
                  {cvaScoreResults.defectPenalty > 0 && (
                    <div className="flex justify-between text-rose-700">
                      <span>Penalti Cacat (Defects):</span>
                      <span className="font-bold">-{cvaScoreResults.defectPenalty} Pts</span>
                    </div>
                  )}
                  <div className="flex justify-between border-t border-dashed border-paper-300 pt-2 text-roast-950 font-bold">
                    <span>Skor Bersih:</span>
                    <span className="text-cherry-800 text-sm">{cvaScoreResults.totalScore} / 100</span>
                  </div>
                </div>
              </div>

              {/* Evaluator Notes */}
              <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 space-y-2">
                <span className="font-mono text-xs uppercase text-roast-600 font-bold block">
                  Catatan Deskriptif & Narasi Evaluator:
                </span>
                <textarea
                  rows={4}
                  value={cvaNotes}
                  onChange={(e) => setCvaNotes(e.target.value)}
                  placeholder="Deskripsikan profil rasa kompleks, keasaman unik, impresi manis, dan karakteristik spesimen..."
                  className="w-full p-3 rounded-xl bg-paper-100/50 border border-paper-300 text-xs text-roast-950 leading-relaxed focus:border-roast-800 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
