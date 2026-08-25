import React from 'react';

export const WavyMarquee: React.FC = () => {
  const phrase = 'Sip, Smile, Healthy, Your daily dose ✦ ';
  const characters = phrase.split('');

  // 3 phrase repeats for continuous track
  const repeatCounts = [0, 1, 2];

  return (
    <section
      id="curve-animation-section"
      className="w-full overflow-hidden bg-white py-16 md:py-24 relative z-10 select-none border-y border-[#F3F3F3]"
    >
      <div className="w-full overflow-hidden no-scrollbar flex items-center">
        <div className="marquee-track">
          {repeatCounts.map((repeatIndex) => (
            <div key={repeatIndex} className="flex items-center pr-4">
              {characters.map((char, index) => {
                const totalIndex = repeatIndex * characters.length + index;
                const delay = `${(totalIndex * 0.05).toFixed(2)}s`;

                return (
                  <span
                    key={index}
                    className="wave-char text-[44px] sm:text-[68px] md:text-[84px] lg:text-[104px] tracking-tight leading-none text-[#1A1AEE]"
                    style={{
                      animationDelay: delay
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
