import React, { useState, useEffect } from 'react';
import { heroTexts, heroDestinations } from '../data/hero';
import HeroBackground from './hero/HeroBackground';
import BookingWidget from './hero/BookingWidget';

const Hero: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden rounded-b-[2rem] md:rounded-b-[5rem] shadow-2xl z-40 bg-black">
      
      <HeroBackground />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-12 flex flex-col items-center text-center h-full justify-center pb-20 md:pb-0">
        
        {/* Main Typography */}
        <div className="mb-12 md:mb-16 w-full max-w-5xl flex flex-col items-center min-h-[250px] md:min-h-[300px] justify-center relative">
            {heroTexts.map((text, index) => (
                <div 
                    key={index} 
                    className={`transition-all duration-[1500ms] ease-out absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 ${index === currentTextIndex ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-90 blur-xl'}`}
                >
                    <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-serif font-black italic leading-[1.1] md:leading-[0.9] tracking-tighter drop-shadow-2xl mb-4 md:mb-6 break-words md:whitespace-nowrap">
                      {text.title} <br className="hidden md:block" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f29100] via-white to-white">{text.subtitle}</span>
                    </h1>
                </div>
            ))}
        </div>

        <p className="text-slate-200 text-sm md:text-xl font-medium leading-relaxed max-w-xs md:max-w-xl mx-auto drop-shadow-md mb-12 opacity-90 px-4">
            Bespoke itineraries crafted for the discerning traveler.
        </p>

        <BookingWidget 
          isBookingOpen={isBookingOpen} 
          setIsBookingOpen={setIsBookingOpen}
          destinations={heroDestinations}
        />

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 opacity-60 hover:opacity-100 transition-opacity duration-500 cursor-pointer group">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/80 group-hover:text-white transition-colors">Scroll to browse</span>
            <div className="w-12 h-px bg-white/30 group-hover:w-20 group-hover:bg-[#f29100] transition-all duration-500"></div>
            <div className="animate-bounce mt-1">
                <svg className="w-5 h-5 text-white group-hover:text-[#f29100] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </div>

      </div>
      
      {/* Social Proof */}
      <div className="hidden md:flex absolute bottom-8 w-full justify-center md:justify-end md:right-12 z-20 opacity-90 pointer-events-none">
          <div className="flex items-center gap-4 bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
              <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border border-[#f29100] bg-slate-200 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" className="w-full h-full object-cover" />
                      </div>
                  ))}
              </div>
              <div className="text-white text-[10px] font-bold leading-tight text-left">
                  <span className="text-[#f29100] block text-sm">4.9/5</span>
                  Trusted by 10k+ Travelers
              </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;