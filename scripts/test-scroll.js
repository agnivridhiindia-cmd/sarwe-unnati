const puppeteer = require('puppeteer-core');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\SMD\\.gemini\\antigravity\\brain\\b5671c29-b653-472b-ad9d-285e6985554b';

async function testScrollCapture() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--window-size=1440,900']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  const urlProg = 'file:///' + path.resolve('programs.html').replace(/\\/g, '/');
  await page.goto(urlProg, { waitUntil: 'networkidle0' });

  // Scroll distribution strategy into view
  await page.evaluate(() => {
    const hdr = document.getElementById('site-header');
    if (hdr) hdr.style.display = 'none';
    const el = document.getElementById('distribution-strategy');
    el.scrollIntoView({ block: 'start' });
  });

  await new Promise(r => setTimeout(r, 1200));

  await page.screenshot({
    path: path.join(artifactDir, 'phase5_programs_distribution_viewport.png')
  });
  console.log('Saved phase5_programs_distribution_viewport.png');

  await browser.close();
}

testScrollCapture().catch(console.error);
