import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Award, Mic, MessageSquareText, ScanSearch, ShieldAlert, Trophy } from 'lucide-react';
import LazyVideo from './LazyVideo';
import { MAIL } from './Hero';
import logo from '../assets/mediscan-ai-logo.jpeg';

const Reveal = ({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>
);

/** Tall framed scene (cropped to the right so the headline baked into your image never doubles up with the real heading). */
function Frame({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  return (
    <Reveal className="frame-wrap">
      <div className="frame" ref={ref}><motion.img src={src} alt={alt} loading="lazy" style={{ y, scale: 1.12 }} /></div>
    </Reveal>
  );
}

const Label = ({ n, children }: { n: string; children: ReactNode }) => <p className="label"><b>{n}</b>{children}</p>;

export function Nav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <a href="#home" className="mono">MR</a>
      <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#toolkit">Toolkit</a><a href="#milestones">Milestones</a></div>
      <a href="#contact" className="btn btn-primary btn-sm">Say hi <ArrowUpRight size={14} /></a>
    </nav>
  );
}

const SKILLS = ['Python', 'Basic React', 'RAG', 'MCP', 'REST APIs', 'NumPy', 'Git & GitHub', 'SQL', 'Supabase', 'Pinecone', 'Langchain', 'AI Fundamentals', 'Generative AI', 'Basic DSA', 'HTML & CSS', 'Basics Of SEO'];

export function Marquee() {
  const row = [...SKILLS, ...SKILLS];
  return (
    <div className="marquee" aria-hidden="true"><div className="track">{row.map((s, i) => <span key={i}>{s}</span>)}</div></div>
  );
}

export function About() {
  return (
    <section id="about" className="section">
      <div className="wrap split">
        <div>
          <Reveal><Label n="01">About me</Label></Reveal>
          <Reveal delay={0.05}><h2>Learning deeply. <span className="mark">Shipping thoughtfully.</span></h2></Reveal>
          <Reveal delay={0.1}>
            <p className="body">I&apos;m Mustansir, a Computer Science &amp; Machine Learning student at Loyola Academy, Secunderabad. I&apos;m most interested in the space between an ambitious AI idea and the moment it becomes genuinely useful to someone.</p>
            <p className="body">My work combines RAG workflows, APIs, Databases and frontend development. I care about asking the right questions, building the complete flow, and making technical products feel simple to use.</p>
          </Reveal>
          <Reveal delay={0.15} className="facts">
            <div className="fact f-blue"><b>07</b><span>projects shipped</span></div>
            <div className="fact f-coral"><b>AI</b><span>systems &amp; agents</span></div>
            <div className="fact f-mint"><b>2026</b><span>currently building</span></div>
          </Reveal>
        </div>
        <Frame src="/media/scene-about.webp" alt="Mustansir working on a laptop at his desk at dusk" />
      </div>
    </section>
  );
}

const PROJECTS = [
  { title: 'AMS Solutions RAG Agent', tag: 'RAG · Web platform', copy: "A retrieval-augmented agent built around AMS Solutions' own knowledge base, so visitors can get answers grounded in the company's information.", href: 'https://amssolutions.co.in', tint: 'c1' },
  { title: 'EcoTwin', tag: 'AI · Sustainability', copy: 'A lightweight concept that explores how AI can model and support sustainability efforts on campus.', tint: 'c2' },
  { title: 'Arwaesthetics', tag: 'Frontend · Client work', copy: 'A focused portfolio site for a Nagpur photography studio, designed to put its images and services first.', tint: 'c3' },
  { title: 'Personal AI Assistant', tag: 'Voice AI · In progress', copy: 'An evolving voice-driven assistant that brings APIs, automation, and conversational AI into one useful system.', tint: 'c4' },
  { title: 'Kisan Ai', tag: 'SIH Project', copy: 'Voice-first AI farming assistant with verified answers', tint: 'c5' },
  { title: 'Yamoto motors', tag: 'SEO · Client work', copy: 'My first Client Based Website With SEO Optimization.', href: 'https://yamoto.in', tint: 'c6' },
];

