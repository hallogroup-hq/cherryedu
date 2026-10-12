'use client';
import React, { useState } from 'react';
import { ArrowDown, ArrowUp, RotateCcw } from 'lucide-react';
import { foundationV2Interactions, type Activity, type ClassificationActivity, type SequenceActivity, type ChoiceActivity } from '@/lib/data/foundationV2Interactions';
import { CoffeeFruitAnatomy } from '@/components/CoffeeFruitAnatomy';

const btn = 'px-4 py-2.5 rounded-lg text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cherry-700';
const option = 'w-full text-left p-3 rounded-lg border text-sm leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';

function Wrap({ activity, children }: { activity: Activity; children: React.ReactNode }) {
  return <section className="my-8 overflow-hidden rounded-xl border border-paper-300 bg-white shadow-sm not-prose" aria-label={activity.title}>
    <header className="border-b border-paper-200 px-4 sm:px-6 py-5">
      <span className="font-mono text-[10px] uppercase tracking-widest text-cherry-700 font-bold">Coba sendiri</span>
      <h3 className="mt-1 font-serif text-xl text-roast-950 font-bold">{activity.title}</h3>
      <p className="mt-2 text-sm leading-6 text-roast-700">{activity.intro}</p>
    </header>
    <div className="px-4 sm:px-6 py-5">{children}</div>
  </section>;
}

function Classification({ activity }: { activity: ClassificationActivity }) {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  if (index === activity.prompts.length) {
    return <div role="status" className="space-y-3">
      <p className="text-2xl font-serif font-bold text-roast-950">{score} dari {activity.prompts.length} tepat</p>
      <p className="text-sm text-roast-700">Kamu sudah mencoba seluruh kartu. Jika ada yang kurang tepat, coba baca kembali penjelasan lesson.</p>
      <button className={btn + ' bg-roast-950 text-white'} type="button" onClick={() => { setIndex(0); setChoice(null); setScore(0); }}>
        <RotateCcw size={14} className="inline mr-2" aria-hidden="true"/> Ulangi latihan
      </button>
    </div>;
  }
  const current = activity.prompts[index];
  const correct = choice === current.correct;
  return <div className="space-y-4">
    <p className="font-mono text-xs text-roast-600">Kartu {index + 1} dari {activity.prompts.length}</p>
    <div className="rounded-xl border border-paper-300 bg-paper-100 p-6">
      <p className="font-serif text-xl sm:text-2xl text-roast-950 font-bold">{current.name}</p>
    </div>
    <fieldset disabled={choice !== null} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <legend className="sr-only">Pilih kategori untuk {current.name}</legend>
      {activity.categories.map((cat) => <button type="button" key={cat.id} onClick={() => setChoice(cat.id)}
        aria-pressed={choice === cat.id}
        className={option + (choice === cat.id ? ' border-cherry-700 bg-cherry-50 text-roast-950' : ' border-paper-300 bg-white text-roast-800 hover:bg-paper-100')}>
        {cat.label}
      </button>)}
    </fieldset>
    {choice !== null && <div className="border border-paper-300 rounded-lg bg-paper-100 p-4" role="status" aria-live="polite">
      <p className="font-bold text-sm text-roast-950">{correct ? 'Tepat.' : 'Belum tepat.'}</p>
      <p className="mt-1 text-sm leading-6 text-roast-800">{current.feedback}</p>
      {!correct && <p className="mt-2 text-xs text-roast-700">Kategori yang lebih tepat: {activity.categories.find(c => c.id === current.correct)?.label}.</p>}
      <button className={btn + ' mt-3 bg-roast-950 text-white'} type="button" onClick={() => {
        if (correct) setScore(n => n + 1);
        setChoice(null);
        setIndex(n => n + 1);
      }}>{index === activity.prompts.length - 1 ? 'Lihat hasil' : 'Kartu berikutnya →'}</button>
    </div>}
  </div>;
}

function Sequence({ activity }: { activity: SequenceActivity }) {
  const [order, setOrder] = useState<string[]>(() => [...activity.steps].reverse().map(s => s.id));
  const [checked, setChecked] = useState(false);
  const correct = order.every((id, i) => id === activity.steps[i].id);
  function move(i: number, delta: number) {
    const next = [...order], target = i + delta;
    if (target < 0 || target >= next.length) return;
    [next[i], next[target]] = [next[target], next[i]];
    setOrder(next); setChecked(false);
  }
  return <div className="space-y-3">
    <p className="text-xs text-roast-600">Gunakan tombol naik/turun. Tidak perlu drag-and-drop.</p>
    <ol className="space-y-2">
      {order.map((id, i) => {
        const step = activity.steps.find(s => s.id === id);
        if (!step) return null;
        return <li key={id} className="flex items-center gap-2 border border-paper-300 rounded-lg bg-paper-50 px-3 py-2">
          <span className="font-mono text-xs text-cherry-700 shrink-0">{i + 1}.</span>
          <span className="flex-1 text-sm leading-5 text-roast-900">{step.name}</span>
          <button type="button" disabled={i === 0} aria-label={'Naikkan ' + step.name} onClick={() => move(i, -1)} className="rounded p-2 hover:bg-paper-200 disabled:opacity-25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700"><ArrowUp size={16}/></button>
          <button type="button" disabled={i === order.length - 1} aria-label={'Turunkan ' + step.name} onClick={() => move(i, 1)} className="rounded p-2 hover:bg-paper-200 disabled:opacity-25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700"><ArrowDown size={16}/></button>
        </li>;
      })}
    </ol>
    <button type="button" className={btn + ' bg-roast-950 text-white'} onClick={() => setChecked(true)}>Periksa urutan</button>
    {checked && <div className="bg-paper-100 border border-paper-300 rounded-lg p-4" role="status" aria-live="polite">
      <p className="text-sm font-bold text-roast-950">{correct ? 'Urutannya tepat.' : 'Belum tepat. Coba lagi.'}</p>
      {correct ? <ol className="list-decimal pl-5 mt-2 space-y-1 text-sm text-roast-800">{activity.steps.map(s => <li key={s.id}>{s.why}</li>)}</ol> : <p className="text-xs mt-2 text-roast-700">Petunjuk: lihat perubahan dari kondisi awal menuju tahap yang lebih lanjut.</p>}
    </div>}
  </div>;
}

