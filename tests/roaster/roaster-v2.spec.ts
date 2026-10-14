import {test,expect} from '@playwright/test';
test.beforeEach(async({page})=>{await page.addInitScript(()=>localStorage.setItem('cherry_seen_version_v1_2','true'));});
test('course inventory, navigation and accessible concept model',async({page})=>{
 await page.goto('/roaster-v2');
 await expect(page.getByRole('heading',{name:'Roaster Specialization'})).toBeVisible();
 await expect(page.locator('section[aria-labelledby^="course-"]:not([aria-labelledby="course-modules"])')).toHaveCount(10);
 const courseModules=page.locator('section[aria-labelledby^="course-"]:not([aria-labelledby="course-modules"])');
 for(let i=1;i<10;i++)await courseModules.nth(i).getByRole('button').click();
 await expect(courseModules.locator('ol li')).toHaveCount(40);
 await page.getByRole('link',{name:/Bagaimana panas benar-benar sampai ke biji/}).click();
 await expect(page.getByRole('heading',{level:1,name:/Bagaimana panas benar-benar sampai ke biji/})).toBeVisible();
 await expect(page.getByRole('img',{name:'Jalur energi selama roasting'})).toBeVisible();
});
test('practice requires real first response, then new evidence and revision',async({page})=>{
 await page.goto('/roaster-v2/practice/m04');
 await expect(page.getByRole('heading',{name:/Membaca Profil tanpa Tertipu Angka/})).toBeVisible();
 const first=page.getByRole('article').first();
 const action=first.getByRole('button',{name:'Lihat fakta baru'});
 await expect(action).toBeDisabled();
 await first.getByRole('textbox').first().fill('Saya akan cek interval RoR dan smoothing sebelum menyimpulkan ada perubahan nyata.');
 await expect(action).toBeEnabled();
 await action.click();
 await expect(first.getByRole('heading',{name:'Informasi yang baru ditemukan'})).toBeVisible();
 await first.getByRole('textbox').last().fill('Saya akan gunakan interval sebanding dan memeriksa data mentah kembali.');
 await expect(first.getByText(/Pembanding penalaran/)).toBeVisible();
});
test('diagnostic explains choice only after submission',async({page})=>{
 await page.goto('/roaster-v2/practice/m03');
 const article=page.getByRole('article').nth(2);
 await expect(article.getByRole('button',{name:'Periksa jawaban'})).toBeDisabled();
 await article.getByRole('radio').first().check();
 await article.getByRole('button',{name:'Periksa jawaban'}).click();
 await expect(article.getByRole('status')).toBeVisible();
});
test('RoR is unit-aware and mass yield uses distinct variables',async({page})=>{
 await page.goto('/roaster-v2/rv2-m04-l02');
 await expect(page.getByText(/RoR rata-rata:/)).not.toBeVisible();
 const inputs=page.locator('section[aria-label^="Laboratorium konsep"] input[type="number"]');
 await inputs.nth(0).fill('170');await inputs.nth(1).fill('173');await inputs.nth(2).fill('30');
 await expect(page.getByText(/RoR rata-rata: 6.00°C\/menit/)).toBeVisible();
 await page.goto('/roaster-v2/rv2-m05-l02');
 const masses=page.locator('section[aria-label^="Laboratorium konsep"] input[type="number"]');
 await masses.nth(0).fill('1000');await masses.nth(1).fill('860');
 await expect(page.getByText(/Mass loss 14.00%/)).toBeVisible();
});
test('no editorial status text on catalog, lesson and practice learner surfaces',async({page})=>{
 for(const url of ['/roaster-v2','/roaster-v2/rv2-m01-l01','/roaster-v2/practice/m01']){
  await page.goto(url);
  const body=await page.locator('body').innerText();
  expect(body).not.toMatch(/\bDRAFT\b|\bPREVIEW\b|\bBETA\b|\bTBD\b|COMING SOON|validasi akademik oleh pengelola/i);
 }
});
