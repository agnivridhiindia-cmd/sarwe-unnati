const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto('http://localhost:3000/#solution', { waitUntil: 'networkidle2' });

  // Scroll to section
  await page.evaluate(() => {
    const el = document.getElementById('solution');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 600));

  // 1. Screenshot Pillar 1
  const solutionEl = await page.$('#solution');
  if (solutionEl) {
    await solutionEl.screenshot({ path: path.join(__dirname, '../pillar_01_verified.png') });
    console.log('Saved pillar_01_verified.png');
  }

  // 2. Click Tab 2
  await page.click('#pillar-tab-2');
  await new Promise(r => setTimeout(r, 400));
  const p2Active = await page.evaluate(() => {
    const p2 = document.getElementById('pillar-panel-2');
    return p2 && p2.classList.contains('active');
  });
  console.log('Pillar 2 active after click:', p2Active);
  if (solutionEl) {
    await solutionEl.screenshot({ path: path.join(__dirname, '../pillar_02_verified.png') });
    console.log('Saved pillar_02_verified.png');
  }

  // 3. Click Tab 5 (CA Auditing)
  await page.click('#pillar-tab-5');
  await new Promise(r => setTimeout(r, 400));
  const p5Active = await page.evaluate(() => {
    const p5 = document.getElementById('pillar-panel-5');
    return p5 && p5.classList.contains('active');
  });
  console.log('Pillar 5 active after click:', p5Active);
  if (solutionEl) {
    await solutionEl.screenshot({ path: path.join(__dirname, '../pillar_05_verified.png') });
    console.log('Saved pillar_05_verified.png');
  }

  console.log('Total console errors:', errors.length);
  await browser.close();
})();
