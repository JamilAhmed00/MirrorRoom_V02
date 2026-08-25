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
      <div className="absolute top-0 left-0 w-full z-0">
        <img
          alt="SPYIT Symbol"
          referrerPolicy="no-referrer"
          className="w-full h-auto select-none pointer-events-none object-contain"
          src="https://cdn.jiro.build/Spyit/Image/Images/Vector.svg"
        />
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
