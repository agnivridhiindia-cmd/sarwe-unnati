const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function captureBentoHover() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  await page.evaluate(() => {
    const el = document.querySelectorAll('.bento-card')[1];
    el.scrollIntoView({ block: 'center' });
  });
  await new Promise(r => setTimeout(r, 500));

  const cards = await page.$$('.bento-card');
  const card = cards[1];
  const box = await card.boundingBox();

  await page.mouse.move(box.x + box.width * 0.5, box.y + box.height * 0.4, { steps: 8 });
  await new Promise(r => setTimeout(r, 400));

  await card.screenshot({ path: path.join(__dirname, '../bento_card2_orange_hover.png') });
  console.log('Saved bento_card2_orange_hover.png successfully!');
  await browser.close();
}

captureBentoHover().catch(console.error);
