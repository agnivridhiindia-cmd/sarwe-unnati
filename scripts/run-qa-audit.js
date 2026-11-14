const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\SMD\\.gemini\\antigravity\\brain\\b5671c29-b653-472b-ad9d-285e6985554b';

const pages = [
  'index.html',
  'about.html',
  'programs.html',
  'impact.html',
  'donate.html',
  'volunteer.html',
  'contact.html'
];

async function runMobileAndQaAudit() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const auditResults = [];

  for (const pageName of pages) {
    const page = await browser.newPage();
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    page.on('pageerror', err => consoleErrors.push(err.message));

    const fileUrl = 'file:///' + path.resolve(pageName).replace(/\\/g, '/');
    await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    // 1. Check Horizontal Overflow (scrollWidth vs clientWidth)
    const overflowInfo = await page.evaluate(() => {
      const docWidth = document.documentElement.clientWidth;
      const scrollWidth = document.documentElement.scrollWidth;
      const elementsWithOverflow = [];
      document.querySelectorAll('*').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.right > docWidth + 2) {
          elementsWithOverflow.push({
            tag: el.tagName,
            id: el.id,
            className: el.className,
            right: Math.round(rect.right),
            docWidth
          });
        }
      });
      return {
        docWidth,
        scrollWidth,
        hasOverflow: scrollWidth > docWidth,
        overflowingElements: elementsWithOverflow.slice(0, 5)
      };
    });

    // 2. Mobile Screenshot of Top & Middle
    const screenshotName = `phase7_mobile_${pageName.replace('.html', '')}.png`;
    await page.screenshot({
      path: path.join(artifactDir, screenshotName),
      clip: { x: 0, y: 0, width: 375, height: 950 }
    });

    // 3. Test Drawer Open on Mobile
    let drawerWorks = false;
    try {
      const menuBtn = await page.$('#mobile-menu-btn, #mobile-drawer-toggle');
      if (menuBtn) {
        await menuBtn.click();
        await new Promise(r => setTimeout(r, 400));
        drawerWorks = await page.evaluate(() => {
          const drawer = document.getElementById('mobile-drawer') || document.getElementById('mobile-nav-drawer');
          return drawer && (drawer.classList.contains('active') || drawer.classList.contains('open'));
        });
        const closeBtn = await page.$('#drawer-close-btn');
        if (closeBtn) {
          await closeBtn.click();
          await new Promise(r => setTimeout(r, 300));
        }
      }
    } catch (e) {
      drawerWorks = false;
    }

    auditResults.push({
      page: pageName,
      hasOverflow: overflowInfo.hasOverflow,
      docWidth: overflowInfo.docWidth,
      scrollWidth: overflowInfo.scrollWidth,
      drawerWorks,
      consoleErrorsCount: consoleErrors.length,
      overflowingElements: overflowInfo.overflowingElements
    });

    await page.close();
  }

  await browser.close();

  console.log('AUDIT SUMMARY:');
  console.log(JSON.stringify(auditResults, null, 2));
  fs.writeFileSync('scripts/qa-results.json', JSON.stringify(auditResults, null, 2), 'utf8');
}

runMobileAndQaAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
