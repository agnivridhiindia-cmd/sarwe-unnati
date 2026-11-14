const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000/index.html?t=' + Date.now(), { waitUntil: 'networkidle0' });

  // 1. Charter Section
  const charterEl = await page.$('#charter-dossier');
  if (charterEl) {
    await page.evaluate(() => {
      const h = document.getElementById('main-header');
      if (h) h.style.display = 'none';
      const c = document.getElementById('charter-dossier');
      if (c) c.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 600));
    await charterEl.screenshot({ path: 'vibrant_charter.png' });
    console.log('Saved vibrant_charter.png');
  }

  // 2. Meal Calculator
  const calcEl = await page.$('#meal-calculator');
  if (calcEl) {
    await page.evaluate(() => {
      const h = document.getElementById('main-header');
      if (h) h.style.display = 'none';
      const c = document.getElementById('meal-calculator');
      if (c) c.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 600));
    await calcEl.screenshot({ path: 'vibrant_calculator.png' });
    console.log('Saved vibrant_calculator.png');
  }

  await browser.close();
  console.log('Done!');
})();
