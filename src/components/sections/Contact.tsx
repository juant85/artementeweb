'use client';

import { useState } from 'react';
import FadeIn from '@/components/ui/FadeIn';

export default function Contact() {
    // 1. Estados para manejar el formulario
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    // 2. Función para enviar los datos a Formspree
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus('submitting');

        // IMPORTANTE: Reemplazar 'TU_ID_DE_FORMSPREE' con el código que to da la web
        // Ejemplo: https://formspree.io/f/xzyqlove
        const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpqaaaro';

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    }

    return (
        <section id="contact" className="py-16 md:py-14 md:py-16 bg-white">
            <div className="container mx-auto px-6">
                <FadeIn className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4 tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-opensans)' }}>
                        SUMATE A ARTEMENTE
                    </h2>
                    <p className="text-lg text-slate-800 mb-8 font-medium">
                        Dejá tus datos para recibir información sobre cupos y modalidades.
                    </p>

                    {status === 'success' ? (
                        <div className="bg-green-50 p-8 rounded-3xl border border-green-200 text-green-800 animate-fade-in">
                            <h3 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
                            <p className="text-lg">Gracias por contactarnos. Te responderemos a la brevedad.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-6 px-6 py-2 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition"
                            >
                                Enviar otro mensaje
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-3xl text-left shadow-sm border border-slate-200 space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-1">Nombre</label>
                                <input required name="name" type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Tu nombre completo" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-1">Email</label>
                                    <input required name="email" type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="tu@email.com" />
                                </div>
                                <div>
                                    <label htmlFor="whatsapp" className="block text-sm font-bold text-slate-900 mb-1">WhatsApp</label>
                                    <input required name="phone" type="tel" id="whatsapp" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Ej: 11 1234-5678" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="modality" className="block text-sm font-bold text-slate-900 mb-1">Modalidad</label>
                                <select name="modality" id="modality" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white font-medium">
                                    <option value="No especifica">Seleccioná una opción</option>
                                    <option value="presencial">Presencial (CABA)</option>
                                    <option value="online">Online (Todo el país)</option>
                                    <option value="ambas">Ambas</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full py-4 text-white bg-blue-600 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all hover:scale-[1.02] shadow-lg shadow-blue-600/20 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? 'Enviando...' : 'Solicitar Información'}
                            </button>

                            {status === 'error' && (
                                <p className="text-red-500 text-center font-bold">Hubo un error. Por favor intentá nuevamente.</p>
                            )}
                        </form>
                    )}

                    <div className="mt-8">
                        <a
                            href="https://wa.me/5491156583316?text=Hola%20Artemente%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-50 border border-green-200 text-green-700 font-bold hover:bg-green-100 transition-colors gap-2"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Escribir por WhatsApp
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
