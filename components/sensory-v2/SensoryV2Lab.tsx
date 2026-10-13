'use client';
import {useState} from 'react';

type ChoiceLab={prompt:string;options:string[];correct:number;reasons:string[];after:string};
const labs:Record<string,ChoiceLab>={
 M01:{prompt:'Supplier menulis “blueberry” pada invoice. Dalam lensa apa invoice ditempatkan sebelum blind cupping?',options:['Descriptive: blueberry sudah terbukti','Extrinsic: klaim supplier yang perlu diverifikasi','Affective: semua panel harus menyukai'],correct:1,reasons:['Salah: kata dalam dokumen bukan pengamatanmu.','Tepat: informasi eksternal dicatat terpisah hingga blind descriptive selesai.','Tidak tepat: preferensi tidak berasal dari label supplier.'],after:'Jika deskripsi blind ternyata “cocoa”, jangan mengubahnya agar sesuai invoice.'},
 M02:{prompt:'Evaluator merasakan sensasi kering pada pipi bagian dalam. Kanal observasi paling tepat?',options:['Mouthfeel/astringency','Aroma ortonasal','Dokumen extrinsic'],correct:0,reasons:['Tepat: kesan kering termasuk pengalaman tekstural/somatosensori.','Tidak: ini bukan bau yang tercium melalui hidung.','Tidak: dokumen asal tidak mengukur sensasi mulut.'],after:'Kering dan pahit dapat hadir bersamaan tetapi bukan sinonim.'},
 M04:{prompt:'Panel mencatat fruity sangat kuat tetapi tidak menyukai karakter tersebut. Pilih laporan yang paling akurat.',options:['Intensity rendah karena tidak disukai','Fruity tinggi pada descriptive, kesan mutu lebih rendah pada affective','Hapus data fruity agar konsisten'],correct:1,reasons:['Keliru: kekuatan atribut bukan skor kesukaan.','Tepat: kedua respons menangkap aspek berbeda.','Menghapus observasi membuat data deskriptif tidak jujur.'],after:'Pisahkan karakter dan kesan mutu sebelum membahas alasan pasar.'},
 M05:{prompt:'Kopi untuk filter diterima positif, tetapi pasar minuman susu merasa karakter tertutup. Apa interpretasi paling wajar?',options:['Salah satu pasar tidak paham kopi','Descriptive harus diganti sesuai strategi sales','Affective bisa berbeda untuk dua aplikasi'],correct:2,reasons:['Tidak ada cukup bukti menyalahkan panel.','Tidak: pengamatan sensori asli tidak disesuaikan agar cocok sales.','Tepat: konteks penggunaan memengaruhi kesan mutu.'],after:'Uji produk dengan protokol yang cocok dan tetap dokumentasikan perbedaan.'},
 M06:{prompt:'Sampel green coffee punya moisture terukur tetapi belum ada data aw. Apa yang sah?',options:['Bisa langsung menyatakan aman dari jamur','Moisture dan aw adalah angka yang dapat disamakan','Moisture diketahui, risiko penyimpanan belum dapat diputuskan dari angka itu sendiri'],correct:2,reasons:['Berbahaya: tidak ada jaminan keamanan dari satu angka.','Keliru: besaran fisik dan pengukurannya berbeda.','Tepat: lengkapi pemeriksaan dan konteks penyimpanan.'],after:'Untuk tanda keamanan, selalu ikuti SOP dan otoritas pengujian yang sesuai.'},
 M07:{prompt:'Klaim “100% petani sejahtera” tanpa data pendapatan harus dicatat sebagai...',options:['Fakta karena harga jual kopi tinggi','Klaim belum terverifikasi yang butuh cakupan dan bukti','Atribut descriptive rasa manis'],correct:1,reasons:['Harga konsumen tidak membuktikan pendapatan petani.','Tepat: batasi klaim sesuai bukti.','Data sosial bukan sifat sensori.'],after:'Bukti satu invoice pun tidak otomatis mewakili kesejahteraan seluruh produsen.'},
 M09:{prompt:'Satu dari lima cangkir teridentifikasi phenolic dua kali pada sublot sama. Tindakan awal?',options:['Abaikan karena rata-rata baik','Tahan bagian terkait dan investigasi','Hapus catatan terburuk'],correct:1,reasons:['Rata-rata dapat menyembunyikan anomali QC.','Tepat: uji penyebab dan representativitas sebelum release.','Menghapus data menyembunyikan potensi masalah.'],after:'Simpan log sampling dan prosedur pengujian ulang secara terpisah.'},
 M10:{prompt:'Buyer membuka bukti baru tentang asal lot. Apa yang boleh berubah?',options:['Riwayat descriptive awal dihapus','Catatan kesimpulan diperbarui dengan versi dan alasan','Skor semua panel otomatis disamakan'],correct:1,reasons:['Catatan asli tidak boleh dimanipulasi.','Tepat: data baru boleh mengubah rekomendasi dengan audit trail.','Tidak ada dasar menyamakan seluruh respons.'],after:'Tulis apakah perubahan terjadi pada physical, extrinsic, affective, atau keputusan akhir.'}
};
function choose(n:number,k:number){let v=1;for(let i=1;i<=k;i++)v=v*(n-i+1)/i;return v;}
export function SensoryV2Lab({moduleCode}:{moduleCode:string}){
 const [pick,setPick]=useState<number|null>(null);
 const [volume,setVolume]=useState(200);
 const [dose,setDose]=useState(11);
 const [trials,setTrials]=useState(3);
 const [success,setSuccess]=useState(2);
 const [values,setValues]=useState('6,7,7,8,12');
 const lab=labs[moduleCode];
 const expectedDose=volume*8.25/150;
 const trialN=Math.min(8,Math.max(1,trials));
 const minSuccess=Math.min(trialN,Math.max(0,success));
 const triangleP=Array.from({length:trialN-minSuccess+1},(_,i)=>{const k=minSuccess+i;return choose(trialN,k)*Math.pow(1/3,k)*Math.pow(2/3,trialN-k)}).reduce((a,b)=>a+b,0);
 const nums=values.split(',').map(x=>Number(x.trim())).filter(x=>Number.isFinite(x)).slice(0,20);
 const sorted=[...nums].sort((a,b)=>a-b);
 const median=sorted.length?(sorted[Math.floor((sorted.length-1)/2)]+sorted[Math.floor(sorted.length/2)])/2:0;
 const mean=nums.length?nums.reduce((a,b)=>a+b,0)/nums.length:0;
 return <section aria-labelledby={'lab-'+moduleCode} className="my-10 border-y border-paper-300 py-7">
  <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">Coba model dan periksa asumsi</p>
  <h2 id={'lab-'+moduleCode} className="mt-2 font-serif text-2xl font-semibold text-roast-950">
    {moduleCode==='M03'?'Kontrol dose dalam cupping':moduleCode==='M08'?'Apa arti hasil triangle test?':moduleCode==='M09'?'Bagaimana ringkasan dapat menipu?':'Tempatkan bukti pada kategori yang tepat'}
  </h2>
  {moduleCode==='M03'?<div className="mt-6 space-y-4 text-sm text-roast-800">
   <label className="block">Volume air simulasi: <strong>{volume} ml</strong><input aria-label="Volume air cupping" type="range" min="120" max="300" step="10" value={volume} onChange={e=>setVolume(Number(e.target.value))} className="mt-2 block w-full accent-cherry-700"/></label>
   <label className="block">Dosis yang kamu masukkan (g)<input aria-label="Dosis kopi" type="number" min="1" max="40" step=".25" value={dose} onChange={e=>setDose(Number(e.target.value))} className="ml-3 w-28 rounded border border-paper-400 p-2 text-roast-950"/></label>
   <p className="rounded bg-paper-100 p-4" role="status">Jika membandingkan terhadap <strong>contoh rasio historis</strong> 8,25 g/150 ml, dosis ekuivalen volume ini adalah <strong>{expectedDose.toFixed(2)} g</strong>. Selisih: <strong>{(dose-expectedDose).toFixed(2)} g</strong>.</p>
   <p className="text-xs leading-6 text-roast-600">Ini alat perbandingan matematis, **bukan** formulir CVA resmi atau perintah mengganti parameter SCA-102 terkini. Nilai yang berlaku harus dicek pada dokumen protokol yang digunakan.</p>
  </div>:moduleCode==='M08'?<div className="mt-6 space-y-4 text-sm text-roast-800">
   <label className="block">Jumlah uji independen<input aria-label="Jumlah uji triangle" type="range" min="1" max="8" value={trials} onChange={e=>{setTrials(Number(e.target.value));setSuccess(s=>Math.min(s,Number(e.target.value)));}} className="mt-2 block w-full accent-cherry-700"/><strong>{trialN} uji</strong></label>
   <label className="block">Minimal jawaban benar<input aria-label="Minimal benar" type="range" min="0" max={trialN} value={minSuccess} onChange={e=>setSuccess(Number(e.target.value))} className="mt-2 block w-full accent-cherry-700"/><strong>{minSuccess} benar</strong></label>
   <p role="status" className="rounded bg-paper-100 p-4">Peluang penebak acak mendapat setidaknya {minSuccess} benar dari {trialN} uji: <strong>{(triangleP*100).toFixed(1)}%</strong>.</p>
   <p className="text-xs leading-6 text-roast-600">Model binomial dengan tebakan acak p=1/3 dan percobaan independen. Bukan passing grade resmi, bukan uji kepekaan hidung aktual.</p>
  </div>:moduleCode==='M09'?<div className="mt-6 space-y-4 text-sm text-roast-800">
   <label className="block">Lima penilaian simulasi, pisahkan koma<input aria-label="Nilai panel" value={values} onChange={e=>setValues(e.target.value)} className="mt-2 block w-full rounded border border-paper-400 bg-white p-3 text-roast-900"/></label>
   <p role="status" className="rounded bg-paper-100 p-4">Rata-rata: <strong>{nums.length?mean.toFixed(2):'–'}</strong> · Median: <strong>{nums.length?median.toFixed(2):'–'}</strong> · N: {nums.length}</p>
   <p className="text-xs leading-6 text-roast-600">Angka adalah skala latihan, bukan penilaian CVA resmi. Angka ekstrem mungkin respons valid atau sinyal masalah persiapan; jangan menghapus tanpa investigasi.</p>
  </div>:lab?<div className="mt-6">
   <p className="text-sm leading-7 text-roast-800">{lab.prompt}</p>
   <div className="mt-4 grid gap-2 sm:grid-cols-3">{lab.options.map((op,i)=><button key={op} type="button" aria-pressed={pick===i} onClick={()=>setPick(i)} className={'rounded border px-4 py-3 text-left text-sm transition-colors '+(pick===i?'border-cherry-700 bg-paper-100 font-semibold text-roast-950':'border-paper-300 bg-white text-roast-800 hover:border-roast-600')}>{op}</button>)}</div>
   {pick!==null&&<p role="status" className="mt-4 border-l-2 border-cherry-700 pl-4 text-sm leading-7 text-roast-800">{lab.reasons[pick]} {lab.after}</p>}
  </div>:null}
 </section>;
}
