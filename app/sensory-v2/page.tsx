import Link from 'next/link';
import {notFound} from 'next/navigation';
import {CuratedCourseOverview} from '@/components/curated/CuratedCourseOverview';
import {SENSORY_V2_MODULES,SENSORY_V2_LESSONS} from '@/lib/data/sensoryV2Course';
export const metadata={title:"Q Grader & Sensory Specialist | CherryEdu"};
export default function Page(){
 if(process.env.CHERRYEDU_SENSORY_V2_REVIEW!=='enabled')notFound();
 return <CuratedCourseOverview name="Q Grader & Sensory Specialist" description="Pelajari cara memisahkan deskripsi rasa, mutu fisik, penilaian kesukaan, dan informasi asal dengan pendekatan Coffee Value Assessment." image="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format&fit=crop&q=80" modules={SENSORY_V2_MODULES} lessons={SENSORY_V2_LESSONS} lessonHref={id=>`/sensory-v2/${id}`} practiceHref={code=>`/sensory-v2/practice/${code.toLowerCase()}`} note="Latihan mandiri membantu pemahaman, tetapi bukan pengganti pengujian dan kredensial Q Grader resmi."><nav className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><Link key="/sensory-v2/practical" href="/sensory-v2/practical" className="border border-paper-300 bg-white px-4 py-4 text-sm font-semibold text-roast-900 hover:bg-paper-100">Panduan praktik sensori</Link><Link key="/sensory-v2/notebook" href="/sensory-v2/notebook" className="border border-paper-300 bg-white px-4 py-4 text-sm font-semibold text-roast-900 hover:bg-paper-100">Notebook CVA</Link></nav></CuratedCourseOverview>;
}