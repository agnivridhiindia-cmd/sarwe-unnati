const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // 1. Desktop Header
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000/index.html?t=' + Date.now(), { waitUntil: 'networkidle0' });
  
  const header = await page.$('.site-header');
  if (header) {
    await header.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/logo_nav_header.png' });
    console.log('Saved logo_nav_header.png');
  }

  // 2. Desktop Hero & Charter Bar with logo
  const charterBar = await page.$('.charter-header-bar');
  if (charterBar) {
    await charterBar.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/logo_charter_bar.png' });
    console.log('Saved logo_charter_bar.png');
  }

  // 3. Desktop Footer
  const footer = await page.$('.site-footer');
  if (footer) {
    await page.evaluate(() => {
      const f = document.querySelector('.site-footer');
      if (f) f.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 400));
    await footer.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/logo_footer.png' });
    console.log('Saved logo_footer.png');
  }

  // 4. Mobile Nav Drawer open
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
  await mobilePage.goto('http://localhost:3000/index.html?t=' + Date.now(), { waitUntil: 'networkidle0' });
  
  const menuBtn = await mobilePage.$('#mobile-menu-btn');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 500));
    await mobilePage.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/logo_mobile_drawer.png' });
    console.log('Saved logo_mobile_drawer.png');
  }

  // 5. About page header
  const aboutPage = await browser.newPage();
  await aboutPage.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });
  await aboutPage.goto('http://localhost:3000/about.html?t=' + Date.now(), { waitUntil: 'networkidle0' });
  const aboutHeader = await aboutPage.$('.site-header');
  if (aboutHeader) {
    await aboutHeader.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/logo_about_header.png' });
    console.log('Saved logo_about_header.png');
  }

  await browser.close();
  console.log('All verification screenshots captured!');
})();
