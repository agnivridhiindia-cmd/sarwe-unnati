const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const pages = [
  { name: 'about', file: 'about.html', selector: '#principles' },
  { name: 'about_gov', file: 'about.html', selector: '#governance' },
  { name: 'programs', file: 'programs.html', selector: '#beneficiaries' },
  { name: 'programs_timeline', file: 'programs.html', selector: '#distribution-strategy' },
  { name: 'impact', file: 'impact.html', selector: '.open-economics-strip' },
  { name: 'volunteer', file: 'volunteer.html', selector: '#tracks' },
  { name: 'contact', file: 'contact.html', selector: '#statutory-dossier' },
  { name: 'donate', file: 'donate.html', selector: '#csr-tiers' }
];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const item of pages) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });
    await page.goto(`http://localhost:3000/${item.file}?t=` + Date.now(), { waitUntil: 'networkidle0' });

    await page.evaluate(() => {
      const h = document.getElementById('site-header') || document.querySelector('.site-header');
      if (h) h.style.display = 'none';
    });

    const el = await page.$(item.selector);
    if (el) {
      await page.evaluate(sel => {
        const target = document.querySelector(sel);
        if (target) target.scrollIntoView({ block: 'start' });
      }, item.selector);
      await new Promise(r => setTimeout(r, 500));

      const outPath = `C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/modern_${item.name}.png`;
      await el.screenshot({ path: outPath });
      console.log(`Saved modern_${item.name}.png`);
    } else {
      console.log(`Selector ${item.selector} not found on ${item.file}`);
    }
    await page.close();
  }

  await browser.close();
  console.log('All modernization screenshots captured!');
})();
