'use client';

import React, { useId, useState } from 'react';

// Conceptual schematic, not to scale. Pulp/mucilage are continuous components
// of fruit tissue, illustrated separately only for processing comprehension.
const layers = [
  { id: 'skin', name: 'Kulit luar · exocarp', color: '#982C35', explanation: 'Pelindung terluar buah. Kulit umumnya dilepaskan saat depulping.' },
  { id: 'pulp', name: 'Daging buah · pulp', color: '#BD6B3C', explanation: 'Jaringan berdaging di bawah kulit. Pada natural, bagian ini ikut dikeringkan bersama buah.' },
  { id: 'mucilage', name: 'Lendir buah · mucilage', color: '#D5B66C', explanation: 'Jaringan berlendir yang berkaitan dengan mesocarp. Sisa mucilage memengaruhi cara penanganan pascapanen.' },
  { id: 'parchment', name: 'Kulit tanduk · endocarp', color: '#A58C6B', explanation: 'Lapisan keras pelindung biji yang sering masih dipertahankan saat pengeringan.' },
  { id: 'silverskin', name: 'Kulit ari · silverskin', color: '#D1CCB6', explanation: 'Selaput tipis pada biji; sebagian dapat terlepas sebagai chaff ketika disangrai.' },
  { id: 'seed', name: 'Biji · seed', color: '#64765B', explanation: 'Bagian yang diolah menjadi green coffee dan kemudian roasted coffee. Buah biasanya memiliki dua biji.' },
];

export function CoffeeFruitAnatomy() {
  const [active, setActive] = useState(0);
  const baseId = useId().replace(/:/g, '');
  return <div className="space-y-4">
    <figure className="rounded-xl border border-paper-300 bg-paper-50 p-3 sm:p-4">
      <svg role="img" aria-labelledby={baseId + '-title ' + baseId + '-desc'} viewBox="0 0 520 330"
        className="w-full max-h-[360px]">
        <title id={baseId + '-title'}>Skema penampang melintang buah kopi</title>
        <desc id={baseId + '-desc'}>Dari luar ke dalam terdapat kulit luar, pulp, mucilage, parchment, silverskin, dan dua biji. Ketebalan lapisan pada gambar bukan ukuran biologis.</desc>
        <ellipse cx="260" cy="164" rx="185" ry="153" fill="#982C35" stroke={active === 0 ? "#28170D" : "none"} strokeWidth="5"/>
        <ellipse cx="260" cy="164" rx="169" ry="137" fill="#BD6B3C" stroke={active === 1 ? "#28170D" : "none"} strokeWidth="4"/>
        <ellipse cx="260" cy="164" rx="149" ry="119" fill="#D5B66C" stroke={active === 2 ? "#28170D" : "none"} strokeWidth="4"/>
        <ellipse cx="260" cy="164" rx="128" ry="101" fill="#A58C6B" stroke={active === 3 ? "#28170D" : "none"} strokeWidth="4"/>
        <ellipse cx="260" cy="164" rx="113" ry="88" fill="#D1CCB6" stroke={active === 4 ? "#28170D" : "none"} strokeWidth="4"/>
        <ellipse cx="226" cy="164" rx="52" ry="71" fill="#64765B" stroke={active === 5 ? "#28170D" : "#40523C"} strokeWidth={active === 5 ? "5" : "2"}/>
        <ellipse cx="296" cy="164" rx="52" ry="71" fill="#64765B" stroke={active === 5 ? "#28170D" : "#40523C"} strokeWidth={active === 5 ? "5" : "2"}/>
        <path d="M 250 111 Q 225 163 251 215" fill="none" stroke="#CBD6BE" strokeWidth="2"/>
        <path d="M 276 111 Q 301 163 275 215" fill="none" stroke="#CBD6BE" strokeWidth="2"/>
        <circle cx="260" cy="164" r="3.5" fill="#CBD6BE"/>
      </svg>
      <figcaption className="mt-1 text-center text-xs leading-5 text-roast-600">
        Skema pembelajaran, tidak berskala. Pulp dan mucilage disederhanakan sebagai zona terpisah.
      </figcaption>
    </figure>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2" role="group" aria-label="Pilih bagian buah yang ingin dipelajari">
      {layers.map((layer, i) => <button key={layer.id} type="button" aria-pressed={active === i}
        onClick={() => setActive(i)}
        className={'rounded-lg border p-3 text-left text-xs leading-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700 ' +
          (active === i ? 'border-cherry-700 bg-cherry-50 text-roast-950' : 'border-paper-300 bg-white text-roast-800 hover:bg-paper-100')}>
        <span className="inline-block w-2.5 h-2.5 rounded-full mr-2" style={{backgroundColor: layer.color}} aria-hidden="true"/>
        {layer.name}
      </button>)}
    </div>
    <div className="rounded-lg border border-paper-300 bg-paper-100 p-4" role="status" aria-live="polite">
      <p className="font-bold text-sm text-roast-950">{layers[active].name}</p>
      <p className="mt-1 text-sm leading-6 text-roast-800">{layers[active].explanation}</p>
    </div>
  </div>;
}
