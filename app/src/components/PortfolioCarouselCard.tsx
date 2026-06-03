import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselItem {
  id: string;
  name: string;
  cover?: string;
  link?: string;
}

interface PortfolioCarouselCardProps {
  title: string;
  description: string;
  color: 'yellow' | 'purple';
  items: CarouselItem[];
  mainLink: string;
}

export function PortfolioCarouselCard({
  title,
  description,
  color,
  items,
}: PortfolioCarouselCardProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const borderColorClass = color === 'yellow' ? 'border-accent-yellow/50 group-hover:border-accent-yellow' : 'border-accent-purple/50 group-hover:border-accent-purple';
  const shadowClass = color === 'yellow' ? 'hover:shadow-[0_0_30px_rgba(255,214,10,0.15)]' : 'hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]';
  const titleColorClass = color === 'yellow' ? 'text-accent-yellow' : 'text-accent-purple';

  return (
    <div className={`relative bg-[#EDF1F5] rounded-lg border-2 ${borderColorClass} ${shadowClass} overflow-hidden transition-all duration-300 flex flex-col group h-full`}>
      
      {/* Header Info */}
      <div className="p-6 pb-4 border-b border-black/[0.05]">
        <h3 className={`font-heading text-2xl font-bold ${titleColorClass} mb-2`}>
          {title}
        </h3>
        <p className="font-body text-sm text-text-secondary h-10">
          {description}
        </p>
      </div>

      {/* Mini Carousel Container */}
      <div className="relative bg-white/40 py-6 px-2 flex-grow flex flex-col justify-center">
        
        {/* Navigation Buttons (Desktop) */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 z-10 p-1.5 rounded-full bg-black/80 border border-black/10 text-white hover:bg-white/20 transition-colors hidden md:block"
          >
            <ChevronLeft size={16} />
          </button>
        )}
        
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item, idx) => (
            <div
              key={item.id || idx}
              className="snap-start flex-shrink-0 w-[200px] md:w-[240px] flex flex-col gap-2"
            >
              {/* Image Thumbnail */}
              <a 
                href={item.link || '#'} 
                target={item.link ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="block relative aspect-video rounded-sm overflow-hidden border border-black/10 group/item hover:border-white/30 transition-colors bg-[#1A1A2E]"
              >
                {item.cover ? (
                  <img
                    src={item.cover}
                    alt={item.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/item:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center opacity-40">
                    <div className="w-8 h-8 border-2 border-dashed border-white/20 rounded-full mb-2 animate-spin-slow" />
                    <span className="font-pixel text-[10px] text-text-muted uppercase">EM BREVE</span>
                  </div>
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover/item:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="font-display text-[8px] text-white tracking-widest bg-black/60 px-2 py-1 rounded-sm">
                    VER
                  </span>
                </div>
              </a>
              
              {/* Item Title */}
              <div className="text-center">
                <span className="font-pixel text-xs text-text-secondary group-hover/item:text-text-primary transition-colors">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {canScrollRight && items.length > 2 && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 z-10 p-1.5 rounded-full bg-black/80 border border-black/10 text-white hover:bg-white/20 transition-colors hidden md:block"
          >
            <ChevronRight size={16} />
          </button>
        )}
      </div>

      {/* Footer CTA removido para liberar espaço */}

    </div>
  );
}
