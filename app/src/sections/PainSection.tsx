import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from '@/components/SectionLabel';
import { PixelButton } from '@/components/PixelButton';
import { 
  EyeOff, 
  ShieldAlert, 
  MessageSquareOff, 
  Wrench, 
  HelpCircle, 
  Activity, 
  Trophy 
} from 'lucide-react';
import { FloatingPixelElements } from '@/components/FloatingPixelElements';

gsap.registerPlugin(ScrollTrigger);

const pains = [
  {
    icon: <EyeOff size={22} className="text-red-400" />,
    tag: 'INVISIBILIDADE DIGITAL',
    title: 'Ninguém te encontra no Google',
    text: 'Seu negócio é bom offline, mas na internet você simplesmente não existe para potenciais clientes.',
    borderGlow: 'hover:shadow-[0_0_25px_rgba(239,68,68,0.12)] hover:border-red-500/40',
  },
  {
    icon: <ShieldAlert size={22} className="text-orange-400" />,
    tag: 'FALTA DE AUTORIDADE',
    title: 'Design amador afasta clientes',
    text: 'Um site ultrapassado ou mal feito transmite insegurança. O cliente prefere o concorrente com melhor aparência.',
    borderGlow: 'hover:shadow-[0_0_25px_rgba(249,115,22,0.12)] hover:border-orange-500/40',
  },
  {
    icon: <MessageSquareOff size={22} className="text-red-400" />,
    tag: 'SITE INEFICIENTE',
    title: 'Visitas que não geram contatos',
    text: 'As pessoas até entram na sua página, mas saem logo em seguida sem clicar no WhatsApp ou preencher formulários.',
    borderGlow: 'hover:shadow-[0_0_25px_rgba(239,68,68,0.12)] hover:border-red-500/40',
  },
  {
    icon: <Wrench size={22} className="text-amber-400" />,
    tag: 'DESPERDÍCIO DE TEMPO',
    title: 'Tentou fazer só e perdeu tempo',
    text: 'Plataformas de criação rápida parecem fáceis, mas o resultado final ficou instável, lento e sem alma comercial.',
    borderGlow: 'hover:shadow-[0_0_25px_rgba(245,158,11,0.12)] hover:border-amber-500/40',
  },
  {
    icon: <HelpCircle size={22} className="text-orange-400" />,
    tag: 'DIREÇÃO INCERTA',
    title: 'Paralisia por não saber começar',
    text: 'Muitas opções de hospedagem, domínio, plataformas e códigos. Você quer fazer certo, mas falta o parceiro técnico.',
    borderGlow: 'hover:shadow-[0_0_25px_rgba(249,115,22,0.12)] hover:border-orange-500/40',
  },
];

