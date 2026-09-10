'use client';

import React, { useState, useMemo } from 'react';
import {
  Compass,
  Sparkles,
  Info,
  Droplets,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  X,
  Search,
  Globe2,
  Flag,
  LayoutGrid,
  RotateCw,
  Flame,
  Award,
} from 'lucide-react';
import {
  SensoryMacroCategory,
  SensoryDescriptor,
  SensoryStandardType,
  SCA_WCR_INTERNATIONAL_DATA,
  INDONESIAN_NATIONAL_DATA,
} from '@/lib/data/sensoryWheelData';
import { InteractiveSunburstWheel } from './InteractiveSunburstWheel';

interface OrganicAcid {
  name: string;
  chemicalName: string;
  perception: string;
  originExamples: string;
  cuppingSensoryProfile: string;
  trainingTip: string;
}

const ORGANIC_ACIDS: OrganicAcid[] = [
  {
    name: 'Asam Sitrat (Citric Acid)',
    chemicalName: 'C₆H₈O₇ (Citric Acid)',
    perception: 'Asam jeruk, tajam, cerah, membangkitkan kesegaran di sisi kiri-kanan lidah.',
    originExamples: 'Bali Kintamani Washed, Aceh Gayo Washed, Kenya AA',
    cuppingSensoryProfile:
      'Menghadirkan sensasi rasa lemon, jeruk keprok, dan grapefruit. Asam dominan pada buah kopi ceri yang dipetik matang sempurna pada elevasi tinggi.',
    trainingTip: 'Larutkan 0.2g asam sitrat kristal murni ke dalam 500ml air suling untuk kalibrasi lidah sensorik.',
  },
  {
    name: 'Asam Malat (Malic Acid)',
    chemicalName: 'C₄H₆O₅ (Malic Acid)',
    perception: 'Asam buah apel hijau, pear renyah, segar, memicu produksi air liur (juicy mouthfeel).',
    originExamples: 'Ijen Raung Bondowoso, Kerinci Kayu Aro, Colombia Geisha',
    cuppingSensoryProfile:
      'Memberikan rasa keasaman yang bulat, lembut, dan menyegarkan seperti menggigit buah apel Granny Smith yang renyah.',
    trainingTip:
      'Bandingkan dengan asam sitrat: asam malat terasa lebih lambat muncul di langit-langit mulut namun bertahan lebih lama.',
  },
  {
    name: 'Asam Fosfat (Phosphoric Acid)',
    chemicalName: 'H₃PO₄ (Inorganic Acid)',
    perception: 'Asam sparkling, sensasi bersoda (effervescent), cola-like, mencerahkan rasa buah.',
    originExamples: 'Flores Manggarai Vulkanik, Rwanda Nyamagabe, Kenya Nyeri',
    cuppingSensoryProfile:
      'Bukan asam organik melainkan asam mineral anorganik yang diserap pohon dari tanah kaya fosfat vulkanik. Membuat cangkir kopi terasa berkilau dan hidup.',
    trainingTip: 'Sensasinya mirip desisan asam menyegarkan saat pertama kali meneguk minuman berkarbonasi dingin.',
  },
  {
    name: 'Asam Laktat (Lactic Acid)',
    chemicalName: 'C₃H₆O₃ (Lactic Acid)',
    perception: 'Asam lembut, creamy, milky, butter yogurt, membulatkan dan menebalkan tekstur body.',
    originExamples: 'Honey Process, Anaerobic Fermentation, Lactic Maceration Kintamani',
    cuppingSensoryProfile:
      'Dihasilkan oleh bakteri Lactobacillus selama fermentasi terkontrol di mana bakteri memecah glukosa menjadi asam laktat, menciptakan tekstur seperti susu sutra.',
    trainingTip: 'Rasa asam lembut seperti pada keju segar mozzarella atau yogurt tawar Yunani.',
  },
  {
    name: 'Asam Asetat (Acetic Acid)',
    chemicalName: 'CH₃COOH (Acetic Acid)',
    perception: 'Asam cuka, fermentasi anggur, tajam menusuk jika berlebih; menyenangkan jika seimbang.',
    originExamples: 'Natural Wine Process Gayo, Carbonic Maceration Puntang',
    cuppingSensoryProfile:
      'Pada kadar rendah (<0.5%) menghasilkan sensasi buah anggur masak dan red wine yang elegan. Jika berlebih, membuat kopi berbau cuka masam tajam (over-ferment).',
    trainingTip:
      'Cium setetes cuka apel encer: jika kopi Anda memiliki bau ini terlalu tajam, proses fermentasi berlangsung terlalu lama.',
  },
  {
    name: 'Asam Tartarat & Kuinat (Tartaric & Quinic)',
    chemicalName: 'Tartaric (C₄H₆O₆) & Quinic Acid',
    perception: 'Asam buah anggur / kismis (Tartarat); rasa pahit getir pembakar dari sangrai gelap (Kuinat).',
    originExamples: 'Anggur Merah Kering, Kopi Sangrai Gelap (Dark Roast)',
    cuppingSensoryProfile:
      'Asam tartarat memberi karakter buah anggur matang. Asam quinat terbentuk saat asam klorogenat (CGA) terdegradasi panas pada fase pemanggangan akhir.',
    trainingTip:
      'Kopi yang didiamkan berjam-jam di hot plate pemanas akan teroksidasi dan kaya asam quinat yang pahit membakar.',
  },
];

