import { motion } from 'motion/react';
import { ArrowRight, Award, FileText, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      
      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-royal-blue/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-deep-purple/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-bold text-gold mb-8"
            >
              <Sparkles size={14} className="animate-spin-slow" />
              <span className="uppercase tracking-widest">Available for MNC Opportunities</span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 leading-[0.9] tracking-tighter">
              Hi, I'm <br />
              <span className="gold-text-gradient italic">Sarfaraz</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-400 font-medium mb-8 tracking-wide uppercase max-w-xl">
              Aspiring Marketing & Sales Professional <span className="text-gold">/</span> BBA Student <span className="text-gold">/</span> Future MNC Leader
            </h2>

            <p className="max-w-xl text-gray-400 text-lg mb-10 leading-relaxed border-l-2 border-gold/30 pl-6">
              Strategic-minded BBA student at Asansol Engineering College with a proven track record in sales and marketing. Passionate about driving business growth through innovative strategies and hyper-local engagement.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 bg-gold text-black font-bold rounded-full flex items-center space-x-2 hover:bg-gold-light transition-all shadow-lg shadow-gold/20"
              >
                <span>View My Work</span>
                <ArrowRight size={20} />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://ibb.co/wr6TwQPS', '_blank')}
                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 font-bold rounded-full flex items-center space-x-2 hover:bg-white/10 transition-all"
              >
                <FileText size={20} className="text-gold" />
                <span>Download CV</span>
              </motion.button>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/certificates"
                  className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 font-bold rounded-full flex items-center space-x-2 hover:bg-white/10 transition-all"
                >
                  <Award size={20} className="text-gold" />
                  <span>Certifications</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 group">
              <img
                src="https://i.ibb.co/7xY7DHgW/Whats-App-Image-2026-03-10-at-11-23-44.jpg"
                alt="Syed Sarfaraz Imam"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-card p-6 border-gold/20">
                  <div className="text-gold font-bold text-sm uppercase tracking-widest mb-1">Current Focus</div>
                  <div className="text-white font-serif text-xl">Marketing & Sales Strategy</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-gold/20 rounded-full animate-spin-slow" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50"
      >
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
