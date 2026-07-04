import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Product() {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    { src: '/sellingbag.png', alt: 'Front view' },
    { src: '/sidebag.png', alt: 'Side view' },
  ];

  return (
    <div className="min-h-screen pb-20 md:pb-0">

      {/* Image + Info */}
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] min-h-screen">

        {/* Images */}
        <div className="bg-ink relative">
          {/* Desktop: stacked full images */}
          <div className="hidden md:block">
            {images.map((img, i) => (
              <div key={i} className="h-screen sticky top-0">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-contain p-12"
                />
              </div>
            ))}
          </div>

          {/* Mobile: swipe dots */}
          <div className="md:hidden h-[75vh] relative">
            <div 
              className="flex overflow-x-auto snap-x snap-mandatory h-full w-full hide-scrollbar"
              onScroll={(e) => {
                const scrollLeft = e.currentTarget.scrollLeft;
                const width = e.currentTarget.clientWidth;
                const index = Math.round(scrollLeft / width);
                if (index !== activeImage) {
                  setActiveImage(index);
                }
              }}
            >
              {images.map((img, i) => (
                <div key={i} className="flex-none w-full h-full snap-center relative">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain p-6"
                  />
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-none">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === activeImage ? 'bg-ecru w-4' : 'bg-ecru/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product info — sticky on desktop */}
        <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-center px-6 md:px-12 py-10 md:py-20">

          <p className="font-hand text-worn-gold text-2xl rotate-[-2deg] mb-4">one of one</p>

          <h1 className="font-heading text-ecru text-5xl md:text-6xl leading-[0.9] tracking-tight mb-2">
            DENIM<br />CROCHET BAG
          </h1>

          <p className="font-heading text-worn-gold text-4xl mt-4 mb-8">£200</p>

          <div className="space-y-4 text-ecru/60 text-sm leading-relaxed mb-10 max-w-sm">
            <p>
              Hand crocheted from strips of reclaimed denim jeans. Each bag takes roughly 14 hours and uses 3–4 pairs of jeans.
            </p>
            <p>
              The varying indigo tones come from the original garments — no two bags will ever look the same.
            </p>
          </div>

          {/* Specs */}
          <div className="border-t border-b border-ecru/10 py-5 mb-8 space-y-3 text-xs tracking-widest uppercase text-ecru/40">
            <div className="flex justify-between">
              <span>Material</span>
              <span className="text-ecru/70">Reclaimed denim</span>
            </div>
            <div className="flex justify-between">
              <span>Size</span>
              <span className="text-ecru/70">One size</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-ecru/70">Free UK</span>
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-ecru text-ink font-heading text-xl tracking-[0.15em] py-4 hover:bg-worn-gold transition-colors"
          >
            ADD TO BAG
          </motion.button>

          <Link
            to="/shop"
            className="block text-center mt-4 text-ecru/30 text-xs tracking-widest uppercase hover:text-ecru/60 transition-colors"
          >
            ← Back to shop
          </Link>
        </div>
      </div>
    </div>
  );
}
