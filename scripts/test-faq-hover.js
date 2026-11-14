const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000/index.html?t=' + Date.now(), { waitUntil: 'networkidle0' });

  // 1. Scroll FAQ into view
  await page.evaluate(() => {
    const h = document.getElementById('main-header');
    if (h) h.style.display = 'none';
    const faq = document.getElementById('faq');
    if (faq) faq.scrollIntoView({ block: 'start' });
  });
  await new Promise(r => setTimeout(r, 600));

  // Check initial state: none should be active
  const initialActive = await page.$$eval('.faq-card-item.active', els => els.length);
  console.log('Initial active FAQ items count:', initialActive);

  const faqSection = await page.$('#faq');
  if (faqSection) {
    await faqSection.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/faq_starting_all_closed.png' });
    console.log('Saved faq_starting_all_closed.png');
  }

  // 2. Hover over Item 1
  const items = await page.$$('.faq-card-item');
  if (items.length >= 2) {
    console.log('Hovering over FAQ Item 1...');
    await items[0].hover();
    await new Promise(r => setTimeout(r, 500));

    const item1Height = await page.evaluate(el => el.querySelector('.faq-content-drawer').offsetHeight, items[0]);
    console.log('FAQ Item 1 open content height:', item1Height);

    if (faqSection) {
      await faqSection.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/faq_hover_item1.png' });
      console.log('Saved faq_hover_item1.png');
    }

    // 3. Hover over Item 2
    console.log('Hovering over FAQ Item 2...');
    await items[1].hover();
    await new Promise(r => setTimeout(r, 500));

    const item2Height = await page.evaluate(el => el.querySelector('.faq-content-drawer').offsetHeight, items[1]);
    console.log('FAQ Item 2 open content height:', item2Height);

    if (faqSection) {
      await faqSection.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/faq_hover_item2.png' });
      console.log('Saved faq_hover_item2.png');
    }

    // 4. Move mouse away to body
    console.log('Moving mouse away from FAQ...');
    await page.mouse.move(10, 10);
    await page.evaluate(() => {
      const box = document.querySelector('.faq-wrap-box');
      if (box) box.dispatchEvent(new MouseEvent('mouseleave'));
    });
    await new Promise(r => setTimeout(r, 500));

    const afterOutActive = await page.$$eval('.faq-card-item.active', els => els.length);
    console.log('Active count after hover out:', afterOutActive);

    if (faqSection) {
      await faqSection.screenshot({ path: 'C:/Users/SMD/.gemini/antigravity/brain/b5671c29-b653-472b-ad9d-285e6985554b/faq_after_hover_out.png' });
      console.log('Saved faq_after_hover_out.png');
    }
  }

  await browser.close();
  console.log('FAQ hover tests completed successfully!');
})();
