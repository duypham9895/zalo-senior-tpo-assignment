import FlowDiagram from '../ui/FlowDiagram';

export default function TrustedAssetsFlow() {
  return (
    <FlowDiagram
      caption="Trusted Assets approval workflow"
      steps={[
        'Asset Library',
        'Create Asset Version',
        'Admin Review',
        'Approved Asset Version',
        'Template Reference',
        'Send approved template',
      ]}
    />
  );
}
