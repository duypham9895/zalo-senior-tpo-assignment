import type { ReactNode } from 'react';

type InsightCardProps = {
  title: string;
  body: ReactNode;
  tone?: 'default' | 'blue' | 'success' | 'warning';
};

export default function InsightCard({ title, body, tone = 'default' }: InsightCardProps) {
  return (
    <article className={`insight-card tone-${tone}`}>
      <h3>{title}</h3>
      <div>{body}</div>
    </article>
  );
}
