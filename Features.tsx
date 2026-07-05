import { motion } from 'motion/react';
import { Crown, Star, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Crown,
    title: 'Master Barbers',
    description: 'Our elite team brings decades of combined experience, mastering both classic techniques and modern trends.',
  },
  {
    icon: Star,
    title: 'Luxury Experience',
    description: 'From the moment you walk in, enjoy a premium atmosphere, complimentary drinks, and unmatched service.',
  },
  {
    icon: ShieldCheck,
    title: 'Premium Products',
    description: 'We exclusively use the highest quality styling and grooming products to protect and enhance your look.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-charcoal relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group surface p-8 rounded-2xl hover:border-gold transition-colors duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mb-6 border border-white/5 group-hover:border-gold/50 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500 relative">
                  <div className="absolute inset-0 rounded-full bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100"></div>
                  <Icon className="w-8 h-8 text-gold relative z-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
