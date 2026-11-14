const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // 1. Laptop Viewport 1366x768
  const laptopPage = await browser.newPage();
  await laptopPage.setViewport({ width: 1366, height: 768, deviceScaleFactor: 1.5 });
  await laptopPage.goto('http://localhost:3000/index.html?t=' + Date.now(), { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));

  await laptopPage.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/hero_fixed_laptop_768p.png' });
  console.log('Saved hero_fixed_laptop_768p.png');

  // Verify elements fit inside 768px height
  const fitInfo = await laptopPage.evaluate(() => {
    const hero = document.querySelector('.section-hero');
    const ribbon = hero.querySelector('.hero-metric-ribbon');
    const card = hero.querySelector('.hero-visual-card');

    return {
      windowHeight: window.innerHeight,
      heroHeight: hero.offsetHeight,
      ribbonBottom: ribbon.getBoundingClientRect().bottom,
      cardBottom: card.getBoundingClientRect().bottom,
      allInsideViewport: ribbon.getBoundingClientRect().bottom <= window.innerHeight && card.getBoundingClientRect().bottom <= window.innerHeight
    };
  });
  console.log('Fit verification on 768p laptop:', fitInfo);

  // 2. Desktop Viewport 1440x900
  const desktopPage = await browser.newPage();
  await desktopPage.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
  await desktopPage.goto('http://localhost:3000/index.html?t=' + Date.now(), { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));

  await desktopPage.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/hero_fixed_desktop_900p.png' });
  console.log('Saved hero_fixed_desktop_900p.png');

  // 3. Mobile 375x812
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
  await mobilePage.goto('http://localhost:3000/index.html?t=' + Date.now(), { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));

  await mobilePage.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/hero_fixed_mobile_375p.png' });
  console.log('Saved hero_fixed_mobile_375p.png');

  await browser.close();
  console.log('All hero verifications completed!');
})();
