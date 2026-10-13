import Link from 'next/link';import {notFound} from 'next/navigation';import {BusinessThirteenWeekCash} from '@/components/business-roastery/BusinessThirteenWeekCash';
export const metadata={title:'Perencanaan Kas 13 Minggu | CherryEdu',description:'Jadwalkan waktu penerimaan dan pembayaran dari kegiatan roastery menggunakan kejadian kas yang dapat diperiksa.'};
export default function BusinessDecisionTool(){
 if(process.env.CHERRYEDU_BUSINESS_ROASTERY_REVIEW!=='enabled')notFound();
 return <main className="min-h-screen bg-paper-50 pb-24"><div className="mx-auto max-w-4xl px-5 pt-12">
  <Link href="/business-roastery-v1" className="text-sm text-roast-700 underline underline-offset-4">← Business Roastery</Link>
  <p className="mt-12 font-mono text-xs font-semibold uppercase tracking-widest text-cherry-800">Simulasi keputusan bisnis</p>
  <h1 className="mt-3 font-serif text-3xl font-bold text-roast-950 sm:text-5xl">Perencanaan Kas 13 Minggu</h1>
  <p className="mt-4 text-sm leading-7 text-roast-700">Jadwalkan waktu penerimaan dan pembayaran dari kegiatan roastery menggunakan kejadian kas yang dapat diperiksa.</p>
  <BusinessThirteenWeekCash/>
 </div></main>;
}