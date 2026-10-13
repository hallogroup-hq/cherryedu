import Link from 'next/link';
import {notFound} from 'next/navigation';
import {BusinessCapstone} from '@/components/business-roastery/BusinessCapstone';
export const metadata={title:"Business Plan yang Bisa Diuji | CherryEdu",description:"Kerangka keputusan lengkap dengan sumber biaya, risiko dan bukti."};
export default function BusinessToolPage(){
 if(process.env.CHERRYEDU_BUSINESS_ROASTERY_REVIEW!=='enabled')notFound();
 return <main className="min-h-screen bg-paper-50 pb-24"><div className="mx-auto max-w-3xl px-5 pt-12">
  <Link href="/business-roastery-v1" className="text-sm text-roast-700 underline underline-offset-4">← Kembali ke Business Roastery</Link>
  <p className="mt-12 font-mono text-xs font-semibold uppercase tracking-widest text-cherry-800">Latihan berbasis bukti</p>
  <h1 className="mt-3 font-serif text-3xl font-bold text-roast-950 sm:text-5xl">Business Plan yang Bisa Diuji</h1>
  <p className="mt-5 text-sm leading-7 text-roast-700">Kerangka keputusan lengkap dengan sumber biaya, risiko dan bukti.</p>
  <BusinessCapstone/>
 </div></main>;
}