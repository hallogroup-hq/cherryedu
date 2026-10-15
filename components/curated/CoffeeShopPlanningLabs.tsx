'use client';

import {useState} from 'react';

const parse=(s:string):number|null=>{
 if(!s.trim())return null;
 const n=Number(s.replace(',','.'));
 return Number.isFinite(n)&&n>=0?n:null;
};
const rupiah=(n:number)=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n);
const integer=(n:number)=>new Intl.NumberFormat('id-ID',{maximumFractionDigits:0}).format(n);
const inputClass='w-full min-w-0 rounded border border-paper-300 bg-white px-3 py-2.5 text-sm text-roast-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';
const initialMenus=Array.from({length:3},(_,i)=>({name:'',sales:'',price:'',variable:'',fee:''}));

export function CoffeeShopMenuMixLab(){
 const [lines,setLines]=useState(initialMenus);
 const update=(i:number,key:'name'|'sales'|'price'|'variable'|'fee',value:string)=>setLines(p=>p.map((v,j)=>j===i?{...v,[key]:value}:v));
 const calculations=lines.map((l,i)=>{
  const values=[parse(l.sales),parse(l.price),parse(l.variable),parse(l.fee)];
  const valid=l.name.trim().length>0&&values.every(x=>x!==null)&&values[3]!<=100;
  const cm=valid?values[1]!*(1-values[3]!/100)-values[2]!:null;
  return {index:i,valid,cm,total:cm===null?null:cm*values[0]!,sales:values[0],name:l.name};
 });
 const any=calculations.some(x=>x.valid),all=calculations.every(x=>x.valid);
 const total=calculations.reduce((s,x)=>s+(x.total??0),0);
 const volume=calculations.reduce((s,x)=>s+(x.valid?x.sales??0:0),0);
 return <section className="my-10 overflow-hidden rounded-xl border border-paper-300 bg-white" aria-label="Simulasi kontribusi tiga menu">
  <header className="border-b border-paper-300 bg-paper-100 px-5 py-5 sm:px-7">
   <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-cherry-800">Coba hitung</p>
   <h3 className="mt-2 font-serif text-2xl font-bold text-roast-950">Bandingkan tiga menu yang benar-benar terjual</h3>
   <p className="mt-2 text-sm leading-6 text-roast-700">Masukkan angka dari laporan penjualan dan biaya per menu. Harga adalah penerimaan sebelum komisi, sudah memperhitungkan diskon yang ditanggung merchant. Biaya variabel jangan memasukkan komisi dua kali. Jika belum ada datanya, biarkan kosong—jangan membuat angka pasar.</p>
  </header>
  <div className="p-4 sm:p-6">
   <div className="space-y-4">{lines.map((l,i)=><fieldset key={i} className="rounded-md border border-paper-300 p-4">
    <legend className="px-1 text-sm font-semibold text-roast-950">Menu {i+1}</legend>
    <div className="grid gap-3 sm:grid-cols-2">
     {([['name','Nama menu','text'],['sales','Jumlah terjual (cup)','number'],['price','Penerimaan per cup sebelum komisi (Rp)','number'],['variable','Biaya variabel selain komisi (Rp/cup)','number'],['fee','Komisi atas penerimaan di atas (%)','number']] as const).map(([key,label,type])=>
      <label key={key} className="block text-xs font-semibold text-roast-900">{label}
       <input className={inputClass+' mt-1'} type={type} min={type==='number'?'0':undefined} step={type==='number'?'any':undefined} value={l[key]} onChange={e=>update(i,key,e.target.value)} aria-label={label+' menu '+(i+1)}/>
      </label>)}
    </div>
    {calculations[i].valid&&<p className="mt-3 text-sm text-roast-800">Kontribusi per cup: <strong>{rupiah(calculations[i].cm!)}</strong>; total: <strong>{rupiah(calculations[i].total!)}</strong></p>}
   </fieldset>)}</div>
   <div role="status" aria-live="polite" className="mt-5 border border-paper-300 bg-paper-100 p-4 text-sm leading-6 text-roast-800">
    {!any?'Masukkan minimal satu menu lengkap untuk mulai menghitung. Kolom kosong belum dihitung.':<>
     <p>Kontribusi gabungan menu yang sudah lengkap: <strong>{rupiah(total)}</strong> dari <strong>{integer(volume)} cup</strong>.</p>
     {!all&&<p className="mt-2">Ada menu yang belum lengkap; angka gabungan belum mewakili seluruh penjualan.</p>}
     {calculations.some(x=>x.valid&&x.cm!<=0)&&<p className="mt-2 text-red-800">Setidaknya satu menu memberi kontribusi nol atau negatif; periksa harga, resep, diskon dan biaya per channel.</p>}
     <p className="mt-2 text-xs">Kontribusi = jumlah cup × (penerimaan sebelum komisi − komisi − biaya variabel lain). Belum biaya tetap, pajak yang relevan, atau kas. Tidak mencerminkan pembelian ulang dan kapasitas produksi.</p>
    </>}
   </div>
  </div>
 </section>;
}

