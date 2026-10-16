'use client';

import {useState} from 'react';

const parse=(s:string)=>{if(!s.trim())return null;const v=Number(s.replace(',','.'));return Number.isFinite(v)&&v>=0?v:null};
const number=(n:number,dec=2)=>new Intl.NumberFormat('id-ID',{minimumFractionDigits:dec,maximumFractionDigits:dec}).format(n);
function Field({label,value,set,unit}:{label:string;value:string;set:(v:string)=>void;unit:string}){
 return <label className="flex flex-col gap-2 text-sm text-roast-800">
  <span className="font-semibold">{label}</span>
  <span className="flex items-center overflow-hidden rounded-md border border-paper-300 bg-white focus-within:border-roast-900">
   <input type="number" min="0" step="any" inputMode="decimal" value={value} onChange={e=>set(e.target.value)} aria-label={label} className="w-full min-w-0 bg-transparent px-3 py-2.5 text-roast-950 focus:outline-none"/>
   <span className="border-l border-paper-200 bg-paper-100 px-3 py-2.5 font-mono text-xs text-roast-700">{unit}</span>
  </span>
 </label>;
}
function Lab({title,description,children,result}:{title:string;description:string;children:React.ReactNode;result:React.ReactNode}){
 return <section className="my-10 overflow-hidden rounded-xl border border-paper-300 bg-white shadow-xs" aria-label={title}>
  <header className="border-b border-paper-300 bg-paper-100 px-5 py-5 sm:px-7">
   <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-cherry-800">Hitung dan periksa</p>
   <h3 className="mt-2 font-serif text-2xl font-bold text-roast-950">{title}</h3>
   <p className="mt-2 text-sm leading-6 text-roast-700">{description}</p>
  </header>
  <div className="p-5 sm:p-7">
   <div className="grid gap-4 sm:grid-cols-2">{children}</div>
   <div role="status" aria-live="polite" className="mt-6 rounded-lg border border-paper-300 bg-paper-100 p-5 text-sm leading-6 text-roast-800">{result}</div>
  </div>
 </section>;
}

export function GreenCherryReceivingLab(){
 const [gross,setGross]=useState(''),[tare,setTare]=useState(''),[held,setHeld]=useState('');
 const values=[parse(gross),parse(tare),parse(held)],complete=values.every(v=>v!==null);
 const grossVal=values[0]??0,tareVal=values[1]??0,heldVal=values[2]??0,net=grossVal-tareVal;
 const valid=complete&&tareVal<=grossVal&&heldVal<=net;
 return <Lab title="Neraca massa penerimaan ceri" description="Gunakan berat bruto termasuk wadah, tara wadah, dan massa ceri yang ditahan. Ketiga angka harus berasal dari batch yang sama, bukan berat kiriman pemasok lain."
  result={!complete?<p>Masukkan ketiga massa. Kolom kosong belum dihitung sebagai nol.</p>:!valid?
   <p className="font-semibold text-red-800">Neraca tidak masuk akal: tara tidak boleh melebihi bruto, dan massa yang ditahan tidak boleh melebihi netto ceri.</p>:<>
    <p>Berat ceri netto: <strong>{number(net)} kg</strong>.</p>
    <p>Ditahan untuk pemeriksaan: <strong>{number(heldVal)} kg</strong>.</p>
    <p>Dialokasikan ke proses: <strong>{number(net-heldVal)} kg</strong>.</p>
    <p className="mt-3 text-xs text-roast-700">Periksa: {number(net)} kg = {number(heldVal)} kg ditahan + {number(net-heldVal)} kg dialokasikan. Catat lot, alasan hold dan petugas. Hasil ini bukan rendemen green bean.</p>
   </>}>
   <Field label="Berat bruto bersama wadah" value={gross} set={setGross} unit="kg"/>
   <Field label="Berat wadah atau tara" value={tare} set={setTare} unit="kg"/>
   <Field label="Ceri yang ditahan untuk pemeriksaan" value={held} set={setHeld} unit="kg"/>
  </Lab>;
}
export function GreenMoistureSpreadLab(){
 const [a,setA]=useState(''),[b,setB]=useState(''),[c,setC]=useState('');
 const v=[parse(a),parse(b),parse(c)],filled=v.every(x=>x!==null),valid=filled&&v.every(x=>x!==null&&x<=100);
 const nums=v.map(x=>x??0),average=nums.reduce((s,x)=>s+x,0)/3,spread=Math.max(...nums)-Math.min(...nums);
 return <Lab title="Periksa variasi kadar air tiga titik" description="Isi hasil dari tiga titik sampel yang dicatat terpisah, memakai metode dan basis pengukuran yang sama. Jumlah tiga titik hanya latihan, bukan ketentuan sampling semua lot."
  result={!filled?<p>Masukkan ketiga nilai kadar air sesuai angka alat atau laporan. Kolom yang kosong tidak dianggap 0%.</p>:!valid?
   <p className="font-semibold text-red-800">Nilai kadar air harus berada pada rentang 0–100%. Periksa kembali alat serta satuannya.</p>:<>
    <p>Rata-rata tiga pengukuran: <strong>{number(average)}%</strong>.</p>
    <p>Nilai terendah–tertinggi: <strong>{number(Math.min(...nums))}% – {number(Math.max(...nums))}%</strong>.</p>
    <p>Selisih antar-titik: <strong>{number(spread)} poin persentase</strong>.</p>
    <p className="mt-3 text-xs text-roast-700">Rata-rata bukan keputusan release. Periksa risiko rewetting, lokasi sampel, keseragaman dan kalibrasi alat; keputusan QC harus mengikuti kontrak, metode serta kebutuhan penyimpanan.</p>
   </>}>
   <Field label="Kadar air titik pertama" value={a} set={setA} unit="%"/>
   <Field label="Kadar air titik kedua" value={b} set={setB} unit="%"/>
   <Field label="Kadar air titik ketiga" value={c} set={setC} unit="%"/>
  </Lab>;
}
