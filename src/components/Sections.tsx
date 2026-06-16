import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

function FadeInSection({ children, id, className }: { children: React.ReactNode; id?: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section id={id} ref={ref} className={`${className || ''} fade-section${isInView ? ' visible' : ''}`}>
      {children}
    </section>
  );
}

function SectionHeader({ tag, title }: { tag: string; title: React.ReactNode }) {
  return (
    <div className="section-header">
      <span className="section-tag">{tag}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

function CertModal({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <div className="cert-modal-overlay" onClick={onClose}>
      <div className="cert-modal-inner" onClick={e => e.stopPropagation()}>
        <img src={src} alt="Certificate" />
      </div>
    </div>
  );
}

/* ---- JOURNEY (Timeline) ---- */
export function Journey() {
  const timelineEvents = [
    { date: '1st Year @ SRMIST', title: 'Thomso RemSkill - IIT Roorkee', desc: "Earned Python Programming Certificate from IIT Roorkee's Thomso event. First steps into programming." },
    { date: '1st Year @ SRMIST', title: 'NPTEL Elite - C Programming', desc: 'Completed NPTEL course in C Programming through IIT Kanpur with Elite certification (top 5-10% nationwide). NPTEL is India\'s largest online education initiative by the IITs and IISc.' },
    { date: '2nd Year @ SRMIST', title: 'HackHound 2.0 - 4th Place', desc: 'Built a 3D object detection system identifying 1,500+ object types in 24 hours. 4th place out of 48 teams (1,100+ participants).' },
    { date: '2nd Year @ SRMIST', title: 'HacksCTF - 10th Place', desc: 'First CTF at LNMIIT Jaipur. Ranked 10th overall. This event sparked my cybersecurity obsession.' },
    { date: '2nd Year @ SRMIST', title: 'NPTEL Elite - Java', desc: 'Completed NPTEL Elite certification in Java through IIT Kanpur.' },
    { date: '2nd Year @ SRMIST', title: 'NPTEL Elite - Cloud Computing', desc: 'Completed NPTEL Elite certification in Cloud Computing & Distributed Systems through IIT Kanpur.' },
    { date: '2nd Year @ SRMIST', title: 'CON-CODE - 4th Place', desc: 'Secured 4th place in this competitive college coding event at SRMIST.' },
    { date: '2nd Year @ SRMIST', title: 'Codessey - 2nd Place', desc: '2nd place in college-level coding competition at SRMIST.' },
    { date: '3rd Year @ SRMIST', title: 'POCTF - #29 Globally', desc: '3-month CTF by Prof. Chad Johnson (UW Madison). Ranked 29th worldwide. Deeply shaped my offensive security skills.' },
    { date: '3rd Year @ SRMIST', title: 'Organized HackTheFlag', desc: 'Led a 24-hour college CTF. 150+ registrations, 20+ custom challenges on Azure. Mitigated a live DDoS attack via Cloudflare.' },
    { date: '3rd Year @ SRMIST', title: 'Organized AutoCoder Competition', desc: 'Organized a college-level coding competition at SRMIST, managing participants, challenges, and event logistics.' },
    { date: '3rd Year @ SRMIST', title: 'Ethical Hacking Workshop - IIT Delhi', desc: 'Hands-on workshop on WPA2 Wi-Fi auditing with Aircrack-ng, packet capture analysis, and wireless security assessments led by Mohsin Quresh.' },
    { date: 'Nov 2024 - Present', title: 'Technical Operations @ CyberArts', desc: '100+ CTF challenges for a NY EdTech startup. Coached US students, onboarded 200+ participants, boosted engagement by 10%.' },
    { date: 'Sep 2026 - Sep 2027', title: 'MSc @ Imperial College London', desc: 'MSc Security and Resilience: Science and Technology. Cyber-Physical Systems Security, CBRNE, Infrastructure Security.' },
  ];
  return (
    <FadeInSection id="journey" className="section">
      <SectionHeader tag="// journey" title={<>From <span className="highlight">CTF player</span> to <span className="highlight">CTF creator</span></>} />
      <div className="timeline">
        <div className="timeline-line" />
        {timelineEvents.map((ev, i) => (
          <div key={i} className="timeline-item card-reveal" style={{ transitionDelay: 0.05 * i + 's' }}>
            <div className="timeline-dot" />
            <div className="timeline-date">{ev.date}</div>
            <div className="timeline-title">{ev.title}</div>
            <div className="timeline-desc">{ev.desc}</div>
          </div>
        ))}
      </div>
    </FadeInSection>
  );
}

/* ---- EXPERIENCE ---- */
export function Experience() {
  return (
    <FadeInSection id="experience" className="section">
      <SectionHeader tag="// experience" title={<>Where I've made <span className="highlight">an impact</span></>} />
      <div className="experience-card card-reveal">
        <div className="exp-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <img src="/cyberarts-logo.svg" alt="CyberArts" style={{ height: 24, width: 'auto' }} />
            <div>
              <div className="exp-company">CyberArts</div>
              <div className="exp-role">Technical Operations</div>
            </div>
          </div>
          <div className="exp-period">Nov 2024 - Present</div>
        </div>
        <div className="exp-text">
            <p>CyberArts is a New York-based EdTech startup teaching cybersecurity to high school students through live CTF competitions. I joined as a challenge designer and grew into leading the full technical pipeline, creating 100+ CTF challenges and coaching hundreds of students across the United States.</p>
          </div>
      </div>
    </FadeInSection>
  );
}

/* ---- PROJECTS ---- */
export function Projects() {
  const projects = [
    { title: 'Autonomous AI Agents for Offensive Cybersecurity', role: 'Lead Researcher', tags: ['AI Security', 'Pentesting', 'Research', 'Python'],
      desc: 'Engineered an AI penetration agent achieving 80-88% exploit success across DVWA, Metasploitable 2, and Juice Shop. Demonstrated 33% faster discovery times and 35+ vulnerabilities vs human pentesters.' },
    { title: 'HackTheFlag CTF Infrastructure', role: 'Technical Lead', tags: ['Cloudflare', 'Azure', 'Docker', 'Kubernetes', 'CTFd'],
      desc: 'Led operations for HackTheFlag at SRMIST. 20+ custom challenges on Azure with Docker/K8s, 100% uptime. Mitigated a live DDoS attack via Cloudflare WAF.' },
    { title: '3D Object Detection System', role: 'Team Lead (HackHound 2.0)', tags: ['Computer Vision', 'Deep Learning', 'Python', 'YOLO'],
      desc: 'Built in 24 hours at HackHound 2.0. Real-time 3D detection identifying 1,500+ object types. 4th place out of 48 teams (1,100+ participants).' },
  ];
  return (
    <FadeInSection id="projects" className="section">
      <SectionHeader tag="// projects & research" title={<>Things I've <span className="highlight">built</span></>} />
      {projects.map((p, i) => (
        <div key={i} className="project-card card-reveal" style={{ transitionDelay: 0.06 * i + 's' }}>
          <div className="project-role">{p.role}</div>
          <div className="project-title">{p.title}</div>
          <div className="project-tags">{p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}</div>
          <div className="project-desc">{p.desc}</div>
        </div>
      ))}
    </FadeInSection>
  );
}

/* ---- ACHIEVEMENTS ---- */
export function Achievements() {
  const [certModal, setCertModal] = useState<string | null>(null);
  const achievements = [
    { title: 'HackHound 2.0', desc: 'Secured 4th position out of 48 teams (1,100+ participants). Built a 3D object detection system in 24 hours.', rank: '4th of 48 Teams', cert: '/assets/hackhound/hackhound-1.png' },
    { title: 'POCTF 24', desc: 'Ranked #29 globally in a 3-month CTF by Prof. Chad Johnson, University of Wisconsin - Madison.', rank: '#29 Worldwide' },
    { title: 'HacksCTF', desc: 'Placed 10th overall at LNMIIT Jaipur. My first CTF that ignited my cybersecurity journey.', rank: '10th Overall', cert: '/assets/participation/HacksCTF.jpg' },
    { title: 'CON-CODE @ SRMIST', desc: '4th place in competitive college coding event.', rank: '4th Place' },
    { title: 'Codessey @ SRMIST', desc: '2nd place in college-level coding competition.', rank: '2nd Place' },
    { title: 'NPTEL Elite Certifications', desc: 'Elite certifications (top 5-10%) in C Programming, Java, and Cloud Computing & Distributed Systems through NPTEL by IIT Kanpur and IISc.', rank: '3x Elite', certs: ['/assets/certs/NPTEL_-_Introduction_to_programming_in_C-1.png', '/assets/certs/NPTEL_-_Programming_In_Java-1.png', '/assets/certs/NPTEL_-_Cloud_Computing_and_Distributed_Systems-1.png'] },
    { title: 'HackTheFlag - Organizer', desc: 'Organized a 24-hour college CTF. 150+ registrations, 20+ custom challenges. Mitigated a live DDoS attack.', rank: 'SRMIST', cert: '/assets/organizing/hackTheFlag.png' },
    { title: 'AutoCoder - Organizer', desc: 'Organized a college-level coding competition at SRMIST.', rank: 'SRMIST', cert: '/assets/organizing/AutoCoder.png' },
    { title: 'Ethical Hacking Workshop at IIT Delhi', desc: 'Hands-on WPA2 Wi-Fi auditing with Aircrack-ng, packet capture analysis, and wireless security assessments. Led by Mohsin Quresh.', rank: 'IIT Delhi' },
    { title: 'Python @ IIT Roorkee', desc: 'Thomso RemSkill Python Programming Certificate from IIT Roorkee.', rank: 'IIT Roorkee' },
  ];

  return (
    <FadeInSection id="achievements" className="section">
      <SectionHeader tag="// achievements" title={<>Awards & <span className="highlight">recognition</span></>} />
      <div className="achievements-grid">
        {achievements.map((a, i) => (
          <div key={i} className="achievement-card card-reveal" style={{ transitionDelay: 0.03 * i + 's' }}>
            <div className="achievement-title">{a.title}</div>
            <div className="achievement-desc">{a.desc}</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 10, alignItems: 'center' }}>
              {a.rank && <div className="achievement-rank">{a.rank}</div>}
              {a.cert && (
                <span className="cert-toggle" onClick={() => setCertModal(a.cert!)}>view cert</span>
              )}
              {a.certs && a.certs.map((c, ci) => (
                <span key={ci} className="cert-toggle" onClick={() => setCertModal(c)}>
                  {['C Programming', 'Java', 'Cloud Computing'][ci] || 'cert'}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {certModal && <CertModal src={certModal} onClose={() => setCertModal(null)} />}
    </FadeInSection>
  );
}

/* ---- SKILLS ---- */
export function Skills() {
  const skillCategories = [
    { category: 'Languages', items: ['Python', 'C', 'C++', 'Java', 'Rust', 'JavaScript', 'HTML/CSS', 'SQL'] },
    { category: 'Security Tools', items: ['Wireshark', 'Burp Suite', 'Ghidra', 'Autopsy', 'theHarvester', 'CTFd', 'ADB', 'Aircrack-ng'] },
    { category: 'Cloud & Infra', items: ['Docker', 'Kubernetes', 'Azure', 'Cloudflare', 'Linux'] },
    { category: 'Frameworks', items: ['Node.js', 'React', 'Flask', 'Git', 'GitHub', 'GitLab'] },
  ];
  return (
    <FadeInSection id="skills" className="section">
      <SectionHeader tag="// skills" title={<>Tools of the <span className="highlight">trade</span></>} />
      {skillCategories.map((cat, ci) => (
        <div key={cat.category} className="card-reveal" style={{ marginBottom: 20, transitionDelay: 0.03 * ci + 's' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', marginBottom: 8, fontWeight: 500 }}>
            {cat.category}
          </div>
          <div className="skills-grid">
            {cat.items.map(skill => (
              <div key={skill} className="skill-item">{skill}</div>
            ))}
          </div>
        </div>
      ))}
    </FadeInSection>
  );
}

/* ---- EDUCATION ---- */
export function Education() {
  return (
    <FadeInSection id="education" className="section">
      <SectionHeader tag="// education" title={<>Where I've <span className="highlight">learned</span></>} />
      <div className="education-card card-reveal">
        <div className="edu-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <img src="/imperial-logo.svg" alt="Imperial College London" style={{ height: 28, width: 'auto' }} />
            <div>
              <div className="edu-institution">
                <a href="https://www.imperial.ac.uk/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Imperial College London ↗</a>
              </div>
              <div className="edu-degree">MSc Security and Resilience: Science and Technology</div>
            </div>
          </div>
          <div className="edu-period">Sep 2026 - Sep 2027</div>
        </div>
        <div className="edu-coursework">
          {['Key Concepts: Security in Context', 'Behavioural Science and Security', 'CBRNE: The Physical Threat Space', 'Infrastructure and Transport Security', 'Behavioural Research Methods', 'Cyber-Physical Systems Security', 'Sensors: Electronic and Natural'].map(c => (
            <span key={c} className="edu-coursework-tag">{c}</span>
          ))}
        </div>
      </div>

      <div className="education-card card-reveal" style={{ transitionDelay: '0.1s' }}>
        <div className="edu-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <img src="/srm-logo.png" alt="SRM Institute of Science and Technology" style={{ height: 36, width: 'auto' }} />
            <div>
              <div className="edu-institution">
                <a href="https://www.srmist.edu.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>SRM Institute of Science and Technology ↗</a>
              </div>
              <div className="edu-degree">B.Tech Computer Science (Cloud Computing)</div>
            </div>
          </div>
          <div className="edu-period">Aug 2022 - May 2026</div>
        </div>
        <div className="edu-cgpa" style={{ display: 'inline-block', marginBottom: 10 }}>CGPA: 9.04 / 10.0</div>
        <div className="edu-coursework">
          {['Database Security', 'Cloud Security', 'Operating System Security', 'Computer Networks', 'Social Engineering', 'Computer Organization'].map(c => (
            <span key={c} className="edu-coursework-tag">{c}</span>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}

/* ---- CONTACT ---- */
export function Contact() {
  return (
    <FadeInSection id="contact" className="section">
      <SectionHeader tag="// contact" title={<>Let's <span className="highlight">connect</span></>} />
      <div className="card-reveal" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: 32, lineHeight: 1.7 }}>
          Whether you want to collaborate on a CTF, discuss security research, or just say hi - my inbox is always open.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:fall2026.mkaif@gmail.com" className="btn-primary">Email Me</a>
          <a href="https://github.com/mk8288" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
          <a href="https://in.linkedin.com/in/mohammad-kaif-50b846266" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn</a>
        </div>
      </div>
    </FadeInSection>
  );
}

/* ---- FOOTER ---- */
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-copyright">&copy; {new Date().getFullYear()} Mohammad Kaif. Built with blood, sweat, and CTFs.</div>
        <div className="footer-links">
          <a href="mailto:fall2026.mkaif@gmail.com">Email</a>
          <a href="https://github.com/mk8288" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://in.linkedin.com/in/mohammad-kaif-50b846266" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}