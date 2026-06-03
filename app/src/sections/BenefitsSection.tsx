import { useEffect, useRef } from 'react';
import { PixelGroundWave } from '@/components/PixelGroundWave';
import { FireSparks } from '@/components/FireSparks';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from '@/components/SectionLabel';
import { PixelIconContainer } from '@/components/PixelIconContainer';
import { FloatingPixelElements } from '@/components/FloatingPixelElements';
import { Zap, Layout, MessageCircle, Search, Headphones, Edit3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: <Zap size={24} />,
    color: 'yellow' as const,
    title: 'Sites Rápidos e Responsivos',
    description: 'Seu site carrega em segundos e se adapta perfeitamente a qualquer dispositivo: desktop, tablet ou celular.',
  },
  {
    icon: <Layout size={24} />,
    color: 'blue' as const,
    title: 'Design Profissional e Estratégico',
    description: 'Cada elemento é pensado para converter visitantes em clientes, com um layout moderno e intuitivo.',
  },
  {
    icon: <MessageCircle size={24} />,
    color: 'green' as const,
    title: 'Integração com WhatsApp e Formulários',
    description: 'Botão de WhatsApp flutuante e formulários inteligentes para captar leads de forma automática.',
  },
  {
    icon: <Search size={24} />,
    color: 'orange' as const,
    title: 'SEO Básico para Melhor Posicionamento',
    description: 'Otimização para o Google desde o primeiro dia, ajudando seu site a aparecer nas buscas.',
  },
  {
    icon: <Headphones size={24} />,
    color: 'red' as const,
    title: 'Suporte Personalizado',
    description: 'Acompanhamento dedicado durante e após a entrega do projeto, com resposta rápida e atenciosa.',
  },
  {
    icon: <Edit3 size={24} />,
    color: 'yellow' as const,
    title: 'Facilidade de Edição com WordPress + Elementor',
    description: 'Painel intuitivo onde você pode atualizar textos, imagens e conteúdo sem precisar de conhecimento técnico.',
  },
];

export function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline entrance
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

      // Cards entrance
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
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
      id="beneficios"
      className="relative bg-bg-primary py-20 md:py-32 overflow-hidden"
    >
      <PixelGroundWave />
      <FireSparks count={60} className="inset-0 opacity-30" />
      <FloatingPixelElements count={8} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div ref={headlineRef} className="text-center opacity-0">
          <SectionLabel text="BENEFÍCIOS" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[48px] font-bold text-text-primary">
            Por que ter um <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0145F2] to-[#27187E] drop-shadow-[0_0_15px_rgba(1, 69, 242,0.25)]">site profissional</span>?
          </h2>
          <p className="font-body text-base md:text-lg text-text-secondary mt-4 max-w-[600px] mx-auto">
            Um site bem feito é a sua vitrine digital 24h por dia, 7 dias por semana.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="group premium-card p-8 relative opacity-0"
            >
              <PixelIconContainer icon={benefit.icon} color={benefit.color} />

              <h3 className="font-heading text-lg font-semibold text-text-primary mt-5">
                {benefit.title}
              </h3>
              <p className="font-body text-sm text-text-secondary mt-2 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
