import Link from 'next/link';
import {notFound} from 'next/navigation';
import {MarkdownRenderer} from '@/components/MarkdownRenderer';
import {SENSORY_V2_LESSONS,SENSORY_V2_MODULES} from '@/lib/data/sensoryV2Course';
import {SensoryV2Lab} from '@/components/sensory-v2/SensoryV2Lab';
import {SensoryConceptVisual} from '@/components/sensory-v2/SensoryConceptVisual';
import {SENSORY_V2_DEEP_DIVES} from '@/lib/data/sensoryV2DeepDives';
import {SENSORY_V2_WORKED_EXAMPLES} from '@/lib/data/sensoryV2WorkedExamples';
import {SENSORY_V2_BRIDGES} from '@/lib/data/sensoryV2Bridges';
import {SensoryEvidenceAtlas} from '@/components/sensory-v2/SensoryEvidenceAtlas';

export function generateStaticParams(){return SENSORY_V2_LESSONS.map(l=>({lessonId:l.id}));}
export default function SensoryLessonPage({params}:{params:{lessonId:string}}){
 if(process.env.CHERRYEDU_SENSORY_V2_REVIEW!=='enabled')notFound();
 const index=SENSORY_V2_LESSONS.findIndex(l=>l.id===params.lessonId);
 if(index<0)notFound();
 const l=SENSORY_V2_LESSONS[index];
 const m=SENSORY_V2_MODULES.find(x=>x.code===l.moduleId);
 if(!m)notFound();
 const prev=SENSORY_V2_LESSONS[index-1],next=SENSORY_V2_LESSONS[index+1];
 return <main className="min-h-screen bg-paper-50 pb-24"><article className="mx-auto max-w-3xl px-5 pt-12">
  <nav aria-label="Navigasi pelajaran" className="text-sm text-roast-700">
   <Link className="underline underline-offset-4" href="/sensory-v2">Q Grader &amp; Sensory Specialist</Link>
   <span aria-hidden="true" className="px-2">/</span>{m.code.replace('M','Modul ')}
  </nav>
  <p className="mt-14 font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">{m.title} · Pelajaran {l.order} dari 4</p>
  <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-roast-950 sm:text-5xl">{l.title}</h1>
  {l.order===1&&<section aria-label="Pengantar konsep untuk pembaca baru" className="mt-9 border-y border-paper-300 bg-paper-100 px-5 py-5">
   <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">Mulai dari gambaran besarnya</p>
   <MarkdownRenderer content={SENSORY_V2_BRIDGES[m.code].replace(/^# /,'## ')}/>
  </section>}
  <div className="mt-8 border-t border-paper-300 pt-8"><MarkdownRenderer content={l.content}/></div>
  {l.order===1&&<SensoryConceptVisual moduleCode={m.code}/>} 
  {l.order===1&&<SensoryEvidenceAtlas moduleCode={m.code}/>}  
  {SENSORY_V2_DEEP_DIVES[l.id]&&<div className="mt-9 border-t border-paper-300 pt-6"><MarkdownRenderer content={SENSORY_V2_DEEP_DIVES[l.id]}/></div>}
  {l.order===2&&<SensoryV2Lab moduleCode={m.code}/>} 
  {SENSORY_V2_WORKED_EXAMPLES[l.id]&&<div className="mt-9 border-t border-paper-300 pt-6"><MarkdownRenderer content={SENSORY_V2_WORKED_EXAMPLES[l.id]}/></div>}
  {l.order===4&&<section className="mt-10 border-y border-paper-300 py-8">
   <h2 className="font-serif text-2xl font-semibold text-roast-950">Apa yang berubah setelah bukti baru muncul?</h2>
   <p className="mt-3 text-sm leading-7 text-roast-800">Uji dua situasi dengan informasi yang berkembang. Catat keputusan pertama, kemudian perbaiki setelah fakta berikutnya dibuka.</p>
   <Link className="mt-5 inline-block rounded-md border border-roast-900 px-4 py-3 text-sm font-semibold text-roast-900 hover:bg-paper-100" href={'/sensory-v2/practice/'+m.code.toLowerCase()}>Masuk latihan modul →</Link>
  </section>}
  {(m.code==='M02'||m.code==='M03'||m.code==='M06'||m.code==='M08')&&l.order===3&&<aside className="my-10 border-l-2 border-cherry-700 bg-paper-100 px-5 py-4">
   <p className="text-sm font-semibold text-roast-950">Mau menguji konsep ini dengan alat nyata?</p>
   <p className="mt-2 text-sm leading-7 text-roast-700">Ikuti panduan praktik yang menjelaskan bahan aman, urutan pengujian, cara mencatat bukti dan batas yang tidak boleh disimpulkan.</p>
   <Link href="/sensory-v2/practical" className="mt-3 inline-block text-sm font-semibold text-cherry-800 underline underline-offset-4">Lihat panduan sensori →</Link>
  </aside>}
  {m.code==='M10'&&l.order===1&&<aside className="my-10 border-l-2 border-cherry-700 bg-paper-100 px-5 py-4">
   <p className="text-sm font-semibold text-roast-950">Terapkan semua pengetahuanmu pada satu kasus</p>
   <p className="mt-2 text-sm leading-7 text-roast-700">Kumpulkan physical, descriptive, affective, extrinsic serta tindak lanjut pada lembar kerja yang bisa kamu salin.</p>
   <Link href="/sensory-v2/notebook" className="mt-3 inline-block text-sm font-semibold text-cherry-800 underline underline-offset-4">Isi lembar kerja CVA →</Link>
  </aside>}
  <nav aria-label="Pindah pelajaran" className="mt-16 flex items-start justify-between gap-6 border-t border-paper-300 pt-6 text-sm">
   {prev?<Link href={'/sensory-v2/'+prev.id} className="max-w-[48%] text-roast-800 underline underline-offset-4">← {prev.title}</Link>:<Link href="/sensory-v2" className="underline underline-offset-4">Daftar modul</Link>}
   {next?<Link href={'/sensory-v2/'+next.id} className="max-w-[48%] text-right font-semibold text-roast-900 underline underline-offset-4">{next.title} →</Link>:<Link href="/sensory-v2" className="font-semibold underline underline-offset-4">Daftar modul →</Link>}
  </nav>
 </article></main>;
}
