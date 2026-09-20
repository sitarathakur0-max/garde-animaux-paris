import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Heart, Shield } from 'lucide-react';
import { businessData } from '../data/business';

interface HeaderProps {
  currentPage: 'home' | 'services' | 'about' | 'contact';
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'services' | 'about' | 'contact') => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFC8]/60 py-3.5'
          : 'bg-[#FAF7F2] border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Wordmark Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="group text-left flex items-center gap-3 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#8C5836] rounded-lg p-1"
            aria-label="Garde Animaux Paris - Retour à l'accueil"
          >
            <div className="w-10 h-10 rounded-full bg-[#EFE7DA] border border-[#DFCBB5] flex items-center justify-center text-[#8C5836] group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 fill-[#8C5836]/20" />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2C241E] leading-tight">
                Garde Animaux Paris
              </span>
              <span className="block text-[11px] uppercase tracking-wider text-[#7A6B5D] font-medium">
                Pet-Sitting Indépendant • Paris 11e
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" aria-label="Navigation principale" className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                currentPage === 'home'
                  ? 'text-[#2C241E] bg-[#EFE7DA]'
                  : 'text-[#5C4F44] hover:text-[#2C241E] hover:bg-[#F3ECE0]'
              }`}
            >
              Accueil
            </button>
            <button
              id="nav-link-services"
              onClick={() => handleNavClick('services')}
              className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                currentPage === 'services'
                  ? 'text-[#2C241E] bg-[#EFE7DA]'
                  : 'text-[#5C4F44] hover:text-[#2C241E] hover:bg-[#F3ECE0]'
              }`}
            >
              Services
            </button>
            <button
              id="nav-link-about"
              onClick={() => handleNavClick('about')}
              className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                currentPage === 'about'
                  ? 'text-[#2C241E] bg-[#EFE7DA]'
                  : 'text-[#5C4F44] hover:text-[#2C241E] hover:bg-[#F3ECE0]'
              }`}
            >
              À propos
            </button>
            <button
              id="nav-link-contact"
              onClick={() => handleNavClick('contact')}
              className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                currentPage === 'contact'
                  ? 'text-[#2C241E] bg-[#EFE7DA]'
                  : 'text-[#5C4F44] hover:text-[#2C241E] hover:bg-[#F3ECE0]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA & Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              id="header-phone-link"
              href={`tel:${businessData.phone.raw}`}
              className="flex items-center gap-2 text-sm font-medium text-[#4A3E34] hover:text-[#8C5836] transition-colors px-2.5 py-1.5 rounded-md"
              title="Appeler Garde Animaux Paris"
            >
              <Phone className="w-4 h-4 text-[#8C5836]" />
              <span className="tabular-nums font-semibold tracking-wide">{businessData.phone.display}</span>
            </a>

            <button
              id="header-cta-btn"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-full bg-[#8C5836] text-white hover:bg-[#734527] active:scale-98 transition-all shadow-xs cursor-pointer"
            >
              Nous contacter
            </button>
          </div>

          {/* Mobile Actions: Phone Icon + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              id="mobile-header-call-btn"
              href={`tel:${businessData.phone.raw}`}
              aria-label="Appeler Garde Animaux Paris"
              className="p-2.5 rounded-full bg-[#EFE7DA] text-[#8C5836] hover:bg-[#E5DAC8] transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#3D332A] hover:bg-[#EFE7DA] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#8C5836]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden border-b border-[#E8DFC8] bg-[#FAF7F2] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200"
        >
          <div className="space-y-1">
            <button
              id="mobile-link-home"
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                currentPage === 'home'
                  ? 'bg-[#EFE7DA] text-[#2C241E] font-semibold'
                  : 'text-[#4A3E34] hover:bg-[#F3ECE0]'
              }`}
            >
              Accueil
            </button>
            <button
              id="mobile-link-services"
              onClick={() => handleNavClick('services')}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                currentPage === 'services'
                  ? 'bg-[#EFE7DA] text-[#2C241E] font-semibold'
                  : 'text-[#4A3E34] hover:bg-[#F3ECE0]'
              }`}
            >
              Services
            </button>
            <button
              id="mobile-link-about"
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                currentPage === 'about'
                  ? 'bg-[#EFE7DA] text-[#2C241E] font-semibold'
                  : 'text-[#4A3E34] hover:bg-[#F3ECE0]'
              }`}
            >
              À propos
            </button>
            <button
              id="mobile-link-contact"
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                currentPage === 'contact'
                  ? 'bg-[#EFE7DA] text-[#2C241E] font-semibold'
                  : 'text-[#4A3E34] hover:bg-[#F3ECE0]'
              }`}
            >
              Contact
            </button>
          </div>

          <div className="pt-4 border-t border-[#E8DFC8]/70 space-y-3">
            <div className="flex items-center gap-2 px-2 text-xs text-[#7A6B5D]">
              <Shield className="w-3.5 h-3.5 text-[#8C5836]" />
              <span>Garde de confiance à Paris (75011)</span>
            </div>

            <a
              id="mobile-drawer-phone-link"
              href={`tel:${businessData.phone.raw}`}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#EFE7DA] text-[#2C241E] font-semibold text-sm border border-[#DFCBB5]"
            >
              <Phone className="w-4 h-4 text-[#8C5836]" />
              Appeler : {businessData.phone.display}
            </a>

            <button
              id="mobile-drawer-cta-btn"
              onClick={() => handleNavClick('contact')}
              className="w-full py-3.5 px-4 rounded-xl bg-[#8C5836] text-white font-medium text-center text-sm shadow-xs active:bg-[#734527]"
            >
              Nous contacter
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
