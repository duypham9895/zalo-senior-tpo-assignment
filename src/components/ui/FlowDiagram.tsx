
type FlowDiagramProps = {
  steps: string[];
  caption?: string;
};

export default function FlowDiagram({ steps, caption }: FlowDiagramProps) {
  return (
    <div className="flow-block" aria-label={caption}>
      {caption ? <p className="flow-caption">{caption}</p> : null}
      <div className="flow-steps">
        {steps.map((step, index) => (
          <div className="flow-step" key={step}>
            <span className="flow-index">{index + 1}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
