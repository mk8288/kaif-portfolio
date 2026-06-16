import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  // Longer fade distance so hero lasts on mobile (800px vs 400px)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const fadeDist = isMobile ? 1000 : 600;
  const ringDist = isMobile ? 1200 : 800;
  
  const ringRotate = useTransform(scrollY, [0, ringDist], [0, 180]);
  const ringRotate2 = useTransform(scrollY, [0, ringDist], [0, -120]);
  const ringRotate3 = useTransform(scrollY, [0, ringDist], [0, 90]);
  const opacity = useTransform(scrollY, [0, fadeDist], [1, 0]);

  return (
    <section id="home" className="hero">
      <div className="hero-gradient-1" />
      <div className="hero-gradient-2" />

      <motion.div className="hero-grid" style={{ opacity }}>
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <span className="dot" />
            Open to Opportunities · Imperial College London '27
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="accent">Mohammad Kaif</span>
            <br />
            Security Engineer{' '}
            <span className="accent">&</span> CTF Creator
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            B.Tech CSE (SRMIST, 9.04 CGPA) → MSc Security & Resilience
            at Imperial College London. Built 100+ CTF challenges, ranked
            29th globally in POCTF, and stopped a million-request DDoS
            attack in its tracks.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <a href="#experience" className="btn-primary">
              See My Work ↓
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </motion.div>
        </div>

        <div className="hero-visual">
          <motion.div
            className="photo-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="orbit-ring orbit-ring-1"
              style={{ rotate: ringRotate }}
            >
              <motion.div
                className="orbit-dot"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>

            <motion.div
              className="orbit-ring orbit-ring-2"
              style={{ rotate: ringRotate2 }}
            >
              <motion.div
                className="orbit-dot orbit-dot-2"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                style={{ originX: '50%', originY: '50%' }}
              />
            </motion.div>

            <motion.div
              className="orbit-ring orbit-ring-3"
              style={{ rotate: ringRotate3 }}
            >
              <motion.div
                className="orbit-dot orbit-dot-3"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>

            <motion.div
              className="photo-frame"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <img src="/kaif-profile.png" alt="Mohammad Kaif" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}