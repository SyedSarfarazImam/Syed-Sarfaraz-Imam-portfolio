import { motion } from 'motion/react';
import { Award, ExternalLink, BrainCircuit } from 'lucide-react';

const certificates = [
  {
    title: 'Innovative Hardware Model Making 2026',
    issuer: 'International Level',
    year: '2026',
    link: 'https://ibb.co/zVpVmqqb',
    desc: 'Recognized for excellence in hardware innovation and model design at an international competition.',
  },
  {
    title: 'Sales Executive Internship Certificate',
    issuer: 'Sony (ManpowerGroup)',
    year: '2025',
    link: 'https://ibb.co/wr6TwQPS',
    desc: 'Recognition for outstanding sales performance and product mastery during the Sony internship.',
  },
  {
    title: 'Business Statistics',
    issuer: 'Academic Achievement',
    year: '2025',
    link: 'https://ibb.co/NdVcHQbW',
    desc: 'Demonstrated proficiency in statistical analysis and data-driven decision making.',
  },
  {
    title: 'Social Media Marketing',
    issuer: 'HP Life',
    year: '2026',
    link: 'https://ibb.co/5WR1VWbh',
    desc: 'Certified expertise in digital marketing strategies and social media engagement.',
  },
  {
    title: 'University Carrom Competition (2nd Place)',
    issuer: 'University Level',
    year: '2026',
    link: 'https://ibb.co/HfgZVpSq',
    desc: 'Achieved 2nd position in the university-level carrom tournament.',
  },
  {
    title: 'Selling Online',
    issuer: 'HP Life',
    year: '2026',
    link: 'https://ibb.co/ZRYx8B6j',
    desc: 'Mastery of e-commerce principles and online sales techniques.',
  },
  {
    title: 'Poster Making & Presentation (1st Position)',
    issuer: 'College Level',
    year: '2025',
    link: 'https://ibb.co/LDmQgYNs',
    desc: 'Won 1st prize for "Digital Transformation" poster and presentation.',
  },
  {
    title: 'Your Target Audience',
    issuer: 'HP Life',
    year: '2026',
    link: 'https://ibb.co/KzWz3Ppr',
    desc: 'Strategic certification in audience identification and market segmentation.',
  },
];

export default function Certificates() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 text-gold mb-4">
            <Award size={24} />
            <span className="uppercase tracking-widest font-bold">Credentials</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Certificates & <span className="text-gold">Achievements</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive record of my professional certifications, academic wins, and competitive achievements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 hover:border-gold/50 transition-all group"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform">
                <Award size={40} />
              </div>
              <div className="text-xs font-bold text-gold uppercase tracking-widest mb-2">{cert.year}</div>
              <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
              <div className="text-gray-500 text-sm mb-4">{cert.issuer}</div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{cert.desc}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gold font-bold hover:text-gold-light transition-colors"
              >
                <span>View Full Certificate</span>
                <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* AI Prompt Writing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 border-gold/30 royal-gradient relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <BrainCircuit size={120} />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-8 flex items-center space-x-4">
              <BrainCircuit className="text-gold" size={32} />
              <span>AI Prompt Writing Showcase</span>
            </h2>
            
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-8">
              <h3 className="text-gold font-bold mb-4 uppercase tracking-widest text-sm">Sample Prompt Orchestration</h3>
              <p className="text-gray-300 font-mono text-sm leading-relaxed mb-6 italic">
                "Act as a Senior Marketing Strategist. Develop a comprehensive 30-day market entry strategy for a premium electronics brand in the Tier-2 cities of India. Focus on hyper-local engagement, psychological pricing models, and a multi-channel sales funnel that integrates both offline retail and digital touchpoints. Provide a breakdown of KPIs for each phase..."
              </p>
              <div className="flex items-center space-x-2 text-gray-500 text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Demonstrating strategic AI integration and logic design.</span>
              </div>
            </div>

            <a
              href="https://ibb.co/KzVB7F4H"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gold text-black font-bold px-8 py-4 rounded-full hover:bg-gold-light transition-all shadow-xl shadow-gold/20"
            >
              <span>View AI Website Sample</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
