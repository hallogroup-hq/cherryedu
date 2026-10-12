'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/** Practice feedback is deliberately closed until a reader chooses to see it. */
export function FoundationRevealAnswer({ text }:{ text:string }){
  const [open,setOpen]=useState(false);
  return <section className="not-prose my-3 rounded-lg border border-paper-300 overflow-hidden bg-white">
    <button type="button" aria-expanded={open} onClick={()=>setOpen(!open)}
      className="w-full flex gap-3 items-center justify-between text-left px-4 py-3 text-sm font-semibold text-roast-950 hover:bg-paper-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700">
      <span>{open?'Sembunyikan pembahasan':'Sudah mencoba? Lihat pembahasan'}</span>
      {open?<ChevronUp size={17} aria-hidden="true"/>:<ChevronDown size={17} aria-hidden="true"/>}
    </button>
    {open&&<div className="px-4 py-4 border-t border-paper-300 bg-paper-50 text-sm text-roast-800 leading-6" role="status">
      {text.split('\n').filter(Boolean).map((line,i)=><p key={i} className="mb-2 last:mb-0">{line.replace(/\*\*/g,'').replace(/^>\s*/,'')}</p>)}
    </div>}
  </section>;
}
