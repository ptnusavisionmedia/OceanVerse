'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Efek global ringan:
 * 1) reveal saat scroll (dijalankan ulang tiap pindah halaman)
 * 2) gelembung "pop" saat klik
 */
export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal:not(.is-in)');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      for (let i = 0; i < 6; i++) {
        const b = document.createElement('span');
        b.className = 'pop';
        const angle = Math.random() * Math.PI * 2;
        const dist = 30 + Math.random() * 50;
        b.style.setProperty('--s', `${10 + Math.random() * 16}px`);
        b.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
        b.style.setProperty('--dy', `${Math.sin(angle) * dist - 30}px`);
        b.style.left = `${e.clientX}px`;
        b.style.top = `${e.clientY}px`;
        document.body.appendChild(b);
        b.addEventListener('animationend', () => b.remove(), { once: true });
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  return null;
}
