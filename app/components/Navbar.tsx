'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavigation = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  // NOTE: auto-scroll on nextjs with sticky/fixed element, ref: https://github.com/shadcn-ui/ui/issues/1355#issuecomment-1909192594
  return (
    <header
      className={cn(
        'w-full z-50',
        'sticky top-0 transition-all duration-300',
        // 'bg-white border-b shadow-sm py-4',
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logo-blue.png"
              alt="DevSoft Logo"
              className="w-[200px] h-auto"
              loading="eager"
              width={483}
              height={73}
            />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6">
          {[
            { path: '/', label: 'Trang chủ' },
            { path: '/about', label: 'Về chúng tôi' },
            { path: '/services', label: 'Dịch vụ' },
            { path: '/projects', label: 'Dự án' },
          ].map(({ path, label }) => (
            <Link key={path} href={path} className="text-devsoft-900 hover:text-devsoft-accent font-medium">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Liên hệ ngay
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-devsoft-900 p-2"
            aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'fixed inset-0 bg-white z-40 flex flex-col pt-20 px-4 transition-all duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute top-5 right-5">
          <button onClick={handleNavigation} className="p-2 text-devsoft-900" aria-label="Đóng menu">
            <X size={24} />
          </button>
        </div>

        <Link href="/" className="py-4 text-lg font-medium border-b border-gray-100" onClick={handleNavigation}>
          Trang chủ
        </Link>
        <Link href="/about" className="py-4 text-lg font-medium border-b border-gray-100" onClick={handleNavigation}>
          Về chúng tôi
        </Link>
        <Link href="/services" className="py-4 text-lg font-medium border-b border-gray-100" onClick={handleNavigation}>
          Dịch vụ
        </Link>
        <Link href="/projects" className="py-4 text-lg font-medium border-b border-gray-100" onClick={handleNavigation}>
          Dự án
        </Link>
        <Link
          href="/contact"
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md text-center transition-colors"
          onClick={handleNavigation}
        >
          Liên hệ ngay
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
