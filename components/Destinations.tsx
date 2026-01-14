import React, { useRef } from 'react';

const destinations = [
  {
    id: '1',
    name: "Coastal Kenya",
    region: "East Africa",
    imageUrl: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2070",
    desc: "Explore historic Swahili towns like Lamu and relax on the pristine white sands of Watamu."
  },
  {
    id: '2',
    name: "Serengeti Plains",
    region: "Tanzania",
    imageUrl: "https://images.unsplash.com/photo-1535025639604-9a804c092faa?q=80&w=2070&auto=format&fit=crop",
    desc: "Endless horizons and the Big Five await in the world's most famous wildlife sanctuary."
  },
  {
    id: '3',
    name: "Nile River Valley",
    region: "Egypt",
    imageUrl: "/nile-river.jpg",
    desc: "Cruise through history from Luxor to Aswan, witnessing temples that have stood for millennia."
  },
  {
    id: '4',
    name: "Victoria Falls",
    region: "Zambia/Zimbabwe",
    imageUrl: "/victoria-falls.jpg",
    desc: "The Smoke that Thunders. Experience the raw power of the world's largest sheet of falling water."
  }
];

const Destinations: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 mt-0.5 bg-white px-6 md:px-20 relative overflow-hidden section-overlap rounded-t-[3rem] md:rounded-t-[5rem] shadow-overlap z-20">
      {/* Background decor */}
      <div className="absolute top-[-50px] right-[-100px] w-[400px] h-[400px] bg-[#fdf5e6] rounded-full blur-[60px] opacity-60 pointer-events-none parallax-layer" data-speed="0.2"></div>

      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-16 gap-12 lg:gap-16 relative">
          
          {/* Left Column Text */}
          <div className="lg:w-1/3 reveal z-10">
            <h2 className="text-5xl md:text-7xl font-serif font-black italic text-[#222] mb-10 leading-tight">Popular Regions</h2>
            <div className="space-y-6 mb-12">
              <p className="text-[#666] text-[16px] leading-[1.8] font-medium">
                From the coral reefs of the Indian Ocean to the dunes of the Sahara, explore the diverse landscapes of Africa.
              </p>
              <p className="text-[#666] text-[16px] italic font-semibold border-l-4 border-[#f29100] pl-6">Curated routes for the ultimate African adventure.</p>
            </div>
            <button className="bg-[#0c3154] text-white px-10 py-4 rounded-full text-[13px] font-black uppercase tracking-[0.25em] hover:bg-slate-700 transition-all shadow-xl">
              SEE ALL REGIONS
            </button>
          </div>
          
          {/* Right Column Container */}
          <div className="lg:w-2/3 relative reveal-left" style={{ transitionDelay: '200ms' }}>
            
            {/* Header / Nav Controls */}
            <div className="flex justify-end mb-8 pr-2">
                <div className="flex gap-4">
                <button 
                    onClick={() => scroll(-400)}
                    className="w-14 h-14 rounded-full bg-white border border-slate-100 text-[#0c3154] flex items-center justify-center hover:bg-[#0c3154] hover:text-white transition-all shadow-xl group z-30"
                    aria-label="Scroll Left"
                >
                    <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button 
                    onClick={() => scroll(400)}
                    className="w-14 h-14 rounded-full bg-[#0c3154] text-white flex items-center justify-center hover:bg-slate-700 transition-all shadow-xl group z-30"
                    aria-label="Scroll Right"
                >
                    <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                </button>
                </div>
            </div>

            {/* Scrollable Container */}
            <div ref={scrollContainerRef} className="flex gap-8 overflow-x-auto hide-scrollbar pb-20 snap-x pl-2">
                {destinations.map((dest) => (
                <div key={dest.id} className="flex-shrink-0 w-[300px] md:w-[400px] group cursor-pointer snap-start">
                    <div className="relative mb-10">
                    {/* Image Container */}
                    <div className="h-56 md:h-64 overflow-hidden rounded-sm shadow-2xl relative z-0">
                        <img src={dest.imageUrl} alt={dest.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    
                    {/* Hanging Label */}
                    <div className="absolute -bottom-5 left-8 z-10 bg-[#f29100] text-white text-[11px] font-black px-6 py-3 rounded-sm whitespace-nowrap shadow-xl border-b-[3px] border-[#c27500] tracking-widest uppercase">
                        {dest.region}
                    </div>
                    </div>
                    
                    <div className="pt-2 pl-4 pr-4">
                    <h4 className="text-3xl font-black text-[#222] mb-3 leading-tight group-hover:text-[#f29100] transition-colors">{dest.name}</h4>
                    <p className="text-[#666] text-[15px] leading-relaxed mb-6 line-clamp-2 font-medium">{dest.desc}</p>
                    <a href="#" className="flex items-center gap-4 text-[#f29100] font-black text-[12px] uppercase tracking-widest group/link">
                        <span className="w-8 h-8 rounded-full border-[2px] border-[#f29100] flex items-center justify-center text-[10px] leading-none transition-all group-hover/link:bg-[#f29100] group-hover/link:text-white">➔</span>
                        Explore
                    </a>
                    </div>
                </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;