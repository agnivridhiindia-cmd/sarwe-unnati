const fs = require('fs');

const js = fs.readFileSync('js/main.js', 'utf8');
console.log('--- JS stats ---');
console.log('Length:', js.length, 'bytes');

const functions = js.match(/function\s+([a-zA-Z0-9_]+)/g);
console.log('Functions:', functions);

const thaliIdx = js.indexOf('thali');
if (thaliIdx !== -1) {
  console.log('\n--- Thali excerpt ---');
  console.log(js.slice(thaliIdx - 50, thaliIdx + 500));
}
