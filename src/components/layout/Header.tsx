import { Link, NavLink } from 'react-router-dom';
import Button from '../ui/Button';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/exercise-1', label: 'Exercise 1' },
  { to: '/exercise-2', label: 'Exercise 2' },
  { to: '/exercise-3', label: 'Exercise 3' },
];

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Go to home">
        <span className="brand-mark">Z</span>
        <span>
          <strong>Duy Pham</strong>
          <small>Zalo TPO Assignment</small>
        </span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <Button href="https://evoyagevn.vercel.app/" external size="sm">
        eVoyage Live
      </Button>
    </header>
  );
}