export function PainSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);

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

      // Diagnostic cards stagger
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Solution box
      gsap.fromTo(
        solutionRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: solutionRef.current,
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
      id="dores"
      className="py-20 md:py-32 overflow-hidden bg-[#F7F7FF] relative"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, #EDF1F5 0%, #F7F7FF 80%)',
      }}
    >
      <FloatingPixelElements count={6} />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div ref={headlineRef} className="text-center opacity-0 mb-16 md:mb-24">
          <SectionLabel text="OS SINTOMAS" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-text-primary leading-tight">
            Seu site atual está <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-600 drop-shadow-[0_0_15px_rgba(239,68,68,0.25)]">afastando clientes</span>?
          </h2>
          <p className="font-body text-base md:text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
            Muitos empreendedores têm excelentes negócios, mas sofrem com uma barreira digital invisível que sabota suas vendas online todos os dias.
          </p>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Luxury Digital Analyzer Scanner Panel */}
          <div className="lg:sticky lg:top-28 bg-[#EDF1F5]/70 border border-black/[0.04] backdrop-blur-md rounded-2xl p-8 shadow-[0_15px_40px_rgba(39, 24, 126, 0.06)]">
            {/* Analyzer Header Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-black/[0.04] mb-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.6)]" />
                <span className="font-heading text-[10px] font-bold text-text-muted tracking-widest uppercase">
                  DIAGNÓSTICO DO SITE
                </span>
              </div>
              <span className="font-heading text-[9px] font-bold text-red-500/80 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-full">
                SISTEMA INSTÁVEL
              </span>
            </div>

            {/* Warning visual grid stats */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white/40 border border-white/[0.02] p-4 rounded-xl">
                <Activity size={24} className="text-red-500 flex-shrink-0 animate-pulse" />
                <div>
                  <h4 className="font-heading text-xs font-bold text-text-primary tracking-wide">
                    TAXA DE ABANDONO
                  </h4>
                  <p className="font-body text-sm font-extrabold text-red-500">
                    +88% dos visitantes saem sem comprar
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-heading text-xs font-bold text-text-secondary tracking-wider mb-2">
                  CONSEQUÊNCIAS DIÁRIAS
                </h4>
                <p className="font-body text-sm text-text-muted leading-relaxed">
                  Sem um design estratégico e de alta fidelidade, sua marca é desvalorizada. Cada dia com um site ineficiente é um dia doando leads qualificados diretamente para os seus concorrentes.
                </p>
              </div>

              {/* A subtle visual divider representing pixel scanning */}
              <div className="relative h-1 bg-black/[0.02] border border-black/[0.04] rounded-full overflow-hidden">
                <span className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-red-500 to-orange-400 animate-scanning-bar" />
              </div>

              <div className="pt-2">
                <h4 className="font-heading text-xs font-bold text-text-secondary tracking-wider mb-3">
                  SAIA DESSA ARMADILHA
                </h4>
                <p className="font-body text-sm text-text-muted leading-relaxed">
                  Não permita que um layout amador sabote seu faturamento. Identifique qual destes problemas está te travando ao lado:
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Sleek Grid of Diagnosis Cards */}
          <div ref={cardsRef} className="flex flex-col gap-5">
            {pains.map((pain, i) => (
              <div
                key={i}
                className={`group bg-[#EDF1F5]/40 border border-black/[0.04] border-l-4 border-l-red-500/70 rounded-2xl p-6 flex items-start gap-5 opacity-0 shadow-lg transition-all duration-300 hover:bg-[#EDF1F5]/75 hover:border-l-red-500 ${pain.borderGlow}`}
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 p-3 rounded-xl bg-black/[0.02] border border-black/[0.04] group-hover:border-red-500/30 transition-all duration-300 shadow-sm">
                  {pain.icon}
                </div>

                {/* Content */}
                <div className="flex-grow min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-heading text-[9px] font-bold text-red-400 tracking-widest uppercase">
                      {pain.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-text-primary group-hover:text-red-400 transition-colors duration-300">
                    {pain.title}
                  </h3>
                  <p className="font-body text-sm text-text-secondary mt-1.5 leading-relaxed">
                    {pain.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Solution CTA Box */}
        <div
          ref={solutionRef}
          className="relative bg-gradient-to-b from-[#EDF1F5] to-[#FFFFFF] border border-[#27187E]/20 hover:border-[#0145F2]/50 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto mt-24 opacity-0 shadow-[0_15px_45px_rgba(39, 24, 126, 0.06),0_0_35px_rgba(39, 24, 126,0.03)] transition-all duration-500"
        >
          <span className="inline-flex items-center gap-2 bg-[#2DC653]/15 text-accent-green border border-accent-green/20 font-heading text-[10px] font-bold tracking-wider px-4 py-1.5 rounded-full mb-6 shadow-[0_0_15px_rgba(45,198,83,0.15)] animate-pulse">
            <Trophy size={14} />
            A CURA DIGITAL
          </span>

          <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-text-primary leading-tight">
            Nós construímos a sua ponte para o sucesso.
          </h3>
          <p className="font-body text-sm md:text-base text-text-secondary max-w-xl mx-auto mt-4 leading-relaxed">
            Substituímos o amadorismo e a falta de visibilidade por um <strong className="text-[#0145F2] font-bold">site de elite</strong>: rápido, responsivo, com design de luxo e totalmente otimizado para transformar simples visitantes em clientes fiéis.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <PixelButton
              href="https://wa.me/5592999845217?text=Ol%C3%A1%21%20Quero%20fazer%20um%20diagn%C3%B3stico%20e%20criar%20um%20site%20de%20elite."
              large
            >
              Fazer meu Diagnóstico Grátis
            </PixelButton>
          </div>
        </div>

      </div>
    </section>
  );
}
