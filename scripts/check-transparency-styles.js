const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  const info = await page.evaluate(() => {
    const card = document.querySelector('.transparency-banner-card');
    const title = document.querySelector('.transparency-title');
    const kpiLbl = document.querySelector('.kpi-lbl');
    const cardBg = card ? window.getComputedStyle(card).backgroundColor : null;
    const cardBgImg = card ? window.getComputedStyle(card).backgroundImage : null;
    const titleColor = title ? window.getComputedStyle(title).color : null;
    const kpiLblColor = kpiLbl ? window.getComputedStyle(kpiLbl).color : null;
    return { cardBg, cardBgImg, titleColor, kpiLblColor };
  });

  console.log('Computed styles:', JSON.stringify(info, null, 2));
  await browser.close();
})();
