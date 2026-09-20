import React from 'react';
import { Phone, MapPin, Star, ShieldCheck, Heart, Navigation } from 'lucide-react';
import { businessData } from '../data/business';
import { ContactForm } from './ContactForm';

export const ContactPage: React.FC = () => {
  return (
    <div id="contact-page-view" className="py-12 sm:py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE7DA] border border-[#DFCBB5] text-xs font-semibold text-[#8C5836] mb-3">
            <Heart className="w-3.5 h-3.5 fill-[#8C5836]/20" />
            <span>Échangeons sur vos besoins</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241D17] tracking-tight">
            Nous contacter
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#5A4C40] leading-relaxed">
            Pour organiser des visites à domicile, définir les repas et soins de vos chats ou chiens à Paris, contactez-nous par téléphone ou via le formulaire ci-dessous.
          </p>
        </div>

        {/* 2-Column Grid: Form & Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Business Info & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Business Contact Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DFC8] shadow-xs space-y-5">
              <div className="border-b border-[#F0E8DC] pb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8C5836] block">
                  Établissement
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#241D17] mt-0.5">
                  {businessData.name}
                </h2>
                <p className="text-xs text-[#7A6B5D] mt-1">
                  Service indépendant de garde d'animaux à domicile
                </p>
              </div>

              {/* Phone Clickable Block */}
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFC8] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#6E5D50]">
                  <Phone className="w-3.5 h-3.5 text-[#8C5836]" />
                  <span>Téléphone direct</span>
                </div>
                <a
                  id="contact-page-phone-btn"
                  href={`tel:${businessData.phone.raw}`}
                  className="block text-xl font-bold text-[#2C241E] hover:text-[#8C5836] transition-colors tracking-wide"
                >
                  {businessData.phone.display}
                </a>
                <p className="text-[11px] text-[#7A6B5D]">
                  Appel direct pour poser vos questions et vérifier la faisabilité de vos dates.
                </p>
              </div>

              {/* Address Block */}
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFC8] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#6E5D50]">
                  <MapPin className="w-3.5 h-3.5 text-[#8C5836]" />
                  <span>Adresse</span>
                </div>
                <p className="text-sm font-semibold text-[#2C241E]">
                  {businessData.address.full}
                </p>
                <p className="text-[11px] text-[#7A6B5D]">
                  Paris 11e arrondissement (proche Bastille / Roquette).
                </p>
              </div>

              {/* Google Review Badge */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F6EFE5] border border-[#DFCBB5] text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-[#D69632]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D69632]" />
                    ))}
                  </div>
                  <span className="font-bold text-[#2C241E]">{businessData.reviews.rating}</span>
                </div>
                <span className="text-[#6E5D50] font-medium">
                  {businessData.reviews.count} avis sur Google
                </span>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-2xl p-5 border border-[#E8DFC8] shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#2C241E]">
                  <Navigation className="w-4 h-4 text-[#8C5836]" />
                  <span>Localisation • Paris 11e</span>
                </div>
                <span className="text-[11px] text-[#7A6B5D]">11 Rue de la Roquette</span>
              </div>

              {/* OpenStreetMap iframe */}
              <div className="w-full h-56 rounded-xl overflow-hidden border border-[#E0D3C1] relative bg-[#EFE7DA]">
                <iframe
                  title="Carte de localisation - 11 Rue de la Roquette Paris 11e"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=2.365%2C48.851%2C2.376%2C48.857&amp;layer=mapnik&amp;marker=48.8543%2C2.3705"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>

              <p className="text-[11px] text-[#7A6B5D] text-center">
                Interventions à domicile pour vos animaux de compagnie à Paris.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
