import { Mail, MapPin, Clock, Phone } from 'lucide-react';

export default function Contact() {
  return (
    // Background remains light cream
    <section id="contact" className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Removed radial gradient background effect */}

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* Changed font to serif and emphasis color to amber-700 */}
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-gray-900">
            Let's <span className="text-amber-700">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif">
            Ready to transform your ideas into reality? Get in touch with us today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info Column */}
          <div className="space-y-8">
            {/* Changed icon colors, background, and text colors */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-1">Email</h3>
                <a href="mailto:info@pygenicarc.com" className="text-gray-600 hover:text-amber-700 transition-colors font-serif">
                  info@pygenicarc.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-1">Phone</h3>
                <a href="tel:+919019172345" className="text-gray-600 hover:text-amber-700 transition-colors font-serif">
                  +91 90191 72345
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600 font-serif">Bengaluru, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-1">Business Hours</h3>
                <p className="text-gray-600 font-serif">Mon - Sat</p>
                <p className="text-gray-600 font-serif">9:00 AM - 5:00 PM IST</p>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          {/* Changed form container background to white/light and border to light gray */}
          <div className="bg-white border border-gray-300 rounded-2xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                {/* Changed label text color and font to dark/serif */}
                <label htmlFor="name" className="block text-sm font-serif font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  // Changed input style to light background, and border focus to amber-700
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-amber-700 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-serif font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-amber-700 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-serif font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-amber-700 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button: Changed cyan background to amber-700 */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-600 transition-all duration-300 hover:scale-105 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}