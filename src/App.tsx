import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';

const SKILLS = ['Python', 'JavaScript', 'React', 'Machine Learning', 'RAG', 'MCP', 'REST APIs', 'NumPy', 'Git & GitHub'];
const GMAIL_COMPOSE = 'https://mail.google.com/mail/?view=cm&fs=1&to=mustansirrangwal52@gmail.com';

export default function App() {
  return <main><HeroSection /><AboutSection /><ProjectsSection /><section className="toolkit page-shell"><div className="section-label">03 <span /> Toolkit</div><div className="toolkit-content"><h2>Built with a<br /><em>curious stack.</em></h2><div className="skills">{SKILLS.map((skill, index) => <span key={skill}><i>{String(index + 1).padStart(2, '0')}</i>{skill}</span>)}</div></div></section><footer id="contact" className="footer"><div className="footer-orbit" /><div className="footer-glow" /><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className="page-shell footer-inner"><div className="section-label">04 <span /> Start a conversation</div><div className="footer-cta"><div><p className="footer-eyebrow">Have an ambitious idea?</p><h2>Let&apos;s make it<br /><em>useful.</em></h2></div><a className="email-link" href={GMAIL_COMPOSE} target="_blank" rel="noreferrer"><span>Write to me</span><ArrowUpRight size={20} /></a></div><a className="email-address" href={GMAIL_COMPOSE} target="_blank" rel="noreferrer">mustansirrangwal52@gmail.com</a><div className="footer-bottom"><span>© {new Date().getFullYear()} Mustansir Rangwala</span><span className="availability"><i /> Open to opportunities</span></div></motion.div></footer></main>;
}
