import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function LocationContact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold tracking-[0.2em] uppercase text-sm font-semibold">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-8">Book Your Visit</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors duration-300"
                    placeholder="(514) 995-3059"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Message (Optional)</label>
                <textarea 
                  rows={4}
                  className="w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                  placeholder="Specific requests or preferred barber..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gold text-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors duration-300 rounded-sm mt-4"
              >
                Request Appointment
              </button>
            </form>
          </motion.div>

          {/* Location & Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full glass p-8 rounded-2xl"
          >
            <div id="location" className="grid grid-cols-2 gap-8 mb-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase tracking-wide text-sm">Location</h4>
                  <p className="text-gray-400 font-light text-sm">6891 Av. Victoria<br />Montréal, QC H3W 2T3</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase tracking-wide text-sm">Hours</h4>
                  <p className="text-gray-400 font-light text-sm">Sun-Wed: 10:30 a.m. - 7:30 p.m.<br />Thu-Sat: 10:30 a.m. - 9 p.m.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase tracking-wide text-sm">Call Us</h4>
                  <p className="text-gray-400 font-light text-sm">(514) 995-3059</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-1 uppercase tracking-wide text-sm">Email Us</h4>
                  <p className="text-gray-400 font-light text-sm">info@kstylz.com</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="w-full grow min-h-[300px] rounded-sm overflow-hidden border border-white/10 relative filter grayscale contrast-125">
              <iframe 
                src="https://www.google.com/maps?q=6891+Av.+Victoria,+Montr%C3%A9al,+QC+H3W+2T3&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
