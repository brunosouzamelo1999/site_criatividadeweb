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
      'bg-gradient-to-r from-[#27187E] to-[#0145F2] hover:from-[#0145F2] hover:to-[#27187E] text-[#F7F7FF]',
      'shadow-[0_0_15px_rgba(39, 24, 126,0.3)] hover:shadow-[0_0_25px_rgba(1, 69, 242,0.5)]',
      'hover:-translate-y-0.5 active:translate-y-0',
    ],
    variant === 'secondary' && [
      'bg-transparent text-text-primary border border-black/10 backdrop-blur-sm',
      'hover:bg-black/5 hover:border-white/20',
      'hover:-translate-y-0.5 active:translate-y-0',
    ],
    variant === 'accent' && [
      'bg-[#0145F2] text-[#F7F7FF] shadow-[0_0_20px_rgba(1, 69, 242,0.4)]',
      'hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0',
    ],
    variant === 'ghost' && [
      'bg-transparent text-text-secondary border border-white/5 hover:border-black/10 hover:text-text-primary',
    ],
    variant === 'ghost-blue' && [
      'bg-[#FFFFFF] text-text-secondary border border-[#27187E]/10',
      'hover:bg-[#FFFFFF] hover:text-text-primary hover:border-[#0145F2]/25',
    ],
    variant === 'accent-purple' && [
      'bg-gradient-to-r from-[#8b5cf6] to-[#27187E] text-text-primary shadow-[0_0_20px_rgba(139,92,246,0.3)]',
      'hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(1, 69, 242,0.5)]',
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
