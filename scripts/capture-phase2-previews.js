const puppeteer = require('puppeteer-core');
const path = require('path');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const filePath = 'file:///' + path.resolve(__dirname, '../index.html').replace(/\\/g, '/');
  await page.goto(filePath, { waitUntil: 'load' });
  await new Promise(r => setTimeout(r, 600));

  // 1. Capture Header
  const header = await page.$('.site-header');
  if (header) {
    await header.screenshot({ path: path.resolve(__dirname, '../phase2_header_preview.png') });
    console.log('Saved phase2_header_preview.png');
  }

  // 2. Capture Footer
  await page.evaluate(() => {
    const el = document.querySelector('.site-footer');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 600));
  const footer = await page.$('.site-footer');
  if (footer) {
    await footer.screenshot({ path: path.resolve(__dirname, '../phase2_footer_preview.png') });
    console.log('Saved phase2_footer_preview.png');
  }

  // 3. Mobile Viewport & Drawer
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 390, height: 844 });
  await mobilePage.goto(filePath, { waitUntil: 'load' });
  await new Promise(r => setTimeout(r, 500));
  await mobilePage.click('#mobile-drawer-toggle');
  await new Promise(r => setTimeout(r, 600));
  await mobilePage.screenshot({ path: path.resolve(__dirname, '../phase2_drawer_mobile_preview.png') });
  console.log('Saved phase2_drawer_mobile_preview.png');

  await browser.close();
})().catch(console.error);
