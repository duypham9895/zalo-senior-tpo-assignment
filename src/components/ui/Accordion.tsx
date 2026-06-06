import type { ReactNode } from 'react';

export default function Accordion({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="accordion">
      <summary>{title}</summary>
      <div className="accordion-body">{children}</div>
    </details>
  );
}
