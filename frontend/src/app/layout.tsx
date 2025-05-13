import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import ThemeLayout from './components/ThemeLayout';
import { metadata } from './metadata';

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeLayout>
          <Navbar />
          <main>
            {children}
          </main>
        </ThemeLayout>
      </body>
    </html>
  );
}
