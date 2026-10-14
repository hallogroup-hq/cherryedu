import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowRight,BookOpen,GraduationCap,Layers3} from 'lucide-react';
import {FINAL_EXAM_ENABLED,FINAL_EXAM_PATHS} from '@/lib/finalExamPaths';

export const dynamic='force-dynamic';
export const metadata={title:'Ujian Akhir | CherryEdu',robots:{index:false,follow:false}};

export default function FinalExamsIndex(){
 if(!FINAL_EXAM_ENABLED())notFound();
 return <div className="min-h-screen bg-paper-50 pb-24 text-roast-950">
  <header className="border-b border-paper-300 bg-paper-100/60 py-10 sm:py-14">
   <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <Link href="/paths" className="font-mono text-[11px] uppercase tracking-widest text-roast-600 hover:text-roast-950">← Kembali ke Katalog Kurikulum</Link>
    <div className="mt-8 grid gap-8 md:grid-cols-12">
     <div className="md:col-span-8">
      <p className="font-mono text-xs font-bold uppercase tracking-widest text-cherry-800">CherryEdu · Evaluasi Pembelajaran</p>
      <h1 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">Ujian Akhir</h1>
      <p className="mt-5 max-w-3xl text-sm leading-7 text-roast-700 sm:text-base">Pilih jalur yang sudah kamu pelajari. Kerjakan pertanyaan lintas modul untuk menguji pemahaman dan keputusan berdasarkan bukti.</p>
      <div className="mt-7 flex flex-wrap gap-6 font-mono text-xs text-roast-700">
       <span className="inline-flex items-center gap-2"><Layers3 size={16} className="text-cherry-800"/>6 Jalur Pembelajaran</span>
       <span className="inline-flex items-center gap-2"><GraduationCap size={16} className="text-cherry-800"/>Evaluasi Pemahaman</span>
      </div>
     </div>
     <div className="md:col-span-4">
      <div className="border border-paper-300 bg-paper-50 p-6">
       <h2 className="text-sm font-bold text-roast-950">Persiapkan sebelum memulai</h2>
       <p className="mt-3 text-sm leading-7 text-roast-700">Baca materi, selesaikan latihan modul, lalu gunakan ujian akhir untuk memeriksa pemahamanmu. Pembahasan muncul setelah jawaban dikumpulkan.</p>
       <Link href="/paths" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-roast-950 px-4 py-3 text-sm font-semibold text-white hover:bg-cherry-800"><BookOpen size={16}/>Lihat Materi</Link>
      </div>
     </div>
    </div>
   </div>
  </header>
  <section aria-labelledby="all-final-exams" className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 lg:px-8">
   <div className="mb-6 flex items-end justify-between gap-4 border-b border-paper-300 pb-5">
    <div><p className="font-mono text-xs font-semibold uppercase tracking-widest text-roast-600">Daftar Ujian Lengkap</p><h2 id="all-final-exams" className="mt-2 font-serif text-2xl font-black sm:text-3xl">Pilih Ujian Akhir</h2></div>
    <span className="font-mono text-xs text-roast-600">6 Jalur</span>
   </div>
   <div className="space-y-4">
    {FINAL_EXAM_PATHS.map((p,i)=><article key={p.slug} className="flex flex-col gap-4 border border-paper-300 bg-paper-50 p-5 shadow-xs sm:flex-row sm:items-center sm:justify-between">
     <div className="flex min-w-0 gap-4">
      <span className="h-fit shrink-0 border border-paper-300 bg-paper-100 px-2.5 py-1 font-mono text-xs font-bold">{String(i+1).padStart(2,'0')}</span>
      <div><h3 className="font-serif text-lg font-bold text-roast-950 sm:text-xl">{p.title}</h3><p className="mt-2 font-mono text-xs text-roast-700">{p.count} Pertanyaan · Ujian Akhir</p></div>
     </div>
     <div className="flex shrink-0 items-center justify-end gap-3">
      <Link href={p.courseHref} className="text-sm font-medium text-cherry-800 underline underline-offset-4">Lihat Silabus</Link>
      <Link href={'/ujian-akhir/'+p.slug} className="inline-flex items-center gap-2 border border-roast-900 bg-roast-950 px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-wide text-white hover:bg-cherry-800">Mulai Ujian <ArrowRight size={15}/></Link>
     </div>
    </article>)}
   </div>
  </section>
 </div>;
}
