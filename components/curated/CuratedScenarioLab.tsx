'use client';
import {useState} from 'react';
import {CheckCircle2,RotateCcw,ArrowRight} from 'lucide-react';
import type {CuratedScenario} from '@/lib/data/greenCoffeeScenarios';
export function CuratedScenarioLab({scenario}:{scenario:CuratedScenario}){
 const [choice,setChoice]=useState<number|null>(null);
 const [submitted,setSubmitted]=useState(false);
 const correct=choice===scenario.correctIndex;
 return <section aria-label="Latihan keputusan" className="my-10 overflow-hidden rounded-xl border border-paper-300 bg-white shadow-xs">
  <div className="border-b border-paper-300 bg-paper-100 px-5 py-5 sm:px-7">
   <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-cherry-800">Latihan keputusan · {scenario.module}</p>
   <h3 className="mt-2 font-serif text-2xl font-bold text-roast-950">{scenario.title}</h3>
  </div>
  <div className="px-5 py-6 sm:px-7">
   <p className="text-sm leading-7 text-roast-800">{scenario.stimulus}</p>
   <fieldset disabled={submitted} className="mt-6 space-y-3">
    <legend className="mb-4 font-serif text-lg font-semibold text-roast-950">{scenario.question}</legend>
    {scenario.choices.map((answer,i)=>{
     const selected=choice===i,good=submitted&&i===scenario.correctIndex,bad=submitted&&selected&&!correct;
     return <label key={i} className={['flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-4 text-sm leading-6',
      good?'border-emerald-700 bg-emerald-50':bad?'border-red-600 bg-red-50':selected?'border-roast-950 bg-paper-100':'border-paper-300 hover:bg-paper-100'].join(' ')}>
      <input type="radio" name={'scenario-'+scenario.module} checked={selected} onChange={()=>setChoice(i)} className="mt-1 h-4 w-4 shrink-0 accent-roast-950"/>
      <span className="flex-1"><strong className="mr-2 font-mono">{String.fromCharCode(65+i)}.</strong>{answer}</span>
      {good&&<CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-800"/>}
     </label>;
    })}
   </fieldset>
   {!submitted?<button type="button" disabled={choice===null} onClick={()=>setSubmitted(true)} className="mt-6 inline-flex items-center gap-2 rounded-md bg-roast-950 px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">Periksa keputusan <ArrowRight size={16}/></button>:
   <div role="status" className="mt-6 rounded-lg border border-paper-300 bg-paper-100 p-5">
    <p className="font-semibold text-roast-950">{correct?'Keputusan ini didukung bukti':'Tinjau kembali pertimbanganmu'}</p>
    <p className="mt-2 text-sm leading-7 text-roast-800">{scenario.explanation}</p>
    <button type="button" onClick={()=>{setChoice(null);setSubmitted(false)}} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cherry-800 underline underline-offset-4"><RotateCcw size={15}/>Coba lagi</button>
   </div>}
  </div>
 </section>;
}