export function Work() {
  return (
    <section id="work" className="section band">
      <div className="wrap">
        <div className="split split-head">
          <div>
            <Reveal><Label n="02">Selected work</Label></Reveal>
            <Reveal delay={0.05}><h2>Things I&apos;ve made <span className="mark">with intention.</span></h2></Reveal>
            <Reveal delay={0.1}><p className="body">A selection of builds where the goal was never just to use AI — it was to make it useful.</p></Reveal>
          </div>
          <Frame src="/media/scene-work.webp" alt="A laptop showing MediScan AI, Jarvis AI, AMS Trackbot and a 3D portfolio" />
        </div>

        <Reveal className="featured">
          <LazyVideo className="featured-bg" src="/media/silk.mp4" poster="/media/silk-poster.jpg" />
          <div className="featured-in">
            <div className="featured-copy">
              <p className="pill pill-blue">Featured · Healthcare AI · Live testing</p>
              <h3>MediScan <span className="blue">AI</span></h3>
              <p className="body">A conversational healthcare assistant that helps users understand symptoms and medical information in simple language — while keeping safety and clarity in the flow.</p>
              <ul className="features">
                <li><MessageSquareText size={16} /> Symptom chat</li><li><ScanSearch size={16} /> Image analysis</li><li><Mic size={16} /> Voice interaction</li>
              </ul>
              <a className="btn btn-primary" href="https://mediscan-ai-717d.onrender.com" target="_blank" rel="noreferrer">Launch project <ArrowUpRight size={16} /></a>
              <p className="disclaimer"><ShieldAlert size={14} /> Testing version for preliminary guidance only — not a replacement for qualified medical care.</p>
            </div>
            <img className="featured-logo" src={logo} alt="MediScan AI logo" />
          </div>
        </Reveal>

        <div className="cards">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08} className={`card ${p.tint}`}>
              <div className="card-top"><span className="num">0{i + 2}</span>{p.href && <a className="arrow" href={p.href} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}><ArrowUpRight size={18} /></a>}</div>
              <p className="pill">{p.tag}</p>
              <h3>{p.title}</h3>
              <p className="body">{p.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Toolkit() {
  const tints = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];
  return (
    <section id="toolkit" className="section">
      <div className="wrap split rev">
        <div>
          <Reveal><Label n="03">Toolkit</Label></Reveal>
          <Reveal delay={0.05}><h2>Built with a <span className="mark">curious stack.</span></h2></Reveal>
          <div className="skills">
            {SKILLS.map((s, i) => (
              <motion.span key={s} className={`skill ${tints[i % 6]}`} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03, type: 'spring', stiffness: 220, damping: 18 }} whileHover={{ y: -3 }}>{s}</motion.span>
            ))}
          </div>
        </div>
        <Frame src="/media/scene-toolkit.webp" alt="A code editor surrounded by floating Python, Flask, Supabase and Pinecone badges" />
      </div>
    </section>
  );
}

export function Interlude() {
  return (
    <div className="wrap">
      <Reveal className="interlude">
        <LazyVideo className="interlude-video" src="/media/hill.mp4" poster="/media/hill-poster.jpg" />
        <p className="interlude-quote">Small steps.<br /><em>Big impact.</em></p>
      </Reveal>
    </div>
  );
}

const WINS = [
  'Winner — AI Quiz Competition - organised by my college',
  'Winner — AI Poster Making Competition - organised by my college',
  'Participant — Hackathon - organised by my college',
  'Participant — Smart India Hackathon (SIH) 2026',
];
const CERTS = [
  { title: 'AI Fluency: Framework & Foundations', link: 'anthropic.skilljar.com' },
  { title: 'Introduction to Model Context Protocol', link: 'anthropic.skilljar.com' },
];

export function Milestones() {
  return (
    <section id="milestones" className="section band">
      <div className="wrap split">
        <div>
          <Reveal><Label n="04">Milestones</Label></Reveal>
          <Reveal delay={0.05}><h2>Learning, competing <span className="mark">and growing.</span></h2></Reveal>
          <Reveal delay={0.1}><p className="body">A few milestones from the work and communities that continue to shape my craft.</p></Reveal>
          <h3 className="sub">Achievements</h3>
          <ul className="wins">
            {WINS.map((w, i) => {
              const [kind, ...rest] = w.split(' — '); const won = kind === 'Winner';
              return (
                <Reveal key={w} delay={i * 0.06}>
                  <li className={won ? 'win won' : 'win'}>
                    <span className="win-icon">{won ? <Trophy size={20} /> : <Award size={20} />}</span>
                    <div><span className={won ? 'pill pill-gold' : 'pill pill-blue'}>{kind}</span><p>{rest.join(' — ')}</p></div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
        <div>
          <Frame src="/media/scene-milestones.webp" alt="Mustansir at his desk with trophies behind him" />
          <h3 className="sub">Certifications</h3>
          <div className="certs">
            {CERTS.map((c) => (
              <Reveal key={c.title} className="cert"><p className="pill pill-blue">Anthropic Academy</p><h4>{c.title}</h4><small>{c.link}</small></Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <Reveal className="contact">
          <div>
            <Label n="05">Start a conversation</Label>
            <p className="ask">Have an ambitious idea?</p>
            <h2>Let&apos;s make it <span className="mark-w">useful.</span></h2>
            <a className="btn btn-white" href={MAIL} target="_blank" rel="noreferrer">Write to me <ArrowUpRight size={16} /></a>
            <a className="mail" href={MAIL} target="_blank" rel="noreferrer">mustansirrangwal52@gmail.com</a>
          </div>
          <LazyVideo className="bunny" src="/media/bunny.mp4" poster="/media/bunny-poster.jpg" />
        </Reveal>
        <footer className="foot"><span>© {new Date().getFullYear()} Mustansir Rangwala</span><span className="avail"><i className="dot" /> Open to opportunities</span></footer>
      </div>
    </section>
  );
}
