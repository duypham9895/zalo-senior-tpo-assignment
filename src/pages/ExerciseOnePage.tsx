import BundleFlow from '../components/diagrams/BundleFlow';
import SettlementFlow from '../components/diagrams/SettlementFlow';
import Accordion from '../components/ui/Accordion';
import Callout from '../components/ui/Callout';
import CodeRule from '../components/ui/CodeRule';
import ComparisonTable from '../components/ui/ComparisonTable';
import InsightCard from '../components/ui/InsightCard';
import Section from '../components/ui/Section';
import {
  abuseRows,
  gapRows,
  marketRows,
  metricsRows,
  modelCards,
  primitiveRows,
  stakeholderRows,
} from '../content/exercise1';

const stakeholderColumns = [
  { key: 'question', label: 'Question' },
  { key: 'answer', label: 'Direct answer' },
];

const marketColumns = [
  { key: 'platform', label: 'Platform' },
  { key: 'lesson', label: 'What they teach' },
  { key: 'zalo', label: 'What Zalo can apply' },
];

const primitiveColumns = [
  { key: 'primitive', label: 'Existing ZBS primitive' },
  { key: 'use', label: 'How I use it' },
];

const gapColumns = [
  { key: 'gap', label: 'Gap' },
  { key: 'why', label: 'Why it matters' },
];

const abuseColumns = [
  { key: 'risk', label: 'Risk' },
  { key: 'control', label: 'Control' },
];

const metricsColumns = [
  { key: 'metric', label: 'Metric' },
  { key: 'why', label: 'Why track it' },
];

const impactRows = [
  {
    area: 'Customer benefit',
    withBundle: 'Predictable cost per order/return journey, fewer invoice disputes, easier budgeting, better ROI for complete customer communication.',
    withoutBundle: 'Customer may skip useful messages, split flows across channels, or negotiate ad-hoc discounts instead of scaling on Zalo.',
  },
  {
    area: 'Customer inconvenience',
    withBundle: 'Needs bundle setup, allowed-template rules, reporting changes, and internal mapping from business_ref_id to Zalo bundle instance.',
    withoutBundle: 'Every message feels like a separate cost center. Finance cannot easily connect spend to one business event.',
  },
  {
    area: 'Zalo benefit',
    withBundle: 'Own more end-to-end business flows, increase delivered volume, improve retention, create vertical packages, and reduce price-only churn.',
    withoutBundle: 'Zalo remains a per-message pipe. Competitors can win by packaging journeys around business outcomes.',
  },
  {
    area: 'Zalo revenue',
    withBundle: 'Protect revenue with bundle minimums, eligibility rules, and upsell tiers while growing usage per customer workflow.',
    withoutBundle: 'Short-term standalone revenue may stay higher, but long-term volume and platform stickiness are weaker.',
  },
];

const finalDesignRows = [
  {
    part: 'Bundle Definition',
    meaning: 'Commercial config: bundle_type, allowed templates, max messages, expiry, bundled unit price, minimum fee, and eligibility policy.',
  },
  {
    part: 'Bundle Instance',
    meaning: 'One real customer business flow, such as one order_id, return_id, booking_id, or shipment_id.',
  },
  {
    part: 'Bundle Token',
    meaning: 'Runtime identifier scoped to OA + customer + bundle_type + business_ref_id.',
  },
  {
    part: 'Message Ledger',
    meaning: 'Billing truth: msg_id, tracking_id, template_id, sent_time, delivery_time, status, and charge_state.',
  },
  {
    part: 'Settlement Job',
    meaning: 'Finalizes charge after delivery evidence arrives or the 2-hour cutoff passes.',
  },
];

const chargingRows = [
  {
    step: 'Send request',
    rule: 'Customer sends approved template with bundle_token and tracking_id.',
    why: 'tracking_id supports reconciliation and idempotency.',
  },
  {
    step: 'Validate bundle',
    rule: 'Check OA, customer, template whitelist, expiry, max messages, and active state.',
    why: 'Prevents random messages from getting bundle discount.',
  },
  {
    step: 'Create ledger row',
    rule: 'Store msg_id, tracking_id, bundle_instance_id, template_id, send status, and pending charge state.',
    why: 'Billing must be traceable and auditable.',
  },
  {
    step: 'Wait for delivery',
    rule: 'Use delivery webhook/status as evidence.',
    why: 'Billing should reflect delivered value, not accepted API call.',
  },
  {
    step: 'Settle bundle',
    rule: 'Sum eligible delivered messages and apply minimum bundle fee.',
    why: 'Protects Zalo revenue while giving customer cheaper in-flow pricing.',
  },
];

