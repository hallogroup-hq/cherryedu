import Link from 'next/link';
import {notFound} from 'next/navigation';
import {SensoryPracticalGuide} from '@/components/sensory-v2/SensoryPracticalGuide';
export const metadata={title:'Panduan Praktik Sensori | CherryEdu',description:'Delapan latihan sensori kopi dengan langkah, catatan dan batas interpretasi.'};
export default function PracticalPage(){
 if(process.env.CHERRYEDU_SENSORY_V2_REVIEW!=='enabled')notFound();
 return <main className="min-h-screen bg-paper-50 pb-24"><div className="mx-auto max-w-3xl px-5 pt-12">
  <Link href="/sensory-v2" className="text-sm text-roast-700 underline underline-offset-4">← Q Grader &amp; Sensory Specialist</Link>
  <p className="mt-12 font-mono text-xs font-semibold uppercase tracking-widest text-cherry-700">Dari konsep menjadi pengamatan</p>
  <h1 className="mt-3 font-serif text-3xl font-bold text-roast-950 sm:text-5xl">Delapan latihan sensori bertahap</h1>
  <p className="mt-6 text-sm leading-7 text-roast-800">Mulailah dari latihan aman dengan bahan pangan umum. Jika tidak memiliki peralatan atau orang kedua, pelajari rancangan dan isi log hipotetis lebih dahulu. Tidak perlu mencoba bahan mencurigakan, minyak esensial, atau larutan kimia demi menuntaskan latihan.</p>
  <SensoryPracticalGuide/>
  <p className="mt-7 text-sm leading-7 text-roast-700">Untuk rincian protokol resmi, rujuk <a className="underline underline-offset-4" href="https://sca.coffee/education/how-to-prepare" target="_blank" rel="noopener noreferrer">panduan persiapan Q Grader dari SCA</a>. Latihan ini adalah kegiatan belajar, bukan assessment lisensi.</p>
 </div></main>;
}