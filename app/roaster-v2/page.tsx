import Link from 'next/link';
import {notFound} from 'next/navigation';
import {CuratedCourseOverview} from '@/components/curated/CuratedCourseOverview';
import {ROASTER_V2_MODULES,ROASTER_V2_LESSONS} from '@/lib/data/roasterV2Course';
export const metadata={title:"Roaster Specialization | CherryEdu"};
export default function Page(){
 if(process.env.CHERRYEDU_ROASTER_V2_REVIEW!=='enabled')notFound();
 return <CuratedCourseOverview name="Roaster Specialization" description="Dari pemilihan green bean, kendali panas, pembacaan log dan cupping sampai keputusan QC yang dapat dijelaskan." image="https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&auto=format&fit=crop&q=80" modules={ROASTER_V2_MODULES} lessons={ROASTER_V2_LESSONS} examHref="/ujian-akhir/roaster" lessonHref={id=>`/roaster-v2/${id}`} practiceHref={code=>`/roaster-v2/practice/${code.toLowerCase()}`} note="Pengoperasian mesin roasting dan keselamatan fasilitas memerlukan praktik dengan pengawasan."></CuratedCourseOverview>;
}