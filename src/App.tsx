import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { CoreStrengths } from './components/CoreStrengths';
import { Projects } from './components/Projects';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';
import { ExperienceEducationModal } from './components/ExperienceEducationModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isDark, setIsDark] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isExpEduOpen, setIsExpEduOpen] = useState<boolean>(false);
  const [expEduTab, setExpEduTab] = useState<'experience' | 'education'>('experience');

  // Handle section scrolling and modal triggering
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);

    if (sectionId === 'experience') {
      setExpEduTab('experience');
      setIsExpEduOpen(true);
      return;
    }

    if (sectionId === 'education') {
      setExpEduTab('education');
      setIsExpEduOpen(true);
      return;
    }

    if (sectionId === 'resume') {
      setIsResumeOpen(true);
      return;
    }

    if (sectionId === 'contact') {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        setIsContactOpen(true);
      }
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Observe scroll position to highlight active nav item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#0b0f19] text-slate-100' : 'bg-slate-900 text-slate-50'}`}>
      {/* Top Fixed Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Single Page Portfolio Content */}
      <main>
        {/* Section 1: Hero */}
        <Hero
          onViewProjects={() => handleNavigate('projects')}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Section 2: My Tech Stack */}
        <TechStack />

        {/* Section 3: Core Strengths (Problem Solver, Always Learning, Team Player, Goal Oriented) */}
        <CoreStrengths />

        {/* Section 4: Featured Projects */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section 5: Have a project in mind? Banner */}
        <ContactCta onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Section 6: Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ExperienceEducationModal
        isOpen={isExpEduOpen}
        initialTab={expEduTab}
        onClose={() => setIsExpEduOpen(false)}
      />
    </div>
  );
}
