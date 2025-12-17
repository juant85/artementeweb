'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Qué es', href: '#about' },
    { name: 'Método', href: '#methodology' },
    { name: 'Modalidades', href: '#modalities' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="#hero" className="flex items-center gap-3">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden border-2 border-blue-300 bg-white">
                        <Image
                            src="/images/artemente-logo.jpg"
                            alt="Artemente"
                            fill
                            sizes="50px"
                            className="object-contain p-1"
                        />
                    </div>
                    <span className={clsx(
                        "text-2xl font-bold tracking-tighter transition-colors",
                        isScrolled ? "text-slate-900" : "text-white"
                    )} style={{ fontFamily: 'var(--font-opensans)' }}>
                        Artemente<span className={isScrolled ? "text-blue-600" : "text-blue-300"}>.</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                "text-sm font-bold transition-colors hover:text-blue-400",
                                isScrolled ? "text-slate-800" : "text-white/90"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className={clsx(
                            "px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-md",
                            isScrolled
                                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20"
                                : "bg-white text-blue-900 hover:bg-blue-50 shadow-black/20"
                        )}
                    >
                        Hablemos
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={clsx(
                        "md:hidden p-2 hover:text-blue-600 transition-colors",
                        isScrolled ? "text-slate-800" : "text-white"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-800 hover:text-blue-600"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                className="w-full text-center px-5 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700"
                                onClick={() => setIsOpen(false)}
                            >
                                Hablemos
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
