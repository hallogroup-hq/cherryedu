import Link from 'next/link';
import {notFound} from 'next/navigation';
import {MarkdownRenderer} from '@/components/MarkdownRenderer';
import {BUSINESS_ROASTERY_FIELD_GUIDES} from '@/lib/data/businessRoasteryFieldGuides';
import {BUSINESS_ROASTERY_MODULES,BUSINESS_ROASTERY_LESSONS} from '@/lib/data/businessRoasteryCourse';
export function generateStaticParams(){return BUSINESS_ROASTERY_LESSONS.map(l=>({lessonId:l.id}));}
export default function BusinessRoasteryLesson({params}:{params:{lessonId:string}}){
 if(process.env.CHERRYEDU_BUSINESS_ROASTERY_REVIEW!=='enabled')notFound();
 const idx=BUSINESS_ROASTERY_LESSONS.findIndex(l=>l.id===params.lessonId);
 if(idx<0)notFound();
 const lesson=BUSINESS_ROASTERY_LESSONS[idx],mod=BUSINESS_ROASTERY_MODULES.find(m=>m.code===lesson.moduleId);
 if(!mod)notFound();
 const prev=BUSINESS_ROASTERY_LESSONS[idx-1],next=BUSINESS_ROASTERY_LESSONS[idx+1];
 return <main className="min-h-screen bg-paper-50 pb-24"><article className="mx-auto max-w-3xl px-5 pt-12">
  <nav aria-label="Navigasi belajar" className="text-sm text-roast-700"><Link href="/business-roastery-v1" className="underline underline-offset-4">Business Roastery</Link> <span aria-hidden="true">/</span> {mod.code}</nav>
  <p className="mt-14 font-mono text-xs font-semibold uppercase tracking-widest text-cherry-800">{mod.title} · Pelajaran {lesson.order} dari 4</p>
  <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-roast-950 sm:text-5xl">{lesson.title}</h1>
  <div className="mt-8 border-t border-paper-300 pt-8"><MarkdownRenderer content={lesson.content}/></div>
  {lesson.order===3&&<section aria-label="Studi kasus dan perhitungan" className="my-10 border-y border-paper-300 bg-paper-100 px-5 py-7"><h2 className="font-serif text-2xl font-bold text-roast-950">{BUSINESS_ROASTERY_FIELD_GUIDES[mod.code].title}</h2><MarkdownRenderer content={BUSINESS_ROASTERY_FIELD_GUIDES[mod.code].content}/></section>}
  {(lesson.moduleId==='B08'||lesson.moduleId==='B13'||lesson.moduleId==='B14'||lesson.moduleId==='B15')&&<aside className="my-10 border-l-2 border-cherry-700 bg-paper-100 p-5">
   <h2 className="font-serif text-xl font-semibold text-roast-950">Periksa dampak biaya pada angka</h2>
   <p className="mt-2 text-sm leading-7 text-roast-800">Masukkan penawaran sesuai rute dan asumsi yang bisa diuji. Biarkan harga belum tersedia tetap kosong, jangan mengarangnya.</p>
   <Link className="mt-3 inline-block font-semibold text-cherry-800 underline underline-offset-4" href="/business-roastery-v1/calculator">Buka kalkulator HPP dan landed cost →</Link>
  </aside>}
  {lesson.moduleId==='B02'&&<aside className="my-8 border-l-2 border-cherry-700 bg-paper-100 p-5"><h2 className="font-serif text-xl font-semibold text-roast-950">Buktikan pilihan asset-light atau mesin sendiri</h2><Link href="/business-roastery-v1/models" className="mt-3 inline-block font-semibold text-cherry-800 underline underline-offset-4">Bandingkan tiga struktur biaya →</Link></aside>}
  {lesson.moduleId==='B16'&&<aside className="my-10 border-l-2 border-cherry-700 bg-paper-100 p-5"><h2 className="font-serif text-xl font-semibold text-roast-950">Uji apakah kas cukup</h2><Link className="mt-3 inline-block font-semibold text-cherry-800 underline underline-offset-4" href="/business-roastery-v1/cashflow">Buka simulasi kas dan piutang →</Link><p className="mt-3 text-sm text-roast-700">Setelah memahami dampaknya, susun <Link href="/business-roastery-v1/working-capital" className="font-semibold underline underline-offset-4">jadwal 13 minggu</Link> dengan tanggal komitmen nyata.</p></aside>}
  {lesson.order===4&&<section className="my-10 border-y border-paper-300 py-7">
    <h2 className="font-serif text-xl font-semibold text-roast-950">Saat rencana bisnis bertemu kenyataan</h2>
    <p className="mt-2 text-sm leading-7 text-roast-700">Putuskan dahulu, lalu dapatkan informasi tambahan dan evaluasi ulang.</p>
    <Link href={'/business-roastery-v1/practice/'+mod.code.toLowerCase()} className="mt-4 inline-block rounded border border-roast-900 px-4 py-3 text-sm font-semibold text-roast-950">Latihan keputusan modul →</Link>
  </section>}
  <nav aria-label="Pindah pelajaran" className="mt-14 flex justify-between gap-6 border-t border-paper-300 pt-6 text-sm">
   {prev?<Link className="max-w-[47%] text-roast-800 underline underline-offset-4" href={'/business-roastery-v1/'+prev.id}>← {prev.title}</Link>:<Link href="/business-roastery-v1">Daftar modul</Link>}
   {next?<Link className="max-w-[47%] text-right font-semibold text-roast-900 underline underline-offset-4" href={'/business-roastery-v1/'+next.id}>{next.title} →</Link>:<Link href="/business-roastery-v1">Daftar modul →</Link>}
  </nav>
 </article></main>;
}