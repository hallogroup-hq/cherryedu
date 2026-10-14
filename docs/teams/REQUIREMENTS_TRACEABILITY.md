# Cherry Edu Teams — Requirements Traceability Matrix

**Version:** 2.0  
**Last Updated:** 2026-10-14  

---

## 1. Traceability Table

| Req ID | Category | Requirement Description | Blueprint Ref | Implementation File(s) | Verification Suite | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **REQ-AUTH-01** | Security | Cryptographic JWT verification with timing-safe signature check | PRD §3.1, Handover §1 | `lib/serverAuth.ts` | `verify_staging_integration.ts` §1 | **VERIFIED** |
| **REQ-AUTH-02** | Security | Database-backed membership and permissions lookup | ERD §4.1, Handover §1 | `lib/serverAuth.ts` | `verify_staging_integration.ts` §1.1 | **VERIFIED** |
| **REQ-TENANT-01** | Isolation | Strict cross-tenant access rejection (403) | PRD §3.2, ERD §4.2 | `lib/authz.ts` | `verify_staging_integration.ts` §2.1 | **VERIFIED** |
| **REQ-TENANT-02** | Isolation | Suspended user membership rejected immediately | PRD §3.2, ERD §4.2 | `lib/authz.ts` | `verify_staging_integration.ts` §2.2 | **VERIFIED** |
| **REQ-PAY-01** | B2C Payment | Provisional Pro access granted immediately on payment claim | Master Directive §4.4 | `lib/serverPaymentService.ts`, `/api/payment/claim` | `verify_payment_qa.ts` QA 1 | **VERIFIED** |
| **REQ-PAY-02** | B2C Payment | Admin manual verification in GoPay Merchant sets status verified | Master Directive §4.4 | `lib/serverPaymentService.ts`, `/api/admin/transactions/verify` | `verify_payment_qa.ts` QA 2 | **VERIFIED** |
| **REQ-PAY-03** | B2C Payment | Admin rejection revokes provisional Pro without affecting valid subs | Master Directive §4.4 | `lib/serverPaymentService.ts`, `/api/admin/transactions/reject` | `verify_payment_qa.ts` QA 3 & 4 | **VERIFIED** |
| **REQ-LEARN-01** | Learning | Quiz completion blocked via generic lesson sync | PRD §4.3 | `lib/learningPersistenceService.ts` | `verify_nextjs_live.ts` §3.1 | **VERIFIED** |
| **REQ-LEARN-02** | Learning | Monotonic lock prevents completion status downgrade | ERD §5.2 | `lib/learningPersistenceService.ts` | `verify_staging_integration.ts` §4.2 | **VERIFIED** |
| **REQ-ASSESS-01** | Assessment | Trainer sign-off authority requires active cohort assignment | Decision 2, PRD §5.1 | `lib/authz.ts`, `lib/competencyEngine.ts` | `verify_staging_integration.ts` §5.1-5.3 | **VERIFIED** |
| **REQ-ASSESS-02** | Assessment | Critical rubric failure blocks competency even if forged by client | Blueprint 03, PRD §5.2 | `lib/competencyEngine.ts` | `verify_staging_integration.ts` §6.4 | **VERIFIED** |
| **REQ-DEPLOY-01** | Deployment | Dedicated Vercel project `cherryedu-teams` separate from B2C | Master Directive §2 | Standalone repo `cherryedu-teams` | Vercel deployment pipeline | **IN PROGRESS** |
| **REQ-DEPLOY-02** | Deployment | Dedicated GitHub repository `hallogroup-hq/cherryedu-teams` | Master Directive §2.3 | `hallogroup-hq/cherryedu-teams` | GitHub remote check | **VERIFIED** |
| **REQ-ROLE-01** | Roles | Barista learner dedicated experience | Master Directive §1.2 | `app/org/[orgId]/learn/` | Phase 5 Gate | **PLANNED** |
| **REQ-ROLE-02** | Roles | Owner / Manager dedicated organization management experience | Master Directive §1.2 | `app/org/[orgId]/overview/` | Phase 6 Gate | **PLANNED** |
| **REQ-ROLE-03** | Roles | Trainer dedicated cohort & practical evaluation experience | Master Directive §1.2 | `app/trainer/` | Phase 7 Gate | **PLANNED** |
| **REQ-ROLE-04** | Roles | Platform Admin dedicated client & curriculum administration | Master Directive §1.2 | `app/admin/` | Phase 8 Gate | **PLANNED** |
