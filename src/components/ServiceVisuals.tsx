import React from 'react';

export const HomeVisitIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-44' }) => (
  <div className={`relative overflow-hidden rounded-xl bg-[#F4EDE2] border border-[#E2D4C3] flex items-center justify-center p-4 ${className}`}>
    <svg viewBox="0 0 400 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Room Details */}
      <rect width="400" height="240" fill="#F7F1E8" />
      {/* Parisian Tall Window with soft sunlight */}
      <rect x="260" y="20" width="100" height="180" rx="4" fill="#EAE0D2" stroke="#D1C0AB" strokeWidth="3" />
      <line x1="310" y1="20" x2="310" y2="200" stroke="#D1C0AB" strokeWidth="2" />
      <line x1="260" y1="90" x2="360" y2="90" stroke="#D1C0AB" strokeWidth="2" />
      <line x1="260" y1="150" x2="360" y2="150" stroke="#D1C0AB" strokeWidth="2" />
      
      {/* Wooden Parquet Floor Lines */}
      <path d="M0 200 L400 200" stroke="#DFD1C0" strokeWidth="3" />
      <path d="M40 200 L70 240 M120 200 L150 240 M200 200 L230 240 M280 200 L310 240 M360 200 L390 240" stroke="#E3D7C8" strokeWidth="2" />
      
      {/* Cozy Armchair */}
      <path d="M60 130 C60 110, 80 100, 110 100 C140 100, 160 110, 160 130 L160 190 C160 195, 155 200, 150 200 L70 200 C65 200, 60 195, 60 190 Z" fill="#D8C5B0" stroke="#BFA890" strokeWidth="2" />
      {/* Cushion */}
      <ellipse cx="110" cy="165" rx="42" ry="18" fill="#EAD9C6" />
      
      {/* Serene Sleeping Cat */}
      <ellipse cx="110" cy="158" rx="26" ry="14" fill="#8C5836" />
      {/* Cat head */}
      <circle cx="90" cy="154" r="11" fill="#8C5836" />
      {/* Ears */}
      <polygon points="82,148 87,138 92,148" fill="#724426" />
      <polygon points="90,148 95,138 100,148" fill="#724426" />
      {/* Sleeping eye */}
      <path d="M85 156 Q88 159 91 156" stroke="#FAF7F2" strokeWidth="1.5" strokeLinecap="round" />
      {/* Curled Tail */}
      <path d="M136 158 Q144 162 140 170 Q134 175 125 170" stroke="#8C5836" strokeWidth="4" strokeLinecap="round" />
      
      {/* Sunbeam Glow */}
      <polygon points="260,20 360,20 310,200 180,200" fill="#FFF" fillOpacity="0.15" />

      {/* House & Heart Emblem */}
      <circle cx="50" cy="45" r="22" fill="#FFFFFF" stroke="#DFCBB5" strokeWidth="2" />
      <path d="M50 35 L40 43 L42 53 L58 53 L60 43 Z" fill="#8C5836" />
      <path d="M47 48 C47 46, 50 44, 50 46 C50 44, 53 46, 53 48 C53 50, 50 52, 50 52 C50 52, 47 50, 47 48 Z" fill="#FFF" />
    </svg>
  </div>
);

