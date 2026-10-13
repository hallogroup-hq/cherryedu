/** Home Brewer V2 original formative scenarios; user-validation pending. */
export type HomeBrewerCase={id:string;module:string;title:string;brief:string;prompt:string;newEvidence:string;revisionPrompt:string;modelReasoning:string};
export const HOME_BREWER_CASES:HomeBrewerCase[]=[
  {
    "id": "hb-case-01",
    "module": "M01",
    "title": "Rasa yang kamu cari",
    "brief": "Kamu menyukai cangkir ringan tetapi teman ingin kopi kuat. Kamu hanya punya satu jenis kopi.",
    "prompt": "Apa dua hal yang perlu ditanyakan dan apa yang akan kamu ubah terlebih dahulu?",
    "newEvidence": "Teman menjelaskan 'kuat' berarti aroma kopi lebih dominan dalam iced drink, bukan kafein.",
    "revisionPrompt": "Bagaimana rekomendasi berubah dan bukti apa yang kamu butuhkan?",
    "modelReasoning": "Klarifikasi intensitas versus kadar kafein, pilih opsi menu/ratio yang aman, dan jelaskan bahwa selera berbeda. Perubahan proporsi bahan bisa diuji terpisah dari ekstraksi."
  },
  {
    "id": "hb-case-02",
    "module": "M01",
    "title": "Air panas di meja sempit",
    "brief": "Kettle, stopkontak dan area air berada dekat tempat orang berlalu-lalang.",
    "prompt": "Bagaimana kamu menyusun ulang meja sebelum mencoba pour-over?",
    "newEvidence": "Ternyata stopkontak berada tepat di bawah area yang basah dan kaca server retak.",
    "revisionPrompt": "Apakah proyek seduh hari ini boleh diteruskan?",
    "modelReasoning": "Hentikan dan ubah setup sebelum menuang air. Wadah retak tidak boleh dipakai; jangan mengoperasikan alat listrik dekat air berisiko. Keselamatan didahulukan."
  },
  {
    "id": "hb-case-03",
    "module": "M02",
    "title": "Label tak menjanjikan rasa",
    "brief": "Kopi A berlabel 'natural, berry'; kopi B 'washed, citrus'. Kamu ingin minuman tanpa acidity tajam.",
    "prompt": "Apa yang bisa disimpulkan dari label, apa yang harus dicicipi?",
    "newEvidence": "Saat diseduh, B justru terasa lebih nyaman menurutmu.",
    "revisionPrompt": "Apa yang berubah dari hipotesismu?",
    "modelReasoning": "Label adalah konteks asal/proses dan descriptor, bukan prediksi rasa absolut. Observasi sensorik aktual membimbing pilihan, bukan cerita kemasan."
  },
  {
    "id": "hb-case-04",
    "module": "M02",
    "title": "Setelan grinder pindah",
    "brief": "Resep menggunakan setting 8 pada grinder lama, tetapi alatmu baru berbeda merek.",
    "prompt": "Apa yang bisa disalin dan apa yang harus ditest ulang?",
    "newEvidence": "Grinder baru menghasilkan output jauh lebih lambat dan basket/filter yang dipakai juga berubah.",
    "revisionPrompt": "Apa hipotesis lain selain grind?",
    "modelReasoning": "Setting angka grinder tidak universal. Periksa dose, particle distribution, filter, metode dan aliran; uji bertahap tanpa membuka komponen bergerak."
  },
  {
    "id": "hb-case-05",
    "module": "M03",
    "title": "Air 225 g tak seluruhnya keluar",
    "brief": "Kopi 15 g, air masuk 225 g, cairan keluar 187 g.",
    "prompt": "Hitung input ratio dan informasi yang belum bisa disimpulkan.",
    "newEvidence": "Teman mengatakan extraction yield pasti 83% karena output adalah 83% input.",
    "revisionPrompt": "Mengapa alasan itu tidak sah?",
    "modelReasoning": "Input ratio 1:15. Persentase keluaran air bukan extraction yield; EY memerlukan estimasi zat terlarut dengan TDS dan massa beverage."
  },
  {
    "id": "hb-case-06",
    "module": "M03",
    "title": "Strength sama EY berbeda?",
    "brief": "A 20g dose/40g minuman/TDS 10%; B 20g/50g/TDS 8%.",
    "prompt": "Bandingkan konsentrasi dan estimasi EY.",
    "newEvidence": "Teman menyatakan A otomatis lebih enak karena TDS lebih tinggi.",
    "revisionPrompt": "Mana informasi yang masih kurang?",
    "modelReasoning": "A dan B masing-masing diperkirakan membawa 4g solutes/EY 20%. A lebih terkonsentrasi. Favorit perlu tasting aktual, bukan satu angka."
  },
  {
    "id": "hb-case-07",
    "module": "M04",
    "title": "V60 terlalu lama",
    "brief": "Brew A 3:05, brew B 4:20, dosis dan air tampak sama.",
    "prompt": "Tuliskan dua hipotesis sebelum mengganti grind.",
    "newEvidence": "Kertas filter ternyata diganti dan pola tuang juga berubah.",
    "revisionPrompt": "Bagaimana merancang eksperimen yang membedakan sebabnya?",
    "modelReasoning": "Waktu drawdown adalah observasi. Pisahkan pengaruh filter, agitasi, grind, suhu dan proses; jaga faktor yang relevan sebelum membuat klaim rasa."
  },
  {
    "id": "hb-case-08",
    "module": "M04",
    "title": "Bloom paling lama?",
    "brief": "Tutorial menyebut setiap kopi harus bloom 45 detik. Kamu melihat kopi baru melepaskan gas lebih cepat.",
    "prompt": "Apakah 45 detik boleh dijadikan aturan mutlak?",
    "newEvidence": "Air dan filter berbeda dari tutorial dan kopi belum dicicipi.",
    "revisionPrompt": "Apa percobaan kecil yang layak dan terukur?",
    "modelReasoning": "Bloom adalah wetting phase; responsnya tergantung roast/age/grind/kondisi. Rancang uji variasi bloom terukur tanpa mengubah semua komponen sekaligus."
  },
  {
    "id": "hb-case-09",
    "module": "M05",
    "title": "French press berendap",
    "brief": "Ada sedimen pada French press meski kamu sudah mematuhi rasio.",
    "prompt": "Apa mekanisme sedimen dan dua opsi aman?",
    "newEvidence": "Kamu menemukan beaker retak dan plunger sulit bergerak.",
    "revisionPrompt": "Apa yang harus dihentikan terlebih dulu?",
    "modelReasoning": "Mesh filter dapat membiarkan partikel lolos; sedimen bukan bukti satu penyebab rasa. Beaker retak dan resistansi abnormal adalah alasan menghentikan penggunaan."
  },
  {
    "id": "hb-case-10",
    "module": "M05",
    "title": "AeroPress inverted viral",
    "brief": "Teman mengajarkan AeroPress inverted untuk menahan drip-through.",
    "prompt": "Bagaimana kamu menilai manfaat dan risikonya?",
    "newEvidence": "Kamu membaca peringatan resmi pabrikan bahwa inverted tidak stabil dan berisiko air panas tumpah.",
    "revisionPrompt": "Apa pilihan metode yang lebih bertanggung jawab?",
    "modelReasoning": "Gunakan posisi standar yang stabil sesuai manual; pertimbangkan flow-control accessory kompatibel atau teknik penyegelan standar pabrikan, bukan inverted."
  },
  {
    "id": "hb-case-11",
    "module": "M06",
    "title": "TDS air sama, rasa beda",
    "brief": "Dua air minum terbaca 100 ppm pada TDS meter, tetapi kopi terasa berbeda.",
    "prompt": "Apa yang belum bisa diketahui dari angka itu?",
    "newEvidence": "Data pemasok menunjukkan hardness/alkalinitas berbeda.",
    "revisionPrompt": "Bagaimana mengubah hipotesis dan menyusun A/B?",
    "modelReasoning": "TDS menggabungkan beragam zat; tidak menentukan komposisi ion/keamanan. Hardness dan alkalinitas berbeda, dan perbedaan sensori perlu diuji secara terkendali."
  },
  {
    "id": "hb-case-12",
    "module": "M06",
    "title": "Air kettle dan bed",
    "brief": "Kettle mengukur 93°C tetapi dripper belum dipanaskan.",
    "prompt": "Bolehkah kamu menuliskan suhu coffee bed 93°C?",
    "newEvidence": "Thermometer bed menunjukkan angka lebih rendah selama pembasahan.",
    "revisionPrompt": "Apa yang kamu revisi pada catatan?",
    "modelReasoning": "Suhu awal kettle bukan suhu bed. Catat lokasi dan waktu pengukuran; jangan mengarang angka yang tidak diukur."
  },
  {
    "id": "hb-case-13",
    "module": "M07",
    "title": "Dua lidah berbeda",
    "brief": "Satu orang menyebut kopi bright, satu terlalu asam.",
    "prompt": "Apa bedanya deskripsi intensitas dan preferensi?",
    "newEvidence": "Keduanya ternyata mencicipi pada suhu berbeda dan urutan tidak sama.",
    "revisionPrompt": "Bagaimana membuat tes kalibrasi lebih adil?",
    "modelReasoning": "Intensitas karakter berbeda dari kesukaan. Samakan suhu, urutan dan catatan saat mungkin, dan hormati perbedaan preferensi."
  },
  {
    "id": "hb-case-14",
    "module": "M07",
    "title": "Deskriptor tak berarti bahan",
    "brief": "Label kopi 'jasmine' membuat kamu ingin menambah bunga melati ke seduhan.",
    "prompt": "Apa makna aroma descriptor dan pertanyaan yang perlu diajukan?",
    "newEvidence": "Seduhan ternyata tidak memberi aroma melati jelas bagimu.",
    "revisionPrompt": "Apa yang bisa dicatat tanpa menganggap label salah?",
    "modelReasoning": "Aroma yang mengingatkan jasmine bukan bukti bunga menjadi bahan kopi. Catat persepsi sendiri pada kondisi brewing nyata; preferensi dan sensitifitas bervariasi."
  },
  {
    "id": "hb-case-15",
    "module": "M08",
    "title": "Cangkir terlalu asam",
    "brief": "Seduhan A terasa terlalu tajam dan mengalir dalam 2:45.",
    "prompt": "Ajukan dua penyebab yang berbeda.",
    "newEvidence": "Setelah grind lebih halus, durasi menjadi 3:20 tetapi sensasi tajam belum membaik.",
    "revisionPrompt": "Apa eksperimen baru yang paling informatif?",
    "modelReasoning": "Karakter biji, air, komposisi, suhu sajian dan proses semua kandidat. Waktu saja tidak membuktikan rasa; ujilah satu hipotesis alternatif."
  },
  {
    "id": "hb-case-16",
    "module": "M08",
    "title": "Eksperimen empat variabel",
    "brief": "Kopi X terasa enak setelah kamu mengganti grind, air, kertas dan suhu serentak.",
    "prompt": "Apa yang sah disimpulkan dari hasil positif ini?",
    "newEvidence": "Kamu baru sadar tidak menulis nilai suhu atau timing pada sesi pertama.",
    "revisionPrompt": "Bagaimana melakukan ulangan yang lebih dapat dipercaya?",
    "modelReasoning": "Hasil keseluruhan bisa disukai, tetapi sebab individual belum terisolasi. Buat baseline dan satu perubahan utama, jangan mengarang pengukuran lampau."
  },
  {
    "id": "hb-case-17",
    "module": "M09",
    "title": "Iced brew dan es",
    "brief": "A 15g kopi +150g air panas +75g es; B 15g+175g air panas+50g es.",
    "prompt": "Apa yang sama dan berbeda dalam mekanisme A/B?",
    "newEvidence": "Setelah menunggu 10 menit, es yang mencair berbeda dan gelas juga berubah.",
    "revisionPrompt": "Apa informasi baru diperlukan sebelum menyimpulkan rasa?",
    "modelReasoning": "Total air input sama tetapi air melalui bed berbeda, begitu pula pencairan/dilution. Perlu kondisi gelas, suhu dan pengukuran nyata."
  },
  {
    "id": "hb-case-18",
    "module": "M09",
    "title": "Cold brew disimpan",
    "brief": "Batch cold brew dibiarkan dalam botol tanpa label waktu dan suhu.",
    "prompt": "Apakah aman disajikan hanya karena bau masih normal?",
    "newEvidence": "Pelanggan meminta menambahkan susu dan menyimpan campuran seminggu.",
    "revisionPrompt": "Apa batas yang tidak boleh ditebak?",
    "modelReasoning": "Tahan produk tak tervalidasi. Keamanan batch dan bahan tambahan membutuhkan prosedur hygiene, suhu, masa simpan dan label yang sah; jangan menjamin dari aroma."
  },
  {
    "id": "hb-case-19",
    "module": "M10",
    "title": "V0 vs V1 personal",
    "brief": "V0 15g/225g filter 3:05; V1 15g/240g 3:30. Kamu lebih menyukai V1.",
    "prompt": "Apa klaim preferensi yang sah dan apa yang belum terbukti?",
    "newEvidence": "Ternyata filter pada V1 juga berbeda, tanpa dicatat sebelumnya.",
    "revisionPrompt": "Apa yang harus diubah pada desain eksperimen?",
    "modelReasoning": "Kesukaan satu sesi nyata boleh dicatat, tetapi sebab belum terisolasi. Ulangi dengan filter sama jika ingin menguji ratio, cantumkan ketidakpastian."
  },
  {
    "id": "hb-case-20",
    "module": "M10",
    "title": "SOP diwariskan",
    "brief": "Teman mengikuti resep 'seduh sampai pas' tetapi cangkirnya berbeda.",
    "prompt": "Apa detail minimum agar orang lain bisa mengikuti metode?",
    "newEvidence": "Ia memakai grinder berbeda dan tidak punya thermometer.",
    "revisionPrompt": "Bagaimana menulis target yang bisa diadaptasi?",
    "modelReasoning": "Tulis dose, air input/output, alat/filter, definisi waktu, langkah dan observasi; grinder setting hanya relatif. Adaptasi tetap memerlukan pengukuran dan tasting ketika tersedia."
  }
];
export const getHomeBrewerCases=(code:string)=>HOME_BREWER_CASES.filter(x=>x.module===code);
