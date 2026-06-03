import { useEffect, useRef } from 'react';
import { PixelGroundWave } from '@/components/PixelGroundWave';
import { FireSparks } from '@/components/FireSparks';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from '@/components/SectionLabel';
import { Trophy } from 'lucide-react';
import { FloatingPixelElements } from '@/components/FloatingPixelElements';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Briefing e Entendimento do Negócio',
    description: 'Conversamos para entender seu público, objetivos e identidade visual. Cada detalhe importa.',
  },
  {
    number: '02',
    title: 'Planejamento Estratégico da Estrutura',
    description: 'Definimos o mapa do site, as páginas necessárias e a jornada do usuário para máxima conversão.',
  },
  {
    number: '03',
    title: 'Desenvolvimento Visual e Técnico',
    description: 'Criamos o design e desenvolvemos o site com as melhores tecnologias e práticas do mercado.',
  },
  {
    number: '04',
    title: 'Ajustes e Aprovação',
    description: 'Você revisa, solicitamos ajustes e refinamos até que tudo esteja perfeito para o seu negócio.',
  },
  {
    number: '05',
    title: 'Publicação e Suporte Pós-Entrega',
    description: 'Seu site vai ao ar! E continuamos ao seu lado com suporte técnico para garantir que tudo funcione.',
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<HTMLDivElement>(null);
  const completionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline
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

      // Connecting path draw
      if (pathRef.current) {
        gsap.fromTo(
          pathRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 75%',
              end: 'bottom 60%',
              scrub: 1,
            },
          }
        );
      }

      // Step cards
      if (stepsRef.current) {
        const cards = stepsRef.current.querySelectorAll('.process-step');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Phase numbers pulse
        const numbers = stepsRef.current.querySelectorAll('.phase-number');
        gsap.fromTo(
          numbers,
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Completion badge
      gsap.fromTo(
        completionRef.current,
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: completionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="processo" className="bg-bg-secondary py-20 md:py-32 relative">
      <PixelGroundWave />
      <FireSparks count={60} className="inset-0 opacity-30" />
      <FloatingPixelElements count={6} />
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div ref={headlineRef} className="text-center opacity-0">
          <SectionLabel text="COMO FUNCIONA" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[48px] font-bold text-text-primary">
            O processo em <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0145F2] to-[#27187E] drop-shadow-[0_0_15px_rgba(1, 69, 242,0.25)]">5 fases</span>
          </h2>
          <p className="font-body text-base md:text-lg text-text-secondary mt-4 max-w-[600px] mx-auto">
            Do primeiro contato à publicação, cada etapa é cuidadosamente planejada para entregar o melhor resultado.
          </p>
        </div>

        <div ref={stepsRef} className="relative mt-16 max-w-[800px] mx-auto">
          {/* Connecting path */}
          <div
            ref={pathRef}
            className="absolute left-7 top-0 bottom-0 w-0 border-l-[2px] border-dashed border-[#27187E]/30 origin-top hidden md:block"
          />

          {/* Steps */}
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="process-step relative premium-card border-white/5 p-6 md:p-7 flex items-start gap-5 md:gap-6 opacity-0 shadow-lg hover:border-[#27187E]/30"
              >
                {/* Phase Number */}
                <div
                  className="phase-number relative flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#27187E] to-[#0145F2] border border-black/10 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(39, 24, 126,0.2)]"
                >
                  <span className="font-heading text-sm font-bold text-[#F7F7FF]">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-text-secondary mt-1.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Checkpoint */}
                <div className="hidden md:block absolute left-[25px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#0145F2] rounded-full shadow-[0_0_8px_rgba(1, 69, 242,0.6)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Completion Badge */}
        <div ref={completionRef} className="text-center mt-8 opacity-0">
          <span className="inline-flex items-center gap-2 bg-[#2DC653]/15 border border-[#2DC653]/20 text-accent-green font-heading text-[10px] font-bold tracking-wider px-5 py-2.5 rounded-full shadow-[0_0_15px_rgba(45,198,83,0.15)] animate-pulse">
            <Trophy size={16} />
            MISSÃO COMPLETA!
          </span>
        </div>
      </div>
    </section>
  );
}
