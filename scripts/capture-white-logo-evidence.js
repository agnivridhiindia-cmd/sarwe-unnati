const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const artifactDir = 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b';

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true });

  // 1. Desktop Navbar with White BG Logo on index.html
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000/index.html', { waitUntil: 'networkidle0' });
  const header = await page.$('.site-header');
  if (header) {
    await header.screenshot({ path: path.join(artifactDir, 'header_white_logo_desktop.png') });
    console.log('Saved header_white_logo_desktop.png');
  }

  // 2. Footer with White BG Logo
  const footer = await page.$('.site-footer');
  if (footer) {
    await footer.screenshot({ path: path.join(artifactDir, 'footer_white_logo.png') });
    console.log('Saved footer_white_logo.png');
  }

  // 3. Mobile Header (375px)
  await page.setViewport({ width: 375, height: 667 });
  await page.goto('http://localhost:3000/index.html', { waitUntil: 'networkidle0' });
  const mobileHeader = await page.$('.site-header');
  if (mobileHeader) {
    await mobileHeader.screenshot({ path: path.join(artifactDir, 'header_white_logo_mobile.png') });
    console.log('Saved header_white_logo_mobile.png');
  }

  // 4. Mobile Drawer Open with White BG Logo
  const drawerToggle = await page.$('#mobile-drawer-toggle');
  if (drawerToggle) {
    await drawerToggle.click();
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(artifactDir, 'mobile_drawer_white_logo.png') });
    console.log('Saved mobile_drawer_white_logo.png');
  }

  await browser.close();
})();
