'use client';

import FadeIn from '@/components/ui/FadeIn';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import { MapPin, Monitor, CheckCircle2 } from 'lucide-react';

export default function Modalities() {
    return (
        <section id="modalities" className="py-16 md:py-14 md:py-16 bg-white">
            <div className="container mx-auto px-6">
                <SectionTitle
                    subtitle="Elegí la opción que mejor se adapte a vos."
                >
                    Modalidades
                </SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Presencial */}
                    <FadeIn className="bg-slate-50 rounded-3xl shadow-sm border border-slate-200 hover:border-blue-300 hover:shadow-md flex flex-col transition-all overflow-hidden">
                        {/* Imagen */}
                        <div className="relative w-full h-48 md:h-56">
                            <Image
                                src="/images/modalidad-presencial.jpg"
                                alt="Modalidad Presencial"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Contenido */}
                        <div className="p-8 flex flex-col flex-1 items-center text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                                <MapPin size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Modalidad presencial (CABA)</h3>
                            <ul className="text-left space-y-3 mb-8 w-full max-w-xs mx-auto">
                                <li className="flex items-start gap-3 text-black font-bold text-lg">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>
                                        Encuentros semanales (AMA)<br />
                                        <span className="mt-1 block">Av. Santa Fe 1171, CABA</span>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 text-black font-bold text-lg">
                                    <span className="text-blue-600 mt-1">•</span>
                                    Entorno cuidado y accesible
                                </li>
                            </ul>

                            <div className="flex-1"></div>

                            <a href="#contact" className="w-full max-w-xs py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/30">
                                Consultar cupos
                            </a>
                        </div>
                    </FadeIn>

                    {/* Online */}
                    <FadeIn delay={0.1} className="bg-slate-50 rounded-3xl shadow-sm border border-slate-200 hover:border-blue-300 hover:shadow-md flex flex-col transition-all overflow-hidden group">
                        {/* Imagen */}
                        <div className="relative w-full h-48 md:h-56 overflow-hidden">
                            <Image
                                src="/images/modalidad-online.jpg"
                                alt="Modalidad Online"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Contenido */}
                        <div className="p-8 flex flex-col flex-1 items-center text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                                <Monitor size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Modalidad online<span className="block">(todo el país)</span></h3>
                            <ul className="text-left space-y-3 mb-8 w-full max-w-xs mx-auto">
                                <li className="flex items-start gap-3 text-black font-bold text-lg">
                                    <span className="text-blue-600 mt-1">•</span>
                                    Clases en vivo (Videollamada)
                                </li>
                                <li className="flex items-start gap-3 text-black font-bold text-lg">
                                    <span className="text-blue-600 mt-1">•</span>
                                    Desde cualquier punto del país
                                </li>
                            </ul>

                            <div className="flex-1"></div>

                            <a href="#contact" className="w-full max-w-xs py-4 rounded-xl bg-white border-2 border-blue-600 text-blue-700 font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105">
                                Consultar cupos
                            </a>
                        </div>
                    </FadeIn>
                </div>

                <FadeIn delay={0.2} className="mt-12 text-center">
                    <div className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 rounded-2xl font-bold border-3 border-green-400 shadow-lg">
                        <span className="text-3xl">✓</span>
                        <p className="text-xl md:text-2xl font-black">
                            Sin conocimientos de arte ni experiencia tecnológica
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
