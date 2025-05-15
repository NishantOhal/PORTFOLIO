import profileImage from '../components/images/profile.jpg';
import resumepdf from '../components/images/nishant_resume (6).pdf';
import './Hero.css'; // Import the CSS file for animations

const Hero = () => {
  return (
    <section className="py-20 md:py-25 justify-between">
      <div className="grid md:grid-cols-2 gap-20 items-center mx-auto max-w-screen-lg justify-start">
        <div className="fade-in">
          <h1 className="text-5xl md:text-5xl font-bold mb-6">I am Nishant Ohal</h1>
          <p className="text-gray-600 text-lg mb-8">
            I am a passionate Frontend Developer and UI/UX enthusiast with a strong focus on creating user-friendly and visually appealing web experiences. With a keen eye for design and a solid foundation in web technologies, I enjoy transforming ideas into interactive and responsive interfaces.
          </p>
          <a 
            href={resumepdf} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            See My Resume
          </a>
        </div>
        <div className="flex justify-center md:justify-end fade-in">
          <img 
            src={profileImage} 
            alt="Nishant Ohal" 
            className="rounded-lg shadow-x1 w-64 md:w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
