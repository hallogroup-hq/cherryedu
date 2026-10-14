import Link from 'next/link';
import {notFound} from 'next/navigation';
import {MarkdownRenderer} from '@/components/MarkdownRenderer';
import {CuratedLessonFrame} from '@/components/curated/CuratedLessonFrame';
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
 const l=SENSORY_V2_LESSONS.find(l=>l.id===params.lessonId);
 if(!lesson)notFound();
 const m=SENSORY_V2_MODULES.find(m=>m.code===l.moduleId);
 if(!mod)notFound();
 return <CuratedLessonFrame courseTitle="Q Grader & Sensory Specialist" courseHref="/sensory-v2" modules={SENSORY_V2_MODULES} lessons={SENSORY_V2_LESSONS} currentId={l.id} rawMarkdown={l.content}>
  {l.order===1&&<section aria-label="Pengantar konsep" className="mb-8 border-y border-paper-300 bg-paper-100 px-5 py-5">
   <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">Mulai dari gambaran besarnya</p>
   <MarkdownRenderer content={SENSORY_V2_BRIDGES[m.code].replace(/^# /,'## ')}/>
  </section>}
  <MarkdownRenderer content={l.content}/>
  {l.order===1&&<SensoryConceptVisual moduleCode={m.code}/>}
  {l.order===1&&<SensoryEvidenceAtlas moduleCode={m.code}/>}
  {SENSORY_V2_DEEP_DIVES[l.id]&&<div className="mt-9 border-t border-paper-300 pt-6"><MarkdownRenderer content={SENSORY_V2_DEEP_DIVES[l.id]}/></div>}
  {l.order===2&&<SensoryV2Lab moduleCode={m.code}/>}
  {SENSORY_V2_WORKED_EXAMPLES[l.id]&&<div className="mt-9 border-t border-paper-300 pt-6"><MarkdownRenderer content={SENSORY_V2_WORKED_EXAMPLES[l.id]}/></div>}
  {l.order===4&&<section className="mt-10 border-y border-paper-300 py-8">
   <h3 className="font-serif text-2xl font-semibold text-roast-950">Apa yang berubah setelah bukti baru muncul?</h3>
   <p className="mt-3 text-sm leading-7 text-roast-800">Uji dua situasi dengan informasi yang berkembang. Catat keputusan pertama, lalu perbaiki setelah fakta berikutnya dibuka.</p>
   <Link href={'/sensory-v2/practice/'+m.code.toLowerCase()} className="mt-5 inline-block rounded-md border border-roast-900 px-4 py-3 text-sm font-semibold text-roast-900 hover:bg-paper-100">Masuk latihan modul →</Link>
  </section>}
  {['M02','M03','M06','M08'].includes(m.code)&&l.order===3&&<aside className="my-10 border-l-2 border-cherry-700 bg-paper-100 px-5 py-4">
   <p className="text-sm font-semibold text-roast-950">Mau menguji konsep ini dengan alat nyata?</p>
   <p className="mt-2 text-sm leading-7 text-roast-700">Ikuti panduan praktik mengenai bahan aman, urutan pengujian, cara mencatat bukti dan batas kesimpulan.</p>
   <Link href="/sensory-v2/practical" className="mt-3 inline-block text-sm font-semibold text-cherry-800 underline underline-offset-4">Lihat panduan sensori →</Link>
  </aside>}
  {m.code==='M10'&&l.order===1&&<aside className="my-10 border-l-2 border-cherry-700 bg-paper-100 px-5 py-4">
   <p className="text-sm font-semibold text-roast-950">Terapkan semua pengetahuanmu pada satu kasus</p>
   <p className="mt-2 text-sm leading-7 text-roast-700">Kumpulkan physical, descriptive, affective, extrinsic dan tindak lanjut pada lembar kerja.</p>
   <Link href="/sensory-v2/notebook" className="mt-3 inline-block text-sm font-semibold text-cherry-800 underline underline-offset-4">Isi lembar kerja CVA →</Link>
  </aside>}
 </CuratedLessonFrame>;
}
