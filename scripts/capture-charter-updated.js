const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const artifactDir = 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b';

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true, defaultViewport: { width: 1440, height: 900 } });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/index.html', { waitUntil: 'networkidle0' });

  // Scroll to #charter-dossier
  await page.evaluate(() => {
    document.getElementById('charter-dossier').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));

  await page.screenshot({ path: path.join(artifactDir, 'charter_updated_desktop.png') });
  console.log('Saved charter_updated_desktop.png');

  // Also test mobile 375px
  await page.setViewport({ width: 375, height: 667 });
  await page.goto('http://localhost:3000/index.html', { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    document.getElementById('charter-dossier').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));

  await page.screenshot({ path: path.join(artifactDir, 'charter_updated_mobile.png') });
  console.log('Saved charter_updated_mobile.png');

  // Check mobile overflow
  const overflow = await page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth;
    const scrollWidth = document.documentElement.scrollWidth;
    return { docWidth, scrollWidth, hasOverflow: scrollWidth > docWidth };
  });
  console.log('Mobile overflow check:', overflow);

  await browser.close();
})();
