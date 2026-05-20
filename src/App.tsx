import { startTransition, useCallback, useState } from 'react';
import { useLenis } from '@/hooks/useLenis';
import OpeningScreen from '@/components/OpeningScreen';
import Navbar from '@/sections/Navbar';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ResumeSection from '@/sections/ResumeSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ContactSection from '@/sections/ContactSection';

export default function App() {
  useLenis();
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = useCallback(() => {
    startTransition(() => {
      setShowIntro(false);
    });
  }, []);

  if (showIntro) {
    return <OpeningScreen onComplete={handleIntroComplete} />;
  }

  return (
    <div className="relative">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
