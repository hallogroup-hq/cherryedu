/** Original Barista V2 formative case prompts. They DO NOT certify practical or official competence. */
export type BaristaTransferCase={
 id:string;module:string;title:string;brief:string;initialPrompt:string;
 newEvidence:string;revisionPrompt:string;exampleReasoning:string;
};
export const BARISTA_V2_TRANSFER_CASES:BaristaTransferCase[]=[
  {
    "id": "m01-opening",
    "module": "M01",
    "title": "Bar berbau listrik",
    "brief": "Ada air di sekitar stopkontak dekat mesin; stok dan tiket tampak siap.",
    "initialPrompt": "Apa urutan tindakanmu sebelum membuka layanan?",
    "newEvidence": "Supervisor mengatakan customer sudah menunggu dan mesin terlihat normal.",
    "revisionPrompt": "Apa yang berubah atau tetap pada keputusanmu?",
    "exampleReasoning": "Hentikan penggunaan area terkait dan amankan sesuai SOP; minta pemeriksaan petugas berwenang. Tekanan antrean tidak membatalkan bahaya listrik. Komunikasikan penundaan dan opsi aman."
  },
  {
    "id": "m01-ticket",
    "module": "M01",
    "title": "Informasi pesanan hilang",
    "brief": "Tiket bertulis 'oat latte' dan pelanggan berkata itu karena tidak suka rasa susu sapi.",
    "initialPrompt": "Informasi apa yang dibutuhkan sebelum produksi?",
    "newEvidence": "Pelanggan kemudian menyatakan punya alergi protein susu sapi; pitcher dipakai bergantian.",
    "revisionPrompt": "Bagaimana keputusan produksi dan komunikasi berubah?",
    "exampleReasoning": "Preferensi dan alergi memerlukan respons berbeda. Periksa label bahan dan prosedur cross-contact serta alat; jangan berjanji aman bila tak dapat diverifikasi."
  },
  {
    "id": "m01-layout",
    "module": "M01",
    "title": "Layout dua barista",
    "brief": "Ada satu timbangan, satu grinder, jalur serah pesanan dan waste bin dekat gelas bersih.",
    "initialPrompt": "Rancang alur aman untuk dua barista.",
    "newEvidence": "Antrean bertambah dan knock box menghalangi orang membawa gelas.",
    "revisionPrompt": "Apa hipotesis dan uji desain yang bisa dilakukan tanpa memindahkan mesin menyala?",
    "exampleReasoning": "Diagramkan alternatif, bandingkan langkah dan lintasan silang sambil menjaga zona bersih/panas. Uji di kertas; realokasi perangkat permanen mengikuti otorisasi."
  },
  {
    "id": "m02-ratio",
    "module": "M02",
    "title": "1:15 bukan hukuman",
    "brief": "Filter A memakai 15 g kopi + 225 g brew water. Tamu ingin cangkir lebih besar.",
    "initialPrompt": "Sebutkan apa yang pasti diketahui dan usulkan dua pendekatan.",
    "newEvidence": "Kamu tahu A menghasilkan 180 g minuman dan tamu ingin volume tetap lebih besar tanpa rasa terasa encer.",
    "revisionPrompt": "Apa yang akan dicoba atau ditanya terlebih dahulu?",
    "exampleReasoning": "Brew ratio input A 1:15. Memperbanyak air melewati bed berbeda dari bypass; kedua cara berbeda pada ekstraksi. Klarifikasi intensitas dan ukuran target, kontrol variabel serta ukur output dan rasa sebenarnya."
  },
  {
    "id": "m02-ey",
    "module": "M02",
    "title": "Data TDS yang mengecoh",
    "brief": "Espresso A 20 g dose, 40 g minuman dan TDS 10%; B 20 g, 50 g dan TDS 8%.",
    "initialPrompt": "Bandingkan konsentrasi dan estimasi EY keduanya.",
    "newEvidence": "Pencicip A dan B memberi preferensi berlawanan; sampel tidak dibutakan.",
    "revisionPrompt": "Dapatkah hasil favorit disimpulkan dari EY? Apa rancangan uji ulangnya?",
    "exampleReasoning": "A lebih terkonsentrasi; estimasi kedua EY adalah 20% karena keduanya membawa 4 g zat terlarut. Rasa tidak otomatis sama. Uji sensorik terstruktur diperlukan."
  },
  {
    "id": "m02-air",
    "module": "M02",
    "title": "Air berbeda membuat filter berubah",
    "brief": "Dose dan ratio sama, tetapi air seduh dari sistem filter baru punya komposisi tak diketahui.",
    "initialPrompt": "Apa hipotesis selain kesalahan menggiling?",
    "newEvidence": "Waktu turun identik tetapi tasting berbeda menurut dua barista.",
    "revisionPrompt": "Data tambahan dan desain percobaan apa yang membantu?",
    "exampleReasoning": "Periksa air, suhu, grind, lot, dan konsistensi metode; hindari atribusi sebab tunggal tanpa data mineral/alkalinitas dan sensory. Rancang comparison pada kondisi aman."
  },
  {
    "id": "m03-grinder",
    "module": "M03",
    "title": "Nomor grinder sama, hasil berbeda",
    "brief": "Grinder A dan B sama-sama ditandai setelan 5, tetapi berbeda produsen.",
    "initialPrompt": "Bagaimana memindahkan resep secara bertanggung jawab?",
    "newEvidence": "B memberi shot lebih cepat dengan dose/yield sama tetapi distribusi belum dicatat.",
    "revisionPrompt": "Apa saja penjelasan pesaing sebelum mengatur grinder?",
    "exampleReasoning": "Skala grinder adalah relatif untuk alat; bed preparation, burr, retention, basket dan kondisi mesin bisa berbeda. Ukur output, catat variabel dan sesuaikan bertahap."
  },
  {
    "id": "m03-basket",
    "module": "M03",
    "title": "Basket berganti saat rush",
    "brief": "Basket 18 g diganti dengan basket lain tanpa penanda kapasitas.",
    "initialPrompt": "Bolehkah langsung memakai dose 18 g?",
    "newEvidence": "Supervisor mengklaim basket baru sama saja tetapi belum mengecek spesifikasi.",
    "revisionPrompt": "Apa pengukuran dan batas aman berikutnya?",
    "exampleReasoning": "Verifikasi model dan rentang dosis manufacturer, headspace, pemasangan dan SOP. Jangan menebak kapasitas hanya dari visual; jangan memaksakan dosis lama."
  },
  {
    "id": "m03-yield",
    "module": "M03",
    "title": "Angka espresso disalin",
    "brief": "Headbar menulis 18 g → 36 g / 30 detik untuk house espresso.",
    "initialPrompt": "Apa yang masing-masing angka ukur dan apa yang belum diukur?",
    "newEvidence": "Machine baru mengukur waktu sejak first drip alih-alih saat pompa mulai.",
    "revisionPrompt": "Bisakah angka 30 detik dibandingkan langsung?",
    "exampleReasoning": "Dose, beverage yield dan waktu berbeda; samakan definisi waktu dan catat model mesin. Rasio tidak membuktikan mutu sensorik atau jumlah air yang dipompa."
  },
  {
    "id": "m04-slow",
    "module": "M04",
    "title": "Shot tiba-tiba lambat",
    "brief": "Shot A 18→36 g/28s; B 18→36 g/37s; distribusi puck tidak dicatat.",
    "initialPrompt": "Susun dua dugaan penyebab dan satu pengujian aman.",
    "newEvidence": "Setelah grinder diubah, shot C kembali 29s tapi rasa yang dicicip berbeda.",
    "revisionPrompt": "Apakah 29s otomatis sukses? Bagaimana mengevaluasi hasilnya?",
    "exampleReasoning": "Waktu bukan target rasa tunggal. Grinder, puck, mesin, lot, air dan perubahan recipe perlu dipisahkan. Gunakan sensory plus log yang lebih lengkap."
  },
  {
    "id": "m04-taste",
    "module": "M04",
    "title": "Label asam = under?",
    "brief": "Barista A mencatat 'sour', barista B 'bright' pada shot sama.",
    "initialPrompt": "Kesimpulan apa yang tidak sah dari descriptor ini?",
    "newEvidence": "Kopi diketahui memiliki karakter buah; TDS belum diukur.",
    "revisionPrompt": "Bagaimana merancang kalibrasi sensori yang jujur?",
    "exampleReasoning": "Acidity dapat merupakan karakter kopi, bukan diagnosis otomatis. Mintalah konteks cup dan descriptor, blind repeated comparison serta observasi recipe."
  },
  {
    "id": "m04-retention",
    "module": "M04",
    "title": "Hasil berubah setelah ubah knob",
    "brief": "Grind dial disetel lebih halus tetapi dua shot berikutnya hampir identik.",
    "initialPrompt": "Apa dugaan penyebab dan prioritas pengecekan?",
    "newEvidence": "Grinder diketahui punya retention tinggi; purging perlu menghindari waste berlebih.",
    "revisionPrompt": "Rancang perbandingan sesuai manual dan anggaran.",
    "exampleReasoning": "Retensi bubuk dapat menunda dampak perubahan setting. Pastikan angka dose nyata, log purging yang diperbolehkan, ulangan terbatas dan tidak menyimpulkan tool rusak."
  },
  {
    "id": "m05-oat",
    "module": "M05",
    "title": "Busa oat sulit stabil",
    "brief": "Susu oat merek berbeda menghasilkan foam lebih kasar dengan teknik sama.",
    "initialPrompt": "Apakah barista pasti salah?",
    "newEvidence": "Label produk menunjukkan komposisi bahan/penstabil berbeda.",
    "revisionPrompt": "Apa uji pelatihan yang aman dan berguna?",
    "exampleReasoning": "Formula susu dan teknik berinteraksi; bandingkan volume, suhu awal dan aeration dengan pengawasan, catat fakta dan jangan menjanjikan pola art tertentu."
  },
  {
    "id": "m05-allergen",
    "module": "M05",
    "title": "Plant-based belum tentu bebas alergen",
    "brief": "Tamu alergi susu sapi memesan oat latte. Wand digunakan bergantian.",
    "initialPrompt": "Apa risiko dan pilihan aman?",
    "newEvidence": "Tidak ada SOP segregasi alat yang dapat ditemukan.",
    "revisionPrompt": "Apa yang boleh dijanjikan kepada tamu?",
    "exampleReasoning": "Jangan menyatakan aman hanya karena bahan oat; risiko kontak silang memerlukan prosedur terverifikasi. Hold/escalate bila tak dapat dipenuhi."
  },
  {
    "id": "m05-temperature",
    "module": "M05",
    "title": "Latte terlalu panas",
    "brief": "Tamu berkata latte terlalu panas; tidak ada suhu minuman yang diukur.",
    "initialPrompt": "Apa data yang harus dicari dan prioritas layanan?",
    "newEvidence": "Ternyata formula susu baru berbeda dan steam wand sempat menunjukkan bunyi abnormal.",
    "revisionPrompt": "Bagaimana prioritas keputusan berubah?",
    "exampleReasoning": "Utamakan keselamatan mesin dan bahan, akurasi suhu terukur sesuai SOP; jangan mengira tangan/pitcher merupakan termometer. Fault perlu eskalasi."
  },
  {
    "id": "m06-ice",
    "module": "M06",
    "title": "Iced latte berubah di meja",
    "brief": "Espresso 36 g, susu 150 g, es 90 g; pelanggan mengeluh setelah 15 menit.",
    "initialPrompt": "Mengapa angka awal belum menjelaskan pengalaman akhir?",
    "newEvidence": "Pelanggan meninggalkan gelas di tempat panas; berapa es cair tidak diketahui.",
    "revisionPrompt": "Apa yang bisa diuji dengan objektif?",
    "exampleReasoning": "Pencairan, suhu, waktu dan penyajian memengaruhi komposisi. Perlu data nyata; jangan mengarang perubahan konsentrasi atau menyalahkan pelanggan."
  },
  {
    "id": "m06-art",
    "module": "M06",
    "title": "Hati latte art tidak terbentuk",
    "brief": "Milk foam tampak berbusa besar; gerakan tuang belum difilmkan.",
    "initialPrompt": "Apa dua hipotesis dan latihan yang relevan?",
    "newEvidence": "Rekan mengatakan cukup mengubah tinggi tuang walau tekstur tidak berubah.",
    "revisionPrompt": "Apa yang perlu diuji lebih dahulu?",
    "exampleReasoning": "Pertimbangkan tekstur, aeration, volume, waktu tuang dan gerak pitcher. Video nyata dengan pelatih lebih membantu daripada foto akhir; tidak ada satu tombol ajaib."
  },
  {
    "id": "m06-menu",
    "module": "M06",
    "title": "Minuman baru terlalu mirip",
    "brief": "Barista mengusulkan 'signature' berupa latte standar dengan sirup baru.",
    "initialPrompt": "Kapan itu tetap bisa menjadi pilihan menu, dan apa yang perlu dijelaskan?",
    "newEvidence": "Pelanggan target ingin kopi yang lebih dominan daripada menu eksisting.",
    "revisionPrompt": "Apa ide eksperimen yang berbeda dari hanya menambah sirup?",
    "exampleReasoning": "Mulai dari kebutuhan pelanggan dan coffee anchor; uji base, dilution, aroma/tekstur dalam rancangan berbeda. Originalitas terkait venue; jangan mengklaim global novelty."
  },
  {
    "id": "m07-bypass",
    "module": "M07",
    "title": "Volume filter naik",
    "brief": "15 g kopi/225 g air menghasilkan 185 g minuman; pelanggan meminta lebih banyak volume.",
    "initialPrompt": "Bandingkan dua mekanisme air tambahan.",
    "newEvidence": "Air ditambah setelah seduhan; tidak ada perubahan air melalui bed.",
    "revisionPrompt": "Apa konsekuensi yang relatif dapat dihitung dan mana yang perlu testing?",
    "exampleReasoning": "Bypass mengubah konsentrasi lewat penambahan pelarut; brew-through dapat mengubah extraction. Hitung massa sesudah bypass dan hindari klaim tasting tanpa pengamatan."
  },
  {
    "id": "m07-batch",
    "module": "M07",
    "title": "Holding batch tidak jelas",
    "brief": "Batch filter siap di pot, tetapi tidak ada catatan waktu mulai dan aturan holding.",
    "initialPrompt": "Apa keputusan layanan yang bertanggung jawab?",
    "newEvidence": "Tamu event meminta 30 porsi dalam lima menit.",
    "revisionPrompt": "Apakah tekanan volume mengubah kebutuhan verifikasi?",
    "exampleReasoning": "Tahan bahan dengan kelayakan/holding yang belum jelas; jangan memakai rasa atau penampilan sebagai bukti aman. Rencanakan ulang kapasitas dan komunikasi."
  },
  {
    "id": "m07-queue",
    "module": "M07",
    "title": "Tiga filter, satu grinder",
    "brief": "Ada tiga tiket dengan kopi berbeda dan hanya satu grinder yang tersedia.",
    "initialPrompt": "Bagaimana menjaga label dan grind agar tidak tertukar?",
    "newEvidence": "Satu order dibatalkan setelah grinding tetapi sebelum seduh.",
    "revisionPrompt": "Bagaimana mengelola bubuk, catatan stok, dan order berikutnya?",
    "exampleReasoning": "Catat identitas kopi, order/tiket, setting, status bahan dan prosedur pembuangan/reuse sesuai SOP. Hindari penghematan yang menukar kopi tanpa izin."
  },
  {
    "id": "m08-strong",
    "module": "M08",
    "title": "Permintaan lebih strong",
    "brief": "Tamu ingin lebih strong tetapi tidak pahit.",
    "initialPrompt": "Pertanyaan klarifikasi pertama apa yang paling berguna?",
    "newEvidence": "Ia menjelaskan ingin rasa intens, bukan lebih banyak kafein.",
    "revisionPrompt": "Apa dua opsi realistis dan tradeoff dalam menu?",
    "exampleReasoning": "Jangan langsung double shot; klarifikasi konsentrasi/body dan opsi resep berizin, rasa yang benar-benar diketahui dan ukuran, jelaskan ketidakpastian."
  },
  {
    "id": "m08-complaint",
    "module": "M08",
    "title": "Komplain kopi encer",
    "brief": "Tamu mengeluh minuman terlalu tipis, resep sudah sesuai papan headbar.",
    "initialPrompt": "Bagaimana respons yang tidak defensif?",
    "newEvidence": "Ia menerima latte panas padahal memesan es.",
    "revisionPrompt": "Apakah ini tetap isu dial-in?",
    "exampleReasoning": "Kesalahan tiket dan suhu lebih mendasar daripada debat ekstraksi. Akui dan ikuti kebijakan remake, cek risiko, lalu perbaiki handoff."
  },
  {
    "id": "m08-unique",
    "module": "M08",
    "title": "Customer minta sesuatu yang tidak ada",
    "brief": "Tamu meminta minuman aroma buah tidak terlalu asam, tanpa dairy.",
    "initialPrompt": "Bagaimana membingkai dua pilihan aman dari menu?",
    "newEvidence": "Tamu kemudian menyebut alergi almond; stok alternativ hanya mengandung almond.",
    "revisionPrompt": "Apa keputusan baru dan komunikasi yang tepat?",
    "exampleReasoning": "Jangan improvisasi substitusi dengan allergen tak aman; verifikasi komposisi dan silang, tawarkan alternatif hanya bila ada dasar atau hold dengan jelas."
  },
  {
    "id": "m09-chemical",
    "module": "M09",
    "title": "Cleaner tidak berlabel",
    "brief": "Staf menemukan botol cleaning tanpa label di dekat sirup.",
    "initialPrompt": "Apa tindakan langsung dan larangan utama?",
    "newEvidence": "Senior ingin mencoba mencampurnya dengan chemical lain agar cepat.",
    "revisionPrompt": "Bagaimana kamu menolak dengan alasan operasional?",
    "exampleReasoning": "Jauhkan dari bahan pangan, jangan gunakan atau campurkan bahan tidak dikenal, lapor sesuai SOP dan dokumentasi bahan kimia."
  },
  {
    "id": "m09-machine",
    "module": "M09",
    "title": "Bau listrik dekat mesin",
    "brief": "Mesin berbau hangus saat antrean padat.",
    "initialPrompt": "Apa keputusan sebelum menilai shot?",
    "newEvidence": "Manajer meminta membuka panel untuk memastikan sambungan.",
    "revisionPrompt": "Apa batas wewenang teknis?",
    "exampleReasoning": "Stop work, amankan area dan panggil personel berwenang; barista tidak membuka listrik/boiler tanpa sertifikasi teknis/otorisasi."
  },
  {
    "id": "m09-water",
    "module": "M09",
    "title": "Filter air diganti, rasa berubah",
    "brief": "Setelah pergantian water filter, dua barista merasa espresso berbeda.",
    "initialPrompt": "Apa dua hipotesis selain grinder?",
    "newEvidence": "Operator tidak mencatat tipe cartridge, setup dan pembacaan air.",
    "revisionPrompt": "Apa data dan pemeriksaan yang sebaiknya diutamakan?",
    "exampleReasoning": "Cek dokumentasi pergantian filter, komposisi/kesesuaian air, mesin, dan observasi shot tanpa menyatakan satu sebab pasti; eskalasi teknis sesuai SOP."
  },
  {
    "id": "m10-fefo",
    "module": "M10",
    "title": "Barang baru kedaluwarsa lebih cepat",
    "brief": "Botol A datang Senin dan berakhir Jumat; B datang Rabu dan berakhir Kamis.",
    "initialPrompt": "Bagaimana memilih rotasi stok jika keduanya valid?",
    "newEvidence": "Botol B ternyata tidak memiliki kondisi penyimpanan yang tercatat.",
    "revisionPrompt": "Apakah FEFO membolehkan B langsung dipakai?",
    "exampleReasoning": "FEFO mendahulukan batas penggunaan lebih awal di antara stok layak; bahan tidak terverifikasi perlu pemeriksaan/hold, tidak otomatis boleh."
  },
  {
    "id": "m10-waste",
    "module": "M10",
    "title": "Shot trial terbuang",
    "brief": "Tiga dari 20 shot trial memakai 18g kopi, harga Rp250.000/kg.",
    "initialPrompt": "Hitung massa dan harga bahan kopi pada tiga shot.",
    "newEvidence": "Pemilik ingin melarang semua trial karena biaya.",
    "revisionPrompt": "Bagaimana menilai training/calibration vs waste?",
    "exampleReasoning": "54g = Rp13.500 biaya kopi pada tiga shot, bukan total biaya kedai. Percobaan terencana mendukung QC, log dan efisiensi; tidak semua material loss dapat dihilangkan."
  },
  {
    "id": "m10-swap",
    "module": "M10",
    "title": "Substitusi susu lebih murah",
    "brief": "Merek A Rp24.000/L; B Rp22.000/L; 150 mL per minuman.",
    "initialPrompt": "Berapa selisih nominal per minuman?",
    "newEvidence": "B menghasilkan busa berbeda dan ada data alergen yang perlu diperiksa.",
    "revisionPrompt": "Apa keputusan R&D dan harga?",
    "exampleReasoning": "Rp300 per gelas nominal. Kelayakan perlu tes aman, label, tekstur, waste dan pengadaan; penghematan tidak menebus risiko bahan."
  },
  {
    "id": "m11-taste",
    "module": "M11",
    "title": "Customer trial tidak sepakat",
    "brief": "Dua versi signature dicoba delapan orang; lima memilih A dan tiga B.",
    "initialPrompt": "Apa yang dapat dan tidak dapat disimpulkan?",
    "newEvidence": "Ternyata A selalu disajikan lebih dingin dan responden tahu nama versi.",
    "revisionPrompt": "Bagaimana memperbaiki uji berikutnya?",
    "exampleReasoning": "Jumlah kecil, urutan dan suhu bias; jangan sebut A sukses pasar. Standarkan sajian, acak urutan bila layak, dokumentasikan real tasting dan consent."
  },
  {
    "id": "m11-shelf",
    "module": "M11",
    "title": "Sirup buatan sendiri tanpa shelf-life",
    "brief": "Barista membuat campuran buah dan gula untuk minuman seasonal.",
    "initialPrompt": "Bisa berapa hari disimpan tanpa validasi?",
    "newEvidence": "Kedai ingin membatch 3 liter dan menyimpan pada temperatur ruang.",
    "revisionPrompt": "Apa syarat sebelum produksi batch?",
    "exampleReasoning": "Tidak ada angka aman universal dari manis/baunya; perlu kajian keamanan pangan, prosedur tervalidasi, penyimpanan dan label, atau jangan batch."
  },
  {
    "id": "m11-handoff",
    "module": "M11",
    "title": "Signature bergantung satu pembuat",
    "brief": "Satu barista membuat drink enak memakai takaran 'secukupnya'.",
    "initialPrompt": "Apa bagian SOP yang harus ditulis?",
    "newEvidence": "Rekan shift mengikuti instruksi tapi rasa berbeda dan garnish habis.",
    "revisionPrompt": "Bagaimana menguji replikasi dan alternatif?",
    "exampleReasoning": "Tulis unit dan bahan jelas, urutan, quality tolerance, allergen, biaya, safe storage dan penanganan stockout; replikasi operator kedua, bukan mengganti sembarang."
  },
  {
    "id": "m12-shift",
    "module": "M12",
    "title": "Biji baru dan alergi di rush hour",
    "brief": "Shot baru berubah 29→20s; customer menyebut alergi susu; antrean penuh.",
    "initialPrompt": "Apa prioritas tindakan dan informasi kritis?",
    "newEvidence": "Barista lain menawarkan oat pada wand bersama tanpa verifikasi.",
    "revisionPrompt": "Apa intervensi profesional berikutnya?",
    "exampleReasoning": "Stop/hold risiko alergi, verifikasi alat, klarifikasi customer; lakukan dial-in terkontrol saat aman, catat dan komunikasikan hasil."
  },
  {
    "id": "m12-surprise",
    "module": "M12",
    "title": "Eksperimen tak sesuai dugaan",
    "brief": "Rasio filter 1:15 menjadi 1:16; kamu prediksi konsentrasi turun.",
    "initialPrompt": "Data fiktif hanya menunjukkan output dan waktu berbeda; TDS serta tasting tidak ada.",
    "newEvidence": "Apa simpulan sementara yang sah?",
    "revisionPrompt": "Rekan menyatakan otomatis B lebih baik karena lebih banyak air.",
    "exampleReasoning": "Bagaimana menjelaskan ketidakpastian dan uji lanjutan?"
  },
  {
    "id": "m12-launch",
    "module": "M12",
    "title": "Signature siap diluncurkan?",
    "brief": "Rasa awal mendapat pujian, tetapi biaya, storage dan replikasi belum lengkap.",
    "initialPrompt": "Apa keputusan launch, revise atau hold?",
    "newEvidence": "Pemasok bahan utama tiba-tiba mengganti spesifikasi dan manajer ingin tetap jual.",
    "revisionPrompt": "Apa tiga bukti sebelum rilis kembali?",
    "exampleReasoning": "Tahan resep yang belum aman/terstandar, periksa supply/label, uji rasa nyata, costing dan replikasi operator lain; komitmen pelanggan tak boleh melampaui bukti."
  }
];
export function casesForBaristaModule(code:string){return BARISTA_V2_TRANSFER_CASES.filter(c=>c.module===code);}
