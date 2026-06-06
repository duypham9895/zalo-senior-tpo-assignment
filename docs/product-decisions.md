# Product Decisions

## Exercise 1 — Multi-Message Bundle

### Decision

Build Multi-Message Bundle as customer-flow pricing, not a generic discount.

### Why

Businesses already send multi-step flows such as order updates and returns. Per-message pricing makes the complete flow harder to budget and reconcile. Bundle pricing should price the business event while protecting Zalo revenue.

### Key platform model

- Bundle Definition: commercial config and policy.
- Bundle Instance: one real customer business flow.
- Bundle Token: runtime send context.
- Message Ledger: billing truth.
- Settlement Job: finalizes charges after delivery evidence or timeout.

### Key billing rule

Do not charge on Send API success. Charge only when delivery evidence exists within the 2-hour eligibility window.

### Revenue protection

- Minimum bundle fee.
- Template whitelist.
- Max message count and expiry.
- Idempotent `tracking_id`.
- Anomaly monitoring.

## Exercise 2 — Trusted Assets

### Decision

Build Trusted Assets as an approved asset library with immutable asset versions.

### Why

Customers need faster iteration, but approval safety cannot be weakened. Immutable versions let Zalo reduce repeated review while keeping approved templates auditable.

### Key platform model

- Asset: logical reusable object.
- AssetVersion: immutable approved/rejected/pending payload.
- TemplateAssetReference: template points to `asset_version_id`.
- UsageGraph: shows templates using each version.

### Key safety rule

Never silently mutate approved templates. Existing templates stay pinned to old versions until the business intentionally migrates them.

## Exercise 3 — eVoyage

### Decision

Submit eVoyage as the working web app because it demonstrates real product and technical execution.

### Why

It shows problem framing, UX flow, technical architecture, deployment, and roadmap thinking through a product I already built and published.
