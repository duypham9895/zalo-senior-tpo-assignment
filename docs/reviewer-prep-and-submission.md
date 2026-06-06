# Reviewer Prep and Submission Draft

## 30-Second Positioning

I approached this assignment as a Technical Product Owner: clarify the business value first, understand the current ZBS platform primitives, identify the real gaps, then propose the smallest credible platform extension with billing, approval, abuse prevention, rollout, and metrics made explicit.

I used AI as an assistant for structure, critique, and wording polish. The product decisions, tradeoffs, and final recommendations are mine, and I can walk through the reasoning behind each exercise.

## Submission Links

- Assignment SPA: <https://zalo-tpo.duypham.me/>
- Exercise 1: <https://zalo-tpo.duypham.me/exercise-1>
- Exercise 2: <https://zalo-tpo.duypham.me/exercise-2>
- Exercise 3: <https://zalo-tpo.duypham.me/exercise-3>
- eVoyage live app: <https://evoyage.duypham.me/>
- eVoyage GitHub: <https://github.com/duypham9895/evoyage>
- Zalo TPO GitHub: <https://github.com/duypham9895/zalo-senior-tpo-assignment>

## Exercise 3 Story

The reason I built eVoyage is personal and practical. I recently took and passed my driver's license test, I enjoy driving, and I often rent self-drive cars to practice and improve my driving skills.

When I rented an EV, I ran into a real problem: I could not log into VinFast's official app, so I had to rely on Google Maps or third-party apps to find charging stations. Because VinFast cars are still in the free-charging period, I specifically wanted to find official VinFast charging stations.

Beyond charger discovery, I wanted to plan long road trips properly: which charging stops to make, what backup stations exist, and how the route changes based on my battery level and vehicle specifications. That is why eVoyage is not only a map of chargers; it is a trip-planning product around route, battery, vehicle, charging stop, backup, and cost decisions.

## Reviewer Questions and Suggested Answers

| Reviewer question | Suggested answer |
|---|---|
| Did you solve this yourself? | Yes. I used AI as an assistant for structure, critique, and wording polish. I owned the product decisions, tradeoffs, and final submission. I can explain every recommendation and why I chose it. |
| Why build Multi-Message Bundle as customer-flow pricing? | Businesses already send multi-step flows such as order updates and returns. Pricing the full customer flow makes cost easier to predict and reconcile, while Zalo can still protect revenue with bundle rules and a minimum fee. |
| Why not charge on Send API success? | Send API success only proves Zalo accepted the request. Billing should depend on delivery evidence within the 2-hour eligibility window, because delivered value is what matters commercially. |
| How do you identify a bundle at system level? | I separate Bundle Definition from Bundle Instance. The definition controls policy and pricing. The instance represents one real business flow, scoped by OA, customer, bundle type, and business reference. Messages carry a bundle token and are settled through a ledger. |
| How do you prevent bundle abuse? | Template whitelist, tag restrictions, max message count, expiry, minimum bundle fee, idempotent tracking_id, and anomaly monitoring. The goal is to discount real flows, not create cheap arbitrary messages. |
| Why immutable Trusted Asset versions? | To avoid silently mutating approved templates. Existing templates stay pinned to the old asset version until the business intentionally migrates them. This keeps trust and auditability intact. |
| What changes are needed for Trusted Assets? | Add asset and asset-version APIs, approval at the asset-version level, template references to asset_version_id, a Business Portal asset library, usage history, and migration UX. |
| Why submit eVoyage for Exercise 3? | It is a real deployed product from a problem I personally experienced. It shows product framing, workflow design, technical tradeoffs, implementation, deployment, and roadmap thinking. |
| Why is eVoyage relevant to a TPO role? | It shows the ability to translate a real user problem into a product flow and make technical decisions across maps, route planning, vehicle constraints, charging data, AI assistance, and deployment. |
| What would you improve in eVoyage next? | Real-time charger availability, charger reliability signals, route confidence scoring, saved vehicle profiles, more charging-network coverage, and better mobile onboarding. |
| What would you ask Zalo in the interview? | I would ask how Zalo thinks about bundle pricing, priority verticals, template quality, complaint signals, approval cost, and the balance between customer iteration speed and platform trust. |

## Submission Checklist

- Confirm the live assignment SPA works: <https://zalo-tpo.duypham.me/>
- Confirm direct routes work for all three exercises.
- Attach the standalone Exercise 1 HTML file if sending email attachments.
- Include the eVoyage live URL: <https://evoyage.duypham.me/>
- Include the eVoyage GitHub URL: <https://github.com/duypham9895/evoyage>
- Mention AI usage honestly: AI assisted with drafting, critique, structure, and wording; final decisions are mine.
- Be ready to explain the Exercise 3 choice as a real shipped product from a real personal problem.

## Email Draft

Subject: Senior TPO Platform Take-Home Assignment - Duy Pham

Hi,

I am submitting my Senior Technical Product Owner, ZBS Platform take-home assignment here:

<https://zalo-tpo.duypham.me/>

Recommended review path:

- Exercise 1: <https://zalo-tpo.duypham.me/exercise-1>
- Exercise 2: <https://zalo-tpo.duypham.me/exercise-2>
- Exercise 3: <https://zalo-tpo.duypham.me/exercise-3>

For Exercise 3, I submitted eVoyage, a real working EV trip-planning product I built from a problem I personally experienced after recently passing my driver's license test and renting self-drive EVs:

- Live app: <https://evoyage.duypham.me/>
- GitHub: <https://github.com/duypham9895/evoyage>

I also attached the standalone HTML file for Exercise 1, since the prompt requested a single HTML file for that exercise.

The process memo and AI usage note are included in the SPA. I used AI for structure, critique, and wording support; the product decisions, tradeoffs, and final answers are mine.

Best regards,

Duy Pham

## Contact

- Email: <mailto:phamanhduy.sg@gmail.com>
- GitHub: <https://github.com/duypham9895>
- LinkedIn: <https://www.linkedin.com/in/phamanhduy/>
- Personal website: <https://www.duypham.me/>
