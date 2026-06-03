import { useEffect, useRef } from 'react';

interface FireSparksProps {
  count?: number;
  className?: string;
}

class Spark {
  x!: number;
  y!: number;
  size!: number;
  speedY!: number;
  speedX!: number;
  opacity!: number;
  life!: number;
  maxLife!: number;
  canvasWidth: number;
  canvasHeight: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.init(true);
  }

  init(randomY: boolean = false) {
    this.x = Math.random() * this.canvasWidth;
    this.y = randomY ? Math.random() * this.canvasHeight : this.canvasHeight + Math.random() * 20;
    this.size = 1.0 + Math.random() * 2.2;
    this.speedY = 0.2 + Math.random() * 0.6;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.maxLife = 100 + Math.random() * 150;
    this.life = randomY ? Math.random() * this.maxLife : 0;
    this.opacity = 1;
  }

  update() {
    this.y -= this.speedY;
    this.x += this.speedX;
    this.life++;
    this.opacity = Math.max(0, 1 - (this.life / this.maxLife));

    if (this.life >= this.maxLife || this.y < -20) {
      this.init(false);
    }
  }

  draw(ctx: CanvasRenderingContext2D, sprite: HTMLCanvasElement) {
    const s = this.size * 6.5; // Texture scale
    ctx.globalAlpha = this.opacity;
    ctx.drawImage(sprite, this.x - s/2, this.y - s/2, s, s);
  }
}

export function FireSparks({ count = 80, className = '' }: FireSparksProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const sparksRef = useRef<Spark[]>([]);
  const spriteRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Create offscreen sprite for the spark (Ninja Optimization)
    const sprite = document.createElement('canvas');
    sprite.width = 32;
    sprite.height = 32;
    const sCtx = sprite.getContext('2d');
    if (sCtx) {
      const gradient = sCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.35, 'rgba(1, 69, 242, 1)');
      gradient.addColorStop(0.7, 'rgba(1, 69, 242, 0.35)');
      gradient.addColorStop(1, 'rgba(39, 24, 126, 0)');
      sCtx.fillStyle = gradient;
      sCtx.fillRect(0, 0, 32, 32);
    }
    spriteRef.current = sprite;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect() || canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resize();

    sparksRef.current = Array.from(
      { length: count },
      () => new Spark(canvas.width, canvas.height)
    );

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (spriteRef.current) {
        for (const spark of sparksRef.current) {
          spark.canvasWidth = canvas.width;
          spark.canvasHeight = canvas.height;
          spark.update();
          spark.draw(ctx, spriteRef.current);
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    const debouncedResize = (() => {
      let timeout: ReturnType<typeof setTimeout>;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(resize, 250);
      };
    })();

    window.addEventListener('resize', debouncedResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', debouncedResize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
