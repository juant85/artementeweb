'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export default function FadeIn({ children, delay = 0, className = "", direction = 'up' }: FadeInProps) {

    const getInitialVariants = (dir: string) => {
        switch (dir) {
            case 'up': return { opacity: 0, y: 30 };
            case 'down': return { opacity: 0, y: -30 };
            case 'left': return { opacity: 0, x: 30 };
            case 'right': return { opacity: 0, x: -30 };
            case 'none': return { opacity: 0 };
            default: return { opacity: 0, y: 30 };
        }
    };

    const initial = getInitialVariants(direction);

    return (
        <motion.div
            initial={initial}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
