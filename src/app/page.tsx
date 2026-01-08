"use client"

import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import SaasCompanies from './components/SaasCompanies';
import AIChat from './components/AIChat';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <div className="pt-16"> {/* Add padding top to account for fixed header */}
        <Hero />
        <About />
        <SaasCompanies />
        <AIChat />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
