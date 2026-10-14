# Cherry Edu Teams — Decision Log

**Version:** 2.0  
**Last Updated:** 2026-10-14  

---

## 1. Product Owner Decisions

### DEC-001: Separate Vercel Project & Independent Deployment
- **Decision Date:** 2026-10-14
- **Authority:** Product Owner (Master Execution Directive V2.0 §2.1)
- **Decision:** Dedicated Vercel Project named `cherryedu-teams` strictly separate from the B2C project `cherryedu`. Deploying Teams must not trigger B2C builds and vice-versa.
- **Status:** **IMPLEMENTED**

### DEC-002: B2C Payment Flow & Provisional Entitlement (PO Override)
- **Decision Date:** 2026-10-14
- **Authority:** Product Owner Clarification (Priority: Product Owner Decision)
- **Decision:** Cherry Edu deliberately uses GoPay Merchant QRIS with manual verification. Automated external gateway webhooks are not required. User claims payment -> provisional Pro granted immediately -> Admin verifies manually in GoPay Merchant -> verified Pro maintained or revoked.
- **Status:** **IMPLEMENTED & VERIFIED**

### DEC-003: Assessment Authority (Decision 2)
- **Decision Date:** 2026-10-13 / 2026-10-14
- **Authority:** Product Owner (Phase 0 Decision 2)
- **Decision:** Only assigned Cherry Edu Trainers possess competency sign-off authority by default. Head Bar can observe and recommend. Platform Admin cannot sign off competency directly without audit trail.
- **Status:** **IMPLEMENTED & VERIFIED**

### DEC-004: Anti AI-Slop & Design Language
- **Decision Date:** 2026-10-13 / 2026-10-14
- **Authority:** Product Owner (UI Guardrails & User Rules)
- **Decision:** Prohibit decorative neon badges, green/red AI-slop container pills, decorative clutter. Strict minimalist, dark slate, typography-first, functional design system.
- **Status:** **ENFORCED**
