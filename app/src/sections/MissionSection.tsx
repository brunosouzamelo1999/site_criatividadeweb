import { useEffect, useRef } from 'react';
import { PixelGroundWave } from '@/components/PixelGroundWave';
import { FireSparks } from '@/components/FireSparks';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from '@/components/SectionLabel';
import { Heart, Compass, ShieldCheck, Award, Handshake } from 'lucide-react';
import { FloatingPixelElements } from '@/components/FloatingPixelElements';

gsap.registerPlugin(ScrollTrigger);

export function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

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
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Core content cards (Mission & Objective)
      if (coreRef.current) {
        gsap.fromTo(
          coreRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: coreRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Pillars cards
      if (pillarsRef.current) {
        gsap.fromTo(
          pillarsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: 'top 85%',
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
      id="missao"
      className="relative py-20 md:py-32 overflow-hidden bg-[#F7F7FF]"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #D2E4F0 0%, #F7F7FF 80%)',
      }}
    >
      <PixelGroundWave hideCeiling />
      <FireSparks count={60} className="inset-0 opacity-30" />
      <FloatingPixelElements count={6} />
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-[#27187E]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-[#0145F2]/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Headline */}
        <div ref={headlineRef} className="text-center mb-16 opacity-0">
          <SectionLabel text="PROPÓSITO & VERDADE" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-text-primary leading-tight">
            Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0145F2] to-[#27187E] drop-shadow-[0_0_15px_rgba(1, 69, 242,0.25)]">Missão & Compromisso</span>
          </h2>
          <p className="font-body text-base md:text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
            Acreditamos que a confiança é o maior ativo de um negócio. Por isso, fugimos de fórmulas milagrosas e focamos em entregar engenharia digital honesta e de alto padrão.
          </p>
        </div>

        {/* Mission and Objective Grid */}
        <div
          ref={coreRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Card: Mission */}
          <div className="premium-card p-8 md:p-10 flex flex-col justify-between opacity-0 hover:shadow-[0_0_30px_rgba(39, 24, 126,0.08)]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#27187E]/10 flex items-center justify-center text-[#0145F2] mb-6 border border-[#27187E]/20 shadow-[0_0_15px_rgba(39, 24, 126,0.2)]">
                <Heart size={24} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-text-primary mb-4">
                Nossa Missão
              </h3>
              <p className="font-body text-text-secondary leading-relaxed text-base">
                Desmistificar a tecnologia e democratizar o acesso a sites de alto padrão de usabilidade e performance. Nossa missão é guiar empresas na internet com honestidade técnica, construindo páginas robustas que dignificam a marca e protegem o investimento de nossos parceiros.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-black/[0.04] text-xs font-semibold text-text-muted uppercase tracking-wider">
              ✦ Sem falsas promessas de lucros mágicos.
            </div>
          </div>

          {/* Card: Objective */}
          <div className="premium-card p-8 md:p-10 flex flex-col justify-between opacity-0 hover:shadow-[0_0_30px_rgba(1, 69, 242,0.08)]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#27187E]/10 flex items-center justify-center text-[#0145F2] mb-6 border border-[#27187E]/20 shadow-[0_0_15px_rgba(1, 69, 242,0.2)]">
                <Compass size={24} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-text-primary mb-4">
                Nosso Objetivo
              </h3>
              <p className="font-body text-text-secondary leading-relaxed text-base">
                Criar ferramentas de conversão verdadeiras, rápidas e estáveis que conectam pessoas reais a negócios reais. Unimos design planejado com precisão no desenvolvimento para entregar projetos que não apenas encantam esteticamente, mas geram vendas, contatos e autoridade real.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-black/[0.04] text-xs font-semibold text-text-muted uppercase tracking-wider">
              ✦ Foco em usabilidade e velocidade extrema.
            </div>
          </div>
        </div>

        {/* Pillars Headline */}
        <div className="text-center mb-10">
          <span className="font-heading text-xs font-bold text-[#27187E] tracking-widest uppercase">
            COMO CONSTRUÍMOS RELACIONAMENTOS DURADOUROS
          </span>
          <h4 className="font-heading text-xl md:text-2xl font-bold text-text-primary mt-2">
            Os Três Pilares da Nossa Parceria
          </h4>
        </div>

        {/* Trust Pillars Grid */}
        <div
          ref={pillarsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Pillar 1: Transparência */}
          <div className="bg-[#EDF1F5]/40 border border-black/[0.04] rounded-2xl p-6 md:p-8 hover:border-[#27187E]/20 hover:bg-[#EDF1F5]/60 transition-all duration-300 opacity-0">
            <div className="text-[#0145F2] mb-4">
              <ShieldCheck size={26} />
            </div>
            <h5 className="font-heading text-lg font-bold text-text-primary mb-2">
              Transparência Radical
            </h5>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Explicamos detalhadamente cada etapa do projeto. Sem letras miúdas, sem jargões inacessíveis e sem taxas ocultas. Você sabe exatamente o que está comprando e como o seu site é construído.
            </p>
          </div>

          {/* Pillar 2: Artesanal */}
          <div className="bg-[#EDF1F5]/40 border border-black/[0.04] rounded-2xl p-6 md:p-8 hover:border-[#27187E]/20 hover:bg-[#EDF1F5]/60 transition-all duration-300 opacity-0">
            <div className="text-[#0145F2] mb-4">
              <Award size={26} />
            </div>
            <h5 className="font-heading text-lg font-bold text-text-primary mb-2">
              Desenvolvimento Sob Medida
            </h5>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Seu negócio não é uma cópia, e o seu site também não deve ser. Fugimos de ferramentas infladas e lentas. Planejamos a arquitetura do zero, focando na identidade visual e no SEO da sua marca.
            </p>
          </div>

          {/* Pillar 3: Parceria */}
          <div className="bg-[#EDF1F5]/40 border border-black/[0.04] rounded-2xl p-6 md:p-8 hover:border-[#27187E]/20 hover:bg-[#EDF1F5]/60 transition-all duration-300 opacity-0">
            <div className="text-[#0145F2] mb-4">
              <Handshake size={26} />
            </div>
            <h5 className="font-heading text-lg font-bold text-text-primary mb-2">
              Parceria Contínua
            </h5>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Nosso suporte não termina na data da entrega. Oferecemos acompanhamento contínuo, backups seguros e atualizações técnicas para que o seu site continue leve, rápido e livre de bugs com o passar dos anos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
