import Link from 'next/link';
import {notFound} from 'next/navigation';
import {CuratedCourseOverview} from '@/components/curated/CuratedCourseOverview';
import {HOME_BREWER_V2_MODULES,HOME_BREWER_V2_LESSONS} from '@/lib/data/homeBrewerV2.generated';
export const metadata={title:"Home Brewer Specialization | CherryEdu"};
export default function Page(){
 if(process.env.CHERRYEDU_HOME_BREWER_V2_REVIEW!=='enabled')notFound();
 return <CuratedCourseOverview name="Home Brewer Specialization" description="Pahami variabel seduh, pahami rasa yang kamu cari, dan susun eksperimen untuk membuat resep sesuai alat dan biji kopi." image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80" modules={HOME_BREWER_V2_MODULES} lessons={HOME_BREWER_V2_LESSONS} examHref="/ujian-akhir/home-brewer" courseHref="/home-brewer-v2" note="Gunakan air panas dan alat seduh mengikuti petunjuk produsen."></CuratedCourseOverview>;
}