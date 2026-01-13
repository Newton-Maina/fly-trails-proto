import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-[100] px-8 py-10 md:px-20 pointer-events-none">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center">
               <div className="bg-[#f29100] w-12 h-12 flex flex-col items-center justify-center text-white relative shadow-xl">
                  {/* Abstract Wing/Trail Icon */}
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 2L2 8l10 4 4 10 6-20z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
               </div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-black italic leading-none tracking-tighter uppercase whitespace-nowrap">Fly Trails</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-90 mt-0.5 text-[#f29100]">flytrailstravels.com</div>
            </div>
          </div>
        </div>

        {/* Desktop Sticky Nav Container */}
        <div className={`hidden lg:block transition-all duration-500 ease-in-out z-[100] ${scrolled ? 'fixed top-0 right-0 h-20 w-[65%]' : 'absolute top-0 right-0 h-24 w-[65%]'}`}>
            {/* SVG Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0 0 C 15 0, 20 100, 35 100 L 100 100 L 100 0 Z" fill="#ffffff" className="drop-shadow-lg"/>
              </svg>
            </div>

            {/* Links */}
            <nav className="relative h-full flex items-center justify-end pr-12 md:pr-24 gap-8 md:gap-12 pointer-events-auto">
              {["SAFARIS", "DESTINATIONS", "OUR STORY", "JOURNAL"].map((item) => (
                <a key={item} href="#" className="text-slate-900 text-[11px] md:text-[13px] font-bold uppercase tracking-widest hover:text-[#f29100] transition-colors">
                  {item}
                </a>
              ))}
            </nav>
        </div>
      </header>

      {/* Mobile Menu Toggle (Minimal Floating Button) */}
      <button 
        className="lg:hidden fixed top-6 right-6 z-[120] bg-white text-[#222] px-5 py-3 rounded-full shadow-xl flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 pointer-events-auto border border-slate-100"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{mobileOpen ? 'CLOSE' : 'MENU'}</span>
        <div className="flex flex-col gap-[5px]">
            <span className={`w-6 h-[2px] bg-[#222] transition-all ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`w-6 h-[2px] bg-[#222] transition-all ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-[2px] bg-[#222] transition-all ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu Overlay (Refined Editorial Design) */}
      <div className={`fixed inset-0 z-[115] bg-white transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${mobileOpen ? 'translate-y-0' : '-translate-y-full'}`}>
         
         {/* Background Decor */}
         <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-[#fdf5e6] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-60"></div>
         <div className="absolute bottom-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}></div>

         <div className="h-full flex flex-col p-8 pt-32 pb-12 relative z-10">
            <div className="flex-1 flex flex-col md:flex-row gap-12 md:gap-24">
                {/* Main Nav */}
                <nav className="flex flex-col gap-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Navigation</p>
                    {["SAFARIS", "DESTINATIONS", "OUR STORY", "JOURNAL"].map((item, i) => (
                      <div key={item} className="overflow-hidden">
                          <a 
                            href="#" 
                            className={`block text-[#222] text-4xl font-serif font-black italic tracking-tighter hover:text-[#f29100] transition-colors transform ${mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                            style={{ transitionDelay: `${200 + i * 100}ms`, transitionDuration: '0.8s' }}
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())}
                          </a>
                      </div>
                    ))}
                </nav>

                {/* Featured Block */}
                <div className={`hidden md:block flex-1 bg-[#fdf8f0] rounded-2xl p-8 transition-all duration-1000 delay-500 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <img 
                      src="https://images.unsplash.com/photo-1516422317184-2153b3d169a8?q=80&w=2070&auto=format&fit=crop" 
                      className="w-full h-48 object-cover rounded-xl mb-6 shadow-lg" 
                      alt="Featured"
                    />
                    <p className="text-[#f29100] text-[10px] font-black uppercase tracking-widest mb-2">Editor's Pick</p>
                    <h4 className="text-2xl font-serif font-black italic text-[#222] mb-4">Okavango Delta Oasis</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">Discover the untamed beauty of Botswana's waterways in our latest expedition guide.</p>
                    <button className="text-[11px] font-black uppercase tracking-widest border-b-2 border-[#f29100] pb-1 hover:text-[#f29100] transition-colors">Read Story</button>
                </div>
            </div>

            <div className={`mt-auto flex flex-col gap-10 transition-all duration-1000 delay-700 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               <div className="w-full h-px bg-slate-100"></div>
               
               <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                   <div className="space-y-2">
                       <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Collaborate with us</p>
                       <p className="text-xl font-medium text-[#222]">hello@flytrailstravels.com</p>
                       <p className="text-lg font-medium text-slate-400">+254 700 000 000</p>
                   </div>
                   
                   <div className="flex flex-col gap-4">
                       <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 md:text-right">Social Presence</p>
                       <div className="flex gap-4">
                           {['Instagram', 'Twitter', 'Facebook'].map((social) => (
                               <a key={social} href="#" className="text-[12px] font-bold text-[#222] hover:text-[#f29100] transition-colors border border-slate-200 px-4 py-2 rounded-full">
                                   {social}
                               </a>
                           ))}
                       </div>
                   </div>
               </div>
            </div>
         </div>
      </div>
    </>
  );
};

export default Header;