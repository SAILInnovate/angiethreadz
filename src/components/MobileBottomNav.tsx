import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function MobileBottomNav() {
  const items = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'Bag', path: '/cart' },
    { label: 'Diary', path: '/lookbook' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-ink/95 backdrop-blur-md border-t border-ecru/10 z-50 pb-safe">
      <div className="flex justify-around items-center py-2">
        {items.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `relative text-[10px] tracking-[0.15em] uppercase font-bold py-2 px-4 transition-colors ${
                isActive ? 'text-ink' : 'text-ecru/40'
              }`
            }
          >
            {({ isActive }) => (
              <motion.div whileTap={{ scale: 0.85 }} className="relative z-10 flex items-center justify-center">
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-pill"
                    className="absolute inset-0 bg-worn-gold rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                <span>{item.label}</span>
              </motion.div>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
