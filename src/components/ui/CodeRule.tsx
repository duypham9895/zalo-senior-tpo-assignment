import type { ReactNode } from 'react';

export default function CodeRule({ children }: { children: ReactNode }) {
  return <pre className="code-rule"><code>{children}</code></pre>;
}