export const FeedingIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-44' }) => (
  <div className={`relative overflow-hidden rounded-xl bg-[#F4EDE2] border border-[#E2D4C3] flex items-center justify-center p-4 ${className}`}>
    <svg viewBox="0 0 400 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#F8F3EA" />
      {/* Clean Wooden Dining Tray */}
      <path d="M50 160 C50 152, 60 148, 80 148 L320 148 C340 148, 350 152, 350 160 L335 195 C335 200, 325 204, 310 204 L90 204 C75 204, 65 200, 65 195 Z" fill="#DECAB3" stroke="#C9B298" strokeWidth="2" />
      
      {/* Bowl 1: Fresh Water */}
      <ellipse cx="140" cy="168" rx="48" ry="24" fill="#FAF7F2" stroke="#BFA890" strokeWidth="2.5" />
      <ellipse cx="140" cy="168" rx="40" ry="18" fill="#C5DCE6" />
      {/* Water Ripple */}
      <path d="M125 168 C135 165, 145 171, 155 168" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

      {/* Bowl 2: Balanced Food */}
      <ellipse cx="260" cy="168" rx="48" ry="24" fill="#FAF7F2" stroke="#BFA890" strokeWidth="2.5" />
      <ellipse cx="260" cy="168" rx="40" ry="18" fill="#8C5836" />
      {/* Kibble / Nourishment texture dots */}
      <circle cx="245" cy="165" r="3.5" fill="#6A3F22" />
      <circle cx="258" cy="162" r="3.5" fill="#59341B" />
      <circle cx="270" cy="166" r="3.5" fill="#6A3F22" />
      <circle cx="252" cy="172" r="3" fill="#59341B" />
      <circle cx="266" cy="173" r="3.5" fill="#4B2C16" />

      {/* Utensil / Hygiene Badge */}
      <circle cx="50" cy="45" r="22" fill="#FFFFFF" stroke="#DFCBB5" strokeWidth="2" />
      <path d="M44 38 L44 52 M41 38 L47 38 M54 38 L54 52 M51 45 C51 38, 57 38, 57 45 L54 45" stroke="#8C5836" strokeWidth="2" strokeLinecap="round" />

      {/* Sparkles of Cleanliness */}
      <path d="M195 90 L200 80 L205 90 L215 95 L205 100 L200 110 L195 100 L185 95 Z" fill="#D9A37A" />
      <path d="M285 65 L288 58 L291 65 L298 68 L291 71 L288 78 L285 71 L278 68 Z" fill="#E5B54F" />
    </svg>
  </div>
);

export const DailyCareIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-44' }) => (
  <div className={`relative overflow-hidden rounded-xl bg-[#F4EDE2] border border-[#E2D4C3] flex items-center justify-center p-4 ${className}`}>
    <svg viewBox="0 0 400 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#F8F4ED" />
      
      {/* Gentle Domestic Room Setting */}
      <circle cx="200" cy="140" r="85" fill="#EFE5D6" />
      
      {/* Dog silhouette enjoying gentle brushing / affection */}
      <path d="M160 175 C160 150, 180 130, 205 125 C220 122, 235 110, 245 95 C250 88, 258 92, 255 102 C252 112, 248 122, 252 135 C255 145, 250 175, 230 180 Z" fill="#8C5836" />
      {/* Ears relaxed */}
      <path d="M245 100 C238 108, 235 120, 238 128" stroke="#683F23" strokeWidth="3" strokeLinecap="round" />
      {/* Soft collar */}
      <path d="M228 135 Q238 142 248 136" stroke="#D9A37A" strokeWidth="3.5" strokeLinecap="round" />

      {/* Gentle Care Brush & Heart */}
      <circle cx="50" cy="45" r="22" fill="#FFFFFF" stroke="#DFCBB5" strokeWidth="2" />
      <path d="M42 45 C42 41, 46 37, 50 41 C54 37, 58 41, 58 45 C58 50, 50 55, 50 55 C50 55, 42 50, 42 45 Z" fill="#8C5836" />
      
      {/* Floating Gentle Attention Notes / Pet toy ball */}
      <circle cx="280" cy="175" r="16" fill="#D98248" />
      <path d="M272 165 Q280 175 288 185" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M288 165 Q280 175 272 185" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

      {/* Tender hearts */}
      <path d="M140 85 C140 81, 144 78, 148 81 C152 78, 156 81, 156 85 C156 90, 148 94, 148 94 C148 94, 140 90, 140 85 Z" fill="#8C5836" fillOpacity="0.7" />
    </svg>
  </div>
);
