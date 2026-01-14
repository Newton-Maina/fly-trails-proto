import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const NotFound: React.FC = () => {
  useScrollAnimation();

  return (
    <div className="relative flex items-center overflow-hidden min-h-[80vh]">
        {/* Background Image - Full Coverage with Gradient */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/kenya.jpg" 
            alt="Wilderness" 
            className="w-full h-full object-cover"
          />
          {/* Heavy gradient to ensure text readability on the left, fading to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/20 md:to-transparent"></div>
        </div>

        {/* Content - Left Aligned */}
        <div className="max-w-[1600px] mx-auto w-full px-6 md:px-24 py-20 relative z-10">
          <div className="max-w-2xl reveal-left relative">
            
            {/* 404 Watermark - Increased visibility */}
            <h1 className="text-[10rem] sm:text-[14rem] md:text-[18rem] font-black text-slate-900/10 absolute -top-24 sm:-top-40 -left-6 sm:-left-20 pointer-events-none select-none z-0 mix-blend-multiply">
              404
            </h1>

            <div className="relative z-10">
                
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black italic text-[#222] mb-8 leading-[0.9]">
                  Lost in the <br />
                  <span className="text-[#f29100]">Wilderness?</span>
                </h2>
                
                <p className="text-slate-600 text-lg md:text-lg leading-relaxed mb-10 max-w-lg font-medium">
                  The trail seems to have gone cold here. Don't worry, even the best explorers get turned around sometimes.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/" className="bg-[#0c3154] text-white px-8 py-3.5 rounded-full text-[11px] font-black uppercase tracking-[0.25em] hover:bg-[#f29100] transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 text-center flex items-center justify-center gap-2">
                    Back to Base Camp
                  </a>
                  <button onClick={() => window.history.back()} className="group flex items-center gap-3 text-[#222] font-black text-[11px] uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-white/80 transition-all">
                    <span className="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center transition-all group-hover:border-[#0c3154] group-hover:text-[#0c3154]">
                        <svg className="w-3 h-3 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    Go Back
                  </button>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default NotFound;