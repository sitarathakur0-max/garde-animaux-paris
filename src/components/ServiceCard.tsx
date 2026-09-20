import React from 'react';
import { Home, Utensils, HeartHandshake, Check, ArrowRight } from 'lucide-react';
import { BusinessService } from '../data/business';

interface ServiceCardProps {
  service: BusinessService;
  onSelect?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  const getIcon = () => {
    switch (service.iconName) {
      case 'Home':
        return <Home className="w-6 h-6 text-[#8C5836]" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-[#8C5836]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#8C5836]" />;
      default:
        return <Home className="w-6 h-6 text-[#8C5836]" />;
    }
  };

  return (
    <div
      id={`service-card-${service.id}`}
      className="bg-[#FFFFFF] rounded-2xl border border-[#E8DFC8] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
    >
      <div>
        {/* Header with Icon and Targets */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#F6EFE5] border border-[#E4D5C2] flex items-center justify-center">
            {getIcon()}
          </div>
          <div className="flex items-center gap-1.5">
            {service.targets.map((target) => (
              <span
                key={target}
                className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[#6E5D50] border border-[#E5DAC8]"
              >
                {target}
              </span>
            ))}
          </div>
        </div>

        {/* Title & Short Description */}
        <h3 className="font-serif text-xl font-bold text-[#241D17] mb-2.5">
          {service.title}
        </h3>
        <p className="text-sm text-[#5A4C40] leading-relaxed mb-5">
          {service.shortDesc}
        </p>

        {/* Features Checklist */}
        <div className="space-y-2.5 pt-4 border-t border-[#F0E8DC]">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#46392F]">
              <div className="w-4 h-4 rounded-full bg-[#EFE7DA] text-[#8C5836] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Action */}
      {onSelect && (
        <div className="pt-6 mt-6 border-t border-[#F0E8DC]">
          <button
            onClick={onSelect}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-[#8C5836] bg-[#FAF7F2] hover:bg-[#EFE7DA] border border-[#DFCBB5] transition-colors cursor-pointer"
          >
            <span>Se renseigner sur ce service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};
