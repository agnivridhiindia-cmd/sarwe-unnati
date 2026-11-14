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
  await page.goto('http://localhost:3000/#solution', { waitUntil: 'networkidle2' });
  
  await page.evaluate(() => {
    const el = document.getElementById('solution');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 500));

  const el = await page.$('#solution');
  if (el) {
    await el.screenshot({ path: path.join(__dirname, '../operating_model_current.png') });
    console.log('Saved operating_model_current.png');
  }
  await browser.close();
})();
