import { Brain, Heart, Lightbulb, Leaf, MessageCircle, Activity } from "lucide-react";

const approaches = [
  {
    icon: Brain,
    name: "TCC",
    full: "Terapia Cognitivo-Comportamental",
    plain: "Mudamos os padrões de pensamento que te sabotam. Identificamos crenças limitantes e construímos novas formas de interpretar o mundo.",
    best: "Ansiedade, Depressão, Fobias, TOC",
    color: "#e4ede4",
    iconColor: "#527d52",
  },
  {
    icon: Heart,
    name: "Psicanálise",
    full: "Abordagem Psicanalítica",
    plain: "Exploramos o que está por baixo da superfície. O inconsciente guarda respostas que a mente consciente ainda não alcançou.",
    best: "Traumas, Padrões relacionais, Autoconhecimento profundo",
    color: "#f7f0e6",
    iconColor: "#bf8a54",
  },
  {
    icon: Leaf,
    name: "Humanista",
    full: "Psicologia Humanista",
    plain: "Você já tem dentro de si a capacidade de crescer. Nossa função é criar o ambiente seguro para que isso aconteça.",
    best: "Autoestima, Propósito, Crise existencial",
    color: "#f0f4ff",
    iconColor: "#3a5296",
  },
  {
    icon: Activity,
    name: "EMDR",
    full: "Dessensibilização e Reprocessamento",
    plain: "Tratamento validado cientificamente para traumas. O cérebro reprocessa memórias dolorosas e perde o poder de machucar.",
    best: "Trauma, TEPT, Memórias dolorosas",
    color: "#fef3f2",
    iconColor: "#9b3a2f",
  },
  {
    icon: Lightbulb,
    name: "ACT",
    full: "Terapia de Aceitação e Compromisso",
    plain: "Não lutamos contra o sofrimento — aprendemos a coexistir com ele enquanto vivemos de acordo com nossos valores mais profundos.",
    best: "Ansiedade crônica, Dor psicológica, Mindfulness",
    color: "#e4ede4",
    iconColor: "#527d52",
  },
  {
    icon: MessageCircle,
    name: "Sistêmica",
    full: "Terapia Sistêmica",
    plain: "Entendemos você dentro do contexto de suas relações. A família, o trabalho, os vínculos — tudo é parte do sistema.",
    best: "Conflitos familiares, Relacionamentos, Casais",
    color: "#f7f0e6",
    iconColor: "#bf8a54",
  },
];

export function Approach() {
  return (
    <section id="abordagem" className="py-28 bg-[#fdfaf6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <span className="inline-block text-sm font-semibold tracking-widest text-[#527d52] uppercase mb-4">
              A Ciência do Acolhimento
            </span>
            <h2
              style={{ fontFamily: "'Lora', serif" }}
              className="text-4xl lg:text-5xl font-bold text-[#1a2744] leading-tight"
            >
              Nossa abordagem,{" "}
              <span className="italic text-[#527d52]">sem psicologuês</span>
            </h2>
          </div>
          <p className="text-lg text-[#4a5568] leading-relaxed">
            Cada técnica é escolhida com base no seu perfil, história e objetivos.
            Não existe fórmula única — existe o caminho que faz sentido para
            <strong className="text-[#1a2744] font-semibold"> você</strong>.
          </p>
        </div>

        {/* Approaches Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {approaches.map((ap, i) => {
            const Icon = ap.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-3xl p-7 border border-[#e4ede4] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: ap.color }}
                >
                  <Icon size={22} style={{ color: ap.iconColor }} />
                </div>
                <div className="mb-1">
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: ap.iconColor }}
                  >
                    {ap.name}
                  </span>
                </div>
                <h3
                  style={{ fontFamily: "'Lora', serif" }}
                  className="text-lg font-bold text-[#1a2744] mb-3"
                >
                  {ap.full}
                </h3>
                <p className="text-sm text-[#4a5568] leading-relaxed mb-4">
                  {ap.plain}
                </p>
                <div className="border-t border-[#e4ede4] pt-4">
                  <p className="text-xs text-[#4a5568] font-medium">
                    <span style={{ color: ap.iconColor }}>✦</span> Indicado para:{" "}
                    <span className="text-[#1a2744]">{ap.best}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Science Banner */}
        <div
          className="mt-16 rounded-3xl p-10 flex flex-col lg:flex-row items-center gap-8"
          style={{ background: "linear-gradient(135deg, #1a2744 0%, #2d4a2d 100%)" }}
        >
          <div className="flex-1 text-white">
            <h3
              style={{ fontFamily: "'Lora', serif" }}
              className="text-3xl font-bold mb-3"
            >
              Imagine acordar sem o peso da ansiedade.
            </h3>
            <p className="text-[#a3c1a3] leading-relaxed">
              Nossos especialistas utilizam métodos validados pela ciência para
              reconstruir seu bem-estar — um passo de cada vez.
            </p>
          </div>
          <a
            href="#agendar"
            className="shrink-0 bg-white text-[#1a2744] font-bold px-8 py-4 rounded-full hover:bg-[#e4ede4] transition-all duration-200 shadow-lg"
          >
            Começar agora →
          </a>
        </div>
      </div>
    </section>
  );
}
