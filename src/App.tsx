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
  { name: 'Red', hex: '#dc2626', id: 'red' },
  { name: 'Green', hex: '#16a34a', id: 'green' },
  { name: 'Blue', hex: '#2563eb', id: 'blue' },
  { name: 'Orange', hex: '#ea580c', id: 'orange' },
  { name: 'Purple', hex: '#9333ea', id: 'purple' },
  { name: 'White', hex: '#e8e8e8', id: 'white' },
];

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [colorIdx, setColorIdx] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', ACCENTS[colorIdx].id);
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