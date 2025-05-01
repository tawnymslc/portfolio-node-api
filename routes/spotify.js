const express = require('express');
const router = express.Router();
const spotifyController = require('../controllers/spotifyController');

// Route to obtain Spotify access token
router.post('/get-access-token', spotifyController.getAccessToken);

// Add more routes here when adding APIs

module.exports = router;