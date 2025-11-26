const articles = [
  {
    category: 'Artificial Intelligence',
    title: 'How AI Is Reimagining Modern Education',
    summary:
      'Discover practical use cases of AI tutors, adaptive assessments, and personalized learning journeys that boost student success.',
    author: 'Team PyGenicArc',
    readTime: '6 min read'
  },
  {
    category: 'Product Engineering',
    title: 'Shipping Enterprise Software with Confidence',
    summary:
      'A playbook for keeping enterprise releases predictable with automated QA, observability, and clear rollout strategies.',
    author: 'Engineering Desk',
    readTime: '8 min read'
  },
  {
    category: 'Consulting Stories',
    title: 'From Vision to Prototype in 90 Days',
    summary:
      'How we helped an EdTech startup validate their concept, design the UX, and launch a working MVP in record time.',
    author: 'Consulting Practice',
    readTime: '5 min read'
  }
];

const blogPalette = ['bg-[#e8d3b0]', 'bg-[#ddc29c]', 'bg-[#c9ac82]'];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#f7f1e6] text-[#1b1f3b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c8a96a] font-semibold">
            Latest insights
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1b1f3b] mb-4 tracking-wide">
            Stories From The Studio
          </h2>
          <p className="text-lg md:text-xl text-[#2c2c2c] font-serif max-w-3xl mx-auto">
            Practical guides, customer wins, and product updates straight from the PyGenicArc team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className={`h-full rounded-[10px] p-6 flex flex-col shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/60 ${blogPalette[index % blogPalette.length]}`}
            >
              <span className="text-xs font-semibold tracking-wider text-[#1b1f3b] uppercase">
                {article.category}
              </span>
              <h3 className="mt-4 text-2xl font-serif font-semibold text-[#1b1f3b] leading-snug">
                {article.title}
              </h3>
              <p className="mt-3 text-[#2c2c2c] font-serif flex-1">
                {article.summary}
              </p>
              <div className="mt-6 pt-4 border-t border-[#1b1f3b]/20 text-sm text-[#2c2c2c] font-serif">
                <p>{article.author}</p>
                <p className="text-[#1b1f3b]/70">{article.readTime}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


