'use client';
import {useState} from 'react';
const rupiah=(x:number)=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(x);
const decimal=(s:string)=>{if(!s.trim())return null;const n=Number(s);return Number.isFinite(n)&&n>=0?n:null;};
type Scenario={key:'A'|'B'|'C';title:string;subtitle:string};
const scenarios:Scenario[]=[
{key:'A',title:'Menggunakan jasa sangrai',subtitle:'Biaya jasa, jadwal produksi mitra, dan jumlah pesanan minimum'},
{key:'B',title:'Menyangrai dengan mesin sendiri',subtitle:'Biaya operator, listrik, perawatan, dan kapasitas produksi serta pengemasan'},
{key:'C',title:'Melayani pesanan lebih besar',subtitle:'Pengaturan tim, pemeriksaan mutu, dan kapasitas untuk banyak pesanan'}
];
type FieldName='variable'|'fixed'|'capacity'|'capex';
const initial:Record<string,Record<FieldName,string>>=Object.fromEntries(scenarios.map(s=>[s.key,{variable:'',fixed:'',capacity:'',capex:''}]));
export function BusinessModelComparator(){
 const [monthly,setMonthly]=useState(''),[inputs,setInputs]=useState<Record<string,Record<FieldName,string>>>(initial);
 const demand=decimal(monthly);
 const update=(key:string,field:FieldName,val:string)=>setInputs(p=>({...p,[key]:{...p[key],[field]:val}}));
 return <section className="mt-9" aria-label="Perbandingan model bisnis roastery">
  <div className="border-b border-paper-300 pb-5">
   <h2 className="font-serif text-2xl font-bold text-roast-950">Tiga cara produksi untuk memenuhi pesanan</h2>
   <p className="mt-3 text-sm leading-7 text-roast-700">Semua harga dimasukkan dari quotation nyata atau asumsi berlabel milikmu. Kalkulasi ini <strong>hanya biaya mengubah green menjadi roasted saleable</strong>, belum green bean, inbound/outbound freight, packaging, pajak dan biaya modal. Buka kalkulator HPP untuk total lengkap.</p>
  </div>
  <label className="mt-6 block max-w-sm text-sm font-semibold text-roast-950">Volume roasted saleable yang benar-benar diperkirakan terjual per bulan (kg)
   <input type="number" min="0" value={monthly} onChange={e=>setMonthly(e.target.value)} placeholder="Masukkan rencana berbasis PO/pilot" className="mt-3 w-full rounded border border-paper-400 bg-white p-3 text-sm text-roast-950"/>
  </label>
  <div className="mt-7 grid gap-4 md:grid-cols-3">{scenarios.map(s=>{
   const f=inputs[s.key],variable=decimal(f.variable),fixed=decimal(f.fixed),capacity=decimal(f.capacity),capex=decimal(f.capex);
   const valid=demand!==null&&demand>0&&variable!==null&&fixed!==null&&capacity!==null&&capacity>0;
   const normal=valid?fixed!+variable!*demand!:null;
   const downside=valid?fixed!+variable!*(demand!*0.6):null;
   const gap=valid&&capacity!==null&&demand!==null?Math.max(0,demand-capacity):null;
   const downsideGap=valid&&capacity!==null&&demand!==null?Math.max(0,demand*0.6-capacity):null;
   const normalFeasible=valid&&gap===0;
   const downsideFeasible=valid&&downsideGap===0;
   return <article key={s.key} className="border-t-2 border-roast-900 bg-paper-100 p-4">
    <p className="font-mono text-xs font-semibold text-cherry-800">PILIHAN USAHA</p>
    <h3 className="mt-2 font-serif text-xl font-bold text-roast-950">{s.title}</h3>
    <p className="mt-2 min-h-[72px] text-sm leading-6 text-roast-700">{s.subtitle}</p>
    <div className="mt-4 space-y-3">
     {([
      ['variable','Biaya sangrai per kg (Rp)','Biaya per kg output saat diproduksi/dikontrak'],
      ['fixed','Biaya tetap per bulan (Rp)','Termasuk komitmen minimum / fasilitas tetap'],
      ['capacity','Kapasitas kopi siap jual per bulan (kg)','Dibatasi operasi, QA dan packaging'],
      ['capex','Investasi awal (Rp)','Uang tunai, bukan biaya variabel/kg']
     ] as [FieldName,string,string][]).map(([field,title,info])=><label key={field} className="block text-xs font-semibold text-roast-900">{title}
      <span className="block font-normal leading-5 text-roast-600">{info}</span>
      <input type="number" min="0" value={f[field]} onChange={e=>update(s.key,field,e.target.value)} className="mt-1 w-full rounded border border-paper-400 bg-white p-2.5 text-sm text-roast-950"/>
     </label>)}
    </div>
    <div className="mt-5 border-t border-paper-300 pt-4 text-sm leading-7 text-roast-800">
     <p>Biaya konversi bulanan pada target: <strong>{normal===null?'Perlu input':normalFeasible?rupiah(normal):'Tidak layak kapasitas'}</strong></p>
     <p>Biaya per kg di rencana: <strong>{normal===null||!demand?'Perlu input':normalFeasible?rupiah(normal/demand):'Tidak layak kapasitas'}</strong></p>
     <p>Biaya per kg jika demand 60%: <strong>{downside===null||!demand?'Perlu input':downsideFeasible?rupiah(downside/(demand*0.6)):'Tidak layak kapasitas'}</strong></p>
     <p>Gap kapasitas rencana: <strong>{gap===null?'Perlu input':gap.toLocaleString('id-ID')+' kg'}</strong></p>
     <p>Gap kapasitas saat permintaan 60%: <strong>{downsideGap===null?'Perlu input':downsideGap.toLocaleString('id-ID',{maximumFractionDigits:2})+' kg'}</strong></p>
     <p>CAPEX: <strong>{capex===null?'Belum ada quotation':rupiah(capex)}</strong></p>
     {gap!==null&&gap>0&&<p role="alert" className="mt-2 border-l-2 border-red-800 pl-3 text-roast-900">Biaya pada target di atas tidak dapat dianggap layak: kapasitas tidak cukup untuk memenuhi permintaan. Perbesar kapasitas atau turunkan volume, lalu hitung ulang.</p>}
    </div>
   </article>;
  })}</div>
  <p className="mt-6 text-sm leading-7 text-roast-700"><strong>Cara memutuskan:</strong> jangan pilih hanya biaya per kg terkecil. Bandingkan cash-out investasi, kualitas, izin, downtime, service level, kapasitas cadangan dan ketergantungan pemasok. Jika target melebihi kapasitas, biaya yang tampak murah tidak boleh dibandingkan sebagai model yang mampu memenuhi target. Jika harga mesin belum dikutip, jangan menyebut model mesin sendiri lebih ekonomis secara total.</p>
 </section>;
}