import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { PetCareVisualSection } from './components/PetCareVisualSection';
import { ProcessSection } from './components/ProcessSection';
import { ReviewsTrustSection } from './components/ReviewsTrustSection';
import { FinalCTASection } from './components/FinalCTASection';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { ShieldCheck, Heart } from 'lucide-react';
import { businessData } from './data/business';

type PageType = 'home' | 'services' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Synchronisation avec l'URL hash pour navigation fluide et historique
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'services' || hash === 'about' || hash === 'contact') {
        setCurrentPage(hash as PageType);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Initial check
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C241E] selection:bg-[#EBDCCF]">
      {/* Primary Accessible Header */}
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {currentPage === 'home' && (
          <div className="space-y-0">
            {/* Hero Section */}
            <Hero onNavigate={navigateTo} />

            {/* Introduction Section */}
            <section id="introduction-section" className="py-12 sm:py-16 bg-[#FAF7F2]">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE7DA] border border-[#DFCBB5] text-xs font-semibold text-[#8C5836] mb-4">
                  <Heart className="w-3.5 h-3.5 fill-[#8C5836]/20" />
                  <span>Présentation du service</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#241D17] leading-snug">
                  Une prise en charge attentionnée pour vos animaux à Paris
                </h2>
                <p className="mt-4 text-base sm:text-lg text-[#55473C] leading-relaxed">
                  Garde Animaux Paris est un service indépendant spécialisé dans les <strong>visites à domicile</strong>, la distribution des <strong>repas</strong> et les <strong>soins quotidiens</strong> pour chats et chiens. Installés au cœur du 11e arrondissement, nous intervenons directement chez vous pour préserver les repères et la tranquillité de vos compagnons.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#7A6B5D]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#8C5836]" />
                    Service indépendant à taille humaine
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#8C5836]" />
                    Visites directement à votre domicile
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#8C5836]" />
                    Dédié aux chats et aux chiens
                  </span>
                </div>
              </div>
            </section>

            {/* Documented Services Cards */}
            <ServicesSection
              onSelectService={() => navigateTo('contact')}
              onNavigateContact={() => navigateTo('contact')}
            />

            {/* Why Us (Strictly Documented) */}
            <WhyUsSection />

            {/* Pet Care Visual Showcase */}
            <PetCareVisualSection />

            {/* Simple 4-Step Care Process */}
            <ProcessSection onNavigateContact={() => navigateTo('contact')} />

            {/* Real 5.0/5 Google Reviews / Trust Display */}
            <ReviewsTrustSection />

            {/* Final Contact CTA */}
            <FinalCTASection onNavigateContact={() => navigateTo('contact')} />
          </div>
        )}

        {currentPage === 'services' && (
          <ServicesPage onNavigateContact={() => navigateTo('contact')} />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigateContact={() => navigateTo('contact')} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Responsive Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
