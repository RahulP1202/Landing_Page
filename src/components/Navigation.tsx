import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          // Scrolled state: Dark blue-grey background with subtle border and shadow
          ? 'bg-blue-950/90 backdrop-blur-sm border-b border-blue-800 shadow-xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/pygenicarc_logo.jpeg"
              alt="Pygenicarc Logo"
              // Logo border color changed from cyan to amber-700
              className="h-10 w-10 rounded-full border-2 border-amber-700 group-hover:scale-110 transition-transform"
            />
            {/* Title text color is white, font is serif */}
            <span className="text-xl font-serif font-bold text-white">PyGenicArc</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {/* Navigation Links: text color updated to light gray, hover to amber-700 */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium"
            >
              Services
            </a>
            {/* Contact Button: color changed from cyan to amber-700 */}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-amber-700 text-white font-semibold rounded-full hover:bg-amber-600 transition-all duration-300 hover:scale-105 shadow-md"
            >
              Contact Us
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
        <div className="md:hidden bg-blue-950/90 backdrop-blur-lg border-t border-blue-800">
          <div className="px-6 py-4 space-y-4">
            {/* Mobile Links */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="block text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            {/* Mobile Contact Button */}
            <a
              href="#contact"
              className="block px-6 py-2.5 bg-amber-700 text-white font-semibold rounded-full hover:bg-amber-600 transition-all text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}