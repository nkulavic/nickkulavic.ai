'use client'

import React, { useState } from 'react';
import { ExperienceEntry } from '../data/experience';
import Header from './Header';
import Footer from './Footer';
import CompanyModal from './CompanyModal';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactCTASection from './sections/ContactCTASection';

export default function HomeContent() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (exp: ExperienceEntry) => {
    setSelectedExperience(exp);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedExperience(null), 300);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CompanyModal
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection onOpenModal={openModal} />
      <ContactCTASection />
      <Footer />
    </main>
  );
}
