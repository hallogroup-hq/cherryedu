# CherryEdu — Platform Edukasi Kopi Terlengkap di Indonesia

> **Dibuat oleh Cherry Coffee Roastery**  
> *Memberdayakan siapa pun, dari orang awam hingga profesional, untuk memahami dan mencintai kopi lebih dalam dari hulu (farm) ke hilir (cup).*

---

## 🌟 Ringkasan Platform

CherryEdu adalah platform edukasi kopi komprehensif pertama di Indonesia yang mengintegrasikan:
1. **Kurikulum Dua Lapis**:
   - **Foundation Layer (Wajib Semua Role)**: 7 Modul dari ekosistem industri, agronomi tanah vulkanik nusantara, varietas lokal (Ateng Super, Tim-Tim, Sigarar Utang), processing (Natural, Washed, Honey, Anaerobik), sains roasting & reaksi Maillard, kimia air seduh (TDS/pH/mineral), hingga sensory & cupping berstandar SCA.
   - **Specialization Layer**: *Barista Specialization Path* (10 modul siap kerja) & *Home Brewer Specialization Path* (10 modul seduh rumahan).
2. **Sistem Kuis & Sertifikasi Digital**:
   - Kuis per modul & ujian kelulusan akhir.
   - Sertifikat digital dengan **Credential ID unik** dan **halaman verifikasi publik** (`/verify/[share_token]`).
3. **Gamifikasi**:
   - Sistem perolehan XP poin, streak belajar harian, dan 10 lencana (*badges*).
   - Papan peringkat (*leaderboard*) nasional bulanan dan mingguan.
4. **Alat Bantu Seduh Interaktif**:
   - Kalkulator rasio seduh presisi & timer (V60, Aeropress, French Press, Japanese Iced, Espresso Dial-in).
   - Penjelajah Roda Rasa (*SCA Flavor Wheel Explorer*) dengan padanan rasa kopi lokal.
   - Atlas Kopi Nusantara (Gayo, Toraja, Flores Bajawa, Bali Kintamani, Ijen Raung, Mandheling).
5. **Forum Komunitas & Q&A Expert**:
   - Diskusi berantai dengan tanda *Verified Expert Answer* dari licensed Q Grader.
6. **Bursa Kerja Kopi (Job Board)**:
   - Coffee shop terkemuka mencari barista dengan filter "Wajib Sertifikat CherryEdu".
   - Lamaran kerja terintegrasi langsung menyertakan sertifikat digital pelamar.

---

## 🚀 Menjalankan Aplikasi Secara Lokal

### Prasyarat
- Node.js v18+ atau v20+ / v24+
- npm v9+

### Instalasi & Menjalankan Dev Server
```bash
# Clone atau buka repositori
cd "Cherry Edu"

# Install dependensi
npm install

# Jalankan development server
npm run dev

# Buka http://localhost:3000 di browser
```

### Menjalankan Mode Produksi
```bash
npm run build
npm run start
```

---

## 📂 Struktur Direktori Proyek

```
Cherry Edu/
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout & providers
│   ├── page.tsx                      # Landing page utama
│   ├── globals.css                   # Tailwind & styling kustom
│   ├── onboarding/page.tsx           # Kuis diagnostik penentuan jalur
│   ├── paths/
│   │   ├── page.tsx                  # Katalog learning paths
│   │   └── [slug]/
│   │       ├── page.tsx              # Silabus & modul kurikulum
│   │       ├── lessons/[lessonId]/   # Player materi belajar interaktif
│   │       └── quiz/[quizId]/        # Layar kuis modul & ujian sertifikasi
│   ├── certificates/page.tsx         # Koleksi sertifikat pengguna
│   ├── verify/[token]/page.tsx       # Halaman verifikasi publik sertifikat
│   ├── forum/page.tsx                # Forum diskusi komunitas kopi
│   ├── jobs/page.tsx                 # Bursa kerja barista & mode employer
│   ├── tools/page.tsx                # Alat kalkulator seduh & atlas kopi
│   ├── leaderboard/page.tsx          # Papan peringkat XP & keaktifan
│   └── profile/page.tsx              # Profil pengguna & koleksi badge
│
├── components/                       # Komponen UI
│   ├── Navbar.tsx                    # Navigasi & indikator streak/XP
│   ├── Footer.tsx                    # Footer ekosistem Cherry Roastery
│   ├── UserSwitcher.tsx              # Demo switcher persona pengguna
│   ├── BrewCalculator.tsx            # Kalkulator rasio seduh interaktif
│   ├── FlavorWheel.tsx               # Penjelajah roda rasa SCA
│   ├── CertificateCard.tsx           # Komponen sertifikat kelulusan resmi
│   └── ShareModal.tsx                # Generator kartu berbagi ke medsos
│
├── lib/
│   ├── types.ts                      # Model data TypeScript (ERD v2.0)
│   ├── store.tsx                     # React Context & LocalStorage state
│   ├── supabase.ts                   # Helper integrasi database Supabase
│   └── data/
│       └── seedData.ts               # Data kurikulum, kuis, forum, lowongan
│
├── supabase/
│   └── schema.sql                    # Skema PostgreSQL DDL + RLS policies
│
├── CherryEdu_PRD.md                  # Product Requirements Document
├── CherryEdu_ERD.md                  # Entity Relationship Diagram v2.0
├── package.json
└── tailwind.config.ts
```

---

## 👥 Pengujian Multi-Persona (Demo Mode)

Platform dilengkapi tombol **Ganti Persona Demo** di navbar kanan atas untuk menguji platform dari sudut pandang yang berbeda:
1. **Budi Santoso**: Calon Barista (sedang menempuh Foundation Layer).
2. **Sari Wulandari**: Home Brewer (telah lulus Foundation, mengoleksi sertifikat resmi, dan aktif di Home Brewer Path).
3. **Hendra Gunawan**: Licensed Q Grader & Head Roaster di Cherry Coffee Roastery (menjawab di forum dengan lencana *Verified Expert Answer*).
4. **Cherry Coffee Roastery HQ**: Employer (memasang lowongan barista dan meninjau berkas lamaran masuk).
5. **Admin**: Administrator sistem.

---

## ☕ Lisensi & Penghargaan

Dibuat dengan cinta untuk memajukan talenta dan ekosistem industri kopi nusantara.  
© 2026 CherryEdu. Inisiatif oleh **Cherry Coffee Roastery**.
