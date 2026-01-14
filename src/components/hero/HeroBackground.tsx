import React, { useState } from 'react';

const HeroBackground: React.FC = () => {
  const [videoReady, setVideoReady] = useState(false);

  const handleVideoLoad = () => {
    // Add a delay to ensure the video has actually started playing 
    // and the YouTube black screen/spinner is gone before revealing it.
    setTimeout(() => {
      setVideoReady(true);
    }, 1500); // 1.5s delay should be sufficient for auto-play to kick in
  };

  return (
    <>
      {/* Mobile Background (Always Image) */}
      <div className="absolute inset-0 z-0 md:hidden">
          <img 
            src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
      </div>

      {/* Desktop Background Container */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-20"></div>
        
        {/* Placeholder Image Layer - Stays visible until video is truly ready */}
        <div className={`absolute inset-0 z-10 transition-opacity duration-1000 ease-in-out ${videoReady ? 'opacity-0' : 'opacity-100'}`}>
            <img 
                src="./hero-bg.jpg" 
                className="w-full h-full object-cover" 
                alt="Hero Placeholder"
            />
        </div>

        {/* Video Layer */}
        {/* We keep opacity-0 until ready so the spinner/black screen happens invisibly behind the image */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] min-w-full min-h-full h-[56.25vw] transition-opacity duration-1000 ease-in-out ${videoReady ? 'opacity-100' : 'opacity-0'}`}>
            <iframe 
                className="w-full h-full pointer-events-none object-cover"
                src="https://www.youtube.com/embed/jEsrsDVkuVY?autoplay=1&mute=1&controls=0&loop=1&playlist=jEsrsDVkuVY&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&vq=hd1080&start=8" 
                title="Hero Video"
                allow="autoplay; encrypted-media" 
                allowFullScreen
                onLoad={handleVideoLoad}
            ></iframe>
        </div>
      </div>
    </>
  );
};

export default HeroBackground;