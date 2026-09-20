import React from 'react';
import { ArrowRight, MessageSquare, ClipboardCheck, Calendar, Smile } from 'lucide-react';
import { businessData } from '../data/business';

interface ProcessSectionProps {
  onNavigateContact: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onNavigateContact }) => {
  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <MessageSquare className="w-5 h-5 text-[#8C5836]" />;
      case 2:
        return <ClipboardCheck className="w-5 h-5 text-[#8C5836]" />;
      case 3:
        return <Calendar className="w-5 h-5 text-[#8C5836]" />;
      case 4:
        return <Smile className="w-5 h-5 text-[#8C5836]" />;
      default:
        return <MessageSquare className="w-5 h-5 text-[#8C5836]" />;
    }
  };

  return (
    <section id="process-section" className="py-16 sm:py-20 bg-[#F6F1EA] border-b border-[#E8DFC8]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8C5836] block mb-2">
            Fonctionnement simple
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#241D17] tracking-tight">
            Comment se déroule la garde de votre compagnon
          </h2>
          <p className="mt-3 text-base text-[#5A4C40] leading-relaxed">
            Une organisation claire, étape par étape, pour assurer une continuité parfaite de ses soins à domicile.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {businessData.process.map((p) => (
            <div
              key={p.step}
              id={`process-step-${p.step}`}
              className="bg-white rounded-2xl p-6 border border-[#E8DFC8] shadow-xs flex flex-col justify-between relative group hover:border-[#DFCBB5] transition-colors"
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-5">
                  <span className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#DFCBB5] font-serif text-base font-bold text-[#8C5836] flex items-center justify-center">
                    0{p.step}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#F6EFE5] flex items-center justify-center">
                    {getStepIcon(p.step)}
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#241D17] mb-2.5">
                  {p.title}
                </h3>
                <p className="text-sm text-[#5C4F44] leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-[#F0E8DC] text-xs font-medium text-[#7A6B5D] flex items-center gap-1.5">
                <span>Étape {p.step} sur 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Process Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            id="process-cta-btn"
            onClick={onNavigateContact}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8C5836] text-white font-medium hover:bg-[#744527] transition-all shadow-xs cursor-pointer text-sm"
          >
            <span>Présentez les besoins de votre animal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
