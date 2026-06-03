import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;

    const st = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        if (barRef.current) {
          barRef.current.style.width = `${self.progress * 100}%`;
        }
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-[#27187E] via-[#0145F2] to-[#EDF1F5] shadow-[0_0_10px_rgba(1,69,242,0.35)]"
      style={{ zIndex: 1001, width: '0%' }}
    />
  );
}
