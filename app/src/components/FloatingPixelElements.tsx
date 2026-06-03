import { useMemo } from 'react';

interface FloatingPixelElementsProps {
  count?: number;
  className?: string;
}

const colors = ['bg-accent-yellow', 'bg-accent-green', 'bg-accent-blue', 'bg-accent-red', 'bg-accent-orange'];
const sizes = ['w-2 h-2', 'w-3 h-3', 'w-4 h-4', 'w-2 h-3', 'w-3 h-2'];

export function FloatingPixelElements({ count = 6, className = '' }: FloatingPixelElementsProps) {
  const elements = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      color: colors[i % colors.length],
      size: sizes[i % sizes.length],
      top: `${10 + (i * 15) % 80}%`,
      left: `${5 + (i * 23) % 90}%`,
      delay: `${i * 0.7}s`,
      duration: `${6 + (i % 4)}s`,
      opacity: 0.3 + (i % 3) * 0.15,
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {elements.map((el) => (
        <div
          key={el.id}
          className={`absolute ${el.color} ${el.size} rounded-[1px] animate-float-pixel`}
          style={{
            top: el.top,
            left: el.left,
            animationDelay: el.delay,
            animationDuration: el.duration,
            opacity: el.opacity,
          }}
        />
      ))}
    </div>
  );
}
