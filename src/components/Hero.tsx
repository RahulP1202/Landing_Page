import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// New color scheme utility classes:
// Text: light cream/white (text-white, text-gray-200)
// Background: Dark Blue-Grey (bg-blue-950 or custom dark color)
// Accent: muted gold (amber-700)

export default function Hero() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center bg-[#0d1b2a] overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url('/dc475a71-d8e8-4286-9e5f-3d9d8ce266ce.png')` }}
      ></div>
      {/* Dark overlay for premium look */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28 md:py-36 w-full">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/pygenicarc_logo.jpeg"
              alt="Pygenicarc Logo"
              className="h-24 w-24 rounded-full border-4 border-[#d4af37] shadow-lg"
            />
          </div>

          {/* Main heading - Gold color */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 text-[#d4af37] leading-[1.2] max-w-4xl">
            PyGenicArc
          </h1>

          {/* Subheading - White with opacity */}
          <p className="text-2xl md:text-3xl text-white/85 mb-4 font-light max-w-2xl">
            One Step Ahead of Your Success
          </p>

          {/* Description - White with opacity */}
          <p className="text-lg md:text-xl text-white/85 mb-12 max-w-[600px] leading-relaxed">
            Transforming ideas into powerful digital solutions through innovative software development,
            world-class training, and expert consultation
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
            <a
              href="#services"
              className="group px-8 py-4 bg-[#d4af37] text-[#0d1b2a] font-semibold rounded-lg hover:bg-[#c49d2e] transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] font-semibold rounded-lg hover:bg-[#d4af37] hover:text-[#0d1b2a] transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20 transition-opacity duration-300 ${isScrolling ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="w-6 h-10 border-2 border-[#d4af37] rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-[#d4af37] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}