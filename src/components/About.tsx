import { motion } from 'motion/react';
import { User, Target, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center space-x-2 text-gold mb-4">
              <User size={20} />
              <span className="uppercase tracking-widest font-bold text-sm">Professional Bio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              Driving Growth through <span className="text-gold">Strategic Sales</span> & Marketing
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                As a results-driven professional with a strong foundation in Business Administration, I specialize in identifying market opportunities and converting them into sustainable growth. My approach combines analytical market research with a high-energy sales methodology, ensuring that every customer interaction adds value and builds long-term brand equity.
              </p>
              <p>
                During my tenure at Sony, I successfully generated over ₹9 Lakh in sales within a single month, demonstrating my ability to navigate complex retail environments and close high-value transactions. I am deeply passionate about understanding consumer behavior and leveraging those insights to develop compelling marketing strategies that resonate with target audiences.
              </p>
              <p>
                I am currently seeking opportunities to join a forward-thinking MNC where I can apply my expertise in business development, relationship management, and strategic marketing to drive organizational success.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              <div className="glass-card p-8">
                <Target className="text-gold mb-4" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">Sales Strategy</h3>
                <p className="text-gray-500">Expertise in high-value conversions and relationship-based selling techniques.</p>
              </div>
              <div className="glass-card p-8">
                <Briefcase className="text-gold mb-4" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">Market Analysis</h3>
                <p className="text-gray-500">Deep understanding of consumer trends and competitive landscape positioning.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
