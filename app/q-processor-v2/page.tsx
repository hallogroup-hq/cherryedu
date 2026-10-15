import {notFound} from 'next/navigation';
import {CuratedCourseOverview} from '@/components/curated/CuratedCourseOverview';
import {Q_PROCESSOR_V2_MODULES,Q_PROCESSOR_V2_LESSONS} from '@/lib/data/qProcessorV2Course';
export const metadata={title:"Q Processor Specialization | CherryEdu",robots:{index:false,follow:false}};
export default function SpecialtyOverview(){
 if(process.env.CHERRYEDU_NEXT_SPECIALTY_REVIEW!=='enabled')notFound();
 return <CuratedCourseOverview name="Q Processor Specialization: Bioproses & Pasca-Panen Spesialti"
 description="Pelajari kontrol wet mill, mikrobiologi proses, natural, honey, giling basah, eksperimen fermentasi yang aman, pengeringan, grading, sampai logbook dan audit mutu. Jalur online ini bukan sertifikasi CQI."
 image="https://images.unsplash.com/photo-1741012253890-a62490e7ea3e?w=800&auto=format&fit=crop&q=80" courseHref="/q-processor-v2"
 modules={Q_PROCESSOR_V2_MODULES} lessons={Q_PROCESSOR_V2_LESSONS}
 examHref={process.env.CHERRYEDU_FINAL_EXAMS_REVIEW==='enabled'?'/ujian-akhir/q-processor':undefined}/>;
}
