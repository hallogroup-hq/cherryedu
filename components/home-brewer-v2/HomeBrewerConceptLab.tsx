'use client';

import React,{useState} from 'react';

const card='not-prose my-10 space-y-5 rounded-xl border border-paper-300 bg-white p-4 sm:p-6';
const field='mt-2 w-full rounded-lg border border-paper-300 bg-white px-3 py-2 text-sm text-roast-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';
const button='rounded-lg bg-roast-950 px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';
const fmt=(n:number)=>Number.isFinite(n)?n.toLocaleString('id-ID',{maximumFractionDigits:2}):'–';
const valid=(n:number,max:number)=>Number.isFinite(n)&&n>0&&n<=max;

function RatioWorkbench(){
 const [dose,setDose]=useState(15),[water,setWater]=useState(225),[out,setOut]=useState(184);
 const [prediction,setPrediction]=useState(''),[review,setReview]=useState(false);
 const ok=valid(dose,100)&&valid(water,1200)&&valid(out,1200)&&out<=water;
 return <div className="space-y-4">
  <h3 className="font-serif text-xl font-semibold text-roast-950">Air masuk vs minuman yang keluar</h3>
  <p className="text-sm leading-7 text-roast-800">Data latihan, bukan observasi nyata. Ganti angka dan bedakan ratio input dari hasil minuman. Tidak ada prediksi rasa otomatis.</p>
  <div className="grid grid-cols-3 gap-3">
   {[['Kopi kering (g)',dose,setDose,100],['Air seduh masuk (g)',water,setWater,1200],['Output minuman (g)',out,setOut,1200]].map(([label,value,set,max])=><label key={label as string} className="text-xs font-semibold text-roast-800">{label as string}<input type="number" min="1" max={max as number} value={value as number} className={field} onChange={e=>{(set as (x:number)=>void)(Number(e.target.value));setReview(false);}}/></label>)}
  </div>
  {ok?<div className="border-y border-paper-300 py-5">
    <p className="font-mono text-2xl font-semibold text-roast-950">Input ratio 1 : {fmt(water/dose)}</p>
    <p className="mt-2 text-sm text-roast-700">Selisih air masuk−output: {fmt(water-out)} g. Penyebab tepat selisih belum dapat dipisah tanpa pengukuran lain.</p>
   </div>:<p role="alert" className="text-sm text-red-700">Gunakan massa positif yang masuk akal; output tidak boleh melebihi air masuk pada model sederhana ini.</p>}
  <label className="block text-sm font-semibold">Apa yang <em>belum</em> bisa disimpulkan dari tiga massa ini?<textarea rows={3} className={field} value={prediction} onChange={e=>{setPrediction(e.target.value);setReview(false);}}/></label>
  <button type="button" className={button} disabled={!ok||prediction.trim().length<18} onClick={()=>setReview(true)}>Bandingkan alasan</button>
  {review&&<p role="status" className="bg-paper-100 p-4 text-sm leading-7 text-roast-900">Ratio input tidak mengukur rasa, caffeine, TDS atau extraction yield. Selisih air bisa melibatkan retensi bed/filter dan faktor proses. Untuk menghitung EY perlu TDS kopi dengan alat yang sesuai.</p>}
 </div>;
}

function StrengthWorkbench(){
 const [dose,setDose]=useState(20),[out,setOut]=useState(40),[tds,setTds]=useState(10),[text,setText]=useState(''),[show,setShow]=useState(false);
 const ok=valid(dose,100)&&valid(out,500)&&valid(tds,30);
 return <div className="space-y-4">
  <h3 className="font-serif text-xl font-semibold">TDS bukan extraction yield</h3>
  <p className="text-sm leading-7">Masukkan data ilustratif yang seolah diukur dengan coffee refractometer. Alat ukur air minum berbasis konduktivitas **tidak** dipakai sebagai pengganti.</p>
  <div className="grid grid-cols-3 gap-3">
   {[['Dose (g)',dose,setDose],['Beverage (g)',out,setOut],['TDS kopi (%)',tds,setTds]].map(([label,val,set])=><label key={label as string} className="text-xs font-semibold">{label as string}<input className={field} type="number" step=".1" value={val as number} min="0.1" max="500" onChange={e=>{(set as (x:number)=>void)(Number(e.target.value));setShow(false);}}/></label>)}
  </div>
  {ok?<div className="border-y border-paper-300 py-5">
   <p className="font-mono text-xl font-semibold">Estimasi zat terlarut: {fmt(out*tds/100)} g</p>
   <p className="font-mono text-xl font-semibold">Estimasi EY: {fmt(out*tds/dose)}%</p>
  </div>:<p role="alert" className="text-sm text-red-700">Periksa nilai positif dan rentang pengukuran.</p>}
  <label className="block text-sm font-semibold">Dua minuman EY sama; mengapa rasa belum tentu sama?<textarea rows={3} className={field} value={text} onChange={e=>{setText(e.target.value);setShow(false);}}/></label>
  <button className={button} type="button" disabled={!ok||text.trim().length<18} onClick={()=>setShow(true)}>Periksa penalaran</button>
  {show&&<p role="status" className="bg-paper-100 p-4 text-sm leading-7">EY adalah estimasi total massa zat terekstrak relatif dose; tidak menjelaskan komposisi tiap senyawa, aroma, tekstur, kesukaan atau keamanan minuman.</p>}
 </div>;
}

