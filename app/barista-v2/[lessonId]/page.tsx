import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BARISTA_V2_LESSONS, BARISTA_V2_MODULES } from '@/lib/data/baristaV2.generated';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { BaristaConceptLab } from '@/components/barista-v2/BaristaConceptLab';
import { ExperimentNotebook } from '@/components/barista-v2/ExperimentNotebook';
import { BaristaModuleCheckpoint } from '@/components/barista-v2/ModuleCheckpoint';
import { LearningMechanismVisual } from '@/components/barista-v2/LearningMechanismVisual';

export function generateStaticParams() {
  return BARISTA_V2_LESSONS.map(lesson=>({lessonId:lesson.id}));
}
export default function BaristaV2Lesson({params}:{params:{lessonId:string}}) {
  if(process.env.CHERRYEDU_BARISTA_V2_REVIEW !== 'enabled') notFound();
  const lesson=BARISTA_V2_LESSONS.find(l=>l.id===params.lessonId);
  if(!lesson) notFound();
  const mod=BARISTA_V2_MODULES.find(m=>m.code===lesson.moduleId);
  if(!mod)notFound();
  const index=BARISTA_V2_LESSONS.findIndex(l=>l.id===lesson.id);
  const prev=BARISTA_V2_LESSONS[index-1],next=BARISTA_V2_LESSONS[index+1];
  return <div className="min-h-screen bg-paper-50 pb-32">
    <div className="mx-auto max-w-3xl px-4 pt-12 sm:px-6">
      <nav aria-label="Breadcrumb" className="text-sm text-roast-700">
        <Link className="underline underline-offset-4" href="/barista-v2">Barista Specialization</Link>
        <span className="px-2" aria-hidden="true">/</span>
        <span>{mod.code.replace('M','Modul ')}</span>
      </nav>
      <p className="mt-12 text-xs font-semibold uppercase tracking-widest text-cherry-700">{mod.title} · Pelajaran {lesson.order}</p>
      <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-roast-950 sm:text-5xl">{lesson.title}</h1>
      <div className="mt-8 border-t border-paper-300 pt-7">
        <MarkdownRenderer content={lesson.content}/>
      </div>
      <LearningMechanismVisual lessonId={lesson.id}/>
      {lesson.order === 1 && <BaristaConceptLab moduleCode={lesson.moduleId}/>}
      {lesson.order === mod.count && <BaristaModuleCheckpoint moduleCode={lesson.moduleId}/>}
      <details className="group my-12 border-t border-paper-300 pt-5">
        <summary className="cursor-pointer list-none text-lg font-serif font-bold text-roast-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700">
          Laboratorium pribadimu <span className="ml-2 text-sm font-sans font-normal text-roast-600">(buka untuk mencoba)</span>
        </summary>
        <ExperimentNotebook title={'Eksperimen: '+lesson.title}/>
      </details>
      <nav aria-label="Navigasi pelajaran" className="mt-16 flex items-start justify-between gap-6 border-t border-paper-300 pt-7 text-sm">
        <div>{prev?<Link href={'/barista-v2/'+prev.id} className="underline underline-offset-4 text-roast-800">← {prev.title}</Link>:<Link href="/barista-v2" className="underline underline-offset-4">Daftar materi</Link>}</div>
        <div className="text-right">{next?<Link href={'/barista-v2/'+next.id} className="font-semibold underline underline-offset-4 text-roast-900">{next.title} →</Link>:<Link href="/barista-v2" className="font-semibold underline underline-offset-4">Kembali ke daftar materi →</Link>}</div>
      </nav>
    </div>
  </div>;
}
