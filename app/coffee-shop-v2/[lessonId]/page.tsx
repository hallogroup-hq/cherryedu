import Link from 'next/link';
import {notFound} from 'next/navigation';
import {MarkdownRenderer} from '@/components/MarkdownRenderer';
import {CuratedLessonFrame} from '@/components/curated/CuratedLessonFrame';
import {CuratedScenarioLab} from '@/components/curated/CuratedScenarioLab';
import {CoffeeShopUnitEconomicsCalculator} from '@/components/curated/NextSpecialtyCalculators';
import {CoffeeShopMenuMixLab,CoffeeShop13WeekCashLab} from '@/components/curated/CoffeeShopPlanningLabs';
import {COFFEE_SHOP_V2_MODULES,COFFEE_SHOP_V2_LESSONS} from '@/lib/data/coffeeShopV2Course';
import {COFFEE_SHOP_SCENARIOS} from '@/lib/data/nextSpecialtyScenarios';
export function generateStaticParams(){return COFFEE_SHOP_V2_LESSONS.map(x=>({lessonId:x.id}));}
export default function SpecialtyLesson({params}:{params:{lessonId:string}}){
 if(process.env.CHERRYEDU_NEXT_SPECIALTY_REVIEW!=='enabled')notFound();
 const lesson=COFFEE_SHOP_V2_LESSONS.find(x=>x.id===params.lessonId);
 if(!lesson)notFound();
 const scenario=COFFEE_SHOP_SCENARIOS.find(x=>x.module===lesson.moduleId);
 return <CuratedLessonFrame courseTitle="Coffee Business & Shop Management Specialist" courseHref="/coffee-shop-v2"
 modules={COFFEE_SHOP_V2_MODULES} lessons={COFFEE_SHOP_V2_LESSONS} currentId={lesson.id}
 rawMarkdown={lesson.content} examHref={process.env.CHERRYEDU_FINAL_EXAMS_REVIEW==='enabled'?'/ujian-akhir/coffee-shop':undefined}>
 <MarkdownRenderer content={lesson.content}/>
 {lesson.moduleId==='CS03'&&lesson.order===3&&<CoffeeShopUnitEconomicsCalculator/>}
 {lesson.moduleId==='CS03'&&lesson.order===5&&<CoffeeShopMenuMixLab/>}
 {lesson.moduleId==='CS05'&&lesson.order===4&&<CoffeeShop13WeekCashLab/>}
 {lesson.order===5&&scenario&&<>
  <CuratedScenarioLab scenario={scenario}/>
  <Link href={'/coffee-shop-v2/practice/'+lesson.moduleId.toLowerCase()} className="inline-flex rounded-md border border-roast-950 px-4 py-3 text-sm font-semibold text-roast-950 hover:bg-paper-100">Latihan keputusan modul →</Link>
 </>}
 </CuratedLessonFrame>;
}
