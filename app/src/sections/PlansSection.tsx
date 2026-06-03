import { useEffect, useRef } from 'react';
import { PixelGroundWave } from '@/components/PixelGroundWave';
import { FireSparks } from '@/components/FireSparks';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from '@/components/SectionLabel';
import { PixelButton } from '@/components/PixelButton';
import { FloatingPixelElements } from '@/components/FloatingPixelElements';
import { EasterEgg } from '@/components/EasterEgg';
import { Check, Zap, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'ESSENCIAL',
    price: 'R$ 100',
    subtitle: 'Presença online básica de alto padrão para quem precisa começar com rapidez e profissionalismo.',
    phrase: 'Comece sua presença online de forma elegante e eficiente',
    features: [
      'WordPress ou Código Puro (React)',
      'Página única estilo landing page',
      'Design moderno e responsivo',
      'Carregamento ultra-rápido',
      'Botão direto para WhatsApp',
      'Suporte premium por 7 dias',
    ],
    cta: 'Quero começar meu site',
    variant: 'primary' as const,
    highlighted: false,
    tag: null,
    customClasses: 'border border-[#27187E]/20 bg-[#EDF1F5]/40 backdrop-blur-md shadow-[0_0_20px_rgba(39, 24, 126,0.05)] hover:shadow-[0_0_35px_rgba(39, 24, 126,0.15)] hover:border-[#27187E]/50 transition-all duration-300',
  },
  {
    name: 'PROFISSIONAL',
    price: 'R$ 400',
    subtitle: 'Autonomia total com um site completo e flexível que você mesmo pode gerenciar e editar.',
    phrase: 'Você tem controle completo do seu site, com total autonomia',
    features: [
      'WordPress ou Código (React)',
      'Até 5 páginas completas',
      'Site 100% editável (Elementor)',
      'Otimização básica de SEO',
      'Integração de WhatsApp e Redes',
      'Suporte dedicado por 15 dias',
    ],
    cta: 'Quero editar meu site',
    variant: 'primary' as const,
    highlighted: true,
    tag: { text: 'Mais Autonomia', icon: <Zap size={12} className="text-[#F7F7FF]" /> },
    customClasses: 'border-2 border-[#0145F2] bg-[#EDF1F5]/70 backdrop-blur-md shadow-[0_0_35px_rgba(1, 69, 242,0.12)] lg:scale-105 z-10 hover:shadow-[0_0_50px_rgba(1, 69, 242,0.25)] transition-all duration-300',
  },
  {
    name: 'PREMIUM',
    price: 'R$ 500',
    subtitle: 'Experiência de elite definitiva com design personalizado sob medida e animações de luxo.',
    phrase: 'Domine o digital com a tecnologia de elite da nossa softhouse',
    features: [
      'WordPress ou Código de Elite (React)',
      'Design 100% exclusivo sob medida',
      'Animações interativas premium',
      'Velocidade e performance recordes',
      'SEO avançado e foco em conversão',
      'Integrações e APIs complexas',
      'Suporte VIP prioritário por 30 dias',
    ],
    cta: 'Quero um site premium',
    variant: 'primary' as const,
    highlighted: false,
    tag: { text: 'Impacto Máximo', icon: <Sparkles size={12} className="text-[#F7F7FF]" /> },
    customClasses: 'border border-[#27187E]/20 bg-[#EDF1F5]/40 backdrop-blur-md shadow-[0_0_30px_rgba(39, 24, 126,0.05)] hover:shadow-[0_0_45px_rgba(1, 69, 242,0.2)] hover:border-[#0145F2] transition-all duration-300 lg:-translate-y-2',
  },
];

