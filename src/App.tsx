import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import MinimalHeader from './components/MinimalHeader'; // ✅ newly added
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certification from './components/certification';
import Contact from './components/Contact';
import LearnTechCaseStudy from './components/LearnTechCaseStudy';
import LokalogyCaseStudy from './components/LokalogyCaseStudy';
import Education from './components/Education';

const LayoutWrapper = () => {
  const location = useLocation();
  const isCaseStudy = location.pathname.startsWith('/case-study');

  return (
    <div className="min-h-screen bg-white">
      {isCaseStudy ? <MinimalHeader /> : <Navbar />}
      
      <main className="container mx-auto px-9 py-8">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Education />
                <Skills />
                
                <Projects />
                <Certification />
                <Contact />
              </>
            }
          />
          <Route path="/case-study/learntech" element={<LearnTechCaseStudy />} />
          <Route path="/case-study/lokalogy" element={<LokalogyCaseStudy />} />
        </Routes>
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
};

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;