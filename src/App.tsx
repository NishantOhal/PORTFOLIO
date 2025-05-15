import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certification from './components/certification';
import Contact from './components/Contact';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-9 py-8">
        <Hero />
        <Skills />
        <Projects />
        <Certification/>
        <Contact />
      </main>
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/NishantOhal" className="text-gray-600 hover:text-gray-900">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/nishant-ohal" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={24} />
            </a>
            <a href="mailto:nishantohal9@gmail.com" className="text-gray-600 hover:text-gray-900">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-600">© 2025 Nishant Ohal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;