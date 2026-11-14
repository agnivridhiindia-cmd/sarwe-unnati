const puppeteer = require('puppeteer-core');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\SMD\\.gemini\\antigravity\\brain\\b5671c29-b653-472b-ad9d-285e6985554b';

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--window-size=1440,900']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 2 });

  // 1. about.html Hero & Principles
  const aboutUrl = 'file:///' + path.resolve('about.html').replace(/\\/g, '/');
  await page.goto(aboutUrl, { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: path.join(artifactDir, 'phase6_about_hero.png'),
    clip: { x: 0, y: 0, width: 1440, height: 1000 }
  });
  console.log('Saved phase6_about_hero.png');

  // Scroll to 5 principles
  await page.evaluate(() => {
    const hdr = document.getElementById('site-header');
    if (hdr) hdr.style.display = 'none';
    const p = document.getElementById('principles');
    if (p) p.scrollIntoView({ block: 'start' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(artifactDir, 'phase6_about_principles.png')
  });
  console.log('Saved phase6_about_principles.png');

  // 2. volunteer.html Hero & Tracks
  const volunteerUrl = 'file:///' + path.resolve('volunteer.html').replace(/\\/g, '/');
  await page.goto(volunteerUrl, { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: path.join(artifactDir, 'phase6_volunteer_hero.png'),
    clip: { x: 0, y: 0, width: 1440, height: 1000 }
  });
  console.log('Saved phase6_volunteer_hero.png');

  // Scroll to tracks
  await page.evaluate(() => {
    const hdr = document.getElementById('site-header');
    if (hdr) hdr.style.display = 'none';
    const t = document.getElementById('tracks');
    if (t) t.scrollIntoView({ block: 'start' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(artifactDir, 'phase6_volunteer_tracks.png')
  });
  console.log('Saved phase6_volunteer_tracks.png');

  // 3. contact.html Hero & Dossier
  const contactUrl = 'file:///' + path.resolve('contact.html').replace(/\\/g, '/');
  await page.goto(contactUrl, { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: path.join(artifactDir, 'phase6_contact_hero.png'),
    clip: { x: 0, y: 0, width: 1440, height: 1000 }
  });
  console.log('Saved phase6_contact_hero.png');

  // Scroll to dossier
  await page.evaluate(() => {
    const hdr = document.getElementById('site-header');
    if (hdr) hdr.style.display = 'none';
    const s = document.getElementById('statutory-dossier');
    if (s) s.scrollIntoView({ block: 'start' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(artifactDir, 'phase6_contact_dossier.png')
  });
  console.log('Saved phase6_contact_dossier.png');

  await browser.close();
  console.log('All Phase 6 screenshots captured successfully!');
}

capture().catch(console.error);