interface DefectItem {
  name: string;
  type: 'Primer (FATAL)' | 'Sekunder';
  cause: string;
  sensoryImpact: string;
  mitigation: string;
}

const COFFEE_DEFECTS: DefectItem[] = [
  {
    name: 'Full Black (Biji Hitam Pekat)',
    type: 'Primer (FATAL)',
    cause: 'Ceri busuk di pohon akibat serangan jamur atau mati kekeringan sebelum matang.',
    sensoryImpact: 'Rasa arang, abu gosong, pahit tajam, menutupi seluruh sweetness dan kebersihan rasa.',
    mitigation: 'Sortasi rambang apung ceri dan hand sorting green bean di stasiun olah.',
  },
  {
    name: 'Full Sour / Stinker (Biji Busuk Asam)',
    type: 'Primer (FATAL)',
    cause: 'Over-fermentasi di tangki air yang tidak diganti, atau buah jatuh membusuk di tanah.',
    sensoryImpact: 'Bau busuk seperti cuka tengik, buah busuk, atau aroma bangkai di hidung saat diseduh.',
    mitigation: 'Kontrol ketat durasi fermentasi, jaga kebersihan air cuci, hindari memungut ceri tanah.',
  },
  {
    name: 'Fungus / Mold (Biji Berjamur)',
    type: 'Primer (FATAL)',
    cause: 'Kelembapan tinggi saat penjemuran lambat, atau disimpan di karung basah tanpa sirkulasi.',
    sensoryImpact: 'Bau apek seperti gudang lembap, rasa lumut, tanah kotor basah, dan membahayakan kesehatan.',
    mitigation: 'Gunakan raised bed beratap plastik UV dan kemasan kedap udara hermetis GrainPro.',
  },
  {
    name: 'Quaker / Underripe (Biji Mentah Sangrai)',
    type: 'Sekunder',
    cause: 'Ceri hijau (belum matang) yang ikut terpetik dan gagal mengalami karamelisasi saat di-roast.',
    sensoryImpact: 'Biji berwarna kuning pucat setelah di-roast. Rasa kacang tanah mentah hambar dan berserat kayu.',
    mitigation: 'Disiplin pemetikan petik merah selektif 100% matang pohon (selective picking).',
  },
  {
    name: 'Insect Damaged / Borer (Biji Berlubang PBKo)',
    type: 'Sekunder',
    cause: 'Kumbang penggerek buah kopi (Hypothenemus hampei) membuat lubang terowongan di dalam biji.',
    sensoryImpact: 'Rasa pahit kotor, aroma tidak bersih, dan pembakaran tidak merata saat pemanggangan.',
    mitigation: 'Pengendalian hama terpadu (PHT) kebun, perangkap feromon, dan sortasi gravitasi.',
  },
  {
    name: 'Potato Defect (Aroma Kentang Mentah)',
    type: 'Primer (FATAL)',
    cause: 'Bakteri masuk melalui gigitan serangga Antestia pada buah kopi segar.',
    sensoryImpact: 'Satu biji saja bisa merusak satu teko seduhan dengan bau menyengat kentang mentah busuk.',
    mitigation: 'Sortasi optical color sorter dan pemantauan hama Antestia di perkebunan.',
  },
];

