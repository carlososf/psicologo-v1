import { ArrowRight, Clock, Activity, Flame, HeartCrack } from "lucide-react";

const posts = [
  {
    category: "Ansiedade",
    icon: Activity,
    title: "Crise de ansiedade: o que fazer nos primeiros 5 minutos",
    excerpt:
      "Técnicas de regulação imediata baseadas em evidências científicas. Aprenda a ativar o sistema nervoso parassimpático quando a ansiedade bate.",
    readTime: "5 min",
    color: "#e4ede4",
    textColor: "#334f34",
  },
  {
    category: "Burnout",
    icon: Flame,
    title: "Sintomas de burnout que você está ignorando",
    excerpt:
      "O esgotamento profissional não avisa antes de chegar. Conheça os 7 sinais de alerta que aparecem meses antes do colapso.",
    readTime: "7 min",
    color: "#fef3f2",
    textColor: "#9b3a2f",
  },
  {
    category: "Relacionamentos",
    icon: HeartCrack,
    title: "Por que você repete os mesmos padrões em relacionamentos",
    excerpt:
      "A psicologia dos apegos explica por que continuamos escolhendo as mesmas pessoas. E como mudar esse ciclo de uma vez por todas.",
    readTime: "8 min",
    color: "#f0f4ff",
    textColor: "#3a5296",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-28 bg-[#fdfaf6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-sm font-semibold tracking-widest text-[#527d52] uppercase mb-4">
              Conhecimento que Liberta
            </span>
            <h2
              style={{ fontFamily: "'Lora', serif" }}
              className="text-4xl lg:text-5xl font-bold text-[#1a2744] leading-tight"
            >
              Conteúdo que{" "}
              <span className="italic text-[#527d52]">transforma</span>
            </h2>
          </div>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 text-[#527d52] font-semibold hover:gap-3 transition-all"
          >
            Ver todos os artigos
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Posts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group bg-white rounded-3xl border border-[#e4ede4] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Card header */}
              <div
                className="h-36 flex items-center justify-center text-6xl"
                style={{ backgroundColor: post.color }}
              >
                <post.icon size={64} style={{ color: post.textColor }} />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: post.color,
                      color: post.textColor,
                    }}
                  >
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#4a5568]">
                    <Clock size={12} />
                    {post.readTime}
                  </div>
                </div>

                <h3
                  style={{ fontFamily: "'Lora', serif" }}
                  className="text-lg font-bold text-[#1a2744] mb-3 leading-snug group-hover:text-[#527d52] transition-colors"
                >
                  {post.title}
                </h3>

                <p className="text-sm text-[#4a5568] leading-relaxed flex-1 mb-5">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-[#527d52] font-semibold text-sm group-hover:gap-3 transition-all">
                  Ler artigo
                  <ArrowRight size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* SEO keywords note / Newsletter */}
        <div className="mt-16 bg-gradient-to-r from-[#1a2744] to-[#2d4a2d] rounded-3xl p-10 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 text-white">
            <h3
              style={{ fontFamily: "'Lora', serif" }}
              className="text-2xl font-bold mb-2"
            >
              Receba conteúdo que cuida da sua mente
            </h3>
            <p className="text-[#a3c1a3] text-sm">
              Artigos semanais sobre saúde mental, dicas práticas e novidades
              da clínica. Sem spam, apenas valor.
            </p>
          </div>
          <div className="flex gap-3 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="bg-white/10 text-white placeholder:text-white/40 border border-white/20 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-white/60 flex-1 lg:w-64"
            />
            <button className="bg-[#527d52] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#3f6340] transition-all shrink-0">
              Assinar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
