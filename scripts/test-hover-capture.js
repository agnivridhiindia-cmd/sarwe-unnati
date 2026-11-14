const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function testHoverCapture() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  // Scroll to bento card
  await page.evaluate(() => {
    const el = document.querySelector('.components-bento-grid');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 600));

  const cardHandle = await page.$('.bento-card.featured-card');
  if (cardHandle) {
    const box = await cardHandle.boundingBox();
    // Hover at top right corner
    await page.mouse.move(box.x + box.width * 0.85, box.y + box.height * 0.2);
    await new Promise(r => setTimeout(r, 300));

    const transform = await page.evaluate(el => el.style.transform, cardHandle);
    console.log('Active 3D Tilt Transform:', transform);

    await cardHandle.screenshot({ path: path.join(__dirname, '../bento_tilt_hover.png') });
    console.log('Saved bento_tilt_hover.png successfully!');
  }

  await browser.close();
}

testHoverCapture().catch(console.error);
