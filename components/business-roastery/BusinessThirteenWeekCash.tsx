'use client';
import {useState} from 'react';
const format=(n:number)=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n);
const parse=(s:string)=>{if(!s.trim())return null;const v=Number(s);return Number.isFinite(v)&&v>=0?v:null;};
type Entry={id:number;week:number;kind:'in'|'out';amount:number;label:string};
export function BusinessThirteenWeekCash(){
 const [opening,setOpening]=useState(''),[week,setWeek]=useState('1'),[kind,setKind]=useState<'in'|'out'>('out'),[amount,setAmount]=useState(''),[label,setLabel]=useState(''),[entries,setEntries]=useState<Entry[]>([]),[nextId,setNextId]=useState(1);
 const start=parse(opening),n=parse(amount),valid=Boolean(label.trim()&&n!==null&&n>0);
 const add=()=>{if(!valid)return;setEntries(p=>[...p,{id:nextId,week:Number(week),kind,amount:n!,label:label.trim()}]);setNextId(i=>i+1);setAmount('');setLabel('');};
 const weekly=Array.from({length:13},(_,i)=>{
  const rows=entries.filter(e=>e.week===i+1);
  return{week:i+1,inflow:rows.filter(x=>x.kind==='in').reduce((s,x)=>s+x.amount,0),outflow:rows.filter(x=>x.kind==='out').reduce((s,x)=>s+x.amount,0),count:rows.length};
 });
 let balance=start??0;const balances=weekly.map(r=>{balance+=r.inflow-r.outflow;return{...r,balance}});
 const worst=start!==null&&entries.length>0?Math.min(start,...balances.map(x=>x.balance)):null;
 return <section className="mt-8" aria-label="Perencanaan kas 13 minggu">
  <h2 className="font-serif text-2xl font-bold text-roast-950">Rencanakan tanggal pembayaran, bukan sekadar laba</h2>
  <p className="mt-3 text-sm leading-7 text-roast-800">Tambah transaksi sesuai minggu pencairan/pembayaran: DP green, freight, gas, gaji, invoice customer yang benar-benar akan diterima, pajak, cicilan, investasi atau biaya tak terduga. Tidak ada angka pasar default. Minggu tanpa transaksi tercatat **bukan bukti** tidak akan ada biaya.</p>
  <label className="mt-5 block max-w-sm text-sm font-semibold text-roast-950">Kas yang tersedia pada awal minggu 1 (Rp)
   <input type="number" min="0" value={opening} onChange={e=>setOpening(e.target.value)} className="mt-2 w-full rounded border border-paper-400 bg-white p-3 text-sm text-roast-950"/>
  </label>
  <div className="mt-7 border-y border-paper-300 py-5">
   <h3 className="font-serif text-xl font-semibold text-roast-950">Masukkan satu kejadian kas</h3>
   <div className="mt-4 grid gap-3 sm:grid-cols-2">
    <label className="text-sm font-semibold text-roast-950">Minggu<select value={week} onChange={e=>setWeek(e.target.value)} className="mt-2 block w-full rounded border border-paper-400 bg-white p-3">{Array.from({length:13},(_,i)=><option key={i} value={i+1}>Minggu {i+1}</option>)}</select></label>
    <label className="text-sm font-semibold text-roast-950">Kas masuk/keluar<select value={kind} onChange={e=>setKind(e.target.value as 'in'|'out')} className="mt-2 block w-full rounded border border-paper-400 bg-white p-3"><option value="out">Kas keluar</option><option value="in">Kas masuk</option></select></label>
    <label className="text-sm font-semibold text-roast-950">Nominal (Rp)<input type="number" min="0" value={amount} onChange={e=>setAmount(e.target.value)} className="mt-2 block w-full rounded border border-paper-400 bg-white p-3" placeholder="Berdasarkan jadwal invoice"/></label>
    <label className="text-sm font-semibold text-roast-950">Keterangan transaksi<input value={label} onChange={e=>setLabel(e.target.value)} className="mt-2 block w-full rounded border border-paper-400 bg-white p-3" placeholder="Contoh: DP supplier lot G17"/></label>
   </div>
   <button onClick={add} disabled={!valid} type="button" className="mt-4 rounded bg-roast-950 px-4 py-3 text-sm font-semibold text-white disabled:opacity-40">Tambahkan transaksi</button>
  </div>
  <div className="mt-6">
   <h3 className="font-serif text-xl font-semibold text-roast-950">Jadwal {entries.length} transaksi</h3>
   {entries.length===0?<p className="mt-2 text-sm text-roast-700">Belum ada transaksi. Isi kejadian kas agar perhitungan dapat dimulai.</p>:<div className="mt-3 divide-y divide-paper-300 border-y border-paper-300">{entries.map(e=><div key={e.id} className="flex items-center justify-between gap-3 py-3 text-sm"><div><p className="font-semibold text-roast-950">{e.label}</p><p className="text-xs text-roast-600">Minggu {e.week} · {e.kind==='in'?'Kas masuk':'Kas keluar'} · {format(e.amount)}</p></div><button className="shrink-0 rounded border border-paper-400 px-3 py-2 text-xs" aria-label={'Hapus transaksi '+e.label} onClick={()=>setEntries(p=>p.filter(x=>x.id!==e.id))}>Hapus</button></div>)}</div>}
  </div>
  <div className="mt-8 border-t border-paper-300 pt-5">
   <h3 className="font-serif text-xl font-semibold text-roast-950">Proyeksi arus kas mingguan</h3>
   {start===null||entries.length===0?<p role="status" className="mt-3 text-sm text-roast-800">Saldo awal dan minimal satu jadwal transaksi diperlukan. Belum ada hasil yang bisa diandalkan.</p>:<>
    <p role="status" className="mt-3 text-sm text-roast-800">Titik kas terendah dalam skenario tercatat: <strong>{format(worst!)}</strong>.</p>
    {worst!==null&&worst<0&&<p role="alert" className="mt-3 border-l-2 border-red-800 bg-paper-100 p-3 text-sm leading-6 text-roast-900">Defisit kas pada jadwal ini. Negosiasi DP, termin, kurangi kebutuhan stok atau ubah tanggal pembayaran sebelum terikat kontrak.</p>}
    <div className="mt-5 overflow-x-auto"><table className="min-w-full text-left text-xs sm:text-sm"><thead><tr className="border-b border-paper-400"><th scope="col" className="px-2 py-3">Minggu</th><th scope="col" className="px-2 py-3">Masuk</th><th scope="col" className="px-2 py-3">Keluar</th><th scope="col" className="px-2 py-3">Saldo akhir</th></tr></thead><tbody>{balances.map(row=><tr key={row.week} className="border-b border-paper-300"><th scope="row" className="px-2 py-3">{row.week}</th><td className="px-2 py-3">{format(row.inflow)}</td><td className="px-2 py-3">{format(row.outflow)}</td><td className={'px-2 py-3 font-semibold '+(row.balance<0?'text-red-800':'text-roast-950')}>{format(row.balance)}</td></tr>)}</tbody></table></div>
   </>}
   <p className="mt-5 text-xs leading-6 text-roast-700">Hanya kejadian yang dimasukkan yang dihitung. Simulasi belum menghitung otomatis piutang baru, persediaan, amortisasi, pajak atau keterlambatan pembayaran yang belum dijadwalkan. Pisahkan beban nonkas seperti depresiasi dari arus kas. Simpan salinan data di sistemmu sendiri; halaman tidak mengirim data ke akun.</p>
  </div>
 </section>;
}