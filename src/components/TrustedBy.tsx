const partners = [
  'AI-First University Consortium',
  'Global Skills Accelerator',
  'Open Labs Network',
  'STEM Rising Alliance',
  'NextGen Campus Cloud',
  'Digital Scholars Forum'
];

export default function TrustedBy() {
  return (
    <section className="relative bg-[#0d1b2a] py-16 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#d4af37] mb-6">
          Institutions Partnered With PyGenicArc
        </p>
        <div className="overflow-hidden">
          <div className="flex gap-16 animate-[marquee_18s_linear_infinite] whitespace-nowrap text-lg font-serif text-white/85">
            {partners.map((partner) => (
              <span key={partner} className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full border-2 border-[#d4af37] flex items-center justify-center text-xs uppercase tracking-[0.3em] text-[#d4af37]">
                  AI
                </span>
                {partner}
              </span>
            ))}
            {partners.map((partner) => (
              <span key={`${partner}-duplicate`} className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full border-2 border-[#d4af37] flex items-center justify-center text-xs uppercase tracking-[0.3em] text-[#d4af37]">
                  AI
                </span>
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
}

