type Stage={title:string;rows:[string,string][];foot:string};
type Calculation={title:string;cells:[string,string][];formula:string;foot:string};
type TableDiagram={title:string;headers:[string,string,string];rows:[string,string,string][];foot:string};
const stages:Record<string,Stage>={
  "B03": {
    "title": "Uji permintaan berjenjang",
    "rows": [
      [
        "12 prospek",
        "Usaha yang cocok dengan ICP"
      ],
      [
        "6 penerima sampel",
        "Kebutuhan dan hasil uji dicatat"
      ],
      [
        "3 pilot berbayar",
        "Harga dan komitmen benar-benar diuji"
      ],
      [
        "2 pembeli ulang",
        "Bukti awal permintaan berulang"
      ]
    ],
    "foot": "Funnel ini contoh kecil, bukan konversi industri. Pilot → repeat = 2 dari 3; jangan mengganti angka pembelian dengan impresi."
  },
  "B05": {
    "title": "Gerbang keputusan kelayakan",
    "rows": [
      [
        "PASAR",
        "Ada pilot berbayar dan peluang reorder"
      ],
      [
        "PRODUKSI",
        "Mutu, kapasitas saleable dan pasokan cukup"
      ],
      [
        "LEGAL & KESELAMATAN",
        "Lokasi serta kegiatan telah diverifikasi"
      ],
      [
        "KAS",
        "Biaya awal, kewajiban dan buffer tertutup"
      ]
    ],
    "foot": "Jika gerbang keselamatan atau kas belum memenuhi syarat, statusnya CONDITIONAL GO untuk uji terbatas atau NO-GO untuk investasi besar."
  },
  "B06": {
    "title": "Lima lapisan yang perlu diperiksa sebelum menjual",
    "rows": [
      [
        "Entitas",
        "Siapa pelaku usaha dan penanggung jawab?"
      ],
      [
        "Kegiatan usaha",
        "Klasifikasi KBLI dan perizinan sesuai aktivitas aktual"
      ],
      [
        "Fasilitas",
        "Bangunan, keselamatan, lingkungan dan proses produksi"
      ],
      [
        "Produk",
        "Jalur pangan, label dan halal sesuai ketentuan"
      ],
      [
        "Pajak",
        "Kewajiban sesuai subjek, transaksi dan waktu"
      ]
    ],
    "foot": "Diagram pemeriksaan, bukan daftar izin yang sama bagi semua badan usaha. Pastikan pada sumber instansi resmi yang berlaku."
  },
  "B07": {
    "title": "Kendali mutu dalam pembelian green",
    "rows": [
      [
        "01  Penawaran",
        "Spesifikasi lot, harga, titik serah, syarat reject"
      ],
      [
        "02  Sampel",
        "Kecocokan sensori serta bukti identitas lot"
      ],
      [
        "03  Receiving",
        "Berat, fisik, kondisi karung, sampling QC"
      ],
      [
        "04  Keputusan",
        "RELEASE / HOLD / REJECT beserta dasar dan catatan"
      ]
    ],
    "foot": "Keberhasilan cupping sampel awal belum menjamin seluruh pengiriman diterima tanpa pemeriksaan."
  },
  "B09": {
    "title": "Aliran material dalam fasilitas roastery",
    "rows": [
      [
        "Receiving",
        "Menerima, menghitung, memberi identitas"
      ],
      [
        "Green storage",
        "Pisahkan stok unusable dan HOLD"
      ],
      [
        "Roast + cooling",
        "Kontrol proses, keselamatan dan pengukuran"
      ],
      [
        "QC + packing",
        "RELEASE hanya setelah memenuhi syarat"
      ],
      [
        "Dispatch",
        "Periksa SKU, lot, invoice dan alamat"
      ]
    ],
    "foot": "Denah fasilitas tidak selalu linear; jalur pekerja, ventilasi, evakuasi dan instalasi perlu desain profesional."
  },
  "B11": {
    "title": "Menelusuri satu kemasan kembali ke bahan baku",
    "rows": [
      [
        "G-17",
        "Green lot dari supplier dan catatan penerimaan"
      ],
      [
        "R-17A",
        "Batch roasting, input, output, operator dan log"
      ],
      [
        "QC / Release",
        "Hasil inspeksi dan otorisasi penjualan"
      ],
      [
        "P-17A",
        "Batch kemasan dan pelanggan penerima"
      ]
    ],
    "foot": "Kode di atas hanya contoh. Komplain pada pouch P-17A harus dapat menemukan lot sumber dan pembeli lain yang terdampak."
  },
  "B17": {
    "title": "Pipeline wholesale yang benar-benar terukur",
    "rows": [
      [
        "ICP",
        "Pelanggan dalam jangkauan supply"
      ],
      [
        "Sampel relevan",
        "Satu tujuan evaluasi dan tanggal review"
      ],
      [
        "Pilot berbayar",
        "Harga, volume dan layanan nyata"
      ],
      [
        "Reorder",
        "Pembelian ulang pada syarat yang berkelanjutan"
      ]
    ],
    "foot": "Jangan memperlakukan setiap prospek atau pengiriman sampel sebagai pesanan yang pasti."
  },
  "B21": {
    "title": "Urutan awal mengevaluasi inquiry ekspor",
    "rows": [
      [
        "Buyer & produk",
        "Negara tujuan, green atau roasted, spesifikasi"
      ],
      [
        "Kepatuhan",
        "HS code dan syarat negara tujuan diverifikasi"
      ],
      [
        "Titik serah",
        "Incoterm, pihak pengiriman dan total biaya"
      ],
      [
        "Pembayaran",
        "Termin, kurs, dokumen dan risiko penerimaan"
      ]
    ],
    "foot": "Ini pengantar proses. Prosedur ekspor dan klasifikasi barang nyata tetap memerlukan verifikasi kepabeanan dan instansi terkait."
  }
};
const calculations:Record<string,Calculation>={
  "B04": {
    "title": "Satu kilogram, dua format SKU",
    "cells": [
      [
        "4 × 250 g",
        "4 pouch + 4 label"
      ],
      [
        "1 × 1 kg",
        "1 pouch + 1 label"
      ]
    ],
    "formula": "Berat neto identik ≠ jumlah unit kemasan identik",
    "foot": "Bandingkan BOM dan waktu packing per SKU sebelum menetapkan harga per kilogram."
  },
  "B10": {
    "title": "Kapasitas mesin vs produk siap dikirim",
    "cells": [
      [
        "540 kg",
        "Green input bulanan"
      ],
      [
        "≈440 kg",
        "Roasted lolos QC"
      ],
      [
        "350 kg",
        "Batas packing"
      ]
    ],
    "formula": "Saleable terkirim ≤ tahapan paling lambat",
    "foot": "Contoh 6 kg × 5 batch × 18 hari × yield 84% × release 97%, dibatasi proses packing 350 kg."
  },
  "B12": {
    "title": "Menghitung stok yang boleh dijanjikan",
    "cells": [
      [
        "500 pouch",
        "Barang fisik"
      ],
      [
        "−20 pouch",
        "Sedang HOLD"
      ],
      [
        "−50 pouch",
        "Sudah dialokasikan"
      ],
      [
        "430 pouch",
        "Available to promise"
      ]
    ],
    "formula": "ATP = stok fisik − HOLD − reservasi",
    "foot": "Jangan menjanjikan semua barang fisik jika belum lolos QC atau telah dipesan."
  },
  "B14": {
    "title": "Harga yang sama, penyebut persentase yang berbeda",
    "cells": [
      [
        "Rp150.000",
        "HPP per kg"
      ],
      [
        "Rp200.000",
        "Harga neto per kg"
      ],
      [
        "33,3%",
        "Markup atas biaya"
      ],
      [
        "25%",
        "Gross margin atas penjualan"
      ]
    ],
    "formula": "Markup = (harga − HPP) ÷ HPP; gross margin = (harga − HPP) ÷ harga",
    "foot": "Contoh ilustrasi. Biaya variabel dan channel tetap harus dipisah untuk contribution."
  },
  "B18": {
    "title": "Contoh contribution setelah biaya variabel",
    "cells": [
      [
        "Rp45.000/kg",
        "D2C setelah biaya variabel produk, packing dan fee"
      ],
      [
        "Rp25.000/kg",
        "Wholesale setelah produk, pengiriman dan alokasi layanan"
      ]
    ],
    "formula": "Contribution = penjualan neto − biaya variabel relevan",
    "foot": "Angka hipotetis, tidak mewakili harga pasar. Audit biaya akuisisi dan risiko kredit secara terpisah."
  }
};
const tables:Record<string,TableDiagram>={
  "B19": {
    "title": "Contoh pembagian peran dalam usaha kecil",
    "headers": [
      "Keputusan",
      "Menjalankan",
      "Menyetujui"
    ],
    "rows": [
      [
        "Menerima green",
        "Gudang",
        "Penanggung jawab QC"
      ],
      [
        "Roast batch",
        "Operator",
        "Penanggung jawab produksi"
      ],
      [
        "RELEASE batch",
        "QC reviewer",
        "Pihak berwenang mutu"
      ],
      [
        "Diskon khusus",
        "Sales",
        "Owner / finance"
      ]
    ],
    "foot": "Orang bisa merangkap jabatan, tetapi persetujuan keputusan berisiko harus dapat dilacak."
  },
  "B20": {
    "title": "Indikator yang harus dibaca bersama",
    "headers": [
      "Jika indikator naik",
      "Periksa juga",
      "Alasan"
    ],
    "rows": [
      [
        "Output roasted",
        "Output saleable",
        "Barang HOLD belum boleh dijual"
      ],
      [
        "Omzet wholesale",
        "Piutang menunggak",
        "Invoice bukan kas diterima"
      ],
      [
        "Pelanggan baru",
        "Biaya akuisisi",
        "Penjualan awal bisa belum memberi kontribusi"
      ],
      [
        "Pemakaian mesin",
        "Reject dan downtime",
        "Utilisasi tidak menjamin mutu"
      ]
    ],
    "foot": "Jangan mengeksekusi ekspansi dari satu metrik tanpa melihat akibatnya pada kualitas dan uang tunai."
  }
};
export function BusinessConceptFigureMore({moduleId}:{moduleId:string}){
 const stage=stages[moduleId];
 if(stage)return <figure className="my-7 border border-paper-300 bg-paper-100 p-4 sm:p-5" aria-label={stage.title}>
  <figcaption className="font-serif text-lg font-bold text-roast-950">{stage.title}</figcaption>
  <ol className="mt-4 divide-y divide-paper-300 border-y border-paper-300">{stage.rows.map(([label,description],i)=><li key={label} className="grid gap-1 py-3 sm:grid-cols-[180px_1fr] sm:gap-4"><strong className="font-sans text-sm">{label}</strong><span className="text-sm leading-6 text-roast-700">{description}</span></li>)}</ol>
  <p className="mt-3 text-xs leading-6 text-roast-700">{stage.foot}</p>
 </figure>;
 const calc=calculations[moduleId];
 if(calc)return <figure className="my-7 border border-paper-300 bg-paper-100 p-4 sm:p-5" aria-label={calc.title}>
  <figcaption className="font-serif text-lg font-bold text-roast-950">{calc.title}</figcaption>
  <dl className="mt-4 grid gap-2 sm:grid-cols-2">{calc.cells.map(([value,label])=><div key={value+label} className="min-w-0 border border-paper-300 bg-white p-3"><dt className="text-sm font-bold text-roast-950">{value}</dt><dd className="mt-1 text-xs leading-5 text-roast-700">{label}</dd></div>)}</dl>
  <p className="mt-4 border-l-2 border-cherry-800 pl-3 text-sm font-semibold text-roast-950">{calc.formula}</p>
  <p className="mt-3 text-xs leading-6 text-roast-700">{calc.foot}</p>
 </figure>;
 const t=tables[moduleId];
 if(t)return <figure className="my-7 border border-paper-300 bg-paper-100 p-4 sm:p-5" aria-label={t.title}>
  <figcaption className="font-serif text-lg font-bold text-roast-950">{t.title}</figcaption>
  <div className="mt-3 overflow-x-auto"><table className="w-full min-w-[460px] border-collapse text-left text-xs"><thead><tr className="border-b border-paper-400">{t.headers.map(h=><th key={h} scope="col" className="px-2 py-3 font-semibold">{h}</th>)}</tr></thead><tbody>{t.rows.map((row,i)=><tr key={i} className="border-b border-paper-300 last:border-0">{row.map((cell,j)=><td key={j} className="px-2 py-3 align-top leading-5">{cell}</td>)}</tr>)}</tbody></table></div>
  <p className="mt-3 text-xs leading-6 text-roast-700">{t.foot}</p>
 </figure>;
 return null;
}
