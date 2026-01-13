import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fdf8f0] mt-0.5 pt-24 md:pt-32 border-t-[12px] border-[#f29100] section-overlap rounded-t-[3rem] md:rounded-t-[5rem] shadow-overlap relative z-20">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="bg-white p-2 rounded shadow-lg border border-slate-100">
                 <div className="bg-[#f29100] w-10 h-10 flex items-center justify-center text-white text-xl font-black">F</div>
              </div>
              <div>
                <div className="text-[10px] font-black leading-none tracking-[0.25em] uppercase text-slate-400">Premium</div>
                <div className="text-2xl font-black italic leading-none uppercase tracking-tighter text-[#222] mt-1">Fly Trails</div>
              </div>
            </div>
            <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xs">
              Crafting authentic African journeys for the modern explorer since 2012. 
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">CONTACT</h5>
            <div className="flex flex-col gap-3">
              <a href="tel:+254700000000" className="text-[#222] font-black text-[14px] flex items-center gap-3 transition-colors hover:text-[#f29100]">
                <span>+254 700 000 000</span>
              </a>
              <p className="text-[13px] text-slate-600 font-bold">
                Westlands, Nairobi, Kenya
              </p>
            </div>
          </div>

          <div>
            <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">SUPPORT</h5>
            <div className="text-[13px] text-slate-600 font-bold space-y-2">
              <p>Mon-Fri: <span className="text-[#222]">08:00 - 18:00</span></p>
              <p>Weekends: <span className="text-[#222]">09:00 - 13:00</span></p>
            </div>
          </div>

          <div className="relative order-first md:order-last">
             <img 
               src="/kenya-preview.png" 
               alt="Kenya Preview" 
               className="w-full max-w-[280px] md:max-w-[320px] -mt-48 md:-mt-64 shadow-2xl rounded-xl border-4 border-white transform rotate-2 relative z-30 hover:scale-105 transition-transform duration-500"
             />
             <div className="text-center mt-4 relative z-30">
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Explore</p>
               <p className="text-xl font-black italic uppercase text-[#f29100]">Kenya</p>
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] gap-6">
           <div>&copy; 2025 Fly Trails Travels.</div>
           <div className="flex gap-8">
             <a href="#" className="hover:text-[#222]">Privacy</a>
             <a href="#" className="hover:text-[#222]">Terms</a>
             <a href="#" className="hover:text-[#222]">Contact</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;