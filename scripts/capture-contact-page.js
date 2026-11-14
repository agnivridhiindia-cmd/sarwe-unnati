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
  await page.goto('http://localhost:3000/contact.html', { waitUntil: 'networkidle0' });

  const artifactDir = 'C:\\Users\\SMD\\.gemini\\antigravity\\brain\\b5671c29-b653-472b-ad9d-285e6985554b';

  // 1. Screenshot of the Executive Inquiry light mode section
  const inquirySec = await page.$('#inquiry-form');
  if (inquirySec) {
    await inquirySec.screenshot({ path: path.join(artifactDir, 'contact_light_inquiry_section.png') });
    console.log('Saved contact_light_inquiry_section.png');
  }

  // 2. Full desktop screenshot
  await page.screenshot({ path: path.join(artifactDir, 'contact_page_desktop.png'), fullPage: true });
  console.log('Saved contact_page_desktop.png');

  // 3. Mobile viewport screenshot & overflow check
  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://localhost:3000/contact.html', { waitUntil: 'networkidle0' });
  const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  console.log('Mobile 375px hasOverflow:', hasOverflow);

  await page.screenshot({ path: path.join(artifactDir, 'contact_page_mobile.png'), fullPage: true });
  console.log('Saved contact_page_mobile.png');

  console.log('Console Errors:', consoleErrors);

  await browser.close();
})();
