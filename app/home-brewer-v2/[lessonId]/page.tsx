import Link from 'next/link';
import {notFound} from 'next/navigation';
import {HOME_BREWER_V2_MODULES,HOME_BREWER_V2_LESSONS} from '@/lib/data/homeBrewerV2.generated';
import {MarkdownRenderer} from '@/components/MarkdownRenderer';
import {HomeBrewerConceptVisual} from '@/components/home-brewer-v2/HomeBrewerConceptVisual';
import {HomeBrewerDeepVisual} from '@/components/home-brewer-v2/HomeBrewerDeepVisual';
import {HomeBrewerLab} from '@/components/home-brewer-v2/HomeBrewerLab';

export function generateStaticParams(){return HOME_BREWER_V2_LESSONS.map(l=>({lessonId:l.id}));}
export default function HomeBrewerLesson({params}:{params:{lessonId:string}}){
 if(process.env.CHERRYEDU_HOME_BREWER_V2_REVIEW!=='enabled')notFound();
 const l=HOME_BREWER_V2_LESSONS.find(x=>x.id===params.lessonId);if(!l)notFound();
 const m=HOME_BREWER_V2_MODULES.find(x=>x.code===l.moduleId);if(!m)notFound();
 const index=HOME_BREWER_V2_LESSONS.findIndex(x=>x.id===l.id);
 const prev=HOME_BREWER_V2_LESSONS[index-1],next=HOME_BREWER_V2_LESSONS[index+1];
 const split=l.content.indexOf('\n## ');
 // M02 teaches coffee labels in L01 but particle-size distribution in L03.
 // Place the concept diagram where the underlying mechanism is explained.
 const withConceptDiagram=split>=0&&((l.order===1&&m.code!=='M02')||l.id==='hbv2-m02-l03');
 const deepIds=new Set(['hbv2-m01-l02','hbv2-m02-l01','hbv2-m03-l02','hbv2-m04-l03','hbv2-m05-l03',
 'hbv2-m06-l02','hbv2-m07-l02','hbv2-m08-l03','hbv2-m09-l02','hbv2-m10-l02']);
 const withDeepDiagram=deepIds.has(l.id)&&split>=0;
 return <div className="min-h-screen bg-paper-50 pb-28">
  <div className="mx-auto max-w-3xl px-5 pt-12">
   <nav aria-label="Navigasi course" className="text-sm text-roast-700">
    <Link href="/home-brewer-v2" className="underline underline-offset-4">Home Brewer Specialization</Link>
    <span aria-hidden="true" className="px-2">/</span><span>{m.code.replace('M','Modul ')}</span>
   </nav>
   <p className="mt-14 font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">{m.title} · Pelajaran {l.order} dari 4</p>
   <h1 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight text-roast-950 sm:text-5xl">{l.title}</h1>
   <div className="mt-8 border-t border-paper-300 pt-8">
    {withConceptDiagram||withDeepDiagram?<>
     <MarkdownRenderer content={l.content.slice(0,split).trim()}/>
     {withConceptDiagram&&<HomeBrewerConceptVisual moduleCode={m.code}/>}
     {withDeepDiagram&&<HomeBrewerDeepVisual lessonId={l.id}/>}
     <MarkdownRenderer content={l.content.slice(split+1)}/>
    </>:<MarkdownRenderer content={l.content}/>} 
   </div>
   {l.order===1&&<HomeBrewerLab moduleCode={m.code}/>}
   {l.order===4&&<div className="mt-10 border-y border-paper-300 py-7">
     <h2 className="font-serif text-xl font-semibold text-roast-950">Bisa diterapkan saat resep berubah?</h2>
     <p className="mt-2 text-sm leading-7 text-roast-800">Buktikan melalui dua kasus baru dan dua pertanyaan diagnosis. Kamu akan menerima informasi baru setelah membuat keputusan pertama.</p>
     <Link href={'/home-brewer-v2/practice/'+m.code.toLowerCase()}
      className="mt-4 inline-block rounded-lg border border-roast-900 px-4 py-3 text-sm font-semibold text-roast-900 hover:bg-paper-100">
      Kerjakan latihan {m.code.replace('M','Modul ')} →
     </Link>
   </div>}
   <nav aria-label="Pindah pelajaran" className="mt-16 flex justify-between gap-4 border-t border-paper-300 pt-6 text-sm">
    {prev?<Link className="max-w-[48%] text-roast-800 underline underline-offset-4" href={'/home-brewer-v2/'+prev.id}>← {prev.title}</Link>:<Link href="/home-brewer-v2" className="underline underline-offset-4">Daftar modul</Link>}
    {next?<Link className="max-w-[48%] text-right font-semibold text-roast-900 underline underline-offset-4" href={'/home-brewer-v2/'+next.id}>{next.title} →</Link>:<Link href="/home-brewer-v2" className="font-semibold underline underline-offset-4">Kembali ke daftar →</Link>}
   </nav>
  </div>
 </div>;
}
