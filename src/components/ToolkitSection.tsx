import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SKILLS = ['Python', 'Basic React','RAG', 'MCP', 'REST APIs', 'NumPy', 'Git & GitHub', 'SQL' , 'Supabase' , 'Pinecone' , 'Langchain' , 'AI Fundamentals' , ' Generative AI' , 'Basic DSA' , 'HTML & CSS' ];

export default function ToolkitSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="toolkit" ref={sectionRef} className="toolkit page-shell">
      <motion.div 
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        03 <span /> Toolkit
      </motion.div>
      
      <div className="toolkit-content">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Built with a<br /><em>curious stack.</em>
        </motion.h2>
        
        <motion.div 
          className="skills"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {SKILLS.map((skill, index) => (
            <motion.span
              key={skill}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                x: 5,
                color: 'var(--violet)',
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
            >
              <i>{String(index + 1).padStart(2, '0')}</i>{skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
