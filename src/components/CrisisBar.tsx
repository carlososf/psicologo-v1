import { Phone, AlertCircle } from "lucide-react";

export function CrisisBar() {
  return (
    <div className="bg-[#1a2744] text-white py-2.5 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <AlertCircle size={14} className="text-[#a3c1a3]" />
          <span className="text-white/70">Em crise agora?</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="tel:188"
            className="flex items-center gap-1.5 text-white font-semibold hover:text-[#a3c1a3] transition-colors"
          >
            <Phone size={13} />
            CVV — 188
            <span className="text-white/50 font-normal">(24h, gratuito)</span>
          </a>
          <span className="text-white/30">|</span>
          <a
            href="tel:190"
            className="flex items-center gap-1.5 text-white font-semibold hover:text-[#a3c1a3] transition-colors"
          >
            <Phone size={13} />
            SAMU — 192
          </a>
          <span className="text-white/30">|</span>
          <a
            href="tel:156"
            className="flex items-center gap-1.5 text-white font-semibold hover:text-[#a3c1a3] transition-colors"
          >
            <Phone size={13} />
            CAPS — 156
          </a>
        </div>
      </div>
    </div>
  );
}
