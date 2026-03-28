import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <Link to="/" className="text-2xl font-serif font-bold gold-text-gradient mb-2 block">SSI</Link>
            <p className="text-gray-500 text-sm max-w-xs">
              Aspiring Marketing & Sales Professional dedicated to driving business growth and innovation.
            </p>
          </div>

          <div className="flex space-x-8">
            <a href="https://linkedin.com/in/syedsarfarazimam" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:sarfarazsyedimam@gmail.com" className="text-gray-400 hover:text-gold transition-colors">
              <Mail size={24} />
            </a>
            <a href="tel:+919749577450" className="text-gray-400 hover:text-gold transition-colors">
              <Phone size={24} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-4 bg-white/5 rounded-full text-gold hover:bg-gold hover:text-black transition-all border border-white/10"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-sm">
            © 2026 Syed Sarfaraz Imam. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
