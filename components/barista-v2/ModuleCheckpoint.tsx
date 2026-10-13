'use client';

import React, { useState } from 'react';

type CaseStudy = {heading:string; evidence:string[]; challenge:string; model:string; safety:string};
const cases: Record<string,CaseStudy> = {
 M01:{heading:'Opening di bar yang belum pernah kamu lihat',evidence:['Rak susu terpisah dari mesin','Ada tumpahan dekat stopkontak','Pelanggan pertama meminta “strong”, belum jelas artinya'],challenge:'Apa tiga tindakan awal yang harus dilakukan, satu klarifikasi pelanggan, dan satu tindakan yang harus dihentikan? Jelaskan urutan alasannya.',model:'Dahulukan area listrik/basah sesuai SOP dan eskalasi bila perlu; verifikasi bahan, alergen dan alat; klarifikasi arti “strong” sebelum memilih resep. Jangan menyalakan atau memakai alat dekat potensi bahaya. Setelah aman baru tentukan urutan tugas dan serahkan informasi ke tim.',safety:'Area berisiko harus diamankan; tidak ada eksperimen sebelum aman.'},
 M02:{heading:'Resep filter berubah, data sensori tidak ada',evidence:['Seduhan A: 15 g kopi + 225 g air masuk','Seduhan B: 15 g kopi + 240 g air masuk','Tidak ada data TDS, rasa, atau output minuman'],challenge:'Apa yang boleh dihitung, apa yang belum bisa disimpulkan, dan bagaimana menguji efek penambahan air melalui bed dibanding bypass?',model:'Rasio input A 1:15 dan B 1:16. Tanpa output/TDS atau tasting, belum bisa menyimpulkan extraction yield dan rasa. Uji through-bed dan bypass terpisah dengan variabel terkontrol, massa output terukur dan pengamatan nyata; bypass dilakukan sesudah pemisahan bed.',safety:'Gunakan alat sesuai prosedur; data simulasi bukan tasting.'},
 M03:{heading:'Mesin dan grinder baru sebelum open',evidence:['Resep lama: dose 18 g, yield 36 g, 28 detik','Mesin baru: definisi waktu belum disepakati','Grinder baru mempunyai skala setelan berbeda'],challenge:'Parameter apa yang bisa dipertahankan, apa yang harus dikalibrasi ulang, dan data apa yang perlu dicatat sebelum membuat rekomendasi?',model:'Pertahankan identitas kopi, satuan, target minuman dan prosedur dasar ketika aman. Periksa manual, definisi shot time, kemampuan mesin, basket, grinder, dosis/yield; lakukan uji bertahap dan tulis log. Jangan memindahkan angka setelan grinder secara mentah.',safety:'Jangan membuka mesin atau grinder bergerak tanpa otorisasi.'},
 M04:{heading:'Espresso melambat, rasa dinilai berbeda',evidence:['A 18→36 g/28 detik; B 18→36 g/37 detik','Distribusi puck B dan kondisi air belum dicatat','Dua pencicip berbeda pendapat mengenai balance'],challenge:'Ajukan minimal dua hipotesis, pilih pengukuran pertama yang aman, dan jelaskan mengapa satu shot time tidak membuktikan penyebab.',model:'Kemungkinan terkait grind/fines, distribusi, kondisi basket atau sistem air. Periksa apa yang berubah, ulang dalam kondisi terkontrol dan catat dose, yield, waktu, observasi aliran dan sensori. Ketidaksetujuan rasa tidak otomatis mengidentifikasi kesalahan pencicip.',safety:'Hentikan saat mesin menunjukkan gejala teknis tidak aman.'},
 M05:{heading:'Susu baru, kebutuhan alergi baru',evidence:['Susu oat baru berlabel bahan tidak sama dengan sebelumnya','Customer punya alergi susu sapi','Alat steam dipakai bergantian; SOP alergi belum diketahui'],challenge:'Apa yang harus diverifikasi dulu, apa yang boleh diuji di sesi latihan dan bagaimana kamu menjelaskan keterbatasan saat pelayanan?',model:'Pastikan label bahan, kemampuan pemisahan alat, cross-contact, SOP dan persetujuan. Jika risiko tidak bisa dikelola, jangan menjanjikan produk aman. Eksperimen foam dengan variasi susu hanya dalam sesi pelatihan aman yang tidak memaparkan pelanggan pada alergen.',safety:'Pernyataan bebas alergen memerlukan proses terverifikasi, bukan sekadar bahan alternatif.'},
 M06:{heading:'Latte terlihat indah, pesanan tidak cocok',evidence:['Pelanggan memesan kopi susu dingin tidak terlalu manis','Barista membuat latte art panas dengan syrup standar','Foto hasil terlihat menarik tetapi tiket menyebut iced'],challenge:'Apa yang salah, bagaimana prioritas remake dan evaluasi, serta eksperimen menu apa yang layak dilakukan kemudian?',model:'Utamakan ketepatan tiket, suhu, komposisi, alergen dan keputusan remake sesuai SOP. Pola latte art tidak menebus kesalahan jenis minuman. Eksperimen rasa/cairan tambahan layak dilakukan setelah layanan, dengan data massa dan tasting nyata.',safety:'Jangan menukar susu/alat tanpa mengecek alergen.'},
 M07:{heading:'Filter yang sama harus melayani dua permintaan',evidence:['Kopi 15 g, air 225 g, output awal 180 g','Pelanggan A mau porsi lebih besar','Pelanggan B ingin rasa kopi lebih dominan dengan ukuran tetap'],challenge:'Tulis dua opsi pendekatan dan rancang uji yang membedakan tambahan air melalui bed dari bypass.',model:'Klarifikasi tujuan kedua pelanggan. Untuk memperbesar porsi, lebih banyak input air melalui bed atau penambahan sesudah seduh memiliki konsekuensi berbeda. Untuk dominansi rasa, evaluasi komposisi, pilihan menu, dose dan target konsentrasi dalam SOP. Catat output, waktu dan sensori jika nyata.',safety:'Pertimbangkan waktu layanan dan penggunaan alat panas sesuai SOP.'},
 M08:{heading:'Pelanggan meminta minuman yang belum ada di menu',evidence:['Ingin aroma buah tanpa rasa asam tajam','Tidak boleh susu sapi karena alergi','Kedai punya beberapa coffee base tetapi tidak ada resep baru teruji'],challenge:'Apa dua pertanyaan klarifikasi, pilihan yang bisa ditawarkan tanpa janji palsu, dan kondisi saat kamu harus menahan modifikasi?',model:'Klarifikasi maksud sensori serta batas alergi; cek bahan, alat dan menu. Beri pilihan yang ada dengan tradeoff. Rencana signature baru tidak otomatis aman untuk disajikan; dapat diuji dan disetujui terpisah. Sampaikan keterbatasan dengan empati.',safety:'Risiko cross-contact tidak bisa dikesampingkan oleh kreativitas.'},
 M09:{heading:'Muncul bau listrik dan tekanan tak lazim',evidence:['Ada bau panas di belakang mesin','Salah satu lampu kesalahan menyala','Teknisi belum datang, pelanggan sedang menunggu'],challenge:'Susun keputusan serve/hold/escalate, catatan insiden, dan batas apa yang tidak boleh dilanggar operator.',model:'Hentikan penggunaan unit terkait dan ikuti prosedur keselamatan venue, hindari akses area berisiko; lapor supervisor dan teknisi. Catat waktu, gejala, dampak tiket dan status peralatan tanpa diagnosis spekulatif. Jangan membuka panel atau mengubah valve.',safety:'Kondisi listrik/tekanan yang mencurigakan harus didahulukan dibanding pesanan.'},
 M10:{heading:'Alternatif susu tampak lebih murah',evidence:['Susu A Rp24.000/liter; B Rp22.000/liter','Satu minuman memakai 150 mL','Biaya waste dan efek rasa/tekstur belum diketahui'],challenge:'Hitung selisih bahan per gelas, jelaskan apa yang belum masuk HPP, dan desain uji sebelum mengganti bahan.',model:'Selisih nominal Rp300/gelas untuk 150 mL. Belum memperhitungkan waste, overhead, perbedaan usable yield, perubahan keamanan alergen dan persepsi pelanggan. Uji berizin dengan bahan tercatat dan tasting nyata; putuskan berdasarkan bukti bukan harga saja.',safety:'Substitusi harus menghormati komposisi dan risiko alergen.'},
 M11:{heading:'Signature mendapat pujian, tetapi SOP belum siap',evidence:['Varian V2 disukai 4 dari 6 peserta tasting kecil','Bahan aromatik tidak mempunyai pedoman batch storage','HPP belum mencakup waste dan barista lain belum mencoba resep'],challenge:'Apa keputusan peluncuran yang defensibel, eksperimen berikutnya, dan bukti apa yang masih harus didapatkan?',model:'Jangan mengklaim siap launch hanya dari enam tanggapan. Hold penyimpanan batch sampai keamanan divalidasi; lengkapi costing, SOP dan uji replikasi orang lain; uji kelompok pelanggan yang relevan dengan feedback netral. Lanjut, revisi atau batalkan berdasarkan bukti.',safety:'Kesenangan rasa tidak dapat menebus ketidakpastian keamanan bahan.'},
 M12:{heading:'Capstone: berikan keputusan dan portofolio',evidence:['Lot kopi berganti dan shot time menyimpang','Pelanggan meminta kopi lebih strong dan susu alternatif karena alergi','Signature test menarik tetapi belum direplikasi oleh staf lain'],challenge:'Tulis prioritas risiko, dua hipotesis kopi, satu eksperimen terkendali, cara menjawab pelanggan, serta syarat signature bisa diluncurkan.',model:'Isolasi risiko alergi dan alat yang belum aman; jelaskan preferensi tanpa menebak kadar kafein. Catat dose/yield/alat untuk dial-in, buat uji aman satu variabel dengan hasil terukur. Signature harus punya resep, uji rasa nyata, costing, safety, customer feedback dan replikasi operator kedua.',safety:'Teori dan dokumentasi tidak menyatakan kemampuan fisik sudah tersertifikasi.'}
};
const box='block w-full rounded-md border border-paper-300 bg-white px-3 py-3 text-sm leading-6 text-roast-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';
export function BaristaModuleCheckpoint({moduleCode}:{moduleCode:string}){
 const task=cases[moduleCode];
 const [answer,setAnswer]=useState({decision:'',evidence:'',experiment:'',communication:''});
 const [revealed,setRevealed]=useState(false);
 const [checks,setChecks]=useState([false,false,false,false]);
 if(!task)return null;
 const rows:[
   keyof typeof answer,string,string
 ][]=[
 ['decision','Keputusan yang kamu pilih','Apa urutan tindakan dan alasanmu?'],
 ['evidence','Informasi dan penyebab yang kamu pertimbangkan','Apa fakta yang ada, apa dugaanmu, dan apa yang masih belum diketahui?'],
 ['experiment','Uji atau verifikasi berikutnya','Jelaskan variabel kontrol, observasi terukur, keselamatan dan ketidakpastian.'],
 ['communication','Apa yang akan kamu komunikasikan?','Sampaikan tradeoff, penundaan, atau rekomendasi kepada tamu atau tim.']
 ];
 const canReveal=Object.values(answer).every(v=>v.trim().length>=25);
 return <section aria-label={'Tantangan akhir '+moduleCode} className="not-prose my-12 space-y-5 border-t-2 border-roast-950 pt-8">
  <div>
   <p className="font-mono text-xs uppercase font-semibold tracking-widest text-cherry-700">Tantangan akhir modul</p>
   <h3 className="mt-2 font-serif text-2xl font-bold text-roast-950">{task.heading}</h3>
   <p className="mt-3 text-sm leading-7 text-roast-800">{task.challenge}</p>
  </div>
  <div className="border-y border-paper-300 py-4">
   <p className="mb-2 text-xs font-bold uppercase tracking-wider text-roast-600">Bukti kasus fiktif</p>
   <ul className="space-y-2 text-sm leading-6 text-roast-900">{task.evidence.map(e=><li key={e} className="flex gap-3"><span aria-hidden="true">•</span>{e}</li>)}</ul>
  </div>
  <form onSubmit={e=>{e.preventDefault();if(canReveal)setRevealed(true);}} className="space-y-4">
   {rows.map(([key,label,hint])=><label key={key} className="block space-y-1">
    <span className="block text-sm font-semibold text-roast-950">{label}</span>
    <span className="block text-xs leading-5 text-roast-700">{hint}</span>
    <textarea value={answer[key]} onChange={e=>{setAnswer(a=>({...a,[key]:e.target.value}));setRevealed(false);}} className={box} rows={3} maxLength={1600}/>
   </label>)}
   <button type="submit" disabled={!canReveal} className="rounded-lg bg-roast-950 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-40">Bandingkan dengan contoh keputusan</button>
  </form>
  {revealed&&<div role="status" aria-live="polite" className="space-y-3 rounded-lg border border-paper-300 bg-paper-100 p-4">
   <p className="font-semibold text-roast-950">Contoh penalaran, bukan kunci tunggal</p>
   <p className="text-sm leading-7 text-roast-900">{task.model}</p>
   <p className="text-sm leading-6 text-roast-800"><strong>Batas kritis:</strong> {task.safety}</p>
   <fieldset className="space-y-2 border-t border-paper-300 pt-4">
    <legend className="pb-2 text-sm font-semibold text-roast-950">Refleksi mandiri (tidak dihitung sebagai sertifikat)</legend>
    {['Saya membedakan observasi dari asumsi','Saya menyatakan batas aman dan wewenang','Saya memilih percobaan/pemeriksaan yang bisa memberi bukti','Saya menjelaskan tradeoff dan ketidakpastian'].map((label,i)=><label key={label} className="flex items-start gap-3 text-sm text-roast-900"><input type="checkbox" checked={checks[i]} onChange={e=>setChecks(a=>a.map((v,n)=>n===i?e.target.checked:v))} />{label}</label>)}
   </fieldset>
   <p className="text-xs leading-5 text-roast-700">Jawaban ini tidak dinilai otomatis, tidak disimpan ke akun, dan tidak membuktikan kompetensi praktik.</p>
  </div>}
 </section>;
}