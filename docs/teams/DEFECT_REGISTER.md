# Cherry Edu Teams — Defect Register

**Version:** 2.0  
**Last Updated:** 2026-10-14  

---

## 1. Defect Severity Classifications
- **P0 / Critical:** Security vulnerability, tenant boundary leak, data corruption, illegal payment authorization.
- **P1 / High:** Core business workflow failure, persistent session loss, invalid assessment authority.
- **P2 / Medium:** Edge case inconsistency, non-blocking UI defect, non-critical validation omission.
- **P3 / Low:** Cosmetic flaw, typography alignment, non-breaking minor defect.

---

## 2. Active & Resolved Defects

| Defect ID | Severity | Phase Identified | Description | Root Cause | Status | Resolution Commit |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **DEF-001** | P0 | Phase 1 | Mock authentication headers allowed role forging | Missing cryptographic JWT validation | **RESOLVED** | `6acd85e` / `e3e4d7e` |
| **DEF-002** | P0 | Phase 1 | Test settlement token bypass header exposed in public API | Test bypass header present in route handler | **RESOLVED** | `e3e4d7e` |
| **DEF-003** | P0 | Phase 1 | Direct client-driven `paid` transaction status | Missing server order catalog & authoritative price | **RESOLVED** | `86fb324` |
| **DEF-004** | P1 | Phase 1R | Payment claim failed closed because automated gateway was assumed | PO clarified: intentionally manual GoPay verification | **RESOLVED** | `c3fe430` |
| **DEF-005** | P1 | Phase 1R | Rejection of a claim revoked all active subscriptions | Missing multi-subscription active entitlement query | **RESOLVED** | `c3fe430` |
| **DEF-006** | P2 | Phase 1R | Stale localStorage could re-assert `is_pro` over server revocation | Client store did not strictly prioritize remote server state | **RESOLVED** | `c3fe430` |
| **DEF-007** | P1 | Phase 1R | Repeated claim extended subscription expiry indefinitely | Expiration was recalculated from now instead of original | **RESOLVED** | `c3fe430` |
| **DEF-008** | P0 | Phase 2 | Teams coupled inside B2C Vercel project | Monolithic project deployment risked B2C downtime | **RESOLVED** | Created dedicated repo & Vercel project |

---

## 3. Open Defects Summary
- **Critical (P0):** 0
- **High (P1):** 0
- **Medium (P2):** 0
- **Low (P3):** 0
