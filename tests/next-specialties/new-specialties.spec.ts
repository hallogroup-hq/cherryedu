import {test,expect} from '@playwright/test';
test.beforeEach(async({page})=>page.addInitScript(()=>localStorage.setItem('cherry_seen_version_v1_2','true')));
const paths=[
 {id:'green-coffee',route:'/green-coffee-v2',first:'gc-m01-l01',last:'gc-m08-l05',lab:'gc-m07-l04',modules:8,lessons:40},
 {id:'coffee-shop',route:'/coffee-shop-v2',first:'cs-m01-l01',last:'cs-m08-l03',lab:'cs-m03-l03',modules:8,lessons:24},
 {id:'q-processor',route:'/q-processor-v2',first:'qp2-m01-l01',last:'qp2-m08-l03',lab:'qp2-m07-l03',modules:8,lessons:24}
];
for(const p of paths){
 test(p.id+' shows complete accordion, reader and own final examination',async({page})=>{
  await page.goto(p.route);
  await expect(page.getByRole('heading',{name:'Daftar Modul dan Pelajaran'})).toBeVisible();
  const modules=page.locator('section[aria-labelledby^="course-"]:not([aria-labelledby="course-modules"])');
  await expect(modules).toHaveCount(p.modules);
  await expect(modules.first().getByRole('button')).toHaveAttribute('aria-expanded','true');
  for(let i=1;i<p.modules;i++)await modules.nth(i).getByRole('button').click();
  await expect(modules.locator('ol li')).toHaveCount(p.lessons);
  await expect(page.locator('section[aria-label="Ujian akhir"] a[href="/ujian-akhir/'+p.id+'"]')).toBeVisible();
  await page.goto(p.route+'/'+p.first);
  const syllabus=page.locator('#curated-lesson-syllabus');
  await expect(syllabus).toBeVisible();
  await expect(syllabus.getByRole('navigation',{name:'Pilih materi'}).locator('ol li')).toHaveCount(p.lessons);
  await expect(page.getByRole('article')).toBeVisible();
  await expect(page.locator('article figure')).toBeVisible(); // Each module begins with a real rendered teaching visual.
  await expect(page.getByText('Mode Listen & Brew',{exact:true})).toBeVisible();
  await page.goto(p.route+'/'+p.last);
  await expect(page.locator('[data-testid="continue-to-final-exam"]')).toHaveAttribute('href','/ujian-akhir/'+p.id);
  await page.locator('[data-testid="continue-to-final-exam"]').click();
  await expect(page).toHaveURL(new RegExp('/ujian-akhir/'+p.id+'$'));
  await expect(page.locator('#question-heading')).toBeVisible();
  const exam=await page.request.get('/api/final-exams/'+p.id);
  expect(exam.status()).toBe(200);
  const j=await exam.json();expect(j.questions).toHaveLength(p.id==='green-coffee'?24:16);
  expect(JSON.stringify(j)).not.toMatch(/correct_index|canonical_answer|explanation/);
 });
 test(p.id+' interactive card is real and offers rationale',async({page})=>{
  const example=p.id==='green-coffee'?'gc-m03-l05':p.id==='coffee-shop'?'cs-m03-l03':'qp2-m03-l03';
  await page.goto(p.route+'/'+example);
  const lab=page.getByRole('region',{name:'Latihan keputusan'});
  await expect(lab).toBeVisible();
  await expect(lab.getByRole('radio')).toHaveCount(3);
  await lab.getByRole('radio').first().check();
  await lab.getByRole('button',{name:'Periksa keputusan'}).click();
  await expect(lab.getByRole('status')).toBeVisible();
  await expect(lab.getByRole('button',{name:'Coba lagi'})).toBeVisible();
 });
}
test('green coffee landed calculator uses real entered costs, not invented freight rates',async({page})=>{
 await page.goto('/green-coffee-v2/gc-m07-l04');
 const area=page.getByRole('region',{name:'Biaya green per kilogram saleable'});
 await area.getByRole('spinbutton',{name:'Biaya pembelian lot'}).fill('18000000');
 await area.getByRole('spinbutton',{name:'Biaya kirim tertagih'}).fill('1500000');
 await area.getByRole('spinbutton',{name:'Biaya handling/packing terkait'}).fill('500000');
 await area.getByRole('spinbutton',{name:'Output green lolos grade'}).fill('160');
 await expect(area.getByRole('status')).toContainText(/Rp\s*125\.000/);
});
test('shop economics calculates contribution and simple BEP correctly',async({page})=>{
 await page.goto('/coffee-shop-v2/cs-m03-l03');
 const area=page.getByRole('region',{name:'Margin channel dan BEP kedai'});
 await area.getByRole('spinbutton',{name:'Harga jual per cup'}).fill('38000');
 await area.getByRole('spinbutton',{name:'Biaya variabel selain komisi per cup'}).fill('16000');
 await area.getByRole('spinbutton',{name:'Komisi merchant channel'}).fill('25');
 await area.getByRole('spinbutton',{name:'Biaya tetap per periode'}).fill('9500000');
 await expect(area.getByRole('status')).toContainText(/Rp\s*12\.500/);
 await expect(area.getByRole('status')).toContainText('760 cup');
 await expect(area.getByRole('status')).toContainText('Jangan mengurangi komisi dua kali');
});
test('Q Processor mass balance refuses impossible output',async({page})=>{
 await page.goto('/q-processor-v2/qp2-m07-l03');
 const area=page.getByRole('region',{name:'Rendemen green saleable'});
 await area.getByRole('spinbutton',{name:'Massa parchment masuk'}).fill('1000');
 await area.getByRole('spinbutton',{name:'Output green kasar'}).fill('810');
 await area.getByRole('spinbutton',{name:'Reject sortasi green'}).fill('30');
 await expect(area.getByRole('status')).toContainText('78,0%');
 await area.getByRole('spinbutton',{name:'Reject sortasi green'}).fill('900');
 await expect(area.getByRole('status')).toContainText('Neraca massa belum masuk akal');
});
test('all three legacy routes redirect to their updated curated path',async({page})=>{
 for(const [oldRoute,curated] of [
  ['/paths/post-harvest-specialist','/green-coffee-v2'],
  ['/paths/coffee-business-management','/coffee-shop-v2'],
  ['/paths/q-processor-specialization','/q-processor-v2']
 ]){
  await page.goto(oldRoute);
  await expect(page).toHaveURL(new RegExp(curated+'$'));
 }
});
test('mobile learner experience has no horizontal overflow and preserves module navigation',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 for(const p of paths){
  await page.goto(p.route+'/'+p.first);
  await expect(page.getByRole('button',{name:'Buka daftar materi'})).toBeVisible();
  await page.getByRole('button',{name:'Buka daftar materi'}).click();
  await expect(page.locator('#curated-lesson-syllabus')).toBeVisible();
  const width=await page.locator('main').evaluate(el=>el.scrollWidth);
  expect(width,p.id).toBeLessThanOrEqual(394);
 }
});
test('Q Processor online path does not imply CQI accreditation',async({page})=>{
 await page.goto('/q-processor-v2');
 const text=await page.locator('main').innerText();
 expect(text).toMatch(/bukan sertifikasi CQI/i);
 expect(text).not.toMatch(/sertifikasi resmi CQI otomatis|terakreditasi oleh CQI/i);
});
