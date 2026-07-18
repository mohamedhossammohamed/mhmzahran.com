'use client';

import { useEffect } from 'react';

export default function Reveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );

    for (const el of document.querySelectorAll('[data-reveal]')) {
      io.observe(el);
    }

    return () => io.disconnect();
  }, []);

  return null;
}
