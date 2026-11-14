const puppeteer = require('puppeteer-core');
const fs = require('fs');
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setContent(`
    <html>
      <body style="margin:0; background:#000;">
        <video id="v" src="http://localhost:3000/videos/hero-bg.mp4" muted autoplay></video>
        <canvas id="c"></canvas>
      </body>
    </html>
  `);

  await page.evaluate(async () => {
    const v = document.getElementById('v');
    await new Promise(r => {
      v.onloadeddata = r;
    });
    v.currentTime = 1;
    await new Promise(r => setTimeout(r, 500));
    const c = document.getElementById('c');
    c.width = v.videoWidth;
    c.height = v.videoHeight;
    const ctx = c.getContext('2d');
    ctx.drawImage(v, 0, 0);
  });

  const canvasEl = await page.$('#c');
  if (canvasEl) {
    await canvasEl.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/video_frame.png' });
    console.log('Saved video_frame.png');
  }

  await browser.close();
})();
