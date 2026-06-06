# Process Memo

## Inputs

- Zalo Senior Technical Product Owner take-home assignment prompt.
- Zalo Developer documentation for ZBS Template Message behavior.
- Current ZBS concepts such as template approval, Send API, tracking ID, message ID, delivery status/webhook, quota, quality, pricing timeout, and Journey-like events.
- Comparable messaging platform patterns from WhatsApp, LINE, and Viber.
- Existing eVoyage source code and live deployment.

## Tools

- Vite, React, TypeScript, and CSS for the assignment SPA.
- Local terminal for source inspection, linting, building, and route checks.
- AI assistance for structure, critique, challenge questions, and writing clarity.
- Manual review for final product decisions and submission framing.

## How I worked

1. Broke each exercise into product decision questions.
2. Started from business value before system design.
3. Identified current platform primitives before proposing new extensions.
4. Separated evidence, assumptions, and open questions.
5. Used diagrams, tables, and direct writing so reviewers can scan quickly.
6. Validated the SPA with lint and production build.

## AI usage

AI was used as an assistant for drafting, critique, organization, and wording cleanup.

Final product decisions were reviewed against:

- The assignment requirements.
- Available Zalo Developer documentation.
- Platform design tradeoffs.
- My own product and engineering judgment.

## Validation performed

```bash
npm run lint
npm run build
```

Both passed before publishing.
