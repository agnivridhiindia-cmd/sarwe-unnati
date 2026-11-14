const puppeteer = require('puppeteer-core');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    defaultViewport: { width: 1440, height: 900 }
  });
  const page = await browser.newPage();

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));

  await page.goto('http://localhost:3000/impact.html', { waitUntil: 'networkidle0' });

  const artifactDir = 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b';

  // 1. Hero Screenshot (Verify it's untouched dark)
  const hero = await page.$('#hero-section');
  if (hero) {
    await hero.screenshot({ path: path.join(artifactDir, 'impact_hero_untouched.png') });
    console.log('Saved impact_hero_untouched.png');
  }

  // 2. Unit Economics (Slide 14)
  const economics = await page.$('section:nth-of-type(2)');
  if (economics) {
    await economics.screenshot({ path: path.join(artifactDir, 'impact_unit_economics_light.png') });
    console.log('Saved impact_unit_economics_light.png');
  }

  // 3. Budget Allocation (Slide 13)
  const budget = await page.$('#budget-allocation');
  if (budget) {
    await budget.screenshot({ path: path.join(artifactDir, 'impact_budget_allocation_light.png') });
    console.log('Saved impact_budget_allocation_light.png');
  }

  // 4. Impact Measurement Slider (Slide 12)
  const measurement = await page.$('#impact-measurement');
  if (measurement) {
    await measurement.screenshot({ path: path.join(artifactDir, 'impact_slider_light.png') });
    console.log('Saved impact_slider_light.png');
  }

  // 5. Risk Assessment (Slide 19)
  const risk = await page.$('section:nth-of-type(5)');
  if (risk) {
    await risk.screenshot({ path: path.join(artifactDir, 'impact_risk_light.png') });
    console.log('Saved impact_risk_light.png');
  }

  // 6. Full Desktop View
  await page.screenshot({ path: path.join(artifactDir, 'impact_page_desktop_full.png'), fullPage: true });
  console.log('Saved impact_page_desktop_full.png');

  // 7. Mobile View Audit (375px)
  await page.setViewport({ width: 375, height: 667 });
  await page.goto('http://localhost:3000/impact.html', { waitUntil: 'networkidle0' });

  const overflow = await page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth;
    const scrollWidth = document.documentElement.scrollWidth;
    return { docWidth, scrollWidth, hasOverflow: scrollWidth > docWidth };
  });

  await page.screenshot({ path: path.join(artifactDir, 'impact_page_mobile_375p.png'), fullPage: true });
  console.log('Saved impact_page_mobile_375p.png');

  console.log('AUDIT RESULTS:');
  console.log('Errors count:', errors.length, errors);
  console.log('Mobile overflow:', overflow);

  await browser.close();
})();
