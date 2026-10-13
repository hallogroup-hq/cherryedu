import {notFound} from 'next/navigation';
import {CuratedPracticeFrame} from '@/components/curated/CuratedPracticeFrame';
import {ROASTER_V2_MODULES} from '@/lib/data/roasterV2Course';
import {ROASTER_V2_CASES,ROASTER_V2_DIAGNOSTICS} from '@/lib/data/roasterV2Practice';
import {RoasterV2Practice} from '@/components/roaster-v2/RoasterV2Practice';
export function generateStaticParams(){return ROASTER_V2_MODULES.map(m=>({moduleId:m.code.toLowerCase()}));}
export default function Page({params}:{params:{moduleId:string}}){
 if(process.env.CHERRYEDU_ROASTER_V2_REVIEW!=='enabled')notFound();
 const m=ROASTER_V2_MODULES.find(m=>m.code.toLowerCase()===params.moduleId);
 if(!m)notFound();
 return <CuratedPracticeFrame courseHref="/roaster-v2" courseTitle="Roaster Specialization" moduleCode={m.code} moduleTitle={m.title} moduleDescription={m.description}><RoasterV2Practice cases={ROASTER_V2_CASES.filter(x=>x.module===m.code)} diagnostics={ROASTER_V2_DIAGNOSTICS.filter(x=>x.module===m.code)}/></CuratedPracticeFrame>;
}