import { motion } from 'motion/react';
import { Scissors, Fingerprint, SprayCan as Spray, Droplet, UserCheck, Baby } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Classic Cut',
    price: '$35',
    description: 'Precision haircut tailored to your head shape, including a straight razor neck shave and hot towel finish.',
  },
  {
    icon: Fingerprint,
    title: 'Skin Fade',
    price: '$40',
    description: 'Flawless zero-fade blended to perfection. Sharp, modern, and detailed with absolute precision.',
  },
  {
    icon: Spray,
    title: 'Beard Trim',
    price: '$20',
    description: 'Sculpting and shaping of your beard, finished with premium beard oil and a hot towel treatment.',
  },
  {
    icon: Droplet,
    title: 'Hot Towel Shave',
    price: '$30',
    description: 'The ultimate relaxation. Traditional straight razor shave with essential oils and hot towels.',
  },
  {
    icon: UserCheck,
    title: 'Hair & Beard Combo',
    price: '$50',
    description: 'The full package. Precision haircut and meticulous beard sculpting for a completely refreshed look.',
  },
  {
    icon: Baby,
    title: 'Kids Cut',
    price: '$25',
    description: 'Sharp, stylish cuts for the younger gentlemen (12 and under). Patience and quality guaranteed.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Accents */}
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] bg-barber-red/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-gold tracking-[0.2em] uppercase text-sm font-semibold">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Premium Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative surface rounded-2xl p-6 flex flex-col justify-between hover:border-gold transition-colors duration-500 overflow-hidden"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:text-gold transition-colors duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-serif font-bold text-gold">{service.price}</span>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-white mb-3 relative z-10">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light relative z-10">
                  {service.description}
                </p>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-barber-red to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
