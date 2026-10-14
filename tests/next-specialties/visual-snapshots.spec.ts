import {test,expect} from '@playwright/test';
const cases=[
 {slug:'green-coffee',route:'/green-coffee-v2',first:'gc-m01-l01',last:'gc-m08-l04',count:32},
 {slug:'coffee-shop',route:'/coffee-shop-v2',first:'cs-m01-l01',last:'cs-m08-l03',count:24},
 {slug:'q-processor',route:'/q-processor-v2',first:'qp2-m01-l01',last:'qp2-m08-l03',count:24}
];
test.beforeEach(async({page})=>{
 await page.addInitScript(()=>localStorage.setItem('cherry_seen_version_v1_2','true'));
});
for(const p of cases){
 test(p.slug+' captures learner experience for owner visual acceptance',async({page})=>{
  await page.setViewportSize({width:1440,height:900});
  await page.goto(p.route);
  await expect(page.getByRole('heading',{name:'Daftar Modul dan Pelajaran'})).toBeVisible();
  await expect(page.locator('section[aria-label="Ujian akhir"] a')).toHaveAttribute('href','/ujian-akhir/'+p.slug);
  await page.screenshot({path:'audit-screenshots/'+p.slug+'/01-overview-desktop.png',fullPage:true});
  await page.goto(p.route+'/'+p.first);
  await expect(page.getByRole('navigation',{name:'Pilih materi'}).getByRole('link')).toHaveCount(p.count);
  await page.screenshot({path:'audit-screenshots/'+p.slug+'/02-first-lesson-desktop.png',fullPage:true});
  await page.goto(p.route+'/'+p.last);
  await expect(page.locator('[data-testid="continue-to-final-exam"]')).toHaveAttribute('href','/ujian-akhir/'+p.slug);
  await page.screenshot({path:'audit-screenshots/'+p.slug+'/03-last-lesson-desktop.png',fullPage:true});
  await page.setViewportSize({width:390,height:844});
  await page.goto(p.route+'/'+p.first);
  await expect(page.getByRole('button',{name:'Buka daftar materi'})).toBeVisible();
  await page.screenshot({path:'audit-screenshots/'+p.slug+'/04-first-lesson-mobile.png',fullPage:true});
 });
}
