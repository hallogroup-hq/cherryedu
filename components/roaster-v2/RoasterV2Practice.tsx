'use client';
import {useState} from 'react';
import type {RoasterV2Case,RoasterV2Diagnostic} from '@/lib/data/roasterV2Practice';

type Note={answer:string;attempted:boolean;revision:string};
type Selection={value:number|null;submitted:boolean};
export function RoasterV2Practice({cases,diagnostics}:{cases:RoasterV2Case[];diagnostics:RoasterV2Diagnostic[]}){
 const [notes,setNotes]=useState<Record<string,Note>>({});
 const [picks,setPicks]=useState<Record<string,Selection>>({});
 const note=(id:string):Note=>notes[id]||{answer:'',attempted:false,revision:''};
 const update=(id:string,patch:Partial<Note>)=>setNotes(old=>({...old,[id]:{...(old[id]||{answer:'',attempted:false,revision:''}),...patch}}));
 const pick=(id:string):Selection=>picks[id]||{value:null,submitted:false};
 return <div className="space-y-12">
  <section aria-label="Latihan kasus dengan informasi baru">
   <h2 className="font-serif text-2xl font-bold text-roast-950">Keputusan ketika bukti berubah</h2>
   <p className="mt-2 text-sm leading-7 text-roast-700">Tuliskan keputusan pertama. Setelah itu kamu akan mendapat fakta baru dan diminta memperbaiki alasan. Jangan menunggu satu jawaban angka yang sempurna.</p>
   {cases.map((c,i)=>{const n=note(c.id);return <article key={c.id} className="mt-7 border-t border-paper-300 pt-7">
    <p className="font-mono text-xs font-semibold text-cherry-700">Kasus {i+1} dari {cases.length}</p>
    <h3 className="mt-2 font-serif text-xl font-bold text-roast-950">{c.brief}</h3>
    <label className="mt-4 block text-sm font-semibold text-roast-800">{c.prompt}
     <textarea value={n.answer} rows={4} disabled={n.attempted}
      onChange={e=>update(c.id,{answer:e.target.value})}
      className="mt-3 w-full rounded-md border border-paper-300 bg-paper-50 px-4 py-3 font-normal text-roast-900"/>
    </label>
    {!n.attempted&&<button disabled={n.answer.trim().length<40} type="button" onClick={()=>update(c.id,{attempted:true})}
     className="mt-3 rounded-md bg-roast-950 px-5 py-3 text-sm font-semibold text-paper-50 disabled:opacity-50">
     Lihat fakta baru</button>}
    {!n.attempted&&<p className="mt-2 text-xs text-roast-600">Tulis keputusan beserta alasan (minimal 40 karakter) agar bisa melanjutkan.</p>}
    {n.attempted&&<div className="mt-5 border-l-2 border-cherry-700 bg-paper-100 p-5">
     <h4 className="font-serif text-lg font-bold text-roast-950">Informasi yang baru ditemukan</h4>
     <p className="mt-2 text-sm leading-7 text-roast-800">{c.newEvidence}</p>
     <label className="mt-4 block text-sm font-semibold text-roast-900">{c.revisionPrompt}
      <textarea rows={4} value={n.revision} onChange={e=>update(c.id,{revision:e.target.value})}
       className="mt-3 w-full rounded-md border border-paper-300 bg-paper-50 px-3 py-3 text-roast-900 font-normal"/>
     </label>
     {n.revision.trim().length>=40?<p className="mt-4 text-sm leading-7 text-roast-800"><strong>Pembanding penalaran:</strong> {c.modelReasoning}</p>
       :<p className="mt-3 text-xs text-roast-700">Tuliskan revisi dengan alasan (minimal 40 karakter), lalu bandingkan dengan penalaran acuannya.</p>}
    </div>}
   </article>})}
  </section>
  <section aria-label="Diagnosis pemahaman">
   <h2 className="font-serif text-2xl font-bold text-roast-950">Periksa cara berpikirmu</h2>
   <p className="mt-2 text-sm leading-7 text-roast-700">Pilih alasan yang paling tepat. Penjelasan untuk pilihanmu baru muncul setelah diserahkan.</p>
   {diagnostics.map((q,i)=>{const p=pick(q.id);return <article key={q.id} className="mt-7 border-t border-paper-300 pt-7">
    <p className="font-mono text-xs text-cherry-700">Pertanyaan {i+1} dari {diagnostics.length}</p>
    <h3 className="mt-2 font-serif text-lg font-semibold leading-7 text-roast-950">{q.scenario}</h3>
    <fieldset className="mt-4 space-y-2"><legend className="sr-only">Jawaban untuk pertanyaan {i+1}</legend>
     {q.options.map((o,j)=><label key={j} className="flex cursor-pointer items-start gap-3 rounded-md border border-paper-300 px-4 py-3 text-sm text-roast-800">
      <input type="radio" name={q.id} className="mt-1" checked={p.value===j} disabled={p.submitted}
       onChange={()=>setPicks(old=>({...old,[q.id]:{value:j,submitted:false}}))}/>
      <span>{o.text}</span>
     </label>)}
    </fieldset>
    {!p.submitted&&<button disabled={p.value===null} type="button"
     onClick={()=>setPicks(old=>({...old,[q.id]:{...p,submitted:true}}))}
     className="mt-3 rounded-md border border-roast-950 px-4 py-3 text-sm font-semibold text-roast-900 disabled:opacity-50">Periksa jawaban</button>}
    {p.submitted&&p.value!==null&&<div role="status" className="mt-4 border-l-2 border-cherry-700 bg-paper-100 p-4 text-sm leading-7 text-roast-800">
     <strong>{p.value===q.correct?'Alasanmu tepat.':'Perhatikan letak kekeliruannya.'}</strong>
     <p className="mt-2">{q.options[p.value].feedback}</p>
     {p.value!==q.correct&&<p className="mt-2">Jawaban yang lebih tepat: {q.options[q.correct].text}.</p>}
    </div>}
   </article>})}
  </section>
  <p className="border-t border-paper-300 pt-5 text-xs leading-6 text-roast-600">
   Jawaban hanya tersimpan selama halaman ini terbuka. Latihan ini bukan pengesahan kompetensi operasi mesin langsung.
  </p>
 </div>;
}
