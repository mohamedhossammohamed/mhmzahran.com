'use client';

import { useEffect, useRef } from 'react';

const INK = '237, 235, 230';
const MINT = '110, 231, 200';
const ATTRACT_R = 160;
const LINK_R = 110;

type Particle = { x: number; y: number; vx: number; vy: number; r: number };

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999 };
    const glow = { x: -9999, y: -9999 };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(110, Math.max(40, (w * h) / 16000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: 0.8 + Math.random() * 1.2,
      }));
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = `rgba(${INK}, 0.25)`;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const onResize = () => {
      resize();
      if (reduced) drawStatic();
    };

    resize();

    if (reduced) {
      drawStatic();
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }

    let raf = 0;

    const step = () => {
      ctx.clearRect(0, 0, w, h);

      glow.x += (mouse.x - glow.x) * 0.08;
      glow.y += (mouse.y - glow.y) * 0.08;
      if (glow.x > -1000) {
        const g = ctx.createRadialGradient(glow.x, glow.y, 0, glow.x, glow.y, 400);
        g.addColorStop(0, `rgba(${MINT}, 0.08)`);
        g.addColorStop(1, `rgba(${MINT}, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      for (const p of particles) {
        p.vx += (Math.random() - 0.5) * 0.012;
        p.vy += (Math.random() - 0.5) * 0.012;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < ATTRACT_R && dist > 0.01) {
          const f = (1 - dist / ATTRACT_R) * 0.02;
          p.vx += (dx / dist) * f;
          p.vy += (dy / dist) * f;
        }

        p.vx *= 0.98;
        p.vy *= 0.98;
        const speed = Math.hypot(p.vx, p.vy);
        if (speed > 0.7) {
          p.vx = (p.vx / speed) * 0.7;
          p.vy = (p.vy / speed) * 0.7;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = w + 20;
        else if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        else if (p.y > h + 20) p.y = -20;
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        const dm = Math.hypot(mouse.x - a.x, mouse.y - a.y);
        if (dm < ATTRACT_R) {
          ctx.strokeStyle = `rgba(${MINT}, ${0.16 * (1 - dm / ATTRACT_R)})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_R) {
            ctx.strokeStyle = `rgba(${MINT}, ${0.07 * (1 - d / LINK_R)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        const dm = Math.hypot(mouse.x - p.x, mouse.y - p.y);
        ctx.fillStyle =
          dm < ATTRACT_R ? `rgba(${MINT}, 0.85)` : `rgba(${INK}, 0.28)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (!raf) raf = requestAnimationFrame(step);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const onVisibility = () => (document.hidden ? stop() : start());
    const onMove = (e: MouseEvent) => {
      if (glow.x < -1000) {
        glow.x = e.clientX;
        glow.y = e.clientY;
      }
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      glow.x = -9999;
      glow.y = -9999;
    };

    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);
    if (!coarse) {
      window.addEventListener('mousemove', onMove);
      document.documentElement.addEventListener('mouseleave', onLeave);
    }
    start();

    return () => {
      stop();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      if (!coarse) {
        window.removeEventListener('mousemove', onMove);
        document.documentElement.removeEventListener('mouseleave', onLeave);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />;
}
