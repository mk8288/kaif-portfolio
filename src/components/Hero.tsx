import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const ringRotate = useTransform(scrollY, [0, 600], [0, 180]);
  const ringRotate2 = useTransform(scrollY, [0, 600], [0, -120]);
  const ringRotate3 = useTransform(scrollY, [0, 600], [0, 90]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="hero">
      {/* Background gradients */}
      <div className="hero-gradient-1" />
      <div className="hero-gradient-2" />

      <motion.div className="hero-grid" style={{ opacity }}>
        {/* Left: Text */}
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="dot" />
            Open to Opportunities · Imperial College London '27
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
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
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            B.Tech CS (SRMIST, 9.04 CGPA) → MSc Security & Resilience
            at Imperial College London. Built 100+ CTF challenges, ranked
            29th globally in POCTF, and stopped a million-request DDoS
            attack in its tracks.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href="#experience" className="btn-primary">
              See My Work ↓
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Right: Photo with orbiting rings */}
        <div className="hero-visual">
          <motion.div
            className="photo-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Orbiting rings */}
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

            {/* Photo frame */}
            <motion.div
              className="photo-frame"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img src="/kaif-profile.png" alt="Mohammad Kaif" />
            </motion.div>

            {/* Small floating badges */}
            <motion.div
              style={{
                position: 'absolute',
                top: '8%',
                right: '-8%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '8px 14px',
                fontSize: '0.75rem',
                fontWeight: 600,
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <span style={{ color: 'var(--accent)' }}>✦</span> Top 4% Globally
            </motion.div>

            <motion.div
              style={{
                position: 'absolute',
                bottom: '12%',
                left: '-10%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '8px 14px',
                fontSize: '0.75rem',
                fontWeight: 600,
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <span style={{ color: 'var(--accent)' }}>⚡</span> 100+ CTF Challenges
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}