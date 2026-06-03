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
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    resize();

    const animate = () => {
      timeRef.current += 0.5;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;

      // 3D Perspective settings
      const cx = width / 2;
      const cy = height * 0.42; // slightly elevated vanishing point to sit behind headline
      const zMin = 0.12; // Far tunnel opening depth
      const zMax = 1.0;  // Front edge depth

      // Draw perspective vanishing lines (vertical and horizontal grids on walls)
      ctx.lineWidth = 0.8;
      
      const cols = 20; // columns for floor/ceiling
      const rows = 12; // rows for left/right walls
      const boundaryPoints: { x: number; y: number; isFloor: boolean }[] = [];

      // Ceiling points (y = 0)
      for (let i = 0; i <= cols; i++) {
        boundaryPoints.push({ x: (i / cols) * width, y: 0, isFloor: false });
      }
      // Floor points (y = height)
      for (let i = 0; i <= cols; i++) {
        boundaryPoints.push({ x: (i / cols) * width, y: height, isFloor: true });
      }
      // Left wall points (x = 0)
      for (let j = 1; j < rows; j++) {
        boundaryPoints.push({ x: 0, y: (j / rows) * height, isFloor: false });
      }
      // Right wall points (x = width)
      for (let j = 1; j < rows; j++) {
        boundaryPoints.push({ x: width, y: (j / rows) * height, isFloor: false });
      }

      for (const bp of boundaryPoints) {
        // We calculate starting and ending coordinates along the perspective line
        const dx = bp.x - cx;
        const dy = bp.y - cy;

        // Apply a gentle ripple effect specifically to the floor grid lines
        const waveFactor = bp.isFloor ? Math.sin((bp.x * 0.005) + (timeRef.current * 0.025)) * 12 : 0;

        const xStart = cx + dx * zMin;
        const yStart = cy + dy * zMin + (bp.isFloor ? waveFactor * zMin : 0);
        const xEnd = cx + dx * zMax;
        const yEnd = cy + dy * zMax + (bp.isFloor ? waveFactor * zMax : 0);

        // Gradient for depth effect (fading as it goes deeper)
        const grad = ctx.createLinearGradient(xStart, yStart, xEnd, yEnd);
        grad.addColorStop(0, 'rgba(39, 24, 126, 0.01)');
        grad.addColorStop(0.3, 'rgba(39, 24, 126, 0.15)');
        grad.addColorStop(1, 'rgba(1, 69, 242, 0.45)');
        ctx.strokeStyle = grad;

        ctx.beginPath();
        ctx.moveTo(xStart, yStart);
        ctx.lineTo(xEnd, yEnd);
        ctx.stroke();
      }

      // Draw concentric depth rings (moving rectangles towards the viewer)
      const numRings = 9;
      const progress = (timeRef.current * 0.0025) % (1 / numRings);

      for (let k = 0; k < numRings; k++) {
        const t = (k / numRings) + progress;
        // Exponential scaling for realistic 3D depth acceleration
        const z = zMin + Math.pow(t, 2.5) * (zMax - zMin);

        // Fades out near the vanishing point (far end) and near the screen edges
        const opacity = Math.sin(Math.PI * (z - zMin) / (zMax - zMin)) * 0.45 * (1 - z * 0.2);
        ctx.strokeStyle = `rgba(1, 69, 242, ${opacity})`;
        ctx.lineWidth = 0.5 + Math.pow(t, 2) * 1.5;

        const x1 = cx + (0 - cx) * z;
        const y1 = cy + (0 - cy) * z;
        const x2 = cx + (width - cx) * z;
        const y2 = cy + (height - cy) * z;

        ctx.beginPath();
        // Top edge (ceiling)
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y1);
        // Right edge (right wall)
        ctx.lineTo(x2, y2);

        // Bottom edge (floor) - we draw it with wave ripples to preserve the "wavy ground" feel
        for (let x = x2; x >= x1; x -= 20) {
          const floorWave = Math.sin((x * 0.005) + (timeRef.current * 0.025)) * 12 * Math.pow(z, 2);
          ctx.lineTo(x, y2 + floorWave);
        }
        
        // Left edge (left wall)
        ctx.lineTo(x1, y2);
        ctx.closePath();
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    const debouncedResize = (() => {
      let timeout: ReturnType<typeof setTimeout>;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(resize, 150);
      };
    })();

    window.addEventListener('resize', debouncedResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      <canvas ref={canvasRef} className="w-full h-full opacity-65" />
    </div>
  );
}

