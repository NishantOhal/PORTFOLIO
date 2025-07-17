
import heroImg from './images/learntech-hero.png';
import coursesImg from './images/learntech-courses.png';
import benefitsImg from './images/learntech-benefits.png';
import footerImg from './images/learntech-footer.png';
import { Link } from 'react-router-dom'; // ✅ Make sure this is at the top


const LearnTechCaseStudy = () => {
  return (
    
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <div className="mb-6">
  <Link 
    to="/" 
    className="inline-block px-4 py-2 bg-blue-100 text-gray-800 rounded hover:bg-blue-300 transition"
  >
    ← Back to Portfolio
  </Link>
</div>

      <h1 className="text-4xl font-bold mb-8">LearnTech - Online Learning Platform Homepage Design</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="mb-4">
          LearnTech is a concept design for a modern online education platform tailored to students aged 15–28. The homepage is crafted to drive exploration and enrollment by clearly communicating LearnTech’s value proposition and showcasing its courses, outcomes, and community.
        </p>
        <p>
          The design adopts a clean, accessible layout with modern aesthetics to ensure maximum engagement across devices. It introduces the platform with confidence, supported by statistics, testimonials, and a structured visual hierarchy.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Objective</h2>
        <p>
          The goal was to create a homepage that establishes trust, provides quick access to top courses, and encourages sign-ups. It needed to feel approachable yet professional—catering to both students beginning their learning journey and professionals upskilling in tech and communication domains.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Design Process</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Competitive Analysis:</strong> Reviewed platforms like Coursera, Udemy, and Skillshare to identify UI patterns and user behavior triggers.</li>
          <li><strong>Information Architecture:</strong> Mapped out a user-friendly layout with clear content priority (hero, courses, benefits, testimonials, CTA).</li>
          <li><strong>Visual Design:</strong> Incorporated a bold gradient theme paired with soft typography and card-based layouts to guide attention effectively.</li>
          <li><strong>Accessibility Considerations:</strong> High contrast, clear calls to action, and mobile responsiveness were integral to the design process.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Sections</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Hero Area:</strong> Clear message with strong visuals, value metrics, and a dual CTA layout.</li>
          <li><strong>Popular Courses:</strong> Visually appealing cards with labels (Beginner/Intermediate), ratings, and pricing info.</li>
          <li><strong>Why Choose LearnTech:</strong> Grid-based section showing key platform benefits with supporting icons.</li>
          <li><strong>Student Testimonials:</strong> Social proof through highlighted student experiences and success stories.</li>
          <li><strong>Final CTA Banner:</strong> Compelling call to action with emphasis on a free trial and advisor support.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Design Screens</h2>
        <p className="mb-4">
          Below is a preview of the final high-fidelity UI design. These screens reflect the complete homepage experience from landing to trust-building and course exploration.
        </p>
        <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
           <iframe
           className="w-full h-[400px] rounded-lg"
           src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/4BmybWfXJ6V2hABW3K8ekw/Untitled?node-id=1-2"
           allowFullScreen
           ></iframe>
        </div>
        <br /><br />
        <h2 className="text-2xl font-semibold mb-4">Screenshots</h2><br />

        <div className="grid md:grid-cols-2 gap-6">
            <img src={heroImg} alt="LearnTech Hero Section" className="rounded-lg shadow" />
            <img src={coursesImg} alt="Course Cards UI" className="rounded-lg shadow" />
            <img src={benefitsImg} alt="Why Choose LearnTech" className="rounded-lg shadow" />
            <img src={footerImg} alt="Footer and CTA Section" className="rounded-lg shadow" />
        </div>


      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
        <p>
          Striking the right balance between visual richness and clean minimalism was a challenge. The design had to appeal to young learners while retaining a credible, institutional tone. The layout was designed with responsiveness and visual balance in mind, even for image-heavy sections.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
        <p>
          The final LearnTech homepage design is visually engaging, well-structured, and user-centric. It creates a welcoming environment for learners, builds trust through testimonials and metrics, and promotes exploration with strong CTAs. This design can serve as a foundation for a full learning platform MVP.
        </p>
      </section> <br /><br />
      <div className="mb-6">
        <Link 
        to="/" 
        className="inline-block px-4 py-2 bg-blue-100 text-gray-800 rounded hover:bg-blue-300 transition"
        >
        ← Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default LearnTechCaseStudy;
