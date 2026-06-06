import type { ReactNode } from 'react';

type SectionProps = {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ eyebrow, title, intro, children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="section-heading">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {intro ? <div className="section-intro">{intro}</div> : null}
      </div>
      {children}
    </section>
  );
}
