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

export function BusinessRoasteryReader({lessonId}:{lessonId:string}){
 const idx=lessons.findIndex(l=>l.id===lessonId);
 const lesson=lessons[idx],mod=modules.find(m=>m.code===lesson.moduleId);
 const [expanded,setExpanded]=useState<string[]>([lesson.moduleId]);
 const [sidebarOpen,setSidebarOpen]=useState(false);
 const toggle=(code:string)=>setExpanded(v=>v.includes(code)?v.filter(x=>x!==code):[...v,code]);
 const prev=lessons[idx-1],next=lessons[idx+1];
 return <div className="min-h-screen bg-paper-50 pb-24 text-roast-950">
  <div className="sticky top-16 z-20 border-b border-paper-300 bg-paper-50/95 backdrop-blur-sm">
   <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
    <Link href="/business-roastery-v1" className="flex min-w-0 items-center gap-3"><ArrowLeft size={17} className="shrink-0 text-roast-600"/><span className="min-w-0"><span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-roast-600">Business Roastery</span><span className="block truncate font-serif text-sm font-semibold">{lesson.title}</span></span></Link>
    <button type="button" onClick={()=>setSidebarOpen(v=>!v)} aria-expanded={sidebarOpen} aria-controls="br-reader-sidebar" className="inline-flex items-center gap-2 border border-paper-300 px-3 py-2 text-xs font-bold lg:hidden">{sidebarOpen?<X size={15}/>:<Menu size={15}/>} Daftar materi</button>
   </div>
  </div>
  <div className="mx-auto max-w-5xl px-4 pt-4 sm:px-6">
   <p className="border border-paper-300 bg-paper-100 px-4 py-3 text-xs text-roast-700">Belajar mandiri. Catatan latihan dan progres pada kelas ini belum tersimpan ke akun.</p>
   <div className="mt-7 grid items-start gap-8 lg:grid-cols-[270px_minmax(0,1fr)]">
    <aside id="br-reader-sidebar" className={`${sidebarOpen?'block':'hidden'} max-h-[calc(100vh-11rem)] overflow-y-auto border border-paper-300 bg-white p-4 lg:sticky lg:top-36 lg:block`} aria-label="Daftar pelajaran silabus">
     <p className="mb-4 border-b border-paper-200 pb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-roast-600">Daftar Materi Silabus</p>
     {modules.map((m,i)=>{const open=expanded.includes(m.code);return <section key={m.code} className="mb-3">
      <button type="button" onClick={()=>toggle(m.code)} aria-expanded={open} className="flex w-full items-start justify-between gap-2 bg-paper-100 px-2 py-2 text-left font-mono text-[10px] font-bold leading-5"><span>{String(i+1).padStart(2,'0')}. {m.title}</span>{open?<ChevronDown size={13}/>:<ChevronRight size={13}/>}</button>
      {open&&<ol className="mt-1 space-y-1">{lessons.filter(l=>l.moduleId===m.code).map(l=><li key={l.id}><Link aria-current={l.id===lessonId?'page':undefined} href={'/business-roastery-v1/'+l.id} className={`block rounded-sm px-3 py-2 text-xs leading-5 ${l.id===lessonId?'bg-roast-950 font-semibold text-white':'text-roast-700 hover:bg-paper-100'}`}>{l.title}</Link></li>)}</ol>}
     </section>})}
    </aside>
    <div className="min-w-0 border border-paper-300 bg-white px-5 pb-10 pt-7 shadow-xs sm:px-9 sm:pt-9">
     <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-paper-200 pb-4 font-mono text-[10px] uppercase tracking-wider text-roast-600"><span className="flex items-center gap-1"><Clock size={13}/>{Math.max(12,Math.round(lesson.content.split(/\s+/).length/75))} menit baca</span><span>•</span><span>Materi belajar</span><span>•</span><span>{mod?.title}</span></div>
     <AudioNarrationPlayer title={lesson.title} rawMarkdown={lesson.content}/>
     <article className="mt-6"><h1 className="mb-6 border-b border-paper-300 pb-5 font-serif text-3xl font-black leading-tight tracking-tight sm:text-4xl">{lesson.title}</h1>{lesson.order===1&&<BusinessConceptFigure moduleId={lesson.moduleId}/>}
      {lesson.order===1&&<section className="my-7 border-y border-paper-300 py-5" aria-label="Istilah dasar modul"><h2 className="mb-3 font-serif text-xl font-bold">Istilah yang perlu kamu kenali</h2><dl className="space-y-3">{glossary[lesson.moduleId]?.map(x=><div key={x.term} className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-4"><dt className="text-sm font-bold text-roast-950">{x.term}</dt><dd className="text-sm leading-6 text-roast-700">{x.meaning}</dd></div>)}</dl></section>}
      <MarkdownRenderer content={lesson.content}/></article>
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
