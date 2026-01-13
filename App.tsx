import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import BentoTours from './components/BentoTours';
import Destinations from './components/Destinations';
import TravelStories from './components/TravelStories';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const scanAndObserve = () => {
      const selectors = ['.reveal', '.reveal-zoom', '.reveal-left', '.reveal-right', '.reveal-up'];
      document.querySelectorAll(selectors.join(', ')).forEach(el => {
        if (!el.classList.contains('active')) {
          observer.observe(el);
        }
      });
    };

    scanAndObserve();

    // Parallax Effect
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.querySelectorAll('.parallax-layer').forEach((el) => {
        const speed = (el as HTMLElement).getAttribute('data-speed') || '0.5';
        const yPos = -(scrolled * parseFloat(speed));
        (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          scanAndObserve();
        }
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="relative">
        <div className="relative z-[50]"><Hero /></div>
        <div className="relative z-[0]"><OurStory /></div>
        <div className="relative z-[10]"><BentoTours /></div>
        <div className="relative z-[20]"><Destinations /></div>
        <div className="relative z-[30]"><TravelStories /></div>
        <div className="relative z-[40]"><Reviews /></div>
        <div className="relative z-[50]"><Newsletter /></div>
      </main>
      <div className="relative z-[60]"><Footer /></div>
    </div>
  );
};

export default App;