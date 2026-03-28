import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Business Administration (BBA)',
    institution: 'Asansol Engineering College',
    university: 'MAKAUT University',
    duration: 'Expected Graduation: 2027',
    details: 'Current CGPA: 7.6 | Expected CGPA: 8+',
    icon: <GraduationCap size={24} />,
  },
  {
    degree: 'Higher Secondary Education (Class 12)',
    institution: 'CBSE Board',
    duration: 'Completed',
    details: 'Score: 76%',
    icon: <Calendar size={24} />,
  },
  {
    degree: 'Secondary Education (Class 10)',
    institution: 'CBSE Board',
    duration: 'Completed',
    details: 'Score: 69.6%',
    icon: <MapPin size={24} />,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Education <span className="text-gold">History</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">My academic journey and foundation in business administration.</p>
        </div>

        <div className="relative">
          <div className="timeline-line" />
          
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="hidden md:block w-5/12" />
                
                <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-gold rounded-full flex items-center justify-center z-10 -translate-x-1/2 border-4 border-black">
                  <span className="text-black">{item.icon}</span>
                </div>
                
                <div className="ml-12 md:ml-0 md:w-5/12 glass-card p-8 hover:border-gold/50 transition-all">
                  <div className="text-gold font-bold mb-2">{item.duration}</div>
                  <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                  <div className="text-gray-300 font-medium mb-2">{item.institution}</div>
                  {item.university && <div className="text-gray-400 text-sm mb-3">{item.university}</div>}
                  <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-sm text-gold-light border border-white/10">
                    {item.details}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
