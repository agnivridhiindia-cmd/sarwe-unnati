const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const artifactDir = 'C:\\Users\\SMD\\.gemini\\antigravity\\brain\\b5671c29-b653-472b-ad9d-285e6985554b';

  await page.goto('http://localhost:3000/index.html', { waitUntil: 'networkidle0' });
  const hIndex = await page.$('.site-header');
  if (hIndex) await hIndex.screenshot({ path: path.join(artifactDir, 'header_index.png') });

  await page.goto('http://localhost:3000/about.html', { waitUntil: 'networkidle0' });
  const hAbout = await page.$('.site-header');
  if (hAbout) await hAbout.screenshot({ path: path.join(artifactDir, 'header_about.png') });

  await page.goto('http://localhost:3000/donate.html', { waitUntil: 'networkidle0' });
  const hDonate = await page.$('.site-header');
  if (hDonate) await hDonate.screenshot({ path: path.join(artifactDir, 'header_donate.png') });

  console.log('Headers captured.');
  await browser.close();
})();