function Choice({ activity }: { activity: ChoiceActivity }) {
  const [selected, setSelected] = useState<number | null>(null);
  return <div className="space-y-2">
    {activity.options.map((o, i) => <button key={i} disabled={selected !== null} aria-pressed={selected === i} type="button"
      onClick={() => setSelected(i)}
      className={option + (selected === i ? ' bg-cherry-50 border-cherry-700' : ' bg-white border-paper-300 hover:bg-paper-100') + ' text-roast-900'}>
      {String.fromCharCode(65 + i)}. {o.label}
    </button>)}
    {selected !== null && <div className="border border-paper-300 bg-paper-100 rounded-lg p-4 mt-2" role="status" aria-live="polite">
      <p className="text-sm font-bold text-roast-950">{activity.options[selected].correct ? 'Tepat.' : 'Belum tepat.'}</p>
      <p className="text-sm leading-6 mt-1 text-roast-800">{activity.options[selected].feedback}</p>
      <button type="button" className={btn + ' mt-3 border border-paper-300 bg-white text-roast-900'} onClick={() => setSelected(null)}>
        <RotateCcw size={14} className="inline mr-2" aria-hidden="true"/> Coba lagi
      </button>
    </div>}
  </div>;
}

function BrewEY() {
  const [dose, setDose] = useState('20');
  const [beverage, setBeverage] = useState('300');
  const [tds, setTds] = useState('1.35');
  const [show, setShow] = useState(false);
  const d = Number(dose), b = Number(beverage), t = Number(tds);
  const valid = Number.isFinite(d) && Number.isFinite(b) && Number.isFinite(t) && d > 0 && d <= 100 && b > 0 && b <= 2500 && t > 0 && t <= 15;
  const soluble = b * t / 100, ey = soluble / d * 100;
  const inputs = [
    { id: 'dose', label: 'Dosis kopi kering (g)', value: dose, set: setDose },
    { id: 'beverage', label: 'Minuman terkumpul (g)', value: beverage, set: setBeverage },
    { id: 'tds', label: 'TDS minuman (%)', value: tds, set: setTds },
  ];
  return <div className="space-y-4">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {inputs.map(x => <label key={x.id} className="text-xs font-semibold text-roast-800">
        {x.label}
        <input type="number" inputMode="decimal" step="any" value={x.value} onChange={e => { x.set(e.target.value); setShow(false); }}
          className="mt-1 w-full text-base px-3 py-3 border border-paper-300 rounded-lg text-roast-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700"/>
      </label>)}
    </div>
    <button type="button" disabled={!valid} className={btn + ' bg-roast-950 text-white disabled:opacity-30'} onClick={() => setShow(true)}>Hitung estimasi EY</button>
    {show && valid && <div role="status" aria-live="polite" className="bg-paper-100 rounded-lg border border-paper-300 p-4">
      <p className="text-xs text-roast-600">Estimasi extraction yield dari minuman terkumpul</p>
      <p className="font-serif text-3xl font-bold text-roast-950">{ey.toFixed(2).replace('.', ',')}%</p>
      <p className="text-sm mt-2 leading-6 text-roast-800">Zat terlarut di cangkir = {b} × {t / 100} = {soluble.toFixed(2).replace('.', ',')} g. EY ≈ {soluble.toFixed(2).replace('.', ',')} ÷ {d} × 100.</p>
      <p className="text-xs mt-2 text-roast-700 leading-5">Ini perkiraan berdasarkan minuman yang dikumpulkan, bukan pengukuran penuh seluruh zat yang mungkin tertahan di ampas. Angka EY bukan skor kesukaan atau bukti keamanan.</p>
    </div>}
  </div>;
}

export function FoundationLearningActivity({ id }: { id: string }) {
  const activity = foundationV2Interactions[id];
  if (!activity) return null;
  return <Wrap activity={activity}>
    {activity.kind === 'classification' && <Classification activity={activity}/>}
    {activity.kind === 'sequence' && <Sequence activity={activity}/>}
    {activity.kind === 'choice' && <Choice activity={activity}/>}
    {activity.kind === 'calculator' && <BrewEY/>}
    {activity.kind === 'anatomy' && <CoffeeFruitAnatomy/>}
  </Wrap>;
}
