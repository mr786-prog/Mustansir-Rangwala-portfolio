import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const GMAIL_COMPOSE = 'https://mail.google.com/mail/?view=cm&fs=1&to=mustansirrangwal52@gmail.com';
const PORTRAIT = '/mustansir-portrait.jpeg';

export default function HeroSection() {
  return (
    <section id="home" className="hero min-h-screen">
      <div className="hero-noise" />
      <nav className="floating-nav" aria-label="Main navigation">
        <a href="#home" className="monogram">MR</a>
        <div className="nav-divider" />
        <div className="nav-links">
          <a className="active" href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </div>
        <div className="nav-divider hide-mobile" />
        <a href="#contact" className="say-hi">Say hi <ArrowUpRight size={14} /></a>
      </nav>

      <div className="hero-content page-shell">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="kicker">Applied AI developer · Hyderabad, India</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          Mustansir<br /><em>Rangwala.</em>
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }} className="hero-bottom">
          <p>I build AI products that turn complex inputs into clear, useful experiences — from intelligent healthcare tools to knowledge-grounded agents.</p>
          <div className="hero-actions"><a href="#work" className="button button-primary">Explore my work <ArrowDown size={15} /></a><a href={GMAIL_COMPOSE} target="_blank" rel="noreferrer" className="button button-outline"><Mail size={15} /> Reach out</a></div>
        </motion.div>
      </div>

      <div className="scene-wrap" aria-hidden="true">
        <motion.div className="orbit orbit-one" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 18, ease: 'linear' }} />
        <motion.div className="orbit orbit-two" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 26, ease: 'linear' }} />
        <div className="light-sweep sweep-one" /><div className="light-sweep sweep-two" />
        <motion.div className="portrait-orb" animate={{ y: [0, -12, 0], rotate: [-1.5, 1.5, -1.5] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}><img src={PORTRAIT} alt="" /></motion.div>
        <motion.div className="float-card card-ai" animate={{ y: [0, -18, 0], rotate: [8, 3, 8] }} transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}><span>01</span><strong>AI / ML</strong><i /></motion.div>
        <motion.div className="float-card card-build" animate={{ y: [0, 14, 0], rotate: [-9, -3, -9] }} transition={{ repeat: Infinity, duration: 6.5, ease: 'easeInOut', delay: 0.5 }}><span>BUILD</span><strong>IDEAS<br />INTO USE</strong></motion.div>
      </div>
      <a className="scroll-cue" href="#work"><span>Scroll to explore</span><i /></a>
    </section>
  );
}
