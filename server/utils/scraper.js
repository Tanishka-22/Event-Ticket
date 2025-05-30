const axios = require('axios');
const cheerio = require('cheerio');

const BASE_URL = "https://www.eventbrite.com.au";

const scrapeEvents = async () => {
  try {
    const url = `${BASE_URL}/d/australia--sydney/events/`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    let events = [];
    $('script[type="application/ld+json"]').each((i, el) => {
      try {
        const json = JSON.parse($(el).contents().text());
        if (json['@type'] === 'ItemList' && Array.isArray(json.itemListElement)) {
       
          events = json.itemListElement.map(item => {
            const ev = item.item;
            return {
              title: ev.name,
              date: ev.startDate,
              endDate: ev.endDate,
              description: ev.description,
              link: ev.url,
              image: ev.image,
              location: ev.location?.name || '',
              address: ev.location?.address?.streetAddress || '',
              city: ev.location?.address?.addressLocality || '',
              region: ev.location?.address?.addressRegion || '',
              postalCode: ev.location?.address?.postalCode || '',
              country: ev.location?.address?.addressCountry || '',
            };
          });
        }
      } catch (e) {
        
      }
    });

    return events;
  } catch (error) {
    console.error('Scraping error:', error);
    throw new Error('Failed to scrape events');
  }
};

module.exports = { scrapeEvents };