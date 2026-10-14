import Link from 'next/link';
import {notFound} from 'next/navigation';
import {MarkdownRenderer} from '@/components/MarkdownRenderer';
import {CuratedLessonFrame} from '@/components/curated/CuratedLessonFrame';
import {BUSINESS_ROASTERY_FIELD_GUIDES} from '@/lib/data/businessRoasteryFieldGuides';
import {BUSINESS_ROASTERY_MODULES,BUSINESS_ROASTERY_LESSONS} from '@/lib/data/businessRoasteryCourse';

export function generateStaticParams(){return BUSINESS_ROASTERY_LESSONS.map(l=>({lessonId:l.id}));}
export default function BusinessRoasteryLesson({params}:{params:{lessonId:string}}){
 if(process.env.CHERRYEDU_BUSINESS_ROASTERY_REVIEW!=='enabled')notFound();
 const lesson=BUSINESS_ROASTERY_LESSONS.find(l=>l.id===params.lessonId);
 if(!lesson)notFound();
 const mod=BUSINESS_ROASTERY_MODULES.find(m=>m.code===lesson.moduleId);
 if(!mod)notFound();
 return <CuratedLessonFrame courseTitle="Business Roastery" courseHref="/business-roastery-v1" modules={BUSINESS_ROASTERY_MODULES} lessons={BUSINESS_ROASTERY_LESSONS} currentId={lesson.id} rawMarkdown={lesson.content}>
  <MarkdownRenderer content={lesson.content}/>
  {lesson.order===3&&<section aria-label="Studi kasus dan perhitungan" className="my-10 border-y border-paper-300 bg-paper-100 px-5 py-7">
   <h3 className="font-serif text-2xl font-bold text-roast-950">{BUSINESS_ROASTERY_FIELD_GUIDES[mod.code].title}</h3>
   <MarkdownRenderer content={BUSINESS_ROASTERY_FIELD_GUIDES[mod.code].content}/>
  </section>}
  {['B08','B13','B14','B15'].includes(lesson.moduleId)&&<aside className="my-10 border-l-2 border-cherry-700 bg-paper-100 p-5">
   <h3 className="font-serif text-xl font-semibold text-roast-950">Periksa dampak biaya pada angka</h3>
   <p className="mt-2 text-sm leading-7 text-roast-800">Masukkan penawaran sesuai rute dan asumsi yang bisa diuji. Biarkan harga belum tersedia tetap kosong, jangan mengarangnya.</p>
   <Link className="mt-3 inline-block font-semibold text-cherry-800 underline underline-offset-4" href="/business-roastery-v1/calculator">Buka kalkulator HPP dan landed cost →</Link>
  </aside>}
  {lesson.moduleId==='B02'&&<aside className="my-8 border-l-2 border-cherry-700 bg-paper-100 p-5">
   <h3 className="font-serif text-xl font-semibold text-roast-950">Buktikan pilihan asset-light atau mesin sendiri</h3>
   <Link href="/business-roastery-v1/models" className="mt-3 inline-block font-semibold text-cherry-800 underline underline-offset-4">Bandingkan tiga struktur biaya →</Link>
  </aside>}
  {lesson.moduleId==='B16'&&<aside className="my-10 border-l-2 border-cherry-700 bg-paper-100 p-5">
   <h3 className="font-serif text-xl font-semibold text-roast-950">Uji apakah kas cukup</h3>
   <Link href="/business-roastery-v1/cashflow" className="mt-3 inline-block font-semibold text-cherry-800 underline underline-offset-4">Buka simulasi kas dan piutang →</Link>
   <p className="mt-3 text-sm text-roast-700">Setelah memahami dampaknya, susun <Link href="/business-roastery-v1/working-capital" className="font-semibold underline underline-offset-4">jadwal 13 minggu</Link> dengan tanggal komitmen nyata.</p>
  </aside>}
  {lesson.order===4&&<section className="my-10 border-y border-paper-300 py-7">
   <h3 className="font-serif text-xl font-semibold text-roast-950">Saat rencana bisnis bertemu kenyataan</h3>
   <p className="mt-2 text-sm leading-7 text-roast-700">Putuskan dahulu, lalu dapatkan informasi tambahan dan evaluasi ulang.</p>
   <Link href={'/business-roastery-v1/practice/'+mod.code.toLowerCase()} className="mt-4 inline-block rounded border border-roast-900 px-4 py-3 text-sm font-semibold text-roast-950">Latihan keputusan modul →</Link>
  </section>}
 </CuratedLessonFrame>;
}
