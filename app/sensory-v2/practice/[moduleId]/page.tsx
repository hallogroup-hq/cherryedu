import {notFound} from 'next/navigation';
import {CuratedPracticeFrame} from '@/components/curated/CuratedPracticeFrame';
import {SENSORY_V2_MODULES} from '@/lib/data/sensoryV2Course';
import {SENSORY_V2_CASES,SENSORY_V2_DIAGNOSTICS} from '@/lib/data/sensoryV2Practice';
import {SensoryV2Practice} from '@/components/sensory-v2/SensoryV2Practice';
export function generateStaticParams(){return SENSORY_V2_MODULES.map(m=>({moduleId:m.code.toLowerCase()}));}
export default function Page({params}:{params:{moduleId:string}}){
 if(process.env.CHERRYEDU_SENSORY_V2_REVIEW!=='enabled')notFound();
 const m=SENSORY_V2_MODULES.find(m=>m.code.toLowerCase()===params.moduleId);
 if(!m)notFound();
 return <CuratedPracticeFrame courseHref="/sensory-v2" courseTitle="Q Grader & Sensory Specialist" moduleCode={m.code} moduleTitle={m.title} moduleDescription={m.description}><SensoryV2Practice cases={SENSORY_V2_CASES.filter(x=>x.moduleId===m.code)} diagnostics={SENSORY_V2_DIAGNOSTICS.filter(x=>x.moduleId===m.code)}/></CuratedPracticeFrame>;
}