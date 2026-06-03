import { useEffect, useState } from 'react';
import { useLenis } from '@/context/LenisContext';

const navLinks = [
  { label: 'Benefícios', target: '#beneficios' },
  { label: 'Portfólio', target: '#portfolio' },
  { label: 'Planos', target: '#planos' },
  { label: 'Processo', target: '#processo' },
  { label: 'Depoimentos', target: '#depoimentos' },
  { label: 'FAQ', target: '#faq' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target: string) => {
    setMobileOpen(false);
    if (lenis) {
      lenis.scrollTo(target, { offset: -80 });
    } else {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F7F7FF]/80 backdrop-blur-xl border-b border-[#27187E]/10 shadow-[0_4px_30px_rgba(39, 24, 126,0.08)]'
            : 'bg-transparent'
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-2 group"
          >
            <span className="text-[#0145F2] drop-shadow-[0_0_8px_rgba(1, 69, 242,0.6)] text-lg">&#9670;</span>
            <span className="font-display text-xs md:text-sm font-bold text-text-primary tracking-[0.2em] group-hover:text-[#0145F2] transition-colors duration-300">
              CRIATIVIDADE WEB
            </span>
          </button>

          {/* Desktop & Mobile Actions */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5592999845217?text=Ol%C3%A1%21%20Quero%20fazer%20um%20or%C3%A7amento%20para%20meu%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block font-heading text-xs font-semibold bg-gradient-to-r from-[#27187E] to-[#0145F2] hover:from-[#0145F2] hover:to-[#27187E] text-[#F7F7FF] px-5 py-2.5 rounded-full shadow-[0_0_15px_rgba(39, 24, 126,0.3)] hover:shadow-[0_0_25px_rgba(1, 69, 242,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Fazer Orçamento
            </a>

            {/* Glowing Hamburger Trigger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-text-primary hover:text-[#0145F2] transition-colors outline-none z-50 relative flex items-center justify-center rounded-full hover:bg-black/5"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5 items-end justify-center w-6 h-6 group">
                <span className={`block h-[2px] bg-text-primary rounded-full transition-all duration-300 origin-center ${
                  mobileOpen ? 'w-6 transform rotate-45 translate-y-[8px] bg-[#0145F2]' : 'w-6 group-hover:bg-[#0145F2]'
                }`}></span>
                <span className={`block h-[2px] bg-[#27187E] rounded-full transition-all duration-300 ${
                  mobileOpen ? 'w-0 opacity-0' : 'w-4 group-hover:w-6 group-hover:bg-[#0145F2]'
                }`}></span>
                <span className={`block h-[2px] bg-text-primary rounded-full transition-all duration-300 origin-center ${
                  mobileOpen ? 'w-6 transform -rotate-45 translate-y-[-8px] bg-[#0145F2]' : 'w-5 group-hover:w-6 group-hover:bg-[#0145F2]'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Overlay (Both Desktop and Mobile) */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 999 }}
        onClick={() => setMobileOpen(false)}
      >
        {/* Panel Content (Slides in from the right) */}
        <div
          className={`fixed top-0 right-0 h-full w-full sm:max-w-md bg-[#F7F7FF]/95 backdrop-blur-2xl border-l border-[#27187E]/10 shadow-2xl p-8 md:p-12 flex flex-col justify-between transform transition-transform duration-500 ease-out`}
          style={{ transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Header of Drawer */}
          <div className="flex justify-between items-center mt-4">
            <span className="font-display text-xs font-bold text-text-primary tracking-[0.2em] flex items-center gap-2">
              <span className="text-[#0145F2]">&#9670;</span> NAVEGAÇÃO
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-text-secondary hover:text-[#0145F2] transition-colors rounded-full hover:bg-black/5"
            >
              <span className="text-xl">&times;</span>
            </button>
          </div>

          {/* Staggered Vertical Menu Links */}
          <nav className="flex flex-col gap-6 md:gap-8 my-auto">
            {navLinks.map((link, idx) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                style={{ transitionDelay: mobileOpen ? `${idx * 40}ms` : '0ms' }}
                className={`text-left font-heading text-2xl md:text-3xl font-extrabold text-text-secondary hover:text-[#0145F2] hover:translate-x-2 tracking-widest uppercase transition-all duration-500 transform ${
                  mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Bottom Call to Action and Social Footer inside Drawer */}
          <div className="space-y-6 border-t border-[#27187E]/10 pt-6">
            <a
              href="https://wa.me/5592999845217?text=Ol%C3%A1%21%20Quero%20fazer%20um%20or%C3%A7amento%20para%20meu%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full font-heading text-xs font-bold bg-gradient-to-r from-[#27187E] to-[#0145F2] hover:from-[#0145F2] hover:to-[#27187E] text-[#F7F7FF] py-4 rounded-full shadow-[0_0_20px_rgba(39, 24, 126,0.3)] hover:shadow-[0_0_25px_rgba(1, 69, 242,0.5)] flex items-center justify-center tracking-widest uppercase transition-all duration-300"
            >
              Fazer Orçamento
            </a>
            <div className="flex justify-between items-center text-[10px] tracking-widest text-text-muted uppercase">
              <span>&copy; 2026 Criatividade Web</span>
              <a href="#" className="hover:text-[#0145F2] transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
