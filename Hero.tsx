import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-12 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="hero-mask rounded-2xl p-10 md:p-16 border border-border shadow-2xl flex flex-col justify-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-gold tracking-[0.3em] uppercase text-sm font-semibold flex items-center gap-4">
            <span className="w-12 h-px bg-gold"></span>
            Montréal's Finest
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8"
        >
          Precision <span className="text-gold">Cuts</span>.<br />
          Classic Grooming.<br />
          Modern Style.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-gray-300 text-lg md:text-xl max-w-lg mb-10 font-light leading-relaxed"
        >
          Experience unmatched craftsmanship and luxury grooming in the heart of Montréal. 
          Where tradition meets contemporary style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <a
            href="#contact"
            className="bg-gold text-black px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-sm"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="border border-white px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:text-black transition-colors"
          >
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
