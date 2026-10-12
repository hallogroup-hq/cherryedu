import Link from 'next/link';
import {notFound} from 'next/navigation';
import {HOME_BREWER_V2_MODULES} from '@/lib/data/homeBrewerV2.generated';
import {HomeBrewerChangingCases,HomeBrewerDiagnosticQuiz} from '@/components/home-brewer-v2/HomeBrewerPractice';

export function generateStaticParams(){return HOME_BREWER_V2_MODULES.map(x=>({moduleId:x.code.toLowerCase()}));}
export default function HomeBrewerV2Practice({params}:{params:{moduleId:string}}){
 if(process.env.CHERRYEDU_HOME_BREWER_V2_REVIEW!=='enabled')notFound();
 const m=HOME_BREWER_V2_MODULES.find(x=>x.code.toLowerCase()===params.moduleId);
 if(!m)notFound();
 return <main className="min-h-screen bg-paper-50 px-4 pb-24 pt-12 text-roast-950 sm:px-6">
  <div className="mx-auto max-w-3xl">
   <Link href="/home-brewer-v2" className="text-sm text-roast-800 underline underline-offset-4">← Semua modul</Link>
   <p className="mt-12 font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">{m.code.replace('HB','Modul ')}</p>
   <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-4xl">{m.title}</h1>
   <p className="mb-12 mt-4 text-sm leading-7 text-roast-800">{m.description}</p>
   <HomeBrewerChangingCases moduleCode={m.code}/>
   <HomeBrewerDiagnosticQuiz moduleCode={m.code}/>
   <div className="mt-12 border-t border-paper-300 pt-6">
    <p className="text-xs leading-6 text-roast-700">Jawaban hanya ada selama sesi halaman ini. Belum disimpan ke akun, belum dinilai secara resmi, dan tidak memberi sertifikat praktik. Penilaian akhir materi dilakukan oleh pemilik program sebelum rilis.</p>
   </div>
  </div>
 </main>;
}