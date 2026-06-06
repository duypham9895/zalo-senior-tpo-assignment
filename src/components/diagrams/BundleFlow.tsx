import FlowDiagram from '../ui/FlowDiagram';

export default function BundleFlow() {
  return (
    <FlowDiagram
      caption="Proposed bundle lifecycle"
      steps={[
        'Bundle Definition',
        'Bundle Instance + Token',
        'Send with bundle context',
        'Delivery evidence',
        '2-hour settlement',
        'Bundle invoice',
      ]}
    />
  );
}
