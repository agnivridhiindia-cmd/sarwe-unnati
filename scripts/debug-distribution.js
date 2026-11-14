const puppeteer = require('puppeteer-core');
const path = require('path');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function check() {
  const browser = await puppeteer.launch({ executablePath: chromePath, headless: 'new' });
  const page = await browser.newPage();
  const url = 'file:///' + path.resolve('programs.html').replace(/\\/g, '/');
  await page.goto(url, { waitUntil: 'networkidle0' });

  const info = await page.evaluate(() => {
    const section = document.getElementById('distribution-strategy');
    const card = section.querySelector('.pipeline-card');
    const title = section.querySelector('.pipeline-title');
    const desc = section.querySelector('.pipeline-desc');
    const h2 = section.querySelector('h2');
    return {
      section: {
        opacity: window.getComputedStyle(section).opacity,
        color: window.getComputedStyle(section).color,
        bg: window.getComputedStyle(section).backgroundColor
      },
      h2: {
        color: window.getComputedStyle(h2).color,
        opacity: window.getComputedStyle(h2).opacity
      },
      card: {
        bg: window.getComputedStyle(card).backgroundColor,
        color: window.getComputedStyle(card).color,
        border: window.getComputedStyle(card).borderColor,
        opacity: window.getComputedStyle(card).opacity
      },
      title: {
        color: window.getComputedStyle(title).color,
        fontFamily: window.getComputedStyle(title).fontFamily,
        fontSize: window.getComputedStyle(title).fontSize
      },
      desc: {
        color: window.getComputedStyle(desc).color
      }
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
}

check();
