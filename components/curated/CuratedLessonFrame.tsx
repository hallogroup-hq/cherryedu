'use client';

import {useState,type ReactNode} from 'react';
import Link from 'next/link';
import {ArrowLeft,BookOpen,ChevronLeft,ChevronRight,Clock3,List} from 'lucide-react';
import {learnerTitle} from '@/lib/curated/learnerTitle';
import {AudioNarrationPlayer} from '@/components/AudioNarrationPlayer';

type CourseModule={code:string;title:string};
type CourseLesson={id:string;moduleId:string;order:number;title:string;minutes?:number};
type Props={
 courseTitle:string;courseHref:string;modules:readonly CourseModule[];
 lessons:readonly CourseLesson[];currentId:string;children:ReactNode;rawMarkdown?:string;examHref?:string;
};

/** Same reading shell as Foundation: sticky lesson header, left syllabus, right interactive learning card. */
export function CuratedLessonFrame({courseTitle,courseHref,modules,lessons,currentId,children,rawMarkdown,examHref}:Props){
 const [tocOpen,setTocOpen]=useState(false);
 const currentIndex=lessons.findIndex(x=>x.id===currentId);
 const lesson=lessons[currentIndex];
 if(!lesson)return null;
 const module=modules.find(x=>x.code===lesson.moduleId);
 const previous=currentIndex>0?lessons[currentIndex-1]:undefined;
 const next=currentIndex>=0&&currentIndex<lessons.length-1?lessons[currentIndex+1]:undefined;
 return <div className="min-h-screen bg-paper-50 pb-24 text-roast-950">
  <div className="sticky top-16 z-30 border-b border-paper-300 bg-paper-50/95 px-4 py-2.5 backdrop-blur-md sm:px-6">
   <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
    <div className="flex min-w-0 items-center gap-3">
     <Link href={courseHref} title="Kembali ke silabus" aria-label="Kembali ke silabus" className="shrink-0 rounded p-1.5 text-roast-500 hover:bg-paper-100 hover:text-roast-950"><ArrowLeft size={18}/></Link>
     <div className="min-w-0">
      <span className="block truncate font-mono text-[10px] font-bold uppercase tracking-widest text-roast-500">{learnerTitle(courseTitle)}</span>
      <h1 className="truncate font-serif text-sm font-bold text-roast-950">{learnerTitle(lesson.title)}</h1>
     </div>
    </div>
    <button onClick={()=>setTocOpen(x=>!x)} type="button" aria-label="Buka daftar materi" aria-expanded={tocOpen} aria-controls="curated-lesson-syllabus" className="inline-flex items-center gap-2 rounded border border-paper-300 bg-white px-3 py-2 text-xs font-semibold text-roast-900 hover:bg-paper-100 lg:hidden">
     <List size={16}/> Daftar materi
    </button>
   </div>
  </div>
  <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-9 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
   <aside id="curated-lesson-syllabus" aria-label="Daftar materi silabus" className={`lg:col-span-4 ${tocOpen?'block':'hidden'} lg:block`}>
    <div className="rounded-xl border border-paper-300 bg-white p-4 shadow-subtle lg:sticky lg:top-32 lg:max-h-[calc(100vh-170px)] lg:overflow-y-auto sm:p-5">
     <h2 className="mb-4 border-b border-paper-200 pb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-roast-600">Daftar Materi Silabus</h2>
     <nav aria-label="Pilih materi" className="space-y-4">
      {modules.map((m,i)=>{
       const items=lessons.filter(x=>x.moduleId===m.code);
       return <section key={m.code}>
        <h3 className="mb-1 rounded bg-paper-100 px-2 py-1 font-mono text-[11px] font-bold text-roast-900">{String(i+1).padStart(2,'0')}. {learnerTitle(m.title)}</h3>
        <ol className="space-y-0.5 pl-1">
         {items.map(l=>{
          const selected=l.id===currentId;
          return <li key={l.id}><Link href={courseHref+'/'+l.id} aria-current={selected?'page':undefined} onClick={()=>setTocOpen(false)}
           className={`flex min-w-0 items-center gap-2 rounded px-2 py-2 text-xs transition-colors ${selected?'bg-roast-950 font-bold text-white':'text-roast-700 hover:bg-paper-100 hover:text-roast-950'}`}>
           <span aria-hidden="true" className={`h-3 w-3 shrink-0 rounded-full border ${selected?'border-paper-100':'border-paper-400'}`}/>
           <span className="truncate">{learnerTitle(l.title)}</span>
          </Link></li>;
         })}
        </ol>
       </section>;
      })}
     </nav>
     {examHref&&<Link href={examHref} className="mt-5 flex items-center justify-between gap-3 rounded border border-roast-900 bg-roast-950 px-4 py-3 text-xs font-bold text-white hover:bg-cherry-800"><span>Ujian Akhir</span><ChevronRight size={16}/></Link>}
    </div>
   </aside>
   <article className="min-w-0 rounded-xl border border-paper-300 bg-white p-5 shadow-card sm:p-8 lg:col-span-8 lg:p-12">
    <div className="flex flex-wrap items-center gap-2 border-b border-paper-200 pb-4 font-mono text-[11px] text-roast-600">
     {lesson.minutes&&<><span className="inline-flex items-center gap-1 rounded border border-paper-300 bg-paper-100 px-2 py-0.5"><Clock3 size={14} className="text-cherry-800"/>{lesson.minutes} Menit Baca</span><span aria-hidden="true">•</span></>}
     <span className="rounded border border-paper-300 bg-paper-100 px-2 py-0.5 uppercase">Materi Belajar</span>
     <span aria-hidden="true">•</span>
     <span className="truncate">{learnerTitle(courseTitle)}</span>
    </div>
    {rawMarkdown&&<div className="mt-5"><AudioNarrationPlayer title={learnerTitle(lesson.title)} rawMarkdown={rawMarkdown} description="Dengarkan narasi materi sambil mengikuti contoh, diagram, dan latihan yang tersedia."/></div>}
    <div className="mt-7">
     <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cherry-800">{module?learnerTitle(module.title):courseTitle} · Pelajaran {lesson.order} dari {lessons.filter(x=>x.moduleId===lesson.moduleId).length}</p>
     <h2 className="mt-3 border-b border-paper-300 pb-5 font-serif text-3xl font-bold leading-tight text-roast-950 sm:text-4xl">{learnerTitle(lesson.title)}</h2>
    </div>
    <div className="mt-8 min-w-0">{children}</div>
    <nav aria-label="Pindah pelajaran" className="mt-12 flex flex-wrap items-start justify-between gap-4 border-t border-paper-300 pt-6 text-sm">
     <div className="max-w-[48%]">{previous?<Link href={courseHref+'/'+previous.id} className="inline-flex items-start gap-1 font-semibold text-roast-800 hover:underline"><ChevronLeft size={16} className="mt-0.5 shrink-0"/>{learnerTitle(previous.title)}</Link>:<Link href={courseHref} className="inline-flex items-center gap-1 font-semibold text-roast-800 hover:underline"><BookOpen size={16}/>Daftar modul</Link>}</div>
     <div className="max-w-[48%] text-right">{next?<Link href={courseHref+'/'+next.id} className="inline-flex items-start gap-1 font-semibold text-roast-900 hover:underline">{learnerTitle(next.title)}<ChevronRight size={16} className="mt-0.5 shrink-0"/></Link>:examHref?<Link href={examHref} data-testid="continue-to-final-exam" className="inline-flex items-center justify-center gap-2 rounded-md bg-roast-950 px-4 py-3 font-semibold text-white hover:bg-cherry-800">Lanjut ke Ujian Akhir<ChevronRight size={16}/></Link>:<Link href={courseHref} className="inline-flex items-center gap-1 font-semibold text-roast-900 hover:underline">Kembali ke silabus<ChevronRight size={16}/></Link>}</div>
    </nav>
   </article>
  </div>
 </div>;
}
