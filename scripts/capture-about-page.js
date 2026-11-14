const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/about.html', { waitUntil: 'networkidle0' });

  const artifactDir = 'C:\\Users\\SMD\\.gemini\\antigravity\\brain\\b5671c29-b653-472b-ad9d-285e6985554b';

  await page.screenshot({
    path: path.join(artifactDir, 'about_page_desktop.png'),
    fullPage: true
  });
  console.log('Saved about_page_desktop.png');

  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://localhost:3000/about.html', { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: path.join(artifactDir, 'about_page_mobile.png'),
    fullPage: true
  });
  console.log('Saved about_page_mobile.png');

  // Check horizontal overflow
  const overflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });
  console.log('Mobile 375px overflow:', overflow);

  await browser.close();
})();
