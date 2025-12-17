'use client';

import FadeIn from '@/components/ui/FadeIn';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Trajectory() {
    return (
        <section className="py-16 md:py-14 md:py-16 bg-white border-b border-slate-100">
            <div className="container mx-auto px-6 text-center">
                <SectionTitle
                    subtitle="Un recorrido dedicado al arte, la salud y la educación."
                >
                    Trayectoria
                </SectionTitle>

                <FadeIn className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center group">
                            <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight group-hover:text-blue-700 transition-colors">Programa desarrollado desde 2016</h3>
                            <ul className="text-left space-y-3 w-full">
                                <li className="flex items-start gap-3 text-slate-900 font-bold text-lg">
                                    <span className="text-blue-600 mt-1">•</span>
                                    Trayectoria sostenida
                                </li>
                                <li className="flex items-start gap-3 text-slate-900 font-bold text-lg">
                                    <span className="text-blue-600 mt-1">•</span>
                                    Estimulación cognitiva
                                </li>
                                <li className="flex items-start gap-3 text-slate-900 font-bold text-lg">
                                    <span className="text-blue-600 mt-1">•</span>
                                    Metodología propia
                                </li>
                            </ul>
                        </div>
                        <div className="p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center group">
                            <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight group-hover:text-blue-700 transition-colors">Experiencia en ámbitos de salud y cultura</h3>
                            <ul className="text-left space-y-3 w-full">
                                <li className="flex items-start gap-3 text-slate-900 font-bold text-lg">
                                    <span className="text-blue-600 mt-1">•</span>
                                    Espacios de Salud
                                </li>
                                <li className="flex items-start gap-3 text-slate-900 font-bold text-lg">
                                    <span className="text-blue-600 mt-1">•</span>
                                    Instituciones Culturales
                                </li>
                                <li className="flex items-start gap-3 text-slate-900 font-bold text-lg">
                                    <span className="text-blue-600 mt-1">•</span>
                                    Ámbitos Educativos
                                </li>
                            </ul>
                        </div>
                        <div className="p-8 bg-white rounded-2xl border-2 border-slate-100 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center group">
                            <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight group-hover:text-blue-700 transition-colors">Inclusión cultural y participación</h3>
                            <ul className="text-left space-y-3 w-full">
                                <li className="flex items-start gap-3 text-slate-900 font-bold text-lg">
                                    <span className="text-blue-600 mt-1">•</span>
                                    Accesibilidad Cultural
                                </li>
                                <li className="flex items-start gap-3 text-slate-900 font-bold text-lg">
                                    <span className="text-blue-600 mt-1">•</span>
                                    Participación Activa
                                </li>
                                <li className="flex items-start gap-3 text-slate-900 font-bold text-lg">
                                    <span className="text-blue-600 mt-1">•</span>
                                    Adultos Mayores
                                </li>
                            </ul>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
