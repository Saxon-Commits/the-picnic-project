import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { PageWrapper } from '../components/PageWrapper';
import { SERVICES, PRICING_DETAIL, GALLERY_IMAGES } from '../constants';
import { cn } from '../lib/utils';

export function HomePage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/picnic-blue.jpg"
            alt="Beautiful picnic setup"
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-beige/80 to-beige" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1.5 bg-rose/10 text-rose rounded-full text-sm font-bold tracking-widest uppercase mb-8"
          >
            Newcastle, NSW
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-8xl font-serif text-stone-900 leading-[1.1] mb-8"
          >
            The Ultimate Picnic Experience – <span className="italic text-rose">supporting inclusion.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-stone-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Curated, luxury picnic experiences designed to bring people together in Newcastle’s most stunning outdoor settings.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/book-in" className="bg-rose text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-rose/90 transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95 shadow-xl shadow-rose/20">
              Start Your Journey
            </Link>
            <Link to="/style-guide" className="group flex items-center gap-2 text-stone-900 font-medium hover:text-rose transition-colors">
              Explore Our Style <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Floating handwritten pullquote */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 right-8 md:right-24 hidden lg:block"
        >
          <div className="relative">
            <span className="font-handwriting text-3xl text-sage rotate-[-6deg] block">
              "A warm invitation to connect"
            </span>
            <div className="absolute -top-4 -right-4 text-rose opacity-40">
              <Star fill="currentColor" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-cream relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl text-stone-900 mb-6">Our Services</h2>
            <div className="w-24 h-1 bg-sage/30 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-4xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-8">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <span className="text-white font-medium">Explore Details</span>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <h3 className="text-2xl font-serif text-stone-900 mb-4">{service.title}</h3>
                  <p className="text-stone-600 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vibe / Gallery Section */}
      <section className="py-24 bg-beige relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="font-handwriting text-3xl text-rose mb-4 block">The Seaside Vibe</span>
              <h2 className="text-4xl md:text-6xl text-stone-900">Newcastle's Park & Beach Locations</h2>
            </div>
            <p className="text-stone-600 font-light max-w-sm mb-4">
              We scout the most picturesque spots from Redhead to Nobbys, ensuring your setup matches the natural beauty of our coast.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "relative group rounded-3xl overflow-hidden aspect-[3/4]",
                  idx % 2 !== 0 ? "md:mt-12" : ""
                )}
              >
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/40 transition-colors" />
                <div className="absolute bottom-6 left-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-1">
                    <MapPin className="w-3 h-3" /> {img.location}
                  </div>
                  <div className="font-serif text-lg">{img.alt}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section (Inclusions & Pricing) */}
      <section className="py-24 px-4 bg-cream relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl mb-4">Pricing & Inclusions</h2>
            <p className="font-handwriting text-2xl text-sage rotate-1">Everything you need for the perfect experience</p>
          </div>

          <div className="bg-white rounded-4xl p-8 md:p-16 shadow-lg border border-stone-100 mb-16">
            <h3 className="text-3xl font-serif text-center mb-12">Picnic Inclusions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl mx-auto">
              {[
                "Luxury picnic rugs & cushions",
                "Low-lying timber tables",
                "Stylish umbrellas for shade",
                "Music speaker & portable power",
                "Dinnerware & gold cutlery",
                "Premium glassware",
                "Artificial or fresh florals",
                "Linen napkins & styling accents",
                "Delivery, setup & pack-down",
                "2-hour picnic experience"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-stone-700 font-light">
                  <div className="w-1.5 h-1.5 bg-rose rounded-full" />
                  {item}
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <Link to="/book-in" className="inline-block border-2 border-rose text-rose px-8 py-3 rounded-full font-bold hover:bg-rose hover:text-white transition-all">
                Check Availability
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-sage/10 rounded-4xl p-10 border border-sage/20">
              <h3 className="text-2xl font-serif text-stone-900 mb-8">Group Pricing</h3>
              <div className="space-y-6">
                {PRICING_DETAIL.main.map((tier) => (
                  <div key={tier.range} className="flex justify-between items-center pb-4 border-b border-sage/10">
                    <span className="text-lg font-light text-stone-700">{tier.range}</span>
                    <span className="text-2xl font-serif font-bold text-sage">{tier.price}</span>
                  </div>
                ))}
                <p className="text-xs text-sage italic mt-4 font-medium uppercase tracking-wider">
                  * 17-20 people – Enquire directly with us
                </p>
              </div>
            </div>

            <div className="bg-rose/10 rounded-4xl p-10 border border-rose/20">
              <h3 className="text-2xl font-serif text-stone-900 mb-8">Enhance Your Picnic</h3>
              <div className="space-y-6">
                {PRICING_DETAIL.extras.map((extra) => (
                  <div key={extra.item} className="flex justify-between items-center pb-4 border-b border-rose/10">
                    <span className="text-lg font-light text-stone-700">{extra.item}</span>
                    <span className="text-xl font-serif font-bold text-rose">{extra.price}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-light text-stone-700">Fresh Seasonal Blooms</span>
                  <span className="text-sm font-bold text-rose uppercase tracking-widest">Enquire</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-900 rounded-4xl p-12 text-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10">
              <img src="/images/picnic-glassware.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[20s]" />
            </div>
            <div className="relative z-10">
              <span className="text-rose font-bold tracking-widest uppercase text-sm mb-4 block">Special Occasions</span>
              <h3 className="text-4xl text-white mb-6">The Proposal Package</h3>
              <p className="text-stone-400 mb-10 max-w-xl mx-auto font-light leading-relaxed">
                The ultimate romantic gesture. We handle the location scouting, setup, and fine details so you can focus on the big question.
              </p>
              <div className="flex items-center justify-center gap-2 text-stone-300 mb-10">
                <span className="text-5xl font-serif font-bold text-rose">{PRICING_DETAIL.proposals.price}</span>
                <span className="text-stone-500 font-light">all-inclusive</span>
              </div>
              <Link to="/book-in" className="bg-white text-stone-900 px-10 py-5 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all active:scale-95 leading-none h-fit block mx-auto w-fit">
                Book Proposal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section with handwritten style */}
      <section className="py-32 px-4 bg-beige text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl text-stone-900 mb-10">
            Ready to slow down and <br />
            <span className="italic font-light">experience the magic?</span>
          </h2>
          <p className="text-stone-600 mb-12 text-xl font-light leading-relaxed">
            Whether it’s a quiet afternoon for two or a gathered community event,
            we invite you to experience Newcastle like never before.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/book-in" className="w-full md:w-auto bg-rose text-white px-12 py-5 rounded-3xl font-bold text-lg hover:shadow-2xl transition-all">
              Let's Book In
            </Link>
          </div>
          <p className="mt-12 font-handwriting text-3xl text-sage">
            With love, Ella & The Team
          </p>
        </motion.div>
      </section>
    </PageWrapper>
  );
}
