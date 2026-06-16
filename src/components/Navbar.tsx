import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  currentAccent: { name: string; hex: string };
  cycleColor: () => void;
}

export default function Navbar({ theme, toggleTheme, currentAccent, cycleColor }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="navbar-inner">
        <div className="navbar-logo">
          <span className="accent">M</span>ohammad{' '}
          <span className="accent">K</span>aif
        </div>

        <ul className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {navItems.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.04 }}
            >
              <a href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="navbar-right">
          <button
            className="theme-toggle"
            onClick={cycleColor}
            aria-label="Cycle accent color"
            title={`Accent: ${currentAccent.name}`}
            style={{
              background: `${currentAccent.hex}22`,
              borderColor: currentAccent.hex,
              color: currentAccent.hex,
              fontSize: '0.65rem',
              fontWeight: 600,
              width: 44,
              letterSpacing: '0.05em',
            }}
          >
            {currentAccent.name}
          </button>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}