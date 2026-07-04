import { motion } from 'framer-motion';

export default function Lookbook() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen pb-20 md:pb-0">

      {/* Cover */}
      <section className="h-[100dvh] relative overflow-hidden flex items-end">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src="/_MG_4569_Original.jpeg"
          alt="Manchester Northern Quarter"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 p-5 md:p-10 pb-12 md:pb-16 max-w-2xl"
        >
          <p className="font-hand text-worn-gold text-2xl md:text-3xl rotate-[-2deg] mb-2">
            visual diary — vol. 01
          </p>
          <h1 className="font-heading text-ecru text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-tight">
            TRACING<br />THE CITY
          </h1>
          <p className="text-ecru/40 text-sm tracking-widest uppercase mt-4 max-w-sm">
            Fashion as a result of spatial behaviour. Manchester's Northern Quarter, documented.
          </p>
        </motion.div>
      </section>

      {/* Image grid — raw, uneven, editorial */}
      <section className="relative grain px-5 md:px-10 py-16 md:py-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >

          {/* Row 1 */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-1 mb-1">
            <motion.div whileHover={{ scale: 0.98 }} className="aspect-[16/10] bg-ink overflow-hidden relative cursor-crosshair">
              <img
                src="/_MG_4575_Original.jpeg"
                alt="Street scene"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
              />
              <p className="absolute bottom-4 left-4 font-hand text-ecru/60 text-xl rotate-[-3deg]">
                stevenson square, 2pm
              </p>
            </motion.div>
            <motion.div whileHover={{ scale: 0.98 }} className="aspect-[16/10] md:aspect-auto bg-ink overflow-hidden relative cursor-crosshair">
              <img
                src="/_MG_4645_Original.jpeg"
                alt="Bag in context"
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-all duration-700"
              />
            </motion.div>
          </motion.div>

          {/* Text break */}
          <motion.div variants={itemVariants} className="py-12 md:py-20 max-w-xl">
            <p className="font-editorial text-ecru/70 text-2xl md:text-3xl leading-relaxed italic">
              "The Northern Quarter is not a fixed object to be viewed, but rather a space created through movement."
            </p>
            <p className="font-hand text-worn-gold text-xl mt-4 rotate-[-1deg]">— from my research journal</p>
          </motion.div>

          {/* Row 2 */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 gap-1 mb-1">
            <motion.div whileHover={{ scale: 0.98 }} className="aspect-square bg-ink overflow-hidden cursor-crosshair">
              <img
                src="/_MG_4308_Original.jpeg"
                alt="Product detail"
                className="w-full h-full object-contain p-4 scale-105 hover:scale-100 transition-all duration-700"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 0.98 }} className="aspect-square bg-ink overflow-hidden col-span-1 md:col-span-2 cursor-crosshair">
              <img
                src="/IMG_3638_Original.jpeg"
                alt="Urban texture"
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal scale-105 hover:scale-100 transition-all duration-700"
              />
            </motion.div>
          </motion.div>

          {/* Row 3 */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-1">
            <div className="bg-denim p-8 md:p-12 flex flex-col justify-center stitch-border">
              <h2 className="font-heading text-ecru text-4xl md:text-5xl leading-[0.9] mb-4">
                PEOPLE +<br/>STREET STYLE
              </h2>
              <p className="text-ecru/50 text-sm leading-relaxed">
                Fashion is visible through patterns of movement, pause and social occupation within public spaces. This mapping views fashion as the result of spatial behaviour and infrastructure.
              </p>
            </div>
            <motion.div whileHover={{ scale: 0.98 }} className="aspect-[16/10] bg-ink overflow-hidden relative cursor-crosshair">
              <img
                src="/IMG_3601_Original.jpeg"
                alt="Urban texture"
                className="w-full h-full object-cover grayscale scale-105 hover:scale-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <p className="absolute bottom-4 right-4 font-hand text-worn-gold text-2xl rotate-[2deg]">
                street style observation
              </p>
            </motion.div>
          </motion.div>

        </motion.div>
      </section>
    </div>
  );
}
