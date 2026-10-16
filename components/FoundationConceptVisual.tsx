'use client';
import React from 'react';

// Original educational schematics, never scientific scale models or photographs.
// Specific domain claims are sourced in the canonical manuscripts/QA records.
type Flow = { title:string; scope:string; steps:{label:string;detail:string}[]; grid?:boolean };
const flows:Record<string,Flow> = {
  'species-family':{title:'Nama tanaman dan nama pasar tidak sejajar',scope:'Peta kategori, bukan pohon genetika atau bukti identitas lot.',steps:[
    {label:'Genus — Coffea',detail:'Kelompok besar berisi banyak spesies tanaman kopi.'},
    {label:'Spesies — Arabika, Canephora, Liberika',detail:'Tiga contoh spesies berbeda dalam genus.'},
    {label:'Varietas — Bourbon',detail:'Contoh kelompok kultivar/varietas Arabika.'},
    {label:'Asal — Gayo, Jambi',detail:'Lokasi, bukan spesies atau varietas.'},
    {label:'Nama pasar — Excelsa',detail:'Nama dagang/umum yang perlu dikaitkan dengan catatan botani.'}
  ]},
  'coffee-journey':{title:'Dari buah menjadi green coffee dan minuman',scope:'Alur sederhana; bentuk yang dikeringkan tergantung metode pengolahan.',steps:[
    {label:'Buah kopi',detail:'Ceri mengandung biji dan jaringan pelindung.'},{label:'Penerimaan',detail:'Buah ditimbang, diperiksa dan diberi kode lot.'},
    {label:'Pengolahan',detail:'Sebagian atau semua kulit buah dipertahankan selama tahap tertentu.'},{label:'Pengeringan',detail:'Produk dapat berbentuk dried cherry atau parchment.'},
    {label:'Dry mill',detail:'Pelepasan kulit kering dan sortasi menuju green coffee.'},{label:'Roast & brew',detail:'Panas mengubah biji, air mengambil sebagian zat larut.'}
  ]},
  'processing-paths':{title:'Apa yang tertinggal saat pengeringan?',scope:'Tiga skema umum, bukan resep rasa atau SOP keamanan.',grid:true,steps:[
    {label:'Washed',detail:'Kulit/pulp lebih awal dilepas; mucilage umumnya dikurangi sebelum pengeringan parchment.'},
    {label:'Natural',detail:'Ceri relatif utuh dikeringkan, kemudian lapisan kering dipisahkan.'},
    {label:'Honey',detail:'Kulit/pulp dilepas lebih awal, sebagian mucilage bertahan ketika dikeringkan.'}
  ]},
  'wet-hull-paths':{title:'Bedanya waktu melepas kulit tanduk',scope:'Giling basah tidak sama dengan semua metode washed; angka kelembapan perlu pemeriksaan profesional.',grid:true,steps:[
    {label:'Banyak washed',detail:'Depulp → tangani mucilage → keringkan parchment → hulling pada kondisi kering.'},
    {label:'Giling basah',detail:'Tahap pengeringan awal → hulling parchment pada biji relatif lebih lembap → keringkan green lanjutan.'}
  ]},
  'fermentation-factors':{title:'Apa yang berubah selama fermentasi?',scope:'Model pengaruh bersama, bukan resep fermentasi pangan atau prediksi flavor.',steps:[
    {label:'Bahan awal',detail:'Buah, pulp/mucilage dan lingkungan proses.'},{label:'Mikroorganisme',detail:'Komunitas dan aktivitasnya bisa berbeda antarlot.'},
    {label:'Kondisi',detail:'Suhu, waktu, aerasi, kebersihan dan wadah.'},{label:'Perubahan',detail:'Komposisi bahan dapat berubah; hasil harus diuji dan dinilai.'}
  ]},
  'drying-water':{title:'Air di dalam biji: dua cara bertanya',scope:'Kadar air dan water activity tidak dapat saling dikonversi hanya dari angkanya.',grid:true,steps:[
    {label:'Moisture content (%)',detail:'Berapa proporsi massa bahan yang merupakan air?'},{label:'Water activity (a_w)',detail:'Bagaimana status/ketersediaan air secara termodinamik pada bahan?'},
    {label:'Kondisi simpan',detail:'Riwayat rewetting dan pengujian lot tetap perlu diketahui.'}
  ]},
  'dry-mill-flow':{title:'Dari parchment menuju lot green',scope:'Langkah nyata dapat berbeda antar fasilitas, kontrak dan bahan.',steps:[
    {label:'Parchment',detail:'Biji kering masih berselubung kulit tanduk.'},{label:'Hulling',detail:'Kulit tersebut dilepas dengan proses mekanik.'},
    {label:'Sortasi fisik',detail:'Ukuran, densitas, warna dan kerusakan diperiksa.'},{label:'Sampling',detail:'Sampel yang mewakili lot dipilih secara tepat.'},
    {label:'Green beridentitas',detail:'Hasil pemeriksaan dan dokumen lot ikut disimpan.'}
  ]},
  'roast-chemistry':{title:'Banyak reaksi berjalan tumpang tindih',scope:'Maillard, degradasi termal dan perubahan lain tidak punya satu fase sempit universal.',steps:[
    {label:'Bahan mentah',detail:'Karbohidrat, gugus amino dan beragam komponen green coffee.'},{label:'Pemanasan',detail:'Energi dan waktu memicu berbagai jalur reaksi.'},
    {label:'Senyawa berubah',detail:'Aroma dan struktur berubah lewat banyak proses.'},{label:'Cangkir',detail:'Hasil dirasakan setelah kopi digiling dan diseduh.'}
  ]},
  'packaging-gas':{title:'Degassing berbeda dari staling',scope:'Keduanya dapat terjadi bersamaan, tetapi bukan proses yang identik.',grid:true,steps:[
    {label:'Degassing',detail:'Sebagian gas CO₂ roasting keluar dari struktur biji.'},{label:'Staling',detail:'Hilang/berubahnya komponen volatil dan reaksi kimia selama simpan.'},
    {label:'Kemasan',detail:'Valve/barrier membantu mengelola gas dan udara, bukan menyelamatkan kopi rusak.'}
  ]},
  'grind-and-flow':{title:'Gilingan mengubah lebih dari satu parameter',scope:'Hubungan tepatnya tergantung brewer dan distribusi partikel, bukan satu angka universal.',steps:[
    {label:'Gilingan',detail:'Ukuran, distribusi dan struktur bed bubuk.'},{label:'Aliran',detail:'Resistansi dan jalur air berubah pada percolation.'},
    {label:'Ekstraksi',detail:'Perpindahan zat dan massa hasil seduh dapat ikut berubah.'},{label:'Rasa',detail:'Evaluasi sensorik tetap perlu dilakukan, jangan menduga sebab tunggal.'}
  ]},
  'water-chemistry':{title:'Tiap pengukuran air punya pertanyaan berbeda',scope:'Alat TDS/EC bukan tes spesifik Mg dan bikarbonat; angka bukan saran mencampur bahan kimia.',grid:true,steps:[
    {label:'EC / TDS air',detail:'Konduktivitas/estimasi total zat terlarut menurut alat dan kalibrasi.'},{label:'Hardness',detail:'Umumnya berhubungan dengan ion Ca dan Mg dalam unit laporan tertentu.'},
    {label:'Alkalinitas',detail:'Kapasitas menetralkan asam, berhubungan dengan sistem buffer.'},{label:'pH',detail:'Ukuran keasaman yang tidak menentukan alkalinitas sendirian.'}
  ]},
  'sensory-dimensions':{title:'Ada empat jenis kalimat tentang kopi',scope:'Model sederhana persepsi, bukan klasifikasi senyawa atau skor profesional.',grid:true,steps:[
    {label:'Aroma',detail:'Contohnya kesan kacang panggang atau buah.'},{label:'Taste',detail:'Contohnya asam dan pahit.'},
    {label:'Mouthfeel',detail:'Contohnya kesat atau terasa tebal.'},{label:'Preferensi',detail:'Aku menyukai atau tidak menyukai kopi itu.'}
  ]},
  'cva-lenses':{title:'Empat sudut pandang penilaian kopi',scope:'Pengenalan konsep CVA, bukan formulir, sertifikat atau skor gabungan resmi.',grid:true,steps:[
    {label:'Physical',detail:'Apa kondisi fisik green coffee?'},{label:'Descriptive',detail:'Karakter sensori apa yang diamati?'},
    {label:'Affective',detail:'Apa yang disukai kelompok/penilai tertentu?'},{label:'Extrinsic',detail:'Apa informasi asal/proses/nilai lain yang dapat ditelusuri?'}
  ]},
  'history-timeline':{title:'Satu sejarah, beberapa jalur kekuasaan',scope:'Garis besar kronologi, bukan satu jalur perjalanan literal semua tanaman maupun manusia.',steps:[
    {label:'Afrika Timur',detail:'Kawasan asal biologis dan keragaman Arabika.'},{label:'Yaman',detail:'Peran penting budidaya, konsumsi dan jaringan perdagangan.'},
    {label:'Jawa & Priangan',detail:'Budidaya kopi kolonial serta kerja dan kontrol perdagangan yang tidak setara.'},{label:'Dunia modern',detail:'Sejarah perdagangan membentuk nama tempat dan pembagian nilai sampai kini.'}
  ]},
  'value-three-flows':{title:'Tiga arus pada setiap perpindahan kopi',scope:'Peran pelaku dapat digabung; biaya/risiko tidak hilang begitu saja.',grid:true,steps:[
    {label:'Bahan',detail:'Ceri, parchment, green, roast dan minuman. Massanya berbeda.'},{label:'Informasi',detail:'Lot, inspeksi, hasil proses dan klaim asal.'},
    {label:'Uang & risiko',detail:'Pembayaran, biaya, upah, tanggung jawab dan keterlambatan.'}
  ]},
  'claim-evidence':{title:'Jangan mulai dari slogan; mulai dari bukti',scope:'Kebutuhan bukti berbeda menurut klaim, pasar, hukum dan tanggal yang berlaku.',steps:[
    {label:'Baca klaim',detail:'Apa persisnya yang dikatakan sebuah kemasan?'},{label:'Tentukan cakupan',detail:'Produk, periode, pihak dan ruang lingkupnya apa?'},
    {label:'Cari bukti',detail:'Dokumen lot, transaksi, lahan, metode penilaian yang sesuai.'},{label:'Tulis ulang',detail:'Gunakan tingkat kepastian yang setara dengan bukti.'}
  ]},

  // Additional teaching diagrams for specialty courses; shared renderer/layout unchanged.
  'farm-multi-factor':{title:'Mengapa kebun dengan elevasi serupa bisa berbeda?',scope:'Peta faktor untuk observasi; hubungan bukan bukti sebab tunggal.',grid:true,steps:[
    {label:'Lokasi dan mikroiklim',detail:'Hujan, suhu setempat, paparan angin, naungan dan bentuk lahan.'},
    {label:'Tanaman dan tanah',detail:'Spesies, bahan tanam, usia, akar, drainase dan pengelolaan kebun.'},
    {label:'Saat panen',detail:'Waktu pembungaan, tahap kematangan, sampling dan proporsi ceri disisihkan.'},
    {label:'Setelah panen',detail:'Proses, drying dan sampel roasting harus dibandingkan secara sebanding.'}
  ]},
  'lot-traceability':{title:'Satu karung green ditelusuri ke bahan awal',scope:'Setiap perpindahan perlu kode dan rekam timbang; kode tanpa bukti tidak cukup.',steps:[
    {label:'Asal bahan',detail:'Blok, petani/kelompok, tanggal panen, identitas dan kondisi ceri.'},
    {label:'Penerimaan',detail:'Netto, sortasi, waktu, keputusan reject/hold, dan petugas.'},
    {label:'Batch proses',detail:'Kode turunan, metode, alat, log kondisi dan seluruh insiden.'},
    {label:'Drying dan milling',detail:'Status water activity/kadar air, green kasar, reject dan green saleable.'},
    {label:'Buyer',detail:'Spesifikasi, hasil pemeriksaan, dokumen serah terima dan status release.'}
  ]},
  'wet-mill-hygiene':{title:'Aliran bersih dan aliran limbah tidak boleh tertukar',scope:'Skema titik pengendalian; bukan petunjuk desain instalasi pengolahan limbah.',grid:true,steps:[
    {label:'Bahan masuk',detail:'Ceri diterima, diperiksa dan dipisahkan menurut identitas serta status.'},
    {label:'Air proses',detail:'Kualitas air dinilai sesuai penggunaan dan risiko kontak dengan bahan.'},
    {label:'Alat dan operator',detail:'Sanitasi terjadwal, kondisi mesin, keselamatan dan verifikasi pekerjaan.'},
    {label:'Residu dan air limbah',detail:'Pulp serta air limbah dikelola mengikuti kapasitas, izin dan prosedur fasilitas.'}
  ]},
  'carbonic-safety':{title:'Bedakan klaim proses dari izin operasional yang aman',scope:'Diagram keputusan keselamatan, bukan instruksi injeksi atau operasi gas.',steps:[
    {label:'Definisikan proses',detail:'Lingkungan oksigen terbatas tidak selalu berarti memakai injeksi CO₂.'},
    {label:'Periksa bahaya',detail:'Asfiksia, tekanan, ventilasi, area tertutup dan akses operator.'},
    {label:'Minta bukti fasilitas',detail:'Analisis risiko, perangkat yang layak, monitoring dan prosedur darurat.'},
    {label:'Otorisasi',detail:'Operator kompeten dan penanggung jawab menyetujui kegiatan.'},
    {label:'Tidak siap?',detail:'Hentikan rencana; jangan jadikan eksperimen kelas sebagai prosedur kerja.'}
  ]},
  'shop-demand-evidence':{title:'Minat tidak sama dengan permintaan berbayar',scope:'Urutan pengujian satu konsep kedai; hasil tiap tahap memerlukan sampel yang jelas.',steps:[
    {label:'Masalah pelanggan',detail:'Catat kebiasaan beli, jam kebutuhan dan alternatif saat ini.'},
    {label:'Minat yang teramati',detail:'Wawancara/survei membentuk hipotesis, belum membuktikan omzet.'},
    {label:'Transaksi berbayar',detail:'Pop-up atau preorder menguji keputusan membeli pada harga nyata.'},
    {label:'Pembelian ulang',detail:'Periksa repeat, keluhan dan kontribusi per pesanan.'}
  ]},
  'shop-location-funnel':{title:'Traffic jalan belum berarti penjualan',scope:'Funnel konseptual untuk survei lokasi; konversi nyata harus diukur sendiri.',steps:[
    {label:'Orang melintas',detail:'Pisahkan arus total dari calon pelanggan di jam buka.'},
    {label:'Orang dapat berhenti',detail:'Evaluasi akses, keamanan, parkir atau jalur berjalan.'},
    {label:'Orang memilih membeli',detail:'Uji kesesuaian menu, waktu tunggu dan daya beli.'},
    {label:'Transaksi berulang',detail:'Bandingkan repeat dan margin dengan biaya sewa tetap.'}
  ]},
  'shop-unit-economics':{title:'Satu transaksi, beberapa lapis hasil',scope:'Jangan mengurangi kemasan atau komisi dua kali; angka dari kanal aktual.',steps:[
    {label:'Harga yang dibayar',detail:'Pisahkan harga daftar, potongan dan dasar pajak sesuai transaksi.'},
    {label:'Penerimaan merchant',detail:'Periksa fee/komisi dan siapa menanggung voucher.'},
    {label:'Kontribusi',detail:'Kurangi biaya variabel yang belum dihitung, termasuk bahan dan kemasan.'},
    {label:'Titik impas',detail:'Bandingkan kontribusi per unit dengan fixed cost dan kapasitas periode.'}
  ]},
  'shop-capacity-chain':{title:'Kapasitas bar ditentukan titik kerja tersempit',scope:'Throughput aktual berubah menurut campuran pesanan dan kesiapan staf.',steps:[
    {label:'Pesanan masuk',detail:'Campuran menu, jam puncak dan sistem pembayaran.'},
    {label:'Produksi',detail:'Grinder, espresso/steaming, persiapan bahan dan station layout.'},
    {label:'Serah terima',detail:'Label nama, kemasan, pickup dan titik antrean.'},
    {label:'Ukur bottleneck',detail:'Catat waktu aktual, order salah, backlog serta efek eksperimen.'}
  ]},
  'shop-cash-runway':{title:'Laba dicatat berbeda dari uang yang bisa dibelanjakan',scope:'Jadwal kas memakai tanggal masuk/keluar, bukan tanggal invoice saja.',steps:[
    {label:'Saldo kas awal',detail:'Bank/tunai yang benar-benar tersedia di awal periode.'},
    {label:'Uang diterima',detail:'Masukkan settlement/penagihan pada tanggal pencairan realistis.'},
    {label:'Pembayaran jatuh tempo',detail:'Stok, sewa, gaji, pajak, servis dan cicilan.'},
    {label:'Saldo dan pemicu tindakan',detail:'Cek kas minimum, buffer dan pilihan yang bisa dilakukan sebelum negatif.'}
  ]},
  'shop-layout-flow':{title:'Pesanan bergerak melewati stasiun kerja',scope:'Alur konseptual; tata letak fisik dan keselamatan harus mengikuti alat serta bangunan nyata.',steps:[
    {label:'Penerimaan pesanan',detail:'Klarifikasi modifikasi, pembayaran dan label produk.'},
    {label:'Persiapan',detail:'Bahan yang benar, stok aman, alat siap dan area tidak saling silang.'},
    {label:'Pembuatan',detail:'Ekstraksi, susu atau produk lain dengan prosedur sesuai tujuan mutu.'},
    {label:'Serah terima & cuci',detail:'Nama cocok, pengecekan pesanan dan jalur kotor dipisah dari bahan siap pakai.'}
  ]},
  'shop-safe-service':{title:'Keamanan pangan memerlukan empat titik verifikasi',scope:'Panduan keputusan, bukan pengganti pelatihan keamanan pangan atau aturan lokal.',grid:true,steps:[
    {label:'Penerimaan bahan',detail:'Sumber, kondisi kemasan, suhu bila relevan dan status alergen.'},
    {label:'Penyimpanan',detail:'Batas penggunaan, pemisahan, FEFO dan inspeksi rutin.'},
    {label:'Produksi',detail:'Kebersihan peralatan, cuci tangan, alergen dan kontrol kontak silang.'},
    {label:'Komunikasi tamu',detail:'Jujur tentang bahan serta risiko yang tidak dapat dijamin fasilitas.'}
  ]},
  'shop-owner-dashboard':{title:'Dari metrik menuju satu keputusan yang terukur',scope:'KPI harus menggunakan sumber data, periode dan definisi yang konsisten.',steps:[
    {label:'Apa yang berubah?',detail:'Omzet, kontribusi per kanal, repeat, waste atau komplain.'},
    {label:'Apa dugaan penyebabnya?',detail:'Bandingkan jadwal, stok, promo, waktu tunggu dan perubahan biaya.'},
    {label:'Apa yang diuji?',detail:'Pilih satu tindakan, penanggung jawab dan tolok ukur sebelum uji.'},
    {label:'Apa hasilnya?',detail:'Bandingkan hasil real dengan baseline dan catat keputusan berikutnya.'}
  ]},

  'shop-lease-tradeoff':{title:'Sewa murah belum tentu modal pembukaan ringan',scope:'Bandingkan pengeluaran kas awal, biaya bulanan dan kondisi kontrak. Angka harus diambil dari lokasi nyata.',grid:true,steps:[
    {label:'Pengeluaran hari pertama',detail:'Deposit, uang muka sewa, biaya instalasi dan perbaikan.'},
    {label:'Biaya bulanan',detail:'Sewa, service charge, utilitas dan pengeluaran rutin lain.'},
    {label:'Kemampuan mendapatkan transaksi',detail:'Akses pelanggan, jam ramai, harga serta kontribusi tiap pesanan.'},
    {label:'Risiko yang harus lolos dulu',detail:'Kelayakan air, listrik, sanitasi, izin kegiatan dan hak renovasi.'}
  ]},
  'shop-menu-decisions':{title:'Laris dan menghasilkan kontribusi adalah dua pertanyaan',scope:'Empat kemungkinan untuk meninjau menu; angka popularitas/kontribusi diukur dari data kedai.',grid:true,steps:[
    {label:'Sering dibeli • Kontribusi baik',detail:'Pertahankan mutu dan suplai. Jangan mengubah resep hanya agar terlihat baru.'},
    {label:'Sering dibeli • Kontribusi rendah',detail:'Periksa porsi, harga neto, bahan, komisi dan bahan terbuang.'},
    {label:'Jarang dibeli • Kontribusi baik',detail:'Uji cara pelanggan menemukan dan memahami produk sebelum menghapusnya.'},
    {label:'Jarang dibeli • Kontribusi rendah',detail:'Periksa masa uji, bahan unik, perbaikan resep, atau hentikan secara terukur.'}
  ]},
  'shop-cash-weekly':{title:'Untung di laporan tidak menjamin bisa membayar Senin',scope:'Skema waktu, bukan angka kas pasti. Uji juga defisit di tengah minggu, bukan saldo akhir saja.',steps:[
    {label:'Barang dan tagihan datang',detail:'Persediaan dan kewajiban bertambah meskipun uang belum keluar.'},
    {label:'Pembayaran jatuh tempo',detail:'Pemasok, gaji dan sewa keluar pada tanggal kontrak.'},
    {label:'Penjualan terjadi',detail:'Tercatat di POS; metode bayar menentukan kapan uang benar-benar masuk.'},
    {label:'Settlement masuk bank',detail:'Potongan, refund, dan tanggal pencairan dijelaskan dari laporan.'},
    {label:'Revisi proyeksi',detail:'Bandingkan tanggal realisasi dan rencana, lalu perpanjang lagi 13 minggu.'}
  ]},
  'shop-staff-coverage':{title:'Dari jadwal buka menuju kebutuhan orang',scope:'Jam-orang bukan jadwal kerja legal. Atur istirahat, pengganti dan aturan lokal secara terpisah.',steps:[
    {label:'Beban pelanggan per jam',detail:'Catat puncak dan waktu sepi beserta campuran menu.'},
    {label:'Tugas tiap stasiun',detail:'Kasir, bar, kebersihan, receiving, pelayanan dan penutupan.'},
    {label:'Jumlah orang yang dibutuhkan',detail:'Kalikan jumlah orang tiap interval dengan lama penugasan.'},
    {label:'Roster yang layak',detail:'Perhitungkan istirahat, pelatihan, hak pekerja, libur dan staf pengganti.'},
    {label:'Uji dan koreksi',detail:'Amati antrean, remake, beban tim dan kualitas layanan.'}
  ]},
  'shop-owner-go-no-go':{title:'Satu keputusan membuka kedai harus lolos beberapa gerbang',scope:'Bukan sertifikasi atau pengganti inspeksi instansi; bukti lapangan harus diperoleh sendiri.',steps:[
    {label:'Ada pelanggan yang benar-benar membeli?',detail:'Tunjukkan transaksi uji, alternatif pasar dan ketidakpastiannya.'},
    {label:'Lokasi dan keselamatan layak?',detail:'Periksa kontrak, fasilitas, air, higiene, izin dan aturan kerja.'},
    {label:'Menu bisa dibuat dan tetap menghasilkan?',detail:'Gunakan kartu resep, unit economics, data kapasitas dan mutu.'},
    {label:'Kas cukup sepanjang periode?',detail:'Hitung saldo terendah, deposit, pembayaran supplier dan jadwal gaji.'},
    {label:'Go, tunda atau jangan buka?',detail:'Tetapkan bukti yang belum ada, PIC dan tanggal keputusan ulang.'}
  ]},
};
const shades=['#778464','#CDB57A','#AD835B','#855137','#422D25'];
function RoastBeans(){
  return <div className="grid grid-cols-5 gap-1 sm:gap-3">{['Green','Menguning','Cokelat muda','Cokelat','Sangat gelap'].map((label,i)=>
    <figure key={label} className="text-center"><svg viewBox="0 0 100 120" className="w-full" role="img" aria-label={'Skema warna biji '+label}>
      <ellipse cx="50" cy="57" rx="29" ry="43" transform="rotate(-18 50 57)" fill={shades[i]} stroke="#372B24" strokeWidth="2"/>
      <path d="M44 19 C65 43 33 70 55 95" fill="none" stroke="#DDD1AD" strokeWidth="3"/>
    </svg><figcaption className="text-xs font-semibold text-roast-800">{label}</figcaption></figure>)}
    <p className="col-span-5 text-xs text-roast-700">Warna skematis tidak berskala Agtron; bukan penanda pasti suhu, roast defect maupun rasa.</p>
  </div>;
}
function CherryStages(){
  return <div className="grid grid-cols-3 gap-2">{[
    ['Masih berkembang','#64864B','Hijau tidak berarti seluruh buah belum matang untuk semua varietas.'],
    ['Merah matang','#9E3737','Merah adalah indikator umum beberapa kultivar.'],
    ['Kuning matang','#D6B44A','Ada kultivar dengan buah matang kuning.']
  ].map(([label,color,meaning])=><figure key={label} className="text-center">
    <svg viewBox="0 0 120 140" className="w-full max-w-[145px] mx-auto" role="img" aria-label={'Skema buah '+label}>
      <path d="M60 43 L68 13" stroke="#658050" strokeWidth="5"/><path d="M64 28 Q39 3 24 21 Q47 40 64 28" fill="#658050"/>
      <ellipse cx="60" cy="81" rx="37" ry="47" fill={color} stroke="#685241" strokeWidth="2"/>
      <path d="M44 50 Q32 72 41 88" fill="none" stroke="#F1E8D8" strokeWidth="4" opacity=".5"/>
    </svg><figcaption><strong className="text-xs sm:text-sm text-roast-950">{label}</strong><p className="mt-1 text-xs text-roast-700">{meaning}</p></figcaption>
  </figure>)}</div>;
}
function RoastGraph(){
  return <figure><svg viewBox="0 0 600 270" role="img" aria-label="Kurva suhu probe roasting sintetis, kenaikan dari menit 0 ke menit 10, penanda first crack simulasi" className="w-full h-auto">
    <path d="M58 20 V222 H580" stroke="#524639" fill="none" strokeWidth="2"/>
    {[40,85,130,175,220].map((y,i)=><g key={i}><path d={'M58 '+y+' H580'} stroke="#DDD4C5" strokeDasharray="4 5"/><text x="48" y={y+4} textAnchor="end" fontSize="11" fill="#554B40">{[220,190,160,130,100][i]}</text></g>)}
    {[0,2,4,6,8,10].map((n,i)=><text key={n} x={58+102*i} y="243" fontSize="11" textAnchor="middle" fill="#554B40">{n}</text>)}
    <path d="M58 218 C124 185 138 148 202 124 S321 68 388 60 S493 39 569 25" stroke="#8B2834" strokeWidth="4" fill="none"/>
    <path d="M402 20 V222" stroke="#9C7A42" strokeWidth="2" strokeDasharray="7 5"/>
    <text x="415" y="35" fontSize="12" fill="#473C32">First crack*</text>
    <text x="300" y="260" fontSize="12" textAnchor="middle" fill="#554B40">Waktu (menit)</text><text x="7" y="12" fontSize="12" fill="#554B40">°C*</text>
  </svg><figcaption className="text-xs text-roast-700">*Seluruh angka dan titik dibuat sebagai simulasi, bukan rekaman alat atau rekomendasi pengaturan roaster. Pembacaan probe bukan suhu setiap biji.</figcaption></figure>;
}
function BrewFlow(){
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{[
    ['Immersion',false,'Bubuk berada di air kemudian minuman dipisahkan. Contoh: French press.'],
    ['Percolation',true,'Air mengalir melewati bed bubuk dan hasilnya terkumpul. Contoh: V60.']
  ].map(([name,flow,detail])=><figure key={String(name)} className="border border-paper-300 rounded-lg p-3">
    <svg viewBox="0 0 240 175" className="w-full" role="img" aria-label={'Penampang alat '+name}>
      {flow ? <><path d="M35 25 H205 L159 119 H81 Z" fill="#E1D9C9" stroke="#554E40" strokeWidth="3"/><path d="M62 77 H180 L155 114 H88 Z" fill="#715138"/><path d="M87 126 H154 V161 H87 Z" fill="#D3E1DF" stroke="#554E40" strokeWidth="3"/><path d="M120 3 V60 M120 110 V153" stroke="#5281A6" strokeWidth="5"/><path d="M110 49 L120 61 L130 49 M110 142 L120 154 L130 142" stroke="#5281A6" strokeWidth="3" fill="none"/></>:
      <><rect x="46" y="19" width="148" height="140" rx="10" fill="#DBE4E2" stroke="#6C6357" strokeWidth="3"/><rect x="50" y="73" width="140" height="80" rx="5" fill="#886D54"/><path d="M120 0 V77" stroke="#626A65" strokeWidth="5"/>{[61,91,119,143].map((y,i)=><circle key={i} cx={92+(i%2)*51} cy={y} r="4" fill="#4B3628"/>)}</>}
    </svg><figcaption className="text-sm text-roast-950 font-semibold">{name}<p className="text-xs font-normal text-roast-700 mt-1">{detail}</p></figcaption>
  </figure>)}</div>;
}
function StrengthGlasses(){
  return <div className="grid grid-cols-2 gap-3">{[
    ['Lebih pekat',58,'Zat kopi terlarut serupa, air lebih sedikit.'],
    ['Lebih encer',112,'Zat kopi terlarut serupa, air lebih banyak.']
  ].map(([label,fill,detail])=><figure key={String(label)} className="text-center">
    <svg viewBox="0 0 150 160" role="img" aria-label={String(detail)} className="w-full max-w-[160px] mx-auto">
      <path d="M15 10 L29 151 H120 L134 10" fill="#F7F7F3" stroke="#7B7168" strokeWidth="3"/>
      <path d={'M'+(15+Number(fill)/14)+' '+(150-Number(fill))+' H'+(134-Number(fill)/14)+' L120 149 H29 Z'} fill="#AA8A67"/>
      {[50,72,95,114].map((x,i)=><circle key={i} cx={x} cy={130-i*5} r="3" fill="#66492F"/>)}
    </svg><figcaption><strong className="text-xs sm:text-sm text-roast-950">{label}</strong><p className="text-xs text-roast-700 mt-1">{detail}</p></figcaption>
  </figure>)}</div>;
}
function CoffeeNameLevels(){
  return <div className="space-y-3">
    <div className="rounded-lg bg-roast-950 text-white text-center py-3 px-4">
      <strong className="font-serif text-lg">Genus: Coffea</strong>
      <p className="text-xs mt-1 opacity-90">Kelompok tanaman yang mencakup banyak spesies</p>
    </div>
    <p className="text-center text-xs font-mono text-roast-700" aria-hidden="true">↓ Tiga contoh spesies dalam genus yang sama ↓</p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <div className="rounded-lg border border-paper-300 bg-white p-3">
        <strong className="block text-sm text-roast-950">C. arabica</strong>
        <span className="block text-xs text-roast-700 mt-1">Arabika</span>
        <div className="mt-3 rounded border-l-2 border-cherry-700 bg-paper-100 px-3 py-2">
          <p className="text-xs font-semibold text-roast-900">Contoh varietas: Bourbon</p>
          <p className="text-xs text-roast-700 mt-1">Bagian dari kelompok Arabika, bukan spesies baru</p>
        </div>
      </div>
      <div className="rounded-lg border border-paper-300 bg-white p-3">
        <strong className="block text-sm text-roast-950">C. canephora</strong>
        <span className="block text-xs text-roast-700 mt-1">Dikenal di pasar sebagai Robusta</span>
      </div>
      <div className="rounded-lg border border-paper-300 bg-white p-3">
        <strong className="block text-sm text-roast-950">C. liberica</strong>
        <span className="block text-xs text-roast-700 mt-1">Liberika, spesies yang berbeda dari Arabika</span>
      </div>
    </div>
    <div className="rounded-lg border border-dashed border-paper-300 bg-white px-4 py-3">
      <p className="font-semibold text-sm text-roast-950">Di luar pohon klasifikasi ini: informasi pada label</p>
      <p className="text-xs leading-5 text-roast-700 mt-1"><strong>Gayo / Jambi</strong> menyebut wilayah asal. <strong>Excelsa</strong> adalah nama yang dipakai di perdagangan dengan riwayat taksonomi terkait <em>C. dewevrei</em>. Informasi tempat dan nama pasar tidak otomatis menjadi cabang spesies baru.</p>
    </div>
  </div>;
}
function Shell({title,scope,children}:{title:string;scope:string;children:React.ReactNode}){
  return <figure className="my-8 bg-paper-50 border border-paper-300 rounded-xl overflow-hidden not-prose" aria-label={title}>
    <header className="px-4 sm:px-6 py-4 bg-white border-b border-paper-300">
      <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-cherry-700">Lihat dan pahami</span>
      <h3 className="font-serif font-bold text-lg sm:text-xl text-roast-950 mt-1">{title}</h3>
    </header><div className="p-4 sm:p-6">{children}</div>
    <figcaption className="text-xs leading-5 text-roast-700 px-4 sm:px-6 pb-4">{scope}</figcaption>
  </figure>;
}
export function FoundationConceptVisual({ id }:{id:string}){
  if(id==='species-family')return <Shell title="Nama tanaman dan nama pasar tidak sejajar" scope="Skema klasifikasi ilustratif, bukan pohon filogenetik lengkap atau hasil identifikasi sampel."><CoffeeNameLevels/></Shell>;
  if(id==='cherry-ripeness')return <Shell title="Warna buah kopi matang tidak selalu sama" scope="Skema orisinal, bukan foto inspeksi kebun atau ukuran/pengujian kematangan."><CherryStages/></Shell>;
  if(id==='roast-levels'||id==='roast-stages')return <Shell title="Lihat perubahan penampilan biji" scope="Tidak berskala dan bukan diagnosis warna atau defect."><RoastBeans/></Shell>;
  if(id==='roast-curve')return <Shell title="Grafik roasting simulasi yang benar-benar bisa dibaca" scope="Gunakan untuk latihan membaca bukti, bukan menjalankan mesin."><RoastGraph/></Shell>;
  if(id==='immersion-percolation')return <Shell title="Dua jalur air dalam kopi" scope="Penampang skematis, bukan alat berskala."><BrewFlow/></Shell>;
  if(id==='strength-vs-extraction')return <Shell title="Jumlah zat sama, jumlah air berbeda" scope="Konsentrasi (strength) berbeda dari berapa banyak zat berpindah dari bubuk (EY)."><StrengthGlasses/></Shell>;
  const flow=flows[id];if(!flow)return null;
  return <Shell title={flow.title} scope={flow.scope}>
    {flow.grid ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {flow.steps.map(step => <div key={step.label} className="rounded-lg border border-paper-300 bg-white px-4 py-3">
          <p className="font-sans font-bold text-sm text-roast-950">{step.label}</p>
          <p className="mt-1 font-sans text-xs sm:text-sm leading-5 text-roast-700">{step.detail}</p>
        </div>)}
      </div>
    ) : (
      <ol className="flex flex-col gap-2">
        {flow.steps.map((step,i) => <li key={step.label} className="rounded-lg border border-paper-300 bg-white px-4 py-3 flex gap-3 items-start">
          <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-roast-950 text-white text-xs font-mono">{i+1}</span>
          <div><p className="font-sans font-bold text-sm text-roast-950">{step.label}</p><p className="mt-1 font-sans text-xs sm:text-sm leading-5 text-roast-700">{step.detail}</p></div>
        </li>)}
      </ol>
    )}
  </Shell>;
}
