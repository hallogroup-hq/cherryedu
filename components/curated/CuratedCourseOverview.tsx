'use client';

import {useState} from 'react';
import Link from 'next/link';
import type {ReactNode} from 'react';
import {ArrowRight,ChevronDown,ChevronUp,Clock3,Layers3,BookOpen} from 'lucide-react';
import {learnerTitle} from '@/lib/curated/learnerTitle';

type Module={code:string;title:string;description:string};
type Lesson={id:string;moduleId:string;order:number;title:string;minutes?:number};
type Props={
 name:string;description:string;image:string;modules:readonly Module[];lessons:readonly Lesson[];
 courseHref:string;
 children?:ReactNode;note?:string;examHref?:string
};

/** Matches the established Foundation syllabus: course hero, access card, expandable module cards. */
export function CuratedCourseOverview({name,description,image,modules,lessons,courseHref,children,note,examHref}:Props){
 const [expanded,setExpanded]=useState<Record<string,boolean>>({});
 const lessonMinutes=lessons.every(l=>typeof l.minutes==='number')?lessons.reduce((total,l)=>total+(l.minutes||0),0):null;
 const firstLesson=lessons[0];
 return <div className="min-h-screen bg-paper-50 pb-24 text-roast-950">
  <header className="border-b border-paper-300 bg-paper-100/60 py-10 sm:py-14">
   <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <Link href="/paths" className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-roast-600 hover:text-roast-950">
     ← Kembali ke Katalog Kurikulum
    </Link>
    <div className="mt-7 grid grid-cols-1 items-start gap-8 md:grid-cols-12">
     <div className="md:col-span-8">
      <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
       <span className="font-bold uppercase tracking-widest text-cherry-800">Jalur Spesialisasi Kopi</span>
       <span aria-hidden="true" className="text-roast-400">•</span>
       <span className="text-roast-700">CherryEdu</span>
      </div>
      <h1 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight tracking-tight sm:text-5xl">{learnerTitle(name)}</h1>
      <p className="mt-5 max-w-3xl text-sm leading-7 text-roast-700 sm:text-base">{description}</p>
      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-roast-700">
       {lessonMinutes!==null&&<span className="inline-flex items-center gap-2"><Clock3 size={16} className="text-cherry-800"/>{Math.max(1,Math.round(lessonMinutes/60))} Jam Belajar</span>}
       <span className="inline-flex items-center gap-2"><Layers3 size={16} className="text-cherry-800"/>{modules.length} Modul Silabus</span>
       <span className="inline-flex items-center gap-2"><BookOpen size={16} className="text-cherry-800"/>{lessons.length} Pelajaran</span>
      </div>
     </div>
     <div className="md:col-span-4">
      <div className="border border-paper-300 bg-paper-50 p-5 sm:p-6">
       <div className="aspect-[16/9] overflow-hidden bg-paper-200"><img src={image} alt="" className="h-full w-full object-cover"/></div>
       <h2 className="mt-4 text-sm font-bold">Belajar sesuai urutan materi</h2>
       <p className="mt-2 text-sm leading-6 text-roast-700">Baca pelajaran, gunakan latihan, dan periksa pemahamanmu sebelum lanjut ke modul berikutnya.</p>
       {firstLesson&&<Link href={courseHref+'/'+firstLesson.id} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-roast-950 px-4 py-3 text-sm font-bold text-white hover:bg-cherry-800">
        Baca Materi Pertama <ArrowRight size={16}/>
       </Link>}
      </div>
     </div>
    </div>
   </div>
  </header>
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
   <section aria-labelledby="course-modules" className="pt-12">
    <div className="mb-6 flex items-end justify-between gap-4 border-b border-paper-300 pb-5">
     <div>
      <p className="font-mono text-xs font-semibold uppercase tracking-widest text-roast-600">Daftar Silabus Lengkap</p>
      <h2 id="course-modules" className="mt-2 font-serif text-2xl font-black sm:text-3xl">Daftar Modul dan Pelajaran</h2>
     </div>
     <span className="shrink-0 font-mono text-xs text-roast-600">{modules.length} Modul</span>
    </div>
    <div className="space-y-4">
     {modules.map((m,i)=>{
      const items=lessons.filter(l=>l.moduleId===m.code);
      const isExpanded=expanded[m.code]??i===0;
      const id='course-'+m.code;
      return <section key={m.code} aria-labelledby={id} className="overflow-hidden border border-paper-300 bg-paper-50 shadow-xs">
       <button type="button" aria-expanded={isExpanded} aria-controls={id+'-lessons'} onClick={()=>setExpanded(x=>({...x,[m.code]:!isExpanded}))}
        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-paper-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700">
        <span className="flex min-w-0 items-start gap-4">
         <span className="shrink-0 border border-paper-300 bg-paper-100 px-2.5 py-1 font-mono text-xs font-bold text-roast-950">{String(i+1).padStart(2,'0')}</span>
         <span className="min-w-0">
          <span id={id} className="block font-serif text-lg font-bold leading-snug text-roast-950 sm:text-xl">{learnerTitle(m.title)}</span>
          <span className="mt-1 block text-sm leading-6 text-roast-700">{m.description}</span>
         </span>
        </span>
        <span className="mt-1 flex shrink-0 items-center gap-3 font-mono text-xs text-roast-700">
         <span className="hidden sm:inline">{items.length} Pelajaran</span>{isExpanded?<ChevronUp size={16}/>:<ChevronDown size={16}/>}
        </span>
       </button>
       {isExpanded&&<div id={id+'-lessons'} className="space-y-2 border-t border-paper-300 p-4 sm:p-5">
        <ol className="space-y-2">
         {items.map((lesson,j)=><li key={lesson.id}>
          <Link href={courseHref+'/'+lesson.id} className="group flex items-center justify-between gap-3 border border-paper-200 bg-paper-100/70 p-4 transition-colors hover:border-roast-700 hover:bg-paper-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700">
           <span className="flex min-w-0 items-start gap-3">
            <span aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 border border-paper-400 bg-paper-50"/>
            <span className="min-w-0">
             <span className="font-serif text-sm font-bold leading-6 text-roast-950 group-hover:underline">{learnerTitle(lesson.title)}</span>
             <span className="mt-1 block font-mono text-[10px] text-roast-600">{lesson.minutes?lesson.minutes+' Menit · ':''}Materi Belajar</span>
            </span>
           </span>
           <span className="shrink-0 border border-paper-300 bg-paper-50 px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-wide text-roast-900">
            Buka Materi <span aria-hidden="true">→</span>
           </span>
          </Link>
         </li>)}
        </ol>
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
         <p className="text-xs text-roast-700">Sudah memahami materi modul ini?</p>
         <Link href={courseHref+'/practice/'+m.code.toLowerCase()} className="inline-flex items-center gap-2 text-sm font-semibold text-cherry-800 underline underline-offset-4">
          Latihan Modul {String(i+1).padStart(2,'0')} <ArrowRight size={15}/>
         </Link>
        </div>
       </div>}
      </section>;
     })}
    </div>
   </section>

   {children&&<section aria-label="Alat dan latihan pendukung" className="mt-12 border-t border-paper-300 pt-8">{children}</section>}
   {note&&<p className="mt-8 max-w-3xl text-sm leading-7 text-roast-700">{note}</p>}
   {examHref&&<section aria-label="Ujian akhir" className="mt-10 flex flex-col items-start justify-between gap-5 border-2 border-roast-900 bg-roast-950 p-6 text-white sm:flex-row sm:items-center sm:p-8">
    <div>
     <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-crema-300">Evaluasi Akhir</p>
     <h2 className="mt-2 font-serif text-2xl font-bold">Ujian Akhir {learnerTitle(name)}</h2>
     <p className="mt-2 max-w-xl text-sm leading-6 text-paper-200">Uji pemahaman dan pengambilan keputusan setelah menyelesaikan modul.</p>
    </div>
    <Link href={examHref} className="inline-flex shrink-0 items-center gap-2 rounded-md bg-crema-500 px-5 py-3 text-sm font-bold text-roast-950 hover:bg-crema-400">
     Mulai Ujian Akhir <ArrowRight size={16}/>
    </Link>
   </section>}
  </div>
 </div>;
}
