import { Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Heart } from "lucide-react";
import uebiLogo from "../uebi-logo.png";

export function Footer() {
  return (
    <footer className="bg-[#0f1829] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#527d52] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8 2 4 5.5 4 10c0 3 1.5 5.5 4 7l4 5 4-5c2.5-1.5 4-4 4-7 0-4.5-4-8-8-8z" fill="white" opacity="0.9" />
                <circle cx="12" cy="10" r="3" fill="#527d52" />
              </svg>
            </div>
            <span style={{ fontFamily: "'Lora', serif" }} className="text-xl font-semibold">
              Mente Segura
            </span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Um refúgio digital onde cada história encontra espaço, escuta e
            transformação.
          </p>
          <div className="flex gap-3">
            {[Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#527d52] transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ fontFamily: "'Lora', serif" }} className="font-semibold mb-5 text-white">
            Navegação
          </h4>
          <ul className="space-y-3">
            {[
              ["Como Você Se Sente", "#sentimentos"],
              ["Nossa Abordagem", "#abordagem"],
              ["Especialistas", "#especialistas"],
              ["Como Funciona", "#como-funciona"],
              ["Blog", "#blog"],
              ["Agendar Sessão", "#agendar"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Especialidades */}
        <div>
          <h4 style={{ fontFamily: "'Lora', serif" }} className="font-semibold mb-5 text-white">
            Especialidades
          </h4>
          <ul className="space-y-3">
            {[
              "Ansiedade e Pânico",
              "Depressão",
              "Burnout Profissional",
              "Terapia de Casal",
              "Luto e Perdas",
              "TDAH em Adultos",
              "Trauma e TEPT",
              "Autoconhecimento",
            ].map((item) => (
              <li key={item}>
                <a href="#sentimentos" className="text-sm text-white/60 hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: "'Lora', serif" }} className="font-semibold mb-5 text-white">
            Contato
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                href="tel:+551140028922"
                className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone size={15} className="mt-0.5 shrink-0 text-[#a3c1a3]" />
                (11) 4002-8922
              </a>
            </li>
            <li>
              <a
                href="mailto:contato@mentesegura.com.br"
                className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail size={15} className="mt-0.5 shrink-0 text-[#a3c1a3]" />
                contato@mentesegura.com.br
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#a3c1a3]" />
                Av. Paulista, 1374, 8º andar<br />
                Bela Vista, São Paulo — SP
              </div>
            </li>
          </ul>

          {/* Emergency */}
          <div className="mt-6 bg-white/5 rounded-2xl p-4 border border-white/10">
            <p className="text-xs text-white/50 mb-2 font-semibold uppercase tracking-wider">
              Em crise?
            </p>
            <a
              href="tel:188"
              className="flex items-center gap-2 text-[#a3c1a3] font-bold hover:text-white transition-colors"
            >
              <Phone size={14} />
              CVV: 188 (24h grátis)
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div className="text-xs text-white/40 space-y-2 text-center md:text-left">
              <p>© 2025 Mente Segura Psicologia. Todos os direitos reservados.</p>
              <p className="flex items-center justify-center md:justify-start gap-1">
                Feito com <Heart size={12} className="text-red-400 fill-red-400" /> para quem cuida da mente
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">
                Desenvolvido por
              </span>
              <a
                href="https://www.uebistudio.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <img src={uebiLogo} alt="UEBI STUDIO" className="h-8 w-auto object-contain" />
              </a>
            </div>

            <div className="flex gap-6 text-xs text-white/40">
              <a href="#" className="hover:text-white/70 transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white/70 transition-colors">Termos</a>
              <a href="#" className="hover:text-white/70 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