type Week={inflow:string;outflow:string};
export function CoffeeShop13WeekCashLab(){
 const [opening,setOpening]=useState('');
 const [weeks,setWeeks]=useState<Week[]>(()=>Array.from({length:13},()=>({inflow:'',outflow:''})));
 const update=(i:number,key:keyof Week,v:string)=>setWeeks(p=>p.map((w,j)=>j===i?{...w,[key]:v}:w));
 const start=parse(opening);
 let balance=start??0;
 const outputs=weeks.map((week,i)=>{
  const incoming=parse(week.inflow),outgoing=parse(week.outflow);
  const complete=start!==null&&incoming!==null&&outgoing!==null&&weeks.slice(0,i).every(w=>parse(w.inflow)!==null&&parse(w.outflow)!==null);
  if(!complete)return null;
  balance+=incoming!-outgoing!;
  return balance;
 });
 const filled=outputs.filter((n):n is number=>n!==null),last=filled.at(-1);
 const minimum=start===null?null:Math.min(start,...filled);
 const noInternalOrders=filled.length>0;
 return <section className="my-10 overflow-hidden rounded-xl border border-paper-300 bg-white" aria-label="Rencana kas 13 minggu kedai">
  <header className="border-b border-paper-300 bg-paper-100 px-5 py-5 sm:px-7">
   <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-cherry-800">Rencana keuangan</p>
   <h3 className="mt-2 font-serif text-2xl font-bold text-roast-950">Rencanakan uang masuk dan keluar 13 minggu</h3>
   <p className="mt-2 text-sm leading-6 text-roast-700">Isi saldo awal yang tersedia, lalu uang yang benar-benar diperkirakan masuk/keluar setiap minggu. Sel kosong berarti <strong>belum direncanakan</strong>, bukan Rp0. Isi angka 0 secara sengaja bila tidak ada arus. Gunakan tanggal settlement dan tagihan sesungguhnya.</p>
  </header>
  <div className="p-4 sm:p-6">
   <label className="block max-w-xs text-sm font-semibold text-roast-950">Saldo kas awal yang benar-benar tersedia (Rp)
    <input className={inputClass+' mt-2'} type="number" min="0" step="any" value={opening} onChange={e=>setOpening(e.target.value)} aria-label="Saldo kas awal yang benar-benar tersedia (Rp)"/>
   </label>
   <div className="mt-5 overflow-x-auto">
    <table className="w-full min-w-[580px] border-collapse text-sm">
     <thead><tr className="bg-paper-100 text-left text-roast-900"><th className="border-b border-paper-300 p-2">Minggu</th><th className="border-b border-paper-300 p-2">Uang masuk (Rp)</th><th className="border-b border-paper-300 p-2">Uang keluar (Rp)</th><th className="border-b border-paper-300 p-2">Saldo akhir</th></tr></thead>
     <tbody>{weeks.map((w,i)=><tr key={i} className="border-b border-paper-200">
      <th scope="row" className="p-2 text-left font-semibold">Ke-{i+1}</th>
      {(['inflow','outflow'] as const).map(key=><td key={key} className="p-2">
       <input type="number" min="0" step="any" className={inputClass} value={w[key]} onChange={e=>update(i,key,e.target.value)} aria-label={(key==='inflow'?'Uang masuk':'Uang keluar')+' minggu '+(i+1)+' (Rp)'}/>
      </td>)}
      <td className="p-2 whitespace-nowrap">{outputs[i]===null?'Belum lengkap':rupiah(outputs[i]!)}</td>
     </tr>)}</tbody>
    </table>
   </div>
   <div role="status" aria-live="polite" className="mt-5 border border-paper-300 bg-paper-100 p-4 text-sm leading-6 text-roast-800">
    {start===null?'Masukkan saldo awal terlebih dahulu.':!noInternalOrders?'Lengkapi kas masuk dan keluar minggu pertama, termasuk angka 0 bila memang tidak ada transaksi.':<>
     <p>Periode tersusun: <strong>{filled.length} dari 13 minggu</strong>. Saldo akhir periode terisi: <strong>{rupiah(last!)}</strong>.</p>
     <p>Saldo akhir mingguan terendah (termasuk awal): <strong>{rupiah(minimum!)}</strong>.</p>
     {minimum!<0&&<p className="mt-2 font-semibold text-red-800">Perkiraan kas negatif. Teliti tanggal pembayaran, pemasukan yang benar-benar akan cair dan alternatif penyesuaian yang tidak melanggar hak/keamanan.</p>}
     <p className="mt-2 text-xs">Saldo mingguan dapat menyembunyikan defisit di tengah minggu. Buat urutan transaksi per tanggal untuk pembayaran besar. Rencana ini belum mengakui pajak atau biaya yang belum kamu input.</p>
    </>}
   </div>
  </div>
 </section>;
}
