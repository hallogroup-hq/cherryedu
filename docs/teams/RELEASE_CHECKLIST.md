# Cherry Edu Teams — Production Release Checklist

**Version:** 2.0  
**Last Updated:** 2026-10-14  

---

## 1. Pre-Flight Verification Criteria
- [x] Dedicated Vercel Project `cherryedu-teams` created and isolated from `cherryedu` B2C.
- [x] Dedicated GitHub Repository `hallogroup-hq/cherryedu-teams` created and tracked.
- [x] Zero B2C payment code or customer-facing pages duplicated into Teams.
- [x] All 19 Payment Business Rule QA checks pass.
- [x] All 17 Live Next.js checks pass.
- [x] All 44 Staging Integration & Security checks pass.
- [x] Standalone Teams authentication & tenant isolation test suites pass.
- [x] Next.js 15 production build passes with 0 errors.

---

## 2. Gate Advancement Checklist
- [x] **GATE 1R (Security & Entitlement Remediation):** PASS
- [ ] **GATE 2 (Standalone Teams App & Vercel Project):** IN PROGRESS
- [ ] **GATE 3 (B2B Database, Auth & API Foundation):** PENDING
- [ ] **GATE 4 (Curriculum & Competency Engine):** PENDING
- [ ] **GATE 5 (Barista Application Experience):** PENDING
- [ ] **GATE 6 (Owner & Manager Application Experience):** PENDING
- [ ] **GATE 7 (Trainer Application Experience):** PENDING
- [ ] **GATE 8 (Platform Admin Experience):** PENDING
- [ ] **GATE 9 (Design System & Polish):** PENDING
- [ ] **GATE 10 (E2E & Performance QA):** PENDING
- [ ] **GATE 11 (Product Owner UAT Approval):** REQUIRES PO APPROVAL
- [ ] **GATE 12 (Production Release Authorization):** REQUIRES PO APPROVAL

---

## 3. Strict Prohibitions (Non-Negotiable)
- DILARANG men-deploy Teams ke dalam Vercel Project B2C.
- DILARANG mengubah production Supabase tanpa persetujuan eksplisit.
- DILARANG menambahkan ornamen AI-slop / badge pill merah-hijau.
- DILARANG memalsukan atau menyederhanakan pengujian keamanan demi kelulusan semu.
