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

  const transparentLogoData = await page.evaluate(async (uri) => {
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

        const imgData = ctx.getImageData(0, 0, w, h);
        const data = imgData.data;

        // BFS flood fill from edges to make background transparent
        const visited = new Uint8Array(w * h);
        const queue = [];

        function isBg(idx) {
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          // Near black threshold (pure black is 0,0,0, jpeg artifacts might be up to ~18)
          return r < 20 && g < 20 && b < 20;
        }

        // Push border pixels
        for (let x = 0; x < w; x++) {
          // top row
          let idx = (0 * w + x) * 4;
          if (isBg(idx)) { queue.push(x, 0); visited[0 * w + x] = 1; }
          // bottom row
          idx = ((h - 1) * w + x) * 4;
          if (isBg(idx)) { queue.push(x, h - 1); visited[(h - 1) * w + x] = 1; }
        }
        for (let y = 0; y < h; y++) {
          // left col
          let idx = (y * w + 0) * 4;
          if (isBg(idx) && !visited[y * w + 0]) { queue.push(0, y); visited[y * w + 0] = 1; }
          // right col
          idx = (y * w + (w - 1)) * 4;
          if (isBg(idx) && !visited[y * w + (w - 1)]) { queue.push(w - 1, y); visited[y * w + (w - 1)] = 1; }
        }

        // BFS traversal
        let head = 0;
        const dx = [1, -1, 0, 0];
        const dy = [0, 0, 1, -1];

        while (head < queue.length) {
          const cx = queue[head++];
          const cy = queue[head++];
          const pIdx = (cy * w + cx) * 4;

          // Set transparent
          data[pIdx + 3] = 0;

          for (let d = 0; d < 4; d++) {
            const nx = cx + dx[d];
            const ny = cy + dy[d];
            if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
              const nCoord = ny * w + nx;
              if (!visited[nCoord]) {
                const nIdx = nCoord * 4;
                if (isBg(nIdx)) {
                  visited[nCoord] = 1;
                  queue.push(nx, ny);
                }
              }
            }
          }
        }

        ctx.putImageData(imgData, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.src = uri;
    });
  }, dataUri);

  fs.writeFileSync('assets/images/logo-transparent.png', transparentLogoData.replace(/^data:image\/png;base64,/, ''), 'base64');
  console.log('Saved assets/images/logo-transparent.png');

  await browser.close();
})();
