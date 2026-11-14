const puppeteer = require('puppeteer-core');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: chromePath, headless: true, defaultViewport: { width: 1440, height: 900 } });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/impact.html');
  const box = await page.$eval('#budget-allocation', el => {
    const r = el.getBoundingClientRect();
    return { top: r.top + window.scrollY, left: r.left, width: r.width, height: r.height };
  });
  console.log('budget box:', box);
  const cardsCount = await page.$$eval('#budget-allocation .budget-floating-card', cards => cards.length);
  console.log('cardsCount:', cardsCount);

  // Take a viewport screenshot scrolled directly to budget allocation
  await page.evaluate(() => {
    document.getElementById('budget-allocation').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/impact_budget_viewport.png' });
  console.log('Saved impact_budget_viewport.png');

  // Also scroll to impact slider
  await page.evaluate(() => {
    document.getElementById('impact-measurement').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/impact_slider_viewport.png' });
  console.log('Saved impact_slider_viewport.png');

  // Scroll to Unit Economics
  await page.evaluate(() => {
    document.querySelector('.open-economics-strip').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/impact_economics_viewport.png' });
  console.log('Saved impact_economics_viewport.png');

  await browser.close();
})();
