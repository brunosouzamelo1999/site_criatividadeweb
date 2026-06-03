# AURA // LUXURY ACCESSORIES
## Diretrizes de Identidade Visual & Design System Premium

---

### SLIDE 1: A Essência da Marca AURA
#### "O Tempo, Redefinido."
* **Posicionamento:** Alta costura digital, exclusividade e refinamento técnico.
* **Propósito:** Elevar a experiência de e-commerce de acessórios de luxo (relógios, óculos, joalheria) ao patamar de marcas de grife internacionais.
* **Tom de Voz:** Sofisticado, minimalista, atemporal e confiável.
* **Inspirado em:** Rolex, Cartier, Chanel e Audemars Piguet.

---

### SLIDE 2: A Paleta de Cores Premium (Tailwind Color Tokens)
Uma paleta de alto contraste que descansa os olhos e destaca as fotografias dos produtos como jóias reluzentes.

| Nome do Token | Cor Hexadecimal | Função Principal no Design System | Sensação Psicológica |
| :--- | :--- | :--- | :--- |
| **`luxury-black`** | `#0D0D0D` | Tela de fundo principal da aplicação. | Mistério, prestígio e infinito. |
| **`luxury-charcoal`**| `#1A1A1A` | Painéis internos, rodapé e categorias secundárias. | Solidez, profundidade e modernidade. |
| **`luxury-gold`** | `#D4AF37` | Ponto focal metálico, preços, botões ativos e tags. | Exclusividade, valor e raridade. |
| **`luxury-goldLight`**| `#F3E5AB` | Destaques alternados de títulos e botões secundários. | Brilho champanhe, leveza e sofisticação. |
| **`luxury-cream`** | `#FDFBF7` | Tipografia padrão e corpo de textos do site. | Elegância, conforto visual e toque editorial. |

---

### SLIDE 3: Tipografia & Ritmo de Leitura
A tipografia cria um contraste harmônico entre a tradição clássica e a precisão suíça moderna.

* **Títulos Principais (Headings):**
  * **Família:** `Playfair Display` (Serifada)
  * **Estilo:** Normal com trechos em Itálico Dourado (`italic text-luxury-goldLight`).
  * **Aplicação:** Títulos de hero, nomes de coleções e seções nobres.
  * **Objetivo:** Evocar a tradição das prensas mecânicas tradicionais e revistas de alta moda (estilo *Vogue*).

* **Textos de Apoio e Valores (Body & UI):**
  * **Família:** `Lato` (Sans-Serif) & Fontes Mono-espaçadas.
  * **Estilo:** Fino / Leve (`font-light`), tamanho reduzido.
  * **Aplicação:** Descrições de produtos, dados de faturamento e tabelas.
  * **Objetivo:** Legibilidade máxima, precisão e sobriedade científica.

* **Menu, Subtítulos e Tags (Navigation & Micro-labels):**
  * **Espaçamento:** Super espaçado (`tracking-[0.2em]` ou `tracking-widest`).
  * **Estilo:** Caixa Alta (UPPERCASE) em fontes pequenas (`text-xs`).
  * **Objetivo:** Sensação de "respiro" visual. O design minimalista de luxo vive do espaço vazio.

---

### SLIDE 4: Texturas Digitais & Profundidade (Layers)
Como a interface simula elementos físicos reais no navegador:

* **Efeito Vidro Jateado (Glassmorphism):**
  * **Fórmula:** `background: rgba(13, 13, 13, 0.85); backdrop-filter: blur(10px);`
  * **Aplicação:** Navbar fixa no topo.
  * **Comportamento:** Ao rolar o site, os produtos passam de forma borrada sob a barra, criando profundidade física 3D.
* **Micro-bordas Sombreadas:**
  * **Fórmula:** `border-white/5` (Apenas 5% de opacidade no branco).
  * **Aplicação:** Divisões de seções e contorno de produtos.
  * **Objetivo:** Estruturar o site quase invisivelmente, sem "poluição visual" de linhas pretas ou cinzas pesadas.
* **Painéis Suspensos (Floating Sheets):**
  * Gavetas de sacola e faturamento flutuam com sombreamento denso e translúcido, dando foco total ao checkout.

---

### SLIDE 5: Micro-interações e Dinâmica de Movimento
O luxo reside nos detalhes de como o site reage ao toque e ao olhar:

* **O Novo Menu Hamburger:**
  * Três linhas finas e cinzas de 1.5px com espaçamento perfeito.
  * No clique, as linhas giram e a linha do meio desaparece, morfanado em um **"X" dourado** perfeitamente simétrico com transição suave (`transition-all duration-300`).
* **Zoom Dinâmico de Imagem:**
  * Ao passar o cursor em qualquer item, a imagem sofre um aumento suave (`scale-105`) com duração longa. Dá a sensação de aproximação física para examinar a costura ou o metal.
* **Linhas de Hover Orgânicas:**
  * Links do menu principal têm uma linha inferior dourada invisível que se expande do centro para as bordas apenas no foco do mouse.

---

### SLIDE 6: Arquitetura de Conversão & UX (User Experience)
AURA une a beleza artística com engenharia de vendas eficiente:

* **Faturamento Unificado (Single-Drawer Flow):**
  * O carrinho e o checkout ocorrem na mesma gaveta lateral direita, reduzindo as etapas de compra.
  * Inputs são formatados com cantos arredondados discretos e bordas que brilham em dourado ao receber digitação.
* **Segurança e Feedback Visual (Console de Criptografia):**
  * O usuário simula a compra e acompanha um terminal com logs simulados de faturamento de luxo. Isso gera engajamento e validação de alta tecnologia.
* **Canal de Co-criação (Feedback Pins):**
  * Clientes e diretores de arte podem clicar em qualquer pixel da tela para fixar alfinetes de comentário visual 3D vermelhos com comentários salvos no LocalStorage.

---
*Manual de Identidade Visual AURA. Projetado e implementado por Criatividade Web, 2026.*
