import cert1 from '../components/images/Figma Bootcamp.png';
import cert2 from '../components/images/Java Bootcamp.png';
import cert3 from '../components/images/Jiocinema.png';
import cert4 from '../components/images/React bootcamp.png';
import cert5 from '../components/images/Hp.png';
import cert6 from '../components/images/deloitte.png';
import cert7 from '../components/images/codsoft.png';
import cert8 from '../components/images/certificate.png';
import cert9 from '../components/images/Nptel.png';
import cert10 from '../components/images/excel.png';
const certifications = [
  {
    title: 'HP LIFE-Data Science & Analytics',
    description:  [
      'Issued May 2025',
      'Credential ID 097dbbf1-93cd-4bfb-a544-8279df89c76d'],
    image: cert5,
    link: 'https://www.life-global.org/certificate/097dbbf1-93cd-4bfb-a544-8279df89c76d'
  },  
  {
    title: 'DELOITTE-Data Analytics Job Simulation',
    description:  [
      'Issued May 2025',
      'Credential ID c7NgLu5qi5HzkMysa '],
    image: cert6,
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_c7NgLu5qi5HzkMysa_1746705708933_completion_certificate.pdf'
  },
  {
    title: 'ONEROADMAP-Excel',
    description:  [
      'Issued May 2025',
      'Credential ID CERT-2006D288 '],
    image: cert10,
    link: 'https://oneroadmap.io/skills/excel/certificate/CERT-2006D288'
  },  
  {
    title: 'LETSUPGRADE-Figma Bootcamp',
    description:  [
      'Issued March 2025',
      'Credential ID LUEFGMAR1251121'],
    image: cert1,
    link: 'https://verify.letsupgrade.in/certificate/LUEFGMAR1251121'
  },  
  {
    title: 'LETSUPGRADE-Java Bootcamp',
    description:  [
      'Issued Feb 2025',
      'Credential ID LUEJAVAJAN1252813'],
    image: cert2,
    link: 'https://verify.letsupgrade.in/certificate/LUEJAVAJAN1252813'
  },    
  {
    title: 'LETSUPGRADE-Jio Cinema React Clone',
    description:  [
      'Issued Feb 2025',
      'Credential ID LUEHTMLFEB1251149'],
    image: cert3,
    link: 'https://verify.letsupgrade.in/certificate/LUEHTMLFEB1251149'
  },  
  {
    title: 'LETSUPGRADE-React Bootcamp',
    description:  [
      'Issued Feb 2025',
      'Credential ID LUERJSFEB1251876'],
    image: cert4,
    link: 'https://verify.letsupgrade.in/certificate/LUERJSFEB1251876'
  },
  {
    title: 'CURSA-Web Development',
    description: [
      'Issued Feb 2025',
      'Credential ID fc35ecd2d30f8aa231c3b0da0bb03a38'
    ],
    image: cert8,
    link: 'https://cursa.app/en/my-certificate/certfc35ecd2d30f8aa231c3b0da0bb03a38'
  },
  {
    title: 'CODSOFT-Web Development',
    description: [
      'Codsoft Internship',
      'JAN 2024-JAN 2024'
    ],
    image: cert7,
    link: 'https://drive.google.com/file/d/19VDJi9OzcVbJ8IsMhzLr2P_7z1n5e5ZP/view'
  },
  {
    title: 'NPTEL-Cloud Computing',
    description: [
      'Issued May 2023',
      'Credential ID NPTEL23CS42S2448158204201381'
    ],
    image: cert9,
    link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS42S2448158204201381'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((certification, index) => (
          <a 
            href={certification.link} 
            key={index}
            className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
          >
            <div className="relative">
              <img 
                src={certification.image} 
                alt={certification.title} 
                className="w-full h-48 object-contain"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">View Certification</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{certification.title}</h3>
              {certification.description.map((line, i) => (
                <p key={i} className="text-gray-600">{line}</p>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
