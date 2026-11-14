const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function takeSectionScreenshot() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  // Scroll to .section-transparency-gateway
  await page.evaluate(() => {
    const el = document.querySelector('.section-transparency-gateway');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });

  await new Promise(r => setTimeout(r, 600));

  const sectionHandle = await page.$('.section-transparency-gateway');
  if (sectionHandle) {
    await sectionHandle.screenshot({ path: path.join(__dirname, '../transparency_verified.png') });
    console.log('Saved transparency_verified.png successfully!');
  } else {
    console.error('Could not find .section-transparency-gateway element!');
  }

  await browser.close();
}

takeSectionScreenshot().catch(console.error);
