const puppeteer = require('puppeteer-core');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\SMD\\.gemini\\antigravity\\brain\\02c01f0e-7394-486a-bc08-2b689484ec90';

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3000/?v=page1_test', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1500));

  // 1. Hero section
  const heroEl = await page.$('#hero');
  if (heroEl) {
    const heroPath = path.join(artifactDir, 'page1_hero_modernized.png');
    await heroEl.screenshot({ path: heroPath });
    console.log('✓ Captured page1_hero_modernized.png');
  }

  // 2. CSR Tiers section
  const csrEl = await page.$('#csr-partnerships');
  if (csrEl) {
    const csrPath = path.join(artifactDir, 'page1_csr_tiers_modernized.png');
    await csrEl.screenshot({ path: csrPath });
    console.log('✓ Captured page1_csr_tiers_modernized.png');
  }

  // 3. Calculator section
  const calcEl = await page.$('#meal-calculator');
  if (calcEl) {
    const calcPath = path.join(artifactDir, 'page1_calculator_modernized.png');
    await calcEl.screenshot({ path: calcPath });
    console.log('✓ Captured page1_calculator_modernized.png');
  }

  // 4. Transparency section
  const transEl = await page.$('.section-transparency-gateway');
  if (transEl) {
    const transPath = path.join(artifactDir, 'page1_transparency_modernized.png');
    await transEl.screenshot({ path: transPath });
    console.log('✓ Captured page1_transparency_modernized.png');
  }

  await browser.close();
  console.log('Done capturing Page 1 screenshots');
}

capture().catch(console.error);
