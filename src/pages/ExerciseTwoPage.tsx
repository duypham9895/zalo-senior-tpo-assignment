import TrustedAssetsFlow from '../components/diagrams/TrustedAssetsFlow';
import Callout from '../components/ui/Callout';
import CodeRule from '../components/ui/CodeRule';
import ComparisonTable from '../components/ui/ComparisonTable';
import InsightCard from '../components/ui/InsightCard';
import Section from '../components/ui/Section';
import { apiRows, assetImpactRows, behaviorRows, riskRows } from '../content/exercise2';

const reviewRuleRows = [
  {
    change: 'Use approved logo v1 in a compatible template',
    review: 'No full re-review',
    reason: 'Asset and template context were already approved.',
  },
  {
    change: 'Replace logo v1 with approved logo v2, same brand and placement',
    review: 'Light review or system validation',
    reason: 'Asset version is approved, but template usage should remain compatible.',
  },
  {
    change: 'Change CTA from “Track order” to “Buy now”',
    review: 'Context review required',
    reason: 'Message meaning changes from transactional to promotional intent.',
  },
  {
    change: 'Change template body text',
    review: 'Full template review',
    reason: 'Core approved message content changed.',
  },
  {
    change: 'Disable asset due to policy or brand risk',
    review: 'Block new usage; evaluate existing sends by severity',
    reason: 'Trust and compliance are higher priority than speed.',
  },
];

const portalRows = [
  { name: 'Brand Logo', version: 'v1', status: 'Approved', usage: '12 templates' },
  { name: 'Brand Logo', version: 'v2', status: 'Pending', usage: '0 templates' },
  { name: 'Track Order CTA', version: 'v3', status: 'Approved', usage: '8 templates' },
  { name: 'Summer Banner', version: 'v1', status: 'Rejected', usage: '0 templates' },
];

const beforeAfterRows = [
  { today: 'Logo, image, and CTA are inline inside a template.', future: 'Assets are managed independently as approved asset versions.' },
  { today: 'Any component change triggers full template re-review.', future: 'Approved asset versions can be reused safely where context is compatible.' },
  { today: 'Admin reviews duplicate assets repeatedly across templates.', future: 'Admin reviews the changed asset version once, then validates allowed usage.' },
  { today: 'Business cannot easily see where an asset is used.', future: 'Portal shows usage graph by asset version.' },
  { today: 'Updating an asset risks mutating old approved templates.', future: 'Templates stay pinned to immutable asset_version_id.' },
  { today: 'Migration is manual and unclear.', future: 'Portal supports intentional migration from v1 to v2.' },
];


