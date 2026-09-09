'use client';

import React, { useState, useMemo } from 'react';
import { BrewCalculator } from '@/components/BrewCalculator';
import { FlavorWheel } from '@/components/FlavorWheel';
import { VarietyCompendium } from '@/components/VarietyCompendium';
import { EspressoDialIn } from '@/components/EspressoDialIn';
import { WaterCalculator } from '@/components/WaterCalculator';
import { SCACuppingForm } from '@/components/SCACuppingForm';
import { AudioNarrationPlayer } from '@/components/AudioNarrationPlayer';
import { Wrench, Compass, Coffee, MapPin, Sparkles, Search, Filter, Mountain, Layers, Tag, GitFork, Gauge, Droplets, ClipboardCheck, Headphones } from 'lucide-react';

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
  // --- SUMATRA ---
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

  // --- JAWA ---
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

  // --- BALI & NUSA TENGGARA ---
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

  // --- SULAWESI ---
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

  // --- PAPUA ---
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

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<
    'calculator' | 'flavor-wheel' | 'listen-brew' | 'atlas' | 'varieties' | 'espresso-dial' | 'water-lab' | 'cupping-sheet'
  >('calculator');
  const [selectedIsland, setSelectedIsland] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

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

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="border-b border-paper-300 pb-6 mb-6">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-roast-950 tracking-tight">
          Laboratorium Seduh & Atlas Nusantara
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-roast-700 max-w-2xl leading-relaxed">
          Kompilasi instrumen presisi untuk kalibrasi seduhan di bar atau meja uji, leksikon sensori SCA, ensiklopedia botani varietas kopi, dial-in espresso, formulasi air seduh, serta lembar evaluasi cupping digital.
        </p>
      </div>

      {/* Navigation Tabs - Clean Sleek Horizontal Scrollable */}
      <div className="border-b border-paper-300 mb-8 pb-1">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'calculator', label: 'Kalkulator Rasio', icon: Coffee },
            { id: 'flavor-wheel', label: 'Sensory Flavor Wheel', icon: Compass },
            { id: 'listen-brew', label: 'Listen & Brew', icon: Headphones },
            { id: 'atlas', label: `Atlas Origin (${INDONESIAN_REGIONS.length})`, icon: MapPin },
            { id: 'varieties', label: 'Ensiklopedia Varietas', icon: GitFork },
            { id: 'espresso-dial', label: 'Espresso Dial-In', icon: Gauge },
            { id: 'water-lab', label: 'Water Lab', icon: Droplets },
            { id: 'cupping-sheet', label: 'SCA Cupping Sheet', icon: ClipboardCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-lg font-sans text-xs tracking-wide transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-roast-950 text-paper-50 font-bold shadow-xs'
                    : 'bg-paper-100/70 text-roast-700 hover:text-roast-950 hover:bg-paper-200 border border-paper-300/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-crema-300' : 'text-roast-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'calculator' && <BrewCalculator />}
      {activeTab === 'flavor-wheel' && <FlavorWheel />}

      {activeTab === 'listen-brew' && (
        <div className="bg-paper-50 rounded-xl border border-paper-300 p-6 sm:p-8 shadow-subtle space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-paper-300">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold bg-cherry-50 px-2 py-0.5 border border-cherry-200">
                  AUDIO COMPANION STUDIO
                </span>
                <span className="font-mono text-[10px] text-roast-500">SAMPLE SUARA NARATOR AKTIF</span>
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-roast-950">
                Mode Audio Narasi "Listen & Brew"
              </h3>
              <p className="text-xs sm:text-sm text-roast-600 mt-1 max-w-xl font-sans leading-relaxed">
                Dengarkan panduan materi edukasi kopi sambil menyeduh langsung di meja bar tanpa perlu terus-menerus menatap layar perangkat.
              </p>
            </div>
            <div className="font-mono text-xs text-cherry-800 bg-cherry-50 px-3 py-1.5 border border-cherry-200 rounded self-start sm:self-auto font-bold">
              🎙️ Voice Sample Loaded
            </div>
          </div>

          <AudioNarrationPlayer
            title="Sesi Seduh Praktis: Kalibrasi Pour Over V60 & Cupping Sensori"
            rawMarkdown={`Panduan penyeduhan kopi manual brew V60 dengan rasio 1:15. Persiapkan 15 gram bubuk kopi dengan gilingan medium-fine, air bertemperatur 92 derajat Celsius dengan TDS 120 ppm, serta timbangan digital dengan timer aktif. Tuangkan 45 gram air pertama untuk fase blooming selama 45 detik agar gas karbon dioksida terlepas sempurna. Lanjutkan dengan penuangan kedua secara melingkar halus hingga timbangan menyentuh 150 gram, dan selesaikan penuangan ketiga hingga total 225 gram air.`}
            audioSrc="/audio/sample_narration.mp3"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-paper-200 text-xs">
            <div className="bg-white p-4 rounded-xl border border-paper-200 space-y-1">
              <span className="font-mono text-[10px] uppercase text-roast-400 font-bold block">1. HANDS-FREE WORKFLOW</span>
              <p className="text-roast-700 leading-snug">Barista dan brewer dapat berkonsentrasi penuh pada teknik pouring, agitasi, dan pengamatan flow rate tanpa terganggu layar ponsel.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-paper-200 space-y-1">
              <span className="font-mono text-[10px] uppercase text-roast-400 font-bold block">2. VOICE SAMPLE ASLI</span>
              <p className="text-roast-700 leading-snug">Dilengkapi rekaman sampel suara narasi natural bersuara jernih dengan kontrol kecepatan (0.85x - 1.5x) dan pemutaran interaktif.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-paper-200 space-y-1">
              <span className="font-mono text-[10px] uppercase text-roast-400 font-bold block">3. DUA PILIHAN SUMBER</span>
              <p className="text-roast-700 leading-snug">Bisa beralih sewaktu-waktu antara audio sampel rekaman suara asli dan engine TTS AI otomatis untuk membaca seluruh isi artikel materi.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'atlas' && (
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

      {activeTab === 'varieties' && <VarietyCompendium />}
      {activeTab === 'espresso-dial' && <EspressoDialIn />}
      {activeTab === 'water-lab' && <WaterCalculator />}
      {activeTab === 'cupping-sheet' && <SCACuppingForm />}
    </div>
  );
}
