import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Cybersecurity Analyst & SDG6 Advocate
            </h1>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              Building safer digital spaces while championing water equality through technology and advocacy. Founder of Her_Hydro, driving meaningful change in cybersecurity compliance and community empowerment.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-3xl"></div>
              <img
                src="/jane.jpeg"
                alt="Jane Onwuegbuosa"
                className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#about" className="animate-bounce">
            <ArrowDown className="text-slate-600" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
