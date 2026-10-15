import {notFound} from 'next/navigation';
import {CuratedPracticeFrame} from '@/components/curated/CuratedPracticeFrame';
import {CuratedScenarioLab} from '@/components/curated/CuratedScenarioLab';
import {GREEN_COFFEE_V2_MODULES} from '@/lib/data/greenCoffeeV2Course';
import {GREEN_COFFEE_SCENARIOS} from '@/lib/data/greenCoffeeScenarios';
export function generateStaticParams(){return GREEN_COFFEE_V2_MODULES.map(m=>({module:m.code.toLowerCase()}));}
export default function GreenCoffeePractice({params}:{params:{module:string}}){
 if(process.env.CHERRYEDU_NEXT_SPECIALTY_REVIEW!=='enabled')notFound();
 const m=GREEN_COFFEE_V2_MODULES.find(x=>x.code.toLowerCase()===params.module);
 const scenario=GREEN_COFFEE_SCENARIOS.find(x=>x.module===m?.code);
 if(!m||!scenario)notFound();
 return <CuratedPracticeFrame courseHref="/green-coffee-v2" courseTitle="Green Coffee & Post-Harvest Processing Specialist"
  moduleCode={m.code} moduleTitle={m.title} moduleDescription={m.description}>
   <CuratedScenarioLab scenario={scenario}/>
  </CuratedPracticeFrame>;
}
