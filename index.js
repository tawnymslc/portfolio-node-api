const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use('/unstoppable', require('./routes/unstoppable'));

app.get('/test', (req, res) => {
  res.send('Backend is live and routing correctly!');
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});