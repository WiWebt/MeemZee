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
  title: 'MeemZee',
  description:
    'Learn to type in over 50 languages with our gamified platform. Start with Bangla, Korean, Persian, or Japanese today!',
  keywords:
    'typing tutor, language learning, typing practice, multilingual typing, language certification',
  icons: {
    icon: [
      {
        url: '/logo.svg',
        type: 'image/svg+xml',
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
