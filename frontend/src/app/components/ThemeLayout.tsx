"use client";

import { usePathname } from 'next/navigation';

export default function ThemeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Determine theme based on route
  const getThemeClass = () => {
    if (pathname.startsWith('/baby-products')) {
      return 'baby-store-theme';
    } else if (pathname.startsWith('/utilities')) {
      return 'utility-theme';
    }
    return 'baby-store-theme'; // default theme
  };

  return (
    <div className={getThemeClass()}>
      {children}
    </div>
  );
}
