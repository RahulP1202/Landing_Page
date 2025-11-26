import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Define the component using React.FC (Functional Component)
const Navigation: React.FC = () => {
  // Explicitly setting the boolean type for useState
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    // Define the type for the event listener argument (optional but good practice)
    const handleScroll = () => {
      // window.scrollY is implicitly known to be a number
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup function returns void
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this runs once on mount

  // Define the type for the click event argument
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // This function can be used to scroll to the top from any link
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close menu on click for mobile links
  };

  return (
    <nav
      // Tailwind classes remain the same
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          // Scrolled state: Dark blue-grey background with subtle border and shadow
          ? 'bg-blue-950/90 backdrop-blur-sm border-b border-blue-800 shadow-xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" onClick={handleAnchorClick} className="flex items-center gap-3 group">
            <img
              src="/pygenicarc_logo.jpeg"
              alt="Pygenicarc Logo"
              className="h-10 w-10 rounded-full border-2 border-amber-700 group-hover:scale-110 transition-transform"
            />
            <span className="text-xl font-serif font-bold text-white">PyGenicArc</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {/* Desktop Navigation Links */}
            <a
              href="#"
              // Note: Using a direct event handler for smoother transition/simplicity on Home link
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
            <a
              href="#blog"
              className="text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium"
            >
              Blog
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium"
            >
              Contact Us
            </a>
            <a
              href="#login"
              className="text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium"
            >
              Login
            </a>
            <a
              href="#request-demo"
              className="px-6 py-2.5 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-500 transition-all duration-300 hover:scale-105 shadow-md"
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
        <div className="md:hidden bg-blue-950/90 backdrop-blur-lg border-t border-blue-800">
          <div className="px-6 py-4 space-y-4">
            {/* Mobile Links */}
            <a
              href="#"
              onClick={handleAnchorClick} // Using the consolidated handler
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
            <a
              href="#blog"
              className="block text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="#pricing"
              className="block text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="block text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
            <a
              href="#login"
              className="block px-6 py-2.5 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-500 transition-all text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </a>
            <a
              href="#request-demo"
              className="block px-6 py-2.5 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-500 transition-all text-center"
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