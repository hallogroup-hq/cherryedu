import Link from 'next/link';
import {notFound} from 'next/navigation';
import {CuratedCourseOverview} from '@/components/curated/CuratedCourseOverview';
import {BARISTA_V2_MODULES,BARISTA_V2_LESSONS} from '@/lib/data/baristaV2.generated';
export const metadata={title:"Barista Specialization | CherryEdu"};
export default function Page(){
 if(process.env.CHERRYEDU_BARISTA_V2_REVIEW!=='enabled')notFound();
 return <CuratedCourseOverview name="Barista Specialization" description="Pelajari ekstraksi dan espresso melalui eksperimen, keputusan pelayanan, keselamatan bahan, dan pengembangan minuman." image="https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=800&auto=format&fit=crop&q=80" modules={BARISTA_V2_MODULES} lessons={BARISTA_V2_LESSONS} examHref="/ujian-akhir/barista" courseHref="/barista-v2" note="Keterampilan alat panas dan alergen memerlukan pembimbingan serta penilaian praktik."></CuratedCourseOverview>;
}