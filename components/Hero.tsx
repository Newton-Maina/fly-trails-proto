import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  // Custom Booking State
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");
  
  const [travelersOpen, setTravelersOpen] = useState(false);
  const [selectedTravelers, setSelectedTravelers] = useState("2 Guests");

  const [dateOpen, setDateOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const heroTexts = [
    { title: "Wilderness", subtitle: "Awaits You." },
    { title: "Nature's", subtitle: "True Rhythm." },
    { title: "Untamed", subtitle: "Beauty Calls." },
    { title: "Your Own", subtitle: "Safari Story." }
  ];

  const destinations = [
    { name: "Masai Mara", country: "Kenya", image: "https://images.unsplash.com/photo-1516422317184-2153b3d169a8?q=80&w=200" },
    { name: "Serengeti", country: "Tanzania", image: "https://images.unsplash.com/photo-1516422317184-2153b3d169a8?q=80&w=200" }, 
    { name: "Okavango", country: "Botswana", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=200" },
    { name: "Kruger", country: "South Africa", image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=200" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Simple Custom Calendar Logic
  const generateCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) days.push(i);
    return days;
  };

  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden rounded-b-[2rem] md:rounded-b-[5rem] shadow-2xl z-40 bg-black">
      
      {/* Mobile Fallback Background (High Quality Image) */}
      <div className="absolute inset-0 z-0 md:hidden">
          <img 
            src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
      </div>

      {/* Desktop Cinematic Video Background - Perfectly Centered & Covering */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        {/* Aspect Ratio Enforcer for Cover */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] min-w-full min-h-full h-[56.25vw]">
            <iframe 
                className="w-full h-full pointer-events-none object-cover"
                src="https://www.youtube.com/embed/jEsrsDVkuVY?autoplay=1&mute=1&controls=0&loop=1&playlist=jEsrsDVkuVY&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&vq=hd1080&start=8" 
                title="Hero Video"
                allow="autoplay; encrypted-media" 
                allowFullScreen
            ></iframe>
        </div>
      </div>

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

        {/* Minimized Trigger Button */}
        <button 
            onClick={() => setIsBookingOpen(true)}
            className={`group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white h-14 md:h-16 px-8 md:px-10 rounded-full flex items-center gap-4 transition-all duration-300 shadow-2xl hover:scale-105 ${isBookingOpen ? 'opacity-0 pointer-events-none translate-y-10' : 'opacity-100 translate-y-0'}`}
        >
            <span className="font-black uppercase tracking-widest text-[10px] md:text-sm">Start Your Journey</span>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#f29100] rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
        </button>

        {/* Premium Expanded Booking Modal */}
        {/* Removing overflow-hidden to allow dropdowns to pop out */}
        <div className={`fixed inset-0 flex items-center justify-center z-[200] transition-all duration-500 px-4 ${isBookingOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/40" onClick={() => setIsBookingOpen(false)}></div>
                
                <div className={`w-full max-w-4xl bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl transform transition-all duration-500 flex flex-col relative ${isBookingOpen ? 'scale-100 translate-y-0' : 'scale-90 translate-y-10'}`}>
                   
                   {/* Modal Header - Rounded corners handling manually since parent doesn't have overflow-hidden */}
                   <div className="flex justify-between items-center p-6 md:p-4 border-b border-slate-100 bg-slate-50/50 rounded-t-[2rem] md:rounded-t-[2.5rem]">
                       <div>
                            <span className="text-[#f29100] text-[10px] font-black uppercase tracking-widest">Plan Your Trip</span>
                            <h3 className="text-xl md:text-3xl font-serif font-black italic text-[#222]">Design Your Escape</h3>
                       </div>
                       <button onClick={() => setIsBookingOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 hover:bg-slate-100 hover:scale-110 transition-all text-slate-500">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                       </button>
                   </div>

                   {/* Modal Body */}
                   <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 bg-white min-h-[100px]">
                       
                       {/* Custom Destination Dropdown */}
                       <div className="relative group/field z-[30]">
                           <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Where To?</label>
                           <button 
                                type="button"
                                onClick={() => { setDestinationOpen(!destinationOpen); setDateOpen(false); setTravelersOpen(false); }}
                                className={`w-full text-left bg-slate-50 border border-slate-200 hover:border-[#f29100] rounded-2xl px-5 py-4 flex items-center justify-between transition-all ${destinationOpen ? 'ring-2 ring-[#f29100]/20 border-[#f29100]' : ''}`}
                           >
                               <span className={`font-bold text-sm ${selectedDestination ? 'text-[#222]' : 'text-slate-400'}`}>
                                   {selectedDestination || "Select Region"}
                               </span>
                               <svg className={`w-4 h-4 text-slate-400 transition-transform ${destinationOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                           </button>

                           {/* Dropdown Menu */}
                           <div className={`absolute top-full left-0 w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] z-50 overflow-hidden transition-all duration-300 origin-top ${destinationOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                               {destinations.map((dest) => (
                                   <div 
                                        key={dest.name} 
                                        onClick={() => { setSelectedDestination(dest.name); setDestinationOpen(false); }}
                                        className="flex items-center gap-3 p-3 hover:bg-slate-50 cursor-pointer transition-colors border-b border-slate-50 last:border-0"
                                   >
                                       <img src={dest.image} alt={dest.name} className="w-10 h-10 rounded-lg object-cover" />
                                       <div>
                                           <p className="text-sm font-bold text-[#222]">{dest.name}</p>
                                           <p className="text-[10px] text-slate-400 uppercase tracking-wider">{dest.country}</p>
                                       </div>
                                   </div>
                               ))}
                           </div>
                       </div>

                       {/* Custom Date Picker */}
                       <div className="relative group/field z-[20]">
                           <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">When?</label>
                           <button 
                                type="button"
                                onClick={() => { setDateOpen(!dateOpen); setDestinationOpen(false); setTravelersOpen(false); }}
                                className={`w-full text-left bg-slate-50 border border-slate-200 hover:border-[#f29100] rounded-2xl px-5 py-4 flex items-center justify-between transition-all ${dateOpen ? 'ring-2 ring-[#f29100]/20 border-[#f29100]' : ''}`}
                           >
                               <span className={`font-bold text-sm ${selectedDate ? 'text-[#222]' : 'text-slate-400'}`}>
                                   {selectedDate || "Select Dates"}
                               </span>
                               <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                           </button>

                           {/* Custom Calendar Dropdown */}
                           <div className={`absolute top-full left-0 w-full md:w-[320px] mt-2 bg-white border border-slate-100 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] z-50 p-5 transition-all duration-300 origin-top ${dateOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                               <div className="flex justify-between items-center mb-4">
                                   <span className="text-sm font-bold text-[#222]">June 2026</span>
                                   <div className="flex gap-2">
                                       <button className="p-1 hover:bg-slate-100 rounded"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg></button>
                                       <button className="p-1 hover:bg-slate-100 rounded"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
                                   </div>
                               </div>
                               <div className="grid grid-cols-7 gap-1 text-center mb-2">
                                   {['S','M','T','W','T','F','S'].map(d => <span key={d} className="text-[10px] text-slate-400 font-bold">{d}</span>)}
                               </div>
                               <div className="grid grid-cols-7 gap-1">
                                   {generateCalendarDays().map(d => (
                                       <button 
                                            key={d} 
                                            onClick={() => { setSelectedDate(`June ${d}`); setDateOpen(false); }}
                                            className="h-8 w-8 rounded-full text-xs font-medium text-slate-600 hover:bg-[#f29100] hover:text-white transition-colors flex items-center justify-center"
                                        >
                                           {d}
                                       </button>
                                   ))}
                               </div>
                           </div>
                       </div>

                       {/* Custom Travelers Dropdown */}
                       <div className="relative group/field z-[10]">
                           <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Who?</label>
                           <button 
                                type="button"
                                onClick={() => { setTravelersOpen(!travelersOpen); setDestinationOpen(false); setDateOpen(false); }}
                                className={`w-full text-left bg-slate-50 border border-slate-200 hover:border-[#f29100] rounded-2xl px-5 py-4 flex items-center justify-between transition-all ${travelersOpen ? 'ring-2 ring-[#f29100]/20 border-[#f29100]' : ''}`}
                           >
                               <span className="font-bold text-sm text-[#222]">{selectedTravelers}</span>
                               <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                           </button>

                           {/* Dropdown Menu */}
                           <div className={`absolute top-full left-0 w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] z-50 overflow-hidden transition-all duration-300 origin-top ${travelersOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                               {['1 Guest', '2 Guests', '4 Guests', 'Family (2+2)', 'Group (5+)'].map(opt => (
                                   <div 
                                        key={opt}
                                        onClick={() => { setSelectedTravelers(opt); setTravelersOpen(false); }}
                                        className="p-3 hover:bg-slate-50 cursor-pointer transition-colors border-b border-slate-50 last:border-0"
                                   >
                                       <p className="text-sm font-bold text-[#222]">{opt}</p>
                                   </div>
                               ))}
                           </div>
                       </div>

                   </div>
                   
                   {/* Modal Footer - Rounded corners handling manual */}
                   <div className="p-6 md:p-6 bg-slate-50 flex justify-end rounded-b-[2rem] md:rounded-b-[2.5rem]">
                       <button className="w-full md:w-auto bg-[#f29100] hover:bg-[#d98200] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
                           Check Availability
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                       </button>
                   </div>

                </div>
        </div>

      </div>
      
      {/* Social Proof */}
      <div className="absolute bottom-8 w-full flex justify-center md:justify-end md:right-12 z-20 opacity-90 pointer-events-none">
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