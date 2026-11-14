const puppeteer = require('puppeteer-core');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\SMD\\.gemini\\antigravity\\brain\\b5671c29-b653-472b-ad9d-285e6985554b';

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--window-size=1440,900']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  // 1. programs.html
  const urlProg = 'file:///' + path.resolve('programs.html').replace(/\\/g, '/');
  await page.goto(urlProg, { waitUntil: 'networkidle0' });

  // Hide header for element screenshots to prevent fixed positioning overlap
  await page.evaluate(() => {
    const hdr = document.getElementById('site-header');
    if (hdr) hdr.style.display = 'none';
  });

  const distEl = await page.$('#distribution-strategy');
  if (distEl) {
    await distEl.screenshot({ path: path.join(artifactDir, 'phase5_programs_distribution_blueprint.png') });
    console.log('Saved phase5_programs_distribution_blueprint.png');
  }

  const benefEl = await page.$('#beneficiaries');
  if (benefEl) {
    await benefEl.screenshot({ path: path.join(artifactDir, 'phase5_programs_beneficiaries.png') });
    console.log('Saved phase5_programs_beneficiaries.png');
  }

  // 2. impact.html
  const urlImp = 'file:///' + path.resolve('impact.html').replace(/\\/g, '/');
  await page.goto(urlImp, { waitUntil: 'networkidle0' });

  await page.evaluate(() => {
    const hdr = document.getElementById('site-header');
    if (hdr) hdr.style.display = 'none';
  });

  const budgetEl = await page.$('#budget-allocation');
  if (budgetEl) {
    await budgetEl.screenshot({ path: path.join(artifactDir, 'phase5_budget_table.png') });
    console.log('Saved phase5_budget_table.png');
  }

  await browser.close();
  console.log('All Phase 5 element captures updated cleanly!');
}

capture().catch(console.error);
