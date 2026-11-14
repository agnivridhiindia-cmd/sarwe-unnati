const puppeteer = require('puppeteer-core');
const fs = require('fs');
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  // Match the user's exact aspect ratio / resolution from the uploaded image:
  // In the uploaded image: aspect ratio is roughly 1440x720 or 1366x768 (standard laptop screen)
  await page.setViewport({ width: 1366, height: 720, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3000/index.html?t=' + Date.now(), { waitUntil: 'networkidle0' });

  await page.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/hero_laptop_720p.png' });
  console.log('Saved hero_laptop_720p.png');

  // Let's also check if there is an element dividing the screen
  const elementsUnderPoint = await page.evaluate(() => {
    // Check at x = 750, y = 300 (roughly where the vertical line is in the user's screenshot)
    const el = document.elementFromPoint(750, 300);
    return el ? { tag: el.tagName, className: el.className, id: el.id } : null;
  });
  console.log('Element at line:', elementsUnderPoint);

  await browser.close();
})();
