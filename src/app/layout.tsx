import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { clsx } from 'clsx';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-opensans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Artemente | Estimulación Cognitiva a través del Arte',
  description: 'Programa de estimulación cognitiva para adultos mayores. Fortalecé tu memoria, atención y creatividad a través del arte.',
  openGraph: {
    title: 'Artemente | Estimulación Cognitiva a través del Arte',
    description: 'Programa de estimulación cognitiva para adultos mayores. Fortalecé tu memoria, atención y creatividad a través del arte.',
    type: 'website',
  },
};

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={clsx(openSans.variable, openSans.className, 'antialiased')}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