export default function ExerciseTwoPage() {
  return (
    <div className="page">
      <section className="hero page-hero">
        <div>
          <p className="eyebrow">Exercise 2</p>
          <h1>Trusted Assets</h1>
          <p className="hero-lead">Reusable approved components without silently changing approved templates.</p>
        </div>
        <InsightCard
          title="Direct decision"
          tone="blue"
          body="Build Trusted Assets as an approved asset library with immutable versions. Templates reference approved asset_version_id, not mutable inline logo/image/CTA data."
        />
      </section>

      <nav className="anchor-nav" aria-label="Exercise 2 section map">
        <a href="#trusted-pain">Current pain</a>
        <a href="#portal-artifact">Artifact</a>
        <a href="#review-policy">Review policy</a>
        <a href="#data-model">Data model</a>
        <a href="#system-changes">System changes</a>
        <a href="#risks">Risks</a>
      </nav>

      <Section id="trusted-pain" eyebrow="1. Current pain" title="The approval system is safe, but repeated asset review creates avoidable friction">
        <div className="grid two">
          <InsightCard title="Customer problem" body="A simple logo, image, or CTA update can force full template re-review even when core template content stays the same." />
          <InsightCard title="Zalo problem" body="Admin reviewers spend time reviewing duplicate assets across many templates instead of focusing on changed risk." />
        </div>
        <ComparisonTable
          columns={[
            { key: 'today', label: 'Today' },
            { key: 'future', label: 'With Trusted Assets' },
          ]}
          rows={beforeAfterRows}
          caption="Before vs after"
        />
      </Section>

      <Section id="trusted-workflow" eyebrow="2. Proposed workflow" title="Approve the asset once, then reference the approved version safely">
        <TrustedAssetsFlow />
        <Callout title="Key product rule">
          Never silently mutate approved templates. Any asset update creates a new version. Existing templates stay pinned to the old approved version
          until the business intentionally migrates them.
        </Callout>
      </Section>

      <Section id="portal-artifact" eyebrow="3. Concrete artifact" title="Business Portal flow mockup">
        <div className="portal-artifact" aria-label="Trusted Assets Business Portal mockup">
          <div className="mock-window">
            <div className="mock-header">
              <div>
                <span className="mock-dot" />
                <span className="mock-dot" />
                <span className="mock-dot" />
              </div>
              <strong>Business Portal · Trusted Assets</strong>
              <button type="button">Submit new version</button>
            </div>

            <div className="mock-grid">
              <div className="mock-panel large">
                <div className="mock-panel-title">
                  <strong>Asset Library</strong>
                  <span>Search, status, usage, and owner</span>
                </div>
                <div className="asset-table" role="table" aria-label="Asset library example">
                  <div className="asset-row asset-head" role="row">
                    <span>Name</span><span>Version</span><span>Status</span><span>Usage</span>
                  </div>
                  {portalRows.map((row) => (
                    <div className="asset-row" role="row" key={`${row.name}-${row.version}`}>
                      <span>{row.name}</span>
                      <span>{row.version}</span>
                      <span className={`status-badge ${row.status.toLowerCase()}`}>{row.status}</span>
                      <span>{row.usage}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mock-panel">
                <div className="mock-panel-title">
                  <strong>Submit Asset Version</strong>
                  <span>Create immutable v2</span>
                </div>
                <ol className="mock-list">
                  <li>Upload file or CTA payload</li>
                  <li>Set asset type and allowed use</li>
                  <li>Submit to Admin review</li>
                  <li>Keep v1 active while v2 is pending</li>
                </ol>
              </div>

              <div className="mock-panel">
                <div className="mock-panel-title">
                  <strong>Template Builder</strong>
                  <span>Reference approved versions</span>
                </div>
                <div className="field-preview"><small>Logo</small><b>Brand Logo · v1 · Approved</b></div>
                <div className="field-preview"><small>CTA</small><b>Track Order CTA · v3 · Approved</b></div>
                <p>Builder blocks pending/rejected assets and validates template category compatibility.</p>
              </div>

              <div className="mock-panel">
                <div className="mock-panel-title">
                  <strong>Admin Review</strong>
                  <span>Review changed risk only</span>
                </div>
                <ol className="mock-list">
                  <li>Validate brand / image / CTA content</li>
                  <li>Check URL safety and redirects</li>
                  <li>Set allowed placements and tags</li>
                  <li>Approve, reject, or disable</li>
                </ol>
              </div>
            </div>

            <div className="migration-strip">
              <strong>Migration UX after v2 approval</strong>
              <span>“12 templates use Brand Logo v1. Select templates to migrate to v2. Existing templates stay pinned until you confirm.”</span>
            </div>
          </div>
        </div>
      </Section>

      <Section id="review-policy" eyebrow="4. Review policy" title="Speed up safe changes, but keep risky changes under review">
        <ComparisonTable
          columns={[
            { key: 'change', label: 'Change type' },
            { key: 'review', label: 'Review behavior' },
            { key: 'reason', label: 'Reason' },
          ]}
          rows={reviewRuleRows}
          caption="Approval decision rules"
        />
      </Section>

      <Section id="trusted-impact" eyebrow="5. Business and platform impact" title="Why this is worth building">
        <ComparisonTable
          columns={[
            { key: 'area', label: 'Area' },
            { key: 'benefit', label: 'Benefit' },
          ]}
          rows={assetImpactRows}
          caption="Trusted Assets impact"
        />
      </Section>

      <Section id="data-model" eyebrow="6. Data model" title="Separate logical asset from approved immutable asset version">
        <div className="grid four">
          <InsightCard title="Asset" body="Logical object owned by OA/business. Example: Brand logo, hero image, support CTA." />
          <InsightCard title="AssetVersion" body="Immutable file/url/text payload, checksum, review status, reviewer, approval time, risk metadata." />
          <InsightCard title="TemplateAssetReference" body="Template points to asset_version_id and allowed placement, not freeform mutable content." />
          <InsightCard title="UsageGraph" body="Shows every template using each version so migration and rollback are auditable." />
        </div>
        <CodeRule>{`Template approval stores:
  template_id
  asset_version_id
  placement
  approved_context

Asset update creates:
  asset_id same
  asset_version_id new
  review_status = pending

Existing templates:
  remain pinned to previous approved asset_version_id
  until business chooses migration`}</CodeRule>
      </Section>

      <Section id="system-changes" eyebrow="7. API and system changes" title="This needs API, approval, and UX changes together">
        <div className="grid three">
          <InsightCard title="API" tone="blue" body="Add asset APIs, asset version APIs, usage API, migration API, and template references to asset_version_id." />
          <InsightCard title="Approval" body="Admin reviews asset versions independently, then validates template-context compatibility before reuse." />
          <InsightCard title="UX" body="Business Portal adds asset library, version history, compatible asset picker, rejection reasons, and bulk migration flow." />
        </div>
        <ComparisonTable
          columns={[
            { key: 'api', label: 'API' },
            { key: 'purpose', label: 'Purpose' },
          ]}
          rows={apiRows}
          caption="New API surface"
        />
        <div className="portal-mock" aria-label="System change summary">
          <div><strong>API</strong><span>Create assets, create versions, submit review, list status, show usage, migrate references.</span></div>
          <div><strong>Approval</strong><span>Review asset version independently, then validate context when template references it.</span></div>
          <div><strong>Business Portal</strong><span>Library, version history, compatibility checks, bulk migration, rejection reason.</span></div>
          <div><strong>Admin Portal</strong><span>Risk metadata, allowed tags/placements, disable policy, usage impact before action.</span></div>
        </div>
      </Section>

      <Section id="trusted-behavior" eyebrow="8. Behavior over time" title="Versioning keeps old sends stable while allowing controlled updates">
        <ComparisonTable
          columns={[
            { key: 'scenario', label: 'Scenario' },
            { key: 'behavior', label: 'Behavior' },
          ]}
          rows={behaviorRows}
          caption="Runtime behavior"
        />
      </Section>

      <Section id="risks" eyebrow="9. Risks and controls" title="Do not reduce review friction by weakening trust">
        <ComparisonTable
          columns={[
            { key: 'risk', label: 'Risk' },
            { key: 'control', label: 'Control' },
          ]}
          rows={riskRows}
          caption="Controls"
        />
        <Callout title="Decision boundary">
          Trusted Assets should reduce repeated review for stable brand components. It should not bypass template context review when the meaning,
          promotion intent, or compliance risk changes.
        </Callout>
      </Section>
    </div>
  );
}
