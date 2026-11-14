const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function testNativeHover() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  const card = await page.$('.components-bento-grid .bento-card:nth-child(2)');
  if (card) {
    await card.hover();
    await new Promise(r => setTimeout(r, 400));
    await card.screenshot({ path: path.join(__dirname, '../bento_card_native_hover.png') });
    console.log('Saved bento_card_native_hover.png successfully!');
  }

  await browser.close();
}

testNativeHover().catch(console.error);
