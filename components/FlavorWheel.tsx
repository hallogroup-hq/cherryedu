'use client';

import React, { useState } from 'react';
import { Compass, Sparkles, Info, Droplets, AlertTriangle, CheckCircle2, ChevronRight, BookOpen, X } from 'lucide-react';

interface FlavorDescriptor {
  name: string;
  wcrReference: string;
  indonesianExample: string;
  originMatch: string;
  sensoryTip: string;
}

interface FlavorSubcategory {
  name: string;
  descriptors: FlavorDescriptor[];
}

interface FlavorCategory {
  id: string;
  name: string;
  color: string;
  bgBadge: string;
  borderColor: string;
  description: string;
  subcategories: FlavorSubcategory[];
}

const SCA_FLAVOR_CATEGORIES: FlavorCategory[] = [
  {
    id: 'fruity',
    name: 'Fruity (Buah-buahan)',
    color: 'text-amber-700',
    bgBadge: 'bg-amber-50 text-amber-800 border-amber-200',
    borderColor: 'border-amber-400',
    description: 'Karakter buah segar, buah kering, dan buah berbiji hasil sintesis asam organik dan ester gula alami selama pematangan ceri.',
    subcategories: [
      {
        name: 'Citrus Fruit (Jeruk)',
        descriptors: [
          {
            name: 'Mandarin Orange / Jeruk Keprok',
            wcrReference: 'Minyak esensial kulit jeruk keprok segar atau jus jeruk manis',
            indonesianExample: 'Keasaman sitrat segar dengan rasa manis alami jeruk keprok matang',
            originMatch: 'Bali Kintamani (Subak Abian intercropping jeruk)',
            sensoryTip: 'Terasa tajam menyenangkan di sisi lidah depan, bertransisi menjadi rasa manis nektar.',
          },
          {
            name: 'Lemon & Lime',
            wcrReference: 'Air perasan lemon murni konsentrasi 0.5%',
            indonesianExample: 'Keasaman renyah sitrun yang membersihkan langit-langit mulut',
            originMatch: 'Aceh Gayo Pantan Musara Fully Washed',
            sensoryTip: 'Menandakan kopi dipetik pada elevasi sangat tinggi (>1.500 mdpl) dengan proses wash bersih.',
          },
          {
            name: 'Grapefruit',
            wcrReference: 'Potongan daging jeruk bali merah / grapefruit',
            indonesianExample: 'Kombinasi asam sitrus segar dengan sentuhan pahit getir elegan di akhir',
            originMatch: 'Toraja Sapan Washed 1.800 mdpl',
            sensoryTip: 'Memberikan dimensi kompleksitas pada seduhan pour-over rasio 1:16.',
          },
        ],
      },
      {
        name: 'Berry (Buah Beri)',
        descriptors: [
          {
            name: 'Blackberry & Blueberry',
            wcrReference: 'Puree buah blueberry beku tanpa pemanis tambahan',
            indonesianExample: 'Manis fermentasi buah berry liar pekat bernuansa selai buah ungu',
            originMatch: 'Gayo Avatara Natural Anaerobic',
            sensoryTip: 'Karakteristik fermentasi lambat (slow dry) di mana ceri menyerap gula kulitnya.',
          },
          {
            name: 'Strawberry',
            wcrReference: 'Irisan buah strawberry matang segar',
            indonesianExample: 'Asam manis menyegarkan buah strawberry dataran tinggi Ciwidey',
            originMatch: 'Kerinci Kayu Aro Anaerobic Natural',
            sensoryTip: 'Muncul sangat dominan saat suhu seduhan turun ke level hangat-hangat kuku (50°C).',
          },
          {
            name: 'Raspberry',
            wcrReference: 'Ekstrak buah raspberry merah',
            indonesianExample: 'Asam tart manis yang cerah dan aromatik',
            originMatch: 'Java Puntang Anaerobic Fermentation',
            sensoryTip: 'Asosiasi erat dengan kandungan asam malat dan sitrat yang seimbang.',
          },
        ],
      },
      {
        name: 'Stone Fruit (Buah Berbiji)',
        descriptors: [
          {
            name: 'Peach / Buah Persik',
            wcrReference: 'Daging buah peach segar atau aprikot kuning lembut',
            indonesianExample: 'Kelembutan buah persik manis dengan tekstur juicy dan aftertaste madu',
            originMatch: 'Lintong Sigarar Utang Yellow Honey',
            sensoryTip: 'Salah satu deskriptor paling dicari pada kopi kompetisi specialty kelas dunia.',
          },
          {
            name: 'Red Cherry & Plum',
            wcrReference: 'Buah plum merah matang dan daging ceri kopi segar',
            indonesianExample: 'Rasa daging buah ceri kopi manis asam segar',
            originMatch: 'Ijen Blue Mountain Natural Process',
            sensoryTip: 'Memberi sensasi mulut berair (salivating mouthfeel) yang sangat nikmat.',
          },
        ],
      },
      {
        name: 'Dried Fruit (Buah Kering)',
        descriptors: [
          {
            name: 'Raisin (Kismis)',
            wcrReference: 'Kismis hitam Sun-Maid',
            indonesianExample: 'Manis pekat buah kering khas proses natural kering lambat',
            originMatch: 'Argopuro Walida Anaerobic Natural',
            sensoryTip: 'Indikasi gula fruktosa terkonsentrasi selama penjemuran di raised bed.',
          },
          {
            name: 'Prune & Dried Fig',
            wcrReference: 'Buah ara kering / prune tanpa gula tambahan',
            indonesianExample: 'Rasa manis buah matang gelap dengan sensasi sirup pekat',
            originMatch: 'Temanggung Sindoro Arabika Natural',
            sensoryTip: 'Sering dijumpai pada sangraian medium-light dengan body tebal.',
          },
        ],
      },
    ],
  },
  {
    id: 'floral',
    name: 'Floral (Bunga & Nektar)',
    color: 'text-rose-700',
    bgBadge: 'bg-rose-50 text-rose-800 border-rose-200',
    borderColor: 'border-rose-400',
    description: 'Aroma monoterpen dan ester volatil berbobot molekul rendah yang sangat aromatik dan mudah menguap.',
    subcategories: [
      {
        name: 'White & Delicate Flowers',
        descriptors: [
          {
            name: 'Jasmine (Bunga Melati)',
            wcrReference: 'Kuntum bunga melati putih segar atau teh melati murni',
            indonesianExample: 'Wangi semerbak bunga melati putih saat kopi baru saja disiram air panas',
            originMatch: 'Java Preanger Typica Washed (Pangalengan)',
            sensoryTip: 'Aroma paling anggun pada seduhan kopi varietas Typica murni.',
          },
          {
            name: 'Orange Blossom',
            wcrReference: 'Nektar bunga pohon jeruk yang baru mekar',
            indonesianExample: 'Wangi bunga sitrus manis yang lembut menyatu dengan aroma madu',
            originMatch: 'Bali Kintamani Ulian Semi-Washed',
            sensoryTip: 'Aroma ini paling kuat tercium pada fase fragrance kering bubuk kopi.',
          },
          {
            name: 'Magnolia / Cempaka',
            wcrReference: 'Bunga cempaka putih hutan tropis',
            indonesianExample: 'Wangi nektar bunga hutan tropis yang menenangkan',
            originMatch: 'Flores Manggarai Jurung Washed',
            sensoryTip: 'Karakter unik mikroklimat hutan purba Flores.',
          },
        ],
      },
      {
        name: 'Tea-like Floral',
        descriptors: [
          {
            name: 'Black Tea (Earl Grey / Bergamot)',
            wcrReference: 'Seduhan teh hitam Ceylon atau minyak bergamot alami',
            indonesianExample: 'Sensasi teh hitam bergamot yang bersih dan elegan di tenggorokan',
            originMatch: 'Aceh Gayo Tim-Tim Washed Grade 1',
            sensoryTip: 'Sangat sering ditemukan pada kopi Typica & Tim-Tim washed dataran tinggi.',
          },
          {
            name: 'Chamomile',
            wcrReference: 'Bunga chamomile kering yang diseduh air hangat',
            indonesianExample: 'Kehangatan teh herbal chamomile yang menenangkan dengan aftertaste manis',
            originMatch: 'Pangalengan Malabar Typica Lot 1',
            sensoryTip: 'Menandakan body yang ringan (light silky body) seperti teh herbal.',
          },
        ],
      },
    ],
  },
  {
    id: 'sweet',
    name: 'Sweet (Karamelisasi & Gula)',
    color: 'text-amber-800',
    bgBadge: 'bg-amber-100 text-amber-900 border-amber-300',
    borderColor: 'border-amber-500',
    description: 'Produk dari degradasi sukrosa selama fase Maillard dan karamelisasi panas roaster.',
    subcategories: [
      {
        name: 'Brown Sugar & Palm Sugar',
        descriptors: [
          {
            name: 'Gula Aren / Palm Sugar',
            wcrReference: 'Gula aren murni cetak cair atau kristal',
            indonesianExample: 'Manis legit alami gula aren khas Jawa dengan aftertaste lembut gurih',
            originMatch: 'Temanggung Arabika Red Honey & Fine Robusta',
            sensoryTip: 'Deskriptor khas kopi Indonesia yang paling familiar dan disukai masyarakat lokal.',
          },
          {
            name: 'Caramel',
            wcrReference: 'Gula pasir yang dipanaskan hingga berwarna cokelat keemasan',
            indonesianExample: 'Manis karamel mentega yang gurih dan membalut rongga mulut',
            originMatch: 'Flores Bajawa Yellow Honey',
            sensoryTip: 'Menandakan roasting yang sukses memaksimalkan fase karamelisasi tanpa gosong.',
          },
          {
            name: 'Molasses / Tetes Tebu',
            wcrReference: 'Molase tebu kental berwarna gelap',
            indonesianExample: 'Manis pekat sirup kental berbody tebal dan kaya mineral',
            originMatch: 'Sumatra Mandheling Wet Hulled Tradisional',
            sensoryTip: 'Sangat umum pada proses Giling Basah di mana mineral biji berinteraksi dengan panas.',
          },
        ],
      },
      {
        name: 'Honey & Vanilla',
        descriptors: [
          {
            name: 'Wild Forest Honey (Madu Hutan)',
            wcrReference: 'Madu lebah liar murni dari bunga hutan',
            indonesianExample: 'Manis alami madu liar dengan sentuhan floral yang berkesan panjang',
            originMatch: 'Sumbawa Tambora Honey Process',
            sensoryTip: 'Memberikan sensasi aftertaste manis yang menempel lama di langit-langit mulut.',
          },
          {
            name: 'Vanilla Pod',
            wcrReference: 'Biji vanili Madagaskar utuh',
            indonesianExample: 'Aroma manis vanili lembut yang membulatkan keasaman',
            originMatch: 'Toraja Kalosi Full Washed',
            sensoryTip: 'Membantu menyeimbangkan acidity kopi sehingga terasa lembut (smooth).',
          },
        ],
      },
    ],
  },
  {
    id: 'nutty-cocoa',
    name: 'Nutty & Cocoa (Kacang & Kakao)',
    color: 'text-amber-900',
    bgBadge: 'bg-stone-100 text-stone-900 border-stone-300',
    borderColor: 'border-stone-500',
    description: 'Senyawa pirazin dan furan yang terbentuk dari reaksi asam amino dan gula pereduksi saat pemanggangan.',
    subcategories: [
      {
        name: 'Cocoa (Cokelat)',
        descriptors: [
          {
            name: 'Dark Chocolate 75-85%',
            wcrReference: 'Cokelat hitam tanpa pemanis dengan cocoa solids tinggi',
            indonesianExample: 'Pahit gurih kakao murni yang pekat dan berwibawa',
            originMatch: 'Toraja Kalosi & Enrekang Duri',
            sensoryTip: 'Fondasi utama dari blend espresso specialty berkarakter klasik modern.',
          },
          {
            name: 'Milk Chocolate',
            wcrReference: 'Cokelat susu batangan couverture',
            indonesianExample: 'Rasa cokelat susu manis legit dengan tekstur creamy membalut lidah',
            originMatch: 'Flores Bajawa Fully Washed',
            sensoryTip: 'Sangat cocok diseduh menjadi cappuccino atau cafe latte.',
          },
          {
            name: 'Cocoa Nibs',
            wcrReference: 'Biji kakao sangrai yang dihancurkan kasar',
            indonesianExample: 'Rasa kakao mentah dengan sedikit keasaman alami buah cokelat',
            originMatch: 'Lampung Barat Highland Arabika',
            sensoryTip: 'Sering muncul pada proses fermentasi honey dengan sangrai medium.',
          },
        ],
      },
      {
        name: 'Nutty (Kacang-kacangan)',
        descriptors: [
          {
            name: 'Roasted Almond',
            wcrReference: 'Kacang almond panggang tanpa garam',
            indonesianExample: 'Gurih kacang almond renyah dengan aroma panggang yang bersih',
            originMatch: 'Java Raung Bondowoso Washed',
            sensoryTip: 'Aroma kacang yang positif, bersih tanpa bau apek atau tengik.',
          },
          {
            name: 'Roasted Hazelnut',
            wcrReference: 'Kacang hazelnut panggang aromatik',
            indonesianExample: 'Aroma kacang hazelnut gurih yang sering berpadu dengan cokelat',
            originMatch: 'Flores Bajawa Semi-Washed',
            sensoryTip: 'Memberikan sensasi kehangatan aroma pada saat pertama kali menyeduh.',
          },
          {
            name: 'Peanut Butter / Selai Kacang',
            wcrReference: 'Pasta kacang tanah murni',
            indonesianExample: 'Sensasi rasa kacang tanah gurih kental berlemak',
            originMatch: 'Fine Robusta Dampit Malang (Pemetikan Ceri Merah)',
            sensoryTip: 'Khas Fine Robusta Indonesia berkualitas tinggi tanpa cacat cacar buah.',
          },
        ],
      },
    ],
  },
  {
    id: 'spices',
    name: 'Spices (Rempah-rempah)',
    color: 'text-orange-800',
    bgBadge: 'bg-orange-50 text-orange-900 border-orange-200',
    borderColor: 'border-orange-500',
    description: 'Senyawa fenolik volatil dan terpenoid yang menjadi ciri khas kopi tanah vulkanik kepulauan rempah Indonesia.',
    subcategories: [
      {
        name: 'Sweet Spices (Rempah Manis)',
        descriptors: [
          {
            name: 'Cinnamon (Kayu Manis)',
            wcrReference: 'Bubuk kayu manis Ceylon murni',
            indonesianExample: 'Aroma manis rempah kayu manis yang menghangatkan tenggorokan',
            originMatch: 'Kerinci Kayu Aro Washed & Honey',
            sensoryTip: 'Sensasi rempah yang tidak pedas namun manis menghangatkan.',
          },
          {
            name: 'Nutmeg & Clove (Pala & Cengkeh)',
            wcrReference: 'Biji pala parut segar dan kuntum cengkeh kering',
            indonesianExample: 'Sensasi rempah kepulauan Maluku yang aromatik dan eksotis',
            originMatch: 'Ambon Maluku & Flores Bajawa Golewa',
            sensoryTip: 'Karakter mikroklimat di mana kebun kopi berdampingan dengan kebun cengkeh.',
          },
          {
            name: 'Cardamom (Kapulaga)',
            wcrReference: 'Biji kapulaga hijau yang dimemarkan',
            indonesianExample: 'Rasa rempah aromatik dingin dengan nuansa herbal segar',
            originMatch: 'Aceh Gayo Tim-Tim Organik',
            sensoryTip: 'Menambah dimensi kedalaman rasa rempah pada kopi tubruk atau filter.',
          },
        ],
      },
      {
        name: 'Pungent Spices',
        descriptors: [
          {
            name: 'Black Pepper (Lada Hitam)',
            wcrReference: 'Butiran lada hitam giling segar',
            indonesianExample: 'Sentuhan hangat sedikit menggelitik di ujung belakang lidah',
            originMatch: 'Lampung Liwa Fine Robusta',
            sensoryTip: 'Memberikan *kick* yang khas saat diseduh dengan suhu tinggi 94°C.',
          },
        ],
      },
    ],
  },
  {
    id: 'sour-fermented',
    name: 'Sour / Fermented (Keasaman & Fermentasi)',
    color: 'text-purple-800',
    bgBadge: 'bg-purple-50 text-purple-900 border-purple-200',
    borderColor: 'border-purple-400',
    description: 'Hasil aktivitas ragi dan bakteri asam laktat/asetat selama fermentasi terkontrol di tangki tertutup.',
    subcategories: [
      {
        name: 'Winey & Boozy',
        descriptors: [
          {
            name: 'Red Wine / Anggur Merah',
            wcrReference: 'Wine Cabernet Sauvignon atau anggur fermentasi pekat',
            indonesianExample: 'Aroma fermentasi anggur merah pekat dengan rasa asam manis berbobot',
            originMatch: 'Gayo Wine Process & Argopuro Anaerobic',
            sensoryTip: 'Dihasilkan dari fermentasi ceri utuh selama 15-30 hari dalam kantong kedap udara.',
          },
          {
            name: 'Whiskey / Rum Barrel',
            wcrReference: 'Oak barrel aged spirit aroma',
            indonesianExample: 'Sensasi hangat vanila beralkohol lembut dengan sensasi kayu ek manis',
            originMatch: 'Puntang Anaerobic Yeast Fermentation',
            sensoryTip: 'Sangat disukai penikmat kopi yang menyukai aroma spirit tanpa alkohol.',
          },
          {
            name: 'Apple Cider',
            wcrReference: 'Sari buah apel fermentasi berkarbonasi ringan',
            indonesianExample: 'Keasaman apel renyah dengan sedikit sensasi bersoda yang segar',
            originMatch: 'Ijen Natural Anaerobic Carbonic',
            sensoryTip: 'Muncul dari fermentasi kaya asam malat dan laktat terkontrol.',
          },
        ],
      },
      {
        name: 'Kombucha & Fermented Fruit',
        descriptors: [
          {
            name: 'Kombucha / Black Tea Ferment',
            wcrReference: 'Teh fermentasi SCOBY beraroma asam segar',
            indonesianExample: 'Rasa asam tajam segar seperti teh fermentasi sehat',
            originMatch: 'Bali Kintamani Koji Fermented',
            sensoryTip: 'Karakteristik fermentasi presisi mikroorganisme modern di stasiun cupping.',
          },
        ],
      },
    ],
  },
  {
    id: 'roasted',
    name: 'Roasted (Sangrai / Panggang)',
    color: 'text-amber-950',
    bgBadge: 'bg-yellow-50 text-yellow-900 border-yellow-200',
    borderColor: 'border-yellow-600',
    description: 'Aroma pikel, sereal, dan senyawa pirolitik yang muncul saat biji melewati First Crack hingga Second Crack.',
    subcategories: [
      {
        name: 'Cereal & Grain',
        descriptors: [
          {
            name: 'Malted Barley / Gandum Panggang',
            wcrReference: 'Sereal gandum panggang atau minuman malt Horlicks',
            indonesianExample: 'Aroma gandum matang yang gurih dan memberi rasa kenyang',
            originMatch: 'Robusta Temanggung Medium-Dark Roast',
            sensoryTip: 'Memberikan body yang solid saat diseduh kopi susu aren.',
          },
          {
            name: 'Toasted Bread (Roti Panggang)',
            wcrReference: 'Permukaan roti tawar yang dipanggang kecokelatan',
            indonesianExample: 'Aroma kulit roti panggang gurih yang lezat di pagi hari',
            originMatch: 'Dampit Natural Medium Roast',
            sensoryTip: 'Asosiasi umum pada profil roast filter seimbang tingkat medium.',
          },
        ],
      },
      {
        name: 'Smoky & Tobacco',
        descriptors: [
          {
            name: 'Sweet Pipe Tobacco (Tembakau Pipa)',
            wcrReference: 'Daun tembakau kering beraroma manis vanila',
            indonesianExample: 'Aroma daun tembakau kering manis alami tanpa bau gosong',
            originMatch: 'Sindoro Temanggung Arabika Washed',
            sensoryTip: 'Karakter tanah pegunungan Sindoro yang terkenal sebagai sentra tembakau terbaik.',
          },
          {
            name: 'Burnt Sugar / Gula Hangus',
            wcrReference: 'Gula karamel yang sedikit gosong (creme brulee)',
            indonesianExample: 'Rasa manis pekat dengan sedikit nuansa pahit karamel hangus',
            originMatch: 'Sumatra Wet Hulled Dark Roast',
            sensoryTip: 'Harus dijaga agar tidak bergeser menjadi rasa arang (ashy defect).',
          },
        ],
      },
    ],
  },
  {
    id: 'green-vegetative',
    name: 'Green / Vegetative (Herbal & Nabati)',
    color: 'text-emerald-800',
    bgBadge: 'bg-emerald-50 text-emerald-900 border-emerald-200',
    borderColor: 'border-emerald-500',
    description: 'Senyawa heksanal dan pirazin segar yang menyerupai dedaunan hijau, rumput, atau rempah daun.',
    subcategories: [
      {
        name: 'Herbaceous (Herbal Segar)',
        descriptors: [
          {
            name: 'Lemongrass (Serai Dapur)',
            wcrReference: 'Batang serai segar yang dimemarkan',
            indonesianExample: 'Aroma herbal serai yang segar, sitrus, dan menenangkan',
            originMatch: 'Aceh Gayo Tim-Tim Organik Washed',
            sensoryTip: 'Deskriptor herbal positif yang sangat dihargai pada kopi Sumatra dataran tinggi.',
          },
          {
            name: 'Green Tea (Teh Hijau Jepang)',
            wcrReference: 'Seduhan daun teh hijau Sencha',
            indonesianExample: 'Sensasi bersih teh hijau segar dengan astringency halus yang menyegarkan',
            originMatch: 'Java Pangalengan Washed Light Roast',
            sensoryTip: 'Kerap muncul pada sangraian sangat terang (light roast) dengan ekstraksi tinggi.',
          },
          {
            name: 'Olive Oil / Minyak Zaitun',
            wcrReference: 'Extra virgin olive oil berkualitas tinggi',
            indonesianExample: 'Tekstur lembut berlemak nabati dengan nuansa buah hijau zaitun',
            originMatch: 'Toraja Sapan Natural Micro-lot',
            sensoryTip: 'Menandakan kandungan lipid alami biji kopi yang kaya dan sehat.',
          },
        ],
      },
    ],
  },
  {
    id: 'other-defects',
    name: 'Other / Cacat & Off-notes (Defek Rasa)',
    color: 'text-rose-950',
    bgBadge: 'bg-stone-200 text-stone-900 border-stone-400',
    borderColor: 'border-stone-700',
    description: 'Karakter rasa negatif atau off-notes yang menandakan kesalahan penanganan pasca panen, penyimpanan, atau pemanggangan.',
    subcategories: [
      {
        name: 'Papery & Baggy (Penyimpanan)',
        descriptors: [
          {
            name: 'Baggy / Goni Tua',
            wcrReference: 'Karung goni basah yang disimpan lama di gudang lembap',
            indonesianExample: 'Bau karung goni tua yang menutupi aroma segar kopi',
            originMatch: 'Green bean past crop (berusia > 12 bulan tanpa plastik GrainPro)',
            sensoryTip: 'Defek akibat degradasi lipid dan penyerapan aroma ruangan gudang selama transportasi.',
          },
          {
            name: 'Papery / Kertas Basah',
            wcrReference: 'Kertas saring filter kopi yang tidak dibilas air panas',
            indonesianExample: 'Rasa hambar seperti mengunyah kertas karton basah',
            originMatch: 'Penyeduhan pour over tanpa membilas filter paper terlebih dahulu',
            sensoryTip: 'Selalu bilas kertas filter V60 dengan 100ml air mendidih sebelum menyeduh!',
          },
        ],
      },
      {
        name: 'Earthy & Musty (Pasca Panen)',
        descriptors: [
          {
            name: 'Musty / Jamur Gudang',
            wcrReference: 'Jamur Aspergillus pada biji kopi lembap',
            indonesianExample: 'Bau apek seperti pakaian basah yang tidak kering sempurna',
            originMatch: 'Biji kopi yang dijemur di atas tanah tanpa terpal atau terkena hujan malam',
            sensoryTip: 'Defek primer SCA bernilai fatal yang mendiskualifikasi kopi dari kategori specialty.',
          },
          {
            name: 'Earthy Berlebih (Lumpur Kotor)',
            wcrReference: 'Tanah lumpur becek yang kotor',
            indonesianExample: 'Rasa tanah kotor yang mengikis kebersihan cangkir (clean cup)',
            originMatch: 'Giling Basah yang tidak dikeringkan secara higienis',
            sensoryTip: 'Harus dibedakan dari earthy positif seperti cedar wood atau sweet forest aroma.',
          },
        ],
      },
    ],
  },
];

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
    cuppingSensoryProfile: 'Menghadirkan sensasi rasa lemon, jeruk keprok, dan grapefruit. Asam dominan pada buah kopi ceri yang dipetik matang sempurna pada elevasi tinggi.',
    trainingTip: 'Larutkan 0.2g asam sitrat kristal murni ke dalam 500ml air suling untuk kalibrasi lidah sensorik.',
  },
  {
    name: 'Asam Malat (Malic Acid)',
    chemicalName: 'C₄H₆O₅ (Malic Acid)',
    perception: 'Asam buah apel hijau, pear renyah, segar, memicu produksi air liur (*juicy mouthfeel*).',
    originExamples: 'Ijen Raung Bondowoso, Kerinci Kayu Aro, Colombia Geisha',
    cuppingSensoryProfile: 'Memberikan rasa keasaman yang bulat, lembut, dan menyegarkan seperti menggigit buah apel Granny Smith yang renyah.',
    trainingTip: 'Bandingkan dengan asam sitrat: asam malat terasa lebih lambat muncul di langit-langit mulut namun bertahan lebih lama.',
  },
  {
    name: 'Asam Fosfat (Phosphoric Acid)',
    chemicalName: 'H₃PO₄ (Inorganic Acid)',
    perception: 'Asam sparkling, sensasi bersoda (*effervescent*), cola-like, mencerahkan rasa buah.',
    originExamples: 'Flores Manggarai Vulkanik, Rwanda Nyamagabe, Kenya Nyeri',
    cuppingSensoryProfile: 'Bukan asam organik melainkan asam mineral anorganik yang diserap pohon dari tanah kaya fosfat vulkanik. Membuat cangkir kopi terasa berkilau dan hidup.',
    trainingTip: 'Sensasinya mirip desisan asam menyegarkan saat pertama kali meneguk Coca-Cola dingin.',
  },
  {
    name: 'Asam Laktat (Lactic Acid)',
    chemicalName: 'C₃H₆O₃ (Lactic Acid)',
    perception: 'Asam lembut, creamy, milky, butter yogurt, membulatkan dan menebalkan tekstur body.',
    originExamples: 'Honey Process, Anaerobic Fermentation, Lactic Maceration Kintamani',
    cuppingSensoryProfile: 'Dihasilkan oleh bakteri Lactobacillus selama fermentasi terkontrol di mana bakteri memecah glukosa menjadi asam laktat, menciptakan tekstur seperti susu sutra.',
    trainingTip: 'Rasa asam lembut seperti pada keju segar mozzarella atau yogurt tawar Yunani.',
  },
  {
    name: 'Asam Asetat (Acetic Acid)',
    chemicalName: 'CH₃COOH (Acetic Acid)',
    perception: 'Asam cuka, fermentasi anggur, tajam menusuk jika berlebih; menyenangkan jika seimbang.',
    originExamples: 'Natural Wine Process Gayo, Carbonic Maceration Puntang',
    cuppingSensoryProfile: 'Pada kadar rendah (<0.5%) menghasilkan sensasi buah anggur masak dan red wine yang elegan. Jika berlebih, membuat kopi berbau cuka masam tajam (over-ferment).',
    trainingTip: 'Cium setetes cuka apel encer: jika kopi Anda memiliki bau ini terlalu tajam, proses fermentasi berlangsung terlalu lama.',
  },
  {
    name: 'Asam Tartarat & Kuinat (Tartaric & Quinic)',
    chemicalName: 'Tartaric (C₄H₆O₆) & Quinic Acid',
    perception: 'Asam buah anggur / kismis (Tartarat); rasa pahit getir pembakar dari sangrai gelap (Kuinat).',
    originExamples: 'Anggur Merah Kering, Kopi Sangrai Gelap (Dark Roast)',
    cuppingSensoryProfile: 'Asam tartarat memberi karakter buah anggur matang. Asam quinat terbentuk saat asam klorogenat (CGA) terdegradasi panas pada fase pemanggangan akhir.',
    trainingTip: 'Kopi yang didiamkan berjam-jam di hot plate pemanas akan teroksidasi dan kaya asam quinat yang pahit membakar.',
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
    mitigation: 'Disiplin pemetikan petik merah selektif 100% matang pohon (*selective picking*).',
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
  const [activeCategory, setActiveCategory] = useState<FlavorCategory>(SCA_FLAVOR_CATEGORIES[0]);
  const [selectedDescriptor, setSelectedDescriptor] = useState<FlavorDescriptor>(
    SCA_FLAVOR_CATEGORIES[0].subcategories[0].descriptors[0]
  );
  const [selectedAcid, setSelectedAcid] = useState<OrganicAcid>(ORGANIC_ACIDS[0]);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'descriptor' | 'acid'>('descriptor');

  return (
    <div className="space-y-6">
      {/* Sub-navigation Segmented Control */}
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
          <span>SCA Flavor Wheel</span>
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

      {/* --- SUBTAB 1: SCA FLAVOR WHEEL --- */}
      {activeSubTab === 'wheel' && (
        <div className="bg-paper-50 rounded-xl border border-paper-300 p-6 sm:p-8 shadow-subtle space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-paper-300">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold bg-cherry-50 px-2 py-0.5 border border-cherry-200">
                  LEKSIKON SENSORI RESMI SCA & WCR
                </span>
                <span className="font-mono text-[10px] text-roast-500">
                  9 KATEGORI UTAMA
                </span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-roast-950">
                SCA Sensory Wheel & Nusantara Origin Match
              </h3>
              <p className="text-xs text-roast-600 mt-1 max-w-xl font-sans">
                Peta asosiasi rasa, referensi ilmiah World Coffee Research (WCR), dan padanan origin kopi Indonesia terbaik untuk kalibrasi lidah cupping.
              </p>
            </div>
            <div className="font-mono text-xs text-roast-500 bg-paper-100 px-3 py-1.5 border border-paper-300 rounded self-start sm:self-auto">
              Retronasal Calibration Tool
            </div>
          </div>

          {/* 9 Categories Selector Chips */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-roast-500 block mb-2 font-bold">
              PILIH KATEGORI PRIMER:
            </span>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {SCA_FLAVOR_CATEGORIES.map((cat) => {
                const isActive = cat.id === activeCategory.id;
                const shortLabel = cat.name.split('(')[0].trim();
                const subLabel = cat.name.includes('(') ? cat.name.split('(')[1].replace(')', '') : '';
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat);
                      setSelectedDescriptor(cat.subcategories[0].descriptors[0]);
                    }}
                    className={`px-3.5 py-2 rounded-lg font-sans text-xs transition-all border whitespace-nowrap flex items-center gap-2 ${
                      isActive
                        ? 'bg-roast-950 text-paper-50 border-roast-950 font-bold shadow-xs'
                        : 'bg-paper-100/80 text-roast-800 border-paper-300 hover:bg-paper-200/80 hover:border-roast-400'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full shrink-0 ${
                      cat.id === 'fruity' ? 'bg-amber-500' :
                      cat.id === 'floral' ? 'bg-pink-500' :
                      cat.id === 'sweet' ? 'bg-yellow-500' :
                      cat.id === 'nutty-cocoa' ? 'bg-amber-800' :
                      cat.id === 'spices' ? 'bg-orange-600' :
                      cat.id === 'roasted' ? 'bg-stone-700' :
                      cat.id === 'green-vegetative' ? 'bg-emerald-600' :
                      cat.id === 'fermented' ? 'bg-purple-600' : 'bg-rose-600'
                    }`} />
                    <span>{shortLabel}</span>
                    {subLabel && (
                      <span className={`text-[10px] font-normal ${isActive ? 'text-paper-300' : 'text-roast-500'}`}>
                        ({subLabel.split('&')[0].trim()})
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Description of Category */}
          <div className={`p-3.5 rounded border text-xs font-sans ${activeCategory.bgBadge}`}>
            <strong>Karakteristik Kimia:</strong> {activeCategory.description}
          </div>

          {/* Matrix Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Subcategories (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              {activeCategory.subcategories.map((sub, sIdx) => (
                <div key={sIdx} className="bg-paper-100/60 rounded-lg p-4 border border-paper-300 space-y-3">
                  <h4 className="font-mono text-[10px] uppercase tracking-wider text-roast-600 font-bold flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-cherry-600" />
                    SUB-KATEGORI: {sub.name}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sub.descriptors.map((desc, dIdx) => {
                      const isSelected = selectedDescriptor.name === desc.name;
                      return (
                        <button
                          key={dIdx}
                          onClick={() => {
                            setSelectedDescriptor(desc);
                            setModalType('descriptor');
                            setIsMobileModalOpen(true);
                          }}
                          className={`p-3 rounded text-left transition-all border ${
                            isSelected
                              ? 'bg-paper-50 border-roast-900 shadow-xs ring-1 ring-roast-900'
                              : 'bg-paper-50/70 border-paper-300 hover:border-roast-500'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-xs font-bold text-roast-950 font-sans">
                              {desc.name}
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-roast-400 lg:hidden shrink-0" />
                          </div>
                          <div className="text-[10px] text-cherry-700 font-mono mt-0.5 truncate">
                            {desc.originMatch.split('(')[0]}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Tasting Note Detail Panel (5 cols) */}
            <div className="lg:col-span-5 bg-roast-950 text-paper-50 p-6 rounded-lg border border-roast-900 shadow-subtle flex flex-col justify-between">
              <div className="space-y-4">
                <div className="pb-3 border-b border-roast-800">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-crema-400 block font-semibold">
                    [ DESKRIPTOR SENSORI RESMI ]
                  </span>
                  <h4 className="font-serif font-bold text-2xl text-paper-50 mt-1">
                    {selectedDescriptor.name}
                  </h4>
                  <span className="text-[10px] font-mono text-roast-400">
                    Kategori: {activeCategory.name}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-crema-400 block mb-1 font-semibold">
                    Standar Referensi WCR:
                  </span>
                  <p className="text-xs text-paper-200 font-mono bg-roast-900/80 p-2.5 rounded border border-roast-800">
                    {selectedDescriptor.wcrReference}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-crema-400 block mb-1 font-semibold">
                    Persepsi Rasa di Cangkir:
                  </span>
                  <p className="text-xs text-paper-100 font-sans italic bg-roast-900 p-3 rounded border border-roast-800 leading-relaxed">
                    &ldquo;{selectedDescriptor.indonesianExample}&rdquo;
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 block mb-1 font-bold">
                    Spesimen Origin Kopi Indonesia:
                  </span>
                  <p className="text-xs text-white font-sans font-bold bg-emerald-950/40 p-2.5 rounded border border-emerald-800/60">
                    {selectedDescriptor.originMatch}
                  </p>
                </div>

                <div className="pt-2 border-t border-roast-800/80">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-crema-400 block mb-1 font-semibold">
                    Tips Evaluasi Cupping:
                  </span>
                  <p className="text-[11px] text-paper-300 font-sans leading-relaxed">
                    {selectedDescriptor.sensoryTip}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-roast-800 text-[10px] font-mono text-roast-400 flex items-center justify-between">
                <span>Standar Cupping SCA</span>
                <span>Protokol Suhu 55°C – 60°C</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- SUBTAB 2: ORGANIC ACIDS LAB --- */}
      {activeSubTab === 'acids' && (
        <div className="bg-paper-50 rounded-xl border border-paper-300 p-6 sm:p-8 shadow-subtle space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-paper-300">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-blue-800 font-bold bg-blue-50 px-2 py-0.5 border border-blue-200">
                  KIMIA RASA: ASAM ORGANIK
                </span>
                <span className="font-mono text-[10px] text-roast-500">
                  6 JENIS ASAM KOPI UTAMA
                </span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-roast-950">
                Laboratorium Asam Organik (Acids Cupping Lab)
              </h3>
              <p className="text-xs text-roast-600 mt-1 max-w-xl font-sans">
                Keasaman (*acidity*) bukan rasa masam yang menyiksa; ia adalah nyawa yang memberikan kecerahan, kesegaran buah, dan struktur elegan pada specialty coffee.
              </p>
            </div>
            <div className="font-mono text-xs text-blue-800 bg-blue-50 px-3 py-1.5 border border-blue-200 rounded self-start sm:self-auto">
              pH Kopi Seduh: 4.8 – 5.2
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* List of 6 Acids (5 cols) */}
            <div className="lg:col-span-5 space-y-2.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold block mb-1">
                DAFTAR SENYAWA ASAM:
              </span>
              {ORGANIC_ACIDS.map((acid, idx) => {
                const isSelected = selectedAcid.name === acid.name;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedAcid(acid);
                      setModalType('acid');
                      setIsMobileModalOpen(true);
                    }}
                    className={`w-full p-4 rounded-lg text-left transition-all border flex items-center justify-between ${
                      isSelected
                        ? 'bg-roast-950 text-paper-50 border-roast-950 shadow-xs'
                        : 'bg-paper-100/70 text-roast-900 border-paper-300 hover:border-roast-700'
                    }`}
                  >
                    <div>
                      <div className="font-serif font-bold text-sm">
                        {acid.name}
                      </div>
                      <div className={`font-mono text-[10px] mt-0.5 ${isSelected ? 'text-crema-300' : 'text-roast-500'}`}>
                        {acid.chemicalName}
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-paper-50' : 'text-roast-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Acid Detail Panel (7 cols) */}
            <div className="lg:col-span-7 bg-paper-100/80 p-6 rounded-lg border border-paper-300 space-y-4">
              <div className="pb-3 border-b border-paper-300">
                <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold block">
                  [ ANALISIS FISIOLOGI PENGEKAP ]
                </span>
                <h4 className="font-serif text-2xl font-bold text-roast-950 mt-1">
                  {selectedAcid.name}
                </h4>
                <span className="font-mono text-xs text-roast-600 block mt-0.5">
                  Rumus Senyawa: <code className="bg-paper-200 px-1.5 py-0.5 rounded">{selectedAcid.chemicalName}</code>
                </span>
              </div>

              <div className="space-y-3 font-sans text-xs">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold block mb-1">
                    Sensasi di Mulut (Tactile & Tongue Perception):
                  </span>
                  <p className="text-roast-900 bg-paper-50 p-3 rounded border border-paper-300 font-medium">
                    {selectedAcid.perception}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold block mb-1">
                    Peran dalam Cupping Specialty Coffee:
                  </span>
                  <p className="text-roast-800 leading-relaxed">
                    {selectedAcid.cuppingSensoryProfile}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700 font-bold block mb-1">
                    Spesimen Kopi Origin yang Dominan:
                  </span>
                  <p className="text-emerald-950 bg-emerald-50 p-2.5 rounded border border-emerald-200 font-mono text-xs font-semibold">
                    {selectedAcid.originExamples}
                  </p>
                </div>

                <div className="pt-2 border-t border-paper-300">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-cherry-700 font-bold block mb-1">
                    Protokol Latihan Sensorik Barista:
                  </span>
                  <p className="text-roast-700 italic bg-paper-200/50 p-2.5 rounded border border-paper-300">
                    &ldquo;{selectedAcid.trainingTip}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- SUBTAB 3: DEFECTS MATRIX --- */}
      {activeSubTab === 'defects' && (
        <div className="bg-paper-50 rounded-xl border border-paper-300 p-6 sm:p-8 shadow-subtle space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-paper-300">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-rose-800 font-bold bg-rose-50 px-2 py-0.5 border border-rose-200">
                  PROTOKOL GRADING SCA
                </span>
                <span className="font-mono text-[10px] text-roast-500">
                  CACAT PRIMER & SEKUNDER
                </span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-roast-950">
                Matrix Identifikasi Defek Rasa (Sensory Off-Notes)
              </h3>
              <p className="text-xs text-roast-600 mt-1 max-w-xl font-sans">
                Standar SCA mewajibkan 0 Cacat Primer dalam 350 gram sampel biji hijau agar sah menyandang predikat Specialty Coffee. Kenali aroma dan penyebab kerusakannya.
              </p>
            </div>
            <div className="font-mono text-xs text-rose-800 bg-rose-50 px-3 py-1.5 border border-rose-200 rounded self-start sm:self-auto">
              SCA Green Grading Standard
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COFFEE_DEFECTS.map((defect, idx) => (
              <div
                key={idx}
                className="bg-paper-100/70 border border-paper-300 rounded-lg p-4 flex flex-col justify-between hover:border-roast-700 transition-all space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-2 border-b border-paper-300">
                    <h4 className="font-serif font-bold text-base text-roast-950">
                      {defect.name}
                    </h4>
                    <span
                      className={`font-mono text-[9px] uppercase px-2 py-0.5 rounded font-bold border ${
                        defect.type.includes('FATAL')
                          ? 'bg-rose-100 text-rose-900 border-rose-300'
                          : 'bg-amber-100 text-amber-900 border-amber-300'
                      }`}
                    >
                      {defect.type}
                    </span>
                  </div>

                  <div className="space-y-2 mt-2.5 font-sans text-xs">
                    <div>
                      <span className="font-mono text-[10px] uppercase text-roast-500 font-bold block">
                        Penyebab di Hulu:
                      </span>
                      <p className="text-roast-800">{defect.cause}</p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase text-rose-700 font-bold block">
                        Dampak Cacat di Cangkir:
                      </span>
                      <p className="text-rose-950 font-medium italic bg-rose-50/60 p-2 rounded border border-rose-200">
                        &ldquo;{defect.sensoryImpact}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-paper-300">
                  <span className="font-mono text-[10px] uppercase text-emerald-800 font-bold block">
                    Langkah Pencegahan & Mitigasi:
                  </span>
                  <p className="text-roast-700 text-[11px] font-sans mt-0.5">
                    {defect.mitigation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Modal Bottom Sheet (lg:hidden) */}
      {isMobileModalOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="fixed inset-0"
            onClick={() => setIsMobileModalOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-10 w-full sm:max-w-lg bg-roast-950 text-paper-50 rounded-t-2xl sm:rounded-2xl border border-roast-800 shadow-2xl p-5 sm:p-6 max-h-[85vh] overflow-y-auto space-y-4">
            {/* Header with Close button */}
            <div className="flex items-center justify-between pb-3 border-b border-roast-800">
              <span className="font-mono text-[9px] uppercase tracking-widest text-crema-400 font-bold px-2 py-0.5 rounded bg-roast-900 border border-roast-800">
                {modalType === 'descriptor' ? 'DESKRIPTOR SENSORI SCA' : 'KIMIA RASA ASAM'}
              </span>
              <button
                onClick={() => setIsMobileModalOpen(false)}
                className="p-1.5 rounded-full text-paper-400 hover:text-white hover:bg-roast-800 transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {modalType === 'descriptor' ? (
              <div className="space-y-4">
                <div>
                  <h4 className="font-serif font-bold text-2xl text-paper-50">
                    {selectedDescriptor.name}
                  </h4>
                  <span className="text-[10px] font-mono text-roast-400">
                    Kategori: {activeCategory.name}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-crema-400 block mb-1 font-semibold">
                    Standar Referensi WCR:
                  </span>
                  <p className="text-xs text-paper-200 font-mono bg-roast-900/80 p-2.5 rounded border border-roast-800">
                    {selectedDescriptor.wcrReference}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-crema-400 block mb-1 font-semibold">
                    Persepsi Rasa di Cangkir:
                  </span>
                  <p className="text-xs text-paper-100 font-sans italic bg-roast-900 p-3 rounded border border-roast-800 leading-relaxed">
                    &ldquo;{selectedDescriptor.indonesianExample}&rdquo;
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 block mb-1 font-bold">
                    Spesimen Origin Kopi Indonesia:
                  </span>
                  <p className="text-xs text-white font-sans font-bold bg-emerald-950/40 p-2.5 rounded border border-emerald-800/60">
                    {selectedDescriptor.originMatch}
                  </p>
                </div>

                <div className="pt-2 border-t border-roast-800/80">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-crema-400 block mb-1 font-semibold">
                    Tips Evaluasi Cupping:
                  </span>
                  <p className="text-[11px] text-paper-300 font-sans leading-relaxed">
                    {selectedDescriptor.sensoryTip}
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <h4 className="font-serif font-bold text-2xl text-paper-50">
                    {selectedAcid.name}
                  </h4>
                  <span className="font-mono text-xs text-blue-400 block mt-0.5">
                    Rumus: <code className="bg-roast-900 px-1.5 py-0.5 rounded text-paper-100">{selectedAcid.chemicalName}</code>
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-crema-400 block mb-1 font-semibold">
                    Sensasi di Mulut (Mouthfeel & Perception):
                  </span>
                  <p className="text-xs text-paper-100 bg-roast-900 p-3 rounded border border-roast-800 font-medium">
                    {selectedAcid.perception}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-crema-400 block mb-1 font-semibold">
                    Peran dalam Cupping Specialty:
                  </span>
                  <p className="text-xs text-paper-300 leading-relaxed">
                    {selectedAcid.cuppingSensoryProfile}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400 block mb-1 font-bold">
                    Spesimen Kopi Origin Dominan:
                  </span>
                  <p className="text-xs text-white bg-emerald-950/50 p-2.5 rounded border border-emerald-800/60 font-mono font-bold">
                    {selectedAcid.originExamples}
                  </p>
                </div>

                <div className="pt-2 border-t border-roast-800">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-crema-400 block mb-1 font-semibold">
                    Protokol Kalibrasi Barista:
                  </span>
                  <p className="text-[11px] text-paper-300 italic bg-roast-900 p-2.5 rounded border border-roast-800">
                    &ldquo;{selectedAcid.trainingTip}&rdquo;
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={() => setIsMobileModalOpen(false)}
              className="w-full mt-4 py-2.5 bg-paper-100 hover:bg-paper-200 text-roast-950 font-mono text-xs font-bold rounded-lg transition-colors"
            >
              Tutup Panel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
