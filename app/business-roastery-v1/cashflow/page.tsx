import Link from 'next/link';
import {notFound} from 'next/navigation';
import {BusinessCashflowLab} from '@/components/business-roastery/BusinessRoasteryCalculator';
export const metadata={title:"Simulasi Cash Flow dan Piutang | CherryEdu",description:"Mengapa kontrak yang menguntungkan masih dapat membuat kas defisit."};
export default function BusinessToolPage(){
 if(process.env.CHERRYEDU_BUSINESS_ROASTERY_REVIEW!=='enabled')notFound();
 return <main className="min-h-screen bg-paper-50 pb-24"><div className="mx-auto max-w-3xl px-5 pt-12">
  <Link href="/business-roastery-v1" className="text-sm text-roast-700 underline underline-offset-4">← Kembali ke Business Roastery</Link>
  <p className="mt-12 font-mono text-xs font-semibold uppercase tracking-widest text-cherry-800">Latihan berbasis bukti</p>
  <h1 className="mt-3 font-serif text-3xl font-bold text-roast-950 sm:text-5xl">Simulasi Cash Flow dan Piutang</h1>
  <p className="mt-5 text-sm leading-7 text-roast-700">Mengapa kontrak yang menguntungkan masih dapat membuat kas defisit.</p>
  <BusinessCashflowLab/>
 </div></main>;
}