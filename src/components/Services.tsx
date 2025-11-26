import { Code2, GraduationCap, Rocket } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs. From web applications to enterprise systems, we build scalable, robust, and innovative software that drives growth.',
    features: ['Web Applications', 'Mobile Apps', 'Enterprise Solutions', 'API Development']
  },
  {
    icon: GraduationCap,
    title: 'Professional Training',
    description: 'Empower your team with cutting-edge technical training. Our expert-led programs cover the latest technologies and best practices to keep you ahead in the digital world.',
    features: ['AI & ML Courses', 'Full-Stack Development', 'Cloud Computing', 'Corporate Training']
  },
  {
    icon: Rocket,
    title: 'Digital Consultation',
    description: 'Turn your vision into reality with our end-to-end development services. We help businesses and startups launch powerful apps and websites that make an impact.',
    features: ['UI/UX Design', 'MVP Development', 'Technical Consulting', 'Digital Strategy']
  }
];

export default function Services() {
  return (
    // 1. Change section background from dark to light cream
    <section id="services" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-gray-900">
            What We <span className="text-amber-700">Do</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-serif">
            Comprehensive solutions designed to accelerate your digital journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              // 2. Change card background from dark gradient to white, border to light gray, and hover accent to amber-700
              className="group relative bg-white border border-gray-300 rounded-2xl p-8 hover:border-amber-700 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1"
            >
              {/* Removed the internal top-right blur effect */}

              <div className="relative">
                {/* 3. Change icon container background and icon color to amber-700 */}
                <div className="w-16 h-16 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 group-hover:scale-105 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-amber-700" />
                </div>

                {/* 4. Change text color to dark, font to serif */}
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>

                {/* 5. Change description text color and font */}
                <p className="text-gray-600 mb-6 leading-relaxed font-serif">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm font-serif">
                      {/* 6. Change bullet point color to amber-700 */}
                      <div className="w-1.5 h-1.5 bg-amber-700 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}