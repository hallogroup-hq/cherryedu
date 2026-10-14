import {notFound} from 'next/navigation';
import {BUSINESS_ROASTERY_LESSONS} from '@/lib/data/businessRoasteryCourse';
import {BusinessRoasteryReader} from '@/components/business-roastery/BusinessRoasteryReader';
export function generateStaticParams(){return BUSINESS_ROASTERY_LESSONS.map(l=>({lessonId:l.id}));}
export default function Page({params}:{params:{lessonId:string}}){if(process.env.CHERRYEDU_BUSINESS_ROASTERY_REVIEW!=='enabled'||!BUSINESS_ROASTERY_LESSONS.some(l=>l.id===params.lessonId))notFound();return <BusinessRoasteryReader key={params.lessonId} lessonId={params.lessonId}/>;}
