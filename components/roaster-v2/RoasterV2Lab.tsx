'use client';
import {useState} from 'react';
type ModuleCode='M01'|'M02'|'M03'|'M04'|'M05'|'M06'|'M07'|'M08'|'M09'|'M10';
type Decision={title:string;question:string;options:[string,string,string];correct:number;reason:string;newEvidence:string;revision:string};
const decisions:Partial<Record<ModuleCode,Decision>>={
 M02:{title:'Pemeriksaan lot',question:'Sampel green berbau apak, tetapi moisture meter menunjukkan nilai dalam rentang pembelian. Keputusan yang paling bisa dipertanggungjawabkan?',
  options:['Terima karena moisture sudah lolos','Tahan lot, catat bukti, minta pemeriksaan QC','Naikkan suhu awal agar bau hilang'],correct:1,
  reason:'Bau mencurigakan memerlukan isolasi dan evaluasi; pengukuran moisture tidak membuktikan keamanan pangan.',
  newEvidence:'Pengukuran ulang aw berbeda antar karung dan kemasan rusak ditemukan.',
  revision:'Perluas penelusuran/sampling sesuai SOP; jangan mencampur stok untuk menyembunyikan masalah.'},
 M03:{title:'Berpikir tentang perpindahan panas',question:'Dua mesin berbeda memakai angka gas 50%. Apa yang benar-benar dapat dipindahkan di antara kedua mesin?',
  options:['Energi yang masuk per detik pasti sama','Setelan gas dan suhu charge langsung disalin','Tujuan sensori dan desain perbandingan, bukan angka mesin'],correct:2,
  reason:'Burner, geometri, sensor, airflow dan batch-to-power ratio berbeda. Persentase tampilan bukan daya yang setara.',
  newEvidence:'Mesin kedua adalah fluid-bed dan berkapasitas batch jauh lebih kecil.',
  revision:'Bangun baseline lokal dengan operator terlatih, catat konfigurasi, dan uji produk; jangan transfer setpoint.'},
 M06:{title:'Rancang A/B yang jujur',question:'A dan B menggunakan lot sama, tetapi B mengubah gas, airflow, massa batch dan lama pendinginan sekaligus. Apa yang boleh disimpulkan?',
  options:['Gas pasti penyebab perubahan rasa','Perbedaan terlihat, tetapi sebab spesifik belum dapat dipisah','B pasti lebih efisien karena variabelnya lebih banyak'],correct:1,
  reason:'Banyak faktor berubah bersamaan. Gunakan rancangan satu faktor per percobaan atau desain faktorial yang jelas.',
  newEvidence:'Sampel B juga dicupping tiga hari lebih muda daripada A.',
  revision:'Kontrol umur roast dan metode cupping, lalu ulang perbandingan dengan variabel proses lebih terisolasi.'},
 M07:{title:'Pisahkan fakta dan selera',question:'Panel menggambarkan A lebih citrusy tetapi 60% panel menyukai B. Kesimpulan apa yang aman?',
  options:['B lebih bagus untuk semua konsumen','A memiliki pH lebih rendah','Deskriptor dan preferensi menjawab pertanyaan berbeda'],correct:2,
  reason:'Deskripsi sensori bukan angka kesukaan; pH tidak dapat disimpulkan dari kata citrusy.',
  newEvidence:'Panel mengetahui B adalah kopi mahal sebelum memilih.',
  revision:'Ulang tes buta untuk melihat pengaruh ekspektasi, lalu nilai kecocokan dengan pasar sasaran.'},
 M08:{title:'Triage abnormalitas alat',question:'RoR terlihat aneh dan exhaust mengeluarkan suara abnormal. Langkah pertama?',
  options:['Stop-work dan eskalasi sesuai SOP mesin','Naikkan gas agar RoR kembali normal','Naikkan smoothing lalu jalankan batch berikut'],correct:0,
  reason:'Abnormalitas exhaust adalah risiko operasional. Keselamatan lebih penting daripada kualitas bentuk kurva.',
  newEvidence:'Seorang rekan menawarkan membuka panel ketika mesin masih panas.',
  revision:'Tolak tindakan servis tanpa otorisasi dan kondisi aman. Dokumentasikan kejadian untuk personel berwenang.'},
 M09:{title:'Jejak batch produksi',question:'Packing run P13 diketahui segelnya bermasalah. Ia menggunakan roast batch R42, sementara P12 dari R42 baik. Langkah yang tepat?',
  options:['Hapus kode produksi P13 dan jual','Tahan P13, telusuri sumber dan perluas cakupan jika risikonya menuntut','Anggap seluruh kopi aman karena R42 lolos cupping'],correct:1,
  reason:'Penahanan berbasis batch dan investigasi dibutuhkan; cupping bukan bukti integritas segel.',
  newEvidence:'Log menunjukkan operator packing yang sama juga menangani sebagian P12 saat mesin sealer bermasalah.',
  revision:'Perluas investigasi ke P12 sesuai penilaian QA, tanpa berasumsi dampak terbatas P13.'}
};
const captions:Record<ModuleCode,string>={
 M01:'Tuliskan brief yang dapat diuji, bukan angka yang dipinjam dari mesin lain.',
 M02:'Pilih tindakan yang menjaga keamanan dan keterlacakan bahan.',
 M03:'Pahami interaksi perpindahan panas, kontrol dan konfigurasi mesin.',
 M04:'Hitung laju perubahan suhu pada interval yang dinyatakan.',
 M05:'Pisahkan persentase massa hilang dari moisture awal.',
 M06:'Bedakan eksperimen yang dapat mengisolasi faktor dan yang tidak.',
 M07:'Pisahkan deskripsi sensori, kesukaan, dan bukti fisik.',
 M08:'Utamakan stop-work bila ada tanda kondisi alat tidak aman.',
 M09:'Telusuri hubungan green lot, roasting batch dan packing run.',
 M10:'Hitung harga bahan per kilogram kopi roasted, bukan green saja.'
};
export function RoasterV2Lab({moduleCode}:{moduleCode:string}){
 const code=moduleCode as ModuleCode;
 const [a,setA]=useState(0),[b,setB]=useState(0),[c,setC]=useState(0);
 const [brief,setBrief]=useState(''),[attribute,setAttribute]=useState(''),[avoid,setAvoid]=useState('');
 const [choice,setChoice]=useState<number|null>(null),[shown,setShown]=useState(false);
 const [revision,setRevision]=useState('');
 const [unit,setUnit]=useState<'C'|'F'>('C');
 const dec=decisions[code];
 const num=(value:number,set:(v:number)=>void,label:string,step=1)=> <label className="block text-sm text-roast-800">
    <span className="block mb-2 font-semibold">{label}</span>
    <input type="number" step={step} value={value||''} onChange={e=>set(Number(e.target.value))}
      className="w-full rounded-md border border-paper-300 bg-paper-50 px-3 py-3 text-roast-900" />
   </label>;
 const title=code==='M01'?'Brief sangrai':code==='M04'?'Kecepatan naiknya BT':code==='M05'?'Neraca massa batch':code==='M10'?'Biaya green per roasted kg':dec?.title||'Latihan konsep';
 return <section aria-label={'Laboratorium konsep '+moduleCode} className="mt-10 border-y border-paper-300 py-8">
  <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">Laboratorium konsep · {moduleCode}</p>
  <h2 className="mt-2 font-serif text-2xl font-bold text-roast-950">{title}</h2>
  <p className="mt-3 text-sm leading-7 text-roast-800">{captions[code]}</p>
  {code==='M01'&&<div className="mt-6 space-y-4">
   {([['Siapa dan untuk minuman apa?',brief,setBrief],['Dua atribut yang ingin dirasakan?',attribute,setAttribute],['Satu karakter yang ingin dihindari?',avoid,setAvoid]] as const).map(([label,value,set])=><label key={label} className="block text-sm font-semibold text-roast-800">{label}
    <textarea value={value} onChange={e=>set(e.target.value)} rows={2} className="mt-2 w-full rounded-md border border-paper-300 bg-paper-50 px-3 py-3 text-sm font-normal"/></label>)}
   <div aria-live="polite" className="border-l-2 border-cherry-700 bg-paper-100 p-4 text-sm leading-7 text-roast-800">
    {brief.trim().length>10&&attribute.trim().length>10&&avoid.trim().length>5
    ?<>Brief awal: untuk {brief}, cari {attribute}, hindari {avoid}. Berikutnya tetapkan uji cupping dan kondisi yang perlu dikendalikan; teks ini belum membuktikan rasa dari batch nyata.</>
    :'Isi ketiga pertanyaan untuk menyusun brief. Kamu belum perlu angka DTR atau charge temperature.'}
   </div>
  </div>}
  {code==='M04'&&<div className="mt-6 space-y-5">
   <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
    {num(a,setA,'BT awal ('+unit+' )',1)}{num(b,setB,'BT akhir ('+unit+' )',1)}{num(c,setC,'Jarak waktu (detik)',1)}
   </div>
   <button onClick={()=>{
     const convert=(v:number)=>v===0?0:Number((unit==='C'?v*9/5+32:(v-32)*5/9).toFixed(2));
     setA(current=>convert(current));
     setB(current=>convert(current));
     setUnit(current=>current==='C'?'F':'C');
    }} type="button" className="text-sm underline text-roast-800">Konversi pembacaan {unit==='C'?'ke °F':'ke °C'}</button>
   <div aria-live="polite" className="border-l-2 border-cherry-700 bg-paper-100 p-4 text-sm text-roast-800">
     {c>0&&Number.isFinite((b-a)/c)?<><strong>RoR rata-rata: {((b-a)*60/c).toFixed(2)}°{unit}/menit.</strong> Ini selisih sensor dalam interval {c} detik, bukan suhu inti seluruh biji. Pilihan interval dan smoothing mengubah tampilan.</>:'Masukkan dua pembacaan dan selang waktu positif; hasil adalah contoh perhitungan, bukan rekomendasi kontrol mesin.'}
   </div>
  </div>}
  {code==='M05'&&<div className="mt-6 space-y-5">
   <div className="grid gap-4 sm:grid-cols-2">{num(a,setA,'Massa green (gram)')}{num(b,setB,'Massa roasted (gram)')}</div>
   <p aria-live="polite" className="border-l-2 border-cherry-700 bg-paper-100 p-4 text-sm leading-7 text-roast-800">
    {a>0&&b>0&&b<=a?<>Mass loss <strong>{((a-b)/a*100).toFixed(2)}%</strong>; yield <strong>{(b/a*100).toFixed(2)}%</strong>. Angka ini mencakup berbagai kehilangan massa, tidak sama dengan kadar air green.</>:'Gunakan angka massa positif dengan roasted mass tidak melebihi green mass untuk contoh sederhana ini.'}
   </p>
  </div>}
  {code==='M10'&&<div className="mt-6 space-y-5">
   <div className="grid gap-4 sm:grid-cols-3">{num(a,setA,'Green mass (kg)',0.1)}{num(b,setB,'Roasted mass (kg)',0.1)}{num(c,setC,'Harga green (Rp/kg)')}</div>
   <p aria-live="polite" className="border-l-2 border-cherry-700 bg-paper-100 p-4 text-sm leading-7 text-roast-800">
    {a>0&&b>0&&b<=a&&c>0?<>Yield: <strong>{(b/a*100).toFixed(1)}%</strong>. Biaya green per kg roasted: <strong>{new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(a*c/b)}</strong>. Belum termasuk energi, tenaga, kemasan, QC, susut lain dan pajak.</>:'Masukkan massa green, massa roasted dan harga green yang masuk akal.'}
   </p>
  </div>}
  {dec&&<div className="mt-6 space-y-4">
   <p className="text-sm leading-7 font-medium text-roast-900">{dec.question}</p>
   <fieldset className="space-y-2"><legend className="sr-only">Pilih keputusan</legend>
    {dec.options.map((text,index)=><label key={index} className="flex cursor-pointer gap-3 rounded-md border border-paper-300 px-4 py-3 text-sm text-roast-800">
     <input type="radio" name={'roaster-'+code} checked={choice===index} onChange={()=>{setChoice(index);setShown(false);setRevision('');}}/>
     <span>{text}</span></label>)}
   </fieldset>
   <button type="button" disabled={choice===null} onClick={()=>setShown(true)} className="rounded-md bg-roast-950 px-4 py-3 text-sm font-semibold text-paper-50 disabled:opacity-50">Periksa alasan</button>
   {shown&&<div className="space-y-3 border-l-2 border-cherry-700 bg-paper-100 p-4 text-sm leading-7 text-roast-800" aria-live="polite">
    <p><strong>{choice===dec.correct?'Keputusan dapat dipertanggungjawabkan.':'Coba revisi penalaranmu.'}</strong> {dec.reason}</p>
    <p><strong>Informasi tambahan:</strong> {dec.newEvidence}</p>
    <label className="block font-semibold">Apa yang perlu kamu ubah setelah informasi baru?
     <textarea className="mt-2 w-full rounded-md border border-paper-300 bg-paper-50 px-3 py-2 font-normal" rows={3} value={revision} onChange={e=>setRevision(e.target.value)}/></label>
    {revision.trim().length>=30?<p><strong>Periksa dengan penjelasan:</strong> {dec.revision}</p>:<p>Jelaskan revisimu secara spesifik (minimal 30 karakter), lalu bandingkan dengan alasan ilmiahnya.</p>}
   </div>}
  </div>}
  <p className="mt-6 text-xs leading-6 text-roast-600">Contoh dan data yang kamu masukkan digunakan hanya di halaman ini. Tidak ada penilaian mesin langsung atau klaim penyimpanan progres.</p>
 </section>;
}
