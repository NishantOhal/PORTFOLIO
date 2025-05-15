import skillimg from '../components/images/skills.jpg';
import htmlLogo from '../components/images/html-logo.jpg';
import cssLogo from '../components/images/css-logo.png';
import jsLogo from '../components/images/js-logo.png';
import reactLogo from '../components/images/react-logo.png';
import angularLogo from '../components/images/angular-logo.png';
import uiuxLogo from '../components/images/uiux-logo.webp';
import excelLogo from '../components/images/excel-logo.jpg';
import powerbiLogo from '../components/images/powerbi-logo.png';
import { useState } from 'react';

const skillsList = [
  { name: 'HTML5', level: 90, logo: htmlLogo },
  { name: 'CSS3', level: 85, logo: cssLogo },
  { name: 'JavaScript', level: 88, logo: jsLogo },
  { name: 'React.js', level: 85, logo: reactLogo },
  { name: 'Angular.js', level: 80, logo: angularLogo },
  { name: 'UIUX', level: 85, logo: uiuxLogo },
  { name: 'Excel', level: 65, logo: excelLogo },
  { name: 'PowerBI', level: 65, logo: powerbiLogo },
];

const Skills = () => {
  const [bgColor] = useState('');
  return (
    <section id="skills" className="py-20" style={{ backgroundColor: bgColor }}>
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {skillsList.map((skill) => (
              <div key={skill.name} className="mb-6">
                <div className="flex items-center mb-2">
                  <img src={skill.logo} alt={`${skill.name} logo`} className="w-6 h-6 mr-2" />
                  <span className="font-medium mr-4">{skill.name}</span>
                  <span className="ml-auto">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div 
                    className="h-full bg-blue-600 rounded" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <img 
              src={skillimg}
              alt="Skills" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;