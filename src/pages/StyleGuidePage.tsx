import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { motion } from 'motion/react';

const SETUPS = [
  {
    name: "The Coastal Boho",
    description: "Our signature look. Dusty rose rugs paired with sage green cushions and neutral textures. Perfect for beach sunsets.",
    image: "https://images.unsplash.com/photo-1526725359045-9874d209ca0a?auto=format&fit=crop&q=80&w=1200",
    tags: ["Boho", "Warm", "Textured"]
  },
  {
    name: "The Garden Social",
    description: "Classic and crisp. Clean whites with sage accents. Ideal for lush park settings and community gatherings.",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=1200",
    tags: ["Minimal", "Fresh", "Classic"]
  },
  {
    name: "Golden Hour Romance",
    description: "Deep rose tones and candlelit accents. Designed specifically for proposals and intimate anniversaries.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200",
    tags: ["Romantic", "Intimate", "Warm"]
  }
];

export function StyleGuidePage() {
  return (
    <PageWrapper>
      <section className="py-24 px-4 bg-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="font-handwriting text-3xl text-rose mb-4 block">Aesthetic Curations</span>
            <h1 className="text-5xl md:text-8xl text-stone-900 mb-8 font-serif italic">The Style Guide</h1>
            <p className="text-stone-600 max-w-2xl mx-auto font-light text-lg italic">
              Choose from our signature themes or request a bespoke palette that speaks to your occasion.
            </p>
          </div>

          <div className="space-y-32">
            {SETUPS.map((setup, idx) => (
              <motion.div 
                key={setup.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
              >
                <div className="flex-1 w-full relative">
                  <div className="absolute -inset-4 bg-rose/5 rounded-[3rem] -rotate-2 scale-105" />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-2xl">
                    <img src={setup.image} alt={setup.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex gap-2 mb-6 justify-center md:justify-start">
                    {setup.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-stone-400 border border-stone-200 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-4xl md:text-6xl text-stone-900 mb-8">{setup.name}</h2>
                  <p className="text-stone-600 text-lg font-light leading-relaxed mb-10 max-w-lg">
                    {setup.description}
                  </p>
                  <div className="flex items-center gap-6 justify-center md:justify-start">
                    <div className="w-12 h-12 rounded-full bg-rose" />
                    <div className="w-12 h-12 rounded-full bg-sage" />
                    <div className="w-12 h-12 rounded-full bg-beige border border-stone-200" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Request Section */}
      <section className="py-32 px-4 bg-sage/10 text-center">
        <div className="max-w-4xl mx-auto bg-white p-12 md:p-24 rounded-4xl shadow-sm border border-sage/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <Star size={120} className="text-sage" />
          </div>
          <h2 className="text-4xl md:text-5xl text-stone-900 mb-8">Want something bespoke?</h2>
          <p className="text-stone-600 text-lg font-light mb-12">
            We love bringing unique visions to life. From specific flower requests to themed color palettes, 
            let's create a setup that is uniquely yours.
          </p>
          <button className="bg-stone-900 text-white px-10 py-5 rounded-full font-bold hover:bg-stone-800 transition-all">
             Discuss My Vision
          </button>
        </div>
      </section>
    </PageWrapper>
  );
}

import { Star } from 'lucide-react';
