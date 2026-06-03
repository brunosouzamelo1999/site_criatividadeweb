import { useEffect, useRef } from 'react';
import { PixelGroundWave } from '@/components/PixelGroundWave';
import { FireSparks } from '@/components/FireSparks';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from '@/components/SectionLabel';
import { Zap, Sparkles, Shield } from 'lucide-react';
import { FloatingPixelElements } from '@/components/FloatingPixelElements';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: 'Engenharia de Performance',
    description: 'Desenvolvemos sites ultra-velozes que carregam em menos de 1 segundo. Menos espera significa mais conversão e um SEO que domina os resultados de busca.',
    icon: <Zap size={32} className="text-[#0145F2] drop-shadow-[0_0_8px_rgba(1, 69, 242,0.4)]" />,
    stat: '99+ Speed Score',
  },
  {
    title: 'Design Imersivo (WOW)',
    description: 'Não fazemos apenas sites, criamos experiências. Utilizamos animações fluidas e design de alta fidelidade para prender a atenção e gerar desejo imediato.',
    icon: <Sparkles size={32} className="text-[#0145F2] drop-shadow-[0_0_8px_rgba(1, 69, 242,0.4)]" />,
    stat: 'Alta Fidelidade',
  },
  {
    title: 'Código Blindado',
    description: 'A segurança e a escalabilidade são prioridades. Seja em WordPress ou React, seu site é construído com as melhores práticas de desenvolvimento do mercado.',
    icon: <Shield size={32} className="text-[#0145F2] drop-shadow-[0_0_8px_rgba(1, 69, 242,0.4)]" />,
    stat: '100% Seguro',
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="metodologia"
      className="py-20 md:py-32 relative"
      style={{
        background: 'linear-gradient(180deg, #F7F7FF 0%, #EDF1F5 100%)',
      }}
    >
      <PixelGroundWave hideCeiling hideFloor />
      <FireSparks sidesOnly count={60} className="inset-0 opacity-60" />
      <FloatingPixelElements count={6} />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={headlineRef} className="text-center opacity-0">
          <SectionLabel text="NOSSA METODOLOGIA" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[48px] font-bold text-text-primary">
            Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0145F2] to-[#27187E] drop-shadow-[0_0_15px_rgba(1, 69, 242,0.25)]">Metodologia</span> de Elite
          </h2>
          <p className="font-body text-base md:text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
            Trabalhamos com os pilares técnicos que transformam visitantes em clientes através de engenharia e design imersivo.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group premium-card p-8 relative opacity-0 hover:border-[#0145F2]/35 shadow-[0_0_30px_rgba(39, 24, 126,0.02)]"
            >
              {/* Icon */}
              <div className="mb-6 inline-block p-3 rounded-xl bg-black/[0.02] border border-black/[0.05] group-hover:border-[#0145F2]/40 transition-colors duration-300">
                {p.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-text-primary mb-4">
                {p.title}
              </h3>

              {/* Description */}
              <p className="font-body text-base text-text-secondary leading-relaxed mb-6">
                {p.description}
              </p>

              {/* Stat/Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#27187E]/10 border border-[#27187E]/25 text-[#0145F2] font-heading text-[10px] font-semibold tracking-wider uppercase">
                {p.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Badge */}
        <div className="text-center mt-12">
          <span className="inline-flex items-center gap-2 font-heading text-[10px] font-semibold text-text-muted tracking-widest uppercase">
            Sistemas de alta fidelidade desenhados para <strong className="text-[#0145F2] font-bold">Conversão</strong>
          </span>
        </div>
      </div>
    </section>
  );
}



