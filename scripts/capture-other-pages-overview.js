const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const pages = ['about.html', 'programs.html', 'impact.html', 'donate.html', 'volunteer.html', 'contact.html'];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const pageName of pages) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1.5 });
    await page.goto(`http://localhost:3000/${pageName}?t=` + Date.now(), { waitUntil: 'networkidle0' });
    
    // Hide header for clean screenshot
    await page.evaluate(() => {
      const h = document.getElementById('site-header') || document.querySelector('.site-header');
      if (h) h.style.position = 'absolute';
    });
    
    const screenshotName = `current_${pageName.replace('.html', '')}.png`;
    await page.screenshot({ 
      path: `C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/${screenshotName}`,
      fullPage: false // capture the viewport (hero & upper content)
    });
    console.log(`Saved ${screenshotName}`);
    await page.close();
  }

  await browser.close();
})();
