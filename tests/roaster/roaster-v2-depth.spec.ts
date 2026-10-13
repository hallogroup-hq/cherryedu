import {test,expect} from '@playwright/test';

test('every module introduces an accessible concept diagram with no horizontal page overflow',async({page})=>{
 test.setTimeout(180000);
 await page.setViewportSize({width:390,height:844});
 for(let i=1;i<=10;i++){
  const code=String(i).padStart(2,'0');
  await page.goto('/roaster-v2/rv2-m'+code+'-l01');
  await expect(page.getByRole('heading',{level:1})).toBeVisible();
  await expect(page.getByRole('img')).toHaveCount(1);
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth);
  expect(overflow,'Horizontal overflow on M'+code+' lesson').toBeLessThanOrEqual(2);
 }
});
test('all module practice routes have two adaptive cases and two diagnostics',async({page})=>{
 test.setTimeout(180000);
 for(let i=1;i<=10;i++){
  const code=String(i).padStart(2,'0');
  await page.goto('/roaster-v2/practice/m'+code);
  await expect(page.locator('article')).toHaveCount(4);
  await expect(page.getByRole('button',{name:'Lihat fakta baru'})).toHaveCount(2);
  await expect(page.getByRole('button',{name:'Periksa jawaban'})).toHaveCount(2);
 }
});
test('unit conversion preserves physical RoR value',async({page})=>{
 await page.goto('/roaster-v2/rv2-m04-l02');
 const lab=page.locator('section[aria-label^="Laboratorium konsep"]');
 const inputs=lab.locator('input[type="number"]');
 await inputs.nth(0).fill('170');
 await inputs.nth(1).fill('173');
 await inputs.nth(2).fill('30');
 await expect(lab.getByText(/RoR rata-rata: 6.00°C\/menit/)).toBeVisible();
 await lab.getByRole('button',{name:'Konversi pembacaan ke °F'}).click();
 await expect(lab.getByText(/RoR rata-rata: 10.80°F\/menit/)).toBeVisible();
 await lab.getByRole('button',{name:'Konversi pembacaan ke °C'}).click();
 await expect(lab.getByText(/RoR rata-rata: 6.00°C\/menit/)).toBeVisible();
});
test('research field investigation appears only on its matching lesson',async({page})=>{
 await page.goto('/roaster-v2/rv2-m04-l03');
 await expect(page.getByRole('heading',{name:'Baca satu data, buat dua RoR yang sama-sama benar'})).toBeVisible();
 await page.goto('/roaster-v2/rv2-m04-l04');
 await expect(page.getByRole('heading',{name:'Baca satu data, buat dua RoR yang sama-sama benar'})).toHaveCount(0);
});