const concreteExampleRows = [
  {
    message: 'Order confirmed',
    bundleFit: 'Allowed transactional template in order flow.',
  },
  {
    message: 'Payment success',
    bundleFit: 'Allowed if tied to the same order_id.',
  },
  {
    message: 'Packed / handed to shipper',
    bundleFit: 'Allowed if sent within bundle expiry and max message count.',
  },
  {
    message: 'Shipping update',
    bundleFit: 'Allowed if delivered within the 2-hour charging window.',
  },
  {
    message: 'Promotional cross-sell',
    bundleFit: 'Not allowed. It should use standalone/promo pricing, not bundle discount.',
  },
];


const identityRuleRows = [
  { rule: 'Primary identity', detail: 'bundle_instance_id is the durable billing identity; bundle_token is the runtime send context.' },
  { rule: 'Scope', detail: 'Token is scoped to oa_id + customer_identifier + bundle_type + business_ref_id + expiry.' },
  { rule: 'One active flow', detail: 'Same OA + same customer + same bundle_type + same business_ref_id should map to one active bundle instance.' },
  { rule: 'Close condition', detail: 'Bundle closes when max messages reached, business closes it, or expiry/2-hour settlement window finishes.' },
];

const billingExampleRows = [
  { item: 'Messages sent in Order #12345', value: '6' },
  { item: 'Delivered within 2 hours', value: '4 messages → chargeable' },
  { item: 'Delivered after 2 hours', value: '1 message → not chargeable under 2-hour rule' },
  { item: 'Failed / not delivered', value: '1 message → not chargeable' },
  { item: 'Standalone unit price', value: 'S' },
  { item: 'Bundled eligible unit price', value: 'B, where B < S' },
  { item: 'Bundle minimum fee', value: 'M' },
  { item: 'Final charge', value: 'max(M, 4B)' },
];

const revenueProtectionRows = [
  { lever: 'Minimum bundle fee', impact: 'Prevents one-message discount abuse and protects Zalo revenue floor.' },
  { lever: 'Template whitelist', impact: 'Stops promotional traffic from using transaction-flow bundle pricing.' },
  { lever: 'Max message count + expiry', impact: 'Prevents unlimited discounted sends inside one business reference.' },
  { lever: 'Delivery-based billing', impact: 'Keeps customer trust because Zalo charges for delivered value, not just accepted requests.' },
  { lever: 'Usage dashboard', impact: 'Creates upsell path to higher bundle tiers when customer repeatedly hits limits.' },
];

const packagingRows = [
  { package: 'E-commerce Order Flow', useCase: 'Order confirmation, payment, packing, shipping, delivery updates.' },
  { package: 'Return Flow', useCase: 'Return request, pickup, warehouse received, refund status.' },
  { package: 'Delivery Flow', useCase: 'Driver assigned, out for delivery, failed delivery, reschedule.' },
  { package: 'Appointment Flow', useCase: 'Booking confirmation, reminder, reschedule, post-service follow-up.' },
];

const assumptionRows = [
  { type: 'Assumption', point: 'The 2-hour charging rule is a hard billing policy for this feature unless Zalo confirms otherwise.' },
  { type: 'Assumption', point: 'Template category/tag can be used to restrict eligible bundle messages.' },
  { type: 'Assumption', point: 'Delivery webhook/status is reliable enough to act as billing settlement evidence.' },
  { type: 'Question', point: 'Should bundle token be created explicitly by API, or should Zalo infer bundle by business_ref_id?' },
  { type: 'Question', point: 'Which template categories should be eligible for bundle pricing in the first launch?' },
  { type: 'Question', point: 'Should the minimum bundle fee apply if zero messages are delivered, or only when at least one eligible message is delivered?' },
  { type: 'Question', point: 'Should customers manually close a bundle, or should the system close it only by expiry/max messages?' },
];


