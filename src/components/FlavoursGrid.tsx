import React, { useState } from 'react';
import { FLAVORS } from '../data';
import { Citrus, Sparkles, Zap, Heart, ArrowUpRight, Check } from 'lucide-react';
import { FlavorData } from '../types';

interface FlavoursGridProps {
  onOpenOrder: (flavorId: string) => void;
}

export const FlavoursGrid: React.FC<FlavoursGridProps> = ({ onOpenOrder }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getTagIcon = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'real fruit taste':
        return <Citrus className="w-3 h-3" />;
      case 'refreshment':
        return <Sparkles className="w-3 h-3" />;
      case 'energy boost':
        return <Zap className="w-3 h-3" />;
      case 'natural flavor':
      default:
        return <Heart className="w-3 h-3" />;
    }
  };

  // Generate bubble positions for cards
  const bubblePositions = [
    { left: '6%', size: 6, delay: 0.2 },
    { left: '14%', size: 12, delay: 1.1 },
    { left: '20%', size: 8, delay: 2.3 },
    { left: '27%', size: 14, delay: 0.7 },
    { left: '33%', size: 10, delay: 1.8 },
    { left: '39%', size: 16, delay: 0.4 },
    { left: '45%', size: 7, delay: 2.7 },
    { left: '51%', size: 11, delay: 1.4 },
    { left: '57%', size: 15, delay: 0.9 },
    { left: '63%', size: 9, delay: 2.1 },
    { left: '69%', size: 13, delay: 0.5 },
    { left: '75%', size: 8, delay: 1.6 },
    { left: '81%', size: 14, delay: 2.5 },
    { left: '87%', size: 10, delay: 0.8 },
    { left: '93%', size: 12, delay: 1.9 }
  ];

  return (
    <section
      id="features-section"
      className="w-full bg-[#FFF7F1] py-[90px] md:py-[130px] px-4 md:px-12 font-sans min-h-screen flex flex-col justify-center items-center select-none overflow-x-hidden"
    >
      <div className="max-w-[1280px] mx-auto w-full flex flex-col items-center justify-center">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16 self-stretch w-full flex flex-col items-center justify-center">
          <h2
            id="section-main-heading"
            className="text-center font-cabinet text-[34px] xs:text-[44px] sm:text-[76px] lg:text-[113px] font-extrabold leading-[38px] xs:leading-[48px] sm:leading-[80px] lg:leading-[110px] text-[#262423] tracking-[-1px] sm:tracking-[-2px] max-w-none w-full mx-auto"
            style={{ fontStyle: 'normal', fontFamily: '"Cabinet Grotesk", sans-serif', fontWeight: 800 }}
          >
            Choose the flavour that <br className="hidden sm:inline" />
            matches your vibe.
          </h2>
        </div>

        {/* 2x2 Responsive Product Grid */}
        <div
          id="product-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-[24px] sm:gap-[30px] max-w-[1280px] w-full justify-center justify-items-center items-center"
        >
          {FLAVORS.map((flavor) => {
            const isHovered = hoveredCard === flavor.id;

            return (
              <div
                key={flavor.id}
                id={`product-card-${flavor.id}`}
                onMouseEnter={() => setHoveredCard(flavor.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onOpenOrder(flavor.id)}
                className="relative w-full max-w-[625px] h-[520px] sm:h-[783px] rounded-[30px] overflow-hidden pt-8 sm:pt-12 pb-0 flex flex-col items-center justify-between shadow-2xl transition-all duration-500 cursor-pointer group hover:scale-[1.01]"
                style={{
                  backgroundColor: flavor.cardBgColor,
                  borderRadius: '30px',
                  paddingLeft: '20px',
                  paddingRight: '20px'
                }}
              >
                {/* SVG Textured Background with Filter */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-0"
                  viewBox="0 0 625 783"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <filter id={`chalk-brush-filter-${flavor.id}`} x="-30%" y="-30%" width="160%" height="160%">
                      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="45" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                    <filter id={`canvas-grain-${flavor.id}`}>
                      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="grain" />
                      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.08 0" />
                      <feComposite operator="in" in2="SourceGraphic" />
                    </filter>
                  </defs>
                  <rect width="625" height="783" filter={`url(#canvas-grain-${flavor.id})`} opacity="0.5" />
                  <path
                    d="M -100 883 L 725 -100"
                    stroke="white"
                    strokeWidth="120"
                    strokeLinecap="round"
                    filter={`url(#chalk-brush-filter-${flavor.id})`}
                    opacity="0.15"
                    style={{ mixBlendMode: 'overlay' }}
                  />
                  <path
                    d="M -150 833 L 775 -50"
                    stroke="white"
                    strokeWidth="60"
                    strokeLinecap="round"
                    filter={`url(#chalk-brush-filter-${flavor.id})`}
                    opacity="0.10"
                    style={{ mixBlendMode: 'overlay' }}
                  />
                </svg>

                {/* Hover Fruit Background Reveal - Cleanly replaces the default can on hover */}
                <div
                  className="absolute inset-x-0 bottom-0 top-[100px] sm:top-[140px] z-30 pointer-events-none px-4 pb-4 flex items-center justify-center transition-all duration-500 ease-out"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? 'scale(1.04) translateY(0)' : 'scale(0.92) translateY(24px)',
                    visibility: isHovered ? 'visible' : 'hidden'
                  }}
                >
                  <img
                    referrerPolicy="no-referrer"
                    alt={`Fresh ${flavor.name} Fruit Splash`}
                    className="w-full h-full max-h-[520px] object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
                    src={flavor.canImage}
                  />
                </div>

                {/* Animated Rising Fizz Bubbles */}
                {bubblePositions.map((b, bIdx) => (
                  <div
                    key={bIdx}
                    className="absolute rounded-full pointer-events-none transition-opacity duration-300"
                    style={{
                      left: b.left,
                      width: `${b.size}px`,
                      height: `${b.size}px`,
                      background: `radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.9) 0%, ${flavor.accentColor} 60%, rgba(255, 255, 255, 0.25) 100%)`,
                      border: '0.5px solid rgba(255, 255, 255, 0.6)',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                      zIndex: 35,
                      opacity: isHovered ? 0.9 : 0.4,
                      animation: `riseBubble ${3 + (bIdx % 3)}s ease-in-out ${b.delay}s infinite`
                    }}
                  >
                    <div className="absolute top-[15%] left-[15%] w-[25%] h-[25%] rounded-full bg-white opacity-85" />
                  </div>
                ))}

                {/* Top Card Text & Tags */}
                <div className="w-full z-40 flex flex-col items-center text-center gap-3 sm:gap-5">
                  <div className="flex items-center gap-2">
                    <h3
                      className="text-white text-center font-cabinet text-[26px] xs:text-[32px] sm:text-[48px] lg:text-[58px] font-medium leading-[32px] xs:leading-[38px] sm:leading-[52px] lg:leading-[60px]"
                      style={{ fontStyle: 'normal', fontFamily: '"Cabinet Grotesk", sans-serif' }}
                    >
                      {flavor.subName}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Badge Pills */}
                  <div className="flex flex-nowrap justify-center items-center gap-[6px] sm:gap-2 w-full max-w-full overflow-x-auto scrollbar-none py-1">
                    {flavor.tags.map((tag, tIdx) => (
                      <div
                        key={tIdx}
                        className="shrink-0 flex items-center px-2.5 py-1 rounded-full border border-white text-white text-xs font-cabinet font-medium bg-white/12 backdrop-blur-xs transition-transform duration-200 hover:scale-105"
                      >
                        <div className="flex items-center justify-center shrink-0 bg-white/20 rounded-full w-4.5 h-4.5 mr-1.5">
                          {getTagIcon(tag)}
                        </div>
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Front Can Graphic - Fades out smoothly when hovered to prevent overlapping */}
                <div
                  className="relative w-full flex justify-center items-end h-[300px] sm:h-[550px] lg:h-[580px] z-20 overflow-hidden mt-auto pt-[20px] transition-all duration-500 ease-out"
                  style={{
                    paddingTop: '20px',
                    opacity: isHovered ? 0 : 1,
                    transform: isHovered ? 'translateY(30px) scale(0.95)' : 'translateY(0) scale(1)',
                    pointerEvents: isHovered ? 'none' : 'auto'
                  }}
                >
                  <img
                    referrerPolicy="no-referrer"
                    alt={flavor.subName}
                    className="max-w-full object-contain select-none pointer-events-none origin-bottom absolute bottom-0 drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)]"
                    src={flavor.frontImage || flavor.canImage}
                    style={{
                      aspectRatio: '17 / 32',
                      width: 'auto',
                      height: '100%',
                      maxHeight: '100%',
                      objectPosition: 'center bottom'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
