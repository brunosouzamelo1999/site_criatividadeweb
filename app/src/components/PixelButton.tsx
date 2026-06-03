import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PixelButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'ghost-blue' | 'accent-purple';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  fullWidth?: boolean;
  large?: boolean;
}

export function PixelButton({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon,
  fullWidth = false,
  large = false,
}: PixelButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 font-heading text-sm font-semibold rounded-full transition-all duration-300',
    fullWidth && 'w-full',
    large ? 'px-10 py-4 text-base' : 'px-6 py-3',
    variant === 'primary' && [
      'bg-gradient-to-r from-[#00adb5] to-[#00c2cb] hover:from-[#00e5ff] hover:to-[#00adb5] text-[#060608]',
      'shadow-[0_0_15px_rgba(0,173,181,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]',
      'hover:-translate-y-0.5 active:translate-y-0',
    ],
    variant === 'secondary' && [
      'bg-transparent text-text-primary border border-white/10 backdrop-blur-sm',
      'hover:bg-white/5 hover:border-white/20',
      'hover:-translate-y-0.5 active:translate-y-0',
    ],
    variant === 'accent' && [
      'bg-[#00e5ff] text-[#060608] shadow-[0_0_20px_rgba(0,229,255,0.4)]',
      'hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0',
    ],
    variant === 'ghost' && [
      'bg-transparent text-text-secondary border border-white/5 hover:border-white/10 hover:text-text-primary',
    ],
    variant === 'ghost-blue' && [
      'bg-[#121217] text-text-secondary border border-[#00adb5]/10',
      'hover:bg-[#181822] hover:text-text-primary hover:border-[#00e5ff]/25',
    ],
    variant === 'accent-purple' && [
      'bg-gradient-to-r from-[#8b5cf6] to-[#00adb5] text-text-primary shadow-[0_0_20px_rgba(139,92,246,0.3)]',
      'hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]',
    ],
    className
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
