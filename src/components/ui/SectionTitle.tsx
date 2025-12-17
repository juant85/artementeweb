'use client';

import FadeIn from './FadeIn';

interface SectionTitleProps {
    children: React.ReactNode;
    subtitle?: string;
    className?: string;
    centered?: boolean;
}

export default function SectionTitle({ children, subtitle, className = "", centered = true }: SectionTitleProps) {
    return (
        <FadeIn className={`mb-8 md:mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''} ${className}`}>
            {/* Visual Anchor */}
            <div className={`flex ${centered ? 'justify-center' : 'justify-start'} mb-6`}>
                <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-sm" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900 uppercase leading-none drop-shadow-sm transition-all" style={{ fontFamily: 'var(--font-opensans)' }}>
                {children}
            </h2>

            {subtitle && (
                <p className="text-xl md:text-2xl text-slate-900 font-bold leading-relaxed">
                    {subtitle}
                </p>
            )}
        </FadeIn>
    );
}
