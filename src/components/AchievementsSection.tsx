import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ACHIEVEMENTS = [
  'Winner — College AI Quiz Competition',
  'Winner — College AI Poster Making Competition',
  'Participant — College Hackathon',
  'Participant — Smart India Hackathon (SIH) 2026'
];

const CERTIFICATIONS = [
  { title: 'AI Fluency: Framework & Foundations', issuer: 'Anthropic Academy', link: 'anthropic.skilljar.com' },
  { title: 'Introduction to Model Context Protocol', issuer: 'Anthropic Academy', link: 'anthropic.skilljar.com' }
];

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="achievements" ref={sectionRef} className="achievements page-shell">
      <style>{`
        .achievements { padding:115px 0 145px; border-top:1px solid var(--line); }
        .achievements-heading { display:flex; align-items:end; justify-content:space-between; gap:30px; margin-top:32px; }
        .achievements h2 { margin:0; color:var(--ink); font-family:'Instrument Serif',Georgia,serif; font-size:clamp(3.9rem,6vw,6.6rem); font-weight:400; line-height:.82; letter-spacing:-.06em; }
        .achievements h2 em { background:linear-gradient(105deg,#e85338 20%,#765bff 80%); -webkit-background-clip:text; background-clip:text; color:transparent; }
        .achievements-heading>p { max-width:310px; margin:0 0 5px; color:#7f7880; font-size:14px; line-height:1.65; }
        .achievements-grid { display:grid; grid-template-columns:1.08fr .92fr; gap:18px; margin-top:65px; }
        .achievement-list,.certification-list { border-top:1px solid var(--line); }
        .achievement-kicker { margin:17px 0 0; color:#817a80; font-size:10px; font-weight:500; letter-spacing:.16em; text-transform:uppercase; }
        .achievement-item { display:grid; grid-template-columns:42px 1fr; gap:12px; padding:21px 0; border-bottom:1px solid var(--line); }
        .achievement-item span,.certification-card>span { color:var(--violet); font-size:10px; letter-spacing:.12em; }
        .achievement-item p { margin:0; color:#332d35; font-size:16px; line-height:1.35; }
        .certification-list { display:grid; grid-template-columns:1fr 1fr; column-gap:18px; }
        .certification-list .achievement-kicker { grid-column:1 / -1; }
        .certification-card { min-height:190px; padding:21px 0; border-bottom:1px solid var(--line); }
        .certification-card + .certification-card { border-left:1px solid var(--line); padding-left:18px; }
        .certification-card h3 { margin:35px 0 8px; color:#302936; font-family:'Instrument Serif',Georgia,serif; font-size:26px; font-weight:400; line-height:.95; letter-spacing:-.035em; }
        .certification-card p { margin:0; color:#625b64; font-size:12px; }
        .certification-card small { display:block; margin-top:6px; color:#938a94; font-size:10px; }
        @media (max-width:780px) { .achievements { padding:90px 0; }.achievements-heading { align-items:start; flex-direction:column; gap:24px; }.achievements-grid { grid-template-columns:1fr; margin-top:45px; }.achievements-heading>p { max-width:360px; } }
        @media (max-width:480px) { .achievements { padding:72px 0; }.achievements h2 { font-size:clamp(3.25rem,15vw,4.8rem); line-height:.9; }.achievements-heading { gap:20px; margin-top:28px; }.achievements-grid { gap:28px; margin-top:38px; }.achievement-item { padding:18px 0; }.achievement-item p { font-size:15px; }.certification-card { min-height:170px; }.certification-card h3 { font-size:23px; } }
      `}</style>
      <motion.div className="section-label" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        04 <span /> Milestones
      </motion.div>
      <div className="achievements-heading">
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}>
          Learning, competing<br /><em>and growing.</em>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
          A few milestones from the work and communities that continue to shape my craft.
        </motion.p>
      </div>
      <div className="achievements-grid">
        <motion.div className="achievement-list" initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
          <p className="achievement-kicker">Achievements</p>
          {ACHIEVEMENTS.map((achievement, index) => (
            <div className="achievement-item" key={achievement}>
              <span>{String(index + 1).padStart(2, '0')}</span><p>{achievement}</p>
            </div>
          ))}
        </motion.div>
        <motion.div className="certification-list" initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.35 }}>
          <p className="achievement-kicker">Certifications</p>
          {CERTIFICATIONS.map((certification, index) => (
            <article className="certification-card" key={certification.title}>
              <span>{String(index + 1).padStart(2, '0')}</span><h3>{certification.title}</h3><p>{certification.issuer}</p><small>{certification.link}</small>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
