import Button from '../components/ui/Button';
import Callout from '../components/ui/Callout';
import ComparisonTable from '../components/ui/ComparisonTable';
import InsightCard from '../components/ui/InsightCard';
import Section from '../components/ui/Section';
import { evoyageFeatures, evoyageProofRows } from '../content/exercise3';

const architectureRows = [
  { layer: 'Frontend', implementation: 'Next.js App Router, TypeScript, Tailwind CSS.' },
  { layer: 'Map and route experience', implementation: 'Mapbox with OpenStreetMap / Leaflet-based map experience.' },
  { layer: 'Data', implementation: 'Prisma and Supabase for application data modeling.' },
  { layer: 'AI assistant', implementation: 'eVi assistant to help users reason about trip planning.' },
  { layer: 'Deployment', implementation: 'Vercel public deployment.' },
  { layer: 'Quality', implementation: 'Repository README documents Vitest and Playwright test coverage.' },
];

const nextImprovementRows = [
  { priority: '1', improvement: 'Real-time charger availability and reliability indicators.' },
  { priority: '2', improvement: 'Route confidence score based on charger density, battery buffer, and backup options.' },
  { priority: '3', improvement: 'Saved vehicle profiles and preferred charging networks.' },
  { priority: '4', improvement: 'Trip sharing so users can send itinerary, stops, and expected cost to friends/family.' },
  { priority: '5', improvement: 'More Vietnam charging-network coverage and data freshness checks.' },
  { priority: '6', improvement: 'Better mobile onboarding for first-time EV trip planners.' },
];

export default function ExerciseThreePage() {
  return (
    <div className="page">
      <section className="hero page-hero evoyage-hero">
        <div>
          <p className="eyebrow">Exercise 3</p>
          <h1>eVoyage</h1>
          <p className="hero-lead">A working EV trip-planning web app for Vietnam.</p>
          <div className="hero-actions">
            <Button href="https://evoyagevn.vercel.app/" external>Open live app</Button>
            <Button href="https://github.com/duypham9895/evoyage" external variant="secondary">View GitHub</Button>
          </div>
        </div>
        <InsightCard
          title="Direct answer"
          tone="blue"
          body="For Exercise 3, I chose to submit eVoyage, a real working product I built and deployed. It demonstrates how I identify a user problem, design a product flow, make technical tradeoffs, and ship a web app."
        />
      </section>

      <nav className="anchor-nav" aria-label="Exercise 3 section map">
        <a href="#why-evoyage">Why eVoyage</a>
        <a href="#problem">Problem</a>
        <a href="#flow">How it works</a>
        <a href="#proof">Proof</a>
        <a href="#architecture">Architecture</a>
        <a href="#roadmap">Next</a>
      </nav>

      <Section id="why-evoyage" eyebrow="1. Why I chose eVoyage" title="I chose a real shipped product instead of a shallow demo">
        <Callout title="Framing">
          The original exercise asks for a working web app around an interesting use case. I chose eVoyage because it better demonstrates my strongest fit for ZBS Platform: problem framing, product workflow design, technical execution, integration thinking, and live delivery.
        </Callout>
        <div className="grid three">
          <InsightCard title="Product judgment" body="Start from a real user anxiety: EV drivers are not confident about long-distance trips." />
          <InsightCard title="Technical ownership" body="Build around maps, route planning, vehicle constraints, charging data, AI assistance, and deployment." />
          <InsightCard title="Shipping mindset" body="Submit a public working product with live URL and GitHub source, not only a document or mockup." />
        </div>
      </Section>

      <Section id="problem" eyebrow="2. Problem I wanted to solve" title="EV drivers need confidence before long-distance travel">
        <div className="grid three">
          <InsightCard title="Problem" body="Range, charging stops, backup stations, and cost are still unclear for many EV trips in Vietnam." />
          <InsightCard title="User need" body="Drivers want to know if the trip is safe before they leave, not after battery anxiety appears on the road." />
          <InsightCard title="Product bet" body="A planning layer can make EV travel feel predictable enough for tourism, family trips, activities, and events." />
        </div>
      </Section>

      <Section id="flow" eyebrow="3. How it works" title="The app converts travel intent into an EV-safe route plan">
        <div className="flow-block">
          <p className="flow-caption">eVoyage product flow</p>
          <div className="flow-steps">
            {['Choose trip', 'Select vehicle', 'Estimate battery/range', 'Find charging stops', 'Show backup options', 'Compare cost'].map((step, index) => (
              <div className="flow-step" key={step}><span className="flow-index">{index + 1}</span><strong>{step}</strong></div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="proof" eyebrow="4. What is implemented" title="Working product, not only concept">
        <div className="feature-list">
          {evoyageFeatures.map((feature) => <span key={feature}>{feature}</span>)}
        </div>
        <ComparisonTable
          columns={[
            { key: 'area', label: 'Area' },
            { key: 'detail', label: 'Evidence' },
          ]}
          rows={evoyageProofRows}
          caption="Implementation proof"
        />
      </Section>

      <Section id="architecture" eyebrow="5. Technical architecture" title="The project is built as a real web product">
        <ComparisonTable
          columns={[
            { key: 'layer', label: 'Layer' },
            { key: 'implementation', label: 'Implementation' },
          ]}
          rows={architectureRows}
          caption="Architecture snapshot"
        />
      </Section>

      <Section eyebrow="6. Why this matters for a TPO role" title="The project shows product and technical ownership together">
        <div className="grid five">
          <InsightCard title="User problem" body="Identified EV trip uncertainty as the core user anxiety." />
          <InsightCard title="Product flow" body="Translated the problem into vehicle, battery, route, charger, backup, and cost decisions." />
          <InsightCard title="Technical tradeoffs" body="Handled map, data, routing, database, AI assistant, and deployment dependencies." />
          <InsightCard title="Execution" body="Made the product public and reviewable through live app and GitHub source." />
          <InsightCard title="TPO fit" body="Shows I can bridge product reasoning with engineering implementation details." />
        </div>
      </Section>

      <Section id="roadmap" eyebrow="7. What I would improve next" title="Roadmap thinking after v1">
        <ComparisonTable
          columns={[
            { key: 'priority', label: 'Priority' },
            { key: 'improvement', label: 'Improvement' },
          ]}
          rows={nextImprovementRows}
          caption="Next improvements"
        />
      </Section>
    </div>
  );
}
