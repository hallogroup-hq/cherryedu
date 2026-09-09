export interface LexiconTerm {
  id: string;
  term: string;
  termEn?: string;
  category: 'Agronomi & Botani' | 'Pasca Panen' | 'Roasting Science' | 'Brewing & Espresso' | 'Sensory & Cupping' | 'Kimia Air' | 'Bisnis & Manajemen';
  shortDef: string;
  fullDef: string;
  parameters?: string;
  practicalApplication: string;
  relatedTerms?: string[];
}

export const COFFEE_LEXICON: LexiconTerm[] = [
  {
    id: 'brix',
    term: 'Brix (°Bx)',
    termEn: 'Brix Level',
    category: 'Agronomi & Botani',
    shortDef: 'Satuan ukur konsentrasi gula terlarut dalam cairan lendir (musilase) buah ceri kopi.',
    fullDef: 'Skala Brix merepresentasikan persentase berat sukrosa murni dalam larutan air. Pada ceri kopi matang optimal, refraktometer optik mengukur indeks bias cairan mesokarp untuk memprediksi kematangan biologis dan potensi rasa manis di cangkir.',
    parameters: 'Standar petik matang optimal specialty: 18° – 24° Brix.',
    practicalApplication: 'Petani spesialis menggunakan refractometer portabel di kebun sebelum panen massal untuk memastikan ceri tidak dipetik saat masih under-ripe (Brix < 16°Bx).',
    relatedTerms: ['Mesokarp', 'Selective Picking', 'Musilase']
  },
  {
    id: 'endosperma',
    term: 'Endosperma',
    termEn: 'Coffee Bean / Endosperm',
    category: 'Agronomi & Botani',
    shortDef: 'Jaringan nutrisi cadangan embrio yang menjadi biji kopi hijau (green bean) yang kita sangrai.',
    fullDef: 'Endosperma adalah struktur internal utama buah ceri kopi yang terbungkus oleh spermoderm (kulit ari) dan endokarp (parchment). Biasanya terdiri dari dua keping biji berbentuk hemisfer yang saling berhadapan dengan alur embrio di tengahnya.',
    parameters: 'Kadar air pasca kering simpan: 10.0% – 12.0%.',
    practicalApplication: 'Kerapatan seluler endosperma dipengaruhi oleh elevasi kebun (masl); biji dari dataran tinggi memiliki densitas endosperma lebih tinggi sehingga tahan terhadap panas sangrai tinggi.',
    relatedTerms: ['Peaberry', 'Spermoderm', 'Endokarp']
  },
  {
    id: 'peaberry',
    term: 'Peaberry (Kopi Lanang)',
    termEn: 'Peaberry / Caracol',
    category: 'Agronomi & Botani',
    shortDef: 'Anomali alami di mana satu buah ceri hanya membuahi satu biji tunggal berbentuk bulat oval.',
    fullDef: 'Terjadi pada 5% hingga 8% total panen pohon kopi akibat salah satu dari dua bakal biji gagal berkembang. Akibatnya, biji tunggal yang tersisa menempati seluruh ruang rongga buah dan tumbuh menjadi bulat bulat lonjong tanpa sisi rata.',
    parameters: 'Frekuensi alami: 5% – 8% dari total hasil panen.',
    practicalApplication: 'Peaberry memerlukan penyesuaian profil roasting karena bentuknya yang aerodinamis berguling lebih merata di dalam drum roaster konveksi.',
    relatedTerms: ['Endosperma', 'Sortasi Biji']
  },
  {
    id: 'masl',
    term: 'MASL',
    termEn: 'Meters Above Sea Level',
    category: 'Agronomi & Botani',
    shortDef: 'Satuan ketinggian kebun dalam meter di atas permukaan laut.',
    fullDef: 'Elevasi menentukan suhu mikro harian perkebunan kopi. Ketinggian yang lebih tinggi memperlambat laju respirasi malam hari pada tanaman, memperpanjang masa pematangan buah ceri, dan memicu akumulasi asam organik kompleks serta prekursor gula di dalam biji.',
    parameters: 'Specialty Arabika ideal: 1.200 – 2.100 masl. Robusta: 300 – 900 masl.',
    practicalApplication: 'Label kemasan kopi specialty selalu mencantumkan MASL untuk memberi ekspektasi densitas biji dan tingkat keasaman (acidity) cerah pada profil rasa.',
    relatedTerms: ['Terroir', 'Shade-Grown', 'Densitas Biji']
  },
  {
    id: 'pbko',
    term: 'PBKo (Penggerek Buah Kopi)',
    termEn: 'Coffee Berry Borer (Hypothenemus hampei)',
    category: 'Agronomi & Botani',
    shortDef: 'Hama kumbang mikro paling merusak yang mengebor lubang ke dalam buah ceri dan merusak endosperma.',
    fullDef: 'Kumbang betina melubangi ujung diskus ceri kopi untuk bertelur di dalam biji endosperma. Larva memakan jaringan biji dan meninggalkan kotoran serta memicu infeksi sekunder jamur, menyebabkan cacat rasa serius pada seduhan.',
    parameters: 'Dalam standar cacat SCA: 5 lubang gerek serangga kecil dihitung sebagai 1 Cacat Sekunder (Insect Damage).',
    practicalApplication: 'Dikenali saat sortasi green bean melalui lubang kecil kehitaman berdiameter 1 mm pada permukaan biji.',
    relatedTerms: ['Defect Sekunder', 'Sortasi Fisik']
  },
  {
    id: 'mucilage',
    term: 'Musilase (Lendir Ceri)',
    termEn: 'Mucilage / Mesocarp',
    category: 'Pasca Panen',
    shortDef: 'Lapisan lendir kaya pektin dan sukrosa yang membungkus kulit tanduk biji kopi.',
    fullDef: 'Musilase merupakan lapisan mesokarp berdaging lendir yang licin dan kaya akan polisakarida pektat, glukosa, fruktosa, dan asam amino. Lapisan ini menjadi substrat makanan utama bagi mikroba selama fase fermentasi kopi.',
    parameters: 'pH alami: 5.5 – 6.0 sebelum fermentasi; turun ke 4.0 – 4.2 pasca fermentasi.',
    practicalApplication: 'Pada proses Honey, musilase sengaja dipertahankan sebagian (Yellow 25-50%, Red 50-75%, Black ~100%) untuk memberikan aksen body manis dan karakter madu pada rasa akhir.',
    relatedTerms: ['Honey Process', 'Fully Washed', 'Fermentasi']
  },
  {
    id: 'parchment',
    term: 'Parchment (Kulit Tanduk)',
    termEn: 'Endocarp / Pergamino',
    category: 'Pasca Panen',
    shortDef: 'Lapisan cangkang keras berserat selulosa yang melindungi biji kopi selama masa pengeringan dan resting.',
    fullDef: 'Endokarp bertindak sebagai pelindung mekanis dan higroskopis biji kopi hijau dari fluktuasi kelembaban luar saat dijemur di atas raised beds maupun saat disimpan dalam gudang resting (masa stabilisasi 30–60 hari).',
    parameters: 'Biji dalam parchment (gabah kopi) dikupas (hulling) pada kadar air 10.5% – 11.5%.',
    practicalApplication: 'Kopi tidak boleh di-hulling sebelum kadar air stabil 11% agar embrio kopi tidak mengalami shock hidrolisis yang merusak kesegaran aroma.',
    relatedTerms: ['Hulling', 'Resting Period', 'Dry Milling']
  },
  {
    id: 'giling-basah',
    term: 'Giling Basah (Wet-Hulling)',
    termEn: 'Wet-Hulled Process (Asahan / Labu)',
    category: 'Pasca Panen',
    shortDef: 'Metode pasca panen unik khas Indonesia (Sumatra/Sulawesi) di mana kulit tanduk dikupas saat biji masih basah.',
    fullDef: 'Petani mengupas kulit buah, memfermentasi singkat semalam, lalu mencuci lendirnya dan menjemur gabah hanya 1-2 hari hingga kadar air sekitar 35%–40%. Dalam kondisi basah lunak ini, parchment langsung dikupas di mesin huller, lalu biji telanjang dijemur kembali hingga kering.',
    parameters: 'Kadar air saat hulling: 35% – 45% (sangat tinggi dibanding standar dunia 11%).',
    practicalApplication: 'Menghasilkan warna green bean hijau kebiruan gelap (blue jade) serta profil cita rasa khas kopi Sumatra: body tebal, keasaman rendah, aksen rempah (spicy), earthy, tembakau manis, dan cokelat pekat.',
    relatedTerms: ['Parchment', 'Hulling', 'Sumatra Mandheling']
  },
  {
    id: 'anaerobic-fermentation',
    term: 'Fermentasi Anaerobik',
    termEn: 'Anaerobic Fermentation',
    category: 'Pasca Panen',
    shortDef: 'Proses fermentasi ceri atau gabah kopi di dalam wadah kedap udara tanpa kehadiran oksigen bebas.',
    fullDef: 'Kopi dimasukkan ke dalam tangki baja nirkarat atau tong polietilena tertutup rapat yang dilengkapi katup udara satu arah (one-way airlock). Ketiadaan oksigen menekan bakteri aerob dan memberi ruang bagi bakteri asam laktat (BAL) dan khamir untuk menghasilkan ester aromatik buah tropis yang intens.',
    parameters: 'Durasi umum: 48 – 120 jam; target pH akhir: 3.8 – 4.2; suhu fermentasi terkontrol: 15°C – 18°C.',
    practicalApplication: 'Menghasilkan profil sensory eksotis seperti buah nanas terfermentasi, passion fruit, rempah kapulaga, dan winey boozy acidity.',
    relatedTerms: ['Carbonic Maceration', 'Bakteri Asam Laktat (BAL)', 'pH Fermentasi']
  },
  {
    id: 'water-activity',
    term: 'Water Activity (aw)',
    termEn: 'Water Activity (aw)',
    category: 'Pasca Panen',
    shortDef: 'Ukuran ketersediaan air bebas yang tidak terikat dalam biji kopi yang dapat digunakan oleh mikroorganisme untuk berkembang biak.',
    fullDef: 'Berbeda dari moisture content (kadar air total), water activity mengukur tekanan uap air bebas pada biji dibanding air murni pada suhu sama. Nilai aw yang terlalu tinggi memicu jamur aflatoksin dan degradasi lipid selama masa pengiriman green bean antarpulau.',
    parameters: 'Batas aman specialty kopi: aw < 0.70 (ideal: 0.55 – 0.65 aw pada suhu 20°C).',
    practicalApplication: 'Importir dan roastery menggunakan aw-meter untuk memastikan green bean tidak akan menua (fading/past crop) atau berjamur saat disimpan di gudang ber-AC.',
    relatedTerms: ['Moisture Content', 'Green Coffee Defect', 'Hermetic Bag']
  },
  {
    id: 'rate-of-rise',
    term: 'Rate of Rise (RoR)',
    termEn: 'Rate of Rise (RoR)',
    category: 'Roasting Science',
    shortDef: 'Kecepatan kenaikan suhu biji kopi per satuan waktu (biasanya per menit atau per 30 detik).',
    fullDef: 'RoR adalah turunan pertama dari kurva suhu biji (Bean Temperature/BT). RoR menunjukkan momentum termal yang sedang diserap atau ditransfer ke dalam matriks sel biji kopi. Dalam standar roasting modern (Scott Rao protocol), RoR yang ideal harus terus menurun secara mulus (ever-decreasing RoR) tanpa lonjakan tajam (flick) atau penurunan mendadak (crash).',
    parameters: 'Awal roasting: 15°–20°C/menit; menjelang First Crack: 6°–8°C/menit; akhir roasting: 2°–4°C/menit.',
    practicalApplication: 'RoR crash sesaat sebelum First Crack mengakibatkan rasa kopi menjadi datar, baked, dan kehilangan keasaman buah cerah.',
    relatedTerms: ['First Crack', 'Turning Point', 'Bean Temp (BT)']
  },
  {
    id: 'development-time-ratio',
    term: 'Development Time Ratio (DTR)',
    termEn: 'Development Time Ratio (DTR %)',
    category: 'Roasting Science',
    shortDef: 'Persentase waktu yang dihabiskan biji kopi sejak dimulainya First Crack hingga batch kopi dikeluarkan (drop).',
    fullDef: 'DTR mengukur proporsi fase karamelisasi dan pemecahan kimia lanjut terhadap total durasi penyangraian. Rumus matematis: DTR (%) = (Waktu Fase Development ÷ Total Durasi Roasting) × 100%.',
    parameters: 'Light roast (Filter): 12% – 16%; Medium roast (Omni/Espresso modern): 15% – 20%; Dark roast: > 22%.',
    practicalApplication: 'DTR terlalu rendah (< 10%) menyebabkan under-developed dengan rasa rumput kering dan sepat; DTR terlalu tinggi (> 24%) menyebabkan hilangnya karakter spesifik origin menjadi dominan rasa arang karamel pahit.',
    relatedTerms: ['First Crack', 'Rate of Rise (RoR)', 'Maillard Reaction']
  },
  {
    id: 'first-crack',
    term: 'First Crack',
    termEn: 'First Crack (FC)',
    category: 'Roasting Science',
    shortDef: 'Fenomena letupan akustik mekanis saat tekanan uap air dan gas CO2 di dalam sel biji memecah dinding sel selulosa.',
    fullDef: 'Pada suhu biji sekitar 194°C–198°C, tekanan uap air internal mencapai puncaknya hingga mendobrak struktur dinding sel biji. Terjadi transisi termodinamika dari fase endotermik (menyerap panas) menjadi eksotermik sesaat (melepaskan panas). Ditandai dengan suara gemertak menyerupai popcorn merekah.',
    parameters: 'Rentang suhu biji tipikal: 194°C – 198°C (tergantung kalibrasi probe probe thermocouple).',
    practicalApplication: 'First Crack menandai dimulainya Fase Development di mana sang roaster mulai mengontrol karamelisasi gula dan degradasi asam organik dengan sangat teliti.',
    relatedTerms: ['Rate of Rise (RoR)', 'DTR %', 'Degassing']
  },
  {
    id: 'turning-point',
    term: 'Turning Point (TP)',
    termEn: 'Turning Point',
    category: 'Roasting Science',
    shortDef: 'Titik terendah pada kurva suhu roaster sebelum temperatur mulai berbalik naik kembali.',
    fullDef: 'Saat biji kopi bersuhu ruang dimasukkan (charge) ke dalam drum roaster yang panas, suhu probe akan anjlok drastis karena menyerap dinginnya biji. Ketika suhu permukaan biji dan lingkungan drum mencapai titik kesetimbangan termal, kurva suhu berhenti turun dan mulai menanjak naik.',
    parameters: 'Terjadi pada menit 1:00 – 1:30 di kisaran suhu 85°C – 100°C.',
    practicalApplication: 'Turning Point bukan suhu fisik riil dari inti biji, melainkan artefak termal sensor probe yang menyesuaikan kesetimbangan antara udara drum dan massa biji.',
    relatedTerms: ['Charge Temperature', 'Rate of Rise (RoR)']
  },
  {
    id: 'maillard-reaction',
    term: 'Reaksi Maillard',
    termEn: 'Maillard Reaction',
    category: 'Roasting Science',
    shortDef: 'Reaksi pencokelatan non-enzimatis antara gugus amino (protein) dan gula pereduksi saat pemanasan.',
    fullDef: 'Dimulai saat warna biji bertransisi dari hijau pucat menjadi kuning keemasan (yellowing phase, ~150°C). Reaksi ini menghasilkan ratusan molekul aroma kompleks seperti pirazin (aroma kacang panggang), furan (karamel), pirrol (roasty), serta senyawa melanin cokelat yang membangun body dan kekentalan mouthfeel kopi.',
    parameters: 'Berlangsung aktif di rentang suhu 140°C – 175°C.',
    practicalApplication: 'Memperpanjang fase Maillard secara terkendali akan mempertebal body dan sensasi sweetness malt, namun jika terlalu lama akan mematikan aroma floral buah yang lembut.',
    relatedTerms: ['Yellowing Phase', 'Karamelisasi', 'Melanoidin']
  },
  {
    id: 'quakers',
    term: 'Quakers',
    termEn: 'Quakers (Biji Mentah Sangrai)',
    category: 'Roasting Science',
    shortDef: 'Biji kopi yang tidak mengalami pencokelatan saat disangrai dan tetap berwarna krem/kuning pucat.',
    fullDef: 'Quakers berasal dari buah ceri yang dipetik saat masih mentah hijau (under-ripe). Karena belum mengakumulasi asam amino dan gula pereduksi sukrosa yang cukup, biji tersebut tidak dapat melangsungkan Reaksi Maillard dan karamelisasi. Dalam seduhan, quakers menghasilkan rasa kacang tanah mentah, kertas kardus basah, dan hambar.',
    parameters: 'Standar SCA Specialty Cupping: 0 Quakers diperbolehkan dalam 100 gram sampel roasted coffee.',
    practicalApplication: 'Dapat disortir secara manual setelah roasting karena warna pucatnya sangat kontras di antara biji-biji cokelat matang lainnya.',
    relatedTerms: ['Reaksi Maillard', 'Defect Sekunder', 'Selective Picking']
  },
  {
    id: 'extraction-yield',
    term: 'Extraction Yield (EY)',
    termEn: 'Extraction Yield (%)',
    category: 'Brewing & Espresso',
    shortDef: 'Persentase massa padatan biji kopi yang berhasil terlarut ke dalam air seduhan.',
    fullDef: 'Biji kopi sangrai mengandung sekitar 28%–32% senyawa yang secara teoritis dapat larut dalam air (sisanya adalah serat selulosa tidak larut). Extraction Yield mengukur seberapa efisien air melarutkan senyawa tersebut. Rumus matematis: EY (%) = [TDS (%) × Berat Seduhan (gram)] ÷ Berat Dosis Bubuk (gram).',
    parameters: 'Standar Emas SCA: 18.0% – 22.0% (Rentang optimal rasa seimbang).',
    practicalApplication: 'EY < 18% mengindikasikan under-extraction (asam tajam, asin, hambar); EY > 22% mengindikasikan over-extraction (pahit menusuk, kering sepat/astringent).',
    relatedTerms: ['TDS', 'SCA Brewing Control Chart', 'Under-extraction']
  },
  {
    id: 'tds',
    term: 'Total Dissolved Solids (TDS)',
    termEn: 'Total Dissolved Solids (TDS %)',
    category: 'Brewing & Espresso',
    shortDef: 'Persentase konsentrasi partikel kopi terlarut di dalam secangkir air seduhan.',
    fullDef: 'TDS mengukur kekuatan (strength) atau kepekatan larutan kopi menggunakan refraktometer digital optik khusus kopi. TDS 1.35% berarti dalam 100 gram cairan seduhan, terdapat 1.35 gram padatan kopi murni dan 98.65 gram air.',
    parameters: 'Standar filter coffee SCA: 1.15% – 1.45% TDS. Standar espresso modern: 8.0% – 12.0% TDS.',
    practicalApplication: 'TDS dan Extraction Yield adalah dua sumbu yang membentuk SCA Brewing Control Chart untuk mengkalibrasi seduhan secara ilmiah.',
    relatedTerms: ['Extraction Yield (EY)', 'Refraktometer Kopi', 'Brew Ratio']
  },
  {
    id: 'channeling',
    term: 'Channeling',
    termEn: 'Channeling (Jalur Pintas Aliran Air)',
    category: 'Brewing & Espresso',
    shortDef: 'Fenomena air bertekanan mencari jalur resistensi terendah (celah retakan) di dalam bubuk kopi.',
    fullDef: 'Dalam ekstraksi espresso 9 bar, air selalu mencari jalan termudah. Jika kepadatan bubuk kopi di dalam basket portafilter tidak seragam, air akan menerobos celah retakan mikro tertentu. Akibatnya, area celah mengalami over-extraction parah (pahit gosong), sementara bubuk lainnya mengalami under-extraction (asam mentah).',
    parameters: 'Terdeteksi pada bottomless portafilter sebagai semburan tajam (spurting) atau tetesan belang-belang.',
    practicalApplication: 'Dicegah dengan teknik distribusi WDT (Weiss Distribution Technique) menggunakan jarum 0.3mm dan tamping horizontal yang rata sempurna.',
    relatedTerms: ['WDT', 'Tamping', 'Under-extraction']
  },
  {
    id: 'wdt',
    term: 'WDT (Weiss Distribution Technique)',
    termEn: 'Weiss Distribution Technique (WDT)',
    category: 'Brewing & Espresso',
    shortDef: 'Teknik mengaduk bubuk kopi di dalam basket portafilter menggunakan jarum-jarum tipis sebelum di-tamp.',
    fullDef: 'Diciptakan oleh John Weiss pada tahun 2005. Menggunakan alat berbentuk jarum akupunktur berdiameter 0.25mm – 0.4mm untuk memecah gumpalan bubuk mikro (clumps) dan mendistribusikan partikel kopi secara homogen dari dasar basket hingga permukaan.',
    parameters: 'Diameter jarum ideal: 0.25 mm – 0.35 mm.',
    practicalApplication: 'WDT secara dramatis mengurangi risiko channeling dan menaikkan Extraction Yield rata-rata sebesar 1.0% – 1.5% dengan konsistensi antar shot yang tinggi.',
    relatedTerms: ['Channeling', 'Tamping', 'Puck Prep']
  },
  {
    id: 'dial-in',
    term: 'Dial-In Espresso',
    termEn: 'Dialing In',
    category: 'Brewing & Espresso',
    shortDef: 'Proses kalibrasi variabel seduh untuk mencapai ekstraksi rasa kopi terbaik dari suatu biji tertentu.',
    fullDef: 'Proses sistematis yang dilakukan barista setiap pagi atau setiap pergantian batch beans dengan mengatur segitiga variabel: Dosis Bubuk (Dose), Hasil Ekstraksi Cairan (Yield), Waktu Aliran (Time), dan Ukuran Gilingan (Grind Size) sampai mencapai profil rasa manis, asam terstruktur, dan aftertaste panjang.',
    parameters: 'Rasio dasar modern: 1:2 (misal 18g bubuk menghasilkan 36g espresso dalam waktu 26–30 detik pada 9 bar).',
    practicalApplication: 'Jika shot terasa asam menusuk dan selesai dalam 18 detik, barista melakukan dial-in dengan memperhalus ukuran gilingan grinder (finer).',
    relatedTerms: ['Extraction Yield (EY)', 'Channeling', 'Brew Ratio']
  },
  {
    id: 'microfoam',
    term: 'Microfoam (Busa Mikro)',
    termEn: 'Microfoam / Micro-texture Milk',
    category: 'Brewing & Espresso',
    shortDef: 'Busa susu bertekstur sangat halus seperti cat sutra basah yang tercipta dari teknik vortex steaming yang benar.',
    fullDef: 'Microfoam terbentuk saat uap panas mesin espresso menginjeksi gelembung udara mikro ke dalam susu (fase stretching) lalu memecahnya secara turbulen dalam pusaran rotasi cairan (fase rolling). Pada suhu 60°C–65°C, protein kasein dan whey mengikat udara dan lemak membentuk emulsi homogen berkilau tanpa gelembung kasat mata.',
    parameters: 'Suhu akhir ideal: 60°C – 65°C (140°F – 150°F). Di atas 70°C protein terdenaturasi rusak dan rasa manis laktosa hilang.',
    practicalApplication: 'Microfoam dengan elastisitas cair sempurna adalah syarat mutlak untuk melukis seni latte art simetris dan menghasilkan tekstur cappuccino yang velvety.',
    relatedTerms: ['Vortex Steaming', 'Latte Art']
  },
  {
    id: 'cupping-protocol',
    term: 'Protokol Cupping SCA',
    termEn: 'SCA Cupping Protocol',
    category: 'Sensory & Cupping',
    shortDef: 'Prosedur pengujian sensorik cita rasa kopi standar internasional yang seragam dan dapat direplikasi di seluruh dunia.',
    fullDef: 'Didesain oleh Specialty Coffee Association untuk mengevaluasi kualitas objektif green bean. Menggunakan 5 mangkok per sampel, rasio seduh 8.25 gram bubuk kasar per 150 ml air mendidih (93°C). Penilaian meliputi 10 atribut: Fragrance/Aroma, Flavor, Aftertaste, Acidity, Body, Balance, Uniformity, Clean Cup, Sweetness, dan Overall.',
    parameters: 'Rasio: 8.25g / 150ml air (atau 0.055g/ml); Suhu tuang: 93°C (200°F); Waktu break crust: 4 menit.',
    practicalApplication: 'Kopi dengan total skor kumulatif minimal 80.00 poin dari total 100 poin berhak menyandang predikat resmi sebagai "Specialty Coffee".',
    relatedTerms: ['Clean Cup', 'Flavor Wheel', 'Q-Grader']
  },
  {
    id: 'clean-cup',
    term: 'Clean Cup (Kejernihan Rasa)',
    termEn: 'Clean Cup Attribute',
    category: 'Sensory & Cupping',
    shortDef: 'Atribut sensorik yang menilai ketiadaan cacat rasa atau kontaminasi liar dari tegukan pertama hingga dingin.',
    fullDef: 'Clean Cup mengacu pada transparansi cita rasa di mana karakter asli varietas dan terroir kopi dapat dinikmati secara murni tanpa tertutupi oleh rasa tanah kotor (earthy), getah kayu mentah, fermentasi busuk (phenolic), atau rasa berdebu karung goni.',
    parameters: 'Skor SCA: 2 poin per mangkok (Total 10 poin penuh jika kelima mangkok bersih tanpa cacat).',
    practicalApplication: 'Kopi proses Fully Washed umumnya memiliki nilai Clean Cup tertinggi karena pencucian air membuang seluruh residu lendir gula yang berpotensi memicu fermentasi liar saat penjemuran.',
    relatedTerms: ['Protokol Cupping SCA', 'Defect Primer', 'Fully Washed']
  },
  {
    id: 'triangulation',
    term: 'Uji Triangulasi',
    termEn: 'Triangulation Cupping Test',
    category: 'Sensory & Cupping',
    shortDef: 'Metode uji diskriminatif sensorik di mana seorang cupper harus menebak 1 mangkok berbeda di antara 3 mangkok.',
    fullDef: 'Merupakan salah satu modul paling menantang dalam ujian sertifikasi Q-Grader internasional. Dari 3 mangkok kopi yang disajikan dalam satu set (2 mangkok identik, 1 mangkok berbeda origin atau roast level), penguji harus mengidentifikasi mangkok anomali murni dengan indra penciuman dan pengecapan dalam batas waktu ketat.',
    parameters: 'Format ujian CQI: 4 set triangulasi (total 12 mangkok) dengan waktu maksimal 45 menit.',
    practicalApplication: 'Digunakan oleh roastery komersial untuk memastikan batch blending kopi harian tidak melenceng dari standar rasa master batch.',
    relatedTerms: ['Q-Grader', 'Protokol Cupping SCA', 'Kalibrasi Sensorik']
  },
  {
    id: 'general-hardness',
    term: 'Total Hardness / Kesadahan (GH)',
    termEn: 'General Hardness (GH) / Mineral Cations',
    category: 'Kimia Air',
    shortDef: 'Konsentrasi ion mineral divalen Kalsium (Ca2+) dan Magnesium (Mg2+) terlarut dalam air seduh.',
    fullDef: 'Ion Magnesium (Mg2+) memiliki kerapatan muatan tinggi yang sangat aktif mengikat dan menarik senyawa aroma polar volatil bermassa kecil (seperti asam sitrat dan asam malat). Ion Kalsium (Ca2+) mengikat senyawa lipid dan gula sedang yang membentuk body dan sweetness.',
    parameters: 'Standar SCA: 50 – 175 ppm CaCO3 (target optimal: ~70 – 85 ppm).',
    practicalApplication: 'Air dengan GH terlalu rendah (< 20 ppm) menghasilkan seduhan datar dan encer; GH terlalu tinggi (> 200 ppm) menyebabkan rasa berkapur tebal dan hilangnya kejernihan aroma.',
    relatedTerms: ['Alkalinitas (KH)', 'TDS', 'Water Science']
  },
  {
    id: 'alkalinity',
    term: 'Alkalinitas / Bufer Bikarbonat (KH)',
    termEn: 'Alkalinity / Acid Buffering Capacity',
    category: 'Kimia Air',
    shortDef: 'Kemampuan air untuk menetralkan asam melalui konsentrasi ion bikarbonat (HCO3-).',
    fullDef: 'Alkalinitas bertindak sebagai sistem penyangga (buffer) kimia. Saat asam organik kopi diekstraksi ke dalam air, ion bikarbonat akan bereaksi dengan ion H+ bebas untuk menstabilkan pH. Jika alkalinitas terlalu tinggi, keasaman buah cerah (acidity) kopi akan terhapus menjadi rasa hambar kapur; jika terlalu rendah, kopi akan terasa menusuk masam cuka.',
    parameters: 'Standar SCA: 40 – 75 ppm CaCO3 (target ideal: ~40 – 50 ppm).',
    practicalApplication: 'Barista menggunakan resep Barista Hustle (penambahan baking soda NaHCO3 dalam takaran fraksi miligram) untuk mengontrol tingkat alkalinitas secara presisi.',
    relatedTerms: ['General Hardness (GH)', 'pH Air', 'Extraction Yield (EY)']
  },
  {
    id: 'cogs-hpp',
    term: 'HPP / COGS (Cost of Goods Sold)',
    termEn: 'Cost of Goods Sold (COGS)',
    category: 'Bisnis & Manajemen',
    shortDef: 'Total biaya langsung bahan baku yang habis terpakai untuk memproduksi satu cangkir minuman kopi.',
    fullDef: 'Komponen dasar kalkulasi HPP segelas kopi susu komersial meliputi: biaya biji kopi espresso (misal 18g @ Rp 250/g = Rp 4.500), susu pasteurisasi (150ml @ Rp 22/ml = Rp 3.300), cup dan tutup (Rp 800), sedotan & paper bag (Rp 400), sirup/gula aren (Rp 1.000). Total COGS = Rp 10.000.',
    parameters: 'Rasio HPP standar kafe sehat: 25% – 32% dari harga jual sebelum pajak.',
    practicalApplication: 'Jika kafe menjual kopi seharga Rp 35.000 dengan COGS Rp 10.000, margin kotornya adalah 71.4%—memadai untuk menutupi biaya sewa tempat, gaji barista, dan utilitas listrik.',
    relatedTerms: ['Break-Even Point (BEP)', 'Menu Engineering', 'Bar Management']
  }
];
