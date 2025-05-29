const express = require('express');
const { getAllEvents, scrapeAndUpdateEvents } = require('../controllers/eventController');

const router = express.Router();

router.get('/', getAllEvents);
router.get('/scrape', scrapeAndUpdateEvents);

module.exports = router;