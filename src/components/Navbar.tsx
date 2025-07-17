import resumepdf from '../components/images/nishant_resume (6).pdf';
import logo from '../components/images/Name Logo.png';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4">
      <div className="flex flex-col items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-30 h-20 "
          />
          {/* <div className="flex flex-col justify-center">
            <span className="font-semibold text-sm text-gray-900 leading-tight">Nishant</span>
            <span className="font-semibold text-sm text-gray-500 leading-tight">Ohal</span>
          </div> */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center space-x-16 mt-5 text-3xl font-semibold">
          <a href="#skills" className="hover:text-gray-600">Skills</a>
          <a href="#education" className="hover:text-gray-600">Education</a>
          <a href="#projects" className="hover:text-gray-600">Projects</a>
          <a href={resumepdf} target="_blank" className="hover:text-gray-600">Resume</a>
          <a href="#certifications" className="hover:text-gray-600">Certification</a>
          <a href="#contact" className="hover:text-gray-600">Contact</a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden mt-8">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        
        {isOpen && (
          <div className="md:hidden mt-3 space-y-3 text-center text-base font-medium">
            <a href="#skills" className="block hover:text-gray-600">Skills</a>
            <a href="#education" className="hover:text-gray-600">Education</a>
            <a href="#projects" className="block hover:text-gray-600">Projects</a>
            <a href={resumepdf} target="_blank" className="block hover:text-gray-600">Resume</a>
            <a href="#certifications" className="block hover:text-gray-600">Certification</a>
            <a href="#contact" className="block hover:text-gray-600">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;