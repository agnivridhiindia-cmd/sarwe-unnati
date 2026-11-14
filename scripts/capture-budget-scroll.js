const puppeteer = require('puppeteer-core');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\SMD\\.gemini\\antigravity\\brain\\b5671c29-b653-472b-ad9d-285e6985554b';

async function captureBudgetAndRisk() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--window-size=1440,900']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1100, deviceScaleFactor: 2 });

  const urlImp = 'file:///' + path.resolve('impact.html').replace(/\\/g, '/');
  await page.goto(urlImp, { waitUntil: 'networkidle0' });

  // 1. Scroll budget into view
  await page.evaluate(() => {
    const hdr = document.getElementById('site-header');
    if (hdr) hdr.style.display = 'none';
    const b = document.getElementById('budget-allocation');
    b.scrollIntoView({ block: 'start' });
  });
  await new Promise(r => setTimeout(r, 1200));

  await page.screenshot({
    path: path.join(artifactDir, 'phase5_budget_table.png')
  });
  console.log('Saved phase5_budget_table.png via scroll');

  // 2. Scroll risk matrix into view
  await page.evaluate(() => {
    const r = document.querySelector('.risk-matrix-grid');
    if (r) r.scrollIntoView({ block: 'center' });
  });
  await new Promise(r => setTimeout(r, 1200));

  await page.screenshot({
    path: path.join(artifactDir, 'phase5_risk_matrix.png')
  });
  console.log('Saved phase5_risk_matrix.png via scroll');

  await browser.close();
}

captureBudgetAndRisk().catch(console.error);
