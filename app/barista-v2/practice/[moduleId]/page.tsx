import {notFound} from 'next/navigation';
import {CuratedPracticeFrame} from '@/components/curated/CuratedPracticeFrame';
import {BARISTA_V2_MODULES} from '@/lib/data/baristaV2.generated';
import {BaristaTransferCases} from '@/components/barista-v2/BaristaTransferCases';
import {BaristaDiagnosticQuiz} from '@/components/barista-v2/BaristaDiagnosticQuiz';
export function generateStaticParams(){return BARISTA_V2_MODULES.map(m=>({moduleId:m.code.toLowerCase()}));}
export default function Page({params}:{params:{moduleId:string}}){
 if(process.env.CHERRYEDU_BARISTA_V2_REVIEW!=='enabled')notFound();
 const m=BARISTA_V2_MODULES.find(m=>m.code.toLowerCase()===params.moduleId);
 if(!m)notFound();
 return <CuratedPracticeFrame courseHref="/barista-v2" courseTitle="Barista Specialization" moduleCode={m.code} moduleTitle={m.title} moduleDescription={m.description}><BaristaTransferCases moduleCode={m.code}/><BaristaDiagnosticQuiz moduleCode={m.code}/></CuratedPracticeFrame>;
}