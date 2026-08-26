import React, { useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, RefreshCw } from 'lucide-react';

export const VideoShowcase: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section
      id="showcase-juice-section"
      className="relative w-full bg-white py-[80px] md:py-[120px] font-sans flex flex-col items-center justify-center select-none overflow-hidden"
    >
      {/* Top Vector Decorative Curve */}
      <div className="absolute top-0 left-0 w-full z-0 overflow-hidden pointer-events-none select-none">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto object-cover"
        >
          <path
            d="M64.5 105.093C115.545 106.143 125.479 57.2459 176.5 58.759C215.678 59.9208 226.48 87.9995 265.5 90.6779C304.545 93.3577 325.041 62.408 362 71.4581C395.519 79.6656 369.079 101.03 390.5 120.537C403.791 132.64 429.059 128.534 441.5 141.473C459.946 160.658 468.273 195.515 500.5 199.476C571.834 208.242 525.802 104.298 595.5 90.6779C651.281 79.7769 679.522 121.568 737.5 120.537C783.405 119.721 804.607 99.3324 850.5 98.2286C893.25 97.2003 915.3 114.364 957.997 112.644C999.675 110.965 1020.08 82.2933 1060 90.6779C1090.4 97.061 1089.36 122.632 1120 128.431C1137.89 131.815 1149.71 124.812 1167.5 128.431C1218.53 138.817 1182.75 197.004 1224.38 197.004C1272.38 197.004 1224.19 120.442 1291.5 104.75C1349.56 91.2127 1440 139.757 1440 139.757V0H0V90.6779C0 90.6779 38.0216 104.548 64.5 105.093Z"
            fill="#FFF7F1"
          />
        </svg>
      </div>

      <div className="w-full max-w-full mx-auto flex flex-col items-center relative z-10 pt-12 sm:pt-20 md:pt-28 lg:pt-36">
        {/* Title & Description */}
        <div className="flex flex-col items-center text-center w-full max-w-[1280px] mx-auto pb-8 sm:pb-[60px] mt-4 md:mt-6 px-6 md:px-12">
          <h1
            className="text-center text-[34px] xs:text-[44px] sm:text-[76px] lg:text-[113px] font-extrabold leading-[38px] xs:leading-[48px] sm:leading-[80px] lg:leading-[110px] text-[#262423] tracking-[-1.5px] sm:tracking-[-2px] mb-3"
            style={{ fontStyle: 'normal', fontFamily: '"Cabinet Grotesk", sans-serif', fontWeight: 800 }}
          >
            Sip the difference
          </h1>
          <p className="text-[15px] sm:text-[18px] text-[#555555] font-normal leading-relaxed max-w-[560px]">
            SPYIT delivers a refreshing burst of fruity flavor with every sip, making it the perfect companion for active lifestyles.
          </p>
        </div>

        {/* Video Commercial Player */}
        <div className="relative w-full max-w-[1280px] px-4 sm:px-6 flex flex-col items-center mb-8 md:mb-16">
          <div className="relative w-full overflow-hidden rounded-[24px] sm:rounded-[36px] shadow-2xl border-4 sm:border-8 border-white bg-slate-900 group">
            <video
              ref={videoRef}
              src="https://cdn.jiro.build/Spyit/Video/SPYIT_soda_commercial_CGI_.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-auto aspect-video object-cover"
            />

            {/* Video Controls Overlay */}
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
              <button
                onClick={togglePlay}
                className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
                title={isPlaying ? 'Pause' : 'Play'}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
                title={isMuted ? 'Unmute' : 'Mute'}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Floating Pill Capsule for Nutritional Highlights */}
          <div className="relative md:absolute md:bottom-[-40px] lg:bottom-[-20px] xl:bottom-[20px] md:left-1/2 md:-translate-x-1/2 z-30 w-full max-w-full md:w-[941px] px-2 sm:px-0 mt-6 md:mt-0">
            <div className="flex flex-col sm:flex-row flex-wrap md:flex-nowrap justify-between gap-y-6 sm:gap-y-8 items-center bg-white border-8 sm:border-[16px] border-[#FFEBE0] rounded-3xl md:rounded-full w-full py-6 px-8 sm:px-12 sm:py-8 md:px-[70px] md:h-[165px] h-auto shadow-2xl">
              <div className="flex flex-col items-center text-center w-[30%] sm:w-auto shrink-0">
                <span className="text-[#4B4848] font-normal leading-none mb-1 text-[16px] sm:text-[20px] font-cabinet">
                  Potassium
                </span>
                <span className="text-[#4B4848] font-normal leading-none mb-1 text-[12px] sm:text-[14px] font-cabinet">
                  up to
                </span>
                <span className="text-[#E65D00] font-extrabold leading-none text-[18px] sm:text-[24px] font-cabinet">
                  245mg
                </span>
              </div>

              <div className="hidden sm:block w-px h-10 bg-orange-100" />

              <div className="flex flex-col items-center text-center w-[30%] sm:w-auto shrink-0">
                <span className="text-[#4B4848] font-normal leading-none mb-1 text-[16px] sm:text-[20px] font-cabinet">
                  Calcium
                </span>
                <span className="text-[#4B4848] font-normal leading-none mb-1 text-[12px] sm:text-[14px] font-cabinet">
                  up to
                </span>
                <span className="text-[#E65D00] font-extrabold leading-none text-[18px] sm:text-[24px] font-cabinet">
                  500mg
                </span>
              </div>

              <div className="hidden sm:block w-px h-10 bg-orange-100" />

              <div className="flex flex-col items-center text-center w-[30%] sm:w-auto shrink-0">
                <span className="text-[#4B4848] font-normal leading-none mb-1 text-[16px] sm:text-[20px] font-cabinet">
                  Vitamin A
                </span>
                <span className="text-[#4B4848] font-normal leading-none mb-1 text-[12px] sm:text-[14px] font-cabinet">
                  up to
                </span>
                <span className="text-[#E65D00] font-extrabold leading-none text-[18px] sm:text-[24px] font-cabinet">
                  176 mcg
                </span>
              </div>

              <div className="hidden sm:block w-px h-10 bg-orange-100" />

              <div className="flex flex-col items-center text-center w-[30%] sm:w-auto shrink-0">
                <span className="text-[#4B4848] font-normal leading-none mb-1 text-[16px] sm:text-[20px] font-cabinet">
                  Vitamin D
                </span>
                <span className="text-[#4B4848] font-normal leading-none mb-1 text-[12px] sm:text-[14px] font-cabinet">
                  up to
                </span>
                <span className="text-[#E65D00] font-extrabold leading-none text-[18px] sm:text-[24px] font-cabinet">
                  5 mcg
                </span>
              </div>

              <div className="hidden sm:block w-px h-10 bg-orange-100" />

              <div className="flex flex-col items-center text-center w-[30%] sm:w-auto shrink-0">
                <span className="text-[#4B4848] font-normal leading-none mb-1 text-[16px] sm:text-[20px] font-cabinet">
                  Iron
                </span>
                <span className="text-[#4B4848] font-normal leading-none mb-1 text-[12px] sm:text-[14px] font-cabinet">
                  up to
                </span>
                <span className="text-[#E65D00] font-extrabold leading-none text-[18px] sm:text-[24px] font-cabinet">
                  1mg
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
