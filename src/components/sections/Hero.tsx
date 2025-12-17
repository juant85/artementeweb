'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center min-h-screen overflow-hidden"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/images/brain-gallery.jpg"
                        alt="Sala inmersiva de arte y cerebro"
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                    />
                </motion.div>
                {/* Lighter Gradient Overlay for Better Image Visibility */}
                <div className="absolute inset-0 bg-slate-900/20 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/20" />
            </div>

            <div className="container relative z-10 px-6 mx-auto text-center pt-32 md:pt-40 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto flex flex-col items-center relative z-20"
                >
                    {/* Dark Backdrop for Maximum Readability */}
                    <div className="absolute inset-0 bg-black/70 blur-3xl -z-10 rounded-full transform scale-150 opacity-90"></div>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-3 mb-10 justify-center">
                        {['Neurociencia + Arte', 'Online y Presencial', 'Para Adultos Mayores'].map((chip, i) => (
                            <span key={i} className="inline-block py-3 px-8 rounded-full bg-white/10 backdrop-blur-md text-white text-lg font-bold border border-white/20 shadow-lg tracking-wide hover:bg-white/20 transition-all cursor-default">
                                {chip}
                            </span>
                        ))}
                    </div>

                    {/* Headline */}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10 text-white leading-none drop-shadow-2xl text-center" style={{ fontFamily: 'var(--font-opensans)', textShadow: '0 4px 60px rgba(0,0,0,0.9)' }}>
                        <span className="text-white block">ARTEMENTE</span>
                        <span className="block text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-wide mt-6 drop-shadow-xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
                            Donde el arte despierta tu mente
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-3xl text-white mb-14 leading-relaxed max-w-3xl font-medium drop-shadow-xl text-center text-shadow-lg">
                        Un programa de estimulación cognitiva único. Potenciá tu memoria, atención y creatividad disfrutando de las grandes obras de la historia.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-8 w-full sm:w-auto">
                        <a
                            href="#contact"
                            className="px-12 py-6 rounded-full bg-blue-600 text-white font-black text-xl hover:bg-blue-500 transition-all hover:scale-105 shadow-2xl shadow-blue-900/50 ring-4 ring-blue-600/30"
                        >
                            Empezar ahora
                        </a>
                        <a
                            href="#modalities"
                            className="px-12 py-6 rounded-full bg-white/10 backdrop-blur-xl border-2 border-white/50 text-white font-bold text-xl hover:bg-white/20 transition-all hover:scale-105 shadow-xl"
                        >
                            Ver modalidades
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </motion.div>
        </section>
    );
}
