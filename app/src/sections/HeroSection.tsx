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
  const illustrationRef = useRef<HTMLDivElement>(null);

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

      // Illustration
      gsap.fromTo(
        illustrationRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.0, delay: 0.6, ease: 'power3.out' }
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

        gsap.to(illustrationRef.current, {
          yPercent: -15,
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
        background: 'radial-gradient(ellipse at 50% 30%, #0c1520 0%, #060608 70%, #020203 100%)',
      }}
    >
      <FireSparks count={150} className="inset-0 opacity-70" />
      <PixelGroundWave />
      <FloatingPixelElements count={4} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 pt-28">
        <EasterEgg discount={20} color="purple" className="top-28 left-4 md:left-12" />
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div>
            {/* Tagline */}
            <div ref={taglineRef} className="mb-6 opacity-0">
              <span className="font-heading text-xs font-bold text-[#00e5ff] tracking-[0.25em]">
                PRESENÇA DIGITAL COM PROPÓSITO
              </span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-[68px] font-extrabold text-text-primary leading-[1.02] opacity-0"
            >
              Sua marca em destaque com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-[#00adb5] drop-shadow-[0_0_20px_rgba(0,229,255,0.25)]">criação de sites</span> sob medida
            </h1>

            {/* Subheadline */}
            <p
              ref={subheadlineRef}
              className="font-body text-base md:text-lg text-text-secondary leading-relaxed max-w-[520px] mt-6 opacity-0"
            >
              Desenvolvemos páginas rápidas, seguras e elegantes para conectar sua empresa a clientes de verdade. Sem falsas promessas de lucros rápidos, com design estratégico e transparência absoluta em cada linha de código.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-6 mt-10 opacity-0">
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
                className="font-heading text-sm font-semibold text-text-secondary hover:text-[#00e5ff] transition-all duration-300"
              >
                Ver Planos ↓
              </a>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="flex flex-wrap gap-6 md:gap-10 mt-12">
              <div className="flex items-center gap-3">
                <span className="font-display text-xl font-bold text-[#00e5ff]">50+</span>
                <span className="font-heading text-[10px] font-bold text-text-muted tracking-wider">Modelos<br />Concluídos</span>
              </div>
              <div className="w-px h-10 bg-white/[0.08] hidden md:block" />
              <div className="flex items-center gap-3">
                <span className="font-display text-xl font-bold text-[#00e5ff]">100%</span>
                <span className="font-heading text-[10px] font-bold text-text-muted tracking-wider">Altíssimo<br />Padrão</span>
              </div>
              <div className="w-px h-10 bg-white/[0.08] hidden md:block" />
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Star size={16} className="text-[#00e5ff] fill-[#00e5ff] drop-shadow-[0_0_5px_rgba(0,229,255,0.4)]" />
                  <span className="font-display text-xl font-bold text-[#00e5ff]">5</span>
                </span>
                <span className="font-heading text-[10px] font-bold text-text-muted tracking-wider">Avaliação<br />Média</span>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div ref={illustrationRef} className="relative hidden lg:flex justify-center opacity-0">
            <div className="relative">
              <div
                className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(0,229,255,0.06)]"
              >
                <img
                  src="/hero-illustration.jpg"
                  alt="Elite web development illustration"
                  className="w-full max-w-[480px] aspect-square object-cover"
                />
              </div>
              {/* Premium Badge */}
              <div className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-[#00adb5] to-[#00e5ff] text-[#060608] font-heading text-[9px] font-extrabold tracking-[0.15em] px-3.5 py-2 rounded-full shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                PREMIUM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
