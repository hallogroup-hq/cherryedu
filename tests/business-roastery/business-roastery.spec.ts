import {test,expect} from '@playwright/test';
test.beforeEach(async({page})=>{await page.addInitScript(()=>{localStorage.setItem('cherry_seen_version_v1_2','true');});});
test('new independent roastery path exposes 21 modules and 84 lessons',async({page})=>{
 await page.goto('/business-roastery-v1');
 await expect(page.getByRole('heading',{name:'Merancang sampai Menjalankan Bisnis Roastery'})).toBeVisible();
 await expect(page.getByRole('heading',{level:2}).filter({hasText:'Tiga jalur membangun roastery'})).toBeVisible();
 await expect(page.locator('a[href^="/business-roastery-v1/br-b"][href$="-l01"]')).toHaveCount(21);
 await expect(page.locator('a[href^="/business-roastery-v1/br-b"]')).toHaveCount(84);
 await expect(page.getByText('Asset-light',{exact:true})).toBeVisible();
 await expect(page.getByText('Roastery kecil',{exact:true})).toBeVisible();
 await expect(page.getByText('Roastery berkembang',{exact:true})).toBeVisible();
});
test('real freight reference preserves Jakarta to Makassar direction and minimum charge',async({page})=>{
 await page.goto('/business-roastery-v1/calculator');
 await expect(page.getByText(/Tarif tercantum/)).toContainText('Rp6.100');
 await expect(page.getByText(/Pengecualian:/)).toContainText('PPN, asuransi, packing');
 await page.getByRole('spinbutton',{name:/Berat green yang dibeli/}).fill('40');
 await expect(page.getByText('Berat ditagih untuk freight').locator('..')).toContainText('100 kg');
 await expect(page.getByText('Ongkos freight').locator('..')).toContainText('610.000');
 await expect(page.getByText('HPP manufaktur/kg roasted').locator('..')).toContainText('Belum bisa dihitung');
 await page.getByRole('combobox',{name:'Rute dan moda persis sesuai referensi'}).selectOption('freight-jkt-ende-sea');
 await expect(page.getByText('Ongkos freight').locator('..')).toContainText('725.000');
});
test('roastery calculations wait for real costs and compute gross/variable margin distinctly',async({page})=>{
 await page.goto('/business-roastery-v1/calculator');
 await page.getByRole('spinbutton',{name:/Berat green yang dibeli/}).fill('40');
 await page.getByRole('spinbutton',{name:/Harga beli green/}).fill('100000');
 await page.getByRole('spinbutton',{name:/Biaya inbound tambahan/}).fill('0');
 await page.getByRole('spinbutton',{name:/Green ditolak/}).fill('0');
 await page.getByRole('spinbutton',{name:/Roast loss/}).fill('20');
 await page.getByRole('spinbutton',{name:/Biaya konversi/}).fill('20000');
 await page.getByRole('spinbutton',{name:/Kemasan dan packing/}).fill('10000');
 await page.getByRole('spinbutton',{name:/Harga jual neto/}).fill('200000');
 await page.getByRole('spinbutton',{name:/Biaya variabel channel/}).fill('5000');
 await page.getByRole('spinbutton',{name:/Biaya tetap bulanan/}).fill('1000000');
 await expect(page.getByText('HPP manufaktur/kg roasted').locator('..')).toContainText('174.063');
 await expect(page.getByText('Gross margin').locator('..')).toContainText('13.0%');
 await expect(page.getByText('Contribution/kg').locator('..')).toContainText('20.938');
 await expect(page.getByText('BEP kontribusi (kg/bulan)').locator('..')).toContainText('47,8 kg');
});
test('cash flow catches liquidity gap before customer pays',async({page})=>{
 await page.goto('/business-roastery-v1/cashflow');
 await page.getByRole('spinbutton',{name:'Saldo kas awal (Rp)'}).fill('3000000');
 await page.getByRole('spinbutton',{name:'Pembayaran green di awal (Rp)'}).fill('1500000');
 await page.getByRole('spinbutton',{name:'Freight inbound + handling dibayar awal (Rp)'}).fill('500000');
 await page.getByRole('spinbutton',{name:'Pengeluaran operasional kas per bulan (Rp)'}).fill('1500000');
 await page.getByRole('spinbutton',{name:'Total uang yang ditagih ke pembeli (Rp)'}).fill('4000000');
 await expect(page.getByText(/defisit kas setidaknya satu bulan/)).toBeVisible();
 await page.getByRole('combobox',{name:'Bulan penerimaan pembayaran'}).selectOption('1');
 await expect(page.getByText(/defisit kas setidaknya satu bulan/)).toHaveCount(0);
});
test('evolving case cannot reveal new evidence without original reasoning',async({page})=>{
 await page.goto('/business-roastery-v1/practice/b08');
 await expect(page.getByRole('button',{name:'Buka bukti baru'})).toBeDisabled();
 await page.getByRole('textbox',{name:/Tulis keputusan awal/}).fill('Saya tidak akan membalik arah tarif carrier. Saya akan meminta penawaran rute aktual dan mencatat berat serta minimum charge pengiriman.');
 await page.getByRole('button',{name:'Buka bukti baru'}).click();
 await expect(page.getByText('Situasi berubah')).toBeVisible();
 await expect(page.getByRole('button',{name:'Bandingkan dengan kerangka evaluasi'})).toBeDisabled();
 await page.getByRole('textbox',{name:/Revisi keputusanmu/}).fill('Saya menunda order sebelum quote sesuai arah tersedia, mengecek tambahan biaya, lalu meminta DP pembeli agar modal kerja tidak terikat terlalu lama.');
 await page.getByRole('button',{name:'Bandingkan dengan kerangka evaluasi'}).click();
 await expect(page.getByText('Kerangka penalaran')).toBeVisible();
});
test('capstone, lesson and narrow-screen tools render and retain local inputs',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 for(const path of ['/business-roastery-v1','/business-roastery-v1/br-b08-l01','/business-roastery-v1/calculator','/business-roastery-v1/cashflow','/business-roastery-v1/plan']){
  await page.goto(path);
  const difference=await page.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth);
  expect(difference,path).toBeLessThanOrEqual(2);
 }
 await page.getByRole('textbox',{name:/1. Pasar dan pesanan/}).fill('Sudah ada tiga pelanggan yang menandatangani PO dan membayar DP serta tanggal pengiriman tercatat.');
 await expect(page.getByText('1 / 10 bagian diisi cukup terperinci')).toBeVisible();
 await expect(page.getByRole('textbox',{name:'Ringkasan rencana yang bisa disalin'})).toHaveValue(/Sudah ada tiga pelanggan/);
});
