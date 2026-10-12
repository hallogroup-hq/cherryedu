'use client';
import React, { useState } from 'react';
import type { WorkspaceActivity, IncomeActivity } from '@/lib/data/foundationV2Interactions';

const fieldStyle='block mt-1 w-full rounded-lg border border-paper-300 bg-white text-roast-950 px-3 py-2.5 text-sm leading-relaxed focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';
const buttonStyle='rounded-lg px-4 py-2.5 font-semibold text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';
export function FoundationPracticeWorkspace({activity}:{activity:WorkspaceActivity}){
  const [responses,setResponses]=useState<string[]>(()=>activity.prompts.map(()=>''));
  const [show,setShow]=useState(false);
  const [copyStatus,setCopyStatus]=useState('');
  const completed=responses.filter(x=>x.trim().length>=15).length;
  async function copy(){
    const txt=activity.title+'\n\n'+activity.prompts.map((p,i)=>p.label+'\n'+(responses[i]||'[Belum diisi]')).join('\n\n')+'\n\nLatihan mandiri CherryEdu Foundation V2';
    try{
      await navigator.clipboard.writeText(txt);
      setCopyStatus('Catatan tersalin. Simpan di tempat yang kamu pilih.');
    }catch{
      setCopyStatus('Salin manual dari kolom jawaban. Browser tidak mengizinkan clipboard.');
    }
  }
  return <div className="space-y-5">
    <p role="status" className="text-xs leading-5 text-roast-700 border-b border-paper-200 pb-3">
      Jawaban latihan <strong>tidak tersimpan otomatis</strong>. Salin catatanmu sebelum meninggalkan halaman.
    </p>
    {activity.prompts.map((p,i)=><label key={p.label} className="block">
      <span className="font-semibold text-sm text-roast-950">{i+1}. {p.label}</span>
      <span className="block mt-1 text-xs leading-5 text-roast-700">{p.hint}</span>
      <textarea rows={3} maxLength={1800} value={responses[i]} onChange={e=>{
        setResponses(a=>a.map((x,n)=>i===n?e.target.value:x));setShow(false);
      }} className={fieldStyle} placeholder="Tulis hasil pengamatan atau penalaranmu di sini..." aria-label={p.label}/>
    </label>)}
    <div className="flex flex-wrap gap-2 items-center">
      <button type="button" className={buttonStyle+' bg-roast-950 text-white'} onClick={()=>setShow(true)} disabled={completed<activity.prompts.length}>
        Bandingkan dengan contoh pembahasan
      </button>
      <button type="button" className={buttonStyle+' border border-paper-300 text-roast-950 bg-white'} onClick={copy}>
        Salin catatan
      </button>
    </div>
    <p aria-live="polite" className="text-xs text-roast-700">{completed}/{activity.prompts.length} bagian memiliki jawaban minimal 15 karakter. {copyStatus}</p>
    {show&&<div className="rounded-lg border border-paper-300 bg-paper-100 p-4" role="status" aria-live="polite">
      <p className="text-sm font-bold text-roast-950">Contoh penalaran — bukan satu-satunya jawaban</p>
      <p className="mt-2 text-sm leading-6 text-roast-800">{activity.model}</p>
      <p className="mt-2 text-xs leading-5 text-roast-700">Bandingkan alasan, data yang digunakan, dan batas kesimpulanmu dengan contoh. Pembahasan ini bukan penilaian dari pengajar.</p>
    </div>}
  </div>;
}

export function FoundationFarmIncome({activity}:{activity:IncomeActivity}){
  const [standard,setStandard]=useState({qty:'100',price:'12000',cost:'900000'});
  const [premium,setPremium]=useState({qty:'90',price:'15000',cost:'1130000'});
  const [show,setShow]=useState(false);
  const input=(type:'standard'|'premium',key:'qty'|'price'|'cost',label:string)=><label key={key} className="block text-xs font-semibold text-roast-900">
    {label}
    <input type="number" min="0" step="any" value={type==='standard'?standard[key]:premium[key]}
      onChange={e=>{
        const set=type==='standard'?setStandard:setPremium;
        set(s=>({...s,[key]:e.target.value}));setShow(false);
      }}
      className={fieldStyle+' text-base'} />
  </label>;
  const a=Number(standard.qty)*Number(standard.price)-Number(standard.cost);
  const b=Number(premium.qty)*Number(premium.price)-Number(premium.cost);
  const validInputs=[...Object.values(standard),...Object.values(premium)].every(v=>v.trim()!==''&&Number.isFinite(Number(v))&&Number(v)>=0);
  const valid=validInputs&&Number.isFinite(a)&&Number.isFinite(b)&&Number.isFinite(b-a);
  const fmt=(n:number)=>n.toLocaleString('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0});
  return <div className="space-y-4">
    <p className="text-xs text-roast-700">Satuan contoh: jumlah ceri terjual (kg), harga per kg ceri, total biaya untuk periode dan skenario yang sama. Jangan bandingkan kilogram ceri dengan kilogram roasted.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {(['standard','premium'] as const).map(t=><fieldset key={t} className="border border-paper-300 rounded-lg p-4 space-y-3">
        <legend className="font-serif font-bold text-roast-950 px-1">{t==='standard'?'Skenario standar':'Skenario sortasi premium'}</legend>
        {input(t,'qty','Jumlah ceri terjual (kg)')}
        {input(t,'price','Harga jual per kg (Rp)')}
        {input(t,'cost','Biaya tercatat (Rp)')}
      </fieldset>)}
    </div>
    {validInputs && !valid && <p role="alert" className="text-sm leading-6 text-rose-800">
      Nilai terlalu besar untuk dihitung secara andal. Gunakan angka yang lebih kecil dan periksa satuannya.
    </p>}
    <button type="button" disabled={!valid} className={buttonStyle+' bg-roast-950 text-white disabled:opacity-40'} onClick={()=>setShow(true)}>Hitung sisa setelah biaya</button>
    {show&&valid&&<div className="rounded-lg border border-paper-300 bg-paper-100 p-4" role="status" aria-live="polite">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <p className="text-sm text-roast-800">Standar: <strong className="block text-xl text-roast-950">{fmt(a)}</strong></p>
        <p className="text-sm text-roast-800">Premium: <strong className="block text-xl text-roast-950">{fmt(b)}</strong></p>
      </div>
      <p className="font-semibold text-sm text-roast-950 mt-3">Selisih sisa setelah biaya: {fmt(b-a)}</p>
      <p className="text-xs text-roast-700 mt-2 leading-5">Perhitungan = (volume terjual × harga per kg) − biaya tercatat. Belum menjadi laba bersih rumah tangga, apalagi bukti living income. Biaya yang diabaikan dapat mengubah hasil.</p>
    </div>}
  </div>;
}
