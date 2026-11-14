const puppeteer = require('puppeteer-core');
const fs = require('fs');

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 700 } });

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 40px; font-family: sans-serif; background: #E2E8F0; display: flex; gap: 40px; }
        .card { background: white; padding: 24px; border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); text-align: center; }
        .dark-card { background: #0F172A; padding: 24px; border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); text-align: center; color: white; }
        img { max-width: 280px; height: auto; border-radius: 8px; }
        .emblem-preview { width: 80px; height: 80px; border-radius: 50%; box-shadow: 0 2px 8px rgba(0,0,0,0.15); }
      </style>
    </head>
    <body>
      <div class="card">
        <h3>Full Logo (White Background)</h3>
        <img src="http://localhost:3000/assets/images/logo-white-bg.png" alt="Full Logo White">
      </div>
      <div class="card">
        <h3>Emblem on White Card</h3>
        <img src="http://localhost:3000/assets/images/logo-emblem-circle.png" class="emblem-preview" alt="Emblem Circle">
      </div>
      <div class="dark-card">
        <h3>Emblem on Dark Card (Footer / Header)</h3>
        <img src="http://localhost:3000/assets/images/logo-emblem-circle.png" class="emblem-preview" alt="Emblem Circle Dark">
      </div>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/logo_white_preview.png' });
  console.log('Saved logo_white_preview.png');

  await browser.close();
})();
