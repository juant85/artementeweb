'use client';

import FadeIn from '@/components/ui/FadeIn';
import SectionTitle from '@/components/ui/SectionTitle';
import { BrainCircuit, ScanSearch, Languages, Lightbulb, Sparkles, Users } from 'lucide-react';

const benefits = [
    { icon: BrainCircuit, title: 'Memoria', desc: 'Ejercicios orientados a la evocación, la asociación y el reconocimiento a partir de obras y relatos.' },
    { icon: ScanSearch, title: 'Atención', desc: 'Entrenamiento de la observación sostenida, el foco y el análisis de detalles.' },
    { icon: Languages, title: 'Lenguaje', desc: 'Expresión oral y escrita: describir, narrar, argumentar y ampliar vocabulario.' },
    { icon: Lightbulb, title: 'Creatividad', desc: 'Interpretación, pensamiento flexible y generación de nuevas ideas.' },
    { icon: Sparkles, title: 'Motivación', desc: 'Curiosidad, interés y disfrute por aprender y participar activamente.' },
    { icon: Users, title: 'Habilidades sociales', desc: 'Intercambio grupal, escucha activa y construcción de vínculos.' },
];

export default function Benefits() {
    return (
        <section id="benefits" className="py-16 md:py-14 md:py-16 bg-slate-50">
            <div className="container mx-auto px-6">
                <SectionTitle
                    subtitle="Beneficios naturales para tu mente y bienestar."
                >
                    Qué ganás con Artemente
                </SectionTitle>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
                    {benefits.map((item, i) => (
                        <FadeIn delay={i * 0.05} key={i} className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border-2 border-slate-100 hover:border-blue-400 hover:shadow-lg transition-all group">
                            <div className="w-14 h-14 md:w-20 md:h-20 bg-blue-50 rounded-2xl shadow-sm flex items-center justify-center text-blue-600 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <item.icon className="w-7 h-7 md:w-10 md:h-10" />
                            </div>
                            <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-sm md:text-base text-slate-900 font-bold leading-snug">
                                {item.desc}
                            </p>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
