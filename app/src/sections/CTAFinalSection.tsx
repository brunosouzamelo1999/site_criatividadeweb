import { useEffect, useRef } from 'react';
import { PixelGroundWave } from '@/components/PixelGroundWave';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FireSparks } from '@/components/FireSparks';
import { PixelButton } from '@/components/PixelButton';
import { FloatingPixelElements } from '@/components/FloatingPixelElements';
import { MessageCircle, Shield, Clock, Lock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function CTAFinalSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        subheadlineRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.4,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Button glow pulse
      if (ctaRef.current) {
        const btn = ctaRef.current.querySelector('a');
        if (btn) {
          gsap.to(btn, {
            boxShadow: '0 0 40px rgba(230,57,70,0.5)',
            duration: 1.5,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          });
        }
      }

      gsap.fromTo(
        trustRef.current?.children || [],
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
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
      className="relative py-24 md:py-40 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 40%, #EDF1F5 0%, #F7F7FF 100%)',
      }}
    >
      <PixelGroundWave hideCeiling hideFloor />
      <FireSparks sidesOnly count={80} className="inset-0 opacity-85" />
      <FloatingPixelElements count={10} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
        <h2
          ref={headlineRef}
          className="font-heading text-3xl md:text-4xl lg:text-[48px] font-bold text-text-primary leading-[1.7] opacity-0"
        >
          Seu negócio merece um{' '}
          <span className="text-[#0145F2] text-glow-cyan">site profissional</span>{' '}
          que realmente gere resultados.
        </h2>

        <p
          ref={subheadlineRef}
          className="font-body text-base md:text-lg text-text-secondary mt-5 max-w-[560px] mx-auto opacity-0"
        >
          Não deixe seu negócio invisível na internet. Dê o próximo passo e transforme sua presença digital hoje mesmo.
        </p>

        <div ref={ctaRef} className="mt-10 opacity-0">
          <PixelButton
            href="https://wa.me/5592999845217?text=Ol%C3%A1%21%20Quero%20transformar%20minha%20presen%C3%A7a%20digital%20com%20um%20site%20profissional."
            icon={<MessageCircle size={20} />}
            large
            className="shadow-glow-red"
          >
            Falar no WhatsApp
          </PixelButton>
        </div>

        <div
          ref={trustRef}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-8"
        >
          <span className="flex items-center gap-2 text-text-muted text-sm">
            <Shield size={16} />
            Atendimento 100% humano
          </span>
          <span className="flex items-center gap-2 text-text-muted text-sm">
            <Clock size={16} />
            Resposta em até 2h
          </span>
          <span className="flex items-center gap-2 text-text-muted text-sm">
            <Lock size={16} />
            Orçamento sem compromisso
          </span>
        </div>
      </div>
    </section>
  );
}



