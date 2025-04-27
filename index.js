app.get('/unstoppable/domains', async (req, res) => {
    const { query } = req.query;
  
    try {
      const response = await axios.get(
        `https://api.ud-sandbox.com/partner/v3/suggestions/domains?query=${query}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.UD_API_KEY}`
          }
        }
      );
  
      res.json(response.data);
    } catch (err) {
      console.error("Error hitting UD API:", err.response?.data || err.message);
      res.status(500).json({ error: 'Failed to fetch suggestions' });
    }
  });