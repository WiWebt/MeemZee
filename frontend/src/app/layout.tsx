import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';
import { NavbarProvider } from '@/contexts/NavbarContext';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Free Online Utilities & Tools - Meemzee',
  description: 'Free-to-use online tools for everyday tasks. Download videos from YouTube & Instagram, convert files, and use various text utilities.',
  keywords: 'youtube downloader, instagram video downloader, file converter, online tools, free utilities, pdf tools, text utilities, qr code generator',
  icons: {
    icon: [
      {
        url: '/logo.png',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5338136896112387"
        crossOrigin="anonymous">
        </script>
      </head>
      <body className={inter.className}>
        <NavbarProvider>
          <Navbar />
          <main className="min-h-screen transition-[padding-top] duration-300">
            {children}
          </main>
          <Footer />
        </NavbarProvider>
      </body>
    </html>
  );
}
