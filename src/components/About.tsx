import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

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
    <section
      id={id}
      ref={ref}
      className={`${className || ''} fade-section${isInView ? ' visible' : ''}`}
    >
      {children}
    </section>
  );
}

function FlipCard({ stat, label, detail }: { stat: string; label: string; detail: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="flip-card-stat">{stat}</div>
          <div className="flip-card-label">{label}</div>
        </div>
        <div className="flip-card-back">
          <p>{detail}</p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const stats = [
    { stat: '100+', label: 'CTF Challenges Built', detail: 'Designed and developed over 100 Capture The Flag challenges spanning reverse engineering, forensics, web exploitation, cryptography, and OSINT for CyberArts.' },
    { stat: '#29', label: 'Global POCTF Rank', detail: 'Ranked 29th worldwide in POCTF 24 - a 3-month competitive CTF organized by Prof. Chad Johnson at the University of Wisconsin-Madison.' },
    { stat: '9.04', label: 'B.Tech CGPA', detail: 'Graduated with a 9.04/10 CGPA from SRM Institute of Science and Technology in Computer Science with Cloud Computing specialization.' },
    { stat: '2+', label: 'Years Experience', detail: 'Over 2 years of professional experience in cybersecurity - designing CTFs, mentoring students, and building defensive infrastructure.' },
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
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
            >
              <FlipCard stat={s.stat} label={s.label} detail={s.detail} />
            </motion.div>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}