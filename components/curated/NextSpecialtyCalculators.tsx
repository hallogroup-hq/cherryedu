'use client';
import {useState} from 'react';

function num(s:string){if(!s.trim())return null;const n=Number(s.replace(',','.'));return Number.isFinite(n)&&n>=0?n:null}
function Field({label,value,set,unit}:{label:string;value:string;set:(s:string)=>void;unit:string}){
 return <label className="flex flex-col gap-2 text-sm text-roast-800">
  <span className="font-semibold">{label}</span>
  <span className="flex items-center overflow-hidden rounded-md border border-paper-300 bg-white focus-within:border-roast-900">
   <input type="number" min="0" step="any" inputMode="decimal" value={value} onChange={e=>set(e.target.value)} aria-label={label}
     className="w-full min-w-0 bg-transparent px-3 py-2.5 text-roast-950 focus:outline-none"/>
   <span className="border-l border-paper-200 bg-paper-100 px-3 py-2.5 font-mono text-xs text-roast-700">{unit}</span>
  </span>
 </label>
}
const rupiah=(n:number)=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n);
function Wrapper({title,description,children,results}:{title:string;description:string;children:React.ReactNode;results:React.ReactNode}){
 return <section className="my-10 overflow-hidden rounded-xl border border-paper-300 bg-white shadow-xs" aria-label={title}>
  <div className="border-b border-paper-300 bg-paper-100 px-5 py-5 sm:px-7">
   <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-cherry-800">Hitung dan periksa</p>
   <h3 className="mt-2 font-serif text-2xl font-bold text-roast-950">{title}</h3>
   <p className="mt-2 text-sm leading-6 text-roast-700">{description}</p>
  </div>
  <div className="p-5 sm:p-7"><div className="grid gap-4 sm:grid-cols-2">{children}</div>
   <div role="status" aria-live="polite" className="mt-6 rounded-lg border border-paper-300 bg-paper-100 p-5">{results}</div>
  </div>
 </section>
}
export function GreenLandedCostCalculator(){
 const [p,setP]=useState(''),[freight,setFreight]=useState(''),[handling,setHandling]=useState(''),[output,setOutput]=useState('');
 const vals=[num(p),num(freight),num(handling),num(output)],valid=vals.every(x=>x!==null)&&Number(vals[3])>0;
 const cost=valid?(Number(vals[0])+Number(vals[1])+Number(vals[2]))/Number(vals[3]):null;
 return <Wrapper title="Biaya green per kilogram saleable" description="Masukkan angka dari invoice dan quotation sebenarnya. Ongkos kirim antarpulau tidak diisi dengan tarif perkiraan nasional."
 results={cost===null?<p className="text-sm text-roast-700">Isi seluruh biaya serta berat green yang benar-benar lolos QC untuk melihat hasil.</p>:<>
 <p className="font-serif text-3xl font-bold text-roast-950">{rupiah(cost)} <span className="text-base">/ kg saleable</span></p>
 <p className="mt-2 text-xs leading-6 text-roast-700">Rumus: (pembelian + freight + handling) / kg saleable. Ini biaya input relevan, belum harga jual maupun margin. Periksa bahwa tidak ada biaya dihitung dua kali.</p></>}>
  <Field label="Biaya pembelian lot" value={p} set={setP} unit="Rp"/>
  <Field label="Biaya kirim tertagih" value={freight} set={setFreight} unit="Rp"/>
  <Field label="Biaya handling/packing terkait" value={handling} set={setHandling} unit="Rp"/>
  <Field label="Output green lolos grade" value={output} set={setOutput} unit="kg"/>
 </Wrapper>
}
export function CoffeeShopUnitEconomicsCalculator(){
 const [price,setPrice]=useState(''),[variable,setVariable]=useState(''),[fee,setFee]=useState(''),[fixed,setFixed]=useState('');
 const vals=[num(price),num(variable),num(fee),num(fixed)];
 const valid=vals.every(v=>v!==null)&&Number(vals[0])>0&&Number(vals[2])<=100;
 const priceVal=Number(vals[0]),feeVal=Number(vals[2])/100,variableVal=Number(vals[1]);
 const net=priceVal*(1-feeVal),cm=net-variableVal;
 const bep=valid&&cm>0?Math.ceil(Number(vals[3])/cm):null;
 return <Wrapper title="Margin channel dan BEP kedai" description="Masukkan harga sebelum komisi, biaya variabel PER CUP yang belum memasukkan komisi, persentase komisi merchant, dan biaya tetap untuk periode yang sama. Pajak, diskon, serta basis fee mengikuti laporan transaksi sebenarnya."
 results={!valid?<p className="text-sm text-roast-700">Lengkapi empat angka. Persentase komisi harus antara 0 dan 100.</p>:<>
 <p className="text-sm">Penerimaan sebelum biaya variabel: <strong>{rupiah(net)}</strong> per cup</p>
 <p className="mt-2 text-sm">Contribution margin: <strong>{rupiah(cm)}</strong> per cup</p>
 <p className="mt-2 text-sm">BEP operasional sederhana: <strong>{bep===null?'Tidak tercapai jika kontribusi ≤ 0':new Intl.NumberFormat('id-ID').format(bep)+' cup per periode biaya tetap'}</strong></p>
 <p className="mt-3 text-xs leading-6 text-roast-700">Asumsi: komisi belum masuk ke kolom biaya variabel; basis komisi adalah harga yang dimasukkan, satu menu/mix tetap dan kapasitas cukup. Jangan mengurangi komisi dua kali. Ini bukan target ROI atau proyeksi kas.</p>
 </>}>
  <Field label="Harga jual per cup" value={price} set={setPrice} unit="Rp"/>
  <Field label="Biaya variabel selain komisi per cup" value={variable} set={setVariable} unit="Rp"/>
  <Field label="Komisi merchant channel" value={fee} set={setFee} unit="%"/>
  <Field label="Biaya tetap per periode" value={fixed} set={setFixed} unit="Rp"/>
 </Wrapper>
}
export function QProcessorYieldCalculator(){
 const [input,setInput]=useState(''),[green,setGreen]=useState(''),[reject,setReject]=useState('');
 const vals=[num(input),num(green),num(reject)];
 const okay=vals.every(v=>v!==null)&&Number(vals[0])>0;
 const coarse=Number(vals[1]),rejectVal=Number(vals[2]),source=Number(vals[0]);
 const possible=okay&&coarse>=rejectVal&&coarse<=source;
 const saleable=coarse-rejectVal,yieldPercent=(saleable/source)*100;
 return <Wrapper title="Rendemen green saleable" description="Pisahkan massa parchment/cherry awal, green kasar setelah milling, dan reject sortasi. Gunakan basis bahan yang sama untuk semua perhitungan."
 results={!okay?<p className="text-sm text-roast-700">Masukkan massa input, output green kasar, dan reject sortasi.</p>:!possible?
 <p className="text-sm text-red-800">Neraca massa belum masuk akal: pastikan green kasar tidak melebihi input, dan reject tidak melebihi green kasar.</p>:<>
 <p className="font-serif text-3xl font-bold text-roast-950">{yieldPercent.toFixed(1).replace('.',',')}% <span className="text-base">saleable yield</span></p>
 <p className="mt-2 text-sm">Green saleable: <strong>{saleable.toLocaleString('id-ID')} kg</strong></p>
 <p className="mt-2 text-xs leading-6 text-roast-700">Rumus: (output green kasar – reject) / massa input × 100%. Jenis input perlu dicatat; rendemen cherry dan parchment tidak langsung sebanding.</p>
 </>}>
  <Field label="Massa input awal" value={input} set={setInput} unit="kg"/>
  <Field label="Output green kasar" value={green} set={setGreen} unit="kg"/>
  <Field label="Reject sortasi green" value={reject} set={setReject} unit="kg"/>
 </Wrapper>
}
