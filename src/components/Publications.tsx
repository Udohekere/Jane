import { BookOpen, ExternalLink, Calendar } from 'lucide-react';

export default function Publications() {
  const publications = [
    {
      title: 'AI in Cybersecurity: The Future or Detrimental? - Part 1',
      platform: 'Medium',
      description:
        'Exploring the transformative role of artificial intelligence in cybersecurity, examining both the opportunities and challenges it presents for the future of digital security.',
      link: 'https://medium.com/@omoteshowojane/ai-in-cybersecurity-the-future-or-detrimental-part-1-d96d2e9d6627',
      topics: ['AI', 'Cybersecurity', 'Risk Management', 'Technology'],
    },
    {
      title: 'AI in Cybersecurity: The Future or Detrimental? - Part 2',
      platform: 'Medium',
      description:
        'Continuing the discussion on AI in cybersecurity, diving deeper into practical applications, ethical considerations, and the balance between innovation and security risks.',
      link: 'https://medium.com/@omoteshowojane/ai-in-cybersecurity-the-future-or-detrimental-part-2-0caa7f525958',
      topics: ['AI', 'Cybersecurity', 'Ethics', 'Future Tech'],
    },
  ];

  return (
    <section id="publications" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Publications</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Sharing insights on cybersecurity, AI, and technology trends through written content and thought leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {publications.map((pub, index) => (
            <article
              key={index}
              className="bg-slate-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-slate-100 hover:border-teal-500 group"
            >
              <div className="flex items-start justify-between mb-4">
                <BookOpen className="text-teal-600 group-hover:text-teal-700 transition-colors" size={32} />
                <span className="text-sm text-slate-500 flex items-center gap-1">
                  <Calendar size={14} />
                  {pub.platform}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">
                {pub.title}
              </h3>

              <p className="text-slate-700 mb-6 leading-relaxed">{pub.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {pub.topics.map((topic, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-white text-slate-700 rounded-full border border-slate-200"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold group-hover:gap-3 transition-all"
              >
                Read Article
                <ExternalLink size={18} />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">Want to Stay Updated?</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Follow me on Medium for more insights on cybersecurity, AI, compliance, and social impact through technology.
          </p>
          <a
            href="https://medium.com/@omoteshowojane"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors font-semibold"
          >
            <BookOpen size={20} />
            Follow on Medium
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
