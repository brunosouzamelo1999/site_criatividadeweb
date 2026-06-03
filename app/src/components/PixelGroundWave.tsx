import { useEffect, useRef } from 'react';

interface PixelGroundWaveProps {
  hideCeiling?: boolean;
  hideFloor?: boolean;
  corridorGap?: number;
}

export function PixelGroundWave({ 
  hideCeiling = false, 
  hideFloor = false, 
  corridorGap 
}: PixelGroundWaveProps) {
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
      const cy = height * 0.42; // vanishing point positioned to sit behind headline
      const zMin = 0.12; // Far tunnel opening depth
      const zMax = 1.0;  // Front edge depth

      // If ceiling and floor are hidden, we make the central corridor wider
      // by separating the vanishing points for the left and right sides.
      const gapFraction = corridorGap !== undefined ? corridorGap : ((hideCeiling && hideFloor) ? 0.18 : 0);
      const gap = width * gapFraction;
      const leftCx = cx - gap;
      const rightCx = cx + gap;

      // Draw perspective vanishing lines (vertical and horizontal grids on walls)
      ctx.lineWidth = 0.8;
      
      const cols = 20; // columns for floor/ceiling
      const rows = 12; // rows for left/right walls
      const boundaryPoints: { x: number; y: number; isFloor: boolean }[] = [];

      // Ceiling points (y = 0) - only if hideCeiling is false
      if (!hideCeiling) {
        for (let i = 0; i <= cols; i++) {
          boundaryPoints.push({ x: (i / cols) * width, y: 0, isFloor: false });
        }
      }
      // Floor points (y = height) - only if hideFloor is false
      if (!hideFloor) {
        for (let i = 0; i <= cols; i++) {
          boundaryPoints.push({ x: (i / cols) * width, y: height, isFloor: true });
        }
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
        const currentCx = bp.x < cx ? leftCx : rightCx;
        const dx = bp.x - currentCx;
        const dy = bp.y - cy;

        // Apply a gentle ripple effect specifically to the floor grid lines
        const waveFactor = bp.isFloor ? Math.sin((bp.x * 0.005) + (timeRef.current * 0.025)) * 12 : 0;

        const xStart = currentCx + dx * zMin;
        const yStart = cy + dy * zMin + (bp.isFloor ? waveFactor * zMin : 0);
        const xEnd = currentCx + dx * zMax;
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

        const x1 = leftCx + (0 - leftCx) * z;
        const y1 = cy + (0 - cy) * z;
        const x2 = rightCx + (width - rightCx) * z;
        const y2 = cy + (height - cy) * z;

        ctx.beginPath();
        if (hideCeiling && hideFloor) {
          // If both ceiling and floor are hidden, only draw left wall and right wall as separate segments
          // Left Wall
          ctx.moveTo(x1, y1);
          ctx.lineTo(x1, y2);
          ctx.stroke();

          // Right Wall
          ctx.beginPath();
          ctx.moveTo(x2, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        } else if (hideCeiling) {
          // If only ceiling is hidden, draw a hollow U-shape (Left wall, wavy floor, Right wall)
          ctx.moveTo(x2, y1);
          ctx.lineTo(x2, y2);
          for (let x = x2; x >= x1; x -= 20) {
            const floorWave = Math.sin((x * 0.005) + (timeRef.current * 0.025)) * 12 * Math.pow(z, 2);
            ctx.lineTo(x, y2 + floorWave);
          }
          ctx.lineTo(x1, y1);
          ctx.stroke();
        } else if (hideFloor) {
          // If only floor is hidden, draw an inverted U-shape
          ctx.moveTo(x1, y2);
          ctx.lineTo(x1, y1);
          ctx.lineTo(x2, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        } else {
          // Draw full closed box (Ceiling, Right wall, wavy floor, Left wall)
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y1);
          ctx.lineTo(x2, y2);
          for (let x = x2; x >= x1; x -= 20) {
            const floorWave = Math.sin((x * 0.005) + (timeRef.current * 0.025)) * 12 * Math.pow(z, 2);
            ctx.lineTo(x, y2 + floorWave);
          }
          ctx.lineTo(x1, y2);
          ctx.closePath();
          ctx.stroke();
        }
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
  }, [hideCeiling, hideFloor, corridorGap]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      <canvas ref={canvasRef} className="w-full h-full opacity-65" />
    </div>
  );
}

