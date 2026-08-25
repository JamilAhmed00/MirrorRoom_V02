import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ArrowUp,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  CheckCircle2
} from 'lucide-react';

interface FooterSectionProps {
  onOpenOrder: (flavorId?: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenOrder }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="w-full bg-[#6A910D] pt-36 sm:pt-44 md:pt-48 pb-12 px-6 sm:px-12 md:px-16 lg:px-24 font-sans text-white/80 select-none overflow-hidden relative"
    >
      {/* Double Wave Layered SVG Header */}
      <div className="absolute top-0 left-0 right-0 h-28 sm:h-40 md:h-48 overflow-hidden pointer-events-none select-none z-10">
        <div className="absolute inset-0 w-[200%] h-full animate-wave-back opacity-35">
          <svg viewBox="0 0 2880 120" preserveAspectRatio="none" className="w-full h-full text-[#FCFCF9] fill-current">
            <path d="M0,0 L2880,0 L2880,60 C2600,110 2420,35 2160,75 C1900,115 1740,40 1440,85 C1160,110 980,35 720,75 C460,115 300,40 0,85 Z" />
          </svg>
        </div>
        <div className="absolute inset-0 w-[200%] h-full animate-wave-front">
          <svg viewBox="0 0 2880 120" preserveAspectRatio="none" className="w-full h-full text-[#FCFCF9] fill-current">
            <path d="M0,0 L2880,0 L2880,90 C2560,40 2400,110 2160,65 C1920,20 1760,95 1440,45 C1120,40 960,110 720,65 C480,20 320,95 0,45 Z" />
          </svg>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-[#E6F89C]/[0.04] rounded-full blur-[100px] pointer-events-none select-none z-0" />

      <div className="max-w-[1280px] mx-auto w-full relative z-10 pt-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/15">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 flex flex-col items-start justify-between">
            <div className="w-full">
              <span className="font-momo-signature text-[56px] text-[#FCFCF9] tracking-[0.33px] font-normal leading-none select-none">
                Spyit
              </span>
              <p className="font-cabinet font-normal text-white/80 text-[14px] sm:text-[15px] mt-4 leading-relaxed max-w-[380px]">
                Freshly pressed organic dynamic creations built around live raw nutrition to balance naturally extraordinary vitality.
              </p>

              {/* Newsletter Form */}
              <div className="mt-8 max-w-[380px] w-full">
                <h5 className="font-cabinet text-xs font-bold text-[#FCFCF9] uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E6F89C]" /> Get extra fresh news
                </h5>

                {subscribed ? (
                  <div className="flex items-center gap-2 p-3 bg-white/10 rounded-full text-white text-xs font-bold border border-white/20">
                    <CheckCircle2 className="w-4 h-4 text-[#E6F89C]" />
                    <span>You're in! Fresh juicy updates incoming.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="relative flex items-center w-full">
                    <input
                      required
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 focus:border-[#E6F89C] text-white placeholder-white/40 text-xs sm:text-sm rounded-full py-3.5 pl-5 pr-14 focus:outline-none transition-all font-sans"
                      type="email"
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 w-10 h-10 rounded-full bg-[#E6F89C] hover:bg-[#d0e57f] text-[#6A910D] flex items-center justify-center transition-all duration-300 scale-95 cursor-pointer hover:scale-100 shadow-md"
                      aria-label="Subscribe"
                    >
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8 lg:mt-12">
              <span className="text-white/50 text-xs uppercase font-cabinet tracking-widest mr-2">
                Follow Us
              </span>
              <a
                href="#facebook"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#FCFCF9] hover:text-[#E6F89C] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border border-white/10"
                aria-label="facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#FCFCF9] hover:text-[#E6F89C] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border border-white/10"
                aria-label="instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#FCFCF9] hover:text-[#E6F89C] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border border-white/10"
                aria-label="twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-[#FCFCF9] hover:text-[#E6F89C] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border border-white/10"
                aria-label="linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <h4 className="font-cabinet text-xs font-bold text-[#FCFCF9] uppercase tracking-widest mb-6">
                Fresh Flavors
              </h4>
              <div className="flex flex-col gap-3.5 text-xs sm:text-sm font-cabinet font-medium">
                <button
                  onClick={() => onOpenOrder('orange')}
                  className="text-left text-white/70 hover:text-[#E6F89C] transition-colors duration-200 block cursor-pointer"
                >
                  Mandarin Burst
                </button>
                <button
                  onClick={() => onOpenOrder('strawberry')}
                  className="text-left text-white/70 hover:text-[#E6F89C] transition-colors duration-200 block cursor-pointer"
                >
                  Wild Strawberry
                </button>
                <button
                  onClick={() => onOpenOrder('grapes')}
                  className="text-left text-white/70 hover:text-[#E6F89C] transition-colors duration-200 block cursor-pointer"
                >
                  Midnight Berry
                </button>
                <button
                  onClick={() => onOpenOrder('kiwi')}
                  className="text-left text-white/70 hover:text-[#E6F89C] transition-colors duration-200 block cursor-pointer"
                >
                  Kiwi Energizer
                </button>
                <button
                  onClick={() => scrollToSection('ingredients-section')}
                  className="text-left text-white/70 hover:text-[#E6F89C] transition-colors duration-200 block cursor-pointer"
                >
                  Organic Sourcing
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-cabinet text-xs font-bold text-[#FCFCF9] uppercase tracking-widest mb-6">
                Company
              </h4>
              <div className="flex flex-col gap-3.5 text-xs sm:text-sm font-cabinet font-medium">
                <button
                  onClick={() => scrollToSection('showcase-juice-section')}
                  className="text-left text-white/70 hover:text-[#E6F89C] transition-colors duration-200 block cursor-pointer"
                >
                  Our Story
                </button>
                <button
                  onClick={() => scrollToSection('features03-section')}
                  className="text-left text-white/70 hover:text-[#E6F89C] transition-colors duration-200 block cursor-pointer"
                >
                  Nutrition Inside
                </button>
                <button
                  onClick={() => scrollToSection('faq-section')}
                  className="text-left text-white/70 hover:text-[#E6F89C] transition-colors duration-200 block cursor-pointer"
                >
                  Common FAQs
                </button>
                <button
                  onClick={() => scrollToSection('testimonial-section')}
                  className="text-left text-white/70 hover:text-[#E6F89C] transition-colors duration-200 block cursor-pointer"
                >
                  Taste Explorers
                </button>
                <button
                  onClick={() => onOpenOrder()}
                  className="text-left text-white/70 hover:text-[#E6F89C] transition-colors duration-200 block cursor-pointer"
                >
                  Member Orders
                </button>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-cabinet text-xs font-bold text-[#FCFCF9] uppercase tracking-widest mb-6">
                Resources
              </h4>
              <div className="flex flex-col gap-3.5 text-xs sm:text-sm font-cabinet font-medium">
                <span className="text-white/70 hover:text-[#E6F89C] transition-colors duration-200 block cursor-pointer">
                  Privacy Policy
                </span>
                <span className="text-white/70 hover:text-[#E6F89C] transition-colors duration-200 block cursor-pointer">
                  Terms &amp; Conditions
                </span>
                <span className="text-white/70 hover:text-[#E6F89C] transition-colors duration-200 block cursor-pointer">
                  Shipping Policy
                </span>
                <span className="text-white/70 hover:text-[#E6F89C] transition-colors duration-200 block cursor-pointer">
                  Refund Rules
                </span>
                <span className="text-white/70 hover:text-[#E6F89C] transition-colors duration-200 block cursor-pointer">
                  Carbon Neutral Plan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 text-[13px] relative z-10">
          <div className="text-white/60 font-cabinet font-light tracking-wide text-center md:text-left">
            © 2026 SPYIT Drinks, All Rights Reserved. Fully organic dynamic formulation.
          </div>

          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full bg-[#E6F89C] hover:bg-[#d0e57f] text-[#6A910D] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl cursor-pointer"
              aria-label="Back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Huge Outline Watermark */}
        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 hidden md:block">
          <span className="footer-huge-outline font-sans text-[120px] lg:text-[180px] font-black tracking-[15px] uppercase opacity-30 leading-none">
            SPYIT
          </span>
        </div>
      </div>
    </footer>
  );
};
