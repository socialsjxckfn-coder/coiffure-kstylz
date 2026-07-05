import { motion } from 'motion/react';
import { Instagram, Twitter } from 'lucide-react';

const barbers = [
  {
    name: 'Kevin Stylz',
    specialty: 'Master Barber / Owner',
    experience: '12+ Years',
    bio: 'Founder of Coiffure K.Stylz, Kevin is known for his unmatched precision fades and classic hot towel shaves.',
    image: 'https://images.unsplash.com/photo-1618018357910-186591ec3522?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Marcus "The Blade"',
    specialty: 'Beard Specialist',
    experience: '8 Years',
    bio: 'Marcus treats every beard like a masterpiece. His detailing and sculpting are second to none in Montréal.',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Julian Reyes',
    specialty: 'Classic Styling',
    experience: '10 Years',
    bio: 'Julian brings old-school barbering traditions into the modern era, focusing on scissors-over-comb perfection.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

export default function Team() {
  return (
    <section id="barbers" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-gold tracking-[0.2em] uppercase text-sm font-semibold">The Artisans</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">Our Barbers</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {barbers.map((barber, index) => (
            <motion.div
              key={barber.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative surface rounded-2xl overflow-hidden hover:border-gold transition-colors duration-500"
            >
              <div className="relative h-[28rem] overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={barber.image} 
                  alt={barber.name}
                  className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20 translate-y-24 group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end p-8">
                  <div className="absolute top-8 right-8 w-12 h-12 bg-gold text-black rounded-full flex items-center justify-center font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {barber.experience.split('+')[0].split(' ')[0]}+
                  </div>
                  <span className="text-gold text-sm font-semibold uppercase tracking-wider block mb-1">{barber.specialty}</span>
                  <h3 className="text-3xl font-serif font-bold text-white mb-3">{barber.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {barber.bio}
                  </p>
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
