import { motion } from 'motion/react';
import generatedImage from '../assets/images/barber_cutting_kids_hair_1783226611377.jpg';

const galleryImages = [
  'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Shop interior
  'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Tools
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Haircut detail
  'https://images.unsplash.com/photo-1520338661084-680395057c93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Shaving
  'https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Haircut
  generatedImage, // Shop sign/vibe
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#0a0a0a] py-2">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative overflow-hidden aspect-square md:aspect-[4/3] group cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
