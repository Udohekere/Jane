import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-slate-900 hover:text-teal-600 transition-colors"
          >
            Jane Onwuegbuosa
          </button>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              Projects
            </button>
            <button onClick={() => scrollToSection('publications')} className="nav-link">
              Publications
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </div>

          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-6 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-slate-700 hover:text-teal-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left py-2 text-slate-700 hover:text-teal-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('publications')}
              className="block w-full text-left py-2 text-slate-700 hover:text-teal-600 transition-colors"
            >
              Publications
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-slate-700 hover:text-teal-600 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
