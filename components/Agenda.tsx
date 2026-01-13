import React from 'react';

const Agenda: React.FC = () => {
  return (
    <section className="py-32 bg-white px-10 md:px-24 relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-16 gap-16">
          {/* Left info */}
          <div className="lg:w-1/4">
            <h2 className="text-7xl font-serif font-black italic text-[#222] mb-12">Agenda</h2>
            <div className="space-y-6 mb-12">
              <p className="text-[#666] text-sm leading-relaxed">
                Tout au long de l'année, Leychert s'anime au rythme de ses événements : fêtes locales, balades, ateliers ou rencontres conviviales...
              </p>
              <p className="text-[#666] text-sm">Retrouvez ici les prochaines dates à noter dans votre agenda.</p>
            </div>
            <button className="bg-[#0c3154] text-white px-10 py-3.5 rounded-full text-[12px] font-bold uppercase tracking-widest shadow-lg">
              TOUS LES ÉVÉNEMENTS
            </button>
          </div>
          
          {/* Right Carousel Mockup */}
          <div className="lg:w-3/4 flex gap-8 overflow-x-auto hide-scrollbar pb-10 relative">
            {/* Top Right Arrows */}
            <div className="absolute top-0 right-0 z-20 flex gap-3">
              <button className="w-10 h-10 rounded-full bg-[#0c3154] text-white flex items-center justify-center shadow-lg hover:bg-slate-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-[#0c3154] text-white flex items-center justify-center shadow-lg hover:bg-slate-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>

            <div className="flex-shrink-0 w-[420px] group pt-10">
              <div className="relative h-64 overflow-hidden rounded-sm shadow-xl mb-6">
                <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop" alt="Party" className="w-full h-full object-cover" />
                <div className="absolute bottom-[-15px] left-10 bg-[#f29100] text-white text-[11px] font-black px-5 py-2 rounded-sm shadow-lg whitespace-nowrap">
                  Dimanche 25 mai 2025
                </div>
              </div>
              <div className="pl-4 pt-4">
                <h4 className="text-2xl font-black text-[#222] mb-3">Fête du village - Édition 2025</h4>
                <p className="text-[#666] text-sm leading-relaxed mb-6">Repas champêtre, concert, bal en plein air et feu d'artifice pour célébrer l'été ensemble.</p>
                <a href="#" className="flex items-center gap-2 text-[#222] font-bold text-[12px] uppercase">
                   <span className="w-5 h-5 rounded-full bg-[#f29100] flex items-center justify-center text-white text-[10px]">➔</span>
                   Lire la suite
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 w-[420px] group pt-10">
              <div className="relative h-64 overflow-hidden rounded-sm shadow-xl mb-6">
                <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop" alt="Hiking" className="w-full h-full object-cover" />
                <div className="absolute bottom-[-15px] left-10 bg-[#f29100] text-white text-[11px] font-black px-5 py-2 rounded-sm shadow-lg whitespace-nowrap">
                  Dimanche 15 juin 2025
                </div>
              </div>
              <div className="pl-4 pt-4">
                <h4 className="text-2xl font-black text-[#222] mb-3">Randonnée découverte</h4>
                <p className="text-[#666] text-sm leading-relaxed mb-6">Sortie accompagnée par un guide local, accessible à tous. Prévoir de bonnes ..</p>
                <a href="#" className="flex items-center gap-2 text-[#222] font-bold text-[12px] uppercase">
                   <span className="w-5 h-5 rounded-full bg-[#f29100] flex items-center justify-center text-white text-[10px]">➔</span>
                   Lire la suite
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Blob Top Right */}
      <div className="bg-blob w-[300px] h-[300px] -top-20 -right-20"></div>
    </section>
  );
};

export default Agenda;