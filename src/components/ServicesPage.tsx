import React from 'react';
import { Home, Utensils, HeartHandshake, CheckCircle2, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { businessData } from '../data/business';
import { HomeVisitIllustration, FeedingIllustration, DailyCareIllustration } from './ServiceVisuals';

interface ServicesPageProps {
  onNavigateContact: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigateContact }) => {
  return (
    <div id="services-page-view" className="py-12 sm:py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE7DA] border border-[#DFCBB5] text-xs font-semibold text-[#8C5836] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Prestations de garde à domicile à Paris</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241D17] tracking-tight">
            Nos services de pet-sitting
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#5A4C40] leading-relaxed">
            Un accompagnement attentionné et bienveillant pour vos chats et chiens. Chaque prestation est réalisée à votre domicile parisien, dans le respect strict des habitudes de votre animal.
          </p>
        </div>

        {/* 3 Detailed Sections */}
        <div className="space-y-12 sm:space-y-16">
          
          {/* Section 1: Visites à domicile */}
          <section
            id="service-detail-visites"
            className="bg-white rounded-3xl border border-[#E8DFC8] p-6 sm:p-8 lg:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6EFE5] text-[#8C5836] text-xs font-semibold">
                <Home className="w-3.5 h-3.5" />
                <span>Service n°1 • Chats & Chiens</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241D17]">
                Visites à domicile
              </h2>
              <p className="text-sm sm:text-base text-[#55473C] leading-relaxed">
                Les visites à domicile constituent la solution idéale pour préserver la sérénité de votre compagnon. En évitant les déplacements anxiogènes et les pensions collectives, votre animal reste dans son territoire réconfortant.
              </p>
              <p className="text-sm text-[#55473C] leading-relaxed">
                À chaque passage, nous veillons sur l'ensemble de son environnement : contrôle de son bien-être général, présence calme et respectueuse de son rythme, et vérification que tout est en ordre dans son espace de vie.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#46392F]">
                  <CheckCircle2 className="w-4 h-4 text-[#8C5836] shrink-0 mt-0.5" />
                  <span>Présence attentionnée directement chez vous à Paris</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#46392F]">
                  <CheckCircle2 className="w-4 h-4 text-[#8C5836] shrink-0 mt-0.5" />
                  <span>Maintien des repères territoriaux et de la tranquillité de l'animal</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#46392F]">
                  <CheckCircle2 className="w-4 h-4 text-[#8C5836] shrink-0 mt-0.5" />
                  <span>Adapté aussi bien aux félins qu'aux canidés</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onNavigateContact}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8C5836] text-white text-xs sm:text-sm font-semibold hover:bg-[#744527] transition-colors cursor-pointer"
                >
                  <span>Organiser des visites à domicile</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <HomeVisitIllustration className="w-full h-56 sm:h-64 shadow-xs" />
            </div>
          </section>

          {/* Section 2: Repas et alimentation */}
          <section
            id="service-detail-repas"
            className="bg-white rounded-3xl border border-[#E8DFC8] p-6 sm:p-8 lg:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
          >
            <div className="lg:col-span-5 order-2 lg:order-1">
              <FeedingIllustration className="w-full h-56 sm:h-64 shadow-xs" />
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6EFE5] text-[#8C5836] text-xs font-semibold">
                <Utensils className="w-3.5 h-3.5" />
                <span>Service n°2 • Chats & Chiens</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241D17]">
                Repas et alimentation
              </h2>
              <p className="text-sm sm:text-base text-[#55473C] leading-relaxed">
                Une alimentation régulière et soignée est indispensable à l'équilibre de votre animal. Durant nos visites, nous distribuons précisément les repas selon les rations et habitudes que vous nous avez communiquées.
              </p>
              <p className="text-sm text-[#55473C] leading-relaxed">
                L'eau est systématiquement vidée, les gamelles rincées et une eau propre et fraîche est mise à disposition à chaque passage. Nous observons également l'appétit de votre compagnon pour nous assurer qu'il se nourrit normalement.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#46392F]">
                  <CheckCircle2 className="w-4 h-4 text-[#8C5836] shrink-0 mt-0.5" />
                  <span>Respect rigoureux de la nourriture et des portions habituelles</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#46392F]">
                  <CheckCircle2 className="w-4 h-4 text-[#8C5836] shrink-0 mt-0.5" />
                  <span>Renouvellement systématique d'eau fraîche</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#46392F]">
                  <CheckCircle2 className="w-4 h-4 text-[#8C5836] shrink-0 mt-0.5" />
                  <span>Nettoyage et entretien des écuelles</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onNavigateContact}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8C5836] text-white text-xs sm:text-sm font-semibold hover:bg-[#744527] transition-colors cursor-pointer"
                >
                  <span>Nous confier les repas de votre animal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          {/* Section 3: Soins quotidiens */}
          <section
            id="service-detail-soins"
            className="bg-white rounded-3xl border border-[#E8DFC8] p-6 sm:p-8 lg:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6EFE5] text-[#8C5836] text-xs font-semibold">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Service n°3 • Chats & Chiens</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241D17]">
                Soins quotidiens
              </h2>
              <p className="text-sm sm:text-base text-[#55473C] leading-relaxed">
                Les animaux ont besoin d'attention, d'interactions calmes et de réconfort en l'absence de leurs maîtres. Nos soins quotidiens englobent l'ensemble des gestes essentiels pour son confort : caresses, brossage doux selon ses habitudes, et stimulation par le jeu.
              </p>
              <p className="text-sm text-[#55473C] leading-relaxed">
                Pour les chats, le nettoyage régulier du bac à litière garantit une hygiène parfaite du foyer. Nous veillons également à l'aspect général de votre compagnon pour que vous retrouviez un animal apaisé et bien dans son pelage.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#46392F]">
                  <CheckCircle2 className="w-4 h-4 text-[#8C5836] shrink-0 mt-0.5" />
                  <span>Moments de tendresse, de jeu et de présence rassurante</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#46392F]">
                  <CheckCircle2 className="w-4 h-4 text-[#8C5836] shrink-0 mt-0.5" />
                  <span>Entretien quotidien de la litière et des espaces de repos</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#46392F]">
                  <CheckCircle2 className="w-4 h-4 text-[#8C5836] shrink-0 mt-0.5" />
                  <span>Observation vigilante de son comportement et de sa vitalité</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onNavigateContact}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8C5836] text-white text-xs sm:text-sm font-semibold hover:bg-[#744527] transition-colors cursor-pointer"
                >
                  <span>Planifier les soins quotidiens</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <DailyCareIllustration className="w-full h-56 sm:h-64 shadow-xs" />
            </div>
          </section>

        </div>

        {/* Bottom Contact Callout */}
        <div className="mt-14 p-8 rounded-3xl bg-[#F6EFE5] border border-[#DFCBB5] text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#241D17]">
            Vous souhaitez échanger sur la garde de votre compagnon ?
          </h3>
          <p className="text-sm text-[#5C4F44] max-w-xl mx-auto">
            Nous répondons volontiers à vos questions concernant les visites, le nourrissage et l'organisation pratique à Paris.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onNavigateContact}
              className="px-6 py-3 rounded-xl bg-[#8C5836] text-white text-sm font-semibold hover:bg-[#744527] transition-colors"
            >
              Accéder au formulaire de contact
            </button>
            <a
              href={`tel:${businessData.phone.raw}`}
              className="px-6 py-3 rounded-xl bg-white text-[#2C241E] border border-[#DFCBB5] text-sm font-semibold flex items-center gap-2 hover:bg-[#FAF7F2] transition-colors"
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
