import React from 'react';
import { Shield, Home, Utensils, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { businessData } from '../data/business';

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us-section" className="py-16 sm:py-20 bg-[#F6F1EA] border-y border-[#E8DFC8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8C5836] block mb-2">
            Engagements concrets
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#241D17] tracking-tight">
            Pourquoi choisir Garde Animaux Paris
          </h2>
          <p className="mt-3 text-base text-[#5A4C40] leading-relaxed">
            Une prise en charge indépendante, respectueuse et attentive, centrée sur le confort de votre animal à domicile.
          </p>
        </div>

        {/* 5 Strictly Documented Qualities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* 1. Independent Pet-sitting */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DFC8] shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#F6EFE5] border border-[#E4D5C2] flex items-center justify-center text-[#8C5836] mb-5">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#241D17] mb-2">
              Service indépendant
            </h3>
            <p className="text-sm text-[#5C4D41] leading-relaxed">
              Un interlocuteur dédié et attentif. Pas de rotation impersonnelle : une relation de proximité fondée sur la confiance et l'écoute de vos consignes.
            </p>
          </div>

          {/* 2. Home visits */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DFC8] shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#F6EFE5] border border-[#E4D5C2] flex items-center justify-center text-[#8C5836] mb-5">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#241D17] mb-2">
              Visites à votre domicile
            </h3>
            <p className="text-sm text-[#5C4D41] leading-relaxed">
              Vos animaux restent dans leur environnement familier à Paris. Ils conservent leurs odeurs, leurs couchettes et leurs habitudes, sans le stress d'un déplacement.
            </p>
          </div>

          {/* 3. Feeding & Fresh Water */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DFC8] shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#F6EFE5] border border-[#E4D5C2] flex items-center justify-center text-[#8C5836] mb-5">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#241D17] mb-2">
              Repas et alimentation soignés
            </h3>
            <p className="text-sm text-[#5C4D41] leading-relaxed">
              Distribution scrupuleuse des rations habituelles, nettoyage des récipients et renouvellement systématique d'une eau fraîche et propre à chaque passage.
            </p>
          </div>

          {/* 4. Daily Care */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DFC8] shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#F6EFE5] border border-[#E4D5C2] flex items-center justify-center text-[#8C5836] mb-5">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#241D17] mb-2">
              Soins quotidiens attentifs
            </h3>
            <p className="text-sm text-[#5C4D41] leading-relaxed">
              Une présence bienveillante : moments d'affection, surveillance de l'état général, entretien de la litière pour les chats et attention individuelle.
            </p>
          </div>

          {/* 5. Cats & Dogs */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DFC8] shadow-xs md:col-span-2 lg:col-span-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#F6EFE5] border border-[#E4D5C2] flex items-center justify-center text-[#8C5836] shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#241D17]">
                  Spécialisé pour les chats et les chiens
                </h3>
                <p className="text-xs text-[#7A6B5D]">
                  Interventions adaptées aux sensibilités de chaque espèce
                </p>
              </div>
            </div>
            <p className="text-sm text-[#5C4D41] leading-relaxed">
              Que ce soit pour un chat attaché à son territoire ou un chien ayant besoin d'attention et de repères réguliers, nos interventions sont conduites dans le plus grand respect du rythme de vie de votre compagnon à Paris.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
