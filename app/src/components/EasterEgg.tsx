import { useState } from 'react';
import { cn } from '@/lib/utils';

interface EasterEggProps {
  discount: 10 | 20;
  className?: string;
  color?: 'yellow' | 'purple' | 'green' | 'red';
}

export function EasterEgg({ discount, className, color = 'yellow' }: EasterEggProps) {
  const [clicked, setClicked] = useState(false);

  const colors = {
    yellow: 'bg-accent-yellow shadow-glow-yellow',
    purple: 'bg-accent-purple shadow-glow-purple',
    green: 'bg-accent-green shadow-glow-green',
    red: 'bg-accent-red shadow-glow-red',
  };

  const message = `Achei o segredo do site [SEGREDO] Quero aproveitar meu desconto de ${discount}% agora!`;
  const whatsappUrl = `https://wa.me/5592999845217?text=${encodeURIComponent(message)}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setClicked(true);
    
    // Pequeno feedback visual antes de redirecionar
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setClicked(false);
    }, 600);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'absolute w-2 h-2 rounded-sm cursor-pointer z-50 animate-pixel-pulse transition-all duration-300',
        colors[color],
        clicked && 'animate-ping scale-150',
        className
      )}
      aria-label="Segredo"
      title="?"
    />
  );
}
