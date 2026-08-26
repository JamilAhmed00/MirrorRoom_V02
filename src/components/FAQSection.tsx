import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Ingredients', 'Flavors', 'Health', 'Shipping'];

  const filteredFaqs =
    activeCategory === 'All'
      ? FAQS
      : FAQS.filter((f) => f.category.toLowerCase() === activeCategory.toLowerCase());

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq-section"
      className="w-full bg-[#FCFCF9] pt-[140px] md:pt-[200px] pb-[100px] md:pb-[130px] px-6 sm:px-12 md:px-16 lg:px-20 font-sans select-none overflow-hidden relative"
    >
      {/* Top FAQ Decorative Wave Vector */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 overflow-hidden select-none">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto object-cover"
        >
          <path
            d="M64.5 105.093C115.545 106.143 125.479 57.2459 176.5 58.759C215.678 59.9208 226.48 87.9995 265.5 90.6779C304.545 93.3577 325.041 62.408 362 71.4581C395.519 79.6656 369.079 101.03 390.5 120.537C403.791 132.64 429.059 128.534 441.5 141.473C459.946 160.658 468.273 195.515 500.5 199.476C571.834 208.242 525.802 104.298 595.5 90.6779C651.281 79.7769 679.522 121.568 737.5 120.537C783.405 119.721 804.608 99.3324 850.5 98.2286C893.25 97.2003 915.3 114.364 957.997 112.644C999.675 110.965 1020.08 82.2933 1060 90.6779C1090.39 97.061 1089.36 122.632 1120 128.431C1137.88 131.815 1149.71 124.812 1167.5 128.431C1218.53 138.817 1182.75 197.004 1224.38 197.004C1272.38 197.004 1224.19 120.442 1291.5 104.75C1349.56 91.2127 1440 139.757 1440 139.757V0H0V90.6779C0 90.6779 38.0216 104.548 64.5 105.093Z"
            fill="#00A165"
          />
        </svg>
      </div>

      {/* Subtle Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-45">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(rgb(30, 41, 59) 1.2px, transparent 1.2px)',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="absolute left-[-10%] top-[40%] w-[450px] h-[450px] bg-[#00A165]/[0.05] rounded-full blur-[100px]" />
        <div className="absolute right-[-5%] top-[10%] w-[400px] h-[400px] bg-[#EA3D5A]/[0.05] rounded-full blur-[110px]" />
      </div>

      <div className="max-w-[1480px] mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center justify-center">
          <h2
            className="text-center font-cabinet text-[34px] xs:text-[44px] sm:text-[76px] lg:text-[100px] font-extrabold leading-[38px] xs:leading-[48px] sm:leading-[80px] lg:leading-[100px] text-slate-900 tracking-[-1px] sm:tracking-[-2px] max-w-none w-full mx-auto capitalize"
            style={{ fontStyle: 'normal', fontFamily: '"Cabinet Grotesk", sans-serif', fontWeight: 800 }}
          >
            Frequently Asked <br className="hidden sm:inline" />
            Juicy Questions.
          </h2>
          <p className="text-slate-600 font-sans text-base sm:text-lg max-w-[650px] mt-6 leading-relaxed">
            Discover everything you need to know about ingredients, flavor design philosophy, and express chilled delivery.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-cabinet font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions Stack */}
        <div className="max-w-[960px] mx-auto w-full flex flex-col gap-4 sm:gap-5 relative z-10">
          {filteredFaqs.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => toggleFAQ(item.id)}
                className="bg-white rounded-2xl md:rounded-3xl border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md cursor-pointer"
                style={{
                  borderColor: isOpen ? item.categoryColor : '#E2E8F0'
                }}
              >
                {/* Accordion Trigger */}
                <div className="p-6 sm:p-8 flex items-center justify-between gap-6 self-stretch">
                  <div className="flex items-center gap-4">
                    <span
                      className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full text-white shrink-0"
                      style={{ backgroundColor: item.categoryColor }}
                    >
                      {item.category}
                    </span>
                    <h4 className="font-cabinet text-lg sm:text-xl font-bold text-slate-800 leading-snug">
                      {item.question}
                    </h4>
                  </div>

                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300"
                    style={{
                      backgroundColor: isOpen ? item.categoryColor : 'transparent',
                      borderColor: isOpen ? item.categoryColor : '#CBD5E1'
                    }}
                  >
                    <ChevronDown
                      className="w-5 h-5 transition-transform duration-300"
                      style={{
                        stroke: isOpen ? '#FFFFFF' : '#1E293B',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </div>
                </div>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-6 pb-8 sm:px-8 sm:pb-10 pt-0 text-slate-600 font-sans text-[15px] sm:text-[16px] leading-relaxed border-t border-slate-100 animate-fade-in">
                    <p className="max-w-[700px] mt-4">{item.answer}</p>
                    {item.tag && (
                      <div className="mt-5 flex flex-wrap gap-2 items-center">
                        <span
                          className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded bg-slate-100 flex items-center gap-1.5 font-sans"
                          style={{ color: item.categoryColor }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full inline-block"
                            style={{ backgroundColor: item.categoryColor }}
                          />
                          {item.tag}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
