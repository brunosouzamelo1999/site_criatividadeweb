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
            toggleActions: 'play none none none',
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
      id="manutencao"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 50% 0%, #1E1B4B 0%, #0A0A0F 100%)',
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
              className={`relative bg-[#12121A] border rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 opacity-0 group flex flex-col h-full
                ${plan.name === 'SUPORTE BASE' ? 'border-orange-500/30 shadow-[0_0_25px_rgba(249,115,22,0.15)] hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]' : 
                  plan.name === 'GESTÃO ATIVA' ? 'border-accent-yellow/40 shadow-[0_0_35px_rgba(255,214,10,0.2)] hover:shadow-[0_0_50px_rgba(255,214,10,0.3)]' : 
                  'border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.2)] hover:shadow-[0_0_45px_rgba(239,68,68,0.35)]'}`}
            >
              {/* Corner pixels */}
              <span className={`absolute -top-1 -left-1 w-2 h-2 ${plan.name === 'SUPORTE BASE' ? 'bg-orange-500' : plan.name === 'GESTÃO ATIVA' ? 'bg-accent-yellow' : 'bg-red-500'} animate-pixel-pulse`} />
              <span className={`absolute -top-1 -right-1 w-2 h-2 ${plan.name === 'SUPORTE BASE' ? 'bg-orange-500' : plan.name === 'GESTÃO ATIVA' ? 'bg-accent-yellow' : 'bg-red-500'} animate-pixel-pulse`} style={{ animationDelay: '0.5s' }} />
              <span className={`absolute -bottom-1 -left-1 w-2 h-2 ${plan.name === 'SUPORTE BASE' ? 'bg-orange-500' : plan.name === 'GESTÃO ATIVA' ? 'bg-accent-yellow' : 'bg-red-500'} animate-pixel-pulse`} style={{ animationDelay: '1s' }} />
              <span className={`absolute -bottom-1 -right-1 w-2 h-2 ${plan.name === 'SUPORTE BASE' ? 'bg-orange-500' : plan.name === 'GESTÃO ATIVA' ? 'bg-accent-yellow' : 'bg-red-500'} animate-pixel-pulse`} style={{ animationDelay: '1.5s' }} />

              {/* Icon & Name */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-white/[0.03] border border-white/[0.08]`}>
                  {plan.name === 'SUPORTE BASE' ? <ShieldCheck size={24} className="text-orange-500" /> : 
                   plan.name === 'GESTÃO ATIVA' ? <Zap size={24} className="text-accent-yellow" /> : 
                   <BarChart3 size={24} className="text-red-500" />}
                </div>
                <h3 className="font-display text-sm tracking-widest text-text-primary">
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className={`font-heading text-4xl font-bold ${plan.name === 'SUPORTE BASE' ? 'text-orange-500' : plan.name === 'GESTÃO ATIVA' ? 'text-accent-yellow' : 'text-red-500'}`}>
                  {plan.price}
                </span>
                <span className="text-text-muted text-sm ml-2">/mês</span>
              </div>

              <p className="font-body text-sm text-text-secondary mb-8 leading-relaxed min-h-[60px]">
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
                variant="secondary"
                fullWidth
                className={`
                  ${plan.name === 'SUPORTE BASE' ? 'hover:border-orange-500 hover:text-orange-500 border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.1)]' : 
                    plan.name === 'GESTÃO ATIVA' ? 'bg-accent-yellow text-bg-primary hover:bg-accent-yellow/80 border-none shadow-[0_0_20px_rgba(255,214,10,0.3)]' : 
                    'hover:border-red-500 hover:text-red-500 border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]'}
                `}
              >
                Assinar Plano
              </PixelButton>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 p-6 rounded-lg bg-white/[0.02] border border-white/[0.05] max-w-3xl mx-auto">
          <p className="font-body text-xs text-text-muted italic">
            * Contratos sem fidelidade. Cancele quando quiser. <br />
            ** No Plano Premium, o primeiro ano de Suporte Base é totalmente gratuito.
          </p>
        </div>
      </div>
    </section>
  );
}
