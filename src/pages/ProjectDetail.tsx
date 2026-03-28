import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Trophy, TrendingUp, Laptop, Calendar, MapPin } from 'lucide-react';

const projectDetails = {
  'poster-presentation': {
    title: 'Poster Making & Presentation Champion',
    subtitle: '1st Place Winner - Digital Transformation',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
    icon: <Trophy className="text-gold" size={48} />,
    content: `In a high-stakes competition featuring 24 talented teams, my teammate and I secured 1st Place in the Poster Making and Presentation category. Our challenge was to visually and verbally articulate the complexities of Digital Transformation—a theme requiring a balance of technical foresight and human-centric design.

We distilled the evolution of legacy systems into agile, tech-driven ecosystems, presenting a roadmap that resonated with the judges for its clarity and depth. This victory wasn't just about design; it was about mastering the art of storytelling in a rapidly evolving digital landscape. It stands as a testament to my dedication to strategic communication and collaborative excellence.`,
    metrics: [
      { label: 'Competition', value: 'Inter-College' },
      { label: 'Teams', value: '24 Teams' },
      { label: 'Rank', value: '1st Position' },
    ]
  },
  'sony-sales': {
    title: 'Sales Achievement at Sony (ManpowerGroup)',
    subtitle: 'Sales Executive Milestone',
    image: 'https://i.ibb.co/t17rmYx/image.jpg',
    icon: <TrendingUp className="text-gold" size={48} />,
    content: `Stepping into a Sales Executive role as a newcomer at Sony (ManpowerGroup Services India Pvt. Ltd.), I was immediately immersed in a high-pressure, competitive retail environment. Tasked with representing a premium global brand against established competitors, I focused on rapid product mastery and customer psychology.

In just one month, I successfully navigated the steep learning curve to generate 9 Lakhs in total sales. This achievement was not just about the numbers; it proved my ability to outpace competing brands through persistence and technical knowledge. This experience highlights my agility as a learner and my drive to deliver high-impact results in a demanding market.`,
    metrics: [
      { label: 'Total Sales', value: '₹9 Lakh+' },
      { label: 'Duration', value: '1 Month' },
      { label: 'Brand', value: 'Sony' },
    ]
  },
  'website-creation': {
    title: 'Field Study Program (FSP) Experience',
    subtitle: 'Generative AI & Data Visualization',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    icon: <Laptop className="text-gold" size={48} />,
    content: `As part of the regular Field Study Programs (FSP) at my college, I recently completed an intensive, one-week deep dive into Generative AI Tools. These recurring programs are designed to bridge the gap between theory and industry application through rapid, focused learning.

Building on a previous FSP where I mastered Power BI for data visualization, this most recent week allowed me to explore how AI can automate and enhance creative workflows. These experiences have made me a highly adaptable learner, capable of picking up complex new technologies like AI and data analytics in short, high-impact sprints.`,
    metrics: [
      { label: 'Program', value: 'Field Study' },
      { label: 'Focus', value: 'Gen AI & Power BI' },
      { label: 'Outcome', value: 'Tech Mastery' },
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectDetails[id as keyof typeof projectDetails];

  if (!project) {
    return <Navigate to="/" />;
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link to="/" className="inline-flex items-center space-x-2 text-gold hover:text-gold-light transition-colors font-bold">
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card overflow-hidden"
        >
          <div className="h-[400px] relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gold/20 backdrop-blur-md rounded-2xl border border-gold/50">
                  {project.icon}
                </div>
                <div>
                  <h1 className="text-3xl md:text-5xl font-serif font-bold text-white">{project.title}</h1>
                  <p className="text-gold font-medium text-lg">{project.subtitle}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {project.metrics.map((metric, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                  <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">{metric.label}</div>
                  <div className="text-2xl font-bold text-gold">{metric.value}</div>
                </div>
              ))}
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                {project.content}
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/30">
                  <img
                    src="https://i.ibb.co/7xY7DHgW/Whats-App-Image-2026-03-10-at-11-23-44.jpg"
                    alt="Syed Sarfaraz Imam"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-bold">Syed Sarfaraz Imam</div>
                  <div className="text-xs text-gray-500">Project Lead</div>
                </div>
              </div>
              
              <Link
                to="/#contact"
                className="bg-gold text-black font-bold px-8 py-3 rounded-full hover:bg-gold-light transition-all"
              >
                Discuss Project
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
