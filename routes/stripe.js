const express = require('express');
const router = express.Router();
const Stripe = require('stripe');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/payment', async (req, res) => {
  const { paymentMethodType, currency, amount } = req.body;
 
  //paymentIntents from stripe
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: [paymentMethodType],
    });

    res.json({ clientSecret: paymentIntent.client_secret, success: true });
  } catch (e) {
    console.error('Stripe payment error:', e.message);
    res.status(400).json({ error: { message: e.message } });
  }
});

module.exports = router;