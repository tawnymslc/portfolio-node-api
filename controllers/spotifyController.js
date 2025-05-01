const spotifyService = require('../services/spotifyService');

exports.getAccessToken = async (req, res) => {
  try {
    const accessToken = await spotifyService.obtainAccessToken();
    res.json({ accessToken });
  } catch (error) {
    console.error('Error obtaining access token:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};