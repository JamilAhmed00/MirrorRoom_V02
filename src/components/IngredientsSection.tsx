import React, { useState } from 'react';
import { FLAVORS } from '../data';
import { Sparkles, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface IngredientsSectionProps {
  onOpenOrder: (flavorId: string) => void;
}

export const IngredientsSection: React.FC<IngredientsSectionProps> = ({ onOpenOrder }) => {
  const [activeFlavorIdx, setActiveFlavorIdx] = useState(0);
  const currentFlavor = FLAVORS[activeFlavorIdx];

  const prevIdx = (activeFlavorIdx - 1 + FLAVORS.length) % FLAVORS.length;
  const nextIdx = (activeFlavorIdx + 1) % FLAVORS.length;
  const prevFlavor = FLAVORS[prevIdx];
  const nextFlavor = FLAVORS[nextIdx];

  const handlePrev = () => setActiveFlavorIdx(prevIdx);
  const handleNext = () => setActiveFlavorIdx(nextIdx);

  return (
    <section
      id="ingredients-section"
      className="w-full bg-white py-[90px] md:py-[130px] px-4 md:px-12 font-sans select-none overflow-hidden relative"
    >
      <div className="max-w-[1380px] mx-auto w-full flex flex-col items-center">
        {/* Header & Quick Filter */}
        <div className="text-center mb-10 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF5C00] bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200">
            Peak Nutrition &amp; Sourcing
          </span>
          <h2 className="font-cabinet text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Engineered For Pure Vitality
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 flex-wrap">
            {FLAVORS.map((flavor, fIdx) => (
              <button
                key={flavor.id}
                onClick={() => setActiveFlavorIdx(fIdx)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  activeFlavorIdx === fIdx
                    ? 'bg-[#FF5C00] text-white shadow-md scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: flavor.bgColor }} />
                <span>{flavor.subName}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Layout: Left Features, Center Can with Lucrative Navigation Arrows, Right Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center w-full relative z-10 mb-16">
          {/* Left Column (2 Callouts) */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-12 md:gap-20 order-2 lg:order-1 items-center lg:items-end text-center lg:text-right">
            {/* Callout 1: Light & Refreshing */}
            <div className="flex flex-col items-center lg:items-end max-w-[320px] group relative">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-[0_12px_30px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.03)] p-1.5 mb-6 transition-transform duration-300 md:group-hover:scale-105">
                <div className="w-full h-full rounded-full border-[3px] border-[#FF5C00] flex items-center justify-center bg-white">
                  <svg className="w-18 h-18 select-none pointer-events-none" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(0, 4)">
                      <circle cx="32" cy="38" r="10" stroke="#FF5C00" strokeWidth="2.8" />
                      <path d="M22.5 40 A 10 10 0 0 0 41.5 40 Z" fill="#FF5C00" />
                    </g>
                    <circle cx="43" cy="21" r="5" stroke="#FF5C00" strokeWidth="2.5" />
                    <circle cx="24" cy="27" r="4" stroke="#FF5C00" strokeWidth="2.5" />
                    <circle cx="17" cy="39" r="2.5" stroke="#FF5C00" strokeWidth="2" />
                    <circle cx="34" cy="21" r="2.5" stroke="#FF5C00" strokeWidth="2" />
                  </svg>
                </div>
                {/* SVG Connecting curve to center */}
                <svg className="hidden lg:block absolute left-[102%] top-1/2 -translate-y-1/2 overflow-visible pointer-events-none" width="300" height="100" viewBox="0 0 300 100" fill="none">
                  <path d="M 290 80 C 180 80, 110 50, 14 50" stroke="#FF5C00" strokeWidth="3" strokeDasharray="6 6" fill="none" opacity="0.95" />
                  <path d="M 6 50 L 18 44 L 14 50 L 18 56 Z" fill="#FF5C00" />
                </svg>
              </div>
              <h3 className="font-cabinet text-xl sm:text-2xl font-black text-[#FF5C00] tracking-wide mb-2">
                LIGHT &amp; REFRESHING
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-semibold">
                Lightly carbonated for a crisp and refreshing feel.
              </p>
            </div>

            {/* Callout 2: Real Fruit Flavour */}
            <div className="flex flex-col items-center lg:items-end max-w-[320px] group relative">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-[0_12px_30px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.03)] p-1.5 mb-6 transition-transform duration-300 md:group-hover:scale-105">
                <div className="w-full h-full rounded-full border-[3px] border-[#FF5C00] flex items-center justify-center bg-white">
                  <svg className="w-18 h-18 select-none pointer-events-none" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 25 C30 25, 23 21, 20 25 C17 29, 24 29, 30 25 Z" fill="#2DA93B" />
                    <path d="M32 24 C32 24, 38 15, 48 20 C42 27, 34 26, 32 24 Z" fill="#2DA93B" />
                    <circle cx="32" cy="38" r="14" fill="#FF5C00" />
                    <path d="M22.5 32 C25 29.5, 30 29.5, 32.5 32" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="22" cy="41" r="2" fill="white" />
                  </svg>
                </div>
                {/* SVG Connecting curve to center */}
                <svg className="hidden lg:block absolute left-[102%] top-1/2 -translate-y-1/2 overflow-visible pointer-events-none" width="300" height="100" viewBox="0 0 300 100" fill="none">
                  <path d="M 290 20 C 180 20, 110 50, 14 50" stroke="#FF5C00" strokeWidth="3" strokeDasharray="6 6" fill="none" opacity="0.95" />
                  <path d="M 6 50 L 18 44 L 14 50 L 18 56 Z" fill="#FF5C00" />
                </svg>
              </div>
              <h3 className="font-cabinet text-xl sm:text-2xl font-black text-[#FF5C00] tracking-wide mb-2">
                REAL FRUIT FLAVOUR
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-semibold">
                Made with real fruit extracts for an authentic taste.
              </p>
            </div>
          </div>

          {/* Center Column: Central Ingredients Can with Lucrative Arrows */}
          <div className="col-span-1 lg:col-span-4 flex justify-center items-center order-1 lg:order-2 my-8 lg:my-0 relative">
            {/* Lucrative Left Arrow Button */}
            <button
              id="ingredients-can-prev-btn"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label={`Switch to previous flavor: ${prevFlavor.name}`}
              className="absolute left-0 sm:-left-3 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center text-slate-800 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-115 active:scale-95 group cursor-pointer"
              style={{
                // Custom hover glow
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = prevFlavor.cardBgColor;
                e.currentTarget.style.boxShadow = `0 12px 30px ${prevFlavor.cardBgColor}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" />
              {/* Floating label preview tooltip */}
              <span className="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-slate-900 text-white text-[10px] font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
                {prevFlavor.name}
              </span>
            </button>

            {/* Central Can Container */}
            <div
              className="relative w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[440px] flex justify-center items-center cursor-pointer group px-4"
              onClick={() => onOpenOrder(currentFlavor.id)}
              title="Click to order"
            >
              <img
                key={currentFlavor.id}
                alt={`SPYIT ${currentFlavor.name} Ingredients Can`}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain z-10 pointer-events-none drop-shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 animate-fadeIn"
                src={
                  activeFlavorIdx === 0
                    ? '/images/ingre_orange.png'
                    : currentFlavor.canImage
                }
              />
            </div>

            {/* Lucrative Right Arrow Button */}
            <button
              id="ingredients-can-next-btn"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label={`Switch to next flavor: ${nextFlavor.name}`}
              className="absolute right-0 sm:-right-3 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center text-slate-800 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-115 active:scale-95 group cursor-pointer"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = nextFlavor.cardBgColor;
                e.currentTarget.style.boxShadow = `0 12px 30px ${nextFlavor.cardBgColor}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5" />
              {/* Floating label preview tooltip */}
              <span className="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-slate-900 text-white text-[10px] font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
                {nextFlavor.name}
              </span>
            </button>
          </div>

          {/* Right Column (2 Callouts) */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-12 md:gap-20 order-3 items-center lg:items-start text-center lg:text-left">
            {/* Callout 3: Premium Ingredients */}
            <div className="flex flex-col items-center lg:items-start max-w-[320px] group relative">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-[0_12px_30px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.03)] p-1.5 mb-6 transition-transform duration-300 md:group-hover:scale-105">
                <div className="w-full h-full rounded-full border-[3px] border-[#FF5C00] flex items-center justify-center bg-white">
                  <svg className="w-18 h-18 select-none pointer-events-none" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 46 C22 46, 46 42, 46 18 C26 18, 18 34, 18 46 Z" fill="#2DA93B" />
                    <path d="M18 46 C26 38, 38 26, 46 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                {/* SVG Connecting curve to center */}
                <svg className="hidden lg:block absolute right-[102%] top-1/2 -translate-y-1/2 overflow-visible pointer-events-none" width="300" height="100" viewBox="0 0 300 100" fill="none">
                  <path d="M 10 80 C 120 80, 190 50, 286 50" stroke="#FF5C00" strokeWidth="3" strokeDasharray="6 6" fill="none" opacity="0.95" />
                  <path d="M 294 50 L 282 44 L 286 50 L 282 56 Z" fill="#FF5C00" />
                </svg>
              </div>
              <h3 className="font-cabinet text-xl sm:text-2xl font-black text-[#FF5C00] tracking-wide mb-2">
                PREMIUM INGREDIENTS
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-semibold">
                Carefully selected ingredients for the best quality.
              </p>
            </div>

            {/* Callout 4: Only 5g Sugar */}
            <div className="flex flex-col items-center lg:items-start max-w-[320px] group relative">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-[0_12px_30px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.03)] p-1.5 mb-6 transition-transform duration-300 md:group-hover:scale-105">
                <div className="w-full h-full rounded-full border-[3px] border-[#FF5C00] flex flex-col items-center justify-center bg-white">
                  <div className="flex flex-col items-center justify-center -mt-1">
                    <svg className="w-16 h-12 select-none pointer-events-none" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g transform="translate(14, 0)" stroke="#2DA93B" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" fill="none">
                        <path d="M18 4 L25 8 L18 12 L11 8 Z" />
                        <path d="M11 8 V14.5 L18 18.5 V12" />
                        <path d="M25 8 V14.5 L18 18.5" />
                        <path d="M9 13.5 L16 17.5 L9 21.5 L2 17.5 Z" />
                        <path d="M2 17.5 V24 L9 28 V21.5" />
                        <path d="M16 17.5 V24 L9 28" />
                        <path d="M27 13.5 L34 17.5 L27 21.5 L20 17.5 Z" />
                        <path d="M20 17.5 V24 L27 28 V21.5" />
                        <path d="M34 17.5 V24 L27 28" />
                      </g>
                    </svg>
                    <span className="text-[#2DA93B] font-cabinet font-extrabold text-[18px] mt-1 leading-none">
                      5g
                    </span>
                  </div>
                </div>
                {/* SVG Connecting curve to center */}
                <svg className="hidden lg:block absolute right-[102%] top-1/2 -translate-y-1/2 overflow-visible pointer-events-none" width="300" height="100" viewBox="0 0 300 100" fill="none">
                  <path d="M 10 20 C 120 20, 190 50, 286 50" stroke="#FF5C00" strokeWidth="3" strokeDasharray="6 6" fill="none" opacity="0.95" />
                  <path d="M 294 50 L 282 44 L 286 50 L 282 56 Z" fill="#FF5C00" />
                </svg>
              </div>
              <h3 className="font-cabinet text-xl sm:text-2xl font-black text-[#FF5C00] tracking-wide mb-2">
                ONLY 5g SUGAR
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-semibold">
                Less sugar, more refreshment. A smarter choice for you.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Feature Specification Bar */}
        <div className="w-full max-w-[900px] border-[2px] border-[#FF5C00] rounded-[36px] bg-white py-6 px-8 md:py-8 md:px-14 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 shadow-sm z-10">
          <div className="flex items-center gap-5 w-full md:w-auto justify-center md:justify-start">
            <div className="w-16 h-16 flex items-center justify-center shrink-0">
              <svg className="w-12 h-14 select-none pointer-events-none" viewBox="0 0 40 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="2" width="16" height="3" rx="1.5" fill="#FF5C00" />
                <rect x="8" y="5" width="24" height="3" rx="1.5" fill="#FF5C00" />
                <rect x="6" y="8" width="28" height="42" rx="5" fill="#FF5C00" />
                <rect x="9" y="50" width="22" height="3" rx="1.5" fill="#FF5C00" />
                <path d="M22 18 L14 29 H21 L18 40 L26 29 H19 Z" fill="white" />
              </svg>
            </div>
            <div>
              <p className="font-cabinet font-black text-2xl text-[#18181B] leading-tight">550mL</p>
              <p className="text-gray-500 text-sm sm:text-base font-semibold">Perfect Size</p>
            </div>
          </div>

          <div className="hidden md:block w-[1.5px] h-12 bg-[#FF5C00]" />

          <div className="flex items-center gap-5 w-full md:w-auto justify-center md:justify-start">
            <div className="w-16 h-16 flex items-center justify-center shrink-0">
              <svg className="w-16 h-16 select-none pointer-events-none" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="23" stroke="#FF5C00" strokeWidth="2.5" />
                <g transform="translate(19, 17)" stroke="#FF5C00" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" fill="none">
                  <path d="M13 5 L19 8.5 L13 12 L7 8.5 Z" />
                  <path d="M7 8.5 V14.5 L13 18 V12" />
                  <path d="M19 8.5 V14.5 L13 18" />
                  <path d="M6 14 L12 17.5 L6 21 L0 17.5 Z" />
                  <path d="M0 17.5 V23.5 L6 27 V21" />
                  <path d="M12 17.5 V23.5 L6 27" />
                  <path d="M20 14 L26 17.5 L20 21 L14 17.5 Z" />
                  <path d="M14 17.5 V23.5 L20 27 V21" />
                  <path d="M26 17.5 V23.5 L20 27" />
                </g>
              </svg>
            </div>
            <div>
              <p className="font-cabinet font-black text-2xl text-[#18181B] leading-tight">Only 5g Sugar</p>
              <p className="text-gray-500 text-sm sm:text-base font-semibold">Per Can</p>
            </div>
          </div>

          <div className="hidden md:block w-[1.5px] h-12 bg-[#FF5C00]" />

          <div className="flex items-center gap-5 w-full md:w-auto justify-center md:justify-start">
            <div className="w-16 h-16 flex items-center justify-center shrink-0">
              <svg className="w-14 h-14 select-none pointer-events-none" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 48 C24 48, 48 40, 48 14 C30 14, 14 30, 14 48 Z" fill="#FF5C00" />
                <path d="M10 52 C12 50, 16 46, 18 44" stroke="#FF5C00" strokeWidth="3" strokeLinecap="round" />
                <path d="M14 48 C24 38, 38 24, 48 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="font-cabinet font-black text-2xl text-[#18181B] leading-tight">Healthy Soda</p>
              <p className="text-gray-500 text-sm sm:text-base font-semibold">Better Choice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
