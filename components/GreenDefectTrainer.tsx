'use client';

import { useState, useMemo } from "react";
import {
  Search,
  Award,
  AlertTriangle,
  RotateCcw,
} from "lucide-react";

export interface GreenDefect {
  id: string;
  name: string;
  localName: string;
  category: 'primary' | 'secondary';
  categoryLabel: string;
  ratioToFullDefect: number; // e.g. 1 bean = 1 full defect, or 5 beans = 1 full defect
  ratioText: string;
  visualCharacteristics: string;
  agronomicCause: string;
  cupQualityImpact: string;
  farmMitigation: string;
  severity: 'Critical' | 'Moderate' | 'Minor';
  colorTone: string;
}

export const GREEN_DEFECTS_CATALOG: GreenDefect[] = [
  // PRIMARY DEFECTS (0 ALLOWED IN SPECIALTY GRADE)
  {
    id: 'full-black',
    name: 'Full Black Bean',
    localName: 'Biji Hitam Penuh',
    category: 'primary',
    categoryLabel: 'Kategori 1 (Cacat Primer)',
    ratioToFullDefect: 1,
    ratioText: '1 Biji = 1 Cacat Penuh',
    visualCharacteristics: 'Biji berwarna hitam legam atau cokelat kehitaman pekat, keriput, atau berukuran kerdil.',
    agronomicCause:
      'Ceri gugur terlalu matang dan membusuk di tanah, kekurangan air parah saat pembentukan buah, atau serangan embun beku (frost).',
    cupQualityImpact: 'Rasa seperti arang gosong, fenolik obat, apek busuk, abu menyengat, dan fishy (amis).',
    farmMitigation:
      'Hindari memungut ceri yang sudah jatuh ke tanah (kopi lelesan). Lakukan pemetikan selektif hanya ceri merah matang pohon.',
    severity: 'Critical',
    colorTone: '#18181B',
  },
  {
    id: 'full-sour',
    name: 'Full Sour Bean',
    localName: 'Biji Cokelat Busuk (Full Sour)',
    category: 'primary',
    categoryLabel: 'Kategori 1 (Cacat Primer)',
    ratioToFullDefect: 1,
    ratioText: '1 Biji = 1 Cacat Penuh',
    visualCharacteristics:
      'Biji berwarna cokelat kekuningan hingga cokelat kemerahan gelap. Ketika dikerik atau dipotong beraroma cuka asam menyengat.',
    agronomicCause:
      'Keterlambatan pengupasan (depulping) ceri setelah petik, air bak fermentasi kotor tercemar, atau penjemuran terlalu lambat di cuaca mendung.',
    cupQualityImpact: 'Rasa cuka asam tajam (asam asetat berlebih), tengik, sensasi fermentasi busuk (sour/rotten).',
    farmMitigation:
      'Kupas ceri maksimal 8–12 jam setelah petik. Ganti air fermentasi secara higienis dan gunakan pengeringan meja para-para (raised beds).',
    severity: 'Critical',
    colorTone: '#78350F',
  },
  {
    id: 'dried-cherry',
    name: 'Dried Cherry / Pod',
    localName: 'Gelondong Ceri Kering',
    category: 'primary',
    categoryLabel: 'Kategori 1 (Cacat Primer)',
    ratioToFullDefect: 1,
    ratioText: '1 Buah = 1 Cacat Penuh',
    visualCharacteristics: 'Ceri kopi utuh yang mengering keras bersama kulit luar dan daging buahnya.',
    agronomicCause: 'Saringan mesin huller (pengupas kulit tanduk) kurang rapat atau penyortiran akhir lolos.',
    cupQualityImpact: 'Rasa pulp berlendir, rasa fermentasi tanah kotor, dan risiko terbakar di dalam drum roaster.',
    farmMitigation: 'Kalibrasi saringan mesin de-huller dan gunakan gravity table / destoner sebelum karung ekspor.',
    severity: 'Critical',
    colorTone: '#451A03',
  },
  {
    id: 'fungus-damaged',
    name: 'Fungus Damaged',
    localName: 'Biji Berjamur / Cendawan',
    category: 'primary',
    categoryLabel: 'Kategori 1 (Cacat Primer)',
    ratioToFullDefect: 1,
    ratioText: '1 Biji = 1 Cacat Penuh',
    visualCharacteristics: 'Terdapat serbuk spora putih, abu-abu, atau kuning kehijauan di celah biji atau permukaan kulit ari.',
    agronomicCause:
      'Penyimpanan gabah/beras pada kelembapan tinggi (>13% moisture) atau karung terkena tetesan air hujan saat transportasi.',
    cupQualityImpact:
      'Rasa apek karung goni basah (musty/moldy), earthy kotor, dan berbahaya bagi kesehatan karena potensi toksin okratoksin-A (OTA).',
    farmMitigation:
      'Pastikan kadar air green bean mencapai 10.5%–11.5% sebelum packing dan simpan menggunakan plastik kedap udara (GrainPro/Hermetic).',
    severity: 'Critical',
    colorTone: '#065F46',
  },
  {
    id: 'foreign-matter',
    name: 'Foreign Matter',
    localName: 'Benda Asing (Batu, Logam, Ranting)',
    category: 'primary',
    categoryLabel: 'Kategori 1 (Cacat Primer)',
    ratioToFullDefect: 1,
    ratioText: '1 Benda = 1 Cacat Penuh',
    visualCharacteristics: 'Batu kerikil, pecahan kaca, ranting kering, tali plastik, kuku, atau baut.',
    agronomicCause: 'Penjemuran langsung di atas tanah tanpa alas terpal atau pengemasan di lantai kerja terbuka.',
    cupQualityImpact: 'Merusak burr grinder komersial bernilai puluhan juta rupiah dan mengotori seduhan.',
    farmMitigation: 'Gunakan mesin destoner magnetik dan meja penjemuran terpal/para-para tertutup.',
    severity: 'Critical',
    colorTone: '#3F3F46',
  },
  {
    id: 'severe-insect',
    name: 'Severe Insect Damage',
    localName: 'Lubang Serangga Parah (≥ 3 Lubang)',
    category: 'primary',
    categoryLabel: 'Kategori 1 (Cacat Primer)',
    ratioToFullDefect: 5,
    ratioText: '5 Biji = 1 Cacat Penuh',
    visualCharacteristics: 'Biji berlubang hitam 3 titik atau lebih akibat terowongan larva kumbang penggerek buah.',
    agronomicCause: 'Serangan hama kumbang PBKo (Hypothenemus hampei) saat buah masih hijau hingga matang di kebun.',
    cupQualityImpact: 'Rasa getir kentang mentah busuk (potato defect), pahit kotor, dan mengurangi aroma seduhan.',
    farmMitigation:
      'Sanitasi kebun (petik bubuk), pemasangan perangkap feromon Brocap, dan pemangkasan naungan agar kebun tidak terlalu lembap.',
    severity: 'Critical',
    colorTone: '#831843',
  },

  // SECONDARY DEFECTS (MAX 5 FULL DEFECTS EQUIVALENT FOR SPECIALTY GRADE)
  {
    id: 'partial-black',
    name: 'Partial Black Bean',
    localName: 'Biji Hitam Sebagian',
    category: 'secondary',
    categoryLabel: 'Kategori 2 (Cacat Sekunder)',
    ratioToFullDefect: 3,
    ratioText: '3 Biji = 1 Cacat Penuh',
    visualCharacteristics: 'Kurang dari 50% permukaan biji berwarna hitam kecokelatan.',
    agronomicCause: 'Pembusukan terlokalisir pada sisi biji yang bersentuhan dengan tanah basah saat penjemuran.',
    cupQualityImpact: 'Sensasi pahit obat, berkurangnya kejernihan aftertaste, bodi agak kotor.',
    farmMitigation: 'Rutin membalik biji kopi di lantai jemur setiap 1–2 jam agar pengeringan seragam.',
    severity: 'Moderate',
    colorTone: '#27272A',
  },
  {
    id: 'partial-sour',
    name: 'Partial Sour Bean',
    localName: 'Biji Cokelat Sebagian (Partial Sour)',
    category: 'secondary',
    categoryLabel: 'Kategori 2 (Cacat Sekunder)',
    ratioToFullDefect: 3,
    ratioText: '3 Biji = 1 Cacat Penuh',
    visualCharacteristics: 'Sebagian kecil biji bernoda cokelat kemerahan atau cokelat muda.',
    agronomicCause: 'Pulping ceri terlambat 12–24 jam atau sirkulasi udara lantai jemur terhambat.',
    cupQualityImpact: 'Aftertaste agak asam fermentasi (sourish-winey), mengurangi kemanisan karamel alami.',
    farmMitigation: 'Penjadwalan giling basah yang disiplin setiap sore hari setelah petik.',
    severity: 'Moderate',
    colorTone: '#854D0E',
  },
  {
    id: 'floater-chalky',
    name: 'Floater / Chalky Bean',
    localName: 'Biji Mengambang / Keropos Kapur',
    category: 'secondary',
    categoryLabel: 'Kategori 2 (Cacat Sekunder)',
    ratioToFullDefect: 5,
    ratioText: '5 Biji = 1 Cacat Penuh',
    visualCharacteristics: 'Biji berwarna keputihan pudar seperti kapur, sangat ringan saat ditimbang di telapak tangan.',
    agronomicCause: 'Pohon kekurangan nutrisi tanah (defisiensi nitrogen/kalium) atau terserang karat daun Hemileia vastatrix.',
    cupQualityImpact: 'Rasa hampa berjerami (straw/woody), bodi sangat encer, dan rasa seperti kertas kardus.',
    farmMitigation:
      'Lakukan rambang air (flotation tank) sebelum depulping untuk memisahkan ceri mengambang berkadar rendah.',
    severity: 'Moderate',
    colorTone: '#A1A1AA',
  },
  {
    id: 'immature-unripe',
    name: 'Immature / Unripe Bean',
    localName: 'Biji Muda / Keriput (Quaker Maker)',
    category: 'secondary',
    categoryLabel: 'Kategori 2 (Cacat Sekunder)',
    ratioToFullDefect: 5,
    ratioText: '5 Biji = 1 Cacat Penuh',
    visualCharacteristics:
      'Biji berukuran kecil, permukaan keriput, kulit perak (silverskin) melekat sangat erat dan sulit terlepas.',
    agronomicCause: 'Pemetikan ceri yang masih berwarna hijau atau hijau kekuningan (pemetikan borongan acak).',
    cupQualityImpact:
      'Penyebab utama Quaker di sangrai! Rasa sepat astringent rumput pahit, aroma kacang tanah mentah, hambar.',
    farmMitigation: 'Edukasi pemetik kopi di kebun dengan sistem insentif premium khusus ceri petik merah 100%.',
    severity: 'Moderate',
    colorTone: '#65A30D',
  },
  {
    id: 'broken-chipped',
    name: 'Broken / Chipped / Cut',
    localName: 'Biji Pecah / Tergores Pisau Pulper',
    category: 'secondary',
    categoryLabel: 'Kategori 2 (Cacat Sekunder)',
    ratioToFullDefect: 5,
    ratioText: '5 Biji = 1 Cacat Penuh',
    visualCharacteristics: 'Biji terbelah dua, cuil di ujung lembaga, atau memiliki bekas luka goresan pisau mesin pulper.',
    agronomicCause: 'Pisau rotor mesin pulper dipasang terlalu rapat atau celah silinder huller tidak teratur.',
    cupQualityImpact: 'Bagian tepi luka mudah gosong saat disangrai, menghasilkan sensasi rasa pahit arang terbakar.',
    farmMitigation: 'Kalibrasi jarak pisau pulper sesuai ukuran rata-rata ceri panen dan ganti bantalan rotor yang aus.',
    severity: 'Moderate',
    colorTone: '#B45309',
  },
  {
    id: 'shell-peaberry',
    name: 'Shell / Malformation',
    localName: 'Kulit Kerang / Biji Kuping',
    category: 'secondary',
    categoryLabel: 'Kategori 2 (Cacat Sekunder)',
    ratioToFullDefect: 5,
    ratioText: '5 Biji = 1 Cacat Penuh',
    visualCharacteristics: 'Biji berbentuk cekung seperti mangkuk kerang tipis dengan inti biji yang terpisah.',
    agronomicCause: 'Anomali genetik fertilisasi bunga atau mutasi sel endosperma alami.',
    cupQualityImpact: 'Kepadatan tidak seragam, bagian kerang mudah terbakar di roaster mendahului biji normal.',
    farmMitigation: 'Gunakan penyortir ukuran biji (screen grading) dan destoner angin.',
    severity: 'Minor',
    colorTone: '#D97706',
  },
  {
    id: 'slight-insect',
    name: 'Slight Insect Damage',
    localName: 'Lubang Serangga Ringan (1–2 Lubang)',
    category: 'secondary',
    categoryLabel: 'Kategori 2 (Cacat Sekunder)',
    ratioToFullDefect: 10,
    ratioText: '10 Biji = 1 Cacat Penuh',
    visualCharacteristics: 'Terdapat 1 atau 2 lubang jarum kecil bekas gigitan serangga tanpa pembusukan gelap luas.',
    agronomicCause: 'Gigitan awal kumbang penggerek buah kopi sebelum sempat berkembang biak.',
    cupQualityImpact: 'Penurunan tipis kemanisan alami dan sedikit aftertaste kotor jika jumlahnya banyak.',
    farmMitigation: 'Penyemprotan jamur Beauveria bassiana ramah lingkungan dan pembersihan sisa buah di pohon.',
    severity: 'Minor',
    colorTone: '#9A3412',
  },
];

