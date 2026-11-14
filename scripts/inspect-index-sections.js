const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Let's print out the structure and lines for key sections:
// 1. Hero
// 2. Transparency Card (section-9)
// 3. CSR Partnerships
// 4. Meal Calculator
// 5. Thali Explorer
// 6. Bank Wire

function getSection(pattern) {
  const match = indexHtml.match(new RegExp('<section[^>]*' + pattern + '[\\s\\S]*?<\\/section>', 'i'));
  return match ? match[0] : null;
}

console.log('--- Hero section snippet ---');
const hero = getSection('id="hero"');
if (hero) console.log(hero.slice(0, 1000));

console.log('--- CSR Partnerships snippet ---');
const csr = getSection('csr-partnerships');
if (csr) console.log(csr.slice(0, 1200));

console.log('--- Transparency snippet ---');
const trans = indexHtml.match(/<section[^>]*class="[^"]*transparency[^"]*"[\s\S]*?<\/section>/i) 
  || indexHtml.match(/<section[\s\S]*?transparency-banner-card[\s\S]*?<\/section>/i);
if (trans) console.log(trans[0].slice(0, 1200));
