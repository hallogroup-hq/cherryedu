import Link from 'next/link';import {notFound} from 'next/navigation';
import {BUSINESS_ROASTERY_MODULES} from '@/lib/data/businessRoasteryCourse';
import {BusinessDecisionCase} from '@/components/business-roastery/BusinessDecisionCase';
export function generateStaticParams(){return BUSINESS_ROASTERY_MODULES.map(m=>({moduleId:m.code.toLowerCase()}));}
export default function BusinessPractice({params}:{params:{moduleId:string}}){
 if(process.env.CHERRYEDU_BUSINESS_ROASTERY_REVIEW!=='enabled')notFound();
 const m=BUSINESS_ROASTERY_MODULES.find(x=>x.code.toLowerCase()===params.moduleId);
 if(!m)notFound();
 return <main className="min-h-screen bg-paper-50 pb-24"><div className="mx-auto max-w-3xl px-5 pt-12">
  <Link className="text-sm text-roast-700 underline underline-offset-4" href="/business-roastery-v1">← Business Roastery</Link>
  <p className="mt-12 font-mono text-xs font-semibold text-cherry-800">{m.code} · {m.title}</p>
  <h1 className="mt-3 font-serif text-3xl font-bold text-roast-950 sm:text-5xl">Latihan pengambilan keputusan</h1>
  <p className="mt-4 text-sm leading-7 text-roast-700">Tidak ada jawaban otomatis ketika bisnis sungguhan belum memberikan data. Tujuan latihan adalah menjelaskan keputusan dan merevisinya setelah bukti berubah.</p>
  <BusinessDecisionCase moduleId={m.code}/>
 </div></main>;
}