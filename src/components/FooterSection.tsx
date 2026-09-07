import { ArrowUpRight } from 'lucide-react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const GMAIL_COMPOSE = 'https://mail.google.com/mail/?view=cm&fs=1&to=mustansirrangwal52@gmail.com';

export default function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end']
  });
  
  const orbitRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  return (
    <footer id="contact" ref={sectionRef} className="footer">
      <motion.div 
        className="footer-orbit"
        style={{ rotate: orbitRotation }}
      />
      <motion.div 
        className="footer-glow"
        style={{ opacity: glowOpacity }}
      />
      
      <motion.div 
        className="page-shell footer-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div 
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          04 <span /> Start a conversation
        </motion.div>
        
        <motion.div 
          className="footer-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <p className="footer-eyebrow">Have an ambitious idea?</p>
            <h2>Let&apos;s make it<br /><em>useful.</em></h2>
          </div>
          <motion.a 
            className="email-link" 
            href={GMAIL_COMPOSE} 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(255, 116, 76, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <span>Write to me</span>
            <ArrowUpRight size={20} />
          </motion.a>
        </motion.div>
        
        <motion.a 
          className="email-address" 
          href={GMAIL_COMPOSE} 
          target="_blank" 
          rel="noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ 
            scale: 1.02,
            letterSpacing: '0.05em'
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          mustansirrangwal52@gmail.com
        </motion.a>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span>© {new Date().getFullYear()} Mustansir Rangwala</span>
          <motion.span 
            className="availability"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <motion.i 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            /> 
            Open to opportunities
          </motion.span>
        </motion.div>
      </motion.div>
    </footer>
  );
}