import { useEffect, useRef } from 'react';

interface CoinParticlesProps {
  count?: number;
  className?: string;
}

class Coin {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  wobble: number;
  wobbleSpeed: number;
  canvasWidth: number;
  canvasHeight: number;

  constructor(canvasWidth: number, canvasHeight: number, speedMultiplier: number = 1) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = 8 + Math.random() * 6;
    this.speedY = (0.5 + Math.random() * 1) * speedMultiplier;
    this.speedX = (Math.random() - 0.5) * 1;
    this.opacity = 0.3 + Math.random() * 0.6;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = (Math.random() - 0.5) * 4;
    this.wobble = Math.random() * Math.PI * 2;
    this.wobbleSpeed = 0.02 + Math.random() * 0.03;
  }

  update() {
    this.y -= this.speedY;
    this.x += Math.sin(this.wobble) * 0.5;
    this.wobble += this.wobbleSpeed;
    this.rotation += this.rotationSpeed;

    if (this.y < -20) {
      this.y = this.canvasHeight + 20;
      this.x = Math.random() * this.canvasWidth;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);

    // Glow
    ctx.shadowBlur = 8;
    ctx.shadowColor = `rgba(255, 214, 10, ${this.opacity * 0.4})`;

    // Coin body
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
    gradient.addColorStop(0, `rgba(255, 248, 220, ${this.opacity})`);
    gradient.addColorStop(0.6, `rgba(255, 214, 10, ${this.opacity})`);
    gradient.addColorStop(1, `rgba(218, 165, 32, ${this.opacity})`);

    ctx.beginPath();
    ctx.arc(0, 0, this.size, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Coin inner line (3D effect)
    ctx.beginPath();
    ctx.arc(0, 0, this.size * 0.7, -Math.PI * 0.3, Math.PI * 0.3);
    ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.5})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Coin edge
    ctx.beginPath();
    ctx.arc(0, 0, this.size, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(184, 134, 11, ${this.opacity * 0.6})`;
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.restore();
  }
}

export function CoinParticles({ count = 60, className = '' }: CoinParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const coinsRef = useRef<Coin[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resize();

    const speedMultiplier = count <= 20 ? 0.5 : 1;
    coinsRef.current = Array.from(
      { length: count },
      () => new Coin(canvas.width, canvas.height, speedMultiplier)
    );

    let frameCount = 0;
    const animate = () => {
      frameCount++;
      // Skip frames for performance when count is high
      if (count > 40 && frameCount % 2 !== 0) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const coin of coinsRef.current) {
        coin.canvasWidth = canvas.width;
        coin.canvasHeight = canvas.height;
        coin.update();
        coin.draw(ctx);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    const debouncedResize = (() => {
      let timeout: ReturnType<typeof setTimeout>;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(resize, 200);
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
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}
