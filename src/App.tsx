import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { TechStack } from './sections/TechStack';
import { Experience } from './sections/Experience';
import { FeaturedProject } from './sections/FeaturedProject';
import { ArchitectureDiagram } from './sections/ArchitectureDiagram';
import { Education } from './sections/Education';
import { Certifications } from './sections/Certifications';
import { Terminal } from './sections/Terminal';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';
import { Toast } from './components/Toast';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    const handleOpenPalette = () => {
      setIsCommandPaletteOpen(true);
    };
    window.addEventListener('open-command-palette', handleOpenPalette);
    return () => window.removeEventListener('open-command-palette', handleOpenPalette);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Background Grid Texture */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />
      <div className="fixed inset-0 bg-subtle-glow pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <TechStack />
        <Experience />
        <FeaturedProject onNotify={showNotification} />
        <ArchitectureDiagram />
        <Education />
        <Certifications />
        <Terminal />
        <Contact onNotify={showNotification} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onNotify={showNotification}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onNotify={showNotification}
      />

      {/* Toast notifications */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}

    </div>
  );
}

export default App;
