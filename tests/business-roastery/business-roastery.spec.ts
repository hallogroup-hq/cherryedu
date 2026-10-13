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
 await page.getByRole('combobox',{name:'Rute dan moda persis sesuai referensi'}).selectOption('freight-jkt-mks-sea');
 await expect(page.getByText(/Tarif tercantum/)).toContainText('6.100');
 await expect(page.getByText(/Pengecualian:/)).toContainText('PPN, asuransi, packing');
 await page.getByRole('spinbutton',{name:/Berat green yang dibeli/}).fill('40');
 await expect(page.getByText('Berat ditagih untuk freight').locator('..')).toContainText('100 kg');
 await expect(page.getByText('Ongkos freight').locator('..')).toContainText('610.000');
 await expect(page.getByText('HPP manufaktur serapan/kg roasted').locator('..')).toContainText('Belum bisa dihitung');
 await page.getByRole('combobox',{name:'Rute dan moda persis sesuai referensi'}).selectOption('freight-jkt-ende-sea');
 await expect(page.getByText('Ongkos freight').locator('..')).toContainText('725.000');
});
test('roastery calculations wait for real costs and compute gross/variable margin distinctly',async({page})=>{
 await page.goto('/business-roastery-v1/calculator');
 await page.getByRole('combobox',{name:'Rute dan moda persis sesuai referensi'}).selectOption('freight-jkt-mks-sea');
 await page.getByRole('spinbutton',{name:/Berat green yang dibeli/}).fill('40');
 await page.getByRole('spinbutton',{name:/Green yang benar-benar diterima/}).fill('40');
 await page.getByRole('spinbutton',{name:/Harga beli green/}).fill('100000');
 await page.getByRole('spinbutton',{name:/Biaya inbound tambahan/}).fill('0');
 await page.getByRole('spinbutton',{name:/Green ditolak/}).fill('0');
 await page.getByRole('spinbutton',{name:/Roast loss/}).fill('20');
 await page.getByRole('spinbutton',{name:/Kehilangan QC\/packing/}).fill('0');
 await page.getByRole('spinbutton',{name:/Biaya konversi/}).fill('20000');
 await page.getByRole('spinbutton',{name:/Kemasan dan packing/}).fill('10000');
 await page.getByRole('spinbutton',{name:/Harga jual neto/}).fill('200000');
 await page.getByRole('spinbutton',{name:/Biaya variabel channel/}).fill('5000');
 await page.getByRole('spinbutton',{name:/Biaya overhead PABRIK tetap/}).fill('0');
 await page.getByRole('spinbutton',{name:/Output roasted saleable RENCANA/}).fill('100');
 await page.getByRole('spinbutton',{name:/Biaya tetap NONPRODUKSI/}).fill('1000000');
 await expect(page.getByText('HPP manufaktur serapan/kg roasted').locator('..')).toContainText('174.063');
 await expect(page.getByText('Gross margin').locator('..')).toContainText('13.0%');
 await expect(page.getByText('Contribution/kg',{exact:true}).locator('..')).toContainText('20.938');
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

test('inbound Sulawesi rate charges public minimum, not reverse Jakarta lane',async({page})=>{
 await page.goto('/business-roastery-v1/calculator');
 await expect(page.getByRole('combobox',{name:'Rute dan moda persis sesuai referensi'})).toHaveValue('freight-makassar-jabodetabek-sea');
 await expect(page.getByText(/Tarif tercantum/)).toContainText('3.500');
 await page.getByRole('spinbutton',{name:/Berat green yang dibeli/}).fill('35');
 await expect(page.getByText('Berat ditagih untuk freight').locator('..')).toContainText('50 kg');
 await expect(page.getByText('Ongkos freight').locator('..')).toContainText('175.000');
 await expect(page.getByText(/Rute terpilih adalah arah/)).toContainText('bukan tujuan Sukabumi');
});
test('fixed factory overhead enters absorbed HPP but not variable contribution denominator',async({page})=>{
 await page.goto('/business-roastery-v1/calculator');
 await page.getByRole('spinbutton',{name:/Berat green yang dibeli/}).fill('40');
 await page.getByRole('spinbutton',{name:/Green yang benar-benar diterima/}).fill('40');
 await page.getByRole('spinbutton',{name:/Harga beli green/}).fill('100000');
 await page.getByRole('spinbutton',{name:/Biaya inbound tambahan/}).fill('0');
 await page.getByRole('spinbutton',{name:/Green ditolak/}).fill('0');
 await page.getByRole('spinbutton',{name:/Roast loss/}).fill('20');
 await page.getByRole('spinbutton',{name:/Kehilangan QC\/packing/}).fill('0');
 await page.getByRole('spinbutton',{name:/Biaya konversi/}).fill('20000');
 await page.getByRole('spinbutton',{name:/Kemasan dan packing/}).fill('10000');
 await page.getByRole('spinbutton',{name:/Harga jual neto/}).fill('250000');
 await page.getByRole('spinbutton',{name:/Biaya variabel channel/}).fill('5000');
 await page.getByRole('spinbutton',{name:/Biaya overhead PABRIK tetap/}).fill('2000000');
 await page.getByRole('spinbutton',{name:/Output roasted saleable RENCANA/}).fill('100');
 await page.getByRole('spinbutton',{name:/Biaya tetap NONPRODUKSI/}).fill('1000000');
 await expect(page.getByText('Biaya manufaktur variabel/kg').locator('..')).toContainText('160.469');
 await expect(page.getByText('HPP manufaktur serapan/kg roasted').locator('..')).toContainText('180.469');
 await expect(page.getByText('Contribution/kg',{exact:true}).locator('..')).toContainText('84.531');
 await expect(page.getByText('BEP kontribusi (kg/bulan)').locator('..')).toContainText('35,5 kg');
 await page.getByRole('spinbutton',{name:/Output roasted saleable RENCANA/}).fill('200');
 await expect(page.getByText('HPP manufaktur serapan/kg roasted').locator('..')).toContainText('170.469');
 await expect(page.getByText('Contribution/kg',{exact:true}).locator('..')).toContainText('84.531');
});
test('every module field guide is accessible and decision evidence differs by chapter',async({page})=>{
 await page.goto('/business-roastery-v1/br-b08-l03');
 await expect(page.getByRole('heading',{name:'Dua arah kapal tidak berarti dua tarif yang sama'})).toBeVisible();
 await page.goto('/business-roastery-v1/br-b13-l03');
 await expect(page.getByRole('heading',{name:'Landed cost, full HPP, dan contribution punya fungsi berbeda'})).toBeVisible();
 await page.goto('/business-roastery-v1/practice/b13');
 await expect(page.getByText(/Satu kg roasted memakai green/)).toBeVisible();
 await page.getByRole('textbox',{name:/Tulis keputusan awal/}).fill('Saya perlu membedakan fixed overhead dan variable cost karena volume output bisa berubah sehingga absorbed HPP berubah walaupun contribution berbeda.');
 await page.getByRole('button',{name:'Buka bukti baru'}).click();
 await expect(page.getByText(/biaya alokasi overhead\/kg menjadi dua kali lipat/)).toBeVisible();
});

test('three models compare downside and physical capacity without placeholder costs',async({page})=>{
 await page.goto('/business-roastery-v1/models');
 await expect(page.getByRole('heading',{name:'Tiga model, satu permintaan yang sama'})).toBeVisible();
 await expect(page.getByText('Perlu input',{exact:true}).first()).toBeVisible();
 const form=page.getByRole('article').filter({hasText:'SKENARIO A'});
 await page.getByRole('spinbutton',{name:/Volume roasted saleable yang benar-benar/}).fill('100');
 await form.getByRole('spinbutton',{name:/Konversi variabel/}).fill('20000');
 await form.getByRole('spinbutton',{name:/Fixed conversion/}).fill('1000000');
 await form.getByRole('spinbutton',{name:/Kapasitas saleable/}).fill('90');
 await expect(form.getByText(/Gap kapasitas rencana:/)).toContainText('10 kg');
 await expect(form.getByText(/Gap kapasitas saat permintaan 60%:/)).toContainText('0 kg');
 await expect(form.getByText(/Biaya konversi bulanan pada target:/)).toContainText('Tidak layak kapasitas');
 await expect(form.getByText(/Biaya per kg di rencana:/)).toContainText('Tidak layak kapasitas');
 await expect(form.getByText(/Biaya per kg jika demand 60%:/)).toContainText('36.667');
 await expect(form.getByRole('alert')).toContainText('kapasitas tidak cukup');
 await form.getByRole('spinbutton',{name:/Kapasitas saleable/}).fill('150');
 await expect(form.getByRole('alert')).toHaveCount(0);
 await expect(form.getByText(/Biaya konversi bulanan pada target:/)).toContainText('3.000.000');
 await expect(form.getByText(/Biaya per kg di rencana:/)).toContainText('30.000');
});
test('13-week ledger places supplier cash out before buyer cash in and can delete entries',async({page})=>{
 await page.goto('/business-roastery-v1/working-capital');
 await page.getByRole('spinbutton',{name:/Kas yang tersedia pada awal/}).fill('1000000');
 await page.getByRole('spinbutton',{name:/Nominal/}).fill('1500000');
 await page.getByRole('textbox',{name:/Keterangan transaksi/}).fill('DP green');
 await page.getByRole('button',{name:'Tambahkan transaksi'}).click();
 await expect(page.getByText(/Titik kas terendah/)).toContainText('-');
 await expect(page.getByText(/Defisit kas terjadi pada urutan transaksi/)).toBeVisible();
 await page.getByRole('button',{name:'Hapus transaksi DP green'}).click();
 await expect(page.getByText(/Belum ada transaksi/)).toBeVisible();
});

test('flat freight does not mislabel a kilogram charge',async({page})=>{
 await page.goto('/business-roastery-v1/calculator');
 await page.getByRole('radio',{name:'Quotation flat/truk'}).check();
 await page.getByRole('spinbutton',{name:/Berat green yang dibeli/}).fill('40');
 await page.getByRole('spinbutton',{name:/Total biaya freight sesuai quotation flat/}).fill('350000');
 await expect(page.getByText('Berat ditagih untuk freight').locator('..')).toContainText('Tidak berlaku (tarif flat)');
 await expect(page.getByText('Ongkos freight').locator('..')).toContainText('350.000');
});

test('13-week liquidity shows intraweek deficit despite positive closing cash',async({page})=>{
 await page.goto('/business-roastery-v1/working-capital');
 await page.getByRole('spinbutton',{name:/Kas yang tersedia pada awal/}).fill('1000000');
 await page.getByRole('spinbutton',{name:/Nominal/}).fill('1500000');
 await page.getByRole('textbox',{name:/Keterangan transaksi/}).fill('Bayar supplier pagi');
 await page.getByRole('button',{name:'Tambahkan transaksi'}).click();
 await page.getByRole('combobox',{name:/Kas masuk\/keluar/}).selectOption('in');
 await page.getByRole('spinbutton',{name:/Nominal/}).fill('2000000');
 await page.getByRole('textbox',{name:/Keterangan transaksi/}).fill('Pembayaran buyer sore');
 await page.getByRole('button',{name:'Tambahkan transaksi'}).click();
 await expect(page.getByText(/Titik kas terendah/)).toContainText(/-Rp\s*500\.000/);
 await expect(page.getByText(/Defisit kas terjadi pada urutan transaksi/)).toBeVisible();
 const firstWeek=page.locator('tbody tr').first();
 await expect(firstWeek).toContainText('1.500.000');
});

test('business model text emphasizes key guidance without raw markdown',async({page})=>{
 await page.goto('/business-roastery-v1/models');
 await expect(page.locator('strong').filter({hasText:'hanya biaya mengubah green menjadi roasted saleable'})).toBeVisible();
 await expect(page.locator('strong').filter({hasText:'Cara memutuskan:'})).toBeVisible();
 await expect(page.getByText('**',{exact:false})).toHaveCount(0);
});

test('lesson tasks stay topic-specific without repeated generic evidence templates',async({page})=>{
 await page.goto('/business-roastery-v1/br-b08-l01');
 await expect(page.getByRole('heading',{name:'Asal dan tujuan ongkir harus tepat'})).toBeVisible();
 await expect(page.getByText(/Masukkan dua quotation nyata untuk arah identik/)).toBeVisible();
 await expect(page.getByText(/Lengkapi tiga kolom:/)).toHaveCount(0);
 await expect(page.getByText(/Bila hasil kasus berbeda dari ekspektasi/)).toHaveCount(0);
 await page.goto('/business-roastery-v1/br-b17-l03');
 await expect(page.getByRole('heading',{name:'Penawaran wholesale dan kontrak'})).toBeVisible();
 await expect(page.getByText(/Bila hasil kasus berbeda dari ekspektasi/)).toHaveCount(0);
});

test('published Jakarta to Medan sea freight minimum uses active canonical 10kg listing',async({page})=>{
 await page.goto('/business-roastery-v1/calculator');
 await page.getByRole('combobox',{name:'Rute dan moda persis sesuai referensi'}).selectOption('freight-jkt-medan-sea');
 await expect(page.getByText(/Tarif tercantum/)).toContainText('7.900');
 await expect(page.getByText(/Tarif tercantum/)).toContainText('minimum 10 kg');
 await expect(page.getByRole('link',{name:/Lihat tarif sumber/})).toHaveAttribute('href','https://www.indoexpress.co.id/tarif/cargo-jakarta-ke-medan.html');
 await page.getByRole('spinbutton',{name:/Berat green yang dibeli/}).fill('5');
 await expect(page.getByText('Berat ditagih untuk freight').locator('..')).toContainText('10 kg');
 await expect(page.getByText('Ongkos freight').locator('..')).toContainText('79.000');
 await page.getByRole('spinbutton',{name:/Berat green yang dibeli/}).fill('40');
 await expect(page.getByText('Ongkos freight').locator('..')).toContainText('316.000');
});
