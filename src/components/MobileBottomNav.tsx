import { NavLink } from 'react-router-dom';

export default function MobileBottomNav() {
  const items = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'Bag', path: '/cart' },
    { label: 'Look', path: '/lookbook' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-ink/95 backdrop-blur-md border-t border-ecru/10 z-50 pb-safe">
      <div className="flex justify-around items-center py-3">
        {items.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `text-[10px] tracking-[0.15em] uppercase font-bold py-1 px-3 transition-colors ${
                isActive
                  ? 'text-worn-gold'
                  : 'text-ecru/40 active:text-ecru'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
