import React, { useEffect, useState } from 'react';
import { FLAVORS } from '../data';
import { ChevronLeft, ChevronRight, Sparkles, Volume2, VolumeX, ArrowRight } from 'lucide-react';

interface HeroSliderProps {
  activeIndex: number;
  onChangeIndex: (index: number) => void;
  onOpenOrder: (flavorId?: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  activeIndex,
  onChangeIndex,
  onOpenOrder
}) => {
  const currentFlavor = FLAVORS[activeIndex];
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto rotation timer
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      onChangeIndex((activeIndex + 1) % FLAVORS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex, isAutoPlay, onChangeIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAutoPlay(false);
    onChangeIndex((activeIndex - 1 + FLAVORS.length) % FLAVORS.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAutoPlay(false);
    onChangeIndex((activeIndex + 1) % FLAVORS.length);
  };

  return (
    <div
      id="hero-slider"
      className="spyit-hero-wrapper relative select-none cursor-default"
      style={{ backgroundColor: currentFlavor.bgColor }}
    >
      <div className="spyit-hero-inner">
        {/* Render 4 Slide Layers */}
        {FLAVORS.map((flavor, index) => {
          const isActive = index === activeIndex;
          const isPassed = index < activeIndex;
          const isUpcoming = index > activeIndex;

          // Z-index layer mapping
          const zClass =
            index === 0
              ? 'spyit-z-10'
              : index === 1
              ? 'spyit-z-20'
              : index === 2
              ? 'spyit-z-30'
              : 'spyit-z-40';

          return (
            <div
              key={flavor.id}
              className={`spyit-slide-layer ${zClass} spyit-slide-slidein ${
                isPassed || isActive ? 'translate-x-0' : 'translate-x-full'
              }`}
              style={{
                backgroundColor: flavor.bgColor,
                pointerEvents: isActive ? 'auto' : 'none'
              }}
            >
              <div className="spyit-slide-container">
                <section className="spyit-slide-graphics">
                  {/* Huge Background Heading */}
                  <div
                    className={`spyit-bg-heading ${isActive ? 'active' : 'inactive'}`}
                    style={{
                      color: flavor.titleColor,
                      fontFamily: '"Cabinet Grotesk", sans-serif',
                      fontSize: 'clamp(110px, 26vw, 440px)',
                      fontStyle: 'normal',
                      fontWeight: 950,
                      lineHeight: 0.8,
                      letterSpacing: '-0.04em'
                    }}
                  >
                    {flavor.name}
                  </div>

                  {/* Slices 1 to 5 */}
                  {flavor.slices.map((slice, sIdx) => {
                    const delay = isActive ? `${850 + sIdx * 50}ms` : '0ms';
                    return (
                      <div
                        key={sIdx}
                        className={`spyit-slice ${slice.className} ${isActive ? 'active' : 'inactive'}`}
                        style={{
                          transitionDelay: delay,
                          ...(slice.divStyle || {})
                        }}
                      >
                        <img
                          referrerPolicy="no-referrer"
                          alt={slice.alt}
                          className="spyit-slice-img"
                          src={slice.src}
                          style={slice.imgStyle || slice.style}
                        />
                      </div>
                    );
                  })}

                  {/* Can Graphic in Center */}
                  <div
                    className={`spyit-can-wrapper ${isActive ? 'active' : 'inactive'}`}
                    style={{
                      transitionDelay: isActive ? '400ms' : '0ms'
                    }}
                  >
                    <div
                      className="spyit-can-inner group cursor-pointer"
                      style={{ width: '270.438px', height: '473.359px' }}
                      onClick={() => onOpenOrder(flavor.id)}
                      title={`Click to order ${flavor.name}`}
                    >
                      <img
                        referrerPolicy="no-referrer"
                        alt={`SPYIT ${flavor.name} Premium Can`}
                        className="spyit-can-img drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2"
                        src={flavor.canHeroImage || flavor.canImage}
                        style={{ width: '257px', height: '500px' }}
                      />
                    </div>
                  </div>
                </section>

                <footer className="spyit-slide-footer-spacer" />
              </div>
            </div>
          );
        })}

        {/* Navigation arrows & interactive controls */}
        <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 z-40 flex justify-between items-center pointer-events-none px-2 sm:px-6">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white/15 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/25 flex items-center justify-center pointer-events-auto transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
            aria-label="Previous flavor"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white/15 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/25 flex items-center justify-center pointer-events-auto transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
            aria-label="Next flavor"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>

        {/* Sticky Footer Info */}
        <footer className="spyit-sticky-footer flex-col sm:flex-row items-center sm:items-end gap-4">
          <div className="spyit-footer-desc text-center sm:text-left" style={{ maxWidth: '320px' }}>
            <p className="font-cabinet font-medium text-white/90">
              {currentFlavor.description}
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-4 mt-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full">
                550mL • Only 5g Sugar
              </span>
              <button
                onClick={() => onOpenOrder(currentFlavor.id)}
                className="text-xs font-bold text-white underline hover:text-amber-200 transition-colors flex items-center gap-1 cursor-pointer"
              >
                Order {currentFlavor.name} <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
