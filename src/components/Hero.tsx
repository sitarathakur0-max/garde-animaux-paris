import React from 'react';
import { Phone, Star, ShieldCheck, ArrowRight, Heart } from 'lucide-react';
import { businessData } from '../data/business';
import { petImages } from '../data/images';

interface HeroProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero-section" className="relative overflow-hidden pt-6 pb-16 lg:py-20 bg-gradient-to-b from-[#FAF7F2] via-[#F6F1EA] to-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Google Trust Rating Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EFE7DA] border border-[#DFCBB5] text-xs font-medium text-[#4A3E34]">
              <div className="flex items-center text-[#D69632]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D69632]" />
                ))}
              </div>
              <span className="font-semibold text-[#2C241E]">{businessData.reviews.rating}</span>
              <span className="text-[#6E5F52]">({businessData.reviews.count} avis sur Google)</span>
              <span className="w-1 h-1 rounded-full bg-[#B8A798]"></span>
              <span className="text-[#8C5836] font-semibold">Service indépendant</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#241D17] leading-[1.15] tracking-tight">
              Prenez soin de vos compagnons, même en votre absence.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#55473C] leading-relaxed max-w-2xl">
              Garde Animaux Paris propose un service indépendant de <strong>visites à domicile</strong>, de <strong>repas</strong> et de <strong>soins quotidiens</strong> attentifs pour vos chats et vos chiens à Paris. Votre animal reste serein dans son cadre de vie familier.
            </p>

            {/* Action Buttons & Phone Link */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                id="hero-primary-cta"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#8C5836] text-white font-medium hover:bg-[#744527] active:scale-98 transition-all shadow-sm cursor-pointer text-base"
              >
                <span>Nous contacter</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#FAF7F2] text-[#3D3227] font-medium border border-[#D8C7B3] hover:bg-[#EFE7DA] transition-colors cursor-pointer text-base"
              >
                Découvrir nos services
              </button>
            </div>

            {/* Direct Phone Access Banner */}
            <div className="pt-3 border-t border-[#E8DFC8]/70 flex flex-wrap items-center gap-4 text-sm text-[#55473C]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#EFE7DA] flex items-center justify-center text-[#8C5836]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-[#7A6B5D] block">Échange direct par téléphone :</span>
                  <a
                    id="hero-phone-link"
                    href={`tel:${businessData.phone.raw}`}
                    className="font-bold text-[#2C241E] hover:text-[#8C5836] transition-colors tracking-wide text-base"
                  >
                    {businessData.phone.display}
                  </a>
                </div>
              </div>

              <div className="hidden sm:block w-px h-8 bg-[#E8DFC8]"></div>

              <div className="flex items-center gap-2 text-xs text-[#6B5C4F]">
                <ShieldCheck className="w-4 h-4 text-[#8C5836]" />
                <span>11 Rue de la Roquette, 75011 Paris</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-[#E8DFC8]/50 transform -rotate-1"></div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#DFCBB5] bg-white">
                <img
                  src={petImages.hero}
                  alt="Chien et chat paisibles et soignés dans un appartement parisien chaleureux"
                  className="w-full h-80 sm:h-96 lg:h-[440px] object-cover object-center"
                  loading="eager"
                />

                {/* Subtle Image Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-xs border border-[#E8DFC8] shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#F3ECE0] flex items-center justify-center text-[#8C5836]">
                      <Heart className="w-4 h-4 fill-[#8C5836]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#2C241E]">Visites & soins à domicile</p>
                      <p className="text-[11px] text-[#7A6B5D]">Pour chats et chiens à Paris</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#8C5836] bg-[#FAF7F2] px-2.5 py-1 rounded-md border border-[#E5DAC8]">
                    Paris 11e
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