export const FlavorWheel: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'wheel' | 'acids' | 'defects'>('wheel');
  const [standardType, setStandardType] = useState<SensoryStandardType>('international');
  const [viewMode, setViewMode] = useState<'wheel' | 'grid'>('wheel');
  const [searchQuery, setSearchQuery] = useState('');

  // Active dataset based on standard
  const activeDataset: SensoryMacroCategory[] = useMemo(() => {
    return standardType === 'international' ? SCA_WCR_INTERNATIONAL_DATA : INDONESIAN_NATIONAL_DATA;
  }, [standardType]);

  // Active Category & Descriptor selection
  const [selectedCategory, setSelectedCategory] = useState<SensoryMacroCategory>(activeDataset[0]);
  const [selectedDescriptor, setSelectedDescriptor] = useState<SensoryDescriptor>(
    activeDataset[0].subcategories[0].descriptors[0]
  );
  const [selectedAcid, setSelectedAcid] = useState<OrganicAcid>(ORGANIC_ACIDS[0]);

  // Mobile Bottom Sheet Modal state
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'descriptor' | 'acid'>('descriptor');

  // Switch standard handler
  const handleSwitchStandard = (type: SensoryStandardType) => {
    setStandardType(type);
    const newDataset = type === 'international' ? SCA_WCR_INTERNATIONAL_DATA : INDONESIAN_NATIONAL_DATA;
    setSelectedCategory(newDataset[0]);
    setSelectedDescriptor(newDataset[0].subcategories[0].descriptors[0]);
    setSearchQuery('');
  };

  // Search filter across descriptors
  const filteredDescriptors = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    const matches: { desc: SensoryDescriptor; macro: SensoryMacroCategory }[] = [];

    activeDataset.forEach((macro) => {
      macro.subcategories.forEach((sub) => {
        sub.descriptors.forEach((desc) => {
          if (
            desc.name.toLowerCase().includes(query) ||
            desc.nameEn.toLowerCase().includes(query) ||
            desc.chemicalCompound.toLowerCase().includes(query) ||
            desc.originMatch.toLowerCase().includes(query)
          ) {
            matches.push({ desc, macro });
          }
        });
      });
    });

    return matches;
  }, [activeDataset, searchQuery]);

  return (
    <div className="space-y-6">
      {/* 1. TOP SUB-TAB NAVIGATOR */}
      <div className="flex items-center gap-1.5 bg-paper-200/80 p-1 rounded-lg border border-paper-300 w-fit max-w-full overflow-x-auto">
        <button
          onClick={() => setActiveSubTab('wheel')}
          className={`px-4 py-2 rounded-md font-sans text-xs font-semibold tracking-wide transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSubTab === 'wheel'
              ? 'bg-roast-950 text-paper-50 shadow-xs'
              : 'text-roast-700 hover:text-roast-950 hover:bg-paper-100/60'
          }`}
        >
          <Compass className={`w-3.5 h-3.5 ${activeSubTab === 'wheel' ? 'text-crema-300' : 'text-roast-500'}`} />
          <span>Roda Rasa Sensori (Sensory Wheel)</span>
        </button>
        <button
          onClick={() => setActiveSubTab('acids')}
          className={`px-4 py-2 rounded-md font-sans text-xs font-semibold tracking-wide transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSubTab === 'acids'
              ? 'bg-roast-950 text-paper-50 shadow-xs'
              : 'text-roast-700 hover:text-roast-950 hover:bg-paper-100/60'
          }`}
        >
          <Droplets className={`w-3.5 h-3.5 ${activeSubTab === 'acids' ? 'text-blue-400' : 'text-roast-500'}`} />
          <span>Asam Organik (Acids Lab)</span>
        </button>
        <button
          onClick={() => setActiveSubTab('defects')}
          className={`px-4 py-2 rounded-md font-sans text-xs font-semibold tracking-wide transition-all flex items-center gap-2 whitespace-nowrap ${
            activeSubTab === 'defects'
              ? 'bg-roast-950 text-paper-50 shadow-xs'
              : 'text-roast-700 hover:text-roast-950 hover:bg-paper-100/60'
          }`}
        >
          <AlertTriangle className={`w-3.5 h-3.5 ${activeSubTab === 'defects' ? 'text-rose-400' : 'text-roast-500'}`} />
          <span>Matriks Defek Rasa</span>
        </button>
      </div>

      {/* 2. SUBTAB 1: SENSORY FLAVOR WHEEL (INTERNATIONAL & NATIONAL) */}
      {activeSubTab === 'wheel' && (
        <div className="bg-paper-50 rounded-xl border border-paper-300 p-4 sm:p-7 shadow-subtle space-y-6">
          {/* Header Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-paper-300">
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold bg-cherry-50 px-2 py-0.5 border border-cherry-200">
                  DUAL SENSORY STANDARD
                </span>
                <span className="font-mono text-[10px] text-roast-500">
                  {standardType === 'international'
                    ? 'STANDAR GLOBAL SCA & WORLD COFFEE RESEARCH'
                    : 'STANDAR NASIONAL KOPI INDONESIA (SCAI / 5758 LAB)'}
                </span>
              </div>
              <h3 className="font-serif font-black text-2xl sm:text-3xl text-roast-950">
                {standardType === 'international'
                  ? "SCA Coffee Taster's Flavor Wheel"
                  : 'Roda Rasa Kopi Nusantara (Indonesian Flavor Wheel)'}
              </h3>
              <p className="text-xs text-roast-600 mt-1 max-w-2xl leading-relaxed">
                {standardType === 'international'
                  ? 'Visualisasi lingkaran konsentris 3-tingkat resmi Specialty Coffee Association (SCA) dan World Coffee Research (WCR) untuk kalibrasi Q-Grader global.'
                  : 'Peta sensori resmi kopi kepulauan Nusantara dengan deskriptor autentik tanah air: buah tropis eksotis, rempah Maluku, gula aren nira, bunga melati, dan fermentasi tradisional.'}
              </p>
            </div>

            {/* DUAL STANDARDS TOGGLE BUTTONS */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => handleSwitchStandard('international')}
                className={`px-3.5 py-2.5 rounded-lg font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                  standardType === 'international'
                    ? 'bg-roast-950 text-white border-roast-950 shadow-sm ring-1 ring-roast-950'
                    : 'bg-white hover:bg-paper-100 text-roast-700 border-paper-300'
                }`}
              >
                <Globe2 className={`w-3.5 h-3.5 ${standardType === 'international' ? 'text-amber-400' : 'text-roast-400'}`} />
                <span>Standar Internasional (SCA)</span>
              </button>

              <button
                type="button"
                onClick={() => handleSwitchStandard('national')}
                className={`px-3.5 py-2.5 rounded-lg font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                  standardType === 'national'
                    ? 'bg-cherry-900 text-white border-cherry-900 shadow-sm ring-1 ring-cherry-900'
                    : 'bg-white hover:bg-paper-100 text-roast-700 border-paper-300'
                }`}
              >
                <Flag className={`w-3.5 h-3.5 ${standardType === 'national' ? 'text-emerald-400' : 'text-roast-400'}`} />
                <span>Standar Nasional (Indonesia)</span>
              </button>
            </div>
          </div>

          {/* Search & View Mode Controls Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-paper-100/80 p-3 rounded-lg border border-paper-200">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-3.5 h-3.5 text-roast-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  standardType === 'international'
                    ? 'Cari deskriptor SCA (misal: Blackberry, Peach, Jasmine, Cocoa)...'
                    : 'Cari deskriptor Nusantara (misal: Nangka, Cengkeh, Gula Aren, Melati)...'
                }
                className="w-full pl-9 pr-8 py-2 text-xs rounded-lg border border-paper-300 bg-white placeholder:text-roast-400 focus:outline-none focus:border-roast-900"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-roast-400 hover:text-roast-700 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Mode Toggle: Wheel SVG vs Hierarchical Grid */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-paper-300 self-end sm:self-auto">
              <button
                type="button"
                onClick={() => setViewMode('wheel')}
                className={`px-3 py-1.5 text-xs font-mono rounded flex items-center gap-1.5 transition-all ${
                  viewMode === 'wheel'
                    ? 'bg-roast-950 text-white font-bold shadow-2xs'
                    : 'text-roast-600 hover:bg-paper-100'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Roda Visual (SVG)</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 text-xs font-mono rounded flex items-center gap-1.5 transition-all ${
                  viewMode === 'grid'
                    ? 'bg-roast-950 text-white font-bold shadow-2xs'
                    : 'text-roast-600 hover:bg-paper-100'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Matriks Daftar (Grid)</span>
              </button>
            </div>
          </div>

          {/* Search Result Matches if searching */}
          {searchQuery.trim() && (
            <div className="bg-white p-3 rounded-lg border border-paper-300 shadow-2xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold">
                  HASIL PENCARIAN &ldquo;{searchQuery}&rdquo; ({filteredDescriptors.length} DITEMUKAN):
                </span>
              </div>
              {filteredDescriptors.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {filteredDescriptors.map(({ desc, macro }) => (
                    <button
                      key={desc.id}
                      onClick={() => {
                        setSelectedDescriptor(desc);
                        setSelectedCategory(macro);
                        setModalType('descriptor');
                        setIsMobileModalOpen(true);
                      }}
                      className="px-2.5 py-1.5 rounded text-xs border border-paper-300 bg-paper-50 hover:border-roast-950 text-roast-900 flex items-center gap-1.5 transition-all"
                    >
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: desc.color }} />
                      <span className="font-bold">{desc.name}</span>
                      <span className="text-[10px] text-roast-400 font-mono">({macro.name})</span>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-roast-500 italic py-1">
                  Tidak ada deskriptor yang cocok dengan kata kunci tersebut pada standar ini.
                </p>
              )}
            </div>
          )}

          {/* MAIN VISUAL WORKSPACE: 2 COLUMNS (WHEEL / GRID on LEFT, DOSSIER on RIGHT) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT COLUMN: EITHER INTERACTIVE SUNBURST WHEEL OR HIERARCHICAL MATRIX */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-paper-300 p-4 sm:p-6 shadow-subtle flex flex-col justify-center">
              {viewMode === 'wheel' ? (
                <InteractiveSunburstWheel
                  data={activeDataset}
                  standardType={standardType}
                  selectedDescriptor={selectedDescriptor}
                  selectedCategory={selectedCategory}
                  onSelectDescriptor={(desc, macro) => {
                    setSelectedDescriptor(desc);
                    setSelectedCategory(macro);
                    setModalType('descriptor');
                    setIsMobileModalOpen(true);
                  }}
                  onSelectCategory={(macro) => {
                    setSelectedCategory(macro);
                  }}
                />
              ) : (
                /* HIERARCHICAL GRID VIEW MODE */
                <div className="space-y-4">
                  {/* Category Chips Selector */}
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-roast-500 block mb-2 font-bold">
                      KATEGORI MAKRO ({activeDataset.length} KELOMPOK):
                    </span>
                    <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                      {activeDataset.map((cat) => {
                        const isActive = cat.id === selectedCategory.id;
                        return (
                          <button
                            key={cat.id}
                            onClick={() => {
                              setSelectedCategory(cat);
                              if (cat.subcategories[0]?.descriptors[0]) {
                                setSelectedDescriptor(cat.subcategories[0].descriptors[0]);
                              }
                            }}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border whitespace-nowrap flex items-center gap-2 ${
                              isActive
                                ? 'bg-roast-950 text-white font-bold border-roast-950 shadow-xs'
                                : 'bg-paper-100 text-roast-700 border-paper-300 hover:bg-paper-200'
                            }`}
                          >
                            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                            <span>{cat.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Category Description */}
                  <div className={`p-3 rounded-lg border text-xs leading-relaxed ${selectedCategory.bgBadge}`}>
                    <strong>Karakteristik Kimia:</strong> {selectedCategory.description}
                  </div>

                  {/* Subcategories & Descriptors list */}
                  <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                    {selectedCategory.subcategories.map((sub) => (
                      <div key={sub.id} className="bg-paper-50 rounded-lg p-3.5 border border-paper-200 space-y-2.5">
                        <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-roast-600 font-bold">
                          <ChevronRight className="w-3 h-3 text-cherry-600" />
                          SUB-KATEGORI: {sub.name} ({sub.nameEn})
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {sub.descriptors.map((desc) => {
                            const isSelected = selectedDescriptor.id === desc.id;
                            return (
                              <button
                                key={desc.id}
                                onClick={() => {
                                  setSelectedDescriptor(desc);
                                  setModalType('descriptor');
                                  setIsMobileModalOpen(true);
                                }}
                                className={`p-2.5 rounded text-left transition-all border ${
                                  isSelected
                                    ? 'bg-white border-roast-950 shadow-xs ring-1 ring-roast-950'
                                    : 'bg-white/80 border-paper-200 hover:border-roast-400'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="text-xs font-bold text-roast-950 flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: desc.color }} />
                                    <span>{desc.name}</span>
                                  </div>
                                  <ChevronRight className="w-3.5 h-3.5 text-roast-400 lg:hidden shrink-0" />
                                </div>
                                <div className="text-[10px] text-cherry-800 font-mono mt-0.5 truncate">
                                  {desc.originMatch.split('(')[0]}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: RICH SENSORY CALIBRATION DOSSIER PANEL */}
            <div className="lg:col-span-5 bg-roast-950 text-paper-50 p-6 rounded-xl border border-roast-900 shadow-xl space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Dossier Header */}
                <div className="pb-3 border-b border-roast-800">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-crema-400 font-bold bg-roast-900 px-2 py-0.5 rounded border border-roast-800">
                      {standardType === 'international' ? 'SCA SENSORY DOSSIER' : 'DOSSIER SENSORI NUSANTARA'}
                    </span>
                    <span className="w-3 h-3 rounded-full border border-white/40 shadow-xs" style={{ backgroundColor: selectedDescriptor.color }} />
                  </div>
                  <h4 className="font-serif font-black text-2xl sm:text-3xl text-paper-50 mt-1 leading-tight">
                    {selectedDescriptor.name}
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-roast-300 mt-1">
                    <span>{selectedDescriptor.nameEn}</span>
                    <span>•</span>
                    <span className="text-crema-300 font-bold">{selectedCategory.name}</span>
                  </div>
                </div>

                {/* 1. Senyawa Kimiawi Volatil */}
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-crema-400 block mb-1 font-bold">
                    🧪 Senyawa Kimiawi Acuan (Aroma Volatiles):
                  </span>
                  <div className="text-xs text-amber-200 font-mono bg-roast-900/90 p-2.5 rounded border border-roast-800">
                    {selectedDescriptor.chemicalCompound}
                  </div>
                </div>

                {/* 2. Standar Referensi Nyata */}
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-crema-400 block mb-1 font-bold">
                    🌿 Bahan Acuan / Rujukan Sensori:
                  </span>
                  <div className="text-xs text-paper-200 font-mono bg-roast-900/90 p-2.5 rounded border border-roast-800 leading-relaxed">
                    {selectedDescriptor.referenceStandard}
                  </div>
                </div>

                {/* 3. Karakteristik Rasa di Cangkir */}
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-crema-400 block mb-1 font-bold">
                    ☕ Profil Sensori di Cangkir:
                  </span>
                  <p className="text-xs text-paper-100 font-sans italic bg-roast-900/60 p-3 rounded border border-roast-800 leading-relaxed">
                    &ldquo;{selectedDescriptor.sensoryProfile}&rdquo;
                  </p>
                </div>

                {/* 4. Asal Daerah Kopi di Nusantara (Origin Match) */}
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 block mb-1 font-bold">
                    📍 Padanan Daerah Asal di Indonesia:
                  </span>
                  <div className="text-xs text-emerald-100 font-sans font-bold bg-emerald-950/40 p-2.5 rounded border border-emerald-800/60 flex items-start gap-2">
                    <span className="text-emerald-400 font-mono text-sm leading-none mt-0.5">●</span>
                    <span>{selectedDescriptor.originMatch}</span>
                  </div>
                </div>

                {/* 5. Rekomendasi Roasting & Cupping Tip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <div className="bg-roast-900/80 p-2.5 rounded border border-roast-800 text-[11px]">
                    <span className="font-mono text-[9px] uppercase text-roast-400 block font-bold mb-0.5">
                      🔥 Tingkat Sangrai:
                    </span>
                    <span className="text-paper-200 font-semibold">{selectedDescriptor.roastRecommendation}</span>
                  </div>
                  <div className="bg-roast-900/80 p-2.5 rounded border border-roast-800 text-[11px]">
                    <span className="font-mono text-[9px] uppercase text-crema-400 block font-bold mb-0.5">
                      🏆 Tips Kalibrasi:
                    </span>
                    <span className="text-paper-200 text-[10px] leading-snug block">{selectedDescriptor.cuppingCalibrationTip}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Stamp */}
              <div className="pt-3 border-t border-roast-800 flex items-center justify-between text-[10px] font-mono text-roast-400">
                <span>CherryEdu Sensory Calibration</span>
                <span className="text-crema-400 font-bold">Q-Grader Ready</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. SUBTAB 2: ORGANIC ACIDS LAB */}
      {activeSubTab === 'acids' && (
        <div className="bg-paper-50 rounded-xl border border-paper-300 p-6 sm:p-8 shadow-subtle space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-paper-300">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-blue-700 font-bold bg-blue-50 px-2 py-0.5 border border-blue-200">
                  BIOKIMIA SENSORI KOPI
                </span>
                <span className="font-mono text-[10px] text-roast-500">6 GOLONGAN UTAMA</span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-roast-950">
                Laboratorium Asam Organik & Kalibrasi Larutan
              </h3>
              <p className="text-xs text-roast-600 mt-1 max-w-xl font-sans">
                Pelajari struktur asam organik di dalam seduhan, persepsi lidah, serta panduan membuat larutan kalibrasi sensory standard.
              </p>
            </div>
            <div className="font-mono text-xs text-roast-500 bg-paper-100 px-3 py-1.5 border border-paper-300 rounded self-start sm:self-auto">
              Acid Calibration Lab
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 space-y-3">
              {ORGANIC_ACIDS.map((acid, idx) => {
                const isSelected = selectedAcid.name === acid.name;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedAcid(acid);
                      setModalType('acid');
                      setIsMobileModalOpen(true);
                    }}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-paper-100/90 border-roast-900 shadow-xs ring-1 ring-roast-900'
                        : 'bg-paper-100/40 border-paper-200 hover:border-roast-400'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-serif font-bold text-sm text-roast-950">{acid.name}</div>
                        <div className="font-mono text-[10px] text-blue-800 font-semibold">{acid.chemicalName}</div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-paper-200 rounded text-roast-600 shrink-0">
                        {acid.perception.split(',')[0]}
                      </span>
                    </div>
                    <p className="text-xs text-roast-700 mt-2 font-sans line-clamp-2 leading-relaxed">
                      {acid.cuppingSensoryProfile}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Acid Detail Panel on Desktop */}
            <div className="lg:col-span-5 bg-roast-950 text-paper-50 p-6 rounded-xl border border-roast-900 shadow-subtle flex flex-col justify-between">
              <div className="space-y-4">
                <div className="pb-3 border-b border-roast-800">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-blue-400 block font-semibold">
                    [ SPESIFIKASI ASAM ORGANIK ]
                  </span>
                  <h4 className="font-serif font-bold text-2xl text-paper-50 mt-1">{selectedAcid.name}</h4>
                  <span className="text-xs font-mono text-blue-300 font-semibold">{selectedAcid.chemicalName}</span>
                </div>

                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-blue-400 block mb-1 font-semibold">
                    Persepsi Sensorik di Lidah:
                  </span>
                  <p className="text-xs text-paper-100 font-sans italic bg-roast-900 p-3 rounded border border-roast-800 leading-relaxed">
                    &ldquo;{selectedAcid.perception}&rdquo;
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-crema-400 block mb-1 font-semibold">
                    Profil Sensori di Cangkir:
                  </span>
                  <p className="text-xs text-paper-200 font-sans bg-roast-900/80 p-3 rounded border border-roast-800 leading-relaxed">
                    {selectedAcid.cuppingSensoryProfile}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 block mb-1 font-bold">
                    Spesimen Asal Kopi:
                  </span>
                  <p className="text-xs text-white font-sans font-bold bg-emerald-950/40 p-2.5 rounded border border-emerald-800/60">
                    {selectedAcid.originExamples}
                  </p>
                </div>

                <div className="pt-2 border-t border-roast-800">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-amber-400 block mb-1 font-semibold">
                    🧪 Kalibrasi Laboratorium:
                  </span>
                  <p className="text-xs text-amber-200/90 font-mono bg-amber-950/30 p-2.5 rounded border border-amber-800/50 leading-relaxed">
                    {selectedAcid.trainingTip}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. SUBTAB 3: COFFEE DEFECTS MATRIX */}
      {activeSubTab === 'defects' && (
        <div className="bg-paper-50 rounded-xl border border-paper-300 p-6 sm:p-8 shadow-subtle space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-paper-300">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-rose-700 font-bold bg-rose-50 px-2 py-0.5 border border-rose-200">
                  STANDAR CACAT MUTU SIK
                </span>
                <span className="font-mono text-[10px] text-roast-500">STANDAR PRIMER & SEKUNDER</span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-roast-950">Matriks Cacat Rasa & Green Bean Defect</h3>
              <p className="text-xs text-roast-600 mt-1 max-w-xl font-sans">
                Identifikasi cacat fisik biji mentah dan dampak negatifnya terhadap rasa seduhan, serta tindakan mitigasi di kebun.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COFFEE_DEFECTS.map((defect, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-paper-300 shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`font-mono text-[9px] uppercase px-2 py-0.5 rounded font-bold ${
                        defect.type.includes('FATAL')
                          ? 'bg-rose-100 text-rose-800 border border-rose-200'
                          : 'bg-amber-100 text-amber-800 border border-amber-200'
                      }`}
                    >
                      {defect.type}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-roast-950">{defect.name}</h4>
                  <div className="mt-3 space-y-2 text-xs">
                    <div>
                      <span className="font-mono text-[9px] uppercase text-roast-400 block font-bold">Penyebab:</span>
                      <p className="text-roast-700 leading-snug">{defect.cause}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase text-rose-700 block font-bold">Dampak Rasa:</span>
                      <p className="text-roast-900 font-semibold leading-snug">{defect.sensoryImpact}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-paper-200">
                  <span className="font-mono text-[9px] uppercase text-emerald-700 block font-bold">Mitigasi:</span>
                  <p className="text-xs text-roast-600 leading-snug">{defect.mitigation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. MOBILE BOTTOM SHEET MODAL (SLIDE-UP) */}
      {isMobileModalOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-0 sm:p-4 animate-in fade-in duration-200">
          <div
            className="bg-roast-950 text-paper-50 rounded-t-2xl sm:rounded-2xl border border-roast-800 w-full max-w-lg max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-250 ease-drawer"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header Bar with Drag Handle & Close Button */}
            <div className="p-4 pb-3 border-b border-roast-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedDescriptor.color }} />
                <span className="font-mono text-[10px] uppercase tracking-widest text-crema-400 font-bold">
                  {modalType === 'descriptor'
                    ? standardType === 'international'
                      ? 'SCA SENSORY DOSSIER'
                      : 'DOSSIER SENSORI NUSANTARA'
                    : 'SPESIFIKASI ASAM ORGANIK'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileModalOpen(false)}
                className="p-1.5 rounded-lg bg-roast-900 hover:bg-roast-800 text-roast-300 hover:text-white transition-colors"
                title="Tutup Panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 overflow-y-auto space-y-4 text-xs">
              {modalType === 'descriptor' ? (
                <>
                  <div>
                    <h4 className="font-serif font-black text-2xl text-paper-50">{selectedDescriptor.name}</h4>
                    <div className="flex items-center gap-2 text-xs font-mono text-roast-300 mt-0.5">
                      <span>{selectedDescriptor.nameEn}</span>
                      <span>•</span>
                      <span className="text-crema-300 font-bold">{selectedCategory.name}</span>
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-crema-400 block mb-1 font-bold">
                      🧪 Senyawa Kimiawi Acuan:
                    </span>
                    <div className="text-xs text-amber-200 font-mono bg-roast-900 p-2.5 rounded border border-roast-800">
                      {selectedDescriptor.chemicalCompound}
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-crema-400 block mb-1 font-bold">
                      🌿 Bahan Acuan / Rujukan Sensori:
                    </span>
                    <div className="text-xs text-paper-200 font-mono bg-roast-900 p-2.5 rounded border border-roast-800 leading-relaxed">
                      {selectedDescriptor.referenceStandard}
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-crema-400 block mb-1 font-bold">
                      ☕ Profil Sensori di Cangkir:
                    </span>
                    <p className="text-xs text-paper-100 font-sans italic bg-roast-900 p-3 rounded border border-roast-800 leading-relaxed">
                      &ldquo;{selectedDescriptor.sensoryProfile}&rdquo;
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 block mb-1 font-bold">
                      📍 Padanan Origin di Indonesia:
                    </span>
                    <p className="text-xs text-emerald-100 font-sans font-bold bg-emerald-950/50 p-2.5 rounded border border-emerald-800/60">
                      {selectedDescriptor.originMatch}
                    </p>
                  </div>

                  <div className="bg-roast-900 p-2.5 rounded border border-roast-800 text-[11px] space-y-1">
                    <span className="font-mono text-[9px] uppercase text-crema-400 block font-bold">
                      🏆 Tips Kalibrasi Cupper:
                    </span>
                    <p className="text-paper-200 leading-relaxed">{selectedDescriptor.cuppingCalibrationTip}</p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h4 className="font-serif font-black text-2xl text-paper-50">{selectedAcid.name}</h4>
                    <span className="text-xs font-mono text-blue-300 font-semibold">{selectedAcid.chemicalName}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-blue-400 block mb-1 font-bold">
                      Persepsi Sensorik di Lidah:
                    </span>
                    <p className="text-xs text-paper-100 font-sans italic bg-roast-900 p-3 rounded border border-roast-800">
                      &ldquo;{selectedAcid.perception}&rdquo;
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-crema-400 block mb-1 font-bold">
                      Profil di Cangkir:
                    </span>
                    <p className="text-xs text-paper-200 font-sans bg-roast-900 p-3 rounded border border-roast-800 leading-relaxed">
                      {selectedAcid.cuppingSensoryProfile}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 block mb-1 font-bold">
                      Spesimen Origin Kopi:
                    </span>
                    <p className="text-xs text-white font-sans font-bold bg-emerald-950/50 p-2.5 rounded border border-emerald-800/60">
                      {selectedAcid.originExamples}
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-3 border-t border-roast-800 bg-roast-900/60 flex justify-end">
              <button
                type="button"
                onClick={() => setIsMobileModalOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-roast-800 hover:bg-roast-700 text-xs font-mono text-paper-100 font-bold transition-colors"
              >
                Tutup Catatan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
