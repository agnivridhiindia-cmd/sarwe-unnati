const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/impact.html', { waitUntil: 'networkidle0' });

  const artifactDir = 'C:\\Users\\SMD\\.gemini\\antigravity\\brain\\b5671c29-b653-472b-ad9d-285e6985554b';

  // 1. Screenshot of the Budget Allocation Floating Cards Section
  const budgetSec = await page.$('#budget-allocation');
  if (budgetSec) {
    await budgetSec.screenshot({ path: path.join(artifactDir, 'impact_floating_budget_cards.png') });
    console.log('Saved impact_floating_budget_cards.png');
  }

  // 2. Screenshot of the Impact Measurement Slider Initial State
  const sliderSec = await page.$('#impact-measurement');
  if (sliderSec) {
    await sliderSec.screenshot({ path: path.join(artifactDir, 'impact_slider_initial.png') });
    console.log('Saved impact_slider_initial.png');
  }

  // 3. Test Slider Interaction - Click Next Arrow Button
  const nextBtn = await page.$('.slider-arrow-btn.next-btn');
  if (nextBtn) {
    await nextBtn.click();
    await new Promise(r => setTimeout(r, 600)); // wait for smooth scroll animation
    const counterText = await page.$eval('#impact-slider-counter', el => el.textContent);
    console.log('Counter text after click:', counterText);

    if (sliderSec) {
      await sliderSec.screenshot({ path: path.join(artifactDir, 'impact_slider_scrolled.png') });
      console.log('Saved impact_slider_scrolled.png');
    }
  }

  // 4. Test Budget Category Filter Tabs
  const logisticsTab = await page.$('.budget-tab-pill[data-filter="logistics"]');
  if (logisticsTab) {
    await logisticsTab.click();
    await new Promise(r => setTimeout(r, 200));
    const visibleCards = await page.$$eval('.budget-floating-card', cards => {
      return cards.filter(c => window.getComputedStyle(c).display !== 'none').length;
    });
    console.log('Visible cards with logistics filter:', visibleCards);

    // reset to all
    await page.$eval('.budget-tab-pill[data-filter="all"]', el => el.click());
  }

  // 5. Test Mobile 375px
  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://localhost:3000/impact.html', { waitUntil: 'networkidle0' });
  const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  console.log('Mobile 375px hasOverflow:', hasOverflow);

  await page.screenshot({ path: path.join(artifactDir, 'impact_page_mobile.png'), fullPage: true });
  console.log('Saved impact_page_mobile.png');

  console.log('Console Errors:', consoleErrors);

  await browser.close();
})();
