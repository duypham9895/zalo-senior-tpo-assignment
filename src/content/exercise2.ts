export const assetImpactRows = [
  { area: 'Customer speed', benefit: 'Reuse approved logo/image/CTA without full template re-review.' },
  { area: 'Admin efficiency', benefit: 'Review changed asset once instead of repeated template duplicates.' },
  { area: 'Audit safety', benefit: 'Templates pin immutable asset versions.' },
  { area: 'UX clarity', benefit: 'Business Portal shows status, usage, and version history.' },
];

export const behaviorRows = [
  { scenario: 'Update approved logo', behavior: 'Create v2 pending review; templates stay on v1.' },
  { scenario: 'v2 approved', behavior: 'User can apply to new templates or migrate selected existing templates.' },
  { scenario: 'Asset disabled', behavior: 'Block new usage; severity decides grace period or immediate send block.' },
  { scenario: 'Cross-template reuse', behavior: 'Allowed only by OA/scope/type/tag compatibility.' },
];

export const apiRows = [
  { api: 'POST /asset/create', purpose: 'Create logical asset.' },
  { api: 'POST /asset/{asset_id}/version', purpose: 'Create immutable asset version.' },
  { api: 'POST /asset-version/{id}/submit-review', purpose: 'Submit version for approval.' },
  { api: 'GET /asset/list', purpose: 'List approved/pending/rejected assets.' },
  { api: 'GET /asset/{id}/usage', purpose: 'Show templates using each version.' },
];

export const riskRows = [
  { risk: 'Silent mutation', control: 'Immutable asset versions.' },
  { risk: 'Misleading CTA context', control: 'Template context review still required.' },
  { risk: 'Promo CTA in transaction template', control: 'Allowed tag validation.' },
  { risk: 'Cross-OA misuse', control: 'Ownership and sharing permissions.' },
  { risk: 'External URL changes', control: 'URL safety checks and redirect monitoring.' },
];
