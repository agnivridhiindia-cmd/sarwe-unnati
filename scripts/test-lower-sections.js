const puppeteer = require('puppeteer-core');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\SMD\\.gemini\\antigravity\\brain\\02c01f0e-7394-486a-bc08-2b689484ec90';

async function testLower() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/?v=lower_test', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1200));

  await page.evaluate(() => {
    document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('revealed'));
  });
  await new Promise(r => setTimeout(r, 500));

  // 1. Roadmap
  const roadmap = await page.$('#roadmap');
  if (roadmap) {
    await roadmap.screenshot({ path: path.join(artifactDir, 'test_revealed_roadmap.png') });
    console.log('✓ Captured test_revealed_roadmap.png');
  }

  // 2. FAQ
  const faq = await page.$('#faq');
  if (faq) {
    await faq.screenshot({ path: path.join(artifactDir, 'test_revealed_faq.png') });
    console.log('✓ Captured test_revealed_faq.png');
  }

  // 3. Bank Wire
  const wire = await page.$('#bank-wire');
  if (wire) {
    await wire.screenshot({ path: path.join(artifactDir, 'test_revealed_wire.png') });
    console.log('✓ Captured test_revealed_wire.png');
  }

  await browser.close();
}

testLower().catch(console.error);
