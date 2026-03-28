import { motion } from 'motion/react';
import { Briefcase, CheckCircle2, TrendingUp } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Work <span className="text-gold">Experience</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Professional exposure and practical achievements in the industry.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden"
        >
          <div className="grid md:grid-cols-3">
            <div 
              className="p-8 md:p-12 relative flex flex-col justify-center items-center text-center overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 35, 102, 0.8), rgba(26, 11, 46, 0.9)), url('https://i.ibb.co/t17rmYx/image.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Sony</h3>
                <p className="text-gold font-medium">Sales Executive Intern</p>
                <p className="text-white/60 text-sm mt-4 italic">22 Sept 2025 – 21 Oct 2025</p>
              </div>
            </div>

            <div className="md:col-span-2 p-8 md:p-12">
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-gold/10 rounded-xl text-gold">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Key Achievement</h4>
                  <p className="text-gold-light font-bold text-2xl">₹9 Lakh+ Sales Generated</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-gray-300 uppercase tracking-widest text-sm mb-4">Responsibilities & Impact</h4>
                {[
                  'Interacted directly with customers to understand needs',
                  'Explained complex product features and specifications',
                  'Presented strategic offers and promotions effectively',
                  'Assisted customers in making high-value purchase decisions',
                  'Built long-term customer trust and satisfaction'
                ].map((resp, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
                    <p className="text-gray-400">{resp}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10 italic text-gray-400">
                "Successfully navigated the steep learning curve to generate high-impact results in a demanding retail market."
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
