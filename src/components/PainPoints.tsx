import { useState } from "react";

const pains = [
  {
    emoji: "😰",
    title: "Ansiedade",
    description:
      "O coração acelera sem motivo aparente. Pensamentos que não param. Medo de situações que outros encaram com facilidade.",
    tags: ["Síndrome do Pânico", "Ansiedade Social", "Transtorno Generalizado"],
    color: "#e4ede4",
    textColor: "#334f34",
  },
  {
    emoji: "💔",
    title: "Luto & Perdas",
    description:
      "A dor de perder alguém ou algo essencial. O vazio que parece não ter fundo. A sensação de que nada voltará a ser igual.",
    tags: ["Luto por Pessoas", "Fim de Relacionamentos", "Perda de Emprego"],
    color: "#f7f0e6",
    textColor: "#7a5c3a",
  },
  {
    emoji: "🔥",
    title: "Burnout & Carreira",
    description:
      "Esgotamento total. Trabalhar é um suplício. Aquela paixão pelo que fazia sumiu e você não sabe como recuperar.",
    tags: ["Esgotamento Profissional", "Síndrome de Burnout", "Crise de Identidade"],
    color: "#fef3f2",
    textColor: "#9b3a2f",
  },
  {
    emoji: "🌀",
    title: "Relacionamentos",
    description:
      "Padrões que se repetem. Comunicação que falha. A sensação de estar sempre dando mais do que recebendo.",
    tags: ["Relacionamentos Tóxicos", "Autoestima", "Vínculos Familiares"],
    color: "#f0f4ff",
    textColor: "#3a5296",
  },
  {
    emoji: "🌑",
    title: "Depressão",
    description:
      "O cinza que toma conta de tudo. Sair da cama é uma batalha. O prazer em coisas que amava simplesmente desapareceu.",
    tags: ["Depressão Maior", "Distimia", "Anedonia"],
    color: "#e4ede4",
    textColor: "#1a2744",
  },
  {
    emoji: "🪞",
    title: "Autoconhecimento",
    description:
      "Quem sou eu além dos papéis que desempenho? Terapia não é só para crises — é para quem quer entender a si mesmo.",
    tags: ["Identidade", "Propósito", "Crescimento Pessoal"],
    color: "#f7f0e6",
    textColor: "#527d52",
  },
];

export function PainPoints() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="sentimentos" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest text-[#527d52] uppercase mb-4">
            Identificação
          </span>
          <h2
            style={{ fontFamily: "'Lora', serif" }}
            className="text-4xl lg:text-5xl font-bold text-[#1a2744] mb-6 leading-tight"
          >
            Como você está se sentindo{" "}
            <span className="italic text-[#527d52]">hoje</span>?
          </h2>
          <p className="text-lg text-[#4a5568] leading-relaxed">
            Cada dor tem um nome. Reconhecer o que você está vivendo é o primeiro
            passo para transformação.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <button
              key={i}
              onClick={() => setActive(active === i ? null : i)}
              className="text-left rounded-3xl p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 focus:outline-none"
              style={{
                backgroundColor: active === i ? pain.color : "white",
                borderColor: active === i ? pain.textColor + "40" : "#e4ede4",
              }}
            >
              <span className="text-4xl block mb-4">{pain.emoji}</span>
              <h3
                style={{ fontFamily: "'Lora', serif", color: pain.textColor }}
                className="text-xl font-bold mb-3"
              >
                {pain.title}
              </h3>
              <p className="text-sm text-[#4a5568] leading-relaxed mb-4">
                {pain.description}
              </p>
              {active === i && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {pain.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: pain.textColor + "15",
                        color: pain.textColor,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                  <a
                    href="https://wa.me/5511999999999?text=Olá! Preciso de ajuda com isso."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-3 w-full inline-flex items-center justify-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all"
                    style={{ backgroundColor: pain.textColor }}
                  >
                    Quero ajuda com isso →
                  </a>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-[#f4f7f4] rounded-3xl p-10">
          <p
            style={{ fontFamily: "'Lora', serif" }}
            className="text-2xl text-[#1a2744] font-semibold mb-4"
          >
            Não encontrou o que sente aqui?
          </p>
          <p className="text-[#4a5568] mb-6">
            Cada experiência é única. Nossa equipe está pronta para ouvir o que
            você traz — sem julgamentos.
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#527d52] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#3f6340] transition-all shadow-lg hover:shadow-xl"
          >
            Conversar com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}
