# 🚀 Criatividade Web — Web Agency Portfolio

Portfolio moderno e interativo da **Criatividade Web**, uma agência focada na criação de sites profissionais, rápidos, responsivos e de altíssima conversão. O site utiliza uma identidade visual inspirada na estética retro/pixel art combinada com animações fluidas de última geração.

---

## ✨ Funcionalidades Principais

* **Efeitos Visuais Interativos:**
  * **Coin Particles:** Sistema de física de moedas douradas interativas (Canvas 2D).
  * **Pixel Ground Wave:** Efeito retro ondulado de blocos coloridos baseado em ondas senoidais.
* **Seções Completas para Conversão:**
  * **Hero Section** com animações de entrada cronometradas e efeito paralaxe.
  * **Benefits Section** em formato de grid moderno para destacar diferenciais.
  * **Pain & Solution Section** evidenciando as dores dos clientes e a solução ideal.
  * **Plans Section** com tabelas e cards de preços destacados.
  * **Testimonials Section** com reviews interativos.
  * **FAQ Section** com accordions animados via GSAP.
* **Performance e Acessibilidade:**
  * Smooth Scroll via Lenis.
  * Otimizado para SEO (Meta Tags, Open Graph e Semântica HTML).

---

## 🛠️ Tecnologias Utilizadas

* **Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Bundler & Dev Server:** [Vite](https://vite.dev/)
* **Estilização:** [Tailwind CSS v3](https://tailwindcss.com/) + Componentes [shadcn/ui](https://ui.shadcn.com/)
* **Animações:** [GSAP (GreenSock)](https://greensock.com/gsap/) + [Lenis](https://lenis.darkroom.engineering/) (Smooth Scroll)
* **Design & Typography:** Google Fonts (Press Start 2P, Outfit, Inter)

---

## 📂 Estrutura do Repositório

```bash
criatividadeweb/
├── app/
│   ├── dist/               # ⚡ Versão final compilada pronta para produção (servida no deploy)
│   ├── package.json        # Gerenciamento de dependências e scripts
│   ├── vite.config.ts      # Configuração do Vite
│   └── tailwind.config.js  # Configuração de temas e estilos do Tailwind
├── tech-spec.md            # Especificações técnicas e arquitetura do projeto
└── README.md               # Este arquivo de documentação
```

> [!IMPORTANT]
> A pasta de desenvolvimento `/app/src` não está incluída neste repositório. Por isso, a execução é feita a partir da pasta compilada e otimizada `/app/dist`.

---

## 🚀 Como Rodar e Testar Localmente

Para rodar a versão compilada localmente no seu computador:

1. Acesse o diretório `/app`:
   ```bash
   cd app
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de visualização (preview):
   ```bash
   npm run preview
   ```
4. Abra no seu navegador o endereço indicado (geralmente `http://localhost:4173/`).

---

## ☁️ Como Fazer o Deploy Manual (HostGator)

Para colocar o site no ar na sua hospedagem HostGator de forma manual:

1. Abra a pasta `/app/dist` no seu computador.
2. Copie todos os arquivos e pastas que estão dentro dela (ex: `index.html`, `assets/`, `portfolio/`, etc.).
3. Acesse o **cPanel** da sua HostGator e abra o **Gerenciador de Arquivos**.
4. Vá para o diretório **`public_html`** (que é o diretório raiz do seu domínio `criatividadeweb.com.br`).
5. Faça o upload dos arquivos copiados diretamente lá. Pronto! Seu site estará online.
