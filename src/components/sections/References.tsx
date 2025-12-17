'use client';

import FadeIn from '@/components/ui/FadeIn';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';

const quotes = [
    {
        text: "Las sesiones de Artemente me conectan con el universo de las artes visuales.\nEs una experiencia apasionante, placentera y profundamente integradora.\nMe siento como un joven estudiante, feliz de aprender y tomar apuntes.",
        author: "Ricardo Brunello",
        image: "/images/ricardo-brunello.jpg",
    },
    {
        text: "Empecé Artemente en 2020 y se volvió una parte muy importante de mi vida.\nDurante la pandemia fue un gran sostén y un espacio de aprendizaje compartido.\nHoy disfruto mucho más museos, exposiciones y encuentros culturales.",
        author: "Alicia Inés Suárez",
        image: "/images/alicia-ines-suarez.jpg",
    },
    {
        text: "Hace muchos años que asisto a Artemente y siempre lo encuentro actual y motivador.\nMe permite conocer y reconocer nuestra historia a través de los artistas.\nEn un mundo lleno de información, Artemente ayuda a descubrir y recuperar conocimiento a través del arte.",
        author: "Teresa Urdapilleta",
        image: "/images/teresa.jpg",
    },
];

export default function References() {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-blue-50/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10">
                    <SectionTitle
                        subtitle="Experiencias reales de aprendizaje y conexión."
                    >
                        Lo que dicen nuestros participantes
                    </SectionTitle>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {quotes.map((quote, i) => (
                        <FadeIn
                            key={i}
                            delay={i * 0.1}
                            className="bg-white flex flex-col p-8 rounded-2xl border-2 border-slate-100 shadow-sm h-full relative transition-all duration-300 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 group overflow-hidden"
                        >
                            {/* Watermark Quote Icon */}
                            <svg className="absolute top-4 right-4 text-slate-100 w-24 h-24 transform -scale-x-100 -z-0 pointer-events-none opacity-50" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.923 14.929 15.081C15.536 14.24 16.3 13.523 17.221 12.932C18.14 12.339 19.317 11.907 20.751 11.636L20.751 7.155C17.589 7.426 15.228 8.653 13.669 10.835C12.11 13.018 11.33 15.654 11.33 18.742L11.33 21L14.017 21ZM4.68699 21L4.68699 18C4.68699 16.896 4.991 15.923 5.599 15.081C6.206 14.24 6.96899 13.523 7.889 12.932C8.809 12.339 9.986 11.907 11.42 11.636L11.42 7.155C8.25799 7.426 5.897 8.653 4.33799 10.835C2.77899 13.018 1.999 15.654 1.999 18.742L1.999 21L4.68699 21Z" />
                            </svg>

                            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-stone-100 relative z-10">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-slate-100 shadow-sm">
                                    <Image
                                        src={quote.image}
                                        alt={quote.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-lg font-bold text-slate-900 leading-tight mb-1">
                                        {quote.author}
                                    </p>
                                    <div className="flex text-yellow-500 gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10">
                                <p className="text-lg italic text-slate-700 whitespace-pre-line leading-relaxed font-medium">
                                    "{quote.text}"
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
