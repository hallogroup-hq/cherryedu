'use client';

import { useState, useMemo } from "react";
import {
  Search,
  Sparkles,
  Layers,
  MapPin,
  FlaskConical,
  ChevronRight,
  Filter,
} from "lucide-react";

export interface LocalFlavorItem {
  id: string;
  name: string;
  category: 'fruit' | 'sugar' | 'spice' | 'fermentation';
  categoryLabel: string;
  wcrEquivalent: string;
  chemicalAcid: string;
  sensoryDescription: string;
  palateMemoryCue: string;
  calibrationRecipe: {
    ingredients: string;
    instructions: string;
    targetSensation: string;
  };
  typicalOrigins: string[];
  colorAccent: string;
  intensity: 'Delicate' | 'Medium' | 'Pronounced';
}

export const LOCAL_FLAVORS_DATA: LocalFlavorItem[] = [
  // 1. BUAH TROPIS
  {
    id: 'salak-pondoh',
    name: 'Salak Pondoh Sleman',
    category: 'fruit',
    categoryLabel: 'Buah Tropis',
    wcrEquivalent: 'Crisp Green Apple / Anjou Pear / Tannin-rich Stone Fruit',
    chemicalAcid: 'Asam Malat & Sedikit Asam Suksinat',
    sensoryDescription:
      'Sensasi asam renyah juicy yang diiringi rasa manis pekat dan sedikit sensasi kesat (astringent lembut) khas kulit buah berbiji.',
    palateMemoryCue:
      'Rasa gigitan pertama salak pondoh matang pohon di lereng Merapi: renyah, berair, asam segar yang bersih di langit-langit mulut.',
    calibrationRecipe: {
      ingredients: '15 gram irisan tipis salak pondoh matang + 100 ml air mineral hangat (50°C).',
      instructions:
        'Seduh irisan salak dalam air hangat selama 5 menit, lalu saring cairannya. Cicipi saat suhu turun ke 40°C.',
      targetSensation:
        'Latih lidah mengenali keasaman malat yang renyah tanpa rasa masam tajam, persis seperti kopi Flores Bajawa Washed.',
    },
    typicalOrigins: ['Flores Bajawa Washed', 'Java Sindoro Washed', 'Bali Kintamani Washed'],
    colorAccent: '#B45309',
    intensity: 'Medium',
  },
  {
    id: 'nangka-cempedak',
    name: 'Nangka Masak & Cempedak',
    category: 'fruit',
    categoryLabel: 'Buah Tropis',
    wcrEquivalent: 'Jackfruit / Ripe Papaya / Tropical Esters',
    chemicalAcid: 'Etil Butirat (Ester Buah) & Asam Sitrat Lembut',
    sensoryDescription:
      'Aroma eksotis yang sangat harum dan manis pekat legit, memberikan ilusi viskositas body yang licin dan mewah di cangkir.',
    palateMemoryCue:
      'Aroma manis semerbak nangka masak pohon yang baru dibelah, wangi buah tropis matang yang mengisi seluruh ruangan.',
    calibrationRecipe: {
      ingredients: '10 gram daging nangka matang dihaluskan + 150 ml air hangat.',
      instructions:
        'Aduk nangka hingga larut sebagian, diamkan 3 menit, ambil sesendok kalibrasi aroma tanpa menelan ampasnya.',
      targetSensation:
        'Mengenali aroma ester buah tropis yang muncul pada lot kopi fermentasi anaerobik alami atau ceri terfermentasi lambat.',
    },
    typicalOrigins: ['Aceh Gayo Anaerobic Natural', 'Bali Kintamani Natural', 'Flores Manggarai Anaerobic'],
    colorAccent: '#D97706',
    intensity: 'Pronounced',
  },
  {
    id: 'sirsak-ratu',
    name: 'Sirsak Ratu Matang',
    category: 'fruit',
    categoryLabel: 'Buah Tropis',
    wcrEquivalent: 'Soursop / Creamy Kiwi / Green Plum',
    chemicalAcid: 'Kombinasi Seimbang Asam Sitrat & Asam Malat',
    sensoryDescription:
      'Asam segar yang berpadu dengan kelembutan tekstur creamy. Tidak menusuk, melainkan memberikan sensasi juicy menyegarkan.',
    palateMemoryCue:
      'Jus sirsak murni tanpa gula: asam asam kecut segar tapi ada kelembutan krim susu di bagian akhir.',
    calibrationRecipe: {
      ingredients: '1 sendok teh air perasan sirsak murni + 120 ml air seduhan filter kopi netral.',
      instructions:
        'Teteskan sari sirsak ke dalam air mineral hangat, rasakan di lidah bagian samping untuk melatih persepsi asam buah.',
      targetSensation: 'Mendeteksi profil asam tart-creamy yang umum pada kopi honey process Jawa Barat.',
    },
    typicalOrigins: ['West Java Preanger Yellow Honey', 'Sumatra Kerinci Washed', 'Toraja Sapan'],
    colorAccent: '#65A30D',
    intensity: 'Medium',
  },
  {
    id: 'jeruk-pontianak',
    name: 'Jeruk Manis Pontianak',
    category: 'fruit',
    categoryLabel: 'Buah Tropis',
    wcrEquivalent: 'Mandarin Orange / Sweet Clementine / Tangerine',
    chemicalAcid: 'Asam Sitrat Dominan dengan Gula Fruktosa Alami',
    sensoryDescription:
      'Karakter sitrus manis berair dengan kilauan minyak atsiri kulit jeruk yang menyegarkan di hidung (retronasal).',
    palateMemoryCue:
      'Segarnya es jeruk peras Pontianak di siang terik: manis alami tidak asam getir, meninggalkan aroma wangi jeruk di napas.',
    calibrationRecipe: {
      ingredients: '5 ml perasan jeruk Pontianak segar + seujung kuku kulit jeruk yang dipilin ke 100 ml air.',
      instructions:
        'Hirup uapnya saat suhu 55°C untuk mengenali aroma limonene, lalu seruput cepat dengan sendok cupping.',
      targetSensation: 'Kalibrasi keasaman sitrat cerah pada kopi Kintamani dan Gayo varietas Ateng Super.',
    },
    typicalOrigins: ['Bali Kintamani Natural', 'Aceh Gayo Washed', 'Sumatra Kerinci Natural'],
    colorAccent: '#EA580C',
    intensity: 'Pronounced',
  },
  {
    id: 'mangga-gedong',
    name: 'Mangga Gedong Gincu',
    category: 'fruit',
    categoryLabel: 'Buah Tropis',
    wcrEquivalent: 'Juicy Mango / Tropical Stone Fruit / Peach Jam',
    chemicalAcid: 'Asam Malat & Terpen Manis Tropis',
    sensoryDescription:
      'Manis tebal eksotis dengan nuansa madu tropis dan semburat asam buah berbiji kuning kemerahan.',
    palateMemoryCue:
      'Aroma semerbak mangga gedong gincu Indramayu yang ranum kemerahan: manis pekat, juicy, dan wangi semerbak.',
    calibrationRecipe: {
      ingredients: '10 gram daging mangga gedong gincu yang sudah lumat + 100 ml air hangat.',
      instructions: 'Larutkan dan saring. Bandingkan dengan sampel kopi washed ber-elevasi di atas 1.400 mdpl.',
      targetSensation: 'Mengenali sensasi stone fruit tropis yang manis dan pekat di langit-langit mulut.',
    },
    typicalOrigins: ['West Java Tilu Honey', 'Papua Wamena Anaerobic', 'Enrekang Kalosi Washed'],
    colorAccent: '#F59E0B',
    intensity: 'Medium',
  },

  // 2. GULA TRADISIONAL
  {
    id: 'gula-aren-kawung',
    name: 'Gula Aren Asli (Kawung)',
    category: 'sugar',
    categoryLabel: 'Gula Tradisional',
    wcrEquivalent: 'Muscovado / Dark Molasses / Smoked Caramel',
    chemicalAcid: 'Karamelisasi Sukrosa & Senyawa Fenolik Kayu Bakar',
    sensoryDescription:
      'Manis berbobot tebal (heavy body) dengan aksen asap alami dari proses pemasakan nira pohon aren tradisional.',
    palateMemoryCue:
      'Rasa kepingan gula aren batok asli Baduy atau Sukabumi: manis gurih legit dengan aroma wangi asap yang khas.',
    calibrationRecipe: {
      ingredients: '2 gram serutan gula aren murni + 100 ml air panas 70°C.',
      instructions: 'Larutkan sempurna hingga air berwarna cokelat transparan. Cicipi kehangatan rasa manisnya.',
      targetSensation:
        'Mengenali dasar rasa manis kopi espresso dan es kopi susu yang harmonis tanpa membuat lidah enek.',
    },
    typicalOrigins: ['Temanggung Fine Robusta', 'Flores Bajawa Natural', 'Dampit Malang Washed'],
    colorAccent: '#78350F',
    intensity: 'Pronounced',
  },
  {
    id: 'gula-kelapa-jawa',
    name: 'Gula Kelapa / Gula Jawa',
    category: 'sugar',
    categoryLabel: 'Gula Tradisional',
    wcrEquivalent: 'Coconut Sugar / Butterscotch / Light Toffee',
    chemicalAcid: 'Asam Lemak Rantai Sedang & Karamel Lembut',
    sensoryDescription:
      'Rasa manis creamy yang hangat dan bersahabat dengan aroma kelapa panggang lembut dan gurih alami.',
    palateMemoryCue:
      'Kuah kinca serabi atau isi klepon tradisional: manis lembut gurih santan yang menyelimuti lidah.',
    calibrationRecipe: {
      ingredients: '2 gram gula kelapa murni organik + 100 ml air hangat.',
      instructions: 'Aduk rata lalu rasakan sensasi kelembutan tekstur di bagian tengah lidah.',
      targetSensation: 'Memahami karakter sweetness pada kopi-kopi proses washed Jawa Tengah dan Jawa Timur.',
    },
    typicalOrigins: ['Java Ijen Washed', 'Java Preanger Washed', 'Sumatra Simalungun'],
    colorAccent: '#92400E',
    intensity: 'Medium',
  },
  {
    id: 'madu-hutan-odeng',
    name: 'Madu Hutan Liar (Odeng)',
    category: 'sugar',
    categoryLabel: 'Gula Tradisional',
    wcrEquivalent: 'Wild Floral Honey / Honeycomb / Nectar',
    chemicalAcid: 'Asam Glukonat & Fruktosa Murni Hutan',
    sensoryDescription:
      'Manis cair bening yang disusul aroma semerbak bunga-bunga hutan liar dengan sedikit sensasi hangat di tenggorokan.',
    palateMemoryCue:
      'Sendok madu hutan liar sumatra atau ujung kulon: tidak sekadar manis, tapi ada wangi nektar bunga pohon rimba.',
    calibrationRecipe: {
      ingredients: '3 ml madu hutan mentah murni + 120 ml air hangat suam-suam kuku.',
      instructions: 'Larutkan perlahan tanpa air mendidih agar enzim aromatik alami tidak rusak.',
      targetSensation: 'Mendeteksi aftertaste manis berkepanjangan pada kopi Arabica proses yellow honey.',
    },
    typicalOrigins: ['West Java Malabar Honey', 'Sumbawa Tambora Arabica', 'Flores Ngada Washed'],
    colorAccent: '#CA8A04',
    intensity: 'Medium',
  },

  // 3. REMPAH NUSANTARA
  {
    id: 'kayu-manis-kerinci',
    name: 'Kayu Manis Kerinci (Cassia)',
    category: 'spice',
    categoryLabel: 'Rempah Nusantara',
    wcrEquivalent: 'Cassia Cinnamon / Sweet Spice / Allspice',
    chemicalAcid: 'Sinamaldehida & Senyawa Fenolik Hangat',
    sensoryDescription:
      'Sensasi manis pedas lembut yang menyegarkan saluran pernapasan dengan aroma kayu manis kering berkelas dunia.',
    palateMemoryCue:
      'Kulit kayu manis Kerinci yang patah di tangan: manis wangi hangat yang sering kita jumpai di kolak atau kue kayu manis.',
    calibrationRecipe: {
      ingredients: '1 batang kecil (2 cm) kayu manis Kerinci + 150 ml air mendidih.',
      instructions: 'Rendam selama 4 menit, tiriskan batangnya. Hirup uapnya lalu sesap cairannya secara perlahan.',
      targetSensation: 'Mengenali aroma spicy-sweet yang menjadi identitas utama kopi dataran tinggi Sumatra.',
    },
    typicalOrigins: ['Sumatra Kerinci Wet-Hulled', 'Aceh Gayo Full Washed', 'Mandheling Dolok Sanggul'],
    colorAccent: '#854D0E',
    intensity: 'Pronounced',
  },
  {
    id: 'cengkeh-maluku',
    name: 'Cengkeh Maluku',
    category: 'spice',
    categoryLabel: 'Rempah Nusantara',
    wcrEquivalent: 'Clove / Eugenol / Warm Woody Spice',
    chemicalAcid: 'Eugenol Dominan',
    sensoryDescription:
      'Aroma rempah tajam hangat berkelas dengan sedikit sensasi kebas dingin menyenangkan di ujung lidah.',
    palateMemoryCue:
      'Bunga cengkeh kering Maluku: aroma tajam aromatik yang mengingatkan pada kekayaan sejarah rempah kepulauan nusantara.',
    calibrationRecipe: {
      ingredients: '1 butir cengkeh utuh dicelupkan ke 100 ml air mendidih selama 60 detik saja lalu diangkat.',
      instructions: 'Konsentrasi harus sangat rendah agar tidak mendominasi, melatih kepekaan hidung terhadap eugenol.',
      targetSensation: 'Mendeteksi jejak rempah kompleks pada kopi wet-hulled tua atau sangrai medium-dark.',
    },
    typicalOrigins: ['Aceh Gayo Wet-Hulled', 'Flores Manggarai', 'Sulawesi Toraja'],
    colorAccent: '#581C87',
    intensity: 'Pronounced',
  },
  {
    id: 'pandan-wangi',
    name: 'Daun Pandan Wangi',
    category: 'spice',
    categoryLabel: 'Rempah Nusantara',
    wcrEquivalent: 'Pandan Leaf / Basmati Rice / Green Vanilla',
    chemicalAcid: '2-Asetil-1-Pirolin (2-AP)',
    sensoryDescription:
      'Wangi herbal manis menenangkan yang mengingatkan pada aroma kue tradisional dan beras pulen yang baru tanak.',
    palateMemoryCue:
      'Daun pandan yang diremas di telapak tangan saat ibu memasak kolak atau nasi uduk: wangi manis hijau yang lembut.',
    calibrationRecipe: {
      ingredients: 'Sepotong kecil daun pandan segar yang disimpul + diseduh air 80°C selama 3 menit.',
      instructions: 'Hirup aromanya dengan mata tertutup untuk mematri memori sensori aroma 2-AP.',
      targetSensation: 'Mengenali aroma herbal manis yang muncul pada lot kopi Geisha atau Typica lokal bermutu tinggi.',
    },
    typicalOrigins: ['Java Sindoro Anaerobic', 'Bali Wanagiri Washed', 'Aceh Gayo Pantan Musara'],
    colorAccent: '#16A34A',
    intensity: 'Delicate',
  },

  // 4. FERMENTASI & TERROIR
  {
    id: 'tape-ketan',
    name: 'Tape Ketan / Peuyeum',
    category: 'fermentation',
    categoryLabel: 'Fermentasi & Terroir',
    wcrEquivalent: 'Fermented Winey / Mild Acetic / Yeast Ferment',
    chemicalAcid: 'Asam Laktat, Etanol Lembut & Asam Asetat Rendah',
    sensoryDescription:
      'Perpaduan asam manis ragi tradisional dengan sentuhan aroma fermentasi beras ketan yang harum memikat.',
    palateMemoryCue:
      'Aroma manis menyengat dari bungkus daun pisang tape ketan hijau: manis beralkohol lembut, asam segar.',
    calibrationRecipe: {
      ingredients: '5 gram air tape ketan bening + 100 ml air mineral.',
      instructions: 'Larutkan dan cicipi dingin untuk membedakan fermentasi yang bersih dari cacat over-fermented.',
      targetSensation:
        'Memahami batas toleransi fermentasi winey alami yang menyenangkan vs pembusukan ceri busuk (sour defect).',
    },
    typicalOrigins: ['Aceh Gayo Wine Process', 'Java Preanger Anaerobic Natural', 'Temanggung Natural'],
    colorAccent: '#9333EA',
    intensity: 'Pronounced',
  },
  {
    id: 'giling-basah-terroir',
    name: 'Giling Basah (Wet Hulled) Terroir',
    category: 'fermentation',
    categoryLabel: 'Fermentasi & Terroir',
    wcrEquivalent: 'Cedar Wood / Earthy Petrichor / Dried Tobacco / Dark Tea',
    chemicalAcid: 'Humic & Fulvic Terpenoids (Mikrobioma Tanah Basah)',
    sensoryDescription:
      'Aroma tanah basah tersiram hujan (petrichor), kayu cedar tua, lumut hutan pegunungan, dan daun tembakau kering yang syahdu.',
    palateMemoryCue:
      'Berjalan di tengah kebun kopi pegunungan Takengon setelah hujan lebat: aroma tanah humus hitam basah berpadu kayu pinus.',
    calibrationRecipe: {
      ingredients: 'Seduhan kopi Gayo proses Giling Basah klasik dengan rasio 1:15 air 93°C.',
      instructions: 'Amati karakter bodi yang sangat tebal dan aftertaste kayu manis rempah yang panjang.',
      targetSensation: 'Mengapresiasi terroir unik asli Indonesia yang tidak dapat direplikasi di benua manapun.',
    },
    typicalOrigins: ['Aceh Gayo Wet-Hulled', 'Mandheling Lintong', 'Toraja Kalosi Wet-Hulled'],
    colorAccent: '#1E293B',
    intensity: 'Pronounced',
  },
];

