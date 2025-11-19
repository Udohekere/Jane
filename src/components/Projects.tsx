import { CreditCard, FileCheck, TrendingUp, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      icon: FileCheck,
      title: 'NDPA Full Compliance Audit',
      organization: 'She Thrives NGO',
      description:
        'Conducted a comprehensive NDPA compliance audit for an NGO focused on SDG 6. Assessed data protection practices across donor management, beneficiary outreach, and volunteer engagement.',
      highlights: [
        'Evaluated alignment with Nigeria Data Protection Act 2023',
        'Created comprehensive risk register and RoPA documentation',
        'Developed remediation roadmap and DSAR procedures',
        'Maturity Level: Tier 2 - Developing',
      ],
      tags: ['NDPA', 'Data Privacy', 'Compliance', 'Risk Assessment'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: CreditCard,
      title: 'PCI DSS 4.0 Gap Assessment',
      organization: 'SwiftVault Fintech',
      description:
        'Performed full-scope PCI DSS 4.0 gap assessment for a payment gateway and merchant processing system. Identified critical security gaps and provided actionable remediation plan.',
      highlights: [
        'Assessed 12 PCI DSS requirements across payment infrastructure',
        'Identified high-risk areas including unencrypted data and missing MFA',
        '25% fully compliant, 58% partially compliant at baseline',
        'Delivered comprehensive remediation roadmap with timelines',
      ],
      tags: ['PCI DSS', 'Payment Security', 'Compliance', 'Fintech'],
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: TrendingUp,
      title: 'Enterprise Risk Assessment',
      organization: 'Capital Elite Estate',
      description:
        'Conducted enterprise-wide ISO 31000 risk assessment for a real estate company. Established risk management framework covering cybersecurity, operational, financial, and compliance risks.',
      highlights: [
        'Applied ISO 31000:2018 framework methodology',
        'Identified risks across CRM, lead generation, and sales processes',
        'Created detailed risk register with likelihood × impact scoring',
        'Implemented mitigation controls and assigned risk owners',
      ],
      tags: ['ISO 31000', 'Risk Management', 'GRC', 'Enterprise Risk'],
      color: 'from-slate-600 to-slate-700',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive security and compliance assessments demonstrating expertise in GRC, risk management, and regulatory frameworks.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <project.icon size={40} className="mb-4" />
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/90 text-sm">{project.organization}</p>
              </div>

              <div className="p-6">
                <p className="text-slate-700 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start">
                        <span className="text-teal-600 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-slate-100 text-slate-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-xl shadow-md p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Interested in Collaboration?</h3>
            <p className="text-slate-600 mb-6">
              I'm available for cybersecurity assessments, compliance audits, and speaking engagements.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Let's Connect
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
