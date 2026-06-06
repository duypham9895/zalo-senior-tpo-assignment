import FlowDiagram from '../ui/FlowDiagram';

export default function SettlementFlow() {
  return (
    <FlowDiagram
      caption="Charging settlement"
      steps={[
        'Send accepted',
        'Pending ledger row',
        'Delivery status/webhook',
        'Check 2-hour window',
        'Eligible or not chargeable',
        'Bundle total settled',
      ]}
    />
  );
}
