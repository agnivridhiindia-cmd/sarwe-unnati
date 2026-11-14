const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function testCardMotion() {
  console.log('Testing card motion and effects...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  // Test 1: Check if .has-border-beam cards exist
  const beamCount = await page.evaluate(() => {
    return document.querySelectorAll('.has-border-beam').length;
  });
  console.log('Cards with animated border beams:', beamCount);

  // Test 2: Check tilt cards count and glare overlays
  const tiltCardCount = await page.evaluate(() => {
    return document.querySelectorAll('.tilt-card').length;
  });
  console.log('Cards with 3D tilt & physics:', tiltCardCount);

  // Test 3: Simulate mouse move over a bento card to verify tilt transform & glare
  const bentoCardHandle = await page.$('.bento-card');
  if (bentoCardHandle) {
    const box = await bentoCardHandle.boundingBox();
    // Hover at offset (top right)
    await page.mouse.move(box.x + box.width * 0.8, box.y + box.height * 0.2);
    await new Promise(r => setTimeout(r, 200));

    const tiltResult = await page.evaluate((el) => {
      return {
        transform: el.style.transform,
        mouseX: el.style.getPropertyValue('--mouse-x'),
        mouseY: el.style.getPropertyValue('--mouse-y'),
        hasGlare: !!el.querySelector('.card-glare-overlay'),
        hasShimmer: !!el.querySelector('.shimmer-sweep-layer')
      };
    }, bentoCardHandle);

    console.log('Bento Card Hover Physics Result:', tiltResult);

    // Take screenshot during hover
    await bentoCardHandle.screenshot({ path: path.join(__dirname, '../card_hover_tilt_preview.png') });
    console.log('Saved card_hover_tilt_preview.png successfully!');
  }

  // Test 4: Capture CSR featured tier with border beam
  const csrTierFeatured = await page.$('.csr-card.featured-tier');
  if (csrTierFeatured) {
    const box = await csrTierFeatured.boundingBox();
    await page.mouse.move(box.x + box.width * 0.5, box.y + box.height * 0.5);
    await new Promise(r => setTimeout(r, 200));

    await csrTierFeatured.screenshot({ path: path.join(__dirname, '../csr_featured_border_beam.png') });
    console.log('Saved csr_featured_border_beam.png successfully!');
  }

  await browser.close();
}

testCardMotion().catch(console.error);
