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
  await page.goto('http://localhost:3000/impact.html?t=' + Date.now(), { waitUntil: 'networkidle0' });

  await page.evaluate(() => {
    const h = document.getElementById('site-header');
    if (h) h.style.display = 'none';
    const el = document.querySelector('.open-economics-strip');
    if (el) el.scrollIntoView({ block: 'start' });
  });
  await new Promise(r => setTimeout(r, 600));

  const el = await page.$('.open-economics-strip');
  if (el) {
    await el.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/modern_impact.png' });
    console.log('Saved modern_impact.png');
  }

  // Also capture the funding stack
  const fundingEl = await page.$('.funding-progress-stack');
  if (fundingEl) {
    await page.evaluate(() => {
      const parent = document.querySelector('.funding-progress-stack').parentElement;
      if (parent) parent.scrollIntoView({ block: 'start' });
    });
    await new Promise(r => setTimeout(r, 600));
    const parent = await page.evaluateHandle(() => document.querySelector('.funding-progress-stack').parentElement);
    await parent.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/modern_funding_stack.png' });
    console.log('Saved modern_funding_stack.png');
  }

  await browser.close();
})();
