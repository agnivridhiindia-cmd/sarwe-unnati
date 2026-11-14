const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function captureOrangeHover() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  // 1. Bento Card Hover
  await page.evaluate(() => {
    const el = document.querySelector('.components-bento-grid');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 600));

  const bentoCard2 = await page.$$('.bento-card');
  if (bentoCard2[1]) {
    const box = await bentoCard2[1].boundingBox();
    await page.mouse.move(box.x + box.width * 0.5, box.y + box.height * 0.3, { steps: 5 });
    await new Promise(r => setTimeout(r, 300));
    await bentoCard2[1].screenshot({ path: path.join(__dirname, '../bento_orange_hover.png') });
    console.log('Saved bento_orange_hover.png!');
  }

  // 2. CSR Featured Card Hover
  await page.evaluate(() => {
    const el = document.querySelector('.section-csr-tiers');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 600));

  const csrCard = await page.$('.csr-card.featured-tier');
  if (csrCard) {
    const box = await csrCard.boundingBox();
    await page.mouse.move(box.x + box.width * 0.5, box.y + box.height * 0.3, { steps: 5 });
    await new Promise(r => setTimeout(r, 300));
    await csrCard.screenshot({ path: path.join(__dirname, '../csr_featured_orange_hover.png') });
    console.log('Saved csr_featured_orange_hover.png!');
  }

  // 3. Regular CSR Card Hover
  const regularCsrCard = await page.$('.csr-card');
  if (regularCsrCard) {
    const box = await regularCsrCard.boundingBox();
    await page.mouse.move(box.x + box.width * 0.5, box.y + box.height * 0.3, { steps: 5 });
    await new Promise(r => setTimeout(r, 300));
    await regularCsrCard.screenshot({ path: path.join(__dirname, '../csr_regular_orange_hover.png') });
    console.log('Saved csr_regular_orange_hover.png!');
  }

  await browser.close();
}

captureOrangeHover().catch(console.error);
