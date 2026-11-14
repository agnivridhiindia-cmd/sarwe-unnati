const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000';
const SCREENSHOT_DIR = path.join(__dirname, '..', 'audit_screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

const PAGES = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about.html' },
  { name: 'programs', path: '/programs.html' },
  { name: 'impact', path: '/impact.html' },
  { name: 'donate', path: '/donate.html' },
  { name: 'volunteer', path: '/volunteer.html' },
  { name: 'contact', path: '/contact.html' }
];

async function runAudit() {
  console.log('--- RUNNING AUDIT ---');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const report = {
    consoleErrors: [],
    failedRequests: [],
    overflowIssues: [],
    interactions: [],
    pageAudit: []
  };

  for (const pageInfo of PAGES) {
    const pageUrl = BASE_URL + pageInfo.path;
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    const pageErrors = [];
    const pageFailedReqs = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        pageErrors.push(msg.text());
        report.consoleErrors.push({ page: pageInfo.name, error: msg.text() });
      }
    });

    page.on('requestfailed', req => {
      pageFailedReqs.push({ url: req.url(), errorText: req.failure().errorText });
      report.failedRequests.push({ page: pageInfo.name, url: req.url(), errorText: req.failure().errorText });
    });

    try {
      const response = await page.goto(pageUrl, { waitUntil: 'networkidle2', timeout: 15000 });
      const status = response ? response.status() : 'NO_RESPONSE';

      // Capture desktop screenshot
      const desktopShotPath = path.join(SCREENSHOT_DIR, `${pageInfo.name}_desktop.png`);
      await page.screenshot({ path: desktopShotPath, fullPage: false });

      // Run interactions
      if (pageInfo.name === 'home') {
        const calcTested = await page.evaluate(() => {
          const slider = document.getElementById('meal-slider');
          const costDisplay = document.getElementById('calc-total-cost');
          if (slider && costDisplay) {
            const initialVal = costDisplay.textContent;
            slider.value = 150;
            slider.dispatchEvent(new Event('input', { bubbles: true }));
            const updatedVal = costDisplay.textContent;
            return { tested: true, initialVal, updatedVal, changed: initialVal !== updatedVal };
          }
          return { tested: false };
        });
        report.interactions.push({ page: pageInfo.name, component: 'meal-slider', result: calcTested });

        const thaliTested = await page.evaluate(() => {
          const buttons = document.querySelectorAll('.thali-nav-btn');
          const title = document.getElementById('thali-title');
          if (buttons.length > 0 && title) {
            const initialTitle = title.textContent;
            if (buttons[1]) {
              buttons[1].click();
              const newTitle = title.textContent;
              return { tested: true, buttonCount: buttons.length, initialTitle, newTitle, changed: initialTitle !== newTitle };
            }
          }
          return { tested: false };
        });
        report.interactions.push({ page: pageInfo.name, component: 'thali-nav', result: thaliTested });

        const faqTested = await page.evaluate(() => {
          const items = document.querySelectorAll('.faq-card-item');
          if (items.length > 1) {
            const btn2 = items[1].querySelector('.faq-trigger-btn');
            if (btn2) {
              btn2.click();
              return {
                tested: true,
                faqCount: items.length,
                item2Active: items[1].classList.contains('active')
              };
            }
          }
          return { tested: false };
        });
        report.interactions.push({ page: pageInfo.name, component: 'faq-accordion', result: faqTested });
      }

      if (pageInfo.name === 'impact') {
        const budgetTested = await page.evaluate(() => {
          const filterBtn = document.querySelector('.budget-tab-btn[data-filter="food-kitchen"]');
          const rows = document.querySelectorAll('table.budget-table tbody tr[data-category]');
          if (filterBtn && rows.length > 0) {
            const initialCount = Array.from(rows).filter(r => r.style.display !== 'none').length;
            filterBtn.click();
            const filteredCount = Array.from(rows).filter(r => r.style.display !== 'none').length;
            return { tested: true, initialCount, filteredCount, changed: initialCount !== filteredCount };
          }
          return { tested: false };
        });
        report.interactions.push({ page: pageInfo.name, component: 'budget-filter', result: budgetTested });
      }

      if (pageInfo.name === 'donate') {
        const donateCalc = await page.evaluate(() => {
          const slider = document.getElementById('meal-slider');
          const mealsEl = document.getElementById('calc-meals-count');
          if (slider && mealsEl) {
            const initialVal = mealsEl.textContent;
            slider.value = 54795;
            slider.dispatchEvent(new Event('input', { bubbles: true }));
            const updatedVal = mealsEl.textContent;
            return { tested: true, initialVal, updatedVal, changed: initialVal !== updatedVal };
          }
          return { tested: false };
        });
        report.interactions.push({ page: pageInfo.name, component: 'donate-meal-slider', result: donateCalc });

        const donateFaq = await page.evaluate(() => {
          const items = document.querySelectorAll('.faq-item');
          if (items.length > 0) {
            const btn = items[0].querySelector('.faq-question');
            if (btn) {
              btn.click();
              return { tested: true, itemActive: items[0].classList.contains('active') };
            }
          }
          return { tested: false };
        });
        report.interactions.push({ page: pageInfo.name, component: 'donate-faq', result: donateFaq });
      }

      // Test Mobile Viewport
      await page.setViewport({ width: 390, height: 844 });
      await new Promise(r => setTimeout(r, 400));

      const mobileAudit = await page.evaluate(() => {
        const docWidth = document.documentElement.clientWidth;
        const scrollWidth = document.documentElement.scrollWidth;
        const hasHorizontalScroll = scrollWidth > docWidth;

        return {
          hasHorizontalScroll,
          docWidth,
          scrollWidth
        };
      });

      if (mobileAudit.hasHorizontalScroll) {
        report.overflowIssues.push({ page: pageInfo.name, viewport: 'mobile', details: mobileAudit });
      }

      const mobileShotPath = path.join(SCREENSHOT_DIR, `${pageInfo.name}_mobile.png`);
      await page.screenshot({ path: mobileShotPath, fullPage: false });

      report.pageAudit.push({
        page: pageInfo.name,
        status,
        errors: pageErrors,
        failedReqs: pageFailedReqs,
        desktopOverflow: false,
        mobileOverflow: mobileAudit.hasHorizontalScroll
      });

    } catch (err) {
      report.pageAudit.push({ page: pageInfo.name, status: 'ERROR', error: err.message });
    } finally {
      await page.close();
    }
  }

  await browser.close();

  console.log('\n--- BROWSER AUDIT SUMMARY ---');
  console.log(JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(__dirname, '..', 'audit_report.json'), JSON.stringify(report, null, 2));
}

runAudit().catch(console.error);
