export type SensoryPractical={code:string;title:string;level:string;tools:string;duration:string;intro:string;steps:string[];report:string;limit:string};
export const SENSORY_V2_PRACTICALS:SensoryPractical[]=[
  {
    "code": "sense",
    "title": "01 · Memetakan sensasi, aroma, dan tekstur",
    "level": "Pemula",
    "tools": "Dua kopi konsumsi yang aman; air minum; kertas catatan; tanpa larutan laboratorium.",
    "duration": "20–30 menit",
    "intro": "Sebelum memberi nama buah, kenali apa yang datang dari pengecapan, apa yang tercium, dan apa yang terasa sebagai tekstur.",
    "steps": [
      "Siapkan dua sampel dengan suhu yang nyaman dan mirip. Jangan menelan kopi yang kondisinya meragukan.",
      "Catat rasa dasar (asam, pahit, dan jika jelas manis) terpisah dari analogi aroma dan tekstur.",
      "Bandingkan catatan saat minuman lebih hangat dan setelah mendingin; jangan mengubah resep selama perbandingan.",
      "Tulis apakah perbedaan berasal dari pengalaman sensori, fakta alat, atau hanya dugaan tentang biji."
    ],
    "report": "Tabel tiga kanal (rasa dasar, aroma, tekstur) dan dua suhu. Tambahkan satu hal yang belum bisa disimpulkan.",
    "limit": "Ini latihan membangun bahasa sensori, bukan pengukuran threshold ataupun komposisi kimia."
  },
  {
    "code": "aroma",
    "title": "02 · Menyusun kamus aroma yang dapat dipahami",
    "level": "Pemula",
    "tools": "Referensi pangan umum yang aman: misalnya kulit jeruk yang bersih, rempah makanan, kakao; gunakan aroma tanpa harus mencicipi.",
    "duration": "20–30 menit",
    "intro": "Bangun ingatan aroma dari kategori besar sebelum nama spesifik. Gunakan referensi yang kamu kenal dan dapat dibagikan.",
    "steps": [
      "Pilih maksimal empat referensi pangan segar, bersih dan aman yang tidak memicu alergi; jangan gunakan minyak esensial atau cairan kimia sebagai bahan minum.",
      "Cium masing-masing secara singkat, kemudian beri jeda di udara netral. Jangan melakukan 'reset hidung' sebagai klaim ilmiah.",
      "Kelompokkan sebagai fruity, floral, spice, atau nutty/cocoa sesuai karakter yang masuk akal; beberapa referensi dapat berciri campuran.",
      "Ajak satu rekan memilih kategori tanpa melihat bahan. Catat apakah kalian sepakat pada kategori luas meski berbeda nama rinci."
    ],
    "report": "Kategori bersama, deskriptor pribadi, asal referensi, dan apakah orang lain memahami istilahnya.",
    "limit": "Referensi sehari-hari bukan pengganti kit referensi profesional maupun pengujian olfaktori resmi."
  },
  {
    "code": "cupping",
    "title": "03 · Cupping A/B yang adil",
    "level": "Menengah",
    "tools": "Dua kopi aman, air dan alat kebersihan memadai, timbangan, grinder, cawan ukuran sama, log dan protokol SCA-102 resmi.",
    "duration": "30–45 menit",
    "intro": "Tujuannya membuat dua sampel sebanding, bukan membuktikan rasio tertentu selalu paling nikmat.",
    "steps": [
      "Tentukan pertanyaan uji dan pilih satu versi standar persiapan yang terdokumentasi, termasuk dosis, volume, gilingan dan jadwal.",
      "Kodekan sampel A/B tanpa membuka identitas kepada pencicip; buat beberapa cawan per lot jika memungkinkan.",
      "Catat atribut pada suhu/periode observasi yang sebanding; simpan catatan individu sebelum percakapan kelompok.",
      "Catat setiap deviasi, misalnya grinder berubah, lalu putuskan apakah komparasi perlu diulang."
    ],
    "report": "Log persiapan, kode sampel, karakter sensori, deviasi, dan kesimpulan bersyarat.",
    "limit": "Jangan menyebut hasil sebagai SCA-certified cupping tanpa mengikuti prosedur dan evaluasi profesional."
  },
  {
    "code": "duplicate",
    "title": "04 · Duplikat buta dan stabilitas penilai",
    "level": "Menengah",
    "tools": "Kopi aman yang sama disiapkan dua kali dengan prosedur identik; orang kedua membantu pengkodean.",
    "duration": "25–35 menit",
    "intro": "Cari tahu apakah kamu memberi respons serupa untuk sampel yang seharusnya sama.",
    "steps": [
      "Minta teman memberi dua kode berbeda untuk kopi yang sama, tanpa memberitahumu kode mana yang kembar.",
      "Selipkan kedua cawan di antara sampel lain dengan urutan tidak berdekatan, bila kondisi dan jumlah kopi memungkinkan.",
      "Catat deskriptor, intensitas dan keyakinan tanpa berdiskusi.",
      "Buka kode, lalu cari penyebab selisih: suhu, urutan, kelelahan, alat atau skala yang tidak konsisten."
    ],
    "report": "Dua catatan sebelum pembukaan kode, selisih, dan rancangan sesi ulang.",
    "limit": "Satu duplikat tidak cukup untuk menyatakan kompetensi atau bias individu secara pasti."
  },
  {
    "code": "triangle",
    "title": "05 · Triangle test dan logika kebetulan",
    "level": "Menengah",
    "tools": "Dua kopi konsumsi yang aman dan cukup berbeda untuk latihan; 3 cawan seragam per set; seorang pengkode.",
    "duration": "30–40 menit",
    "intro": "Kamu hanya mencari satu yang berbeda. Kamu belum menilai sampel mana yang lebih disukai.",
    "steps": [
      "Pengkode menyiapkan dua cawan dari A dan satu dari B, atau sebaliknya, pada suhu dan kondisi sebanding.",
      "Gunakan variasi urutan AAB, ABA, BAA dan kebalikannya, serta kode tiga angka yang tidak memberi petunjuk.",
      "Pencicip menunjuk cawan berbeda sebelum kode dibuka. Lakukan beberapa uji independen dengan jeda yang sesuai.",
      "Bandingkan hasil dengan probabilitas tebak acak; dokumentasikan petunjuk non-sensori yang mungkin bocor."
    ],
    "report": "Urutan rahasia, jawaban independen, hasil tiap trial, dugaan gangguan, dan batas kesimpulan.",
    "limit": "Jangan memakai hasil sebagai sertifikat ambang deteksi atau nilai lulus Q Grader."
  },
  {
    "code": "roast",
    "title": "06 · Mengenali masalah roasting melalui bukti",
    "level": "Menengah",
    "tools": "Kopi konsumsi dari profil roasting yang berbeda dan dapat ditelusuri, bukan biji gosong atau terkontaminasi.",
    "duration": "30–45 menit",
    "intro": "Belajar membedakan pengamatan sensori dari diagnosis penyebab pada mesin.",
    "steps": [
      "Minta roaster menyediakan dua sampel aman dengan identitas profil disembunyikan. Hindari sengaja membuat kopi tidak layak konsumsi.",
      "Cupping secara terkendali, lalu catat aroma roast, kualitas aftertaste, karakter yang tertutup, dan sensasi drying bila ada.",
      "Bandingkan data warna/riwayat roast setelah catatan blind selesai. Tulis minimal dua hipotesis untuk tiap perbedaan.",
      "Usulkan satu eksperimen lanjut yang mengendalikan lot, persiapan dan satu variabel roast, tanpa angka resep universal."
    ],
    "report": "Observasi blind, dua dugaan penyebab, informasi roast sesudah pembukaan kode, serta rencana uji.",
    "limit": "Roasting problems tidak selalu dapat didiagnosis dari satu cawan; beberapa sinyal punya penjelasan lain."
  },
  {
    "code": "green",
    "title": "07 · Membedakan kondisi fisik biji",
    "level": "Menengah",
    "tools": "Biji green coffee kering yang diketahui aman untuk ditangani; wadah bersih; alat ukur bila tersedia; referensi grading resmi.",
    "duration": "25–40 menit",
    "intro": "Biji pecah, berlubang, pucat dan hitam membutuhkan bukti visual berbeda, serta aturan klasifikasi resmi.",
    "steps": [
      "Ambil sampel yang relevan dan catat dari bagian lot mana ia berasal; jangan menyeleksi biji terbaik saja.",
      "Pisahkan kelompok berdasarkan ciri yang benar-benar terlihat, lalu cocokkan istilah dan bobot terhadap tabel grading yang benar.",
      "Foto masing-masing kelompok dengan skala, permukaan depan-belakang dan kondisi cahaya serupa.",
      "Catat apa yang tidak bisa dibuktikan dari foto atau satu titik moisture; eskalasi kondisi yang dicurigai tidak aman."
    ],
    "report": "Identitas lot, metode sampling, kelompok visual, referensi klasifikasi, dan ketidakpastian.",
    "limit": "Foto ilustrasi dan pengamatan visual tidak membuktikan keamanan pangan, kontaminasi mikrobiologi, atau skor green grading resmi."
  },
  {
    "code": "report",
    "title": "08 · Empat lensa CVA untuk satu keputusan",
    "level": "Menengah",
    "tools": "Log cupping sampel aman atau data kasus latihan; tabel persiapan; dokumen asal bila tersedia.",
    "duration": "30–45 menit",
    "intro": "Susun satu laporan yang membuat orang lain mengerti apa yang diamati dan alasan keputusan.",
    "steps": [
      "Isi physical hanya dengan kondisi biji yang diperiksa atau tandai bila belum ada bukti.",
      "Isi descriptive memakai karakter yang diamati, bukan penilaian baik-buruk.",
      "Isi affective dengan kesan mutu dan konteks target pasar; isi extrinsic hanya dengan klaim yang mempunyai status bukti jelas.",
      "Tambahkan keputusan sementara, bukti yang masih dibutuhkan, dan kondisi yang bisa mengubah keputusan."
    ],
    "report": "Laporan empat lensa plus keputusan dan alasan. Bandingkan dengan formulir CVA resmi untuk mengetahui bagian administratif yang belum kamu isi.",
    "limit": "Lembar CherryEdu adalah latihan mandiri, bukan reproduksi atau pengganti formulir resmi SCA."
  }
];
