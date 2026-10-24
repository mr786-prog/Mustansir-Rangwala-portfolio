import { MotionConfig } from 'framer-motion';
import Hero from './components/Hero';
import { Nav, Marquee, About, Work, Toolkit, Interlude, Milestones, Contact } from './components/Sections';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Toolkit />
        <Interlude />
        <Milestones />
        <Contact />
      </main>
    </MotionConfig>
  );
}
