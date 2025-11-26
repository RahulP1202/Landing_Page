import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  // Don't show navigation on login page
  if (isLoginPage) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d1b2a]/95 backdrop-blur-sm border-b border-[#d4af37]/20 shadow-xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" onClick={handleAnchorClick} className="flex items-center gap-3 group">
            <img
              src="/pygenicarc_logo.jpeg"
              alt="Pygenicarc Logo"
              className="h-10 w-10 rounded-full border-2 border-[#d4af37] group-hover:scale-110 transition-transform"
            />
            <span className="text-xl font-serif font-bold text-white">PyGenicArc</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-white/85 hover:text-[#d4af37] transition-colors font-serif font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white/85 hover:text-[#d4af37] transition-colors font-serif font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-white/85 hover:text-[#d4af37] transition-colors font-serif font-medium"
            >
              Services
            </a>
            <a
              href="#blog"
              className="text-white/85 hover:text-[#d4af37] transition-colors font-serif font-medium"
            >
              Blog
            </a>
            <a
              href="#pricing"
              className="text-white/85 hover:text-[#d4af37] transition-colors font-serif font-medium"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-white/85 hover:text-[#d4af37] transition-colors font-serif font-medium"
            >
              Contact Us
            </a>
            <Link
              to="/login"
              className="text-white/85 hover:text-[#d4af37] transition-colors font-serif font-medium"
            >
              Login
            </Link>
            <a
              href="#request-demo"
              className="px-6 py-2.5 bg-[#d4af37] text-[#0d1b2a] font-semibold rounded-lg hover:bg-[#c49d2e] transition-all duration-300 shadow-md"
            >
              Request Demo
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0d1b2a]/95 backdrop-blur-lg border-t border-[#d4af37]/20">
          <div className="px-6 py-4 space-y-4">
            <a
              href="#"
              onClick={handleAnchorClick}
              className="block text-white/85 hover:text-[#d4af37] transition-colors font-serif font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-white/85 hover:text-[#d4af37] transition-colors font-serif font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block text-white/85 hover:text-[#d4af37] transition-colors font-serif font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#blog"
              className="block text-white/85 hover:text-[#d4af37] transition-colors font-serif font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="#pricing"
              className="block text-white/85 hover:text-[#d4af37] transition-colors font-serif font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="block text-white/85 hover:text-[#d4af37] transition-colors font-serif font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
            <Link
              to="/login"
              className="block text-white/85 hover:text-[#d4af37] transition-colors font-serif font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <a
              href="#request-demo"
              className="block px-6 py-2.5 bg-[#d4af37] text-[#0d1b2a] font-semibold rounded-lg hover:bg-[#c49d2e] transition-all text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;