export function GreenDefectTrainer() {
  const [selectedDefect, setSelectedDefect] = useState<GreenDefect>(GREEN_DEFECTS_CATALOG[0]);
  const [activeTab, setActiveTab] = useState<'atlas' | 'calculator' | 'quiz'>('atlas');
  const [filterCategory, setFilterCategory] = useState<'all' | 'primary' | 'secondary'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Interactive 350g Sample Calculator State
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    'full-black': 0,
    'full-sour': 0,
    'dried-cherry': 0,
    'fungus-damaged': 0,
    'foreign-matter': 0,
    'severe-insect': 0,
    'partial-black': 3,
    'partial-sour': 3,
    'floater-chalky': 0,
    'immature-unripe': 5,
    'broken-chipped': 10,
    'shell-peaberry': 5,
    'slight-insect': 10,
  });

  // Filtered Catalog
  const filteredCatalog = useMemo(() => {
    return GREEN_DEFECTS_CATALOG.filter((d) => {
      const matchCat = filterCategory === 'all' || d.category === filterCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchCat;
      return (
        matchCat &&
        (d.name.toLowerCase().includes(q) ||
          d.localName.toLowerCase().includes(q) ||
          d.visualCharacteristics.toLowerCase().includes(q) ||
          d.cupQualityImpact.toLowerCase().includes(q))
      );
    });
  }, [filterCategory, searchQuery]);

  // Calculator Result
  const gradingResult = useMemo(() => {
    let totalPrimaryBeans = 0;
    let totalPrimaryFullDefects = 0;
    let totalSecondaryBeans = 0;
    let totalSecondaryFullDefects = 0;

    GREEN_DEFECTS_CATALOG.forEach((d) => {
      const beanCount = counts[d.id] || 0;
      const fullDef = beanCount / d.ratioToFullDefect;
      if (d.category === 'primary') {
        totalPrimaryBeans += beanCount;
        totalPrimaryFullDefects += fullDef;
      } else {
        totalSecondaryBeans += beanCount;
        totalSecondaryFullDefects += fullDef;
      }
    });

    const totalFullDefects = Number((totalPrimaryFullDefects + totalSecondaryFullDefects).toFixed(1));

    let grade = 'Below Grade / Commercial (Off-Grade)';
    let gradeBadgeColor = 'bg-rose-100 text-rose-800 border-rose-300';
    let isSpecialty = false;

    if (totalPrimaryBeans === 0 && totalFullDefects <= 5.0) {
      grade = 'Grade 1: Specialty Grade Coffee (Standar SCA & SNI)';
      gradeBadgeColor = 'bg-emerald-100 text-emerald-900 border-emerald-300';
      isSpecialty = true;
    } else if (totalPrimaryFullDefects <= 1.0 && totalFullDefects <= 8.0) {
      grade = 'Grade 2: Premium Grade Coffee';
      gradeBadgeColor = 'bg-amber-100 text-amber-900 border-amber-300';
    } else if (totalFullDefects <= 23.0) {
      grade = 'Grade 3: Exchange Grade Coffee';
      gradeBadgeColor = 'bg-blue-100 text-blue-900 border-blue-300';
    }

    return {
      totalPrimaryBeans,
      totalPrimaryFullDefects: Number(totalPrimaryFullDefects.toFixed(1)),
      totalSecondaryBeans,
      totalSecondaryFullDefects: Number(totalSecondaryFullDefects.toFixed(1)),
      totalFullDefects,
      grade,
      gradeBadgeColor,
      isSpecialty,
    };
  }, [counts]);

  // Reset Counts
  const handleResetCounts = () => {
    const empty: { [key: string]: number } = {};
    GREEN_DEFECTS_CATALOG.forEach((d) => {
      empty[d.id] = 0;
    });
    setCounts(empty);
  };

  return (
    <div className="space-y-8 font-sans animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-paper-100/80 border border-paper-300 rounded-2xl p-5 sm:p-7 shadow-xs relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cherry-700/5 blur-3xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-1">
              <span className="font-mono text-xs uppercase tracking-widest text-cherry-800 font-bold">
                Standar Fisik Biji: SCA & SNI 01-2907-2008
              </span>
              <span className="text-roast-400 font-mono text-xs">•</span>
              <span className="font-mono text-xs text-roast-600">
                Sample 350 Gram Protocol
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-roast-950 tracking-tight">
              Green Coffee Defect Trainer & Triage Lab
            </h2>
            <p className="text-xs sm:text-sm text-roast-600 max-w-2xl leading-relaxed">
              Panduan identifikasi 13 jenis cacat fisik biji hijau kopi (Primer & Sekunder). Pahami akar penyebab agronomis di kebun, dampak negatif pada seduhan, dan kalkulasi kepatuhan standar <strong>Specialty Grade (0 Cacat Primer, Max 5 Full Defect)</strong>.
            </p>
          </div>

          {/* Tab Navigation Switches */}
          <div className="flex items-center gap-2 self-start lg:self-auto bg-paper-200/60 p-1.5 rounded-xl border border-paper-300">
            <button
              onClick={() => setActiveTab('atlas')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'atlas'
                  ? 'bg-roast-950 text-paper-50 shadow-xs'
                  : 'text-roast-700 hover:text-roast-950'
              }`}
            >
              Atlas Visual Cacat
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'calculator'
                  ? 'bg-roast-950 text-paper-50 shadow-xs'
                  : 'text-roast-700 hover:text-roast-950'
              }`}
            >
              Kalkulator Sampel 350g
            </button>
          </div>
        </div>
      </div>

      {/* MODE 1: VISUAL DEFECT ATLAS */}
      {activeTab === 'atlas' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: Cards List (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { id: 'all', label: 'Semua Cacat' },
                  { id: 'primary', label: '🚨 Primer (0 Toleransi)' },
                  { id: 'secondary', label: '⚠️ Sekunder' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFilterCategory(f.id as 'all' | 'primary' | 'secondary')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                      filterCategory === f.id
                        ? 'bg-roast-950 text-paper-50 border-roast-950'
                        : 'bg-paper-50 text-roast-800 border-paper-300 hover:bg-paper-200'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-56">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-roast-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari cacat..."
                  className="w-full bg-paper-50 border border-paper-300 rounded-lg pl-8 pr-3 py-1 text-xs text-roast-950 outline-none focus:border-cherry-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredCatalog.map((item) => {
                const isSelected = selectedDefect.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedDefect(item)}
                    className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between gap-2.5 group active:scale-[0.98] ${
                      isSelected
                        ? 'bg-paper-50 border-cherry-700 ring-2 ring-cherry-700/20 shadow-md'
                        : 'bg-paper-50 hover:bg-paper-100/90 border-paper-300 shadow-xs'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded font-bold ${
                            item.category === 'primary'
                              ? 'bg-rose-100 text-rose-800 border border-rose-200'
                              : 'bg-amber-100 text-amber-800 border border-amber-200'
                          }`}
                        >
                          {item.category === 'primary' ? 'Cacat Primer' : 'Cacat Sekunder'}
                        </span>
                        <span className="font-mono text-[10px] text-roast-500 font-medium">
                          {item.ratioText}
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-base text-roast-950 group-hover:text-cherry-800 transition-colors">
                        {item.localName}
                      </h3>

                      <p className="text-xs text-roast-600 line-clamp-2 leading-relaxed">
                        {item.visualCharacteristics}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-paper-200 text-[11px] font-mono text-cherry-700 flex items-center justify-between">
                      <span className="truncate">Sensori: {item.cupQualityImpact}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Selected Defect Deep-Dive Dossier (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
              <div className="border-b border-paper-200 pb-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded font-bold ${
                      selectedDefect.category === 'primary'
                        ? 'bg-rose-100 text-rose-900 border border-rose-200'
                        : 'bg-amber-100 text-amber-900 border border-amber-200'
                    }`}
                  >
                    {selectedDefect.categoryLabel}
                  </span>
                  <span className="font-mono text-xs font-bold text-roast-900">
                    {selectedDefect.ratioText}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-roast-950">
                  {selectedDefect.localName}
                </h3>
                <span className="font-sans text-xs text-roast-500 italic block">
                  International Name: {selectedDefect.name}
                </span>
              </div>

              {/* Visual Appearance Details */}
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] uppercase text-roast-500 block font-semibold">
                  Ciri-Ciri Visual (Morfologi Biji):
                </span>
                <p className="text-xs text-roast-800 leading-relaxed font-sans bg-paper-100/70 p-3 rounded-xl border border-paper-200">
                  {selectedDefect.visualCharacteristics}
                </p>
              </div>

              {/* Cup Quality Impact */}
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] uppercase text-rose-700 block font-bold flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> Dampak Merusak Rasa Cangkir (Cupping):
                </span>
                <p className="text-xs text-rose-950 font-medium leading-relaxed bg-rose-50/80 p-3 rounded-xl border border-rose-200">
                  {selectedDefect.cupQualityImpact}
                </p>
              </div>

              {/* Agronomic Cause & Farm Mitigation */}
              <div className="space-y-3 pt-2 border-t border-paper-200 text-xs">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase text-roast-500 block font-semibold">
                    Akar Penyebab Agronomis (Hulu):
                  </span>
                  <p className="text-roast-700 leading-relaxed">{selectedDefect.agronomicCause}</p>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase text-emerald-700 block font-semibold">
                    Solusi & Mitigasi di Tingkat Petani / Processor:
                  </span>
                  <p className="text-roast-800 leading-relaxed bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-200">
                    {selectedDefect.farmMitigation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: 350g SAMPLE GRADING CALCULATOR */}
      {activeTab === 'calculator' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Input Panel for 350g (7 cols) */}
          <div className="lg:col-span-7 bg-paper-50 border border-paper-300 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-paper-200 pb-3">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-cherry-800 font-bold block">
                  Protokol Sampling Resmi: 350 Gram
                </span>
                <h3 className="font-serif text-lg font-bold text-roast-950">
                  Formulir Hitung Cacat Sampel Green Bean
                </h3>
              </div>
              <button
                onClick={handleResetCounts}
                className="px-2.5 py-1.5 rounded-lg bg-paper-100 hover:bg-paper-200 border border-paper-300 font-mono text-xs text-roast-700 flex items-center gap-1 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Hitungan</span>
              </button>
            </div>

            <div className="space-y-3">
              {GREEN_DEFECTS_CATALOG.map((defect) => {
                const count = counts[defect.id] || 0;
                return (
                  <div
                    key={defect.id}
                    className="p-3 rounded-xl bg-paper-100/60 border border-paper-200 flex items-center justify-between gap-3"
                  >
                    <div className="space-y-0.5 flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono text-[9px] uppercase px-1.5 py-0.2 rounded font-bold ${
                            defect.category === 'primary'
                              ? 'bg-rose-100 text-rose-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {defect.category === 'primary' ? 'P1' : 'P2'}
                        </span>
                        <span className="font-serif font-bold text-xs text-roast-950 truncate">
                          {defect.localName}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-roast-500 block">
                        Rasio: {defect.ratioText}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          setCounts({ ...counts, [defect.id]: Math.max(0, count - 1) })
                        }
                        className="w-6 h-6 rounded bg-paper-200 text-roast-900 font-bold flex items-center justify-center text-xs"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="0"
                        value={count}
                        onChange={(e) =>
                          setCounts({
                            ...counts,
                            [defect.id]: Math.max(0, parseInt(e.target.value, 10) || 0),
                          })
                        }
                        className="w-12 bg-paper-50 border border-paper-300 px-1 py-0.5 rounded text-xs font-mono font-bold text-center text-roast-950 outline-none"
                      />
                      <button
                        onClick={() => setCounts({ ...counts, [defect.id]: count + 1 })}
                        className="w-6 h-6 rounded bg-paper-200 text-roast-900 font-bold flex items-center justify-center text-xs"
                      >
                        +
                      </button>
                      <span className="font-mono text-xs font-bold text-roast-900 w-12 text-right">
                        ={(count / defect.ratioToFullDefect).toFixed(1)} FD
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Grade Determination Result (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-roast-950 text-paper-50 rounded-2xl p-6 shadow-xl space-y-5 border border-roast-800">
              <div className="flex items-center justify-between border-b border-roast-800 pb-4">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-crema-300 font-bold block">
                    Penetapan Kelas Mutu Resmi
                  </span>
                  <h3 className="font-serif text-lg font-bold text-paper-50">Hasil Penilaian Sampel 350g</h3>
                </div>
                <Award className="w-6 h-6 text-crema-300" />
              </div>

              {/* Total Full Defects */}
              <div className="flex items-baseline gap-2 py-1">
                <span className="font-mono text-5xl font-extrabold tracking-tight text-paper-50">
                  {gradingResult.totalFullDefects}
                </span>
                <span className="font-mono text-sm text-roast-400 font-semibold">Full Defects (FD)</span>
              </div>

              {/* Classification Grade Badge */}
              <div className={`p-3.5 rounded-xl border text-xs font-semibold space-y-1 ${gradingResult.gradeBadgeColor}`}>
                <span className="font-mono text-[10px] uppercase tracking-wider block opacity-80">
                  Keputusan Klasifikasi:
                </span>
                <p className="font-serif text-sm font-bold leading-snug">{gradingResult.grade}</p>
              </div>

              {/* Rule Details */}
              <div className="space-y-2 pt-2 border-t border-roast-900 text-xs font-mono">
                <div className="flex justify-between text-roast-300">
                  <span>Cacat Primer (Kategori 1):</span>
                  <span
                    className={`font-bold ${
                      gradingResult.totalPrimaryBeans === 0 ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {gradingResult.totalPrimaryBeans} biji ({gradingResult.totalPrimaryFullDefects} FD)
                  </span>
                </div>
                <div className="flex justify-between text-roast-300">
                  <span>Cacat Sekunder (Kategori 2):</span>
                  <span className="font-bold text-paper-50">
                    {gradingResult.totalSecondaryBeans} biji ({gradingResult.totalSecondaryFullDefects} FD)
                  </span>
                </div>
                <div className="flex justify-between text-roast-300">
                  <span>Syarat Specialty SCA:</span>
                  <span className={gradingResult.isSpecialty ? 'text-emerald-400 font-bold' : 'text-rose-400'}>
                    {gradingResult.isSpecialty ? 'Lolos Specialty Grade' : 'Gugur dari Specialty'}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-roast-900 text-[11px] text-roast-400 font-sans leading-relaxed">
                *Standar Specialty SCA mensyaratkan <strong>tepat 0 biji cacat primer</strong> dan <strong>maksimal 5 total full defect</strong> dalam 350g sampel green bean kopi Arabica.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
