import {notFound} from 'next/navigation';
import {CuratedCourseOverview} from '@/components/curated/CuratedCourseOverview';
import {COFFEE_SHOP_V2_MODULES,COFFEE_SHOP_V2_LESSONS} from '@/lib/data/coffeeShopV2Course';
export const metadata={title:"Manajemen bisnis kedai kopi, dari validasi pasar sampai operasi harian",robots:{index:false,follow:false}};
export default function SpecialtyOverview(){
 if(process.env.CHERRYEDU_NEXT_SPECIALTY_REVIEW!=='enabled')notFound();
 return <CuratedCourseOverview name="Coffee Business & Shop Management Specialist"
 description="Rancang dan kelola bisnis kedai yang bisa bertahan: validasi pelanggan, HPP dan kontribusi, investasi dan kas, kapasitas bar, tim, food safety, persediaan, serta pertumbuhan yang terukur."
 image="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80" courseHref="/coffee-shop-v2"
 modules={COFFEE_SHOP_V2_MODULES} lessons={COFFEE_SHOP_V2_LESSONS}
 examHref={process.env.CHERRYEDU_FINAL_EXAMS_REVIEW==='enabled'?'/ujian-akhir/coffee-shop':undefined}/>;
}
