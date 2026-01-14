import React, { useState } from 'react';

const menuItems = {
  "SAFARIS": {
    featured: {
      title: "The Great Migration",
      image: "/great-migration.jpg",
      desc: "Witness the rhythm of nature. Bespoke expeditions."
    },
    links: [
      "Masai Mara, Kenya",
      "Serengeti, Tanzania",
      "Amboseli National Park",
      "Ngorongoro Crater",
      "Samburu Reserve",
      "Kruger National Park",
      "Okavango Delta"
    ]
  },
  "DESTINATIONS": {
    featured: {
      title: "Beyond Boundaries",
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070",
      desc: "From Kilimanjaro to Zanzibar's white sands."
    },
    links: [
      "Kenya",
      "Tanzania",
      "Uganda",
      "Rwanda",
      "South Africa",
      "Botswana",
      "Egypt",
      "Namibia"
    ]
  },
  "OUR STORY": {
    featured: {
      title: "Heritage & Passion",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
      desc: "Born from a love for the land and preservation."
    },
    links: [
      "Our Heritage",
      "Sustainability",
      "The Team",
      "Conservation Efforts",
      "Partner Lodges",
      "Careers"
    ]
  },
  "JOURNAL": {
    featured: {
      title: "Travel Logs",
      image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1887",
      desc: "Expert insights, photography tips, and tales."
    },
    links: [
      "Safari Guides",
      "Photography Tips",
      "Cultural Insights",
      "Wildlife Diaries",
      "Travel News",
      "Guest Stories"
    ]
  }
};

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopNavOpen, setDesktopNavOpen] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (item: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 300); // 300ms delay to allow moving to submenu
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-[100] px-8 py-10 md:px-20 pointer-events-none">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center">
               <img src="/flytrails-logo.png" alt="Fly Trails Logo" className="w-48 h-24 object-contain drop-shadow-lg" />
            </div>

          </div>
        </div>

        {/* Desktop Sticky Nav Container */}
        <div 
            className={`hidden lg:block fixed top-0 right-0 h-20 w-[65%] transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] z-[100] ${desktopNavOpen ? 'translate-x-0 opacity-100' : 'translate-x-[20%] opacity-0 pointer-events-none'}`}
        >
            {/* SVG Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none filter drop-shadow-sm">
              <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0 0 C 15 0, 20 100, 35 100 L 100 100 L 100 0 Z" fill="#ffffff" />
              </svg>
            </div>

            {/* Links */}
            <nav className="relative h-full flex items-center justify-end pr-12 md:pr-24 gap-8 md:gap-12 pointer-events-auto">
              {Object.keys(menuItems).map((item) => (
                <div key={item} className="relative group" 
                     onMouseEnter={() => handleMouseEnter(item)}
                     onMouseLeave={handleMouseLeave}>
                    <a href="#" className="text-slate-900 text-[11px] md:text-[13px] font-bold uppercase tracking-widest hover:text-[#f29100] transition-colors py-6">
                    {item}
                    </a>
                    <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[#f29100] transition-transform duration-300 origin-left ${hoveredItem === item ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </div>
              ))}
              
              {/* Close Button (X) */}
              <button 
                onClick={() => setDesktopNavOpen(false)}
                className="ml-4 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-[#e11d48]"
                title="Hide Menu"
              >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </nav>
        </div>

        {/* Mega Menu Dropdown (Moved outside the restricted container for full screen positioning) */}
        <div 
            className={`hidden lg:block fixed top-28 right-3 w-[55vw] bg-white/98 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[2.5rem] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] border border-white/50 ring-1 ring-black/5 z-[90] ${hoveredItem && desktopNavOpen ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 translate-y-4 invisible pointer-events-none'}`}
            onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
            onMouseLeave={handleMouseLeave}
        >
            {hoveredItem && menuItems[hoveredItem as keyof typeof menuItems] && (
                <div className="flex w-full min-h-[400px]">
                    
                    {/* Left Column: Navigation & Categories */}
                    <div className="flex-[3] p-12 bg-gradient-to-br from-white to-slate-50/50">
                        <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-100">
                            <span className="text-[#f29100] text-[10px] font-black uppercase tracking-[0.3em]">{hoveredItem} Collections</span>
                            <span className="h-px flex-1 bg-slate-100"></span>
                        </div>
                        
                        <ul className="grid grid-cols-2 gap-x-12 gap-y-3">
                            {menuItems[hoveredItem as keyof typeof menuItems].links.map((link, idx) => (
                                <li key={idx} className="group/item">
                                    <a href="#" className="flex items-center justify-between py-2 group-hover/item:translate-x-2 transition-transform duration-300">
                                        <span className="text-slate-600 font-bold text-sm group-hover/item:text-[#222] transition-colors">{link}</span>
                                        <svg className="w-4 h-4 text-[#f29100] opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-10">
                            <a href="#" className="inline-block text-[11px] font-black uppercase tracking-widest text-[#222] border-b-2 border-slate-200 pb-1 hover:border-[#f29100] hover:text-[#f29100] transition-colors">
                                Browse All {hoveredItem.toLowerCase().replace(/^\w/, c => c.toUpperCase())}
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Editorial Featured Card */}
                    <div className="flex-[2] relative group/card cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/10 transition-colors z-10"></div>
                        <img 
                            src={menuItems[hoveredItem as keyof typeof menuItems].featured.image} 
                            alt={menuItems[hoveredItem as keyof typeof menuItems].featured.title} 
                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover/card:scale-105"
                        />
                        
                        {/* Glass Content Overlay */}
                        <div className="absolute inset-x-6 bottom-6 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl z-20 shadow-lg transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-2 h-2 rounded-full bg-[#f29100]"></span>
                                <span className="text-white/80 text-[9px] font-black uppercase tracking-widest">Editor's Pick</span>
                            </div>
                            <h4 className="text-white text-2xl font-serif font-black italic mb-2 leading-tight">{menuItems[hoveredItem as keyof typeof menuItems].featured.title}</h4>
                            <p className="text-white/80 text-xs font-medium leading-relaxed line-clamp-2">{menuItems[hoveredItem as keyof typeof menuItems].featured.desc}</p>
                        </div>
                    </div>

                </div>
            )}
        </div>

        {/* Desktop Re-Open Button (Visible when closed) */}
        <button 
            className={`hidden lg:flex fixed top-8 right-12 z-[200] bg-white text-[#222] px-6 py-3 rounded-full shadow-xl items-center gap-3 transition-all duration-500 pointer-events-auto border border-slate-100 group ${!desktopNavOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0 pointer-events-none'}`}
            onClick={() => setDesktopNavOpen(true)}
        >
             <span className="text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-[#f29100] transition-colors">MENU</span>
             <div className="flex flex-col gap-[5px]">
                <span className="w-6 h-[2px] bg-[#222]"></span>
                <span className="w-6 h-[2px] bg-[#222]"></span>
             </div>
        </button>

      </header>

      {/* Mobile Menu Toggle (Minimal Floating Button - Same as Original) */}
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

      {/* Mobile Menu Overlay (Restored Original) */}
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
                      src="/okavango-delta.jpg" 
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