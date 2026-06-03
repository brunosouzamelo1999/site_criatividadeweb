import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FireSparks } from '@/components/FireSparks';
import { PixelGroundWave } from '@/components/PixelGroundWave';
import { PixelButton } from '@/components/PixelButton';
import { FloatingPixelElements } from '@/components/FloatingPixelElements';
import { EasterEgg } from '@/components/EasterEgg';
import { MessageCircle, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Tagline
      gsap.fromTo(
        taglineRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power2.out' }
      );

      // Headline
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' }
      );

      // Subheadline
      gsap.fromTo(
        subheadlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.8, ease: 'power2.out' }
      );

      // CTA group
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 1.0, ease: 'power2.out' }
      );

      // Stats
      gsap.fromTo(
        statsRef.current?.children || [],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 1.2, ease: 'power2.out' }
      );

      // Parallax on scroll
      if (sectionRef.current) {
        gsap.to(headlineRef.current, {
          yPercent: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });

        gsap.to(subheadlineRef.current, {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-x-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #D2E4F0 0%, #F7F7FF 70%, #EDF1F5 100%)',
      }}
    >
      <FireSparks count={150} className="inset-0 opacity-70" />
      <PixelGroundWave />
      <FloatingPixelElements count={8} />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 py-20 pt-28 text-center flex flex-col items-center">
        <EasterEgg discount={20} color="purple" className="top-28 left-4 md:left-12" />

        {/* Tagline */}
        <div ref={taglineRef} className="mb-6 opacity-0">
          <span className="font-heading text-xs font-bold text-[#0145F2] tracking-[0.25em]">
            PRESENÇA DIGITAL COM PROPÓSITO
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-[68px] font-extrabold text-text-primary leading-[1.02] opacity-0 max-w-3xl"
        >
          Sua marca em destaque com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0145F2] to-[#27187E] drop-shadow-[0_0_20px_rgba(1, 69, 242,0.25)]">criação de sites</span> sob medida
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="font-body text-base md:text-lg text-text-secondary leading-relaxed max-w-[640px] mt-6 opacity-0 mx-auto"
        >
          Desenvolvemos páginas rápidas, seguras e elegantes para conectar sua empresa a clientes de verdade. Sem falsas promessas de lucros rápidos, com design estratégico e transparência absoluta em cada linha de código.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-6 mt-10 opacity-0">
          <PixelButton
            href="https://wa.me/5592999845217?text=Ol%C3%A1%21%20Quero%20fazer%20um%20or%C3%A7amento%20para%20meu%20site."
            icon={<MessageCircle size={18} />}
            large
          >
            Quero Fazer um Orçamento
          </PixelButton>
          <a
            href="#planos"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="font-heading text-sm font-semibold text-text-secondary hover:text-[#0145F2] transition-all duration-300"
          >
            Ver Planos ↓
          </a>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12 w-full">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-bold text-[#0145F2]">50+</span>
            <span className="font-heading text-[10px] font-bold text-text-muted tracking-wider text-left">Modelos<br />Concluídos</span>
          </div>
          <div className="w-px h-10 bg-black/[0.08] hidden md:block" />
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-bold text-[#0145F2]">100%</span>
            <span className="font-heading text-[10px] font-bold text-text-muted tracking-wider text-left">Altíssimo<br />Padrão</span>
          </div>
          <div className="w-px h-10 bg-black/[0.08] hidden md:block" />
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Star size={16} className="text-[#0145F2] fill-[#0145F2] drop-shadow-[0_0_5px_rgba(1, 69, 242,0.4)]" />
              <span className="font-display text-xl font-bold text-[#0145F2]">5</span>
            </span>
            <span className="font-heading text-[10px] font-bold text-text-muted tracking-wider text-left">Avaliação<br />Média</span>
          </div>
        </div>
      </div>
    </section>
  );
}
