import { Mail, Linkedin, Github, MapPin, Briefcase } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'omoteshowojane@gmail.com',
      link: 'mailto:omoteshowojane@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Jane Onwuegbuosa',
      link: 'https://www.linkedin.com/in/janeonwuegbuosa-62b626273',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Abuja, Nigeria',
      link: null,
    },
  ];

  const expertise = [
    'PCI DSS Compliance',
    'NDPA Compliance',
    'ISO 31000 Risk Assessment',
    'Data Privacy',
    'Web Application Security',
    'GRC',
    'Cybersecurity Analysis',
    'Compliance Auditing',
  ];

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm open to meaningful connections, collaborations, and conversations. Whether you need a cybersecurity assessment, compliance audit, or want to discuss social impact through technology—let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-teal-600 p-3 rounded-lg">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm mb-1">{item.label}</div>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-lg hover:text-teal-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-lg">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-slate-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-teal-500" size={24} />
                <h4 className="text-xl font-semibold">Current Role</h4>
              </div>
              <p className="text-slate-300 mb-2">Cybersecurity Analyst</p>
              <p className="text-slate-400 text-sm mb-4">Genesys Tech Hub</p>
              <p className="text-slate-300 mb-4">Founder & Program Director</p>
              <p className="text-slate-400 text-sm">Her_Hydro</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {expertise.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-800 text-slate-200 rounded-lg hover:bg-teal-600 hover:text-white transition-colors border border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-8">
              <h4 className="text-2xl font-bold mb-4">Available For:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-teal-200">•</span>
                  <span>Cybersecurity Assessments & Audits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-200">•</span>
                  <span>Compliance Consulting (PCI DSS, NDPA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-200">•</span>
                  <span>Risk Management & GRC Projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-200">•</span>
                  <span>Speaking Engagements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-200">•</span>
                  <span>Mentorship Programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-slate-800 text-center text-slate-400">
          <p className="mb-2">© 2025 Jane Onwuegbuosa. All rights reserved.</p>
          <p className="text-sm">
            Cybersecurity Analyst | Founder of Her_Hydro | SDG6 Advocate
          </p>
        </div>
      </div>
    </section>
  );
}
