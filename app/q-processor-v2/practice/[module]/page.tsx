import {notFound} from 'next/navigation';
import {CuratedPracticeFrame} from '@/components/curated/CuratedPracticeFrame';
import {CuratedScenarioLab} from '@/components/curated/CuratedScenarioLab';
import {Q_PROCESSOR_V2_MODULES} from '@/lib/data/qProcessorV2Course';
import {Q_PROCESSOR_SCENARIOS} from '@/lib/data/nextSpecialtyScenarios';
export function generateStaticParams(){return Q_PROCESSOR_V2_MODULES.map(m=>({module:m.code.toLowerCase()}));}
export default function SpecialtyPractice({params}:{params:{module:string}}){
 if(process.env.CHERRYEDU_NEXT_SPECIALTY_REVIEW!=='enabled')notFound();
 const m=Q_PROCESSOR_V2_MODULES.find(x=>x.code.toLowerCase()===params.module);
 const scenario=Q_PROCESSOR_SCENARIOS.find(x=>x.module===m?.code);
 if(!m||!scenario)notFound();
 return <CuratedPracticeFrame courseHref="/q-processor-v2" courseTitle="Q Processor Specialization: Bioproses & Pasca-Panen Spesialti"
  moduleCode={m.code} moduleTitle={m.title} moduleDescription={m.description}>
  <CuratedScenarioLab scenario={scenario}/>
 </CuratedPracticeFrame>;
}
