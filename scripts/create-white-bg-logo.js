const puppeteer = require('puppeteer-core');
const fs = require('fs');

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true
  });

  const page = await browser.newPage();
  const imgData = fs.readFileSync('assets/images/logo.jpg').toString('base64');
  const dataUri = `data:image/jpeg;base64,${imgData}`;

  const result = await page.evaluate(async (uri) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const w = img.naturalWidth;
        const h = img.naturalHeight;

        // 1. Create full logo on WHITE background
        const fullCanvas = document.createElement('canvas');
        fullCanvas.width = w;
        fullCanvas.height = h;
        const fctx = fullCanvas.getContext('2d');

        // Draw original
        fctx.drawImage(img, 0, 0);
        const fImgData = fctx.getImageData(0, 0, w, h);
        const fData = fImgData.data;

        // In the original, the background is black (#000000).
        // Let's identify the dark background and replace it with white (#FFFFFF).
        // For pixels where brightness is very low, we replace with white.
        // For pixels in the transition (e.g. anti-aliased edges and halo around the bowl),
        // we can invert the background luminance so black becomes white smoothly.
        for (let i = 0; i < fData.length; i += 4) {
          const r = fData[i];
          const g = fData[i + 1];
          const b = fData[i + 2];

          // Darkness metric (maximum component or luminance)
          const maxVal = Math.max(r, g, b);

          if (maxVal < 25) {
            // Pure background -> Solid pure white
            fData[i] = 255;
            fData[i + 1] = 255;
            fData[i + 2] = 255;
          } else if (maxVal < 65 && Math.abs(r - g) < 15 && Math.abs(g - b) < 15) {
            // Dark gray fringe / edge artifact -> blend towards white
            const alpha = (maxVal - 25) / 40;
            fData[i] = Math.round(255 * (1 - alpha) + r * alpha);
            fData[i + 1] = Math.round(255 * (1 - alpha) + g * alpha);
            fData[i + 2] = Math.round(255 * (1 - alpha) + b * alpha);
          }
        }
        fctx.putImageData(fImgData, 0, 0);

        // Enhance the tagline text at the bottom if needed
        // Tagline is around y = 840 to 920. In original it was dark green on black.
        // On white, dark green is great, but let's make sure it's crisp!

        const fullWhiteDataUrl = fullCanvas.toDataURL('image/png');

        // 2. Now create the circular emblem (top half) on a pristine white circular badge!
        // Emblem bounds: center around (512, 340), radius ~310
        const emblemCanvas = document.createElement('canvas');
        const radius = 320;
        const diameter = radius * 2;
        emblemCanvas.width = diameter;
        emblemCanvas.height = diameter;
        const ectx = emblemCanvas.getContext('2d');

        // Fill background with white
        ectx.fillStyle = '#FFFFFF';
        ectx.beginPath();
        ectx.arc(radius, radius, radius - 2, 0, Math.PI * 2);
        ectx.fill();

        // Circular clip
        ectx.save();
        ectx.beginPath();
        ectx.arc(radius, radius, radius - 2, 0, Math.PI * 2);
        ectx.closePath();
        ectx.clip();

        // Draw the white-bg full logo offset to center the emblem
        // Center of emblem in 1024x1024 is x=512, y=345
        const offsetX = radius - 512;
        const offsetY = radius - 345;
        ectx.drawImage(fullCanvas, offsetX, offsetY);
        ectx.restore();

        // Draw a subtle, premium ring around the circular emblem
        ectx.strokeStyle = 'rgba(226, 232, 240, 0.9)';
        ectx.lineWidth = 4;
        ectx.beginPath();
        ectx.arc(radius, radius, radius - 2, 0, Math.PI * 2);
        ectx.stroke();

        const emblemDataUrl = emblemCanvas.toDataURL('image/png');

        // 3. Create Favicon 64x64
        const favCanvas = document.createElement('canvas');
        favCanvas.width = 64;
        favCanvas.height = 64;
        const favCtx = favCanvas.getContext('2d');
        favCtx.drawImage(emblemCanvas, 0, 0, 64, 64);
        const favDataUrl = favCanvas.toDataURL('image/png');

        resolve({
          fullWhite: fullWhiteDataUrl,
          emblem: emblemDataUrl,
          favicon: favDataUrl
        });
      };
      img.src = uri;
    });
  }, dataUri);

  fs.writeFileSync('assets/images/logo-white-bg.png', result.fullWhite.replace(/^data:image\/png;base64,/, ''), 'base64');
  fs.writeFileSync('assets/images/logo-emblem-circle.png', result.emblem.replace(/^data:image\/png;base64,/, ''), 'base64');
  fs.writeFileSync('assets/images/favicon.png', result.favicon.replace(/^data:image\/png;base64,/, ''), 'base64');

  console.log('Successfully generated white background logo assets:');
  console.log('- assets/images/logo-white-bg.png');
  console.log('- assets/images/logo-emblem-circle.png');
  console.log('- assets/images/favicon.png');

  await browser.close();
})();
