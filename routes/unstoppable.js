// routes/unstoppable.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/domains', async (req, res) => {
  const { query } = req.query;

  // Partner API V3 from UD
  try {
    const response = await axios.get(
      `https://api.ud-sandbox.com/partner/v3/suggestions/domains?query=${query}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.UD_API_KEY}`,
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error("UD API Error:", err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch domain suggestions' });
  }
});

module.exports = router;

