import React from 'react';
import { TESTIMONIALS } from '../data';
import { CupSoda, Star, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonial-section"
      className="w-full bg-[#00A165] py-[100px] md:py-[140px] px-6 sm:px-12 md:px-16 lg:px-20 font-sans select-none overflow-hidden relative"
    >
      {/* SVG ClipPath Definition for Wavy Ticket Border */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="wavy-card-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.036, 0 C 0.25, -0.01, 0.75, -0.01, 0.964, 0 C 0.973, 0.05, 0.955, 0.09, 0.964, 0.15 C 0.973, 0.21, 0.991, 0.23, 0.982, 0.30 C 0.973, 0.37, 0.955, 0.41, 0.964, 0.47 C 0.973, 0.53, 0.991, 0.57, 0.982, 0.64 C 0.973, 0.71, 0.955, 0.75, 0.964, 0.81 C 0.973, 0.87, 0.991, 0.91, 0.982, 0.97 C 0.973, 0.99, 0.955, 0.99, 0.964, 1 H 0.036 C 0.027, 0.99, 0.039, 0.99, 0.036, 0.95 C 0.027, 0.89, 0.009, 0.85, 0.018, 0.79 C 0.027, 0.73, 0.045, 0.69, 0.036, 0.63 C 0.027, 0.57, 0.009, 0.53, 0.018, 0.47 C 0.027, 0.41, 0.045, 0.37, 0.036, 0.31 C 0.027, 0.25, 0.009, 0.21, 0.018, 0.15 C 0.024, 0.09, 0.033, 0.05, 0.036, 0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Decorative Glows and Doodles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute left-[10%] top-[20%] w-[350px] h-[350px] bg-white/[0.08] rounded-full blur-3xl" />
        <div className="absolute right-[5%] bottom-[10%] w-[400px] h-[400px] bg-white/[0.08] rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1480px] mx-auto w-full relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 self-stretch w-full flex flex-col items-center justify-center">
          <h2
            className="text-center font-cabinet text-[34px] xs:text-[44px] sm:text-[76px] lg:text-[113px] font-extrabold leading-[38px] xs:leading-[48px] sm:leading-[80px] lg:leading-[110px] text-white tracking-[-1px] sm:tracking-[-2px] max-w-none w-full mx-auto"
            style={{ fontStyle: 'normal', fontFamily: '"Cabinet Grotesk", sans-serif', fontWeight: 800 }}
          >
            Loved By Thousands <br className="hidden sm:inline" />
            Of Taste Explorers.
          </h2>
          <p className="text-white/95 font-sans text-base sm:text-lg max-w-[650px] mt-6 leading-relaxed">
            From creative studios to dynamic running tracks, see how the absolute juice revolution matches real lifestyles.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 xl:gap-10 relative items-stretch">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              id={`testimonial-${item.id}`}
              className="relative transition-all duration-500 hover:-translate-y-2 group"
              style={{
                filter: 'drop-shadow(0 15px 40px rgba(0, 0, 0, 0.18))'
              }}
            >
              <div
                className="h-full flex flex-col justify-between bg-white px-8 sm:px-9 py-10 transition-all duration-300 overflow-hidden relative"
                style={{ clipPath: 'url("#wavy-card-clip")' }}
              >
                {/* Radial color aura */}
                <div
                  className="absolute -right-6 -top-6 w-32 h-32 rounded-full opacity-[0.15] pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${item.flavorColor} 0%, transparent 70%)` }}
                />

                <div>
                  {/* 5 Soda Cups Rating */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex gap-1.5">
                      {[...Array(item.rating)].map((_, rIdx) => (
                        <CupSoda
                          key={rIdx}
                          className="w-6 h-6 sm:w-7 sm:h-7"
                          style={{
                            fill: item.flavorColor,
                            stroke: item.flavorColor
                          }}
                        />
                      ))}
                    </div>
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full text-white ml-auto"
                      style={{ backgroundColor: item.flavorColor }}
                    >
                      {item.flavorName}
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <p className="text-slate-800 text-[15px] sm:text-[16px] leading-relaxed font-sans font-medium italic relative">
                      "{item.quote}"
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div>
                  <div className="border-t border-slate-100 pt-6 mt-6 flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full overflow-hidden shrink-0 relative shadow-sm border-2"
                      style={{ borderColor: item.flavorColor }}
                    >
                      <img
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover select-none"
                        src={item.avatar}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-cabinet font-black text-[16px] text-slate-900 truncate">
                          {item.name}
                        </h4>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      </div>
                      <p className="text-slate-500 text-xs font-sans font-medium truncate">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Accent Bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: item.flavorColor }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
