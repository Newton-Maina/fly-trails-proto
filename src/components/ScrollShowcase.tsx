import React, { useRef, useEffect, useState } from 'react';
import { showcaseSlides as slides } from '../data/showcase';

const ScrollShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrollableDistance = height - windowHeight;
      const scrolled = -top;
      
      let p = scrolled / scrollableDistance;
      if (p < 0) p = 0;
      if (p > 1) p = 1;
      
      rafId = requestAnimationFrame(() => {
        setProgress(p);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[450vh] bg-white">
      {/* Sticky Container with Curved Bottom */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center rounded-b-[3rem] md:rounded-b-[5rem] shadow-2xl z-20 bg-black">
         
         {/* Images Layer */}
         {slides.map((slide, index) => {
            const p = progress * 3; 
            let opacity = 0;
            let scale = 1;

            if (index === 0) {
                // Slide 1: Visible 0-1, Fades out 0.5-1.5 (slower fade)
                opacity = 1 - Math.max(0, p - 0.5); 
                scale = 1 + (p * 0.15); 
            } else if (index === 1) {
                // Slide 2: Fades in 0.5-1.0, Visible 1.0-1.5, Fades out 1.5-2.5
                if (p < 0.5) opacity = 0;
                else if (p < 1.0) opacity = (p - 0.5) * 2;
                else if (p < 1.5) opacity = 1;
                else opacity = 1 - (p - 1.5);
                
                scale = 1 + Math.max(0, p - 0.5) * 0.15;
            } else {
                // Slide 3: Fades in 1.5-2.0, Visible 2.0+
                if (p < 1.5) opacity = 0;
                else if (p < 2.0) opacity = (p - 1.5) * 2;
                else opacity = 1;
                
                scale = 1 + Math.max(0, p - 1.5) * 0.15;
            }

            return (
                <div 
                    key={index}
                    className="absolute inset-0 w-full h-full will-change-transform will-change-opacity"
                    style={{ 
                        opacity: Math.max(0, Math.min(1, opacity)),
                        transform: `scale(${scale})`,
                        zIndex: 10 + index 
                    }}
                >
                    <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
            );
         })}

         {/* Content Layer (Stays Centered) */}
         <div className="relative z-50 text-center text-white px-4">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-4 drop-shadow-lg text-white/80">The Journey</p>
            <div className="overflow-hidden">
                <h2 className="text-5xl md:text-8xl font-serif font-black italic tracking-tighter drop-shadow-2xl transition-transform duration-700 ease-out transform translate-y-0 text-white">
                    {progress < 0.33 ? slides[0].title : progress < 0.66 ? slides[1].title : slides[2].title}
                </h2>
            </div>
            <p className="text-lg md:text-2xl font-medium mt-4 text-white/90 drop-shadow-lg max-w-lg mx-auto leading-relaxed">
                {progress < 0.33 ? slides[0].desc : progress < 0.66 ? slides[1].desc : slides[2].desc}
            </p>
         </div>

         {/* Progress Indicators */}
         <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
            {slides.map((_, i) => (
                <div 
                    key={i} 
                    className={`w-1 h-12 rounded-full transition-all duration-500 ${
                        (progress * 3 >= i && progress * 3 < i + 1) || (i === 2 && progress >= 0.66) 
                        ? 'bg-white h-16' 
                        : 'bg-white/20'
                    }`}
                ></div>
            ))}
         </div>

      </div>
    </section>
  );
};

export default ScrollShowcase;