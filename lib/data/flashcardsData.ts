export interface Flashcard {
  id: string;
  category: 'Q-Grader & Sensory' | 'Barista & Espresso' | 'Roasting Science' | 'Agronomi & Pasca Panen' | 'Kimia Air & Seduh';
  prompt: string;
  hint?: string;
  answer: string;
  details: string;
  difficulty: 'Dasar' | 'Menengah' | 'Lanjutan';
}

export const FLASHCARDS_DATA: Flashcard[] = [
  // 1. Q-Grader & Sensory
  {
    id: 'fc-q1',
    category: 'Q-Grader & Sensory',
    difficulty: 'Dasar',
    prompt: 'Berapa rasio seduh resmi dan suhu air yang digunakan dalam protokol cupping SCA?',
    hint: 'Ingat rasio per 150 ml dan toleransi suhu air tuang.',
    answer: '8.25 gram bubuk kopi per 150 ml air (0.055 g/ml) dengan suhu air 93°C (200°F).',
    details: 'Rasio ini menghasilkan ekstraksi standar yang konsisten di seluruh dunia, memungkinkan perbandingan objektif mutu green bean antarkawasan.'
  },
  {
    id: 'fc-q2',
    category: 'Q-Grader & Sensory',
    difficulty: 'Menengah',
    prompt: 'Sebutkan 10 atribut mutu yang dinilai dalam lembar cupping resmi SCA 100 poin!',
    hint: 'Dimulai dari aroma kering hingga skor subjektif penilai.',
    answer: 'Fragrance/Aroma, Flavor, Aftertaste, Acidity, Body, Balance, Uniformity, Clean Cup, Sweetness, dan Overall.',
    details: 'Masing-masing atribut diberi skor antara 6.00 hingga 10.00 (dengan step 0.25 poin). Tiga atribut (Uniformity, Clean Cup, Sweetness) dinilai per mangkok (2 poin × 5 mangkok = 10 poin penuh).'
  },
  {
    id: 'fc-q3',
    category: 'Q-Grader & Sensory',
    difficulty: 'Lanjutan',
    prompt: 'Apa perbedaan antara Primary Defect dan Secondary Defect dalam standar green coffee grading SCA?',
    hint: 'Kaitkan dengan toleransi jumlah biji cacat dalam 350 gram sampel.',
    answer: 'Primary Defect (misal Full Black, Sour, Fungus) memiliki toleransi 0 biji untuk Specialty grade; Secondary Defect (misal Broken, Insect damage, Immature) diperbolehkan maksimal 5 butir setara cacat penuh per 350g.',
    details: 'Adanya 1 saja Primary Defect otomatis menggugurkan status biji dari Specialty Coffee menjadi Commercial/Exchange Grade.'
  },
  {
    id: 'fc-q4',
    category: 'Q-Grader & Sensory',
    difficulty: 'Menengah',
    prompt: 'Asam organik apa yang memberikan sensasi rasa buah apel hijau segar dan kerenyahan (crispness) pada kopi?',
    hint: 'Juga ditemukan pada buah anggur muda dan apel.',
    answer: 'Asam Malat (Malic Acid).',
    details: 'Asam Malat memberikan karakter keasaman segar renyah. Sebaliknya, Asam Sitrat memberikan sensasi jeruk sitrun, dan Asam Fosfat (khas kopi Kenya/ruang vulkanik) memberikan sensasi sparkling effervescent seperti soda.'
  },
  {
    id: 'fc-q5',
    category: 'Q-Grader & Sensory',
    difficulty: 'Lanjutan',
    prompt: 'Dalam uji triangulasi sensorik, bagaimana aturan penentuan tebakan mangkok kopi?',
    hint: 'Berapa mangkok identik dan berapa mangkok anomali dalam 1 set?',
    answer: 'Dari 3 mangkok per set, terdapat 2 mangkok identik (sama persis) dan 1 mangkok berbeda. Penguji harus menemukan 1 mangkok berbeda tersebut.',
    details: 'Dalam ujian lisensi Q-Grader, peserta wajib menyelesaikan 4 set triangulasi (total 12 mangkok) dengan batas waktu 45 menit dan minimal 10 set benar dari seluruh rangkaian tes.'
  },

  // 2. Barista & Espresso
  {
    id: 'fc-b1',
    category: 'Barista & Espresso',
    difficulty: 'Dasar',
    prompt: 'Sebutkan 3 variabel utama dalam "Segitiga Parameter Espresso"!',
    hint: 'Dosis bubuk, bobot cairan, dan durasi.',
    answer: 'Dose (Dosis bubuk gram), Yield (Hasil cairan gram), dan Time (Waktu aliran detik).',
    details: 'Ketiga variabel ini saling berinteraksi dengan Grind Size dan Tekanan Pompa (9 bar) untuk menentukan Extraction Yield (EY %) dan TDS (%) dari shot espresso.'
  },
  {
    id: 'fc-b2',
    category: 'Barista & Espresso',
    difficulty: 'Menengah',
    prompt: 'Apa gejala sensorik utama dari espresso yang mengalami Under-extraction?',
    hint: 'Terjadi saat air melarutkan komponen tercepat (asam & garam) tapi belum sempat melarutkan gula.',
    answer: 'Rasa asam menusuk kecut (sour), sedikit asin/briny, berbusa tipis pucat, dan aftertaste pendek hambar.',
    details: 'Under-extraction diatasi dengan: memperhalus gilingan (finer), menaikkan yield seduh, atau menaikkan suhu air boiler.'
  },
  {
    id: 'fc-b3',
    category: 'Barista & Espresso',
    difficulty: 'Menengah',
    prompt: 'Berapa suhu optimal steaming susu untuk menghasilkan microfoam manis bertekstur sutra?',
    hint: 'Di atas suhu ini, protein kasein dan whey akan rusak dan rasa manis laktosa hilang.',
    answer: '60°C – 65°C (140°F – 150°F).',
    details: 'Pada suhu 60–65°C, laktosa terasa paling manis di lidah manusia dan emulsi lemak-protein stabil. Pada suhu > 70°C, protein terdenaturasi permanen menghasilkan aroma susu gosong dan busa kaku terpisah.'
  },
  {
    id: 'fc-b4',
    category: 'Barista & Espresso',
    difficulty: 'Lanjutan',
    prompt: 'Apa itu fenomena Channeling pada puck espresso dan bagaimana cara mengatasinya?',
    hint: 'Jalur resistensi terendah air bertekanan tinggi 9 bar.',
    answer: 'Air menerobos celah retakan mikro bubuk kopi sehingga terjadi over-extraction lokal di celah tersebut dan under-extraction di area sekitarnya.',
    details: 'Diatasi dengan: teknik distribusi jarum WDT (Weiss Distribution Technique), memastikan tamping datar horizontal 90°, dan menjaga basket portafilter tetap kering bersih sebelum dosing.'
  },
  {
    id: 'fc-b5',
    category: 'Barista & Espresso',
    difficulty: 'Dasar',
    prompt: 'Apa fungsi utama fase Blooming pada manual brew pour-over (V60/Kalita)?',
    hint: 'Pelepasan gas yang terperangkap di dalam biji sangrai segar.',
    answer: 'Melepaskan gas karbon dioksida (CO2) agar air seduh berikutnya dapat membasahi dan mengekstraksi pori sel kopi tanpa terhalang gelembung gas.',
    details: 'Biasanya menggunakan air sebanyak 2–3 kali berat bubuk kopi (misal 15g bubuk dibasahi 45g air) dan didiamkan selama 30–45 detik.'
  },

  // 3. Roasting Science
  {
    id: 'fc-r1',
    category: 'Roasting Science',
    difficulty: 'Dasar',
    prompt: 'Apa yang dimaksud dengan Turning Point (TP) pada kurva roasting?',
    hint: 'Titik suhu terendah sebelum probe mulai membaca kenaikan temperatur.',
    answer: 'Titik kesetimbangan termal terendah di mana penyerapan panas oleh biji kopi dingin mulai terlewati dan suhu lingkungan drum mulai naik kembali.',
    details: 'Biasanya terjadi antara 1 menit hingga 1 menit 30 detik pada kisaran suhu 85°C – 100°C tergantung massa batch dan suhu charge.'
  },
  {
    id: 'fc-r2',
    category: 'Roasting Science',
    difficulty: 'Menengah',
    prompt: 'Tuliskan rumus matematis perhitungan Development Time Ratio (DTR %)!',
    hint: 'Perbandingan waktu development dengan total waktu sangrai.',
    answer: 'DTR (%) = (Waktu Fase Development ÷ Total Waktu Roasting) × 100%.',
    details: 'Fase development dihitung sejak letupan First Crack pertama hingga biji kopi dikeluarkan (drop) ke cooling bin. Rentang umum: 12% – 16% untuk filter light roast, 15% – 20% untuk espresso medium roast.'
  },
  {
    id: 'fc-r3',
    category: 'Roasting Science',
    difficulty: 'Lanjutan',
    prompt: 'Menurut prinsip Scott Rao, bagaimana bentuk kurva Rate of Rise (RoR) yang ideal sepanjang proses roasting?',
    hint: 'Kenaikan suhu per menit harus selalu...',
    answer: 'RoR harus menurun secara konsisten dan mulus (ever-decreasing RoR) dari awal hingga akhir tanpa adanya crash mendadak atau flick melonjak.',
    details: 'RoR crash sesaat sebelum atau saat First Crack memicu rasa baked (datar hambar seperti roti tawar); sementara RoR flick (lonjakan naik) di fase development memicu rasa gosong tajam (harsh roasty bitterness).'
  },
  {
    id: 'fc-r4',
    category: 'Roasting Science',
    difficulty: 'Menengah',
    prompt: 'Reaksi kimia apa yang bertanggung jawab atas pembentukan warna cokelat, aroma kacang panggang, dan senyawa melanoidin?',
    hint: 'Reaksi antara asam amino dan gula pereduksi.',
    answer: 'Reaksi Maillard (Maillard Reaction).',
    details: 'Dimulai saat fase pengeringan berakhir (yellowing phase, ~150°C) dan berlanjut hingga First Crack di mana degradasi asam amino dan gula membentuk ratusan senyawa volatil pirazin, furan, dan polimer melanin.'
  },

  // 4. Agronomi & Pasca Panen
  {
    id: 'fc-a1',
    category: 'Agronomi & Pasca Panen',
    difficulty: 'Dasar',
    prompt: 'Sebutkan 5 lapisan anatomis buah ceri kopi dari luar ke dalam!',
    hint: 'Kulit luar, daging manis, cangkang tanduk, kulit ari, biji.',
    answer: 'Eksokarp (Kulit Luar) → Mesokarp (Musilase/Lendir Manis) → Endokarp (Parchment/Kulit Tanduk) → Spermoderm (Silver Skin/Kulit Ari) → Endosperma (Biji Kopi Hijau).',
    details: 'Memahami lapisan ini sangat penting karena setiap proses pasca panen (Washed, Honey, Natural) ditentukan oleh lapisan mana yang dikupas atau dipertahankan selama penjemuran.'
  },
  {
    id: 'fc-a2',
    category: 'Agronomi & Pasca Panen',
    difficulty: 'Menengah',
    prompt: 'Berapa rentang kadar air (Moisture Content) green bean yang aman dan diakui standar SCA untuk penyimpanan?',
    hint: 'Biji tidak boleh terlalu basah (jamur) dan tidak boleh terlalu kering (sel mati).',
    answer: '10.0% – 12.0% (optimal: 10.5% – 11.5%).',
    details: 'Kadar air di atas 12.5% berisiko tinggi memicu jamur aflatoksin dan pembusukan mikroba; kadar air di bawah 9.0% menyebabkan embrio mati dan kehilangan rasa buah secara cepat saat disangrai.'
  },
  {
    id: 'fc-a3',
    category: 'Agronomi & Pasca Panen',
    difficulty: 'Lanjutan',
    prompt: 'Apa keunikan utama proses "Giling Basah" (Wet-Hulling) khas Sumatra dibanding proses Washed konvensional dunia?',
    hint: 'Kapan kulit tanduk (parchment) dikupas?',
    answer: 'Parchment dikupas saat biji masih basah dengan kadar air 35% – 45% (sedangkan standar dunia baru mengupas parchment setelah kering 11%).',
    details: 'Biji basah tanpa kulit tanduk dijemur langsung di bawah terik matahari, menghasilkan warna biji hijau kebiruan tua, body sangat tebal, acidity rendah, dan aksen rempah earthy khas Sumatra Mandheling & Gayo.'
  },

  // 5. Kimia Air & Seduh
  {
    id: 'fc-w1',
    category: 'Kimia Air & Seduh',
    difficulty: 'Menengah',
    prompt: 'Mengapa ion Magnesium (Mg2+) dianggap sebagai ion ekstraksi terbaik untuk kopi specialty?',
    hint: 'Kerapatan muatan ion terhadap molekul rasa polar.',
    answer: 'Karena ukuran ion Mg2+ lebih kecil dengan kerapatan muatan positif tinggi, sehingga sangat efektif mengikat senyawa aroma polar berbobot molekul rendah (asam sitrat, asam malat, ester buah).',
    details: 'Ion Kalsium (Ca2+) juga mengikat asam, namun lebih condong melarutkan senyawa berat pembentuk rasa manis dan body kental.'
  },
  {
    id: 'fc-w2',
    category: 'Kimia Air & Seduh',
    difficulty: 'Lanjutan',
    prompt: 'Apa peran Alkalinitas (Buffer Bikarbonat HCO3-) dalam air seduh kopi?',
    hint: 'Pengaruhnya terhadap persepsi keasaman (acidity).',
    answer: 'Menetralkan asam bebas dalam cairan seduhan untuk menstabilkan pH.',
    details: 'Jika Alkalinitas terlalu tinggi (> 80 ppm CaCO3), keasaman buah cerah (bright acidity) kopi akan hilang dan terasa datar seperti kapur. Jika terlalu rendah (< 20 ppm), kopi terasa sangat tajam menusuk seperti cuka.'
  },
  {
    id: 'fc-w3',
    category: 'Kimia Air & Seduh',
    difficulty: 'Dasar',
    prompt: 'Berapa rentang Total Dissolved Solids (TDS) air seduh yang direkomendasikan oleh standar SCA?',
    hint: 'Satuan part per million (ppm).',
    answer: '75 – 250 ppm (target standar optimal: 150 ppm).',
    details: 'Air destilasi murni (0 ppm) menghasilkan rasa hambar kosong karena tidak memiliki ion mineral untuk mengikat molekul rasa; air mineral botolan tinggi (> 300 ppm) membuat seduhan berasa keruh, berat berkapur, dan under-extracted.'
  }
];
