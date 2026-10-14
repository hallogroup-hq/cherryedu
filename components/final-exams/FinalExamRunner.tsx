'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {ArrowLeft,ArrowRight,CheckCircle2,RotateCcw,AlertCircle,BookOpen} from 'lucide-react';

type Item={id:string;module_ids:string[];prompt:string;choices:string[]};
type Paper={title:string;path:string;version:string;questions:Item[];required_correct:number};
type Feedback={id:string;selected_index:number;correct_index:number;explanation:string;correct:boolean};
type Grade={title:string;version:string;correct:number;total:number;percent:number;passed:boolean;required_correct:number;feedback:Feedback[]};
type Status='loading'|'ready'|'error';
export function FinalExamRunner({path,courseHref}:{path:string;courseHref:string}){
 const [paper,setPaper]=useState<Paper|null>(null);
 const [status,setStatus]=useState<Status>('loading');
 const [answers,setAnswers]=useState<Record<string,number>>({});
 const [index,setIndex]=useState(0);
 const [result,setResult]=useState<Grade|null>(null);
 const [submitting,setSubmitting]=useState(false);
 const [error,setError]=useState('');
 useEffect(()=>{
  const controller=new AbortController();
  setStatus('loading');setPaper(null);setAnswers({});setResult(null);setError('');setIndex(0);
  fetch('/api/final-exams/'+encodeURIComponent(path),{cache:'no-store',signal:controller.signal})
   .then(async res=>{if(!res.ok)throw Error('Ujian tidak dapat dibuka.');return await res.json() as Paper})
   .then(data=>{if(data.path!==path||!Array.isArray(data.questions)||!data.questions.length)throw Error('Data ujian tidak lengkap.');setPaper(data);setStatus('ready')})
   .catch(e=>{if(!controller.signal.aborted){setError(String(e.message||'Gagal memuat ujian.'));setStatus('error')}});
  return()=>controller.abort();
 },[path]);
 if(status==='loading')return <p role="status" className="rounded-xl border border-paper-300 bg-white p-6 text-sm text-roast-700">Memuat pertanyaan...</p>;
 if(status==='error'||!paper)return <section role="alert" className="rounded-xl border border-paper-300 bg-white p-6"><p className="text-sm text-roast-800">{error||'Ujian tidak dapat dibuka.'}</p><Link href="/ujian-akhir" className="mt-4 inline-block text-sm font-semibold text-cherry-800 underline">Kembali ke daftar ujian</Link></section>;
 const total=paper.questions.length,answered=paper.questions.filter(q=>Number.isInteger(answers[q.id])).length;
 const current=paper.questions[index];
 const selected=answers[current.id];
 const feedback=result?.feedback.find(f=>f.id===current.id);
 const complete=answered===total;
 async function submit(){
  if(!complete||submitting||result)return;
  setError('');setSubmitting(true);
  try{
   const response=await fetch('/api/final-exams/'+encodeURIComponent(path),{method:'POST',headers:{'Content-Type':'application/json'},cache:'no-store',body:JSON.stringify({version:paper!.version,answers})});
   const data=await response.json();
   if(!response.ok)throw Error(data.message||'Jawaban belum dapat diperiksa.');
   if(!Array.isArray(data.feedback)||data.feedback.length!==total)throw Error('Hasil ujian tidak lengkap.');
   setResult(data as Grade);setIndex(0);
   window.scrollTo({top:0,behavior:'smooth'});
  }catch(e){setError(e instanceof Error?e.message:'Gagal memeriksa jawaban.')}
  finally{setSubmitting(false)}
 }
 function reset(){setAnswers({});setIndex(0);setResult(null);setError('')}
 return <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
  <div className="min-w-0 lg:order-2 lg:col-span-8">
   {result&&<section aria-live="polite" className="mb-6 rounded-xl border border-paper-300 bg-white p-6 sm:p-8">
    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-cherry-800">Hasil evaluasi teori</p>
    <h2 className="mt-2 font-serif text-3xl font-bold">{result.correct} dari {result.total} benar</h2>
    <p className="mt-3 text-sm leading-7 text-roast-700">Skor {result.percent}%. {result.passed?'Kamu telah mencapai nilai acuan pemahaman teori.':'Pelajari pembahasan di bawah dan coba kembali ketika sudah siap.'}</p>
    <p className="mt-2 text-xs text-roast-600">Nilai acuan: minimal {result.required_correct} jawaban benar. Penilaian ini mengukur pemahaman teori, bukan keterampilan praktik langsung.</p>
    <button onClick={reset} type="button" className="mt-5 inline-flex items-center gap-2 rounded-md border border-roast-900 px-4 py-2.5 text-sm font-semibold text-roast-950 hover:bg-paper-100"><RotateCcw size={16}/>Ulangi ujian</button>
   </section>}
   <section className="rounded-xl border border-paper-300 bg-white p-5 shadow-card sm:p-8 lg:p-12" aria-labelledby="question-heading">
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper-200 pb-4">
     <p className="font-mono text-xs font-semibold uppercase tracking-wider text-cherry-800">Pertanyaan {index+1} dari {total}</p>
     <p className="text-xs text-roast-600">{current.module_ids.join(' + ')} · {result?'Pembahasan':'Pilih satu jawaban'}</p>
    </div>
    <h2 id="question-heading" className="mt-7 font-serif text-xl font-semibold leading-relaxed sm:text-2xl">{current.prompt}</h2>
    <fieldset className="mt-7 space-y-3" disabled={Boolean(result)}>
     <legend className="sr-only">Pilihan jawaban pertanyaan {index+1}</legend>
     {current.choices.map((choice,i)=>{
      const isSelected=selected===i,correct=result&&feedback?.correct_index===i,wrong=result&&isSelected&&!feedback?.correct;
      return <label key={i} className={`flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-4 text-sm leading-6 transition-colors ${correct?'border-emerald-700 bg-emerald-50':wrong?'border-red-600 bg-red-50':isSelected?'border-roast-900 bg-paper-100':'border-paper-300 bg-white hover:border-roast-700'} ${result?'cursor-default':''}`}>
       <input type="radio" name={'answer-'+current.id} value={i} checked={isSelected} onChange={()=>setAnswers(prev=>({...prev,[current.id]:i}))} className="mt-1 h-4 w-4 shrink-0 accent-roast-950" aria-label={'Pilihan '+String.fromCharCode(65+i)}/>
       <span className="flex-1"><span className="mr-2 font-mono font-semibold text-roast-700">{String.fromCharCode(65+i)}.</span>{choice}</span>
       {correct&&<CheckCircle2 size={18} className="shrink-0 text-emerald-800" aria-label="Jawaban benar"/>}
      </label>;
     })}
    </fieldset>
    {feedback&&<section aria-live="polite" className="mt-7 rounded-lg border border-paper-300 bg-paper-100 p-5">
     <p className="font-semibold text-roast-950">{feedback.correct?'Jawabanmu tepat':'Pembahasan jawaban'}</p>
     <p className="mt-2 text-sm leading-7 text-roast-800">{feedback.explanation}</p>
    </section>}
    <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-paper-200 pt-5">
     <button type="button" onClick={()=>setIndex(x=>Math.max(0,x-1))} disabled={index===0} className="inline-flex items-center gap-2 rounded-md border border-paper-300 px-4 py-2.5 text-sm font-semibold text-roast-800 enabled:hover:bg-paper-100 disabled:cursor-not-allowed disabled:opacity-40"><ArrowLeft size={16}/>Sebelumnya</button>
     <button type="button" onClick={()=>setIndex(x=>Math.min(total-1,x+1))} disabled={index===total-1} className="inline-flex items-center gap-2 rounded-md bg-roast-950 px-4 py-2.5 text-sm font-semibold text-white enabled:hover:bg-cherry-800 disabled:cursor-not-allowed disabled:opacity-40">Berikutnya<ArrowRight size={16}/></button>
    </div>
   </section>
   {!result&&<section className="mt-6 rounded-xl border border-paper-300 bg-paper-100 p-5 sm:p-6">
    <div className="flex flex-wrap items-center justify-between gap-3">
     <div><h2 className="font-serif text-xl font-semibold">Siap mengumpulkan?</h2><p className="mt-1 text-sm text-roast-700">{answered} dari {total} pertanyaan sudah dijawab.</p></div>
     <button type="button" onClick={submit} disabled={!complete||submitting} className="rounded-md bg-roast-950 px-5 py-3 text-sm font-semibold text-white enabled:hover:bg-cherry-800 disabled:cursor-not-allowed disabled:opacity-40">{submitting?'Memeriksa jawaban...':'Kumpulkan jawaban'}</button>
    </div>
    {!complete&&<p className="mt-3 text-xs text-roast-600">Lengkapi seluruh pertanyaan sebelum dikumpulkan.</p>}
    {error&&<p role="alert" className="mt-3 flex items-center gap-2 text-sm text-red-800"><AlertCircle size={16}/>{error}</p>}
   </section>}
   <Link href={courseHref} className="mt-6 inline-flex items-center gap-2 text-sm text-cherry-800 underline underline-offset-4"><BookOpen size={16}/>Kembali ke materi</Link>
  </div>
  <aside className="rounded-xl border border-paper-300 bg-white p-5 shadow-subtle lg:order-1 lg:col-span-4 lg:sticky lg:top-32" aria-label="Navigasi pertanyaan">
   <h2 className="mb-4 border-b border-paper-200 pb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-roast-600">Daftar Soal Ujian</h2>
   <div className="flex justify-between text-sm font-semibold"><span>Progres jawaban</span><span>{answered}/{total}</span></div>
   <div role="progressbar" aria-label="Progres jawaban" aria-valuemin={0} aria-valuemax={total} aria-valuenow={answered} className="mt-3 h-1.5 overflow-hidden rounded-full bg-paper-200"><div className="h-full bg-roast-950 transition-all" style={{width:(answered/total)*100+'%'}}/></div>
   <p className="mt-5 text-xs leading-5 text-roast-600">Pilih nomor untuk membuka pertanyaan.</p>
   <div className="mt-3 grid grid-cols-4 gap-2">
    {paper.questions.map((q,i)=>{const done=Number.isInteger(answers[q.id]);const isCurrent=index===i;return <button key={q.id} type="button" onClick={()=>setIndex(i)} aria-current={isCurrent?'step':undefined} aria-label={`Pertanyaan ${i+1}${done?', terjawab':''}`} className={`h-10 rounded-md border text-xs font-semibold transition-colors ${isCurrent?'border-roast-950 bg-roast-950 text-white':done?'border-roast-900 bg-paper-100 text-roast-950':'border-paper-300 text-roast-600 hover:bg-paper-100'}`}>{i+1}</button>})}
   </div>
   <p className="mt-5 border-t border-paper-200 pt-4 text-xs leading-6 text-roast-600">Pastikan pilihanmu sesuai alasan yang dapat kamu jelaskan. Hasil dan pembahasan akan muncul setelah semua jawaban dikumpulkan.</p>
  </aside>
 </div>;
}
