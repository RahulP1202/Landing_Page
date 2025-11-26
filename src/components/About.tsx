import { CheckCircle2, Zap, Target, Users } from 'lucide-react';

const highlights = [
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'Leveraging cutting-edge technologies to deliver future-ready solutions'
  },
  {
    icon: Target,
    title: 'Result Driven',
    description: 'Focused on delivering measurable outcomes that drive business growth'
  },
  {
    icon: Users,
    title: 'Client Centric',
    description: 'Your success is our mission - we partner with you every step of the way'
  }
];

const achievements = [
  'AI-Powered Education Platforms',
  'Enterprise Software Solutions',
  'Professional Training Programs',
  'Successful Digital Transformations'
];

export default function About() {
  return (
    // Changed section background to a subtle light shade (bg-stone-100)
    <section id="about" className="py-24 bg-stone-100 relative overflow-hidden">
      {/* Removed the complex background grid effect */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            {/* Changed text color to dark, and emphasis color to amber-700 (muted gold). Font is serif. */}
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gray-900">
              Building the <span className="text-amber-700">Future</span>
            </h2>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed font-serif">
              PyGenicArc is where innovation meets education and development. We're not just building
              software - we're creating ecosystems that empower businesses and individuals to thrive
              in the digital age.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-serif">
              From AI-powered learning management systems to enterprise applications, our solutions
              are designed to be scalable, intelligent, and user-centric. We believe in the power of
              technology to transform lives and businesses.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-2">
                  {/* Changed check icon color to amber-700 */}
                  <CheckCircle2 className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-serif">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                // Changed card from dark gradient to light, and border/hover accent to amber-700
                className="bg-white border border-gray-300 rounded-xl p-6 hover:border-amber-700 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
              >
                <div className="flex items-start gap-4">
                  {/* Changed icon container background and icon color to amber-700 */}
                  <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    {/* Changed text color to dark, and font to serif */}
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-serif">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}