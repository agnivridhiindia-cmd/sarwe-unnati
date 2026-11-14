const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function testThaliLoop() {
  console.log('Testing Thali automatic loop...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  // Scroll to thali section
  await page.evaluate(() => {
    const el = document.querySelector('.section-thali');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  });

  // Step 1: Initial state
  const title1 = await page.evaluate(() => document.getElementById('thali-title').textContent.trim());
  const active1 = await page.evaluate(() => document.querySelector('.thali-nav-btn.active').dataset.thali);
  console.log(`Initial: Tab = ${active1} | Title = "${title1}"`);

  // Step 2: Wait 1400ms for loop transition
  await new Promise(r => setTimeout(r, 1400));
  const title2 = await page.evaluate(() => document.getElementById('thali-title').textContent.trim());
  const active2 = await page.evaluate(() => document.querySelector('.thali-nav-btn.active').dataset.thali);
  console.log(`After 1.4s: Tab = ${active2} | Title = "${title2}"`);

  // Step 3: Wait another 1400ms for loop transition
  await new Promise(r => setTimeout(r, 1400));
  const title3 = await page.evaluate(() => document.getElementById('thali-title').textContent.trim());
  const active3 = await page.evaluate(() => document.querySelector('.thali-nav-btn.active').dataset.thali);
  console.log(`After 2.8s: Tab = ${active3} | Title = "${title3}"`);

  // Capture screenshot of the active loop
  const thaliSection = await page.$('.section-thali');
  if (thaliSection) {
    await thaliSection.screenshot({ path: path.join(__dirname, '../thali_loop_verified.png') });
    console.log('Saved thali_loop_verified.png successfully!');
  }

  const loopWorking = (active1 !== active2) && (active2 !== active3);
  console.log('Loop verification status:', loopWorking ? 'PASS (Looping continuously!)' : 'FAIL');

  await browser.close();
}

testThaliLoop().catch(console.error);
