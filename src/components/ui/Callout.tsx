import type { ReactNode } from 'react';

export default function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="callout">
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}
