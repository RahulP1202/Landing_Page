import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) {
        setIsToolsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-blue-950/90 backdrop-blur-sm border-b border-blue-800 shadow-xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/pygenicarc_logo.jpeg"
              alt="PyGenicArc Logo"
              className="h-10 w-10 rounded-full border-2 border-amber-700 group-hover:scale-110 transition-transform"
            />
            <span className="text-xl font-serif font-bold text-white">PyGenicArc</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium">
              Home
            </Link>
            <a href="#about" className="text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium">
              About
            </a>
            <a href="#services" className="text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium">
              Services
            </a>

            {/* Tools Dropdown */}
            <div className="relative" ref={toolsRef}>
              <button
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className="flex items-center gap-1 text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium"
              >
                Tools
                <ChevronDown className={`w-4 h-4 transition-transform ${isToolsOpen ? "rotate-180" : ""}`} />
              </button>
              {isToolsOpen && (
                <div className="absolute left-0 mt-3 w-72 bg-blue-900 shadow-xl border border-blue-700 rounded-xl py-3 z-[9999]">
                  <Link to="/lms" className="block px-4 py-2 text-gray-200 hover:bg-blue-800 rounded-md">
                    LMS
                  </Link>
                  <Link to="/ai-suite" className="block px-4 py-2 text-gray-200 hover:bg-blue-800 rounded-md">
                    AI Suite
                  </Link>
                  <Link to="/nba" className="block px-4 py-2 text-gray-200 hover:bg-blue-800 rounded-md">
                    NBA Portal
                  </Link>
                  <Link to="/dsa" className="block px-4 py-2 text-gray-200 hover:bg-blue-800 rounded-md">
                    DSA Portal
                  </Link>
                  <Link to="/elearning" className="block px-4 py-2 text-gray-200 hover:bg-blue-800 rounded-md">
                    E-Learning Hub
                  </Link>
                </div>
              )}
            </div>

            <a href="#blog" className="text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium">
              Blog
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium">
              Pricing
            </a>
            <a href="#contact" className="text-gray-300 hover:text-amber-700 transition-colors font-serif font-medium">
              Contact
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-950/90 backdrop-blur-lg border-t border-blue-800">
          <div className="px-6 py-4 space-y-4">
            <Link to="/" className="block text-gray-300 hover:text-amber-700 font-serif">
              Home
            </Link>
            <a href="#about" className="block text-gray-300 hover:text-amber-700 font-serif">
              About
            </a>
            <a href="#services" className="block text-gray-300 hover:text-amber-700 font-serif">
              Services
            </a>

            {/* Mobile Tools */}
            <div>
              <p className="text-gray-400 font-semibold mb-1">Tools</p>
              <Link to="/lms" className="block text-gray-300 hover:text-amber-700 py-1">
                LMS
              </Link>
              <Link to="/ai-suite" className="block text-gray-300 hover:text-amber-700 py-1">
                AI Suite
              </Link>
              <Link to="/nba" className="block text-gray-300 hover:text-amber-700 py-1">
                NBA Portal
              </Link>
              <Link to="/dsa" className="block text-gray-300 hover:text-amber-700 py-1">
                DSA Portal
              </Link>
              <Link to="/elearning" className="block text-gray-300 hover:text-amber-700 py-1">
                E-Learning Hub
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
