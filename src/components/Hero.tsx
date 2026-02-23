import { ArrowDown, Shield, Star, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#fdfaf6]">
      {/* Organic background blobs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, #a3c1a3 0%, transparent 70%)",
          borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
          transform: "translate(10%, -10%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom left, #e2c9a8 0%, transparent 70%)",
          borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%",
          transform: "translate(-10%, 10%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#e4ede4] text-[#3f6340] text-sm font-medium px-4 py-2 rounded-full">
            <Shield size={14} />
            Ambiente 100% Seguro e Sigiloso
          </div>

          {/* Headline */}
          <h1
            style={{ fontFamily: "'Lora', serif" }}
            className="text-5xl lg:text-6xl font-bold text-[#1a2744] leading-tight"
          >
            O silêncio que você{" "}
            <span className="italic text-[#527d52]">carrega</span>{" "}
            merece um lugar seguro para ser ouvido.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg text-[#4a5568] leading-relaxed max-w-lg">
            Terapias personalizadas para quem busca mais do que respostas: busca{" "}
            <strong className="text-[#1a2744] font-semibold">transformação real</strong>.
            Nossa equipe une ciência, acolhimento e presença genuína.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar minha sessão de acolhimento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#527d52] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#3f6340] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar via WhatsApp
            </a>
            <a
              href="#sentimentos"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#527d52] text-[#527d52] font-semibold px-8 py-4 rounded-full hover:bg-[#e4ede4] transition-all duration-200 text-base"
            >
              Como posso te ajudar?
              <ArrowDown size={18} />
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-[#4a5568]">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} className="text-[#d0a87a] fill-[#d0a87a]" />
                ))}
              </div>
              <span>+500 pacientes acolhidos</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#4a5568]">
              <Users size={16} className="text-[#527d52]" />
              <span>8 especialistas disponíveis</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#4a5568]">
              <Shield size={16} className="text-[#527d52]" />
              <span>CFP registrado</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden lg:block">
          {/* Main card */}
          <div
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
            style={{ borderRadius: "40% 20% 30% 50% / 30% 40% 60% 50%" }}
          >
            <div
              className="w-full h-[520px] overflow-hidden"
              style={{
                borderRadius: "40% 20% 30% 50% / 30% 40% 60% 50%",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
                alt="Clínica Psicológica Mente Segura"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute -left-8 top-20 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 max-w-[200px]">
            <div className="w-10 h-10 rounded-full bg-[#e4ede4] flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2a10 10 0 110 20A10 10 0 0112 2z" fill="#527d52" opacity="0.2" />
                <path d="M12 6v6l4 2" stroke="#527d52" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1a2744]">Primeira sessão</p>
              <p className="text-xs text-[#4a5568]">Hoje às 16h disponível</p>
            </div>
          </div>

          <div className="absolute -right-6 bottom-24 bg-white rounded-2xl shadow-lg p-4 max-w-[180px]">
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={12} className="text-[#d0a87a] fill-[#d0a87a]" />
              ))}
            </div>
            <p className="text-xs text-[#1a2744] font-medium leading-snug">
              "Finalmente encontrei um espaço onde me sinto segura."
            </p>
            <p className="text-xs text-[#4a5568] mt-1">— Ana P.</p>
          </div>

          {/* Crisis button */}
          <div className="absolute top-4 right-4 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
            <a href="tel:188" className="flex items-center gap-2 text-xs text-red-600 font-semibold">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              CVV: 188 (24h)
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#527d52] animate-bounce">
        <span className="text-xs font-medium tracking-widest uppercase">Explorar</span>
        <ArrowDown size={18} />
      </div>
    </section>
  );
}