export function PlansSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);

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

      gsap.fromTo(
        closingRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: closingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="planos"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, #D2E4F0 0%, #F7F7FF 100%)',
      }}
    >
      <PixelGroundWave hideCeiling />
      <FireSparks count={60} className="inset-0 opacity-30" />
      <FloatingPixelElements count={8} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Headline */}
        <div ref={headlineRef} className="text-center opacity-0 mb-16">
          <SectionLabel text="PLANOS E PREÇOS" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[48px] font-bold text-text-primary leading-tight">
            Escolha como você quer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0145F2] to-[#27187E] drop-shadow-[0_0_15px_rgba(1, 69, 242,0.25)]">crescer no digital</span>
          </h2>
          <p className="font-body text-base md:text-lg text-text-secondary mt-4 max-w-[600px] mx-auto">
            Cada negócio está em um momento diferente. Por isso, ofereço soluções que vão do essencial até experiências digitais completas e exclusivas.
          </p>
          <div className="mt-8 font-heading text-sm font-semibold text-[#0145F2] tracking-wider uppercase">
            Comece simples, tenha controle ou domine com um site de elite.
          </div>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl transition-all duration-300 group opacity-0 flex flex-col h-full ${plan.customClasses}`}
            >
              {/* Tags */}
              {plan.tag && (
                <div className="absolute -top-3.5 right-4 md:right-6 bg-gradient-to-r from-[#27187E] to-[#0145F2] text-[#F7F7FF] font-heading text-[10px] font-bold px-4 py-1.5 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(1, 69, 242,0.3)] z-20 whitespace-nowrap">
                  {plan.tag.icon}
                  {plan.tag.text}
                </div>
              )}

              {/* Header */}
              <div className={`px-5 md:px-7 pt-8 pb-6 text-center border-b rounded-t-2xl ${plan.name === 'PREMIUM' ? 'border-[#27187E]/10 bg-transparent' : 'border-black/[0.04] bg-transparent'}`}>
                <h3 className={`font-heading text-sm font-bold tracking-widest ${plan.highlighted ? 'text-[#0145F2]' : plan.name === 'PREMIUM' ? 'text-[#8b5cf6]' : 'text-text-muted'}`}>
                  {plan.name}
                </h3>
                <p className={`font-display text-4xl font-extrabold mt-3 ${plan.highlighted ? 'text-[#0145F2]' : 'text-text-primary'}`}>
                  {plan.price}
                </p>
                <p className="font-body text-xs text-text-muted mt-3 min-h-[48px] flex items-center justify-center">
                  {plan.subtitle}
                </p>
              </div>

              {/* Features */}
              <div className="px-5 md:px-7 py-6 flex-grow bg-white/[0.01]">
                <p className="font-heading text-xs text-center font-semibold italic mb-6 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-black/[0.04] text-text-secondary leading-relaxed">
                  "{plan.phrase}"
                </p>
                <ul className="space-y-0">
                  {plan.features.map((feature, fi) => (
                    <li
                      key={fi}
                      className="flex items-center gap-3 py-2.5 border-b border-white/[0.02] last:border-b-0"
                    >
                      <Check size={16} className={`${plan.highlighted ? 'text-[#0145F2]' : plan.name === 'PREMIUM' ? 'text-[#8b5cf6]' : 'text-text-muted'} flex-shrink-0`} />
                      <span className="font-body text-[13px] text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-5 md:px-7 pb-7 pt-2 rounded-b-2xl bg-white/[0.01]">
                <PixelButton
                  href={`https://wa.me/5592999845217?text=Ol%C3%A1%21%20Tenho%20interesse%20no%20plano%20${encodeURIComponent(plan.name)}.`}
                  variant={plan.variant}
                  fullWidth
                >
                  {plan.cta}
                </PixelButton>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Section */}
        <div ref={closingRef} className="relative mt-20 text-center opacity-0 max-w-3xl mx-auto bg-[#EDF1F5]/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-black/[0.05] shadow-[0_10px_40px_rgba(39, 24, 126, 0.05)]">
          <EasterEgg discount={10} color="green" className="top-4 right-4" />
          <h3 className="font-heading text-xl md:text-2xl font-bold text-text-primary mb-4 leading-normal">
            Não existe a melhor opção — existe a que <span className="text-[#0145F2]">faz mais sentido para o seu momento.</span>
          </h3>
          <p className="font-body text-text-secondary mb-8">
            E eu posso te ajudar a escolher a ideal.
          </p>
          <PixelButton
            href="https://wa.me/5592999845217?text=Ol%C3%A1%21%20Preciso%20de%20ajuda%20para%20escolher%20o%20melhor%20plano%20para%20meu%20site."
            variant="secondary"
            large
            className="hover:border-[#0145F2] hover:text-[#0145F2]"
          >
            Fale comigo e vamos definir o melhor caminho para o seu projeto
          </PixelButton>
        </div>
      </div>
    </section>
  );
}
