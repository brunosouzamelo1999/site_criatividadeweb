import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LenisProvider } from '@/context/LenisContext';
import { Navigation } from '@/components/Navigation';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { HeroSection } from '@/sections/HeroSection';
import { BenefitsSection } from '@/sections/BenefitsSection';
import { PainSection } from '@/sections/PainSection';
import { MissionSection } from '@/sections/MissionSection';
import { PlansSection } from '@/sections/PlansSection';
import { MaintenanceSection } from '@/sections/MaintenanceSection';
import { PortfolioSection } from '@/sections/PortfolioSection';
import { ProcessSection } from '@/sections/ProcessSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { FAQSection } from '@/sections/FAQSection';
import { CTAFinalSection } from '@/sections/CTAFinalSection';
import { Footer } from '@/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenisInstance.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
      gsap.ticker.remove(lenisInstance.raf as any);
    };
  }, []);

  return (
    <LenisProvider lenis={lenis!}>
      <div className="relative">
        <ScrollProgressBar />
        <Navigation />
        <main>
          <HeroSection />
          <BenefitsSection />
          <PainSection />
          <MissionSection />
          <PortfolioSection />
          <PlansSection />
          <MaintenanceSection />
          <ProcessSection />
          <TestimonialsSection />
          <FAQSection />
          <CTAFinalSection />
        </main>
        <Footer />
      </div>
    </LenisProvider>
  );
}

export default App;
