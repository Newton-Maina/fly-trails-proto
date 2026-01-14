import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServiceUnavailable: React.FC = () => {
  useScrollAnimation();

  return (
    <div className="relative flex items-center overflow-hidden min-h-[80vh]">
        {/* Background Image - Full Coverage with Gradient - MATCHING 404 STYLE */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/kenya.jpg" 
            alt="Wilderness" 
            className="w-full h-full object-cover"
          />
          {/* Light gradient for text readability matching 404 */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/20 md:to-transparent"></div>
        </div>

        {/* Content - Left Aligned */}
        <div className="max-w-[1600px] mx-auto w-full px-6 md:px-24 py-20 relative z-10">
          <div className="max-w-2xl reveal-left relative">
            
            {/* 503 Watermark - Matching 404 style */}
            <h1 className="text-[10rem] sm:text-[14rem] md:text-[18rem] font-black text-slate-900/10 absolute -top-24 sm:-top-40 -left-6 sm:-left-20 pointer-events-none select-none z-0 mix-blend-multiply">
              503
            </h1>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <span className="inline-block text-[#f29100] text-sm font-black uppercase tracking-[0.4em]">System Status</span>
                    <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f29100] animate-bounce"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f29100] animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f29100] animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                </div>
                
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black italic text-[#222] mb-8 leading-[0.9]">
                  Resting the <br />
                  <span className="text-[#f29100]">Engines.</span>
                </h2>
                
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-medium">
                  We are currently performing scheduled maintenance to ensure your next journey is smoother than ever. We'll be back online shortly.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => window.location.reload()}
                    className="bg-[#0c3154] text-white px-8 py-3.5 rounded-full text-[11px] font-black uppercase tracking-[0.25em] hover:bg-[#f29100] transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1"
                  >
                    Check Status
                  </button>
                  <a href="mailto:support@flytrails.com" className="group flex items-center gap-3 text-[#222] font-black text-[11px] uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-slate-100 transition-all">
                    <span className="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center transition-all group-hover:border-[#0c3154] group-hover:text-[#0c3154]">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </span>
                    Contact Support
                  </a>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ServiceUnavailable;