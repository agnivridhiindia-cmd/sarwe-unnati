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

  // 1. programs.html distribution strategy element
  const urlProg = 'file:///' + path.resolve('programs.html').replace(/\\/g, '/');
  await page.goto(urlProg, { waitUntil: 'networkidle0' });
  const distEl = await page.$('#distribution-strategy');
  if (distEl) {
    await distEl.screenshot({ path: path.join(artifactDir, 'phase5_programs_distribution_blueprint.png') });
    console.log('Saved phase5_programs_distribution_blueprint.png');
  }

  // 2. impact.html budget allocation element
  const urlImp = 'file:///' + path.resolve('impact.html').replace(/\\/g, '/');
  await page.goto(urlImp, { waitUntil: 'networkidle0' });
  const budgetEl = await page.$('#budget-allocation');
  if (budgetEl) {
    await budgetEl.screenshot({ path: path.join(artifactDir, 'phase5_budget_table.png') });
    console.log('Saved phase5_budget_table.png');
  }

  await browser.close();
}

capture().catch(console.error);
