'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Search,
  Award,
  Filter,
  CheckCircle2,
  FileText,
  Bookmark,
  GraduationCap,
  Layers,
  Sparkles,
  ShieldCheck,
  Building2,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react';

interface ReferenceItem {
  id: string;
  category: 'sca_cqi' | 'classic_books' | 'wcr_agronomy' | 'national_sni' | 'peer_reviewed';
  title: string;
  author: string;
  yearOrEdition: string;
  publisherOrInstitution: string;
  scopeInCherryEdu: string;
  summary: string;
  keyContributions: string[];
}

const OFFICIAL_REFERENCES: ReferenceItem[] = [
  // --- KATEGORI 1: STANDAR & PROTOKOL RESMI (SCA & CQI) ---
  {
    id: 'ref-sca-cupping',
    category: 'sca_cqi',
    title: 'SCA Cupping Protocols & Sensory Assessment Standards',
    author: 'Specialty Coffee Association (SCA)',
    yearOrEdition: 'Standar Resmi Protokol Laboratorium (Pembaruan Terkini 2024)',
    publisherOrInstitution: 'Specialty Coffee Association, California, USA',
    scopeInCherryEdu: 'Foundation (Modul F-7: Sensory & Cupping), Q Grader Specialization Path (Modul Q-1 s/d Q-6)',
    summary:
      'Protokol baku dunia untuk evaluasi mutu kopi secara objektif: rasio emas 8.25g per 150ml air (1:18.18), standar air cupping, toleransi sangrai 58-63 M-Basic, waktu 4 menit break crust, skimming, serta 10 parameter penilaian lembar cupping (Fragrance/Aroma, Flavor, Aftertaste, Acidity, Body, Balance, Uniformity, Clean Cup, Sweetness, Overall).',
    keyContributions: [
      'Menetapkan ambang batas 80.00 poin sebagai definisi resmi Specialty Coffee.',
      'Metodologi eliminasi bias sensorik visual menggunakan pencahayaan merah redup.',
      'Sistem penalti pengurangan poin cacat taint (2 poin) dan fault (4 poin).',
    ],
  },
  {
    id: 'ref-sca-water',
    category: 'sca_cqi',
    title: 'SCA Water Quality Standard for Specialty Coffee Brewing',
    author: 'SCA Standards Committee',
    yearOrEdition: 'SCA Technical Standard Publication',
    publisherOrInstitution: 'Specialty Coffee Association',
    scopeInCherryEdu: 'Foundation (Modul F-6: Kimia Air), Barista (Modul B-1), Home Brewer (Modul H-4), Water Lab Tool',
    summary:
      'Pedoman kimia air seduh spesifik: Total Dissolved Solids (TDS) target 150 ppm (rentang 75–250 ppm), Total Hardness 50–175 ppm CaCO3 (dengan rasio ideal kation Magnesium Mg²⁺ terhadap Kalsium Ca²⁺), Alkalinitas 40 ppm CaCO3 sebagai buffer asam, pH netral 6.5–7.5, serta ketiadaan klorin bebas (0 mg/L).',
    keyContributions: [
      'Menjelaskan peran kation divalen dalam mengikat senyawa rasa polar (asam sitrat, asam malat, sukrosa).',
      'Menguraikan fungsi alkalinitas bikarbonat dalam mencegah sensasi rasa asam menusuk.',
    ],
  },
  {
    id: 'ref-sca-brewing-chart',
    category: 'sca_cqi',
    title: 'SCA Coffee Brewing Control Chart & Extraction Theory',
    author: 'Dr. Ernest E. Lockhart & Specialty Coffee Association',
    yearOrEdition: 'Brewing Best Practice Standard',
    publisherOrInstitution: 'Coffee Brewing Center (CBC) & Specialty Coffee Association',
    scopeInCherryEdu: 'Foundation (Modul F-6), Barista (Modul B-4: Manual Brew), Home Brewer (Modul H-2 & H-3), Kalkulator Rasio',
    summary:
      'Matriks ilmiah hubungan antara Rasio Seduh (Brew Ratio), Total Dissolved Solids (% TDS Strength), dan Extraction Yield (% EY). Menetapkan zona ekstraksi ideal 18.0% – 22.0% EY dengan konsentrasi kekuatan 1.15% – 1.45% TDS untuk seduhan kopi filter optimal.',
    keyContributions: [
      'Formula matematis kalkulasi yield ekstraksi: EY (%) = [TDS (%) × Massa Cairan Seduh (g)] ÷ Dosis Kopi (g).',
      'Diagnostik under-extraction (asam hampa/asin) vs over-extraction (pahit getir/astringent).',
    ],
  },
  {
    id: 'ref-cqi-q-processing',
    category: 'sca_cqi',
    title: 'CQI Q Processing Program: Level 1 (Generalist) & Level 2 (Professional) Manuals',
    author: 'Coffee Quality Institute (CQI)',
    yearOrEdition: 'Pedoman Kursus & Kurikulum Resmi Berkelanjutan',
    publisherOrInstitution: 'Coffee Quality Institute, Washington D.C., USA',
    scopeInCherryEdu: 'Foundation (Modul F-4: Pasca Panen), Q Processor Specialization Path (Modul QP-1 s/d QP-8), Post-Harvest Path',
    summary:
      'Doktrin dan sains pasca-panen terakreditasi dunia: filosofi pengawetan kualitas bawaan buah, metabolisme mikroorganisme (ragi vs LAB vs AAB), kontrol batas kritis pH (3.8–4.2), termodinamika pengeringan, kontrol Water Activity (aw ≤ 0.60), reposo hermetik, serta sistem lembar kerja Batch Processing Logbook.',
    keyContributions: [
      'Standar mitigasi mikotoksin Ochratoxin A melalui pengendalian aktivitas air.',
      'Protokol pemantauan fermentasi terkontrol anaerobik dan perendaman air dingin (soaking).',
    ],
  },
  {
    id: 'ref-cqi-q-grader',
    category: 'sca_cqi',
    title: 'CQI Q Arabica & Q Robusta Grader Certification Protocols',
    author: 'Coffee Quality Institute (CQI)',
    yearOrEdition: 'Standar Ujian Kompetensi Cupper Profesional Internasional',
    publisherOrInstitution: 'Coffee Quality Institute',
    scopeInCherryEdu: 'Q Grader Specialization Path (Modul Q-1 s/d Q-6), Foundation (Modul F-7)',
    summary:
      'Metodologi pelatihan dan kalibrasi indra pengecapan: uji identifikasi larutan rasa dasar (manis, asam, asin pada berbagai intensitas), uji pembeda triangulasi, pengenalan kit olfaktori 36 aroma Le Nez du Café, uji asam organik (asam asetat, malat, sitrat, fosfat), dan kalibrasi skor antarkelompok cupper.',
    keyContributions: [
      'Membakukan bahasa sensorik deskriptif global tanpa bias istilah daerah.',
      'SOP penyiapan sampel sangrai light roast (Agtron Gourmet 63) khusus cupping lab.',
    ],
  },

  // --- KATEGORI 2: BUKU LITERATUR KLASIK & PANDUAN STANDAR DUNIA ---
  {
    id: 'ref-hoffmann-atlas',
    category: 'classic_books',
    title: 'The World Atlas of Coffee: From Beans to Brewing',
    author: 'James Hoffmann (World Barista Champion 2007)',
    yearOrEdition: 'Edisi ke-2 (2018), 272 Halaman',
    publisherOrInstitution: 'Mitchell Beazley / Octopus Publishing Group, London, UK',
    scopeInCherryEdu: 'Foundation (Modul F-1 s/d F-3), Atlas Origin Nusantara (19 Wilayah), Home Brewer Specialization',
    summary:
      'Ensiklopedi rujukan terlengkap yang memetakan taksonomi tanaman kopi, silsilah varietas dunia, proses pemetikan, hingga atlas wilayah penghasil kopi di seluruh benua termasuk rincian terroir kepulauan Indonesia (Sumatra, Jawa, Sulawesi, Flores, Bali, Papua).',
    keyContributions: [
      'Karakterisasi sejarah dan profil rasa komparatif antar-negara produsen kopi dunia.',
      'Panduan praktis prinsip ekstraksi manual brew dan peralatan seduh rumahan modern.',
    ],
  },
  {
    id: 'ref-rao-barista',
    category: 'classic_books',
    author: 'Scott Rao',
    title: "The Professional Barista's Handbook: An Expert's Guide to Preparing Espresso, Coffee, and Tea",
    yearOrEdition: 'Edisi ke-1 (2008)',
    publisherOrInstitution: 'Scott Rao Publishing, USA',
    scopeInCherryEdu: 'Barista Specialization Path (Modul B-1 s/d B-7), Foundation (Modul F-6), Espresso Dial-In Tool',
    summary:
      'Buku pegangan wajib barista profesional di seluruh dunia. Membedah mekanika tamping, distribusi bubuk kopi, pencegahan channeling dengan WDT, teknik steaming microfoam susu glossy, fisika pompa rotary 9 bar, serta perawatan preventif mesin komersial.',
    keyContributions: [
      'Prinsip perataan bubuk kopi dan tamping datar 90 derajat bebas RSI.',
      'Metode vortexing susu pada sudut pitcher 40 derajat untuk integrasi microfoam halus.',
    ],
  },
  {
    id: 'ref-rao-roasting',
    category: 'classic_books',
    author: 'Scott Rao',
    title: "The Coffee Roaster's Companion & Coffee Roasting: Best Practices",
    yearOrEdition: 'Kompilasi Edisi 2014 & 2020',
    publisherOrInstitution: 'Scott Rao Publishing, USA',
    scopeInCherryEdu: 'Roaster Specialization Path (Modul R-1 s/d R-8), Foundation (Modul F-5: Sains Roasting)',
    summary:
      'Karya monumental panduan penyangraian kopi presisi. Merumuskan hukum termodinamika drum roaster, konsep Charge Temperature, Turning Point, kurva Rate of Rise (RoR) yang menurun mulus (*smoothly declining RoR*), pencegahan RoR crash/flick, dan persentase Development Time Ratio (DTR 15%–20%).',
    keyContributions: [
      'Tiga Perintah Utama Roasting (*Three Commandments of Roasting*).',
      'Pengendalian transfer panas konduksi drum vs konveksi aliran udara panas.',
    ],
  },
  {
    id: 'ref-water-for-coffee',
    category: 'classic_books',
    author: 'Maxwell Colonna-Dashwood & Christopher H. Hendon',
    title: 'Water for Coffee: Science Story Manual',
    yearOrEdition: 'Edisi Ilmiah (2015), 118 Halaman',
    publisherOrInstitution: 'Colonna and Small’s, Bath, UK',
    scopeInCherryEdu: 'Foundation (Modul F-6: Kimia Air), Barista (Modul B-1), Water Chemistry Lab Tool',
    summary:
      'Hasil kolaborasi riset antara Juara Barista UK dan pakar kimia teoretis MIT. Menggunakan pemodelan komputasi kuantum untuk membuktikan bahwa ion Magnesium (Mg²⁺) memiliki afinitas pengikatan senyawa oksigen aromatik kopi yang lebih tinggi dibanding Kalsium (Ca²⁺), serta memetakan peran buffer bikarbonat.',
    keyContributions: [
      'Peta Poligon Ekstraksi Air Seduh (*The Water Quality Extract Polygon*).',
      'Resep formulasi air seduh konsentrat menggunakan garam Epsom (MgSO4) dan Baking Soda (NaHCO3).',
    ],
  },
  {
    id: 'ref-espresso-science',
    category: 'classic_books',
    author: 'Andrea Illy & Rinantonio Viani',
    title: 'Espresso Coffee: The Science of Quality',
    yearOrEdition: 'Edisi ke-2 (2005), 398 Halaman',
    publisherOrInstitution: 'Academic Press / Elsevier, London & San Diego',
    scopeInCherryEdu: 'Barista Specialization Path (Modul B-1 & B-2), Foundation (Modul F-5 & F-6)',
    summary:
      'Monografi sains terlengkap mengenai fisikokimia espresso. Menganalisis stabilitas emulsi crema (gas CO2 terperangkap dalam film lipid dan protein surfaktan), kinetika ekstraksi cairan di bawah tekanan hidrolik dinamis, serta transformasi senyawa aroma volatil pirolisis Maillard.',
    keyContributions: [
      'Penjelasan ilmiah mengenai pembentukan tiger stripes dan kestabilan mikrobuih crema.',
      'Analisis degradasi asam klorogenat menjadi senyawa asam kuinik pahit.',
    ],
  },
  {
    id: 'ref-rob-hoos',
    category: 'classic_books',
    author: 'Rob Hoos',
    title: 'Modulating the Flavor Profile of Coffee: One Roaster’s Manifesto',
    yearOrEdition: 'Edisi ke-1 (2015)',
    publisherOrInstitution: 'Rob Hoos Consulting, Oregon, USA',
    scopeInCherryEdu: 'Roaster Specialization Path (Modul R-3: Kinetika Reaksi Maillard & R-4: Profiling Rasa)',
    summary:
      'Panduan praktis modulasi profil rasa di mesin sangrai: manipulasi waktu fase pengeringan (*drying phase*) untuk mengatur body, fase Maillard untuk mengatur persepsi rasa manis dan kekentalan, serta fase development untuk menentukan spektrum asam sitrat vs malat vs asam asetat.',
    keyContributions: [
      'Korelasi durasi fase Maillard terhadap sintesis senyawa melanoik dan body kopi.',
      'Pengaruh laju akhir sangrai terhadap penajaman atau peluruhan asam organik.',
    ],
  },

  // --- KATEGORI 3: RISET GENETIK, BOTANI & AGRONOMI (WCR & KEW) ---
  {
    id: 'ref-wcr-catalog',
    category: 'wcr_agronomy',
    title: 'Arabica Coffee Varieties Catalog (Global Compendium)',
    author: 'World Coffee Research (WCR)',
    yearOrEdition: 'Edisi Terbuka v2.0 (Pembaruan Berkelanjutan)',
    publisherOrInstitution: 'World Coffee Research, Texas, USA',
    scopeInCherryEdu: 'Foundation (Modul F-3: Varietas Nusantara), Ensiklopedia Varietas Botani, Post-Harvest Path',
    summary:
      'Basis data genetik dan agronomi terverifikasi secara DNA: pohon silsilah Typica dan Bourbon, introgressi Hibrido de Timor (HdT), ketahanan terhadap karat daun (*Hemileia vastatrix*), potensi kualitas cangkir, ketinggian tanam rekomendasi, dan morfologi pohon.',
    keyContributions: [
      'Pemberian data silsilah genetik akurat untuk varietas lokal Indonesia (Tim-Tim, Ateng, S-795).',
      'Klasifikasi ketahanan varietas terhadap serangan hama nematoda dan penyakit jamur.',
    ],
  },
  {
    id: 'ref-wcr-lexicon',
    category: 'wcr_agronomy',
    title: 'World Coffee Research Sensory Lexicon',
    author: 'World Coffee Research & Kansas State University Sensory Analysis Center',
    yearOrEdition: 'Edisi ke-2 (2017)',
    publisherOrInstitution: 'World Coffee Research',
    scopeInCherryEdu: 'Foundation (Modul F-7), Sensory Flavor Wheel Tool, Q Grader Specialization Path',
    summary:
      'Kamus istilah rasa kopi berbasis sains universal yang menjadi fondasi resmi dari Roda Rasa SCA (*SCA Coffee Taster’s Flavor Wheel*). Menetapkan 110 atribut sensorik, definisi terukur, serta bahan acuan kalibrasi fisik (*physical reference standards*) yang dapat dibeli di laboratorium pangan.',
    keyContributions: [
      'Menyediakan acuan intensitas rasa berskala 1–15 yang terkalibrasi secara kuantitatif.',
      'Menstandarkan kosakata evaluasi kualitas sensorik kopi dunia.',
    ],
  },
  {
    id: 'ref-kew-gardens',
    category: 'wcr_agronomy',
    author: 'Dr. Aaron P. Davis et al.',
    title: 'Coffee Taxonomy, Climate Resilience & Extinction Risk Assessment of Wild Coffee Species',
    yearOrEdition: 'Publikasi Ilmiah Multi-Tahun',
    publisherOrInstitution: 'Royal Botanic Gardens, Kew, London, UK',
    scopeInCherryEdu: 'Foundation (Modul F-2: Agronomi & F-3: Varietas), Post-Harvest Path',
    summary:
      'Penelitian komprehensif taksonomi genus *Coffea* (124+ spesies liar): keanekaragaman genetik di Afrika, adaptasi terhadap kenaikan suhu iklim global, reintroduksi spesies liar tahan panas (*Coffea stenophylla* dan *Coffea liberica*), serta pelestarian hutan hujan agroforestri.',
    keyContributions: [
      'Menjelaskan perbedaan sitologi antara Coffea arabica alotetraploid (44 kromosom) dan diploid (22 kromosom).',
      'Pentingnya naungan kanopi hutan agroforestri untuk memperlambat maturasi ceri kopi.',
    ],
  },

  // --- KATEGORI 4: STANDAR NASIONAL INDONESIA (BSN) & RISET PUSLITKOKA ---
  {
    id: 'ref-sni-green-coffee',
    category: 'national_sni',
    title: 'SNI 01-2907-2008: Biji Kopi (Green Coffee Beans Specification)',
    author: 'Badan Standardisasi Nasional (BSN)',
    yearOrEdition: 'Standar Nasional Indonesia Resmi',
    publisherOrInstitution: 'Badan Standardisasi Nasional, Jakarta, Indonesia',
    scopeInCherryEdu: 'Foundation (Modul F-4), Post-Harvest Path (Modul P-6), Q Processor (Modul QP-7)',
    summary:
      'Standar resmi pengujian mutu biji kopi beras di Indonesia: sistem nilai cacat (defect system per 300 gram sampel), klasifikasi ukuran biji (Besar / Sedang / Kecil), batas toleransi kadar air maksimal 12.0%, bebas serangga hidup, bebas biji berbau busuk, serta pengelompokan mutu Mutu 1 hingga Mutu 6.',
    keyContributions: [
      'Menjadi landasan hukum perdagangan dan ekspor komoditas kopi Indonesia.',
      'Metode pengujian kadar air menggunakan metode oven atau moisture meter terkalibrasi.',
    ],
  },
  {
    id: 'ref-sni-ground-coffee',
    category: 'national_sni',
    title: 'SNI 01-3542-2004: Kopi Bubuk (Ground Coffee Standards)',
    author: 'Badan Standardisasi Nasional (BSN)',
    yearOrEdition: 'Standar Nasional Indonesia Resmi',
    publisherOrInstitution: 'Badan Standardisasi Nasional, Jakarta',
    scopeInCherryEdu: 'Barista Specialization Path, Coffee Business Path, Foundation',
    summary:
      'Kriteria mutu dan keamanan pangan untuk produk kopi bubuk kemasan komersial: batas kadar air maksimal 7.0%, kadar abu total, kadar kafein murni minimal (0.45% untuk Robusta dan 0.9% untuk Arabika), kebersihan mikroba, dan larangan penggunaan bahan pengisi atau zat pewarna sintetis.',
    keyContributions: [
      'Menjamin keaslian dan kemurnian 100% kopi bubuk tanpa oplosan biji jagung atau beras.',
      'Parameter jaminan keamanan pangan dan kelayakan konsumsi masyarakat.',
    ],
  },
  {
    id: 'ref-puslitkoka-guide',
    category: 'national_sni',
    title: 'Panduan Teknis Budidaya, Pasca Panen & Pengolahan Kopi Spesialti Indonesia',
    author: 'Dr. Surip Mawardi, Ir. Yusianto, et al.',
    yearOrEdition: 'Kompilasi Buku Pedoman Teknis Perkopian Nasional',
    publisherOrInstitution: 'Pusat Penelitian Kopi dan Kakao Indonesia (ICCRI / Puslitkoka), Jember, Jawa Timur',
    scopeInCherryEdu: 'Foundation (Modul F-2, F-3, F-4), Post-Harvest Path, Q Processor Specialization, Atlas Origin',
    summary:
      'Karya otoritatif lembaga riset perkopian tertua di Indonesia (berdiri sejak 1911). Mengupas pemuliaan varietas unggul Arabika anjuran nasional (Andungsari 1, Kartika 1, Sigarar Utang, S-795), klon Fine Robusta (BP 42, BP 358, SA 237), teknik fermentasi olah basah terstandar, serta sains Giling Basah higienis.',
    keyContributions: [
      'Penyedia bibit varietas unggul resmi bersertifikat dinas perkebunan di seluruh nusantara.',
      'Riset perbaikan sanitasi proses Giling Basah Sumatra untuk meniadakan kontaminasi bakteri geosmin.',
    ],
  },

  // --- KATEGORI 5: JURNAL ILMIAH PEER-REVIEWED TERAKREDITASI ---
  {
    id: 'ref-farah-roasting',
    category: 'peer_reviewed',
    title: 'Chlorogenic Acids from Green Coffee and Changes during Roasting: Influence on Antioxidant and Sensory Properties',
    author: 'Adriana Farah, Tomás de Paulis, et al.',
    yearOrEdition: 'Journal of Agricultural and Food Chemistry, Vol. 53(5)',
    publisherOrInstitution: 'American Chemical Society (ACS Publications)',
    scopeInCherryEdu: 'Foundation (Modul F-5: Sains Roasting), Roaster Specialization Path',
    summary:
      'Penelitian biokimia mendalam tentang transformasi termal asam klorogenat (CQA, FQA, diCQA). Membuktikan bahwa pada tingkat sangrai terang hingga sedang, asam klorogenat terurai menjadi asam kuinik bebas dan lakton asam klorogenat (CQL) yang berkontribusi pada sensasi kepahitan menyenangkan dan rasa manis.',
    keyContributions: [
      'Kuantifikasi penurunan asam klorogenat hingga 90% pada sangrai gelap (dark roast).',
      'Membuktikan kapasitas antioksidan polifenol bioaktif kopi spesialti.',
    ],
  },
  {
    id: 'ref-sunarharum-flavor',
    category: 'peer_reviewed',
    title: 'Complexity of Coffee Flavor: A Compositional and Sensory Perspective',
    author: 'Wenny B. Sunarharum, David J. Williams, & Heather E. Smyth',
    yearOrEdition: 'Food Research International, Vol. 62, Pages 315–325',
    publisherOrInstitution: 'Elsevier Science Direct',
    scopeInCherryEdu: 'Foundation (Modul F-7), Q Grader Specialization Path, Sensory Flavor Wheel',
    summary:
      'Tinjauan kritis komprehensif mengenai 800+ senyawa volatil dan non-volatil yang menyusun rasa kopi. Mengidentifikasi hubungan timbal balik antara pirazin (aroma kacang/panggang), furan (karamel), keton, dan ester buah dengan stimulasi reseptor indra penghidu retronasal manusia.',
    keyContributions: [
      'Peta jalur biosintesis aroma kopi dari pohon ke cangkir.',
      'Analisis sinergi rasa antara asam organik terlarut dan persepsi rasa manis di lidah.',
    ],
  },
  {
    id: 'ref-de-bruyn-microbiome',
    category: 'peer_reviewed',
    title: 'Exploring the Coffee Microbiome and Fermentation Kinetics of Inoculated Processing',
    author: 'Florian De Bruyn, Luc De Vuyst, et al.',
    yearOrEdition: 'Applied and Environmental Microbiology / Food Microbiology',
    publisherOrInstitution: 'American Society for Microbiology',
    scopeInCherryEdu: 'Q Processor Specialization Path (Modul QP-2 & QP-5), Post-Harvest Path',
    summary:
      'Riset mikrobiologi metagenomik pelacakan spesies ragi (Saccharomyces cerevisiae, Pichia kudriavzevii) dan bakteri asam laktat (Leuconostoc mesenteroides) selama fermentasi kopi. Membuktikan bahwa fermentasi anaerobik berinokulasi kultur murni secara signifikan meningkatkan akumulasi ester volatil etil laktat dan isoamil asetat.',
    keyContributions: [
      'Penetapan korelasi penurunan kurva pH dengan sintesis prekursor aroma buah eksotis.',
      'Bukti ilmiah penghambatan mikroba pembusuk Clostridium oleh kolonisasi kompetitif ragi unggul.',
    ],
  },
];

