"use client";

import { useNavbar } from '@/contexts/NavbarContext';
import { ReactNode } from 'react';

interface HomeWrapperProps {
  children: ReactNode;
}

export default function HomeWrapper({ children }: HomeWrapperProps) {
  const { mobileMenuOpen } = useNavbar();
  
  return (
    <div 
      className={`transition-[padding-top] duration-300 ${
        mobileMenuOpen ? 'pt-[280px]' : 'pt-0'
      } md:pt-0`}
    >
      {children}
    </div>
  );
}
