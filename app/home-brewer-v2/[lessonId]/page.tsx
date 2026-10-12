import Link from 'next/link';
import {notFound} from 'next/navigation';
import {MarkdownRenderer} from '@/components/MarkdownRenderer';
import {HOME_BREWER_V2_MODULES,HOME_BREWER_V2_LESSONS} from '@/lib/data/homeBrewerV2.generated';
import {HomeBrewerConceptLab} from '@/components/home-brewer-v2/HomeBrewerConceptLab';
import {HomeBrewerMechanismVisual} from '@/components/home-brewer-v2/HomeBrewerMechanismVisual';

export function generateStaticParams(){return HOME_BREWER_V2_LESSONS.map(x=>({lessonId:x.id}));}
export default function HomeBrewerV2Lesson({params}:{params:{lessonId:string}}){
 if(process.env.CHERRYEDU_HOME_BREWER_V2_REVIEW!=='enabled')notFound();
 const lesson=HOME_BREWER_V2_LESSONS.find(l=>l.id===params.lessonId);
 if(!lesson)notFound();
 const mod=HOME_BREWER_V2_MODULES.find(m=>m.code===lesson.moduleId);
 if(!mod)notFound();
 const index=HOME_BREWER_V2_LESSONS.findIndex(l=>l.id===lesson.id);
 const before=HOME_BREWER_V2_LESSONS[index-1],after=HOME_BREWER_V2_LESSONS[index+1];
 const firstSection=lesson.markdown.indexOf('\n## ');
 const hasDiagram=['hbv2-hb02-l02','hbv2-hb02-l03','hbv2-hb04-l03','hbv2-hb05-l01','hbv2-hb09-l01','hbv2-hb10-l02'].includes(lesson.id);
 return <main className="min-h-screen bg-paper-50 px-4 pb-28 pt-12 text-roast-950 sm:px-6">
  <article className="mx-auto max-w-3xl">
   <nav aria-label="Breadcrumb" className="text-sm text-roast-700"><Link href="/home-brewer-v2" className="underline underline-offset-4">Home Brewer Specialization</Link><span className="px-2" aria-hidden="true">/</span>{mod.code.replace('HB','Modul ')}</nav>
   <p className="mt-12 font-mono text-xs uppercase font-semibold tracking-widest text-cherry-700">{mod.title} · Pelajaran {lesson.order}</p>
   <h1 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-5xl">{lesson.title}</h1>
   <div className="mt-8 border-t border-paper-300 pt-7">
    {hasDiagram&&firstSection>=0?<><MarkdownRenderer content={lesson.markdown.slice(0,firstSection)}/><HomeBrewerMechanismVisual lessonId={lesson.id}/><MarkdownRenderer content={lesson.markdown.slice(firstSection+1)}/></>:<MarkdownRenderer content={lesson.markdown}/>}
   </div>
   {lesson.order===1&&<HomeBrewerConceptLab moduleCode={lesson.moduleId}/>}
   {lesson.order===5&&<div className="my-10 border-t border-paper-300 pt-7">
    <h2 className="font-serif text-2xl font-semibold">Bisa mengatasi situasi yang berbeda?</h2>
    <p className="my-4 text-sm leading-7 text-roast-800">Selesaikan tiga kasus baru dan dua pertanyaan diagnosis. Informasi kasus akan berubah setelah kamu menjawab, agar latihan tidak berhenti pada menghafal materi.</p>
    <Link href={'/home-brewer-v2/practice/'+lesson.moduleId.toLowerCase()} className="inline-block rounded-lg bg-roast-950 px-5 py-3 text-sm font-semibold text-white">Mulai latihan modul →</Link>
   </div>}
   <nav aria-label="Navigasi pelajaran" className="mt-16 flex justify-between gap-5 border-t border-paper-300 pt-6 text-sm">
    <div>{before?<Link className="underline underline-offset-4" href={'/home-brewer-v2/'+before.id}>← {before.title}</Link>:<Link href="/home-brewer-v2" className="underline underline-offset-4">Daftar materi</Link>}</div>
    <div className="text-right">{after?<Link className="font-semibold underline underline-offset-4" href={'/home-brewer-v2/'+after.id}>{after.title} →</Link>:<Link href="/home-brewer-v2" className="font-semibold underline underline-offset-4">Kembali ke semua modul →</Link>}</div>
   </nav>
  </article>
 </main>;
}