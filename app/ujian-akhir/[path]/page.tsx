import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowLeft} from 'lucide-react';
import {FINAL_EXAM_ENABLED,FINAL_EXAM_PATHS,NEXT_SPECIALTY_EXAM_SLUGS,NEXT_SPECIALTY_ENABLED} from '@/lib/finalExamPaths';
import {FinalExamRunner} from '@/components/final-exams/FinalExamRunner';

export const dynamic='force-dynamic';
export const metadata={title:'Ujian Akhir | CherryEdu',robots:{index:false,follow:false}};

export default function FinalExamPage({params}:{params:{path:string}}){
 if(!FINAL_EXAM_ENABLED())notFound();
 if(NEXT_SPECIALTY_EXAM_SLUGS.has(params.path)&&!NEXT_SPECIALTY_ENABLED())notFound();
 const exam=FINAL_EXAM_PATHS.find(p=>p.slug===params.path);
 if(!exam)notFound();
 return <div className="min-h-screen bg-paper-50 pb-24 text-roast-950">
  <div className="sticky top-16 z-30 border-b border-paper-300 bg-paper-50/95 px-4 py-2.5 backdrop-blur-md sm:px-6">
   <div className="mx-auto flex max-w-7xl items-center gap-3">
    <Link href={exam.courseHref} aria-label="Kembali ke silabus" className="shrink-0 rounded p-1.5 text-roast-500 hover:bg-paper-100 hover:text-roast-950"><ArrowLeft size={18}/></Link>
    <div className="min-w-0">
     <span className="block truncate font-mono text-[10px] font-bold uppercase tracking-widest text-roast-500">{exam.title}</span>
     <h1 className="truncate font-serif text-sm font-bold text-roast-950">Ujian Akhir</h1>
    </div>
   </div>
  </div>
  <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
   <FinalExamRunner path={exam.slug} courseHref={exam.courseHref}/>
  </div>
 </div>;
}
