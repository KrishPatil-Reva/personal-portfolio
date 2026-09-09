/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { StrengthsSection } from './components/StrengthsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { ToastContainer } from './components/Toast';
import { ToastMessage, ProjectItem } from './types';

export default function App() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const addToast = (text: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenGithub = (url: string, projectName: string) => {
    addToast(`Opening repository for ${projectName}`, 'info');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#dfe2f1] relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background ambient radial gradients */}
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 15%, rgba(6, 182, 212, 0.07) 0%, transparent 45%),
            radial-gradient(circle at 85% 60%, rgba(99, 102, 241, 0.07) 0%, transparent 50%),
            radial-gradient(circle at 50% 90%, rgba(59, 130, 246, 0.05) 0%, transparent 40%)
          `,
        }}
      />

      {/* Global Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero
          onCopySuccess={(msg) => addToast(msg, 'success')}
          onNavigateContact={scrollToContact}
          onNavigateProjects={scrollToProjects}
        />

        <AboutSection />

        <EducationSection />

        <SkillsSection />

        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenGithub={handleOpenGithub}
        />

        <StrengthsSection />

        <ContactSection onShowToast={addToast} />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenMail={scrollToContact}
      />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onShowToast={(msg) => addToast(msg, 'success')}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onShowToast={(msg) => addToast(msg, 'success')}
      />

      {/* Toast Notification Stream */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
