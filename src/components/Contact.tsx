import { Mail, MapPin, Clock, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSuccess(true);
      setIsSubmitting(false);
      alert(`Message sent successfully!\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nWe'll get back to you soon!`);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-28 bg-[#f4e9d8] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-[#1c1b29] tracking-wide">
            Let's <span className="text-[#d4af37]">Connect</span>
          </h2>
          <p className="text-xl text-[#2e2d3c] max-w-2xl mx-auto font-serif opacity-90">
            Ready to transform your ideas into reality? Get in touch with us today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info Column */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/40 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#1c1b29]" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-[#1c1b29] mb-1">Email</h3>
                <a href="mailto:info@pygenicarc.com" className="text-[#2e2d3c] hover:text-[#d4af37] transition-colors font-serif">
                  info@pygenicarc.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/40 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#1c1b29]" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-[#1c1b29] mb-1">Phone</h3>
                <a href="tel:+919019172345" className="text-[#2e2d3c] hover:text-[#d4af37] transition-colors font-serif">
                  +91 90191 72345
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/40 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#1c1b29]" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-[#1c1b29] mb-1">Location</h3>
                <p className="text-[#2e2d3c] font-serif">Bengaluru, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/40 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#1c1b29]" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-[#1c1b29] mb-1">Business Hours</h3>
                <p className="text-[#2e2d3c] font-serif">Mon - Sat</p>
                <p className="text-[#2e2d3c] font-serif">9:00 AM - 5:00 PM IST</p>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="bg-[#e8d3b0] rounded-2xl p-8 shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/60">
            <form onSubmit={handleSubmit} className="space-y-6">
              {success && (
                <div className="p-3 bg-green-100 border border-green-300 text-green-700 rounded-lg text-sm">
                  Message sent successfully! We'll contact you soon.
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-serif font-medium text-[#1c1b29] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/70 border border-[#eadbc0] rounded-lg text-[#1c1b29] placeholder-[#2e2d3c]/60 focus:outline-none focus:border-[#d4af37] transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-serif font-medium text-[#1c1b29] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/70 border border-[#eadbc0] rounded-lg text-[#1c1b29] placeholder-[#2e2d3c]/60 focus:outline-none focus:border-[#d4af37] transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-serif font-medium text-[#1c1b29] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/70 border border-[#eadbc0] rounded-lg text-[#1c1b29] placeholder-[#2e2d3c]/60 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-[#d4af37] text-[#1c1b29] font-semibold rounded-lg hover:bg-[#c49d2e] transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}