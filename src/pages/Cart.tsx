import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Cart() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen pt-20 pb-20 md:pb-0 px-5 md:px-10">
      <div className="max-w-2xl mx-auto">

        <h1 className="font-heading text-ecru text-4xl md:text-5xl tracking-tight mb-10">YOUR BAG</h1>

        {/* Item */}
        <div className="flex gap-5 border-b border-ecru/10 pb-8">
          <div className="w-28 h-28 bg-ink shrink-0 overflow-hidden">
            <img src="/sellingbag.png" alt="Denim Crochet Bag" className="w-full h-full object-contain p-2" />
          </div>
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-ecru text-lg tracking-tight">DENIM CROCHET BAG</h3>
              <p className="text-ecru/30 text-xs tracking-widest uppercase mt-1">One of one · Reclaimed denim</p>
            </div>
            <div className="flex justify-between items-end">
              <button className="text-ecru/30 text-xs tracking-widest uppercase hover:text-rust transition-colors">
                Remove
              </button>
              <span className="font-heading text-worn-gold text-2xl">£200</span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-10 space-y-4 text-sm text-ecru/50">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="text-ecru/80">£200.00</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="text-ecru/80">Free (UK)</span>
          </div>
          <div className="flex justify-between pt-4 border-t border-ecru/10 text-ecru text-lg font-bold">
            <span>Total</span>
            <span className="font-heading text-worn-gold text-2xl">£200.00</span>
          </div>
        </div>

        <button 
          onClick={handleCheckout}
          disabled={loading}
          className="w-full mt-8 bg-ecru text-ink font-heading text-xl tracking-[0.15em] py-4 hover:bg-worn-gold transition-colors flex justify-center items-center disabled:opacity-50"
        >
          {loading ? 'PROCESSING...' : 'CHECKOUT'}
        </button>

        <Link
          to="/shop"
          className="block text-center mt-4 text-ecru/30 text-xs tracking-widest uppercase hover:text-ecru/60 transition-colors"
        >
          ← Continue shopping
        </Link>

        <p className="font-hand text-chalk/30 text-lg mt-12 rotate-[-1deg]">
          handmade to order — please allow 2 weeks
        </p>
      </div>
    </div>
  );
}
