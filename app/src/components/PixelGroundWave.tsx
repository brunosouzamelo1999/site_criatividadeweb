import { useEffect, useRef } from 'react';

export function PixelGroundWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = 120;
      }
    };

    resize();

    const animate = () => {
      timeRef.current += 0.5;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const height = canvas.height;
      const width = canvas.width;

      // Draw a subtle dark-tech top line to blend with the hero
      const fadeGrad = ctx.createLinearGradient(0, 0, 0, height);
      fadeGrad.addColorStop(0, 'rgba(6, 6, 8, 1)');
      fadeGrad.addColorStop(0.3, 'rgba(6, 6, 8, 0.4)');
      fadeGrad.addColorStop(1, 'rgba(6, 6, 8, 0)');
      ctx.fillStyle = fadeGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw perspective vanishing lines (vertical perspective)
      ctx.lineWidth = 1;
      const horizonY = 10;
      const numLines = 26;
      const spacing = width / (numLines - 1);

      for (let i = 0; i < numLines; i++) {
        const xStart = i * spacing;
        const ripple = Math.sin((i * 0.4) + (timeRef.current * 0.04)) * 12;

        const grad = ctx.createLinearGradient(xStart, horizonY, xStart + ripple, height);
        grad.addColorStop(0, 'rgba(39, 24, 126, 0.01)');
        grad.addColorStop(0.4, 'rgba(39, 24, 126, 0.12)');
        grad.addColorStop(1, 'rgba(1, 69, 242, 0.4)');
        ctx.strokeStyle = grad;

        ctx.beginPath();
        ctx.moveTo(width / 2 + (xStart - width / 2) * 0.2, horizonY);
        ctx.lineTo(xStart + ripple, height);
        ctx.stroke();
      }

      // Draw horizontal lines with exponential 3D scale spacing
      const numHoriz = 6;
      for (let i = 0; i < numHoriz; i++) {
        const rawProgress = (i / numHoriz) + ((timeRef.current * 0.008) % (1 / numHoriz));
        const y = horizonY + Math.pow(rawProgress, 2) * (height - horizonY);

        const opacity = Math.min(0.5, Math.pow(rawProgress, 2.0) * 0.5);
        ctx.strokeStyle = `rgba(1, 69, 242, ${opacity})`;
        ctx.lineWidth = 0.5 + rawProgress * 1.2;

        // Wave ripple through horizontal lines
        ctx.beginPath();
        for (let x = 0; x <= width; x += 15) {
          const wave = Math.sin((x * 0.004) + (timeRef.current * 0.025)) * 5 * rawProgress;
          if (x === 0) {
            ctx.moveTo(x, y + wave);
          } else {
            ctx.lineTo(x, y + wave);
          }
        }
        ctx.stroke();
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
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[120px] overflow-hidden" style={{ zIndex: 2 }}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
