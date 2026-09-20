import React from 'react';
import { Phone, MapPin, Star, Heart, CheckCircle2 } from 'lucide-react';
import { businessData } from '../data/business';

interface FooterProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: 'home' | 'services' | 'about' | 'contact') => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#241E19] text-[#EDE4DA] pt-14 pb-10 border-t border-[#3A312A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#3E342B]">
          {/* Col 1: Brand & Purpose */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#3A3026] flex items-center justify-center text-[#D9A37A]">
                <Heart className="w-4 h-4 fill-[#D9A37A]/30" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#FAF7F2]">
                {businessData.name}
              </span>
            </div>
            
            <p className="text-sm text-[#C4B7AA] leading-relaxed">
              Service indépendant de garde d'animaux assurant visites à domicile, repas et soins quotidiens pour chats et chiens à Paris.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#332A22] border border-[#483B30] text-xs">
              <div className="flex items-center text-[#E5B54F]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#E5B54F]" />
                ))}
              </div>
              <span className="font-semibold text-white">{businessData.reviews.rating}</span>
              <span className="text-[#A89A8D]">({businessData.reviews.count} avis sur Google)</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#D9A37A]">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-[#C4B7AA]">
              <li>
                <button
                  id="footer-link-home"
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  id="footer-link-services"
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services de garde
                </button>
              </li>
              <li>
                <button
                  id="footer-link-about"
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  À propos de Garde Animaux Paris
                </button>
              </li>
              <li>
                <button
                  id="footer-link-contact"
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Nous contacter
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#D9A37A]">
              Services proposés
            </p>
            <ul className="space-y-2 text-sm text-[#C4B7AA]">
              {businessData.services.map((service) => (
                <li key={service.id} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A37A] shrink-0" />
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
              <li className="text-xs text-[#9E8F82] pt-1">
                Garde dédiée aux chats et aux chiens à Paris
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Coordinates */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#D9A37A]">
              Coordonnées
            </p>
            <div className="space-y-3 text-sm text-[#C4B7AA]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D9A37A] shrink-0 mt-0.5" />
                <span>
                  {businessData.address.full}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D9A37A] shrink-0" />
                <a
                  id="footer-phone-link"
                  href={`tel:${businessData.phone.raw}`}
                  className="font-medium text-white hover:text-[#D9A37A] transition-colors"
                >
                  {businessData.phone.display}
                </a>
              </div>
              <p className="text-xs text-[#9E8F82] leading-relaxed pt-1">
                N'hésitez pas à nous joindre pour convenir de visites à domicile et détailler les besoins de votre animal.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E8F82]">
          <p>© {currentYear} {businessData.name}. Tous droits réservés.</p>
          <p className="text-center sm:text-right">
            Service indépendant de garde d'animaux de compagnie • 75011 Paris, France
          </p>
        </div>
      </div>
    </footer>
  );
};
