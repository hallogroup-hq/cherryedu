import Link from 'next/link';
import type {ReactNode} from 'react';
import {learnerTitle} from '@/lib/curated/learnerTitle';
export function CuratedPracticeFrame({courseHref,courseTitle,moduleCode,moduleTitle,moduleDescription,children}:{
 courseHref:string;courseTitle:string;moduleCode:string;moduleTitle:string;moduleDescription:string;children:ReactNode;
}){
 return <main className="min-h-screen bg-paper-50 pb-24 text-roast-950">
  <header className="border-b border-paper-300 bg-paper-100/60 py-10 sm:py-14">
   <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <Link href={courseHref} className="text-xs font-semibold text-cherry-800 underline underline-offset-4">Kembali ke {courseTitle}</Link>
    <p className="mt-9 font-mono text-[11px] font-semibold uppercase tracking-widest text-cherry-800">Latihan Modul {moduleCode}</p>
    <h1 className="mt-3 font-serif text-3xl font-black leading-tight tracking-tight sm:text-5xl">{learnerTitle(moduleTitle)}</h1>
    <p className="mt-5 max-w-3xl text-sm leading-7 text-roast-700 sm:text-base">{moduleDescription}</p>
   </div>
  </header>
  <div className="mx-auto max-w-3xl px-4 pt-10 sm:px-6">{children}</div>
 </main>;
}