import { coverMap } from './coverMap.js';

const projects = [
  { 
    title: 'Loja de Eletrônicos', 
    slug: 'loja-electronicos',
    screens: [
      'portfolio/SITE_LOJA DE ELETRÔNICOS/home_tech_lab/screen.png',
      'portfolio/SITE_LOJA DE ELETRÔNICOS/product_detail_tech_lab/screen.png',
      'portfolio/SITE_LOJA DE ELETRÔNICOS/shopping_cart_tech_lab/screen.png',
      'portfolio/SITE_LOJA DE ELETRÔNICOS/checkout_tech_lab/screen.png',
      'portfolio/SITE_LOJA DE ELETRÔNICOS/cyber_logic/screen.png'
    ]
  },
  { 
    title: 'Loja de Presentes', 
    slug: 'loja-presentes',
    screens: [
      'portfolio/loja de presentes/home_presentes_nicos/screen.png',
      'portfolio/loja de presentes/produto_camiseta_personalizada/screen.png',
      'portfolio/loja de presentes/carrinho_de_compras/screen.png',
      'portfolio/loja de presentes/finalizar_pedido_checkout/screen.png',
      'portfolio/loja de presentes/personaliza_o_crie_do_seu_jeito/screen.png',
      'portfolio/loja de presentes/velvet_vine/screen.png'
    ]
  },
  { 
    title: 'Restaurantes', 
    slug: 'restaurantes',
    screens: [
      'portfolio/landing_page_The Culinary Editorial/screen.png'
    ]
  },
  { title: 'Moda e E-commerce', slug: 'moda-e-commerce', screens: ['portfolio/Landing_page_moda_e_commerce/screen.png'] },
  { title: 'Chapéu Esportivo', slug: 'chapeu-esportivo', screens: ['portfolio/landing_page_chapeu esportivo/screen.png'] }
];

const fallbackImage = 'hero-illustration.jpg';

export function renderCards() {
  const track = document.querySelector('.project-carousel .carousel__track');
  if (!track) return;
  track.innerHTML = '';

  projects.forEach(project => {
    const slide = document.createElement('div');
    slide.className = 'carousel__slide';
    
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = coverMap[project.slug] || fallbackImage;
    img.alt = `${project.title} cover`;
    img.loading = 'lazy';
    card.appendChild(img);

    const content = document.createElement('div');
    content.className = 'content';
    
    const title = document.createElement('h3');
    title.textContent = project.title;
    content.appendChild(title);

    const viewMoreBtn = document.createElement('button');
    viewMoreBtn.className = 'view-more';
    viewMoreBtn.textContent = 'Ver mais';
    viewMoreBtn.onclick = () => {
      if (window.openProjectModal) {
        window.openProjectModal(project.screens);
      }
    };
    
    content.appendChild(viewMoreBtn);
    card.appendChild(content);
    slide.appendChild(card);
    track.appendChild(slide);
  });
}

renderCards();
