import { motion } from 'motion/react';
import { Megaphone, ShoppingCart, Search, PieChart, Presentation, BrainCircuit } from 'lucide-react';

const services = [
  {
    title: 'Marketing Consulting',
    desc: 'Helping businesses plan effective marketing strategies to reach their target audience.',
    icon: <Megaphone className="text-gold" size={32} />,
  },
  {
    title: 'Sales Support',
    desc: 'Direct customer communication and product promotion to drive revenue growth.',
    icon: <ShoppingCart className="text-gold" size={32} />,
  },
  {
    title: 'Market Research',
    desc: 'Collecting and analyzing market data to identify trends and opportunities.',
    icon: <Search className="text-gold" size={32} />,
  },
  {
    title: 'Data Analysis',
    desc: 'Using Excel and business statistics to provide actionable business insights.',
    icon: <PieChart className="text-gold" size={32} />,
  },
  {
    title: 'Presentation Creation',
    desc: 'Designing professional PowerPoint presentations for business and academic use.',
    icon: <Presentation className="text-gold" size={32} />,
  },
  {
    title: 'Prompt Writing',
    desc: 'Creating effective prompts for AI tools to enhance productivity and creativity.',
    icon: <BrainCircuit className="text-gold" size={32} />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Professional <span className="text-gold">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Specialized solutions tailored for business growth and strategic development.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 hover:border-gold/50 transition-all group"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl inline-block group-hover:bg-gold/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
