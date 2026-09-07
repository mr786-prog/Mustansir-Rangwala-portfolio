import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

const GMAIL_COMPOSE = 'https://mail.google.com/mail/?view=cm&fs=1&to=mustansirrangwal52@gmail.com';
const PORTRAIT = '/mustansir-portrait.jpeg';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Parallax effects
  const portraitY = useSpring(useTransform(scrollY, [0, 500], [0, 100]), { stiffness: 100, damping: 30 });
  const cardAiY = useSpring(useTransform(scrollY, [0, 500], [0, 60]), { stiffness: 100, damping: 30 });
  const cardBuildY = useSpring(useTransform(scrollY, [0, 500], [0, 40]), { stiffness: 100, damping: 30 });
  const orbitScale = useSpring(useTransform(scrollY, [0, 500], [1, 1.1]), { stiffness: 100, damping: 30 });
  
  // Mouse parallax for scene elements
  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Staggered text animation
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  // Magnetic button effect
  const MagneticButton = ({ children, className, ...props }: any) => {
    const [magnetic, setMagnetic] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = (e: React.MouseEvent) => {
      const { clientX, clientY } = e;
      const { currentTarget } = e;
      const { left, top, width, height } = currentTarget.getBoundingClientRect();
      const x = (clientX - left - width / 2) * 0.3;
      const y = (clientY - top - height / 2) * 0.3;
      setMagnetic({ x, y });
    };

    const handleMouseLeave = () => {
      setMagnetic({ x: 0, y: 0 });
    };

    return (
      <motion.a
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: magnetic.x, y: magnetic.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  };

  return (
    <section id="home" className="hero min-h-screen">
      <div className="hero-noise" />
      <nav className="floating-nav" aria-label="Main navigation">
        <motion.a 
          href="#home" 
          className="monogram"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          MR
        </motion.a>
        <div className="nav-divider" />
        <div className="nav-links">
          {['Home', 'Work', 'About'].map((item, i) => (
            <motion.a
              key={item}
              className={i === 0 ? 'active' : ''}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        <div className="nav-divider hide-mobile" />
        <motion.a 
          href="#contact" 
          className="say-hi"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Say hi <ArrowUpRight size={14} />
        </motion.a>
      </nav>

      <div className="hero-content page-shell">
        <motion.p 
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="kicker"
        >
          Applied AI developer · Hyderabad, India
        </motion.p>
        <motion.h1 
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Mustansir<br /><em>Rangwala.</em>
        </motion.h1>
        <motion.div 
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="hero-bottom"
        >
          <p>I build AI products that turn complex inputs into clear, useful experiences — from intelligent healthcare tools to knowledge-grounded agents.</p>
          <div className="hero-actions">
            <MagneticButton href="#work" className="button button-primary">
              Explore my work <ArrowDown size={15} />
            </MagneticButton>
            <MagneticButton href={GMAIL_COMPOSE} target="_blank" rel="noreferrer" className="button button-outline">
              <Mail size={15} /> Reach out
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      <div className="scene-wrap" aria-hidden="true">
        <motion.div 
          className="orbit orbit-one" 
          animate={{ rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          style={{ scale: orbitScale }}
        />
        <motion.div 
          className="orbit orbit-two" 
          animate={{ rotate: -360 }} 
          transition={{ repeat: Infinity, duration: 26, ease: 'linear' }}
          style={{ scale: orbitScale }}
        />
        <div className="light-sweep sweep-one" />
        <div className="light-sweep sweep-two" />
        
        <motion.div 
          className="portrait-orb" 
          style={{ 
            y: portraitY,
            x: useTransform(scrollY, [0, 500], [0, mousePosition.x * 0.5]),
            rotate: useTransform(scrollY, [0, 500], [-1.5, 1.5])
          }}
          animate={{ y: [0, -12, 0], rotate: [-1.5, 1.5, -1.5] }} 
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          <img src={PORTRAIT} alt="" />
        </motion.div>
        
        <motion.div 
          className="float-card card-ai" 
          style={{ 
            y: cardAiY,
            x: useTransform(scrollY, [0, 500], [0, mousePosition.x * 0.3])
          }}
          animate={{ y: [0, -18, 0], rotate: [8, 3, 8] }} 
          transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
        >
          <span>01</span><strong>AI / ML</strong><i />
        </motion.div>
        
        <motion.div 
          className="float-card card-build" 
          style={{ 
            y: cardBuildY,
            x: useTransform(scrollY, [0, 500], [0, mousePosition.x * 0.2])
          }}
          animate={{ y: [0, 14, 0], rotate: [-9, -3, -9] }} 
          transition={{ repeat: Infinity, duration: 6.5, ease: 'easeInOut', delay: 0.5 }}
        >
          <span>BUILD</span><strong>IDEAS<br />INTO USE</strong>
        </motion.div>
      </div>
      
      <motion.a 
        className="scroll-cue" 
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span>Scroll to explore</span><i />
      </motion.a>
    </section>
  );
}
