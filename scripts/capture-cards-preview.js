const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function captureCards() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  // 1. Capture Bento Cards
  await page.evaluate(() => {
    const el = document.querySelector('.section-components');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 600));
  const bentoEl = await page.$('.section-components');
  if (bentoEl) {
    await bentoEl.screenshot({ path: path.join(__dirname, '../bento_cards_preview.png') });
  }

  // 2. Capture CSR Tiers
  await page.evaluate(() => {
    const el = document.querySelector('.section-csr-tiers');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 600));
  const csrEl = await page.$('.section-csr-tiers');
  if (csrEl) {
    await csrEl.screenshot({ path: path.join(__dirname, '../csr_cards_preview.png') });
  }

  console.log('Successfully captured bento_cards_preview.png and csr_cards_preview.png!');
  await browser.close();
}

captureCards().catch(console.error);
