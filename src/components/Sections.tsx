import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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

function SectionHeader({ tag, title }: { tag: string; title: React.ReactNode }) {
  return (
    <div className="section-header">
      <motion.span
        className="section-tag"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {tag}
      </motion.span>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h2>
    </div>
  );
}

export function Journey() {
  const timelineEvents = [
    {
      date: 'Aug 2022 - May 2026',
      title: 'B.Tech CSE @ SRMIST',
      desc: 'Computer Science with Cloud Computing specialization. CGPA: 9.04/10. Participated in hackathons, organized CTFs, won multiple competitions.',
    },
    {
      date: '1st Year',
      title: 'Thomso RemSkill - IIT Roorkee',
      desc: "Earned Python Programming Certificate from IIT Roorkee's Thomso event. First formal step into programming and computational thinking.",
    },
    {
      date: '2nd Year',
      title: 'HackHound 2.0 - 4th Place',
      desc: 'Built a 3D object detection system capable of identifying 1,500+ object types (bottles, knives, bags, cutlery, etc.) in a 24-hour hackathon. Placed 4th out of 48 teams (1,100+ participants).',
    },
    {
      date: '2nd Year',
      title: 'HacksCTF - 10th Place',
      desc: 'First ever CTF experience at LNMIIT Jaipur. Ranked 10th overall. This event completely sparked my passion for cybersecurity and CTFs.',
    },
    {
      date: '3rd Year',
      title: 'POCTF - #29 Globally',
      desc: 'Organized by Prof. Chad Johnson (University of Wisconsin - Madison). A grueling 3-month long CTF where I ranked 29th worldwide. Deeply shaped my understanding of offensive security tradecraft.',
    },
    {
      date: '3rd Year',
      title: 'Organized HackTheFlag',
      desc: 'Spearheaded a 24-hour college-level CTF at SRMIST. Managed 150+ registrations on CTFd platform, deployed 20+ custom challenges on Azure with Docker/Kubernetes. Detected and mitigated a live DDoS attack via Cloudflare - blocking millions of malicious requests.',
    },
    {
      date: 'Nov 2024 - Present',
      title: 'Technical Operations @ CyberArts',
      desc: 'Designed 100+ CTF challenges for a New York-based EdTech startup. Coached US student cohorts across all time zones, onboarded 200+ participants, and boosted engagement by 10% through better content design.',
    },
    {
      date: 'Sep 2026 - Sep 2027',
      title: 'MSc @ Imperial College London',
      desc: 'Prospective student in MSc Security and Resilience: Science and Technology. Coursework: Cyber-Physical Systems Security, Behavioural Science and Security, CBRNE threats, Infrastructure Security, Sensors.',
    },
  ];

  return (
    <FadeInSection id="journey" className="section">
      <SectionHeader
        tag="// journey"
        title={<>From <span className="highlight">CTF player</span> to <span className="highlight">CTF creator</span></>}
      />
      <div className="timeline">
        <div className="timeline-line" />
        {timelineEvents.map((event, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.08 * i }}
          >
            <div className="timeline-dot" />
            <div className="timeline-date">{event.date}</div>
            <div className="timeline-title">{event.title}</div>
            <div className="timeline-desc">{event.desc}</div>
          </motion.div>
        ))}
      </div>
    </FadeInSection>
  );
}

