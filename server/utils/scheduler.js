const cron = require('node-cron');
const { scrapeEvents } = require('./scraper');
const Event = require('../models/Event');

const initScheduler = () => {
 
  cron.schedule('0 */6 * * *', async () => {
    try {
      console.log('Running scheduled scraping...');
      const events = await scrapeEvents();
      await Event.deleteMany({});
      await Event.insertMany(events);
      console.log(`Successfully updated ${events.length} events`);
    } catch (error) {
      console.error('Scheduler error:', error);
    }
  });
};

module.exports = initScheduler;