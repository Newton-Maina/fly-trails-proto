import React from 'react';

const OurStory: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden px-6 md:px-24 -mt-20 pt-48 pb-32 z-10 shadow-overlap">
      {/* Decorative Blobs & SVGs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#fdf5e6] rounded-full filter blur-[100px] -z-10 opacity-60 parallax-layer" data-speed="0.2"></div>
      <div className="absolute bottom-20 right-[-100px] w-[400px] h-[400px] bg-[#f29100]/5 rounded-full filter blur-[80px] -z-10 opacity-40 parallax-layer" data-speed="0.1"></div>
      
      {/* Abstract geometric SVG decor */}
      <svg className="absolute top-20 right-20 text-[#f29100]/10 w-64 h-64 -z-10 parallax-layer" data-speed="0.15" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
        <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      <div className="max-w-[1500px] mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left text column */}
        <div className="lg:w-1/2 text-[#222] reveal-right">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-0.5 bg-[#e11d48]"></span>
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-[#e11d48]">Since 2012</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-black italic mb-10 leading-tight tracking-tight">Our Story</h2>
          <div className="space-y-6 mb-12 max-w-xl">
            <p className="text-[16px] md:text-[17px] leading-loose font-medium text-slate-600">
              Born in the heart of Nairobi, <span className="text-[#f29100] font-bold">Fly Trails</span> began with a simple mission: to show the world the raw, untamed beauty of Africa.
            </p>
            <p className="text-[16px] md:text-[17px] leading-loose text-slate-500">
              From the rolling plains of the Masai Mara to the ancient wonders of Egypt, we craft bespoke journeys that go beyond the guidebook. Our local guides ensure you experience the authentic spirit of the continent.
            </p>
            <div className="bg-[#fdf5e6] p-6 rounded-sm border-l-4 border-[#f29100] mt-4">
              <p className="text-[16px] italic text-[#222] font-semibold leading-relaxed">
                "Africa is not just a place to visit, it is a feeling to be experienced."
              </p>
            </div>
          </div>
          <button className="bg-[#0c3154] text-white px-10 py-4 rounded-full text-[13px] font-extrabold uppercase tracking-widest shadow-xl transition-all hover:bg-slate-700 hover:scale-105">
            MEET THE GUIDES
          </button>
        </div>

        {/* Right Image Column */}
        <div className="lg:w-1/2 relative group reveal-left w-full" style={{ transitionDelay: '300ms' }}>
          <div className="relative w-full max-w-2xl mx-auto">
             {/* Main Image */}
             <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl transform transition-transform duration-700 group-hover:-translate-y-2">
                <img 
                  src="/safari-vehicle.jpg" 
                  alt="Safari Vehicle in Kenya" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                
                {/* Badge on image */}
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-sm">
                   <div className="text-white text-[10px] font-black uppercase tracking-widest mb-1">Current Expedition</div>
                   <div className="text-white text-xl font-serif italic">Masai Mara, Kenya</div>
                </div>
             </div>

             {/* Decor element behind */}
             <div className="absolute top-6 -right-6 w-full h-full border-[3px] border-[#f29100] rounded-sm -z-10 opacity-30"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-dots-pattern opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;