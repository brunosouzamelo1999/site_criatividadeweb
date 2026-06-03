// src/components/modalCarousel.js

export function initModal() {
  const modal = document.getElementById('modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal__close');
  const track = modal.querySelector('.modal__content .carousel__track');
  const prevBtn = modal.querySelector('.modal__prev') || modal.querySelector('.carousel__prev.modal-nav');
  const nextBtn = modal.querySelector('.modal__next') || modal.querySelector('.carousel__next.modal-nav');
  
  let currentIndex = 0;
  let slidesCount = 0;

  function update() {
    if (slidesCount === 0) return;
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
    
    if (prevBtn) {
      prevBtn.style.opacity = currentIndex === 0 ? '0.2' : '0.8';
      prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'all';
    }
    if (nextBtn) {
      nextBtn.style.opacity = currentIndex === slidesCount - 1 ? '0.2' : '0.8';
      nextBtn.style.pointerEvents = currentIndex === slidesCount - 1 ? 'none' : 'all';
    }
  }

  function open(images) {
    currentIndex = 0;
    track.innerHTML = '';
    slidesCount = images.length;
    
    images.forEach(src => {
      const slide = document.createElement('div');
      slide.className = 'carousel__slide';
      const img = document.createElement('img');
      img.src = src;
      img.loading = 'lazy';
      slide.appendChild(img);
      track.appendChild(slide);
    });

    modal.classList.add('open');
    modal.hidden = false;
    document.body.style.overflow = 'hidden'; 
    update();
  }

  function close() {
    modal.classList.remove('open');
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentIndex < slidesCount - 1) {
        currentIndex++;
        update();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentIndex > 0) {
        currentIndex--;
        update();
      }
    });
  }

  window.openProjectModal = open;
}

initModal();
