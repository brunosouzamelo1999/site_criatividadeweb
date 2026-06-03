import { useEffect, useRef, useState } from 'react';
import { PixelGroundWave } from '@/components/PixelGroundWave';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FireSparks } from '@/components/FireSparks';
import { SectionLabel } from '@/components/SectionLabel';
import { ShoppingBag, Building2, Target, Gem, Globe, MessageCircle } from 'lucide-react';
import { FloatingPixelElements } from '@/components/FloatingPixelElements';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: 'Loja Virtual (E-commerce)',
    icon: <ShoppingBag size={16} />,
    description: 'Plataformas de vendas robustas, otimizadas para carregamento rápido e máxima conversão de vendas.',
    tech: 'Código Puro (React) ou WordPress + WooCommerce',
    mainLink: '/portfolio/landing_page_moda_e_commerce/code.html',
    items: [
      {
        id: 'ecommerce-1',
        name: 'Moda & E-commerce',
        cover: '/card_capa_moda.png',
        link: '/portfolio/landing_page_moda_e_commerce/code.html',
        tag: 'Moderna & Visual',
      },
      {
        id: 'ecommerce-2',
        name: 'Eletrônicos & Tech Lab',
        cover: '/car_loda_eletronicos.png',
        link: '/portfolio/site_loja_de_eletronicos/home_tech_lab/code.html',
        tag: 'Alta Performance',
      },
      { 
        id: 'ecommerce-3', 
        name: 'Acessórios de Luxo',
        cover: '/capa_acessorios.png',
        link: '/portfolio/ecommerce_acessorios/code.html',
        tag: 'Design Sofisticado',
      },
      { 
        id: 'ecommerce-4', 
        name: 'Produtos Personalizados',
        cover: '/capa_personalizados.png',
        link: '/portfolio/ecommerce_personalizados/code.html',
        tag: 'Totalmente Otimizado',
      },
      { 
        id: 'ecommerce-5', 
        name: 'Loja Conceito Moderna',
        cover: '/capa_moderno.png',
        link: '/portfolio/ecommerce_moderno/code.html',
        tag: 'Layout Premium',
      },
    ],
  },
  {
    title: 'Site Institucional',
    icon: <Building2 size={16} />,
    description: 'Páginas corporativas e Landing Pages de alta conversão para consolidar sua autoridade no mercado.',
    tech: 'Código de Elite (React/Next.js) ou WordPress',
    mainLink: '#',
    items: [
      { 
        id: 'inst-1', 
        name: 'Agência Digital Criativa',
        cover: '/capa_agencia.png',
        link: '/portfolio/institucional_agencia/code.html',
        tag: 'Animações Fluídas',
      },
      { 
        id: 'inst-2', 
        name: 'Arquitetura & Design',
        cover: '/capa_arquiteto.png',
        link: '/portfolio/institucional_servicos/code.html',
        tag: 'Visual Minimalista',
      },
      { 
        id: 'inst-3', 
        name: 'Advocacia & Consultoria',
        cover: '/capa_advocacia.png',
        link: '/portfolio/institucional_consultoria/code.html',
        tag: 'Segurança & Confiança',
      },
      { 
        id: 'inst-4', 
        name: 'Portfólio Pessoal Pro',
        cover: '/capa_portfolio.png',
        link: '/portfolio/institucional_portfolio/code.html',
        tag: 'Identidade Forte',
      },
      { 
        id: 'inst-5', 
        name: 'Landing Page de Alta Conversão',
        cover: '/capa_landing.png',
        link: '/portfolio/institucional_landing_page/code.html',
        tag: 'Foco em Vendas',
      },
    ],
  },
  {
    title: 'Nichos Específicos',
    icon: <Target size={16} />,
    description: 'Soluções personalizadas e planejadas para atender às demandas específicas do seu setor comercial.',
    tech: 'Sistemas Dedicados com Integrações Inteligentes',
    mainLink: '/portfolio/landing_page_the_culinary_editorial/code.html',
    items: [
      {
        id: 'niche-1',
        name: 'Gastronomia & Restaurantes',
        cover: '/capa_restaurante.png',
        link: '/portfolio/landing_page_the_culinary_editorial/code.html',
        tag: 'Experiência Gourmet',
      },
      {
        id: 'niche-2',
        name: 'Loja de Presentes',
        cover: '/capa_presentes.png',
        link: '/portfolio/loja_de_presentes/home_presentes_nicos/code.html',
        tag: 'Alta Conversão',
      },
      {
        id: 'niche-3',
        name: 'Academia & Fitness Hub',
        cover: '/capa_academia.png',
        link: '/portfolio/nicho_academia/code.html',
        tag: 'Energético & Moderno',
      },
      { 
        id: 'niche-4', 
        name: 'Clínica de Estética & SPA',
        cover: '/capa_estetica.png',
        link: '/portfolio/nicho_estetica/code.html',
        tag: 'Clean & Sofisticado',
      },
      { 
        id: 'niche-5', 
        name: 'Alimentação & Health',
        cover: '/capa_alimentacao.png',
        link: '/portfolio/nicho_alimentacao/code.html',
        tag: 'Foco no Produto',
      },
    ],
  },
  {
    title: 'Site Premium',
    icon: <Gem size={16} />,
    description: 'Projetos de elite sob medida com animação complexa, interatividade e desempenho extremo.',
    tech: 'Código de Elite (React/Vite) com motor GSAP Avançado',
    mainLink: '/portfolio/landing_page_chapeu_esportivo/code.html',
    items: [
      {
        id: 'premium-1',
        name: 'Chapéu Esportivo Premium',
        cover: '/card_capa_chapeu.png',
        link: '/portfolio/landing_page_chapeu_esportivo/code.html',
        tag: '3D & Interativo',
      },
      { 
        id: 'premium-2', 
        name: 'Moda & Conector Visual',
        cover: '/card_capa_moda.png',
        link: '/portfolio/landing_page_moda_e_commerce/code.html',
        tag: 'GSAP Avançado',
      },
      { 
        id: 'premium-3', 
        name: 'Gastronomia Sensorial',
        cover: '/card_capa_culinaria.png',
        link: '/portfolio/landing_page_the_culinary_editorial/code.html',
        tag: 'UX Premium',
      },
      { 
        id: 'premium-4', 
        name: 'Gifts & Experiência de Compra',
        cover: '/card_loja_presente.png',
        link: '/portfolio/loja_de_presentes/home_presentes_nicos/code.html',
        tag: 'Micro-interações',
      },
    ],
  },
];

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate headline
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate grid items when tab changes
  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.children;
      gsap.killTweensOf(cards);
      gsap.fromTo(
        cards,
        { opacity: 0, y: 25, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
        }
      );
    }
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative py-24 px-6 md:px-12 overflow-hidden bg-[#F7F7FF]"
      style={{
        background: 'radial-gradient(ellipse at 50% 100%, #D2E4F0 0%, #F7F7FF 80%)',
      }}
    >
      <PixelGroundWave hideCeiling />
      <FloatingPixelElements count={6} />
      {/* Ciano Particles Dust */}
      <FireSparks count={80} className="inset-0 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headlineRef} className="text-center mb-16 opacity-0">
          <SectionLabel text="ESTILOS & TEMPLATES" className="mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-text-primary leading-tight">
            Nossa Galeria de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0145F2] to-[#27187E] drop-shadow-[0_0_15px_rgba(1, 69, 242,0.25)]">Estilos Imersivos</span>
          </h2>
          <p className="font-body text-base md:text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
            Explore diferentes estruturas e designs concebidos por nossa agência. Selecione uma categoria para visualizar nossos modelos de alta conversão.
          </p>
        </div>

        {/* Tab Switcher (Wix style pill tabs, using abstract Lucide Icons!) */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#EDF1F5]/60 border border-white/5 backdrop-blur-md rounded-full p-1.5 flex flex-wrap justify-center gap-1.5 max-w-3xl shadow-[0_4px_30px_rgba(39, 24, 126,0.08)]">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 font-heading text-xs md:text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
                  activeTab === idx
                    ? 'bg-gradient-to-r from-[#27187E] to-[#0145F2] text-[#F7F7FF] shadow-[0_0_15px_rgba(39, 24, 126,0.4)]'
                    : 'text-text-secondary hover:text-text-primary hover:bg-black/5'
                }`}
              >
                <span className="flex-shrink-0">{cat.icon}</span>
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Meta */}
        <div className="max-w-3xl mx-auto text-center mb-14 bg-[#EDF1F5]/35 border border-black/[0.03] backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm">
          <h3 className="font-heading text-xl font-bold text-[#0145F2]">
            {categories[activeTab].title}
          </h3>
          <p className="font-body text-sm text-text-secondary mt-2">
            {categories[activeTab].description}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-text-muted tracking-wider uppercase bg-black/[0.02] border border-black/[0.04] px-4 py-1.5 rounded-full">
            <Globe size={12} className="text-[#0145F2]" />
            Tecnologia: <span className="text-text-primary font-bold ml-1">{categories[activeTab].tech}</span>
          </div>
        </div>

        {/* Interactive Grid of Browser Mockups (Wix style) */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {categories[activeTab].items.map((item, idx) => (
            <div
              key={item.id || idx}
              className="flex flex-col group h-full transition-all duration-300"
            >
              {/* Browser Frame Window */}
              <div className="relative rounded-2xl bg-[#EDF1F5] border border-[#27187E]/10 shadow-[0_15px_40px_rgba(39, 24, 126, 0.06)] group-hover:border-[#0145F2]/30 group-hover:shadow-[0_20px_50px_rgba(1, 69, 242,0.06)] transition-all duration-500 overflow-hidden flex flex-col h-full">
                
                {/* Browser Header Bar */}
                <div className="bg-[#FFFFFF] border-b border-black/[0.04] h-10 px-4 flex items-center gap-4 flex-shrink-0">
                  {/* Browser close dots */}
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-[#e74c3c] transition-colors duration-300" />
                    <span className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-[#f1c40f] transition-colors duration-300" />
                    <span className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-[#2ecc71] transition-colors duration-300" />
                  </div>
                  
                  {/* Address Bar */}
                  <div className="flex-1 max-w-[200px] md:max-w-[260px] mx-auto bg-white/40 h-6 rounded-md flex items-center justify-center gap-2 border border-white/[0.02] px-3">
                    <Globe size={10} className="text-text-muted" />
                    <span className="font-heading text-[9px] text-text-muted tracking-wide truncate">
                      criatividadeweb.com/{item.id}
                    </span>
                  </div>
                </div>

                {/* Screenshot Area (Clicável com link para o demonstrativo) */}
                <a
                  href={item.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-video w-full overflow-hidden bg-[#FFFFFF] flex-shrink-0 block cursor-pointer group/img"
                >
                  {item.cover ? (
                    <img
                      src={item.cover}
                      alt={item.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center opacity-30">
                      <div className="w-6 h-6 border border-dashed border-[#0145F2]/40 rounded-full mb-2 animate-spin" />
                      <span className="font-heading text-[10px] text-text-muted tracking-widest uppercase">EM DESENVOLVIMENTO</span>
                    </div>
                  )}

                  {/* Tech Tag Overlay */}
                  <div className="absolute top-3 left-3 bg-[#EDF1F5]/85 backdrop-blur-md border border-white/5 text-text-primary font-heading text-[9px] font-bold tracking-wider px-3 py-1 rounded-full shadow-md">
                    {item.tag}
                  </div>

                  {/* Luxury Hover Overlay Indicator */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-[#EDF1F5]/95 text-[#0145F2] border border-[#27187E]/20 font-heading text-[9px] font-semibold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                      Ver Demonstrativo
                    </span>
                  </div>
                </a>

                {/* Info and Action Footer */}
                <div className="p-5 flex-grow flex flex-col justify-between bg-gradient-to-b from-[#EDF1F5] to-[#FFFFFF]">
                  <div>
                    <h4 className="font-heading text-base font-bold text-text-primary group-hover:text-[#0145F2] transition-colors duration-300">
                      {item.name}
                    </h4>
                  </div>

                  <div className="mt-5 flex items-center justify-center">
                    <a
                      href={`https://wa.me/5592999845217?text=Ol%C3%A1%21%20Gostei%20muito%20do%20estilo%20de%20site%20${encodeURIComponent(item.name)}%20e%20gostaria%20de%20fazer%20um%20projeto%20similar.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#27187E]/10 hover:bg-[#0145F2]/20 border border-[#27187E]/20 hover:border-[#0145F2]/40 text-[#0145F2] font-heading text-[11px] font-bold py-2 px-6 rounded-full shadow-[0_0_15px_rgba(39, 24, 126,0.1)] transition-all duration-300 w-full text-center"
                    >
                      <MessageCircle size={13} />
                      Orçar Estilo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
