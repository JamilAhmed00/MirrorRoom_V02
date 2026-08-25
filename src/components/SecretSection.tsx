import React, { useState } from 'react';
import { FLAVORS } from '../data';
import { Zap, Sparkles, Check, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface SecretSectionProps {
  onOpenOrder: (flavorId: string) => void;
}

export const SecretSection: React.FC<SecretSectionProps> = ({ onOpenOrder }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = FLAVORS[selectedIdx];

  const prevIdx = (selectedIdx - 1 + FLAVORS.length) % FLAVORS.length;
  const nextIdx = (selectedIdx + 1) % FLAVORS.length;
  const prevFlavor = FLAVORS[prevIdx];
  const nextFlavor = FLAVORS[nextIdx];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIdx(prevIdx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIdx(nextIdx);
  };

  const titles = [
    { title: 'The Secret Behind \nEvery Sip', desc: 'SPYIT delivers a refreshing burst of fruity flavor with every sip, making it the perfect companion for active lifestyles.' },
    { title: 'Citrus Punch Of \nSun-Kissed Orange', desc: 'Unleash supercharged citrus waves filled with natural pulp and premium vitamin blends for an electrifying burst of flavor.' },
    { title: 'Exotic Kiwi \nTangy Symphony', desc: 'A super-refreshing wild tropical kiwi extract that balances tantalizing tang with natural botanical organic sweetness.' },
    { title: 'The Velvet Luxury \nOf Royal Grapes', desc: 'Indulge in the bold, velvet sweetness of handpicked dark grapes that keeps your tastebuds buzzing with crisp energy.' }
  ];

  return (
    <section
      id="features03-section"
      className="w-full relative select-none overflow-hidden text-white transition-colors duration-700 ease-out py-[100px] md:py-[140px] px-6 sm:px-12 md:px-20 lg:px-28"
      style={{ backgroundColor: current.bgColor }}
    >
      {/* Decorative Organic Vector Background Doodles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -left-12 top-10 text-white select-none opacity-20">
          <svg viewBox="0 0 100 100" className="w-48 h-48 fill-none stroke-current" strokeWidth="2.2">
            <path d="M50 90 C30 80 15 55 15 38 C15 22 30 15 50 26 C70 15 85 22 85 38 C85 55 70 80 50 90 Z" />
            <circle cx="38" cy="45" r="1.5" fill="currentColor" />
            <circle cx="50" cy="42" r="1.5" fill="currentColor" />
            <circle cx="62" cy="45" r="1.5" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute right-[12%] -top-6 text-white select-none opacity-15">
          <svg viewBox="0 0 100 100" className="w-56 h-56 fill-none stroke-current" strokeWidth="2.2">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="38" />
            <line x1="50" y1="12" x2="50" y2="88" />
            <line x1="12" y1="50" x2="88" y2="50" />
          </svg>
        </div>
        <div className="absolute -right-10 bottom-12 text-white select-none opacity-20">
          <svg viewBox="0 0 100 100" className="w-44 h-44 fill-none stroke-current" strokeWidth="2.2">
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="18" />
            <path d="M50 10 L50 32" />
            <path d="M50 68 L50 90" />
          </svg>
        </div>
      </div>

      <div className="max-w-[1380px] mx-auto w-full relative z-10">
        {/* 2-Column Content: Left Details, Right Active Can */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column with Dynamic Navigation Arrows */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center text-left relative py-8 sm:py-10 px-6 sm:px-8 md:px-10 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
            {/* Top Bar with Blend Tag and Lucrative Arrows */}
            <div className="flex items-center justify-between mb-4 gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-white">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
                <span>{current.name} Blend</span>
              </div>

              {/* Lucrative Arrows beside section header */}
              <div className="flex items-center gap-2">
                <button
                  id="secret-section-prev-btn"
                  type="button"
                  onClick={handlePrev}
                  aria-label={`Previous Flavor: ${prevFlavor.name}`}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 border border-white/30 shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer relative"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2.5] transition-transform duration-300 group-hover:-translate-x-0.5" />
                  <span className="hidden sm:flex items-center gap-1 absolute -bottom-7 right-0 px-2 py-0.5 bg-slate-950/90 text-white text-[10px] font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: prevFlavor.cardBgColor }} />
                    {prevFlavor.name}
                  </span>
                </button>

                <button
                  id="secret-section-next-btn"
                  type="button"
                  onClick={handleNext}
                  aria-label={`Next Flavor: ${nextFlavor.name}`}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 border border-white/30 shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer relative"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5" />
                  <span className="hidden sm:flex items-center gap-1 absolute -bottom-7 right-0 px-2 py-0.5 bg-slate-950/90 text-white text-[10px] font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: nextFlavor.cardBgColor }} />
                    {nextFlavor.name}
                  </span>
                </button>
              </div>
            </div>

            <div>
              <h3
                className="text-[38px] sm:text-[56px] lg:text-[68px] font-black text-white leading-[1.08] mb-6 tracking-tight font-cabinet whitespace-pre-line"
              >
                {titles[selectedIdx]?.title || 'The Secret Behind \nEvery Sip'}
              </h3>
              <p className="text-white/90 text-sm sm:text-base lg:text-[17px] font-normal leading-relaxed max-w-[540px] mb-10">
                {titles[selectedIdx]?.desc || current.description}
              </p>
            </div>

            {/* Secret Ingredient Feature Badges */}
            <div className="flex flex-wrap gap-x-3 gap-y-4 max-w-[650px] mb-8">
              {current.secretItems.map((item, iIdx) => (
                <div
                  key={iIdx}
                  className="flex items-center gap-2 border border-white rounded-full px-5 py-2 text-white bg-transparent hover:bg-white/15 transition-all duration-300 shadow-sm"
                >
                  <Zap className="w-4 h-4 text-white fill-white shrink-0 animate-pulse" />
                  <span className="font-medium text-sm tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            {/* Direct Order Action & Flavor Quick Indicator with Navigation */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenOrder(current.id)}
                className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-cabinet font-bold text-base hover:bg-amber-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl flex items-center gap-2 cursor-pointer"
              >
                <span>Order {current.name} Experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Flavor dots indicator */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/20 backdrop-blur-md border border-white/15">
                {FLAVORS.map((f, fIdx) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedIdx(fIdx)}
                    title={`Switch to ${f.name}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      selectedIdx === fIdx
                        ? 'w-6 h-2.5 bg-white'
                        : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3D Product Can Stage (Clean, No Overlay Arrows) */}
          <div className="col-span-1 lg:col-span-5 flex justify-center items-center relative">
            {/* Can Showcase */}
            <div
              className="relative w-full max-w-[440px] aspect-[4/5] flex justify-center items-center cursor-pointer group"
              onClick={() => onOpenOrder(current.id)}
            >
              {FLAVORS.map((flavor, index) => {
                const isActive = index === selectedIdx;
                return (
                  <img
                    key={flavor.id}
                    alt={`${flavor.name} Can`}
                    className="absolute w-full h-auto max-h-[540px] object-contain select-none pointer-events-none transition-all duration-700 drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    src={flavor.canImage}
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'scale(1.1)' : 'translateY(40px) scale(0.85)',
                      pointerEvents: isActive ? 'auto' : 'none'
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
