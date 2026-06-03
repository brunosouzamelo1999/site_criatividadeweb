export function initCarousel(selector) {
  const container = document.querySelector(selector);
  if (!container) return;

  const track = container.querySelector('.carousel__track');
  const prevBtn = container.querySelector('.carousel__prev');
  const nextBtn = container.querySelector('.carousel__next');
  
  if (!track || !prevBtn || !nextBtn) return;

  let currentIndex = 0;
  
  function getSlidesPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  function update() {
    const slides = track.querySelectorAll('.carousel__slide');
    const totalSlides = slides.length;
    if (totalSlides === 0) return;

    const slidesPerView = getSlidesPerView();
    const maxIndex = Math.max(0, totalSlides - slidesPerView);
    
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;

    const offset = -(currentIndex * (100 / slidesPerView));
    track.style.transform = `translateX(${offset}%)`;

    if (prevBtn) {
      prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '0.8';
      prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'all';
    }
    
    if (nextBtn) {
      nextBtn.style.opacity = currentIndex >= maxIndex ? '0.3' : '0.8';
      nextBtn.style.pointerEvents = currentIndex >= maxIndex ? 'none' : 'all';
    }
  }

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    update();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    update();
  });

  window.addEventListener('resize', update);
  
  // Initial update
  setTimeout(update, 100);
}

// Auto-init main carousel
setTimeout(() => {
  initCarousel('.project-carousel');
}, 200);
