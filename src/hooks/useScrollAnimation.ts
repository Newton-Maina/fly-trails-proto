import { useEffect } from 'react';

export const useScrollAnimation = () => {
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

    // Initial scan
    scanAndObserve();

    // Observe DOM changes to handle dynamically added elements
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
    };
  }, []);
};