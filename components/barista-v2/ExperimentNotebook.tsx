'use client';

import React, { useState } from 'react';

type TrialMode = 'example' | 'observed';
type Draft = {
  question: string;
  hypothesis: string;
  prediction: string;
  independent: string;
  controls: string;
  measured: string;
  observations: string;
  interpretation: string;
  next: string;
};

const initial: Draft = {
  question: '',
  hypothesis: '',
  prediction: '',
  independent: '',
  controls: '',
  measured: '',
  observations: '',
  interpretation: '',
  next: '',
};

const fieldClass = 'mt-1 w-full rounded-lg border border-paper-300 bg-white px-3 py-3 text-sm leading-6 text-roast-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';
const buttonClass = 'rounded-lg px-4 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-cherry-700';

const sample = [
  { trial: 'A', coffee: 15, water: 225, output: 180, duration: '3:00' },
  { trial: 'B', coffee: 15, water: 240, output: 195, duration: '3:25' },
] as const;

export function ExperimentNotebook({ title = 'Laboratorium Pertanyaan Kopi' }: { title?: string }) {
  const [draft, setDraft] = useState<Draft>(initial);
  const [mode, setMode] = useState<TrialMode>('example');
  const [stage, setStage] = useState<1 | 2 | 3>(1);
  const [revealed, setRevealed] = useState(false);
  const [copyMessage, setCopyMessage] = useState('');

  function update(key: keyof Draft, value: string) {
    setDraft(prev => ({ ...prev, [key]: value }));
    setRevealed(false);
    setCopyMessage('');
  }

  const readyPlan = [draft.question, draft.hypothesis, draft.prediction, draft.independent, draft.controls, draft.measured]
    .every(value => value.trim().length >= 12);
  const readyInterpretation = [draft.interpretation, draft.next].every(value => value.trim().length >= 18);
  const realObservationReady = mode === 'example' || draft.observations.trim().length >= 18;

  async function copy() {
    const result = [
      'Catatan eksperimen CherryEdu — ' + title,
      'Sumber data: ' + (mode === 'example' ? 'SIMULASI FIKTIF, bukan percobaan nyata' : 'Observasi yang diinput peserta, belum diverifikasi'),
      ...Object.entries(draft).map(([key, value]) => key + ': ' + (value || '[tidak diisi]')),
      mode === 'example' ? 'Dataset: A 15 g / 225 g / keluaran 180 g / 3:00; B 15 g / 240 g / keluaran 195 g / 3:25. Tidak ada data TDS atau rasa.' : '',
    ].join('\n\n');
    try {
      await navigator.clipboard.writeText(result);
      setCopyMessage('Catatan tersalin. Simpan sendiri di tempat yang kamu pilih.');
    } catch {
      setCopyMessage('Browser menolak clipboard. Salin jawabanmu secara manual sebelum meninggalkan halaman.');
    }
  }

  const input = (key: keyof Draft, label: string, hint: string, rows = 2) => (
    <label className="block space-y-1" key={key}>
      <span className="block text-sm font-semibold text-roast-950">{label}</span>
      <span className="block text-xs leading-5 text-roast-700">{hint}</span>
      <textarea className={fieldClass} rows={rows} maxLength={1800} value={draft[key]}
        onChange={e => update(key, e.target.value)} aria-label={label} />
    </label>
  );

  return (
    <section aria-label={title} className="not-prose mx-auto my-8 max-w-3xl space-y-5 rounded-xl border border-paper-300 bg-white p-4 sm:p-6">
      <div className="space-y-2">
        <h3 className="font-serif text-xl font-bold text-roast-950">{title}</h3>
        <p className="text-sm leading-6 text-roast-700">
          Penasaran itu awalnya. Ubah pertanyaanmu menjadi hipotesis, uji yang terkontrol, lalu evaluasi hasilnya.
          Tidak ada satu resep wajib dan hasil yang meleset dari prediksi bukan kegagalan belajar.
        </p>
        <p role="status" className="text-xs leading-5 text-roast-700">
          Langkah {stage} dari 3. Catatan hanya tersimpan selama halaman terbuka; tidak tersimpan otomatis ke akun.
        </p>
      </div>

      {stage === 1 && <div className="space-y-4">
        <h4 className="font-semibold text-roast-950">1. Pertanyaan dan rancangan</h4>
        {input('question', 'Apa pertanyaanmu?', 'Buat pertanyaan yang bisa diamati atau diuji.')}
        {input('hypothesis', 'Apa dugaan penyebabnya?', 'Jelaskan mekanisme yang mungkin, bukan jawaban pasti.')}
        {input('prediction', 'Apa yang kamu prediksi?', 'Tuliskan hasil yang bisa mendukung atau bertentangan dengan hipotesismu.')}
        {input('independent', 'Apa variabel yang sengaja kamu ubah?', 'Tuliskan beserta satuan yang sesuai bila berlaku.')}
        {input('controls', 'Apa yang diusahakan tetap sama?', 'Contoh: kopi, dosis, alat, grinder, pola tuang; jelaskan keterbatasannya.')}
        {input('measured', 'Apa hasil yang perlu diamati atau diukur?', 'Contoh: massa minuman, waktu, TDS jika benar-benar ada alatnya, atau sensori bila dicicipi.')}
        <button type="button" className={buttonClass + ' bg-roast-950 text-white disabled:opacity-40'}
          disabled={!readyPlan} onClick={() => setStage(2)}>Lanjut ke bukti</button>
      </div>}

      {stage === 2 && <div className="space-y-4">
        <h4 className="font-semibold text-roast-950">2. Data dan batas observasi</h4>
        <fieldset className="space-y-2">
          <legend className="text-sm font-semibold text-roast-950">Dari mana datamu?</legend>
          <label className="flex items-start gap-2 text-sm text-roast-800">
            <input type="radio" name="barista-experiment-mode" checked={mode === 'example'}
              onChange={() => {setMode('example'); setRevealed(false);}} />
            Gunakan dataset simulasi. Saya belum mengukur atau mencicipi sendiri.
          </label>
          <label className="flex items-start gap-2 text-sm text-roast-800">
            <input type="radio" name="barista-experiment-mode" checked={mode === 'observed'}
              onChange={() => {setMode('observed'); setRevealed(false);}} />
            Saya memiliki pengamatan nyata yang dicatat sendiri secara aman.
          </label>
        </fieldset>
        {mode === 'example' ? <div className="space-y-3">
          <p className="text-sm font-semibold text-roast-900">Dataset fiktif: tidak ada data rasa atau TDS.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead><tr className="border-b border-paper-300">
                <th scope="col" className="p-2">Trial</th><th scope="col" className="p-2">Kopi</th>
                <th scope="col" className="p-2">Air masuk</th><th scope="col" className="p-2">Minuman keluar</th>
                <th scope="col" className="p-2">Waktu</th>
              </tr></thead>
              <tbody>{sample.map(row => <tr key={row.trial} className="border-b border-paper-200">
                <td className="p-2">{row.trial}</td><td className="p-2">{row.coffee} g</td>
                <td className="p-2">{row.water} g</td><td className="p-2">{row.output} g</td>
                <td className="p-2">{row.duration}</td>
              </tr>)}</tbody>
            </table>
          </div>
          <p className="text-xs leading-5 text-roast-700">Hanya boleh menyimpulkan data yang tercatat. Rasio dan durasi tidak membuktikan hasil rasa atau EY.</p>
        </div> : input('observations', 'Apa yang benar-benar kamu amati?', 'Tuliskan massa, waktu, kondisi alat dan sensori hanya jika benar-benar dicicipi. Data ini tidak diverifikasi oleh aplikasi.', 4)}
        <div className="flex flex-wrap gap-2">
          <button type="button" className={buttonClass + ' border border-paper-300'} onClick={() => setStage(1)}>Kembali ke rancangan</button>
          <button type="button" className={buttonClass + ' bg-roast-950 text-white disabled:opacity-40'}
            disabled={!realObservationReady} onClick={() => setStage(3)}>Lanjut ke interpretasi</button>
        </div>
      </div>}

      {stage === 3 && <div className="space-y-4">
        <h4 className="font-semibold text-roast-950">3. Apa yang kamu pelajari?</h4>
        {input('interpretation', 'Apa yang bisa dan belum bisa disimpulkan?', 'Bandingkan dengan prediksimu; sebutkan kemungkinan penjelasan lain.', 4)}
        {input('next', 'Percobaan aman apa yang kamu usulkan berikutnya?', 'Jelaskan alasan, variabel, dan batas yang harus dihormati.', 3)}
        <div className="flex flex-wrap gap-2">
          <button type="button" className={buttonClass + ' border border-paper-300'} onClick={() => {setStage(2);setRevealed(false);}}>Kembali ke data</button>
          <button type="button" disabled={!readyPlan || !readyInterpretation || !realObservationReady}
            className={buttonClass + ' bg-roast-950 text-white disabled:opacity-40'} onClick={() => setRevealed(true)}>
            Bandingkan dengan contoh penalaran
          </button>
          <button type="button" className={buttonClass + ' border border-paper-300'} onClick={copy}>Salin catatan</button>
        </div>
        <p aria-live="polite" className="text-xs text-roast-700">{copyMessage}</p>
        {revealed && <div role="status" aria-live="polite" className="space-y-2 rounded-lg border border-paper-300 bg-paper-100 p-4">
          <h5 className="font-semibold text-roast-950">Contoh cara membaca bukti</h5>
          {mode === 'example' ? <p className="text-sm leading-6 text-roast-800">
            Pada dataset simulasi, trial B memakai air masuk dan menghasilkan massa minuman lebih banyak;
            waktunya juga lebih panjang. Kita belum punya TDS, data sensori, atau informasi cukup untuk
            memastikan sebab tunggal. Uji berikutnya sebaiknya mengecek variabel yang tidak tercatat,
            menyamakan prosedur, dan mencatat outcome yang memang ingin dibandingkan.
          </p> : <p className="text-sm leading-6 text-roast-800">
            Untuk pengamatan nyata, periksa apakah prediksi diuji oleh data yang relevan; apakah kondisi
            pembanding cukup terkontrol; apakah ada variabel pengganggu atau variasi pengukuran;
            serta apakah hasil yang bertentangan menuntut percobaan lanjutan. Tidak ada kesimpulan otomatis
            atas rasa atau keamanan dari teks yang kamu masukkan.
          </p>}
          <p className="text-xs leading-5 text-roast-700">
            Ini contoh penalaran untuk data simulasi, bukan evaluasi otomatis terhadap jawabanmu
            atau klaim bahwa pengamatan nyata milikmu telah diverifikasi. Beberapa hipotesis yang masuk akal bisa berbeda.
          </p>
        </div>}
      </div>}
    </section>
  );
}
