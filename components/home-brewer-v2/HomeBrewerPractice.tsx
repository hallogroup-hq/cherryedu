'use client';
import React,{useState} from 'react';
import {getHomeBrewerCases} from '@/lib/data/homeBrewerV2Cases';
import {getHomeBrewerDiagnostics} from '@/lib/data/homeBrewerV2Diagnostics';

type CaseNote={answer:string;revision:string;stage:1|2|3};
type QuizNote={selected:number|null;submitted:boolean};
const blank=():CaseNote=>({answer:'',revision:'',stage:1});
const textarea='mt-2 w-full rounded-lg border border-paper-300 bg-white p-3 text-sm leading-7 text-roast-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';
const btn='rounded-md border border-roast-900 bg-roast-950 px-4 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';

function ChangingCase({moduleCode}:{moduleCode:string}){
 const cases=getHomeBrewerCases(moduleCode),[active,setActive]=useState(0),[notes,setNotes]=useState<Record<string,CaseNote>>({});
 if(!cases.length)return null;
 const item=cases[active],note=notes[item.id]||blank();
 function update(patch:Partial<CaseNote>){setNotes(prev=>({...prev,[item.id]:{...(prev[item.id]||blank()),...patch}}));}
 return <section aria-label={'Kasus adaptif '+moduleCode} className="space-y-6">
  <div><p className="font-mono text-xs font-semibold uppercase tracking-wider text-cherry-700">Coba berpikir sendiri</p>
   <h2 className="mt-3 font-serif text-2xl font-semibold text-roast-950">Ketika situasinya berubah</h2>
   <p className="mt-3 text-sm leading-7 text-roast-800">Tulis keputusanmu sebelum mendapat informasi berikutnya. Jawaban awal tidak dihapus. Yang diuji adalah alasan dan kemampuan merevisi, bukan hafalan resep.</p>
  </div>
  <nav aria-label="Pilih kasus" className="flex gap-3">
   {cases.map((c,i)=><button key={c.id} type="button" aria-current={i===active?'step':undefined}
     className={'rounded-md border px-4 py-2 text-sm font-semibold '+(i===active?'border-roast-900 bg-roast-900 text-white':'border-paper-300 bg-white text-roast-900')}
     onClick={()=>setActive(i)}>Kasus {i+1} {notes[c.id]?.stage===3?'✓':''}</button>)}
  </nav>
  <div className="space-y-4 border-t border-paper-300 pt-5">
   <h3 className="font-serif text-xl font-semibold text-roast-950">{item.title}</h3>
   <p className="text-sm leading-7 text-roast-900">{item.brief}</p>
   <p className="text-sm font-semibold leading-7 text-roast-950">{item.prompt}</p>
   <label className="block text-sm font-semibold text-roast-900">Keputusan dan alasan awalmu
    <textarea aria-label="Keputusan dan alasan awalmu" rows={4} maxLength={1800} value={note.answer}
     readOnly={note.stage>=2} aria-readonly={note.stage>=2}
     onChange={e=>update({answer:e.target.value,stage:1})} className={textarea}/>
    {note.stage>=2&&<span className="mt-1 block text-xs font-normal leading-6 text-roast-700">Jawaban awal dikunci setelah informasi baru dibuka, agar catatan keputusan sebelum dan sesudah bukti tidak tertukar.</span>}
   </label>
   {note.stage===1&&<button type="button" className={btn} disabled={note.answer.trim().length<35} onClick={()=>update({stage:2})}>Lihat informasi baru</button>}
   {note.stage>=2&&<div className="space-y-4 border-l-2 border-cherry-700 bg-paper-100 p-5">
    <p className="font-mono text-xs font-semibold uppercase tracking-wide text-cherry-700">Informasi baru</p>
    <p className="text-sm leading-7 text-roast-900">{item.newEvidence}</p>
    <p className="text-sm font-semibold leading-7 text-roast-950">{item.revisionPrompt}</p>
    <label className="block text-sm font-semibold text-roast-900">Keputusan setelah tahu bukti baru
     <textarea aria-label="Keputusan setelah tahu bukti baru" rows={4} maxLength={1800} value={note.revision}
      onChange={e=>update({revision:e.target.value,stage:2})} className={textarea}/>
    </label>
    {note.stage===2&&<button type="button" className={btn} disabled={note.revision.trim().length<35} onClick={()=>update({stage:3})}>Bandingkan dengan alasan contoh</button>}
   </div>}
   {note.stage===3&&<div role="status" aria-live="polite" className="border-t border-paper-300 pt-5">
     <h4 className="text-sm font-semibold text-roast-950">Contoh penalaran yang bisa dipertanggungjawabkan</h4>
     <p className="mt-2 text-sm leading-7 text-roast-800">{item.modelReasoning}</p>
     <p className="mt-3 text-xs leading-6 text-roast-700">Jawaban terbuka dapat berbeda jika aman, berbasis bukti, dan menyatakan keterbatasan. Hasil ini bukan penilaian kompetensi praktik.</p>
   </div>}
  </div>
 </section>;
}
function Diagnostic({moduleCode}:{moduleCode:string}){
 const items=getHomeBrewerDiagnostics(moduleCode),[active,setActive]=useState(0),[all,setAll]=useState<Record<string,QuizNote>>({});
 if(!items.length)return null;
 const q=items[active],ans=all[q.id]||{selected:null,submitted:false};
 const done=items.filter(x=>all[x.id]?.submitted).length,correct=items.filter(x=>all[x.id]?.submitted&&all[x.id]?.selected===x.correct).length;
 function pick(i:number){setAll(prev=>({...prev,[q.id]:{selected:i,submitted:false}}));}
 function submit(){if(ans.selected!==null)setAll(prev=>({...prev,[q.id]:{selected:ans.selected,submitted:true}}));}
 return <section aria-label={'Diagnostik '+moduleCode} className="space-y-5 border-t border-paper-300 pt-9">
  <div><p className="font-mono text-xs font-semibold uppercase tracking-wide text-cherry-700">Periksa konsep</p>
   <h2 className="mt-3 font-serif text-2xl font-semibold text-roast-950">Pilih kesimpulan, periksa alasannya</h2>
   <p className="mt-3 text-sm leading-7 text-roast-800">Dua soal baru per modul dengan penjelasan untuk pilihan yang salah. Ini latihan, bukan ujian sertifikasi.</p>
  </div>
  <p className="text-xs font-medium text-roast-700" role="status">Pertanyaan {active+1} dari {items.length} · {done} dicoba · {correct} sesuai pembahasan</p>
  <div className="border-y border-paper-300 py-5">
   <h3 className="font-serif text-xl font-semibold text-roast-950">{q.title}</h3>
   <p className="mt-3 text-sm leading-7 text-roast-800">{q.scenario}</p>
   <fieldset className="mt-5 space-y-2"><legend className="pb-3 text-sm font-semibold text-roast-950">Pilihan mana paling masuk akal berdasarkan data?</legend>
    {q.options.map((o,i)=><label key={i} className={'flex cursor-pointer items-start gap-3 rounded-md border p-3 text-sm leading-6 '+(ans.selected===i?'border-roast-900 bg-paper-100':'border-paper-300 bg-white')}>
     <input type="radio" className="mt-1" name={'hbv2-'+q.id} checked={ans.selected===i} onChange={()=>pick(i)}/><span>{o.text}</span>
    </label>)}
   </fieldset>
   <button type="button" disabled={ans.selected===null||ans.submitted} className={btn+' mt-5'} onClick={submit}>Periksa alasan</button>
   {ans.submitted&&ans.selected!==null&&<div role="status" aria-live="polite" className="mt-5 space-y-3 border-l-2 border-roast-900 bg-paper-100 p-4">
    <h4 className="text-sm font-semibold">{ans.selected===q.correct?'Penalaranmu sesuai bukti':'Pertimbangkan kembali asumsi ini'}</h4>
    <p className="text-sm leading-7">{q.options[ans.selected].feedback}</p>
    {ans.selected!==q.correct&&<p className="text-sm leading-7">Alternatif lebih kuat: {q.options[q.correct].text} {q.rationale}</p>}
   </div>}
  </div>
  <nav aria-label="Pindah soal" className="flex justify-between gap-4 text-sm">
   <button type="button" disabled={active===0} className="rounded-md border border-paper-300 px-4 py-2 disabled:opacity-40" onClick={()=>setActive(Math.max(0,active-1))}>← Sebelumnya</button>
   <button type="button" disabled={active===items.length-1} className="rounded-md border border-paper-300 px-4 py-2 disabled:opacity-40" onClick={()=>setActive(Math.min(items.length-1,active+1))}>Berikutnya →</button>
  </nav>
 </section>;
}
export function HomeBrewerPractice({moduleCode}:{moduleCode:string}){
 return <div className="space-y-16">
   <ChangingCase moduleCode={moduleCode}/><Diagnostic moduleCode={moduleCode}/>
   <p className="border-t border-paper-300 pt-6 text-xs leading-6 text-roast-700">Jawaban latihan ini hanya tersimpan selama halaman aktif dan belum tercatat sebagai nilai atau progres akun.</p>
 </div>;
}
