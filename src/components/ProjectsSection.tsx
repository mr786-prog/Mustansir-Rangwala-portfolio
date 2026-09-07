import type { ReactNode } from 'react';
import { ArrowUpRight, Mic, MessageSquareText, ScanSearch, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import mediScanLogo from '../assets/mediscan-ai-logo.jpeg';

const PROJECTS = [
  { title: 'AMS Solutions RAG Agent', tag: 'RAG · Web platform', copy: 'A retrieval-augmented agent built around AMS Solutions’ own knowledge base, so visitors can get answers grounded in the company’s information.', href: 'https://amssolutions.co.in', className: 'ams' },
  { title: 'EcoTwin', tag: 'AI · Sustainability', copy: 'A lightweight concept that explores how AI can model and support sustainability efforts on campus.', className: 'eco' },
  { title: 'Arwaesthetics', tag: 'Frontend · Client work', copy: 'A focused portfolio site for a Nagpur photography studio, designed to put its images and services first.', className: 'arx' },
  { title: 'Personal AI Assistant', tag: 'Voice AI · In progress', copy: 'An evolving voice-driven assistant that brings APIs, automation, and conversational AI into one useful system.', className: 'assistant' },
];

export default function ProjectsSection() {
  return <section id="work" className="projects-section page-shell">
    <header className="section-header">
      <div className="section-label">02 <span /> Selected work</div>
      <div className="section-heading">
        <h2>Things I&apos;ve made<br /><em>with intention.</em></h2>
        <p>A selection of builds where the goal was never just to use AI — it was to make it useful.</p>
      </div>
    </header>
    <div className="project-grid"><MediScanCard />{PROJECTS.map((project, index) => <ProjectCard key={project.title} index={index} {...project} />)}</div>
  </section>;
}

function MediScanCard() {
  return <motion.article initial={{ opacity: 0, y: 40, scale: 0.985 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className="project-card mediscan">
    <div className="card-top"><span className="project-index">01 / Featured</span><a href="https://mediscan-ai-717d.onrender.com" target="_blank" rel="noreferrer" className="live-link">Launch project <ArrowUpRight size={15} /></a></div>
    <div className="mediscan-main">
      <div><p className="project-tag">Healthcare AI · Live testing</p><h3>MediScan <em>AI</em></h3><p className="project-copy">A conversational healthcare assistant that helps users understand symptoms and medical information in simple language — while keeping safety and clarity in the flow.</p></div>
      <motion.div className="mediscan-logo-wrap" whileHover={{ y: -8, rotate: 1 }} transition={{ type: 'spring', stiffness: 250, damping: 18 }}><img src={mediScanLogo} alt="MediScan AI logo" /></motion.div>
    </div>
    <div className="feature-strip"><Feature icon={<MessageSquareText size={16} />} text="Symptom chat" /><Feature icon={<ScanSearch size={16} />} text="Image analysis" /><Feature icon={<Mic size={16} />} text="Voice interaction" /></div>
    <p className="disclaimer"><ShieldAlert size={14} /> Testing version for preliminary guidance only — not a replacement for qualified medical care.</p>
  </motion.article>;
}

function Feature({ icon, text }: { icon: ReactNode; text: string }) { return <span>{icon}{text}</span>; }

function ProjectCard({ title, tag, copy, href, className, index }: typeof PROJECTS[number] & { index: number }) {
  return <motion.article initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} whileHover={{ y: -7 }} transition={{ duration: 0.6, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }} className={`project-card standard ${className}`}>
    <div className="card-top"><span className="project-index">0{index + 2}</span>{href && <a href={href} target="_blank" rel="noreferrer" aria-label={`Open ${title}`} className="round-arrow"><ArrowUpRight size={17} /></a>}</div>
    <div className="project-content"><p className="project-tag">{tag}</p><h3>{title}</h3><p className="project-copy">{copy}</p></div><span className="card-line" aria-hidden="true" />
  </motion.article>;
}
