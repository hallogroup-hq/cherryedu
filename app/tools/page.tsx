'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { BrewCalculator } from '@/components/BrewCalculator';
import { FlavorWheel } from '@/components/FlavorWheel';
import { VarietyCompendium } from '@/components/VarietyCompendium';
import { EspressoDialIn } from '@/components/EspressoDialIn';
import { WaterCalculator } from '@/components/WaterCalculator';
import { SCACuppingForm } from '@/components/SCACuppingForm';
import { GrinderConverter } from '@/components/GrinderConverter';
import { CoffeeCompass } from '@/components/CoffeeCompass';
import { CupAnatomyVisualizer } from '@/components/CupAnatomyVisualizer';
import { BlendDesigner } from '@/components/BlendDesigner';
import { LocalFlavorLexicon } from '@/components/LocalFlavorLexicon';
import { GreenDefectTrainer } from '@/components/GreenDefectTrainer';
import { RoastingSimulator } from '@/components/RoastingSimulator';
import { HarvestCalendar } from '@/components/HarvestCalendar';
import {
  Compass,
  Coffee,
  MapPin,
  Sparkles,
  Search,
  Filter,
  Mountain,
  Layers,
  GitFork,
  Gauge,
  Droplets,
  ClipboardCheck,
  SlidersHorizontal,
  Check,
  X,
  ArrowRight,
  BookOpen,
  Sliders,
  Flame,
  ShieldAlert,
  Calendar,
} from "lucide-react";

type ToolDomainId = 'bar-brew' | 'sensory-cupping' | 'terroir-botany';
type ToolId =
  | 'calculator'
  | 'espresso-dial'
  | 'grinder-converter'
  | 'coffee-compass'
  | 'cup-anatomy'
  | 'blend-designer'
  | 'roast-simulator'
  | 'water-lab'
  | 'flavor-wheel'
  | 'local-lexicon'
  | 'cupping-sheet'
  | 'green-defects'
  | 'harvest-calendar'
  | 'atlas'
  | 'varieties';

