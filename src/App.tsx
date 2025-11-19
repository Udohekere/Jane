import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Publications />
      <Contact />
    </div>
  );
}

export default App;
