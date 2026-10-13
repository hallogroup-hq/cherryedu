'use client';

import React, {useState} from 'react';
import {casesForBaristaModule} from '@/lib/data/baristaV2CaseBank';

type Note={initial:string;revision:string;step:1|2|3;check:boolean[]};
const empty=():Note=>({initial:'',revision:'',step:1,check:[false,false,false,false]});
const inputStyle='mt-2 w-full rounded-lg border border-paper-300 bg-white p-3 text-sm leading-7 text-roast-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';
const btn='rounded-lg px-4 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';

export function BaristaTransferCases({moduleCode}:{moduleCode:string}){
 const cases=casesForBaristaModule(moduleCode);
 const [index,setIndex]=useState(0);
 const [notes,setNotes]=useState<Record<string,Note>>({});
 if(!cases.length)return null;
 const current=cases[index];
 const note=notes[current.id]||empty();
 function update(patch:Partial<Note>){
   setNotes(prev=>({...prev,[current.id]:{...(prev[current.id]||empty()),...patch}}));
 }
 const rubrics=[
  'Jawaban saya membedakan fakta, asumsi, dan informasi yang masih hilang.',
  'Saya menjelaskan mekanisme atau dua kemungkinan penyebab, bukan hanya resep.',
  'Saya memilih uji/keputusan yang terukur dan menghormati keselamatan serta SOP.',
  'Saya merevisi keputusan berdasarkan bukti baru dan menjelaskan komprominya.'
 ];
 return <section className="not-prose mx-auto max-w-3xl space-y-6" aria-label={'Latihan kasus '+moduleCode}>
  <div className="space-y-2">
   <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">Ujian penalaran · Latihan mandiri</p>
   <h2 className="font-serif text-2xl font-bold text-roast-950">Kasus yang kondisinya berubah</h2>
   <p className="text-sm leading-7 text-roast-800">Setiap kasus punya informasi baru setelah kamu memilih langkah pertama. Tujuannya menguji apakah kamu bisa mengubah keputusan dengan alasan, bukan menebak satu jawaban resep.</p>
  </div>
  <nav className="flex flex-wrap gap-2" aria-label="Pilih kasus">
   {cases.map((c,i)=><button key={c.id} type="button" onClick={()=>setIndex(i)} aria-current={index===i?'step':undefined}
     className={btn+' border '+(index===i?'border-roast-900 bg-roast-900 text-white':'border-paper-300 bg-white text-roast-900')}>
      Kasus {i+1} {notes[c.id]?.step===3?'✓':''}
    </button>)}
  </nav>
  <div className="space-y-5 border-t border-paper-300 pt-6">
   <p className="text-xs font-semibold uppercase tracking-wide text-roast-600">Kasus {index+1} dari {cases.length}</p>
   <h3 className="font-serif text-xl font-semibold text-roast-950">{current.title}</h3>
   <p className="text-sm leading-7 text-roast-900">{current.brief}</p>
   <div className="space-y-2">
    <p className="font-semibold text-roast-950">Sebelum mendapat data tambahan</p>
    <p className="text-sm leading-7 text-roast-900">{current.initialPrompt}</p>
    <label className="block text-sm font-semibold text-roast-900">Keputusan dan hipotesismu
      <textarea aria-label="Keputusan dan hipotesismu" value={note.initial} rows={5} maxLength={1900}
       onChange={e=>update({initial:e.target.value,step:1})} className={inputStyle}/>
    </label>
   </div>
   {note.step===1&&<button type="button" disabled={note.initial.trim().length<35}
    onClick={()=>update({step:2})} className={btn+' bg-roast-900 text-white disabled:opacity-40'}>Lihat informasi baru</button>}
   {note.step>=2&&<div className="space-y-4 border-l-2 border-cherry-700 bg-paper-100 px-4 py-5">
     <div>
      <p className="text-xs font-bold uppercase tracking-wide text-roast-600">Kondisi berubah</p>
      <p className="mt-2 text-sm leading-7 text-roast-900">{current.newEvidence}</p>
     </div>
     <p className="text-sm font-semibold leading-7 text-roast-950">{current.revisionPrompt}</p>
     <label className="block text-sm font-semibold text-roast-900">Revisi keputusanmu (jawaban awal tidak dihapus)
      <textarea aria-label="Revisi keputusanmu" value={note.revision} rows={5} maxLength={1900}
       onChange={e=>update({revision:e.target.value,step:2})} className={inputStyle}/>
     </label>
     {note.step===2&&<button type="button" disabled={note.revision.trim().length<35}
       onClick={()=>update({step:3})} className={btn+' bg-roast-900 text-white disabled:opacity-40'}>
       Bandingkan cara berpikir
     </button>}
   </div>}
   {note.step===3&&<div role="status" aria-live="polite" className="space-y-4 border-t border-paper-300 pt-5">
     <div className="space-y-2">
       <p className="text-sm font-semibold text-roast-950">Contoh penalaran yang dapat dipertanggungjawabkan</p>
       <p className="text-sm leading-7 text-roast-800">{current.exampleReasoning}</p>
       <p className="text-xs leading-6 text-roast-700">Contoh ini bukan kunci tunggal; jawaban berbeda bisa defensibel apabila aman, terukur dan punya bukti yang kuat. Jawabanmu tidak dinilai otomatis.</p>
     </div>
     <fieldset className="space-y-3">
       <legend className="text-sm font-semibold text-roast-950">Evaluasi alasanmu sendiri</legend>
       {rubrics.map((rubric,i)=><label key={rubric} className="flex items-start gap-3 text-sm leading-6 text-roast-900">
         <input type="checkbox" className="mt-1" checked={note.check[i]} onChange={e=>update({check:note.check.map((v,j)=>j===i?e.target.checked:v)})}/>
         {rubric}
       </label>)}
     </fieldset>
   </div>}
  </div>
  <div className="border-t border-paper-300 pt-4 text-xs leading-6 text-roast-700">
   Jawabanmu tidak disimpan otomatis ke akun. Ini latihan mandiri, bukan hasil penilaian profesi. Latihan ini menguji pemikiran pada dataset contoh, bukan kemampuan praktik bersertifikat.
  </div>
 </section>;
}