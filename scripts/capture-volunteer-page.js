const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/volunteer.html', { waitUntil: 'networkidle0' });

  const artifactDir = 'C:\\Users\\SMD\\.gemini\\antigravity\\brain\\b5671c29-b653-472b-ad9d-285e6985554b';

  // 1. Screenshot of the volunteer registration form section
  const formSec = await page.$('#volunteer-form-section');
  if (formSec) {
    await formSec.screenshot({ path: path.join(artifactDir, 'volunteer_light_form_section.png') });
    console.log('Saved volunteer_light_form_section.png');
  }

  // 2. Full desktop page screenshot
  await page.screenshot({ path: path.join(artifactDir, 'volunteer_page_desktop.png'), fullPage: true });
  console.log('Saved volunteer_page_desktop.png');

  // 3. Mobile viewport screenshot & overflow check
  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://localhost:3000/volunteer.html', { waitUntil: 'networkidle0' });
  const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  console.log('Mobile 375px hasOverflow:', hasOverflow);

  await page.screenshot({ path: path.join(artifactDir, 'volunteer_page_mobile.png'), fullPage: true });
  console.log('Saved volunteer_page_mobile.png');

  console.log('Console Errors:', consoleErrors);

  await browser.close();
})();
