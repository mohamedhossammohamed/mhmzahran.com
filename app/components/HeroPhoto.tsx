'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function HeroPhoto() {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const el = tiltRef.current;
    if (!el) return;

    let raf = 0;
    let curX = 0;
    let curY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      targetY = Math.max(-4, Math.min(4, ((e.clientX - cx) / (r.width / 2)) * 2));
      targetX = Math.max(-4, Math.min(4, -((e.clientY - cy) / (r.height / 2)) * 2));
    };

    const loop = () => {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      el.style.transform = `perspective(600px) rotateX(${curX.toFixed(2)}deg) rotateY(${curY.toFixed(2)}deg)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-photo" data-reveal style={{ '--i': 2 } as React.CSSProperties}>
      <div className="photo-tilt" ref={tiltRef}>
        <div className="photo-float">
          <Image
            src="/mhmzahran.com/headshot.jpg"
            alt="Portrait of Mohamed Hossam Zahran"
            width={360}
            height={320}
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
