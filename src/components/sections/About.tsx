import FadeIn from '@/components/ui/FadeIn';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-16 md:py-14 md:py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Imagen principal */}
                    <FadeIn className="mb-10">
                        <div className="relative w-full max-w-4xl mx-auto h-[280px] md:h-[380px] rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/brain-sculpture.jpg"
                                alt="Esculpiendo la mente y el cerebro"
                                fill
                                sizes="(max-width: 768px) 100vw, 800px"
                                className="object-cover object-center"
                            />
                        </div>
                    </FadeIn>

                    <SectionTitle
                        subtitle=""
                        centered={true}
                    >
                        Qué es Artemente
                    </SectionTitle>

                    <FadeIn>
                        <div className="text-left max-w-2xl mx-auto space-y-6 mb-12">
                            <div className="flex items-start gap-4 p-5 bg-white rounded-xl border-2 border-slate-200 shadow-sm hover:border-blue-400 transition-colors">
                                <div className="mt-1 text-blue-700 text-2xl">✅</div>
                                <p className="text-2xl text-black font-bold leading-snug">Un espacio de encuentro cultural donde <span className="text-blue-900 underline decoration-2 underline-offset-2">aprendés sobre arte</span> y fortalecés tu mente.</p>
                            </div>
                            <div className="flex items-start gap-4 p-5 bg-white rounded-xl border-2 border-slate-200 shadow-sm hover:border-blue-400 transition-colors">
                                <div className="mt-1 text-blue-700 text-2xl">✅</div>
                                <p className="text-2xl text-black font-bold leading-snug">Activamos <span className="text-blue-900 underline decoration-2 underline-offset-2">memoria, atención y lenguaje</span> a través de obras visuales y conversación.</p>
                            </div>
                        </div>

                        {/* Mensaje inclusivo */}
                        <div className="text-center">
                            <div className="inline-block px-8 py-5 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-400/30 rounded-2xl relative overflow-hidden shadow-sm">
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                                <p className="text-lg md:text-xl text-slate-900 font-black tracking-tight">
                                    💡 Abierto a todas las personas que deseen enriquecerse culturalmente
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section >
    );
}