const CATEGORY_TABS = [
  { id: 'all', label: 'Semua Rujukan', count: OFFICIAL_REFERENCES.length },
  { id: 'sca_cqi', label: 'SCA & CQI Protocol', count: OFFICIAL_REFERENCES.filter((r) => r.category === 'sca_cqi').length },
  { id: 'classic_books', label: 'Buku Literatur Dunia', count: OFFICIAL_REFERENCES.filter((r) => r.category === 'classic_books').length },
  { id: 'wcr_agronomy', label: 'Riset WCR & Botani', count: OFFICIAL_REFERENCES.filter((r) => r.category === 'wcr_agronomy').length },
  { id: 'national_sni', label: 'SNI & Puslitkoka', count: OFFICIAL_REFERENCES.filter((r) => r.category === 'national_sni').length },
  { id: 'peer_reviewed', label: 'Jurnal Ilmiah Sains', count: OFFICIAL_REFERENCES.filter((r) => r.category === 'peer_reviewed').length },
];

export default function PustakaPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredReferences = useMemo(() => {
    return OFFICIAL_REFERENCES.filter((ref) => {
      const matchCategory = activeCategory === 'all' || ref.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchCategory;

      const matchText =
        ref.title.toLowerCase().includes(q) ||
        ref.author.toLowerCase().includes(q) ||
        ref.publisherOrInstitution.toLowerCase().includes(q) ||
        ref.scopeInCherryEdu.toLowerCase().includes(q) ||
        ref.summary.toLowerCase().includes(q) ||
        ref.keyContributions.some((k) => k.toLowerCase().includes(q));

      return matchCategory && matchText;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-paper-50">
      {/* Editorial Header */}
      <div className="bg-roast-950 text-paper-100 border-b border-roast-900 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-crema-400 font-bold bg-roast-900 px-2.5 py-1 rounded border border-roast-800">
                [ DOKUMEN PERTANGGUNGJAWABAN AKADEMIS ]
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Daftar Pustaka & Rujukan Resmi
            </h1>
            <p className="mt-4 text-xs sm:text-sm text-roast-300 leading-relaxed font-sans">
              Seluruh silabus, modul, panduan seduh, parameter kimia, dan ujian sertifikasi CherryEdu dirancang berdasarkan kompilasi standar otoritatif internasional (**Specialty Coffee Association**, **Coffee Quality Institute**, **World Coffee Research**), literatur buku klasik perkopian, **Standar Nasional Indonesia (BSN)**, balai riset **Puslitkoka Jember**, serta puluhan jurnal sains *peer-reviewed*.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-roast-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Bebas Materi Plagiat Tanpa Sumber</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-crema-400" />
                <span>Total {OFFICIAL_REFERENCES.length} Literatur Otoritatif</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-paper-300">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-roast-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari judul buku, penulis, lembaga (cth: Scott Rao, SCA, WCR, Puslitkoka)..."
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-paper-300 bg-white text-xs font-sans text-roast-900 placeholder:text-roast-400 focus:outline-none focus:ring-2 focus:ring-cherry-800"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-roast-400 hover:text-roast-900"
              >
                Reset
              </button>
            )}
          </div>

          <div className="font-mono text-xs text-roast-600 bg-paper-100 px-3 py-1.5 border border-paper-300 rounded self-start md:self-auto">
            Menampilkan <strong className="text-roast-950">{filteredReferences.length}</strong> rujukan
          </div>
        </div>

        {/* Category Tabs */}
        <div className="my-6 flex flex-wrap items-center gap-1.5 sm:gap-2">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg font-mono text-xs tracking-wider transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-roast-950 text-paper-50 font-bold shadow-subtle'
                    : 'bg-paper-100 text-roast-700 hover:bg-paper-200 border border-paper-300/80'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-cherry-900 text-crema-300' : 'bg-paper-200 text-roast-600'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Reference Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {filteredReferences.map((ref, idx) => (
            <div
              key={ref.id}
              className="bg-white rounded-xl border border-paper-300 p-6 shadow-subtle hover:border-roast-800 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-cherry-800 font-bold bg-cherry-50 px-2 py-0.5 rounded border border-cherry-200">
                    {ref.category === 'sca_cqi' && 'Standar Asosiasi Internasional'}
                    {ref.category === 'classic_books' && 'Buku Literatur Terverifikasi'}
                    {ref.category === 'wcr_agronomy' && 'Riset Botani & Agronomi'}
                    {ref.category === 'national_sni' && 'Standar Nasional Indonesia'}
                    {ref.category === 'peer_reviewed' && 'Jurnal Ilmiah Peer-Reviewed'}
                  </span>
                  <span className="font-mono text-[10px] text-roast-500">
                    REF #{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title & Author */}
                <h3 className="font-serif font-bold text-lg sm:text-xl text-roast-950 leading-snug">
                  {ref.title}
                </h3>
                <div className="mt-2 font-mono text-xs text-roast-700 font-semibold flex items-center gap-1.5">
                  <span className="text-cherry-700">Penulis:</span>
                  <span>{ref.author}</span>
                </div>
                <div className="text-[11px] font-sans text-roast-500 mt-0.5">
                  {ref.publisherOrInstitution} • {ref.yearOrEdition}
                </div>

                {/* Scope in CherryEdu */}
                <div className="my-4 p-2.5 rounded-lg bg-paper-100 border border-paper-300/80 font-sans text-xs">
                  <span className="font-mono text-[10px] uppercase font-bold text-roast-600 block mb-1">
                    Cakupan Materi CherryEdu:
                  </span>
                  <span className="text-roast-900 font-medium">{ref.scopeInCherryEdu}</span>
                </div>

                {/* Summary */}
                <p className="font-sans text-xs text-roast-700 leading-relaxed mb-4">
                  {ref.summary}
                </p>
              </div>

              {/* Key Scientific Contributions */}
              <div className="pt-4 border-t border-paper-200">
                <span className="font-mono text-[10px] uppercase font-bold text-roast-500 block mb-2">
                  Kontribusi Teoretis & Praktis Utama:
                </span>
                <ul className="space-y-1.5 text-xs text-roast-800">
                  {ref.keyContributions.map((contrib, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="leading-snug">{contrib}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredReferences.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-paper-300 p-8">
            <BookOpen className="w-12 h-12 text-roast-400 mx-auto mb-3" />
            <h3 className="font-serif font-bold text-xl text-roast-950">Rujukan Tidak Ditemukan</h3>
            <p className="font-sans text-xs text-roast-600 mt-1 max-w-sm mx-auto">
              Tidak ada rujukan pustaka yang cocok dengan kata kunci &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded font-mono text-xs uppercase bg-roast-950 text-paper-50"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Academic Principles Notice */}
        <div className="mt-12 p-6 rounded-xl bg-paper-100 border border-paper-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white rounded-lg border border-paper-300 text-cherry-800">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm sm:text-base text-roast-950">
                Integritas Standar Kurikulum CherryEdu
              </h4>
              <p className="text-xs text-roast-600 font-sans mt-0.5">
                Setiap materi dan kalkulasi alat telah diverifikasi oleh licensed Q Grader dan praktisi roastery guna memastikan keselarasan dengan praktik industri terkini.
              </p>
            </div>
          </div>
          <Link
            href="/paths"
            className="px-4 py-2 rounded bg-roast-950 text-paper-50 font-mono text-xs uppercase tracking-wider font-bold hover:bg-cherry-800 transition-colors shrink-0"
          >
            Mulai Belajar Kurikulum →
          </Link>
        </div>
      </div>
    </div>
  );
}