export function Experience() {
  return (
    <FadeInSection id="experience" className="section">
      <SectionHeader
        tag="// experience"
        title={<>Where I've made <span className="highlight">an impact</span></>}
      />
      <motion.div
        className="experience-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="exp-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <img
              src="/cyberarts-logo.svg"
              alt="CyberArts"
              style={{ height: 36, width: 'auto' }}
            />
            <div>
              <div className="exp-company">CyberArts</div>
              <div className="exp-role">Technical Operations</div>
            </div>
          </div>
          <div className="exp-period">Nov 2024 - Present</div>
        </div>
        <ul className="exp-details">
          <li>Designed and developed over 100 high-quality Capture The Flag (CTF) challenges for a New York-based EdTech startup, significantly enhancing cybersecurity education curriculums for high school students across the United States.</li>
          <li>Coached diverse student cohorts across the United States, troubleshooting technical issues and providing hands-on academic support in Linux, networking, and ethical hacking.</li>
          <li>Facilitated the onboarding and verification process of over 200 student participants, shaping a highly motivated and skilled cohort through structured mentorship.</li>
          <li>Collaborated directly with founder Wilson Waller on visual and content design for educational material, driving a 10% measurable increase in student engagement.</li>
          <li>Compensation grew from $120/week to $420/week as responsibilities expanded, reflecting increasing scope and impact on the organization.</li>
        </ul>
      </motion.div>
    </FadeInSection>
  );
}

export function Projects() {
  const projects = [
    {
      title: 'Autonomous AI Agents for Offensive Cybersecurity',
      role: 'Lead Researcher',
      tags: ['AI Security', 'Pentesting', 'Research', 'Python'],
      desc: 'Engineered an AI-based penetration agent achieving 80-88% exploit success across DVWA, Metasploitable 2, and Juice Shop environments. Conducted a comprehensive comparative study between AI and human pentesting methodologies, demonstrating up to 33% faster discovery times and 35+ identified vulnerabilities. Researched ethical constraints and AI governance measures for autonomous cyber agents.',
    },
    {
      title: 'HackTheFlag CTF Infrastructure',
      role: 'Technical Lead',
      tags: ['Cloudflare', 'Azure', 'Docker', 'Kubernetes', 'CTFd'],
      desc: 'Spearheaded technical operations for HackTheFlag at SRMIST. Deployed 20+ custom challenges on Azure VM with Docker and Kubernetes orchestration, ensuring 100% uptime throughout the 24-hour event. Detected and mitigated a live DDoS attack using Cloudflare WAF rules, filtering over 50% of malicious traffic and stopping millions of requests from hitting the server.',
    },
    {
      title: '3D Object Detection System',
      role: 'Team Lead (HackHound 2.0)',
      tags: ['Computer Vision', 'Deep Learning', 'Python', 'YOLO'],
      desc: 'Built in just 24 hours at HackHound 2.0. A real-time 3D object detection system capable of identifying and labeling 1,500+ object types including bottles, knives, spoons, bags, and more. Secured 4th place out of 48 teams and 1,100+ participants.',
    },
  ];

  return (
    <FadeInSection id="projects" className="section">
      <SectionHeader
        tag="// projects & research"
        title={<>Things I've <span className="highlight">built</span></>}
      />
      {projects.map((proj, i) => (
        <motion.div
          key={i}
          className="project-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 * i }}
        >
          <div className="project-role">{proj.role}</div>
          <div className="project-title">{proj.title}</div>
          <div className="project-tags">
            {proj.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
          <div className="project-desc">{proj.desc}</div>
        </motion.div>
      ))}
    </FadeInSection>
  );
}

export function Achievements() {
  const achievements = [
    {
      icon: '🏆',
      title: 'HackHound 2.0',
      desc: '4th place out of 48 teams (1,100+ participants). Built 3D object detection system in 24 hours.',
      rank: '4 / 48 Teams',
    },
    {
      icon: '🌍',
      title: 'POCTF 24',
      desc: '#29 global ranking in a 3-month CTF by Prof. Chad Johnson, University of Wisconsin - Madison.',
      rank: '#29 Worldwide',
    },
    {
      icon: '🔐',
      title: 'HacksCTF',
      desc: '10th place overall at LNMIIT Jaipur. My first CTF that ignited my cybersecurity journey.',
      rank: '10th Overall',
    },
    {
      icon: '🥈',
      title: 'CON-CODE @ SRMIST',
      desc: 'Secured 4th place in this competitive college coding event at SRMIST.',
      rank: '4th Place',
    },
    {
      icon: '🏅',
      title: 'Codessey @ SRMIST',
      desc: '2nd place in college-level coding competition at SRMIST.',
      rank: '2nd Place',
    },
    {
      icon: '📜',
      title: 'NPTEL Certifications',
      desc: 'Elite certifications in C Programming, Java, and Cloud Computing & Distributed Systems via NPTEL, IIT Kanpur.',
      rank: 'Elite',
    },
    {
      icon: '🐍',
      title: 'Python @ IIT Roorkee',
      desc: 'Thomso RemSkill Python Programming Certificate from IIT Roorkee.',
    },
    {
      icon: '🛡️',
      title: 'Ethical Hacking @ IIT Delhi',
      desc: "Attended targeted workshop on ethical hacking at one of India's premier institutes - IIT Delhi.",
    },
  ];

  return (
    <FadeInSection id="achievements" className="section">
      <SectionHeader
        tag="// achievements"
        title={<>Awards & <span className="highlight">recognition</span></>}
      />
      <div className="achievements-grid">
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            className="achievement-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 * i }}
          >
            <div className="achievement-icon">{ach.icon}</div>
            <div className="achievement-title">{ach.title}</div>
            <div className="achievement-desc">{ach.desc}</div>
            {ach.rank && <div className="achievement-rank">{ach.rank}</div>}
          </motion.div>
        ))}
      </div>
    </FadeInSection>
  );
}

