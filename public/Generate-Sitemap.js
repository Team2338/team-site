const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://yourwebsite.com' });

streamToPromise(
  sitemap.pipe(createWriteStream('./public/sitemap.xml'))
).then(() => console.log('Sitemap created'));

sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });
// Add more URLs as needed
sitemap.end();