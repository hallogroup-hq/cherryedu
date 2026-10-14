import Link from 'next/link';
import {notFound} from 'next/navigation';
import {MarkdownRenderer} from '@/components/MarkdownRenderer';
import {CuratedLessonFrame} from '@/components/curated/CuratedLessonFrame';
import {CuratedScenarioLab} from '@/components/curated/CuratedScenarioLab';
import {GreenLandedCostCalculator} from '@/components/curated/NextSpecialtyCalculators';
import {GREEN_COFFEE_V2_MODULES,GREEN_COFFEE_V2_LESSONS} from '@/lib/data/greenCoffeeV2Course';
import {GREEN_COFFEE_SCENARIOS} from '@/lib/data/greenCoffeeScenarios';
export function generateStaticParams(){return GREEN_COFFEE_V2_LESSONS.map(x=>({lessonId:x.id}));}
export default function GreenCoffeeLesson({params}:{params:{lessonId:string}}){
 if(process.env.CHERRYEDU_NEXT_SPECIALTY_REVIEW!=='enabled')notFound();
 const lesson=GREEN_COFFEE_V2_LESSONS.find(x=>x.id===params.lessonId);
 if(!lesson)notFound();
 const scenario=GREEN_COFFEE_SCENARIOS.find(x=>x.module===lesson.moduleId);
 return <CuratedLessonFrame courseTitle="Green Coffee & Post-Harvest Processing Specialist" courseHref="/green-coffee-v2"
  modules={GREEN_COFFEE_V2_MODULES} lessons={GREEN_COFFEE_V2_LESSONS} currentId={lesson.id} rawMarkdown={lesson.content}
  examHref={process.env.CHERRYEDU_FINAL_EXAMS_REVIEW==='enabled'?'/ujian-akhir/green-coffee':undefined}>
  <MarkdownRenderer content={lesson.content}/>
 {lesson.moduleId==='GC07'&&lesson.order===4&&<GreenLandedCostCalculator/>}
  {lesson.order===4&&scenario&&<>
   <CuratedScenarioLab scenario={scenario}/>
   <Link href={'/green-coffee-v2/practice/'+lesson.moduleId.toLowerCase()} className="inline-flex rounded-md border border-roast-950 px-4 py-3 text-sm font-semibold text-roast-950 hover:bg-paper-100">Ulangi latihan keputusan modul →</Link>
  </>}
 </CuratedLessonFrame>;
}
