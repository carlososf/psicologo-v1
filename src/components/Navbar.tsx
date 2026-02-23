import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Como Você Se Sente", href: "#sentimentos" },
  { label: "Nossa Abordagem", href: "#abordagem" },
  { label: "Especialistas", href: "#especialistas" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Blog", href: "#blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#fdfaf6]/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#527d52] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8 2 4 5.5 4 10c0 3 1.5 5.5 4 7l4 5 4-5c2.5-1.5 4-4 4-7 0-4.5-4-8-8-8z" fill="white" opacity="0.9" />
              <circle cx="12" cy="10" r="3" fill="#527d52" />
            </svg>
          </div>
          <span style={{ fontFamily: "'Lora', serif" }} className="text-xl font-semibold text-[#1a2744]">
            Mente Segura
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#334f34] hover:text-[#527d52] font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+551140028922"
            className="flex items-center gap-2 text-sm text-[#527d52] font-medium hover:text-[#3f6340] transition-colors"
          >
            <Phone size={15} />
            (11) 4002-8922
          </a>
          <a
            href="#agendar"
            className="bg-[#527d52] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#3f6340] transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Agendar Sessão
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#1a2744] p-2"
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#fdfaf6] border-t border-[#e4ede4] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base text-[#334f34] font-medium hover:text-[#527d52] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#agendar"
            onClick={() => setOpen(false)}
            className="bg-[#527d52] text-white text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-[#3f6340] transition-all mt-2"
          >
            Agendar Sessão
          </a>
        </div>
      )}
    </header>
  );
}
