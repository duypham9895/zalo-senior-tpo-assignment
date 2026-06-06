# Zalo Senior TPO Assignment — Duy Pham

Interactive SPA response for the **Zalo Business Solutions Senior Technical Product Owner** take-home assignment.

This project is built as a reviewer-friendly web experience instead of a plain document because the assignment requires product reasoning, platform thinking, and a working web app.

## Live review path

| Route | Purpose |
|---|---|
| `/` | Introduction, reviewer guide, submission package, and process memo |
| `/exercise-1` | Multi-Message Bundle: platform pricing, billing logic, abuse controls, rollout |
| `/exercise-2` | Trusted Assets: Business Portal artifact, API changes, approval workflow, lifecycle behavior |
| `/exercise-3` | eVoyage: working product case study, live app, GitHub, architecture, roadmap |

## Core positioning

```text
Business-first product thinking.
Platform-aware system design.
Working software.
```

My approach for each exercise:

1. Align business value first.
2. Understand existing platform primitives before proposing new systems.
3. Identify gaps and tradeoffs.
4. Propose the smallest credible platform extension.
5. Make risks, controls, rollout, and metrics explicit.

## Exercise summary

### Exercise 1 — Multi-Message Bundle

Designs bundled pricing for related ZBS Template Messages as **customer-flow pricing**, not a generic discount.

Key decisions:

- Use existing ZBS primitives first: templates, Send API, `tracking_id`, `msg_id`, delivery status/webhook, quota, quality, pricing timeout, and Journey-like lifecycle events.
- Add only the missing generic bundle layer: Bundle Definition, Bundle Instance, Bundle Token, Message Ledger, and Settlement Job.
- Do not charge on Send API success. Charge only when delivery evidence exists within the 2-hour eligibility window.
- Protect Zalo revenue with minimum bundle fee, template whitelist, max message count, expiry, idempotency, and anomaly monitoring.

### Exercise 2 — Trusted Assets

Designs reusable approved assets for templates without silently mutating approved templates.

Key decisions:

- Build Trusted Assets as an approved asset library with immutable versions.
- Templates reference approved `asset_version_id`, not mutable inline asset data.
- Asset updates create new versions. Existing templates stay pinned until the business intentionally migrates them.
- The Business Portal needs asset library, version history, compatible asset picker, rejection reasons, and migration UX.

### Exercise 3 — eVoyage

Submits **eVoyage**, a real working EV trip-planning product for Vietnam.

Links:

- Live app: https://evoyagevn.vercel.app/
- GitHub: https://github.com/duypham9895/evoyage

Why this project:

- Shows problem framing around EV trip confidence.
- Shows product workflow design across route, vehicle, battery, charger, backup, and cost decisions.
- Shows technical execution with maps, data, AI assistant, deployment, and test evidence.

## Process memo

See [`docs/process-memo.md`](docs/process-memo.md).

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Validation

```bash
npm run lint
npm run build
```

## Deployment

This is a static Vite SPA. `vercel.json` includes a rewrite so direct routes like `/exercise-1` work after deployment.
