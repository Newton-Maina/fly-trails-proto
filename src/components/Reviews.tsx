import React, { useState, useEffect, useRef } from 'react';
import { testimonials } from '../data/testimonials';

const Reviews: React.FC = () => {
  // We track two visible indices
  const [activeIndices, setActiveIndices] = useState([0, 1]);
  // We track fade state for each slot individually (true = visible, false = hidden)
  const [isVisible, setIsVisible] = useState([true, true]);
  
  // Ref to keep track of the next testimonial to show from the pool
  const nextPoolIndex = useRef(2);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const animateCycle = async () => {
      // Loop forever while mounted
      while (isMounted.current) {
        // --- Cycle for First Slot (Top) ---
        await wait(4000); // Stay visible for a bit
        if (!isMounted.current) break;

        // Fade out top
        setIsVisible(prev => [false, prev[1]]); 
        await wait(1000); // Wait for fade out
        if (!isMounted.current) break;

        // Swap Content
        setActiveIndices(prev => {
           const next = [...prev];
           next[0] = nextPoolIndex.current;
           return next;
        });
        nextPoolIndex.current = (nextPoolIndex.current + 1) % testimonials.length;

        // Fade in top (slightly delayed to ensure DOM update)
        await wait(50); 
        if (!isMounted.current) break;
        setIsVisible(prev => [true, prev[1]]);

        // --- Cycle for Second Slot (Bottom) ---
        await wait(4000); // Stay visible for a bit
        if (!isMounted.current) break;

        // Fade out bottom
        setIsVisible(prev => [prev[0], false]);
        await wait(1000); // Wait for fade out
        if (!isMounted.current) break;

        // Swap Content
        setActiveIndices(prev => {
           const next = [...prev];
           next[1] = nextPoolIndex.current;
           return next;
        });
        nextPoolIndex.current = (nextPoolIndex.current + 1) % testimonials.length;

        // Fade in bottom
        await wait(50);
        if (!isMounted.current) break;
        setIsVisible(prev => [prev[0], true]);
      }
    };

    animateCycle();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <section className="relative mt-0.5 py-40 bg-[#0f172a] overflow-hidden px-6 md:px-24 section-overlap rounded-t-[3rem] md:rounded-t-[5rem] shadow-overlap z-20">
      {/* Static Background Image */}
      <div 
        className="absolute inset-0 bg-fixed-layer opacity-40 z-0"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop")' }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/95 to-[#0f172a]/40 z-10"></div>
      
      <div className="max-w-[1500px] mx-auto relative z-20 flex flex-col lg:flex-row items-center gap-24">
        {/* Left: Testimonials */}
        <div className="lg:w-1/2 text-white reveal-right">
          <div className="flex items-center gap-4 mb-8">
             <div className="flex text-[#f29100]">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
             </div>
             <span className="text-sm font-bold opacity-80">5.0 Rating based on 500+ reviews</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif font-black italic mb-12 leading-none tracking-tight text-shadow-lg">
            Traveler <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f29100] to-[#e11d48]">Stories</span>
          </h2>
          
          {/* Container with fixed height to prevent layout jumps */}
          <div className="h-[450px] space-y-12 relative">
             {activeIndices.map((index, slotId) => {
                const test = testimonials[index];
                return (
                    <div 
                        key={`${slotId}-${test.id}`} 
                        className={`absolute w-full pl-12 border-l-2 border-[#f29100]/30 hover:border-[#f29100] transition-all duration-1000 ease-in-out group cursor-default ${slotId === 0 ? 'top-0' : 'top-[200px]'} ${isVisible[slotId] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    >
                        <img 
                            src={test.avatar} 
                            className="absolute left-[-26px] top-0 w-12 h-12 rounded-full border-4 border-[#0f172a] shadow-xl grayscale group-hover:grayscale-0 transition-all" 
                            alt={test.name} 
                        />
                        <div className="h-[120px] flex items-center">
                            <p className="text-xl leading-[1.6] font-serif italic text-slate-200 opacity-90 group-hover:opacity-100 line-clamp-3">
                                "{test.text}"
                            </p>
                        </div>
                        <div className="text-[11px] font-black uppercase tracking-[0.3em] text-[#f29100] mt-2">
                            {test.name} — {test.role}
                        </div>
                    </div>
                );
             })}
          </div>

          <button className="bg-white text-[#0f172a] px-10 py-4 rounded-full text-[13px] font-black uppercase tracking-[0.3em] hover:bg-[#f29100] hover:text-white transition-all shadow-2xl hover:scale-105 mt-4">
            READ ALL REVIEWS
          </button>
        </div>

        {/* Right: Map Placeholder */}
        <div className="lg:w-1/2 w-full reveal-left" style={{ transitionDelay: '300ms', perspective: '1000px' }}>
          <div className="relative w-full transform style-3d hover:scale-105 transition-transform duration-700 ease-out" style={{ transform: 'rotateX(20deg) rotateY(10deg) rotateZ(-2deg)' }}>
             <img 
               src="/africa-preview.png" 
               alt="Africa Map Preview" 
               className="w-full h-auto drop-shadow-2xl rounded-2xl"
             />
             
             {/* Decorative glow behind */}
             <div className="absolute -inset-10 bg-[#f29100] opacity-20 blur-3xl -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;