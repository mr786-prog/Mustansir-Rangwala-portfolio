import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, MapPin, Sparkles } from 'lucide-react';

export const MAIL = 'https://mail.google.com/mail/?view=cm&fs=1&to=mustansirrangwal52@gmail.com';
const rise = (i: number) => ({ initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] as const } });

export default function Hero() {
  const stack = useRef<HTMLDivElement>(null);

  // Photo 2 is revealed only while the pointer is over the portrait.
  useEffect(() => {
    const el = stack.current;
    if (!el) return;
    let tx = 0.5, ty = 0.42, x = 0.5, y = 0.42, r = 0, tr = 0, active = false, raf = 0;
    const aim = (e: PointerEvent) => {
      const b = el.getBoundingClientRect();
      tx = (e.clientX - b.left) / b.width; ty = (e.clientY - b.top) / b.height; active = true; tr = 0.36;
    };
    const leave = () => { active = false; tr = 0; };
    const loop = () => {
      if (active) { x += (tx - x) * 0.18; y += (ty - y) * 0.18; }
      r += (tr - r) * 0.16;
      const w = el.clientWidth, h = el.clientHeight;
      el.style.setProperty('--x', `${x * w}px`); el.style.setProperty('--y', `${y * h}px`); el.style.setProperty('--r', `${r * w}px`);
      raf = requestAnimationFrame(loop);
    };
    el.addEventListener('pointermove', aim); el.addEventListener('pointerdown', aim);
    el.addEventListener('pointerleave', leave); el.addEventListener('pointerup', leave);
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); el.removeEventListener('pointermove', aim); el.removeEventListener('pointerdown', aim); el.removeEventListener('pointerleave', leave); el.removeEventListener('pointerup', leave); };
  }, []);

  return (
    <section id="home" className="hero">
      <span className="blob b1" aria-hidden="true" /><span className="blob b2" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <motion.p className="chip" {...rise(0)}><i className="dot" /> Applied AI developer <MapPin size={14} /> Hyderabad, India</motion.p>
          <motion.h1 {...rise(1)}>Mustansir <span className="blue">Rangwala</span></motion.h1>
          <motion.p className="lead" {...rise(2)}>
            I build <mark className="mark">AI products</mark> that turn complex inputs into clear, useful experiences — from intelligent healthcare tools to knowledge-grounded agents.
          </motion.p>
          <motion.div className="actions" {...rise(3)}>
            <a className="btn btn-primary" href="#work">Explore my work <ArrowDown size={16} /></a>
            <a className="btn btn-ghost" href={MAIL} target="_blank" rel="noreferrer"><Mail size={16} /> Reach out</a>
          </motion.div>
          <motion.dl className="stats" {...rise(4)}>
            <div><dt>7</dt><dd>projects shipped</dd></div>
            <div><dt>2</dt><dd>competition wins</dd></div>
            <div><dt>2</dt><dd>Anthropic certificates</dd></div>
          </motion.dl>
        </div>

        <motion.div className="portrait-wrap" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
          <div className="portrait" ref={stack}>
            <img className="p-base" src="/media/hero-portrait-1.webp" alt="Mustansir Rangwala standing in a bright studio" />
            <img className="p-ai" src="/media/hero-portrait-2.webp" alt="" aria-hidden="true" />
            <span className="p-ring" aria-hidden="true" />
          </div>
          <span className="float f1"><Sparkles size={15} /> AI / ML</span>
          <span className="float f2">RAG · Agents · APIs</span>
          
        </motion.div>
      </div>
    </section>
  );
}
