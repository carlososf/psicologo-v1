import { Star, MessageCircle, Target } from "lucide-react";

const therapists = [
  {
    name: "Dra. Camila Rocha",
    crp: "CRP 06/123456",
    specialties: ["Ansiedade", "Depressão", "Trauma"],
    approaches: ["TCC", "EMDR"],
    bio: "Especialista em regulação emocional e transtornos de ansiedade. Doutora pela USP com 12 anos de experiência clínica. Acredita que cada história merece ser ouvida com profundidade.",
    rating: 4.9,
    reviews: 87,
    available: true,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
    color: "#c9dbc9",
    textColor: "#334f34",
  },
  {
    name: "Dr. Lucas Mendes",
    crp: "CRP 06/234567",
    specialties: ["Relacionamentos", "Luto", "Casais"],
    approaches: ["Sistêmica", "Humanista"],
    bio: "Referência em terapia de casal e vínculos familiares. Formado em Psicologia Clínica com pós-graduação em Terapia Sistêmica. Sua escuta transforma conflitos em conexão.",
    rating: 4.8,
    reviews: 64,
    available: true,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=200",
    color: "#efe0cc",
    textColor: "#7a5c3a",
  },
  {
    name: "Dra. Beatriz Santos",
    crp: "CRP 06/345678",
    specialties: ["Burnout", "Carreira", "Autoconhecimento"],
    approaches: ["ACT", "Psicanálise"],
    bio: "Especialista em saúde mental no trabalho e burnout. Consultora de grandes empresas e professora universitária. Combina profundidade clínica com visão prática do mundo corporativo.",
    rating: 5.0,
    reviews: 112,
    available: false,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
    color: "#dde8f4",
    textColor: "#3a5296",
  },
  {
    name: "Dr. Felipe Costa",
    crp: "CRP 06/456789",
    specialties: ["Adolescentes", "TDAH", "Autoestima"],
    approaches: ["TCC", "ACT"],
    bio: "Mais de 10 anos trabalhando com adolescentes e jovens adultos. Especialidade em TDAH e dificuldades de aprendizado. Linguagem acessível, relação de confiança.",
    rating: 4.9,
    reviews: 73,
    available: true,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200",
    color: "#fde8e8",
    textColor: "#9b3a2f",
  },
];

export function Therapists() {
  return (
    <section id="especialistas" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest text-[#527d52] uppercase mb-4">
            Match Terapêutico
          </span>
          <h2
            style={{ fontFamily: "'Lora', serif" }}
            className="text-4xl lg:text-5xl font-bold text-[#1a2744] mb-6 leading-tight"
          >
            Conheça quem vai te{" "}
            <span className="italic text-[#527d52]">acompanhar</span>
          </h2>
          <p className="text-lg text-[#4a5568] leading-relaxed">
            A relação terapêutica é a base de tudo. Escolha o profissional com
            quem você se identificar — a conexão faz toda a diferença.
          </p>
        </div>

        {/* Therapist Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {therapists.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-[#e4ede4] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Avatar area */}
              <div
                className="h-40 flex items-center justify-center relative"
                style={{ backgroundColor: t.color }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Availability badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${t.available
                      ? "bg-[#e4ede4] text-[#334f34]"
                      : "bg-[#f5f5f5] text-[#999]"
                      }`}
                  >
                    {t.available ? "● Disponível" : "○ Agenda cheia"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-3">
                  <h3
                    style={{ fontFamily: "'Lora', serif" }}
                    className="text-lg font-bold text-[#1a2744]"
                  >
                    {t.name}
                  </h3>
                  <p className="text-xs text-[#4a5568]">{t.crp}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={12}
                        className="text-[#d0a87a] fill-[#d0a87a]"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#1a2744]">
                    {t.rating}
                  </span>
                  <span className="text-xs text-[#4a5568]">
                    ({t.reviews} avaliações)
                  </span>
                </div>

                {/* Bio */}
                <p className="text-sm text-[#4a5568] leading-relaxed mb-4 flex-1">
                  {t.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {t.specialties.map((sp) => (
                    <span
                      key={sp}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: t.color,
                        color: t.textColor,
                      }}
                    >
                      {sp}
                    </span>
                  ))}
                </div>

                {/* Approaches */}
                <div className="flex gap-1.5 mb-5">
                  {t.approaches.map((ap) => (
                    <span
                      key={ap}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#f4f7f4] text-[#527d52] font-semibold"
                    >
                      {ap}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma sessão com ${t.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 font-semibold text-sm px-4 py-3 rounded-full transition-all ${t.available
                    ? "bg-[#527d52] text-white hover:bg-[#3f6340] shadow-sm hover:shadow-md"
                    : "bg-[#f5f5f5] text-[#999] cursor-not-allowed"
                    }`}
                >
                  <MessageCircle size={15} />
                  {t.available ? "Agendar sessão" : "Lista de espera"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quiz CTA */}
        <div className="mt-16 bg-[#f4f7f4] rounded-3xl p-10 text-center">
          <div className="flex justify-center mb-4">
            <Target size={40} className="text-[#527d52]" />
          </div>
          <h3
            style={{ fontFamily: "'Lora', serif" }}
            className="text-2xl font-bold text-[#1a2744] mb-4"
          >
            Não sabe qual profissional escolher?
          </h3>
          <p className="text-[#4a5568] mb-6 max-w-lg mx-auto">
            Faça nosso quiz de 3 minutos e descubra o profissional mais alinhado
            com o que você está vivendo.
          </p>
          <a
            href="#quiz"
            className="inline-flex items-center gap-2 bg-white border-2 border-[#527d52] text-[#527d52] font-semibold px-8 py-4 rounded-full hover:bg-[#e4ede4] transition-all shadow-sm"
          >
            Fazer o quiz de triagem →
          </a>
        </div>
      </div>
    </section>
  );
}
