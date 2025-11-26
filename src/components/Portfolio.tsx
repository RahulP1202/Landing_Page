import { BookOpen, Monitor, Brain, Database, Users2, BarChart3 } from 'lucide-react';

const portfolioItems = [
  {
    icon: BookOpen,
    title: 'LMS Platform',
    description: 'Comprehensive learning management system with AI-powered features'
  },
  {
    icon: Monitor,
    title: 'E-Learning Platform',
    description: 'Interactive online education platform with virtual classrooms'
  },
  {
    icon: Brain,
    title: 'Virtual Labs',
    description: 'Immersive virtual laboratory environments for hands-on learning'
  },
  {
    icon: Database,
    title: 'DSA Platform',
    description: 'Data structures and algorithms practice platform'
  },
  {
    icon: Users2,
    title: 'Support Portal',
    description: 'Multi-channel customer support and ticketing system'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization and business intelligence tools'
  }
];

const portfolioPalette = ['bg-[#e8d3b0]', 'bg-[#ddc29c]', 'bg-[#c9ac82]'];

export default function Portfolio() {
  return (
    <section className="py-24 bg-[#f7f1e6] text-[#1b1f3b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-[#1b1f3b] tracking-wide">
            Our <span className="text-[#d4af37]">Solutions</span>
          </h2>
          <p className="text-xl text-[#2c2c2c] max-w-2xl mx-auto font-serif">
            Where AI meets education - Discover our comprehensive suite of digital products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className={`relative rounded-[10px] p-6 shadow-lg shadow-black/10 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/60 ${portfolioPalette[index % portfolioPalette.length]}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#1b1f3b]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-[#1b1f3b] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#2c2c2c] text-sm leading-relaxed font-serif">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#2c2c2c] mb-6 text-lg font-serif">
            Bringing intelligence, connectivity, and growth into one powerful platform
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#d4af37] text-[#1b1f3b] font-semibold rounded-full hover:bg-[#c39d2f] transition-all duration-300 hover:scale-105 shadow-lg shadow-black/20"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}