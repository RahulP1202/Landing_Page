import { Code2, GraduationCap, Rocket } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Software Development',
    description:
      'Custom software solutions tailored to your business needs. From web applications to enterprise systems, we build scalable, robust, and innovative software that drives growth.',
    features: ['Web Applications', 'Mobile Apps', 'Enterprise Solutions', 'API Development'],
    cardClass: 'bg-[#e8d3b0]'
  },
  {
    icon: GraduationCap,
    title: 'Professional Training',
    description:
      'Empower your team with cutting-edge technical training. Our expert-led programs cover the latest technologies and best practices to keep you ahead in the digital world.',
    features: ['AI & ML Courses', 'Full-Stack Development', 'Cloud Computing', 'Corporate Training'],
    cardClass: 'bg-[#d9c19a]'
  },
  {
    icon: Rocket,
    title: 'Digital Consultation',
    description:
      'Turn your vision into reality with our end-to-end development services. We help businesses and startups launch powerful apps and websites that make an impact.',
    features: ['UI/UX Design', 'MVP Development', 'Technical Consulting', 'Digital Strategy'],
    cardClass: 'bg-[#c9ac82]'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-28 bg-[#f4e9d8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-[#1c1b29] tracking-wide">
            What We Do
          </h2>
          <p className="text-xl text-[#2e2d3c] max-w-2xl mx-auto font-serif opacity-90">
            Comprehensive solutions designed to accelerate your digital journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-[10px] p-10 shadow-lg shadow-black/15 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/60 ${service.cardClass}`}
            >
              <div className="w-16 h-16 bg-white/50 rounded-xl flex items-center justify-center transition-colors duration-300">
                <service.icon className="w-8 h-8 text-[#1c1b29]" />
              </div>

              <div>
                <h3 className="text-2xl font-serif font-semibold text-[#1c1b29] mb-3">
                  {service.title}
                </h3>
                <p className="text-base text-[#2e2d3c]/90 leading-[1.6] font-serif">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-3 text-[#2e2d3c] text-sm font-serif">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 leading-relaxed">
                    <span className="mt-1 w-2 h-2 rounded-full bg-[#1c1b29]"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}