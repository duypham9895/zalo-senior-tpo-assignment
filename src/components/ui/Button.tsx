import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  to?: string;
  external?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md';
};

export default function Button({ children, href, to, external, variant = 'primary', size = 'md' }: ButtonProps) {
  const className = `btn btn-${variant} btn-${size}`;
  if (to) return <Link className={className} to={to}>{children}</Link>;
  if (href) {
    return (
      <a className={className} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
        {children}
      </a>
    );
  }
  return <button className={className} type="button">{children}</button>;
}
