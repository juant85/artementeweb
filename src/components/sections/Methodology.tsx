import FadeIn from '@/components/ui/FadeIn';
import SectionTitle from '@/components/ui/SectionTitle';
import { Eye, MessageCircle, Brain, Heart } from 'lucide-react';

const methods = [
    {
        icon: Eye,
        title: 'Apreciación guiada de obras y artistas',
        desc: ['Observación y análisis de obras', 'Estimulación de percepción y atención'],
    },
    {
        icon: MessageCircle,
        title: 'Conversación y expresión oral y escrita',
        desc: ['Diálogo grupal y expresión oral', 'Construcción de sentido compartido'],
    },
    {
        icon: Brain,
        title: 'Ejercicios cognitivos aplicados',
        desc: ['Funciones cognitivas específicas', 'Contenido artístico como disparador'],
    },
    {
        icon: Heart,
        title: 'Enfoque cultural, inclusivo y comunitario',
        desc: ['Espacio cuidado y participativo', 'Disfrute cultural y diversidad'],
    },
];

export default function Methodology() {
    return (
        <section id="methodology" className="py-16 md:py-14 md:py-16 bg-slate-50">
            <div className="container mx-auto px-6">
                <SectionTitle
                    subtitle="Un método propio que combina arte y ciencia."
                >
                    Cómo trabajamos
                </SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {methods.map((item, i) => (
                        <FadeIn delay={i * 0.1} key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-400 hover:-translate-y-2 flex flex-col items-center group">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-700 transition-colors text-center min-h-[3rem] flex items-center justify-center">
                                {item.title}
                            </h3>
                            <ul className="text-left w-full space-y-2">
                                {item.desc.map((point, j) => (
                                    <li key={j} className="flex items-start gap-2 text-slate-800 font-bold text-sm leading-snug">
                                        <span className="text-blue-500 mt-0.5">•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
