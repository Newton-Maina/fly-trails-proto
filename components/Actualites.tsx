import React from 'react';

const Actualites: React.FC = () => {
  return (
    <section className="py-24 bg-white px-10 md:px-24 relative overflow-hidden">
      {/* Background Blob Top Left */}
      <div className="bg-blob w-[400px] h-[400px] -top-20 -left-20"></div>

      <div className="max-w-[1500px] mx-auto">
        <div className="flex items-center gap-10 mb-20">
          <h2 className="text-7xl font-serif font-black italic text-[#222]">Actualités</h2>
          <button className="bg-[#0c3154] text-white px-8 py-3 rounded-full text-[12px] font-bold uppercase tracking-widest shadow-md">
            TOUTE L'ACTUALITÉ
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Main Card with Overlap */}
          <div className="relative">
            <div className="overflow-hidden rounded-sm h-[500px] shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop" 
                alt="Forest path" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlapping content card */}
            <div className="absolute -bottom-10 -left-4 bg-white p-10 shadow-2xl rounded-sm max-w-[95%]">
              <span className="inline-block bg-[#e11d48] text-white text-[10px] font-extrabold px-3 py-1 rounded-sm uppercase tracking-widest mb-4">
                Publié le 3 mai 2025
              </span>
              <h3 className="text-2xl font-black text-[#222] mb-3 leading-tight">Un nouveau sentier balisé au départ de Leychert</h3>
              <p className="text-[#666] text-sm leading-relaxed mb-6">Le circuit "Sur les hauteurs de Leychert" est désormais accessible aux promeneurs. Ce nouveau sentier de 6 km ...</p>
              <a href="#" className="flex items-center gap-2 text-[#222] font-bold text-[12px] uppercase group">
                 <span className="w-5 h-5 rounded-full bg-[#e11d48] flex items-center justify-center text-white text-[10px]">➔</span>
                 Lire la suite
              </a>
            </div>
          </div>

          {/* List side */}
          <div className="flex flex-col gap-12 lg:pt-0 pt-20">
            {[
              { date: '6 mai 2025', title: 'Travaux sur la voirie communale', desc: 'Des travaux de réfection auront lieu chemin du Moulin à partir du 13 mai. Merci de respecter les déviations mises en place.' },
              { date: '3 mai 2025', title: 'Soirée contes à la salle des fêtes', desc: 'Petits et grands sont attendus vendredi 17 mai à 20h pour une soirée contée autour des légendes de l\'Ariège.' },
              { date: '24 avril 2025', title: 'Distribution de composteurs', desc: 'La communauté de communes organise une distribution gratuite de composteurs pour les habitants de Leychert. Inscription en mairie ..' }
            ].map((news, i) => (
              <div key={i} className="relative group cursor-pointer">
                <div className="flex items-center gap-4 mb-3">
                   <span className="inline-block bg-[#e11d48] text-white text-[10px] font-extrabold px-3 py-1 rounded-sm uppercase tracking-widest">
                    Publié le {news.date}
                   </span>
                   <div className="flex-1 h-px bg-slate-200"></div>
                </div>
                <h4 className="text-xl font-black text-[#222] mb-2">{news.title}</h4>
                <p className="text-[#666] text-sm leading-relaxed mb-4">{news.desc}</p>
                <a href="#" className="flex items-center gap-2 text-[#222] font-bold text-[12px] uppercase">
                   <span className="w-5 h-5 rounded-full bg-[#e11d48] flex items-center justify-center text-white text-[10px]">➔</span>
                   Lire la suite
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Blob Bottom Right */}
      <div className="bg-blob w-[500px] h-[500px] -bottom-40 -right-20"></div>
    </section>
  );
};

export default Actualites;