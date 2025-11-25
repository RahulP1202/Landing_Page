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

export default function Portfolio() {
  return (
    // 1. Change section background to LIGHT CREAM (bg-stone-50)
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* Changed header text color to dark gray, font to serif, and accent to amber-700 */}
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-gray-900">
            Our <span className="text-amber-700">Solutions</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-serif">
            Where AI meets education - Discover our comprehensive suite of digital products
          </p>
        </div>

        {/* 2. Grid layout is preserved (2-col / 3-col) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              // 3. Change card style to WHITE background (bg-white), border to light gray, hover accent to amber-700
              className="group relative bg-white border border-gray-300 rounded-xl p-6 hover:border-amber-700 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10"
            >
              <div className="flex items-start gap-4">
                {/* 4. Change icon container background and icon color to amber-700 */}
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  {/* 5. Change text color to dark gray, font to serif, hover accent to amber-700 */}
                  <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  {/* 6. Change description text color and font */}
                  <p className="text-gray-600 text-sm leading-relaxed font-serif">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6 text-lg font-serif">
            Bringing intelligence, connectivity, and growth into one powerful platform
          </p>
          {/* 7. Change button color and shadow from cyan to amber-700 */}
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-amber-700 text-white font-semibold rounded-full hover:bg-amber-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/30"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}