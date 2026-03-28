import { motion } from 'motion/react';
import { BarChart3, Users, Lightbulb, MessageSquare, Cpu, FileSpreadsheet, Presentation, BrainCircuit, Star } from 'lucide-react';

const professionalSkills = [
  { name: 'Sales', level: 90, icon: <BarChart3 size={18} /> },
  { name: 'Marketing', level: 85, icon: <Lightbulb size={18} /> },
  { name: 'Leadership', level: 80, icon: <Users size={18} /> },
  { name: 'Communication', level: 95, icon: <MessageSquare size={18} /> },
];

const technicalSkills = [
  { name: 'MS Office', icon: <FileSpreadsheet className="text-blue-400" /> },
  { name: 'Excel', icon: <FileSpreadsheet className="text-green-500" /> },
  { name: 'PowerPoint', icon: <Presentation className="text-orange-500" /> },
  { name: 'Statistics', icon: <BarChart3 className="text-purple-400" /> },
  { name: 'AI Prompts', icon: <BrainCircuit className="text-gold" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">My <span className="text-gold">Expertise</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A blend of professional leadership and modern technical capabilities.</p>
        </div>

        <div className="bento-grid">
          {/* Why Hire Me - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 row-span-2 glass-card p-10 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <Star size={120} />
            </div>
            <h3 className="text-3xl font-serif font-bold mb-6 text-gold">Why Hire Me?</h3>
            <p className="text-xl text-gray-300 leading-relaxed italic">
              "A high-energy BBA student specializing in Marketing, I combine strategic communication with a data-driven approach to sales. My experience at Sony taught me the art of high-value conversion and customer relationship management. I am ready to leverage my creative problem-solving skills and adaptability to drive growth in a dynamic MNC environment."
            </p>
          </motion.div>

          {/* Professional Skills - Progress Bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 row-span-2 glass-card p-10"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
              <span className="w-8 h-1 bg-gold rounded-full" />
              <span>Core Competencies</span>
            </h3>
            <div className="space-y-6">
              {professionalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2 text-gray-300">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gold font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gold"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills - Grid */}
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col items-center justify-center text-center group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">
                {skill.icon}
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-gold transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
