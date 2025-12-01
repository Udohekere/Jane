import { Shield, Award, Users, Droplet } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Shield,
      title: 'Cybersecurity Expertise',
      description: 'Specialized in compliance (PCI DSS, NDPA), risk assessment (ISO 31000), and web application security.',
    },
    {
      icon: Award,
      title: 'Certified Professional',
      description: 'Associate of (ISC)², Certified Data Protection Officer, and multiple industry certifications.',
    },
    {
      icon: Droplet,
      title: 'SDG6 Advocate',
      description: 'Founder of Her_Hydro, providing clean water access to underserved communities in Nigeria.',
    },
    {
      icon: Users,
      title: 'Mentor & Speaker',
      description: 'Passionate about mentoring young girls in tech and speaking on cybersecurity and social impact.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I'm a Geology graduate turned Cybersecurity & Compliance Specialist passionate about building safer digital spaces and making sense of complex systems. My journey has taken me from analyzing rocks to protecting digital infrastructure, and I bring the same analytical rigor to both.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Currently, I work as a Cyber Security Analyst at Genesys Tech Hub, where I help organizations achieve PCI DSS compliance by assessing security controls, documenting policies, and guiding teams through certification processes.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Beyond cybersecurity, my heart beats loudest for advocacy. I lead Her_Hydro, conducting both online and offline campaigns focused on SDG 6—providing clean water to underserved communities and teaching hygiene and sanitation to create healthier, more dignified lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow border border-slate-200"
            >
              <item.icon className="text-teal-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">4+</div>
              <div className="text-teal-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-teal-100">Major Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-teal-100">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
