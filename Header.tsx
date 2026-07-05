import { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Barbers', href: '#barbers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg shadow-black/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-3 group">
          <div className="barber-pole h-8 hidden md:block"></div>
          <Scissors className="w-8 h-8 text-gold transition-transform group-hover:rotate-180 duration-700 md:hidden" />
          <span className="font-serif text-2xl tracking-tighter uppercase text-white">Coiffure <span className="text-gold">K.Stylz</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8 text-sm uppercase tracking-widest text-gray-400">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="px-6 py-2 border border-gold text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300"
          >
            Book Appointment
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal border-t border-white/10"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-serif text-gray-300 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mt-4 text-center bg-gold text-black px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors rounded-sm"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
