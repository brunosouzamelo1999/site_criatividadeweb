export class StorySystem {
  constructor(options) {
    this.container = document.querySelector(options.container);
    this.stories = options.stories || [];
    this.currentIndex = 0;
    this.progressInterval = null;
    this.currentProgress = 0;
    this.duration = 5000; // default 5s
    this.isPaused = false;

    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    // Clear and build the UI
    this.container.innerHTML = `
      <div class="stories-container">
        <button class="story-close" aria-label="Fechar">&times;</button>
        <div class="story-wrapper">
          <div class="story-progress-container"></div>
          <div class="story-slides-container"></div>
          <div class="story-nav story-nav-prev"></div>
          <div class="story-nav story-nav-next"></div>
        </div>
      </div>
    `;

    const progressContainer = this.container.querySelector('.story-progress-container');
    const slidesContainer = this.container.querySelector('.story-slides-container');

    this.stories.forEach((story, index) => {
      // Add progress bar
      const bar = document.createElement('div');
      bar.className = 'story-progress-bar';
      bar.innerHTML = '<div class="story-progress-fill"></div>';
      progressContainer.appendChild(bar);

      // Add slide
      const slide = document.createElement('div');
      slide.className = `story-slide ${index === 0 ? 'active' : ''}`;
      slide.innerHTML = `
        <img src="${story.url}" alt="${story.title}" class="story-media">
        <div class="story-overlay">
          <h3 class="story-title">${story.title}</h3>
          <p class="story-description">${story.description}</p>
          ${story.link ? `<a href="${story.link}" class="story-cta" target="_blank">Saiba Mais</a>` : ''}
        </div>
      `;
      slidesContainer.appendChild(slide);
    });

    this.modal = this.container.querySelector('.stories-container');
    this.progressFills = this.container.querySelectorAll('.story-progress-fill');
    this.slides = this.container.querySelectorAll('.story-slide');
  }

  bindEvents() {
    const prev = this.container.querySelector('.story-nav-prev');
    const next = this.container.querySelector('.story-nav-next');
    const close = this.container.querySelector('.story-close');

    prev.addEventListener('click', () => this.previous());
    next.addEventListener('click', () => this.next());
    close.addEventListener('click', () => this.close());

    // Pause on hold
    const wrapper = this.container.querySelector('.story-wrapper');
    wrapper.addEventListener('mousedown', () => this.pause());
    wrapper.addEventListener('mouseup', () => this.resume());
    wrapper.addEventListener('touchstart', () => this.pause());
    wrapper.addEventListener('touchend', () => this.resume());
  }

  open(index = 0) {
    this.currentIndex = index;
    this.modal.classList.add('active');
    this.resetProgress();
    this.showStory(this.currentIndex);
    this.startTimer();
  }

  close() {
    this.modal.classList.remove('active');
    this.stopTimer();
  }

  showStory(index) {
    const prevSlide = this.slides[this.currentIndex];
    const nextSlide = this.slides[index];

    if (window.gsap) {
      // Exit animation
      gsap.to(this.slides, { opacity: 0, duration: 0.4 });
      // Entrance animation
      gsap.fromTo(nextSlide, 
        { opacity: 0, scale: 1.1 }, 
        { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
      );
      
      // Animate content items
      const content = nextSlide.querySelector('.story-overlay > *');
      gsap.fromTo(nextSlide.querySelectorAll('.story-overlay > *'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2 }
      );
    }

    this.slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    // Update progress bars state
    this.progressFills.forEach((fill, i) => {
      if (i < index) fill.style.width = '100%';
      else if (i > index) fill.style.width = '0%';
    });
  }

  startTimer() {
    this.stopTimer();
    const startTime = Date.now() - (this.currentProgress * this.duration / 100);
    
    this.progressInterval = setInterval(() => {
      if (this.isPaused) return;

      const elapsed = Date.now() - startTime;
      this.currentProgress = (elapsed / this.duration) * 100;

      if (this.currentProgress >= 100) {
        this.next();
      } else {
        this.progressFills[this.currentIndex].style.width = `${this.currentProgress}%`;
      }
    }, 16);
  }

  stopTimer() {
    clearInterval(this.progressInterval);
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
  }

  next() {
    if (this.currentIndex < this.stories.length - 1) {
      this.currentIndex++;
      this.resetProgress();
      this.showStory(this.currentIndex);
      this.startTimer();
    } else {
      this.close();
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.resetProgress();
      this.showStory(this.currentIndex);
      this.startTimer();
    } else {
      this.resetProgress();
      this.startTimer();
    }
  }

  resetProgress() {
    this.currentProgress = 0;
    if (this.progressFills[this.currentIndex]) {
      this.progressFills[this.currentIndex].style.width = '0%';
    }
  }
}
