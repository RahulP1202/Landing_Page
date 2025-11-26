const plans = [
  {
    name: 'Starter',
    price: '₹9,999',
    tagline: 'For solo founders validating an idea',
    features: ['Up to 2 active projects', 'Email support', 'Monthly strategy call']
  },
  {
    name: 'Growth',
    price: '₹29,999',
    tagline: 'For fast-moving product teams',
    popular: true,
    features: [
      'Unlimited projects',
      'Dedicated success partner',
      'Fortnightly delivery demos',
      'Priority support (24h SLA)'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    tagline: 'For large programs & complex rollouts',
    features: [
      'On-site discovery workshops',
      'Compliance & security reviews',
      'Managed training programs',
      '24/7 incident desk'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#f5ecdb] text-[#1b1f3b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-[#1b1f3b] tracking-wide">
            Pick Your <span className="text-[#d4af37]">Momentum</span>
          </h2>
          <p className="text-lg md:text-xl text-[#2c2c2c] font-serif max-w-4xl mx-auto">
            Flexible engagement models that scale from prototype sprints to multi-year digital
            transformation programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-[24px] p-8 flex flex-col shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/60 ${
                ['bg-[#e8d3b0]', 'bg-[#ddc29c]', 'bg-[#c9ac82]'][index]
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#d4af37] text-[#1b1f3b] text-xs tracking-wider uppercase">
                  Most Popular
                </span>
              )}
              <p className="text-sm uppercase tracking-[0.3em] text-[#1b1f3b]/70">
                {plan.name}
              </p>
              <p className="mt-6 text-4xl font-serif font-bold text-[#1b1f3b]">
                {plan.price}
              </p>
              <p className="mt-2 text-[#2c2c2c] font-serif">
                {plan.tagline}
              </p>
              <ul className="mt-8 space-y-3 text-[#2c2c2c] font-serif flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-[#1b1f3b]"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#request-demo"
                className="mt-8 text-center w-full px-6 py-3 rounded-full font-semibold transition-colors duration-200 bg-[#1b1f3b] text-white hover:bg-[#d4af37] hover:text-[#1b1f3b]"
              >
                Talk To Us
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


