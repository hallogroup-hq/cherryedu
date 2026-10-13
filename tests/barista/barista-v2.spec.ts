import {expect,test} from '@playwright/test';

const modules = ['M01','M02','M03','M04','M05','M06','M07','M08','M09','M10','M11','M12'];
const counts = [6,5,6,7,6,5,5,5,5,5,8,5];

test('68 lesson links are available under 12 clear, learner-facing modules',async ({page})=>{
 await page.goto('/barista-v2');
 await expect(page.getByRole('heading',{level:1})).toContainText('Barista Specialization');
 await expect(page.locator('section[aria-labelledby^="course-"]:not([aria-labelledby="course-modules"])')).toHaveCount(12);
 await expect(page.locator('a[href^="/barista-v2/bv2-"]')).toHaveCount(68);
 const visible = await page.locator('main').innerText();
 expect(visible).not.toMatch(/DRAFT REVIEW|Beta Publik|review build|sertifikasi profesional kompetensi bar|QA internal/i);
});

for(let m=1;m<=12;m++){
 test('module '+String(m).padStart(2,'0')+' lessons render with no internal copy or credential claims',async ({page})=>{
   for(let i=1;i<=counts[m-1];i++){
     const id='bv2-m'+String(m).padStart(2,'0')+'-l'+String(i).padStart(2,'0');
     const response=await page.goto('/barista-v2/'+id,{waitUntil:'domcontentloaded'});
     expect(response?.status(),id).toBe(200);
     await expect(page.getByRole('heading',{level:1})).toBeVisible();
     const visible=await page.locator('main').innerText();
     expect(visible,id).toMatch(/eksperimen|percobaan/i);
     expect(visible,id).not.toMatch(/DRAFT REVIEW|Beta Publik|review build|editorial appendix|Sertifikasi Profesional Kompetensi Bar/i);
     expect(visible,id).not.toMatch(/\[ACTIVITY:|\[VISUAL:|\[DIAGRAM:/i);
     await expect(page.locator('button').filter({hasText:/Tandai Selesai|Terbitkan Sertifikat/i})).toHaveCount(0);
   }
 });
}

test('scenario feedback is hidden before an attempt and distinguishes safety decisions',async ({page})=>{
 await page.goto('/barista-v2/bv2-m01-l01');
 const lab=page.getByRole('region',{name:'Laboratorium konsep barista'});
 await expect(lab).toBeVisible();
 await expect(lab.getByRole('button',{name:'Periksa alasan pilihanku'})).toBeDisabled();
 await lab.getByRole('radio',{name:/Hentikan penggunaan area terkait/i}).check();
 await lab.getByRole('button',{name:'Periksa alasan pilihanku'}).click();
 await expect(lab).toContainText('Keputusan defensibel');
});

test('brew-ratio tool measures input units and refuses fabricated taste conclusions',async ({page})=>{
 await page.goto('/barista-v2/bv2-m02-l01');
 const lab=page.getByRole('region',{name:'Laboratorium konsep barista'});
 await expect(lab).toContainText('1 : 15');
 await lab.getByLabel('Air masuk (g)').fill('240');
 await expect(lab).toContainText('1 : 16');
 await expect(lab.getByRole('button',{name:'Bandingkan prediksi'})).toBeDisabled();
 await lab.getByLabel(/Prediksi: apa yang belum bisa disimpulkan/).fill('Tanpa data output dan TDS kita belum dapat menyimpulkan hasil rasa.');
 await lab.getByRole('button',{name:'Bandingkan prediksi'}).click();
 await expect(lab).toContainText('Brew-water ratio input');
});

test('espresso visualization does not invent pumped-water mass',async ({page})=>{
 await page.goto('/barista-v2/bv2-m03-l01');
 const lab=page.getByRole('region',{name:'Laboratorium konsep barista'});
 await expect(lab).toContainText('1 : 2');
 await expect(lab).toContainText('Tidak ada pengukuran massa air yang dipompa');
});

test('filter bypass is modeled as dilution after coffee bed',async ({page})=>{
 await page.goto('/barista-v2/bv2-m07-l01');
 const lab=page.getByRole('region',{name:'Laboratorium konsep barista'});
 await expect(lab).toContainText('Massa minuman sesudah bypass');
 const slider=lab.getByRole('slider',{name:/Air bypass/i});
 await slider.focus();
 await slider.press('Home');
 for(let i=0;i<10;i++)await slider.press('ArrowRight');
 await expect(lab).toContainText('235 g');
});

test('cost simulation has unit-aware ingredients and makes no net-profit claim',async ({page})=>{
 await page.goto('/barista-v2/bv2-m10-l01');
 const lab=page.getByRole('region',{name:'Laboratorium konsep barista'});
 await expect(lab).toContainText('Rp10.620');
 await lab.getByLabel('Harga jual simulasi (Rp)').fill('0');
 await expect(lab.getByRole('button',{name:'Bandingkan keputusan'})).toBeDisabled();
 await expect(lab).toContainText('Periksa angka dan satuan');
});

test('signature lab asks for a real concept and does not invent tasting',async ({page})=>{
 await page.goto('/barista-v2/bv2-m11-l01');
 const lab=page.getByRole('region',{name:'Laboratorium konsep barista'});
 await expect(lab.getByRole('button',{name:'Cek kesiapan konsep'})).toBeDisabled();
 await lab.getByLabel('Nama konsep sementara').fill('Filter Senja Tropis');
 await lab.getByLabel('Untuk pelanggan/occasion dan kebutuhan apa?').fill('Pelanggan siang hari yang ingin kopi terasa tetapi tidak manis berlebihan');
 await lab.getByLabel('Apa peran kopi dan bahan lain?').fill('Filter coffee sebagai rasa utama, bahan pendukung hanya aroma dan tekstur');
 await lab.getByLabel('Apa hipotesis rasa atau tekstur yang ingin diuji?').fill('Saya menduga aroma pendukung memperjelas profil kopi tanpa menambah manis');
 await lab.getByLabel('Percobaan A/B apa yang akan dilakukan dengan aman?').fill('Dua minuman dengan base sama, satu tanpa bahan aromatik dan satu dengan takaran terukur');
 await lab.getByRole('button',{name:'Cek kesiapan konsep'}).click();
 await expect(lab).toContainText('belum menjadi produk teruji');
});

test('module-end checkpoint requires an independent response before exemplars',async ({page})=>{
 await page.goto('/barista-v2/bv2-m12-l05');
 const lab=page.getByRole('region',{name:'Tantangan akhir M12'});
 await expect(lab).toBeVisible();
 const submit=lab.getByRole('button',{name:'Bandingkan dengan contoh keputusan'});
 await expect(submit).toBeDisabled();
 for(const label of ['Keputusan yang kamu pilih','Informasi dan penyebab yang kamu pertimbangkan','Uji atau verifikasi berikutnya','Apa yang akan kamu komunikasikan?']){
   await lab.getByRole('textbox',{name:new RegExp(label.replace(/[?]/g,'\\?'))}).fill('Saya akan mengumpulkan bukti yang relevan, memeriksa batas aman, dan mempertimbangkan alternatif yang masuk akal sebelum tindakan.');
 }
 await expect(submit).toBeEnabled();
 await submit.click();
 await expect(lab).toContainText('Contoh penalaran, bukan kunci tunggal');
 await expect(lab).toContainText('tidak disimpan ke akun');
});

test('narrow viewport retains access to lesson, exercise and course index',async ({page})=>{
 await page.setViewportSize({width:375,height:812});
 await page.goto('/barista-v2/bv2-m02-l04');
 await expect(page.getByRole('heading',{level:1})).toBeVisible();
 await expect(page.getByText('Laboratorium pribadimu')).toBeVisible();
 await page.getByText('Laboratorium pribadimu').click();
 await expect(page.getByLabel('Apa pertanyaanmu?')).toBeVisible();
 await expect(page.locator('main')).toBeVisible();
});


for(let m=1;m<=12;m++){
 test('module '+String(m).padStart(2,'0')+' has three independently authored changing-condition cases',async({page})=>{
  const code='m'+String(m).padStart(2,'0');
  const response=await page.goto('/barista-v2/practice/'+code,{waitUntil:'domcontentloaded'});
  expect(response?.status()).toBe(200);
  const region=page.getByRole('region',{name:'Latihan kasus '+code.toUpperCase()});
  await expect(region.getByRole('button',{name:/Kasus [123]/})).toHaveCount(3);
  await expect(region.getByRole('textbox',{name:'Keputusan dan hipotesismu'})).toBeVisible();
  await expect(region.getByRole('button',{name:'Lihat informasi baru'})).toBeDisabled();
 });
}

test('new transfer evidence is hidden until a reasoned first attempt and revision is preserved',async({page})=>{
 await page.goto('/barista-v2/practice/m02');
 const region=page.getByRole('region',{name:'Latihan kasus M02'});
 await expect(region.getByText('Kamu tahu A menghasilkan 180 g minuman')).toHaveCount(0);
 await region.getByRole('textbox',{name:'Keputusan dan hipotesismu'}).fill(
  'Saya perlu membedakan air masuk dan minuman keluar; untuk rasio yang baru saya akan memilih uji terkontrol.');
 await region.getByRole('button',{name:'Lihat informasi baru'}).click();
 await expect(region).toContainText('Kamu tahu A menghasilkan 180 g minuman');
 await expect(region.getByRole('button',{name:'Bandingkan cara berpikir'})).toBeDisabled();
 await region.getByRole('textbox',{name:'Revisi keputusanmu'}).fill(
  'Volume output perlu ditimbang dan efek bypass dibedakan dari air yang melewati coffee bed; perlu eksperimen lebih lanjut.');
 await region.getByRole('button',{name:'Bandingkan cara berpikir'}).click();
 await expect(region).toContainText('Contoh penalaran yang dapat dipertanggungjawabkan');
 await expect(region.getByRole('textbox',{name:'Keputusan dan hipotesismu'})).toHaveValue(/Saya perlu membedakan/);
 await expect(region.getByRole('checkbox')).toHaveCount(4);
});

test('seven teaching diagrams give mechanism, unit and limitation context, not decorative or invented data',async({page})=>{
 const lessons=['bv2-m01-l01','bv2-m02-l01','bv2-m02-l02','bv2-m03-l03','bv2-m05-l03','bv2-m07-l01','bv2-m11-l04'];
 for(const id of lessons){
  await page.goto('/barista-v2/'+id,{waitUntil:'domcontentloaded'});
  const fig=page.locator('figure').filter({has:page.locator('svg[role="img"]')});
  await expect(fig).toHaveCount(1);
  await expect(fig.locator('figcaption')).toBeVisible();
  await expect(fig.locator('svg[aria-label]')).toBeVisible();
 }
});

test('practice links are discoverable from the module index and the final lesson',async({page})=>{
 await page.goto('/barista-v2');
 await expect(page.locator('a[href^="/barista-v2/practice/"]')).toHaveCount(12);
 await page.goto('/barista-v2/bv2-m11-l08');
 await expect(page.getByRole('link',{name:/tiga kasus situasi baru/i})).toHaveAttribute('href','/barista-v2/practice/m11');
});

test('a filter-specific notebook is not inserted into milk, chemical safety or other unrelated lessons',async({page})=>{
 for(const id of ['bv2-m05-l03','bv2-m09-l03','bv2-m11-l04']){
  await page.goto('/barista-v2/'+id,{waitUntil:'domcontentloaded'});
  await expect(page.getByText('Laboratorium pribadimu')).toHaveCount(0);
 }
 await page.goto('/barista-v2/bv2-m07-l05',{waitUntil:'domcontentloaded'});
 await expect(page.getByText('Laboratorium pribadimu')).toBeVisible();
});

for(let m=1;m<=12;m++){
 test('module '+String(m).padStart(2,'0')+' exposes two formative diagnostic questions with hidden reasoning',async({page})=>{
  const code='m'+String(m).padStart(2,'0');
  await page.goto('/barista-v2/practice/'+code,{waitUntil:'domcontentloaded'});
  const quiz=page.getByRole('region',{name:'Uji pemahaman '+code.toUpperCase()});
  await expect(quiz).toBeVisible();
  await expect(quiz.getByText('Pertanyaan 1 dari 2')).toBeVisible();
  await expect(quiz.getByRole('radio')).toHaveCount(4);
  await expect(quiz.getByRole('button',{name:'Periksa alasan'})).toBeDisabled();
  await expect(quiz.getByText('Hasil ini hanya umpan balik formatif')).toHaveCount(0);
 });
}

test('diagnostic feedback requires a selected response, explains misconception, and moves to the next unseen item',async({page})=>{
 await page.goto('/barista-v2/practice/m02',{waitUntil:'domcontentloaded'});
 const quiz=page.getByRole('region',{name:'Uji pemahaman M02'});
 await quiz.getByRole('radio').nth(0).check();
 await quiz.getByRole('button',{name:'Periksa alasan'}).click();
 await expect(quiz).toContainText('Perlu periksa lagi asumsi');
 await expect(quiz).toContainText('Pertimbangan yang lebih kuat:');
 await quiz.getByRole('button',{name:'Berikutnya →'}).click();
 await expect(quiz).toContainText('Pertanyaan 2 dari 2');
 await expect(quiz.getByRole('button',{name:'Periksa alasan'})).toBeDisabled();
});
