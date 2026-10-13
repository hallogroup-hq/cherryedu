import {notFound} from 'next/navigation';
import {CuratedPracticeFrame} from '@/components/curated/CuratedPracticeFrame';
import {HOME_BREWER_V2_MODULES} from '@/lib/data/homeBrewerV2.generated';
import {HomeBrewerChangingCases,HomeBrewerDiagnosticQuiz} from '@/components/home-brewer-v2/HomeBrewerPractice';
export function generateStaticParams(){return HOME_BREWER_V2_MODULES.map(m=>({moduleId:m.code.toLowerCase()}));}
export default function Page({params}:{params:{moduleId:string}}){
 if(process.env.CHERRYEDU_HOME_BREWER_V2_REVIEW!=='enabled')notFound();
 const m=HOME_BREWER_V2_MODULES.find(m=>m.code.toLowerCase()===params.moduleId);
 if(!m)notFound();
 return <CuratedPracticeFrame courseHref="/home-brewer-v2" courseTitle="Home Brewer Specialization" moduleCode={m.code} moduleTitle={m.title} moduleDescription={m.description}><HomeBrewerChangingCases moduleCode={m.code}/><HomeBrewerDiagnosticQuiz moduleCode={m.code}/></CuratedPracticeFrame>;
}