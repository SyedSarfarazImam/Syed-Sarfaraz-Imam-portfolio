import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ExternalLink, Trophy, TrendingUp, Laptop } from 'lucide-react';

const projects = [
  {
    id: 'poster-presentation',
    title: 'College Poster Presentation',
    desc: 'Won First Prize for presenting "Digital Transformation" among 24 teams.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    icon: <Trophy className="text-gold" />,
    tag: 'First Prize',
  },
  {
    id: 'sony-sales',
    title: 'Sony Internship Achievement',
    desc: 'Generated ₹9 Lakh+ sales in just one month during the internship.',
    image: 'https://i.ibb.co/t17rmYx/image.jpg',
    icon: <TrendingUp className="text-gold" />,
    tag: '₹9L+ Sales',
  },
  {
    id: 'website-creation',
    title: 'Website Creation Project',
    desc: 'Developed a professional portfolio using AI tools and modern web tech.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    icon: <Laptop className="text-gold" />,
    tag: 'Digital Innovation',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Projects & <span className="text-gold">Achievements</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Showcasing my major accomplishments and practical contributions.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4 bg-gold text-black text-xs font-bold px-3 py-1 rounded-full">
                  {project.tag}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  {project.icon}
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-6 line-clamp-2">{project.desc}</p>
                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center space-x-2 text-gold font-bold hover:text-gold-light transition-colors"
                >
                  <span>Learn More</span>
                  <ExternalLink size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
