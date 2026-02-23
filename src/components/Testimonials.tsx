import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula, 34",
    context: "Tratamento de Ansiedade",
    text: "Depois de anos convivendo com crises de pânico, finalmente entendi o que estava acontecendo comigo. A Dra. Camila me deu ferramentas reais — não apenas escuta, mas transformação.",
    rating: 5,
    initials: "AP",
    color: "#c9dbc9",
  },
  {
    name: "Marcos Vinicius, 41",
    context: "Burnout Profissional",
    text: "Achei que só precisava de férias. A Dra. Beatriz me mostrou que o problema era muito mais profundo. Hoje tenho uma relação completamente diferente com o trabalho e comigo mesmo.",
    rating: 5,
    initials: "MV",
    color: "#efe0cc",
  },
  {
    name: "Juliana & Rafael",
    context: "Terapia de Casal",
    text: "Estávamos à beira do divórcio. O Dr. Lucas nos ensinou a nos ouvir de verdade. Hoje comemoramos 3 anos de terapia com um casamento que não reconheceríamos antes.",
    rating: 5,
    initials: "J+R",
    color: "#dde8f4",
  },
  {
    name: "Thais, 28",
    context: "Luto e Perdas",
    text: "Perder minha mãe me destruiu por dentro. Vim para a terapia sem esperança. Saio de cada sessão um pouco mais inteira. Aqui aprendi que não preciso superar — preciso integrar.",
    rating: 5,
    initials: "TH",
    color: "#fde8e8",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest text-[#527d52] uppercase mb-4">
            Histórias Reais
          </span>
          <h2
            style={{ fontFamily: "'Lora', serif" }}
            className="text-4xl lg:text-5xl font-bold text-[#1a2744] leading-tight"
          >
            Transformações que{" "}
            <span className="italic text-[#527d52]">falam por si</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-[#e4ede4] p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-[#e4ede4] mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} className="text-[#d0a87a] fill-[#d0a87a]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-[#4a5568] leading-relaxed flex-1 mb-6 italic">
                "{t.text}"
              </p>

              {/* Person */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ backgroundColor: t.color, color: "#1a2744" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a2744]">{t.name}</p>
                  <p className="text-xs text-[#4a5568]">{t.context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="bg-[#f4f7f4] rounded-3xl p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { number: "500+", label: "Pacientes Acolhidos" },
            { number: "98%", label: "Taxa de Satisfação" },
            { number: "8", label: "Especialistas" },
            { number: "6+", label: "Anos de Operação" },
          ].map(({ number, label }) => (
            <div key={label}>
              <div
                style={{ fontFamily: "'Lora', serif" }}
                className="text-4xl font-bold text-[#527d52] mb-2"
              >
                {number}
              </div>
              <div className="text-sm text-[#4a5568] font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
