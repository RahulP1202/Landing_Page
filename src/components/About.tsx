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
    <section id="about" className="py-24 bg-[#f5ecdb]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center text-[#1b1f3b]">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-[#c8a96a] mb-4">Who we are</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Building the <span className="text-[#d4af37]">Future</span> of Learning
          </h2>
          <p className="text-lg md:text-xl text-[#2c2c2c] mb-6 font-serif leading-relaxed">
            PyGenicArc is where innovation meets education and development. We create intelligent ecosystems
            that empower institutions, faculty, and students to thrive in the digital age.
          </p>
          <p className="text-base md:text-lg text-[#2c2c2c] mb-8 font-serif leading-relaxed">
            From AI-powered LMS platforms to compliance-ready accreditation suites, our solutions are built
            to be scalable, data-driven, and relentlessly user-centric.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div key={achievement} className="flex items-start gap-3 bg-white/70 rounded-xl p-4 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#d4af37] mt-1" />
                <span className="text-sm text-[#2c2c2c] font-serif">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className="rounded-2xl p-6 shadow-lg shadow-black/10 border border-[#eadbc0] flex gap-4 items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/60"
              style={{ background: ['#e8d3b0', '#ddc29c', '#c9ac82'][index] }}
            >
              <div className="w-12 h-12 bg-white/40 rounded-xl flex items-center justify-center">
                <highlight.icon className="w-6 h-6 text-[#1b1f3b]" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-[#1b1f3b] mb-2">{highlight.title}</h3>
                <p className="text-[#2c2c2c] font-serif leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}