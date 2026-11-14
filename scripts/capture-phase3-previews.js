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
  const filePath = 'file:///' + path.resolve(__dirname, '../index.html').replace(/\\/g, '/');
  await page.goto(filePath, { waitUntil: 'load' });
  await new Promise(r => setTimeout(r, 600));

  // 1. Hero
  const hero = await page.$('#hero');
  if (hero) {
    await hero.screenshot({ path: path.resolve(__dirname, '../phase3_hero.png') });
    console.log('Saved phase3_hero.png');
  }

  // 2. Bento Components
  await page.evaluate(() => {
    const el = document.querySelector('.section-components');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 500));
  const bento = await page.$('.section-components');
  if (bento) {
    await bento.screenshot({ path: path.resolve(__dirname, '../phase3_bento.png') });
    console.log('Saved phase3_bento.png');
  }

  // 3. Thali Explorer
  await page.evaluate(() => {
    const el = document.querySelector('.section-thali');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 500));
  const thali = await page.$('.section-thali');
  if (thali) {
    await thali.screenshot({ path: path.resolve(__dirname, '../phase3_thali.png') });
    console.log('Saved phase3_thali.png');
  }

  // 4. Calculator
  await page.evaluate(() => {
    const el = document.querySelector('.section-calculator');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 500));
  const calc = await page.$('.section-calculator');
  if (calc) {
    await calc.screenshot({ path: path.resolve(__dirname, '../phase3_calculator.png') });
    console.log('Saved phase3_calculator.png');
  }

  // 5. Impact Targets
  await page.evaluate(() => {
    const el = document.querySelector('.section-impact-targets');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });
  await new Promise(r => setTimeout(r, 500));
  const impact = await page.$('.section-impact-targets');
  if (impact) {
    await impact.screenshot({ path: path.resolve(__dirname, '../phase3_impact.png') });
    console.log('Saved phase3_impact.png');
  }

  await browser.close();
})().catch(console.error);
