const puppeteer = require('puppeteer-core');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: chromePath, headless: true, defaultViewport: { width: 1440, height: 900 } });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/impact.html', { waitUntil: 'networkidle0' });

  const sections = await page.$$eval('section', secs => secs.map((s, idx) => {
    const r = s.getBoundingClientRect();
    return {
      index: idx + 1,
      id: s.id || 'none',
      top: Math.round(r.top + window.scrollY),
      height: Math.round(r.height)
    };
  }));
  console.log('Sections:', sections);

  // Take screenshot of Section 5 directly by element
  const sec5 = (await page.$$('section'))[4]; // 0-indexed, so 4 is section 5
  if (sec5) {
    await sec5.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/impact_sec5_risk.png' });
    console.log('Saved impact_sec5_risk.png');
  }

  // Also take screenshot of Section 3 (Budget)
  const sec3 = (await page.$$('section'))[2];
  if (sec3) {
    await sec3.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/impact_sec3_budget.png' });
    console.log('Saved impact_sec3_budget.png');
  }

  // Also take screenshot of Section 4 (Slider)
  const sec4 = (await page.$$('section'))[3];
  if (sec4) {
    await sec4.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/impact_sec4_slider.png' });
    console.log('Saved impact_sec4_slider.png');
  }

  await browser.close();
})();