export function LocalFlavorLexicon() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItem, setActiveItem] = useState<LocalFlavorItem>(LOCAL_FLAVORS_DATA[0]);
  const [showWCRComparison, setShowWCRComparison] = useState<boolean>(true);

  // Filtered List
  const filteredFlavors = useMemo(() => {
    return LOCAL_FLAVORS_DATA.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchCat;

      const matchQuery =
        item.name.toLowerCase().includes(q) ||
        item.wcrEquivalent.toLowerCase().includes(q) ||
        item.sensoryDescription.toLowerCase().includes(q) ||
        item.typicalOrigins.some((o) => o.toLowerCase().includes(q));

      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-8 font-sans animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-paper-100/80 border border-paper-300 rounded-2xl p-5 sm:p-7 shadow-xs relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cherry-700/5 blur-3xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-cherry-800 font-bold">
                Indonesian Palate Sensory Wheel
              </span>
              <span className="font-mono text-xs text-roast-400">• Leksikon Rasa Otentik Nusantara</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-roast-950 tracking-tight">
              Leksikon Rasa Kopi Lokal Nusantara
            </h2>
            <p className="text-xs sm:text-sm text-roast-600 max-w-2xl leading-relaxed">
              Kamus kalibrasi sensori berbasis memori rasa nusantara. Menggantikan deskriptor asing (blackcurrant, rhubarb, marshmallow) dengan buah tropis, gula tradisional, rempah lokal, dan profil kimia asam organik yang akurat bagi lidah Indonesia.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto">
            <button
              onClick={() => setShowWCRComparison(!showWCRComparison)}
              className={`px-3.5 py-2 rounded-xl border font-mono text-xs font-semibold flex items-center gap-2 transition-all active:scale-[0.98] ${
                showWCRComparison
                  ? 'bg-roast-950 text-paper-50 border-roast-950 shadow-xs'
                  : 'bg-paper-50 text-roast-800 border-paper-300 hover:bg-paper-200'
              }`}
            >
              <FlaskConical className="w-3.5 h-3.5 text-crema-300" />
              <span>{showWCRComparison ? 'Mode: Komparasi WCR Aktif' : 'Tampilkan Padanan WCR'}</span>
            </button>
          </div>
        </div>

        {/* Filter Chips & Search Bar */}
        <div className="mt-6 pt-5 border-t border-paper-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            {[
              { id: 'all', label: 'Semua Kategori' },
              { id: 'fruit', label: '🥭 Buah Tropis' },
              { id: 'sugar', label: '🥥 Gula Tradisional' },
              { id: 'spice', label: '🌿 Rempah Nusantara' },
              { id: 'fermentation', label: '🍶 Fermentasi & Terroir' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all active:scale-[0.98] ${
                  selectedCategory === tab.id
                    ? 'bg-roast-950 text-paper-50 border-roast-950 shadow-xs'
                    : 'bg-paper-50 hover:bg-paper-200 border-paper-300 text-roast-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-roast-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari rasa, buah, rempah..."
              className="w-full bg-paper-50 border border-paper-300 rounded-lg pl-8 pr-3 py-1.5 text-xs text-roast-950 outline-none focus:border-cherry-700 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Main Content Layout: Flavor Grid (Left) + Detail Dossier & Calibration Lab (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Interactive Cards Grid (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cherry-700" /> Katalog Deskriptor Rasa ({filteredFlavors.length} Item)
            </span>
            <span className="font-mono text-[10px] text-roast-500">Klik kartu untuk membuka resep kalibrasi</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredFlavors.map((item) => {
              const isSelected = activeItem.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between gap-3 group active:scale-[0.98] ${
                    isSelected
                      ? 'bg-paper-50 border-cherry-700 ring-2 ring-cherry-700/20 shadow-md'
                      : 'bg-paper-50 hover:bg-paper-100/90 border-paper-300 shadow-xs'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-roast-500 bg-paper-200/70 px-2 py-0.5 rounded font-semibold">
                        {item.categoryLabel}
                      </span>
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: item.colorAccent }}
                        title={`Intensitas: ${item.intensity}`}
                      />
                    </div>

                    <h3 className="font-serif font-bold text-base text-roast-950 group-hover:text-cherry-800 transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs text-roast-600 line-clamp-2 leading-relaxed">
                      {item.sensoryDescription}
                    </p>
                  </div>

                  {/* WCR / Chemistry Subline */}
                  <div className="pt-2.5 border-t border-paper-200/80 space-y-1">
                    {showWCRComparison && (
                      <div className="flex items-center gap-1 text-[11px] text-roast-500">
                        <span className="font-mono text-[9px] uppercase text-roast-400">WCR:</span>
                        <span className="truncate italic font-serif">{item.wcrEquivalent}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between text-[10px] font-mono text-roast-500">
                      <span className="truncate text-cherry-700 font-medium">{item.chemicalAcid}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-roast-400 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Selected Flavor Dossier & Home Calibration Flight (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Dossier Card */}
          <div className="bg-paper-50 border border-paper-300 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
            <div className="border-b border-paper-200 pb-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-cherry-800 font-bold">
                  {activeItem.categoryLabel} • {activeItem.intensity} Intensity
                </span>
                <span className="font-mono text-xs text-roast-500">ID: #{activeItem.id}</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-roast-950">
                {activeItem.name}
              </h3>

              <div className="p-3 rounded-xl bg-paper-100/80 border border-paper-200 space-y-1">
                <span className="font-mono text-[10px] uppercase text-roast-500 block font-semibold">
                  Memori Rasa Lidah Nusantara (Sensory Cue):
                </span>
                <p className="font-serif italic text-xs text-roast-900 leading-relaxed">
                  &ldquo;{activeItem.palateMemoryCue}&rdquo;
                </p>
              </div>
            </div>

            {/* Scientific & Organic Chemistry Profile */}
            <div className="space-y-3 text-xs">
              <span className="font-mono text-xs uppercase tracking-wider text-roast-900 font-bold flex items-center gap-1.5">
                <FlaskConical className="w-4 h-4 text-cherry-700" /> Profil Kimia & Korelasi Internasional
              </span>

              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-paper-100/60 border border-paper-200 flex justify-between items-baseline">
                  <span className="font-mono text-[11px] text-roast-500">Korelasi Asam / Kimia:</span>
                  <span className="font-mono font-bold text-roast-900 text-right text-xs">
                    {activeItem.chemicalAcid}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-paper-100/60 border border-paper-200 flex justify-between items-baseline">
                  <span className="font-mono text-[11px] text-roast-500">Padanan WCR / SCA:</span>
                  <span className="font-serif italic text-roast-800 text-right text-xs max-w-[200px]">
                    {activeItem.wcrEquivalent}
                  </span>
                </div>
              </div>
            </div>

            {/* Typical Indonesian Origins */}
            <div className="space-y-2 pt-2 border-t border-paper-200">
              <span className="font-mono text-[10px] uppercase text-roast-500 block font-semibold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cherry-700" /> Sering Ditemukan Pada Origin Kopi:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeItem.typicalOrigins.map((origin, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-roast-950 text-paper-50 text-xs font-serif font-medium"
                  >
                    {origin}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* DIY Sensory Calibration Recipe Card */}
          <div className="bg-roast-950 text-paper-50 rounded-2xl p-5 sm:p-6 shadow-md space-y-4 border border-roast-800">
            <div className="flex items-center justify-between border-b border-roast-800 pb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-crema-300 font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-crema-400" /> Resep Kalibrasi Sensorik Mandiri
              </span>
              <span className="font-mono text-[9px] text-roast-400 bg-roast-900 px-2 py-0.5 rounded">
                Protokol Lab Mandiri
              </span>
            </div>

            <div className="space-y-3 text-xs leading-relaxed">
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase text-roast-400 block">Bahan Kalibrasi:</span>
                <p className="font-medium text-paper-100">{activeItem.calibrationRecipe.ingredients}</p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase text-roast-400 block">Langkah Preparasi:</span>
                <p className="text-roast-300 font-sans">{activeItem.calibrationRecipe.instructions}</p>
              </div>

              <div className="p-3 rounded-xl bg-roast-900/80 border border-roast-800 space-y-1">
                <span className="font-mono text-[10px] uppercase text-crema-300 block font-semibold">
                  Target Persepsi Lidah:
                </span>
                <p className="font-serif italic text-paper-100 text-xs">
                  {activeItem.calibrationRecipe.targetSensation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
