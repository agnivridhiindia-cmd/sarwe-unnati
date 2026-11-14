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
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  // Scroll to .section-transparency-gateway
  await page.evaluate(() => {
    const el = document.querySelector('.section-transparency-gateway');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });

  await new Promise(r => setTimeout(r, 600));

  const sectionHandle = await page.$('.section-transparency-gateway');
  if (sectionHandle) {
    await sectionHandle.screenshot({ path: path.join(__dirname, '../transparency_fixed_confirmed.png') });
    console.log('Saved transparency_fixed_confirmed.png successfully!');
  } else {
    console.error('Could not find .section-transparency-gateway element!');
  }

  // Also verify computed colors
  const report = await page.evaluate(() => {
    const card = document.querySelector('.transparency-banner-card');
    const title = document.querySelector('.transparency-title');
    const desc = document.querySelector('.transparency-desc');
    const kpiLabels = Array.from(document.querySelectorAll('.kpi-lbl')).map(k => ({
      text: k.innerText,
      color: window.getComputedStyle(k).color
    }));
    return {
      cardBg: window.getComputedStyle(card).backgroundImage,
      titleText: title.innerText,
      titleColor: window.getComputedStyle(title).color,
      descColor: window.getComputedStyle(desc).color,
      kpiLabels
    };
  });

  console.log('Verification Report:', JSON.stringify(report, null, 2));

  await browser.close();
})();
