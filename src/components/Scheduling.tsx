import { Calendar, Clock, Video, MapPin, CheckCircle } from "lucide-react";

const times = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export function Scheduling() {
  return (
    <section id="agendar" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <div>
            <span className="inline-block text-sm font-semibold tracking-widest text-[#527d52] uppercase mb-4">
              Onboarding
            </span>
            <h2
              style={{ fontFamily: "'Lora', serif" }}
              className="text-4xl lg:text-5xl font-bold text-[#1a2744] mb-6 leading-tight"
            >
              Sua sessão de{" "}
              <span className="italic text-[#527d52]">acolhimento</span>{" "}
              começa aqui
            </h2>
            <p className="text-lg text-[#4a5568] leading-relaxed mb-8">
              Reserve seu horário em menos de 2 minutos. A primeira sessão é
              pensada para que você se sinta à vontade — sem pressão, sem
              expectativas.
            </p>

            {/* Checklist */}
            <div className="space-y-4 mb-10">
              {[
                "Escolha entre atendimento online ou presencial",
                "Selecione o profissional ou deixe que indiquemos",
                "Confirme via WhatsApp em segundos",
                "Cancele ou reagende sem burocracia",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#527d52] shrink-0" />
                  <span className="text-[#4a5568]">{item}</span>
                </div>
              ))}
            </div>

            {/* Modalities */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f4f7f4] rounded-2xl p-5 flex items-center gap-3">
                <Video size={24} className="text-[#527d52]" />
                <div>
                  <p className="font-semibold text-[#1a2744] text-sm">Online</p>
                  <p className="text-xs text-[#4a5568]">Videochamada segura</p>
                </div>
              </div>
              <div className="bg-[#f7f0e6] rounded-2xl p-5 flex items-center gap-3">
                <MapPin size={24} className="text-[#bf8a54]" />
                <div>
                  <p className="font-semibold text-[#1a2744] text-sm">Presencial</p>
                  <p className="text-xs text-[#4a5568]">Av. Paulista, SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Mock Calendar Widget */}
          <div className="bg-[#fdfaf6] rounded-3xl border border-[#e4ede4] p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-[#527d52]" />
                <span
                  style={{ fontFamily: "'Lora', serif" }}
                  className="font-bold text-[#1a2744]"
                >
                  Julho 2025
                </span>
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full bg-[#e4ede4] flex items-center justify-center text-[#527d52] hover:bg-[#c9dbc9] transition-colors">
                  ‹
                </button>
                <button className="w-8 h-8 rounded-full bg-[#e4ede4] flex items-center justify-center text-[#527d52] hover:bg-[#c9dbc9] transition-colors">
                  ›
                </button>
              </div>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-6 gap-2 mb-3">
              {days.map((d) => (
                <div key={d} className="text-center text-xs text-[#4a5568] font-semibold py-1">
                  {d}
                </div>
              ))}
            </div>

            {/* Day grid - static visual */}
            <div className="grid grid-cols-6 gap-2 mb-6">
              {Array.from({ length: 24 }).map((_, i) => {
                const isSelected = i === 8;
                const hasAvailability = [2, 5, 8, 10, 14, 17, 20].includes(i);
                return (
                  <button
                    key={i}
                    className={`text-center text-sm py-2 rounded-xl font-medium transition-all ${
                      isSelected
                        ? "bg-[#527d52] text-white shadow-md"
                        : hasAvailability
                        ? "bg-white text-[#1a2744] hover:bg-[#e4ede4] border border-[#e4ede4]"
                        : "text-[#c9dbc9] cursor-default"
                    }`}
                  >
                    {i + 7}
                  </button>
                );
              })}
            </div>

            {/* Time slots */}
            <div className="border-t border-[#e4ede4] pt-5">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-[#527d52]" />
                <span className="text-sm font-semibold text-[#1a2744]">
                  Horários disponíveis — Qua, 15 Jul
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-6">
                {times.map((t, i) => (
                  <button
                    key={t}
                    className={`text-xs py-2.5 rounded-xl font-semibold transition-all border ${
                      i === 3
                        ? "bg-[#527d52] text-white border-[#527d52] shadow-sm"
                        : "bg-white text-[#1a2744] border-[#e4ede4] hover:border-[#527d52] hover:text-[#527d52]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar minha sessão de acolhimento para Quarta, 15 de Julho às 14h."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-[#527d52] text-white font-bold py-4 rounded-2xl hover:bg-[#3f6340] transition-all shadow-lg hover:shadow-xl text-base"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Confirmar via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
