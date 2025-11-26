import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="relative bg-[#0d1b2a] border-t border-[#d4af37]/20 overflow-hidden">
      {/* Background image with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ backgroundImage: `url('/dc475a71-d8e8-4286-9e5f-3d9d8ce266ce.png')` }}
      ></div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/pygenicarc_logo.jpeg"
                alt="Pygenicarc Logo"
                className="h-10 w-10 rounded-full border-2 border-[#d4af37]"
              />
              <span className="text-2xl font-serif font-bold text-white">PyGenicArc</span>
            </div>
            <p className="text-white/85 mb-4 max-w-md font-serif leading-relaxed">
              One step ahead of your success. Transforming ideas into powerful digital solutions
              through innovation, education, and expert development.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#d4af37] border border-[#d4af37]/30 transition-all duration-300 shadow-sm group"
              >
                <Twitter className="w-5 h-5 text-white/85 group-hover:text-[#0d1b2a]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#d4af37] border border-[#d4af37]/30 transition-all duration-300 shadow-sm group"
              >
                <Linkedin className="w-5 h-5 text-white/85 group-hover:text-[#0d1b2a]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#d4af37] border border-[#d4af37]/30 transition-all duration-300 shadow-sm group"
              >
                <Github className="w-5 h-5 text-white/85 group-hover:text-[#0d1b2a]" />
              </a>
              <a
                href="mailto:info@pygenicarc.com"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#d4af37] border border-[#d4af37]/30 transition-all duration-300 shadow-sm group"
              >
                <Mail className="w-5 h-5 text-white/85 group-hover:text-[#0d1b2a]" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-[#d4af37] font-serif font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/85 hover:text-[#d4af37] transition-colors font-serif">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/85 hover:text-[#d4af37] transition-colors font-serif">
                  Training Programs
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/85 hover:text-[#d4af37] transition-colors font-serif">
                  Consultation
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/85 hover:text-[#d4af37] transition-colors font-serif">
                  AI Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-[#d4af37] font-serif font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/85 hover:text-[#d4af37] transition-colors font-serif">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/85 hover:text-[#d4af37] transition-colors font-serif">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://pygenicarc.in" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-[#d4af37] transition-colors font-serif">
                  Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-[#d4af37]/20 pt-8 text-center text-white/70 text-sm font-serif">
          <p>&copy; {new Date().getFullYear()} PyGenicArc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
