import React from 'react';
import { Shield, Home, Heart, Utensils, HeartHandshake, Phone, ArrowRight, MapPin, Star } from 'lucide-react';
import { businessData } from '../data/business';
import { petImages } from '../data/images';

interface AboutPageProps {
  onNavigateContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateContact }) => {
  return (
    <div id="about-page-view" className="py-12 sm:py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE7DA] border border-[#DFCBB5] text-xs font-semibold text-[#8C5836] mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Service indépendant à Paris</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241D17] tracking-tight">
            À propos de Garde Animaux Paris
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#5A4C40] leading-relaxed">
            Un service indépendant de garde d'animaux attentif et bienveillant, dédié au confort des chats et des chiens dans leur foyer parisien.
          </p>
        </div>

        {/* Core Presentation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          <div className="lg:col-span-7 space-y-5 text-[#55473C] text-base leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241D17]">
              L'attention individuelle que mérite votre compagnon
            </h2>

            <p>
              Basé au <strong>11 Rue de la Roquette, dans le 11e arrondissement de Paris</strong>, <strong>Garde Animaux Paris</strong> est un service indépendant de pet-sitting conçu pour offrir une alternative sereine et respectueuse aux pensions traditionnelles.
            </p>

            <p>
              Nous intervenons directement à votre domicile afin de préserver l'ensemble des habitudes de votre animal : ses odeurs familières, ses endroits de repos préférés et ses repères territoriaux essentiels à son apaisement.
            </p>

            <p>
              Chaque visite est l'occasion d'une attention individuelle et exclusive portée à votre chat ou votre chien : service ponctuel des repas, renouvellement méticuleux de l'eau, nettoyage des espaces de vie et moments d'affection dédiés.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#E8DFC8] shadow-xs text-xs">
              <div className="flex items-center text-[#D69632]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D69632]" />
                ))}
              </div>
              <span className="font-bold text-[#2C241E]">{businessData.reviews.rating}</span>
              <span className="text-[#6E5D50]">({businessData.reviews.count} avis sur Google)</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-[#DFCBB5] shadow-md bg-white">
              <img
                src={petImages.hero}
                alt="Animal de compagnie serein dans un intérieur parisien chaleureux"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-[#FAF7F2] border-t border-[#E8DFC8] text-xs text-[#7A6B5D] flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8C5836] shrink-0" />
                <span>11 Rue de la Roquette, 75011 Paris</span>
              </div>
            </div>
          </div>

        </div>

        {/* Documented Principles Bento */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold text-[#241D17] text-center mb-8">
            Les piliers de notre accompagnement
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-2xl p-6 border border-[#E8DFC8] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F6EFE5] flex items-center justify-center text-[#8C5836]">
                <Home className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#2C241E]">
                Visites à domicile
              </h4>
              <p className="text-xs sm:text-sm text-[#5C4F44] leading-relaxed">
                Aucun dépaysement. L'animal demeure au sein de son cadre habituel tout au long de votre absence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFC8] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F6EFE5] flex items-center justify-center text-[#8C5836]">
                <Utensils className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#2C241E]">
                Repas & alimentation
              </h4>
              <p className="text-xs sm:text-sm text-[#5C4F44] leading-relaxed">
                Distribution fidèle de la nourriture habituelle et renouvellement rigoureux de l'eau fraîche.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFC8] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F6EFE5] flex items-center justify-center text-[#8C5836]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#2C241E]">
                Soins quotidiens
              </h4>
              <p className="text-xs sm:text-sm text-[#5C4F44] leading-relaxed">
                Présence bienveillante, caresses, jeux et entretien régulier de l'espace de vie de votre compagnon.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#E8DFC8] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F6EFE5] flex items-center justify-center text-[#8C5836]">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#2C241E]">
                Attention individuelle
              </h4>
              <p className="text-xs sm:text-sm text-[#5C4F44] leading-relaxed">
                Un temps entièrement dédié à votre chat ou chien, dans le respect attentif de sa sensibilité.
              </p>
            </div>

          </div>
        </div>

        {/* Contact CTA */}
        <div className="rounded-3xl bg-[#F6EFE5] border border-[#DFCBB5] p-8 sm:p-10 text-center space-y-5">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#241D17]">
            Faites connaissance avec notre service
          </h3>
          <p className="text-sm sm:text-base text-[#5C4F44] max-w-xl mx-auto leading-relaxed">
            Nous sommes à votre disposition pour échanger sur le caractère de votre compagnon et organiser les prochaines visites à votre domicile parisien.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onNavigateContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8C5836] text-white text-sm font-semibold hover:bg-[#744527] transition-colors"
            >
              <span>Contacter Garde Animaux Paris</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${businessData.phone.raw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#2C241E] border border-[#DFCBB5] text-sm font-semibold hover:bg-[#FAF7F2] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#8C5836]" />
              {businessData.phone.display}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