interface ToolDef {
  id: ToolId;
  domainId: ToolDomainId;
  label: string;
  shortLabel: string;
  badge: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TOOLS_CATALOG: ToolDef[] = [
  // 1. Domain: Bar & Seduhan
  {
    id: 'calculator',
    domainId: 'bar-brew',
    label: 'Kalkulator Rasio & Timer',
    shortLabel: 'Kalkulator Rasio',
    badge: 'Preset & Custom',
    tagline: 'Kalkulasi dosis kopi, volume air, dan rasio seduh presisi dengan stopwatch taktil.',
    icon: Coffee,
  },
  {
    id: 'grinder-converter',
    domainId: 'bar-brew',
    label: 'Cross-Grinder Click Converter',
    shortLabel: 'Grinder Converter',
    badge: '10 Grinder Dunia',
    tagline: 'Konversi klik Comandante, Timemore, 1Zpresso, EK43, Fellow Ode, dan Baratza dalam satuan mikron (μm).',
    icon: Sliders,
  },
  {
    id: 'coffee-compass',
    domainId: 'bar-brew',
    label: 'Interactive Coffee Compass',
    shortLabel: 'Coffee Compass',
    badge: 'Diagnosis Rasa',
    tagline: 'Solusi taktis rasa kopi sepat, pahit getir, asin, atau asam tajam dengan panduan kalibrasi 4 langkah.',
    icon: Compass,
  },
  {
    id: 'cup-anatomy',
    domainId: 'bar-brew',
    label: 'Visual Perbandingan Anatomi Cangkir',
    shortLabel: 'Anatomi Cangkir',
    badge: '12 Menu Kafe',
    tagline: 'Visual rasio cross-section espresso, microfoam, air, dan suhu saji dengan mode side-by-side.',
    icon: Layers,
  },
  {
    id: 'blend-designer',
    domainId: 'bar-brew',
    label: 'Virtual Blend Designer & HPP',
    shortLabel: 'Blend Designer',
    badge: 'Kafe & Es Kopi Susu',
    tagline: 'Simulasi racik house blend kafe, keseimbangan Arabica/Robusta, ketebalan crema, dan HPP per cup.',
    icon: Sparkles,
  },
  {
    id: 'roast-simulator',
    domainId: 'bar-brew',
    label: 'Virtual Drum Roasting Simulator',
    shortLabel: 'Roast Simulator',
    badge: 'BT, ET & RoR',
    tagline: 'Simulasi kurva sangrai drum komersial, kontrol burner, airflow damper, dan audio letupan First Crack.',
    icon: Flame,
  },
  {
    id: 'espresso-dial',
    domainId: 'bar-brew',
    label: 'Espresso Dial-In Solver',
    shortLabel: 'Espresso Dial-In',
    badge: 'Diagnosis Ekstraksi',
    tagline: 'Pecahkan under/over ekstraksi, ukuran gilingan, dosis, dan laju alir (flow rate).',
    icon: Gauge,
  },
  {
    id: 'water-lab',
    domainId: 'bar-brew',
    label: 'Water Chemistry Lab',
    shortLabel: 'Water Lab',
    badge: 'Mineral & Buffer',
    tagline: 'Kalkulasi kesadahan mineral GH/KH, buffer bikarbonat, dan resep air seduh SCA.',
    icon: Droplets,
  },

  // 2. Domain: Sensorik & Cupping
  {
    id: 'flavor-wheel',
    domainId: 'sensory-cupping',
    label: 'Sensory Flavor Wheel',
    shortLabel: 'Flavor Wheel',
    badge: 'Standar SCA & WCR',
    tagline: 'Roda rasa interaktif 3 tingkat, leksikon sensori WCR, dan profil asam organik.',
    icon: Compass,
  },
  {
    id: 'local-lexicon',
    domainId: 'sensory-cupping',
    label: 'Leksikon Rasa Lokal Nusantara',
    shortLabel: 'Rasa Lokal',
    badge: 'Palate Indonesia',
    tagline: 'Kamus rasa buah tropis (salak, nangka, sirsak), gula aren, rempah, dan resep kalibrasi mandiri.',
    icon: BookOpen,
  },
  {
    id: 'cupping-sheet',
    domainId: 'sensory-cupping',
    label: 'SCA Coffee Value Assessment (CVA)',
    shortLabel: 'SCA CVA Form',
    badge: 'Standar Resmi SCA',
    tagline: 'Protokol cupping SCA terbaru dengan penilaian Descriptive (0-15), Affective, dan matriks 5 cangkir.',
    icon: ClipboardCheck,
  },
  {
    id: 'green-defects',
    domainId: 'sensory-cupping',
    label: 'Green Coffee Defect Trainer',
    shortLabel: 'Cacat Green Bean',
    badge: 'SCA & SNI Fisik',
    tagline: 'Atlas 13 cacat fisik biji kopi primer & sekunder dan kalkulator kepatuhan Specialty Grade 350g.',
    icon: ShieldAlert,
  },

  // 3. Domain: Botani & Terroir
  {
    id: 'harvest-calendar',
    domainId: 'terroir-botany',
    label: 'Kalender Musim Panen Nusantara',
    shortLabel: 'Kalender Panen',
    badge: 'Siklus 12 Bulan',
    tagline: 'Jadwal panen raya, panen selang, dan masa berbunga kopi di 19 origin Indonesia.',
    icon: Calendar,
  },
  {
    id: 'atlas',
    domainId: 'terroir-botany',
    label: 'Atlas Origin Kopi Nusantara',
    shortLabel: 'Atlas Nusantara',
    badge: '19 Wilayah',
    tagline: 'Kompendium elevasi, iklim mikro, varietas, pasca-panen, dan profil 19 origin Indonesia.',
    icon: MapPin,
  },
  {
    id: 'varieties',
    domainId: 'terroir-botany',
    label: 'Ensiklopedia Varietas Kopi',
    shortLabel: 'Ensiklopedia Varietas',
    badge: 'Botani & Agronomi',
    tagline: 'Silsilah genetik Typica, Bourbon, Catimor, mutasi alami, dan ketahanan penyakit.',
    icon: GitFork,
  },
];

const TOOL_DOMAINS = [
  {
    id: 'bar-brew' as ToolDomainId,
    name: 'Bar & Seduhan',
    shortName: 'Bar & Seduh',
    count: '8 Instrumen',
    icon: Coffee,
  },
  {
    id: 'sensory-cupping' as ToolDomainId,
    name: 'Sensorik & Uji Rasa',
    shortName: 'Sensorik & Cupping',
    count: '4 Instrumen',
    icon: Compass,
  },
  {
    id: 'terroir-botany' as ToolDomainId,
    name: 'Botani & Terroir Nusantara',
    shortName: 'Botani & Terroir',
    count: '3 Kompendium',
    icon: MapPin,
  },
];

interface CoffeeRegion {
  name: string;
  subRegion: string;
  island: 'Sumatra' | 'Jawa' | 'Bali & Nusa Tenggara' | 'Sulawesi' | 'Papua';
  altitude: string;
  varieties: string;
  processing: string;
  flavorNotes: string;
  description: string;
  imageUrl: string;
}

const INDONESIAN_REGIONS: CoffeeRegion[] = [
  {
    name: 'Aceh Gayo',
    subRegion: 'Takengon & Bener Meriah, Aceh',
    island: 'Sumatra',
    altitude: '1.200 – 1.700 mdpl',
    varieties: 'Tim-Tim, Ateng Super, Bor-Bor, Typica',
    processing: 'Giling Basah (Wet Hulled), Honey, Anaerobic Natural',
    flavorNotes: 'Cedar wood, sweet tobacco, herbal lemongrass, black tea, dark cocoa, heavy syrupy body',
    description: 'Pusat specialty coffee terbesar di Asia Tenggara. Ditanam di sekitar Danau Laut Tawar dengan tanah vulkanik subur dan kanopi naungan pohon lamtoro.',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Mandheling & Pakpak Bharat',
    subRegion: 'Mandailing Natal & Dairi, Sumatra Utara',
    island: 'Sumatra',
    altitude: '1.100 – 1.500 mdpl',
    varieties: 'Lasuna, Sigarar Utang, Garunggang',
    processing: 'Wet Hulled Tradisional, Natural Slow Dry',
    flavorNotes: 'Dark chocolate, sweet molasses, earthy forest floor, licorice, bold syrupy body',
    description: 'Legenda kopi tertua di Sumatra dengan reputasi global sejak era kolonial. Terkenal akan body yang tebal dengan aftertaste manis gula aren yang tahan lama.',
    imageUrl: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Lintong Nihuta',
    subRegion: 'Humbang Hasundutan, Danau Toba',
    island: 'Sumatra',
    altitude: '1.300 – 1.600 mdpl',
    varieties: 'Sigarar Utang, Lasuna, Jember (S-795)',
    processing: 'Wet Hulled, Fully Washed Modern, Anaerobic Honey',
    flavorNotes: 'Ripe stone fruit, dried plum, sweet capsicum, brown sugar, vibrant clean acidity',
    description: 'Tumbuh di dataran tinggi barat daya Danau Toba dengan iklim sejuk dan tanah vulkanik tuf Toba. Memiliki tingkat keasaman buah yang lebih hidup dibanding kopi Sumatra lainnya.',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Kerinci Kayu Aro',
    subRegion: 'Lembah Gunung Kerinci, Jambi',
    island: 'Sumatra',
    altitude: '1.400 – 1.800 mdpl',
    varieties: 'Andungsari, Sigarar Utang, Maraqoji (Maragogipe)',
    processing: 'Anaerobic Natural, Honey Red/Black, Fully Washed',
    flavorNotes: 'Ripe strawberry, passionfruit, green apple, warm cinnamon, honey sweetness',
    description: 'Origin bintang baru kejuaraan barista Indonesia. Elevasi ekstrem di kaki Gunung Kerinci menghasilkan kepadatan biji tinggi dan spektrum rasa fruity yang eksplosif.',
    imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Lampung & Semendo',
    subRegion: 'Tanggamus, Liwa & Muara Enim',
    island: 'Sumatra',
    altitude: '800 – 1.400 mdpl',
    varieties: 'Fine Robusta Klon Tugusari, Arabika Kartika',
    processing: 'Natural Wine, Fine Robusta Anaerobic, Honey',
    flavorNotes: 'Dark cocoa nibs, roasted hazelnut, caramelized brown sugar, malt, robust round body',
    description: 'Sentra Fine Robusta terbaik Indonesia. Melalui pemetikan ceri merah 100% dan fermentasi terkontrol, menghasilkan kopi tanpa rasa sepat/pahit gosong yang ideal untuk base espresso.',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=80',
  },

  {
    name: 'Java Preanger (Pangalengan & Ciwidey)',
    subRegion: 'Bandung Selatan, Jawa Barat',
    island: 'Jawa',
    altitude: '1.350 – 1.700 mdpl',
    varieties: 'Typica Priangan, Ateng, Sigarar Utang, Kartika',
    processing: 'Fully Washed, Yellow Honey, Extended Anaerobic',
    flavorNotes: 'Jasmine blossom, sweet lime, crisp green apple, floral tea, cane sugar',
    description: 'Titik nol sejarah penanaman kopi di tanah Jawa abad ke-17. Cuaca sejuk pegunungan Priangan menghasilkan cangkir kopi yang sangat elegan, bersih, dan floral seperti teh melati.',
    imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Gunung Puntang',
    subRegion: 'Cimaung, Bandung, Jawa Barat',
    island: 'Jawa',
    altitude: '1.250 – 1.650 mdpl',
    varieties: 'Typica, Linea S, Catimor',
    processing: 'Natural Anaerobic, Washed Classic',
    flavorNotes: 'Tropical banana, sweet jackfruit, red berries, brown sugar, silky finish',
    description: 'Juara kompetisi Specialty Coffee Association of America (SCAA) 2016 di Atlanta. Menjadi simbol kebangkitan kopi specialty Jawa Barat di kancah internasional.',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Temanggung (Sindoro-Sumbing)',
    subRegion: 'Lereng Gunung Sindoro & Sumbing, Jawa Tengah',
    island: 'Jawa',
    altitude: '1.100 – 1.800 mdpl (Arabika), 600 – 900 mdpl (Robusta)',
    varieties: 'Kartika, Andungsari, Fine Robusta Klon BP 42',
    processing: 'Full Washed, Honey, Natural Carbonic Maceration',
    flavorNotes: 'Gula aren, dried dates, ripe tobacco flower, roasted almond, velvety mouthfeel',
    description: 'Wilayah unik yang menghasilkan Arabika dataran tinggi beraroma tembakau manis alami dan Fine Robusta nomor satu yang digemari industri specialty modern.',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Ijen Raung & Bondowoso',
    subRegion: 'Kalatren & Sukorejo, Jawa Timur',
    island: 'Jawa',
    altitude: '1.200 – 1.600 mdpl',
    varieties: 'Blue Mountain, USDA 762, S-795, Kartika',
    processing: 'Fully Washed Karst, Honey, Yeast Inoculated',
    flavorNotes: 'Crisp red apple, brown sugar, sweet orange zest, light spicy pepper, crisp malic acidity',
    description: 'Perkebunan peninggalan era kolonial di bawah kaldera Gunung Ijen. Belerang alami dan kandungan mineral tanah vulkanik memberikan sensasi keasaman malat yang sangat menyegarkan.',
    imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Argopuro (Walida)',
    subRegion: 'Lereng Gunung Argopuro, Probolinggo & Jember',
    island: 'Jawa',
    altitude: '1.200 – 1.500 mdpl',
    varieties: 'Kartika, Kobra, Linie S',
    processing: 'Anaerobic Natural, Koji Fermentation, Honey Anaerobic',
    flavorNotes: 'Rum raisin, dried fig, dark cherry, sweet caramel, winey mouthfeel',
    description: 'Kolektif petani muda Koperasi Walida memelopori fermentasi eksperimental presisi di Jawa Timur, menghasilkan karakter rasa kompleks bernuansa anggur manis.',
    imageUrl: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=600&auto=format&fit=crop&q=80',
  },

  {
    name: 'Bali Kintamani',
    subRegion: 'Kecamatan Kintamani, Bangli, Bali',
    island: 'Bali & Nusa Tenggara',
    altitude: '1.200 – 1.550 mdpl',
    varieties: 'Kobra, Kartika, Typica',
    processing: 'Fully Washed Subak Abian, Natural, Extended Anaerobic',
    flavorNotes: 'Mandarin orange, sweet tangerine, vanilla pod, brown butter, sweet honey aftertaste',
    description: 'Sistem irigasi agraris sakral Subak Abian dan tumpang sari (*intercropping*) dengan kebun jeruk Kintamani memberikan profil rasa sitrus manis khas yang telah bersertifikat Indikasi Geografis.',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Flores Bajawa',
    subRegion: 'Kabupaten Ngada, Pulau Flores, NTT',
    island: 'Bali & Nusa Tenggara',
    altitude: '1.200 – 1.650 mdpl',
    varieties: 'Yellow Caturra, S-795, Kartika',
    processing: 'Semi Washed, Fully Washed, Anaerobic Honey',
    flavorNotes: 'Milk chocolate, roasted hazelnut, white floral, sweet caramel, sweet rounded body',
    description: 'Ditanam di dataran tinggi vulkanik Gunung Inerie oleh masyarakat adat Bajawa. Sangat seimbang dengan profil cokelat susu dan kacang panggang yang menjadi favorit kafe specialty.',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Flores Manggarai (Colol)',
    subRegion: 'Lembah Colol, Manggarai Timur, NTT',
    island: 'Bali & Nusa Tenggara',
    altitude: '1.300 – 1.700 mdpl',
    varieties: 'Jurung (Typica lokal), Kartika, Columbia',
    processing: 'Fully Washed, Natural Anaerobic',
    flavorNotes: 'Lemon verbena, apricot, sparkling phosphoric acidity, wildflower honey, clean sweet finish',
    description: 'Lembah tersembunyi Colol merupakan surga varietas tua Jurung (Typica warisan Belanda). Memiliki karakteristik rasa sparkling dengan kejernihan acidity mirip kopi Afrika Timur.',
    imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Sumbawa Tambora & Rinjani',
    subRegion: 'Kaki Gunung Tambora & Sembalun Lombok, NTB',
    island: 'Bali & Nusa Tenggara',
    altitude: '1.100 – 1.500 mdpl',
    varieties: 'Typica Tambora, S-795',
    processing: 'Natural Dry, Honey Process',
    flavorNotes: 'Wild mountain honey, dried papaya, sweet tamarind, subtle black tea',
    description: 'Kopi yang tumbuh di tanah abu vulkanik letusan mahadasyat Gunung Tambora 1815. Dikenal memiliki tingkat kemanisan nektar alami yang sangat pekat.',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
  },

  {
    name: 'Toraja Kalosi & Sapan',
    subRegion: 'Tana Toraja & Toraja Utara, Sulawesi Selatan',
    island: 'Sulawesi',
    altitude: '1.400 – 2.000 mdpl',
    varieties: 'S-795 (Jember), Typica Toraja',
    processing: 'Fully Washed Classic, Semi-Washed (Giling Basah)',
    flavorNotes: 'Dark chocolate 75%, ripe plum, cinnamon spice, sweet herbal, balanced citric-malic acidity',
    description: 'Salah satu pusaka specialty coffee nusantara paling ternama di dunia. Dusun Sapan dan Pulu-Pulu di ketinggian hingga 2.000 mdpl memproduksi biji dengan densitas ultra-padat dan keanggunan rempah manis.',
    imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Mamasa',
    subRegion: 'Kabupaten Mamasa, Sulawesi Barat',
    island: 'Sulawesi',
    altitude: '1.300 – 1.800 mdpl',
    varieties: 'S-795, Typica, USDA',
    processing: 'Fully Washed, Natural Anaerobic',
    flavorNotes: 'Brown sugar, red apple, sweet clove, roasted pecan, juicy medium body',
    description: 'Berada di lembah pegunungan tetangga Toraja, Mamasa menghadirkan profil cup yang lebih renyah dengan dominasi buah apel merah manis dan aroma rempah cengkeh lembut.',
    imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Enrekang Duri (Benteng Alla)',
    subRegion: 'Lereng Gunung Latimojong, Sulawesi Selatan',
    island: 'Sulawesi',
    altitude: '1.350 – 1.750 mdpl',
    varieties: 'S-795, Kalosi, Typica',
    processing: 'Fully Washed, Honey Anaerobic',
    flavorNotes: 'Sweet grape, black currant, molasses, nutmeg, creamy coating body',
    description: 'Ditanam di lereng terjal Gunung Latimojong oleh masyarakat Duri. Biji kopi berkarakter creamy tebal dengan aroma pala manis yang khas.',
    imageUrl: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=600&auto=format&fit=crop&q=80',
  },

  {
    name: 'Wamena Lembah Baliem',
    subRegion: 'Lembah Baliem, Jayawijaya, Papua Pegunungan',
    island: 'Papua',
    altitude: '1.600 – 2.000 mdpl',
    varieties: 'Typica Blue Mountain warisan 1950-an',
    processing: 'Fully Washed Organik Tradisional',
    flavorNotes: 'Sweet herbal, cocoa butter, roasted almond, orange peel, super clean smooth body',
    description: 'Ditanam 100% organik tanpa pupuk kimia sintetis oleh suku Dani di lembah pegunungan Jayawijaya. Varietas murni Typica peninggalan masa lalu dengan kebersihan rasa (*clean cup*) yang luar biasa jernih.',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Moanemani (Dogiyai & Paniai)',
    subRegion: 'Kabupaten Dogiyai, Wilayah Adat Meepago, Papua Tengah',
    island: 'Papua',
    altitude: '1.500 – 1.900 mdpl',
    varieties: 'Typica Papua, Bourbon',
    processing: 'Fully Washed, Honey Process Organik',
    flavorNotes: 'Raw cane sugar, citrus bergamot, floral jasmine, subtle cardamom, silky lingering aftertaste',
    description: 'Dikelola oleh koperasi masyarakat adat Mee di ketinggian sejuk pegunungan tengah Papua. Cita rasa manis tebu murni dengan sentuhan floral bergamot yang sangat langka.',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=80',
  },
];

function ToolsPageContent() {
  const searchParams = useSearchParams();
  const [activeTool, setActiveTool] = useState<ToolId>('calculator');
  const [isSwitcherOpen, setIsSwitcherOpen] = useState<boolean>(false);
  const [selectedIsland, setSelectedIsland] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Sync with ?tab= or ?tool= URL parameter
  useEffect(() => {
    const tabParam = searchParams.get('tab') || searchParams.get('tool');
    if (tabParam && TOOLS_CATALOG.some((t) => t.id === tabParam)) {
      setActiveTool(tabParam as ToolId);
    }
  }, [searchParams]);

  const activeToolDef = useMemo(() => {
    return TOOLS_CATALOG.find((t) => t.id === activeTool) || TOOLS_CATALOG[0];
  }, [activeTool]);

  const activeDomain = useMemo(() => {
    return TOOL_DOMAINS.find((d) => d.id === activeToolDef.domainId) || TOOL_DOMAINS[0];
  }, [activeToolDef]);

  const domainTools = useMemo(() => {
    return TOOLS_CATALOG.filter((t) => t.domainId === activeDomain.id);
  }, [activeDomain]);

  const handleSelectTool = (toolId: ToolId) => {
    setActiveTool(toolId);
    setIsSwitcherOpen(false);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', toolId);
      window.history.replaceState({}, '', url.toString());
    }
  };