export function Skills() {
  const skillCategories = [
    { category: 'Languages', items: ['Python', 'C', 'C++', 'Java', 'Rust', 'JavaScript', 'HTML/CSS', 'SQL'] },
    { category: 'Security Tools', items: ['Wireshark', 'Burp Suite', 'Ghidra', 'Autopsy', 'theHarvester', 'CTFd', 'ADB'] },
    { category: 'Cloud & Infra', items: ['Docker', 'Kubernetes', 'Azure', 'Cloudflare', 'Linux'] },
    { category: 'Frameworks', items: ['Node.js', 'React', 'Flask', 'Git', 'GitHub', 'GitLab'] },
  ];

  return (
    <FadeInSection id="skills" className="section">
      <SectionHeader
        tag="// skills"
        title={<>Tools of the <span className="highlight">trade</span></>}
      />
      {skillCategories.map((cat, ci) => (
        <motion.div
          key={cat.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 * ci }}
          style={{ marginBottom: 24 }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)', marginBottom: 10, fontWeight: 500 }}>
            {cat.category}
          </div>
          <div className="skills-grid">
            {cat.items.map((skill) => (
              <motion.div key={skill} className="skill-item" whileHover={{ scale: 1.05 }}>
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </FadeInSection>
  );
}

export function Education() {
  return (
    <FadeInSection id="education" className="section">
      <SectionHeader
        tag="// education"
        title={<>Where I've <span className="highlight">learned</span></>}
      />
      <motion.div
        className="education-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="edu-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <img
              src="/imperial-logo.svg"
              alt="Imperial College London"
              style={{ height: 44, width: 'auto' }}
            />
            <div>
              <div className="edu-institution">Imperial College London</div>
              <div className="edu-degree">MSc Security and Resilience: Science and Technology</div>
            </div>
          </div>
          <div className="edu-period">Sep 2026 - Sep 2027</div>
        </div>
        <div className="edu-coursework">
          {['Key Concepts: Security in Context', 'Behavioural Science and Security', 'CBRNE: The Physical Threat Space', 'Infrastructure and Transport Security', 'Behavioural Research Methods', 'Cyber-Physical Systems Security', 'Sensors: Electronic and Natural'].map((c) => (
            <span key={c} className="edu-coursework-tag">{c}</span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="education-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="edu-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <img
              src="/srm-logo.png"
              alt="SRM Institute of Science and Technology"
              style={{ height: 44, width: 'auto' }}
            />
            <div>
              <div className="edu-institution">SRM Institute of Science and Technology</div>
              <div className="edu-degree">B.Tech Computer Science (Cloud Computing)</div>
            </div>
          </div>
          <div className="edu-period">Aug 2022 - May 2026</div>
        </div>
        <div className="edu-cgpa" style={{ display: 'inline-block', marginBottom: 12 }}>CGPA: 9.04 / 10.0</div>
        <div className="edu-coursework">
          {['Database Security', 'Cloud Security', 'Operating System Security', 'Computer Networks', 'Social Engineering', 'Computer Organization'].map((c) => (
            <span key={c} className="edu-coursework-tag">{c}</span>
          ))}
        </div>
      </motion.div>
    </FadeInSection>
  );
}

export function Contact() {
  return (
    <FadeInSection id="contact" className="section">
      <SectionHeader
        tag="// contact"
        title={<>Let's <span className="highlight">connect</span></>}
      />
      <motion.div
        style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: 32, lineHeight: 1.7 }}>
          Whether you want to collaborate on a CTF, discuss security research,
          or just say hi — my inbox is always open.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:fall2026.mkaif@gmail.com" className="btn-primary">
            Email Me
          </a>
          <a href="https://github.com/mk8288" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            GitHub
          </a>
          <a href="https://in.linkedin.com/in/mohammad-kaif-50b846266" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            LinkedIn
          </a>
        </div>
      </motion.div>
    </FadeInSection>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Mohammad Kaif. Built with blood, sweat, and CTFs.
        </div>
        <div className="footer-links">
          <a href="mailto:fall2026.mkaif@gmail.com">Email</a>
          <a href="https://github.com/mk8288" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://in.linkedin.com/in/mohammad-kaif-50b846266" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}