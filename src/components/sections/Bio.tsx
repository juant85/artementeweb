'use client';

import FadeIn from '@/components/ui/FadeIn';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import { GraduationCap, Landmark } from 'lucide-react';

export default function Bio() {
    return (
        <section id="bio" className="py-16 md:py-14 md:py-16 bg-slate-50">
            <div className="container mx-auto px-6">
                <FadeIn className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                        {/* Image Column */}
                        <div className="flex-shrink-0">
                            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-300 shadow-xl shadow-blue-500/20 mx-auto hover:scale-105 transition-transform duration-300">
                                <Image
                                    src="/images/micaela.jpg"
                                    alt="Micaela Patania"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Text Column */}
                        <div className="md:w-1/2 md:pl-12">
                            <SectionTitle
                                centered={false}
                                className="mb-6"
                            >
                                <span className="block text-lg md:text-xl text-blue-600 font-bold uppercase tracking-wider mb-3">
                                    Fundadora de Artemente
                                </span>
                                <span className="block text-2xl md:text-3xl font-medium text-slate-500 mb-1">
                                    Magíster
                                </span>
                                Micaela Patania
                            </SectionTitle>

                            <div className="space-y-6 text-slate-800">
                                {/* Education */}
                                <div className="space-y-2">
                                    <h4 className="flex items-center gap-2 font-bold text-lg text-blue-700 uppercase tracking-wide border-b-2 border-blue-100 pb-1 mb-3">
                                        <GraduationCap size={24} /> Formación Académica
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 mt-1.5">•</span>
                                            <span>
                                                <strong className="block text-slate-900 text-lg">Escuela Superior de Bellas Artes P. Pueyrredón</strong>
                                                <span className="text-slate-700 font-medium">Graduada en Artes Visuales.</span>
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 mt-1.5">•</span>
                                            <span>
                                                <strong className="block text-slate-900 text-lg">UCES</strong>
                                                <span className="text-slate-700 font-medium">Comunicaciones.</span>
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 mt-1.5">•</span>
                                            <span>
                                                <strong className="block text-slate-900 text-lg">Estudios Internacionales</strong>
                                                <span className="text-slate-700 font-medium">NYU (Educación y Curaduría).</span>
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-blue-500 mt-1.5">•</span>
                                            <span>
                                                <strong className="block text-slate-900 text-lg">Becaria Fulbright</strong>
                                                <span className="text-slate-700 font-medium">Fondo Nacional de las Artes.</span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Experience */}
                                <div className="space-y-2 pt-2">
                                    <h4 className="flex items-center gap-2 font-bold text-lg text-blue-700 uppercase tracking-wide border-b-2 border-blue-100 pb-1 mb-3">
                                        <Landmark size={24} /> Trayectoria
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                                        <li className="flex items-center gap-2 font-bold text-slate-800">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full"></span> Museo Larreta
                                        </li>
                                        <li className="flex items-center gap-2 font-bold text-slate-800">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full"></span> MAMBA (Buenos Aires)
                                        </li>
                                        <li className="flex items-center gap-2 font-bold text-slate-800">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full"></span> New Museum (NY)
                                        </li>
                                        <li className="flex items-center gap-2 font-bold text-slate-800">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full"></span> Grupo Sinapsus
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