  const handleSelectDomain = (domainId: ToolDomainId) => {
    const firstToolInDomain = TOOLS_CATALOG.find((t) => t.domainId === domainId);
    if (firstToolInDomain) {
      handleSelectTool(firstToolInDomain.id);
    }
  };

  const islands = ['Semua', 'Sumatra', 'Jawa', 'Bali & Nusa Tenggara', 'Sulawesi', 'Papua'];

  const filteredRegions = useMemo(() => {
    return INDONESIAN_REGIONS.filter((region) => {
      const matchIsland = selectedIsland === 'Semua' || region.island === selectedIsland;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchIsland;

      const matchText =
        region.name.toLowerCase().includes(query) ||
        region.subRegion.toLowerCase().includes(query) ||
        region.flavorNotes.toLowerCase().includes(query) ||
        region.varieties.toLowerCase().includes(query) ||
        region.processing.toLowerCase().includes(query);

      return matchIsland && matchText;
    });
  }, [selectedIsland, searchQuery]);

  const ActiveIcon = activeToolDef.icon;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Header Section */}
      <div className="border-b border-paper-300 pb-6 mb-6 sm:mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-widest font-bold bg-cherry-100 text-cherry-900 border border-cherry-200">
                15 INSTRUMEN RESMI
              </span>
              <span className="text-[10px] font-mono text-roast-500">Standar SCA & CQI</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-roast-950 tracking-tight">
              Laboratorium Seduh & Riset Kopi
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-roast-700 max-w-2xl leading-relaxed">
              Instrumen presisi untuk kalibrasi seduhan di bar atau meja uji, leksikon roda rasa SCA, kompendium botani varietas kopi, formulasi air mineral, dan lembar cupping digital.
            </p>
          </div>

          {/* Quick Catalogue Action Button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsSwitcherOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2.5 bg-paper-100 hover:bg-paper-200 border border-paper-300 rounded-xl text-roast-900 font-mono text-xs font-semibold shadow-2xs transition-all w-full sm:w-auto justify-center"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-cherry-700" />
              <span>Semua Instrumen ({TOOLS_CATALOG.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Domain Architecture */}
      <div className="space-y-3 mb-6 sm:mb-8">
        {/* Tier 1: 3 Major Functional Domains */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {TOOL_DOMAINS.map((domain) => {
            const isDomainActive = activeDomain.id === domain.id;
            const DomainIcon = domain.icon;
            return (
              <button
                key={domain.id}
                onClick={() => handleSelectDomain(domain.id)}
                className={`p-2.5 sm:p-3.5 rounded-xl border text-left transition-all relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-2 ${
                  isDomainActive
                    ? 'bg-roast-950 text-paper-50 border-roast-950 shadow-sm ring-1 ring-roast-950'
                    : 'bg-paper-100/80 text-roast-800 border-paper-300 hover:bg-paper-200/90'
                }`}
              >
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isDomainActive ? 'bg-roast-900 text-crema-300' : 'bg-paper-200 text-roast-600'
                    }`}
                  >
                    <DomainIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span
                      className={`text-[11px] sm:text-xs font-serif font-bold truncate block leading-tight ${
                        isDomainActive ? 'text-paper-50' : 'text-roast-950'
                      }`}
                    >
                      {domain.name}
                    </span>
                    <span
                      className={`text-[9px] sm:text-[10px] font-mono hidden sm:block ${
                        isDomainActive ? 'text-paper-300' : 'text-roast-500'
                      }`}
                    >
                      {domain.count}
                    </span>
                  </div>
                </div>
                {isDomainActive && (
                  <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-crema-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tier 2: Sub-Instrument Pills for Current Domain (Wraps Cleanly, No Cut-Off) */}
        <div className="bg-paper-100/60 border border-paper-300/80 rounded-xl p-2 sm:p-2.5">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-roast-500 px-2 py-1 hidden sm:inline-block">
              PILIH ALAT:
            </span>
            {domainTools.map((tool) => {
              const isToolActive = activeTool === tool.id;
              const ToolIcon = tool.icon;
              return (
                <button
                  key={tool.id}
                  onClick={() => handleSelectTool(tool.id)}
                  className={`flex-1 sm:flex-initial px-3 sm:px-3.5 py-2 rounded-lg font-sans text-xs tracking-wide transition-all flex items-center justify-center sm:justify-start gap-2 ${
                    isToolActive
                      ? 'bg-roast-950 text-paper-50 font-bold shadow-xs'
                      : 'bg-paper-50 text-roast-700 hover:text-roast-950 hover:bg-paper-200/90 border border-paper-300/70'
                  }`}
                >
                  <ToolIcon className={`w-3.5 h-3.5 ${isToolActive ? 'text-crema-300' : 'text-roast-500'}`} />
                  <span className="leading-tight">{tool.shortLabel}</span>
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.2 rounded hidden md:inline-block ${
                      isToolActive ? 'bg-roast-800 text-paper-200' : 'bg-paper-200 text-roast-600'
                    }`}
                  >
                    {tool.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Instrument Context Banner */}
      <div className="mb-6 bg-paper-100/80 border border-paper-300 rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-roast-950 text-paper-50 flex items-center justify-center shrink-0">
            <ActiveIcon className="w-5 h-5 text-crema-300" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-[9px] uppercase tracking-wider text-cherry-700 font-bold">
                [ DOMAIN: {activeDomain.name.toUpperCase()} ]
              </span>
              <span className="text-[10px] text-roast-400">•</span>
              <span className="text-[10px] font-mono text-roast-600 bg-paper-200/80 px-2 py-0.5 rounded">
                {activeToolDef.badge}
              </span>
            </div>
            <h2 className="font-serif font-bold text-base sm:text-lg text-roast-950 leading-snug">
              {activeToolDef.label}
            </h2>
            <p className="font-sans text-xs text-roast-600 line-clamp-1 sm:line-clamp-none">
              {activeToolDef.tagline}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <button
            onClick={() => setIsSwitcherOpen(true)}
            className="px-2.5 py-1.5 bg-paper-50 hover:bg-paper-200 border border-paper-300 text-roast-800 rounded-lg font-mono text-xs flex items-center gap-1.5 transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-cherry-700" />
            <span>Katalog Lengkap</span>
          </button>
        </div>
      </div>

      {/* Switcher Modal / Bottom Sheet */}
      {isSwitcherOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-roast-950/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="bg-paper-50 w-full max-w-2xl rounded-2xl border border-paper-300 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-paper-300 flex items-center justify-between bg-paper-100">
              <div className="flex items-center gap-2.5">
                <SlidersHorizontal className="w-4 h-4 text-cherry-700" />
                <div>
                  <h3 className="font-serif font-bold text-base text-roast-950">
                    Katalog Laboratorium Seduh
                  </h3>
                  <p className="font-sans text-xs text-roast-500">
                    Pilih instrumen presisi yang ingin Anda gunakan
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsSwitcherOpen(false)}
                className="p-1.5 text-roast-500 hover:text-roast-950 rounded-lg hover:bg-paper-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Grouped by Domains */}
            <div className="p-5 overflow-y-auto space-y-6">
              {TOOL_DOMAINS.map((domain) => {
                const toolsInDomain = TOOLS_CATALOG.filter((t) => t.domainId === domain.id);
                const DomainIcon = domain.icon;
                return (
                  <div key={domain.id} className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <DomainIcon className="w-4 h-4 text-cherry-700" />
                      <h4 className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold">
                        {domain.name} ({toolsInDomain.length})
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {toolsInDomain.map((tool) => {
                        const isSelected = activeTool === tool.id;
                        const ToolIcon = tool.icon;
                        return (
                          <button
                            key={tool.id}
                            onClick={() => handleSelectTool(tool.id)}
                            className={`p-3 rounded-xl border text-left transition-all flex items-start justify-between gap-3 ${
                              isSelected
                                ? 'bg-roast-950 text-paper-50 border-roast-950 shadow-xs'
                                : 'bg-paper-100/70 hover:bg-paper-200/90 text-roast-800 border-paper-300'
                            }`}
                          >
                            <div className="flex items-start gap-2.5">
                              <div
                                className={`p-2 rounded-lg mt-0.5 shrink-0 ${
                                  isSelected
                                    ? 'bg-roast-900 text-crema-300'
                                    : 'bg-paper-200 text-roast-700'
                                }`}
                              >
                                <ToolIcon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <span
                                    className={`font-serif font-bold text-xs ${
                                      isSelected ? 'text-paper-50' : 'text-roast-950'
                                    }`}
                                  >
                                    {tool.label}
                                  </span>
                                </div>
                                <p
                                  className={`text-[11px] font-sans line-clamp-2 mt-0.5 leading-relaxed ${
                                    isSelected ? 'text-paper-300' : 'text-roast-600'
                                  }`}
                                >
                                  {tool.tagline}
                                </p>
                              </div>
                            </div>
                            {isSelected ? (
                              <Check className="w-4 h-4 text-crema-300 shrink-0 mt-1" />
                            ) : (
                              <ArrowRight className="w-4 h-4 text-roast-400 shrink-0 mt-1 opacity-0 group-hover:opacity-100" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-paper-300 bg-paper-100 flex items-center justify-between text-xs text-roast-500 font-mono">
              <span>SCA & CQI Technical Standards</span>
              <button
                onClick={() => setIsSwitcherOpen(false)}
                className="px-3 py-1 bg-roast-950 text-paper-50 rounded text-xs font-bold"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content */}
      {activeTool === 'calculator' && <BrewCalculator />}
      {activeTool === 'grinder-converter' && <GrinderConverter />}
      {activeTool === 'coffee-compass' && <CoffeeCompass />}
      {activeTool === 'cup-anatomy' && <CupAnatomyVisualizer />}
      {activeTool === 'blend-designer' && <BlendDesigner />}
      {activeTool === 'roast-simulator' && <RoastingSimulator />}
      {activeTool === 'espresso-dial' && <EspressoDialIn />}
      {activeTool === 'water-lab' && <WaterCalculator />}
      {activeTool === 'flavor-wheel' && <FlavorWheel />}
      {activeTool === 'local-lexicon' && <LocalFlavorLexicon />}
      {activeTool === 'cupping-sheet' && <SCACuppingForm />}
      {activeTool === 'green-defects' && <GreenDefectTrainer />}
      {activeTool === 'harvest-calendar' && <HarvestCalendar />}
      {activeTool === 'varieties' && <VarietyCompendium />}

      {activeTool === 'atlas' && (
        <div className="space-y-8">
          {/* Header Description */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-2 border-cherry-700 pl-4 py-1">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-semibold block">
                [ AGROCLIMATIC COMPENDIUM NUSANTARA ]
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-roast-950">
                Peta Karakteristik Origin Kopi Indonesia (19 Wilayah Utama)
              </h3>
              <p className="font-sans text-xs text-roast-600 mt-1 max-w-2xl">
                Dokumentasi terperinci elevasi tanah vulkanik, iklim mikro, varietas botani dominan, metode pasca panen lokal, dan profil cangkir khas dari Sabang sampai Merauke.
              </p>
            </div>
            <div className="font-mono text-xs text-roast-600 bg-paper-100 px-3 py-1.5 border border-paper-300 rounded self-start md:self-auto">
              Total Spesimen: <strong className="text-roast-950">{filteredRegions.length}</strong> dari {INDONESIAN_REGIONS.length} Wilayah
            </div>
          </div>

          {/* Search & Island Filters */}
          <div className="bg-paper-100/70 border border-paper-300 p-4 rounded-lg space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-roast-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari berdasarkan nama origin, varietas (Typica, Sigarar Utang), rasa (jasmine, berry)..."
                  className="w-full pl-9 pr-4 py-2 bg-paper-50 border border-paper-300 rounded text-xs text-roast-900 placeholder-roast-400 focus:outline-none focus:border-roast-800 font-sans"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-roast-400 hover:text-roast-700 text-xs font-mono"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Island Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-paper-200">
              <span className="font-mono text-[10px] uppercase text-roast-500 mr-2 flex items-center gap-1">
                <Filter className="w-3 h-3 text-roast-400" /> Filter Pulau:
              </span>
              {islands.map((island) => (
                <button
                  key={island}
                  onClick={() => setSelectedIsland(island)}
                  className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-all border ${
                    selectedIsland === island
                      ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold shadow-xs'
                      : 'bg-paper-50 text-roast-700 border-paper-300 hover:border-roast-600'
                  }`}
                >
                  {island}
                </button>
              ))}
            </div>
          </div>

          {/* Empty State */}
          {filteredRegions.length === 0 && (
            <div className="text-center py-16 bg-paper-50 border border-dashed border-paper-300 rounded-lg">
              <Compass className="w-8 h-8 text-roast-400 mx-auto mb-2" />
              <p className="font-serif text-base text-roast-900 font-bold">Tidak ada origin yang cocok</p>
              <p className="font-sans text-xs text-roast-500 mt-1">
                Coba ubah kata kunci pencarian atau reset filter pulau.
              </p>
              <button
                onClick={() => {
                  setSelectedIsland('Semua');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-1.5 bg-roast-950 text-paper-50 text-xs font-mono uppercase tracking-wider rounded"
              >
                Reset Filter & Pencarian
              </button>
            </div>
          )}

          {/* Atlas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRegions.map((region, idx) => (
              <div
                key={idx}
                className="bg-paper-50 border border-paper-300 overflow-hidden hover:border-roast-900/60 transition-all flex flex-col shadow-subtle group"
              >
                <div className="relative h-48 bg-roast-950 overflow-hidden">
                  <img
                    src={region.imageUrl}
                    alt={region.name}
                    className="w-full h-full object-cover filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-roast-950/95 via-roast-950/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-paper-50">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-crema-300 block font-semibold">
                      [ GUGUSAN: {region.island} ]
                    </span>
                    <h4 className="font-serif text-xl font-bold text-paper-50 leading-tight">{region.name}</h4>
                    <span className="text-[11px] text-paper-200 font-sans block mt-0.5 opacity-90">
                      {region.subRegion}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3 font-sans text-xs flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-baseline border-b border-paper-200 pb-1.5">
                      <span className="font-mono text-[10px] uppercase text-roast-500 flex items-center gap-1">
                        <Mountain className="w-3 h-3 text-roast-400" /> Elevasi Tanam:
                      </span>
                      <span className="font-mono font-bold text-roast-900">{region.altitude}</span>
                    </div>

                    <div className="border-b border-paper-200 pb-1.5">
                      <span className="font-mono text-[10px] uppercase text-roast-500 block mb-0.5 flex items-center gap-1">
                        <Layers className="w-3 h-3 text-roast-400" /> Varietas Botani:
                      </span>
                      <span className="text-roast-800 font-medium">{region.varieties}</span>
                    </div>

                    <div className="border-b border-paper-200 pb-1.5">
                      <span className="font-mono text-[10px] uppercase text-roast-500 block mb-0.5">
                        Metode Pasca Panen:
                      </span>
                      <span className="text-roast-800 font-medium">{region.processing}</span>
                    </div>

                    <div className="pt-1">
                      <p className="text-[11px] text-roast-600 leading-relaxed font-sans line-clamp-2">
                        {region.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-paper-300 bg-paper-100/50 -mx-5 -mb-5 p-4 mt-3">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-cherry-700 block mb-1 font-bold">
                      [ SENSORY NOTES / CUPPING PROFILE ]
                    </span>
                    <p className="font-serif italic text-roast-950 text-xs leading-relaxed font-medium">
                      &ldquo;{region.flavorNotes}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ToolsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center font-mono text-xs text-roast-500 space-y-2">
          <div className="w-8 h-8 rounded-full border-2 border-cherry-700 border-t-transparent animate-spin mx-auto" />
          <span>Memuat Laboratorium Seduh & Riset Kopi...</span>
        </div>
      }
    >
      <ToolsPageContent />
    </Suspense>
  );
}
