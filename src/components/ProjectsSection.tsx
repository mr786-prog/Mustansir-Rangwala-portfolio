import type { ReactNode } from 'react';
import { ArrowUpRight, Mic, MessageSquareText, ScanSearch, ShieldAlert } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import mediScanLogo from '../assets/mediscan-ai-logo.jpeg';

const PROJECTS = [
  { title: 'AMS Solutions RAG Agent', tag: 'RAG · Web platform', copy: 'A retrieval-augmented agent built around AMS Solutions\' own knowledge base, so visitors can get answers grounded in the company\'s information.', href: 'https://amssolutions.co.in', className: 'ams' },
  { title: 'EcoTwin', tag: 'AI · Sustainability', copy: 'A lightweight concept that explores how AI can model and support sustainability efforts on campus.', className: 'eco' },
  { title: 'Arwaesthetics', tag: 'Frontend · Client work', copy: 'A focused portfolio site for a Nagpur photography studio, designed to put its images and services first.', className: 'arx' },
  { title: 'Personal AI Assistant', tag: 'Voice AI · In progress', copy: 'An evolving voice-driven assistant that brings APIs, automation, and conversational AI into one useful system.', className: 'assistant' },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="work" ref={sectionRef} className="projects-section page-shell">
      <motion.header 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          02 <span /> Selected work
        </motion.div>
        <motion.div 
          className="section-heading"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Things I&apos;ve made<br /><em>with intention.</em></h2>
          <p>A selection of builds where the goal was never just to use AI — it was to make it useful.</p>
        </motion.div>
      </motion.header>
      
      <motion.div 
        className="project-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <MediScanCard />
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </motion.div>
    </section>
  );
}

function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });
  
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = e.clientX - rect.left;
    const mouseYVal = e.clientY - rect.top;
    
    const xPct = mouseXVal / width - 0.5;
    const yPct = mouseYVal / height - 0.5;
    
    x.set(xPct * 10);
    y.set(yPct * 10);
  }
  
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }
  
  const rotateX = useTransform(mouseY, [-10, 10], [5, -5]);
  const rotateY = useTransform(mouseX, [-10, 10], [-5, 5]);

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

function MediScanCard() {
  return (
    <TiltCard className="project-card mediscan">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="card-top">
          <span className="project-index">01 / Featured</span>
          <motion.a 
            href="https://mediscan-ai-717d.onrender.com" 
            target="_blank" 
            rel="noreferrer" 
            className="live-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Launch project <ArrowUpRight size={15} />
          </motion.a>
        </div>
        <div className="mediscan-main">
          <div>
            <p className="project-tag">Healthcare AI · Live testing</p>
            <h3>MediScan <em>AI</em></h3>
            <p className="project-copy">A conversational healthcare assistant that helps users understand symptoms and medical information in simple language — while keeping safety and clarity in the flow.</p>
          </div>
          <motion.div 
            className="mediscan-logo-wrap" 
            whileHover={{ y: -8, rotate: 1 }} 
            transition={{ type: 'spring', stiffness: 250, damping: 18 }}
            style={{ transform: 'translateZ(20px)' }}
          >
            <img src={mediScanLogo} alt="MediScan AI logo" />
          </motion.div>
        </div>
        <div className="feature-strip">
          <Feature icon={<MessageSquareText size={16} />} text="Symptom chat" />
          <Feature icon={<ScanSearch size={16} />} text="Image analysis" />
          <Feature icon={<Mic size={16} />} text="Voice interaction" />
        </div>
        <p className="disclaimer"><ShieldAlert size={14} /> Testing version for preliminary guidance only — not a replacement for qualified medical care.</p>
      </motion.div>
    </TiltCard>
  );
}

function Feature({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.1, color: 'var(--orange)' }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {icon}{text}
    </motion.span>
  );
}

function ProjectCard({ title, tag, copy, href, className, index }: typeof PROJECTS[number] & { index: number }) {
  return (
    <TiltCard className={`project-card standard ${className}`}>
      <motion.article
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -7 }}
        transition={{ duration: 0.6, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="card-top">
          <span className="project-index">0{index + 2}</span>
          {href && (
            <motion.a 
              href={href} 
              target="_blank" 
              rel="noreferrer" 
              aria-label={`Open ${title}`} 
              className="round-arrow"
              whileHover={{ scale: 1.2, rotate: 45 }}
              whileTap={{ scale: 0.9 }}
              style={{ transform: 'translateZ(10px)' }}
            >
              <ArrowUpRight size={17} />
            </motion.a>
          )}
        </div>
        <div className="project-content" style={{ transform: 'translateZ(5px)' }}>
          <p className="project-tag">{tag}</p>
          <h3>{title}</h3>
          <p className="project-copy">{copy}</p>
        </div>
        <span className="card-line" aria-hidden="true" />
      </motion.article>
    </TiltCard>
  );
}