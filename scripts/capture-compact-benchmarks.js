const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000/index.html?t=' + Date.now(), { waitUntil: 'networkidle0' });

  const el = await page.$('#impact-targets');
  if (el) {
    await page.evaluate(() => {
      const h = document.getElementById('main-header');
      if (h) h.style.display = 'none';
      const target = document.getElementById('impact-targets');
      if (target) target.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 600));
    await el.screenshot({ path: 'compact_benchmarks.png' });
    console.log('Saved compact_benchmarks.png');
  }

  // Also capture mobile 375px
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
  await mobilePage.goto('http://localhost:3000/index.html?t=' + Date.now(), { waitUntil: 'networkidle0' });

  const mobileEl = await mobilePage.$('#impact-targets');
  if (mobileEl) {
    await mobilePage.evaluate(() => {
      const h = document.getElementById('main-header');
      if (h) h.style.display = 'none';
      const target = document.getElementById('impact-targets');
      if (target) target.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 600));
    await mobileEl.screenshot({ path: 'compact_benchmarks_mobile.png' });
    console.log('Saved compact_benchmarks_mobile.png');
  }

  await browser.close();
  console.log('Done!');
})();
