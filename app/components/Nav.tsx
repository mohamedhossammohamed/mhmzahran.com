'use client';

import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'startups', label: 'Startups' },
  { id: 'research', label: 'Research' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'interests', label: 'Interests' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-25% 0px -65% 0px' }
    );

    for (const { id } of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav" data-reveal style={{ '--i': 5 } as React.CSSProperties}>
      <div className="nav-inner">
        <span className="nav-name">m.h.zahran</span>
        <div className="nav-links">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : undefined}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
