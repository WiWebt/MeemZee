'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavbar } from '@/contexts/NavbarContext';
import { useState, useEffect } from 'react';
import SignupDialog from './SignupDialog';

const navigation = [
  // { name: 'Pricing', href: '/pricing' },
  { name: 'Baby Products', href: '/baby-products' },
  { name: 'Home & Kitchen', href: '/home-kitchen' },
  { name: 'Price Tracker', href: '/price-tracker' },
  { name: 'Utility Tools', href: '/utility-tools' },
];

export default function Navbar() {
  const { mobileMenuOpen, setMobileMenuOpen } = useNavbar();
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  }

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Monoton&family=Zen+Tokyo+Zoo&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100 transition-[height] duration-300 ${
        mobileMenuOpen ? 'h-[280px]' : 'h-16'
      }`}>
        <div className="mx-auto px-6 lg:px-8 max-w-[1400px]">
          <div className="flex h-16 items-center justify-between gap-8">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0"
            >
              <Image
                src="/logo.svg"
                alt="MeemZee Logo"
                width={40}
                height={40}
                className="w-10 h-10"
                priority
              />
              <span
                style={{ fontFamily: 'Zen Tokyo Zoo, cursive' }}
                className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent"
              >
                MEEMZEE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-8 md:flex-1 md:justify-end">
              <div className="flex items-center gap-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors whitespace-nowrap ${
                      isActive(item.href)
                        ? 'text-primary-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>  
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
            mobileMenuOpen ? 'max-h-[220px]' : 'max-h-0'
          }`}>
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-lg px-3 py-2 text-base font-medium ${
                    isActive(item.href)
                      ? 'bg-gray-50 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <SignupDialog
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
      />
    </>
  );
}
