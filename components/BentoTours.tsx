import React from 'react';

const tours = [
  { 
    id: '1', 
    title: "Great Migration", 
    price: "$3,400", 
    duration: "7 Days", 
    category: "Kenya", 
    imageUrl: "/great-migration.jpg", 
    // Row 1: Spans 2 cols
    size: 'md:col-span-2',
    excerpt: "Witness millions of wildebeest crossing the Mara River in the world's greatest wildlife spectacle."
  },
  { 
    id: '2', 
    title: "Pyramids of Giza", 
    price: "$2,100", 
    duration: "5 Days", 
    category: "Egypt", 
    imageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=2070&auto=format&fit=crop", 
    // Row 1: 1 col
    size: 'col-span-1',
    excerpt: "Stand before the Sphinx and explore ancient tombs in the land of the Pharaohs."
  },
  { 
    id: '3', 
    title: "Victoria Falls", 
    price: "$1,800", 
    duration: "4 Days", 
    category: "Zambia", 
    imageUrl: "/victoria-falls.jpg", 
    // Row 1: 1 col
    size: 'col-span-1',
    excerpt: "Feel the spray of 'The Smoke that Thunders' on a thrilling adventure tour."
  },
  { 
    id: '4', 
    title: "Diani Beach Retreat", 
    price: "$1,200", 
    duration: "5 Days", 
    category: "Kenya", 
    imageUrl: "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?q=80&w=2066&auto=format&fit=crop", 
    // Row 2: 1 col
    size: 'col-span-1',
    excerpt: "Relax on pristine white sands and swim in the turquoise waters of the Indian Ocean."
  },
  { 
    id: '5', 
    title: "Kilimanjaro Trek", 
    price: "$2,900", 
    duration: "8 Days", 
    category: "Tanzania", 
    imageUrl: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=2070&auto=format&fit=crop", 
    // Row 2: 2 cols
    size: 'md:col-span-2',
    excerpt: "Conquer the 'Roof of Africa' on the Machame Route for breathtaking summit views."
  },
  { 
    id: '6', 
    title: "Okavango Delta", 
    price: "$3,800", 
    duration: "6 Days", 
    category: "Botswana", 
    imageUrl: "/okavango-delta.jpg", 
    // Row 2: 1 col
    size: 'col-span-1',
    excerpt: "Navigate the waterways in a mokoro and see wildlife in a lush oasis."
  }
];

const BentoTours: React.FC = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-24 relative overflow-hidden section-overlap rounded-t-[3rem] md:rounded-t-[5rem] shadow-overlap z-20">
      {/* Background Decor SVGs */}
      <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] bg-[#fdf5e6] rounded-full filter blur-[80px] -z-10 opacity-70 parallax-layer" data-speed="0.15"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] bg-[#fdf5e6] rounded-full filter blur-[100px] -z-10 opacity-50 parallax-layer" data-speed="0.2"></div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03] -z-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f29100' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16 reveal-right">
          <h2 className="text-5xl md:text-7xl font-serif font-black italic text-[#222]">Featured Safaris</h2>
          <button className="bg-[#0c3154] text-white px-10 py-4 rounded-full text-[13px] font-black uppercase tracking-widest shadow-xl transition-transform hover:scale-105">
            VIEW ALL TOURS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {tours.map((tour, i) => (
            <div 
              key={tour.id} 
              className={`relative group cursor-pointer overflow-hidden rounded-sm shadow-xl ${tour.size} h-[320px] reveal-up`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img 
                src={tour.imageUrl} 
                alt={tour.title} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute top-5 left-5">
                 <span className="inline-block bg-[#e11d48] text-white text-[9px] font-black px-3 py-1 rounded-sm uppercase tracking-widest shadow-md">
                  {tour.category}
                 </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-black mb-2 leading-tight group-hover:text-[#f29100] transition-colors">{tour.title}</h3>
                <p className="text-white/70 text-[13px] mb-4 leading-relaxed line-clamp-2 font-medium">
                  {tour.excerpt}
                </p>
                <div className="flex justify-between items-center border-t border-white/20 pt-3">
                  <span className="text-white/90 text-[10px] font-black uppercase tracking-wider">{tour.duration} <span className="mx-1 opacity-30">|</span> <span className="text-[#f29100]">{tour.price}</span></span>
                  <div className="flex items-center gap-2 group/btn">
                    <span className="text-white font-black text-[10px] uppercase tracking-widest group-hover/btn:text-[#f29100] transition-colors">Discover</span>
                    <span className="w-5 h-5 rounded-full border-[1.5px] border-white flex items-center justify-center text-[9px] text-white group-hover/btn:border-[#f29100] group-hover/btn:text-[#f29100] transition-all group-hover/btn:translate-x-1">➔</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoTours;