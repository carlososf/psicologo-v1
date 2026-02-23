import { CrisisBar } from "./components/CrisisBar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { Approach } from "./components/Approach";
import { Therapists } from "./components/Therapists";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { Blog } from "./components/Blog";
import { Scheduling } from "./components/Scheduling";
import { Footer } from "./components/Footer";
import { FloatingButtons } from "./components/FloatingButtons";

export function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Top crisis bar */}
      <CrisisBar />

      {/* Sticky navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* 1. Hero — A Chamada */}
        <Hero />

        {/* 2. Pain Points — Identificação emocional */}
        <PainPoints />

        {/* 3. Approach — A Ciência do Acolhimento */}
        <Approach />

        {/* 4. Therapists — Match Terapêutico */}
        <Therapists />

        {/* 5. How It Works + FAQ — Porto Seguro */}
        <HowItWorks />

        {/* 6. Testimonials — Prova Social */}
        <Testimonials />

        {/* 7. Blog — SEO + Conteúdo */}
        <Blog />

        {/* 8. Scheduling — CTA Final */}
        <Scheduling />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating action buttons */}
      <FloatingButtons />
    </div>
  );
}
