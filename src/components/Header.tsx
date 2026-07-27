import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header
      className="fixed top-0 w-full z-50 flex justify-between items-center px-5 md:px-10 py-4 bg-ink/80 backdrop-blur-md border-b border-ecru/5"
    >
      <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
        <img src="/ANGIETHREADZLOGO.png" alt="Angie.Threadz Logo" className="h-12 w-auto" />
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {[
          { to: '/shop', label: 'Shop' },
          { to: '/lookbook', label: 'Visual Diary' },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`text-xs tracking-[0.2em] uppercase transition-colors ${
              pathname === to ? 'text-worn-gold' : 'text-ecru/60 hover:text-ecru'
            }`}
          >
            {label}
          </Link>
        ))}
        <Link
          to="/cart"
          className="text-xs tracking-[0.2em] uppercase text-ecru/60 hover:text-ecru transition-colors"
        >
          Bag (1)
        </Link>
      </nav>
    </header>
  );
}
