import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Contact Message*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919749577450?text=${encodedText}`, '_blank');
    
    // Optional: Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Let's <span className="text-gold">Connect</span></h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              I am always open to discussing new opportunities, marketing strategies, or potential collaborations. Feel free to reach out to me through any of the following channels.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest mb-1">Email Me</div>
                  <a href="mailto:sarfarazsyedimam@gmail.com" className="text-xl font-bold hover:text-gold transition-colors">
                    sarfarazsyedimam@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest mb-1">Phone / WhatsApp</div>
                  <a href="tel:+919749577450" className="text-xl font-bold hover:text-gold transition-colors">
                    +91 9749577450
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <Linkedin size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest mb-1">LinkedIn</div>
                  <a href="https://linkedin.com/in/syedsarfarazimam" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-gold transition-colors">
                    Syed Sarfaraz Imam
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest mb-1">Location</div>
                  <div className="text-xl font-bold">Burnpur Bus Stand, West Bengal, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold focus:ring-1 focus:ring-gold transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold focus:ring-1 focus:ring-gold transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold focus:ring-1 focus:ring-gold transition-all outline-none resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gold text-black font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-gold-light transition-all shadow-lg shadow-gold/20"
              >
                <span>Send Message</span>
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
