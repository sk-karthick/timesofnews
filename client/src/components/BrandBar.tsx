import useNavScroll from '@/hooks/useNavScroll';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

export const BrandBar: React.FC = () => {
  const { theme } = useTheme();
  const isScrolled = useNavScroll();


  return (
    <nav
      className={`
        w-full top-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled ? 'fixed shadow-2xl backdrop-blur-md border-orange-800/20' : 'sticky'}
        ${theme === 'dark' ? 'bg-[#0B1C2C]/80' : 'bg-[#C62828]'}
        p-4
      `}
    >
      <div className="flex items-center justify-center">
        <Image
          src={'/images/logo-dark.png'}
          alt="Logo"
          width={isScrolled ? 80 : 140}
          height={isScrolled ? 80 : 140}
          className="transition-all duration-300 ease-in-out"
          priority
        />
      </div>
    </nav>
  );
};
