# Cherry Edu Teams — Architecture Decision Records (ADR)

**Version:** 2.0  
**Last Updated:** 2026-10-14  

---

## ADR-001: Dedicated Vercel Project & GitHub Repository Separation
- **Status:** ACCEPTED & IMPLEMENTED
- **Context:** Deploying B2B Teams inside the B2C Next.js application risks B2C release disruption, cross-application build failures, and accidental exposure of internal B2B logic to B2C users.
- **Decision:** Separate source code into `hallogroup-hq/cherryedu-teams` and deploy to a dedicated Vercel Project (`cherryedu-teams`) mapped to `teams.cherrycoffeeroastery.com`.
- **Consequences:**
  - Independent build and deploy cycles.
  - Zero deployment side-effects between B2C and B2B.
  - Independent environment variables, previews, and rollbacks.

---

## ADR-002: Shared Identity Ecosystem with Private B2B Schema
- **Status:** ACCEPTED
- **Context:** Indonesian coffee shop owners and baristas may already have Cherry Edu learner accounts. Creating disconnected auth databases causes user fragmentation and credential management overhead.
- **Decision:** Share the primary Supabase Auth instance while isolating all multi-tenant organization data, memberships, cohorts, assessments, and evidence inside a dedicated, private `b2b` schema.
- **Consequences:**
  - Unified SSO credential across B2C and Teams.
  - Complete tenant data isolation through strict schema permissions, composite foreign keys, and PostgreSQL RLS.
  - No cross-tenant leakage.

---

## ADR-003: Cryptographic Server-Authoritative Token Verification
- **Status:** ACCEPTED & IMPLEMENTED
- **Context:** Early mock headers allowed forged identities and mock roles.
- **Decision:** Enforce server-side cryptographic HMAC-SHA256 signature verification with timing-safe comparison on all Bearer tokens. Query active memberships and permissions directly from PostgreSQL.
- **Consequences:**
  - Client cannot forge roles or tenant context.
  - Revoked memberships take effect immediately without waiting for token expiry.
  - Fails closed when secret configuration is missing.

---

## ADR-004: Assessment Authority Separation (Decision 2)
- **Status:** ACCEPTED & IMPLEMENTED
- **Context:** Online lesson completion is not professional barista competency.
- **Decision:**
  - Cherry Edu Assigned Trainer: Authorized for practical assessments and final sign-off.
  - Client Head Bar / Manager: Authorized for on-the-floor observation and recommendation; cannot perform final sign-off without explicit delegation.
  - Platform Admin: Authorized for client administration and audited corrections; strictly blocked from signing off competency directly.
- **Consequences:**
  - Guarantees competency credibility in the coffee industry.
  - Every competency sign-off has verified evidence and assessor authority.
