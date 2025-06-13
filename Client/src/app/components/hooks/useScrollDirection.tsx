'use client';
import { useState, useEffect, useRef } from 'react';

export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    // If your scroll is happening on a specific container, make sure to attach the handler there
    // For now, we'll use window.
    lastScrollY.current = window.scrollY;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - lastScrollY.current) < 5) {
        ticking.current = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = scrollY > 0 ? scrollY : 0;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDir);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollDir;
}