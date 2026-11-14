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

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });

  // 1. Capture Charter Section
  const charter = await page.$('#charter-dossier');
  if (charter) {
    await page.evaluate(() => document.querySelector('#charter-dossier').scrollIntoView({ behavior: 'instant', block: 'center' }));
    await new Promise(r => setTimeout(r, 400));
    await charter.screenshot({ path: path.join(__dirname, '../editorial_charter.png') });
    console.log('Saved editorial_charter.png');
  }

  // 2. Capture Crisis Section
  const crisis = await page.$('#crisis');
  if (crisis) {
    await page.evaluate(() => document.querySelector('#crisis').scrollIntoView({ behavior: 'instant', block: 'center' }));
    await new Promise(r => setTimeout(r, 400));
    await crisis.screenshot({ path: path.join(__dirname, '../editorial_crisis.png') });
    console.log('Saved editorial_crisis.png');
  }

  // 3. Capture Operating Solution Section
  const solution = await page.$('#solution');
  if (solution) {
    await page.evaluate(() => document.querySelector('#solution').scrollIntoView({ behavior: 'instant', block: 'start' }));
    await new Promise(r => setTimeout(r, 400));
    await solution.screenshot({ path: path.join(__dirname, '../editorial_solution.png') });
    console.log('Saved editorial_solution.png');
  }

  // 4. Capture Impact Targets Section
  const impact = await page.$('#impact-targets');
  if (impact) {
    await page.evaluate(() => document.querySelector('#impact-targets').scrollIntoView({ behavior: 'instant', block: 'center' }));
    await new Promise(r => setTimeout(r, 400));
    await impact.screenshot({ path: path.join(__dirname, '../editorial_impact.png') });
    console.log('Saved editorial_impact.png');
  }

  // 5. Capture Roadmap Section
  const roadmap = await page.$('#roadmap');
  if (roadmap) {
    await page.evaluate(() => document.querySelector('#roadmap').scrollIntoView({ behavior: 'instant', block: 'center' }));
    await new Promise(r => setTimeout(r, 400));
    await roadmap.screenshot({ path: path.join(__dirname, '../editorial_roadmap.png') });
    console.log('Saved editorial_roadmap.png');
  }

  console.log('Total console errors:', errors.length);

  await browser.close();
})();
