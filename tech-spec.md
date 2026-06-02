# Criatividade Web — Especificação Técnica

## Dependências

### Runtime

| Pacote | Versão | Finalidade |
|--------|--------|------------|
| react | ^19.0.0 | Framework UI |
| react-dom | ^19.0.0 | Renderização DOM |
| gsap | ^3.12.0 | Motor de animação, ScrollTrigger, SplitText |
| lenis | ^1.2.0 | Smooth scroll |
| lucide-react | ^0.500.0 | Ícones |
| react-fast-marquee | ^1.6.5 | Faixa de destaque no hero |

### Dev

| Pacote | Versão | Finalidade |
|--------|--------|------------|
| vite | ^6.0.0 | Bundler / dev server |
| @vitejs/plugin-react | ^4.4.0 | Plugin React para Vite |
| tailwindcss | ^4.0.0 | Utilitários CSS |
| @tailwindcss/vite | ^4.0.0 | Integração Tailwind + Vite |
| typescript | ^5.7.0 | Tipagem estática |
| @types/react | ^19.0.0 | Tipos React |
| @types/react-dom | ^19.0.0 | Tipos ReactDOM |

### Fontes (Google Fonts via `<link>`)

- Press Start 2P (display pixel)
- VT323 (pixel body alternativa)
- Inter (headlines e corpo)

---

## Inventário de Componentes

### Layout (compartilhados entre seções)

| Componente | Fonte | Notas |
|------------|-------|-------|
| Navigation | Custom | Header fixo com 2 estados (transparente → blur). Lógica de scroll própria. |
| Footer | Custom | Grid responsivo 4/2/1 colunas. |
| SmoothScrollProvider | Custom | Wrapper que inicializa Lenis e sincroniza com GSAP ScrollTrigger. Provider de contexto para acesso global à instância Lenis. |

### Seções (page-level, usados uma vez)

| Componente | Notas |
|------------|-------|
| HeroSection | CoinParticles canvas + PixelGroundWave canvas + grid texto/ilustração. |
| BenefitsSection | Grid 3×2 de BenefitCard. |
| PainSection | Lista vertical de PainCard + SolutionBox. |
| PlansSection | Grid 3 colunas de PlanCard. Card do meio com destaque visual. |
| ProcessSection | Lista vertical de ProcessStep com path conectando. |
| TestimonialsSection | Grid 3 colunas de TestimonialCard. |
| FAQSection | Accordion com 5 FAQAccordionItem. |
| CTAFinalSection | Canvas reduzido de partículas + CTA + trust elements. |

### Componentes Reutilizáveis

| Componente | Fonte | Usado por |
|------------|-------|-----------|
| CoinParticles | Custom canvas 2D | HeroSection, CTAFinalSection (props: count, speed range). Sistema de classe `Coin` com loop rAF. |
| PixelGroundWave | Custom canvas 2D | HeroSection. Grid de blocos com onda senoidal. |
| PixelButton | Custom | 8+ instâncias (CTAs nos planos, hero, CTA final, etc.). 4 variants via prop. |
| PixelCard | Custom | BenefitCard, PainCard, PlanCard, ProcessStep, TestimonialCard. Variantes via composição interna. |
| PixelIconContainer | Custom | 6× em BenefitsSection (ícones dos benefícios). |
| SectionLabel | Custom | Todas as 8 seções. |
| PixelBadge | Custom | Badge "Mais Pedido" no plano Profissional, badge de status, categorias. |
| FAQAccordionItem | Custom | 5× em FAQSection. GSAP para animar height (medido). |
| PixelStarRating | Custom | 3× em TestimonialsSection. |
| FloatingPixelElements | Custom | Renderiza divs posicionadas absolutamente com keyframe CSS. Reutilizado em 4+ seções. |
| ScrollProgressBar | Custom | Barra fixa no topo. Um único ScrollTrigger scrub. |

### Hooks

| Hook | Finalidade |
|------|------------|
| useLenis | Acessa instância Lenis do contexto (ex: scroll programático para âncoras). |

---

## Plano de Animações

