const puppeteer = require('puppeteer-core');
const fs = require('fs');

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const pages = [
  'index.html',
  'about.html',
  'programs.html',
  'impact.html',
  'volunteer.html',
  'contact.html',
  'donate.html'
];

const viewports = [
  { name: 'Mobile-375', width: 375, height: 667 },
  { name: 'Mobile-414', width: 414, height: 896 },
  { name: 'Tablet-768', width: 768, height: 1024 },
  { name: 'Tablet-1024', width: 1024, height: 768 },
  { name: 'Desktop-1440', width: 1440, height: 900 }
];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true
  });

  const fullReport = [];

  for (const pageName of pages) {
    const pageReport = { page: pageName, viewports: [] };
    const page = await browser.newPage();

    const errors = [];
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', err => errors.push(err.message));

    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await page.goto(`http://localhost:3000/${pageName}`, { waitUntil: 'networkidle0' });

      // Check overflow
      const overflowData = await page.evaluate(() => {
        const docWidth = document.documentElement.clientWidth;
        const scrollWidth = document.documentElement.scrollWidth;
        const hasOverflow = scrollWidth > docWidth;

        let culprits = [];
        if (hasOverflow) {
          const all = document.querySelectorAll('*');
          for (const el of all) {
            const rect = el.getBoundingClientRect();
            if (rect.right > docWidth + 1) {
              culprits.push({
                tag: el.tagName,
                id: el.id,
                className: el.className,
                right: Math.round(rect.right),
                docWidth
              });
            }
          }
        }

        return { docWidth, scrollWidth, hasOverflow, culprits: culprits.slice(0, 5) };
      });

      pageReport.viewports.push({
        viewport: vp.name,
        width: vp.width,
        ...overflowData
      });
    }

    pageReport.consoleErrors = errors;
    fullReport.push(pageReport);
    await page.close();
  }

  await browser.close();

  console.log('RESPONSIVENESS AUDIT COMPLETE:');
  let issuesFound = 0;
  for (const r of fullReport) {
    console.log(`\nPage: ${r.page} (Errors: ${r.consoleErrors.length})`);
    for (const v of r.viewports) {
      const status = v.hasOverflow ? 'FAIL (OVERFLOW)' : 'PASS';
      if (v.hasOverflow) {
        issuesFound++;
        console.log(`  [${v.viewport}] ${status} - doc: ${v.docWidth}, scroll: ${v.scrollWidth}`);
        console.log('    Culprits:', v.culprits);
      } else {
        console.log(`  [${v.viewport}] ${status}`);
      }
    }
  }

  console.log(`\nTOTAL ISSUES DETECTED: ${issuesFound}`);
})();
