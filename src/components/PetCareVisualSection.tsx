import React from 'react';
import { petImages } from '../data/images';
import { Heart, Sparkles, Home, ShieldCheck } from 'lucide-react';

export const PetCareVisualSection: React.FC = () => {
  return (
    <section id="pet-care-visuals" className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE7DA] border border-[#DFCBB5] text-xs font-semibold text-[#8C5836] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sérénité au foyer</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#241D17] tracking-tight">
            Le confort de son chez-soi, préservé
          </h2>
          <p className="mt-3 text-base text-[#5A4C40] leading-relaxed">
            Rester à la maison évite à votre chat ou chien les perturbations d'un environnement inconnu. Chaque visite est pensée pour recréer une atmosphère douce et familière.
          </p>
        </div>

        {/* Visual Showcase Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Visual: Cozy Home Atmosphere */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E0D3C1] bg-white shadow-xs relative group">
            <div className="h-72 sm:h-96 lg:h-[420px] w-full overflow-hidden relative">
              <img
                src={petImages.hero}
                alt="Chat et chien détendus dans un intérieur parisien bienveillant"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#261E17]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                  <Home className="w-3.5 h-3.5" />
                  <span>Cadre parisien préservé</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">
                  Aucun stress de déplacement
                </h3>
                <p className="text-xs sm:text-sm text-white/90 max-w-xl">
                  Votre animal continue de dormir sur son coussin préféré, observe le quartier depuis ses fenêtres familières et conserve ses habitudes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Two Focused Aspect Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Card 1: Attentive care for cats */}
            <div className="rounded-3xl p-6 sm:p-7 bg-[#F6EFE5] border border-[#DFCBB5] shadow-xs flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#DFCBB5] flex items-center justify-center text-[#8C5836]">
                    <Heart className="w-5 h-5 fill-[#8C5836]/20" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8C5836] bg-white/70 px-2.5 py-1 rounded-md">
                    Pour les chats
                  </span>
                </div>
                <h4 className="font-serif text-xl font-bold text-[#2C241E]">
                  Tranquillité féline
                </h4>
                <p className="text-sm text-[#5C4F44] leading-relaxed">
                  Territoriaux par nature, les chats sont sensibles aux changements d'espace. Les visites à domicile maintiennent leur sérénité, leur routine de repas et l'hygiène de leur litière.
                </p>
              </div>

              <div className="pt-4 border-t border-[#DFCBB5]/70 flex items-center gap-2 text-xs font-medium text-[#7A6B5D]">
                <ShieldCheck className="w-4 h-4 text-[#8C5836]" />
                <span>Intervention douce et respectueuse de leur rythme</span>
              </div>
            </div>

            {/* Card 2: Attentive care for dogs */}
            <div className="rounded-3xl p-6 sm:p-7 bg-[#FFFFFF] border border-[#E4D7C5] shadow-xs flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#F6EFE5] border border-[#DFCBB5] flex items-center justify-center text-[#8C5836]">
                    <Sparkles className="w-5 h-5 text-[#8C5836]" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8C5836] bg-[#FAF7F2] px-2.5 py-1 rounded-md border border-[#E5DAC8]">
                    Pour les chiens
                  </span>
                </div>
                <h4 className="font-serif text-xl font-bold text-[#2C241E]">
                  Attention et présence canines
                </h4>
                <p className="text-sm text-[#5C4F44] leading-relaxed">
                  Une présence réconfortante à la maison : repas servis aux heures habituelles, eau fraîche changée, caresses et stimulation bienveillante pour rompre la solitude.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8DFC8] flex items-center gap-2 text-xs font-medium text-[#7A6B5D]">
                <ShieldCheck className="w-4 h-4 text-[#8C5836]" />
                <span>Complicité et respect des consignes du maître</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
