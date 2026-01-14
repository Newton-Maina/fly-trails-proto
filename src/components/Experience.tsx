import React from 'react';
import { experienceData } from '../data/experience';

const Experience: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 max-w-[1600px] mx-auto bg-white overflow-hidden relative">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#fdf5e6] rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Portrait Video Card (Instagram Reel Style) */}
        <div className="w-full lg:w-[50%] flex justify-center relative group px-4 md:px-0">
            <div className="relative w-full max-w-[400px] aspect-[9/16] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transform transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]">
                <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>

                {/* Premium Vimeo Video embed */}
                <div className="absolute inset-0 w-full h-full">
                    <iframe 
                        src={experienceData.video.src} 
                        className="w-[100.5%] h-[100.5%] pointer-events-none object-cover"
                        style={{ width: '100%', height: '100%', transform: 'scale(1.1)' }}
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        title="Experience Video"
                    ></iframe>
                </div>
                
                {/* Floating Video Content Overlay */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
                    <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                        {experienceData.video.overlayLabel}
                    </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center animate-pulse">
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div>
                            <p className="text-white text-base md:text-lg font-bold">{experienceData.video.caption.title}</p>
                            <p className="text-white/80 text-[10px] md:text-xs">{experienceData.video.caption.time}</p>
                        </div>
                     </div>
                </div>
            </div>
            
            {/* Abstract Decor behind card */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-[#f29100]/10 rounded-full blur-2xl -z-10"></div>
        </div>

        {/* Right Column: Content & Bento Grid */}
        <div className="w-full lg:w-[55%] space-y-10 md:space-y-12 px-2 md:px-0">
            
            {/* Text Content */}
            <div className="space-y-6">
                <span className="text-[#f29100] text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] reveal block">{experienceData.subtitle}</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black italic text-[#222] leading-tight reveal" style={{ transitionDelay: '100ms' }}>
                    {experienceData.title[0]} <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#222] to-slate-500">{experienceData.title[1]}</span>
                </h2>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-xl reveal" style={{ transitionDelay: '200ms' }}>
                    {experienceData.description}
                </p>
                
                <div className="flex gap-8 pt-4 reveal" style={{ transitionDelay: '300ms' }}>
                    {experienceData.stats.map((stat, i) => (
                        <React.Fragment key={i}>
                            <div>
                                <p className="text-2xl md:text-3xl font-black text-[#222]">{stat.value}</p>
                                <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">{stat.label}</p>
                            </div>
                            {i < experienceData.stats.length - 1 && <div className="w-px h-10 md:h-12 bg-slate-100"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Mini Bento Grid - Responsive */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 h-auto md:h-48 reveal-up" style={{ transitionDelay: '400ms' }}>
                {experienceData.bentoImages.map((src, i) => (
                    <div key={i} className={`col-span-1 h-40 md:h-auto rounded-2xl overflow-hidden relative group cursor-pointer ${i === 1 ? 'md:mt-8' : ''} ${i === 2 ? 'hidden md:block' : ''}`}>
                        <img src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Detail ${i+1}`} />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;