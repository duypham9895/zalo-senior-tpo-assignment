export const stakeholderRows = [
  { question: 'Why build?', answer: 'Businesses have multi-step flows. Per-message pricing makes full flow expensive and hard to budget.' },
  { question: 'Customer gain', answer: 'Lower unit cost for real bundled flow, clearer order/return-level cost, better reconciliation.' },
  { question: 'Zalo gain', answer: 'More flow ownership, more message volume, better retention, new vertical package, bundle minimum revenue floor.' },
  { question: 'Main risk', answer: 'Cannibalize standalone revenue and create abuse if bundle is only “cheap messages”.' },
  { question: 'Positioning', answer: 'Sell as customer-flow pricing, not generic discount.' },
];

export const marketRows = [
  { platform: 'WhatsApp', lesson: 'Delivered-only template pricing, category-based rates, service windows, volume tiers.', zalo: 'Charge only delivered eligible messages; use ZBS template tags and delivery evidence.' },
  { platform: 'LINE', lesson: 'Plans include free monthly quota; message counting rules are clear and predictable.', zalo: 'Make bundle cost predictable and show how messages count.' },
  { platform: 'Viber', lesson: 'Delivered-message charging and separation of promotional, transactional, conversational use cases.', zalo: 'Separate transaction bundles from promo/customer-care bundles.' },
];

export const primitiveRows = [
  { primitive: 'Templates', use: 'Approval, tag, price, timeout, quality.' },
  { primitive: 'Send API', use: 'Base path to send bundled message.' },
  { primitive: 'tracking_id', use: 'Partner reconciliation and idempotency.' },
  { primitive: 'msg_id', use: 'Message ledger identity.' },
  { primitive: 'Delivery webhook/status', use: 'Evidence for 2-hour charge eligibility.' },
  { primitive: 'Quota + quality APIs', use: 'Limits, throttling, and abuse control.' },
  { primitive: 'Journey events', use: 'Precedent for grouped lifecycle and billing events.' },
];

export const gapRows = [
  { gap: 'No generic bundle definition', why: 'Cannot define e-commerce order bundle or return bundle.' },
  { gap: 'No generic bundle instance', why: 'Cannot bind messages to one actual order/return for one customer.' },
  { gap: 'Journey is limited', why: 'Current Journey is specific to logistics/coach bus.' },
  { gap: 'No aggregate charge ledger', why: 'Need sum eligible delivered messages and apply minimum once.' },
  { gap: 'No template whitelist by bundle', why: 'Needed to prevent discount misuse.' },
];

export const modelCards = [
  { title: 'Bundle Definition', body: 'Product config: type, allowed templates, max messages, expiry, price, minimum, policy.' },
  { title: 'Bundle Instance', body: 'One customer flow: one order, one return, one booking, one trip.' },
  { title: 'Bundle Token', body: 'Runtime context scoped to OA + customer + bundle type + business_ref_id.' },
  { title: 'Message Ledger', body: 'Billing truth: msg_id, tracking_id, sent_time, delivery_time, status, charge state.' },
  { title: 'Settlement Job', body: 'Finalizes charge after delivery evidence or 2-hour cutoff.' },
];

export const abuseRows = [
  { risk: 'Promo misuse', control: 'Template whitelist + tag restrictions.' },
  { risk: 'One-message discount abuse', control: 'Bundle minimum + anomaly monitoring.' },
  { risk: 'Token reuse', control: 'Scope token to OA + customer + business_ref_id.' },
  { risk: 'Too many messages', control: 'Max messages + expiry.' },
  { risk: 'Duplicate retries', control: 'Idempotent tracking_id.' },
];

export const metricsRows = [
  { metric: 'Average messages per bundle', why: 'Detect real flow usage vs one-message abuse.' },
  { metric: 'Revenue per business event', why: 'Check if bundle grows value, not only discounts.' },
  { metric: 'Delivered-within-2h rate', why: 'Measure charge eligibility health.' },
  { metric: 'Invoice dispute rate', why: 'Check billing clarity.' },
  { metric: 'User complaint rate', why: 'Protect Zalo ecosystem trust.' },
];
