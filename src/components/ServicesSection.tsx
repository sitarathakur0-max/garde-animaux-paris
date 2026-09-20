import React from 'react';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { businessData } from '../data/business';
import { HomeVisitIllustration, FeedingIllustration, DailyCareIllustration } from './ServiceVisuals';

interface ServicesSectionProps {
  onSelectService?: (serviceId: string) => void;
  onNavigateContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onNavigateContact,
}) => {
  const getIllustration = (id: string) => {
    switch (id) {
      case 'visites-a-domicile':
        return <HomeVisitIllustration />;
      case 'repas-et-alimentation':
        return <FeedingIllustration />;
      case 'soins-quotidiens':
        return <DailyCareIllustration />;
      default:
        return <HomeVisitIllustration />;
    }
  };

  return (
    <section id="services-section" className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE7DA] border border-[#DFCBB5] text-xs font-semibold text-[#8C5836] mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Prestations documentées & attentives</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-bold text-[#241D17] tracking-tight">
            Des services adaptés au bien-être de votre animal
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A4C40] leading-relaxed">
            Pour que votre compagnon vive votre absence en toute sérénité, Garde Animaux Paris assure des interventions ciblées directement à votre domicile parisien.
          </p>
        </div>

        {/* 3 Documented Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessData.services.map((service) => (
            <div
              key={service.id}
              id={`home-service-card-${service.id}`}
              className="bg-white rounded-2xl border border-[#E8DFC8] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Visual Banner */}
                <div className="p-4 pb-0">
                  {getIllustration(service.id)}
                </div>

                <div className="p-6 sm:p-7">
                  {/* Targets Badge */}
                  <div className="flex items-center gap-1.5 mb-3">
                    {service.targets.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#FAF7F2] text-[#8C5836] border border-[#E5DAC8]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#241D17] mb-3 group-hover:text-[#8C5836] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#55473C] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#F0E8DC]">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#46392F]">
                        <CheckCircle className="w-4 h-4 text-[#8C5836] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  id={`cta-service-${service.id}`}
                  onClick={() => {
                    if (onSelectService) onSelectService(service.id);
                    onNavigateContact();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-[#8C5836] bg-[#FAF7F2] hover:bg-[#EFE7DA] border border-[#DFCBB5] transition-all cursor-pointer"
                >
                  <span>Demander ce service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#F4EDE2] border border-[#DFCBB5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="font-serif text-lg font-bold text-[#2C241E]">
              Besoin d'un accompagnement personnalisé pour votre chat ou votre chien ?
            </h4>
            <p className="text-sm text-[#615245]">
              Nous organisons les visites et les repas selon les besoins spécifiques de votre foyer à Paris.
            </p>
          </div>

          <button
            id="banner-contact-btn"
            onClick={onNavigateContact}
            className="shrink-0 px-6 py-3 rounded-xl bg-[#8C5836] text-white font-medium hover:bg-[#744527] transition-colors shadow-xs cursor-pointer text-sm"
          >
            Nous contacter dès aujourd'hui
          </button>
        </div>
      </div>
    </section>
  );
};
