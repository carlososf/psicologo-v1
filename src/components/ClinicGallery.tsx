import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=1200",
];

export function ClinicGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef<number | null>(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
    };

    useEffect(() => {
        timerRef.current = window.setInterval(() => {
            nextSlide();
        }, 4000);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    const handleManualNav = (action: () => void) => {
        if (timerRef.current) clearInterval(timerRef.current);
        action();
        timerRef.current = window.setInterval(() => {
            nextSlide();
        }, 4000);
    };

    return (
        <section className="py-24 bg-[#1a2744]">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
                <span className="inline-block text-sm font-semibold tracking-widest text-[#a3c1a3] uppercase mb-4">
                    Nosso Espaço
                </span>
                <h2
                    style={{ fontFamily: "'Lora', serif" }}
                    className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                >
                    Um ambiente <span className="italic text-[#a3c1a3]">acolhedor</span> criado para você
                </h2>
                <p className="text-[#a3c1a3] text-lg max-w-2xl">
                    Conheça o nosso espaço físico e sinta a tranquilidade antes mesmo da sua primeira sessão.
                </p>
            </div>

            <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
                <div className="overflow-hidden rounded-3xl shadow-2xl relative">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {photos.map((photo, i) => (
                            <div key={i} className="min-w-full h-[300px] md:h-[500px] lg:h-[650px] relative">
                                <img
                                    src={photo}
                                    alt={`Espaço Mente Segura ${i + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => handleManualNav(prevSlide)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors z-10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={() => handleManualNav(nextSlide)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors z-10"
                        aria-label="Next image"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                        {photos.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handleManualNav(() => setCurrentIndex(i))}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === i ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
                                    }`}
                                aria-label={`Go to image ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