function IcedWorkbench(){
 const [dose,setDose]=useState(15),[brew,setBrew]=useState(150),[ice,setIce]=useState(75),[melting,setMelting]=useState(40),[written,setWritten]=useState(''),[show,setShow]=useState(false);
 const ok=valid(dose,80)&&valid(brew,750)&&valid(ice,500)&&Number.isFinite(melting)&&melting>=0&&melting<=ice;
 return <div className="space-y-4">
  <h3 className="font-serif text-xl font-semibold">Air brew-through, es, dan dilution</h3>
  <p className="text-sm leading-7">Simulasi massa dengan asumsi *water retained* belum diketahui. Slider hanya mengubah jumlah es yang diasumsikan sudah mencair; bukan prediksi laju mencair di kondisi nyata.</p>
  <div className="grid grid-cols-3 gap-2">
    {[['Dose (g)',dose,setDose],['Air melalui bed (g)',brew,setBrew],['Es awal (g)',ice,(x:number)=>{setIce(x);setMelting(Math.min(melting,x));}]].map(([label,val,set])=><label key={label as string} className="text-xs font-semibold">{label as string}<input className={field} type="number" min="1" max="750" value={val as number} onChange={e=>{(set as (x:number)=>void)(Number(e.target.value));setShow(false);}}/></label>)}
  </div>
  <label className="block text-xs font-semibold">Es yang sudah mencair menurut asumsi: {melting} g<input aria-label="Es yang mencair" type="range" className="mt-3 block w-full" min="0" max={Math.max(ice,1)} step="1" value={melting} onChange={e=>{setMelting(Number(e.target.value));setShow(false);}}/></label>
  {ok?<p className="border-y border-paper-300 py-4 text-sm leading-7">Ratio **air melalui bed**: <strong>1 : {fmt(brew/dose)}</strong>. Air cair sesudah pencampuran = output brew yang **belum diukur** + {melting} g lelehan es. Es yang belum mencair: {fmt(ice-melting)} g. Jangan mengarang massa cangkir akhir.</p>:<p role="alert" className="text-sm text-red-700">Periksa nilai dan konsistensi es.</p>}
  <label className="block text-sm font-semibold">Bagaimana mengukur perubahan minuman nyata?<textarea className={field} rows={3} value={written} onChange={e=>{setWritten(e.target.value);setShow(false);}}/></label>
  <button className={button} type="button" disabled={!ok||written.trim().length<18} onClick={()=>setShow(true)}>Bandingkan desain eksperimen</button>
  {show&&<p role="status" className="bg-paper-100 p-4 text-sm leading-7">Timbang output brew sebelum es bila memungkinkan, total bahan dan perubahan massa/suhu dengan metode yang aman. Pada iced pour-over, air yang melewati bed berbeda dari es serta bypass sesudah seduh.</p>}
 </div>;
}

