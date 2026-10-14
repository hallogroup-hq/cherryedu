import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowRight,BookOpen} from 'lucide-react';
import {FINAL_EXAM_ENABLED,FINAL_EXAM_PATHS} from '@/lib/finalExamPaths';
export const dynamic='force-dynamic';
export const metadata={title:'Ujian Akhir | CherryEdu',robots:{index:false,follow:false}};
export default function FinalExamsIndex(){
 if(!FINAL_EXAM_ENABLED())notFound();
 return <main className="min-h-screen bg-paper-50 pb-24 text-roast-950">
  <header className="border-b border-paper-300 bg-paper-100/60">
   <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
    <Link href="/paths" className="text-sm font-medium text-cherry-800 underline underline-offset-4">Kembali ke jalur pembelajaran</Link>
    <p className="mt-10 font-mono text-xs font-semibold uppercase tracking-widest text-cherry-800">CherryEdu · Evaluasi pembelajaran</p>
    <h1 className="mt-3 max-w-3xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">Ujian Akhir</h1>
    <p className="mt-5 max-w-2xl text-sm leading-7 text-roast-700">Uji cara berpikirmu melalui skenario dan persoalan yang menghubungkan materi dari setiap modul. Pilih jalur yang sudah kamu pelajari.</p>
   </div>
  </header>
  <div className="mx-auto max-w-6xl px-5 py-10">
   <div className="grid gap-4 md:grid-cols-2">
    {FINAL_EXAM_PATHS.map((p,i)=><article key={p.slug} className="flex flex-col justify-between rounded-xl border border-paper-300 bg-white p-6 shadow-xs">
     <div><p className="font-mono text-xs text-roast-600">{String(i+1).padStart(2,'0')} / 06</p>
      <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight">{p.title}</h2>
      <p className="mt-3 text-sm text-roast-700">{p.count} pertanyaan · Berbasis pemahaman dan keputusan</p>
     </div>
     <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-paper-200 pt-5">
      <Link href={p.courseHref} className="inline-flex items-center gap-2 text-sm text-roast-700 hover:underline"><BookOpen size={16}/>Lihat materi</Link>
      <Link href={'/ujian-akhir/'+p.slug} className="inline-flex items-center gap-2 rounded-md bg-roast-950 px-4 py-3 text-sm font-semibold text-white hover:bg-cherry-800">Mulai ujian <ArrowRight size={16}/></Link>
     </div>
    </article>)}
   </div>
  </div>
 </main>
}
