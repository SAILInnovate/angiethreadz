import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Shop() {
  return (
    <div className="min-h-screen pt-20 pb-20 md:pb-0 px-5 md:px-10 relative grain">

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto mb-6 md:mb-10 flex justify-between items-end"
      >
        <div>
          <p className="font-hand text-worn-gold text-xl md:text-2xl rotate-[-1deg]">currently available</p>
          <h1 className="font-heading text-ecru text-5xl md:text-7xl tracking-tight leading-none mt-1">SHOP</h1>
        </div>
        <p className="text-ecru/30 text-xs tracking-widest uppercase hidden md:block">1 piece</p>
      </motion.div>

      {/* Product — single item, not a grid */}
      <div className="max-w-6xl mx-auto">
        <Link to="/product/1" className="block group">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-1"
          >
            {/* Main image */}
            <div className="aspect-square bg-ink overflow-hidden relative">
              <img
                src="/sellingbag.png"
                alt="Denim Crochet Bag"
                className="w-full h-full object-contain p-6 group-hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            {/* Second angle */}
            <div className="aspect-square bg-ink overflow-hidden relative hidden md:block">
              <img
                src="/sidebag.png"
                alt="Denim Crochet Bag — side"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
          </motion.div>
        </Link>

        {/* Info row — not centered, not in a card */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-4"
        >
          <div>
            <h2 className="font-heading text-ecru text-3xl md:text-4xl tracking-tight">DENIM CROCHET BAG</h2>
            <p className="text-ecru/40 text-sm mt-1">
              Reclaimed denim · hand crocheted · one of one
            </p>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-heading text-worn-gold text-3xl md:text-4xl">£200</span>
            <Link to="/product/1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-xs tracking-[0.2em] uppercase text-ink bg-ecru px-5 py-3 hover:bg-worn-gold transition-colors font-bold"
              >
                View
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 md:mt-24 border-t border-ecru/10 pt-8 max-w-md"
        >
          <p className="font-hand text-chalk/40 text-2xl rotate-[-1deg]">
            more pieces coming soon — each one takes about two weeks
          </p>
        </motion.div>
      </div>
    </div>
  );
}
