const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // 1. Desktop Viewport
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000/index.html?t=' + Date.now(), { waitUntil: 'networkidle0' });
  
  const el = await page.$('#charter-dossier');
  if (el) {
    await page.evaluate(() => {
      const h = document.getElementById('main-header');
      if (h) h.style.display = 'none';
      const target = document.getElementById('charter-dossier');
      if (target) target.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 600));
    await el.screenshot({ path: 'charter_after_fix.png' });
    console.log('Saved charter_after_fix.png');
  }

  // 2. Mobile Viewport (375px)
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
  await mobilePage.goto('http://localhost:3000/index.html?t=' + Date.now(), { waitUntil: 'networkidle0' });
  
  const mobileEl = await mobilePage.$('#charter-dossier');
  if (mobileEl) {
    await mobilePage.evaluate(() => {
      const h = document.getElementById('main-header');
      if (h) h.style.display = 'none';
      const target = document.getElementById('charter-dossier');
      if (target) target.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 600));
    await mobileEl.screenshot({ path: 'charter_mobile_after_fix.png' });
    console.log('Saved charter_mobile_after_fix.png');
  }

  await browser.close();
})();
