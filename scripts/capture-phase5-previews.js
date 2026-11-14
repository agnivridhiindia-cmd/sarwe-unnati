const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\SMD\\.gemini\\antigravity\\brain\\b5671c29-b653-472b-ad9d-285e6985554b';

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  // 1. impact.html Hero & Unit Economics
  const impactUrl = 'file:///' + path.resolve('impact.html').replace(/\\/g, '/');
  console.log('Loading ' + impactUrl);
  await page.goto(impactUrl, { waitUntil: 'networkidle0' });

  await page.screenshot({
    path: path.join(artifactDir, 'phase5_impact_hero.png'),
    clip: { x: 0, y: 0, width: 1440, height: 1100 }
  });
  console.log('Saved phase5_impact_hero.png');

  // 2. impact.html Budget Table & Framework
  await page.evaluate(() => {
    const el = document.getElementById('budget-allocation');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));

  await page.screenshot({
    path: path.join(artifactDir, 'phase5_budget_table.png'),
    clip: { x: 0, y: 1100, width: 1440, height: 1150 }
  });
  console.log('Saved phase5_budget_table.png');

  // 3. impact.html Risk Assessment Cards
  await page.screenshot({
    path: path.join(artifactDir, 'phase5_risk_matrix.png'),
    clip: { x: 0, y: 2850, width: 1440, height: 1000 }
  });
  console.log('Saved phase5_risk_matrix.png');

  // 4. programs.html Hero & Beneficiaries
  const programsUrl = 'file:///' + path.resolve('programs.html').replace(/\\/g, '/');
  console.log('Loading ' + programsUrl);
  await page.goto(programsUrl, { waitUntil: 'networkidle0' });

  await page.screenshot({
    path: path.join(artifactDir, 'phase5_programs_hero.png'),
    clip: { x: 0, y: 0, width: 1440, height: 1150 }
  });
  console.log('Saved phase5_programs_hero.png');

  // 5. programs.html Kitchen Standards & 3-Phase Pipeline
  await page.evaluate(() => {
    const el = document.getElementById('kitchen-standards');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));

  await page.screenshot({
    path: path.join(artifactDir, 'phase5_programs_pipeline.png'),
    clip: { x: 0, y: 1150, width: 1440, height: 1300 }
  });
  console.log('Saved phase5_programs_pipeline.png');

  await browser.close();
  console.log('Phase 5 screenshots captured successfully!');
}

capture().catch(err => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
