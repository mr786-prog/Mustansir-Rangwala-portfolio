import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ToolkitSection from './components/ToolkitSection';
import FooterSection from './components/FooterSection';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <main>
      <CustomCursor />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ToolkitSection />
      <FooterSection />
    </main>
  );
}
