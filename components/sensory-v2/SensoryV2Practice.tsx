'use client';
import {useState} from 'react';
import type {SensoryCase,SensoryDiagnostic} from '@/lib/data/sensoryV2Practice';

export function SensoryV2Practice({cases,diagnostics}:{cases:SensoryCase[];diagnostics:SensoryDiagnostic[]}){
 const [responses,setResponses]=useState<Record<string,string>>({});
 const [revisions,setRevisions]=useState<Record<string,string>>({});
 const [revealed,setRevealed]=useState<Record<string,boolean>>({});
 const [completed,setCompleted]=useState<Record<string,boolean>>({});
 const [answers,setAnswers]=useState<Record<string,number>>({});
 return <div className="space-y-12">
  <section aria-labelledby="cases-head">
   <div className="border-b border-paper-300 pb-5">
    <p className="font-mono text-xs font-semibold text-cherry-700">Latihan perubahan bukti</p>
    <h2 id="cases-head" className="mt-2 font-serif text-2xl font-bold text-roast-950">Ambil keputusan, lalu periksa lagi</h2>
    <p className="mt-3 max-w-2xl text-sm leading-7 text-roast-700">Tuliskan respons pertamamu sebelum fakta tambahan dibuka. Setelah melihat fakta baru, revisi keputusan. Contoh penalaran baru ditampilkan setelah respons kedua.</p>
   </div>
   {cases.map((c,i)=><article key={c.id} className="border-b border-paper-300 py-8">
    <p className="font-mono text-xs text-roast-600">Kasus {i+1} dari {cases.length}</p>
    <h3 className="mt-2 font-serif text-xl font-semibold text-roast-950">{c.title}</h3>
    <p className="mt-3 text-sm leading-7 text-roast-800">{c.brief}</p>
    <label htmlFor={'first-'+c.id} className="mt-6 block text-sm font-semibold text-roast-950">{c.prompt}</label>
    <textarea id={'first-'+c.id} rows={3} value={responses[c.id]||''} onChange={e=>setResponses(p=>({...p,[c.id]:e.target.value}))} disabled={Boolean(revealed[c.id])} className="mt-2 w-full rounded border border-paper-400 bg-white p-3 text-sm text-roast-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700" placeholder="Tulis observasi, batas bukti, dan keputusan sementara..." />
    {!revealed[c.id]?<button type="button" disabled={(responses[c.id]||'').trim().length<20} onClick={()=>setRevealed(p=>({...p,[c.id]:true}))} className="mt-3 rounded bg-roast-950 px-4 py-2.5 text-sm font-medium text-paper-50 disabled:cursor-not-allowed disabled:opacity-40">Buka fakta berikutnya</button>:<div className="mt-6 border-l-2 border-cherry-700 bg-paper-100 px-5 py-4">
     <p className="font-mono text-xs font-semibold text-cherry-800">Informasi baru</p>
     <p className="mt-2 text-sm leading-7 text-roast-800">{c.newEvidence}</p>
     <label htmlFor={'revision-'+c.id} className="mt-5 block text-sm font-semibold text-roast-950">{c.revisionPrompt}</label>
     <textarea id={'revision-'+c.id} rows={3} value={revisions[c.id]||''} onChange={e=>setRevisions(p=>({...p,[c.id]:e.target.value}))} disabled={Boolean(completed[c.id])} className="mt-2 w-full rounded border border-paper-400 bg-white p-3 text-sm text-roast-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700" placeholder="Apa yang berubah dan mengapa?" />
     {!completed[c.id]?<button type="button" disabled={(revisions[c.id]||'').trim().length<20} onClick={()=>setCompleted(p=>({...p,[c.id]:true}))} className="mt-3 rounded border border-roast-950 px-4 py-2.5 text-sm font-medium text-roast-950 disabled:cursor-not-allowed disabled:opacity-40">Bandingkan penalaranku</button>:<div role="status" className="mt-4 border-t border-paper-300 pt-4 text-sm leading-7 text-roast-800"><strong>Contoh penalaran profesional:</strong> {c.modelReasoning}<p className="mt-2 text-xs text-roast-600">Bandingkan alasan, bukan hanya pilihan akhir. Responsmu tidak otomatis dianggap lulus kompetensi fisik.</p></div>}
    </div>}
   </article>)}
  </section>
  <section aria-labelledby="diag-head">
   <h2 id="diag-head" className="font-serif text-2xl font-bold text-roast-950">Periksa miskonsepsi yang sering muncul</h2>
   <p className="mt-3 mb-6 text-sm leading-7 text-roast-700">Pilih satu opsi. Setelah memilih, penjelasan akan ditampilkan untuk menguji alasanmu.</p>
   <div className="space-y-7">{diagnostics.map((q,i)=><fieldset key={q.id} className="border-b border-paper-300 pb-6">
    <legend className="font-semibold text-roast-950"><span className="mr-2 font-mono text-xs text-roast-500">{i+1}.</span>{q.question}</legend>
    <div className="mt-4 grid gap-2 sm:grid-cols-2">{q.options.map((op,j)=><button key={j} type="button" aria-pressed={answers[q.id]===j} disabled={answers[q.id]!==undefined} onClick={()=>setAnswers(p=>({...p,[q.id]:j}))} className={'rounded border px-4 py-3 text-left text-sm transition-colors '+(answers[q.id]===j?'border-cherry-800 bg-paper-100 font-semibold text-roast-950':'border-paper-300 bg-white text-roast-800 hover:border-cherry-700 disabled:opacity-70')}>{String.fromCharCode(65+j)}. {op}</button>)}</div>
    {answers[q.id]!==undefined&&<p role="status" className="mt-3 text-sm leading-7 text-roast-800"><strong>{answers[q.id]===q.correctIndex?'Tepat.':'Periksa kembali.'}</strong> {q.explanation}</p>}
   </fieldset>)}</div>
  </section>
 </div>;
}
