# Cherry Edu Teams — Product Blueprint Pack v1.1

**Disusun:** 13 Oktober 2026  
**Scope:** konsep layanan dan UX, product requirements, logical ERD, system architecture, serta handover implementasi.

## Dokumen

1. [01_UX_Service_Blueprint.md](01_UX_Service_Blueprint.md) — service lifecycle; 4 user journeys; 28 mobile/desktop screens; state matrix, copy/UX guidance, pilot tasks.
2. [02_PRD.md](02_PRD.md) — goals/non-goals, personas, 18 feature requirement sets dengan acceptance criteria, pedagogi, security, reporting semantics, pilot/release gates.
3. [03_ERD_Technical_Architecture.md](03_ERD_Technical_Architecture.md) — domain ownership, Mermaid ERD, 30+ entity/table concepts, tenant isolation, APIs, eventing, auth integration, migration & QA invariants.
4. [04_Antigravity_Engineering_Handover.md](04_Antigravity_Engineering_Handover.md) — instruksi langsung untuk AI engineering agent agar tidak langsung mengubah production.
5. [05_UI_Visual_Direction_Guardrails.md](05_UI_Visual_Direction_Guardrails.md) — **aturan visual wajib dari owner:** mengikuti warna Cherry Edu, tanpa green neon/glow, merah acak, atau pill dekoratif; lengkap dengan QA screenshot.

## Catatan perubahan v1.1

- Tambahan **UI visual guardrails wajib** di UX Blueprint, PRD, dan engineering handover.
- Mockup multi-screen yang dihasilkan di chat sebelumnya merupakan **eksplorasi, belum disetujui untuk diimplementasikan**. Dengan sengaja tidak dibundel sebagai referensi approved UI agar tidak disalin mentah-mentah.
- Konten teknis, ERD, dan batasan keamanan dari paket v1 tetap dipertahankan; tidak ada perubahan production.

## Keputusan awal

- Teams repo/deploy terpisah dari Cherry Edu utama.
- Gunakan satu Supabase Auth + PostgreSQL project untuk fase awal, dengan `b2b` schema privat; tenant diisolasi berbasis org membership, RLS, least-privilege grants dan server APIs.
- Canonical lesson/quiz progress harus server-side pada core. Status kompetensi berdasarkan evidence praktik/teori dan signoff, bukan completion materi saja.
- Pengalaman utama: mobile-first learner & trainer; owner mobile actionable; admin desktop-first yang tetap responsive.
- Data klien sungguhan **tidak** diaktivasi sebelum keamanan live database serta cross-device progress diperbaiki.

## Audit penting yang menjadi penghalang release

Read-only inspection 13 Okt 2026 menunjukkan project Supabase `cherryedu` aktif, tetapi `public.profiles` dan `public.transactions` memiliki RLS/grants yang permisif, sementara current learning progress masih tercatat browser-local dalam `lib/store.tsx`. Schema SQL di repo belum sama dengan deployed database inventory. Dokumen ini **tidak** memodifikasi production dan harus dianggap design baseline, bukan working release.

## Status deliverables

- Blueprint UX: dibuat, belum diuji dengan pengguna nyata.
- PRD: dibuat, masih ada keputusan bisnis yang perlu divalidasi.
- Logical ERD & architecture: dibuat; belum menjadi migration DDL.
- Security/release gate: didokumentasikan; belum diperbaiki/diimplementasikan.
- UI visual mockups: **eksplorasi awal pernah dibuat namun belum disetujui**; production UI/code belum dibuat.

## Sumber utama

- `https://github.com/hallogroup-hq/cherryedu`
- `https://supabase.com/docs/guides/api/securing-your-api`
- `https://supabase.com/docs/guides/database/postgres/row-level-security`
- `https://www.w3.org/TR/WCAG22/`
- `https://jdih.kemnaker.go.id/peraturan/detail/2345/keputusan-menteri-ketenagakerjaan-nomor-32-tahun-2023`
