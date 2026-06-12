import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: 'Denim Crochet Bag',
              description: 'One of one · Reclaimed denim',
              // Note: Stripe requires a full absolute URL for images
              // images: ['https://your-domain.com/sellingbag.png'], 
            },
            unit_amount: 20000, // £200.00 represented in pence
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      // Redirect back to the home page on success, or back to cart on cancel
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/cart?canceled=true`,
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
