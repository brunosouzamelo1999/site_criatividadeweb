import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface PixelIconContainerProps {
  icon: ReactNode;
  color?: 'yellow' | 'blue' | 'green' | 'orange' | 'red';
  className?: string;
}

const colorMap = {
  yellow: 'border-[#4A7FA7]/20 bg-[#4A7FA7]/10 text-[#B3CFE5] shadow-[0_0_15px_rgba(74, 127, 167,0.15)] hover:border-[#B3CFE5]/50',
  blue: 'border-[#4A7FA7]/20 bg-[#4A7FA7]/10 text-[#B3CFE5] shadow-[0_0_15px_rgba(74, 127, 167,0.15)] hover:border-[#B3CFE5]/50',
  green: 'border-accent-green/20 bg-accent-green/10 text-accent-green hover:border-accent-green/50',
  orange: 'border-[#4A7FA7]/20 bg-[#4A7FA7]/10 text-[#B3CFE5] shadow-[0_0_15px_rgba(74, 127, 167,0.15)] hover:border-[#B3CFE5]/50',
  red: 'border-accent-red/20 bg-accent-red/10 text-accent-red hover:border-accent-red/50',
};

export function PixelIconContainer({ icon, color = 'yellow', className = '' }: PixelIconContainerProps) {
  return (
    <div
      className={cn(
        'relative w-12 h-12 border rounded-xl flex items-center justify-center transition-all duration-300 group',
        colorMap[color],
        className
      )}
    >
      <span className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
    </div>
  );
}
