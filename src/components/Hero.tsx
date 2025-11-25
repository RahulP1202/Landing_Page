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
    // Changed background to a dark blue-grey, matching the new template's hero image
    <section className="relative min-h-screen flex items-center justify-center bg-blue-950 overflow-hidden">
      {/* Background image with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30" 
        style={{ backgroundImage: `url('/dc475a71-d8e8-4286-9e5f-3d9d8ce266ce.png')` }}
      ></div>
      {/* Dark overlay to ensure text readability, similar to the template */}
      <div className="absolute inset-0 bg-blue-950 opacity-60"></div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Logo and company name are still displayed, now centered and using new colors */}
        <div className="mb-8 flex justify-center">
          <img
            src="/pygenicarc_logo.jpeg"
            alt="Pygenicarc Logo"
            // Adjusted border to match amber accent
            className="h-24 w-24 rounded-full border-4 border-amber-700 shadow-lg"
          />
        </div>

        {/* Changed heading font to serif and text color to white */}
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 text-white leading-tight">
          PyGenicArc
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light font-serif">
          One Step Ahead of Your Success
        </p>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-serif">
          Transforming ideas into powerful digital solutions through innovative software development,
          world-class training, and expert consultation
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary Button: Changed cyan to muted gold/amber-700 */}
          <a
            href="#services"
            className="group px-8 py-4 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all duration-300 flex items-center gap-2 shadow-md hover:scale-105"
          >
            Explore Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary Button: Changed cyan border/text to amber-700 */}
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-amber-700 text-amber-700 font-semibold rounded-lg hover:bg-amber-700 hover:text-white transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20 transition-opacity duration-300 ${isScrolling ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="w-6 h-10 border-2 border-amber-700 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-amber-700 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}