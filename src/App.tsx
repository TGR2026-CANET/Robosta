import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsStrip } from './components/StatsStrip';
import { TwoSidedSection } from './components/TwoSidedSection';
import { InteractiveExplorerSection } from './components/InteractiveExplorerSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FaqSection } from './components/FaqSection';
import { B2BCtaFooter } from './components/B2BCtaFooter';
import { VideoModal } from './components/VideoModal';

export function App() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[var(--ink)]">
      <Navbar />

      <main>
        <HeroSection onOpenVideo={() => setVideoOpen(true)} />
        <StatsStrip />
        <TwoSidedSection />
        <InteractiveExplorerSection />
        <HowItWorksSection />
        <FaqSection />
      </main>

      <B2BCtaFooter />

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
}

export default App;
