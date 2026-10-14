'use client';
import {useState} from 'react';
import Link from 'next/link';
import {ChevronDown,ChevronRight,ArrowLeft,Clock,Menu,X} from 'lucide-react';
import {MarkdownRenderer} from '@/components/MarkdownRenderer';
import {AudioNarrationPlayer} from '@/components/AudioNarrationPlayer';
import {BusinessConceptFigure} from '@/components/business-roastery/BusinessConceptFigure';
import {BUSINESS_ROASTERY_MODULES as modules,BUSINESS_ROASTERY_LESSONS as lessons} from '@/lib/data/businessRoasteryCourse';
import {BUSINESS_ROASTERY_FIELD_GUIDES as guides} from '@/lib/data/businessRoasteryFieldGuides';
import {BUSINESS_ROASTERY_GLOSSARY as glossary} from '@/lib/data/businessRoasteryGlossary';
import {BUSINESS_ROASTERY_WORKED_METHODS as workedMethods} from '@/lib/data/businessRoasteryWorkedMethods';

export function BusinessRoasteryReader({lessonId}:{lessonId:string}){
 const idx=lessons.findIndex(l=>l.id===lessonId);
 const lesson=lessons[idx],mod=modules.find(m=>m.code===lesson.moduleId);
 const [expanded,setExpanded]=useState<string[]>([lesson.moduleId]);
 const [sidebarOpen,setSidebarOpen]=useState(false);
 const toggle=(code:string)=>setExpanded(v=>v.includes(code)?v.filter(x=>x!==code):[...v,code]);
 const prev=lessons[idx-1],next=lessons[idx+1];
 const independentPracticeMarker='### Coba terapkan setelah membaca';
 const independentPracticeAt=lesson.content.indexOf(independentPracticeMarker);
 const explanatoryContent=independentPracticeAt<0?lesson.content:lesson.content.slice(0,independentPracticeAt).trim();
 const learningSectionHeader='## Pelajari konsep dan cara kerjanya';
 const splitAt=lesson.order===1?explanatoryContent.indexOf(learningSectionHeader):-1;
 const moduleOpening=splitAt>0?explanatoryContent.slice(0,splitAt).trim():'';
 const detailedTeaching=splitAt>0?explanatoryContent.slice(splitAt):explanatoryContent;
 const independentPracticeContent=independentPracticeAt<0?'':lesson.content.slice(independentPracticeAt);

 const method=lesson.order===1?workedMethods[lesson.moduleId]:undefined;
 const narratedTerms=lesson.order===1
   ? (glossary[lesson.moduleId]||[]).map(x=>x.term+': '+x.meaning).join('\n\n')
   : '';
 const narratedMethod=method
   ? method.title+'\n\n'+method.steps.map((step,n)=>(n+1)+'. '+step.heading+'. '+step.explanation).join('\n\n')+'\n\n'+method.caution
   : '';
 const narrationSource=[moduleOpening,narratedTerms,detailedTeaching,narratedMethod,independentPracticeContent].filter(Boolean).join('\n\n');

 return <div className="min-h-screen bg-paper-50 pb-24 text-roast-950">
  <div className="sticky top-16 z-30 border-b border-paper-300 bg-paper-50/95 backdrop-blur-sm">
   <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
    <Link href="/business-roastery-v1" className="flex min-w-0 items-center gap-3"><ArrowLeft size={17} className="shrink-0 text-roast-600"/><span className="min-w-0"><span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-roast-600">Business Roastery</span><span className="block truncate font-serif text-sm font-semibold">{lesson.title}</span></span></Link>
    <button type="button" onClick={()=>setSidebarOpen(v=>!v)} aria-expanded={sidebarOpen} aria-controls="br-reader-sidebar" className="inline-flex items-center gap-2 border border-paper-300 px-3 py-2 text-xs font-bold lg:hidden">{sidebarOpen?<X size={15}/>:<Menu size={15}/>} Daftar materi</button>
   </div>
  </div>
  <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
   <div className="mt-7 grid w-full grid-cols-1 items-start gap-10 lg:grid-cols-12">
    <aside id="br-reader-sidebar" className={`${sidebarOpen?'block':'hidden'} lg:col-span-4 lg:block`} aria-label="Daftar pelajaran silabus">
     <div className="sticky top-32 max-h-[calc(100vh-170px)] overflow-y-auto rounded-xl border border-paper-300 bg-white p-5 shadow-subtle">
     <p className="mb-4 border-b border-paper-200 pb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-roast-600">Daftar Materi Silabus</p>
     {modules.map((m,i)=>{const open=expanded.includes(m.code);return <section key={m.code} className="mb-3">
      <button type="button" onClick={()=>toggle(m.code)} aria-expanded={open} className="flex w-full items-start justify-between gap-2 bg-paper-100 px-2 py-2 text-left font-mono text-[10px] font-bold leading-5"><span>{String(i+1).padStart(2,'0')}. {m.title}</span>{open?<ChevronDown size={13}/>:<ChevronRight size={13}/>}</button>
      {open&&<ol className="mt-1 space-y-1">{lessons.filter(l=>l.moduleId===m.code).map(l=><li key={l.id}><Link aria-current={l.id===lessonId?'page':undefined} href={'/business-roastery-v1/'+l.id} className={`block rounded-sm px-3 py-2 text-xs leading-5 ${l.id===lessonId?'bg-roast-950 font-semibold text-white':'text-roast-700 hover:bg-paper-100'}`}>{l.title}</Link></li>)}</ol>}
     </section>})}
     </div>
    </aside>
    <div className="min-w-0 rounded-xl border border-paper-300 bg-white p-5 shadow-card sm:p-8 lg:col-span-8 lg:p-14">
     <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-paper-200 pb-4 font-mono text-[10px] uppercase tracking-wider text-roast-600"><span className="flex items-center gap-1"><Clock size={13}/>{Math.max(12,Math.round(lesson.content.split(/\s+/).length/75))} menit baca</span><span>•</span><span>Materi belajar</span><span>•</span><span>{mod?.title}</span></div>
     <AudioNarrationPlayer title={lesson.title} rawMarkdown={narrationSource}/>
     <article className="mt-6"><h1 className="mb-6 border-b border-paper-300 pb-5 font-serif text-3xl font-black leading-tight tracking-tight sm:text-4xl">{lesson.title}</h1>{moduleOpening&&<MarkdownRenderer content={moduleOpening}/>}
      {lesson.order===1&&<section className="my-7 border-y border-paper-300 py-5" aria-label="Istilah dasar modul"><h2 className="mb-3 font-serif text-xl font-bold">Istilah yang perlu kamu kenali</h2><dl className="space-y-3">{glossary[lesson.moduleId]?.map(x=><div key={x.term} className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-4"><dt className="text-sm font-bold text-roast-950">{x.term}</dt><dd className="text-sm leading-6 text-roast-700">{x.meaning}</dd></div>)}</dl></section>}
      {lesson.order===1&&<BusinessConceptFigure moduleId={lesson.moduleId}/>}
      <MarkdownRenderer content={detailedTeaching}/>
      {lesson.order===1&&workedMethods[lesson.moduleId]&&<section className="mt-9 border-t border-paper-300 pt-7" aria-label="Panduan kerja langkah demi langkah">
        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-cherry-800">Praktik Terpandu</p>
        <h2 className="mt-2 font-serif text-2xl font-bold">{workedMethods[lesson.moduleId].title}</h2>
        <p className="mt-2 text-sm leading-7 text-roast-700">Ikuti urutan pengerjaannya untuk memahami proses. Latihan keputusan mandiri tersedia setelah pelajaran keempat modul ini.</p>
        <ol className="mt-5 space-y-3">
         {workedMethods[lesson.moduleId].steps.map((step,n)=><li key={n} className="flex gap-4 border border-paper-300 bg-paper-100/60 px-4 py-4">
          <span aria-hidden="true" className="shrink-0 font-mono text-xs font-bold text-cherry-800">{String(n+1).padStart(2,'0')}</span>
          <div><h3 className="font-sans text-sm font-bold text-roast-950">{step.heading}</h3><p className="mt-1 text-sm leading-7 text-roast-700">{step.explanation}</p></div>
         </li>)}
        </ol>
        <p className="mt-4 text-xs leading-6 text-roast-600">{workedMethods[lesson.moduleId].caution}</p>
      </section>}
      {independentPracticeContent&&<section className="mt-9 border-t border-paper-300 pt-7" aria-label="Tugas dan pemeriksaan pemahaman">
        <MarkdownRenderer content={independentPracticeContent}/>
      </section>}</article>
     {lesson.optionalModels&&<details className="mt-9 border-y border-paper-300 bg-paper-100/40 px-4 py-4">
       <summary className="cursor-pointer text-sm font-semibold text-cherry-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-800">Lihat penerapan pada tiga skala bisnis</summary>
       <p className="mt-3 text-xs leading-6 text-roast-700">Perbandingan berikut bersifat penerapan tambahan. Pahami konsep dan contoh hitungan pada materi utama terlebih dahulu.</p>
       <MarkdownRenderer content={lesson.optionalModels}/>
     </details>}
     {lesson.order===4&&guides[lesson.moduleId]&&<section className="mt-10 border-t border-paper-300 pt-8"><h2 className="font-serif text-xl font-bold">Contoh kerja di lapangan</h2><p className="mb-4 mt-2 text-sm text-roast-700">Sebelum membaca contoh penerapan ini, coba pikirkan sendiri bagaimana konsep modul dipakai untuk satu keputusan operasional.</p><details className="border border-paper-300 bg-paper-100 px-4 py-4"><summary className="cursor-pointer text-sm font-semibold text-cherry-800">Lihat contoh penerapan</summary><div className="mt-4"><h3 className="font-serif text-lg font-bold">{guides[lesson.moduleId].title}</h3><MarkdownRenderer content={guides[lesson.moduleId].content}/></div></details></section>}
     {lesson.order===4&&<section className="mt-10 border-t border-paper-300 pt-8"><h2 className="font-serif text-xl font-bold">Latihan setelah memahami modul</h2><p className="mt-2 text-sm leading-6 text-roast-700">Terapkan materi modul dalam kasus yang kondisinya berubah. Alasan keputusan lebih penting daripada menebak jawaban.</p><Link className="mt-4 inline-flex border border-roast-950 bg-roast-950 px-4 py-3 text-xs font-bold text-white hover:bg-cherry-800" href={'/business-roastery-v1/practice/'+lesson.moduleId.toLowerCase()}>Mulai latihan modul →</Link></section>}
     <nav aria-label="Pindah pelajaran" className="mt-12 grid gap-3 border-t border-paper-300 pt-5 sm:grid-cols-2">
      {prev?<Link className="border border-paper-300 px-3 py-3 text-xs font-semibold hover:bg-paper-100" href={'/business-roastery-v1/'+prev.id}>← {prev.title}</Link>:<Link className="border border-paper-300 px-3 py-3 text-xs font-semibold" href="/business-roastery-v1">Daftar modul</Link>}
      {next?<Link className="border border-paper-300 px-3 py-3 text-right text-xs font-semibold hover:bg-paper-100" href={'/business-roastery-v1/'+next.id}>{next.title} →</Link>:<Link className="border border-paper-300 px-3 py-3 text-right text-xs font-semibold" href="/business-roastery-v1">Kembali ke silabus</Link>}
     </nav>
    </div>
   </div>
  </div>
 </div>;
}
