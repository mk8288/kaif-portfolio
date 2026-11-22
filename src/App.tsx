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

function App() {
  return (
    <div className="app-container">
      <div className="bg-grid" />
      <div className="noise-overlay" />

      <Navbar />
      <Hero />
      <About />
      <Education />
      <Journey />
      <Experience />
      <Projects />
      <Achievements />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;