| Animação | Biblioteca | Abordagem | Complexidade |
|----------|------------|-----------|--------------|
| Coin Particles (hero + CTA final) | Canvas 2D manual | Classe `Coin`, rAF loop, clearRect com alpha para trilhas. Props para variar count/speed. | 🔒 Alta |
| Pixel Ground Wave | Canvas 2D manual | Grid 20×4, onda senoidal por coluna, rAF. | 🔒 Alta |
| Hero headline split-text | GSAP + SplitText | SplitText divide em words/chars, stagger com reveal sequencial. Brilho na palavra "site profissional" após revelação. | 🔒 Alta |
| Hero parallax (multi-camada) | GSAP ScrollTrigger | ScrollTrigger scrub: background −10%, title −40%, subtitle −20%, stats −10%. | Média |
| Hero entrance sequence (tagline → headline → subtitle → CTA → stats → illustration) | GSAP timeline | Timeline sequencial com delays escalonados. Ilustração entra em paralelo ao headline. | Média |
| Pixel Ground Wave loop | Canvas 2D manual | rAF contínuo, independe de scroll. | Baixa |
| Card entrance com stagger | GSAP ScrollTrigger | Batch de cards: translateY + opacity, stagger 0.1. Compartilhado por 5 seções. | Baixa |
| Pain Cards slide-in alternado | GSAP ScrollTrigger | Ímpares: translateX(−60), pares: translateX(+60), stagger 0.15. | Baixa |
| Solution Box "reward chest" | GSAP ScrollTrigger | scale(0.95→1) com back.out(1.5), trigger após último pain card. | Baixa |
| Badge "Mais Pedido" bounce | GSAP | translateY(−20→0) + back.out(2), delay após card visível. | Baixa |
| Plan Card hover (levitação + glow) | CSS transitions | translateY, border-color, box-shadow via Tailwind + custom CSS. | Baixa |
| Process connecting path draw | GSAP ScrollTrigger scrub | height 0→100%, scrub 1, sincronizado com scroll da seção. | Média |
| Process phase number pulse | GSAP ScrollTrigger | scale(0.5→1.1→1) com elastic.out, stagger 0.2 por número. | Baixa |
| FAQ toggle (height animation) | GSAP | Mede height do content, anima height 0→medido. Ícone rotaciona 0→45deg. | Baixa |
| CTA button pulse glow | GSAP | yoyo repeat infinito no box-shadow a cada 3s. | Baixa |
| Pixel corner pulse | CSS keyframes | @keyframes pixelPulse com stagger via animation-delay por canto. | Baixa |
| Floating pixel elements | CSS keyframes | @keyframes floatPixel, duração e delay variados por elemento. | Baixa |
| Scroll progress bar | GSAP ScrollTrigger | Um ScrollTrigger scrub no body, atualiza width de barra fixa. | Baixa |
| Section entrance padrão | GSAP ScrollTrigger | Padrão replicado: label → headline → content, cada um com fade + translateY e delay incremental. Aplicado a todas as seções. | Baixa |
| Navigation scroll state | Custom hook + CSS | Listener de scroll: após 100px, adiciona classe para background blur. Transição CSS. | Baixa |
| Stats counter / ícone entrada | GSAP ScrollTrigger | Fade + translateY stagger nos 3 itens. | Baixa |
| Quote icon rotation (depoimentos) | GSAP ScrollTrigger | rotate(−5deg→0) no ícone de aspas. | Baixa |

---

## Decisões Arquiteturais

### Canvas 2D vs WebGL para efeitos visuais

Coin Particles e Pixel Ground Wave usam **Canvas 2D**, não WebGL. A quantidade de partículas (60 moedas) e a simplicidade visual (círculos dourados com gradiente radial, blocos quadrados coloridos) não justificam a sobrecarga de Three.js/WebGL. Canvas 2D oferece performance suficiente com bundle zero adicional.

### Dupla instância de CoinParticles

Hero e CTA Final compartilham o mesmo componente `CoinParticles` via props: hero usa count=60/speed=0.5−1.5, CTA final usa count=20/speed=0.3−0.8. Evita duplicação de código de loop rAF e classe Coin.

### Lenis como provider de contexto

SmoothScrollProvider expõe a instância Lenis via React Context. O hook `useLenis` permite que qualquer componente (Navigation, botões "Ver Planos ↓") acesse `lenis.scrollTo()` para scroll programático com velocidade ajustada. Isso evita prop drilling da instância.

### Navegação mobile

O hamburger menu em mobile usa um **drawer lateral** (não dropdown). A lógica é estado local (`useState`) no Navigation — não justifica biblioteca de UI para um único drawer simples.
