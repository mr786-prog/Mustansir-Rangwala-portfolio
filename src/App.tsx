import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ToolkitSection from './components/ToolkitSection';
import AchievementsSection from './components/AchievementsSection';
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
      <AchievementsSection />
      <FooterSection />
    </main>
  );
}
