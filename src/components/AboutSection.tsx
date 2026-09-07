import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.2']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [30, 0]);

  // Counter animation component
  function Counter({ end, duration = 2 }: { end: string | number; duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    
    const numericValue = typeof end === 'number' ? end : 0;
    
    return (
      <motion.b
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {end}
      </motion.b>
    );
  }

  return (
    <section id="about" ref={sectionRef} className="about-section page-shell">
      <motion.div 
        className="section-label"
        style={{ opacity, y }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        01 <span /> About me
      </motion.div>
      
      <div className="about-grid">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Learning deeply.<br /><em>Shipping thoughtfully.</em>
        </motion.h2>
        
        <motion.div 
          className="about-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>I&apos;m Mustansir, a Computer Science &amp; Machine Learning student at Loyola Academy, Secunderabad. I&apos;m most interested in the space between an ambitious AI idea and the moment it becomes genuinely useful to someone.</p>
          <p>My work combines RAG workflows, APIs, Databases and frontend development. I care about asking the right questions, building the complete flow, and making technical products feel simple to use.</p>
          
          <motion.div 
            className="fact-row"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Counter end="05" />
              <span>projects shipped</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Counter end="AI" />
              <span>systems &amp; agents</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Counter end="2026" />
              <span>currently building</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
