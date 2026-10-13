'use client';

import React,{useState} from 'react';
import {diagnosticQuestionsForModule} from '@/lib/data/baristaV2Diagnostics';

type Answer = {selection:number|null;submitted:boolean};
const buttonStyle='rounded-md border px-4 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';

export function BaristaDiagnosticQuiz({moduleCode}:{moduleCode:string}){
 const questions=diagnosticQuestionsForModule(moduleCode);
 const [active,setActive]=useState(0);
 const [state,setState]=useState<Record<string,Answer>>({});
 if(!questions.length)return null;
 const question=questions[active];
 const answer=state[question.id]||{selection:null,submitted:false};
 function select(value:number){
  setState(prev=>({...prev,[question.id]:{selection:value,submitted:false}}));
 }
 function check(){
  if(answer.selection===null)return;
  setState(prev=>({...prev,[question.id]:{selection:answer.selection,submitted:true}}));
 }
 const completed=questions.filter(q=>state[q.id]?.submitted).length;
 const correctCount=questions.filter(q=>state[q.id]?.submitted && state[q.id]?.selection===q.correct).length;
 const isCorrect=answer.submitted&&answer.selection===question.correct;
 return <section className="not-prose mt-14 space-y-5 border-t border-paper-300 pt-8" aria-label={'Uji pemahaman '+moduleCode}>
  <div className="space-y-2">
    <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">Periksa pemahamanmu</p>
    <h2 className="font-serif text-2xl font-semibold text-roast-950">Baca bukti, pilih alasan</h2>
    <p className="text-sm leading-7 text-roast-700">
      Dua pertanyaan per modul. Pilihan salah dirancang untuk menunjukkan miskonsepsi umum.
      Lihat alasan setelah menjawab, lalu kembali ke materi bila diperlukan.
    </p>
    <p className="text-xs font-medium text-roast-600" role="status">
      Pertanyaan {active+1} dari {questions.length} · {completed} dijawab · {correctCount} sesuai alasan contoh
    </p>
  </div>
  <div className="border-y border-paper-300 py-6">
    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-roast-600">{question.objective}</p>
    <h3 className="font-serif text-xl font-semibold text-roast-950">{question.title}</h3>
    <p className="mt-3 text-sm leading-7 text-roast-800">{question.scenario}</p>
    <fieldset className="mt-5 space-y-2">
     <legend className="mb-3 text-sm font-semibold text-roast-950">Pilih kesimpulan atau keputusan yang paling bisa dipertanggungjawabkan.</legend>
     {question.options.map((item,i)=><label key={i}
       className={'flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-sm leading-6 transition-colors '+(answer.selection===i?'border-roast-900 bg-paper-100':'border-paper-300 bg-white')}>
       <input className="mt-1 shrink-0" type="radio" name={'barista-diag-'+question.id}
        checked={answer.selection===i} onChange={()=>select(i)}/>
       <span className="text-roast-900">{item.text}</span>
     </label>)}
    </fieldset>
    <button type="button" disabled={answer.selection===null||answer.submitted}
      onClick={check} className={buttonStyle+' mt-5 border-roast-950 bg-roast-950 text-white disabled:cursor-not-allowed disabled:opacity-40'}>
      Periksa alasan
    </button>
    {answer.submitted&&answer.selection!==null&&<div className="mt-5 space-y-3 border-l-2 border-roast-900 bg-paper-100 p-4" aria-live="polite" role="status">
      <p className="text-sm font-semibold text-roast-950">{isCorrect?'Alasanmu sejalan dengan contoh':'Perlu periksa lagi asumsi yang dipakai'}</p>
      <p className="text-sm leading-7 text-roast-900">{question.options[answer.selection].feedback}</p>
      {!isCorrect&&<p className="text-sm leading-7 text-roast-800">Pertimbangan yang lebih kuat: {question.options[question.correct].text} {question.options[question.correct].feedback}</p>}
      <p className="text-xs leading-6 text-roast-700">Hasil ini hanya umpan balik formatif. Dua jawaban tidak membuktikan kemampuan barista atau kelulusan ujian praktik.</p>
    </div>}
  </div>
  <nav className="flex items-center justify-between gap-3" aria-label="Pindah pertanyaan">
    <button type="button" disabled={active===0} onClick={()=>setActive(Math.max(0,active-1))}
      className={buttonStyle+' border-paper-300 text-roast-900 disabled:cursor-not-allowed disabled:opacity-40'}>← Sebelumnya</button>
    <button type="button" disabled={active>=questions.length-1}
      onClick={()=>setActive(Math.min(questions.length-1,active+1))}
      className={buttonStyle+' border-roast-950 text-roast-900 disabled:cursor-not-allowed disabled:opacity-40'}>Berikutnya →</button>
  </nav>
  <p className="text-xs leading-6 text-roast-700">
    Pilihanmu hanya disimpan selama halaman ini aktif; tidak dikirim atau dicatat sebagai nilai akun.
  </p>
 </section>;
}