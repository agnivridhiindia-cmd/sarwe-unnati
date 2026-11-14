const puppeteer = require('puppeteer-core');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\SMD\\.gemini\\antigravity\\brain\\02c01f0e-7394-486a-bc08-2b689484ec90';

async function testReveal() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/?v=reveal_test', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1200));

  // Force all data-reveal elements to be revealed
  await page.evaluate(() => {
    document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('revealed'));
  });
  await new Promise(r => setTimeout(r, 500));

  // Capture CSR tiers
  const csr = await page.$('#csr-partnerships');
  if (csr) {
    await csr.screenshot({ path: path.join(artifactDir, 'test_revealed_csr.png') });
    console.log('✓ Captured test_revealed_csr.png');
  }

  // Capture Calculator
  const calc = await page.$('#meal-calculator');
  if (calc) {
    await calc.screenshot({ path: path.join(artifactDir, 'test_revealed_calc.png') });
    console.log('✓ Captured test_revealed_calc.png');
  }

  // Capture Transparency
  const trans = await page.$('.section-transparency-gateway');
  if (trans) {
    await trans.screenshot({ path: path.join(artifactDir, 'test_revealed_trans.png') });
    console.log('✓ Captured test_revealed_trans.png');
  }

  await browser.close();
}

testReveal().catch(console.error);
