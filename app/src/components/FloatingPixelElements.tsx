import { useMemo } from 'react';

interface FloatingPixelElementsProps {
  count?: number;
  className?: string;
}

const colors = [
  { bg: 'bg-[#0145F2]', shadow: '0 0 8px rgba(1, 69, 242, 0.8)' },    // Electric Blue
  { bg: 'bg-[#FFB703]', shadow: '0 0 8px rgba(255, 183, 3, 0.8)' },   // Retro Yellow
  { bg: 'bg-[#E63946]', shadow: '0 0 8px rgba(230, 57, 70, 0.8)' },   // Retro Red
  { bg: 'bg-[#2DC653]', shadow: '0 0 8px rgba(45, 198, 83, 0.8)' },   // Retro Green
  { bg: 'bg-[#7209B7]', shadow: '0 0 8px rgba(114, 9, 183, 0.8)' }    // Retro Violet
];

const sizes = ['w-2 h-2', 'w-3 h-3', 'w-4 h-4', 'w-2 h-3', 'w-3 h-2'];

export function FloatingPixelElements({ count = 6, className = '' }: FloatingPixelElementsProps) {
  const elements = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const colorObj = colors[i % colors.length];
      return {
        id: i,
        colorClass: colorObj.bg,
        shadow: colorObj.shadow,
        size: sizes[i % sizes.length],
        top: `${8 + (i * 13) % 84}%`,
        left: `${4 + (i * 19) % 92}%`,
        delay: `${i * 0.5}s`,
        duration: `${6 + (i % 4)}s`,
        opacity: 0.7 + (i % 3) * 0.12, // Vibrant opacity (0.7, 0.82, 0.94)
      };
    });
  }, [count]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {elements.map((el) => (
        <div
          key={el.id}
          className={`absolute ${el.colorClass} ${el.size} rounded-[1px] animate-float-pixel`}
          style={{
            top: el.top,
            left: el.left,
            animationDelay: el.delay,
            animationDuration: el.duration,
            opacity: el.opacity,
            boxShadow: el.shadow,
          }}
        />
      ))}
    </div>
  );
}

