const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
  
  const el = await page.$('.transparency-banner-card');
  if (el) {
    await el.screenshot({ path: 'transparency_now.png' });
    console.log('Saved transparency_now.png');
  } else {
    console.log('Element not found');
  }
  await browser.close();
})();
