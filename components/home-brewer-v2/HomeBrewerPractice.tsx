'use client';
import React,{useState} from 'react';
import {homeBrewerCasesForModule} from '@/lib/data/homeBrewerV2Cases';
import {diagnosticsForHomeBrewer} from '@/lib/data/homeBrewerV2Diagnostics';

type CaseState={initial:string;revised:string;stage:1|2|3};
const initialState=():CaseState=>({initial:'',revised:'',stage:1});
const input='mt-2 w-full rounded-lg border border-paper-300 bg-white p-3 text-sm leading-7 text-roast-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';
const button='rounded-lg bg-roast-950 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';
export function HomeBrewerChangingCases({moduleCode}:{moduleCode:string}){
 const cases=homeBrewerCasesForModule(moduleCode);
 const [selected,setSelected]=useState(0);
 const [states,setStates]=useState<Record<string,CaseState>>({});
 if(cases.length!==3)return null;
 const c=cases[selected],state=states[c.id]||initialState();
 const update=(patch:Partial<CaseState>)=>setStates(prev=>({...prev,[c.id]:{...(prev[c.id]||initialState()),...patch}}));
 return <section aria-label={'Kasus adaptif '+moduleCode} className="not-prose space-y-6 border-t border-paper-300 pt-8">
   <header>
    <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">Latihan penalaran dan eksperimen</p>
    <h2 className="mt-2 font-serif text-2xl font-semibold">Masalahnya berubah setelah kamu menjawab</h2>
    <p className="mt-3 text-sm leading-7 text-roast-800">Tuliskan keputusanmu terlebih dahulu, baru lihat informasi tambahan. Setelah itu revisi rencana tanpa menghapus jawaban awal. Penalaran yang berubah ketika bukti bertambah adalah bagian dari kompetensi.</p>
   </header>
   <nav aria-label="Pilih kasus" className="flex gap-2 flex-wrap">
    {cases.map((v,i)=><button key={v.id} type="button" onClick={()=>setSelected(i)} aria-current={selected===i?'step':undefined} className={'rounded-lg border px-4 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700 '+(i===selected?'bg-roast-950 text-white':'bg-white text-roast-900 border-paper-300')}>Kasus {i+1} {states[v.id]?.stage===3?'✓':''}</button>)}
   </nav>
   <div className="space-y-4">
    <p className="text-xs uppercase tracking-wide text-roast-600">Kasus {selected+1} dari 3</p>
    <h3 className="font-serif text-xl font-semibold">{c.title}</h3>
    <p className="text-sm leading-7">{c.brief}</p>
    <p className="text-sm font-semibold">{c.initialPrompt}</p>
    <label className="block text-sm font-semibold">Keputusan awal dan bukti yang masih kurang
     <textarea aria-label="Keputusan awal dan bukti yang masih kurang" rows={4} maxLength={1600} className={input} value={state.initial} onChange={e=>update({initial:e.target.value,stage:1})}/>
    </label>
    {state.stage===1&&<button type="button" className={button} disabled={state.initial.trim().length<25} onClick={()=>update({stage:2})}>Buka informasi baru</button>}
    {state.stage>=2&&<div className="space-y-4 border-l-2 border-cherry-700 bg-paper-100 p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-cherry-700">Informasi baru</p>
      <p className="text-sm leading-7 text-roast-950">{c.newEvidence}</p>
      <p className="text-sm font-semibold">{c.revisionPrompt}</p>
      <label className="block text-sm font-semibold">Revisi keputusan dan alasannya
       <textarea aria-label="Revisi keputusan dan alasannya" rows={4} maxLength={1600} className={input} value={state.revised} onChange={e=>update({revised:e.target.value,stage:2})}/>
      </label>
      {state.stage===2&&<button type="button" className={button} disabled={state.revised.trim().length<25} onClick={()=>update({stage:3})}>Bandingkan alasanmu</button>}
    </div>}
    {state.stage===3&&<div role="status" aria-live="polite" className="border-t border-paper-300 py-4">
      <h4 className="font-serif text-lg font-semibold">Contoh pertimbangan</h4>
      <p className="mt-3 text-sm leading-7">{c.model}</p>
      <p className="mt-3 text-xs leading-6 text-roast-700">Jawaban berbeda bisa masuk akal bila aman, memiliki bukti dan batasnya dijelaskan. Hasil latihan ini bukan penilaian bersertifikat.</p>
    </div>}
   </div>
 </section>;
}
type QuizAnswer={choice:number|null;checked:boolean};
export function HomeBrewerDiagnosticQuiz({moduleCode}:{moduleCode:string}){
 const questions=diagnosticsForHomeBrewer(moduleCode);
 const [idx,setIdx]=useState(0),[answers,setAnswers]=useState<Record<string,QuizAnswer>>({});
 if(questions.length!==2)return null;
 const q=questions[idx],state=answers[q.id]||{choice:null,checked:false};
 const submit=()=>{if(state.choice!==null)setAnswers(a=>({...a,[q.id]:{...state,checked:true}}));};
 const correct=state.checked&&state.choice===q.correct;
 return <section aria-label={'Uji pemahaman '+moduleCode} className="not-prose mt-14 space-y-5 border-t border-paper-300 pt-8">
   <div>
    <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">Dua pertanyaan diagnosis</p>
    <h2 className="mt-2 font-serif text-2xl font-semibold">Pilih alasan, bukan angka hafalan</h2>
    <p className="mt-3 text-sm leading-7 text-roast-800">Tiap pilihan akan mendapatkan umpan balik setelah kamu menjawab. Ini latihan formatif dan tidak memengaruhi akun atau sertifikat.</p>
   </div>
   <p className="text-xs font-semibold text-roast-600">Pertanyaan {idx+1} dari {questions.length}</p>
   <h3 className="font-serif text-xl font-semibold">{q.title}</h3>
   <p className="text-sm leading-7">{q.scenario}</p>
   <fieldset className="space-y-2">
    <legend className="pb-2 text-sm font-semibold">Pilih jawaban yang paling bisa dipertanggungjawabkan</legend>
    {q.options.map((o,i)=><label key={i} className={'flex items-start gap-3 rounded-lg border p-3 text-sm leading-6 '+(state.choice===i?'border-roast-950 bg-paper-100':'border-paper-300 bg-white')}>
      <input className="mt-1" type="radio" name={'home-diag-'+q.id} checked={state.choice===i} onChange={()=>setAnswers(a=>({...a,[q.id]:{choice:i,checked:false}}))}/><span>{o.text}</span>
    </label>)}
   </fieldset>
   <button type="button" onClick={submit} disabled={state.choice===null||state.checked} className={button}>Periksa alasan</button>
   {state.checked&&state.choice!==null&&<div role="status" aria-live="polite" className="space-y-2 border-l-2 border-roast-950 bg-paper-100 p-4">
     <p className="text-sm font-semibold">{correct?'Keputusan sesuai contoh':'Pertimbangkan kembali asumsi ini'}</p>
     <p className="text-sm leading-7">{q.options[state.choice].feedback}</p>
     {!correct&&<p className="text-sm leading-7"><strong>Alternatif lebih defensibel:</strong> {q.options[q.correct].text} {q.options[q.correct].feedback}</p>}
   </div>}
   <nav aria-label="Navigasi diagnosis" className="flex justify-between gap-3 border-t border-paper-300 pt-4">
    <button type="button" disabled={idx===0} onClick={()=>setIdx(0)} className="rounded-lg border border-paper-300 px-4 py-2 text-sm font-semibold disabled:opacity-40">← Sebelumnya</button>
    <button type="button" disabled={idx===questions.length-1} onClick={()=>setIdx(1)} className="rounded-lg border border-paper-300 px-4 py-2 text-sm font-semibold disabled:opacity-40">Berikutnya →</button>
   </nav>
 </section>;
}
