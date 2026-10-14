import Link from 'next/link';
import {notFound} from 'next/navigation';
import {FINAL_EXAM_ENABLED,FINAL_EXAM_PATHS} from '@/lib/finalExamPaths';
import {FinalExamRunner} from '@/components/final-exams/FinalExamRunner';
export const dynamic='force-dynamic';
export const metadata={title:'Ujian Akhir | CherryEdu',robots:{index:false,follow:false}};
export default function FinalExamPage({params}:{params:{path:string}}){
 if(!FINAL_EXAM_ENABLED())notFound();
 const exam=FINAL_EXAM_PATHS.find(p=>p.slug===params.path);
 if(!exam)notFound();
 return <div className="min-h-screen bg-paper-50 pb-24 text-roast-950">
  <header className="border-b border-paper-300 bg-paper-100/60">
   <div className="mx-auto max-w-5xl px-5 py-8 sm:py-10">
    <Link href="/ujian-akhir" className="text-sm text-cherry-800 underline underline-offset-4">Semua ujian akhir</Link>
    <p className="mt-7 font-mono text-xs font-semibold uppercase tracking-widest text-cherry-800">CherryEdu · Evaluasi pemahaman teori</p>
    <h1 className="mt-3 max-w-4xl font-serif text-3xl font-bold leading-tight sm:text-4xl">Ujian Akhir: {exam.title}</h1>
    <p className="mt-3 text-sm leading-7 text-roast-700">Jawab setiap pertanyaan berdasarkan data yang disediakan. Kamu bisa meninjau kembali pilihanmu sebelum mengumpulkan jawaban.</p>
   </div>
  </header>
  <div className="mx-auto max-w-5xl px-5 pt-8"><FinalExamRunner path={exam.slug} courseHref={exam.courseHref}/></div>
 </div>
}
