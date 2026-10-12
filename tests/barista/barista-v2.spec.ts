import {expect,test} from '@playwright/test';

const modules = ['M01','M02','M03','M04','M05','M06','M07','M08','M09','M10','M11','M12'];
const counts = [6,5,6,7,6,5,5,5,5,5,8,5];

test('68 lesson links are available under 12 clear, learner-facing modules',async ({page})=>{
 await page.goto('/barista-v2');
 await expect(page.getByRole('heading',{level:1})).toContainText('Pahami Kopi.');
 await expect(page.getByRole('heading',{level:2})).toHaveCount(12);
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
     expect(visible,id).not.toMatch(/\\[ACTIVITY:|\\[VISUAL:|\\[DIAGRAM:/i);
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
