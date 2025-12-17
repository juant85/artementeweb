'use client';

import FadeIn from '@/components/ui/FadeIn';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';

const steps = [
    { num: '01', title: 'Inicio / Apertura', desc: 'Presentación de la obra de arte. Contexto histórico y claves visuales para observar.', color: 'bg-blue-600' },
    { num: '02', title: 'Desarrollo / Diálogo', desc: 'Debate grupal guiado. Interpretación, intercambio de ideas y emociones.', color: 'bg-indigo-600' },
    { num: '03', title: 'Desarrollo / Ejercicios', desc: 'Actividades cognitivas específicas: memoria, atención y fluidez verbal.', color: 'bg-purple-600' },
    { num: '04', title: 'Cierre', desc: 'Conclusiones finales, síntesis de lo aprendido y conexión temática.', color: 'bg-teal-600' },
];

export default function ClassStructure() {
    return (
        <section className="py-20 bg-[#FDFBF7] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left: Visual Context (Image) */}
                    <FadeIn direction="right" className="order-1 lg:order-2 h-full">
                        <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl group sticky top-24">
                            <Image
                                src="/images/brain-palette.jpg"
                                alt="Paleta de arte con cerebros coloridos"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-0 left-0 p-8 text-white w-full bg-gradient-to-t from-black/80 to-transparent">
                                <p className="font-black text-2xl mb-2">Creatividad + Estructura</p>
                                <p className="text-base font-medium text-slate-100">La combinación perfecta para estimular tu mente.</p>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-blue-100/50 rounded-3xl blur-3xl transform rotate-3 scale-105" />
                        </div>
                    </FadeIn>

                    {/* Right: Content & Steps (Cards) */}
                    <div className="order-2 lg:order-1">
                        <SectionTitle
                            centered={false}
                            subtitle="90 minutos diseñados para disfrutar y aprender. Estructura clara, contenido motivador."
                        >
                            Cómo es una clase
                        </SectionTitle>

                        <div className="space-y-4">
                            {steps.map((step, i) => (
                                <FadeIn key={i} delay={i * 0.1} direction="left">
                                    <div className="group flex items-start p-5 bg-white rounded-xl shadow-sm border border-stone-100 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                                        {/* Number Badge */}
                                        <div className={`flex-shrink-0 w-12 h-12 ${step.color} text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-md mr-5 group-hover:scale-110 transition-transform`}>
                                            {step.num}
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-slate-600 leading-snug">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>

                        <FadeIn delay={0.5} className="mt-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-800 rounded-lg text-sm font-semibold">
                                <span>⏱️</span>
                                Duración: 60 minutos
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
