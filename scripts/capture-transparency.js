const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // Desktop capture
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000/index.html?t=' + Date.now(), { waitUntil: 'networkidle0' });

  const el = await page.$('.section-transparency-gateway');
  if (el) {
    await page.evaluate(() => {
      const h = document.getElementById('main-header');
      if (h) h.style.display = 'none';
      const target = document.querySelector('.section-transparency-gateway');
      if (target) target.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 600));
    await el.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/transparency_light_bg_desktop.png' });
    console.log('Saved transparency_light_bg_desktop.png');
  }

  // Mobile 375px capture
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
  await mobilePage.goto('http://localhost:3000/index.html?t=' + Date.now(), { waitUntil: 'networkidle0' });

  const mobileEl = await mobilePage.$('.section-transparency-gateway');
  if (mobileEl) {
    await mobilePage.evaluate(() => {
      const h = document.getElementById('main-header');
      if (h) h.style.display = 'none';
      const target = document.querySelector('.section-transparency-gateway');
      if (target) target.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 600));
    await mobileEl.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/transparency_light_bg_mobile.png' });
    console.log('Saved transparency_light_bg_mobile.png');
  }

  await browser.close();
  console.log('Done captures!');
})();
