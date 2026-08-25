import React from 'react';
import { MARQUEE_ITEMS } from '../data';

interface ChilloutSectionProps {
  onSelectFlavorByName: (name: string) => void;
  onOpenOrder: (flavorId?: string) => void;
}

export const ChilloutSection: React.FC<ChilloutSectionProps> = ({
  onSelectFlavorByName,
  onOpenOrder
}) => {
  // Repeat items for seamless infinite marquee
  const repeatedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section
      id="chillout-section"
      className="relative min-h-[110vh] w-full bg-[#2543DE] text-white overflow-hidden flex flex-col items-center justify-center py-[100px] md:py-[130px] px-4 md:px-10 z-0 select-none"
    >
      {/* Decorative Huge Background Text */}
      <div className="absolute top-1/2 left-0 right-0 w-full -translate-y-1/2 decorative-chill z-0 select-none pointer-events-none uppercase font-anton">
        CHILLOUT
      </div>

      {/* Floating Ice Cubes */}
      <img
        alt="Ice Cube"
        className="ice-cube"
        referrerPolicy="no-referrer"
        src="/images/ice_cube.png"
        style={
          {
            top: '9%',
            left: '6%',
            width: '96px',
            height: '96px',
            '--rot': '15deg',
            animation: 'iceFloat 4.2s ease-in-out 0s infinite'
          } as React.CSSProperties
        }
      />
      <img
        alt="Ice Cube"
        className="ice-cube"
        referrerPolicy="no-referrer"
        src="/images/ice_cube.png"
        style={
          {
            top: '13%',
            right: '8%',
            width: '112px',
            height: '112px',
            '--rot': '-20deg',
            animation: 'iceFloat 4.8s ease-in-out 0.5s infinite'
          } as React.CSSProperties
        }
      />
      <img
        alt="Ice Cube"
        className="ice-cube"
        referrerPolicy="no-referrer"
        src="/images/ice_cube.png"
        style={
          {
            top: '45%',
            right: '4%',
            width: '84px',
            height: '84px',
            '--rot': '30deg',
            animation: 'iceFloat 3.8s ease-in-out 1.1s infinite'
          } as React.CSSProperties
        }
      />
      <img
        alt="Ice Cube"
        className="ice-cube"
        referrerPolicy="no-referrer"
        src="/images/ice_cube.png"
        style={
          {
            bottom: '18%',
            left: '5%',
            width: '104px',
            height: '104px',
            '--rot': '-15deg',
            animation: 'iceFloat 4.5s ease-in-out 1.7s infinite'
          } as React.CSSProperties
        }
      />
      <img
        alt="Ice Cube"
        className="ice-cube"
        referrerPolicy="no-referrer"
        src="/images/ice_cube.png"
        style={
          {
            bottom: '28%',
            right: '12%',
            width: '92px',
            height: '92px',
            '--rot': '25deg',
            animation: 'iceFloat 5.2s ease-in-out 0.2s infinite'
          } as React.CSSProperties
        }
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
        <h2
          className="text-center font-cabinet text-[#FDFDFD] font-extrabold text-[34px] xs:text-[44px] sm:text-[76px] lg:text-[110px] leading-[1.05] tracking-tight mb-8 sm:mb-12 max-w-[1300px]"
          style={{ fontStyle: 'normal' }}
        >
          Wake up your taste buds and
        </h2>

        {/* Continuous Looping Track Mask */}
        <div className="slider-mask relative w-screen overflow-hidden my-6 py-6 flex items-center justify-start">
          <div className="loop-track flex items-center gap-[30px] px-[15px]">
            {repeatedItems.map((item, index) => (
              <div
                key={index}
                className="spyit-can-item group"
                style={{
                  animationDelay: `${(index % 4) * 150}ms`
                }}
                onClick={() => {
                  onSelectFlavorByName(item.text);
                  onOpenOrder();
                }}
                title={`Click to explore ${item.text}`}
              >
                <img
                  alt={item.text}
                  referrerPolicy="no-referrer"
                  className="select-none pointer-events-none drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
                  src={item.img}
                />
              </div>
            ))}
          </div>
        </div>

        <h2
          className="text-center font-cabinet text-[#FDFDFD] font-extrabold text-[34px] xs:text-[44px] sm:text-[76px] lg:text-[110px] leading-[1.05] tracking-tight mt-8 max-w-[1300px]"
          style={{ fontStyle: 'normal' }}
        >
          your vibe with every sip of Spyit
        </h2>
      </div>
    </section>
  );
};
