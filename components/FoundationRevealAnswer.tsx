'use client';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChevronDown, ChevronUp } from 'lucide-react';

/** Practice feedback is deliberately closed until a reader chooses to see it. */
export function FoundationRevealAnswer({ text, label='Sudah mencoba? Lihat pembahasan' }:{ text:string; label?:string }){
  const [open,setOpen]=useState(false);
  return <section className="not-prose my-3 rounded-lg border border-paper-300 overflow-hidden bg-white">
    <button type="button" aria-expanded={open} onClick={()=>setOpen(!open)}
      className="w-full flex gap-3 items-center justify-between text-left px-4 py-3 text-sm font-semibold text-roast-950 hover:bg-paper-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700">
      <span>{open?(label==='Sudah mencoba? Lihat pembahasan'?'Sembunyikan pembahasan':'Sembunyikan contoh'):label}</span>
      {open?<ChevronUp size={17} aria-hidden="true"/>:<ChevronDown size={17} aria-hidden="true"/>}
    </button>
    {open&&<div className="px-4 py-4 border-t border-paper-300 bg-paper-50 text-sm text-roast-800 leading-6" role="status">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
        p:({children})=><p className="my-2 leading-6">{children}</p>,
        strong:({children})=><strong className="font-semibold text-roast-950">{children}</strong>,
        h3:({children})=><h3 className="font-bold text-roast-950 mt-4 mb-2">{children}</h3>,
        ul:({children})=><ul className="list-disc pl-5 my-2 space-y-1">{children}</ul>,
        ol:({children})=><ol className="list-decimal pl-5 my-2 space-y-1">{children}</ol>,
        li:({children})=><li className="leading-6">{children}</li>,
      }}>{text}</ReactMarkdown>
    </div>}
  </section>;
}
