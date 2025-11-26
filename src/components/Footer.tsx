import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    // Changed footer background to dark blue-grey, matching the new template's dark sections
    <footer className="relative bg-blue-950 border-t border-blue-800 overflow-hidden">
      {/* Background image with dark overlay - using a placeholder image */}
      {/* You'll replace `url('/path-to-your-background-image.jpg')` with your actual image path */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: `url('/dc475a71-d8e8-4286-9e5f-3d9d8ce266ce.png')` }}
      ></div>
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-blue-950 opacity-70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/pygenicarc_logo.jpeg"
                alt="Pygenicarc Logo"
                // Border color remains amber-700 for consistent accent
                className="h-10 w-10 rounded-full border-2 border-amber-700"
              />
              {/* Changed text color to white for contrast on dark background */}
              <span className="text-2xl font-serif font-bold text-white">PyGenicArc</span>
            </div>
            {/* Changed text color to light gray for contrast */}
            <p className="text-gray-300 mb-4 max-w-md font-serif">
              One step ahead of your success. Transforming ideas into powerful digital solutions
              through innovation, education, and expert development.
            </p>
            <div className="flex gap-4">
              {/* Updated social icons: changed background to dark, border to blue-800, icons to light gray/amber-700 */}
              <a
                href="#"
                className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center hover:bg-amber-700 hover:border-amber-700 border border-blue-800 transition-all duration-300 shadow-sm"
              >
                <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center hover:bg-amber-700 hover:border-amber-700 border border-blue-800 transition-all duration-300 shadow-sm"
              >
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center hover:bg-amber-700 hover:border-amber-700 border border-blue-800 transition-all duration-300 shadow-sm"
              >
                <Github className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="mailto:info@pygenicarc.com"
                className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center hover:bg-amber-700 hover:border-amber-700 border border-blue-800 transition-all duration-300 shadow-sm"
              >
                <Mail className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            {/* Changed text color to white, font to serif */}
            <h3 className="text-white font-serif font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                {/* Changed link color to light gray and hover color to amber-700 */}
                <a href="#services" className="text-gray-300 hover:text-amber-700 transition-colors font-serif">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-amber-700 transition-colors font-serif">
                  Training Programs
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-amber-700 transition-colors font-serif">
                  Consultation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-amber-700 transition-colors font-serif">
                  AI Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            {/* Changed text color to white, font to serif */}
            <h3 className="text-white font-serif font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                {/* Changed link color to light gray and hover color to amber-700 */}
                <a href="#about" className="text-gray-300 hover:text-amber-700 transition-colors font-serif">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-amber-700 transition-colors font-serif">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://pygenicarc.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-700 transition-colors font-serif">
                  Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-blue-800 pt-8 text-center text-gray-400 text-sm font-serif">
          <p>&copy; {new Date().getFullYear()} PyGenicArc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}