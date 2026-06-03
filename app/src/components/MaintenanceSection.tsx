import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from '@/components/SectionLabel';
import { PixelButton } from '@/components/PixelButton';
import { ShieldCheck, Zap, BarChart3, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const maintenancePlans = [
  {
    name: 'SUPORTE BASE',
    price: 'R$ 50',
    description: 'Ideal para manter seu site online, seguro e com performance estável.',
    features: [
      'Hospedagem de Alta Performance',
      'Certificado SSL (Cadeado Verde)',
      'Backups Semanais Automáticos',
      'Monitoramento 24/7 contra quedas',
      'Suporte via E-mail',
    ],
    icon: <ShieldCheck size={24} className="text-accent-blue" />,
    color: 'accent-blue',
  },
  {
    name: 'GESTÃO ATIVA',
    price: 'R$ 150',
    description: 'Para quem precisa de um parceiro para cuidar de tudo e fazer atualizações.',
    features: [
      'Tudo do Suporte Base',
      'Atualizações de Conteúdo (Até 2h/mês)',
      'Otimização de Banco de Dados',
      'Relatório de Acessos Mensal',
      'Suporte Prioritário via WhatsApp',
    ],
    icon: <Zap size={24} className="text-accent-yellow" />,
    color: 'accent-yellow',
    highlighted: true,
  },
  {
    name: 'ELITE GROWTH',
    price: 'R$ 300',
    description: 'Foco total em escala, conversão e domínio do mercado digital.',
    features: [
      'Tudo da Gestão Ativa',
      'Acompanhamento de SEO constante',
      'Análise de Funil de Conversão',
      'Consultoria Técnica Estratégica',
      'Suporte VIP com Resposta em até 4h',
    ],
    icon: <BarChart3 size={24} className="text-accent-purple" />,
    color: 'accent-purple',
  },
];

export function MaintenanceSection() {
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
          },
        }
      );

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
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
      id="manutencao"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        background: '#0A0A0F',
      }}
    >
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-yellow/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div ref={headlineRef} className="text-center opacity-0 mb-16">
          <SectionLabel text="GESTÃO E MANUTENÇÃO" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[48px] font-bold text-text-primary leading-tight">
            Seu site em <span className="text-accent-yellow">Boas Mãos</span>
          </h2>
          <p className="font-body text-base md:text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
            Não se preocupe com quedas, hackers ou lentidão. Eu cuido da parte técnica para você focar no que importa: <span className="text-white font-bold">o seu negócio.</span>
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {maintenancePlans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-[#12121A] border ${plan.highlighted ? 'border-accent-yellow/30' : 'border-white/[0.05]'} rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 opacity-0 group`}
            >
              {/* Icon & Name */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-white/[0.03] border border-white/[0.08]`}>
                  {plan.icon}
                </div>
                <h3 className="font-display text-sm tracking-widest text-text-primary">
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="font-heading text-4xl font-bold text-text-primary">{plan.price}</span>
                <span className="text-text-muted text-sm ml-2">/mês</span>
              </div>

              <p className="font-body text-sm text-text-secondary mb-8 leading-relaxed">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-center gap-3">
                    <Clock size={14} className="text-text-muted" />
                    <span className="font-body text-[13px] text-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <PixelButton
                href={`https://wa.me/5592999845217?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20de%20manuten%C3%A7%C3%A3o%20${encodeURIComponent(plan.name)}.`}
                variant={plan.highlighted ? 'accent' : 'secondary'}
                fullWidth
                className={plan.highlighted ? 'shadow-glow-yellow' : ''}
              >
                Assinar Plano
              </PixelButton>

              {/* Neon Glow on Hover */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none bg-${plan.color}`} />
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 p-6 rounded-lg bg-white/[0.02] border border-white/[0.05] max-w-3xl mx-auto">
          <p className="font-body text-sm text-text-muted italic">
            * Contratos sem fidelidade. Cancele quando quiser. <br />
            ** No Plano Premium, o primeiro ano de Suporte Base é totalmente gratuito.
          </p>
        </div>
      </div>
    </section>
  );
}
