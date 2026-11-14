const puppeteer = require('puppeteer-core');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: chromePath, headless: true, defaultViewport: { width: 1440, height: 900 } });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/impact.html');

  // Scroll to Risk protocols (Section 5)
  await page.evaluate(() => {
    document.querySelector('.risk-matrix-grid').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/impact_risk_viewport.png' });
  console.log('Saved impact_risk_viewport.png');

  // Scroll to CTA Section (Section 6)
  await page.evaluate(() => {
    const sections = document.querySelectorAll('section');
    sections[sections.length - 1].scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/impact_cta_viewport.png' });
  console.log('Saved impact_cta_viewport.png');

  await browser.close();
})();
