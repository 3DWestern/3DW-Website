'use client';
import { useState, useEffect } from 'react';

export function useScrollDirectionSimple() { // simpler scroll direction without scroll throttling with requestAnimationFrame
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Only update if you’ve scrolled more than 5px
      if (currentScrollY - lastScrollY > 5) {
        setScrollDir("down");
      } else if (lastScrollY - currentScrollY > 5) {
        setScrollDir("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollDir;
}