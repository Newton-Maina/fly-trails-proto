import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[95vh] min-h-[700px] w-full flex flex-col justify-center overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem] shadow-2xl z-40 bg-white">
      {/* Top Right Curve Overlay for Header Links - Corrected Shape */}
      <div className="absolute top-0 right-0 w-[65%] h-24 z-40 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          {/* Path starts at top-left, curves down quickly to full height, then extends flat to the right */}
          <path d="M0 0 C 15 0, 20 100, 35 100 L 100 100 L 100 0 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Cinematic Background Layer */}
      <div 
        className="absolute inset-0 bg-fixed-layer z-0"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c3154]/80 via-[#0c3154]/20 to-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-12 flex flex-col items-center text-center">
        
        {/* Main Typography */}
        <div className="mb-12 max-w-4xl reveal flex flex-col items-center">
            <h1 className="text-white text-5xl md:text-7xl lg:text-[7.5rem] font-serif font-black italic leading-[1.1] md:leading-[0.9] tracking-tighter drop-shadow-2xl mb-8">
              Wilderness <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Awaits You.</span>
            </h1>
            <p className="text-slate-200 text-base md:text-xl font-medium leading-relaxed max-w-xl mx-auto drop-shadow-md">
              Experience the untold stories of the savannah with Fly Trails. Bespoke itineraries across Kenya, Tanzania, and beyond.
            </p>
        </div>

        {/* Glassmorphic Search/Booking Widget */}
        {/* Centered by flex-col items-center on parent */}
        <div className="w-full max-w-[95%] lg:max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl md:rounded-full p-2 md:p-3 reveal shadow-2xl transform transition-transform hover:scale-[1.01]" style={{ transitionDelay: '200ms' }}>
            <form className="flex flex-col md:flex-row items-center w-full gap-2 md:gap-0">
                
                {/* Destination Input */}
                <div className="relative flex-1 w-full md:w-auto border-b md:border-b-0 md:border-r border-white/10 p-4 md:px-6 hover:bg-white/5 rounded-2xl md:rounded-l-full cursor-pointer transition-colors text-left">
                    <label className="block text-[#f29100] text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1.5 ml-1">Destination</label>
                    <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <select className="bg-transparent text-white font-bold text-base md:text-lg appearance-none w-full outline-none cursor-pointer">
                            <option className="text-black">Where to?</option>
                            <option className="text-black">Masai Mara, Kenya</option>
                            <option className="text-black">Serengeti, Tanzania</option>
                            <option className="text-black">Victoria Falls, Zambia</option>
                            <option className="text-black">Cairo, Egypt</option>
                        </select>
                    </div>
                </div>

                {/* Date Input */}
                <div className="relative flex-1 w-full md:w-auto border-b md:border-b-0 md:border-r border-white/10 p-4 md:px-6 hover:bg-white/5 cursor-pointer transition-colors text-left">
                    <label className="block text-[#f29100] text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1.5 ml-1">Date</label>
                    <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <input type="text" placeholder="Add Dates" className="bg-transparent text-white font-bold text-base md:text-lg w-full outline-none placeholder-white/70 cursor-pointer min-w-0" onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'} />
                    </div>
                </div>

                {/* Guests Input */}
                <div className="relative flex-1 w-full md:w-auto p-4 md:px-6 hover:bg-white/5 rounded-2xl md:rounded-r-full cursor-pointer transition-colors text-left">
                    <label className="block text-[#f29100] text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1.5 ml-1">Travelers</label>
                    <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        <span className="text-white font-bold text-base md:text-lg">2 Guests</span>
                    </div>
                </div>

                {/* Search Button */}
                <div className="p-2 w-full md:w-auto">
                    <button type="button" className="w-full md:w-auto bg-[#e11d48] hover:bg-red-700 text-white h-14 md:h-14 px-8 md:px-10 rounded-2xl md:rounded-full flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-red-900/50 group">
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="font-black uppercase tracking-widest text-sm">Search</span>
                    </button>
                </div>
            </form>
        </div>
      </div>
      
      {/* Social Proof */}
      <div className="absolute bottom-8 w-full flex justify-center md:justify-end md:right-12 z-20 opacity-90 pointer-events-none">
          <div className="flex items-center gap-4 bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
              <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border border-[#0c3154] bg-slate-200 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" className="w-full h-full object-cover" />
                      </div>
                  ))}
              </div>
              <div className="text-white text-[10px] font-bold leading-tight text-left">
                  <span className="text-[#f29100] block text-sm">4.9/5</span>
                  10k+ Travelers
              </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;