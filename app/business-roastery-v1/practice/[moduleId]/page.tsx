import {notFound} from 'next/navigation';
import {CuratedPracticeFrame} from '@/components/curated/CuratedPracticeFrame';
import {BUSINESS_ROASTERY_MODULES} from '@/lib/data/businessRoasteryCourse';
import {BusinessDecisionCase} from '@/components/business-roastery/BusinessDecisionCase';
export function generateStaticParams(){return BUSINESS_ROASTERY_MODULES.map(m=>({moduleId:m.code.toLowerCase()}));}
export default function Page({params}:{params:{moduleId:string}}){
 if(process.env.CHERRYEDU_BUSINESS_ROASTERY_REVIEW!=='enabled')notFound();
 const m=BUSINESS_ROASTERY_MODULES.find(m=>m.code.toLowerCase()===params.moduleId);
 if(!m)notFound();
 return <CuratedPracticeFrame courseHref="/business-roastery-v1" courseTitle="Business Roastery" moduleCode={m.code} moduleTitle={m.title} moduleDescription={m.description}><BusinessDecisionCase moduleId={m.code}/></CuratedPracticeFrame>;
}