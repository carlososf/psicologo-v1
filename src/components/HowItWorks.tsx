import { MessageCircle, ClipboardList, Calendar, Heart, Lock, Video } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Triagem Inteligente",
    description:
      "Responda 5 perguntas simples. Nosso sistema analisa seu perfil e indica os profissionais mais adequados para o que você está vivendo.",
    color: "#e4ede4",
    iconColor: "#527d52",
  },
  {
    number: "02",
    icon: Calendar,
    title: "Escolha seu Horário",
    description:
      "Veja a agenda em tempo real dos profissionais disponíveis. Sessões online via videochamada segura ou presencialmente em nosso espaço.",
    color: "#f7f0e6",
    iconColor: "#bf8a54",
  },
  {
    number: "03",
    icon: Heart,
    title: "Sessão de Acolhimento",
    description:
      "A primeira sessão é diferente: sem pressão, sem formalidades. É um espaço para você se apresentar e sentir se a conexão está ali.",
    color: "#e4ede4",
    iconColor: "#527d52",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Acompanhamento Contínuo",
    description:
      "Sessões semanais ou quinzenais. Você evolui no seu ritmo, com suporte entre sessões via canal seguro quando necessário.",
    color: "#f7f0e6",
    iconColor: "#bf8a54",
  },
];

const faqs = [
  {
    q: "Quanto custa uma sessão?",
    a: "Os valores variam por profissional e modalidade (online/presencial). Entre em contato para conhecer as opções — também trabalhamos com escala social.",
  },
  {
    q: "As sessões são sigilosas?",
    a: "Absolutamente. O sigilo profissional é um dever ético do psicólogo, garantido pelo Código de Ética do CFP. Nada do que você compartilha sai da sessão.",
  },
  {
    q: "Como funcionam as sessões online?",
    a: "Via plataforma segura e criptografada. Você recebe o link antes da sessão — sem necessidade de instalação de aplicativos.",
  },
  {
    q: "Posso trocar de terapeuta?",
    a: "Sim, sempre. A relação terapêutica é o pilar do processo. Se você não se sentir à vontade, reorganizamos sem custo adicional.",
  },
  {
    q: "A primeira sessão tem algum compromisso?",
    a: "Nenhum. A sessão de acolhimento é um espaço de conhecimento mútuo. Você decide se quer continuar após ela.",
  },
  {
    q: "Aceitam plano de saúde?",
    a: "Atualmente trabalhamos com pagamento particular. Emitimos recibo para reembolso — muitos planos cobrem até 70% do valor.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-28 bg-[#fdfaf6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-sm font-semibold tracking-widest text-[#527d52] uppercase mb-4">
            Porto Seguro
          </span>
          <h2
            style={{ fontFamily: "'Lora', serif" }}
            className="text-4xl lg:text-5xl font-bold text-[#1a2744] mb-6 leading-tight"
          >
            Como funciona sua{" "}
            <span className="italic text-[#527d52]">jornada</span>
          </h2>
          <p className="text-lg text-[#4a5568] leading-relaxed">
            Do primeiro contato à transformação — um processo pensado para
            eliminar fricção e maximizar seu acolhimento.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-[#e4ede4] z-0 -translate-x-1/2" />
                )}
                <div className="relative bg-white rounded-3xl p-7 border border-[#e4ede4] hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon size={22} style={{ color: step.iconColor }} />
                    </div>
                    <span
                      style={{ fontFamily: "'Lora', serif" }}
                      className="text-4xl font-bold text-[#e4ede4]"
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3
                    style={{ fontFamily: "'Lora', serif" }}
                    className="text-lg font-bold text-[#1a2744] mb-3"
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#4a5568] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security strip */}
        <div className="bg-[#1a2744] rounded-3xl p-8 flex flex-wrap justify-center gap-8 mb-20">
          {[
            { icon: Lock, text: "Sigilo garantido por lei" },
            { icon: Video, text: "Videochamada criptografada" },
            { icon: Heart, text: "Sem julgamentos" },
            { icon: Calendar, text: "Cancele quando quiser" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Icon size={18} className="text-[#a3c1a3]" />
              </div>
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div id="faq" className="max-w-3xl mx-auto">
          <h3
            style={{ fontFamily: "'Lora', serif" }}
            className="text-3xl font-bold text-[#1a2744] text-center mb-10"
          >
            Perguntas frequentes
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-[#e4ede4] overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-[#f4f7f4] transition-colors">
                  <span className="font-semibold text-[#1a2744]">{faq.q}</span>
                  <span className="text-[#527d52] text-xl group-open:rotate-45 transition-transform duration-200 font-light ml-4">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-[#4a5568] leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
