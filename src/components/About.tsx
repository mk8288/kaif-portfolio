import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function SectionHeader({ tag, title }: { tag: string; title: React.ReactNode }) {
  return (
    <div className="section-header">
      <span className="section-tag">{tag}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

function FadeInSection({ children, id, className }: { children: React.ReactNode; id?: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.section>
  );
}

export default function About() {
  const stats = [
    { number: '+100', label: 'CTF Challenges Built', icon: '🏴' },
    { number: '#29', label: 'Global POCTF Rank', icon: '🌍' },
    { number: '9.04', label: 'B.Tech CGPA', icon: '🎓' },
    { number: '2+', label: 'Years Experience', icon: '⚡' },
  ];

  return (
    <FadeInSection id="about" className="section">
      <SectionHeader tag="About Me" title={<>Building the next generation of <span className="highlight">cyber defenses</span></>} />

      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm Mohammad Kaif, a cybersecurity engineer and CTF creator passionate about
            the intersection of offensive security, AI, and infrastructure defense. I
            recently graduated with a B.Tech in Computer Science (Cloud Computing) from
            SRM Institute of Science and Technology with a CGPA of 9.04/10.
          </p>
          <p>
            Over the past two years, I've designed over 100 capture-the-flag challenges
            for CyberArts, a New York-based EdTech startup, where I also coached students
            across the US and helped drive a 10% increase in engagement. My competitive
            CTF journey has taken me from HackHound (4th place, 1,100 participants) to
            POCTF (29th globally) to organizing my own event, hackTheFlag.
          </p>
          <p>
            I'll be pursuing my MSc in Security and Resilience: Science and Technology at
            Imperial College London starting Fall 2026, where I'll dive deeper into
            cyber-physical systems, behavioral security, and infrastructure protection.
          </p>
        </div>

        <div className="about-stats">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}