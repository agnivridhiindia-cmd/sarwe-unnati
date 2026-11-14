const puppeteer = require('puppeteer-core');
const path = require('path');

const pages = [
  'index.html',
  'about.html',
  'programs.html',
  'impact.html',
  'volunteer.html',
  'contact.html',
  'donate.html'
];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  const artifactDir = 'C:\\Users\\SMD\\.gemini\\antigravity\\brain\\b5671c29-b653-472b-ad9d-285e6985554b';

  // 1. Desktop Screenshots of the Navbar on index, about, and impact
  await page.setViewport({ width: 1440, height: 900 });

  for (let file of ['index.html', 'about.html', 'impact.html', 'donate.html']) {
    await page.goto(`http://localhost:3000/${file}`, { waitUntil: 'networkidle0' });
    const header = await page.$('.site-header');
    if (header) {
      const screenshotName = `navbar_desktop_${file.replace('.html', '')}.png`;
      await header.screenshot({ path: path.join(artifactDir, screenshotName) });
      console.log(`Saved ${screenshotName}`);
    }
  }

  // 2. Test tablet viewport (1024px)
  await page.setViewport({ width: 1024, height: 768 });
  await page.goto('http://localhost:3000/index.html', { waitUntil: 'networkidle0' });
  const hTablet = await page.$('.site-header');
  if (hTablet) {
    await hTablet.screenshot({ path: path.join(artifactDir, 'navbar_tablet_1024p.png') });
    console.log('Saved navbar_tablet_1024p.png');
  }

  // 3. Test mobile viewport (375px)
  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://localhost:3000/index.html', { waitUntil: 'networkidle0' });
  const hMobile = await page.$('.site-header');
  if (hMobile) {
    await hMobile.screenshot({ path: path.join(artifactDir, 'navbar_mobile_375p.png') });
    console.log('Saved navbar_mobile_375p.png');
  }

  console.log('All navbar tests complete.');
  await browser.close();
})();
