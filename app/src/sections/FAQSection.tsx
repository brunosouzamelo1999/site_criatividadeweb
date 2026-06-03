import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from '@/components/SectionLabel';
import { FloatingPixelElements } from '@/components/FloatingPixelElements';
import { Plus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Quanto tempo leva para o site ficar pronto?',
    answer: 'Nossa tecnologia proprietária nos permite entregar Landing Pages de elite em menos de 7 dias úteis. Para projetos mais robustos e complexos, o prazo médio de refinamento total fica entre 7 a 14 dias. Você terá velocidade recorde sem abrir mão da alta fidelidade visual.',
  },
  {
    question: 'O site será responsivo para celular?',
    answer: 'Sim! Todos os nossos sites são desenvolvidos com design responsivo, o que significa que eles se adaptam automaticamente a qualquer tamanho de tela — celular, tablet ou desktop. Esse é um padrão em todos os nossos planos, sem custo adicional.',
  },
  {
    question: 'Posso editar o site depois?',
    answer: 'Com certeza! Oferecemos duas rotas: a flexibilidade do WordPress + Elementor, ideal para quem quer editar tudo com facilidade, ou o desenvolvimento via "Código de Elite" (React), como o nosso próprio site. A vantagem do código customizado é a performance extrema, segurança absoluta e animações imersivas que sistemas comuns não conseguem alcançar. Independente da escolha, cuidamos de toda a base técnica de Hospedagem e Domínio para você.',
  },
  {
    question: 'Vocês oferecem suporte após a entrega?',
    answer: 'Sim, todos os nossos planos incluem um período de suporte após a entrega (7, 15 ou 30 dias, conforme o plano escolhido). Durante esse período, ajudamos com ajustes, dúvidas e pequenas correções. Após o período de suporte, oferecemos planos de manutenção mensal.',
  },
  {
    question: 'Preciso já ter hospedagem e domínio?',
    answer: 'Não necessariamente. O domínio e a hospedagem são os "alicerces" do seu site. Se você já os possui, trabalhamos neles. Caso contrário, a Criatividade Web oferece o benefício de hospedar seu projeto em nossos servidores de elite de alta performance. Isso garante velocidade extrema, segurança reforçada e você não precisa lidar com configurações técnicas complexas — nós cuidamos de tudo para você.',
  },
  {
    question: 'Quanto vou gastar com hospedagem e domínio por ano?',
    answer: 'Normalmente, um domínio custa em média R$ 40/ano e uma hospedagem de qualidade varia entre R$ 300 a R$ 600/ano. O diferencial da Criatividade Web é que, ao fechar o projeto conosco, você pode utilizar nossa infraestrutura de servidores de alta performance. Isso significa que você elimina o custo fixo de hospedagem com terceiros e ainda garante que seu site rode em um ambiente otimizado especificamente para a nossa tecnologia.',
  },
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
      });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-black/[0.04] last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 py-6 px-6 text-left group"
      >
        <span className={`font-heading text-base md:text-lg transition-all duration-300 ${isOpen ? 'text-[#0145F2] text-glow-cyan font-semibold' : 'text-text-primary group-hover:text-[#0145F2]'}`}>
          {question}
        </span>
        <Plus
          size={20}
          className={`text-[#0145F2] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
        />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="px-6 pb-6">
          <p className="font-body text-sm md:text-base text-text-secondary leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

      gsap.fromTo(
        accordionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: accordionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="relative bg-bg-secondary py-20 md:py-32 overflow-hidden">
      <FloatingPixelElements count={6} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12">
        <div ref={headlineRef} className="text-center opacity-0">
          <SectionLabel text="PERGUNTAS FREQUENTES" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[48px] font-bold text-text-primary">
            Tire suas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0145F2] to-[#27187E] drop-shadow-[0_0_15px_rgba(1, 69, 242,0.25)]">dúvidas</span>
          </h2>
          <p className="font-body text-base md:text-lg text-text-secondary mt-4">
            Ainda tem alguma pergunta? Estamos aqui para ajudar.
          </p>
        </div>

        <div
          ref={accordionRef}
          className="mt-14 border border-[#27187E]/15 rounded-2xl overflow-hidden bg-[#EDF1F5]/40 backdrop-blur-md opacity-0 shadow-lg hover:border-white/[0.1] transition-all duration-300"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
