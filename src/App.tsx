import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import {
  Journey,
  Experience,
  Projects,
  Achievements,
  Skills,
  Education,
  Contact,
  Footer,
} from './components/Sections';
import './App.css';

const ACCENTS = [
  { name: 'Red', hex: '#dc2626' },
  { name: 'Green', hex: '#16a34a' },
  { name: 'Blue', hex: '#2563eb' },
  { name: 'Orange', hex: '#ea580c' },
  { name: 'Purple', hex: '#9333ea' },
  { name: 'White', hex: '#e8e8e8' },
];

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [colorIdx, setColorIdx] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const accent = ACCENTS[colorIdx];
    // Only apply the accent color — pure white stays neutral for dark
    if (accent.name === 'White') {
      document.documentElement.style.setProperty('--accent', '#e8e8e8');
      document.documentElement.style.setProperty('--accent-light', '#ffffff');
      document.documentElement.style.setProperty('--accent-glow', 'rgba(232, 232, 232, 0.25)');
      document.documentElement.style.setProperty('--accent-muted', 'rgba(232, 232, 232, 0.10)');
    } else {
      const r = parseInt(accent.hex.slice(1,3), 16);
      const g = parseInt(accent.hex.slice(3,5), 16);
      const b = parseInt(accent.hex.slice(5,7), 16);
      document.documentElement.style.setProperty('--accent', accent.hex);
      document.documentElement.style.setProperty('--accent-light', `rgb(${Math.min(255,r+40)},${Math.min(255,g+40)},${Math.min(255,b+40)})`);
      document.documentElement.style.setProperty('--accent-glow', `rgba(${r},${g},${b},0.25)`);
      document.documentElement.style.setProperty('--accent-muted', `rgba(${r},${g},${b},0.10)`);
    }
  }, [colorIdx]);

  const toggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
    const flash = document.createElement('div');
    flash.style.cssText = 'position:fixed;inset:0;z-index:99999;pointer-events:none;background:var(--accent);opacity:0.04;transition:opacity 0.3s';
    document.body.appendChild(flash);
    requestAnimationFrame(() => { flash.style.opacity = '0'; });
    setTimeout(() => flash.remove(), 400);
  };

  const cycleColor = () => {
    const next = (colorIdx + 1) % ACCENTS.length;
    setColorIdx(next);
  };

  return (
    <div className="app-container">
      <div className="bg-grid" />
      <div className="noise-overlay" />

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        currentAccent={ACCENTS[colorIdx]}
        cycleColor={cycleColor}
      />
      <Hero />
      <About />
      <Journey />
      <Experience />
      <Projects />
      <Achievements />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;