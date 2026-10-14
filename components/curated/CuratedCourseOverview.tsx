import {learnerTitle} from '@/lib/curated/learnerTitle';
import Link from 'next/link';
import type {ReactNode} from 'react';
type Module={code:string;title:string;description:string};
type Lesson={id:string;moduleId:string;order:number;title:string;minutes?:number};
type Props={name:string;description:string;image:string;modules:readonly Module[];lessons:readonly Lesson[];lessonHref:(id:string)=>string;practiceHref:(code:string)=>string;children?:ReactNode;note?:string;examHref?:string};
export function CuratedCourseOverview({name,description,image,modules,lessons,lessonHref,practiceHref,children,note,examHref}:Props){
 return <div className="min-h-screen bg-paper-50 pb-24 text-roast-950">
 <header className="border-b border-paper-300 bg-paper-100/60 py-10 sm:py-14">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
   <Link href="/paths" className="text-xs font-semibold text-cherry-800 underline underline-offset-4">Kembali ke jalur pembelajaran</Link>
   <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-center">
    <div className="md:col-span-8">
     <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-cherry-800">Spesialisasi Kopi CherryEdu</p>
     <h1 className="mt-3 max-w-3xl font-serif text-3xl font-black leading-tight tracking-tight sm:text-5xl">{learnerTitle(name)}</h1>
     <p className="mt-5 max-w-2xl text-sm leading-7 text-roast-700 sm:text-base">{description}</p>
     <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-paper-300 pt-5 font-mono text-xs text-roast-700">
      <span>{modules.length} modul</span><span>{lessons.length} pelajaran</span><span>Latihan dan studi kasus</span>
     </div>
    </div>
    <div className="hidden md:block md:col-span-4"><div className="overflow-hidden border border-paper-300 bg-white p-2 shadow-xs"><img src={image} alt="" className="h-52 w-full object-cover"/></div></div>
   </div>
  </div>
 </header>
 <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
  {children&&<section aria-label="Perangkat pembelajaran" className="border-b border-paper-300 py-8">{children}</section>}
  <section aria-labelledby="course-modules" className="mt-10">
   <div className="flex items-end justify-between border-b border-paper-300 pb-5"><h2 id="course-modules" className="font-serif text-2xl font-bold sm:text-3xl">Modul pembelajaran</h2><span className="font-mono text-xs text-roast-600">{modules.length} modul</span></div>
   {modules.map((m,i)=>{const items=lessons.filter(l=>l.moduleId===m.code);return <section key={m.code} aria-labelledby={'course-'+m.code} className="grid gap-5 border-b border-paper-300 py-8 md:grid-cols-[minmax(0,290px)_minmax(0,1fr)] md:gap-12">
    <div><span className="font-mono text-xs text-cherry-800">Modul {String(i+1).padStart(2,'0')}</span><h3 id={'course-'+m.code} className="mt-2 font-serif text-xl font-bold leading-snug sm:text-2xl">{learnerTitle(m.title)}</h3><p className="mt-3 text-sm leading-6 text-roast-700">{m.description}</p><Link className="mt-5 inline-block text-sm font-semibold text-cherry-800 underline underline-offset-4" href={practiceHref(m.code)}>Latihan modul</Link></div>
    <ol className="overflow-hidden border border-paper-300 bg-white">{items.map((l,j)=><li key={l.id} className={j?'border-t border-paper-200':''}><Link href={lessonHref(l.id)} className="group flex items-start justify-between gap-4 px-4 py-4 transition-colors hover:bg-paper-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700"><span className="flex min-w-0 items-start gap-3"><span className="shrink-0 font-mono text-xs text-roast-500">{String(l.order).padStart(2,'0')}</span><span className="text-sm font-medium leading-6 text-roast-950 group-hover:underline">{learnerTitle(l.title)}</span></span><span className="shrink-0 text-xs text-roast-600">{l.minutes?l.minutes+' menit':''}</span></Link></li>)}</ol>
   </section>})}
  </section>
  {examHref&&process.env.CHERRYEDU_FINAL_EXAMS_REVIEW==='enabled'&&<section aria-label="Ujian akhir" className="mt-10 flex flex-col gap-4 rounded-xl border border-paper-300 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
    <div><h2 className="font-serif text-2xl font-bold">Ujian Akhir</h2><p className="mt-2 max-w-xl text-sm leading-6 text-roast-700">Selesaikan pertanyaan lintas-modul untuk menguji pemahaman dan pengambilan keputusan.</p></div>
    <Link href={examHref} className="inline-flex shrink-0 justify-center rounded-md bg-roast-950 px-5 py-3 text-sm font-semibold text-white hover:bg-cherry-800">Mulai ujian akhir →</Link>
  </section>}
  {note&&<p className="mt-8 max-w-3xl text-sm leading-7 text-roast-700">{note}</p>}
 </div></div>;
}