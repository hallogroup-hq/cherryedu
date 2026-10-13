import {test,expect} from '@playwright/test';

test('course shows 10 modules, 40 lessons and role-specific learning title',async({page})=>{
 await page.goto('/sensory-v2');
 await expect(page.getByRole('heading',{name:'Q Grader & Sensory Specialist'})).toBeVisible();
 await expect(page.locator('section[aria-labelledby^="course-"]:not([aria-labelledby="course-modules"])')).toHaveCount(10);
 await expect(page.locator('section[aria-labelledby^="course-"]:not([aria-labelledby="course-modules"]) ol li')).toHaveCount(40);
 await page.getByRole('link',{name:/Mengapa penilai kopi tidak cukup memberi skor/}).click();
 await expect(page.getByRole('heading',{name:'Mengapa penilai kopi tidak cukup memberi skor?'})).toBeVisible();
 await expect(page.locator('figure svg[role="img"]')).toHaveCount(1);
 await expect(page.getByRole('heading',{name:/Investigasi lapangan: empat laporan untuk satu lot/})).toBeVisible();
});

test('user must explain initial decision before seeing new evidence',async({page})=>{
 await page.goto('/sensory-v2/practice/m01');
 const first=page.locator('article').first();
 const reveal=first.getByRole('button',{name:'Buka fakta berikutnya'});
 await expect(reveal).toBeDisabled();
 await expect(first.getByText('Informasi baru')).toHaveCount(0);
 await first.getByRole('textbox').first().fill('Saya pisahkan physical, descriptive, affective dan extrinsic sebelum membuat pembelian.');
 await expect(reveal).toBeEnabled();
 await reveal.click();
 await expect(first.getByText('Informasi baru')).toBeVisible();
 const compare=first.getByRole('button',{name:'Bandingkan penalaranku'});
 await expect(compare).toBeDisabled();
 await first.getByRole('textbox').last().fill('Saya meminta dokumen traceability dan mempertimbangkan B bila perlu.');
 await compare.click();
 await expect(first.getByText(/Contoh penalaran profesional/)).toBeVisible();
});

test('diagnostic displays response after user chooses',async({page})=>{
 await page.goto('/sensory-v2/practice/m02');
 const fieldset=page.locator('fieldset').first();
 await expect(fieldset.getByRole('status')).toHaveCount(0);
 await fieldset.getByRole('button').first().click();
 await expect(fieldset.getByRole('status')).toBeVisible();
});

test('interactions compute dose, triangle probability and panel statistics',async({page})=>{
 await page.goto('/sensory-v2/sv2-m03-l02');
 await expect(page.getByText(/dosis ekuivalen volume ini adalah/)).toContainText('11.00 g');
 await page.getByRole('slider',{name:'Volume air cupping'}).fill('300');
 await expect(page.getByText(/dosis ekuivalen volume ini adalah/)).toContainText('16.50 g');
 await page.goto('/sensory-v2/sv2-m08-l02');
 await expect(page.getByText(/Peluang penebak acak mendapat/)).toContainText('25.9%');
 await page.goto('/sensory-v2/sv2-m09-l02');
 await expect(page.getByText(/Rata-rata:/)).toContainText('8.00');
 await expect(page.getByText(/Rata-rata:/)).toContainText('7.00');
});

test('all module practice routes present two staged cases and two diagnostics',async({page})=>{
 test.setTimeout(180000);
 for(let i=1;i<=10;i++){
  const code=String(i).padStart(2,'0');
  await page.goto('/sensory-v2/practice/m'+code);
  await expect(page.locator('article')).toHaveCount(2);
  await expect(page.locator('fieldset')).toHaveCount(2);
  await expect(page.getByRole('button',{name:'Buka fakta berikutnya'})).toHaveCount(2);
 }
});

test('mobile lessons have accessible concept figures without page overflow',async({page})=>{
 test.setTimeout(180000);
 await page.setViewportSize({width:390,height:844});
 for(let i=1;i<=10;i++){
  const code=String(i).padStart(2,'0');
  await page.goto('/sensory-v2/sv2-m'+code+'-l01');
  await expect(page.locator('figure svg[role="img"]')).toHaveCount(['02','04','06','08'].includes(code)?2:1);
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth);
  expect(overflow,'M'+code+' horizontal overflow').toBeLessThanOrEqual(2);
 }
});

test('student reader does not expose editorial status labels',async({page})=>{
 for(const path of ['/sensory-v2','/sensory-v2/sv2-m01-l01','/sensory-v2/sv2-m05-l02','/sensory-v2/practice/m10']){
  await page.goto(path);
  const body=await page.locator('body').innerText();
  expect(body).not.toMatch(/\bDRAFT\b|\bPREVIEW\b|\bBETA\b|\bTBD\b|COMING SOON|validasi akademik oleh pengelola/i);
 }
});

test('learning support tools are reachable and usable without account writes',async({page})=>{
 await page.goto('/sensory-v2');
 await expect(page.getByRole('link',{name:'Buka panduan praktik →'})).toBeVisible();
 await expect(page.getByRole('link',{name:'Buka lembar kerja →'})).toBeVisible();
 await page.getByRole('link',{name:'Buka panduan praktik →'}).click();
 await expect(page.getByRole('heading',{name:'Delapan latihan sensori bertahap'})).toBeVisible();
 await expect(page.getByText(/0 dari 8 panduan/)).toBeVisible();
 // New visitors get CherryEdu's genuine release-announcement dialog.
 // Dismiss it through its accessible close button, rather than forcing clicks through the overlay.
 const announcement=page.getByRole('dialog',{name:/Apa yang Baru di Cherry Edu/});
 await announcement.waitFor({state:'visible',timeout:2500}).catch(()=>{});
 if(await announcement.isVisible()) {
  await announcement.getByRole('button',{name:'Tutup modal'}).click();
  await expect(announcement).toHaveCount(0);
 }
 await page.getByRole('checkbox').first().check();
 await expect(page.getByText(/1 dari 8 panduan/)).toBeVisible();
 await page.goto('/sensory-v2/notebook');
 await expect(page.getByRole('heading',{name:'Satu kopi, empat sudut penilaian'})).toBeVisible();
 await page.getByRole('button',{name:'Isi contoh kasus'}).click();
 await page.getByRole('button',{name:'Baca laporan'}).click();
 await expect(page.getByText(/11 dari 11 kolom telah terisi/)).toBeVisible();
 await expect(page.getByRole('textbox',{name:'Tinjau dan salin catatanmu'})).toHaveValue(/PHYSICAL/);
});
test('new course tools have no horizontal overflow on narrow screens',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 for(const route of ['/sensory-v2/notebook','/sensory-v2/practical','/sensory-v2/sv2-m02-l01']){
  await page.goto(route);
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth);
  expect(overflow,route).toBeLessThanOrEqual(2);
 }
});
