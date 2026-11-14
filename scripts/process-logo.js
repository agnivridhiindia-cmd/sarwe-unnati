const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Load logo.jpg into page
  const imgPath = path.resolve('assets/images/logo.jpg').replace(/\\/g, '/');
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <body style="margin: 0; background: transparent;">
        <canvas id="c"></canvas>
      </body>
    </html>
  `);

  const imgData = fs.readFileSync('assets/images/logo.jpg').toString('base64');
  const mime = 'image/jpeg';
  const dataUri = `data:${mime};base64,${imgData}`;

  const dimensions = await page.evaluate(async (uri) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.naturalWidth, height: img.naturalHeight });
      };
      img.src = uri;
    });
  }, dataUri);

  console.log('Image dimensions:', dimensions);

  // Generate:
  // 1. Full logo png (transparent background if possible, or clean high-res)
  // 2. Emblem only (the upper circle with hand, volunteer, elder, and leaf)
  // Let's analyze coordinates of emblem vs typography
  // Emblem occupies roughly top 0 to 68% of the height, centered horizontally
  const emblemData = await page.evaluate(async (uri, dims) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        // Create emblem canvas
        const canvas = document.createElement('canvas');
        // The emblem is roughly in the top 70% of the image
        // Let's crop the circle: center is roughly (dims.width/2, dims.height * 0.38)
        const size = Math.round(dims.width * 0.82);
        const sx = Math.round((dims.width - size) / 2);
        const sy = Math.round(dims.height * 0.08);
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, sx, sy, size, size, 0, 0, size, size);
        resolve({
          emblemUri: canvas.toDataURL('image/png'),
          size,
          sx,
          sy
        });
      };
      img.src = uri;
    });
  }, dataUri, dimensions);

  // Save emblem
  const base64Emblem = emblemData.emblemUri.replace(/^data:image\/png;base64,/, '');
  fs.writeFileSync('assets/images/logo-emblem.png', base64Emblem, 'base64');
  console.log('Saved assets/images/logo-emblem.png');

  // Also create a circular rounded version with transparent corners
  const circleEmblemData = await page.evaluate(async (uri, dims) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const size = Math.round(dims.width * 0.82);
        const sx = Math.round((dims.width - size) / 2);
        const sy = Math.round(dims.height * 0.08);
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        
        // Circular clip
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        
        ctx.drawImage(img, sx, sy, size, size, 0, 0, size, size);
        resolve(canvas.toDataURL('image/png'));
      };
      img.src = uri;
    });
  }, dataUri, dimensions);

  const base64Circle = circleEmblemData.replace(/^data:image\/png;base64,/, '');
  fs.writeFileSync('assets/images/logo-emblem-circle.png', base64Circle, 'base64');
  console.log('Saved assets/images/logo-emblem-circle.png');

  // Also create favicon.png (64x64)
  const faviconData = await page.evaluate(async (uri, dims) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        const size = Math.round(dims.width * 0.82);
        const sx = Math.round((dims.width - size) / 2);
        const sy = Math.round(dims.height * 0.08);
        
        ctx.beginPath();
        ctx.arc(32, 32, 32, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        
        ctx.drawImage(img, sx, sy, size, size, 0, 0, 64, 64);
        resolve(canvas.toDataURL('image/png'));
      };
      img.src = uri;
    });
  }, dataUri, dimensions);

  fs.writeFileSync('assets/images/favicon.png', faviconData.replace(/^data:image\/png;base64,/, ''), 'base64');
  console.log('Saved assets/images/favicon.png');

  await browser.close();
  console.log('All logo variants generated successfully!');
})();
