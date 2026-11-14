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
  const imgData = fs.readFileSync('assets/images/logo.jpg').toString('base64');
  const dataUri = `data:image/jpeg;base64,${imgData}`;

  const bbox = await page.evaluate(async (uri) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const data = ctx.getImageData(0, 0, w, h).data;
        // Find top, bottom, left, right of the emblem (top half of image, above typography "SARWE UNNATI")
        // Typography starts around y = 650
        let minX = w, maxX = 0, minY = h, maxY = 0;
        for (let y = 0; y < 650; y++) {
          for (let x = 0; x < w; x++) {
            const idx = (y * w + x) * 4;
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];
            // If pixel is not black
            if (r > 30 || g > 30 || b > 30) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }
        resolve({ minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY, centerX: (minX + maxX)/2, centerY: (minY + maxY)/2 });
      };
      img.src = uri;
    });
  }, dataUri);

  console.log('Emblem Bounding Box:', bbox);

  // Now create the EXACT pixel-perfect circular emblem crop!
  // Center is (bbox.centerX, bbox.centerY), radius is max(bbox.width, bbox.height)/2 + a small padding
  const exactEmblem = await page.evaluate(async (uri, box) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const radius = Math.ceil(Math.max(box.width, box.height) / 2) + 12;
        const diameter = radius * 2;
        const canvas = document.createElement('canvas');
        canvas.width = diameter;
        canvas.height = diameter;
        const ctx = canvas.getContext('2d');

        // Circular clipping
        ctx.beginPath();
        ctx.arc(radius, radius, radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        // Draw image offset
        const dx = radius - box.centerX;
        const dy = radius - box.centerY;
        ctx.drawImage(img, dx, dy);

        resolve(canvas.toDataURL('image/png'));
      };
      img.src = uri;
    });
  }, dataUri, bbox);

  fs.writeFileSync('assets/images/logo-emblem-circle.png', exactEmblem.replace(/^data:image\/png;base64,/, ''), 'base64');
  console.log('Saved pixel-perfect assets/images/logo-emblem-circle.png');

  // Favicon (64x64) from exact emblem
  const favicon = await page.evaluate(async (uri, box) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(32, 32, 32, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        const radius = Math.ceil(Math.max(box.width, box.height) / 2) + 12;
        const diameter = radius * 2;
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = diameter;
        tempCanvas.height = diameter;
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.drawImage(img, radius - box.centerX, radius - box.centerY);

        ctx.drawImage(tempCanvas, 0, 0, diameter, diameter, 0, 0, 64, 64);
        resolve(canvas.toDataURL('image/png'));
      };
      img.src = uri;
    });
  }, dataUri, bbox);

  fs.writeFileSync('assets/images/favicon.png', favicon.replace(/^data:image\/png;base64,/, ''), 'base64');
  console.log('Saved pixel-perfect assets/images/favicon.png');

  await browser.close();
})();
