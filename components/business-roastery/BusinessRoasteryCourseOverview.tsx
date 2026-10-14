'use client';
import {useState} from 'react';
import Link from 'next/link';
import {ChevronDown,ChevronRight,Clock,Layers,BookOpen,ArrowRight} from 'lucide-react';
import {BUSINESS_ROASTERY_MODULES as modules,BUSINESS_ROASTERY_LESSONS as lessons} from '@/lib/data/businessRoasteryCourse';

const first='/business-roastery-v1/'+lessons[0].id;
export function BusinessRoasteryCourseOverview(){
 const [expanded,setExpanded]=useState<string[]>([modules[0].code]);
 const toggle=(code:string)=>setExpanded(v=>v.includes(code)?v.filter(x=>x!==code):[...v,code]);
 const minutes=lessons.reduce((sum,l)=>sum+Math.max(12,Math.round(l.content.split(/\s+/).length/75)),0);
 return <div className="pb-24 text-roast-950">
  <header className="border-b border-paper-300 bg-paper-100/60 py-10 sm:py-14">
   <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <Link href="/paths" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-roast-600 hover:text-roast-950">← Kembali ke Katalog Kurikulum</Link>
    <div className="mt-7 grid items-start gap-8 md:grid-cols-12">
     <div className="md:col-span-8">
      <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-roast-700"><span className="font-bold uppercase tracking-widest text-cherry-800">Spesialisasi Bisnis Kopi</span><span>•</span><span>Tingkat: <strong className="text-roast-950">Pemula hingga pengelola</strong></span></div>
      <h1 className="mt-4 max-w-2xl font-serif text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl">Merancang sampai Menjalankan Bisnis Roastery</h1>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-roast-700">Pelajari cara membangun bisnis roasting kopi di Indonesia, mulai dari memilih model usaha dan pemasok hingga produksi, penghitungan biaya, penjualan, arus kas, dan pengantar ekspor. Setiap topik diajarkan sebelum latihan pengambilan keputusan.</p>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs text-roast-600">
       <span className="inline-flex items-center gap-2"><Clock size={15} className="text-cherry-700"/>{Math.ceil(minutes/60)} jam estimasi belajar</span>
       <span className="inline-flex items-center gap-2"><Layers size={15} className="text-cherry-700"/>{modules.length} modul</span>
       <span className="inline-flex items-center gap-2"><BookOpen size={15} className="text-cherry-700"/>{lessons.length} pelajaran</span>
      </div>
     </div>
     <div className="border border-paper-300 bg-paper-50 p-5 shadow-xs md:col-span-4">
      <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=900&auto=format&fit=crop&q=80" className="h-36 w-full object-cover" alt="Biji kopi sangrai untuk pembelajaran usaha roastery"/>
      <h2 className="mt-4 text-sm font-bold">Belajar sesuai urutan</h2>
      <p className="mt-2 text-xs leading-6 text-roast-700">Mulai dari memahami bisnisnya. Peralatan hitung dan studi kasus dibuka saat konsep dasarnya sudah dijelaskan. Catatan latihan dan progres pada kelas ini belum tersimpan ke akun.</p>
      <Link href={first} className="mt-4 flex items-center justify-center gap-2 bg-roast-950 px-4 py-3 text-xs font-bold text-white hover:bg-cherry-800">Baca Materi Pertama <ArrowRight size={15}/></Link>
     </div>
    </div>
   </div>
  </header>
  <div className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 lg:px-8">
   <div className="mb-6 flex items-end justify-between border-b border-paper-300 pb-5"><div><p className="font-mono text-[11px] font-bold uppercase tracking-widest text-roast-600">Daftar Silabus Lengkap</p><h2 className="mt-2 font-serif text-2xl font-black sm:text-3xl">Daftar Modul dan Pelajaran</h2></div><span className="font-mono text-xs text-roast-600">{modules.length} Modul</span></div>
   <div className="space-y-4">{modules.map((m,i)=>{const items=lessons.filter(l=>l.moduleId===m.code);const open=expanded.includes(m.code);return <section key={m.code} className="border border-paper-300 bg-paper-50">
    <button type="button" aria-expanded={open} aria-controls={'br-module-'+m.code} onClick={()=>toggle(m.code)} className="flex w-full items-center gap-4 px-4 py-5 text-left hover:bg-paper-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-800 sm:px-6">
     <span className="shrink-0 border border-paper-300 bg-paper-200 px-2.5 py-1 font-mono text-xs font-bold">{String(i+1).padStart(2,'0')}</span>
     <span className="min-w-0 flex-1"><span className="block font-serif text-lg font-bold sm:text-xl">{m.title}</span><span className="mt-1 block text-xs leading-6 text-roast-700 sm:text-sm">{m.description}</span></span>
     <span className="hidden shrink-0 font-mono text-xs text-roast-600 sm:inline">{items.length} Pelajaran</span>{open?<ChevronDown size={17}/>:<ChevronRight size={17}/>}
    </button>
    {open&&<div id={'br-module-'+m.code} className="border-t border-paper-300 px-4 pb-4 sm:px-5"><ol className="space-y-2 pt-3">{items.map(l=><li key={l.id}><Link href={'/business-roastery-v1/'+l.id} className="group flex items-center gap-3 border border-paper-200 bg-paper-100/60 px-3 py-3 hover:border-paper-400 hover:bg-white">
     <span aria-hidden="true" className="h-3 w-3 shrink-0 border border-paper-400 bg-white"/>
     <span className="min-w-0 flex-1"><span className="block font-serif text-sm font-bold group-hover:text-cherry-800">{l.title}</span><span className="mt-1 block font-mono text-[10px] text-roast-600">Materi pelajaran · {Math.max(12,Math.round(l.content.split(/\s+/).length/75))} menit</span></span><span className="shrink-0 border border-paper-300 bg-paper-50 px-3 py-2 font-mono text-[10px] font-bold uppercase">Buka Materi →</span></Link></li>)}</ol>
    <p className="mt-4 text-xs text-roast-700">Selesai membaca empat pelajaran? <Link href={'/business-roastery-v1/practice/'+m.code.toLowerCase()} className="font-bold text-cherry-800 underline underline-offset-4">Coba latihan keputusan modul</Link>.</p>
    </div>}
   </section>})}</div>
   <section className="mt-12 border-t border-paper-300 pt-7"><h2 className="font-serif text-2xl font-bold">Alat untuk menerapkan materi</h2><p className="mt-2 max-w-2xl text-sm leading-7 text-roast-700">Gunakan setelah mempelajari konsep biaya, kapasitas, dan arus kas. Simulasi bukan pengganti penawaran harga nyata.</p><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[
    ['/business-roastery-v1/calculator','HPP, margin dan BEP'],['/business-roastery-v1/models','Perbandingan model usaha'],['/business-roastery-v1/cashflow','Simulasi kas dan piutang'],['/business-roastery-v1/working-capital','Rencana kas 13 minggu'],['/business-roastery-v1/plan','Rencana bisnis']
   ].map(([href,label])=><Link key={href} href={href} className="border border-paper-300 bg-paper-100 p-4 text-sm font-semibold hover:border-roast-800">{label} →</Link>)}</div></section>
  </div>
 </div>;
}
