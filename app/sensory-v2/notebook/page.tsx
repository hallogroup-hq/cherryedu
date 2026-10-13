import Link from 'next/link';
import {notFound} from 'next/navigation';
import {SensoryCvaNotebook} from '@/components/sensory-v2/SensoryCvaNotebook';
export const metadata={title:'Latihan Laporan CVA | CherryEdu',description:'Lembar kerja edukatif empat lensa CVA untuk latihan memilah bukti dan keputusan.'};
export default function NotebookPage(){
 if(process.env.CHERRYEDU_SENSORY_V2_REVIEW!=='enabled')notFound();
 return <main className="min-h-screen bg-paper-50 pb-24"><div className="mx-auto max-w-3xl px-5 pt-12">
  <Link href="/sensory-v2" className="text-sm text-roast-700 underline underline-offset-4">← Q Grader &amp; Sensory Specialist</Link>
  <h1 className="mt-12 font-serif text-3xl font-bold text-roast-950 sm:text-5xl">Belajar menyusun laporan CVA</h1>
  <p className="mt-5 text-sm leading-7 text-roast-700">Bukan menebak satu angka terbaik. Kita memisahkan pengamatan fisik, karakter sensori, kesan mutu, dan informasi yang dibuktikan.</p>
  <SensoryCvaNotebook/>
  <p className="mt-9 text-sm leading-7 text-roast-700">Gunakan <a className="underline underline-offset-4" href="https://sca.coffee/value-assessment" target="_blank" rel="noopener noreferrer">formulir dan standar CVA dari SCA</a> untuk mempelajari dokumen profesi yang sebenarnya. CherryEdu tidak menerbitkan lisensi SCA.</p>
 </div></main>;
}