import { useState } from 'react';

export default function RequestDemo() {
  const [formData, setFormData] = useState({
    company: '',
    fullName: '',
    email: '',
    goal: ''
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
      alert(`Demo request submitted!\n\nCompany: ${formData.company}\nName: ${formData.fullName}\nEmail: ${formData.email}\n\nWe'll contact you within 1 business day!`);
      
      // Reset form
      setFormData({
        company: '',
        fullName: '',
        email: '',
        goal: ''
      });
      
      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  return (
    <section id="request-demo" className="py-24 bg-[#f5ecdb] text-[#1b1f3b]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-[#c8a96a] mb-4">Request a demo</p>
          <h2 className="text-5xl font-serif font-bold text-[#1b1f3b]">
            See PyGenicArc In <span className="text-[#d4af37]">Action</span>
          </h2>
          <p className="mt-6 text-lg text-[#2c2c2c] font-serif">
            Walk through the learner journey, review admin dashboards, and explore automation
            playbooks tailored to your industry.
          </p>
          <ul className="mt-8 space-y-4 text-[#2c2c2c] font-serif">
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-[#1b1f3b]"></span>
              Live walkthrough with a solution specialist
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-[#1b1f3b]"></span>
              Customized success roadmap for your team
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-[#1b1f3b]"></span>
              Post-demo summary with action items
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-[#eadbc0] rounded-2xl p-8 space-y-6 shadow-lg shadow-black/10">
          {success && (
            <div className="p-3 bg-green-100 border border-green-300 text-green-700 rounded-lg text-sm">
              Demo request submitted successfully! We'll contact you soon.
            </div>
          )}

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-[#1b1f3b] mb-2">
              Company / Institute
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-[#f1e2c7] bg-[#fdfaf3] text-gray-900 focus:outline-none focus:border-[#d4af37]"
              placeholder="PyGenicArc Labs"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-[#1b1f3b] mb-2">
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#f1e2c7] bg-[#fdfaf3] text-gray-900 focus:outline-none focus:border-[#d4af37]"
                placeholder="Aarav Kapoor"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#1b1f3b] mb-2">
                Work email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#f1e2c7] bg-[#fdfaf3] text-gray-900 focus:outline-none focus:border-[#d4af37]"
                placeholder="team@company.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="goal" className="block text-sm font-semibold text-[#1b1f3b] mb-2">
              What should we focus on?
            </label>
            <textarea
              id="goal"
              value={formData.goal}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-[#f1e2c7] bg-[#fdfaf3] text-gray-900 focus:outline-none focus:border-[#d4af37] resize-none"
              placeholder="Tell us about your learners, business goals, or current challenges."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 rounded-full bg-[#1b1f3b] text-white font-semibold hover:bg-[#151938] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Book My Demo'}
          </button>

          <p className="text-sm text-[#2c2c2c] font-serif text-center">
            We respond within one business day. No spam, just expert help.
          </p>
        </form>
      </div>
    </section>
  );
}


