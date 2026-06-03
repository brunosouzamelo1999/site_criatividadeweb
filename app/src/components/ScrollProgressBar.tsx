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
      className="fixed top-0 left-0 h-[6px] bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 shadow-[0_0_15px_rgba(255,100,0,0.8)]"
      style={{ zIndex: 1001, width: '0%' }}
    >
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-2xl drop-shadow-[0_0_8px_rgba(255,100,0,1)]">
        🔥
      </div>
    </div>
  );
}
