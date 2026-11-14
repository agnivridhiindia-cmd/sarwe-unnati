const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 800, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3000/index.html?t=' + Date.now(), { waitUntil: 'networkidle0' });

  // Get all computed backgrounds and layers inside .section-hero
  const layers = await page.evaluate(() => {
    const hero = document.querySelector('.section-hero');
    const computedHero = window.getComputedStyle(hero);
    const beforeHero = window.getComputedStyle(hero, '::before');
    const afterHero = window.getComputedStyle(hero, '::after');
    const videoWrapper = document.querySelector('.hero-bg-video-wrapper');
    const video = document.querySelector('.hero-video-element');
    const layout = document.querySelector('.hero-split-layout');

    return {
      heroBg: computedHero.background,
      heroMinHeight: computedHero.minHeight,
      heroHeight: computedHero.height,
      heroOverflow: computedHero.overflow,
      beforeBg: beforeHero.background,
      beforeWidth: beforeHero.width,
      beforeHeight: beforeHero.height,
      afterContent: afterHero.content,
      videoDisplay: video ? window.getComputedStyle(video).display : null,
      videoOpacity: video ? window.getComputedStyle(video).opacity : null,
      videoSrc: video ? video.currentSrc : null,
      layoutGrid: window.getComputedStyle(layout).gridTemplateColumns
    };
  });

  console.log('Hero computed layers:', layers);
  await browser.close();
})();
