import React from 'react';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { businessData } from '../data/business';

export const ReviewsTrustSection: React.FC = () => {
  return (
    <section id="trust-reviews-section" className="py-14 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#E8DFC8] p-8 sm:p-10 shadow-xs text-center space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6EFE5] text-[#8C5836] text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Avis vérifiés sur Google</span>
          </div>

          {/* Rating Display */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-1.5 text-[#D69632]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 sm:w-8 sm:h-8 fill-[#D69632]" />
              ))}
            </div>
            
            <div className="space-y-1">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-[#241D17]">
                {businessData.reviews.rating}
              </p>
              <p className="text-base text-[#5A4C40] font-medium">
                Note maximale basée sur {businessData.reviews.count} avis sur Google
              </p>
            </div>
          </div>

          {/* Factual Highlights without fake customer names */}
          <div className="pt-6 border-t border-[#F0E8DC] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF7F2]">
              <CheckCircle2 className="w-4 h-4 text-[#8C5836] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-[#2C241E]">Attention et écoute</p>
                <p className="text-[11px] text-[#6E5D50]">Respect fidèle des consignes données par les propriétaires.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF7F2]">
              <CheckCircle2 className="w-4 h-4 text-[#8C5836] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-[#2C241E]">Ponctualité & rigueur</p>
                <p className="text-[11px] text-[#6E5D50]">Visites soignées à domicile pour chats et chiens.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF7F2]">
              <CheckCircle2 className="w-4 h-4 text-[#8C5836] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-[#2C241E]">Sérénité au quotidien</p>
                <p className="text-[11px] text-[#6E5D50]">Repas, eau fraîche et compagnie en toute confiance.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
