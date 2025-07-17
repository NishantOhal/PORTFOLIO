
import { Link } from 'react-router-dom';
import lokhero from './images/Lokalogy_hero.png'
import lokproduct from './images/Lokalogy_product.png'
import lokstory from './images/Lokalogy_story.png'
import lokvalues from './images/Lokalogy_values.png'
import lokcta from './images/Lokalogy_cta.png'

const LokalogyCaseStudy = () => {
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

      <h1 className="text-4xl font-bold mb-8">Lokalogy – About Us Page UX Case Study</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p>
          Lokalogy is an organic e-commerce brand deeply rooted in sustainability, indigenous knowledge, and community-driven values. The project focused on crafting an impactful “About Us” page that not only tells the brand’s story but also aligns visually and emotionally with its philosophy.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Objective</h2>
        <p>
          The goal was to design a visually compelling, story-rich, and value-forward About page that:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Tells Lokalogy’s story with clarity and soul</li>
          <li>Highlights core brand values: Frugality, Reciprocity, and Collectivity</li>
          <li>Inspires user trust and emotional connection through visual storytelling</li>
          <li>Drives product engagement via the CTA “View Our Products”</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Understanding the Brief</h2>
        <p>
          The brief emphasized emotionally resonant themes of sustainability, Earth-conscious living, and authenticity. We aimed for a calm yet confident tone, minimal clutter, and a layout that unfolds the narrative step by step—culminating in a clear and actionable CTA.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Information Architecture</h2>
        <p>
          I broke the content into intuitive, scroll-friendly blocks:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Hero section:</strong> Brand headline and forest background for impact</li>
          <li><strong>Story section:</strong> Brand journey with visual storytelling</li>
          <li><strong>Product philosophy:</strong> From your home to the planet</li>
          <li><strong>Values:</strong> Icons with digestible content</li>
          <li><strong>CTA:</strong> Product and Learn More buttons</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Visual Design Approach</h2>
        <p>
          I selected a palette inspired by nature: muted greens, clay browns, and soft whites. Typography was intentionally minimal and legible. I used iconography and imagery that reflect Lokalogy’s mission—organic farming, community rituals, and eco-consciousness. Layouts followed a two-column responsive grid, ensuring harmony across devices.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Design Highlights</h2>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Hero Area:</strong> “From the Earth to Your Body” headline with a forest background evokes trust</li>
          <li><strong>Our Story Section:</strong> Paired with earthy visuals and a statue hinting at ancient knowledge</li>
          <li><strong>Values Grid:</strong> Each value icon highlights Sustainability, Community, and Quality</li>
          <li><strong>CTA Footer:</strong> Reinforces message with clear actions – “View Products” and “Learn More”</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Design Screens</h2>
        <p className="mb-4">
          Below is a preview of the final high-fidelity UI design. These screens reflect the complete aboutus page experience.
        </p>
        <div className="w-full h-[400px] bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
           <iframe
           className="w-full h-[400px] rounded-lg"
           src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/ISZXxy2UHJwjkWFPwJWsIq/Asssignmenet?node-id=1-2&t=KoMJHB7PLktfX9VP-1"
           allowFullScreen
           ></iframe>
        </div>
        <br /><br />
        <h2 className="text-2xl font-semibold mb-4">Screenshots</h2><br />

        <div className="grid md:grid-cols-2 gap-5">
            <img src={lokhero} alt="Lokalogy Hero Section" className="rounded-lg shadow" />
            <img src={lokproduct} alt="product UI" className="rounded-lg shadow" />
            <img src={lokstory} alt="story" className="rounded-lg shadow" />
            <img src={lokvalues} alt="values" className="rounded-lg shadow" />
            <img src={lokcta} alt="Footer and CTA Section" className="rounded-lg shadow" />
        </div>
        
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
        <p>
          Communicating deep cultural and ecological values in a minimal digital interface was a challenge. Ensuring accessibility and visual storytelling while respecting the brand’s quiet strength required deliberate design choices.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
        <p>
          The final About page for Lokalogy creates an immediate emotional impact. It builds narrative trust through earthy visuals and structured storytelling, ultimately driving users to explore products with confidence.
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

export default LokalogyCaseStudy;