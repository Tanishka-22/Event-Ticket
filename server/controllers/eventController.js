const Event = require('../models/Event');
const { scrapeEvents } = require('../utils/scraper');

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events' });
  }
};

exports.scrapeAndUpdateEvents = async (req, res) => {
  try {
    const events = await scrapeEvents();
    await Event.deleteMany({});
    await Event.insertMany(events);
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error scraping events' });
  }
};