import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import ComparisonTable from '../components/ui/ComparisonTable';
import InsightCard from '../components/ui/InsightCard';
import Section from '../components/ui/Section';

const assignmentCards = [
  {
    label: 'Exercise 1',
    title: 'Multi-Message Bundle',
    body: 'Customer-flow pricing for related ZBS messages. Business reason first, then model, billing, abuse control, and rollout.',
    to: '/exercise-1',
  },
  {
    label: 'Exercise 2',
    title: 'Trusted Assets',
    body: 'Reusable approved logo/image/CTA assets with immutable versions so templates stay safe and review cost goes down.',
    to: '/exercise-2',
  },
  {
    label: 'Exercise 3',
    title: 'eVoyage',
    body: 'A live EV trip-planning product for Vietnam. Shows problem framing, implementation, and working software.',
    to: '/exercise-3',
  },
];

const submissionRows = [
  { item: 'Main SPA', purpose: 'Primary review experience for all three exercises.', location: <Link to="/">Home</Link> },
  { item: 'Exercise 1 route', purpose: 'Interactive SPA version with diagrams, tables, billing logic, and rollout.', location: <Link to="/exercise-1">/exercise-1</Link> },
  { item: 'Exercise 2 route', purpose: 'Trusted Assets Business Portal artifact, API changes, approval rules, and lifecycle behavior.', location: <Link to="/exercise-2">/exercise-2</Link> },
  { item: 'Exercise 3 route', purpose: 'eVoyage product case study with live app and GitHub links.', location: <Link to="/exercise-3">/exercise-3</Link> },
  { item: 'eVoyage live app', purpose: 'Working deployed product.', location: <a href="https://evoyagevn.vercel.app/" target="_blank" rel="noreferrer">Live app</a> },
  { item: 'eVoyage GitHub', purpose: 'Source code for technical review.', location: <a href="https://github.com/duypham9895/evoyage" target="_blank" rel="noreferrer">GitHub</a> },
];

export default function HomePage() {
  return (
    <div className="page home-page">
      <section className="hero hero-home">
        <div className="hero-copy">
          <p className="eyebrow">Senior Technical Product Owner · ZBS Platform</p>
          <h1>Zalo take-home assignment</h1>
          <p className="hero-lead">Business-first product thinking. Platform-aware system design. Working software.</p>
          <p>
            Hi, I’m Duy Pham. This SPA presents my response to the Senior Technical Product Owner take-home assignment for
            Zalo Business Solutions.
          </p>
          <p>
            I am a Software Engineer turned Product Manager. My strength is solving platform problems where product decisions depend on system understanding.
          </p>
          <p>
            I organized it the way I approach product work: align business value first, learn from existing systems and market patterns,
            identify gaps, then propose the smallest credible platform extension.
          </p>
          <div className="hero-actions">
            <Button to="/exercise-1">Start with Exercise 1</Button>
            <Button href="https://evoyagevn.vercel.app/" external variant="secondary">View eVoyage live</Button>
          </div>
        </div>
        <div className="hero-panel" aria-label="Assignment map">
          <p className="panel-label">Reviewer path</p>
          {assignmentCards.map((card) => (
            <Link className="exercise-card compact" to={card.to} key={card.label}>
              <span>{card.label}</span>
              <strong>{card.title}</strong>
              <small>{card.body}</small>
            </Link>
          ))}
        </div>
      </section>

      <Section
        eyebrow="How to read"
        title="Scan the diagrams and tables first. Deep dive only where needed."
        intro="Each exercise starts with the direct decision, then shows why, current system understanding, proposed extension, risks, and metrics."
      >
        <div className="grid three">
          <InsightCard title="1. Align business value" tone="blue" body="Before solving the system, I clarify why the feature should exist, who benefits, and what happens if we do not build it." />
          <InsightCard title="2. Respect existing platform" body="I do not assume a new system first. I identify current ZBS primitives, then extend only where the problem cannot be solved safely." />
          <InsightCard title="3. Make tradeoffs explicit" body="Every important recommendation includes the reason, risk, and control. If something needs confirmation from Zalo, I say it directly." />
        </div>
      </Section>

      <Section eyebrow="Submission package" title="What to open during review">
        <ComparisonTable
          columns={[
            { key: 'item', label: 'Item' },
            { key: 'purpose', label: 'Purpose' },
            { key: 'location', label: 'Location' },
          ]}
          rows={submissionRows}
          caption="Review package"
        />
      </Section>

      <Section eyebrow="Process memo" title="Evidence, tools, and working method">
        <div className="callout split-callout">
          <strong>How I produced this</strong>
          <ul className="memo-list">
            <li>Read the assignment PDF and broke each exercise into decision questions.</li>
            <li>Reviewed Zalo Developer docs for ZBS Template Message API behavior and delivery/billing implications.</li>
            <li>Used comparable messaging platforms to understand pricing, delivery, and packaging patterns.</li>
            <li>Inspected my local eVoyage project and validated the deployed Vercel link.</li>
            <li>Used AI assistance to structure thinking, challenge assumptions, draft artifacts, and improve clarity.</li>
            <li>Checked final product decisions against assignment requirements, Zalo API behavior, and implementation tradeoffs.</li>
          </ul>
          <strong>Decision ownership</strong>
          <p>
            AI helped with drafting and organization. Product decisions remain reasoned from the assignment, existing ZBS primitives,
            competitor patterns, and implementation tradeoffs.
          </p>
        </div>
      </Section>

      <Section eyebrow="Interview discussion" title="Topics I would like to discuss with the Zalo team">
        <div className="grid four">
          <InsightCard title="Pricing packages" body="How Zalo currently thinks about ZBS bundle pricing, volume tiers, and vertical packaging." />
          <InsightCard title="Template quality" body="How Zalo measures template quality, user complaints, and ecosystem trust." />
          <InsightCard title="Priority verticals" body="Which customer flows matter most first: e-commerce, logistics, returns, appointments, or customer care." />
          <InsightCard title="Platform tradeoffs" body="How Zalo balances customer iteration speed with approval safety and operational cost." />
        </div>
      </Section>
    </div>
  );
}
