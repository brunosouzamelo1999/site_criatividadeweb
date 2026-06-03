interface SectionLabelProps {
  text: string;
  className?: string;
}

export function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-4 justify-center ${className}`}>
      <span className="flex-1 h-px border-t border-dashed border-black/10 max-w-[60px]" />
      <span className="font-display text-[10px] md:text-xs text-text-muted tracking-[0.15em] uppercase whitespace-nowrap">
        {text}
      </span>
      <span className="flex-1 h-px border-t border-dashed border-black/10 max-w-[60px]" />
    </div>
  );
}
