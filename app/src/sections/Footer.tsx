import { Trophy } from 'lucide-react';

const quickLinks = [
  { label: 'Benefícios', target: '#beneficios' },
  { label: 'Planos', target: '#planos' },
  { label: 'Processo', target: '#processo' },
  { label: 'Depoimentos', target: '#depoimentos' },
  { label: 'FAQ', target: '#faq' },
];

export function Footer() {
  const handleClick = (target: string) => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060608] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#00e5ff] text-glow-cyan text-lg">&#9670;</span>
              <span className="font-display text-sm text-text-primary tracking-widest">
                CRIATIVIDADE WEB
              </span>
            </div>
            <p className="font-body text-sm text-text-muted leading-relaxed">
              Sites de elite que geram resultados reais.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-[10px] font-bold text-[#00e5ff] tracking-widest mb-4">
              CONTATO
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5592999845217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-text-secondary hover:text-[#00e5ff] transition-colors duration-300"
                >
                  WhatsApp: (11) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@criatividadeweb.com"
                  className="font-body text-sm text-text-secondary hover:text-[#00e5ff] transition-colors duration-300"
                >
                  contato@criatividadeweb.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/criatividadeweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-text-secondary hover:text-[#00e5ff] transition-colors duration-300"
                >
                  @criatividadeweb
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-[10px] font-bold text-[#00e5ff] tracking-widest mb-4">
              MENU
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => handleClick(link.target)}
                    className="font-body text-sm text-text-secondary hover:text-[#00e5ff] transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Badge */}
          <div className="flex items-start justify-start lg:justify-end">
            <div className="inline-flex flex-col items-center gap-2 bg-[#0c0c10]/80 border border-[#00adb5]/25 rounded-2xl p-4 rotate-[-3deg] shadow-[0_0_20px_rgba(0,173,181,0.1)]">
              <Trophy size={24} className="text-[#00e5ff]" />
              <span className="font-heading text-[9px] font-bold text-text-muted tracking-widest text-center uppercase">
                100%<br />EXCLUSIVO
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] mt-12 pt-8 text-center">
          <p className="font-body text-xs text-text-muted">
            &copy; 2025 Criatividade Web. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
