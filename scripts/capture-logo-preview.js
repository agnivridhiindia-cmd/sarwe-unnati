const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 950, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000/test-logo-display.html?t=' + Date.now(), { waitUntil: 'networkidle0' });

  await page.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/logo_preview_showcase.png' });
  console.log('Saved logo_preview_showcase.png');

  await browser.close();
})();
