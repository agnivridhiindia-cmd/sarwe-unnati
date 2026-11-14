const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 850, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3000/index.html?t=' + Date.now(), { waitUntil: 'networkidle0' });

  // Capture hero viewport
  await page.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/hero_debug.png' });
  console.log('Saved hero_debug.png');

  // Also inspect computed styles of .section-hero, video, .hero-split-layout
  const info = await page.evaluate(() => {
    const hero = document.querySelector('.section-hero');
    const video = document.querySelector('.hero-video-element');
    const container = hero.querySelector('.container');
    const ribbon = hero.querySelector('.hero-metric-ribbon');
    const card = hero.querySelector('.hero-visual-card');

    return {
      windowHeight: window.innerHeight,
      heroHeight: hero.offsetHeight,
      heroScrollHeight: hero.scrollHeight,
      ribbonBottom: ribbon ? ribbon.getBoundingClientRect().bottom : null,
      cardBottom: card ? card.getBoundingClientRect().bottom : null,
      videoWidth: video ? video.offsetWidth : null,
      videoHeight: video ? video.offsetHeight : null,
      videoNaturalWidth: video ? video.videoWidth : null,
      videoNaturalHeight: video ? video.videoHeight : null
    };
  });

  console.log('Hero debug info:', info);

  await browser.close();
})();
