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
    { stat: '200+', label: 'CTF Challenges Built', detail: 'Designed and developed 200+ Capture The Flag challenges spanning reverse engineering, forensics, web exploitation, cryptography, and OSINT for CyberArts.' },
    { stat: '#29', label: 'Global POCTF Rank', detail: 'Ranked 29th worldwide in POCTF 24 - a 3-month competitive CTF organized by Prof. Chad Johnson at the University of Wisconsin-Madison.' },
    { stat: '9.04', label: 'B.Tech CGPA', detail: 'Graduated with a 9.04/10 CGPA from SRM Institute of Science and Technology in Computer Science with Cloud Computing specialization.' },
    { stat: '4', label: 'Student Cohorts Supported', detail: 'Coached four US student cohorts at CyberArts, alongside student onboarding, platform troubleshooting and challenge development.' },
  ];

  return (
    <FadeInSection id="about" className="section">
      <SectionHeader tag="About Me" title={<>Building <span className="highlight">software</span> and testing <span className="highlight">security</span></>} />

      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm Mohammad Kaif, an MSc student seeking graduate roles in software engineering
            and cybersecurity, with experience in Python and Flask applications, CTF development and cloud
            infrastructure. I graduated with a B.Tech in Computer Science (Cloud Computing) from
            SRM Institute of Science and Technology with a CGPA of 9.04/10.
          </p>
          <p>
            At CyberArts, I created 200+ capture-the-flag challenges, coached four US student
            cohorts and worked with the founder on teaching materials. I now teach coding
            and Sphero robotics at Code Kids, coordinating with fellow instructors on
            classroom delivery. My security experience includes Splunk, Wazuh and Microsoft Sentinel.
          </p>
          <p>
            I'm studying MSc Security and Resilience: Science and Technology at Imperial
            College London. As class representative, I raise peers' coursework questions
            with professors and relay clarifications to the cohort. I also contribute CTF
            challenges to Imperial CyberSoc and practise penetration testing on HackTheBox,
            including OSCP-oriented Active Directory lab methods.
          </p>
        </div>

        <div className="about-stats">
          {stats.map((s, i) => (
            <div key={s.label} className="card-reveal" style={{ transitionDelay: 0.08 * i + 's' }}>
              <FlipCard stat={s.stat} label={s.label} detail={s.detail} />
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}