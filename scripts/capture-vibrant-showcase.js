const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });

  // 1. Index Hero
  await page.goto('http://localhost:3000/index.html?t=' + Date.now(), { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    const h = document.getElementById('main-header');
    if (h) h.style.display = 'none';
  });
  const heroEl = await page.$('#hero');
  if (heroEl) {
    await heroEl.screenshot({ path: 'vibrant_hero.png' });
    console.log('Saved vibrant_hero.png');
  }

  // 2. Index Header Preview (with nav)
  await page.evaluate(() => {
    const h = document.getElementById('main-header');
    if (h) h.style.display = 'block';
  });
  await page.screenshot({ path: 'vibrant_header_hero.png', clip: { x: 0, y: 0, width: 1280, height: 600 } });
  console.log('Saved vibrant_header_hero.png');

  // 3. Tax Calculator & Bento
  const calcEl = await page.$('#tax-calculator');
  if (calcEl) {
    await page.evaluate(() => {
      const h = document.getElementById('main-header');
      if (h) h.style.display = 'none';
      const c = document.getElementById('tax-calculator');
      if (c) c.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 600));
    await calcEl.screenshot({ path: 'vibrant_calculator.png' });
    console.log('Saved vibrant_calculator.png');
  }

  // 4. Donate Page CSR Tiers
  await page.goto('http://localhost:3000/donate.html?t=' + Date.now(), { waitUntil: 'networkidle0' });
  const csrEl = await page.$('#csr-tiers');
  if (csrEl) {
    await page.evaluate(() => {
      const h = document.getElementById('main-header');
      if (h) h.style.display = 'none';
      const c = document.getElementById('csr-tiers');
      if (c) c.scrollIntoView();
    });
    await new Promise(r => setTimeout(r, 600));
    await csrEl.screenshot({ path: 'vibrant_csr_tiers.png' });
    console.log('Saved vibrant_csr_tiers.png');
  }

  await browser.close();
  console.log('All vibrant captures complete!');
})();
