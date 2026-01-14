import React from 'react';
import { footerData } from '../data/footer';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fdf8f0] mt-0.5 pt-24 md:pt-32 border-t-[12px] border-[#f29100] section-overlap rounded-t-[3rem] md:rounded-t-[5rem] shadow-overlap relative z-20">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <img src="/flytrails-logo.png" alt="Fly Trails Logo" className="w-48 h-24 object-contain drop-shadow-md" />
            </div>
            <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xs">
              {footerData.about}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">CONTACT</h5>
            <div className="flex flex-col gap-3">
              <a href={`tel:${footerData.contact.phone.replace(/\s/g, '')}`} className="text-[#222] font-black text-[14px] flex items-center gap-3 transition-colors hover:text-[#f29100]">
                <span>{footerData.contact.phone}</span>
              </a>
              <p className="text-[13px] text-slate-600 font-bold">
                {footerData.contact.address}
              </p>
            </div>
          </div>

          <div>
            <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">SUPPORT</h5>
            <div className="text-[13px] text-slate-600 font-bold space-y-2">
              {footerData.support.map((item, i) => (
                  <p key={i}>{item.label}: <span className="text-[#222]">{item.time}</span></p>
              ))}
            </div>
          </div>

          <div className="relative order-first md:order-last">
             <img 
               src={footerData.explore.image} 
               alt={`${footerData.explore.region} Preview`} 
               className="w-full max-w-[280px] md:max-w-[320px] -mt-48 md:-mt-64 shadow-2xl rounded-xl border-4 border-white transform rotate-2 relative z-30 hover:scale-105 transition-transform duration-500"
             />
             <div className="text-center mt-4 relative z-30">
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{footerData.explore.label}</p>
               <p className="text-xl font-black italic uppercase text-[#f29100]">{footerData.explore.region}</p>
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] gap-6">
           <div>&copy; {new Date().getFullYear()} Fly Trails Travels.</div>
           <div className="flex gap-8">
             {footerData.links.map((link, i) => (
                 <a key={i} href={link.href} className="hover:text-[#222]">{link.label}</a>
             ))}
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;