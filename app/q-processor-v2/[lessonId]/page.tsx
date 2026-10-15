import Link from 'next/link';
import {notFound} from 'next/navigation';
import {MarkdownRenderer} from '@/components/MarkdownRenderer';
import {CuratedLessonFrame} from '@/components/curated/CuratedLessonFrame';
import {CuratedScenarioLab} from '@/components/curated/CuratedScenarioLab';
import {QProcessorYieldCalculator} from '@/components/curated/NextSpecialtyCalculators';
import {Q_PROCESSOR_V2_MODULES,Q_PROCESSOR_V2_LESSONS} from '@/lib/data/qProcessorV2Course';
import {Q_PROCESSOR_SCENARIOS} from '@/lib/data/nextSpecialtyScenarios';
export function generateStaticParams(){return Q_PROCESSOR_V2_LESSONS.map(x=>({lessonId:x.id}));}
export default function SpecialtyLesson({params}:{params:{lessonId:string}}){
 if(process.env.CHERRYEDU_NEXT_SPECIALTY_REVIEW!=='enabled')notFound();
 const lesson=Q_PROCESSOR_V2_LESSONS.find(x=>x.id===params.lessonId);
 if(!lesson)notFound();
 const scenario=Q_PROCESSOR_SCENARIOS.find(x=>x.module===lesson.moduleId);
 return <CuratedLessonFrame courseTitle="Q Processor Specialization: Bioproses & Pasca-Panen Spesialti" courseHref="/q-processor-v2"
 modules={Q_PROCESSOR_V2_MODULES} lessons={Q_PROCESSOR_V2_LESSONS} currentId={lesson.id}
 rawMarkdown={lesson.content} examHref={process.env.CHERRYEDU_FINAL_EXAMS_REVIEW==='enabled'?'/ujian-akhir/q-processor':undefined}>
 <MarkdownRenderer content={lesson.content}/>
 {lesson.moduleId==='QP07'&&lesson.order===3&&<QProcessorYieldCalculator/>}
 {lesson.order===3&&scenario&&<>
  <CuratedScenarioLab scenario={scenario}/>
  <Link href={'/q-processor-v2/practice/'+lesson.moduleId.toLowerCase()} className="inline-flex rounded-md border border-roast-950 px-4 py-3 text-sm font-semibold text-roast-950 hover:bg-paper-100">Latihan keputusan modul →</Link>
 </>}
 </CuratedLessonFrame>;
}
