const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto('http://localhost:3000/#solution', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await new Promise(r => setTimeout(r, 1200));

  // Scroll to section
  await page.evaluate(() => {
    const el = document.getElementById('solution');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 600));

  const solutionEl = await page.$('#solution');
  if (solutionEl) {
    await solutionEl.screenshot({ path: path.join(__dirname, '../operating_model_simplified.png') });
    console.log('Saved operating_model_simplified.png');
  }

  // Also click pillar 2
  await page.click('#pillar-tab-2');
  await new Promise(r => setTimeout(r, 400));
  if (solutionEl) {
    await solutionEl.screenshot({ path: path.join(__dirname, '../operating_model_p2_simplified.png') });
    console.log('Saved operating_model_p2_simplified.png');
  }

  console.log('Total console errors:', errors.length);
  await browser.close();
})();
