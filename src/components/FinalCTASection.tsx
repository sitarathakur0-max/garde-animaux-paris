import React from 'react';
import { Phone, ArrowRight, MapPin, Heart } from 'lucide-react';
import { businessData } from '../data/business';

interface FinalCTASectionProps {
  onNavigateContact: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onNavigateContact }) => {
  return (
    <section id="final-cta-section" className="py-16 sm:py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F1E8DC] border-t border-[#E8DFC8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="w-14 h-14 mx-auto rounded-full bg-[#EAE0D2] flex items-center justify-center text-[#8C5836] mb-6 shadow-xs">
          <Heart className="w-7 h-7 fill-[#8C5836]/20" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#241D17] tracking-tight max-w-3xl mx-auto">
          Confiez votre animal en toute sérénité pendant votre absence
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#5A4C40] max-w-2xl mx-auto leading-relaxed">
          Pour vos chats et vos chiens à Paris, nous veillons sur leur bien-être avec des visites régulières, des repas équilibrés et une présence rassurante à la maison.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="final-cta-contact-btn"
            onClick={onNavigateContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#8C5836] text-white font-medium hover:bg-[#744527] active:scale-98 transition-all shadow-sm cursor-pointer text-base"
          >
            <span>Nous contacter</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            id="final-cta-phone-btn"
            href={`tel:${businessData.phone.raw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-[#2C241E] font-medium border border-[#D8C7B3] hover:bg-[#F8F4EE] transition-colors text-base"
          >
            <Phone className="w-4 h-4 text-[#8C5836]" />
            <span>Appeler le {businessData.phone.display}</span>
          </a>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 text-xs text-[#7A6B5D]">
          <MapPin className="w-3.5 h-3.5 text-[#8C5836]" />
          <span>Service basé au 11 Rue de la Roquette, 75011 Paris, France</span>
        </div>

      </div>
    </section>
  );
};
