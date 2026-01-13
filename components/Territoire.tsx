import React from 'react';

const Territoire: React.FC = () => {
  return (
    <section className="relative py-44 bg-slate-900 overflow-hidden px-10 md:px-24">
      {/* Image Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale opacity-60"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop")' }}
      ></div>
      
      {/* White fade at top matching the image */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent"></div>
      
      <div className="max-w-[1500px] mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-24">
        {/* Left text column */}
        <div className="lg:w-1/2 text-white">
          <h2 className="text-8xl font-serif font-black italic mb-14 drop-shadow-lg">Le territoire</h2>
          <div className="space-y-8 mb-16 opacity-95 max-w-xl">
            <p className="text-[15px] leading-loose">
              Petite commune nichée au pied de la montagne ariégeoise, Leychert séduit par son authenticité, son calme et son cadre naturel préservé.
            </p>
            <p className="text-[15px] leading-loose">
              Grâce à sa carte interactive, explorez les lieux emblématiques du village : mairie, salle des fêtes, sentiers de randonnée, patrimoine local, mais aussi les services utiles au quotidien.
            </p>
            <p className="text-[15px] italic opacity-80">Une façon simple et visuelle de mieux connaître Leychert et son environnement.</p>
          </div>
          <button className="bg-[#e11d48] text-white px-10 py-4 rounded-full text-[13px] font-extrabold uppercase tracking-widest shadow-2xl transition-all hover:bg-red-700">
            VOIR LA CARTE INTERACTIVE
          </button>
        </div>

        {/* Right Map graphic */}
        <div className="lg:w-1/2 relative group">
          <div className="relative w-full max-w-3xl mx-auto aspect-square flex items-center justify-center">
            {/* Precise Silhouette Map Blob */}
            <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <path 
                d="M140,140 Q200,60 350,90 Q440,120 460,260 Q430,420 310,450 Q130,440 100,280 Q80,180 140,140" 
                fill="#0c3154" 
                stroke="white" 
                strokeWidth="4"
              />
              
              {/* Markers and Pins */}
              <circle cx="310" cy="245" r="14" fill="#e11d48" stroke="white" strokeWidth="2" />
              <path d="M305,245 L310,240 L315,245 Z" fill="white" /> {/* small house icon mockup */}
              
              <g transform="translate(260, 280)">
                 <rect width="40" height="20" rx="2" fill="#f29100" />
                 <text x="8" y="14" fill="white" className="text-[10px] font-bold">D709</text>
              </g>

              <g transform="translate(380, 260)">
                 <rect width="35" height="20" rx="2" fill="#f29100" />
                 <text x="8" y="14" fill="white" className="text-[10px] font-bold">D9A</text>
              </g>

              <g transform="translate(340, 360)">
                 <rect width="40" height="20" rx="2" fill="#f29100" />
                 <text x="8" y="14" fill="white" className="text-[10px] font-bold">D117</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Territoire;