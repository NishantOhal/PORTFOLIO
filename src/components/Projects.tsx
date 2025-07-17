
import Shoping from '../components/images/shopping.png';
import food from '../components/images/yummy-foods.png';
import scanner from '../components/images/Ingredient-scanner.png';
import Calculator from '../components/images/calculator.png';
import portfolio from '../components/images/portfolio.png';
import srk from '../components/images/srk-website.png';
import age from '../components/images/agecalc.png';
import weather from '../components/images/weatherly.png';
import Driplab from '../components/images/driplab (2).png';
import Seed from '../components/images/Mockup content.png';
import heroImg from './images/learntech-hero.png';
import lokhero from './images/Lokalogy_hero.png'

const projects = [
  {
  title: 'Lokalogy - About Us Page Design',
  description: 'An earthy, narrative-driven About Us page for an organic e-commerce brand, combining storytelling, brand values, and strong visuals to build trust and engagement.',
  image: lokhero,
  link: '/case-study/lokalogy' // This should match your route path
  },

  {
  title: 'LearnTech - EdTech Homepage Design',
  description: 'A clean, conversion-driven homepage for an online learning platform, designed in Figma with bold visuals, structured layouts, and CTAs tailored for learners',
  image: heroImg,
  link: '/case-study/learntech' // This should match your route path
  },
    {
    title: 'Seed Catalog App UI',
    description: 'Designed a clean, user-friendly mobile UI for browsing and buying flower seeds. Includes filtering, product details, and smooth navigation for a seamless shopping experience.',
    image: Seed,
    link: 'https://drive.google.com/file/d/1Gf_UaNhoVPvWsA5mNJS3biEv9c_auqge/view?usp=drive_link'
  },
  {
    title: 'Driplab-Fashion Clothing App Design',
    description: 'DripLab is a sleek, user-friendly fashion app designed in Figma, offering intuitive navigation and a seamless shopping experience with clean visuals.',
    image: Driplab,
    link: 'https://drive.google.com/file/d/16Zawpd6aFiSfx4WzsiuGeRVu7VFlkNnT/view?usp=sharing'
  },
  {
    title: 'Weatherly-Weather app',
    description: 'Weatherly is a stylish real-time weather app that displays current conditions with a dynamic UI, background visuals, and location-based forecasts.',
    image: weather,
    link: 'https://weatherly-temp.vercel.app/'
  },
  {
    title: 'Age Calculator',
    description: 'A sleek and interactive age calculator that shows your exact age, zodiac sign, and birthday countdown with dark mode and animations.',
    image: age,
    link: 'https://age-calculator-topaz-eight.vercel.app/'
  },
  {
    title: 'Fashion Store Homepage',
    description: 'E-commerce website with modern design and seamless shopping experience',
    image: Shoping,
    link: 'https://landing-page-ten-henna.vercel.app/'
  },
  {
    title: 'Food Showcase Website',
    description: 'Restaurant website with menu management and online ordering system',
    image: food,
    link: 'https://second-project-beta-five.vercel.app/'
  },
  {
    title: 'Food Ingredient Scanner',
    description: 'Mobile app for scanning and analyzing food ingredients',
    image: scanner,
    link: '#'
  },
  {
    title: 'Calculator',
    description: 'Calculator application capable of performing basic arithmetic operations (addition, subtraction, multiplication, and division)',
    image: Calculator,
    link: 'https://calculator-xi-jade.vercel.app/'
  },
  {
    title: 'Portfolio',
    description: 'Portfolio website which showcasing the skills, project etc',
    image: portfolio,
    link: 'https://nishh.vercel.app/'
  },
  {
    title: 'Srk Wikipedia',
    description: 'A wikipedia page of Actor Shahrukh Khan',
    image: srk,
    link: 'https://first-project-ashen.vercel.app/'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a 
            href={project.link} 
            key={index}
            className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
          >
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">View Project</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
