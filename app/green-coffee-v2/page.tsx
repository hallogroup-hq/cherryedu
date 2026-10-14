import {notFound} from 'next/navigation';
import {CuratedCourseOverview} from '@/components/curated/CuratedCourseOverview';
import {GREEN_COFFEE_V2_MODULES,GREEN_COFFEE_V2_LESSONS} from '@/lib/data/greenCoffeeV2Course';
export const metadata={title:'Green Coffee & Post-Harvest Specialist | CherryEdu',robots:{index:false,follow:false}};
export default function GreenCoffeePath(){
 if(process.env.CHERRYEDU_NEXT_SPECIALTY_REVIEW!=='enabled')notFound();
 return <CuratedCourseOverview
  name="Green Coffee & Post-Harvest Processing Specialist"
  description="Belajar mengevaluasi green bean dari identitas tanaman, kebun dan panen hingga proses, pengeringan, grading, gudang dan logistik. Setiap keputusan disusun dari bukti, bukan label rasa atau angka mutlak."
  image="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800&auto=format&fit=crop&q=80"
  courseHref="/green-coffee-v2"
  modules={GREEN_COFFEE_V2_MODULES}
  lessons={GREEN_COFFEE_V2_LESSONS}
  examHref={process.env.CHERRYEDU_FINAL_EXAMS_REVIEW==='enabled'?'/ujian-akhir/green-coffee':undefined}
 />;
}