function HomeCase({code}:{code:string}){
 const stories:Record<string,[string,string[],number,string]>={
  HB01:['Kamu ingin memilih kopi untuk tamu yang menyukai rasa nutty, tetapi label tertulis fruity. Apa langkah paling berguna?',['Menjanjikan buah pasti dominan karena label.','Menanyakan preferensi dan memakai label sebagai hipotesis, bukan hasil pasti.','Menyatakan semua roast light sama rasanya.'],1,'Label membantu memilih, tetapi pengalaman yang ditargetkan dan hasil cicip nyata menentukan rekomendasi.'],
  HB03:['V60 melambat setelah filter dan grind berubah bersamaan. Apa keputusan awal?',['Menyalahkan grinder tanpa cek lain.','Menambah air panas sampai waktunya cocok.','Menguji satu variabel dengan filter/grind terdokumentasi sambil menjaga prosedur lain.'],2,'Perubahan bersamaan mengaburkan sebab; pilih percobaan dengan pembanding jelas.'],
  HB04:['Kamu menyeduh lebih lambat dari resep video, tetapi menyukai rasanya. Harus bagaimana?',['Catat kondisi dan periksa tujuan sebelum mengejar waktu video.','Ubah grind sampai timer persis sama tanpa tasting.','Buang hasil karena di luar target universal.'],0,'Waktu membantu diagnosis, bukan target rasa yang wajib untuk semua kopi.'],
  HB05:['AeroPress inverted menarik di video. Langkah aman untuk pemula?',['Gunakan inverted dengan air mendidih agar lebih stabil.','Pakai upright menurut manual dan metode kontrol drip kompatibel.','Paksa plunger jika menetes terlalu awal.'],1,'Produsen memperingatkan risiko tumpahan dan luka bakar dari inverted.'],
  HB06:['Seduhan terasa sour, dan kopi diketahui memiliki acidity citrus. Apa yang kamu lakukan?',['Pasti ubah grind lebih halus.','Anggap kopi pasti rusak.','Pisahkan karakter kopi, preferensi, suhu dan extraction dalam hipotesis sebelum uji.'],2,'Sour tidak memberi sebab tunggal; pemeriksaan kontekstual lebih informatif.'],
  HB07:['Dua cangkir blind, tetapi B selalu lebih dingin. Apa kelemahannya?',['Suhu adalah confounder; standarkan kondisi sebelum klaim preferensi.','Blind label membuat seluruh variabel otomatis setara.','Pilihan dua orang sudah membuktikan hasil pasar.'],0,'Blind tidak otomatis mengendalikan suhu dan urutan sajian.'],
  HB08:['Air dengan TDS konduktivitas 120ppm dianggap pasti terbaik. Apa masalahnya?',['Angka itu membuktikan profile mineral lengkap.','TDS proxy tidak mengungkap hardness, alkalinity, dan preferensi secara lengkap.','Berarti semua air layak minum.'],1,'Keamanan air serta komposisi dan sensori tetap harus diperiksa.'],
  HB09:['Iced brew 150g air-through-bed dan 75g es. Apakah total air itu selalu liquid output?',['Ya karena 150+75=225.','Ya jika es dipakai saat panas.','Tidak; bed menahan air dan es bisa belum seluruhnya mencair.'],2,'Air masuk, massa minuman keluar dan es yang meleleh adalah besaran berbeda.'],
  HB10:['V1 mengubah grind, kopi dan suhu sekaligus lalu disukai. Apa kesimpulan?',['Paket V1 disukai pada sesi itu; pengaruh tiap faktor belum dapat dipisahkan.','Grind baru pasti satu-satunya penyebab.','Resep V1 berlaku untuk semua orang.'],0,'Membedakan hasil preferensi dan klaim kausal adalah inti eksperimen yang jujur.']
 };
 const row=stories[code];const [sel,setSel]=useState<number|null>(null),[reveal,setReveal]=useState(false);
 if(!row)return null;
 return <div className="space-y-4">
  <h3 className="font-serif text-xl font-semibold">Pilih keputusan, bukan hafalan</h3>
  <p className="text-sm leading-7">{row[0]}</p>
  <fieldset className="space-y-2"><legend className="text-sm font-semibold">Mana alasan yang paling bisa diuji?</legend>{row[1].map((x,i)=><label key={x} className="flex gap-3 rounded-lg border border-paper-300 p-3 text-sm leading-6"><input type="radio" name={'home-case-'+code} className="mt-1" checked={sel===i} onChange={()=>{setSel(i);setReveal(false);}}/>{x}</label>)}</fieldset>
  <button className={button} type="button" disabled={sel===null} onClick={()=>setReveal(true)}>Periksa alasan</button>
  {reveal&&sel!==null&&<p role="status" className="bg-paper-100 p-4 text-sm leading-7"><strong>{sel===row[2]?'Keputusan defensibel. ':'Perlu koreksi asumsi. '}</strong>{row[3]}</p>}
 </div>;
}

export function HomeBrewerConceptLab({moduleCode}:{moduleCode:string}){
 let body:React.ReactNode;
 if(moduleCode==='HB02')body=<StrengthWorkbench/>;
 else if(moduleCode==='HB09')body=<IcedWorkbench/>;
 else if(moduleCode==='HB10')body=<RatioWorkbench/>;
 else body=<HomeCase code={moduleCode}/>;
 return <section aria-label="Laboratorium konsep home brewer" className={card}>
   <p className="font-mono text-xs uppercase font-semibold tracking-widest text-cherry-700">Coba sendiri · Konsep modul</p>{body}
   <p className="border-t border-paper-300 pt-4 text-xs leading-6 text-roast-700">Ini simulasi/pengambilan keputusan edukatif, bukan pengukuran rasa, verifikasi keselamatan ataupun sertifikasi praktik.</p>
 </section>;
}