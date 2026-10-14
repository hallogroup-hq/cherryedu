import {notFound} from 'next/navigation';
import {CuratedPracticeFrame} from '@/components/curated/CuratedPracticeFrame';
import {CuratedScenarioLab} from '@/components/curated/CuratedScenarioLab';
import {COFFEE_SHOP_V2_MODULES} from '@/lib/data/coffeeShopV2Course';
import {COFFEE_SHOP_SCENARIOS} from '@/lib/data/nextSpecialtyScenarios';
export function generateStaticParams(){return COFFEE_SHOP_V2_MODULES.map(m=>({module:m.code.toLowerCase()}));}
export default function SpecialtyPractice({params}:{params:{module:string}}){
 if(process.env.CHERRYEDU_NEXT_SPECIALTY_REVIEW!=='enabled')notFound();
 const m=COFFEE_SHOP_V2_MODULES.find(x=>x.code.toLowerCase()===params.module);
 const scenario=COFFEE_SHOP_SCENARIOS.find(x=>x.module===m?.code);
 if(!m||!scenario)notFound();
 return <CuratedPracticeFrame courseHref="/coffee-shop-v2" courseTitle="Coffee Business & Shop Management Specialist"
  moduleCode={m.code} moduleTitle={m.title} moduleDescription={m.description}>
  <CuratedScenarioLab scenario={scenario}/>
 </CuratedPracticeFrame>;
}