export default function ExerciseOnePage() {
  return (
    <div className="page">
      <section className="hero page-hero">
        <div>
          <p className="eyebrow">Exercise 1</p>
          <h1>Multi-Message Bundle</h1>
          <p className="hero-lead">Build it as customer-flow pricing, not a generic discount.</p>
        </div>
        <InsightCard
          title="Direct decision"
          tone="blue"
          body="Use existing ZBS primitives first: templates, Send API, tracking_id, msg_id, delivery status/webhook, quota, quality, pricing timeout, and Journey-like events. Extend only the missing generic bundle layer."
        />
      </section>

      <nav className="anchor-nav" aria-label="Exercise 1 section map">
        <a href="#final-design">Final design</a>
        <a href="#business-alignment">Business</a>
        <a href="#platform-model">Model</a>
        <a href="#charging-logic">Charging</a>
        <a href="#abuse-prevention">Abuse</a>
        <a href="#assumptions">Questions</a>
      </nav>

      <Section id="final-design" eyebrow="0. Final design" title="The complete answer in one screen">
        <div className="grid three">
          <InsightCard title="Why build" tone="blue" body="Businesses already send 6–7 messages for order flows and 5–7 for return flows. Bundle pricing makes the full customer flow easier to budget and scale." />
          <InsightCard title="Product decision" body="Price the business flow, not only the API call. Keep standalone pricing, but make eligible messages cheaper inside a controlled bundle." />
          <InsightCard title="Platform decision" body="Reuse current ZBS primitives first. Add only the missing generic bundle definition, instance, ledger, and settlement layer." />
        </div>
        <ComparisonTable
          columns={[
            { key: 'part', label: 'Part' },
            { key: 'meaning', label: 'Meaning' },
          ]}
          rows={finalDesignRows}
          caption="Final system shape"
        />
        <ComparisonTable
          columns={[
            { key: 'rule', label: 'Identity rule' },
            { key: 'detail', label: 'Detail' },
          ]}
          rows={identityRuleRows}
          caption="How related messages are identified"
        />
      </Section>

      <Section id="business-alignment" eyebrow="1. Business alignment" title="Why this feature should exist before we design the system">
        <ComparisonTable columns={stakeholderColumns} rows={stakeholderRows} caption="Stakeholder alignment" />
        <ComparisonTable
          columns={[
            { key: 'area', label: 'Area' },
            { key: 'withBundle', label: 'If we build Multi-Message Bundle' },
            { key: 'withoutBundle', label: 'If we do not build it' },
          ]}
          rows={impactRows}
          caption="Customer and Zalo impact"
        />
      </Section>

      <Section id="market-learning" eyebrow="2. Market learning" title="This is not a new problem; messaging platforms already moved toward value-based packaging">
        <ComparisonTable columns={marketColumns} rows={marketRows} caption="Comparable platform lessons" />
        <Callout title="Takeaway">
          Market direction is not “charge every API call equally.” The direction is delivered value, message purpose, customer interaction window,
          volume, and business context.
        </Callout>
      </Section>

      <Section id="zbs-foundation" eyebrow="3. Current ZBS foundation" title="What Zalo already has and what I should reuse">
        <ComparisonTable columns={primitiveColumns} rows={primitiveRows} caption="Existing primitives to rely on" />
        <Accordion title="My pushback against over-assumption">
          <p>
            I should not blindly say “extend Journey Token.” Journey is the closest existing grouping pattern, but the design should rely on the
            full ZBS API surface. Journey proves Zalo already has grouped lifecycle and charged/expired events, but Multi-Message Bundle needs a
            generic model for multiple business flows.
          </p>
        </Accordion>
      </Section>

      <Section id="gap-analysis" eyebrow="4. Gap analysis" title="What existing ZBS cannot safely solve yet">
        <ComparisonTable columns={gapColumns} rows={gapRows} caption="Platform gaps" />
      </Section>

      <Section id="platform-model" eyebrow="5. Proposed model" title="Extend ZBS with a generic bundle layer around current messaging primitives">
        <BundleFlow />
        <div className="grid five">
          {modelCards.map((card) => (
            <InsightCard key={card.title} title={card.title} body={card.body} />
          ))}
        </div>
        <CodeRule>{`bundle_definition = {
  bundle_type: "ecommerce_order_flow",
  allowed_template_ids: [...],
  max_messages: 7,
  expiry_minutes: 120,
  bundled_unit_price: lower_than_standalone,
  minimum_bundle_fee: configured_floor,
  allowed_tags: ["transactional"],
  status: "active"
}

bundle_instance = {
  bundle_instance_id,
  bundle_token,
  oa_id,
  customer_identifier,
  business_ref_id: "order_12345",
  state: "open | settling | closed | expired"
}`}</CodeRule>
      </Section>

      <Section id="charging-logic" eyebrow="6. Charging logic" title="Do not charge on Send API success. Charge on delivered value inside the 2-hour eligibility window.">
        <SettlementFlow />
        <ComparisonTable
          columns={[
            { key: 'step', label: 'Step' },
            { key: 'rule', label: 'Rule' },
            { key: 'why', label: 'Why' },
          ]}
          rows={chargingRows}
          caption="Charging model"
        />
        <ComparisonTable
          columns={[
            { key: 'message', label: 'Example message in Order #12345' },
            { key: 'bundleFit', label: 'Bundle eligibility' },
          ]}
          rows={concreteExampleRows}
          caption="Concrete e-commerce order example"
        />
        <ComparisonTable
          columns={[
            { key: 'item', label: 'Billing example' },
            { key: 'value', label: 'Value' },
          ]}
          rows={billingExampleRows}
          caption="Numeric example with variables, not real Zalo pricing"
        />
        <Callout title="Why 2 hours">
          Send API success only proves Zalo accepted the request. It does not prove the user received the message. ZBS delivery status/webhook gives
          delivery evidence, and ZBS template APIs expose <code>timeout = 7200000 ms</code>, which equals 2 hours. The assignment’s 2-hour rule should
          therefore be treated as the settlement window: wait for delivery evidence, then charge if eligible.
        </Callout>
        <CodeRule>{`For each message in bundle_instance:
  if send_success != true:
    charge = 0
  else if delivery_status == delivered AND delivery_time <= sent_time + 2 hours:
    charge = eligible_bundle_unit_price
  else:
    charge = 0

bundle_charge = max(bundle_minimum_fee, sum(eligible_message_charges))
apply only to allowed templates within bundle policy`}</CodeRule>
        <Callout title="Invoice and reconciliation UX">
          Customer invoice should show bundle_instance_id, business_ref_id, eligible delivered messages, non-chargeable messages, minimum fee adjustment, and final charge. This makes bundled pricing easier to trust than opaque discounts.
        </Callout>
      </Section>

      <Section id="abuse-prevention" eyebrow="7. Abuse prevention" title="Protect Zalo revenue and ecosystem trust">
        <ComparisonTable columns={abuseColumns} rows={abuseRows} caption="Risk controls" />
        <ComparisonTable
          columns={[
            { key: 'lever', label: 'Revenue protection lever' },
            { key: 'impact', label: 'Impact' },
          ]}
          rows={revenueProtectionRows}
          caption="Revenue protection"
        />
      </Section>

      <Section eyebrow="8. Packaging recommendation" title="Launch as customer journey packages, not generic cheap messages">
        <ComparisonTable
          columns={[
            { key: 'package', label: 'Package' },
            { key: 'useCase', label: 'Use case' },
          ]}
          rows={packagingRows}
          caption="Recommended first packages"
        />
        <Callout title="Positioning">
          Do not launch this as “discounted messages.” Launch it as customer journey pricing: predictable cost per order, return, delivery, or appointment flow.
        </Callout>
      </Section>

      <Section id="rollout" eyebrow="9. Rollout and metrics" title="Ship safely before expanding">
        <div className="timeline">
          <div><strong>Pilot</strong><span>One vertical, strict template whitelist, low risk customers.</span></div>
          <div><strong>Beta</strong><span>Add reporting, invoice reconciliation, anomaly detection.</span></div>
          <div><strong>GA</strong><span>Publish bundle APIs, pricing packages, dashboard, SLA metrics.</span></div>
        </div>
        <ComparisonTable columns={metricsColumns} rows={metricsRows} caption="Success metrics" />
      </Section>

      <Section id="assumptions" eyebrow="10. Assumptions and Zalo questions" title="What I would confirm before implementation">
        <ComparisonTable
          columns={[
            { key: 'type', label: 'Type' },
            { key: 'point', label: 'Point' },
          ]}
          rows={assumptionRows}
          caption="Assumptions and discovery questions"
        />
      </Section>
    </div>
  );
}
