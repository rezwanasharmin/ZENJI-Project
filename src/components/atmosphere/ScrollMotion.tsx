'use client';

import { useEffect } from 'react';

export default function ScrollMotion() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Function to reveal any element that is in or near the viewport
    const checkAndReveal = () => {
      const elements = document.querySelectorAll(
        '[data-reveal]:not(.is-revealed), .stagger-parent:not(.is-revealed)'
      );
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Reveal if element's top is within 150px of bottom of viewport
        if (rect.top <= window.innerHeight + 150) {
          el.classList.add('is-revealed');
        }
      });
    };

    // 1. Immediate reveal for above-the-fold content & hero
    checkAndReveal();
    const t1 = setTimeout(checkAndReveal, 100);
    const t2 = setTimeout(checkAndReveal, 400);
    const t3 = setTimeout(checkAndReveal, 1000);

    // 2. High-performance IntersectionObserver for smooth scroll reveals
    const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';
    let observer: IntersectionObserver | null = null;
    let mutObserver: MutationObserver | null = null;

    if (hasIntersectionObserver) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '100px 0px 50px 0px'
        }
      );

      const observeAll = () => {
        document
          .querySelectorAll('[data-reveal]:not(.is-revealed), .stagger-parent:not(.is-revealed)')
          .forEach((el) => {
            observer?.observe(el);
          });
      };

      observeAll();

      if (typeof MutationObserver !== 'undefined') {
        mutObserver = new MutationObserver(() => {
          observeAll();
          checkAndReveal();
        });
        mutObserver.observe(document.body, { childList: true, subtree: true });
      }
    }

    window.addEventListener('scroll', checkAndReveal, { passive: true });
    window.addEventListener('resize', checkAndReveal, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      observer?.disconnect();
      mutObserver?.disconnect();
      window.removeEventListener('scroll', checkAndReveal);
      window.removeEventListener('resize', checkAndReveal);
    };
  }, []);

  return null;
}
