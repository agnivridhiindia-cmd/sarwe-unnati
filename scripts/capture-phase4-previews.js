const puppeteer = require('puppeteer-core');
const path = require('path');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const filePath = 'file:///' + path.resolve(__dirname, '../donate.html').replace(/\\/g, '/');
  await page.goto(filePath, { waitUntil: 'load' });
  await new Promise(r => setTimeout(r, 600));

  // 1. Hero
  const hero = await page.$('#hero-section');
  if (hero) {
    await hero.screenshot({ path: path.resolve(__dirname, '../phase4_donate_hero.png') });
    console.log('Saved phase4_donate_hero.png');
  }

  // 2. CSR Tiers
  await page.evaluate(() => {
    const el = document.querySelector('#csr-tiers');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 600));
  const tiers = await page.$('#csr-tiers');
  if (tiers) {
    await tiers.screenshot({ path: path.resolve(__dirname, '../phase4_csr_tiers.png') });
    console.log('Saved phase4_csr_tiers.png');
  }

  // 3. Calculator
  await page.evaluate(() => {
    const el = document.querySelector('#calculator');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 600));
  const calc = await page.$('#calculator');
  if (calc) {
    await calc.screenshot({ path: path.resolve(__dirname, '../phase4_calculator.png') });
    console.log('Saved phase4_calculator.png');
  }

  // 4. Bank Wire
  await page.evaluate(() => {
    const el = document.querySelector('#bank-wire');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 600));
  const wire = await page.$('#bank-wire');
  if (wire) {
    await wire.screenshot({ path: path.resolve(__dirname, '../phase4_bank_wire.png') });
    console.log('Saved phase4_bank_wire.png');
  }

  await browser.close();
})().catch(console.error);
