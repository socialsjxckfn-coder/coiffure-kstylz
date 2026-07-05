import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'David Tremblay',
    review: 'Hands down the best fade I\'ve ever had. Kevin and his team are true professionals. The hot towel shave is an absolute must.',
  },
  {
    name: 'Alexander Russo',
    review: 'Moved to Montréal recently and struggled to find a good barber. K.Stylz exceeded all my expectations. The vibe is premium and the cut is flawless.',
  },
  {
    name: 'Samuel Bouchard',
    review: 'More than just a haircut, it\'s an experience. The attention to detail is crazy. You leave feeling like a million bucks.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-gold tracking-[0.2em] uppercase text-sm font-semibold">Client Stories</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Testimonials</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="surface p-10 rounded-2xl relative group hover:border-gold transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-gold/10 transition-colors duration-300" />
              <div className="flex gap-1 mb-6 text-gold">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 font-light italic leading-relaxed mb-8">"{t.review}"</p>
              <div className="mt-auto">
                <span className="text-white font-bold tracking-wide uppercase text-sm">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
