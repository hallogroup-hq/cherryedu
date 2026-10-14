import Link from 'next/link';
import {notFound} from 'next/navigation';
import {BARISTA_V2_LESSONS,BARISTA_V2_MODULES} from '@/lib/data/baristaV2.generated';
import {MarkdownRenderer} from '@/components/MarkdownRenderer';
import {CuratedLessonFrame} from '@/components/curated/CuratedLessonFrame';
import {BaristaConceptLab} from '@/components/barista-v2/BaristaConceptLab';
import {ExperimentNotebook} from '@/components/barista-v2/ExperimentNotebook';
import {BaristaModuleCheckpoint} from '@/components/barista-v2/ModuleCheckpoint';
import {LearningMechanismVisual} from '@/components/barista-v2/LearningMechanismVisual';

export function generateStaticParams(){return BARISTA_V2_LESSONS.map(l=>({lessonId:l.id}));}
export default function BaristaV2Lesson({params}:{params:{lessonId:string}}){
 if(process.env.CHERRYEDU_BARISTA_V2_REVIEW!=='enabled')notFound();
 const lesson=BARISTA_V2_LESSONS.find(l=>l.id===params.lessonId);
 if(!lesson)notFound();
 const mod=BARISTA_V2_MODULES.find(m=>m.code===lesson.moduleId);
 if(!mod)notFound();
 const useNotebook=['bv2-m02-l04','bv2-m02-l05','bv2-m07-l05'].includes(lesson.id);
 const visualLessons=['bv2-m01-l01','bv2-m02-l01','bv2-m02-l02','bv2-m03-l03','bv2-m05-l03','bv2-m07-l01','bv2-m11-l04'];
 const firstSection=lesson.content.indexOf('\n## ');
 const useVisual=visualLessons.includes(lesson.id)&&firstSection>=0;
 return <CuratedLessonFrame courseTitle="Barista Specialization" courseHref="/barista-v2" modules={BARISTA_V2_MODULES} lessons={BARISTA_V2_LESSONS} currentId={lesson.id} rawMarkdown={lesson.content} examHref={process.env.CHERRYEDU_FINAL_EXAMS_REVIEW==='enabled'?'/ujian-akhir/barista':undefined}>
  {useVisual?<><MarkdownRenderer content={lesson.content.slice(0,firstSection).trim()}/><LearningMechanismVisual lessonId={lesson.id}/><MarkdownRenderer content={lesson.content.slice(firstSection+1)}/></>:<MarkdownRenderer content={lesson.content}/>}
  {lesson.order===1&&<BaristaConceptLab moduleCode={lesson.moduleId}/>}
  {lesson.order===mod.count&&<BaristaModuleCheckpoint moduleCode={lesson.moduleId}/>}
  {lesson.order===mod.count&&<Link href={'/barista-v2/practice/'+lesson.moduleId.toLowerCase()} className="my-8 inline-block rounded-lg border border-roast-900 px-5 py-3 text-sm font-semibold text-roast-900 hover:bg-paper-100">Lanjutkan: tiga kasus situasi baru →</Link>}
  {useNotebook&&<details className="group my-12 border-t border-paper-300 pt-5">
   <summary className="cursor-pointer list-none font-serif text-lg font-bold text-roast-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700">Laboratorium pribadimu <span className="ml-2 font-sans text-sm font-normal text-roast-600">(buka untuk mencoba)</span></summary>
   <ExperimentNotebook title={'Eksperimen filter: '+lesson.title}/>
  </details>}
 </CuratedLessonFrame>;
}
