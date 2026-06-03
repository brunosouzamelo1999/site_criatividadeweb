import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  y?: number;
  x?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
  start?: string;
  scale?: number;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 40,
      x = 0,
      opacity = 0,
      duration = 0.6,
      delay = 0,
      ease = 'power3.out',
      stagger = 0,
      start = 'top 80%',
      scale = 1,
    } = options;

    const children = stagger > 0 ? el.children : el;

    gsap.set(children, { y, x, opacity, scale: scale !== 1 ? scale : 1 });

    const tween = gsap.to(children, {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      duration,
      delay,
      ease,
      stagger: stagger > 0 ? stagger : 0,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return ref;
}
